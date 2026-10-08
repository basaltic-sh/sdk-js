// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages } from "../response.js";
export type CreateSecretBody = CreateSecretRequestInput;
export type CreateSecretResponse = SecretResponse;
export type DeleteSecretBody = DeleteSecretRequestInput;
export type DeleteSecretResponse = SecretResponse;
export type DescribeSecretResponse = SecretResponse;
export type GetSecretValueQuery = { version?: number };
export type GetSecretValueResponse = SecretValueResponse;
export type ListSecretsQuery = {
  name?: string;
  crn?: string;
  include_deleted?: boolean;
  marker?: string;
  limit?: number;
};
export type ListSecretsResponse = SecretListResponse;
export type ListSecretsItem = Secret;
export type ListVersionsQuery = {
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListVersionsResponse = VersionListResponse;
export type ListVersionsItem = SecretVersion;
export type PutSecretValueBody = PutSecretValueRequestInput;
export type PutSecretValueResponse = VersionResponse;
export type RestoreSecretResponse = SecretResponse;
export type UpdateSecretBody = UpdateSecretRequestInput;
export type UpdateSecretResponse = SecretResponse;
export type CreateSecretRequestInput = {
  name: string;
  description?: string;
  tags?: TagsInput;
  value: string;
  recovery_window_days?: number;
  kms_key?: string;
};
export type TagsInput = { [key: string]: string };
export type SecretResponse = { secret: Secret };
export type Secret = {
  id: string;
  name: string;
  description?: string;
  tags?: Tags;
  crn: string;
  kms_key_unavailable?: boolean;
  kms_key_crn?: string | null;
  managed: boolean;
  deleted_at?: string | null;
  scheduled_purge_at?: string | null;
  recovery_window_days: number;
  current_version?: number;
  created_at: string;
  updated_at: string;
};
export type Tags = { [key: string]: string };
export type DeleteSecretRequestInput = { recovery_window_days?: number };
export type SecretValueResponse = { secret: SecretValue };
export type SecretValue = {
  secret_id: string;
  name: string;
  version: number;
  value: string;
  created_at: string;
};
export type SecretListResponse = { secrets: Secret[]; meta?: PaginationMeta };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type VersionListResponse = {
  versions: SecretVersion[];
  meta?: PaginationMeta;
};
export type SecretVersion = {
  crn: string;
  id: string;
  version: number;
  is_current: boolean;
  created_by?: string;
  created_at: string;
};
export type PutSecretValueRequestInput = { value: string };
export type VersionResponse = { version: SecretVersion };
export type UpdateSecretRequestInput = {
  description?: string;
  tags?: TagsInput;
};
const operations = {
  createSecret: {
    id: "createSecret",
    method: "POST",
    path: "/v1/secrets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteSecret: {
    id: "deleteSecret",
    method: "DELETE",
    path: "/v1/secrets/{secret_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  describeSecret: {
    id: "describeSecret",
    method: "GET",
    path: "/v1/secrets/{secret_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSecretValue: {
    id: "getSecretValue",
    method: "GET",
    path: "/v1/secrets/{secret_id}/value",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: { version: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listSecrets: {
    id: "listSecrets",
    method: "GET",
    path: "/v1/secrets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      include_deleted: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "secrets",
  },
  listVersions: {
    id: "listVersions",
    method: "GET",
    path: "/v1/secrets/{secret_id}/versions",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "versions",
  },
  putSecretValue: {
    id: "putSecretValue",
    method: "POST",
    path: "/v1/secrets/{secret_id}/value",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  restoreSecret: {
    id: "restoreSecret",
    method: "POST",
    path: "/v1/secrets/{secret_id}/restore",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  updateSecret: {
    id: "updateSecret",
    method: "PATCH",
    path: "/v1/secrets/{secret_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class SecretsService {
  constructor(private readonly transport: Transport) {}
  /** Create a new secret with an initial value */
  createSecret(
    body: CreateSecretBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSecretResponse>> {
    return this.transport.json<CreateSecretResponse>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.createSecret,
      {},
      body,
      {},
      options,
    );
  }
  /** Schedule deletion (soft delete with recovery window) */
  deleteSecret(
    secret_id: string,
    body: DeleteSecretBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DeleteSecretResponse>> {
    return this.transport.json<DeleteSecretResponse>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.deleteSecret,
      { secret_id },
      body,
      {},
      options,
    );
  }
  /** Describe a secret (no value) */
  describeSecret(
    secret_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeSecretResponse>> {
    return this.transport.json<DescribeSecretResponse>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.describeSecret,
      { secret_id },
      undefined,
      {},
      options,
    );
  }
  /** Read the current value (or a specific version) */
  getSecretValue(
    secret_id: string,
    query: GetSecretValueQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSecretValueResponse>> {
    return this.transport.json<GetSecretValueResponse>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.getSecretValue,
      { secret_id },
      undefined,
      query,
      options,
    );
  }
  /** List secrets */
  listSecrets(
    query: ListSecretsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSecretsResponse, ListSecretsItem>> {
    return this.transport.page<ListSecretsResponse, ListSecretsItem>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.listSecrets,
      {},
      undefined,
      query,
      options,
    );
  }
  listSecretsAll(
    query: ListSecretsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSecretsItem> {
    return iteratePages(
      (marker) => this.listSecrets({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List versions */
  listVersions(
    secret_id: string,
    query: ListVersionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListVersionsResponse, ListVersionsItem>> {
    return this.transport.page<ListVersionsResponse, ListVersionsItem>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.listVersions,
      { secret_id },
      undefined,
      query,
      options,
    );
  }
  listVersionsAll(
    secret_id: string,
    query: ListVersionsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListVersionsItem> {
    return iteratePages(
      (marker) => this.listVersions(secret_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Store a new version (becomes current) */
  putSecretValue(
    secret_id: string,
    body: PutSecretValueBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutSecretValueResponse>> {
    return this.transport.json<PutSecretValueResponse>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.putSecretValue,
      { secret_id },
      body,
      {},
      options,
    );
  }
  /** Restore a secret from the recovery window */
  restoreSecret(
    secret_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RestoreSecretResponse>> {
    return this.transport.json<RestoreSecretResponse>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.restoreSecret,
      { secret_id },
      undefined,
      {},
      options,
    );
  }
  /** Update mutable metadata */
  updateSecret(
    secret_id: string,
    body: UpdateSecretBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateSecretResponse>> {
    return this.transport.json<UpdateSecretResponse>(
      "secrets",
      "https://secrets.{region}.basaltic.sh",
      operations.updateSecret,
      { secret_id },
      body,
      {},
      options,
    );
  }
}
