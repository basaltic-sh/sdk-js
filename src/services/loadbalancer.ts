// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type AttachListenerCertificateBody =
  AttachListenerCertificateRequestInput;
export type AttachListenerCertificateResponse = ListenerResponse;
export type AttachTargetBody = AttachTargetRequestInput;
export type AttachTargetResponse = TargetResponse;
export type CreateListenerBody = CreateListenerRequestInput;
export type CreateListenerResponse = ListenerResponse;
export type CreateLoadBalancerBody = CreateLoadBalancerRequestInput;
export type CreateLoadBalancerResponse = LoadBalancerResponse;
export type CreateRuleBody = CreateRuleRequestInput;
export type CreateRuleResponse = RuleResponse;
export type CreateTargetGroupBody = CreateTargetGroupRequestInput;
export type CreateTargetGroupResponse = TargetGroupResponse;
export type GetListenerResponse = ListenerResponse;
export type GetLoadBalancerResponse = LoadBalancerResponse;
export type GetRuleResponse = RuleResponse;
export type GetTargetResponse = TargetResponse;
export type GetTargetGroupResponse = TargetGroupResponse;
export type ListListenersQuery = { name?: string; crn?: string };
export type ListListenersResponse = ListenerListResponse;
export type ListListenersItem = Listener;
export type ListLoadBalancerReplicasQuery = { name?: string; crn?: string };
export type ListLoadBalancerReplicasResponse = LoadBalancerReplicasResponse;
export type ListLoadBalancerReplicasItem = LoadBalancerReplica;
export type ListLoadBalancersQuery = {
  name?: string;
  crn?: string;
  status?: "provisioning" | "active" | "error" | "deleting";
  limit?: number;
  marker?: string;
};
export type ListLoadBalancersResponse = LoadBalancerListResponse;
export type ListLoadBalancersItem = LoadBalancer;
export type ListRulesQuery = { name?: string; crn?: string };
export type ListRulesResponse = RuleListResponse;
export type ListRulesItem = Rule;
export type ListTargetGroupsQuery = {
  name?: string;
  crn?: string;
  protocol?: "http" | "https" | "tcp" | "udp";
  limit?: number;
  marker?: string;
};
export type ListTargetGroupsResponse = TargetGroupListResponse;
export type ListTargetGroupsItem = TargetGroup;
export type ListTargetsQuery = { name?: string; crn?: string };
export type ListTargetsResponse = TargetListResponse;
export type ListTargetsItem = Target;
export type UpdateListenerBody = UpdateListenerRequestInput;
export type UpdateListenerResponse = ListenerResponse;
export type UpdateLoadBalancerBody = UpdateLoadBalancerRequestInput;
export type UpdateLoadBalancerResponse = LoadBalancerResponse;
export type UpdateRuleBody = UpdateRuleRequestInput;
export type UpdateRuleResponse = RuleResponse;
export type UpdateTargetGroupBody = UpdateTargetGroupRequestInput;
export type UpdateTargetGroupResponse = TargetGroupResponse;
export type AttachListenerCertificateRequestInput = {
  certificate: string;
  is_default?: boolean;
};
export type ListenerResponse = { listener?: Listener };
export type Listener = {
  crn: string;
  id: string;
  load_balancer_id: string;
  protocol: "http" | "https" | "tcp" | "udp";
  port: number;
  certificates?: ListenerCertificate[];
  default_target_group_id?: string;
  exposure: "public_only" | "private_only" | "both";
  tags: Tags;
  created_at: string;
  updated_at: string;
};
export type ListenerCertificate = {
  id: string;
  certificate_crn: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
};
export type Tags = { [key: string]: string };
export type AttachTargetRequestInput = { target: string; port?: number };
export type TargetResponse = { target?: Target };
export type Target = {
  id: string;
  target_group_id: string;
  target_ref: string;
  port?: number;
  health: "initial" | "healthy" | "unhealthy" | "draining";
  last_seen_at?: string;
  created_at: string;
  updated_at: string;
};
export type CreateListenerRequestInput = {
  protocol: "http" | "https" | "tcp" | "udp";
  port: number;
  certificates?: CreateListenerCertificateInput[];
  default_target_group?: string;
  exposure?: "public_only" | "private_only" | "both";
  tags?: TagsInput;
};
export type CreateListenerCertificateInput = { certificate: string };
export type TagsInput = { [key: string]: string };
export type CreateLoadBalancerRequestInput = {
  desired_count?: number;
  min_count?: number;
  max_count?: number;
  autoscaling?: AutoscalingPolicyInput;
  name: string;
  type: "application" | "network";
  vpc: string;
  subnet: string;
  flavor: string;
  replica_count?: number;
  floating_ip?: string;
  floating_ips?: string[];
  security_groups: string[];
  tags?: TagsInput;
};
export type AutoscalingPolicyInput = {
  enabled: boolean;
  metrics: ScalingMetricInput[];
  warmup_seconds?: number;
  cooldown_seconds?: number;
  scale_down_stabilization_seconds?: number;
  max_scale_out_step?: number;
  max_scale_in_step?: number;
  drain_seconds?: number;
};
export type ScalingMetricInput = {
  source: "cpu" | "telemetry";
  target_type: "utilization" | "average_value";
  target_value: number;
  name?: string;
  labels?: { [key: string]: string };
  sample_aggregation?: "last" | "avg" | "max" | "rate";
  series_aggregation?: "sum" | "avg" | "max";
  expected_series?: number;
  window_seconds?: number;
  max_age_seconds?: number;
};
export type LoadBalancerResponse = { load_balancer?: LoadBalancer };
export type LoadBalancer = {
  rollout_surge?: boolean;
  desired_count: number;
  min_count: number;
  max_count: number;
  autoscaling?: AutoscalingPolicy;
  autoscaling_status?: AutoscalingStatus;
  id: string;
  crn: string;
  account_id: string;
  name: string;
  type: "application" | "network";
  status: "provisioning" | "active" | "error" | "deleting";
  faults: Fault[];
  subnet: Subnet | null;
  flavor_id: string;
  replica_count: number;
  internal_ipv4?: string;
  internal_ipv6?: string;
  public_ipv6?: string;
  floating_ip_id?: string;
  floating_ips: FloatingIp[];
  dns_name?: string;
  tags: Tags;
  created_at: string;
  updated_at: string;
};
export type AutoscalingPolicy = {
  enabled: boolean;
  metrics: ScalingMetric[];
  warmup_seconds?: number;
  cooldown_seconds?: number;
  scale_down_stabilization_seconds?: number;
  max_scale_out_step?: number;
  max_scale_in_step?: number;
  drain_seconds?: number;
};
export type ScalingMetric = {
  source: "cpu" | "telemetry";
  target_type: "utilization" | "average_value";
  target_value: number;
  name?: string;
  labels?: { [key: string]: string };
  sample_aggregation?: "last" | "avg" | "max" | "rate";
  series_aggregation?: "sum" | "avg" | "max";
  expected_series?: number;
  window_seconds?: number;
  max_age_seconds?: number;
};
export type AutoscalingStatus = {
  status:
    | "pending"
    | "disabled"
    | "stable"
    | "scaling"
    | "waiting"
    | "warming_up"
    | "metrics_unavailable"
    | "stabilizing"
    | "cooldown"
    | "draining";
  reason: string;
  evaluated_at?: string;
  last_scaled_at?: string;
  history: { at: string; from: number; to: number; reason: string }[];
};
export type Fault = {
  code: string;
  severity: "error" | "warning";
  message: string;
  details: { [key: string]: unknown } | null;
  first_at: string;
  last_at: string;
  occurrences: number;
};
export type Subnet = {
  id: string;
  crn: string;
  vpc: Vpc;
  route_table: RouteTableSummary;
  name: string;
  description?: string;
  cidr_ipv4: string;
  gateway_ipv4: string;
  cidr_ipv6?: string | null;
  gateway_ipv6?: string | null;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
};
export type Vpc = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  cidr_ipv4: string;
  cidr_ipv6?: string | null;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
};
export type RouteTableSummary = {
  id: string;
  crn: string;
  name: string;
} | null;
export type FloatingIp = {
  id: string;
  crn: string;
  description?: string;
  family: IpFamily;
  attached_to: string | null;
  members: FloatingIpMember[];
  tags: { [key: string]: string };
  health_check?: FloatingIpHealthCheck;
  created_at: string;
  updated_at: string;
  address: string;
  visibility: "public" | "private";
  subnet_id?: string | null;
  vpc_id?: string;
};
export type IpFamily = "ipv4" | "ipv6";
export type FloatingIpMember = {
  interface: {
    id: string;
    crn: string;
    instance: { id: string; crn: string; name: string } | null;
  } | null;
  health: "unknown" | "healthy" | "unhealthy";
  reason: "unprobed" | "booting" | "probe_failed" | "passing";
  created_at: string;
  address_id?: string | null;
};
export type FloatingIpHealthCheck = {
  protocol: "tcp" | "http" | "https";
  path?: string;
  port: number;
  interval_sec: number;
  timeout_sec: number;
  healthy_threshold: number;
  unhealthy_threshold: number;
  matcher?: string;
};
export type CreateRuleRequestInput = {
  priority: number;
  conditions: RuleConditionInput[];
  target_group: string;
};
export type RuleConditionInput = {
  field: "host" | "path" | "header" | "query" | "method";
  op: "exact" | "prefix" | "glob" | "regex";
  name?: string;
  values: string[];
};
export type RuleResponse = { rule?: Rule };
export type Rule = {
  crn: string;
  id: string;
  listener_id: string;
  priority: number;
  conditions: RuleCondition[];
  target_group_id: string;
  created_at: string;
  updated_at: string;
};
export type RuleCondition = {
  field: "host" | "path" | "header" | "query" | "method";
  op: "exact" | "prefix" | "glob" | "regex";
  name?: string;
  values: string[];
};
export type CreateTargetGroupRequestInput = {
  name: string;
  protocol: "http" | "https" | "tcp" | "udp";
  target_type?: "ip" | "instance" | "function";
  port: number;
  health_check?: HealthCheckInput;
  proxy_protocol?: boolean;
  session_affinity?: SessionAffinityInput;
  target_mode?: "static" | "pool";
  instance_pool?: string;
  tags?: TagsInput;
};
export type HealthCheckInput = {
  enabled?: boolean;
  protocol?: "http" | "https" | "tcp" | "udp" | "";
  path?: string;
  port?: number;
  interval_sec?: number;
  timeout_sec?: number;
  healthy_threshold?: number;
  unhealthy_threshold?: number;
  matcher?: string;
};
export type SessionAffinityInput = {
  type: "none" | "cookie" | "source_ip";
  cookie_name?: string;
  duration_sec?: number;
};
export type TargetGroupResponse = { target_group?: TargetGroup };
export type TargetGroup = {
  id: string;
  crn: string;
  account_id: string;
  name: string;
  protocol: "http" | "https" | "tcp" | "udp";
  target_type: "ip" | "instance" | "function";
  port: number;
  health_check: HealthCheck;
  proxy_protocol: boolean;
  session_affinity: SessionAffinity;
  target_mode: "static" | "pool";
  instance_pool_id?: string;
  tags: Tags;
  created_at: string;
  updated_at: string;
};
export type HealthCheck = {
  enabled?: boolean;
  protocol?: "http" | "https" | "tcp" | "udp" | "";
  path?: string;
  port?: number;
  interval_sec?: number;
  timeout_sec?: number;
  healthy_threshold?: number;
  unhealthy_threshold?: number;
  matcher?: string;
};
export type SessionAffinity = {
  type: "none" | "cookie" | "source_ip";
  cookie_name?: string;
  duration_sec?: number;
};
export type ListenerListResponse = { listeners?: Listener[] };
export type LoadBalancerReplicasResponse = { replicas?: LoadBalancerReplica[] };
export type LoadBalancerReplica = {
  retirement?: Retirement;
  instance_id: string;
  replica_index: number;
  created_at: string;
  flavor_id: string;
  status: "initializing" | "healthy" | "unhealthy" | "draining";
  proxy_ok: boolean;
  agent_version?: string;
  last_seen?: string;
};
export type Retirement = {
  requested_at: string;
  drain_seconds: number;
  agent_acknowledged_at?: string;
  drain_until?: string;
};
export type LoadBalancerListResponse = {
  load_balancers?: LoadBalancer[];
  meta?: PaginationMeta;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type RuleListResponse = { rules?: Rule[] };
export type TargetGroupListResponse = {
  target_groups?: TargetGroup[];
  meta?: PaginationMeta;
};
export type TargetListResponse = { targets?: Target[] };
export type UpdateListenerRequestInput = {
  certificate?: string;
  default_target_group?: string;
  clear_default_target_group?: boolean;
  exposure?: "public_only" | "private_only" | "both";
  tags?: TagsInput;
};
export type UpdateLoadBalancerRequestInput = {
  desired_count?: number;
  min_count?: number;
  max_count?: number;
  autoscaling?: AutoscalingPolicyInput;
  replica_count?: number;
  flavor?: string;
  tags?: TagsInput;
};
export type UpdateRuleRequestInput = {
  priority: number;
  conditions: RuleConditionInput[];
  target_group: string;
};
export type UpdateTargetGroupRequestInput = {
  health_check?: HealthCheckPatchInput;
  proxy_protocol?: boolean;
  session_affinity?: SessionAffinityInput;
  tags?: TagsInput;
};
export type HealthCheckPatchInput = {
  enabled?: boolean;
  protocol?: ProtocolInput;
  path?: PathInput;
  port?: number;
  interval_sec?: IntervalSecInput;
  timeout_sec?: TimeoutSecInput;
  healthy_threshold?: HealthyThresholdInput;
  unhealthy_threshold?: UnhealthyThresholdInput;
  matcher?: MatcherInput;
};
export type ProtocolInput = "http" | "https" | "tcp" | "udp" | "";
export type PathInput = string;
export type IntervalSecInput = number;
export type TimeoutSecInput = number;
export type HealthyThresholdInput = number;
export type UnhealthyThresholdInput = number;
export type MatcherInput = string;
const operations = {
  attachListenerCertificate: {
    id: "attachListenerCertificate",
    method: "POST",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}/certificates",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  attachTarget: {
    id: "attachTarget",
    method: "POST",
    path: "/v1/target-groups/{id}/targets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createListener: {
    id: "createListener",
    method: "POST",
    path: "/v1/load-balancers/{id}/listeners",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createLoadBalancer: {
    id: "createLoadBalancer",
    method: "POST",
    path: "/v1/load-balancers",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createRule: {
    id: "createRule",
    method: "POST",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}/rules",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createTargetGroup: {
    id: "createTargetGroup",
    method: "POST",
    path: "/v1/target-groups",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteListener: {
    id: "deleteListener",
    method: "DELETE",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteLoadBalancer: {
    id: "deleteLoadBalancer",
    method: "DELETE",
    path: "/v1/load-balancers/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRuleInListener: {
    id: "deleteRuleInListener",
    method: "DELETE",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}/rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteTargetGroup: {
    id: "deleteTargetGroup",
    method: "DELETE",
    path: "/v1/target-groups/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachListenerCertificate: {
    id: "detachListenerCertificate",
    method: "DELETE",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}/certificates/{certificate_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachTarget: {
    id: "detachTarget",
    method: "DELETE",
    path: "/v1/target-groups/{id}/targets/{target_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getListener: {
    id: "getListener",
    method: "GET",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getLoadBalancer: {
    id: "getLoadBalancer",
    method: "GET",
    path: "/v1/load-balancers/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRule: {
    id: "getRule",
    method: "GET",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}/rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getTarget: {
    id: "getTarget",
    method: "GET",
    path: "/v1/target-groups/{id}/targets/{target_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getTargetGroup: {
    id: "getTargetGroup",
    method: "GET",
    path: "/v1/target-groups/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listListeners: {
    id: "listListeners",
    method: "GET",
    path: "/v1/load-balancers/{id}/listeners",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "listeners",
  },
  listLoadBalancerReplicas: {
    id: "listLoadBalancerReplicas",
    method: "GET",
    path: "/v1/load-balancers/{id}/replicas",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "replicas",
  },
  listLoadBalancers: {
    id: "listLoadBalancers",
    method: "GET",
    path: "/v1/load-balancers",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      status: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "load_balancers",
  },
  listRules: {
    id: "listRules",
    method: "GET",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}/rules",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "rules",
  },
  listTargetGroups: {
    id: "listTargetGroups",
    method: "GET",
    path: "/v1/target-groups",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      protocol: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "target_groups",
  },
  listTargets: {
    id: "listTargets",
    method: "GET",
    path: "/v1/target-groups/{id}/targets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "targets",
  },
  updateListener: {
    id: "updateListener",
    method: "PATCH",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateLoadBalancer: {
    id: "updateLoadBalancer",
    method: "PATCH",
    path: "/v1/load-balancers/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateRule: {
    id: "updateRule",
    method: "PATCH",
    path: "/v1/load-balancers/{id}/listeners/{listener_id}/rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateTargetGroup: {
    id: "updateTargetGroup",
    method: "PATCH",
    path: "/v1/target-groups/{id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class LoadbalancerService {
  constructor(private readonly transport: Transport) {}
  /** Attach an additional certificate to an HTTPS listener */
  attachListenerCertificate(
    id: string,
    listener_id: string,
    body: AttachListenerCertificateBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AttachListenerCertificateResponse>> {
    return this.transport.json<AttachListenerCertificateResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.attachListenerCertificate,
      { id, listener_id },
      body,
      {},
      options,
    );
  }
  /** Attach a target to this group */
  attachTarget(
    id: string,
    body: AttachTargetBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AttachTargetResponse>> {
    return this.transport.json<AttachTargetResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.attachTarget,
      { id },
      body,
      {},
      options,
    );
  }
  /** Create a listener on this load balancer */
  createListener(
    id: string,
    body: CreateListenerBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateListenerResponse>> {
    return this.transport.json<CreateListenerResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.createListener,
      { id },
      body,
      {},
      options,
    );
  }
  /** Create a load balancer */
  createLoadBalancer(
    body: CreateLoadBalancerBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateLoadBalancerResponse>> {
    return this.transport.json<CreateLoadBalancerResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.createLoadBalancer,
      {},
      body,
      {},
      options,
    );
  }
  /** Create a routing rule on this listener (HTTP/HTTPS only) */
  createRule(
    id: string,
    listener_id: string,
    body: CreateRuleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateRuleResponse>> {
    return this.transport.json<CreateRuleResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.createRule,
      { id, listener_id },
      body,
      {},
      options,
    );
  }
  /** Create a target group */
  createTargetGroup(
    body: CreateTargetGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateTargetGroupResponse>> {
    return this.transport.json<CreateTargetGroupResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.createTargetGroup,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete a listener */
  deleteListener(
    id: string,
    listener_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.deleteListener,
      { id, listener_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a load balancer */
  deleteLoadBalancer(id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.deleteLoadBalancer,
      { id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a routing rule */
  deleteRuleInListener(
    id: string,
    listener_id: string,
    rule_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.deleteRuleInListener,
      { id, listener_id, rule_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a target group */
  deleteTargetGroup(id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.deleteTargetGroup,
      { id },
      undefined,
      {},
      options,
    );
  }
  /** Detach a certificate from an HTTPS listener */
  detachListenerCertificate(
    id: string,
    listener_id: string,
    certificate_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.detachListenerCertificate,
      { id, listener_id, certificate_id },
      undefined,
      {},
      options,
    );
  }
  /** Detach a target */
  detachTarget(
    id: string,
    target_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.detachTarget,
      { id, target_id },
      undefined,
      {},
      options,
    );
  }
  /** Get a listener */
  getListener(
    id: string,
    listener_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetListenerResponse>> {
    return this.transport.json<GetListenerResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.getListener,
      { id, listener_id },
      undefined,
      {},
      options,
    );
  }
  getListenerByReference(
    id: string,
    reference: string,
    scope: Omit<ListListenersQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Listener>> {
    return resolveReference<Listener>(
      reference,
      (id) => this.getListener(id, id, options),
      (filter) =>
        this.listListeners(
          id,
          { ...referenceScope(scope), ...filter },
          options,
        ),
      true,
      "listener",
    );
  }
  /** Get a load balancer */
  getLoadBalancer(
    id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetLoadBalancerResponse>> {
    return this.transport.json<GetLoadBalancerResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.getLoadBalancer,
      { id },
      undefined,
      {},
      options,
    );
  }
  getLoadBalancerByReference(
    reference: string,
    scope: Omit<ListLoadBalancersQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<LoadBalancer>> {
    return resolveReference<LoadBalancer>(
      reference,
      (id) => this.getLoadBalancer(id, options),
      (filter) =>
        this.listLoadBalancers(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "load_balancer",
    );
  }
  /** Get a routing rule */
  getRule(
    id: string,
    listener_id: string,
    rule_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRuleResponse>> {
    return this.transport.json<GetRuleResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.getRule,
      { id, listener_id, rule_id },
      undefined,
      {},
      options,
    );
  }
  getRuleByReference(
    id: string,
    listener_id: string,
    reference: string,
    scope: Omit<ListRulesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Rule>> {
    return resolveReference<Rule>(
      reference,
      (id) => this.getRule(id, listener_id, id, options),
      (filter) =>
        this.listRules(
          id,
          listener_id,
          { ...referenceScope(scope), ...filter },
          options,
        ),
      true,
      "rule",
    );
  }
  /** Get a target */
  getTarget(
    id: string,
    target_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetTargetResponse>> {
    return this.transport.json<GetTargetResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.getTarget,
      { id, target_id },
      undefined,
      {},
      options,
    );
  }
  getTargetByReference(
    id: string,
    reference: string,
    scope: Omit<ListTargetsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Target>> {
    return resolveReference<Target>(
      reference,
      (id) => this.getTarget(id, id, options),
      (filter) =>
        this.listTargets(id, { ...referenceScope(scope), ...filter }, options),
      true,
      "target",
    );
  }
  /** Get a target group */
  getTargetGroup(
    id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetTargetGroupResponse>> {
    return this.transport.json<GetTargetGroupResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.getTargetGroup,
      { id },
      undefined,
      {},
      options,
    );
  }
  getTargetGroupByReference(
    reference: string,
    scope: Omit<ListTargetGroupsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<TargetGroup>> {
    return resolveReference<TargetGroup>(
      reference,
      (id) => this.getTargetGroup(id, options),
      (filter) =>
        this.listTargetGroups(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "target_group",
    );
  }
  /** List this load balancer's listeners */
  listListeners(
    id: string,
    query: ListListenersQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListListenersResponse, ListListenersItem>> {
    return this.transport.page<ListListenersResponse, ListListenersItem>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.listListeners,
      { id },
      undefined,
      query,
      options,
    );
  }
  /** List the LB's instance replicas with live health */
  listLoadBalancerReplicas(
    id: string,
    query: ListLoadBalancerReplicasQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListLoadBalancerReplicasResponse, ListLoadBalancerReplicasItem>
  > {
    return this.transport.page<
      ListLoadBalancerReplicasResponse,
      ListLoadBalancerReplicasItem
    >(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.listLoadBalancerReplicas,
      { id },
      undefined,
      query,
      options,
    );
  }
  /** List load balancers */
  listLoadBalancers(
    query: ListLoadBalancersQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListLoadBalancersResponse, ListLoadBalancersItem>> {
    return this.transport.page<
      ListLoadBalancersResponse,
      ListLoadBalancersItem
    >(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.listLoadBalancers,
      {},
      undefined,
      query,
      options,
    );
  }
  listLoadBalancersAll(
    query: ListLoadBalancersQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListLoadBalancersItem> {
    return iteratePages(
      (marker) => this.listLoadBalancers({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List this listener's rules */
  listRules(
    id: string,
    listener_id: string,
    query: ListRulesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRulesResponse, ListRulesItem>> {
    return this.transport.page<ListRulesResponse, ListRulesItem>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.listRules,
      { id, listener_id },
      undefined,
      query,
      options,
    );
  }
  /** List target groups */
  listTargetGroups(
    query: ListTargetGroupsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListTargetGroupsResponse, ListTargetGroupsItem>> {
    return this.transport.page<ListTargetGroupsResponse, ListTargetGroupsItem>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.listTargetGroups,
      {},
      undefined,
      query,
      options,
    );
  }
  listTargetGroupsAll(
    query: ListTargetGroupsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListTargetGroupsItem> {
    return iteratePages(
      (marker) => this.listTargetGroups({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List targets in this group */
  listTargets(
    id: string,
    query: ListTargetsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListTargetsResponse, ListTargetsItem>> {
    return this.transport.page<ListTargetsResponse, ListTargetsItem>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.listTargets,
      { id },
      undefined,
      query,
      options,
    );
  }
  /** Patch a listener (rotate cert, change default target group) */
  updateListener(
    id: string,
    listener_id: string,
    body: UpdateListenerBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateListenerResponse>> {
    return this.transport.json<UpdateListenerResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.updateListener,
      { id, listener_id },
      body,
      {},
      options,
    );
  }
  /** Scale or resize a load balancer */
  updateLoadBalancer(
    id: string,
    body: UpdateLoadBalancerBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateLoadBalancerResponse>> {
    return this.transport.json<UpdateLoadBalancerResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.updateLoadBalancer,
      { id },
      body,
      {},
      options,
    );
  }
  /** Update a routing rule (full replace) */
  updateRule(
    id: string,
    listener_id: string,
    rule_id: string,
    body: UpdateRuleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateRuleResponse>> {
    return this.transport.json<UpdateRuleResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.updateRule,
      { id, listener_id, rule_id },
      body,
      {},
      options,
    );
  }
  /** Update target group health checks, framing, or stickiness */
  updateTargetGroup(
    id: string,
    body: UpdateTargetGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateTargetGroupResponse>> {
    return this.transport.json<UpdateTargetGroupResponse>(
      "loadbalancer",
      "https://loadbalancer.{region}.basaltic.sh",
      operations.updateTargetGroup,
      { id },
      body,
      {},
      options,
    );
  }
}
