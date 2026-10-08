// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation, BinaryBody } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type CreateLogGroupBody = CreateLogGroupRequestInput;
export type CreateLogGroupResponse = LogGroupResponse;
export type GetLogResponse = LogResponse;
export type GetLogGroupResponse = LogGroupResponse;
export type GetRetainedTelemetryPresenceResponse = { has_resources: boolean };
export type GetTraceResponse = TraceResponse;
export type GetTraceSettingsResponse = TraceSettingsResponse;
export type IngestLogsBody = IngestRequestInput;
export type IngestLogsResponse = IngestResult;
export type IngestSpansBody = IngestSpansRequestInput;
export type IngestSpansResponse = IngestResult;
export type ListLogGroupsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListLogGroupsResponse = LogGroupListResponse;
export type ListLogGroupsItem = LogGroup;
export type ListMetricNamesQuery = { start: string; end: string };
export type ListMetricNamesResponse = { status?: string; data?: string[] };
export type ListMetricNamesItem = string;
export type ListMetricNamesPostBody = { start: string; end: string };
export type ListMetricNamesPostResponse = { status?: string; data?: string[] };
export type ListMetricSeriesQuery = {
  metric: string;
  start: string;
  end: string;
};
export type ListMetricSeriesResponse = { [key: string]: unknown };
export type ListMetricSeriesPostBody = {
  metric: string;
  start: string;
  end: string;
};
export type ListMetricSeriesPostResponse = { [key: string]: unknown };
export type PutTraceSettingsBody = UpdateTraceSettingsRequestInput;
export type PutTraceSettingsResponse = TraceSettingsResponse;
export type QueryMetricsInstantQuery = {
  metric: string;
  agg: "avg" | "sum" | "min" | "max" | "count" | "last" | "rate" | "increase";
  "match[]"?: string[];
  "by[]"?: string[];
  step?: string;
  time?: string;
};
export type QueryMetricsInstantResponse = { [key: string]: unknown };
export type QueryMetricsInstantPostBody = {
  metric: string;
  agg: "avg" | "sum" | "min" | "max" | "count" | "last" | "rate" | "increase";
  "match[]"?: string[];
  "by[]"?: string[];
  step?: string;
  time?: string;
};
export type QueryMetricsInstantPostResponse = { [key: string]: unknown };
export type QueryMetricsRangeQuery = {
  metric: string;
  agg: "avg" | "sum" | "min" | "max" | "count" | "last" | "rate" | "increase";
  "match[]"?: string[];
  "by[]"?: string[];
  start: string;
  end: string;
  step?: string;
};
export type QueryMetricsRangeResponse = { [key: string]: unknown };
export type QueryMetricsRangePostBody = {
  metric: string;
  agg: "avg" | "sum" | "min" | "max" | "count" | "last" | "rate" | "increase";
  "match[]"?: string[];
  "by[]"?: string[];
  start: string;
  end: string;
  step?: string;
};
export type QueryMetricsRangePostResponse = { [key: string]: unknown };
export type SearchLogsQuery = {
  from: string;
  to: string;
  log_group?: string;
  log_stream?: string;
  min_severity?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
  region?: string;
  q?: string;
  trace_id?: string;
  limit?: number;
  marker?: string;
};
export type SearchLogsResponse = LogListResponse;
export type SearchTracesQuery = {
  from: string;
  to: string;
  service?: string;
  operation?: string;
  status_code?: "UNSET" | "OK" | "ERROR";
  min_duration_ms?: number;
  limit?: number;
  marker?: string;
};
export type SearchTracesResponse = TraceListResponse;
export type UpdateLogGroupBody = UpdateLogGroupRequestInput;
export type UpdateLogGroupResponse = LogGroupResponse;
export type WriteMetricsBody = BinaryBody;
export type CreateLogGroupRequestInput = {
  name: string;
  description?: string;
  retention_days?: number | null;
  kms_key?: string;
  tags?: { [key: string]: string };
};
export type LogGroupResponse = { log_group?: LogGroup };
export type LogGroup = {
  id?: string;
  crn?: string;
  account_id?: string;
  name?: string;
  description?: string;
  retention_days?: number | null;
  kms_key_unavailable?: boolean;
  kms_key_crn?: string;
  tags?: { [key: string]: string };
  created_at?: string;
  updated_at?: string;
};
export type LogResponse = { log?: LogRecord };
export type LogRecord = {
  id?: string;
  timestamp?: string;
  organization_id?: string;
  account_id?: string;
  log_group_id?: string;
  log_group?: string;
  log_stream?: string;
  severity?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
  severity_number?: number;
  body?: string;
  attributes?: { [key: string]: string };
  resource?: { [key: string]: string };
  trace_id?: string;
  span_id?: string;
};
export type TraceResponse = { trace_id?: string; spans?: Span[] };
export type Span = {
  trace_id?: string;
  span_id?: string;
  parent_span_id?: string;
  name?: string;
  kind?: "INTERNAL" | "SERVER" | "CLIENT" | "PRODUCER" | "CONSUMER";
  service_name?: string;
  start_time?: string;
  end_time?: string;
  duration_ms?: number;
  status_code?: "UNSET" | "OK" | "ERROR";
  status_message?: string;
  attributes?: { [key: string]: string };
  resource?: { [key: string]: string };
  events?: SpanEvent[];
  links?: SpanLink[];
};
export type SpanEvent = {
  timestamp?: string;
  name: string;
  attributes?: { [key: string]: string };
};
export type SpanLink = { trace_id: string; span_id: string };
export type TraceSettingsResponse = { trace_settings?: TraceSettings };
export type TraceSettings = {
  account_id?: string;
  retention_days?: number | null;
  kms_key_unavailable?: boolean;
  kms_key_crn?: string;
  created_at?: string;
  updated_at?: string;
};
export type IngestRequestInput = { logs: IngestRecordInput[] };
export type IngestRecordInput = {
  timestamp?: string;
  log_group: string;
  log_stream: string;
  severity?: string;
  body: string;
  attributes?: { [key: string]: string };
  resource?: { [key: string]: string };
  trace_id?: string;
  span_id?: string;
};
export type IngestResult = {
  accepted?: number;
  rejected?: number;
  errors?: string[];
};
export type IngestSpansRequestInput = { spans: SpanIngestRecordInput[] };
export type SpanIngestRecordInput = {
  trace_id: string;
  span_id: string;
  parent_span_id?: string;
  name: string;
  kind?: "INTERNAL" | "SERVER" | "CLIENT" | "PRODUCER" | "CONSUMER";
  service_name?: string;
  start_time: string;
  end_time: string;
  status_code?: "UNSET" | "OK" | "ERROR";
  status_message?: string;
  attributes?: { [key: string]: string };
  resource?: { [key: string]: string };
  events?: SpanEventInput[];
  links?: SpanLinkInput[];
};
export type SpanEventInput = {
  timestamp?: string;
  name: string;
  attributes?: { [key: string]: string };
};
export type SpanLinkInput = { trace_id: string; span_id: string };
export type LogGroupListResponse = {
  log_groups?: LogGroup[];
  meta?: PaginationMeta;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type UpdateTraceSettingsRequestInput = {
  retention_days?: number | null;
  clear_retention?: boolean;
  kms_key?: string | null;
};
export type LogListResponse = { logs?: LogRecord[]; meta?: PaginationMeta };
export type TraceListResponse = {
  traces?: TraceSummary[];
  meta?: PaginationMeta;
};
export type TraceSummary = {
  trace_id?: string;
  root_span_id?: string;
  root_name?: string;
  root_service?: string;
  start_time?: string;
  duration_ms?: number;
  span_count?: number;
  error_count?: number;
  service_count?: number;
};
export type UpdateLogGroupRequestInput = {
  description?: string | null;
  retention_days?: number;
  clear_retention?: boolean;
  kms_key?: string | null;
  tags?: { [key: string]: string };
};
const operations = {
  createLogGroup: {
    id: "createLogGroup",
    method: "POST",
    path: "/v1/log-groups",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteLogGroup: {
    id: "deleteLogGroup",
    method: "DELETE",
    path: "/v1/log-groups/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteTraceSettings: {
    id: "deleteTraceSettings",
    method: "DELETE",
    path: "/v1/trace-settings",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getLog: {
    id: "getLog",
    method: "GET",
    path: "/v1/logs/{log_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getLogGroup: {
    id: "getLogGroup",
    method: "GET",
    path: "/v1/log-groups/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRetainedTelemetryPresence: {
    id: "getRetainedTelemetryPresence",
    method: "GET",
    path: "/v1/trace-settings/retained-data",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getTrace: {
    id: "getTrace",
    method: "GET",
    path: "/v1/traces/{trace_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getTraceSettings: {
    id: "getTraceSettings",
    method: "GET",
    path: "/v1/trace-settings",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  ingestLogs: {
    id: "ingestLogs",
    method: "POST",
    path: "/v1/logs",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  ingestSpans: {
    id: "ingestSpans",
    method: "POST",
    path: "/v1/spans",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  listLogGroups: {
    id: "listLogGroups",
    method: "GET",
    path: "/v1/log-groups",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "log_groups",
  },
  listMetricNames: {
    id: "listMetricNames",
    method: "GET",
    path: "/v1/metrics/names",
    authenticated: true,
    requiredQuery: ["start", "end"],
    requiredHeaders: [],
    queryEncoding: {
      start: { style: "form", explode: true },
      end: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "data",
  },
  listMetricNamesPost: {
    id: "listMetricNamesPost",
    method: "POST",
    path: "/v1/metrics/names",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/x-www-form-urlencoded",
    accept: "application/json",
  },
  listMetricSeries: {
    id: "listMetricSeries",
    method: "GET",
    path: "/v1/metrics/series",
    authenticated: true,
    requiredQuery: ["metric", "start", "end"],
    requiredHeaders: [],
    queryEncoding: {
      metric: { style: "form", explode: true },
      start: { style: "form", explode: true },
      end: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listMetricSeriesPost: {
    id: "listMetricSeriesPost",
    method: "POST",
    path: "/v1/metrics/series",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/x-www-form-urlencoded",
    accept: "application/json",
  },
  putTraceSettings: {
    id: "putTraceSettings",
    method: "PUT",
    path: "/v1/trace-settings",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  queryMetricsInstant: {
    id: "queryMetricsInstant",
    method: "GET",
    path: "/v1/metrics/query",
    authenticated: true,
    requiredQuery: ["metric", "agg"],
    requiredHeaders: [],
    queryEncoding: {
      metric: { style: "form", explode: true },
      agg: { style: "form", explode: true },
      "match[]": { style: "form", explode: true },
      "by[]": { style: "form", explode: true },
      step: { style: "form", explode: true },
      time: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  queryMetricsInstantPost: {
    id: "queryMetricsInstantPost",
    method: "POST",
    path: "/v1/metrics/query",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/x-www-form-urlencoded",
    accept: "application/json",
  },
  queryMetricsRange: {
    id: "queryMetricsRange",
    method: "GET",
    path: "/v1/metrics/query_range",
    authenticated: true,
    requiredQuery: ["metric", "agg", "start", "end"],
    requiredHeaders: [],
    queryEncoding: {
      metric: { style: "form", explode: true },
      agg: { style: "form", explode: true },
      "match[]": { style: "form", explode: true },
      "by[]": { style: "form", explode: true },
      start: { style: "form", explode: true },
      end: { style: "form", explode: true },
      step: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  queryMetricsRangePost: {
    id: "queryMetricsRangePost",
    method: "POST",
    path: "/v1/metrics/query_range",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/x-www-form-urlencoded",
    accept: "application/json",
  },
  searchLogs: {
    id: "searchLogs",
    method: "GET",
    path: "/v1/logs",
    authenticated: true,
    requiredQuery: ["from", "to"],
    requiredHeaders: [],
    queryEncoding: {
      from: { style: "form", explode: true },
      to: { style: "form", explode: true },
      log_group: { style: "form", explode: true },
      log_stream: { style: "form", explode: true },
      min_severity: { style: "form", explode: true },
      region: { style: "form", explode: true },
      q: { style: "form", explode: true },
      trace_id: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  searchTraces: {
    id: "searchTraces",
    method: "GET",
    path: "/v1/traces",
    authenticated: true,
    requiredQuery: ["from", "to"],
    requiredHeaders: [],
    queryEncoding: {
      from: { style: "form", explode: true },
      to: { style: "form", explode: true },
      service: { style: "form", explode: true },
      operation: { style: "form", explode: true },
      status_code: { style: "form", explode: true },
      min_duration_ms: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  updateLogGroup: {
    id: "updateLogGroup",
    method: "PATCH",
    path: "/v1/log-groups/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  writeMetrics: {
    id: "writeMetrics",
    method: "POST",
    path: "/v1/metrics/write",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/x-protobuf",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class TelemetryService {
  constructor(private readonly transport: Transport) {}
  /** Create a log group */
  createLogGroup(
    body: CreateLogGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateLogGroupResponse>> {
    return this.transport.json<CreateLogGroupResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.createLogGroup,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete a log group */
  deleteLogGroup(id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.deleteLogGroup,
      { id },
      undefined,
      {},
      options,
    );
  }
  /** Delete trace settings */
  deleteTraceSettings(options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.deleteTraceSettings,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Get a single log record by id */
  getLog(
    log_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetLogResponse>> {
    return this.transport.json<GetLogResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.getLog,
      { log_id },
      undefined,
      {},
      options,
    );
  }
  /** Get a log group by id */
  getLogGroup(
    id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetLogGroupResponse>> {
    return this.transport.json<GetLogGroupResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.getLogGroup,
      { id },
      undefined,
      {},
      options,
    );
  }
  getLogGroupByReference(
    reference: string,
    scope: Omit<ListLogGroupsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<LogGroup>> {
    return resolveReference<LogGroup>(
      reference,
      (id) => this.getLogGroup(id, options),
      (filter) =>
        this.listLogGroups(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "log_group",
    );
  }
  /** Check retained telemetry presence */
  getRetainedTelemetryPresence(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRetainedTelemetryPresenceResponse>> {
    return this.transport.json<GetRetainedTelemetryPresenceResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.getRetainedTelemetryPresence,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Get all spans for a trace */
  getTrace(
    trace_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetTraceResponse>> {
    return this.transport.json<GetTraceResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.getTrace,
      { trace_id },
      undefined,
      {},
      options,
    );
  }
  /** Get the caller account's trace settings */
  getTraceSettings(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetTraceSettingsResponse>> {
    return this.transport.json<GetTraceSettingsResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.getTraceSettings,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Ingest a batch of log records */
  ingestLogs(
    body: IngestLogsBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<IngestLogsResponse>> {
    return this.transport.json<IngestLogsResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.ingestLogs,
      {},
      body,
      {},
      options,
    );
  }
  /** Ingest a batch of trace spans */
  ingestSpans(
    body: IngestSpansBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<IngestSpansResponse>> {
    return this.transport.json<IngestSpansResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.ingestSpans,
      {},
      body,
      {},
      options,
    );
  }
  /** List log groups (or look up one by name) */
  listLogGroups(
    query: ListLogGroupsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListLogGroupsResponse, ListLogGroupsItem>> {
    return this.transport.page<ListLogGroupsResponse, ListLogGroupsItem>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.listLogGroups,
      {},
      undefined,
      query,
      options,
    );
  }
  listLogGroupsAll(
    query: ListLogGroupsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListLogGroupsItem> {
    return iteratePages(
      (marker) => this.listLogGroups({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List the distinct metric names emitted in a time window */
  listMetricNames(
    query: ListMetricNamesQuery,
    options: RequestOptions = {},
  ): Promise<Page<ListMetricNamesResponse, ListMetricNamesItem>> {
    return this.transport.page<ListMetricNamesResponse, ListMetricNamesItem>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.listMetricNames,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List the distinct metric names emitted in a time window (form body) */
  listMetricNamesPost(
    body: ListMetricNamesPostBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ListMetricNamesPostResponse>> {
    return this.transport.json<ListMetricNamesPostResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.listMetricNamesPost,
      {},
      body,
      {},
      options,
    );
  }
  /** List distinct label sets for a metric */
  listMetricSeries(
    query: ListMetricSeriesQuery,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ListMetricSeriesResponse>> {
    return this.transport.json<ListMetricSeriesResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.listMetricSeries,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List distinct label sets for a metric (form body) */
  listMetricSeriesPost(
    body: ListMetricSeriesPostBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ListMetricSeriesPostResponse>> {
    return this.transport.json<ListMetricSeriesPostResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.listMetricSeriesPost,
      {},
      body,
      {},
      options,
    );
  }
  /** Update the caller account's trace settings */
  putTraceSettings(
    body: PutTraceSettingsBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutTraceSettingsResponse>> {
    return this.transport.json<PutTraceSettingsResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.putTraceSettings,
      {},
      body,
      {},
      options,
    );
  }
  /** Instant structured metric query */
  queryMetricsInstant(
    query: QueryMetricsInstantQuery,
    options: RequestOptions = {},
  ): Promise<ApiResponse<QueryMetricsInstantResponse>> {
    return this.transport.json<QueryMetricsInstantResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.queryMetricsInstant,
      {},
      undefined,
      query,
      options,
    );
  }
  /** Instant structured metric query (form body) */
  queryMetricsInstantPost(
    body: QueryMetricsInstantPostBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<QueryMetricsInstantPostResponse>> {
    return this.transport.json<QueryMetricsInstantPostResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.queryMetricsInstantPost,
      {},
      body,
      {},
      options,
    );
  }
  /** Range structured metric query */
  queryMetricsRange(
    query: QueryMetricsRangeQuery,
    options: RequestOptions = {},
  ): Promise<ApiResponse<QueryMetricsRangeResponse>> {
    return this.transport.json<QueryMetricsRangeResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.queryMetricsRange,
      {},
      undefined,
      query,
      options,
    );
  }
  /** Range structured metric query (form body) */
  queryMetricsRangePost(
    body: QueryMetricsRangePostBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<QueryMetricsRangePostResponse>> {
    return this.transport.json<QueryMetricsRangePostResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.queryMetricsRangePost,
      {},
      body,
      {},
      options,
    );
  }
  /** Search log records */
  searchLogs(
    query: SearchLogsQuery,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SearchLogsResponse>> {
    return this.transport.json<SearchLogsResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.searchLogs,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List traces */
  searchTraces(
    query: SearchTracesQuery,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SearchTracesResponse>> {
    return this.transport.json<SearchTracesResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.searchTraces,
      {},
      undefined,
      query,
      options,
    );
  }
  /** Update a log group */
  updateLogGroup(
    id: string,
    body: UpdateLogGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateLogGroupResponse>> {
    return this.transport.json<UpdateLogGroupResponse>(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.updateLogGroup,
      { id },
      body,
      {},
      options,
    );
  }
  /** Prometheus remote_write ingest */
  writeMetrics(
    body: WriteMetricsBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "telemetry",
      "https://telemetry.{region}.basaltic.sh",
      operations.writeMetrics,
      {},
      body,
      {},
      options,
    );
  }
}
