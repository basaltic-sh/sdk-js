// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type GetAuditLogResponse = AuditLogResponse;
export type ListAuditLogsQuery = {
  crn?: string;
  actor?: string;
  actor_type?: "user" | "service_account" | "system";
  action?: string;
  resource_type?: string;
  resource?: string;
  status?: "success" | "failure" | "denied";
  ip_address?: string;
  from?: string;
  to?: string;
  limit?: number;
  marker?: string;
};
export type ListAuditLogsResponse = AuditLogListResponse;
export type ListAuditLogsItem = AuditLog;
export type AuditLogResponse = { audit_log?: AuditLog };
export type AuditLog = {
  crn?: string;
  id?: string;
  timestamp?: string;
  actor_crn?: string | null;
  resource_crn?: string | null;
  actor_name?: string | null;
  actor_email?: string | null;
  action?: string;
  status?: "success" | "failure" | "denied";
  resource_name?: string | null;
  ip_address?: string | null;
  user_agent?: string | null;
  request_id?: string | null;
  details?: { [key: string]: unknown };
  error_code?: string | null;
  error_message?: string | null;
};
export type AuditLogListResponse = {
  audit_logs?: AuditLog[];
  meta?: PaginationMeta;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
const operations = {
  getAuditLog: {
    id: "getAuditLog",
    method: "GET",
    path: "/v1/audit-logs/{log_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listAuditLogs: {
    id: "listAuditLogs",
    method: "GET",
    path: "/v1/audit-logs",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      actor: { style: "form", explode: true },
      actor_type: { style: "form", explode: true },
      action: { style: "form", explode: true },
      resource_type: { style: "form", explode: true },
      resource: { style: "form", explode: true },
      status: { style: "form", explode: true },
      ip_address: { style: "form", explode: true },
      from: { style: "form", explode: true },
      to: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "audit_logs",
  },
} as const satisfies Record<string, Operation>;
export class AuditService {
  constructor(private readonly transport: Transport) {}
  /** Get audit log entry */
  getAuditLog(
    log_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetAuditLogResponse>> {
    return this.transport.json<GetAuditLogResponse>(
      "audit",
      "https://audit.basaltic.sh",
      operations.getAuditLog,
      { log_id },
      undefined,
      {},
      options,
    );
  }
  getAuditLogByReference(
    reference: string,
    scope: Omit<ListAuditLogsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<AuditLog>> {
    return resolveReference<AuditLog>(
      reference,
      (id) => this.getAuditLog(id, options),
      (filter) =>
        this.listAuditLogs(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      false,
      "audit_log",
    );
  }
  /** List audit logs */
  listAuditLogs(
    query: ListAuditLogsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListAuditLogsResponse, ListAuditLogsItem>> {
    return this.transport.page<ListAuditLogsResponse, ListAuditLogsItem>(
      "audit",
      "https://audit.basaltic.sh",
      operations.listAuditLogs,
      {},
      undefined,
      query,
      options,
    );
  }
  listAuditLogsAll(
    query: ListAuditLogsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListAuditLogsItem> {
    return iteratePages(
      (marker) => this.listAuditLogs({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
}
