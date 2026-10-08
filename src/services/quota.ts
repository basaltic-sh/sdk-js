// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { Page } from "../response.js";
export type ListQuotasQuery = { region?: string };
export type ListQuotasResponse = QuotaListResponse;
export type ListQuotasItem = QuotaItem;
export type QuotaListResponse = { quotas: QuotaItem[] };
export type QuotaItem = {
  service: string;
  resource_type: string;
  scope: "regional" | "global" | "per_resource";
  limit: number;
  in_use: number;
  reserved: number;
  available: number;
  is_default: boolean;
  description: string;
};
const operations = {
  listQuotas: {
    id: "listQuotas",
    method: "GET",
    path: "/v1/quotas",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: { region: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "quotas",
  },
} as const satisfies Record<string, Operation>;
export class QuotaService {
  constructor(private readonly transport: Transport) {}
  /** List quotas */
  listQuotas(
    query: ListQuotasQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListQuotasResponse, ListQuotasItem>> {
    return this.transport.page<ListQuotasResponse, ListQuotasItem>(
      "quota",
      "https://quota.basaltic.sh",
      operations.listQuotas,
      {},
      undefined,
      query,
      options,
    );
  }
}
