// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type AssumeRoleBody = AssumeRoleRequestInput;
export type AssumeRoleResponse = AssumeRoleResponse2;
export type AssumeRoleWithWebIdentityBody =
  AssumeRoleWithWebIdentityRequestInput;
export type AssumeRoleWithWebIdentityResponse = AssumeRoleResponse2;
export type AttachRolePolicyBody = RolePolicyAttachRequestInput;
export type AttachServiceAccountPolicyBody = PolicyAttachRequestInput;
export type AuthorizeOAuthClientBody = OAuthAuthorizeRequestInput;
export type AuthorizeOAuthClientResponse = OAuthAuthorizeResponse;
export type CreatePersonalSSHKeyBody = SSHKeyCreateRequestInput;
export type CreatePersonalSSHKeyResponse = { ssh_key: SSHKey };
export type CreatePolicyBody = PolicyCreateRequestInput;
export type CreatePolicyResponse = { policy?: Policy };
export type CreateRoleBody = RoleCreateRequestInput;
export type CreateRoleResponse = { role?: Role };
export type CreateServiceAccountBody = ServiceAccountCreateRequestInput;
export type CreateServiceAccountResponse = { service_account?: ServiceAccount };
export type CreateServiceAccountCredentialBody = CredentialCreateRequestInput;
export type CreateServiceAccountCredentialResponse = CredentialCreateResponse;
export type CreateServiceAccountSSHKeyBody = SSHKeyCreateRequestInput;
export type CreateServiceAccountSSHKeyResponse = { ssh_key: SSHKey };
export type GetOAuthTokenBody = OAuthTokenRequestInput;
export type GetOAuthTokenResponse = OAuthTokenResponse;
export type GetPersonalLinuxIdentityResponse = {
  linux_identity: LinuxIdentity;
};
export type GetPolicyResponse = { policy?: Policy };
export type GetRoleResponse = { role?: Role };
export type GetRoleInlinePolicyResponse = InlinePolicyResponse;
export type GetRolePermissionBoundaryResponse = PermissionBoundaryResponse;
export type GetSTSSessionResponse = STSSessionResponse;
export type GetServiceAccountResponse = { service_account?: ServiceAccount };
export type GetServiceAccountInlinePolicyResponse = InlinePolicyResponse;
export type GetServiceAccountLinuxIdentityResponse = {
  linux_identity: LinuxIdentity;
};
export type GetServiceAccountPermissionBoundaryResponse =
  PermissionBoundaryResponse;
export type ListPersonalSSHKeysResponse = { ssh_keys: SSHKey[] };
export type ListPersonalSSHKeysItem = SSHKey;
export type ListPoliciesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPoliciesResponse = PolicyListResponse;
export type ListPoliciesItem = Policy;
export type ListPolicyRolesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPolicyRolesResponse = PolicyRolesListResponse;
export type ListPolicyRolesItem = Role;
export type ListPolicyServiceAccountsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPolicyServiceAccountsResponse =
  PolicyServiceAccountsListResponse;
export type ListPolicyServiceAccountsItem = ServiceAccount;
export type ListRegionsQuery = { name?: string; crn?: string };
export type ListRegionsResponse = { regions: Region[]; default: string };
export type ListRegionsItem = Region;
export type ListRoleInlinePoliciesQuery = { name?: string; crn?: string };
export type ListRoleInlinePoliciesResponse = InlinePolicyListResponse;
export type ListRoleInlinePoliciesItem = InlinePolicy;
export type ListRolePoliciesQuery = { name?: string; crn?: string };
export type ListRolePoliciesResponse = RolePoliciesListResponse;
export type ListRolePoliciesItem = Policy;
export type ListRolesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListRolesResponse = RoleListResponse;
export type ListRolesItem = Role;
export type ListSTSSessionsQuery = {
  name?: string;
  crn?: string;
  role?: string;
  principal?: string;
  principal_type?: "user" | "service_account" | "role" | "assumed_role";
  active_only?: boolean;
  limit?: number;
  marker?: string;
};
export type ListSTSSessionsResponse = STSSessionListResponse;
export type ListSTSSessionsItem = STSSession;
export type ListServiceAccountCredentialsQuery = {
  name?: string;
  crn?: string;
};
export type ListServiceAccountCredentialsResponse = CredentialListResponse;
export type ListServiceAccountCredentialsItem = Credential;
export type ListServiceAccountInlinePoliciesQuery = {
  name?: string;
  crn?: string;
};
export type ListServiceAccountInlinePoliciesResponse = InlinePolicyListResponse;
export type ListServiceAccountInlinePoliciesItem = InlinePolicy;
export type ListServiceAccountPoliciesQuery = { name?: string; crn?: string };
export type ListServiceAccountPoliciesResponse = PrincipalPoliciesListResponse;
export type ListServiceAccountPoliciesItem = Policy;
export type ListServiceAccountSSHKeysResponse = { ssh_keys: SSHKey[] };
export type ListServiceAccountSSHKeysItem = SSHKey;
export type ListServiceAccountsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListServiceAccountsResponse = ServiceAccountListResponse;
export type ListServiceAccountsItem = ServiceAccount;
export type PutRoleInlinePolicyBody = PutInlinePolicyRequestInput;
export type PutRoleInlinePolicyResponse = InlinePolicyResponse;
export type PutServiceAccountInlinePolicyBody = PutInlinePolicyRequestInput;
export type PutServiceAccountInlinePolicyResponse = InlinePolicyResponse;
export type RevokeOAuthTokenBody = OAuthRevokeRequestInput;
export type RevokeSTSSessionBody = { reason?: string };
export type RevokeSTSSessionResponse = STSSessionResponse;
export type SetRolePermissionBoundaryBody = SetBoundaryRequestInput;
export type SetServiceAccountPermissionBoundaryBody = SetBoundaryRequestInput;
export type UpdatePolicyBody = PolicyUpdateRequestInput;
export type UpdatePolicyResponse = { policy?: Policy };
export type UpdateRoleBody = RoleUpdateRequestInput;
export type UpdateRoleResponse = { role?: Role };
export type UpdateServiceAccountBody = ServiceAccountUpdateRequestInput;
export type UpdateServiceAccountResponse = { service_account?: ServiceAccount };
export type AssumeRoleRequestInput = {
  role: RoleReferenceInput;
  duration_seconds?: number;
  policy?: SessionPolicyDocumentInput;
};
export type RoleReferenceInput = string;
export type SessionPolicyDocumentInput = {
  version: "2024-01-01";
  statements: SessionPolicyStatementInput[];
};
export type SessionPolicyStatementInput = {
  sid?: string;
  effect: "allow" | "deny";
  actions?: string[];
  not_actions?: string[];
  resources?: string[];
  not_resources?: string[];
} & ({ actions: unknown } | { not_actions: unknown }) &
  ({ resources: unknown } | { not_resources: unknown });
export type AssumeRoleResponse2 = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  access_key_id?: string;
  secret_access_key?: string;
  session_token?: string;
  expiration?: string;
  account_id?: string;
  account_handle?: string;
  role_id?: string;
};
export type AssumeRoleWithWebIdentityRequestInput = {
  web_identity_token: string;
  role: RoleReferenceInput;
  account: AccountReferenceInput;
  session_name?: string;
  duration_seconds?: number;
};
export type AccountReferenceInput = string;
export type RolePolicyAttachRequestInput = { policy: PolicyReferenceInput };
export type PolicyReferenceInput = string;
export type PolicyAttachRequestInput = { policy: PolicyReferenceInput };
export type OAuthAuthorizeRequestInput = {
  client_id: string;
  redirect_uri: string;
  code_challenge: string;
  code_challenge_method: "S256";
  state?: string;
  organization: OrganizationReferenceInput;
};
export type OrganizationReferenceInput = string;
export type OAuthAuthorizeResponse = {
  code?: string;
  redirect_to?: string;
  expires_in: number;
};
export type SSHKeyCreateRequestInput = {
  name: string;
  public_key: string;
  expires_at?: string;
};
export type SSHKey = {
  id: string;
  crn: string;
  name: string;
  public_key: string;
  fingerprint: string;
  algorithm: string;
  created_at: string;
  expires_at?: string;
};
export type PolicyCreateRequestInput = {
  name: string;
  description?: string;
  tags?: TagsInput;
  document: PolicyDocumentInput;
};
export type TagsInput = { [key: string]: string };
export type PolicyDocumentInput = {
  version: "2024-01-01";
  statements: PolicyStatementInput[];
};
export type PolicyStatementInput = {
  sid?: string;
  effect: "allow" | "deny";
  actions?: string[];
  not_actions?: string[];
  resources?: string[];
  not_resources?: string[];
  conditions?: PolicyConditionInput[];
} & ({ actions: unknown } | { not_actions: unknown }) &
  ({ resources: unknown } | { not_resources: unknown });
export type PolicyConditionInput = {
  operator:
    | "equals"
    | "not_equals"
    | "starts_with"
    | "ends_with"
    | "contains"
    | "in"
    | "not_in"
    | "greater_than"
    | "less_than"
    | "greater_than_or_equals"
    | "less_than_or_equals"
    | "exists"
    | "not_exists"
    | "ip_address"
    | "not_ip_address";
  key: string;
  values: string[];
  set_operator?: "for_all_values" | "for_any_value";
};
export type Policy = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  tags?: Tags;
  is_system?: boolean;
  document?: PolicyDocument;
  created_at?: string;
  updated_at?: string;
  account_id?: string;
  account_handle?: string;
};
export type Tags = { [key: string]: string };
export type PolicyDocument = {
  version: "2024-01-01";
  statements: PolicyStatement[];
};
export type PolicyStatement = {
  sid?: string;
  effect: "allow" | "deny";
  actions?: string[];
  not_actions?: string[];
  resources?: string[];
  not_resources?: string[];
  conditions?: PolicyCondition[];
} & ({ actions: unknown } | { not_actions: unknown }) &
  ({ resources: unknown } | { not_resources: unknown });
export type PolicyCondition = {
  operator:
    | "equals"
    | "not_equals"
    | "starts_with"
    | "ends_with"
    | "contains"
    | "in"
    | "not_in"
    | "greater_than"
    | "less_than"
    | "greater_than_or_equals"
    | "less_than_or_equals"
    | "exists"
    | "not_exists"
    | "ip_address"
    | "not_ip_address";
  key: string;
  values: string[];
  set_operator?: "for_all_values" | "for_any_value";
};
export type RoleCreateRequestInput = {
  name: string;
  description?: string;
  tags?: TagsInput;
  trust_policy?: TrustPolicyInput;
};
export type TrustPolicyInput = {
  principals?: string[];
  conditions?: PolicyConditionInput[];
};
export type Role = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  tags?: Tags;
  trust_policy?: TrustPolicy;
  created_at?: string;
  updated_at?: string;
  account_id?: string;
  account_handle?: string;
  is_system?: boolean;
  builtin_kind?: "administrator" | "readonly";
};
export type TrustPolicy = {
  principals?: string[];
  conditions?: PolicyCondition[];
};
export type ServiceAccountCreateRequestInput = {
  name: string;
  description?: string;
  tags?: TagsInput;
};
export type ServiceAccount = {
  linux_identity?: LinuxIdentity;
  id?: string;
  crn?: string;
  account_id?: string;
  name?: string;
  description?: string;
  tags?: Tags;
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
  account_handle?: string;
};
export type LinuxIdentity = {
  home_directory: string;
  username: string;
  uid: number;
  gid: number;
};
export type CredentialCreateRequestInput = {
  name: string;
  expires_at?: string;
};
export type CredentialCreateResponse = {
  credential?: Credential;
  secret_access_key?: string;
};
export type Credential = {
  id?: string;
  crn?: string;
  name?: string;
  access_key_id?: string;
  last_used_at?: string | null;
  expires_at?: string | null;
  created_at?: string;
};
export type OAuthTokenRequestInput = {
  grant_type: "client_credentials" | "authorization_code" | "refresh_token";
  client_id?: string;
  client_secret?: string;
  duration_seconds?: number;
  code?: string;
  code_verifier?: string;
  redirect_uri?: string;
  refresh_token?: string;
};
export type OAuthTokenResponse = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  refresh_token?: string;
};
export type InlinePolicyResponse = { inline_policy?: InlinePolicy };
export type InlinePolicy = {
  crn: string;
  id?: string;
  principal_id?: string;
  principal_type?: "service_account" | "role";
  name?: string;
  document?: PolicyDocument;
  created_at?: string;
  updated_at?: string;
};
export type PermissionBoundaryResponse = {
  permission_boundary?: PermissionBoundary;
};
export type PermissionBoundary = {
  principal_id?: string;
  principal_type?: "service_account" | "role";
  policy_id?: string;
  policy_name?: string;
  created_at?: string;
};
export type STSSessionResponse = { sts_session?: STSSession };
export type STSSession = {
  id?: string;
  role_id?: string;
  principal_id?: string;
  principal_type?: "user" | "service_account" | "assumed_role";
  session_name?: string | null;
  created_at?: string;
  expires_at?: string;
  last_used_at?: string | null;
  revoked?: boolean;
  revoked_at?: string | null;
  revoked_reason?: string | null;
  source_ip?: string | null;
  user_agent?: string | null;
  account_id?: string;
  account_handle?: string;
  source_account_id?: string | null;
  source_principal_type?: string | null;
  source_principal_crn?: string | null;
  parent_session_id?: string | null;
  grant_type?: string;
  crn?: string;
};
export type PolicyListResponse = { policies?: Policy[]; meta?: PaginationMeta };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type PolicyRolesListResponse = { roles?: Role[]; meta?: PaginationMeta };
export type PolicyServiceAccountsListResponse = {
  service_accounts?: ServiceAccount[];
  meta?: PaginationMeta;
};
export type Region = {
  crn: string;
  code: string;
  name: string;
  location: string;
  country_code: string;
  available: boolean;
  coming_soon: boolean;
};
export type InlinePolicyListResponse = { inline_policies?: InlinePolicy[] };
export type RolePoliciesListResponse = { policies?: Policy[] };
export type RoleListResponse = { roles?: Role[]; meta?: PaginationMeta };
export type STSSessionListResponse = {
  sts_sessions?: STSSession[];
  meta?: PaginationMeta;
};
export type CredentialListResponse = { credentials?: Credential[] };
export type PrincipalPoliciesListResponse = { policies?: Policy[] };
export type ServiceAccountListResponse = {
  service_accounts?: ServiceAccount[];
  meta?: PaginationMeta;
};
export type PutInlinePolicyRequestInput = { document: PolicyDocumentInput };
export type OAuthRevokeRequestInput = {
  token: string;
  token_type_hint?: string;
};
export type SetBoundaryRequestInput = { policy: PolicyReferenceInput };
export type PolicyUpdateRequestInput = {
  description?: string;
  tags?: TagsInput;
  document?: PolicyDocumentInput;
};
export type RoleUpdateRequestInput = {
  description?: string;
  tags?: TagsInput;
  trust_policy?: TrustPolicyInput;
};
export type ServiceAccountUpdateRequestInput = {
  description?: string;
  tags?: TagsInput;
  enabled?: boolean;
};
const operations = {
  assumeRole: {
    id: "assumeRole",
    method: "POST",
    path: "/v1/assume-role",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  assumeRoleWithWebIdentity: {
    id: "assumeRoleWithWebIdentity",
    method: "POST",
    path: "/v1/assume-role-with-web-identity",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  attachRolePolicy: {
    id: "attachRolePolicy",
    method: "POST",
    path: "/v1/roles/{role_id}/policies",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  attachServiceAccountPolicy: {
    id: "attachServiceAccountPolicy",
    method: "POST",
    path: "/v1/service-accounts/{service_account_id}/policies",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  authorizeOAuthClient: {
    id: "authorizeOAuthClient",
    method: "POST",
    path: "/v1/oauth/authorize",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createPersonalSSHKey: {
    id: "createPersonalSSHKey",
    method: "POST",
    path: "/v1/auth/ssh-keys",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createPolicy: {
    id: "createPolicy",
    method: "POST",
    path: "/v1/policies",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createRole: {
    id: "createRole",
    method: "POST",
    path: "/v1/roles",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createServiceAccount: {
    id: "createServiceAccount",
    method: "POST",
    path: "/v1/service-accounts",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createServiceAccountCredential: {
    id: "createServiceAccountCredential",
    method: "POST",
    path: "/v1/service-accounts/{service_account_id}/credentials",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createServiceAccountSSHKey: {
    id: "createServiceAccountSSHKey",
    method: "POST",
    path: "/v1/service-accounts/{service_account_id}/ssh-keys",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deletePersonalSSHKey: {
    id: "deletePersonalSSHKey",
    method: "DELETE",
    path: "/v1/auth/ssh-keys/{ssh_key_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deletePolicy: {
    id: "deletePolicy",
    method: "DELETE",
    path: "/v1/policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRole: {
    id: "deleteRole",
    method: "DELETE",
    path: "/v1/roles/{role_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRoleInlinePolicy: {
    id: "deleteRoleInlinePolicy",
    method: "DELETE",
    path: "/v1/roles/{role_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteServiceAccount: {
    id: "deleteServiceAccount",
    method: "DELETE",
    path: "/v1/service-accounts/{service_account_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteServiceAccountCredential: {
    id: "deleteServiceAccountCredential",
    method: "DELETE",
    path: "/v1/service-accounts/{service_account_id}/credentials/{credential_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteServiceAccountInlinePolicy: {
    id: "deleteServiceAccountInlinePolicy",
    method: "DELETE",
    path: "/v1/service-accounts/{service_account_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteServiceAccountSSHKey: {
    id: "deleteServiceAccountSSHKey",
    method: "DELETE",
    path: "/v1/service-accounts/{service_account_id}/ssh-keys/{ssh_key_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachRolePolicy: {
    id: "detachRolePolicy",
    method: "DELETE",
    path: "/v1/roles/{role_id}/policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachServiceAccountPolicy: {
    id: "detachServiceAccountPolicy",
    method: "DELETE",
    path: "/v1/service-accounts/{service_account_id}/policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getOAuthToken: {
    id: "getOAuthToken",
    method: "POST",
    path: "/v1/oauth/token",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  getPersonalLinuxIdentity: {
    id: "getPersonalLinuxIdentity",
    method: "GET",
    path: "/v1/auth/linux-identity",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getPolicy: {
    id: "getPolicy",
    method: "GET",
    path: "/v1/policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRole: {
    id: "getRole",
    method: "GET",
    path: "/v1/roles/{role_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRoleInlinePolicy: {
    id: "getRoleInlinePolicy",
    method: "GET",
    path: "/v1/roles/{role_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRolePermissionBoundary: {
    id: "getRolePermissionBoundary",
    method: "GET",
    path: "/v1/roles/{role_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSTSSession: {
    id: "getSTSSession",
    method: "GET",
    path: "/v1/sts-sessions/{session_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getServiceAccount: {
    id: "getServiceAccount",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getServiceAccountInlinePolicy: {
    id: "getServiceAccountInlinePolicy",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getServiceAccountLinuxIdentity: {
    id: "getServiceAccountLinuxIdentity",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}/linux-identity",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getServiceAccountPermissionBoundary: {
    id: "getServiceAccountPermissionBoundary",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listPersonalSSHKeys: {
    id: "listPersonalSSHKeys",
    method: "GET",
    path: "/v1/auth/ssh-keys",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "ssh_keys",
  },
  listPolicies: {
    id: "listPolicies",
    method: "GET",
    path: "/v1/policies",
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
    itemsKey: "policies",
  },
  listPolicyRoles: {
    id: "listPolicyRoles",
    method: "GET",
    path: "/v1/policies/{policy_id}/roles",
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
    itemsKey: "roles",
  },
  listPolicyServiceAccounts: {
    id: "listPolicyServiceAccounts",
    method: "GET",
    path: "/v1/policies/{policy_id}/service-accounts",
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
    itemsKey: "service_accounts",
  },
  listRegions: {
    id: "listRegions",
    method: "GET",
    path: "/v1/regions",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "regions",
  },
  listRoleInlinePolicies: {
    id: "listRoleInlinePolicies",
    method: "GET",
    path: "/v1/roles/{role_id}/inline-policies",
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
    itemsKey: "inline_policies",
  },
  listRolePolicies: {
    id: "listRolePolicies",
    method: "GET",
    path: "/v1/roles/{role_id}/policies",
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
    itemsKey: "policies",
  },
  listRoles: {
    id: "listRoles",
    method: "GET",
    path: "/v1/roles",
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
    itemsKey: "roles",
  },
  listSTSSessions: {
    id: "listSTSSessions",
    method: "GET",
    path: "/v1/sts-sessions",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      role: { style: "form", explode: true },
      principal: { style: "form", explode: true },
      principal_type: { style: "form", explode: true },
      active_only: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "sts_sessions",
  },
  listServiceAccountCredentials: {
    id: "listServiceAccountCredentials",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}/credentials",
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
    itemsKey: "credentials",
  },
  listServiceAccountInlinePolicies: {
    id: "listServiceAccountInlinePolicies",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}/inline-policies",
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
    itemsKey: "inline_policies",
  },
  listServiceAccountPolicies: {
    id: "listServiceAccountPolicies",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}/policies",
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
    itemsKey: "policies",
  },
  listServiceAccountSSHKeys: {
    id: "listServiceAccountSSHKeys",
    method: "GET",
    path: "/v1/service-accounts/{service_account_id}/ssh-keys",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "ssh_keys",
  },
  listServiceAccounts: {
    id: "listServiceAccounts",
    method: "GET",
    path: "/v1/service-accounts",
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
    itemsKey: "service_accounts",
  },
  putRoleInlinePolicy: {
    id: "putRoleInlinePolicy",
    method: "PUT",
    path: "/v1/roles/{role_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putServiceAccountInlinePolicy: {
    id: "putServiceAccountInlinePolicy",
    method: "PUT",
    path: "/v1/service-accounts/{service_account_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  removeRolePermissionBoundary: {
    id: "removeRolePermissionBoundary",
    method: "DELETE",
    path: "/v1/roles/{role_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  removeServiceAccountPermissionBoundary: {
    id: "removeServiceAccountPermissionBoundary",
    method: "DELETE",
    path: "/v1/service-accounts/{service_account_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  revokeOAuthToken: {
    id: "revokeOAuthToken",
    method: "POST",
    path: "/v1/oauth/revoke",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  revokeSTSSession: {
    id: "revokeSTSSession",
    method: "DELETE",
    path: "/v1/sts-sessions/{session_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  setRolePermissionBoundary: {
    id: "setRolePermissionBoundary",
    method: "PUT",
    path: "/v1/roles/{role_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  setServiceAccountPermissionBoundary: {
    id: "setServiceAccountPermissionBoundary",
    method: "PUT",
    path: "/v1/service-accounts/{service_account_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updatePolicy: {
    id: "updatePolicy",
    method: "PATCH",
    path: "/v1/policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateRole: {
    id: "updateRole",
    method: "PATCH",
    path: "/v1/roles/{role_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateServiceAccount: {
    id: "updateServiceAccount",
    method: "PATCH",
    path: "/v1/service-accounts/{service_account_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class IamService {
  constructor(private readonly transport: Transport) {}
  /** Assume role */
  assumeRole(
    body: AssumeRoleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AssumeRoleResponse>> {
    return this.transport.json<AssumeRoleResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.assumeRole,
      {},
      body,
      {},
      options,
    );
  }
  /** Assume role with web identity */
  assumeRoleWithWebIdentity(
    body: AssumeRoleWithWebIdentityBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AssumeRoleWithWebIdentityResponse>> {
    return this.transport.json<AssumeRoleWithWebIdentityResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.assumeRoleWithWebIdentity,
      {},
      body,
      {},
      options,
    );
  }
  /** Attach policy to role */
  attachRolePolicy(
    role_id: string,
    body: AttachRolePolicyBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.attachRolePolicy,
      { role_id },
      body,
      {},
      options,
    );
  }
  /** Attach policy to service account */
  attachServiceAccountPolicy(
    service_account_id: string,
    body: AttachServiceAccountPolicyBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.attachServiceAccountPolicy,
      { service_account_id },
      body,
      {},
      options,
    );
  }
  /** Approve a CLI login and issue an authorization code */
  authorizeOAuthClient(
    body: AuthorizeOAuthClientBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AuthorizeOAuthClientResponse>> {
    return this.transport.json<AuthorizeOAuthClientResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.authorizeOAuthClient,
      {},
      body,
      {},
      options,
    );
  }
  /** Add personal SSH key */
  createPersonalSSHKey(
    body: CreatePersonalSSHKeyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreatePersonalSSHKeyResponse>> {
    return this.transport.json<CreatePersonalSSHKeyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.createPersonalSSHKey,
      {},
      body,
      {},
      options,
    );
  }
  /** Create policy */
  createPolicy(
    body: CreatePolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreatePolicyResponse>> {
    return this.transport.json<CreatePolicyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.createPolicy,
      {},
      body,
      {},
      options,
    );
  }
  /** Create role */
  createRole(
    body: CreateRoleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateRoleResponse>> {
    return this.transport.json<CreateRoleResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.createRole,
      {},
      body,
      {},
      options,
    );
  }
  /** Create service account */
  createServiceAccount(
    body: CreateServiceAccountBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateServiceAccountResponse>> {
    return this.transport.json<CreateServiceAccountResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.createServiceAccount,
      {},
      body,
      {},
      options,
    );
  }
  /** Create credential */
  createServiceAccountCredential(
    service_account_id: string,
    body: CreateServiceAccountCredentialBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateServiceAccountCredentialResponse>> {
    return this.transport.json<CreateServiceAccountCredentialResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.createServiceAccountCredential,
      { service_account_id },
      body,
      {},
      options,
    );
  }
  /** Add service-account SSH key */
  createServiceAccountSSHKey(
    service_account_id: string,
    body: CreateServiceAccountSSHKeyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateServiceAccountSSHKeyResponse>> {
    return this.transport.json<CreateServiceAccountSSHKeyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.createServiceAccountSSHKey,
      { service_account_id },
      body,
      {},
      options,
    );
  }
  /** Revoke personal SSH key */
  deletePersonalSSHKey(
    ssh_key_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deletePersonalSSHKey,
      { ssh_key_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete policy */
  deletePolicy(policy_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deletePolicy,
      { policy_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete role */
  deleteRole(role_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deleteRole,
      { role_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a role's inline policy by name */
  deleteRoleInlinePolicy(
    role_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deleteRoleInlinePolicy,
      { role_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  /** Delete service account */
  deleteServiceAccount(
    service_account_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deleteServiceAccount,
      { service_account_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete credential */
  deleteServiceAccountCredential(
    service_account_id: string,
    credential_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deleteServiceAccountCredential,
      { service_account_id, credential_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a service account's inline policy by name */
  deleteServiceAccountInlinePolicy(
    service_account_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deleteServiceAccountInlinePolicy,
      { service_account_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  /** Revoke service-account SSH key */
  deleteServiceAccountSSHKey(
    service_account_id: string,
    ssh_key_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.deleteServiceAccountSSHKey,
      { service_account_id, ssh_key_id },
      undefined,
      {},
      options,
    );
  }
  /** Detach policy from role */
  detachRolePolicy(
    role_id: string,
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.detachRolePolicy,
      { role_id, policy_id },
      undefined,
      {},
      options,
    );
  }
  /** Detach policy from service account */
  detachServiceAccountPolicy(
    service_account_id: string,
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.detachServiceAccountPolicy,
      { service_account_id, policy_id },
      undefined,
      {},
      options,
    );
  }
  /** Exchange an access key for a bearer token */
  getOAuthToken(
    body: GetOAuthTokenBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetOAuthTokenResponse>> {
    return this.transport.json<GetOAuthTokenResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getOAuthToken,
      {},
      body,
      {},
      options,
    );
  }
  /** Get personal Linux identity */
  getPersonalLinuxIdentity(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetPersonalLinuxIdentityResponse>> {
    return this.transport.json<GetPersonalLinuxIdentityResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getPersonalLinuxIdentity,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Get policy */
  getPolicy(
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetPolicyResponse>> {
    return this.transport.json<GetPolicyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getPolicy,
      { policy_id },
      undefined,
      {},
      options,
    );
  }
  getPolicyByReference(
    reference: string,
    scope: Omit<ListPoliciesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Policy>> {
    return resolveReference<Policy>(
      reference,
      (id) => this.getPolicy(id, options),
      (filter) =>
        this.listPolicies(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "policy",
    );
  }
  /** Get role */
  getRole(
    role_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRoleResponse>> {
    return this.transport.json<GetRoleResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getRole,
      { role_id },
      undefined,
      {},
      options,
    );
  }
  getRoleByReference(
    reference: string,
    scope: Omit<ListRolesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Role>> {
    return resolveReference<Role>(
      reference,
      (id) => this.getRole(id, options),
      (filter) =>
        this.listRoles(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "role",
    );
  }
  /** Get a role's inline policy by name */
  getRoleInlinePolicy(
    role_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRoleInlinePolicyResponse>> {
    return this.transport.json<GetRoleInlinePolicyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getRoleInlinePolicy,
      { role_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  getRoleInlinePolicyByReference(
    role_id: string,
    reference: string,
    scope: Omit<ListRoleInlinePoliciesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<InlinePolicy>> {
    return resolveReference<InlinePolicy>(
      reference,
      (id) => this.getRoleInlinePolicy(role_id, id, options),
      (filter) =>
        this.listRoleInlinePolicies(
          role_id,
          { ...referenceScope(scope), ...filter },
          options,
        ),
      true,
      "inline_policy",
    );
  }
  /** Get a role's permission boundary */
  getRolePermissionBoundary(
    role_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRolePermissionBoundaryResponse>> {
    return this.transport.json<GetRolePermissionBoundaryResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getRolePermissionBoundary,
      { role_id },
      undefined,
      {},
      options,
    );
  }
  /** Get STS session */
  getSTSSession(
    session_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSTSSessionResponse>> {
    return this.transport.json<GetSTSSessionResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getSTSSession,
      { session_id },
      undefined,
      {},
      options,
    );
  }
  getSTSSessionByReference(
    reference: string,
    scope: Omit<ListSTSSessionsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<STSSession>> {
    return resolveReference<STSSession>(
      reference,
      (id) => this.getSTSSession(id, options),
      (filter) =>
        this.listSTSSessions(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "sts_session",
    );
  }
  /** Get service account */
  getServiceAccount(
    service_account_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetServiceAccountResponse>> {
    return this.transport.json<GetServiceAccountResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getServiceAccount,
      { service_account_id },
      undefined,
      {},
      options,
    );
  }
  getServiceAccountByReference(
    reference: string,
    scope: Omit<ListServiceAccountsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<ServiceAccount>> {
    return resolveReference<ServiceAccount>(
      reference,
      (id) => this.getServiceAccount(id, options),
      (filter) =>
        this.listServiceAccounts(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "service_account",
    );
  }
  /** Get a service account's inline policy by name */
  getServiceAccountInlinePolicy(
    service_account_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetServiceAccountInlinePolicyResponse>> {
    return this.transport.json<GetServiceAccountInlinePolicyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getServiceAccountInlinePolicy,
      { service_account_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  getServiceAccountInlinePolicyByReference(
    service_account_id: string,
    reference: string,
    scope: Omit<
      ListServiceAccountInlinePoliciesQuery,
      "name" | "crn" | "marker"
    > = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<InlinePolicy>> {
    return resolveReference<InlinePolicy>(
      reference,
      (id) =>
        this.getServiceAccountInlinePolicy(service_account_id, id, options),
      (filter) =>
        this.listServiceAccountInlinePolicies(
          service_account_id,
          { ...referenceScope(scope), ...filter },
          options,
        ),
      true,
      "inline_policy",
    );
  }
  /** Get serviceaccount Linux identity */
  getServiceAccountLinuxIdentity(
    service_account_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetServiceAccountLinuxIdentityResponse>> {
    return this.transport.json<GetServiceAccountLinuxIdentityResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getServiceAccountLinuxIdentity,
      { service_account_id },
      undefined,
      {},
      options,
    );
  }
  /** Get a service account's permission boundary */
  getServiceAccountPermissionBoundary(
    service_account_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetServiceAccountPermissionBoundaryResponse>> {
    return this.transport.json<GetServiceAccountPermissionBoundaryResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.getServiceAccountPermissionBoundary,
      { service_account_id },
      undefined,
      {},
      options,
    );
  }
  /** List personal SSH keys */
  listPersonalSSHKeys(
    options: RequestOptions = {},
  ): Promise<Page<ListPersonalSSHKeysResponse, ListPersonalSSHKeysItem>> {
    return this.transport.page<
      ListPersonalSSHKeysResponse,
      ListPersonalSSHKeysItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listPersonalSSHKeys,
      {},
      undefined,
      {},
      options,
    );
  }
  /** List policies */
  listPolicies(
    query: ListPoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPoliciesResponse, ListPoliciesItem>> {
    return this.transport.page<ListPoliciesResponse, ListPoliciesItem>(
      "iam",
      "https://iam.basaltic.sh",
      operations.listPolicies,
      {},
      undefined,
      query,
      options,
    );
  }
  listPoliciesAll(
    query: ListPoliciesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListPoliciesItem> {
    return iteratePages(
      (marker) => this.listPolicies({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List roles with policy */
  listPolicyRoles(
    policy_id: string,
    query: ListPolicyRolesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPolicyRolesResponse, ListPolicyRolesItem>> {
    return this.transport.page<ListPolicyRolesResponse, ListPolicyRolesItem>(
      "iam",
      "https://iam.basaltic.sh",
      operations.listPolicyRoles,
      { policy_id },
      undefined,
      query,
      options,
    );
  }
  listPolicyRolesAll(
    policy_id: string,
    query: ListPolicyRolesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListPolicyRolesItem> {
    return iteratePages(
      (marker) =>
        this.listPolicyRoles(policy_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List service accounts with policy */
  listPolicyServiceAccounts(
    policy_id: string,
    query: ListPolicyServiceAccountsQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListPolicyServiceAccountsResponse, ListPolicyServiceAccountsItem>
  > {
    return this.transport.page<
      ListPolicyServiceAccountsResponse,
      ListPolicyServiceAccountsItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listPolicyServiceAccounts,
      { policy_id },
      undefined,
      query,
      options,
    );
  }
  listPolicyServiceAccountsAll(
    policy_id: string,
    query: ListPolicyServiceAccountsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListPolicyServiceAccountsItem> {
    return iteratePages(
      (marker) =>
        this.listPolicyServiceAccounts(
          policy_id,
          { ...query, marker },
          options,
        ),
      query.marker ?? "",
    );
  }
  /** List regions (legacy IAM) */
  listRegions(
    query: ListRegionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRegionsResponse, ListRegionsItem>> {
    return this.transport.page<ListRegionsResponse, ListRegionsItem>(
      "iam",
      "https://iam.basaltic.sh",
      operations.listRegions,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List a role's inline policies */
  listRoleInlinePolicies(
    role_id: string,
    query: ListRoleInlinePoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRoleInlinePoliciesResponse, ListRoleInlinePoliciesItem>> {
    return this.transport.page<
      ListRoleInlinePoliciesResponse,
      ListRoleInlinePoliciesItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listRoleInlinePolicies,
      { role_id },
      undefined,
      query,
      options,
    );
  }
  /** List role policies */
  listRolePolicies(
    role_id: string,
    query: ListRolePoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRolePoliciesResponse, ListRolePoliciesItem>> {
    return this.transport.page<ListRolePoliciesResponse, ListRolePoliciesItem>(
      "iam",
      "https://iam.basaltic.sh",
      operations.listRolePolicies,
      { role_id },
      undefined,
      query,
      options,
    );
  }
  /** List roles */
  listRoles(
    query: ListRolesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRolesResponse, ListRolesItem>> {
    return this.transport.page<ListRolesResponse, ListRolesItem>(
      "iam",
      "https://iam.basaltic.sh",
      operations.listRoles,
      {},
      undefined,
      query,
      options,
    );
  }
  listRolesAll(
    query: ListRolesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListRolesItem> {
    return iteratePages(
      (marker) => this.listRoles({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List STS sessions */
  listSTSSessions(
    query: ListSTSSessionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSTSSessionsResponse, ListSTSSessionsItem>> {
    return this.transport.page<ListSTSSessionsResponse, ListSTSSessionsItem>(
      "iam",
      "https://iam.basaltic.sh",
      operations.listSTSSessions,
      {},
      undefined,
      query,
      options,
    );
  }
  listSTSSessionsAll(
    query: ListSTSSessionsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSTSSessionsItem> {
    return iteratePages(
      (marker) => this.listSTSSessions({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List credentials */
  listServiceAccountCredentials(
    service_account_id: string,
    query: ListServiceAccountCredentialsQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<
      ListServiceAccountCredentialsResponse,
      ListServiceAccountCredentialsItem
    >
  > {
    return this.transport.page<
      ListServiceAccountCredentialsResponse,
      ListServiceAccountCredentialsItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listServiceAccountCredentials,
      { service_account_id },
      undefined,
      query,
      options,
    );
  }
  /** List a service account's inline policies */
  listServiceAccountInlinePolicies(
    service_account_id: string,
    query: ListServiceAccountInlinePoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<
      ListServiceAccountInlinePoliciesResponse,
      ListServiceAccountInlinePoliciesItem
    >
  > {
    return this.transport.page<
      ListServiceAccountInlinePoliciesResponse,
      ListServiceAccountInlinePoliciesItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listServiceAccountInlinePolicies,
      { service_account_id },
      undefined,
      query,
      options,
    );
  }
  /** List service account policies */
  listServiceAccountPolicies(
    service_account_id: string,
    query: ListServiceAccountPoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListServiceAccountPoliciesResponse, ListServiceAccountPoliciesItem>
  > {
    return this.transport.page<
      ListServiceAccountPoliciesResponse,
      ListServiceAccountPoliciesItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listServiceAccountPolicies,
      { service_account_id },
      undefined,
      query,
      options,
    );
  }
  /** List service-account SSH keys */
  listServiceAccountSSHKeys(
    service_account_id: string,
    options: RequestOptions = {},
  ): Promise<
    Page<ListServiceAccountSSHKeysResponse, ListServiceAccountSSHKeysItem>
  > {
    return this.transport.page<
      ListServiceAccountSSHKeysResponse,
      ListServiceAccountSSHKeysItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listServiceAccountSSHKeys,
      { service_account_id },
      undefined,
      {},
      options,
    );
  }
  /** List service accounts */
  listServiceAccounts(
    query: ListServiceAccountsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListServiceAccountsResponse, ListServiceAccountsItem>> {
    return this.transport.page<
      ListServiceAccountsResponse,
      ListServiceAccountsItem
    >(
      "iam",
      "https://iam.basaltic.sh",
      operations.listServiceAccounts,
      {},
      undefined,
      query,
      options,
    );
  }
  listServiceAccountsAll(
    query: ListServiceAccountsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListServiceAccountsItem> {
    return iteratePages(
      (marker) => this.listServiceAccounts({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Create or replace a role's inline policy */
  putRoleInlinePolicy(
    role_id: string,
    policy_name: string,
    body: PutRoleInlinePolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutRoleInlinePolicyResponse>> {
    return this.transport.json<PutRoleInlinePolicyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.putRoleInlinePolicy,
      { role_id, policy_name },
      body,
      {},
      options,
    );
  }
  /** Create or replace a service account's inline policy */
  putServiceAccountInlinePolicy(
    service_account_id: string,
    policy_name: string,
    body: PutServiceAccountInlinePolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutServiceAccountInlinePolicyResponse>> {
    return this.transport.json<PutServiceAccountInlinePolicyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.putServiceAccountInlinePolicy,
      { service_account_id, policy_name },
      body,
      {},
      options,
    );
  }
  /** Remove a role's permission boundary */
  removeRolePermissionBoundary(
    role_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.removeRolePermissionBoundary,
      { role_id },
      undefined,
      {},
      options,
    );
  }
  /** Remove a service account's permission boundary */
  removeServiceAccountPermissionBoundary(
    service_account_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.removeServiceAccountPermissionBoundary,
      { service_account_id },
      undefined,
      {},
      options,
    );
  }
  /** Revoke a bearer token */
  revokeOAuthToken(
    body: RevokeOAuthTokenBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.revokeOAuthToken,
      {},
      body,
      {},
      options,
    );
  }
  /** Revoke STS session */
  revokeSTSSession(
    session_id: string,
    body: RevokeSTSSessionBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RevokeSTSSessionResponse>> {
    return this.transport.json<RevokeSTSSessionResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.revokeSTSSession,
      { session_id },
      body,
      {},
      options,
    );
  }
  /** Set a role's permission boundary */
  setRolePermissionBoundary(
    role_id: string,
    body: SetRolePermissionBoundaryBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.setRolePermissionBoundary,
      { role_id },
      body,
      {},
      options,
    );
  }
  /** Set a service account's permission boundary */
  setServiceAccountPermissionBoundary(
    service_account_id: string,
    body: SetServiceAccountPermissionBoundaryBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "iam",
      "https://iam.basaltic.sh",
      operations.setServiceAccountPermissionBoundary,
      { service_account_id },
      body,
      {},
      options,
    );
  }
  /** Update policy */
  updatePolicy(
    policy_id: string,
    body: UpdatePolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdatePolicyResponse>> {
    return this.transport.json<UpdatePolicyResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.updatePolicy,
      { policy_id },
      body,
      {},
      options,
    );
  }
  /** Update role */
  updateRole(
    role_id: string,
    body: UpdateRoleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateRoleResponse>> {
    return this.transport.json<UpdateRoleResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.updateRole,
      { role_id },
      body,
      {},
      options,
    );
  }
  /** Update service account */
  updateServiceAccount(
    service_account_id: string,
    body: UpdateServiceAccountBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateServiceAccountResponse>> {
    return this.transport.json<UpdateServiceAccountResponse>(
      "iam",
      "https://iam.basaltic.sh",
      operations.updateServiceAccount,
      { service_account_id },
      body,
      {},
      options,
    );
  }
}
