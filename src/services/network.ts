// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type AttachFloatingIpBody = { interface: string; address_id: string };
export type AttachFloatingIpResponse = { floating_ip?: FloatingIp };
export type AttachInternetGatewayBody = InternetGatewayAttachRequestInput;
export type AttachInternetGatewayResponse = InternetGatewayResponse;
export type CreateEgressOnlyGatewayBody = EgressOnlyGatewayCreateRequestInput;
export type CreateEgressOnlyGatewayResponse = EgressOnlyGatewayResponse;
export type CreateFloatingIpBody = FloatingIpCreateRequestInput;
export type CreateFloatingIpResponse = FloatingIpResponse;
export type CreateInterfaceBody = InterfaceCreateRequestInput;
export type CreateInterfaceResponse = InterfaceResponse;
export type CreateInterfaceAddressBody = AddressRequestInput;
export type CreateInterfaceAddressResponse = { address?: InterfaceAddress };
export type CreateInterfacePrefixBody = { pool_id: string };
export type CreateInterfacePrefixResponse = {
  routed_prefixes?: RoutedPrefix[];
};
export type CreateInternetGatewayBody = InternetGatewayCreateRequestInput;
export type CreateInternetGatewayResponse = InternetGatewayResponse;
export type CreateNATGatewayBody = NATGatewayCreateRequestInput;
export type CreateNATGatewayResponse = NATGatewayResponse;
export type CreatePrefixPoolBody = { cidr_ipv4: string };
export type CreatePrefixPoolResponse = { prefix_pools?: PrefixPool[] };
export type CreateRouteBody = RouteCreateRequestInput;
export type CreateRouteResponse = RouteResponse;
export type CreateRouteTableBody = RouteTableCreateRequestInput;
export type CreateRouteTableResponse = RouteTableResponse;
export type CreateSecurityGroupBody = SecurityGroupCreateRequestInput;
export type CreateSecurityGroupResponse = SecurityGroupResponse;
export type CreateSecurityGroupRuleBody = SecurityGroupRuleCreateRequestInput;
export type CreateSecurityGroupRuleResponse = SecurityGroupRuleResponse;
export type CreateSubnetBody = SubnetCreateRequestInput;
export type CreateSubnetResponse = SubnetResponse;
export type CreateVpcBody = VpcCreateRequestInput;
export type CreateVpcResponse = VpcResponse;
export type DetachFloatingIpBody = { interface?: string };
export type DetachFloatingIpResponse = { floating_ip?: FloatingIp };
export type DetachInternetGatewayResponse = InternetGatewayResponse;
export type GetEgressOnlyGatewayResponse = EgressOnlyGatewayResponse;
export type GetFloatingIpResponse = FloatingIpResponse;
export type GetInterfaceResponse = InterfaceResponse;
export type GetInterfaceAddressResponse = { address?: InterfaceAddress };
export type GetInternetGatewayResponse = InternetGatewayResponse;
export type GetNATGatewayResponse = NATGatewayResponse;
export type GetRouteResponse = RouteResponse;
export type GetRouteTableResponse = RouteTableResponse;
export type GetSecurityGroupResponse = SecurityGroupResponse;
export type GetSecurityGroupRuleResponse = SecurityGroupRuleResponse;
export type GetSubnetResponse = SubnetResponse;
export type GetVpcResponse = VpcResponse;
export type ListEgressOnlyGatewayRoutesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListEgressOnlyGatewayRoutesResponse = GatewayRouteListResponse;
export type ListEgressOnlyGatewayRoutesItem = GatewayRoute;
export type ListEgressOnlyGatewaysQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListEgressOnlyGatewaysResponse = EgressOnlyGatewayListResponse;
export type ListEgressOnlyGatewaysItem = EgressOnlyGateway;
export type ListFloatingIpsQuery = {
  name?: string;
  crn?: string;
  attached_to?: string;
  limit?: number;
  marker?: string;
};
export type ListFloatingIpsResponse = FloatingIpListResponse;
export type ListFloatingIpsItem = FloatingIp;
export type ListInterfaceAddressesResponse = { addresses?: InterfaceAddress[] };
export type ListInterfaceAddressesItem = InterfaceAddress;
export type ListInterfacePrefixesResponse = {
  routed_prefixes?: RoutedPrefix[];
};
export type ListInterfacePrefixesItem = RoutedPrefix;
export type ListInterfaceSecurityGroupsQuery = { name?: string; crn?: string };
export type ListInterfaceSecurityGroupsResponse =
  InterfaceSecurityGroupsResponse;
export type ListInterfaceSecurityGroupsItem = string;
export type ListInterfacesQuery = {
  name?: string;
  crn?: string;
  subnet?: string;
  vpc?: string;
  limit?: number;
  marker?: string;
};
export type ListInterfacesResponse = InterfaceListResponse;
export type ListInterfacesItem = Interface;
export type ListInternetGatewayRoutesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListInternetGatewayRoutesResponse = GatewayRouteListResponse;
export type ListInternetGatewayRoutesItem = GatewayRoute;
export type ListInternetGatewaysQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListInternetGatewaysResponse = InternetGatewayListResponse;
export type ListInternetGatewaysItem = InternetGateway;
export type ListNATGatewayRoutesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListNATGatewayRoutesResponse = GatewayRouteListResponse;
export type ListNATGatewayRoutesItem = GatewayRoute;
export type ListNATGatewaysQuery = {
  name?: string;
  crn?: string;
  subnet?: string;
  vpc?: string;
  limit?: number;
  marker?: string;
};
export type ListNATGatewaysResponse = NATGatewayListResponse;
export type ListNATGatewaysItem = NATGateway;
export type ListPrefixPoolsResponse = { prefix_pools?: PrefixPool[] };
export type ListPrefixPoolsItem = PrefixPool;
export type ListRouteTablesQuery = {
  name?: string;
  crn?: string;
  vpc?: string;
  limit?: number;
  marker?: string;
};
export type ListRouteTablesResponse = RouteTableListResponse;
export type ListRouteTablesItem = RouteTable;
export type ListRoutesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListRoutesResponse = RouteListResponse;
export type ListRoutesItem = Route;
export type ListSecurityGroupRulesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListSecurityGroupRulesResponse = SecurityGroupRuleListResponse;
export type ListSecurityGroupRulesItem = SecurityGroupRule;
export type ListSecurityGroupsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListSecurityGroupsResponse = SecurityGroupListResponse;
export type ListSecurityGroupsItem = SecurityGroup;
export type ListSubnetsQuery = {
  name?: string;
  crn?: string;
  vpc?: string;
  limit?: number;
  marker?: string;
};
export type ListSubnetsResponse = SubnetListResponse;
export type ListSubnetsItem = Subnet;
export type ListVpcsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListVpcsResponse = VpcListResponse;
export type ListVpcsItem = Vpc;
export type SetInterfaceSecurityGroupsBody =
  InterfaceSecurityGroupsRequestInput;
export type SetInterfaceSecurityGroupsResponse =
  InterfaceSecurityGroupsResponse;
export type UpdateEgressOnlyGatewayBody = EgressOnlyGatewayUpdateRequestInput;
export type UpdateEgressOnlyGatewayResponse = EgressOnlyGatewayResponse;
export type UpdateFloatingIpBody = FloatingIpUpdateRequestInput;
export type UpdateFloatingIpResponse = FloatingIpResponse;
export type UpdateInterfaceBody = InterfaceUpdateRequestInput;
export type UpdateInterfaceResponse = InterfaceResponse;
export type UpdateInternetGatewayBody = InternetGatewayUpdateRequestInput;
export type UpdateInternetGatewayResponse = InternetGatewayResponse;
export type UpdateNATGatewayBody = NATGatewayUpdateRequestInput;
export type UpdateNATGatewayResponse = NATGatewayResponse;
export type UpdateRouteBody = RouteUpdateRequestInput;
export type UpdateRouteResponse = RouteResponse;
export type UpdateRouteTableBody = RouteTableUpdateRequestInput;
export type UpdateRouteTableResponse = RouteTableResponse;
export type UpdateSecurityGroupBody = SecurityGroupUpdateRequestInput;
export type UpdateSecurityGroupResponse = SecurityGroupResponse;
export type UpdateSubnetBody = SubnetUpdateRequestInput;
export type UpdateSubnetResponse = SubnetResponse;
export type UpdateVpcBody = VpcUpdateRequestInput;
export type UpdateVpcResponse = VpcResponse;
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
export type InternetGatewayAttachRequestInput = { vpc: string };
export type InternetGatewayResponse = { internet_gateway?: InternetGateway };
export type InternetGateway = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  attached_vpc_id?: string | null;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
};
export type EgressOnlyGatewayCreateRequestInput = {
  name: string;
  description?: string;
  vpc: string;
  tags?: { [key: string]: string };
};
export type EgressOnlyGatewayResponse = {
  egress_only_gateway?: EgressOnlyGateway;
};
export type EgressOnlyGateway = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  vpc: Vpc;
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
export type FloatingIpCreateRequestInput = {
  description?: string;
  family?: IpFamilyInput;
  tags?: { [key: string]: string };
  health_check?: FloatingIpHealthCheckInput;
  visibility?: "public" | "private";
  subnet?: string;
};
export type IpFamilyInput = "ipv4" | "ipv6";
export type FloatingIpHealthCheckInput = {
  protocol: "tcp" | "http" | "https";
  path?: string;
  port: number;
  interval_sec: number;
  timeout_sec: number;
  healthy_threshold: number;
  unhealthy_threshold: number;
  matcher?: string;
};
export type FloatingIpResponse = { floating_ip?: FloatingIp };
export type InterfaceCreateRequestInput = {
  subnet: string;
  name: string;
  description?: string;
  mac?: string | null;
  tags?: { [key: string]: string };
  addresses?: AddressRequestInput[];
};
export type AddressRequestInput = { family: "ipv4" | "ipv6"; address?: string };
export type InterfaceResponse = { interface?: Interface };
export type Interface = {
  id: string;
  crn: string;
  subnet: Subnet;
  name: string;
  description?: string;
  mac: string;
  attached_to?: string | null;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
  addresses: InterfaceAddress[];
  routed_prefixes: RoutedPrefix[];
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
export type RouteTableSummary = {
  id: string;
  crn: string;
  name: string;
} | null;
export type InterfaceAddress = {
  id: string;
  family: "ipv4" | "ipv6";
  address: string;
  prefix: string;
  primary: boolean;
  floating_ips: AddressFloatingIp[];
};
export type AddressFloatingIp = {
  id: string;
  crn: string;
  visibility: "public" | "private";
  address: string;
};
export type RoutedPrefix = {
  id: string;
  pool_id: string;
  family: "ipv4";
  prefix: string;
};
export type InternetGatewayCreateRequestInput = {
  name: string;
  description?: string;
  tags?: { [key: string]: string };
};
export type NATGatewayCreateRequestInput = {
  name: string;
  description?: string;
  subnet: string;
  tags?: { [key: string]: string };
};
export type NATGatewayResponse = { nat_gateway?: NATGateway };
export type NATGateway = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  subnet: Subnet;
  public_ipv4: string;
  public_ipv6?: string;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
};
export type PrefixPool = { id: string; cidr_ipv4: string };
export type RouteCreateRequestInput = {
  description?: string;
  destination_cidr: string;
  next_hop_ip?: string | null;
  target_internet_gateway?: string;
  target_nat_gateway?: string;
  target_egress_only_gateway?: string;
  tags?: { [key: string]: string };
};
export type RouteResponse = { route?: Route };
export type Route = {
  id: string;
  crn: string;
  route_table_id: string;
  description?: string;
  destination_cidr: string;
  target_type: RouteTargetType;
  next_hop_ip?: string | null;
  target_internet_gateway_id?: string | null;
  target_nat_gateway_id?: string | null;
  target_egress_only_gateway_id?: string | null;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
};
export type RouteTargetType =
  "ip" | "internet_gateway" | "nat_gateway" | "egress_only_gateway";
export type RouteTableCreateRequestInput = {
  vpc: string;
  name: string;
  description?: string;
  tags?: { [key: string]: string };
};
export type RouteTableResponse = { route_table?: RouteTable };
export type RouteTable = {
  id: string;
  crn: string;
  vpc: Vpc;
  name: string;
  description?: string;
  is_main: boolean;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
};
export type SecurityGroupCreateRequestInput = {
  name: string;
  description?: string;
  tags?: { [key: string]: string };
};
export type SecurityGroupResponse = { security_group?: SecurityGroup };
export type SecurityGroup = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  tags: { [key: string]: string };
  created_at: string;
  updated_at: string;
};
export type SecurityGroupRuleCreateRequestInput = {
  description?: string;
  direction: SecurityGroupRuleDirectionInput;
  ethertype?: SecurityGroupRuleEthertypeInput;
  protocol: SecurityGroupRuleProtocolInput;
  port_min?: number | null;
  port_max?: number | null;
  remote_cidr?: string | null;
  source_security_group?: string;
};
export type SecurityGroupRuleDirectionInput = "ingress" | "egress";
export type SecurityGroupRuleEthertypeInput = "ipv4" | "ipv6";
export type SecurityGroupRuleProtocolInput = "tcp" | "udp" | "icmp" | "all";
export type SecurityGroupRuleResponse = { rule?: SecurityGroupRule };
export type SecurityGroupRule = {
  id: string;
  security_group_id: string;
  description?: string;
  direction: SecurityGroupRuleDirection;
  ethertype: SecurityGroupRuleEthertype;
  protocol: SecurityGroupRuleProtocol;
  port_min?: number | null;
  port_max?: number | null;
  remote_cidr?: string | null;
  source_security_group_id?: string | null;
  created_at: string;
};
export type SecurityGroupRuleDirection = "ingress" | "egress";
export type SecurityGroupRuleEthertype = "ipv4" | "ipv6";
export type SecurityGroupRuleProtocol = "tcp" | "udp" | "icmp" | "all";
export type SubnetCreateRequestInput = {
  vpc: string;
  name: string;
  description?: string;
  cidr_ipv4: string;
  gateway_ipv4?: string | null;
  route_table?: string;
  allocate_cidr_ipv6?: boolean;
  cidr_ipv6?: string | null;
  tags?: { [key: string]: string };
};
export type SubnetResponse = { subnet?: Subnet };
export type VpcCreateRequestInput = {
  name: string;
  description?: string;
  cidr_ipv4: string;
  allocate_cidr_ipv6?: boolean;
  tags?: { [key: string]: string };
  cidr_ipv6?: string;
};
export type VpcResponse = { vpc?: Vpc };
export type GatewayRouteListResponse = {
  routes: GatewayRoute[];
  meta: PaginationMeta;
};
export type GatewayRoute = Route & { route_table: RouteTableSummary };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type EgressOnlyGatewayListResponse = {
  egress_only_gateways: EgressOnlyGateway[];
  meta: PaginationMeta;
};
export type FloatingIpListResponse = {
  floating_ips: FloatingIp[];
  meta: PaginationMeta;
};
export type InterfaceSecurityGroupsResponse = { security_group_ids: string[] };
export type InterfaceListResponse = {
  interfaces: Interface[];
  meta: PaginationMeta;
};
export type InternetGatewayListResponse = {
  internet_gateways: InternetGateway[];
  meta: PaginationMeta;
};
export type NATGatewayListResponse = {
  nat_gateways: NATGateway[];
  meta: PaginationMeta;
};
export type RouteTableListResponse = {
  route_tables: RouteTable[];
  meta: PaginationMeta;
};
export type RouteListResponse = { routes: Route[]; meta: PaginationMeta };
export type SecurityGroupRuleListResponse = {
  rules: SecurityGroupRule[];
  meta: PaginationMeta;
};
export type SecurityGroupListResponse = {
  security_groups: SecurityGroup[];
  meta: PaginationMeta;
};
export type SubnetListResponse = { subnets: Subnet[]; meta: PaginationMeta };
export type VpcListResponse = { vpcs: Vpc[]; meta: PaginationMeta };
export type InterfaceSecurityGroupsRequestInput = { security_groups: string[] };
export type EgressOnlyGatewayUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
};
export type FloatingIpUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
  health_check?:
    ({ [key: string]: unknown } & FloatingIpHealthCheckInput) | null;
};
export type InterfaceUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
};
export type InternetGatewayUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
};
export type NATGatewayUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
};
export type RouteUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
};
export type RouteTableUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
};
export type SecurityGroupUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
};
export type SubnetUpdateRequestInput = {
  description?: string | null;
  route_table?: string;
  tags?: { [key: string]: string };
  allocate_cidr_ipv6?: boolean;
  cidr_ipv6?: string | null;
  copy_ipv4_security_rules?: boolean;
  ipv6_routing?:
    | "match_ipv4"
    | "unchanged"
    | "internet_gateway"
    | "nat_gateway"
    | "egress_only_gateway";
};
export type VpcUpdateRequestInput = {
  description?: string | null;
  tags?: { [key: string]: string };
  allocate_cidr_ipv6?: boolean;
  cidr_ipv6?: string;
};
const operations = {
  attachFloatingIp: {
    id: "attachFloatingIp",
    method: "POST",
    path: "/v1/floating-ips/{floating_ip_id}/attach",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  attachInternetGateway: {
    id: "attachInternetGateway",
    method: "POST",
    path: "/v1/internet-gateways/{internet_gateway_id}/attach",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createEgressOnlyGateway: {
    id: "createEgressOnlyGateway",
    method: "POST",
    path: "/v1/egress-only-gateways",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createFloatingIp: {
    id: "createFloatingIp",
    method: "POST",
    path: "/v1/floating-ips",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  createInterface: {
    id: "createInterface",
    method: "POST",
    path: "/v1/interfaces",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createInterfaceAddress: {
    id: "createInterfaceAddress",
    method: "POST",
    path: "/v1/interfaces/{interface_id}/addresses",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createInterfacePrefix: {
    id: "createInterfacePrefix",
    method: "POST",
    path: "/v1/interfaces/{interface_id}/prefixes",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createInternetGateway: {
    id: "createInternetGateway",
    method: "POST",
    path: "/v1/internet-gateways",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createNATGateway: {
    id: "createNATGateway",
    method: "POST",
    path: "/v1/nat-gateways",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createPrefixPool: {
    id: "createPrefixPool",
    method: "POST",
    path: "/v1/vpcs/{vpc_id}/prefix-pools",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createRoute: {
    id: "createRoute",
    method: "POST",
    path: "/v1/route-tables/{route_table_id}/routes",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createRouteTable: {
    id: "createRouteTable",
    method: "POST",
    path: "/v1/route-tables",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createSecurityGroup: {
    id: "createSecurityGroup",
    method: "POST",
    path: "/v1/security-groups",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createSecurityGroupRule: {
    id: "createSecurityGroupRule",
    method: "POST",
    path: "/v1/security-groups/{security_group_id}/rules",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createSubnet: {
    id: "createSubnet",
    method: "POST",
    path: "/v1/subnets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createVpc: {
    id: "createVpc",
    method: "POST",
    path: "/v1/vpcs",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteEgressOnlyGateway: {
    id: "deleteEgressOnlyGateway",
    method: "DELETE",
    path: "/v1/egress-only-gateways/{egress_only_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteFloatingIp: {
    id: "deleteFloatingIp",
    method: "DELETE",
    path: "/v1/floating-ips/{floating_ip_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteInterface: {
    id: "deleteInterface",
    method: "DELETE",
    path: "/v1/interfaces/{interface_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteInterfaceAddress: {
    id: "deleteInterfaceAddress",
    method: "DELETE",
    path: "/v1/interfaces/{interface_id}/addresses/{address_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteInterfacePrefix: {
    id: "deleteInterfacePrefix",
    method: "DELETE",
    path: "/v1/interfaces/{interface_id}/prefixes/{prefix_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteInternetGateway: {
    id: "deleteInternetGateway",
    method: "DELETE",
    path: "/v1/internet-gateways/{internet_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteNATGateway: {
    id: "deleteNATGateway",
    method: "DELETE",
    path: "/v1/nat-gateways/{nat_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deletePrefixPool: {
    id: "deletePrefixPool",
    method: "DELETE",
    path: "/v1/vpcs/{vpc_id}/prefix-pools/{pool_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRoute: {
    id: "deleteRoute",
    method: "DELETE",
    path: "/v1/route-tables/{route_table_id}/routes/{route_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRouteTable: {
    id: "deleteRouteTable",
    method: "DELETE",
    path: "/v1/route-tables/{route_table_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteSecurityGroup: {
    id: "deleteSecurityGroup",
    method: "DELETE",
    path: "/v1/security-groups/{security_group_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteSecurityGroupRule: {
    id: "deleteSecurityGroupRule",
    method: "DELETE",
    path: "/v1/security-groups/{security_group_id}/rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteSubnet: {
    id: "deleteSubnet",
    method: "DELETE",
    path: "/v1/subnets/{subnet_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteVpc: {
    id: "deleteVpc",
    method: "DELETE",
    path: "/v1/vpcs/{vpc_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachFloatingIp: {
    id: "detachFloatingIp",
    method: "POST",
    path: "/v1/floating-ips/{floating_ip_id}/detach",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  detachInternetGateway: {
    id: "detachInternetGateway",
    method: "POST",
    path: "/v1/internet-gateways/{internet_gateway_id}/detach",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getEgressOnlyGateway: {
    id: "getEgressOnlyGateway",
    method: "GET",
    path: "/v1/egress-only-gateways/{egress_only_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getFloatingIp: {
    id: "getFloatingIp",
    method: "GET",
    path: "/v1/floating-ips/{floating_ip_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getInterface: {
    id: "getInterface",
    method: "GET",
    path: "/v1/interfaces/{interface_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getInterfaceAddress: {
    id: "getInterfaceAddress",
    method: "GET",
    path: "/v1/interfaces/{interface_id}/addresses/{address_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getInternetGateway: {
    id: "getInternetGateway",
    method: "GET",
    path: "/v1/internet-gateways/{internet_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getNATGateway: {
    id: "getNATGateway",
    method: "GET",
    path: "/v1/nat-gateways/{nat_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRoute: {
    id: "getRoute",
    method: "GET",
    path: "/v1/route-tables/{route_table_id}/routes/{route_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRouteTable: {
    id: "getRouteTable",
    method: "GET",
    path: "/v1/route-tables/{route_table_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSecurityGroup: {
    id: "getSecurityGroup",
    method: "GET",
    path: "/v1/security-groups/{security_group_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSecurityGroupRule: {
    id: "getSecurityGroupRule",
    method: "GET",
    path: "/v1/security-groups/{security_group_id}/rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSubnet: {
    id: "getSubnet",
    method: "GET",
    path: "/v1/subnets/{subnet_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getVpc: {
    id: "getVpc",
    method: "GET",
    path: "/v1/vpcs/{vpc_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listEgressOnlyGatewayRoutes: {
    id: "listEgressOnlyGatewayRoutes",
    method: "GET",
    path: "/v1/egress-only-gateways/{egress_only_gateway_id}/routes",
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
    itemsKey: "routes",
  },
  listEgressOnlyGateways: {
    id: "listEgressOnlyGateways",
    method: "GET",
    path: "/v1/egress-only-gateways",
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
    itemsKey: "egress_only_gateways",
  },
  listFloatingIps: {
    id: "listFloatingIps",
    method: "GET",
    path: "/v1/floating-ips",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      attached_to: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "floating_ips",
  },
  listInterfaceAddresses: {
    id: "listInterfaceAddresses",
    method: "GET",
    path: "/v1/interfaces/{interface_id}/addresses",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "addresses",
  },
  listInterfacePrefixes: {
    id: "listInterfacePrefixes",
    method: "GET",
    path: "/v1/interfaces/{interface_id}/prefixes",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "routed_prefixes",
  },
  listInterfaceSecurityGroups: {
    id: "listInterfaceSecurityGroups",
    method: "GET",
    path: "/v1/interfaces/{interface_id}/security-groups",
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
    itemsKey: "security_group_ids",
  },
  listInterfaces: {
    id: "listInterfaces",
    method: "GET",
    path: "/v1/interfaces",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      subnet: { style: "form", explode: true },
      vpc: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "interfaces",
  },
  listInternetGatewayRoutes: {
    id: "listInternetGatewayRoutes",
    method: "GET",
    path: "/v1/internet-gateways/{internet_gateway_id}/routes",
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
    itemsKey: "routes",
  },
  listInternetGateways: {
    id: "listInternetGateways",
    method: "GET",
    path: "/v1/internet-gateways",
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
    itemsKey: "internet_gateways",
  },
  listNATGatewayRoutes: {
    id: "listNATGatewayRoutes",
    method: "GET",
    path: "/v1/nat-gateways/{nat_gateway_id}/routes",
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
    itemsKey: "routes",
  },
  listNATGateways: {
    id: "listNATGateways",
    method: "GET",
    path: "/v1/nat-gateways",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      subnet: { style: "form", explode: true },
      vpc: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "nat_gateways",
  },
  listPrefixPools: {
    id: "listPrefixPools",
    method: "GET",
    path: "/v1/vpcs/{vpc_id}/prefix-pools",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "prefix_pools",
  },
  listRouteTables: {
    id: "listRouteTables",
    method: "GET",
    path: "/v1/route-tables",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      vpc: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "route_tables",
  },
  listRoutes: {
    id: "listRoutes",
    method: "GET",
    path: "/v1/route-tables/{route_table_id}/routes",
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
    itemsKey: "routes",
  },
  listSecurityGroupRules: {
    id: "listSecurityGroupRules",
    method: "GET",
    path: "/v1/security-groups/{security_group_id}/rules",
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
    itemsKey: "rules",
  },
  listSecurityGroups: {
    id: "listSecurityGroups",
    method: "GET",
    path: "/v1/security-groups",
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
    itemsKey: "security_groups",
  },
  listSubnets: {
    id: "listSubnets",
    method: "GET",
    path: "/v1/subnets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      vpc: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "subnets",
  },
  listVpcs: {
    id: "listVpcs",
    method: "GET",
    path: "/v1/vpcs",
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
    itemsKey: "vpcs",
  },
  setInterfaceSecurityGroups: {
    id: "setInterfaceSecurityGroups",
    method: "PUT",
    path: "/v1/interfaces/{interface_id}/security-groups",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateEgressOnlyGateway: {
    id: "updateEgressOnlyGateway",
    method: "PATCH",
    path: "/v1/egress-only-gateways/{egress_only_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateFloatingIp: {
    id: "updateFloatingIp",
    method: "PATCH",
    path: "/v1/floating-ips/{floating_ip_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateInterface: {
    id: "updateInterface",
    method: "PATCH",
    path: "/v1/interfaces/{interface_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateInternetGateway: {
    id: "updateInternetGateway",
    method: "PATCH",
    path: "/v1/internet-gateways/{internet_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateNATGateway: {
    id: "updateNATGateway",
    method: "PATCH",
    path: "/v1/nat-gateways/{nat_gateway_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateRoute: {
    id: "updateRoute",
    method: "PATCH",
    path: "/v1/route-tables/{route_table_id}/routes/{route_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateRouteTable: {
    id: "updateRouteTable",
    method: "PATCH",
    path: "/v1/route-tables/{route_table_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateSecurityGroup: {
    id: "updateSecurityGroup",
    method: "PATCH",
    path: "/v1/security-groups/{security_group_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateSubnet: {
    id: "updateSubnet",
    method: "PATCH",
    path: "/v1/subnets/{subnet_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateVpc: {
    id: "updateVpc",
    method: "PATCH",
    path: "/v1/vpcs/{vpc_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class NetworkService {
  constructor(private readonly transport: Transport) {}
  /** Attach a floating IP to an interface */
  attachFloatingIp(
    floating_ip_id: string,
    body: AttachFloatingIpBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AttachFloatingIpResponse>> {
    return this.transport.json<AttachFloatingIpResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.attachFloatingIp,
      { floating_ip_id },
      body,
      {},
      options,
    );
  }
  /** Attach internet gateway to a VPC */
  attachInternetGateway(
    internet_gateway_id: string,
    body: AttachInternetGatewayBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AttachInternetGatewayResponse>> {
    return this.transport.json<AttachInternetGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.attachInternetGateway,
      { internet_gateway_id },
      body,
      {},
      options,
    );
  }
  /** Create egress-only gateway */
  createEgressOnlyGateway(
    body: CreateEgressOnlyGatewayBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateEgressOnlyGatewayResponse>> {
    return this.transport.json<CreateEgressOnlyGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createEgressOnlyGateway,
      {},
      body,
      {},
      options,
    );
  }
  /** Allocate floating IP */
  createFloatingIp(
    body: CreateFloatingIpBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateFloatingIpResponse>> {
    return this.transport.json<CreateFloatingIpResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createFloatingIp,
      {},
      body,
      {},
      options,
    );
  }
  /** Create interface */
  createInterface(
    body: CreateInterfaceBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateInterfaceResponse>> {
    return this.transport.json<CreateInterfaceResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createInterface,
      {},
      body,
      {},
      options,
    );
  }
  /** Create interface address */
  createInterfaceAddress(
    interface_id: string,
    body: CreateInterfaceAddressBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateInterfaceAddressResponse>> {
    return this.transport.json<CreateInterfaceAddressResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createInterfaceAddress,
      { interface_id },
      body,
      {},
      options,
    );
  }
  /** Create interface prefix */
  createInterfacePrefix(
    interface_id: string,
    body: CreateInterfacePrefixBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateInterfacePrefixResponse>> {
    return this.transport.json<CreateInterfacePrefixResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createInterfacePrefix,
      { interface_id },
      body,
      {},
      options,
    );
  }
  /** Create internet gateway */
  createInternetGateway(
    body: CreateInternetGatewayBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateInternetGatewayResponse>> {
    return this.transport.json<CreateInternetGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createInternetGateway,
      {},
      body,
      {},
      options,
    );
  }
  /** Create NAT gateway */
  createNATGateway(
    body: CreateNATGatewayBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateNATGatewayResponse>> {
    return this.transport.json<CreateNATGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createNATGateway,
      {},
      body,
      {},
      options,
    );
  }
  /** Create prefix pool */
  createPrefixPool(
    vpc_id: string,
    body: CreatePrefixPoolBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreatePrefixPoolResponse>> {
    return this.transport.json<CreatePrefixPoolResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createPrefixPool,
      { vpc_id },
      body,
      {},
      options,
    );
  }
  /** Create route */
  createRoute(
    route_table_id: string,
    body: CreateRouteBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateRouteResponse>> {
    return this.transport.json<CreateRouteResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createRoute,
      { route_table_id },
      body,
      {},
      options,
    );
  }
  /** Create route table */
  createRouteTable(
    body: CreateRouteTableBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateRouteTableResponse>> {
    return this.transport.json<CreateRouteTableResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createRouteTable,
      {},
      body,
      {},
      options,
    );
  }
  /** Create security group */
  createSecurityGroup(
    body: CreateSecurityGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSecurityGroupResponse>> {
    return this.transport.json<CreateSecurityGroupResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createSecurityGroup,
      {},
      body,
      {},
      options,
    );
  }
  /** Create security group rule */
  createSecurityGroupRule(
    security_group_id: string,
    body: CreateSecurityGroupRuleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSecurityGroupRuleResponse>> {
    return this.transport.json<CreateSecurityGroupRuleResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createSecurityGroupRule,
      { security_group_id },
      body,
      {},
      options,
    );
  }
  /** Create subnet */
  createSubnet(
    body: CreateSubnetBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSubnetResponse>> {
    return this.transport.json<CreateSubnetResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createSubnet,
      {},
      body,
      {},
      options,
    );
  }
  /** Create VPC */
  createVpc(
    body: CreateVpcBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateVpcResponse>> {
    return this.transport.json<CreateVpcResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.createVpc,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete egress-only gateway */
  deleteEgressOnlyGateway(
    egress_only_gateway_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteEgressOnlyGateway,
      { egress_only_gateway_id },
      undefined,
      {},
      options,
    );
  }
  /** Release floating IP */
  deleteFloatingIp(
    floating_ip_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteFloatingIp,
      { floating_ip_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete interface */
  deleteInterface(
    interface_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteInterface,
      { interface_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete interface address */
  deleteInterfaceAddress(
    interface_id: string,
    address_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteInterfaceAddress,
      { interface_id, address_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete interface prefix */
  deleteInterfacePrefix(
    interface_id: string,
    prefix_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteInterfacePrefix,
      { interface_id, prefix_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete internet gateway */
  deleteInternetGateway(
    internet_gateway_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteInternetGateway,
      { internet_gateway_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete NAT gateway */
  deleteNATGateway(
    nat_gateway_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteNATGateway,
      { nat_gateway_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete prefix pool */
  deletePrefixPool(
    vpc_id: string,
    pool_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deletePrefixPool,
      { vpc_id, pool_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete route */
  deleteRoute(
    route_table_id: string,
    route_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteRoute,
      { route_table_id, route_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete route table */
  deleteRouteTable(
    route_table_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteRouteTable,
      { route_table_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete security group */
  deleteSecurityGroup(
    security_group_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteSecurityGroup,
      { security_group_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete security group rule */
  deleteSecurityGroupRule(
    security_group_id: string,
    rule_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteSecurityGroupRule,
      { security_group_id, rule_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete subnet */
  deleteSubnet(subnet_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteSubnet,
      { subnet_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete VPC */
  deleteVpc(vpc_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.deleteVpc,
      { vpc_id },
      undefined,
      {},
      options,
    );
  }
  /** Detach a floating IP */
  detachFloatingIp(
    floating_ip_id: string,
    body: DetachFloatingIpBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DetachFloatingIpResponse>> {
    return this.transport.json<DetachFloatingIpResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.detachFloatingIp,
      { floating_ip_id },
      body,
      {},
      options,
    );
  }
  /** Detach internet gateway from its VPC */
  detachInternetGateway(
    internet_gateway_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DetachInternetGatewayResponse>> {
    return this.transport.json<DetachInternetGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.detachInternetGateway,
      { internet_gateway_id },
      undefined,
      {},
      options,
    );
  }
  /** Get egress-only gateway */
  getEgressOnlyGateway(
    egress_only_gateway_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetEgressOnlyGatewayResponse>> {
    return this.transport.json<GetEgressOnlyGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getEgressOnlyGateway,
      { egress_only_gateway_id },
      undefined,
      {},
      options,
    );
  }
  getEgressOnlyGatewayByReference(
    reference: string,
    scope: Omit<ListEgressOnlyGatewaysQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<EgressOnlyGateway>> {
    return resolveReference<EgressOnlyGateway>(
      reference,
      (id) => this.getEgressOnlyGateway(id, options),
      (filter) =>
        this.listEgressOnlyGateways(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "egress_only_gateway",
    );
  }
  /** Get floating IP */
  getFloatingIp(
    floating_ip_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetFloatingIpResponse>> {
    return this.transport.json<GetFloatingIpResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getFloatingIp,
      { floating_ip_id },
      undefined,
      {},
      options,
    );
  }
  getFloatingIpByReference(
    reference: string,
    scope: Omit<ListFloatingIpsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<FloatingIp>> {
    return resolveReference<FloatingIp>(
      reference,
      (id) => this.getFloatingIp(id, options),
      (filter) =>
        this.listFloatingIps(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "floating_ip",
    );
  }
  /** Get interface */
  getInterface(
    interface_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInterfaceResponse>> {
    return this.transport.json<GetInterfaceResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getInterface,
      { interface_id },
      undefined,
      {},
      options,
    );
  }
  getInterfaceByReference(
    reference: string,
    scope: Omit<ListInterfacesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Interface>> {
    return resolveReference<Interface>(
      reference,
      (id) => this.getInterface(id, options),
      (filter) =>
        this.listInterfaces(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "interface",
    );
  }
  /** Get interface address */
  getInterfaceAddress(
    interface_id: string,
    address_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInterfaceAddressResponse>> {
    return this.transport.json<GetInterfaceAddressResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getInterfaceAddress,
      { interface_id, address_id },
      undefined,
      {},
      options,
    );
  }
  /** Get internet gateway */
  getInternetGateway(
    internet_gateway_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInternetGatewayResponse>> {
    return this.transport.json<GetInternetGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getInternetGateway,
      { internet_gateway_id },
      undefined,
      {},
      options,
    );
  }
  getInternetGatewayByReference(
    reference: string,
    scope: Omit<ListInternetGatewaysQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<InternetGateway>> {
    return resolveReference<InternetGateway>(
      reference,
      (id) => this.getInternetGateway(id, options),
      (filter) =>
        this.listInternetGateways(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "internet_gateway",
    );
  }
  /** Get NAT gateway */
  getNATGateway(
    nat_gateway_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetNATGatewayResponse>> {
    return this.transport.json<GetNATGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getNATGateway,
      { nat_gateway_id },
      undefined,
      {},
      options,
    );
  }
  getNATGatewayByReference(
    reference: string,
    scope: Omit<ListNATGatewaysQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<NATGateway>> {
    return resolveReference<NATGateway>(
      reference,
      (id) => this.getNATGateway(id, options),
      (filter) =>
        this.listNATGateways(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "nat_gateway",
    );
  }
  /** Get route */
  getRoute(
    route_table_id: string,
    route_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRouteResponse>> {
    return this.transport.json<GetRouteResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getRoute,
      { route_table_id, route_id },
      undefined,
      {},
      options,
    );
  }
  getRouteByReference(
    route_table_id: string,
    reference: string,
    scope: Omit<ListRoutesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Route>> {
    return resolveReference<Route>(
      reference,
      (id) => this.getRoute(route_table_id, id, options),
      (filter) =>
        this.listRoutes(
          route_table_id,
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "route",
    );
  }
  /** Get route table */
  getRouteTable(
    route_table_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRouteTableResponse>> {
    return this.transport.json<GetRouteTableResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getRouteTable,
      { route_table_id },
      undefined,
      {},
      options,
    );
  }
  getRouteTableByReference(
    reference: string,
    scope: Omit<ListRouteTablesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<RouteTable>> {
    return resolveReference<RouteTable>(
      reference,
      (id) => this.getRouteTable(id, options),
      (filter) =>
        this.listRouteTables(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "route_table",
    );
  }
  /** Get security group */
  getSecurityGroup(
    security_group_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSecurityGroupResponse>> {
    return this.transport.json<GetSecurityGroupResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getSecurityGroup,
      { security_group_id },
      undefined,
      {},
      options,
    );
  }
  getSecurityGroupByReference(
    reference: string,
    scope: Omit<ListSecurityGroupsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<SecurityGroup>> {
    return resolveReference<SecurityGroup>(
      reference,
      (id) => this.getSecurityGroup(id, options),
      (filter) =>
        this.listSecurityGroups(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "security_group",
    );
  }
  /** Get security group rule */
  getSecurityGroupRule(
    security_group_id: string,
    rule_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSecurityGroupRuleResponse>> {
    return this.transport.json<GetSecurityGroupRuleResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getSecurityGroupRule,
      { security_group_id, rule_id },
      undefined,
      {},
      options,
    );
  }
  getSecurityGroupRuleByReference(
    security_group_id: string,
    reference: string,
    scope: Omit<ListSecurityGroupRulesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<SecurityGroupRule>> {
    return resolveReference<SecurityGroupRule>(
      reference,
      (id) => this.getSecurityGroupRule(security_group_id, id, options),
      (filter) =>
        this.listSecurityGroupRules(
          security_group_id,
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "rule",
    );
  }
  /** Get subnet */
  getSubnet(
    subnet_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSubnetResponse>> {
    return this.transport.json<GetSubnetResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getSubnet,
      { subnet_id },
      undefined,
      {},
      options,
    );
  }
  getSubnetByReference(
    reference: string,
    scope: Omit<ListSubnetsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Subnet>> {
    return resolveReference<Subnet>(
      reference,
      (id) => this.getSubnet(id, options),
      (filter) =>
        this.listSubnets(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "subnet",
    );
  }
  /** Get VPC */
  getVpc(
    vpc_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetVpcResponse>> {
    return this.transport.json<GetVpcResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.getVpc,
      { vpc_id },
      undefined,
      {},
      options,
    );
  }
  getVpcByReference(
    reference: string,
    scope: Omit<ListVpcsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Vpc>> {
    return resolveReference<Vpc>(
      reference,
      (id) => this.getVpc(id, options),
      (filter) =>
        this.listVpcs(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "vpc",
    );
  }
  /** List egress-only gateway routes */
  listEgressOnlyGatewayRoutes(
    egress_only_gateway_id: string,
    query: ListEgressOnlyGatewayRoutesQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListEgressOnlyGatewayRoutesResponse, ListEgressOnlyGatewayRoutesItem>
  > {
    return this.transport.page<
      ListEgressOnlyGatewayRoutesResponse,
      ListEgressOnlyGatewayRoutesItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listEgressOnlyGatewayRoutes,
      { egress_only_gateway_id },
      undefined,
      query,
      options,
    );
  }
  listEgressOnlyGatewayRoutesAll(
    egress_only_gateway_id: string,
    query: ListEgressOnlyGatewayRoutesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListEgressOnlyGatewayRoutesItem> {
    return iteratePages(
      (marker) =>
        this.listEgressOnlyGatewayRoutes(
          egress_only_gateway_id,
          { ...query, marker },
          options,
        ),
      query.marker ?? "",
    );
  }
  /** List egress-only gateways */
  listEgressOnlyGateways(
    query: ListEgressOnlyGatewaysQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListEgressOnlyGatewaysResponse, ListEgressOnlyGatewaysItem>> {
    return this.transport.page<
      ListEgressOnlyGatewaysResponse,
      ListEgressOnlyGatewaysItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listEgressOnlyGateways,
      {},
      undefined,
      query,
      options,
    );
  }
  listEgressOnlyGatewaysAll(
    query: ListEgressOnlyGatewaysQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListEgressOnlyGatewaysItem> {
    return iteratePages(
      (marker) => this.listEgressOnlyGateways({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List floating IPs */
  listFloatingIps(
    query: ListFloatingIpsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListFloatingIpsResponse, ListFloatingIpsItem>> {
    return this.transport.page<ListFloatingIpsResponse, ListFloatingIpsItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listFloatingIps,
      {},
      undefined,
      query,
      options,
    );
  }
  listFloatingIpsAll(
    query: ListFloatingIpsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListFloatingIpsItem> {
    return iteratePages(
      (marker) => this.listFloatingIps({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List interface addresses */
  listInterfaceAddresses(
    interface_id: string,
    options: RequestOptions = {},
  ): Promise<Page<ListInterfaceAddressesResponse, ListInterfaceAddressesItem>> {
    return this.transport.page<
      ListInterfaceAddressesResponse,
      ListInterfaceAddressesItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listInterfaceAddresses,
      { interface_id },
      undefined,
      {},
      options,
    );
  }
  /** List interface prefixes */
  listInterfacePrefixes(
    interface_id: string,
    options: RequestOptions = {},
  ): Promise<Page<ListInterfacePrefixesResponse, ListInterfacePrefixesItem>> {
    return this.transport.page<
      ListInterfacePrefixesResponse,
      ListInterfacePrefixesItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listInterfacePrefixes,
      { interface_id },
      undefined,
      {},
      options,
    );
  }
  /** List interface security-group membership */
  listInterfaceSecurityGroups(
    interface_id: string,
    query: ListInterfaceSecurityGroupsQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListInterfaceSecurityGroupsResponse, ListInterfaceSecurityGroupsItem>
  > {
    return this.transport.page<
      ListInterfaceSecurityGroupsResponse,
      ListInterfaceSecurityGroupsItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listInterfaceSecurityGroups,
      { interface_id },
      undefined,
      query,
      options,
    );
  }
  /** List interfaces */
  listInterfaces(
    query: ListInterfacesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInterfacesResponse, ListInterfacesItem>> {
    return this.transport.page<ListInterfacesResponse, ListInterfacesItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listInterfaces,
      {},
      undefined,
      query,
      options,
    );
  }
  listInterfacesAll(
    query: ListInterfacesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInterfacesItem> {
    return iteratePages(
      (marker) => this.listInterfaces({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List internet gateway routes */
  listInternetGatewayRoutes(
    internet_gateway_id: string,
    query: ListInternetGatewayRoutesQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListInternetGatewayRoutesResponse, ListInternetGatewayRoutesItem>
  > {
    return this.transport.page<
      ListInternetGatewayRoutesResponse,
      ListInternetGatewayRoutesItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listInternetGatewayRoutes,
      { internet_gateway_id },
      undefined,
      query,
      options,
    );
  }
  listInternetGatewayRoutesAll(
    internet_gateway_id: string,
    query: ListInternetGatewayRoutesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInternetGatewayRoutesItem> {
    return iteratePages(
      (marker) =>
        this.listInternetGatewayRoutes(
          internet_gateway_id,
          { ...query, marker },
          options,
        ),
      query.marker ?? "",
    );
  }
  /** List internet gateways */
  listInternetGateways(
    query: ListInternetGatewaysQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInternetGatewaysResponse, ListInternetGatewaysItem>> {
    return this.transport.page<
      ListInternetGatewaysResponse,
      ListInternetGatewaysItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listInternetGateways,
      {},
      undefined,
      query,
      options,
    );
  }
  listInternetGatewaysAll(
    query: ListInternetGatewaysQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInternetGatewaysItem> {
    return iteratePages(
      (marker) => this.listInternetGateways({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List NAT gateway routes */
  listNATGatewayRoutes(
    nat_gateway_id: string,
    query: ListNATGatewayRoutesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListNATGatewayRoutesResponse, ListNATGatewayRoutesItem>> {
    return this.transport.page<
      ListNATGatewayRoutesResponse,
      ListNATGatewayRoutesItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listNATGatewayRoutes,
      { nat_gateway_id },
      undefined,
      query,
      options,
    );
  }
  listNATGatewayRoutesAll(
    nat_gateway_id: string,
    query: ListNATGatewayRoutesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListNATGatewayRoutesItem> {
    return iteratePages(
      (marker) =>
        this.listNATGatewayRoutes(
          nat_gateway_id,
          { ...query, marker },
          options,
        ),
      query.marker ?? "",
    );
  }
  /** List NAT gateways */
  listNATGateways(
    query: ListNATGatewaysQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListNATGatewaysResponse, ListNATGatewaysItem>> {
    return this.transport.page<ListNATGatewaysResponse, ListNATGatewaysItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listNATGateways,
      {},
      undefined,
      query,
      options,
    );
  }
  listNATGatewaysAll(
    query: ListNATGatewaysQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListNATGatewaysItem> {
    return iteratePages(
      (marker) => this.listNATGateways({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List prefix pools */
  listPrefixPools(
    vpc_id: string,
    options: RequestOptions = {},
  ): Promise<Page<ListPrefixPoolsResponse, ListPrefixPoolsItem>> {
    return this.transport.page<ListPrefixPoolsResponse, ListPrefixPoolsItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listPrefixPools,
      { vpc_id },
      undefined,
      {},
      options,
    );
  }
  /** List route tables */
  listRouteTables(
    query: ListRouteTablesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRouteTablesResponse, ListRouteTablesItem>> {
    return this.transport.page<ListRouteTablesResponse, ListRouteTablesItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listRouteTables,
      {},
      undefined,
      query,
      options,
    );
  }
  listRouteTablesAll(
    query: ListRouteTablesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListRouteTablesItem> {
    return iteratePages(
      (marker) => this.listRouteTables({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List routes */
  listRoutes(
    route_table_id: string,
    query: ListRoutesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRoutesResponse, ListRoutesItem>> {
    return this.transport.page<ListRoutesResponse, ListRoutesItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listRoutes,
      { route_table_id },
      undefined,
      query,
      options,
    );
  }
  listRoutesAll(
    route_table_id: string,
    query: ListRoutesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListRoutesItem> {
    return iteratePages(
      (marker) =>
        this.listRoutes(route_table_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List security group rules */
  listSecurityGroupRules(
    security_group_id: string,
    query: ListSecurityGroupRulesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSecurityGroupRulesResponse, ListSecurityGroupRulesItem>> {
    return this.transport.page<
      ListSecurityGroupRulesResponse,
      ListSecurityGroupRulesItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listSecurityGroupRules,
      { security_group_id },
      undefined,
      query,
      options,
    );
  }
  listSecurityGroupRulesAll(
    security_group_id: string,
    query: ListSecurityGroupRulesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSecurityGroupRulesItem> {
    return iteratePages(
      (marker) =>
        this.listSecurityGroupRules(
          security_group_id,
          { ...query, marker },
          options,
        ),
      query.marker ?? "",
    );
  }
  /** List security groups */
  listSecurityGroups(
    query: ListSecurityGroupsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSecurityGroupsResponse, ListSecurityGroupsItem>> {
    return this.transport.page<
      ListSecurityGroupsResponse,
      ListSecurityGroupsItem
    >(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listSecurityGroups,
      {},
      undefined,
      query,
      options,
    );
  }
  listSecurityGroupsAll(
    query: ListSecurityGroupsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSecurityGroupsItem> {
    return iteratePages(
      (marker) => this.listSecurityGroups({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List subnets */
  listSubnets(
    query: ListSubnetsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSubnetsResponse, ListSubnetsItem>> {
    return this.transport.page<ListSubnetsResponse, ListSubnetsItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listSubnets,
      {},
      undefined,
      query,
      options,
    );
  }
  listSubnetsAll(
    query: ListSubnetsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSubnetsItem> {
    return iteratePages(
      (marker) => this.listSubnets({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List VPCs */
  listVpcs(
    query: ListVpcsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListVpcsResponse, ListVpcsItem>> {
    return this.transport.page<ListVpcsResponse, ListVpcsItem>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.listVpcs,
      {},
      undefined,
      query,
      options,
    );
  }
  listVpcsAll(
    query: ListVpcsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListVpcsItem> {
    return iteratePages(
      (marker) => this.listVpcs({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Set interface security-group membership */
  setInterfaceSecurityGroups(
    interface_id: string,
    body: SetInterfaceSecurityGroupsBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SetInterfaceSecurityGroupsResponse>> {
    return this.transport.json<SetInterfaceSecurityGroupsResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.setInterfaceSecurityGroups,
      { interface_id },
      body,
      {},
      options,
    );
  }
  /** Update egress-only gateway */
  updateEgressOnlyGateway(
    egress_only_gateway_id: string,
    body: UpdateEgressOnlyGatewayBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateEgressOnlyGatewayResponse>> {
    return this.transport.json<UpdateEgressOnlyGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateEgressOnlyGateway,
      { egress_only_gateway_id },
      body,
      {},
      options,
    );
  }
  /** Update floating IP */
  updateFloatingIp(
    floating_ip_id: string,
    body: UpdateFloatingIpBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateFloatingIpResponse>> {
    return this.transport.json<UpdateFloatingIpResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateFloatingIp,
      { floating_ip_id },
      body,
      {},
      options,
    );
  }
  /** Update interface */
  updateInterface(
    interface_id: string,
    body: UpdateInterfaceBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateInterfaceResponse>> {
    return this.transport.json<UpdateInterfaceResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateInterface,
      { interface_id },
      body,
      {},
      options,
    );
  }
  /** Update internet gateway */
  updateInternetGateway(
    internet_gateway_id: string,
    body: UpdateInternetGatewayBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateInternetGatewayResponse>> {
    return this.transport.json<UpdateInternetGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateInternetGateway,
      { internet_gateway_id },
      body,
      {},
      options,
    );
  }
  /** Update NAT gateway */
  updateNATGateway(
    nat_gateway_id: string,
    body: UpdateNATGatewayBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateNATGatewayResponse>> {
    return this.transport.json<UpdateNATGatewayResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateNATGateway,
      { nat_gateway_id },
      body,
      {},
      options,
    );
  }
  /** Update route */
  updateRoute(
    route_table_id: string,
    route_id: string,
    body: UpdateRouteBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateRouteResponse>> {
    return this.transport.json<UpdateRouteResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateRoute,
      { route_table_id, route_id },
      body,
      {},
      options,
    );
  }
  /** Update route table */
  updateRouteTable(
    route_table_id: string,
    body: UpdateRouteTableBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateRouteTableResponse>> {
    return this.transport.json<UpdateRouteTableResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateRouteTable,
      { route_table_id },
      body,
      {},
      options,
    );
  }
  /** Update security group */
  updateSecurityGroup(
    security_group_id: string,
    body: UpdateSecurityGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateSecurityGroupResponse>> {
    return this.transport.json<UpdateSecurityGroupResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateSecurityGroup,
      { security_group_id },
      body,
      {},
      options,
    );
  }
  /** Update subnet */
  updateSubnet(
    subnet_id: string,
    body: UpdateSubnetBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateSubnetResponse>> {
    return this.transport.json<UpdateSubnetResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateSubnet,
      { subnet_id },
      body,
      {},
      options,
    );
  }
  /** Update VPC */
  updateVpc(
    vpc_id: string,
    body: UpdateVpcBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateVpcResponse>> {
    return this.transport.json<UpdateVpcResponse>(
      "network",
      "https://network.{region}.basaltic.sh",
      operations.updateVpc,
      { vpc_id },
      body,
      {},
      options,
    );
  }
}
