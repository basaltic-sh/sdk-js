// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse } from "../response.js";
export type ListQuotasQuery = { region?: string };
export type ListQuotasResponse = QuotaListResponse;
export type QuotaListResponse = {
  quotas: QuotaItem[];
  policies?: QuotaPolicy[];
};
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
export type QuotaPolicy = {
  service: "email";
  resource_type:
    | "message_size_bytes"
    | "sent_recipients_per_second"
    | "sent_recipients_per_day"
    | "received_recipients_per_second";
  scope: "regional";
  region: string;
  limit: number;
  unit: "bytes" | "recipients";
  window_seconds?: 1 | 86400;
  limit_source: "default" | "organization" | "region";
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
  },
} as const satisfies Record<string, Operation>;
export class QuotaService {
  constructor(private readonly transport: Transport) {}
  /** List quotas */
  listQuotas(
    query: ListQuotasQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<ListQuotasResponse>> {
    return this.transport.json<ListQuotasResponse>(
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
