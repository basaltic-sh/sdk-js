// Generated from the Basaltic API definitions. Do not edit.
import type {
  Transport,
  Operation,
  WebSocketConnection,
} from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type AttachInstanceNICBody = { interface: string };
export type AttachInstanceNICResponse = {
  attachment?: {
    interface_id?: string;
    mac?: string;
    boot_index?: number;
    external?: boolean;
    restart_required?: boolean;
    addresses?: InterfaceAddress[];
  };
};
export type AttachInstancePoolFloatingIpBody =
  InstancePoolFloatingIpAttachRequestInput;
export type AttachInstancePoolFloatingIpResponse =
  InstancePoolFloatingIpResponse;
export type AttachInstanceVolumeBody = {
  volume: string;
  device?: string;
  mount_path?: string;
  fstype?: "ext4" | "xfs";
};
export type AttachInstanceVolumeResponse = {
  attachment?: { instance_id?: string; volume_id?: string; device?: string };
};
export type CreateImageBody = ImageCreateRequestInput;
export type CreateImageResponse = ImageResponse;
export type CreateInstanceBody = InstanceCreateRequestInput;
export type CreateInstanceResponse = { instance?: Instance };
export type CreateInstancePoolBody = InstancePoolCreateRequestInput;
export type CreateInstancePoolResponse = InstancePoolResponse;
export type CreateSerialConsoleTicketResponse = SerialConsoleTicket;
export type DeleteImageResponse = ImageResponse;
export type GetConsoleOutputQuery = { max_bytes?: number };
export type GetConsoleOutputResponse = { output: string; truncated: boolean };
export type GetFlavorResponse = { flavor?: Flavor };
export type GetImageResponse = ImageResponse;
export type GetInstanceResponse = { instance?: Instance };
export type GetInstancePoolResponse = InstancePoolResponse;
export type ListFlavorsQuery = {
  name?: string;
  crn?: string;
  family?: "general" | "loadbalancer" | "database";
};
export type ListFlavorsResponse = FlavorListResponse;
export type ListFlavorsItem = Flavor;
export type ListImageCatalogQuery = {
  limit?: number;
  marker?: string;
  name?: string;
  os?: string;
  architecture?: string;
};
export type ListImageCatalogResponse = ImageCatalogResponse;
export type ListImageCatalogItem = ImageCatalogCategory;
export type ListImagesQuery = {
  crn?: string;
  limit?: number;
  marker?: string;
  os?: string;
  architecture?: string;
  name?: string;
  status?:
    "pending" | "importing" | "active" | "error" | "deleting" | "withdrawn";
  all_versions?: boolean;
};
export type ListImagesResponse = ImageListResponse;
export type ListImagesItem = Image;
export type ListInstanceNICsQuery = { name?: string; crn?: string };
export type ListInstanceNICsResponse = {
  nics?: {
    interface_id: string;
    boot_index: number;
    primary: boolean;
    external: boolean;
    name?: string;
    mac?: string;
    subnet: Subnet | null;
    addresses: InterfaceAddress[];
    routed_prefixes: RoutedPrefix[];
  }[];
};
export type ListInstanceNICsItem = {
  interface_id: string;
  boot_index: number;
  primary: boolean;
  external: boolean;
  name?: string;
  mac?: string;
  subnet: Subnet | null;
  addresses: InterfaceAddress[];
  routed_prefixes: RoutedPrefix[];
};
export type ListInstancePoolFloatingIpsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListInstancePoolFloatingIpsResponse = FloatingIpListResponse;
export type ListInstancePoolFloatingIpsItem = FloatingIp;
export type ListInstancePoolsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListInstancePoolsResponse = InstancePoolListResponse;
export type ListInstancePoolsItem = InstancePool;
export type ListInstanceVolumesQuery = { name?: string; crn?: string };
export type ListInstanceVolumesResponse = {
  attachments?: {
    volume_id?: string;
    device?: string;
    boot_index?: number;
    delete_on_termination?: boolean;
    mount_path?: string;
    fstype?: "ext4" | "xfs";
    name?: string;
    volume_type?: string;
    size_gb?: number;
    status?: string;
    bootable?: boolean;
    mount?: VolumeMount;
  }[];
};
export type ListInstanceVolumesItem = {
  volume_id?: string;
  device?: string;
  boot_index?: number;
  delete_on_termination?: boolean;
  mount_path?: string;
  fstype?: "ext4" | "xfs";
  name?: string;
  volume_type?: string;
  size_gb?: number;
  status?: string;
  bootable?: boolean;
  mount?: VolumeMount;
};
export type ListInstancesQuery = {
  crn?: string;
  limit?: number;
  marker?: string;
  name?: string;
  current_state?: CurrentStateInput;
  flavor?: string;
  image?: string;
};
export type ListInstancesResponse = InstanceListResponse;
export type ListInstancesItem = Instance;
export type ListPoolInstancesQuery = {
  crn?: string;
  limit?: number;
  marker?: string;
  name?: string;
  current_state?: CurrentStateInput;
  flavor?: string;
  image?: string;
};
export type ListPoolInstancesResponse = InstanceListResponse;
export type ListPoolInstancesItem = Instance;
export type RebootInstanceBody = InstanceRebootRequestInput;
export type RefreshInstancePoolResponse = InstancePoolResponse;
export type ReinstallInstanceBody = {
  image?: string;
  size_gb?: number;
  volume_type?: "ssd" | "nvme";
};
export type ResizeInstanceBody = { flavor: string };
export type StartSerialConsoleQuery = { backlog_bytes?: number };
export type UpdateImageBody = ImageUpdateRequestInput;
export type UpdateImageResponse = ImageResponse;
export type UpdateInstanceBody = InstanceUpdateRequestInput;
export type UpdateInstanceResponse = { instance?: Instance };
export type UpdateInstancePoolBody = InstancePoolUpdateRequestInput;
export type UpdateInstancePoolResponse = InstancePoolResponse;
export type UpdateInstanceVolumeAttachmentBody = {
  delete_on_termination: boolean;
};
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
export type InstancePoolFloatingIpAttachRequestInput = { floating_ip: string };
export type InstancePoolFloatingIpResponse = { floating_ip?: FloatingIp };
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
export type ImageCreateRequestInput = {
  name: string;
  source_url: string;
  description?: string;
  os?:
    | "almalinux"
    | "alpine"
    | "arch"
    | "centos"
    | "debian"
    | "fedora"
    | "opensuse"
    | "rhel"
    | "rocky"
    | "ubuntu"
    | "linux";
  os_version?: string;
  architecture?: "amd64";
  version?: string;
  current?: boolean;
  eol_date?: string;
  min_disk_gb?: number;
  min_ram_mb?: number;
  tags?: TagsInput;
  attributes?: { [key: string]: string };
};
export type TagsInput = { [key: string]: string };
export type ImageResponse = { image: Image };
export type Image = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  os?: string;
  os_version?: string;
  architecture: string;
  version: string;
  is_current?: boolean;
  eol_date?: string;
  size_bytes?: number;
  min_disk_gb?: number;
  min_ram_mb?: number;
  status:
    "pending" | "importing" | "active" | "error" | "deleting" | "withdrawn";
  withdrawal_reason?: string;
  deletion_retention?: {
    reason: "in_use";
    instances: number;
    instance_pools: number;
  };
  faults: Fault[];
  tags?: Tags;
  attributes?: { [key: string]: string };
  created_at: string;
  updated_at: string;
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
export type Tags = { [key: string]: string };
export type InstanceCreateRequestInput = {
  name: string;
  description?: string;
  flavor: string;
  architecture?: string;
  image?: string;
  networks: NetworkConfigInput[];
  volumes?: InstanceLaunchVolumeInput[];
  metadata?: MetadataInput;
  tags?: TagsInput;
  user_data?: string;
  iam_role?: string;
};
export type NetworkConfigInput = {
  subnet: string;
  mac?: string;
  security_groups?: string[];
  floating_ip_assignment?: "none" | "ipv4" | "ipv6" | "dual_stack" | "auto";
  addresses?: AddressRequestInput[];
};
export type AddressRequestInput = { family: "ipv4" | "ipv6"; address?: string };
export type InstanceLaunchVolumeInput = {
  boot?: boolean;
  volume?: string;
  size_gb?: number;
  volume_type?: "ssd" | "nvme";
  performance?: VolumePerformanceRequestInput;
  mount_path?: string;
  fstype?: string;
  delete_on_termination?: boolean;
  snapshot_schedules?: SnapshotScheduleSettingsInput[];
} & ({ delete_on_termination?: false; volume: unknown } | unknown);
export type VolumePerformanceRequestInput = {
  iops?: number;
  throughput_mib_s?: number;
};
export type SnapshotScheduleSettingsInput = {
  name: string;
  description?: string;
  interval_minutes: SnapshotIntervalMinutesInput;
  retention_count: SnapshotRetentionCountInput;
  retention_days?: SnapshotRetentionDaysInput;
  enabled?: boolean;
  tags?: TagsInput;
};
export type SnapshotIntervalMinutesInput = number;
export type SnapshotRetentionCountInput = number;
export type SnapshotRetentionDaysInput = number;
export type MetadataInput = { [key: string]: string };
export type Instance = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  task_state?: string | null;
  flavor?: Flavor;
  image?: Image;
  user_data?: string;
  iam_role?: InstanceRole;
  metadata?: Metadata;
  tags?: Tags;
  faults: Fault[];
  created_at?: string;
  updated_at?: string;
  launched_at?: string | null;
  terminated_at?: string | null;
  desired_state?: "running" | "stopped" | "deleted";
  current_state?: CurrentState;
};
export type Flavor = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  vcpus?: number;
  ram_mb?: number;
  class?: "shared" | "dedicated";
  family?: "general" | "loadbalancer" | "database";
  status?: "active" | "disabled";
  created_at?: string;
  updated_at?: string;
};
export type InstanceRole = { id: string; crn: string; name: string };
export type Metadata = { [key: string]: string };
export type CurrentState =
  | "pending"
  | "building"
  | "running"
  | "stopping"
  | "stopped"
  | "rebooting"
  | "migrating"
  | "deleting"
  | "deleted"
  | "error"
  | "crashed"
  | "paused"
  | "suspended";
export type InstancePoolCreateRequestInput = {
  name: string;
  description?: string;
  tags?: TagsInput;
  template: InstancePoolTemplateRequestInput;
  desired_count?: number;
  min_count?: number;
  max_count?: number;
};
export type InstancePoolTemplateRequestInput = {
  flavor: string;
  architecture?: string;
  image?: string;
  networks: NetworkConfigInput[];
  user_data?: string;
  metadata?: MetadataInput;
  tags?: TagsInput;
  iam_role?: string;
  volumes?: InstanceVolumeInput[];
};
export type InstanceVolumeInput = {
  boot?: boolean;
  size_gb: number;
  volume_type?: string;
  mount_path?: string;
  fstype?: string;
  delete_on_termination?: boolean;
};
export type InstancePoolResponse = { instance_pool?: InstancePool };
export type InstancePool = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  desired_count?: number;
  min_count?: number;
  max_count?: number;
  live_count?: number;
  member_count?: number;
  refresh_in_progress?: boolean;
  stale_instance_count?: number;
  status?: "active" | "scaling" | "error" | "deleting";
  faults: Fault[];
  managed_by?: string;
  tags?: Tags;
  template?: InstancePoolTemplate;
};
export type InstancePoolTemplate = {
  flavor_id?: string;
  image_id?: string;
  networks?: NetworkConfigResponse[];
  user_data?: string;
  metadata?: Metadata;
  tags?: Tags;
  iam_role?: InstanceRole;
  volumes?: InstanceVolume[];
};
export type NetworkConfigResponse = {
  subnet: Subnet | null;
  mac?: string;
  security_group_ids?: string[];
  floating_ip_assignment?: "none" | "ipv4" | "ipv6" | "dual_stack" | "auto";
  addresses?: AddressRequest[];
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
export type AddressRequest = { family: "ipv4" | "ipv6"; address?: string };
export type InstanceVolume = {
  boot?: boolean;
  size_gb: number;
  volume_type?: string;
  mount_path?: string;
  fstype?: string;
  delete_on_termination?: boolean;
};
export type SerialConsoleTicket = {
  ticket: string;
  expires_at: string;
  expires_in: number;
};
export type FlavorListResponse = { flavors?: Flavor[] };
export type ImageCatalogResponse = {
  categories: ImageCatalogCategory[];
  meta: PaginationMeta;
};
export type ImageCatalogCategory = { name: string; images: CatalogImage[] };
export type CatalogImage = {
  id: string;
  crn: string;
  name: string;
  os?: string;
  os_version?: string;
  architecture: string;
  min_disk_gb: number;
  min_ram_mb: number;
  eol_date?: string;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type ImageListResponse = { images: Image[]; meta?: PaginationMeta };
export type RoutedPrefix = {
  id: string;
  pool_id: string;
  family: "ipv4";
  prefix: string;
};
export type FloatingIpListResponse = {
  floating_ips: FloatingIp[];
  meta: PaginationMeta;
};
export type InstancePoolListResponse = {
  instance_pools?: InstancePool[];
  meta?: PaginationMeta;
};
export type VolumeMount = {
  state: "unknown" | "pending" | "mounted" | "failed";
  code?:
    | "unsafe_serial"
    | "device_absent"
    | "probe_failed"
    | "signatures_no_filesystem"
    | "unsupported_fstype"
    | "mkfs_failed"
    | "unsafe_mount_path"
    | "mkdir_failed"
    | "mount_failed"
    | "fstab_write_failed"
    | "unknown_error";
  message?: string;
  since?: string;
  reported_at?: string;
};
export type CurrentStateInput =
  | "pending"
  | "building"
  | "running"
  | "stopping"
  | "stopped"
  | "rebooting"
  | "migrating"
  | "deleting"
  | "deleted"
  | "error"
  | "crashed"
  | "paused"
  | "suspended";
export type InstanceListResponse = {
  instances?: Instance[];
  meta?: PaginationMeta;
};
export type InstanceRebootRequestInput = { hard?: boolean };
export type ImageUpdateRequestInput = {
  description?: string;
  current?: boolean;
  eol_date?: string | null;
  tags?: TagsInput;
  attributes?: { [key: string]: string };
};
export type InstanceUpdateRequestInput = {
  iam_role?: string;
  description?: string;
  metadata?: MetadataInput;
  tags?: TagsInput;
};
export type InstancePoolUpdateRequestInput = {
  description?: string;
  tags?: TagsInput;
  desired_count?: number;
  min_count?: number;
  max_count?: number;
  template?: InstancePoolTemplateRequestInput;
};
const operations = {
  attachInstanceNIC: {
    id: "attachInstanceNIC",
    method: "POST",
    path: "/v1/instances/{instance_id}/nics",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  attachInstancePoolFloatingIp: {
    id: "attachInstancePoolFloatingIp",
    method: "POST",
    path: "/v1/instance-pools/{pool_id}/floating-ips",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  attachInstanceVolume: {
    id: "attachInstanceVolume",
    method: "POST",
    path: "/v1/instances/{instance_id}/volumes",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createImage: {
    id: "createImage",
    method: "POST",
    path: "/v1/images",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createInstance: {
    id: "createInstance",
    method: "POST",
    path: "/v1/instances",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createInstancePool: {
    id: "createInstancePool",
    method: "POST",
    path: "/v1/instance-pools",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createSerialConsoleTicket: {
    id: "createSerialConsoleTicket",
    method: "POST",
    path: "/v1/instances/{instance_id}/console/ticket",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteImage: {
    id: "deleteImage",
    method: "DELETE",
    path: "/v1/images/{image_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteInstance: {
    id: "deleteInstance",
    method: "DELETE",
    path: "/v1/instances/{instance_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteInstancePool: {
    id: "deleteInstancePool",
    method: "DELETE",
    path: "/v1/instance-pools/{pool_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachInstanceNIC: {
    id: "detachInstanceNIC",
    method: "DELETE",
    path: "/v1/instances/{instance_id}/nics/{interface_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachInstancePoolFloatingIp: {
    id: "detachInstancePoolFloatingIp",
    method: "DELETE",
    path: "/v1/instance-pools/{pool_id}/floating-ips/{floating_ip_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachInstanceVolume: {
    id: "detachInstanceVolume",
    method: "DELETE",
    path: "/v1/instances/{instance_id}/volumes/{volume_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getConsoleOutput: {
    id: "getConsoleOutput",
    method: "GET",
    path: "/v1/instances/{instance_id}/console/output",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: { max_bytes: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getConsoleScreenshot: {
    id: "getConsoleScreenshot",
    method: "GET",
    path: "/v1/instances/{instance_id}/console/screenshot",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  getFlavor: {
    id: "getFlavor",
    method: "GET",
    path: "/v1/flavors/{flavor_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getImage: {
    id: "getImage",
    method: "GET",
    path: "/v1/images/{image_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getInstance: {
    id: "getInstance",
    method: "GET",
    path: "/v1/instances/{instance_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getInstancePool: {
    id: "getInstancePool",
    method: "GET",
    path: "/v1/instance-pools/{pool_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listFlavors: {
    id: "listFlavors",
    method: "GET",
    path: "/v1/flavors",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      family: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "flavors",
  },
  listImageCatalog: {
    id: "listImageCatalog",
    method: "GET",
    path: "/v1/image-catalog",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      name: { style: "form", explode: true },
      os: { style: "form", explode: true },
      architecture: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "categories",
  },
  listImages: {
    id: "listImages",
    method: "GET",
    path: "/v1/images",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      os: { style: "form", explode: true },
      architecture: { style: "form", explode: true },
      name: { style: "form", explode: true },
      status: { style: "form", explode: true },
      all_versions: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "images",
  },
  listInstanceNICs: {
    id: "listInstanceNICs",
    method: "GET",
    path: "/v1/instances/{instance_id}/nics",
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
    itemsKey: "nics",
  },
  listInstancePoolFloatingIps: {
    id: "listInstancePoolFloatingIps",
    method: "GET",
    path: "/v1/instance-pools/{pool_id}/floating-ips",
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
    itemsKey: "floating_ips",
  },
  listInstancePools: {
    id: "listInstancePools",
    method: "GET",
    path: "/v1/instance-pools",
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
    itemsKey: "instance_pools",
  },
  listInstanceVolumes: {
    id: "listInstanceVolumes",
    method: "GET",
    path: "/v1/instances/{instance_id}/volumes",
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
    itemsKey: "attachments",
  },
  listInstances: {
    id: "listInstances",
    method: "GET",
    path: "/v1/instances",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      name: { style: "form", explode: true },
      current_state: { style: "form", explode: true },
      flavor: { style: "form", explode: true },
      image: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "instances",
  },
  listPoolInstances: {
    id: "listPoolInstances",
    method: "GET",
    path: "/v1/instance-pools/{pool_id}/instances",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      name: { style: "form", explode: true },
      current_state: { style: "form", explode: true },
      flavor: { style: "form", explode: true },
      image: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "instances",
  },
  rebootInstance: {
    id: "rebootInstance",
    method: "POST",
    path: "/v1/instances/{instance_id}/reboot",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  refreshInstancePool: {
    id: "refreshInstancePool",
    method: "POST",
    path: "/v1/instance-pools/{pool_id}/refresh",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  reinstallInstance: {
    id: "reinstallInstance",
    method: "POST",
    path: "/v1/instances/{instance_id}/reinstall",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  resizeInstance: {
    id: "resizeInstance",
    method: "POST",
    path: "/v1/instances/{instance_id}/resize",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  startInstance: {
    id: "startInstance",
    method: "POST",
    path: "/v1/instances/{instance_id}/start",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  startSerialConsole: {
    id: "startSerialConsole",
    method: "GET",
    path: "/v1/instances/{instance_id}/console/serial",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: { backlog_bytes: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  stopInstance: {
    id: "stopInstance",
    method: "POST",
    path: "/v1/instances/{instance_id}/stop",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  updateImage: {
    id: "updateImage",
    method: "PATCH",
    path: "/v1/images/{image_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateInstance: {
    id: "updateInstance",
    method: "PATCH",
    path: "/v1/instances/{instance_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateInstancePool: {
    id: "updateInstancePool",
    method: "PATCH",
    path: "/v1/instance-pools/{pool_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateInstanceVolumeAttachment: {
    id: "updateInstanceVolumeAttachment",
    method: "PATCH",
    path: "/v1/instances/{instance_id}/volumes/{volume_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class ComputeService {
  constructor(private readonly transport: Transport) {}
  /** Attach an existing NIC to an instance */
  attachInstanceNIC(
    instance_id: string,
    body: AttachInstanceNICBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AttachInstanceNICResponse>> {
    return this.transport.json<AttachInstanceNICResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.attachInstanceNIC,
      { instance_id },
      body,
      {},
      options,
    );
  }
  /** Give the pool a shared public address */
  attachInstancePoolFloatingIp(
    pool_id: string,
    body: AttachInstancePoolFloatingIpBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AttachInstancePoolFloatingIpResponse>> {
    return this.transport.json<AttachInstancePoolFloatingIpResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.attachInstancePoolFloatingIp,
      { pool_id },
      body,
      {},
      options,
    );
  }
  /** Attach a data volume to an instance */
  attachInstanceVolume(
    instance_id: string,
    body: AttachInstanceVolumeBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AttachInstanceVolumeResponse>> {
    return this.transport.json<AttachInstanceVolumeResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.attachInstanceVolume,
      { instance_id },
      body,
      {},
      options,
    );
  }
  /** Import an image from an object URL */
  createImage(
    body: CreateImageBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateImageResponse>> {
    return this.transport.json<CreateImageResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.createImage,
      {},
      body,
      {},
      options,
    );
  }
  /** Create instance */
  createInstance(
    body: CreateInstanceBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateInstanceResponse>> {
    return this.transport.json<CreateInstanceResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.createInstance,
      {},
      body,
      {},
      options,
    );
  }
  /** Create an instance pool */
  createInstancePool(
    body: CreateInstancePoolBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateInstancePoolResponse>> {
    return this.transport.json<CreateInstancePoolResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.createInstancePool,
      {},
      body,
      {},
      options,
    );
  }
  /** Mint a ticket for the serial console */
  createSerialConsoleTicket(
    instance_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSerialConsoleTicketResponse>> {
    return this.transport.json<CreateSerialConsoleTicketResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.createSerialConsoleTicket,
      { instance_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete an unused image */
  deleteImage(
    image_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DeleteImageResponse>> {
    return this.transport.json<DeleteImageResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.deleteImage,
      { image_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete instance */
  deleteInstance(
    instance_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.deleteInstance,
      { instance_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete an instance pool */
  deleteInstancePool(
    pool_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.deleteInstancePool,
      { pool_id },
      undefined,
      {},
      options,
    );
  }
  /** Detach a NIC from a running instance */
  detachInstanceNIC(
    instance_id: string,
    interface_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.detachInstanceNIC,
      { instance_id, interface_id },
      undefined,
      {},
      options,
    );
  }
  /** Take a shared address off the pool */
  detachInstancePoolFloatingIp(
    pool_id: string,
    floating_ip_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.detachInstancePoolFloatingIp,
      { pool_id, floating_ip_id },
      undefined,
      {},
      options,
    );
  }
  /** Detach a data volume from an instance */
  detachInstanceVolume(
    instance_id: string,
    volume_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.detachInstanceVolume,
      { instance_id, volume_id },
      undefined,
      {},
      options,
    );
  }
  /** Get the instance's serial console output */
  getConsoleOutput(
    instance_id: string,
    query: GetConsoleOutputQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetConsoleOutputResponse>> {
    return this.transport.json<GetConsoleOutputResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.getConsoleOutput,
      { instance_id },
      undefined,
      query,
      options,
    );
  }
  /** Capture the instance's display */
  getConsoleScreenshot(
    instance_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.getConsoleScreenshot,
      { instance_id },
      undefined,
      {},
      options,
    );
  }
  /** Get flavor */
  getFlavor(
    flavor_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetFlavorResponse>> {
    return this.transport.json<GetFlavorResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.getFlavor,
      { flavor_id },
      undefined,
      {},
      options,
    );
  }
  getFlavorByReference(
    reference: string,
    scope: Omit<ListFlavorsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Flavor>> {
    return resolveReference<Flavor>(
      reference,
      (id) => this.getFlavor(id, options),
      (filter) =>
        this.listFlavors({ ...referenceScope(scope), ...filter }, options),
      true,
      "flavor",
    );
  }
  /** Get an image */
  getImage(
    image_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetImageResponse>> {
    return this.transport.json<GetImageResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.getImage,
      { image_id },
      undefined,
      {},
      options,
    );
  }
  getImageByReference(
    reference: string,
    scope: Omit<ListImagesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Image>> {
    return resolveReference<Image>(
      reference,
      (id) => this.getImage(id, options),
      (filter) =>
        this.listImages(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "image",
    );
  }
  /** Get instance */
  getInstance(
    instance_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInstanceResponse>> {
    return this.transport.json<GetInstanceResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.getInstance,
      { instance_id },
      undefined,
      {},
      options,
    );
  }
  getInstanceByReference(
    reference: string,
    scope: Omit<ListInstancesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Instance>> {
    return resolveReference<Instance>(
      reference,
      (id) => this.getInstance(id, options),
      (filter) =>
        this.listInstances(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "instance",
    );
  }
  /** Get an instance pool */
  getInstancePool(
    pool_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInstancePoolResponse>> {
    return this.transport.json<GetInstancePoolResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.getInstancePool,
      { pool_id },
      undefined,
      {},
      options,
    );
  }
  getInstancePoolByReference(
    reference: string,
    scope: Omit<ListInstancePoolsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<InstancePool>> {
    return resolveReference<InstancePool>(
      reference,
      (id) => this.getInstancePool(id, options),
      (filter) =>
        this.listInstancePools(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "instance_pool",
    );
  }
  /** List flavors */
  listFlavors(
    query: ListFlavorsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListFlavorsResponse, ListFlavorsItem>> {
    return this.transport.page<ListFlavorsResponse, ListFlavorsItem>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listFlavors,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List the launch image catalog */
  listImageCatalog(
    query: ListImageCatalogQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListImageCatalogResponse, ListImageCatalogItem>> {
    return this.transport.page<ListImageCatalogResponse, ListImageCatalogItem>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listImageCatalog,
      {},
      undefined,
      query,
      options,
    );
  }
  listImageCatalogAll(
    query: ListImageCatalogQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListImageCatalogItem> {
    return iteratePages(
      (marker) => this.listImageCatalog({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List images */
  listImages(
    query: ListImagesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListImagesResponse, ListImagesItem>> {
    return this.transport.page<ListImagesResponse, ListImagesItem>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listImages,
      {},
      undefined,
      query,
      options,
    );
  }
  listImagesAll(
    query: ListImagesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListImagesItem> {
    return iteratePages(
      (marker) => this.listImages({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List the instance's network interfaces */
  listInstanceNICs(
    instance_id: string,
    query: ListInstanceNICsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInstanceNICsResponse, ListInstanceNICsItem>> {
    return this.transport.page<ListInstanceNICsResponse, ListInstanceNICsItem>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listInstanceNICs,
      { instance_id },
      undefined,
      query,
      options,
    );
  }
  /** List the pool's shared public addresses */
  listInstancePoolFloatingIps(
    pool_id: string,
    query: ListInstancePoolFloatingIpsQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListInstancePoolFloatingIpsResponse, ListInstancePoolFloatingIpsItem>
  > {
    return this.transport.page<
      ListInstancePoolFloatingIpsResponse,
      ListInstancePoolFloatingIpsItem
    >(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listInstancePoolFloatingIps,
      { pool_id },
      undefined,
      query,
      options,
    );
  }
  listInstancePoolFloatingIpsAll(
    pool_id: string,
    query: ListInstancePoolFloatingIpsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInstancePoolFloatingIpsItem> {
    return iteratePages(
      (marker) =>
        this.listInstancePoolFloatingIps(
          pool_id,
          { ...query, marker },
          options,
        ),
      query.marker ?? "",
    );
  }
  /** List instance pools */
  listInstancePools(
    query: ListInstancePoolsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInstancePoolsResponse, ListInstancePoolsItem>> {
    return this.transport.page<
      ListInstancePoolsResponse,
      ListInstancePoolsItem
    >(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listInstancePools,
      {},
      undefined,
      query,
      options,
    );
  }
  listInstancePoolsAll(
    query: ListInstancePoolsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInstancePoolsItem> {
    return iteratePages(
      (marker) => this.listInstancePools({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List the instance's attached volumes */
  listInstanceVolumes(
    instance_id: string,
    query: ListInstanceVolumesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInstanceVolumesResponse, ListInstanceVolumesItem>> {
    return this.transport.page<
      ListInstanceVolumesResponse,
      ListInstanceVolumesItem
    >(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listInstanceVolumes,
      { instance_id },
      undefined,
      query,
      options,
    );
  }
  /** List instances */
  listInstances(
    query: ListInstancesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInstancesResponse, ListInstancesItem>> {
    return this.transport.page<ListInstancesResponse, ListInstancesItem>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listInstances,
      {},
      undefined,
      query,
      options,
    );
  }
  listInstancesAll(
    query: ListInstancesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInstancesItem> {
    return iteratePages(
      (marker) => this.listInstances({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List a pool's instances */
  listPoolInstances(
    pool_id: string,
    query: ListPoolInstancesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPoolInstancesResponse, ListPoolInstancesItem>> {
    return this.transport.page<
      ListPoolInstancesResponse,
      ListPoolInstancesItem
    >(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.listPoolInstances,
      { pool_id },
      undefined,
      query,
      options,
    );
  }
  listPoolInstancesAll(
    pool_id: string,
    query: ListPoolInstancesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListPoolInstancesItem> {
    return iteratePages(
      (marker) =>
        this.listPoolInstances(pool_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Reboot instance */
  rebootInstance(
    instance_id: string,
    body: RebootInstanceBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.rebootInstance,
      { instance_id },
      body,
      {},
      options,
    );
  }
  /** Roll every member onto the pool's current launch template */
  refreshInstancePool(
    pool_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RefreshInstancePoolResponse>> {
    return this.transport.json<RefreshInstancePoolResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.refreshInstancePool,
      { pool_id },
      undefined,
      {},
      options,
    );
  }
  /** Reinstall instance */
  reinstallInstance(
    instance_id: string,
    body: ReinstallInstanceBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.reinstallInstance,
      { instance_id },
      body,
      {},
      options,
    );
  }
  /** Resize instance */
  resizeInstance(
    instance_id: string,
    body: ResizeInstanceBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.resizeInstance,
      { instance_id },
      body,
      {},
      options,
    );
  }
  /** Start instance */
  startInstance(
    instance_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.startInstance,
      { instance_id },
      undefined,
      {},
      options,
    );
  }
  /** Open an interactive serial console */
  startSerialConsole(
    instance_id: string,
    query: StartSerialConsoleQuery = {},
    options: RequestOptions = {},
  ): Promise<WebSocketConnection> {
    return this.transport.websocket(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.startSerialConsole,
      { instance_id },
      query,
      options,
    );
  }
  /** Stop instance */
  stopInstance(
    instance_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.stopInstance,
      { instance_id },
      undefined,
      {},
      options,
    );
  }
  /** Update an image's metadata */
  updateImage(
    image_id: string,
    body: UpdateImageBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateImageResponse>> {
    return this.transport.json<UpdateImageResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.updateImage,
      { image_id },
      body,
      {},
      options,
    );
  }
  /** Update instance */
  updateInstance(
    instance_id: string,
    body: UpdateInstanceBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateInstanceResponse>> {
    return this.transport.json<UpdateInstanceResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.updateInstance,
      { instance_id },
      body,
      {},
      options,
    );
  }
  /** Update an instance pool's description, size, tags or launch template */
  updateInstancePool(
    pool_id: string,
    body: UpdateInstancePoolBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateInstancePoolResponse>> {
    return this.transport.json<UpdateInstancePoolResponse>(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.updateInstancePool,
      { pool_id },
      body,
      {},
      options,
    );
  }
  /** Update a volume attachment's settings */
  updateInstanceVolumeAttachment(
    instance_id: string,
    volume_id: string,
    body: UpdateInstanceVolumeAttachmentBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "compute",
      "https://compute.{region}.basaltic.sh",
      operations.updateInstanceVolumeAttachment,
      { instance_id, volume_id },
      body,
      {},
      options,
    );
  }
}
