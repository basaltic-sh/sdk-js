import { AmbiguousReferenceError, ApiError, ProtocolError } from "./errors.js";
import { isRecord } from "./util.js";

export class ApiResponse<T> {
  constructor(
    readonly data: T,
    readonly response: Response,
  ) {}
  get requestId(): string {
    return this.response.headers.get("X-Request-Id") ?? "";
  }
  get statusCode(): number {
    return this.response.status;
  }
}

export class Page<T, Item> extends ApiResponse<T> {
  constructor(
    data: T,
    response: Response,
    readonly itemsKey: string,
  ) {
    super(data, response);
  }
  get items(): Item[] {
    if (!isRecord(this.data) || !Array.isArray(this.data[this.itemsKey]))
      throw new ProtocolError("List response is missing its items array.");
    return this.data[this.itemsKey] as Item[];
  }
  get hasMore(): boolean {
    return (
      isRecord(this.data) &&
      isRecord(this.data.meta) &&
      this.data.meta.has_more === true
    );
  }
  get marker(): string {
    return isRecord(this.data) &&
      isRecord(this.data.meta) &&
      typeof this.data.meta.marker === "string"
      ? this.data.meta.marker
      : "";
  }
}

export async function* iteratePages<T, Item>(
  fetch: (marker: string) => Promise<Page<T, Item>>,
  marker = "",
): AsyncGenerator<Item> {
  const seen = new Set([marker]);
  while (true) {
    const page = await fetch(marker);
    yield* page.items;
    if (!page.hasMore) return;
    marker = page.marker;
    if (!marker || seen.has(marker))
      throw new ProtocolError(
        "Pagination did not advance; refusing a truncated or repeated walk.",
      );
    seen.add(marker);
  }
}

export async function resolveReference<T>(
  reference: string,
  get: (id: string) => Promise<ApiResponse<unknown>>,
  list: (filter: Record<string, string>) => Promise<Page<unknown, unknown>>,
  hasName: boolean,
  envelope?: string,
): Promise<ApiResponse<T>> {
  if (!reference)
    throw new TypeError("A nonempty resource reference is required.");
  if (
    /^[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}$/.test(reference)
  ) {
    const result = await get(reference);
    const value =
      envelope && isRecord(result.data) ? result.data[envelope] : result.data;
    if (!isRecord(value))
      throw new ProtocolError(
        "Reference lookup is missing its resource envelope.",
      );
    return new ApiResponse(value as T, result.response);
  }
  const kind = reference.startsWith("crn:") ? "crn" : "name";
  if (kind === "crn" && reference.split(":").length !== 5)
    throw new TypeError("A CRN must have five colon-separated segments.");
  if (kind === "name" && !hasName)
    throw new TypeError("This resource requires a UUID or CRN.");
  const page = await list({ [kind]: reference });
  if (page.items.length > 1 || page.hasMore)
    throw new AmbiguousReferenceError();
  if (page.items.length === 0)
    throw new ApiError(
      404,
      "REFERENCE_NOT_FOUND",
      "No resource matches the reference.",
      page.requestId,
      "resolveReference",
    );
  const item = page.items[0];
  if (!isRecord(item))
    throw new ProtocolError("Reference lookup returned a non-object resource.");
  return new ApiResponse(item as T, page.response);
}

export function referenceScope<T extends object>(scope: T): T {
  const result = { ...scope } as T & {
    name?: unknown;
    crn?: unknown;
    marker?: unknown;
  };
  delete result.name;
  delete result.crn;
  delete result.marker;
  return result;
}
