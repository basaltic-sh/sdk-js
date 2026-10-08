// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type CancelKeyDeletionResponse = KeyResponse;
export type CreateKeyBody = CreateKeyRequestInput;
export type CreateKeyResponse = KeyResponse;
export type DecryptBody = DecryptRequestInput;
export type DecryptResponse = DecryptResponse2;
export type DisableKeyResponse = KeyResponse;
export type EnableKeyResponse = KeyResponse;
export type EncryptBody = EncryptRequestInput;
export type EncryptResponse = EncryptResponse2;
export type GenerateDataKeyBody = GenerateDataKeyRequestInput;
export type GenerateDataKeyResponse = GenerateDataKeyResponse2;
export type GetKeyResponse = KeyResponse;
export type ListKeysQuery = {
  limit?: number;
  marker?: string;
  state?: KeyStateInput;
  name?: string;
  crn?: string;
};
export type ListKeysResponse = KeyListResponse;
export type ListKeysItem = Key;
export type ScheduleKeyDeletionBody = ScheduleKeyDeletionRequestInput;
export type ScheduleKeyDeletionResponse = KeyResponse;
export type SignBody = SignRequestInput;
export type SignResponse = SignResponse2;
export type UpdateKeyBody = UpdateKeyRequestInput;
export type UpdateKeyResponse = KeyResponse;
export type VerifyBody = VerifyRequestInput;
export type VerifyResponse = VerifyResponse2;
export type KeyResponse = { key?: Key };
export type Key = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  tags: Tags;
  key_spec: KeySpec;
  key_usage: KeyUsage;
  state: KeyState;
  system?: boolean;
  deleted_at?: string | null;
  recovery_window_days?: number | null;
  scheduled_purge_at?: string | null;
  created_at: string;
  updated_at: string;
};
export type Tags = { [key: string]: string };
export type KeySpec = "aes-256" | "rsa-2048" | "rsa-4096" | "ecdsa-p256";
export type KeyUsage = "encrypt_decrypt" | "sign_verify";
export type KeyState = "enabled" | "disabled" | "pending_deletion";
export type CreateKeyRequestInput = {
  name: string;
  description?: string;
  tags?: TagsInput;
  key_spec: KeySpecInput;
  key_usage?: KeyUsageInput;
};
export type TagsInput = { [key: string]: string };
export type KeySpecInput = "aes-256" | "rsa-2048" | "rsa-4096" | "ecdsa-p256";
export type KeyUsageInput = "encrypt_decrypt" | "sign_verify";
export type DecryptRequestInput = { ciphertext: string; aad?: string };
export type DecryptResponse2 = { plaintext?: string };
export type EncryptRequestInput = { plaintext: string; aad?: string };
export type EncryptResponse2 = { ciphertext?: string; key_crn?: string };
export type GenerateDataKeyRequestInput = { number_of_bytes?: 16 | 32 | 64 };
export type GenerateDataKeyResponse2 = {
  plaintext?: string;
  ciphertext?: string;
};
export type KeyStateInput = "enabled" | "disabled" | "pending_deletion";
export type KeyListResponse = { keys?: Key[]; meta?: PaginationMeta };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type ScheduleKeyDeletionRequestInput = { recovery_window_days?: number };
export type SignRequestInput = {
  message: string;
  signing_algorithm?: SigningAlgorithmInput;
};
export type SigningAlgorithmInput =
  "RSASSA_PSS_SHA_256" | "RSASSA_PKCS1_V1_5_SHA_256" | "ECDSA_SHA_256";
export type SignResponse2 = {
  signature?: string;
  signing_algorithm?: SigningAlgorithm;
};
export type SigningAlgorithm =
  "RSASSA_PSS_SHA_256" | "RSASSA_PKCS1_V1_5_SHA_256" | "ECDSA_SHA_256";
export type UpdateKeyRequestInput = { description?: string; tags?: TagsInput };
export type VerifyRequestInput = {
  message: string;
  signature: string;
  signing_algorithm?: SigningAlgorithmInput;
};
export type VerifyResponse2 = { signature_valid?: boolean };
const operations = {
  cancelKeyDeletion: {
    id: "cancelKeyDeletion",
    method: "POST",
    path: "/v1/keys/{key_id}/cancel-deletion",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  createKey: {
    id: "createKey",
    method: "POST",
    path: "/v1/keys",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  decrypt: {
    id: "decrypt",
    method: "POST",
    path: "/v1/keys/{key_id}/decrypt",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  disableKey: {
    id: "disableKey",
    method: "POST",
    path: "/v1/keys/{key_id}/disable",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  enableKey: {
    id: "enableKey",
    method: "POST",
    path: "/v1/keys/{key_id}/enable",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  encrypt: {
    id: "encrypt",
    method: "POST",
    path: "/v1/keys/{key_id}/encrypt",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  generateDataKey: {
    id: "generateDataKey",
    method: "POST",
    path: "/v1/keys/{key_id}/generate-data-key",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  getKey: {
    id: "getKey",
    method: "GET",
    path: "/v1/keys/{key_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listKeys: {
    id: "listKeys",
    method: "GET",
    path: "/v1/keys",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      state: { style: "form", explode: true },
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "keys",
  },
  scheduleKeyDeletion: {
    id: "scheduleKeyDeletion",
    method: "POST",
    path: "/v1/keys/{key_id}/schedule-deletion",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  sign: {
    id: "sign",
    method: "POST",
    path: "/v1/keys/{key_id}/sign",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateKey: {
    id: "updateKey",
    method: "PATCH",
    path: "/v1/keys/{key_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  verify: {
    id: "verify",
    method: "POST",
    path: "/v1/keys/{key_id}/verify",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class KmsService {
  constructor(private readonly transport: Transport) {}
  /** Cancel a scheduled deletion */
  cancelKeyDeletion(
    key_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CancelKeyDeletionResponse>> {
    return this.transport.json<CancelKeyDeletionResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.cancelKeyDeletion,
      { key_id },
      undefined,
      {},
      options,
    );
  }
  /** Create a KMS key */
  createKey(
    body: CreateKeyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateKeyResponse>> {
    return this.transport.json<CreateKeyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.createKey,
      {},
      body,
      {},
      options,
    );
  }
  /** Decrypt a ciphertext */
  decrypt(
    key_id: string,
    body: DecryptBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DecryptResponse>> {
    return this.transport.json<DecryptResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.decrypt,
      { key_id },
      body,
      {},
      options,
    );
  }
  /** Disable a key */
  disableKey(
    key_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DisableKeyResponse>> {
    return this.transport.json<DisableKeyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.disableKey,
      { key_id },
      undefined,
      {},
      options,
    );
  }
  /** Enable a disabled key */
  enableKey(
    key_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<EnableKeyResponse>> {
    return this.transport.json<EnableKeyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.enableKey,
      { key_id },
      undefined,
      {},
      options,
    );
  }
  /** Encrypt a payload */
  encrypt(
    key_id: string,
    body: EncryptBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<EncryptResponse>> {
    return this.transport.json<EncryptResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.encrypt,
      { key_id },
      body,
      {},
      options,
    );
  }
  /** Generate a fresh data key */
  generateDataKey(
    key_id: string,
    body: GenerateDataKeyBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GenerateDataKeyResponse>> {
    return this.transport.json<GenerateDataKeyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.generateDataKey,
      { key_id },
      body,
      {},
      options,
    );
  }
  /** Get a KMS key */
  getKey(
    key_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetKeyResponse>> {
    return this.transport.json<GetKeyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.getKey,
      { key_id },
      undefined,
      {},
      options,
    );
  }
  getKeyByReference(
    reference: string,
    scope: Omit<ListKeysQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Key>> {
    return resolveReference<Key>(
      reference,
      (id) => this.getKey(id, options),
      (filter) =>
        this.listKeys(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "key",
    );
  }
  /** List KMS keys */
  listKeys(
    query: ListKeysQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListKeysResponse, ListKeysItem>> {
    return this.transport.page<ListKeysResponse, ListKeysItem>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.listKeys,
      {},
      undefined,
      query,
      options,
    );
  }
  listKeysAll(
    query: ListKeysQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListKeysItem> {
    return iteratePages(
      (marker) => this.listKeys({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Schedule key for deletion */
  scheduleKeyDeletion(
    key_id: string,
    body: ScheduleKeyDeletionBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ScheduleKeyDeletionResponse>> {
    return this.transport.json<ScheduleKeyDeletionResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.scheduleKeyDeletion,
      { key_id },
      body,
      {},
      options,
    );
  }
  /** Sign a message */
  sign(
    key_id: string,
    body: SignBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SignResponse>> {
    return this.transport.json<SignResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.sign,
      { key_id },
      body,
      {},
      options,
    );
  }
  /** Update key metadata */
  updateKey(
    key_id: string,
    body: UpdateKeyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateKeyResponse>> {
    return this.transport.json<UpdateKeyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.updateKey,
      { key_id },
      body,
      {},
      options,
    );
  }
  /** Verify a signature */
  verify(
    key_id: string,
    body: VerifyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<VerifyResponse>> {
    return this.transport.json<VerifyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.verify,
      { key_id },
      body,
      {},
      options,
    );
  }
}
