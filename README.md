# Basaltic SDK for TypeScript and JavaScript

[![Public checks](https://github.com/basaltic-sh/sdk-js/actions/workflows/public-checks.yml/badge.svg)](https://github.com/basaltic-sh/sdk-js/actions/workflows/public-checks.yml)

The official Basaltic SDK: 401 operations across 15 services, typed request and
response models, OAuth credentials, pagination, and retries. Requires Node.js 22
or newer, or a modern browser with Fetch, Web Streams and AbortSignal.any.
ES modules and CommonJS are included, with no runtime dependencies.

```sh
npm install @basaltic-sh/sdk-js
```

```ts
import { BasalticClient } from '@basaltic-sh/sdk-js';

const client = new BasalticClient({
  accessKeyId: process.env.BASALTIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.BASALTIC_SECRET_ACCESS_KEY,
  accountId: process.env.BASALTIC_ACCOUNT_ID,
  region: 'sa-saopaulo-1',
});

for await (const instance of client.compute.listInstancesAll({ limit: 100 })) {
  console.log(instance.id, instance.name);
}
```

`Client` is an alias for `BasalticClient`. CommonJS applications can use
`const { Client } = require('@basaltic-sh/sdk-js')`.

## Configuration and authentication

With no options, the client reads `BASALTIC_ACCESS_KEY_ID`,
`BASALTIC_SECRET_ACCESS_KEY`, `BASALTIC_ACCESS_TOKEN`, `BASALTIC_ACCOUNT_ID`,
`BASALTIC_REGION`, `BASALTIC_DOMAIN`, and `BASALTIC_ENDPOINT_URL_<SERVICE>`.
Use `readEnvironment: false` to disable environment lookup. Explicit access key
credentials take precedence over an environment bearer token. An explicit
`tokenProvider` takes precedence over other authentication options.

```ts
const client = new BasalticClient({
  accessToken: 'short-lived-bearer-token',
  region: 'sa-saopaulo-1',
  readEnvironment: false,
  timeoutMs: 30_000,
  maxAttempts: 4,
});
```

Access key credentials exchange an OAuth token at the IAM endpoint and cache it
until shortly before expiry. Concurrent requests share the refresh. Static
bearer tokens are never refreshed. Custom providers implement `getToken(signal?)`
and optionally `invalidate(rejectedToken?)`.

Use `anonymous: true` only for public operations. Authenticated operations reject
anonymous access. Service URLs are selected automatically; `endpoints` overrides
individual services, e.g. `{ compute: 'http://localhost:8080' }`. `tokenUrl` can
override the OAuth endpoint. Inject a Fetch-compatible `fetch` for testing or
custom transport behavior. Redirects are rejected and ambient cookies omitted.

Browser applications should receive short-lived tokens from their backend.
Never embed long-lived access keys or secrets in browser bundles. API requests
from browsers depend on the endpoint's CORS policy. A browser-compatible build
does not imply that every API endpoint permits every browser origin.

## Services and responses

Services: `audit`, `billing`, `catalog`, `certificate`, `compute`, `dns`, `iam`,
`kms`, `loadbalancer`, `network`, `quota`, `secrets`, `storage`, `telemetry`,
`workspace`. The [API reference](docs/api.md) lists every operation and signature.
Types are exported as service namespaces, for example `ComputeTypes.Instance`
and `ComputeTypes.CreateInstanceBody`.

```ts
import type { ComputeTypes } from '@basaltic-sh/sdk-js';

const body: ComputeTypes.CreateInstanceBody = {
  name: 'web-1',
  flavor: 'YOUR_FLAVOR_ID',
  networks: [{ subnet: 'YOUR_SUBNET_ID' }],
  image: 'YOUR_IMAGE_ID',
};
const result = await client.compute.createInstance(body);
console.log(result.data.instance?.id, result.requestId, result.statusCode);
```

JSON methods return `ApiResponse<T>`: `.data` preserves the API envelope and
`.response` exposes the original Fetch response and headers (its JSON body has
already been consumed). Bodyless operations return `void`. JSON endpoints that
also return 204 produce an empty object for that response. Models retain API
field names such as `delete_on_termination`. Validation constraints such as
numeric bounds, string patterns and cross-field rules are enforced by the API.

List methods return a `Page` with `.items`, `.hasMore`, and `.marker`. The
corresponding `All` method lazily requests subsequent pages where cursor
pagination is supported. Stopping iteration stops further requests; missing or
repeated cursors raise `ProtocolError`. Resource `ByReference` helpers accept a
UUID, CRN, or supported exact name, preserve scope filters and reject ambiguous
results. A UUID lookup never falls back to a name search.

## Retries, cancellation and errors

Request options are always the final argument:

```ts
import { ApiError, newIdempotencyKey } from '@basaltic-sh/sdk-js';

const controller = new AbortController();
try {
  await client.compute.createInstance(body, {
    idempotencyKey: newIdempotencyKey(),
    signal: controller.signal,
    accountId: 'another-account-id',
    timeoutMs: 10_000,
  });
} catch (error) {
  if (error instanceof ApiError) {
    console.error(error.errorCode, error.requestId);
    if (error.isQuotaExceeded()) console.error('Quota exhausted');
  }
  throw error;
}
```

Create one idempotency key per logical mutation and retain it if retrying that
mutation yourself. GET, HEAD, OPTIONS, PUT and DELETE can retry transport errors
and 429/500/502/503/504. POST and PATCH require an idempotency key for these
retries. A refreshable token can retry one 401. Streaming uploads are never
replayed. `maxAttempts` includes the initial attempt (default 4, maximum 10).
Exponential full jitter starts at `baseDelayMs` (200) and is bounded by
`maxDelayMs` (20,000). A longer `Retry-After` returns the error immediately rather
than retrying before the server permits it.

The timeout applies per attempt, including token acquisition and JSON body reads;
use an AbortSignal to bound the entire operation including retry waits.
`RequestAbortedError` has name `AbortError`, and `RequestTimeoutError` has name
`TimeoutError`. Other errors include `TransportError`, `ProtocolError`,
`AuthenticationError` and `AmbiguousReferenceError`. `ApiError` includes
`statusCode`, `errorCode`, `requestId`, `operationId` and `headers`, with helpers
for not-found, access-denied, quota, conflict, invalid input and rate limits.
OAuth failures and transport failures omit raw payloads and underlying causes.
API error messages come from the server; avoid exposing them to untrusted users.

Custom `headers` can supply operation headers, such as `If-Match` and `Range`.
Authentication, account, idempotency and transport-managed headers cannot be
replaced through this map. Required operation headers are typed and validated.

## Binary data and serial console

```ts
await client.storage.putObject('bucket', 'images/logo.png', bytes);
const response = await client.storage.getObject('bucket', 'images/logo.png');
const bytesReceived = new Uint8Array(await response.arrayBuffer());
const metadata = await client.storage.headObject('bucket', 'images/logo.png');
console.log(metadata.headers.get('ETag'));
```

Downloads and HEAD operations return Fetch `Response`. The timeout covers receipt
of response headers; the caller owns streaming, cancellation and body-read
errors afterwards. Pass a signal that remains alive while reading the body.
Uploads accept string, Blob, ArrayBuffer, Uint8Array or ReadableStream bytes.
Object keys are encoded as one path parameter, preserving embedded slashes.

`client.compute.startSerialConsole(id, query, options)` prepares a WebSocket URL
and authenticated headers without opening a socket. Pass both to a server-side
WebSocket library. Browser WebSocket cannot set these headers. Ticket creation
is also available; interactive session management is left to the application.

## Source, checks and security

The public GitHub repository contains official release snapshots. It accepts no
code contributions. For support, visit https://docs.basaltic.sh. Report security
issues privately to **security@basaltic.sh**; see [SECURITY.md](SECURITY.md).

The npm package is built from the matching public GitHub tag by GitHub Actions.
It includes JavaScript, declarations, maps and TypeScript sources. Internal
specifications, generators, development instructions and history are excluded.
`npm ci --ignore-scripts`, `npm run check`, and `npm run check:package` reproduce
the public checks. Node.js 22, 24 and 26 are tested. Licensed under Apache-2.0.
