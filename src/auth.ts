import { AuthenticationError } from "./errors.js";
import {
  abortable,
  isRecord,
  limitedText,
  requestScope,
  validateToken,
  validateUrl,
} from "./util.js";

export type Fetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;

export interface TokenProvider {
  getToken(signal?: AbortSignal): string | Promise<string>;
  /** Ignore an invalidation for a token that has already been refreshed. */
  invalidate?(rejectedToken?: string): void;
}

export class StaticToken implements TokenProvider {
  readonly #token: string;
  constructor(token: string) {
    this.#token = validateToken(token);
  }
  getToken(): string {
    return this.#token;
  }
}

export class ClientCredentials implements TokenProvider {
  readonly #key: string;
  readonly #secret: string;
  readonly #url: string;
  readonly #fetch: Fetch;
  readonly #clock: () => number;
  readonly #timeoutMs: number;
  #cached = "";
  #refreshAt = 0;
  #pending?: Promise<string>;
  constructor(options: {
    accessKeyId: string;
    secretAccessKey: string;
    tokenUrl: string;
    fetch?: Fetch;
    clock?: () => number;
    timeoutMs?: number;
  }) {
    if (
      !options.accessKeyId ||
      options.accessKeyId.includes(":") ||
      !options.secretAccessKey
    ) {
      throw new TypeError("A valid access key ID and secret are required.");
    }
    this.#key = options.accessKeyId;
    this.#secret = options.secretAccessKey;
    this.#url = validateUrl(options.tokenUrl);
    this.#fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
    this.#clock = options.clock ?? Date.now;
    this.#timeoutMs = options.timeoutMs ?? 30000;
    if (!Number.isFinite(this.#timeoutMs) || this.#timeoutMs <= 0)
      throw new TypeError("Invalid token timeout.");
  }
  getToken(signal?: AbortSignal): Promise<string> {
    if (this.#cached && this.#clock() < this.#refreshAt)
      return abortable(Promise.resolve(this.#cached), signal);
    this.#pending ??= this.#refresh().finally(() => {
      this.#pending = undefined;
    });
    // A cancelled caller must not cancel another caller's shared token refresh.
    return abortable(this.#pending, signal);
  }
  invalidate(rejectedToken?: string): void {
    if (rejectedToken !== undefined && this.#cached !== rejectedToken) return;
    this.#cached = "";
    this.#refreshAt = 0;
  }
  async #refresh(): Promise<string> {
    const scope = requestScope(this.#timeoutMs);
    const now = this.#clock();
    try {
      const encoded = btoa(
        Array.from(
          new TextEncoder().encode(`${this.#key}:${this.#secret}`),
          (b) => String.fromCharCode(b),
        ).join(""),
      );
      const response = await abortable(
        this.#fetch(this.#url, {
          method: "POST",
          redirect: "error",
          credentials: "omit",
          signal: scope.signal,
          headers: {
            Authorization: `Basic ${encoded}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials",
        }),
        scope.signal,
      );
      let data: unknown;
      try {
        data = JSON.parse(await abortable(limitedText(response), scope.signal));
      } catch {
        throw new AuthenticationError(response.status);
      }
      if (response.status !== 200 || !isRecord(data)) {
        const code =
          isRecord(data) &&
          typeof data.error === "string" &&
          [
            "invalid_client",
            "invalid_grant",
            "temporarily_unavailable",
          ].includes(data.error)
            ? data.error
            : "";
        throw new AuthenticationError(response.status, code);
      }
      if (
        typeof data.access_token !== "string" ||
        (data.token_type !== undefined &&
          String(data.token_type).toLowerCase() !== "bearer")
      )
        throw new AuthenticationError(200);
      const lifetime = Number(data.expires_in ?? 900);
      if (!Number.isFinite(lifetime) || lifetime <= 0)
        throw new AuthenticationError(200);
      this.#cached = validateToken(data.access_token);
      this.#refreshAt = now + 1000 * (lifetime - Math.min(300, lifetime * 0.1));
      return this.#cached;
    } catch (error) {
      if (error instanceof AuthenticationError) throw error;
      // Never retain a fetch error or OAuth payload that might expose credentials.
      throw new AuthenticationError();
    } finally {
      scope.close();
    }
  }
}
