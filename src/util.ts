import {
  ProtocolError,
  RequestAbortedError,
  RequestTimeoutError,
} from "./errors.js";

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateUrl(value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new TypeError("Endpoint must be an absolute HTTP(S) URL.");
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    /[\x00-\x20\x7f]/.test(value)
  ) {
    throw new TypeError(
      "Endpoint must be an absolute HTTP(S) URL without credentials, query, or fragment.",
    );
  }
  return url.href.replace(/\/$/, "");
}

export function validateToken(token: string): string {
  if (typeof token !== "string" || !token || /[\s\x00-\x1f\x7f]/.test(token)) {
    throw new TypeError(
      "A nonempty bearer token without whitespace is required.",
    );
  }
  return token;
}

export function checkAbort(signal?: AbortSignal): void {
  if (signal?.aborted) throw new RequestAbortedError();
}

export function abortable<T>(
  promise: Promise<T>,
  signal?: AbortSignal,
): Promise<T> {
  if (!signal) return promise;
  return new Promise<T>((resolve, reject) => {
    const abort = () => reject(new RequestAbortedError());
    signal.addEventListener("abort", abort, { once: true });
    if (signal.aborted) abort();
    promise
      .then(resolve, reject)
      .finally(() => signal.removeEventListener("abort", abort));
  });
}

export function requestScope(timeoutMs: number, signal?: AbortSignal) {
  checkAbort(signal);
  const timeout = new AbortController();
  const timer = setTimeout(() => timeout.abort(), timeoutMs);
  (timer as unknown as { unref?: () => void }).unref?.();
  return {
    signal: signal ? AbortSignal.any([signal, timeout.signal]) : timeout.signal,
    error: () =>
      signal?.aborted ? new RequestAbortedError() : new RequestTimeoutError(),
    close: () => clearTimeout(timer),
  };
}

export function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  checkAbort(signal);
  return new Promise((resolve, reject) => {
    const abort = () => {
      clearTimeout(timer);
      reject(new RequestAbortedError());
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", abort);
      resolve();
    }, ms);
    signal?.addEventListener("abort", abort, { once: true });
  });
}

export async function limitedText(
  response: Response,
  limit = 1048576,
): Promise<string> {
  if (!response.body) return "";
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return text + decoder.decode();
      size += value.byteLength;
      if (size > limit)
        throw new ProtocolError("Response exceeded the allowed size.");
      text += decoder.decode(value, { stream: true });
    }
  } finally {
    await reader.cancel().catch(() => undefined);
    reader.releaseLock();
  }
}
