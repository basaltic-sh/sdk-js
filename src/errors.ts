export class ProtocolError extends Error {
  override readonly name = "ProtocolError";
}

export class TransportError extends Error {
  override readonly name: string = "TransportError";
}

export class RequestAbortedError extends Error {
  override readonly name = "AbortError";
  constructor() {
    super("The request was cancelled.");
  }
}

export class RequestTimeoutError extends TransportError {
  override readonly name: string = "TimeoutError";
  constructor() {
    super("The request exceeded its timeout.");
  }
}

export class AuthenticationError extends Error {
  override readonly name = "AuthenticationError";
  constructor(
    readonly statusCode = 0,
    readonly errorCode = "",
  ) {
    super(
      `Token exchange failed${statusCode ? ` (HTTP ${statusCode})` : ""}${errorCode ? `: ${errorCode}` : ""}.`,
    );
  }
}

export class AmbiguousReferenceError extends Error {
  override readonly name = "AmbiguousReferenceError";
  constructor() {
    super("Reference matches more than one resource; narrow its parent scope.");
  }
}

export class ApiError extends Error {
  override readonly name = "ApiError";
  constructor(
    readonly statusCode: number,
    readonly errorCode: string,
    message: string,
    readonly requestId: string,
    readonly operationId: string,
    readonly headers: Headers = new Headers(),
  ) {
    super(
      `${operationId}: ${message} (HTTP ${statusCode}, request ${requestId})`,
    );
  }
  isNotFound(): boolean {
    return this.statusCode === 404 || this.statusCode === 410;
  }
  isUnauthorized(): boolean {
    return this.statusCode === 401;
  }
  isQuotaExceeded(): boolean {
    return /(?:^|_)(?:QUOTA|LIMIT)_EXCEEDED$/.test(this.errorCode);
  }
  isAccessDenied(): boolean {
    return this.statusCode === 403 && !this.isQuotaExceeded();
  }
  isConflict(): boolean {
    return this.statusCode === 409;
  }
  isInvalidInput(): boolean {
    return this.statusCode === 400 || this.statusCode === 422;
  }
  isRateLimited(): boolean {
    return this.statusCode === 429;
  }
  isTransient(): boolean {
    return this.statusCode === 429 || this.statusCode >= 500;
  }
}
