import assert from "node:assert/strict";
import { inspect } from "node:util";
import { test } from "node:test";
import {
  Client,
  ClientCredentials,
  StaticToken,
  Config,
  ApiError,
  AuthenticationError,
  AmbiguousReferenceError,
  ProtocolError,
  RequestAbortedError,
  RequestTimeoutError,
  TransportError,
} from "../dist/esm/index.js";
import { encodeQuery } from "../dist/esm/transport.js";

const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
const base = {
  accessToken: "token",
  region: "sa-saopaulo-1",
  accountId: "account",
  readEnvironment: false,
  sleep: async () => {},
  random: () => 0.5,
};
const client = (fetch, options = {}) =>
  new Client({ ...base, fetch, ...options });

test("generated operations preserve path escaping, false, zero, envelopes and headers", async () => {
  const calls = [];
  const c = client(async (url, init) => {
    calls.push({ url, ...init });
    return json({ instance: { id: "i" } }, 200, { "x-request-id": "r" });
  });
  const result = await c.compute.getInstance("a/b ?#", {
    accountId: "other",
    headers: { "X-Test": "yes" },
  });
  assert.equal(
    calls[0].url,
    "https://compute.sa-saopaulo-1.basaltic.sh/v1/instances/a%2Fb%20%3F%23",
  );
  assert.equal(calls[0].headers.get("Authorization"), "Bearer token");
  assert.equal(calls[0].headers.get("X-Account-Id"), "other");
  assert.equal(calls[0].redirect, "error");
  assert.equal(calls[0].credentials, "omit");
  assert.deepEqual(result.data, { instance: { id: "i" } });
  assert.equal(result.requestId, "r");
  assert.equal(result.statusCode, 200);
  await c.compute.updateInstanceVolumeAttachment("i", "v", {
    delete_on_termination: false,
  });
  assert.equal(calls[1].body, '{"delete_on_termination":false}');
  await c.compute.getConsoleOutput("i", { max_bytes: 0 });
  assert.match(calls[2].url, /max_bytes=0$/);
  assert.equal(
    encodeQuery({
      a: false,
      b: 0,
      c: "",
      d: null,
      e: undefined,
      t: ["a b", "c"],
    }),
    "a=false&b=0&c=&t=a%20b&t=c",
  );
  assert.equal(
    encodeQuery(
      { a: ["x", "y"] },
      { a: { style: "pipeDelimited", explode: false } },
    ),
    "a=x%7Cy",
  );
});

test("validation happens before transport and managed credentials cannot be overridden", async () => {
  const c = client(async () => {
    throw new Error("must not fetch");
  });
  for (const id of ["", ".", ".."])
    await assert.rejects(c.compute.getInstance(id), /path parameter/);
  await assert.rejects(c.compute.createInstance(undefined), /body is required/);
  await assert.rejects(
    c.storage.deleteBucketLifecycle("bucket", {}),
    /If-Match/,
  );
  await assert.rejects(
    c.compute.getInstance("i", { headers: { Authorization: "leak" } }),
    /managed header/,
  );
  assert.throws(() => new Config({ ...base, maxAttempts: 0 }), /maxAttempts/);
  assert.throws(
    () => new Config({ ...base, domain: "evil.test/path" }),
    /domain/,
  );
  assert.throws(() => new StaticToken("bad\r\ntoken"), /token/i);
  await assert.rejects(
    client(async () => json({}), {
      endpoints: { compute: "https://user:password@example.test" },
    }).compute.getInstance("i"),
    /URL/,
  );
  await assert.rejects(
    client(async () => json({}), { anonymous: true }).compute.getInstance("i"),
    /Anonymous/,
  );
});

test("explicit credentials override environment bearer token; custom regional endpoints keep base paths", async () => {
  const previous = process.env.BASALTIC_ACCESS_TOKEN;
  process.env.BASALTIC_ACCESS_TOKEN = "ambient";
  try {
    const conf = new Config({ accessKeyId: "key", secretAccessKey: "secret" });
    assert.ok(conf.tokenProvider instanceof ClientCredentials);
  } finally {
    if (previous === undefined) delete process.env.BASALTIC_ACCESS_TOKEN;
    else process.env.BASALTIC_ACCESS_TOKEN = previous;
  }
  let observed;
  await client(
    async (u) => {
      observed = u;
      return json({ instance: {} });
    },
    { region: "", endpoints: { compute: "http://localhost:8080/proxy/" } },
  ).compute.getInstance("i");
  assert.equal(observed, "http://localhost:8080/proxy/v1/instances/i");
});

test("OAuth uses Basic form authentication, caches and refreshes with single-flight concurrency", async () => {
  let now = 0,
    calls = 0;
  const p = new ClientCredentials({
    accessKeyId: "key",
    secretAccessKey: "sëcret",
    tokenUrl: "https://iam.example.test/v1/oauth/token",
    clock: () => now,
    fetch: async (url, init) => {
      calls++;
      assert.equal(
        init.headers.Authorization,
        "Basic " + Buffer.from("key:sëcret").toString("base64"),
      );
      assert.equal(init.body, "grant_type=client_credentials");
      assert.equal(init.redirect, "error");
      return json({
        access_token: "token" + calls,
        token_type: "Bearer",
        expires_in: 100,
      });
    },
  });
  assert.deepEqual(
    await Promise.all([p.getToken(), p.getToken(), p.getToken()]),
    ["token1", "token1", "token1"],
  );
  now = 89999;
  assert.equal(await p.getToken(), "token1");
  now = 90000;
  assert.equal(await p.getToken(), "token2");
  p.invalidate("token1");
  assert.equal(await p.getToken(), "token2");
  p.invalidate("token2");
  assert.equal(await p.getToken(), "token3");
  assert.equal(calls, 3);
  assert.doesNotMatch(inspect(p), /sëcret|token3/);
});

test("cancelling one caller does not abort a shared OAuth exchange", async () => {
  let finish;
  const p = new ClientCredentials({
    accessKeyId: "k",
    secretAccessKey: "s",
    tokenUrl: "https://iam.example.test/token",
    fetch: () =>
      new Promise((r) => {
        finish = r;
      }),
  });
  const abort = new AbortController();
  const cancelled = p.getToken(abort.signal);
  const other = p.getToken();
  abort.abort();
  await assert.rejects(cancelled, RequestAbortedError);
  finish(json({ access_token: "shared", expires_in: 600 }));
  assert.equal(await other, "shared");
});

test("OAuth and transport errors do not retain credentials, raw response bodies, or fetch causes", async () => {
  const p = new ClientCredentials({
    accessKeyId: "k",
    secretAccessKey: "secret",
    tokenUrl: "https://iam.example.test/token",
    fetch: async () =>
      json({ error: "invalid_client", error_description: "secret" }, 401),
  });
  await assert.rejects(
    p.getToken(),
    (e) => e instanceof AuthenticationError && !inspect(e).includes("secret"),
  );
  await assert.rejects(
    client(
      async () => {
        throw new Error("Authorization Bearer secret");
      },
      { maxAttempts: 1 },
    ).compute.getInstance("i"),
    (e) => e instanceof TransportError && !inspect(e).includes("secret"),
  );
  await assert.rejects(
    client(
      async () => new Response("secret", { status: 400 }),
    ).compute.getInstance("i"),
    (e) => e instanceof ApiError && !inspect(e).includes("secret"),
  );
});

test("a 401 refreshes a refreshable token once and static tokens are not replayed", async () => {
  let token = "old",
    calls = 0,
    refreshes = 0;
  const c = client(
    async (u, init) => {
      calls++;
      return init.headers.get("Authorization") === "Bearer old"
        ? json({}, 401)
        : json({ instance: {} });
    },
    {
      tokenProvider: {
        getToken: () => token,
        invalidate: () => {
          token = "new";
          refreshes++;
        },
      },
    },
  );
  await c.compute.getInstance("i");
  assert.equal(calls, 2);
  assert.equal(refreshes, 1);
  calls = 0;
  await assert.rejects(
    client(async () => {
      calls++;
      return json({}, 401);
    }).compute.getInstance("i"),
    ApiError,
  );
  assert.equal(calls, 1);
});

test("GET retries use jitter and Retry-After; excessive delays do not retry early", async () => {
  const delays = [];
  let calls = 0;
  await client(
    async () => (++calls === 1 ? json({}, 503) : json({ instance: {} })),
    { sleep: async (ms) => delays.push(ms) },
  ).compute.getInstance("i");
  assert.deepEqual(delays, [100]);
  calls = 0;
  delays.length = 0;
  await client(
    async () =>
      ++calls === 1
        ? json({}, 429, { "Retry-After": "2" })
        : json({ instance: {} }),
    { sleep: async (ms) => delays.push(ms) },
  ).compute.getInstance("i");
  assert.deepEqual(delays, [2000]);
  for (const value of ["10000", "9".repeat(400)]) {
    calls = 0;
    await assert.rejects(
      client(async () => {
        calls++;
        return json({}, 429, { "Retry-After": value });
      }).compute.getInstance("i"),
      (e) => e.isRateLimited(),
    );
    assert.equal(calls, 1);
  }
});

test("POST retries require an idempotency key and preserve identical bytes and key", async () => {
  let calls = 0;
  const body = { name: "vm", flavor: "f", networks: [], metadata: {} };
  await assert.rejects(
    client(async () => {
      calls++;
      return json({}, 503);
    }).compute.createInstance(body),
    ApiError,
  );
  assert.equal(calls, 1);
  calls = 0;
  await client(async (u, init) => {
    calls++;
    assert.equal(init.headers.get("Idempotency-Key"), "logical-mutation");
    assert.equal(init.body, JSON.stringify(body));
    return calls === 1 ? json({}, 503) : json({ instance: {} }, 201);
  }).compute.createInstance(body, { idempotencyKey: "logical-mutation" });
  assert.equal(calls, 2);
});

test("streamed uploads are never replayed, while binary downloads preserve bytes and status", async () => {
  let calls = 0;
  const stream = new ReadableStream({
    start(c) {
      c.enqueue(new Uint8Array([0, 1, 255]));
      c.close();
    },
  });
  await assert.rejects(
    client(async (u, init) => {
      calls++;
      assert.equal(init.body, stream);
      assert.equal(init.duplex, "half");
      return json({}, 503);
    }).storage.putObject("bucket", "a/b", stream, { idempotencyKey: "id" }),
    ApiError,
  );
  assert.equal(calls, 1);
  const r = await client(
    async () =>
      new Response(new Uint8Array([0, 1, 255]), {
        status: 206,
        headers: { "Content-Range": "bytes 0-2/9" },
      }),
  ).storage.getObject("bucket", "a/b");
  assert.equal(r.status, 206);
  assert.deepEqual(
    new Uint8Array(await r.arrayBuffer()),
    new Uint8Array([0, 1, 255]),
  );
});

test("timeouts cover response bodies and cancellation interrupts retry sleeps", async () => {
  // Keep the test event loop alive while the SDK correctly unrefs its own timer.
  const keepAlive = setInterval(() => {}, 1000);
  try {
    await assert.rejects(
      client(async () => new Response(new ReadableStream()), {
        timeoutMs: 5,
        maxAttempts: 1,
      }).compute.getInstance("i"),
      RequestTimeoutError,
    );
    await assert.rejects(
      client(async () => new Response(new ReadableStream(), { status: 400 }), {
        timeoutMs: 5,
        maxAttempts: 1,
      }).compute.getInstance("i"),
      RequestTimeoutError,
    );
    const abort = new AbortController();
    await assert.rejects(
      client(async () => json({}, 503), {
        sleep: () => {
          abort.abort();
          return new Promise(() => {});
        },
      }).compute.getInstance("i", { signal: abort.signal }),
      RequestAbortedError,
    );
  } finally {
    clearInterval(keepAlive);
  }
});

test("pagination is lazy, preserves filters, and rejects missing or repeated markers", async () => {
  const urls = [];
  const c = client(async (url) => {
    urls.push(url);
    return urls.length === 1
      ? json({
          instances: [{ id: "1" }],
          meta: { has_more: true, marker: "next" },
        })
      : json({ instances: [{ id: "2" }], meta: { has_more: false } });
  });
  const iterator = c.compute.listInstancesAll({ name: "vm", limit: 1 });
  assert.equal(urls.length, 0);
  const items = [];
  for await (const item of iterator) items.push(item.id);
  assert.deepEqual(items, ["1", "2"]);
  assert.match(urls[1], /name=vm/);
  assert.match(urls[1], /marker=next/);
  for (const marker of ["", "same"]) {
    const bad = client(async () =>
      json({ instances: [], meta: { has_more: true, marker } }),
    );
    await assert.rejects(async () => {
      for await (const item of bad.compute.listInstancesAll({ marker: "same" }))
        void item;
    }, ProtocolError);
  }
});

test("reference lookups use exact filters, preserve scope, reject ambiguity and never fall back from UUID", async () => {
  let url;
  const c = client(async (u) => {
    url = u;
    return json({ instances: [{ id: "found" }] });
  });
  assert.equal(
    (
      await c.compute.getInstanceByReference("vm", {
        flavor: "f",
        crn: "stale",
        name: "stale",
        marker: "stale",
      })
    ).data.id,
    "found",
  );
  const qs = new URL(url).searchParams;
  assert.equal(qs.get("name"), "vm");
  assert.equal(qs.get("flavor"), "f");
  assert.equal(qs.has("crn"), false);
  assert.equal(qs.has("marker"), false);
  assert.equal(qs.get("limit"), "2");
  await assert.rejects(
    client(async () =>
      json({ instances: [{}], meta: { has_more: true } }),
    ).compute.getInstanceByReference("vm"),
    AmbiguousReferenceError,
  );
  await assert.rejects(
    client(async () => json({ instances: [] })).compute.getInstanceByReference(
      "vm",
    ),
    (e) => e.isNotFound(),
  );
  let calls = 0;
  await assert.rejects(
    client(async () => {
      calls++;
      return json({}, 404);
    }).compute.getInstanceByReference("00000000-0000-0000-0000-000000000001"),
    ApiError,
  );
  assert.equal(calls, 1);
});

test("structured API errors classify quota separately from access denial", async () => {
  await assert.rejects(
    client(async () =>
      json(
        {
          error: {
            code: "QUOTA_EXCEEDED",
            message: "Capacity exhausted",
            request_id: "r",
          },
        },
        403,
      ),
    ).compute.getInstance("i"),
    (e) => e.isQuotaExceeded() && !e.isAccessDenied() && e.requestId === "r",
  );
  await assert.rejects(
    client(async () => new Response("not json")).compute.getInstance("i"),
    ProtocolError,
  );
  await assert.rejects(
    client(async () => json({})).compute.listInstances(),
    ProtocolError,
  );
});

test("serial console prepares authenticated WebSocket metadata without opening a socket", async () => {
  const c = client(async () => {
    throw new Error("must not fetch");
  });
  const ws = await c.compute.startSerialConsole("i", { backlog_bytes: 0 });
  assert.match(
    ws.url,
    /^wss:\/\/compute.sa-saopaulo-1.basaltic.sh\/v1\/instances\/i\/console\/serial\?backlog_bytes=0$/,
  );
  assert.equal(ws.headers.get("Authorization"), "Bearer token");
});
