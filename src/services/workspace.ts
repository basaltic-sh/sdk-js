// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type AddUserBody = UserAddRequestInput;
export type AddUserResponse = UserAddResponse;
export type AddUserToGroupBody = UserGroupAddRequestInput;
export type AssignAccountRoleBody = AccountRoleAssignmentCreateRequestInput;
export type AssignAccountRoleResponse = AccountRoleAssignmentResponse;
export type AttachGroupPolicyBody = PolicyAttachRequestInput;
export type AttachRolePolicyBody = OrganizationPolicyAttachRequestInput;
export type AttachServiceAccountPolicyBody =
  OrganizationPolicyAttachRequestInput;
export type AttachUserPolicyBody = PolicyAttachRequestInput;
export type CreateAccountBody = CreateAccountRequestInput;
export type CreateAccountResponse = AccountResponse;
export type CreateGroupBody = GroupCreateRequestInput;
export type CreateGroupResponse = { group?: Group };
export type CreatePolicyBody = PolicyCreateRequestInput;
export type CreatePolicyResponse = { policy?: Policy };
export type GetAccountResponse = AccountResponse;
export type GetAccountResourcesResponse = { has_resources: boolean };
export type GetGroupResponse = { group?: Group };
export type GetGroupInlinePolicyResponse = InlinePolicyResponse;
export type GetInvitationResponse = { invitation?: Invitation };
export type GetOrganizationResponse = OrganizationResponse;
export type GetPolicyResponse = { policy?: Policy };
export type GetUserResponse = { user?: User };
export type GetUserInlinePolicyResponse = InlinePolicyResponse;
export type GetUserPermissionBoundaryResponse = PermissionBoundaryResponse;
export type ListAccountRoleAssignmentsResponse =
  AccountRoleAssignmentListResponse;
export type ListAccountRoleAssignmentsItem = AccountRoleAssignment;
export type ListAccountRolesResponse = AccountRoleListResponse;
export type ListAccountRolesItem = AccountRole;
export type ListAccountsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListAccountsResponse = AccountListResponse;
export type ListAccountsItem = Account;
export type ListGroupInlinePoliciesQuery = { name?: string; crn?: string };
export type ListGroupInlinePoliciesResponse = InlinePolicyListResponse;
export type ListGroupInlinePoliciesItem = InlinePolicy;
export type ListGroupPoliciesQuery = { name?: string; crn?: string };
export type ListGroupPoliciesResponse = PrincipalPoliciesListResponse;
export type ListGroupPoliciesItem = Policy;
export type ListGroupUsersQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListGroupUsersResponse = GroupUsersListResponse;
export type ListGroupUsersItem = GroupUser;
export type ListGroupsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListGroupsResponse = GroupListResponse;
export type ListGroupsItem = Group;
export type ListInvitationsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListInvitationsResponse = InvitationListResponse;
export type ListInvitationsItem = Invitation;
export type ListOrganizationsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListOrganizationsResponse = OrganizationListResponse;
export type ListOrganizationsItem = OrganizationWithMembership;
export type ListPoliciesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPoliciesResponse = PolicyListResponse;
export type ListPoliciesItem = Policy;
export type ListPolicyGroupsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPolicyGroupsResponse = PolicyGroupsListResponse;
export type ListPolicyGroupsItem = Group;
export type ListPolicyRolesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPolicyRolesResponse = PolicyRolesListResponse;
export type ListPolicyRolesItem = AccountPrincipalReference;
export type ListPolicyServiceAccountsQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPolicyServiceAccountsResponse =
  PolicyServiceAccountsListResponse;
export type ListPolicyServiceAccountsItem = AccountPrincipalReference;
export type ListPolicyUsersQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListPolicyUsersResponse = PolicyUsersListResponse;
export type ListPolicyUsersItem = User;
export type ListRolePoliciesQuery = { name?: string; crn?: string };
export type ListRolePoliciesResponse = RolePoliciesListResponse;
export type ListRolePoliciesItem = Policy;
export type ListServiceAccountPoliciesQuery = { name?: string; crn?: string };
export type ListServiceAccountPoliciesResponse = PrincipalPoliciesListResponse;
export type ListServiceAccountPoliciesItem = Policy;
export type ListUserGroupsQuery = { name?: string; crn?: string };
export type ListUserGroupsResponse = GroupListResponse;
export type ListUserGroupsItem = Group;
export type ListUserInlinePoliciesQuery = { name?: string; crn?: string };
export type ListUserInlinePoliciesResponse = InlinePolicyListResponse;
export type ListUserInlinePoliciesItem = InlinePolicy;
export type ListUserPoliciesQuery = { name?: string; crn?: string };
export type ListUserPoliciesResponse = PrincipalPoliciesListResponse;
export type ListUserPoliciesItem = Policy;
export type ListUsersQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListUsersResponse = UserListResponse;
export type ListUsersItem = User;
export type PutGroupInlinePolicyBody = PutInlinePolicyRequestInput;
export type PutGroupInlinePolicyResponse = InlinePolicyResponse;
export type PutUserInlinePolicyBody = PutInlinePolicyRequestInput;
export type PutUserInlinePolicyResponse = InlinePolicyResponse;
export type SetUserPermissionBoundaryBody = SetBoundaryRequestInput;
export type UpdateAccountBody = UpdateAccountRequestInput;
export type UpdateAccountResponse = AccountResponse;
export type UpdateGroupBody = GroupUpdateRequestInput;
export type UpdateGroupResponse = { group?: Group };
export type UpdateOrganizationBody = OrganizationUpdateRequestInput;
export type UpdateOrganizationResponse = OrganizationResponse;
export type UpdatePolicyBody = PolicyUpdateRequestInput;
export type UpdatePolicyResponse = { policy?: Policy };
export type UserAddRequestInput = {
  email: string;
  tags?: TagsInput;
  groups?: GroupReferenceInput[];
};
export type TagsInput = { [key: string]: string };
export type GroupReferenceInput = string;
export type UserAddResponse = { invitation: Invitation; status: "invited" };
export type Invitation = {
  id?: string;
  email?: string;
  groups?: GroupSummary[];
  invited_by?: {
    id?: string;
    name?: string;
    email?: string;
    type?: "user" | "service_account" | "assumed_role";
    crn?: string;
    account_id?: string;
  };
  status?: "pending" | "accepted" | "expired" | "cancelled";
  expires_at?: string;
  created_at?: string;
  crn?: string;
};
export type GroupSummary = { id?: string; name?: string };
export type UserGroupAddRequestInput = { group: GroupReferenceInput };
export type AccountRoleAssignmentCreateRequestInput = {
  principal_type: "user" | "group";
  principal_id: string;
  role_id: string;
};
export type AccountRoleAssignmentResponse = {
  role_assignment?: AccountRoleAssignment;
};
export type AccountRoleAssignment = {
  crn?: string;
  id?: string;
  account_id?: string;
  role_id?: string;
  role_name?: string;
  principal_type?: "user" | "group";
  principal_id?: string;
  created_at?: string;
};
export type PolicyAttachRequestInput = { policy: PolicyReferenceInput };
export type PolicyReferenceInput = string;
export type OrganizationPolicyAttachRequestInput = { policy_id: string };
export type CreateAccountRequestInput = {
  name: string;
  handle: string;
  description?: string;
};
export type AccountResponse = { account?: Account };
export type Account = {
  id?: string;
  organization_id?: string;
  name?: string;
  handle?: string;
  description?: string;
  status?: "active" | "suspended" | "deleted";
  created_at?: string;
  updated_at?: string;
  crn?: string;
  bootstrap_role_id?: string;
  bootstrap_role_crn?: string;
};
export type GroupCreateRequestInput = { name: string; description?: string };
export type Group = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
};
export type PolicyCreateRequestInput = {
  name: string;
  description?: string;
  tags?: TagsInput;
  document: PolicyDocumentInput;
};
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
export type InlinePolicyResponse = { inline_policy?: InlinePolicy };
export type InlinePolicy = {
  crn: string;
  id?: string;
  principal_id?: string;
  principal_type?: "user" | "group";
  name?: string;
  document?: PolicyDocument;
  created_at?: string;
  updated_at?: string;
};
export type OrganizationResponse = { organization?: Organization };
export type Organization = {
  language?: "en" | "pt-BR" | "es";
  time_zone?: string;
  id?: string;
  name?: string;
  description?: string;
  owner_id?: string;
  status?: "pending" | "active" | "suspended" | "terminated";
  suspension_reason?: "billing" | "manual";
  created_at?: string;
  updated_at?: string;
  crn?: string;
};
export type User = {
  username?: string;
  id?: string;
  crn?: string;
  email?: string;
  name?: string;
  linux_identity?: LinuxIdentity;
  added_at?: string;
  tags?: Tags;
};
export type LinuxIdentity = {
  home_directory: string;
  username: string;
  uid: number;
  gid: number;
};
export type PermissionBoundaryResponse = {
  permission_boundary?: PermissionBoundary;
};
export type PermissionBoundary = {
  principal_id?: string;
  principal_type?: "user";
  policy_id?: string;
  policy_name?: string;
  created_at?: string;
};
export type AccountRoleAssignmentListResponse = {
  role_assignments?: AccountRoleAssignment[];
};
export type AccountRoleListResponse = { account_roles?: AccountRole[] };
export type AccountRole = {
  account_id?: string;
  account_handle?: string;
  account_name?: string;
  role_id?: string;
  role_name?: string;
  role_crn?: string;
};
export type AccountListResponse = {
  accounts?: Account[];
  meta?: PaginationMeta;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type InlinePolicyListResponse = { inline_policies?: InlinePolicy[] };
export type PrincipalPoliciesListResponse = { policies?: Policy[] };
export type GroupUsersListResponse = {
  users?: GroupUser[];
  meta?: PaginationMeta;
};
export type GroupUser = {
  id?: string;
  crn?: string;
  email?: string;
  name?: string;
  added_at?: string;
};
export type GroupListResponse = { groups?: Group[]; meta?: PaginationMeta };
export type InvitationListResponse = {
  invitations?: Invitation[];
  meta?: PaginationMeta;
};
export type OrganizationListResponse = {
  organizations?: OrganizationWithMembership[];
  meta?: PaginationMeta;
};
export type OrganizationWithMembership = {
  language?: "en" | "pt-BR" | "es";
  time_zone?: string;
  id?: string;
  name?: string;
  description?: string;
  owner_id?: string;
  status?: "pending" | "active" | "suspended" | "terminated";
  suspension_reason?: "billing" | "manual";
  created_at?: string;
  updated_at?: string;
  crn?: string;
};
export type PolicyListResponse = { policies?: Policy[]; meta?: PaginationMeta };
export type PolicyGroupsListResponse = {
  groups?: Group[];
  meta?: PaginationMeta;
};
export type PolicyRolesListResponse = {
  roles?: AccountPrincipalReference[];
  meta?: PaginationMeta;
};
export type AccountPrincipalReference = {
  id?: string;
  name?: string;
  account_id?: string;
  account_handle?: string;
};
export type PolicyServiceAccountsListResponse = {
  service_accounts?: AccountPrincipalReference[];
  meta?: PaginationMeta;
};
export type PolicyUsersListResponse = { users?: User[]; meta?: PaginationMeta };
export type RolePoliciesListResponse = { policies?: Policy[] };
export type UserListResponse = { users?: User[]; meta?: PaginationMeta };
export type PutInlinePolicyRequestInput = { document: PolicyDocumentInput };
export type SetBoundaryRequestInput = { policy: PolicyReferenceInput };
export type UpdateAccountRequestInput = { name?: string; description?: string };
export type GroupUpdateRequestInput = { description?: string };
export type OrganizationUpdateRequestInput = {
  language?: "en" | "pt-BR" | "es";
  time_zone?: string;
  name?: string;
  description?: string;
  captcha_token: string;
};
export type PolicyUpdateRequestInput = {
  description?: string;
  tags?: TagsInput;
  document?: PolicyDocumentInput;
};
const operations = {
  addUser: {
    id: "addUser",
    method: "POST",
    path: "/v1/users",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  addUserToGroup: {
    id: "addUserToGroup",
    method: "POST",
    path: "/v1/users/{user_id}/groups",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  assignAccountRole: {
    id: "assignAccountRole",
    method: "POST",
    path: "/v1/accounts/{account_id}/role-assignments",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  attachGroupPolicy: {
    id: "attachGroupPolicy",
    method: "POST",
    path: "/v1/groups/{group_id}/policies",
    authenticated: true,
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
  attachUserPolicy: {
    id: "attachUserPolicy",
    method: "POST",
    path: "/v1/users/{user_id}/policies",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  cancelInvitation: {
    id: "cancelInvitation",
    method: "DELETE",
    path: "/v1/invitations/{invitation_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  createAccount: {
    id: "createAccount",
    method: "POST",
    path: "/v1/accounts",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createGroup: {
    id: "createGroup",
    method: "POST",
    path: "/v1/groups",
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
  deleteAccount: {
    id: "deleteAccount",
    method: "DELETE",
    path: "/v1/accounts/{account_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteGroup: {
    id: "deleteGroup",
    method: "DELETE",
    path: "/v1/groups/{group_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteGroupInlinePolicy: {
    id: "deleteGroupInlinePolicy",
    method: "DELETE",
    path: "/v1/groups/{group_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteOrganization: {
    id: "deleteOrganization",
    method: "DELETE",
    path: "/v1/organizations/{organization_id}",
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
  deleteUserInlinePolicy: {
    id: "deleteUserInlinePolicy",
    method: "DELETE",
    path: "/v1/users/{user_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  detachGroupPolicy: {
    id: "detachGroupPolicy",
    method: "DELETE",
    path: "/v1/groups/{group_id}/policies/{policy_id}",
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
  detachUserPolicy: {
    id: "detachUserPolicy",
    method: "DELETE",
    path: "/v1/users/{user_id}/policies/{policy_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getAccount: {
    id: "getAccount",
    method: "GET",
    path: "/v1/accounts/{account_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getAccountResources: {
    id: "getAccountResources",
    method: "GET",
    path: "/v1/accounts/{account_id}/resources",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getGroup: {
    id: "getGroup",
    method: "GET",
    path: "/v1/groups/{group_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getGroupInlinePolicy: {
    id: "getGroupInlinePolicy",
    method: "GET",
    path: "/v1/groups/{group_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getInvitation: {
    id: "getInvitation",
    method: "GET",
    path: "/v1/invitations/{invitation_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getOrganization: {
    id: "getOrganization",
    method: "GET",
    path: "/v1/organizations/{organization_id}",
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
  getUser: {
    id: "getUser",
    method: "GET",
    path: "/v1/users/{user_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getUserInlinePolicy: {
    id: "getUserInlinePolicy",
    method: "GET",
    path: "/v1/users/{user_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getUserPermissionBoundary: {
    id: "getUserPermissionBoundary",
    method: "GET",
    path: "/v1/users/{user_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listAccountRoleAssignments: {
    id: "listAccountRoleAssignments",
    method: "GET",
    path: "/v1/accounts/{account_id}/role-assignments",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "role_assignments",
  },
  listAccountRoles: {
    id: "listAccountRoles",
    method: "GET",
    path: "/v1/account-roles",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "account_roles",
  },
  listAccounts: {
    id: "listAccounts",
    method: "GET",
    path: "/v1/accounts",
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
    itemsKey: "accounts",
  },
  listGroupInlinePolicies: {
    id: "listGroupInlinePolicies",
    method: "GET",
    path: "/v1/groups/{group_id}/inline-policies",
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
  listGroupPolicies: {
    id: "listGroupPolicies",
    method: "GET",
    path: "/v1/groups/{group_id}/policies",
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
  listGroupUsers: {
    id: "listGroupUsers",
    method: "GET",
    path: "/v1/groups/{group_id}/users",
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
    itemsKey: "users",
  },
  listGroups: {
    id: "listGroups",
    method: "GET",
    path: "/v1/groups",
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
    itemsKey: "groups",
  },
  listInvitations: {
    id: "listInvitations",
    method: "GET",
    path: "/v1/invitations",
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
    itemsKey: "invitations",
  },
  listOrganizations: {
    id: "listOrganizations",
    method: "GET",
    path: "/v1/organizations",
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
    itemsKey: "organizations",
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
  listPolicyGroups: {
    id: "listPolicyGroups",
    method: "GET",
    path: "/v1/policies/{policy_id}/groups",
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
    itemsKey: "groups",
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
  listPolicyUsers: {
    id: "listPolicyUsers",
    method: "GET",
    path: "/v1/policies/{policy_id}/users",
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
    itemsKey: "users",
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
  listUserGroups: {
    id: "listUserGroups",
    method: "GET",
    path: "/v1/users/{user_id}/groups",
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
    itemsKey: "groups",
  },
  listUserInlinePolicies: {
    id: "listUserInlinePolicies",
    method: "GET",
    path: "/v1/users/{user_id}/inline-policies",
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
  listUserPolicies: {
    id: "listUserPolicies",
    method: "GET",
    path: "/v1/users/{user_id}/policies",
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
  listUsers: {
    id: "listUsers",
    method: "GET",
    path: "/v1/users",
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
    itemsKey: "users",
  },
  putGroupInlinePolicy: {
    id: "putGroupInlinePolicy",
    method: "PUT",
    path: "/v1/groups/{group_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putUserInlinePolicy: {
    id: "putUserInlinePolicy",
    method: "PUT",
    path: "/v1/users/{user_id}/inline-policies/{policy_name}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  removeAccountRoleAssignment: {
    id: "removeAccountRoleAssignment",
    method: "DELETE",
    path: "/v1/accounts/{account_id}/role-assignments/{assignment_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  removeUser: {
    id: "removeUser",
    method: "DELETE",
    path: "/v1/users/{user_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  removeUserFromGroup: {
    id: "removeUserFromGroup",
    method: "DELETE",
    path: "/v1/users/{user_id}/groups/{group_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  removeUserPermissionBoundary: {
    id: "removeUserPermissionBoundary",
    method: "DELETE",
    path: "/v1/users/{user_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  setUserPermissionBoundary: {
    id: "setUserPermissionBoundary",
    method: "PUT",
    path: "/v1/users/{user_id}/permission-boundary",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateAccount: {
    id: "updateAccount",
    method: "PATCH",
    path: "/v1/accounts/{account_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateGroup: {
    id: "updateGroup",
    method: "PATCH",
    path: "/v1/groups/{group_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateOrganization: {
    id: "updateOrganization",
    method: "PATCH",
    path: "/v1/organizations/{organization_id}",
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
} as const satisfies Record<string, Operation>;
export class WorkspaceService {
  constructor(private readonly transport: Transport) {}
  /** Add user to organization */
  addUser(
    body: AddUserBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AddUserResponse>> {
    return this.transport.json<AddUserResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.addUser,
      {},
      body,
      {},
      options,
    );
  }
  /** Add user to group */
  addUserToGroup(
    user_id: string,
    body: AddUserToGroupBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.addUserToGroup,
      { user_id },
      body,
      {},
      options,
    );
  }
  /** Assign account role */
  assignAccountRole(
    account_id: string,
    body: AssignAccountRoleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AssignAccountRoleResponse>> {
    return this.transport.json<AssignAccountRoleResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.assignAccountRole,
      { account_id },
      body,
      {},
      options,
    );
  }
  /** Attach policy to group */
  attachGroupPolicy(
    group_id: string,
    body: AttachGroupPolicyBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.attachGroupPolicy,
      { group_id },
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
      "workspace",
      "https://workspace.basaltic.sh",
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
      "workspace",
      "https://workspace.basaltic.sh",
      operations.attachServiceAccountPolicy,
      { service_account_id },
      body,
      {},
      options,
    );
  }
  /** Attach policy to user */
  attachUserPolicy(
    user_id: string,
    body: AttachUserPolicyBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.attachUserPolicy,
      { user_id },
      body,
      {},
      options,
    );
  }
  /** Cancel invitation */
  cancelInvitation(
    invitation_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.cancelInvitation,
      { invitation_id },
      undefined,
      {},
      options,
    );
  }
  /** Create account */
  createAccount(
    body: CreateAccountBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateAccountResponse>> {
    return this.transport.json<CreateAccountResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.createAccount,
      {},
      body,
      {},
      options,
    );
  }
  /** Create group */
  createGroup(
    body: CreateGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateGroupResponse>> {
    return this.transport.json<CreateGroupResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.createGroup,
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
      "workspace",
      "https://workspace.basaltic.sh",
      operations.createPolicy,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete account */
  deleteAccount(
    account_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.deleteAccount,
      { account_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete group */
  deleteGroup(group_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.deleteGroup,
      { group_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a group's inline policy by name */
  deleteGroupInlinePolicy(
    group_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.deleteGroupInlinePolicy,
      { group_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  /** Delete organization */
  deleteOrganization(
    organization_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.deleteOrganization,
      { organization_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete policy */
  deletePolicy(policy_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.deletePolicy,
      { policy_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a user's inline policy by name */
  deleteUserInlinePolicy(
    user_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.deleteUserInlinePolicy,
      { user_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  /** Detach policy from group */
  detachGroupPolicy(
    group_id: string,
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.detachGroupPolicy,
      { group_id, policy_id },
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
      "workspace",
      "https://workspace.basaltic.sh",
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
      "workspace",
      "https://workspace.basaltic.sh",
      operations.detachServiceAccountPolicy,
      { service_account_id, policy_id },
      undefined,
      {},
      options,
    );
  }
  /** Detach policy from user */
  detachUserPolicy(
    user_id: string,
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.detachUserPolicy,
      { user_id, policy_id },
      undefined,
      {},
      options,
    );
  }
  /** Get account */
  getAccount(
    account_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetAccountResponse>> {
    return this.transport.json<GetAccountResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getAccount,
      { account_id },
      undefined,
      {},
      options,
    );
  }
  getAccountByReference(
    reference: string,
    scope: Omit<ListAccountsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Account>> {
    return resolveReference<Account>(
      reference,
      (id) => this.getAccount(id, options),
      (filter) =>
        this.listAccounts(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "account",
    );
  }
  /** Check account resource presence */
  getAccountResources(
    account_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetAccountResourcesResponse>> {
    return this.transport.json<GetAccountResourcesResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getAccountResources,
      { account_id },
      undefined,
      {},
      options,
    );
  }
  /** Get group */
  getGroup(
    group_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetGroupResponse>> {
    return this.transport.json<GetGroupResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getGroup,
      { group_id },
      undefined,
      {},
      options,
    );
  }
  getGroupByReference(
    reference: string,
    scope: Omit<ListGroupsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Group>> {
    return resolveReference<Group>(
      reference,
      (id) => this.getGroup(id, options),
      (filter) =>
        this.listGroups(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "group",
    );
  }
  /** Get a group's inline policy by name */
  getGroupInlinePolicy(
    group_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetGroupInlinePolicyResponse>> {
    return this.transport.json<GetGroupInlinePolicyResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getGroupInlinePolicy,
      { group_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  getGroupInlinePolicyByReference(
    group_id: string,
    reference: string,
    scope: Omit<ListGroupInlinePoliciesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<InlinePolicy>> {
    return resolveReference<InlinePolicy>(
      reference,
      (id) => this.getGroupInlinePolicy(group_id, id, options),
      (filter) =>
        this.listGroupInlinePolicies(
          group_id,
          { ...referenceScope(scope), ...filter },
          options,
        ),
      true,
      "inline_policy",
    );
  }
  /** Get invitation */
  getInvitation(
    invitation_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInvitationResponse>> {
    return this.transport.json<GetInvitationResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getInvitation,
      { invitation_id },
      undefined,
      {},
      options,
    );
  }
  getInvitationByReference(
    reference: string,
    scope: Omit<ListInvitationsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Invitation>> {
    return resolveReference<Invitation>(
      reference,
      (id) => this.getInvitation(id, options),
      (filter) =>
        this.listInvitations(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "invitation",
    );
  }
  /** Get organization */
  getOrganization(
    organization_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetOrganizationResponse>> {
    return this.transport.json<GetOrganizationResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getOrganization,
      { organization_id },
      undefined,
      {},
      options,
    );
  }
  getOrganizationByReference(
    reference: string,
    scope: Omit<ListOrganizationsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Organization>> {
    return resolveReference<Organization>(
      reference,
      (id) => this.getOrganization(id, options),
      (filter) =>
        this.listOrganizations(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "organization",
    );
  }
  /** Get policy */
  getPolicy(
    policy_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetPolicyResponse>> {
    return this.transport.json<GetPolicyResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
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
  /** Get user */
  getUser(
    user_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetUserResponse>> {
    return this.transport.json<GetUserResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getUser,
      { user_id },
      undefined,
      {},
      options,
    );
  }
  getUserByReference(
    reference: string,
    scope: Omit<ListUsersQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<User>> {
    return resolveReference<User>(
      reference,
      (id) => this.getUser(id, options),
      (filter) =>
        this.listUsers(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "user",
    );
  }
  /** Get a user's inline policy by name */
  getUserInlinePolicy(
    user_id: string,
    policy_name: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetUserInlinePolicyResponse>> {
    return this.transport.json<GetUserInlinePolicyResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getUserInlinePolicy,
      { user_id, policy_name },
      undefined,
      {},
      options,
    );
  }
  getUserInlinePolicyByReference(
    user_id: string,
    reference: string,
    scope: Omit<ListUserInlinePoliciesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<InlinePolicy>> {
    return resolveReference<InlinePolicy>(
      reference,
      (id) => this.getUserInlinePolicy(user_id, id, options),
      (filter) =>
        this.listUserInlinePolicies(
          user_id,
          { ...referenceScope(scope), ...filter },
          options,
        ),
      true,
      "inline_policy",
    );
  }
  /** Get a user's permission boundary */
  getUserPermissionBoundary(
    user_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetUserPermissionBoundaryResponse>> {
    return this.transport.json<GetUserPermissionBoundaryResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.getUserPermissionBoundary,
      { user_id },
      undefined,
      {},
      options,
    );
  }
  /** List account role assignments */
  listAccountRoleAssignments(
    account_id: string,
    options: RequestOptions = {},
  ): Promise<
    Page<ListAccountRoleAssignmentsResponse, ListAccountRoleAssignmentsItem>
  > {
    return this.transport.page<
      ListAccountRoleAssignmentsResponse,
      ListAccountRoleAssignmentsItem
    >(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listAccountRoleAssignments,
      { account_id },
      undefined,
      {},
      options,
    );
  }
  /** List assigned account roles */
  listAccountRoles(
    options: RequestOptions = {},
  ): Promise<Page<ListAccountRolesResponse, ListAccountRolesItem>> {
    return this.transport.page<ListAccountRolesResponse, ListAccountRolesItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listAccountRoles,
      {},
      undefined,
      {},
      options,
    );
  }
  /** List accounts */
  listAccounts(
    query: ListAccountsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListAccountsResponse, ListAccountsItem>> {
    return this.transport.page<ListAccountsResponse, ListAccountsItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listAccounts,
      {},
      undefined,
      query,
      options,
    );
  }
  listAccountsAll(
    query: ListAccountsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListAccountsItem> {
    return iteratePages(
      (marker) => this.listAccounts({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List a group's inline policies */
  listGroupInlinePolicies(
    group_id: string,
    query: ListGroupInlinePoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListGroupInlinePoliciesResponse, ListGroupInlinePoliciesItem>
  > {
    return this.transport.page<
      ListGroupInlinePoliciesResponse,
      ListGroupInlinePoliciesItem
    >(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listGroupInlinePolicies,
      { group_id },
      undefined,
      query,
      options,
    );
  }
  /** List group policies */
  listGroupPolicies(
    group_id: string,
    query: ListGroupPoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListGroupPoliciesResponse, ListGroupPoliciesItem>> {
    return this.transport.page<
      ListGroupPoliciesResponse,
      ListGroupPoliciesItem
    >(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listGroupPolicies,
      { group_id },
      undefined,
      query,
      options,
    );
  }
  /** List group users */
  listGroupUsers(
    group_id: string,
    query: ListGroupUsersQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListGroupUsersResponse, ListGroupUsersItem>> {
    return this.transport.page<ListGroupUsersResponse, ListGroupUsersItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listGroupUsers,
      { group_id },
      undefined,
      query,
      options,
    );
  }
  listGroupUsersAll(
    group_id: string,
    query: ListGroupUsersQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListGroupUsersItem> {
    return iteratePages(
      (marker) => this.listGroupUsers(group_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List groups */
  listGroups(
    query: ListGroupsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListGroupsResponse, ListGroupsItem>> {
    return this.transport.page<ListGroupsResponse, ListGroupsItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listGroups,
      {},
      undefined,
      query,
      options,
    );
  }
  listGroupsAll(
    query: ListGroupsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListGroupsItem> {
    return iteratePages(
      (marker) => this.listGroups({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List invitations */
  listInvitations(
    query: ListInvitationsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInvitationsResponse, ListInvitationsItem>> {
    return this.transport.page<ListInvitationsResponse, ListInvitationsItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listInvitations,
      {},
      undefined,
      query,
      options,
    );
  }
  listInvitationsAll(
    query: ListInvitationsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInvitationsItem> {
    return iteratePages(
      (marker) => this.listInvitations({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List organizations */
  listOrganizations(
    query: ListOrganizationsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListOrganizationsResponse, ListOrganizationsItem>> {
    return this.transport.page<
      ListOrganizationsResponse,
      ListOrganizationsItem
    >(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listOrganizations,
      {},
      undefined,
      query,
      options,
    );
  }
  listOrganizationsAll(
    query: ListOrganizationsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListOrganizationsItem> {
    return iteratePages(
      (marker) => this.listOrganizations({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List policies */
  listPolicies(
    query: ListPoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPoliciesResponse, ListPoliciesItem>> {
    return this.transport.page<ListPoliciesResponse, ListPoliciesItem>(
      "workspace",
      "https://workspace.basaltic.sh",
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
  /** List groups with policy */
  listPolicyGroups(
    policy_id: string,
    query: ListPolicyGroupsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPolicyGroupsResponse, ListPolicyGroupsItem>> {
    return this.transport.page<ListPolicyGroupsResponse, ListPolicyGroupsItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listPolicyGroups,
      { policy_id },
      undefined,
      query,
      options,
    );
  }
  listPolicyGroupsAll(
    policy_id: string,
    query: ListPolicyGroupsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListPolicyGroupsItem> {
    return iteratePages(
      (marker) =>
        this.listPolicyGroups(policy_id, { ...query, marker }, options),
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
      "workspace",
      "https://workspace.basaltic.sh",
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
      "workspace",
      "https://workspace.basaltic.sh",
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
  /** List users with policy */
  listPolicyUsers(
    policy_id: string,
    query: ListPolicyUsersQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPolicyUsersResponse, ListPolicyUsersItem>> {
    return this.transport.page<ListPolicyUsersResponse, ListPolicyUsersItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listPolicyUsers,
      { policy_id },
      undefined,
      query,
      options,
    );
  }
  listPolicyUsersAll(
    policy_id: string,
    query: ListPolicyUsersQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListPolicyUsersItem> {
    return iteratePages(
      (marker) =>
        this.listPolicyUsers(policy_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List role policies */
  listRolePolicies(
    role_id: string,
    query: ListRolePoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRolePoliciesResponse, ListRolePoliciesItem>> {
    return this.transport.page<ListRolePoliciesResponse, ListRolePoliciesItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listRolePolicies,
      { role_id },
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
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listServiceAccountPolicies,
      { service_account_id },
      undefined,
      query,
      options,
    );
  }
  /** List user groups */
  listUserGroups(
    user_id: string,
    query: ListUserGroupsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListUserGroupsResponse, ListUserGroupsItem>> {
    return this.transport.page<ListUserGroupsResponse, ListUserGroupsItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listUserGroups,
      { user_id },
      undefined,
      query,
      options,
    );
  }
  /** List a user's inline policies */
  listUserInlinePolicies(
    user_id: string,
    query: ListUserInlinePoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListUserInlinePoliciesResponse, ListUserInlinePoliciesItem>> {
    return this.transport.page<
      ListUserInlinePoliciesResponse,
      ListUserInlinePoliciesItem
    >(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listUserInlinePolicies,
      { user_id },
      undefined,
      query,
      options,
    );
  }
  /** List user policies */
  listUserPolicies(
    user_id: string,
    query: ListUserPoliciesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListUserPoliciesResponse, ListUserPoliciesItem>> {
    return this.transport.page<ListUserPoliciesResponse, ListUserPoliciesItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listUserPolicies,
      { user_id },
      undefined,
      query,
      options,
    );
  }
  /** List users */
  listUsers(
    query: ListUsersQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListUsersResponse, ListUsersItem>> {
    return this.transport.page<ListUsersResponse, ListUsersItem>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.listUsers,
      {},
      undefined,
      query,
      options,
    );
  }
  listUsersAll(
    query: ListUsersQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListUsersItem> {
    return iteratePages(
      (marker) => this.listUsers({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Create or replace a group's inline policy */
  putGroupInlinePolicy(
    group_id: string,
    policy_name: string,
    body: PutGroupInlinePolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutGroupInlinePolicyResponse>> {
    return this.transport.json<PutGroupInlinePolicyResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.putGroupInlinePolicy,
      { group_id, policy_name },
      body,
      {},
      options,
    );
  }
  /** Create or replace a user's inline policy */
  putUserInlinePolicy(
    user_id: string,
    policy_name: string,
    body: PutUserInlinePolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutUserInlinePolicyResponse>> {
    return this.transport.json<PutUserInlinePolicyResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.putUserInlinePolicy,
      { user_id, policy_name },
      body,
      {},
      options,
    );
  }
  /** Remove account role assignment */
  removeAccountRoleAssignment(
    account_id: string,
    assignment_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.removeAccountRoleAssignment,
      { account_id, assignment_id },
      undefined,
      {},
      options,
    );
  }
  /** Remove user from organization */
  removeUser(user_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.removeUser,
      { user_id },
      undefined,
      {},
      options,
    );
  }
  /** Remove user from group */
  removeUserFromGroup(
    user_id: string,
    group_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.removeUserFromGroup,
      { user_id, group_id },
      undefined,
      {},
      options,
    );
  }
  /** Remove a user's permission boundary */
  removeUserPermissionBoundary(
    user_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.removeUserPermissionBoundary,
      { user_id },
      undefined,
      {},
      options,
    );
  }
  /** Set a user's permission boundary */
  setUserPermissionBoundary(
    user_id: string,
    body: SetUserPermissionBoundaryBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.setUserPermissionBoundary,
      { user_id },
      body,
      {},
      options,
    );
  }
  /** Update account */
  updateAccount(
    account_id: string,
    body: UpdateAccountBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateAccountResponse>> {
    return this.transport.json<UpdateAccountResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.updateAccount,
      { account_id },
      body,
      {},
      options,
    );
  }
  /** Update group */
  updateGroup(
    group_id: string,
    body: UpdateGroupBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateGroupResponse>> {
    return this.transport.json<UpdateGroupResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.updateGroup,
      { group_id },
      body,
      {},
      options,
    );
  }
  /** Update organization */
  updateOrganization(
    organization_id: string,
    body: UpdateOrganizationBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateOrganizationResponse>> {
    return this.transport.json<UpdateOrganizationResponse>(
      "workspace",
      "https://workspace.basaltic.sh",
      operations.updateOrganization,
      { organization_id },
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
      "workspace",
      "https://workspace.basaltic.sh",
      operations.updatePolicy,
      { policy_id },
      body,
      {},
      options,
    );
  }
}
