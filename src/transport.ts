import { Config, attempts, timeout } from "./config.js";
import type { RequestOptions } from "./config.js";
import {
  ApiError,
  ProtocolError,
  RequestAbortedError,
  TransportError,
} from "./errors.js";
import { ApiResponse, Page } from "./response.js";
import {
  abortable,
  checkAbort,
  isRecord,
  limitedText,
  requestScope,
  validateToken,
} from "./util.js";
import { VERSION } from "./version.js";

export interface Operation {
  id: string;
  method: string;
  path: string;
  authenticated: boolean;
  requiredQuery: readonly string[];
  requiredHeaders: readonly string[];
  queryEncoding: Readonly<Record<string, { style: string; explode: boolean }>>;
  bodyRequired: boolean;
  contentType: string;
  accept: string;
  itemsKey?: string;
}

export interface WebSocketConnection {
  /** Pass this URL and headers to a server-side WebSocket client. */
  readonly url: string;
  readonly headers: Headers;
}

type Values = Readonly<Record<string, unknown>>;
export type BinaryBody =
  string | Blob | ArrayBuffer | Uint8Array | ReadableStream<Uint8Array>;
const reserved = new Set([
  "authorization",
  "host",
  "cookie",
  "content-length",
  "content-type",
  "accept",
  "user-agent",
  "x-account-id",
  "idempotency-key",
]);

export function encodeQuery(
  values: Values,
  encodings: Operation["queryEncoding"] = {},
): string {
  const scalar = (value: unknown): string => {
    if (
      !["string", "number", "boolean"].includes(typeof value) ||
      (typeof value === "number" && !Number.isFinite(value))
    )
      throw new TypeError(
        "Query and form values must be scalars or lists of scalars.",
      );
    return String(value);
  };
  const parts: string[] = [];
  for (const [key, value] of Object.entries(values)) {
    if (value == null) continue;
    const encodedKey = encodeURIComponent(key);
    if (Array.isArray(value)) {
      const items = value.map(scalar);
      const encoding = encodings[key] ?? { style: "form", explode: true };
      if (encoding.explode)
        parts.push(
          ...items.map((item) => `${encodedKey}=${encodeURIComponent(item)}`),
        );
      else {
        const delimiter =
          encoding.style === "spaceDelimited"
            ? " "
            : encoding.style === "pipeDelimited"
              ? "|"
              : ",";
        parts.push(
          `${encodedKey}=${encodeURIComponent(items.join(delimiter))}`,
        );
      }
    } else parts.push(`${encodedKey}=${encodeURIComponent(scalar(value))}`);
  }
  return parts.join("&");
}

export class Transport {
  constructor(readonly config: Config) {}

  async json<T>(
    service: string,
    endpoint: string,
    operation: Operation,
    path: Values,
    body: unknown,
    query: Values,
    options: RequestOptions = {},
  ): Promise<ApiResponse<T>> {
    const result = await this.#send(
      service,
      endpoint,
      operation,
      path,
      body,
      query,
      options,
      "json",
    );
    return new ApiResponse(result.data as T, result.response);
  }
  async page<T, Item>(
    service: string,
    endpoint: string,
    operation: Operation,
    path: Values,
    body: unknown,
    query: Values,
    options: RequestOptions = {},
  ): Promise<Page<T, Item>> {
    const result = await this.json<T>(
      service,
      endpoint,
      operation,
      path,
      body,
      query,
      options,
    );
    const page = new Page<T, Item>(
      result.data,
      result.response,
      operation.itemsKey ?? "",
    );
    void page.items;
    return page;
  }
  async binary(
    service: string,
    endpoint: string,
    operation: Operation,
    path: Values,
    body: unknown,
    query: Values,
    options: RequestOptions = {},
  ): Promise<Response> {
    return (
      await this.#send(
        service,
        endpoint,
        operation,
        path,
        body,
        query,
        options,
        "binary",
      )
    ).response;
  }
  async discard(
    service: string,
    endpoint: string,
    operation: Operation,
    path: Values,
    body: unknown,
    query: Values,
    options: RequestOptions = {},
  ): Promise<void> {
    await this.#send(
      service,
      endpoint,
      operation,
      path,
      body,
      query,
      options,
      "void",
    );
  }
  async websocket(
    service: string,
    endpoint: string,
    operation: Operation,
    path: Values,
    query: Values,
    options: RequestOptions = {},
  ): Promise<WebSocketConnection> {
    const prepared = this.#prepare(
      service,
      endpoint,
      operation,
      path,
      undefined,
      query,
      options,
    );
    const scope = requestScope(
      timeout(options.timeoutMs ?? this.config.timeoutMs),
      options.signal,
    );
    try {
      const token = await this.#token(operation, scope.signal);
      if (token) prepared.headers.set("Authorization", `Bearer ${token}`);
      const url = new URL(prepared.url);
      url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
      return { url: url.href, headers: prepared.headers };
    } catch (error) {
      if (scope.signal.aborted) throw scope.error();
      throw error;
    } finally {
      scope.close();
    }
  }

  async #token(operation: Operation, signal: AbortSignal): Promise<string> {
    if (!operation.authenticated) return "";
    const provider = this.config.tokenProvider;
    if (!provider)
      throw new TypeError(
        "Anonymous access cannot call an authenticated operation.",
      );
    return validateToken(
      await abortable(Promise.resolve(provider.getToken(signal)), signal),
    );
  }

  #prepare(
    service: string,
    endpoint: string,
    operation: Operation,
    path: Values,
    body: unknown,
    query: Values,
    options: RequestOptions,
  ) {
    checkAbort(options.signal);
    if (operation.bodyRequired && body == null)
      throw new TypeError(`${operation.id}: request body is required.`);
    for (const key of operation.requiredQuery)
      if (query[key] == null)
        throw new TypeError(
          `${operation.id}: missing required query parameter ${key}.`,
        );
    const route = operation.path.replace(/\{([^}]+)\}/g, (_, key: string) => {
      const value = path[key];
      if (
        typeof value !== "string" ||
        !value ||
        value === "." ||
        value === ".."
      )
        throw new TypeError(`${operation.id}: invalid path parameter ${key}.`);
      return encodeURIComponent(value).replace(
        /[!'()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      );
    });
    const qs = encodeQuery(query, operation.queryEncoding);
    const url =
      this.config.endpoint(service, endpoint) + route + (qs ? "?" + qs : "");
    const headers = new Headers({ Accept: operation.accept });
    // Browsers control User-Agent themselves. No Node imports enter the browser build.
    if (!(globalThis as typeof globalThis & { window?: unknown }).window)
      headers.set("User-Agent", `basaltic-js/${VERSION}`);
    const account = options.accountId ?? this.config.accountId;
    if (account) headers.set("X-Account-Id", account);
    if (options.idempotencyKey !== undefined) {
      if (!options.idempotencyKey.trim())
        throw new TypeError("idempotencyKey must not be empty.");
      headers.set("Idempotency-Key", options.idempotencyKey);
    }
    for (const [key, value] of new Headers(options.headers)) {
      if (reserved.has(key.toLowerCase()))
        throw new TypeError(`Cannot override managed header ${key}.`);
      headers.set(key, value);
    }
    for (const key of operation.requiredHeaders)
      if (!headers.has(key) || !headers.get(key))
        throw new TypeError(`${operation.id}: missing required header ${key}.`);
    let encoded: BodyInit | undefined;
    const streaming =
      typeof ReadableStream !== "undefined" && body instanceof ReadableStream;
    if (body !== undefined) {
      if (operation.contentType === "application/json") {
        encoded = JSON.stringify(body);
        if (encoded === undefined)
          throw new TypeError("Request body is not JSON serializable.");
      } else if (
        operation.contentType === "application/x-www-form-urlencoded"
      ) {
        if (!isRecord(body))
          throw new TypeError("Form body must be an object.");
        encoded = encodeQuery(body);
      } else if (
        typeof body === "string" ||
        body instanceof ArrayBuffer ||
        body instanceof Blob ||
        streaming
      )
        encoded = body as BodyInit;
      else if (body instanceof Uint8Array)
        encoded = new Uint8Array(body).buffer;
      else
        throw new TypeError(
          "Binary body must be a string, Blob, ArrayBuffer, Uint8Array, or ReadableStream.",
        );
      if (operation.contentType)
        headers.set("Content-Type", operation.contentType);
    }
    return { url, headers, body: encoded, streaming };
  }

  async #send(
    service: string,
    endpoint: string,
    operation: Operation,
    path: Values,
    body: unknown,
    query: Values,
    options: RequestOptions,
    mode: "json" | "binary" | "void",
  ): Promise<{ response: Response; data?: unknown }> {
    const prepared = this.#prepare(
      service,
      endpoint,
      operation,
      path,
      body,
      query,
      options,
    );
    const limit = prepared.streaming
      ? 1
      : attempts(options.maxAttempts ?? this.config.maxAttempts);
    const timeoutMs = timeout(options.timeoutMs ?? this.config.timeoutMs);
    const repeatable =
      ["GET", "HEAD", "OPTIONS", "PUT", "DELETE"].includes(operation.method) ||
      options.idempotencyKey !== undefined;
    let refreshed = false;
    for (let attempt = 1; attempt <= limit; attempt++) {
      const scope = requestScope(timeoutMs, options.signal);
      let response: Response | undefined;
      let delay: number | undefined;
      try {
        const token = await this.#token(operation, scope.signal);
        const headers = new Headers(prepared.headers);
        if (token) headers.set("Authorization", `Bearer ${token}`);
        const init: RequestInit & { duplex?: "half" } = {
          method: operation.method,
          headers,
          body: prepared.body,
          signal: scope.signal,
          redirect: "error",
          credentials: "omit",
          ...(prepared.streaming ? { duplex: "half" as const } : {}),
        };
        try {
          response = await abortable(
            this.config.fetch(prepared.url, init),
            scope.signal,
          );
        } catch {
          throw scope.signal.aborted
            ? scope.error()
            : new TransportError(`${operation.id}: HTTP transport failed.`);
        }
        if (response.ok) {
          if (mode === "binary") return { response };
          if (mode === "void") {
            await response.body?.cancel();
            return { response };
          }
          let raw: string;
          try {
            raw = await abortable(response.text(), scope.signal);
          } catch {
            throw scope.signal.aborted
              ? scope.error()
              : new TransportError(
                  `${operation.id}: response body could not be read.`,
                );
          }
          let data: unknown;
          try {
            data = raw.trim() ? JSON.parse(raw) : {};
          } catch {
            throw new ProtocolError(
              `${operation.id}: malformed JSON response.`,
            );
          }
          if (!isRecord(data) && !Array.isArray(data))
            throw new ProtocolError(
              `${operation.id}: expected a JSON object or array.`,
            );
          return { response, data };
        }
        if (
          response.status === 401 &&
          operation.authenticated &&
          !refreshed &&
          attempt < limit &&
          this.config.tokenProvider?.invalidate
        ) {
          refreshed = true;
          this.config.tokenProvider.invalidate(token);
          delay = 0;
        } else if (
          repeatable &&
          attempt < limit &&
          [429, 500, 502, 503, 504].includes(response.status)
        ) {
          delay = this.#retryDelay(
            attempt,
            response.headers.get("Retry-After"),
          );
        }
        if (delay === undefined) {
          let payload: unknown;
          try {
            payload = JSON.parse(
              await abortable(limitedText(response), scope.signal),
            );
          } catch {
            /* Unstructured errors remain bounded and do not expose raw bodies. */
          }
          if (scope.signal.aborted) throw scope.error();
          const error =
            isRecord(payload) && isRecord(payload.error) ? payload.error : {};
          throw new ApiError(
            response.status,
            typeof error.code === "string" ? error.code : "",
            typeof error.message === "string"
              ? error.message
              : "Unexpected API response",
            typeof error.request_id === "string"
              ? error.request_id
              : (response.headers.get("X-Request-Id") ?? ""),
            operation.id,
            new Headers(response.headers),
          );
        }
        await response.body?.cancel().catch(() => undefined);
      } catch (error) {
        if (options.signal?.aborted) throw new RequestAbortedError();
        if (
          !(error instanceof TransportError) ||
          !repeatable ||
          attempt === limit
        )
          throw error;
        delay = this.#backoff(attempt);
      } finally {
        scope.close();
      }
      await abortable(
        this.config.sleep(delay ?? 0, options.signal),
        options.signal,
      );
    }
    throw new TransportError("Request attempts exhausted.");
  }
  #backoff(attempt: number): number {
    const value = this.config.random();
    return (
      Math.max(0, Math.min(1, value)) *
      Math.min(
        this.config.maxDelayMs,
        this.config.baseDelayMs * 2 ** (attempt - 1),
      )
    );
  }
  #retryDelay(attempt: number, value: string | null): number | undefined {
    if (!value) return this.#backoff(attempt);
    const parsed = /^\d+$/.test(value)
      ? Number(value) * 1000
      : Date.parse(value) - this.config.clock();
    if (parsed === Infinity) return undefined;
    const delay = Number.isFinite(parsed)
      ? Math.max(0, parsed)
      : this.#backoff(attempt);
    return delay <= this.config.maxDelayMs ? delay : undefined;
  }
}
