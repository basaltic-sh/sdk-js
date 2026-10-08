import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { SourceTextModule, createContext } from "node:vm";
import { test } from "node:test";

test("ESM loads and requests in a browser realm without Node globals or imports", async () => {
  let observed;
  const context = createContext({
    window: {},
    URL,
    Headers,
    Request,
    Response,
    ReadableStream,
    Blob,
    TextEncoder,
    TextDecoder,
    AbortSignal,
    AbortController,
    setTimeout,
    clearTimeout,
    btoa,
    crypto,
    fetch: async (url, init) => {
      observed = { url, ...init };
      return new Response('{"instances":[{"id":"browser"}]}');
    },
  });
  const modules = new Map();
  async function load(url) {
    if (!modules.has(url.href))
      modules.set(
        url.href,
        new SourceTextModule(await readFile(url, "utf8"), {
          context,
          identifier: url.href,
        }),
      );
    return modules.get(url.href);
  }
  const entry = await load(new URL("../dist/esm/index.js", import.meta.url));
  await entry.link(async (specifier, referencing) => {
    assert.ok(
      specifier.startsWith("./") || specifier.startsWith("../"),
      "No runtime package or Node dependency",
    );
    return load(new URL(specifier, referencing.identifier));
  });
  await entry.evaluate();
  const client = new entry.namespace.Client({
    accessToken: "browser-token",
    region: "sa-saopaulo-1",
  });
  const page = await client.compute.listInstances({ limit: 1 });
  assert.equal(page.items[0].id, "browser");
  assert.equal(observed.headers.has("User-Agent"), false);
  assert.equal(observed.headers.get("Authorization"), "Bearer browser-token");
});
