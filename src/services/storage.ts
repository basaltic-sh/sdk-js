// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation, BinaryBody } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type CompleteMultipartUploadBody = CompleteMultipartUploadRequestInput;
export type CompleteMultipartUploadResponse = CompleteMultipartUploadResponse2;
export type CreateBucketBody = CreateBucketRequestInput;
export type CreateBucketResponse = BucketResponse;
export type CreateSnapshotBody = SnapshotCreateRequestInput;
export type CreateSnapshotResponse = SnapshotResponse;
export type CreateSnapshotPolicyBody = SnapshotPolicyCreateRequestInput;
export type CreateSnapshotPolicyResponse = SnapshotPolicyResponse;
export type CreateVolumeBody = VolumeCreateRequestInput;
export type CreateVolumeResponse = VolumeResponse;
export type DeleteBucketResponse =
  { scheduled_purge_at: string } | { [key: string]: unknown };
export type DeleteBucketLifecycleOptions = Omit<RequestOptions, "headers"> & {
  headers: { "If-Match": string } & Record<string, string>;
};
export type ExtendVolumeBody = VolumeExtendRequestInput;
export type ExtendVolumeResponse = VolumeResponse;
export type GetBucketCORSResponse = BucketCORSResponse;
export type GetBucketEncryptionResponse = BucketEncryptionResponse;
export type GetBucketLifecycleResponse = BucketLifecycleResponse;
export type GetBucketObjectLockResponse = BucketObjectLockResponse;
export type GetBucketPolicyResponse = BucketPolicyResponse;
export type GetBucketTaggingResponse = BucketTaggingResponse;
export type GetBucketVersioningResponse = BucketVersioningResponse;
export type GetSnapshotResponse = SnapshotResponse;
export type GetSnapshotPolicyResponse = SnapshotPolicyResponse;
export type GetVolumeResponse = VolumeResponse;
export type InitiateMultipartUploadBody = InitiateMultipartUploadRequestInput;
export type InitiateMultipartUploadResponse = MultipartUploadResponse;
export type ListBucketsQuery = {
  limit?: number;
  marker?: string;
  name?: string;
  crn?: string;
};
export type ListBucketsResponse = BucketListResponse;
export type ListBucketsItem = Bucket;
export type ListMultipartUploadsQuery = {
  prefix?: string;
  max_uploads?: number;
};
export type ListMultipartUploadsResponse = ListMultipartUploadsResponse2;
export type ListMultipartUploadsItem = MultipartUpload;
export type ListObjectVersionsQuery = {
  prefix?: string;
  key_marker?: string;
  version_id_marker?: string;
  max_keys?: number;
};
export type ListObjectVersionsResponse = ListObjectVersionsResponse2;
export type ListObjectVersionsItem = ObjectVersion;
export type ListObjectsQuery = {
  prefix?: string;
  delimiter?: string;
  marker?: string;
  max_keys?: number;
};
export type ListObjectsResponse = ObjectListResponse;
export type ListPartsResponse = ListPartsResponse2;
export type ListPartsItem = MultipartPart;
export type ListSnapshotPoliciesQuery = {
  limit?: number;
  marker?: string;
  volume?: string;
  enabled?: boolean;
  name?: string;
  crn?: string;
};
export type ListSnapshotPoliciesResponse = SnapshotPolicyListResponse;
export type ListSnapshotPoliciesItem = SnapshotPolicy;
export type ListSnapshotsQuery = {
  limit?: number;
  marker?: string;
  volume?: string;
  name?: string;
  status?: SnapshotStatusInput;
  crn?: string;
  snapshot_policy?: string;
};
export type ListSnapshotsResponse = SnapshotListResponse;
export type ListSnapshotsItem = Snapshot;
export type ListVolumeTypesQuery = { name?: string; crn?: string };
export type ListVolumeTypesResponse = VolumeTypeListResponse;
export type ListVolumeTypesItem = VolumeType;
export type ListVolumesQuery = {
  limit?: number;
  marker?: string;
  name?: string;
  status?: VolumeStatusInput;
  crn?: string;
};
export type ListVolumesResponse = VolumeListResponse;
export type ListVolumesItem = Volume;
export type PutBucketCORSBody = PutBucketCORSRequestInput;
export type PutBucketDeletionProtectionBody =
  PutBucketDeletionProtectionRequestInput;
export type PutBucketEncryptionBody = PutBucketEncryptionRequestInput;
export type PutBucketLifecycleBody = PutBucketLifecycleRequestInput;
export type PutBucketLifecycleOptions = Omit<RequestOptions, "headers"> & {
  headers: { "If-Match": string } & Record<string, string>;
};
export type PutBucketObjectLockBody = PutBucketObjectLockRequestInput;
export type PutBucketPolicyBody = PutBucketPolicyRequestInput;
export type PutBucketTaggingBody = PutBucketTaggingRequestInput;
export type PutBucketVersioningBody = PutBucketVersioningRequestInput;
export type PutObjectBody = BinaryBody;
export type PutObjectResponse = PutObjectResponse2 | { [key: string]: unknown };
export type UpdateSnapshotBody = SnapshotUpdateRequestInput;
export type UpdateSnapshotResponse = SnapshotResponse;
export type UpdateSnapshotPolicyBody = SnapshotPolicyUpdateRequestInput;
export type UpdateSnapshotPolicyResponse = SnapshotPolicyResponse;
export type UpdateVolumeBody = VolumeUpdateRequestInput;
export type UpdateVolumeResponse = VolumeResponse;
export type UpdateVolumePerformanceBody = VolumePerformanceRequestInput;
export type UpdateVolumePerformanceResponse = VolumeResponse;
export type UploadPartBody = BinaryBody;
export type UploadPartResponse = UploadPartResponse2;
export type CompleteMultipartUploadRequestInput = {
  parts: { part_number: number; etag: string }[];
};
export type CompleteMultipartUploadResponse2 = {
  etag: string;
  size: number;
  version_id?: string;
  storage_class?: string;
};
export type CreateBucketRequestInput = {
  name: string;
  object_lock_enabled?: boolean;
};
export type BucketResponse = { bucket?: Bucket };
export type Bucket = {
  id: string;
  name: string;
  crn: string;
  acl: string;
  versioning: "disabled" | "enabled" | "suspended";
  deletion_protection: boolean;
  recovery_window_days: number;
  deleted_at: string | null;
  scheduled_purge_at?: string;
  created_at: string;
};
export type SnapshotCreateRequestInput = {
  volume: string;
  name: string;
  description?: string;
  tags?: TagsInput;
};
export type TagsInput = { [key: string]: string };
export type SnapshotResponse = { snapshot?: Snapshot };
export type Snapshot = {
  id?: string;
  crn?: string;
  volume_id?: string;
  snapshot_policy_id?: string;
  name?: string;
  description?: string;
  tags?: Tags;
  size_gb?: number;
  status?: SnapshotStatus;
  faults: Fault[];
  created_at?: string;
  updated_at?: string;
};
export type Tags = { [key: string]: string };
export type SnapshotStatus = "creating" | "available" | "deleting" | "error";
export type Fault = {
  code: string;
  severity: "error" | "warning";
  message: string;
  details: { [key: string]: unknown } | null;
  first_at: string;
  last_at: string;
  occurrences: number;
};
export type SnapshotPolicyCreateRequestInput = {
  volume: string;
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
export type SnapshotPolicyResponse = { snapshot_policy?: SnapshotPolicy };
export type SnapshotPolicy = {
  id?: string;
  crn?: string;
  volume_id?: string;
  name?: string;
  description?: string;
  enabled?: boolean;
  interval_minutes?: SnapshotIntervalMinutes;
  retention_count?: SnapshotRetentionCount;
  retention_days?: SnapshotRetentionDays;
  next_run_at?: string;
  last_run_at?: string;
  faults: Fault[];
  tags?: Tags;
  created_at?: string;
  updated_at?: string;
};
export type SnapshotIntervalMinutes = number;
export type SnapshotRetentionCount = number;
export type SnapshotRetentionDays = number;
export type VolumeCreateRequestInput = {
  performance?: VolumePerformanceRequestInput;
  name: string;
  description?: string;
  tags?: TagsInput;
  volume_type: CreatableVolumeTypeNameInput;
  size_gb: number;
  architecture?: string;
  source_image?: string;
  source_snapshot?: string;
  bootable?: boolean;
};
export type VolumePerformanceRequestInput = {
  iops?: number;
  throughput_mib_s?: number;
};
export type CreatableVolumeTypeNameInput = "ssd" | "nvme";
export type VolumeResponse = { volume?: Volume };
export type Volume = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  tags?: Tags;
  volume_type?: VolumeTypeName;
  size_gb?: number;
  performance?: VolumePerformance;
  included_io_limits?: IncludedIOLimits;
  status?: VolumeStatus;
  bootable?: boolean;
  source_image_id?: string | null;
  source_snapshot_id?: string | null;
  faults: Fault[];
  created_at?: string;
  updated_at?: string;
};
export type VolumeTypeName = "hdd" | "ssd" | "nvme";
export type VolumePerformance = {
  requested: IncludedIOLimits;
  applied: IncludedIOLimits;
  state: "creating" | "pending" | "applied";
  operation_id?: string;
  applied_at?: string;
  last_error?: string;
};
export type IncludedIOLimits = {
  iops: number;
  bytes_per_sec: number;
  burst_iops: number;
  burst_bytes_per_sec: number;
  burst_seconds: number;
};
export type VolumeStatus =
  "creating" | "available" | "in_use" | "extending" | "deleting" | "error";
export type VolumeExtendRequestInput = { new_size_gb: number };
export type BucketCORSResponse = { cors: CORSConfig };
export type CORSConfig = { rules: CORSRule[] };
export type CORSRule = {
  id?: string;
  allowed_origins: string[];
  allowed_methods: ("GET" | "PUT" | "POST" | "DELETE" | "HEAD")[];
  allowed_headers?: string[];
  expose_headers?: string[];
  max_age_seconds?: number;
};
export type BucketEncryptionResponse = { encryption: EncryptionConfig };
export type EncryptionConfig = { rules: EncryptionRule[] };
export type EncryptionRule = {
  default?: { sse_algorithm: string; kms_master_key_id?: string };
  bucket_key_enabled?: boolean;
};
export type BucketLifecycleResponse = {
  revision: string;
  lifecycle: LifecycleConfig;
};
export type LifecycleConfig = { rules: LifecycleRule[] };
export type LifecycleRule = {
  id?: string;
  status: "enabled" | "disabled";
  filter?: { prefix?: string };
  transition?: {
    days?: number;
    date?: string;
    storage_class: "STANDARD" | "COLD";
  };
  expiration?: { days?: number; date?: string };
  noncurrent_version_expiration?: {
    noncurrent_days?: number;
    newer_noncurrent_versions?: number;
  };
  abort_incomplete_multipart_upload?: { days_after_initiation?: number };
};
export type BucketObjectLockResponse = { object_lock: ObjectLockConfig };
export type ObjectLockConfig = {
  object_lock_enabled?: string;
  rule?: {
    default_retention?: {
      mode?: "GOVERNANCE" | "COMPLIANCE";
      days?: number;
      years?: number;
    };
  };
};
export type BucketPolicyResponse = { document?: BucketPolicy };
export type BucketPolicy = { [key: string]: unknown };
export type BucketTaggingResponse = { tags: TagSet };
export type TagSet = { [key: string]: string };
export type BucketVersioningResponse = {
  status: "disabled" | "enabled" | "suspended";
};
export type InitiateMultipartUploadRequestInput = {
  key: string;
  content_type?: string;
  storage_class?: string;
  metadata?: { [key: string]: string };
};
export type MultipartUploadResponse = { upload: MultipartUpload };
export type MultipartUpload = {
  upload_id: string;
  bucket: string;
  key: string;
  content_type?: string;
  storage_class?: string;
  metadata?: { [key: string]: string };
  created_at: string;
};
export type BucketListResponse = { buckets?: Bucket[]; meta?: PaginationMeta };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type ListMultipartUploadsResponse2 = { uploads: MultipartUpload[] };
export type ListObjectVersionsResponse2 = {
  versions: ObjectVersion[];
  is_truncated: boolean;
  next_key_marker?: string;
  next_version_id_marker?: string;
};
export type ObjectVersion = {
  key: string;
  version_id: string;
  size: number;
  etag: string;
  content_type?: string;
  storage_class?: string;
  last_modified: string;
  is_latest: boolean;
  is_delete_marker: boolean;
};
export type ObjectListResponse = {
  objects?: ObjectEntry[];
  common_prefixes?: string[];
  is_truncated?: boolean;
  meta?: PaginationMeta;
};
export type ObjectEntry = {
  key: string;
  size: number;
  etag: string;
  content_type?: string;
  last_modified: string;
};
export type ListPartsResponse2 = {
  upload: MultipartUpload;
  parts: MultipartPart[];
};
export type MultipartPart = { part_number: number; size: number; etag: string };
export type SnapshotPolicyListResponse = {
  snapshot_policies?: SnapshotPolicy[];
  meta?: PaginationMeta;
};
export type SnapshotStatusInput =
  "creating" | "available" | "deleting" | "error";
export type SnapshotListResponse = {
  snapshots?: Snapshot[];
  meta?: PaginationMeta;
};
export type VolumeTypeListResponse = { volume_types?: VolumeType[] };
export type VolumeType = {
  included_iops?: number;
  included_throughput_mib_s?: number;
  max_iops?: number;
  max_throughput_mib_s?: number;
  crn?: string;
  id?: string;
  name?: string;
  description?: string;
};
export type VolumeStatusInput =
  "creating" | "available" | "in_use" | "extending" | "deleting" | "error";
export type VolumeListResponse = { volumes?: Volume[]; meta?: PaginationMeta };
export type PutBucketCORSRequestInput = { cors: CORSConfigInput };
export type CORSConfigInput = { rules: CORSRuleInput[] };
export type CORSRuleInput = {
  id?: string;
  allowed_origins: string[];
  allowed_methods: ("GET" | "PUT" | "POST" | "DELETE" | "HEAD")[];
  allowed_headers?: string[];
  expose_headers?: string[];
  max_age_seconds?: number;
};
export type PutBucketDeletionProtectionRequestInput = {
  enabled: boolean;
  recovery_window_days?: number;
};
export type PutBucketEncryptionRequestInput = {
  encryption: EncryptionConfigInput;
};
export type EncryptionConfigInput = { rules: EncryptionRuleInput[] };
export type EncryptionRuleInput = {
  default?: { sse_algorithm: string; kms_master_key_id?: string };
  bucket_key_enabled?: boolean;
};
export type PutBucketLifecycleRequestInput = {
  lifecycle: LifecycleConfigInput;
};
export type LifecycleConfigInput = { rules: LifecycleRuleInput[] };
export type LifecycleRuleInput = {
  id?: string;
  status: "enabled" | "disabled";
  filter?: { prefix?: string };
  transition?: {
    days?: number;
    date?: string;
    storage_class: "STANDARD" | "COLD";
  };
  expiration?: { days?: number; date?: string };
  noncurrent_version_expiration?: {
    noncurrent_days?: number;
    newer_noncurrent_versions?: number;
  };
  abort_incomplete_multipart_upload?: { days_after_initiation?: number };
};
export type PutBucketObjectLockRequestInput = {
  object_lock: ObjectLockConfigInput;
};
export type ObjectLockConfigInput = {
  object_lock_enabled?: string;
  rule?: {
    default_retention?: {
      mode?: "GOVERNANCE" | "COMPLIANCE";
      days?: number;
      years?: number;
    };
  };
};
export type PutBucketPolicyRequestInput = { document: BucketPolicyInput };
export type BucketPolicyInput = { [key: string]: unknown };
export type PutBucketTaggingRequestInput = { tags: TagSetInput };
export type TagSetInput = { [key: string]: string };
export type PutBucketVersioningRequestInput = {
  status: "enabled" | "suspended";
};
export type PutObjectResponse2 = { key: string; etag: string; size: number };
export type SnapshotUpdateRequestInput = {
  description?: string;
  tags?: TagsInput;
};
export type SnapshotPolicyUpdateRequestInput = {
  description?: string;
  enabled?: boolean;
  interval_minutes?: SnapshotIntervalMinutesInput;
  retention_count?: SnapshotRetentionCountInput;
  retention_days?: SnapshotRetentionDaysInput;
  tags?: TagsInput;
};
export type VolumeUpdateRequestInput = {
  description?: string;
  tags?: TagsInput;
};
export type UploadPartResponse2 = {
  part_number: number;
  etag: string;
  size: number;
};
const operations = {
  abortMultipartUpload: {
    id: "abortMultipartUpload",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/multipart-uploads/{upload_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  completeMultipartUpload: {
    id: "completeMultipartUpload",
    method: "POST",
    path: "/v1/buckets/{bucket}/multipart-uploads/{upload_id}/complete",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createBucket: {
    id: "createBucket",
    method: "POST",
    path: "/v1/buckets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createSnapshot: {
    id: "createSnapshot",
    method: "POST",
    path: "/v1/snapshots",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createSnapshotPolicy: {
    id: "createSnapshotPolicy",
    method: "POST",
    path: "/v1/snapshot-policies",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createVolume: {
    id: "createVolume",
    method: "POST",
    path: "/v1/volumes",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteBucket: {
    id: "deleteBucket",
    method: "DELETE",
    path: "/v1/buckets/{bucket}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteBucketCORS: {
    id: "deleteBucketCORS",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/cors",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteBucketEncryption: {
    id: "deleteBucketEncryption",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/encryption",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteBucketLifecycle: {
    id: "deleteBucketLifecycle",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/lifecycle",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: ["If-Match"],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteBucketObjectLock: {
    id: "deleteBucketObjectLock",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/object-lock",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteBucketPolicy: {
    id: "deleteBucketPolicy",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteBucketTagging: {
    id: "deleteBucketTagging",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/tagging",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteObject: {
    id: "deleteObject",
    method: "DELETE",
    path: "/v1/buckets/{bucket}/objects/{key}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteSnapshot: {
    id: "deleteSnapshot",
    method: "DELETE",
    path: "/v1/snapshots/{snapshot_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteSnapshotPolicy: {
    id: "deleteSnapshotPolicy",
    method: "DELETE",
    path: "/v1/snapshot-policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteVolume: {
    id: "deleteVolume",
    method: "DELETE",
    path: "/v1/volumes/{volume_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  extendVolume: {
    id: "extendVolume",
    method: "POST",
    path: "/v1/volumes/{volume_id}/extend",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  getBucketCORS: {
    id: "getBucketCORS",
    method: "GET",
    path: "/v1/buckets/{bucket}/cors",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getBucketEncryption: {
    id: "getBucketEncryption",
    method: "GET",
    path: "/v1/buckets/{bucket}/encryption",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getBucketLifecycle: {
    id: "getBucketLifecycle",
    method: "GET",
    path: "/v1/buckets/{bucket}/lifecycle",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getBucketObjectLock: {
    id: "getBucketObjectLock",
    method: "GET",
    path: "/v1/buckets/{bucket}/object-lock",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getBucketPolicy: {
    id: "getBucketPolicy",
    method: "GET",
    path: "/v1/buckets/{bucket}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getBucketTagging: {
    id: "getBucketTagging",
    method: "GET",
    path: "/v1/buckets/{bucket}/tagging",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getBucketVersioning: {
    id: "getBucketVersioning",
    method: "GET",
    path: "/v1/buckets/{bucket}/versioning",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getObject: {
    id: "getObject",
    method: "GET",
    path: "/v1/buckets/{bucket}/objects/{key}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  getSnapshot: {
    id: "getSnapshot",
    method: "GET",
    path: "/v1/snapshots/{snapshot_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSnapshotPolicy: {
    id: "getSnapshotPolicy",
    method: "GET",
    path: "/v1/snapshot-policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getVolume: {
    id: "getVolume",
    method: "GET",
    path: "/v1/volumes/{volume_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  headBucket: {
    id: "headBucket",
    method: "HEAD",
    path: "/v1/buckets/{bucket}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  headObject: {
    id: "headObject",
    method: "HEAD",
    path: "/v1/buckets/{bucket}/objects/{key}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  initiateMultipartUpload: {
    id: "initiateMultipartUpload",
    method: "POST",
    path: "/v1/buckets/{bucket}/multipart-uploads",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  listBuckets: {
    id: "listBuckets",
    method: "GET",
    path: "/v1/buckets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "buckets",
  },
  listMultipartUploads: {
    id: "listMultipartUploads",
    method: "GET",
    path: "/v1/buckets/{bucket}/multipart-uploads",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      prefix: { style: "form", explode: true },
      max_uploads: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "uploads",
  },
  listObjectVersions: {
    id: "listObjectVersions",
    method: "GET",
    path: "/v1/buckets/{bucket}/object-versions",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      prefix: { style: "form", explode: true },
      key_marker: { style: "form", explode: true },
      version_id_marker: { style: "form", explode: true },
      max_keys: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "versions",
  },
  listObjects: {
    id: "listObjects",
    method: "GET",
    path: "/v1/buckets/{bucket}/objects",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      prefix: { style: "form", explode: true },
      delimiter: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      max_keys: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listParts: {
    id: "listParts",
    method: "GET",
    path: "/v1/buckets/{bucket}/multipart-uploads/{upload_id}/parts",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "parts",
  },
  listSnapshotPolicies: {
    id: "listSnapshotPolicies",
    method: "GET",
    path: "/v1/snapshot-policies",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      volume: { style: "form", explode: true },
      enabled: { style: "form", explode: true },
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "snapshot_policies",
  },
  listSnapshots: {
    id: "listSnapshots",
    method: "GET",
    path: "/v1/snapshots",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      volume: { style: "form", explode: true },
      name: { style: "form", explode: true },
      status: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      snapshot_policy: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "snapshots",
  },
  listVolumeTypes: {
    id: "listVolumeTypes",
    method: "GET",
    path: "/v1/volume-types",
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
    itemsKey: "volume_types",
  },
  listVolumes: {
    id: "listVolumes",
    method: "GET",
    path: "/v1/volumes",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      name: { style: "form", explode: true },
      status: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "volumes",
  },
  putBucketCORS: {
    id: "putBucketCORS",
    method: "PUT",
    path: "/v1/buckets/{bucket}/cors",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putBucketDeletionProtection: {
    id: "putBucketDeletionProtection",
    method: "PUT",
    path: "/v1/buckets/{bucket}/deletion-protection",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putBucketEncryption: {
    id: "putBucketEncryption",
    method: "PUT",
    path: "/v1/buckets/{bucket}/encryption",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putBucketLifecycle: {
    id: "putBucketLifecycle",
    method: "PUT",
    path: "/v1/buckets/{bucket}/lifecycle",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: ["If-Match"],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putBucketObjectLock: {
    id: "putBucketObjectLock",
    method: "PUT",
    path: "/v1/buckets/{bucket}/object-lock",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putBucketPolicy: {
    id: "putBucketPolicy",
    method: "PUT",
    path: "/v1/buckets/{bucket}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putBucketTagging: {
    id: "putBucketTagging",
    method: "PUT",
    path: "/v1/buckets/{bucket}/tagging",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putBucketVersioning: {
    id: "putBucketVersioning",
    method: "PUT",
    path: "/v1/buckets/{bucket}/versioning",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putObject: {
    id: "putObject",
    method: "PUT",
    path: "/v1/buckets/{bucket}/objects/{key}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/octet-stream",
    accept: "application/json",
  },
  restoreBucket: {
    id: "restoreBucket",
    method: "POST",
    path: "/v1/buckets/{bucket}/restore",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  updateSnapshot: {
    id: "updateSnapshot",
    method: "PATCH",
    path: "/v1/snapshots/{snapshot_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateSnapshotPolicy: {
    id: "updateSnapshotPolicy",
    method: "PATCH",
    path: "/v1/snapshot-policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateVolume: {
    id: "updateVolume",
    method: "PATCH",
    path: "/v1/volumes/{volume_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateVolumePerformance: {
    id: "updateVolumePerformance",
    method: "POST",
    path: "/v1/volumes/{volume_id}/performance",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  uploadPart: {
    id: "uploadPart",
    method: "PUT",
    path: "/v1/buckets/{bucket}/multipart-uploads/{upload_id}/parts/{part_number}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/octet-stream",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class StorageService {
  constructor(private readonly transport: Transport) {}
  /** Abort a multipart upload */
  abortMultipartUpload(
    bucket: string,
    upload_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.abortMultipartUpload,
      { bucket, upload_id },
      undefined,
      {},
      options,
    );
  }
  /** Complete a multipart upload */
  completeMultipartUpload(
    bucket: string,
    upload_id: string,
    body: CompleteMultipartUploadBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CompleteMultipartUploadResponse>> {
    return this.transport.json<CompleteMultipartUploadResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.completeMultipartUpload,
      { bucket, upload_id },
      body,
      {},
      options,
    );
  }
  /** Create bucket */
  createBucket(
    body: CreateBucketBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateBucketResponse>> {
    return this.transport.json<CreateBucketResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.createBucket,
      {},
      body,
      {},
      options,
    );
  }
  /** Create snapshot */
  createSnapshot(
    body: CreateSnapshotBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSnapshotResponse>> {
    return this.transport.json<CreateSnapshotResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.createSnapshot,
      {},
      body,
      {},
      options,
    );
  }
  /** Create snapshot policy */
  createSnapshotPolicy(
    body: CreateSnapshotPolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSnapshotPolicyResponse>> {
    return this.transport.json<CreateSnapshotPolicyResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.createSnapshotPolicy,
      {},
      body,
      {},
      options,
    );
  }
  /** Create volume */
  createVolume(
    body: CreateVolumeBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateVolumeResponse>> {
    return this.transport.json<CreateVolumeResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.createVolume,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete bucket */
  deleteBucket(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DeleteBucketResponse>> {
    return this.transport.json<DeleteBucketResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteBucket,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Delete bucket CORS configuration */
  deleteBucketCORS(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteBucketCORS,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Delete bucket encryption configuration */
  deleteBucketEncryption(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteBucketEncryption,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Delete bucket lifecycle configuration */
  deleteBucketLifecycle(
    bucket: string,
    options: DeleteBucketLifecycleOptions,
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteBucketLifecycle,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Delete bucket object-lock configuration */
  deleteBucketObjectLock(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteBucketObjectLock,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Delete bucket policy */
  deleteBucketPolicy(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteBucketPolicy,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Delete bucket tag set */
  deleteBucketTagging(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteBucketTagging,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Delete object */
  deleteObject(
    bucket: string,
    key: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteObject,
      { bucket, key },
      undefined,
      {},
      options,
    );
  }
  /** Delete snapshot */
  deleteSnapshot(
    snapshot_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteSnapshot,
      { snapshot_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete snapshot policy */
  deleteSnapshotPolicy(
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteSnapshotPolicy,
      { policy_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete volume */
  deleteVolume(volume_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.deleteVolume,
      { volume_id },
      undefined,
      {},
      options,
    );
  }
  /** Extend volume */
  extendVolume(
    volume_id: string,
    body: ExtendVolumeBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ExtendVolumeResponse>> {
    return this.transport.json<ExtendVolumeResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.extendVolume,
      { volume_id },
      body,
      {},
      options,
    );
  }
  /** Get bucket CORS configuration */
  getBucketCORS(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBucketCORSResponse>> {
    return this.transport.json<GetBucketCORSResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getBucketCORS,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Get bucket encryption configuration */
  getBucketEncryption(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBucketEncryptionResponse>> {
    return this.transport.json<GetBucketEncryptionResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getBucketEncryption,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Get bucket lifecycle configuration */
  getBucketLifecycle(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBucketLifecycleResponse>> {
    return this.transport.json<GetBucketLifecycleResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getBucketLifecycle,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Get bucket object-lock configuration */
  getBucketObjectLock(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBucketObjectLockResponse>> {
    return this.transport.json<GetBucketObjectLockResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getBucketObjectLock,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Get bucket policy */
  getBucketPolicy(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBucketPolicyResponse>> {
    return this.transport.json<GetBucketPolicyResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getBucketPolicy,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Get bucket tag set */
  getBucketTagging(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBucketTaggingResponse>> {
    return this.transport.json<GetBucketTaggingResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getBucketTagging,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Get bucket versioning state */
  getBucketVersioning(
    bucket: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBucketVersioningResponse>> {
    return this.transport.json<GetBucketVersioningResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getBucketVersioning,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Download object */
  getObject(
    bucket: string,
    key: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getObject,
      { bucket, key },
      undefined,
      {},
      options,
    );
  }
  /** Get snapshot */
  getSnapshot(
    snapshot_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSnapshotResponse>> {
    return this.transport.json<GetSnapshotResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getSnapshot,
      { snapshot_id },
      undefined,
      {},
      options,
    );
  }
  getSnapshotByReference(
    reference: string,
    scope: Omit<ListSnapshotsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Snapshot>> {
    return resolveReference<Snapshot>(
      reference,
      (id) => this.getSnapshot(id, options),
      (filter) =>
        this.listSnapshots(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "snapshot",
    );
  }
  /** Get snapshot policy */
  getSnapshotPolicy(
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSnapshotPolicyResponse>> {
    return this.transport.json<GetSnapshotPolicyResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getSnapshotPolicy,
      { policy_id },
      undefined,
      {},
      options,
    );
  }
  getSnapshotPolicyByReference(
    reference: string,
    scope: Omit<ListSnapshotPoliciesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<SnapshotPolicy>> {
    return resolveReference<SnapshotPolicy>(
      reference,
      (id) => this.getSnapshotPolicy(id, options),
      (filter) =>
        this.listSnapshotPolicies(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "snapshot_policy",
    );
  }
  /** Get volume */
  getVolume(
    volume_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetVolumeResponse>> {
    return this.transport.json<GetVolumeResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.getVolume,
      { volume_id },
      undefined,
      {},
      options,
    );
  }
  getVolumeByReference(
    reference: string,
    scope: Omit<ListVolumesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Volume>> {
    return resolveReference<Volume>(
      reference,
      (id) => this.getVolume(id, options),
      (filter) =>
        this.listVolumes(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "volume",
    );
  }
  /** Head bucket */
  headBucket(bucket: string, options: RequestOptions = {}): Promise<Response> {
    return this.transport.binary(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.headBucket,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Head object */
  headObject(
    bucket: string,
    key: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.headObject,
      { bucket, key },
      undefined,
      {},
      options,
    );
  }
  /** Initiate a multipart upload */
  initiateMultipartUpload(
    bucket: string,
    body: InitiateMultipartUploadBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<InitiateMultipartUploadResponse>> {
    return this.transport.json<InitiateMultipartUploadResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.initiateMultipartUpload,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** List buckets */
  listBuckets(
    query: ListBucketsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListBucketsResponse, ListBucketsItem>> {
    return this.transport.page<ListBucketsResponse, ListBucketsItem>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listBuckets,
      {},
      undefined,
      query,
      options,
    );
  }
  listBucketsAll(
    query: ListBucketsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListBucketsItem> {
    return iteratePages(
      (marker) => this.listBuckets({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List in-flight multipart uploads */
  listMultipartUploads(
    bucket: string,
    query: ListMultipartUploadsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListMultipartUploadsResponse, ListMultipartUploadsItem>> {
    return this.transport.page<
      ListMultipartUploadsResponse,
      ListMultipartUploadsItem
    >(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listMultipartUploads,
      { bucket },
      undefined,
      query,
      options,
    );
  }
  /** List object versions */
  listObjectVersions(
    bucket: string,
    query: ListObjectVersionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListObjectVersionsResponse, ListObjectVersionsItem>> {
    return this.transport.page<
      ListObjectVersionsResponse,
      ListObjectVersionsItem
    >(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listObjectVersions,
      { bucket },
      undefined,
      query,
      options,
    );
  }
  /** List objects */
  listObjects(
    bucket: string,
    query: ListObjectsQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<ListObjectsResponse>> {
    return this.transport.json<ListObjectsResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listObjects,
      { bucket },
      undefined,
      query,
      options,
    );
  }
  /** List uploaded parts */
  listParts(
    bucket: string,
    upload_id: string,
    options: RequestOptions = {},
  ): Promise<Page<ListPartsResponse, ListPartsItem>> {
    return this.transport.page<ListPartsResponse, ListPartsItem>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listParts,
      { bucket, upload_id },
      undefined,
      {},
      options,
    );
  }
  /** List snapshot policies */
  listSnapshotPolicies(
    query: ListSnapshotPoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSnapshotPoliciesResponse, ListSnapshotPoliciesItem>> {
    return this.transport.page<
      ListSnapshotPoliciesResponse,
      ListSnapshotPoliciesItem
    >(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listSnapshotPolicies,
      {},
      undefined,
      query,
      options,
    );
  }
  listSnapshotPoliciesAll(
    query: ListSnapshotPoliciesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSnapshotPoliciesItem> {
    return iteratePages(
      (marker) => this.listSnapshotPolicies({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List snapshots */
  listSnapshots(
    query: ListSnapshotsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSnapshotsResponse, ListSnapshotsItem>> {
    return this.transport.page<ListSnapshotsResponse, ListSnapshotsItem>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listSnapshots,
      {},
      undefined,
      query,
      options,
    );
  }
  listSnapshotsAll(
    query: ListSnapshotsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSnapshotsItem> {
    return iteratePages(
      (marker) => this.listSnapshots({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List volume types */
  listVolumeTypes(
    query: ListVolumeTypesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListVolumeTypesResponse, ListVolumeTypesItem>> {
    return this.transport.page<ListVolumeTypesResponse, ListVolumeTypesItem>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listVolumeTypes,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List volumes */
  listVolumes(
    query: ListVolumesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListVolumesResponse, ListVolumesItem>> {
    return this.transport.page<ListVolumesResponse, ListVolumesItem>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.listVolumes,
      {},
      undefined,
      query,
      options,
    );
  }
  listVolumesAll(
    query: ListVolumesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListVolumesItem> {
    return iteratePages(
      (marker) => this.listVolumes({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Put bucket CORS configuration */
  putBucketCORS(
    bucket: string,
    body: PutBucketCORSBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketCORS,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Set bucket deletion protection */
  putBucketDeletionProtection(
    bucket: string,
    body: PutBucketDeletionProtectionBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketDeletionProtection,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Put bucket encryption configuration */
  putBucketEncryption(
    bucket: string,
    body: PutBucketEncryptionBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketEncryption,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Put bucket lifecycle configuration */
  putBucketLifecycle(
    bucket: string,
    body: PutBucketLifecycleBody,
    options: PutBucketLifecycleOptions,
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketLifecycle,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Put bucket object-lock configuration */
  putBucketObjectLock(
    bucket: string,
    body: PutBucketObjectLockBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketObjectLock,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Put bucket policy */
  putBucketPolicy(
    bucket: string,
    body: PutBucketPolicyBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketPolicy,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Put bucket tag set */
  putBucketTagging(
    bucket: string,
    body: PutBucketTaggingBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketTagging,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Set bucket versioning state */
  putBucketVersioning(
    bucket: string,
    body: PutBucketVersioningBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putBucketVersioning,
      { bucket },
      body,
      {},
      options,
    );
  }
  /** Upload object */
  putObject(
    bucket: string,
    key: string,
    body: PutObjectBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutObjectResponse>> {
    return this.transport.json<PutObjectResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.putObject,
      { bucket, key },
      body,
      {},
      options,
    );
  }
  /** Restore a bucket pending deletion */
  restoreBucket(bucket: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.restoreBucket,
      { bucket },
      undefined,
      {},
      options,
    );
  }
  /** Update snapshot metadata */
  updateSnapshot(
    snapshot_id: string,
    body: UpdateSnapshotBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateSnapshotResponse>> {
    return this.transport.json<UpdateSnapshotResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.updateSnapshot,
      { snapshot_id },
      body,
      {},
      options,
    );
  }
  /** Update snapshot policy */
  updateSnapshotPolicy(
    policy_id: string,
    body: UpdateSnapshotPolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateSnapshotPolicyResponse>> {
    return this.transport.json<UpdateSnapshotPolicyResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.updateSnapshotPolicy,
      { policy_id },
      body,
      {},
      options,
    );
  }
  /** Update volume metadata */
  updateVolume(
    volume_id: string,
    body: UpdateVolumeBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateVolumeResponse>> {
    return this.transport.json<UpdateVolumeResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.updateVolume,
      { volume_id },
      body,
      {},
      options,
    );
  }
  /** Update provisioned performance */
  updateVolumePerformance(
    volume_id: string,
    body: UpdateVolumePerformanceBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateVolumePerformanceResponse>> {
    return this.transport.json<UpdateVolumePerformanceResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.updateVolumePerformance,
      { volume_id },
      body,
      {},
      options,
    );
  }
  /** Upload a part */
  uploadPart(
    bucket: string,
    upload_id: string,
    part_number: string,
    body: UploadPartBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UploadPartResponse>> {
    return this.transport.json<UploadPartResponse>(
      "storage",
      "https://storage.{region}.basaltic.sh",
      operations.uploadPart,
      { bucket, upload_id, part_number },
      body,
      {},
      options,
    );
  }
}
