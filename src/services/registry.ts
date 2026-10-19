// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages } from "../response.js";
export type BatchDeleteImageBody = BatchDeleteImageRequestInput;
export type BatchDeleteImageResponse = BatchDeleteResult;
export type CreatePullThroughCacheRuleBody =
  CreatePullThroughCacheRuleRequestInput;
export type CreatePullThroughCacheRuleResponse = PullThroughCacheRuleResponse;
export type CreateRepositoryBody = CreateRepositoryRequestInput;
export type CreateRepositoryResponse = RepositoryResponse;
export type DeleteRepositoryQuery = { force?: boolean };
export type DescribeImageResponse = ImageResponse;
export type DescribeImagesQuery = {
  tag_status?: "tagged" | "untagged" | "any";
  tag_prefix?: string;
  marker?: string;
  limit?: number;
};
export type DescribeImagesResponse = ImageListResponse;
export type DescribePullThroughCacheRuleResponse = PullThroughCacheRuleResponse;
export type DescribePullThroughCacheRulesQuery = {
  name?: string;
  crn?: string;
};
export type DescribePullThroughCacheRulesResponse =
  PullThroughCacheRuleListResponse;
export type DescribeRepositoriesQuery = {
  name?: string;
  crn?: string;
  marker?: string;
  limit?: number;
};
export type DescribeRepositoriesResponse = RepositoryListResponse;
export type DescribeRepositoryResponse = RepositoryResponse;
export type GetAuthorizationTokenResponse = AuthorizationTokenResponse;
export type GetEncryptionConfigurationResponse =
  EncryptionConfigurationResponse;
export type GetLifecyclePolicyResponse = LifecyclePolicyResponse;
export type GetRepositoryPolicyResponse = RepositoryPolicyResponse;
export type GetRetainedRegistryPresenceResponse = { has_resources: boolean };
export type ListTagsQuery = { marker?: string; limit?: number };
export type ListTagsResponse = TagListResponse;
export type ListTagsItem = Tag;
export type PutEncryptionConfigurationBody =
  EncryptionConfigurationRequestInput;
export type PutEncryptionConfigurationResponse =
  EncryptionConfigurationResponse;
export type PutLifecyclePolicyBody = LifecyclePolicyRequestInput;
export type PutLifecyclePolicyResponse = LifecyclePolicyResponse;
export type SetRepositoryPolicyBody = RepositoryPolicyRequestInput;
export type SetRepositoryPolicyResponse = RepositoryPolicyResponse;
export type StartLifecyclePolicyPreviewBody = LifecyclePolicyRequestInput;
export type StartLifecyclePolicyPreviewResponse = LifecyclePreviewResponse;
export type UpdatePullThroughCacheRuleBody =
  UpdatePullThroughCacheRuleRequestInput;
export type UpdatePullThroughCacheRuleResponse = PullThroughCacheRuleResponse;
export type UpdateRepositoryBody = UpdateRepositoryRequestInput;
export type UpdateRepositoryResponse = RepositoryResponse;
export type BatchDeleteImageRequestInput = {
  digests?: string[];
  tags?: string[];
};
export type BatchDeleteResult = {
  deleted: { digest: string; tags?: string[] }[];
  failed: { digest?: string; tag?: string; code: string; reason: string }[];
};
export type CreatePullThroughCacheRuleRequestInput = {
  prefix: string;
  upstream_registry: string;
  upstream_prefix?: string;
  upstream_username?: string;
  upstream_secret?: string;
};
export type PullThroughCacheRuleResponse = {
  pull_through_cache_rule: PullThroughCacheRule;
};
export type PullThroughCacheRule = {
  crn: string;
  prefix: string;
  uri_prefix: string;
  upstream_registry: string;
  upstream_prefix?: string;
  upstream_username?: string;
  has_credential: boolean;
  created_at: string;
  updated_at: string;
};
export type CreateRepositoryRequestInput = {
  name: string;
  tag_mutability?: "mutable" | "immutable";
  deletion_protection?: boolean;
  tags?: { [key: string]: string };
};
export type RepositoryResponse = {
  repository: Repository;
  push_commands?: string[];
};
export type Repository = {
  id: string;
  crn: string;
  name: string;
  uri: string;
  tag_mutability: "mutable" | "immutable";
  deletion_protection: boolean;
  tags?: { [key: string]: string };
  stats?: RepositoryStats;
  created_at: string;
  updated_at: string;
};
export type RepositoryStats = {
  image_count?: number;
  tag_count?: number;
  size_bytes?: number;
  last_pushed_at?: string | null;
};
export type ImageResponse = {
  image: Image;
  manifest?: { [key: string]: unknown };
};
export type Image = {
  id: string;
  digest: string;
  media_type: string;
  tags: string[];
  artifact_type?: string;
  config_digest?: string;
  subject?: string;
  manifest_size_bytes?: number;
  size_bytes: number;
  is_index: boolean;
  pushed_at: string;
  last_pulled_at?: string | null;
};
export type ImageListResponse = { images: Image[]; meta?: PaginationMeta };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type PullThroughCacheRuleListResponse = {
  pull_through_cache_rules: PullThroughCacheRule[];
};
export type RepositoryListResponse = {
  repositories: Repository[];
  meta?: PaginationMeta;
};
export type AuthorizationTokenResponse = {
  authorization_data: {
    authorization_token: string;
    username: string;
    password: string;
    endpoint: string;
    expires_at: string;
  };
};
export type EncryptionConfigurationResponse = {
  encryption_configuration: EncryptionConfiguration;
};
export type EncryptionConfiguration = {
  encryption_type: "platform_managed" | "kms";
  kms_key?: ResourceRef;
  updated_at?: string;
};
export type ResourceRef = { id: string; crn: string; name?: string };
export type LifecyclePolicyResponse = {
  policy: {
    rules: LifecycleRule[];
    updated_at: string;
    last_evaluated_at?: string | null;
  };
};
export type LifecycleRule = {
  priority: number;
  description?: string;
  selection: LifecycleSelection;
  action: "expire";
};
export type LifecycleSelection = {
  tag_status: "tagged" | "untagged" | "any";
  tag_prefixes?: string[];
  tag_patterns?: string[];
  count_type:
    "image_count_more_than" | "since_image_pushed" | "since_image_pulled";
  count_unit?: "days";
  count_number: number;
};
export type RepositoryPolicyResponse = {
  policy: { document: RepositoryPolicyDocument; updated_at?: string };
};
export type RepositoryPolicyDocument = {
  version: string;
  statements: {
    sid?: string;
    effect: "allow" | "deny";
    principals: string[];
    actions: string[];
    resources: string[];
    conditions?: PolicyCondition[];
  }[];
};
export type PolicyCondition = {
  operator: string;
  key: string;
  values: string[];
  set_operator?: "for_all_values" | "for_any_value";
};
export type TagListResponse = { tags: Tag[]; meta?: PaginationMeta };
export type Tag = {
  name: string;
  digest: string;
  created_at: string;
  updated_at: string;
};
export type EncryptionConfigurationRequestInput = {
  encryption_type: "platform_managed" | "kms";
  kms_key?: string;
};
export type LifecyclePolicyRequestInput = { rules: LifecycleRuleInput[] };
export type LifecycleRuleInput = {
  priority: number;
  description?: string;
  selection: LifecycleSelectionInput;
  action: "expire";
};
export type LifecycleSelectionInput = {
  tag_status: "tagged" | "untagged" | "any";
  tag_prefixes?: string[];
  tag_patterns?: string[];
  count_type:
    "image_count_more_than" | "since_image_pushed" | "since_image_pulled";
  count_unit?: "days";
  count_number: number;
};
export type RepositoryPolicyRequestInput = {
  document: RepositoryPolicyDocumentInput;
};
export type RepositoryPolicyDocumentInput = {
  version: string;
  statements: {
    sid?: string;
    effect: "allow" | "deny";
    principals: string[];
    actions: string[];
    resources: string[];
    conditions?: PolicyConditionInput[];
  }[];
};
export type PolicyConditionInput = {
  operator: string;
  key: string;
  values: string[];
  set_operator?: "for_all_values" | "for_any_value";
};
export type LifecyclePreviewResponse = {
  preview: {
    matches: {
      digest: string;
      tags?: string[];
      pushed_at: string;
      last_pulled_at?: string | null;
      rule_priority: number;
    }[];
    total_images: number;
    size_bytes: number;
  };
};
export type UpdatePullThroughCacheRuleRequestInput = {
  upstream_registry?: string;
  upstream_prefix?: string;
  upstream_username?: string;
  upstream_secret?: string;
};
export type UpdateRepositoryRequestInput = {
  tag_mutability?: "mutable" | "immutable";
  deletion_protection?: boolean;
  tags?: { [key: string]: string };
};
const operations = {
  batchDeleteImage: {
    id: "batchDeleteImage",
    method: "POST",
    path: "/v1/repositories/{repository_id}/images/batch-delete",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createPullThroughCacheRule: {
    id: "createPullThroughCacheRule",
    method: "POST",
    path: "/v1/pull-through-cache-rules",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createRepository: {
    id: "createRepository",
    method: "POST",
    path: "/v1/repositories",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteEncryptionConfiguration: {
    id: "deleteEncryptionConfiguration",
    method: "DELETE",
    path: "/v1/encryption-configuration",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteLifecyclePolicy: {
    id: "deleteLifecyclePolicy",
    method: "DELETE",
    path: "/v1/repositories/{repository_id}/lifecycle-policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deletePullThroughCacheRule: {
    id: "deletePullThroughCacheRule",
    method: "DELETE",
    path: "/v1/pull-through-cache-rules/{prefix}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRepository: {
    id: "deleteRepository",
    method: "DELETE",
    path: "/v1/repositories/{repository_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: { force: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRepositoryPolicy: {
    id: "deleteRepositoryPolicy",
    method: "DELETE",
    path: "/v1/repositories/{repository_id}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeImage: {
    id: "describeImage",
    method: "GET",
    path: "/v1/repositories/{repository_id}/images/{image_reference}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeImages: {
    id: "describeImages",
    method: "GET",
    path: "/v1/repositories/{repository_id}/images",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      tag_status: { style: "form", explode: true },
      tag_prefix: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describePullThroughCacheRule: {
    id: "describePullThroughCacheRule",
    method: "GET",
    path: "/v1/pull-through-cache-rules/{prefix}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describePullThroughCacheRules: {
    id: "describePullThroughCacheRules",
    method: "GET",
    path: "/v1/pull-through-cache-rules",
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
  },
  describeRepositories: {
    id: "describeRepositories",
    method: "GET",
    path: "/v1/repositories",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeRepository: {
    id: "describeRepository",
    method: "GET",
    path: "/v1/repositories/{repository_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getAuthorizationToken: {
    id: "getAuthorizationToken",
    method: "POST",
    path: "/v1/authorization-token",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getEncryptionConfiguration: {
    id: "getEncryptionConfiguration",
    method: "GET",
    path: "/v1/encryption-configuration",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getLifecyclePolicy: {
    id: "getLifecyclePolicy",
    method: "GET",
    path: "/v1/repositories/{repository_id}/lifecycle-policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRepositoryPolicy: {
    id: "getRepositoryPolicy",
    method: "GET",
    path: "/v1/repositories/{repository_id}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRetainedRegistryPresence: {
    id: "getRetainedRegistryPresence",
    method: "GET",
    path: "/v1/encryption-configuration/retained-data",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listTags: {
    id: "listTags",
    method: "GET",
    path: "/v1/repositories/{repository_id}/tags",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "tags",
  },
  putEncryptionConfiguration: {
    id: "putEncryptionConfiguration",
    method: "PUT",
    path: "/v1/encryption-configuration",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putLifecyclePolicy: {
    id: "putLifecyclePolicy",
    method: "PUT",
    path: "/v1/repositories/{repository_id}/lifecycle-policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  setRepositoryPolicy: {
    id: "setRepositoryPolicy",
    method: "PUT",
    path: "/v1/repositories/{repository_id}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  startLifecyclePolicyPreview: {
    id: "startLifecyclePolicyPreview",
    method: "POST",
    path: "/v1/repositories/{repository_id}/lifecycle-policy/preview",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  updatePullThroughCacheRule: {
    id: "updatePullThroughCacheRule",
    method: "PATCH",
    path: "/v1/pull-through-cache-rules/{prefix}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateRepository: {
    id: "updateRepository",
    method: "PATCH",
    path: "/v1/repositories/{repository_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class RegistryService {
  constructor(private readonly transport: Transport) {}
  /** Delete images */
  batchDeleteImage(
    repository_id: string,
    body: BatchDeleteImageBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<BatchDeleteImageResponse>> {
    return this.transport.json<BatchDeleteImageResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.batchDeleteImage,
      { repository_id },
      body,
      {},
      options,
    );
  }
  /** Create a pull-through cache rule */
  createPullThroughCacheRule(
    body: CreatePullThroughCacheRuleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreatePullThroughCacheRuleResponse>> {
    return this.transport.json<CreatePullThroughCacheRuleResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.createPullThroughCacheRule,
      {},
      body,
      {},
      options,
    );
  }
  /** Create a repository */
  createRepository(
    body: CreateRepositoryBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateRepositoryResponse>> {
    return this.transport.json<CreateRepositoryResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.createRepository,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete encryption configuration */
  deleteEncryptionConfiguration(options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.deleteEncryptionConfiguration,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Delete the lifecycle policy */
  deleteLifecyclePolicy(
    repository_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.deleteLifecyclePolicy,
      { repository_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a pull-through cache rule */
  deletePullThroughCacheRule(
    prefix: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.deletePullThroughCacheRule,
      { prefix },
      undefined,
      {},
      options,
    );
  }
  /** Delete a repository */
  deleteRepository(
    repository_id: string,
    query: DeleteRepositoryQuery = {},
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.deleteRepository,
      { repository_id },
      undefined,
      query,
      options,
    );
  }
  /** Delete the repository policy */
  deleteRepositoryPolicy(
    repository_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.deleteRepositoryPolicy,
      { repository_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe an image */
  describeImage(
    repository_id: string,
    image_reference: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeImageResponse>> {
    return this.transport.json<DescribeImageResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.describeImage,
      { repository_id, image_reference },
      undefined,
      {},
      options,
    );
  }
  /** List images */
  describeImages(
    repository_id: string,
    query: DescribeImagesQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeImagesResponse>> {
    return this.transport.json<DescribeImagesResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.describeImages,
      { repository_id },
      undefined,
      query,
      options,
    );
  }
  /** Get a pull-through cache rule */
  describePullThroughCacheRule(
    prefix: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribePullThroughCacheRuleResponse>> {
    return this.transport.json<DescribePullThroughCacheRuleResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.describePullThroughCacheRule,
      { prefix },
      undefined,
      {},
      options,
    );
  }
  /** List pull-through cache rules */
  describePullThroughCacheRules(
    query: DescribePullThroughCacheRulesQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribePullThroughCacheRulesResponse>> {
    return this.transport.json<DescribePullThroughCacheRulesResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.describePullThroughCacheRules,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List repositories */
  describeRepositories(
    query: DescribeRepositoriesQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeRepositoriesResponse>> {
    return this.transport.json<DescribeRepositoriesResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.describeRepositories,
      {},
      undefined,
      query,
      options,
    );
  }
  /** Describe a repository */
  describeRepository(
    repository_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeRepositoryResponse>> {
    return this.transport.json<DescribeRepositoryResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.describeRepository,
      { repository_id },
      undefined,
      {},
      options,
    );
  }
  /** Get a docker login credential */
  getAuthorizationToken(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetAuthorizationTokenResponse>> {
    return this.transport.json<GetAuthorizationTokenResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.getAuthorizationToken,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Get the encryption configuration */
  getEncryptionConfiguration(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetEncryptionConfigurationResponse>> {
    return this.transport.json<GetEncryptionConfigurationResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.getEncryptionConfiguration,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Get the lifecycle policy */
  getLifecyclePolicy(
    repository_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetLifecyclePolicyResponse>> {
    return this.transport.json<GetLifecyclePolicyResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.getLifecyclePolicy,
      { repository_id },
      undefined,
      {},
      options,
    );
  }
  /** Get the repository policy */
  getRepositoryPolicy(
    repository_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRepositoryPolicyResponse>> {
    return this.transport.json<GetRepositoryPolicyResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.getRepositoryPolicy,
      { repository_id },
      undefined,
      {},
      options,
    );
  }
  /** Check retained registry data presence */
  getRetainedRegistryPresence(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRetainedRegistryPresenceResponse>> {
    return this.transport.json<GetRetainedRegistryPresenceResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.getRetainedRegistryPresence,
      {},
      undefined,
      {},
      options,
    );
  }
  /** List tags */
  listTags(
    repository_id: string,
    query: ListTagsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListTagsResponse, ListTagsItem>> {
    return this.transport.page<ListTagsResponse, ListTagsItem>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.listTags,
      { repository_id },
      undefined,
      query,
      options,
    );
  }
  listTagsAll(
    repository_id: string,
    query: ListTagsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListTagsItem> {
    return iteratePages(
      (marker) => this.listTags(repository_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Set the encryption configuration */
  putEncryptionConfiguration(
    body: PutEncryptionConfigurationBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutEncryptionConfigurationResponse>> {
    return this.transport.json<PutEncryptionConfigurationResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.putEncryptionConfiguration,
      {},
      body,
      {},
      options,
    );
  }
  /** Set the lifecycle policy */
  putLifecyclePolicy(
    repository_id: string,
    body: PutLifecyclePolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutLifecyclePolicyResponse>> {
    return this.transport.json<PutLifecyclePolicyResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.putLifecyclePolicy,
      { repository_id },
      body,
      {},
      options,
    );
  }
  /** Set the repository policy */
  setRepositoryPolicy(
    repository_id: string,
    body: SetRepositoryPolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SetRepositoryPolicyResponse>> {
    return this.transport.json<SetRepositoryPolicyResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.setRepositoryPolicy,
      { repository_id },
      body,
      {},
      options,
    );
  }
  /** Preview a lifecycle policy */
  startLifecyclePolicyPreview(
    repository_id: string,
    body: StartLifecyclePolicyPreviewBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<StartLifecyclePolicyPreviewResponse>> {
    return this.transport.json<StartLifecyclePolicyPreviewResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.startLifecyclePolicyPreview,
      { repository_id },
      body,
      {},
      options,
    );
  }
  /** Update a pull-through cache rule */
  updatePullThroughCacheRule(
    prefix: string,
    body: UpdatePullThroughCacheRuleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdatePullThroughCacheRuleResponse>> {
    return this.transport.json<UpdatePullThroughCacheRuleResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.updatePullThroughCacheRule,
      { prefix },
      body,
      {},
      options,
    );
  }
  /** Update repository settings */
  updateRepository(
    repository_id: string,
    body: UpdateRepositoryBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateRepositoryResponse>> {
    return this.transport.json<UpdateRepositoryResponse>(
      "registry",
      "https://registry.{region}.basaltic.sh",
      operations.updateRepository,
      { repository_id },
      body,
      {},
      options,
    );
  }
}
