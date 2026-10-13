// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { referenceScope, resolveReference } from "../response.js";
export type GetRegionResponse = RegionResponse;
export type ListRegionsQuery = { name?: string; crn?: string };
export type ListRegionsResponse = {
  regions: Region[];
  default: string;
  meta: PaginationMeta;
};
export type ListRegionsItem = Region;
export type RegionResponse = { region: Region };
export type Region = {
  state: "planned" | "active" | "restricted" | "retiring" | "retired";
  crn: string;
  code: string;
  name: string;
  location: string;
  country_code: string;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
const operations = {
  getRegion: {
    id: "getRegion",
    method: "GET",
    path: "/v1/regions/{code}",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listRegions: {
    id: "listRegions",
    method: "GET",
    path: "/v1/regions",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "regions",
  },
} as const satisfies Record<string, Operation>;
export class CatalogService {
  constructor(private readonly transport: Transport) {}
  /** Get a region */
  getRegion(
    code: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRegionResponse>> {
    return this.transport.json<GetRegionResponse>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.getRegion,
      { code },
      undefined,
      {},
      options,
    );
  }
  getRegionByReference(
    reference: string,
    scope: Omit<ListRegionsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Region>> {
    return resolveReference<Region>(
      reference,
      (id) => this.getRegion(id, options),
      (filter) =>
        this.listRegions({ ...referenceScope(scope), ...filter }, options),
      true,
      "region",
    );
  }
  /** List regions */
  listRegions(
    query: ListRegionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRegionsResponse, ListRegionsItem>> {
    return this.transport.page<ListRegionsResponse, ListRegionsItem>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.listRegions,
      {},
      undefined,
      query,
      options,
    );
  }
}
