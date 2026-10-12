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
export type GetKeyRotationResponse = KeyRotationResponse;
export type GetKeyRotationStatusResponse = KeyRotationStatusResponse;
export type GetPublicKeyQuery = { key_version?: number };
export type GetPublicKeyResponse = PublicKeyResponse;
export type ListKeyRotationsQuery = { limit?: number; marker?: string };
export type ListKeyRotationsResponse = KeyRotationListResponse;
export type ListKeyRotationsItem = KeyRotation;
export type ListKeysQuery = {
  limit?: number;
  marker?: string;
  state?: KeyStateInput;
  name?: string;
  crn?: string;
};
export type ListKeysResponse = KeyListResponse;
export type ListKeysItem = Key;
export type RewrapBody = RewrapRequestInput;
export type RewrapResponse = EncryptResponse2;
export type RotateKeyOnDemandResponse = KeyRotationResponse;
export type ScheduleKeyDeletionBody = ScheduleKeyDeletionRequestInput;
export type ScheduleKeyDeletionResponse = KeyResponse;
export type SetKeyRotationBody = SetKeyRotationRequestInput;
export type SetKeyRotationResponse = KeyRotationPolicyResponse;
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
export type KeyRotationResponse = { rotation: KeyRotation };
export type KeyRotation = {
  id: string;
  key_id: string;
  trigger: "on_demand" | "automatic";
  status:
    | "pending"
    | "in_progress"
    | "reconciliation_required"
    | "succeeded"
    | "failed";
  previous_version: number | null;
  key_version: number | null;
  requested_at: string;
  started_at: string | null;
  completed_at: string | null;
  error_code: string | null;
};
export type KeyRotationStatusResponse = { rotation: KeyRotationStatus };
export type KeyRotationStatus = KeyRotationPolicy & { current_version: number };
export type KeyRotationPolicy = {
  enabled: boolean;
  rotation_period_days: number;
  next_rotation_at: string | null;
};
export type PublicKeyResponse = {
  key_crn: string;
  key_version: number;
  key_spec: KeySpec;
  key_usage: KeyUsage;
  public_key: string;
};
export type KeyRotationListResponse = {
  rotations: KeyRotation[];
  meta: PaginationMeta;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type KeyStateInput = "enabled" | "disabled" | "pending_deletion";
export type KeyListResponse = { keys?: Key[]; meta?: PaginationMeta };
export type RewrapRequestInput = { ciphertext: string };
export type ScheduleKeyDeletionRequestInput = { recovery_window_days?: number };
export type SetKeyRotationRequestInput = {
  enabled: boolean;
  rotation_period_days?: number;
};
export type KeyRotationPolicyResponse = { rotation: KeyRotationPolicy };
export type SignRequestInput = {
  message: string;
  signing_algorithm?: SigningAlgorithmInput;
};
export type SigningAlgorithmInput =
  "RSASSA_PSS_SHA_256" | "RSASSA_PKCS1_V1_5_SHA_256" | "ECDSA_SHA_256";
export type SignResponse2 = {
  key_version?: number;
  signature?: string;
  signing_algorithm?: SigningAlgorithm;
};
export type SigningAlgorithm =
  "RSASSA_PSS_SHA_256" | "RSASSA_PKCS1_V1_5_SHA_256" | "ECDSA_SHA_256";
export type UpdateKeyRequestInput = { description?: string; tags?: TagsInput };
export type VerifyRequestInput = {
  key_version?: number;
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
  getKeyRotation: {
    id: "getKeyRotation",
    method: "GET",
    path: "/v1/keys/{key_id}/rotations/{rotation_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getKeyRotationStatus: {
    id: "getKeyRotationStatus",
    method: "GET",
    path: "/v1/keys/{key_id}/rotation",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getPublicKey: {
    id: "getPublicKey",
    method: "GET",
    path: "/v1/keys/{key_id}/public-key",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: { key_version: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listKeyRotations: {
    id: "listKeyRotations",
    method: "GET",
    path: "/v1/keys/{key_id}/rotations",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "rotations",
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
  rewrap: {
    id: "rewrap",
    method: "POST",
    path: "/v1/keys/{key_id}/rewrap",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  rotateKeyOnDemand: {
    id: "rotateKeyOnDemand",
    method: "POST",
    path: "/v1/keys/{key_id}/rotate",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
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
  setKeyRotation: {
    id: "setKeyRotation",
    method: "PUT",
    path: "/v1/keys/{key_id}/rotation",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
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
  /** Get a key rotation */
  getKeyRotation(
    key_id: string,
    rotation_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetKeyRotationResponse>> {
    return this.transport.json<GetKeyRotationResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.getKeyRotation,
      { key_id, rotation_id },
      undefined,
      {},
      options,
    );
  }
  /** Get key rotation status */
  getKeyRotationStatus(
    key_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetKeyRotationStatusResponse>> {
    return this.transport.json<GetKeyRotationStatusResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.getKeyRotationStatus,
      { key_id },
      undefined,
      {},
      options,
    );
  }
  /** Get a versioned public key */
  getPublicKey(
    key_id: string,
    query: GetPublicKeyQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetPublicKeyResponse>> {
    return this.transport.json<GetPublicKeyResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.getPublicKey,
      { key_id },
      undefined,
      query,
      options,
    );
  }
  /** List key rotation history */
  listKeyRotations(
    key_id: string,
    query: ListKeyRotationsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListKeyRotationsResponse, ListKeyRotationsItem>> {
    return this.transport.page<ListKeyRotationsResponse, ListKeyRotationsItem>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.listKeyRotations,
      { key_id },
      undefined,
      query,
      options,
    );
  }
  listKeyRotationsAll(
    key_id: string,
    query: ListKeyRotationsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListKeyRotationsItem> {
    return iteratePages(
      (marker) => this.listKeyRotations(key_id, { ...query, marker }, options),
      query.marker ?? "",
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
  /** Rewrap ciphertext with current key material */
  rewrap(
    key_id: string,
    body: RewrapBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RewrapResponse>> {
    return this.transport.json<RewrapResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.rewrap,
      { key_id },
      body,
      {},
      options,
    );
  }
  /** Rotate key material now */
  rotateKeyOnDemand(
    key_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RotateKeyOnDemandResponse>> {
    return this.transport.json<RotateKeyOnDemandResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.rotateKeyOnDemand,
      { key_id },
      undefined,
      {},
      options,
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
  /** Configure automatic key rotation */
  setKeyRotation(
    key_id: string,
    body: SetKeyRotationBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SetKeyRotationResponse>> {
    return this.transport.json<SetKeyRotationResponse>(
      "kms",
      "https://kms.{region}.basaltic.sh",
      operations.setKeyRotation,
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
