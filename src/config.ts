import { ClientCredentials, StaticToken } from "./auth.js";
import type { Fetch, TokenProvider } from "./auth.js";
import { sleep, validateUrl } from "./util.js";

export interface ClientOptions {
  accessKeyId?: string;
  secretAccessKey?: string;
  accessToken?: string;
  tokenProvider?: TokenProvider;
  anonymous?: boolean;
  region?: string;
  accountId?: string;
  domain?: string;
  endpoints?: Readonly<Record<string, string>>;
  tokenUrl?: string;
  fetch?: Fetch;
  /** Read BASALTIC_* from process.env when it exists. Disable for explicit-only configuration. */
  readEnvironment?: boolean;
  timeoutMs?: number;
  maxAttempts?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
  clock?: () => number;
  sleep?: (ms: number, signal?: AbortSignal) => Promise<void>;
  random?: () => number;
}

export interface RequestOptions {
  accountId?: string;
  idempotencyKey?: string;
  headers?: HeadersInit;
  signal?: AbortSignal;
  timeoutMs?: number;
  maxAttempts?: number;
}

export function attempts(value: number): number {
  if (!Number.isInteger(value) || value < 1 || value > 10)
    throw new TypeError("maxAttempts must be an integer between 1 and 10.");
  return value;
}

export function timeout(value: number): number {
  if (!Number.isFinite(value) || value <= 0 || value > 2147483647)
    throw new TypeError("timeoutMs must be positive and at most 2147483647.");
  return value;
}

export class Config {
  readonly region: string;
  readonly accountId: string;
  readonly domain: string;
  readonly endpoints: Readonly<Record<string, string>>;
  readonly tokenProvider?: TokenProvider;
  readonly fetch: Fetch;
  readonly timeoutMs: number;
  readonly maxAttempts: number;
  readonly baseDelayMs: number;
  readonly maxDelayMs: number;
  readonly clock: () => number;
  readonly sleep: (ms: number, signal?: AbortSignal) => Promise<void>;
  readonly random: () => number;

  constructor(options: ClientOptions = {}) {
    const processEnv = (
      globalThis as typeof globalThis & {
        process?: { env?: Record<string, string | undefined> };
      }
    ).process?.env;
    const env = options.readEnvironment === false ? {} : (processEnv ?? {});
    this.region = options.region ?? env.BASALTIC_REGION ?? "";
    this.accountId = options.accountId ?? env.BASALTIC_ACCOUNT_ID ?? "";
    this.domain = options.domain ?? env.BASALTIC_DOMAIN ?? "basaltic.sh";
    if (
      !/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)*[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(
        this.domain,
      )
    )
      throw new TypeError("Invalid API domain.");
    const endpoints: Record<string, string> = {};
    for (const [key, value] of Object.entries(env)) {
      if (key.startsWith("BASALTIC_ENDPOINT_URL_") && value)
        endpoints[key.slice(22).toLowerCase()] = value;
    }
    this.endpoints = Object.freeze({ ...endpoints, ...options.endpoints });
    this.fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
    this.timeoutMs = timeout(options.timeoutMs ?? 30000);
    this.maxAttempts = attempts(options.maxAttempts ?? 4);
    this.baseDelayMs = options.baseDelayMs ?? 200;
    this.maxDelayMs = options.maxDelayMs ?? 20000;
    if (
      ![this.baseDelayMs, this.maxDelayMs].every(
        (n) => Number.isFinite(n) && n >= 0 && n <= 2147483647,
      )
    )
      throw new TypeError("Invalid retry delay.");
    this.clock = options.clock ?? Date.now;
    this.sleep = options.sleep ?? sleep;
    this.random = options.random ?? Math.random;
    const explicitKeys =
      options.accessKeyId !== undefined ||
      options.secretAccessKey !== undefined;
    const token =
      options.accessToken ??
      (explicitKeys ? "" : (env.BASALTIC_ACCESS_TOKEN ?? ""));
    const key = options.accessKeyId ?? env.BASALTIC_ACCESS_KEY_ID ?? "";
    const secret =
      options.secretAccessKey ?? env.BASALTIC_SECRET_ACCESS_KEY ?? "";
    if (options.anonymous) return;
    if (options.tokenProvider) this.tokenProvider = options.tokenProvider;
    else if (token) this.tokenProvider = new StaticToken(token);
    else if (key && secret)
      this.tokenProvider = new ClientCredentials({
        accessKeyId: key,
        secretAccessKey: secret,
        tokenUrl:
          options.tokenUrl ??
          this.endpoint("iam", "https://iam.basaltic.sh") + "/v1/oauth/token",
        fetch: this.fetch,
        clock: this.clock,
        timeoutMs: this.timeoutMs,
      });
    else
      throw new TypeError(
        "Configure an access key pair, bearer token, token provider, or explicit anonymous access.",
      );
  }

  endpoint(service: string, template: string): string {
    const override = this.endpoints[service];
    if (override !== undefined) return validateUrl(override);
    if (
      template.includes("{region}") &&
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(this.region)
    )
      throw new TypeError(`A valid region is required for ${service}.`);
    return validateUrl(
      template
        .replace("basaltic.sh", this.domain)
        .replace("{region}", this.region),
    );
  }
}

/** Create once per logical mutation and reuse when retrying it. */
export function newIdempotencyKey(): string {
  return globalThis.crypto.randomUUID();
}
