// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages } from "../response.js";
export type AddSuppressionOverrideBody = SuppressionOverrideRequestInput;
export type AddSuppressionOverrideResponse = ConfigurationSetResponse;
export type BeginDKIMRotationResponse = IdentityResponse;
export type CancelDKIMRotationResponse = IdentityResponse;
export type CreateConfigurationSetBody = CreateConfigurationSetRequestInput;
export type CreateConfigurationSetResponse = ConfigurationSetResponse;
export type CreateIPPoolBody = CreateIPPoolRequestInput;
export type CreateIPPoolResponse = IPPoolResponse;
export type CreateIdentityBody = CreateIdentityRequestInput;
export type CreateIdentityResponse = IdentityResponse;
export type CreateRecipientRuleBody = CreateRecipientRuleRequestInput;
export type CreateRecipientRuleResponse = RecipientRuleResponse;
export type CreateSuppressionBody = CreateSuppressionRequestInput;
export type CreateSuppressionResponse = SuppressionResponse;
export type CreateTemplateBody = CreateTemplateRequestInput;
export type CreateTemplateResponse = TemplateResponse;
export type DescribeConfigurationSetResponse = ConfigurationSetResponse;
export type DescribeDedicatedIPResponse = DedicatedIPResponse;
export type DescribeIPPoolResponse = IPPoolResponse;
export type DescribeIdentityResponse = IdentityResponse;
export type DescribeReceivedMessageResponse = ReceivedMessageResponse;
export type DescribeRecipientRuleResponse = RecipientRuleResponse;
export type DescribeSentMessageResponse = MessageResponse;
export type DescribeSuppressionResponse = SuppressionResponse;
export type DescribeTemplateResponse = TemplateResponse;
export type FinalizeDKIMRotationResponse = IdentityResponse;
export type GetReceivedMessageContentResponse = MessageContentResponse;
export type GetReceivingConfigurationResponse = ReceivingConfigurationResponse;
export type GetSentMessageContentResponse = MessageContentResponse;
export type GetSentMessageEngagementResponse = MessageEngagementResponse;
export type ListConfigurationSetsQuery = {
  name?: string;
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListConfigurationSetsResponse = ConfigurationSetListResponse;
export type ListConfigurationSetsItem = ConfigurationSet;
export type ListDMARCReportsQuery = {
  marker?: string;
  limit?: number;
  from?: string;
  to?: string;
};
export type ListDMARCReportsResponse = DMARCReportListResponse;
export type ListDMARCReportsItem = DMARCReportRecord;
export type ListDedicatedIPsQuery = {
  crn?: string;
  marker?: string;
  limit?: number;
  ip_pool?: string;
};
export type ListDedicatedIPsResponse = DedicatedIPListResponse;
export type ListDedicatedIPsItem = DedicatedIP;
export type ListIPPoolsQuery = {
  name?: string;
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListIPPoolsResponse = IPPoolListResponse;
export type ListIPPoolsItem = IPPool;
export type ListIdentitiesQuery = {
  name?: string;
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListIdentitiesResponse = IdentityListResponse;
export type ListIdentitiesItem = Identity;
export type ListReceivedMessagesQuery = {
  identity?: string;
  recipient?: string;
  review_reason?: "clear" | "spam" | "sender_unverified" | "malware";
  marker?: string;
  limit?: number;
};
export type ListReceivedMessagesResponse = ReceivedMessageListResponse;
export type ListReceivedMessagesItem = ReceivedMessage;
export type ListRecipientRulesQuery = { marker?: string; limit?: number };
export type ListRecipientRulesResponse = RecipientRuleListResponse;
export type ListRecipientRulesItem = RecipientRule;
export type ListRejectionsQuery = {
  crn?: string;
  before?: string;
  limit?: number;
  identity?: string;
  reason?:
    | "ALL_RECIPIENTS_SUPPRESSED"
    | "IDENTITY_SUSPENDED"
    | "IDENTITY_NOT_VERIFIED"
    | "FROM_DOMAIN_MISMATCH"
    | "RATE_LIMIT";
};
export type ListRejectionsResponse = RejectionListResponse;
export type ListRejectionsItem = Rejection;
export type ListSentMessagesQuery = {
  crn?: string;
  marker?: string;
  limit?: number;
  identity?: string;
  status?: string;
  recipient?: string;
};
export type ListSentMessagesResponse = MessageListResponse;
export type ListSentMessagesItem = Message;
export type ListSuppressionsQuery = {
  crn?: string;
  reason?: "auto_bounce" | "auto_complaint" | "manual";
  marker?: string;
  limit?: number;
};
export type ListSuppressionsResponse = SuppressionListResponse;
export type ListSuppressionsItem = Suppression;
export type ListTemplatesQuery = {
  name?: string;
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListTemplatesResponse = TemplateListResponse;
export type ListTemplatesItem = Template;
export type RemoveSuppressionOverrideResponse = ConfigurationSetResponse;
export type RequestDedicatedIPBody = RequestDedicatedIPRequestInput;
export type RequestDedicatedIPResponse = DedicatedIPResponse;
export type SendMessageBody = SendMessageRequestInput;
export type SendMessageResponse = MessageResponse;
export type SendMessageBatchBody = BatchSendRequestInput;
export type SendMessageBatchResponse = BatchSendResponse;
export type SetBIMIBody = SetBIMIRequestInput;
export type SetBIMIResponse = IdentityResponse;
export type SetMailFromDomainBody = SetMailFromDomainRequestInput;
export type SetMailFromDomainResponse = IdentityResponse;
export type UpdateConfigurationSetBody = UpdateConfigurationSetRequestInput;
export type UpdateConfigurationSetResponse = ConfigurationSetResponse;
export type UpdateDedicatedIPBody = UpdateDedicatedIPRequestInput;
export type UpdateDedicatedIPResponse = DedicatedIPResponse;
export type UpdateIPPoolBody = UpdateIPPoolRequestInput;
export type UpdateIPPoolResponse = IPPoolResponse;
export type UpdateIdentityBody = UpdateIdentityRequestInput;
export type UpdateIdentityResponse = IdentityResponse;
export type UpdateReceivingConfigurationBody =
  UpdateReceivingConfigurationRequestInput;
export type UpdateRecipientRuleBody = UpdateRecipientRuleRequestInput;
export type UpdateRecipientRuleResponse = RecipientRuleResponse;
export type UpdateSuppressionBody = UpdateSuppressionRequestInput;
export type UpdateSuppressionResponse = SuppressionResponse;
export type UpdateTemplateBody = UpdateTemplateRequestInput;
export type UpdateTemplateResponse = TemplateResponse;
export type VerifyBIMIResponse = IdentityResponse;
export type VerifyIdentityResponse = IdentityResponse;
export type VerifyMailFromDomainResponse = IdentityResponse;
export type SuppressionOverrideRequestInput = { address: string };
export type ConfigurationSetResponse = { configuration_set: ConfigurationSet };
export type ConfigurationSet = {
  id: string;
  crn: string;
  name: string;
  sending_enabled: boolean;
  suppression_overrides: string[];
  ip_pool?: ResourceRef;
  tracking_open?: boolean;
  tracking_click?: boolean;
  tags?: Tags;
  created_at?: string;
  updated_at?: string;
};
export type ResourceRef = { id: string; crn: string; name?: string };
export type Tags = { [key: string]: string };
export type IdentityResponse = { identity: Identity };
export type Identity = {
  id: string;
  crn: string;
  name: string;
  type: "domain";
  status: "pending" | "verified" | "failed" | "suspended";
  dkim_selector: string;
  dkim_pending_selector?: string;
  dkim_selector_old?: string;
  dkim_old_expires_at?: string | null;
  mail_from_domain?: string;
  mail_from_status?: "pending" | "verified" | "failed";
  mail_from_verified_at?: string | null;
  bimi_logo_url?: string;
  bimi_vmc_url?: string;
  bimi_status?: "pending" | "verified" | "failed";
  bimi_verified_at?: string | null;
  verified_at?: string | null;
  created_at: string;
  updated_at: string;
  suspended_reason?: string;
  suspended_at?: string | null;
  tags?: Tags;
  dns_records?: DNSRecord[];
};
export type DNSRecord = {
  purpose:
    | "ownership"
    | "dkim"
    | "dkim_cname"
    | "dkim_pending"
    | "dkim_pending_cname"
    | "dkim_rotated_out"
    | "spf"
    | "dmarc"
    | "return_path"
    | "mail_from_mx"
    | "mail_from_spf"
    | "bimi"
    | "receiving_mx";
  type: "TXT" | "CNAME" | "MX";
  name: string;
  value: string;
  required: boolean;
  group: "sending" | "receiving";
  alternative_group?: string;
};
export type CreateConfigurationSetRequestInput = {
  name: string;
  sending_enabled?: boolean;
  tags?: TagsInput;
  ip_pool?: string | null;
  tracking_open?: boolean;
  tracking_click?: boolean;
  suppression_overrides?: string[];
};
export type TagsInput = { [key: string]: string };
export type CreateIPPoolRequestInput = { name: string; description?: string };
export type IPPoolResponse = { ip_pool: IPPool };
export type IPPool = {
  id: string;
  crn: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
};
export type CreateIdentityRequestInput = { name: string; tags?: TagsInput };
export type CreateRecipientRuleRequestInput = {
  match_type: "exact" | "prefix" | "all";
  local_part?: string;
  topic: string;
  enabled?: boolean;
};
export type RecipientRuleResponse = { rule: RecipientRule };
export type RecipientRule = {
  id: string;
  crn: string;
  local_part: string;
  topic: ResourceRef;
  enabled: boolean;
  match_type: "exact" | "prefix" | "all";
};
export type CreateSuppressionRequestInput = {
  address: string;
  description?: string;
  expires_at?: string;
};
export type SuppressionResponse = { suppression: Suppression };
export type Suppression = {
  id: string;
  crn: string;
  address: string;
  reason: "auto_bounce" | "auto_complaint" | "manual";
  description?: string;
  source_message?: ResourceRef;
  expires_at?: string | null;
  created_at: string;
  updated_at: string;
};
export type CreateTemplateRequestInput = {
  name: string;
  subject_template?: string;
  body_template: string;
  body_type?: "text" | "html";
};
export type TemplateResponse = { template: Template };
export type Template = {
  id: string;
  crn: string;
  name: string;
  subject_template: string;
  body_template: string;
  body_type: "text" | "html";
  variables: string[];
  created_at: string;
  updated_at: string;
};
export type DedicatedIPResponse = { dedicated_ip: DedicatedIP };
export type DedicatedIP = {
  id: string;
  crn: string;
  address: string;
  warmup_status: "new" | "warming" | "warm";
  warmup_percentage: number;
  warmup_started_at?: string | null;
  created_at: string;
  updated_at: string;
  ip_pool: ({ [key: string]: unknown } & ResourceRef) | null;
};
export type ReceivedMessageResponse = { message: ReceivedMessage };
export type ReceivedMessage = {
  crn: string;
  id: string;
  recipient: string;
  from: string;
  subject: string;
  received_at: string;
  expires_at: string;
  published_at: string | null;
  content_available: boolean;
  review_reason: "" | "spam" | "sender_unverified" | "malware";
  authenticated: boolean;
  attachments: Attachment[];
  identity: ({ [key: string]: unknown } & ResourceRef) | null;
  notification_status: "pending" | "retrying" | "published";
  notification_error: string | null;
  rfc_message_id?: string;
};
export type Attachment = {
  name: string;
  content_type: string;
  size: number;
  bucket: ({ [key: string]: unknown } & ResourceRef) | null;
  key: string;
  version_id?: string;
  sha256: string;
  id: string;
};
export type MessageResponse = { message: Message };
export type Message = {
  expires_at: string;
  attachments: Attachment[];
  id: string;
  crn: string;
  identity: ResourceRef;
  from: string;
  to: string[];
  subject?: string;
  status: "queued" | "sending" | "sent" | "failed" | "bounced" | "complained";
  smtp_response?: string;
  error_message?: string;
  outbound_ip?: string;
  queued_at: string;
  sent_at?: string | null;
  failed_at?: string | null;
};
export type MessageContentResponse = { content: MessageContent };
export type MessageContent = {
  from: string;
  to: string[];
  subject: string;
  text: string;
  html: string;
  rfc_message_id?: string;
  attachments: Attachment[];
};
export type ReceivingConfigurationResponse = {
  receiving: ReceivingConfiguration;
};
export type ReceivingConfiguration = {
  enabled: boolean;
  attachments_bucket: ({ [key: string]: unknown } & ResourceRef) | null;
};
export type MessageEngagementResponse = { engagement: MessageEngagement };
export type MessageEngagement = {
  generated_at: string;
  open_count: number;
  unique_opens: number;
  click_count: number;
  unique_clicks: number;
  first_open_at?: string | null;
  last_open_at?: string | null;
  first_click_at?: string | null;
  last_click_at?: string | null;
};
export type ConfigurationSetListResponse = {
  configuration_sets: ConfigurationSet[];
  meta: PaginationMeta;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type DMARCReportListResponse = {
  records: DMARCReportRecord[];
  meta: PaginationMeta;
};
export type DMARCReportRecord = {
  reporter: string;
  report_id: string;
  period_start: string;
  period_end: string;
  received_at: string;
  source_ip: string;
  message_count: number;
  disposition: string;
  dkim_aligned: boolean;
  spf_aligned: boolean;
  dkim_domain: string;
  dkim_result: string;
  spf_domain: string;
  spf_result: string;
  header_from: string;
};
export type DedicatedIPListResponse = {
  dedicated_ips: DedicatedIP[];
  meta: PaginationMeta;
};
export type IPPoolListResponse = { ip_pools: IPPool[]; meta: PaginationMeta };
export type IdentityListResponse = {
  identities: Identity[];
  meta: PaginationMeta;
};
export type ReceivedMessageListResponse = {
  messages: ReceivedMessage[];
  meta: PaginationMeta;
};
export type RecipientRuleListResponse = {
  rules: RecipientRule[];
  meta: PaginationMeta;
};
export type RejectionListResponse = {
  rejections: Rejection[];
  meta: PaginationMeta;
};
export type Rejection = {
  crn: string;
  id: string;
  identity?: ResourceRef;
  from?: string;
  to: string[];
  reason:
    | "ALL_RECIPIENTS_SUPPRESSED"
    | "IDENTITY_SUSPENDED"
    | "IDENTITY_NOT_VERIFIED"
    | "FROM_DOMAIN_MISMATCH"
    | "RATE_LIMIT";
  detail?: string;
  rejected_at: string;
};
export type MessageListResponse = { messages: Message[]; meta: PaginationMeta };
export type SuppressionListResponse = {
  suppressions: Suppression[];
  meta: PaginationMeta;
};
export type TemplateListResponse = {
  templates: Template[];
  meta: PaginationMeta;
};
export type RequestDedicatedIPRequestInput = { ip_pool?: string };
export type SendMessageRequestInput = {
  attachments_bucket?: string;
  attachments?: AttachmentInputInput[];
  identity: string;
  from: string;
  to: string[];
  subject?: string;
  configuration_set?: string;
  content: SendContentInput;
};
export type AttachmentInputInput = {
  bucket: string;
  key: string;
  version_id?: string;
  name: string;
  content_type?: string;
};
export type SendContentInput = {
  text?: string;
  html?: string;
  raw?: string;
  template?: string;
  template_data?: { [key: string]: string };
} & (
  | ({ text: unknown } | { html: unknown })
  | { raw: unknown }
  | { template: unknown }
);
export type BatchSendRequestInput = { messages: SendMessageRequestInput[] };
export type BatchSendResponse = { results: BatchSendResult[] };
export type BatchSendResult = {
  index: number;
  status: "queued" | "rejected";
  message?: ResourceRef;
  error?: Error;
};
export type Error = {
  code: string;
  message: string;
  params?: { [key: string]: unknown };
  request_id: string;
};
export type SetBIMIRequestInput = {
  logo_url?: string | null;
  vmc_url?: string | null;
};
export type SetMailFromDomainRequestInput = { domain?: string | null };
export type UpdateConfigurationSetRequestInput = {
  sending_enabled?: boolean;
  suppression_overrides?: string[];
  ip_pool?: string | null;
  tracking_open?: boolean;
  tracking_click?: boolean;
  tags?: TagsInput;
};
export type UpdateDedicatedIPRequestInput = {
  warmup_status?: "new" | "warming" | "warm";
  ip_pool?: string | null;
};
export type UpdateIPPoolRequestInput = { description?: string };
export type UpdateIdentityRequestInput = { tags?: TagsInput };
export type UpdateReceivingConfigurationRequestInput = {
  enabled?: boolean;
  attachments_bucket?: string | null;
};
export type UpdateRecipientRuleRequestInput = {
  match_type?: "exact" | "prefix" | "all";
  local_part?: string;
  topic?: string;
  enabled?: boolean;
};
export type UpdateSuppressionRequestInput = {
  description?: string;
  expires_at?: string | null;
};
export type UpdateTemplateRequestInput = {
  subject_template?: string;
  body_template?: string;
  body_type?: "text" | "html";
};
const operations = {
  addSuppressionOverride: {
    id: "addSuppressionOverride",
    method: "POST",
    path: "/v1/configuration-sets/{configuration_set_id}/suppression-overrides",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  beginDKIMRotation: {
    id: "beginDKIMRotation",
    method: "POST",
    path: "/v1/identities/{identity_id}/dkim/rotate",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  cancelDKIMRotation: {
    id: "cancelDKIMRotation",
    method: "DELETE",
    path: "/v1/identities/{identity_id}/dkim/rotate",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  createConfigurationSet: {
    id: "createConfigurationSet",
    method: "POST",
    path: "/v1/configuration-sets",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createIPPool: {
    id: "createIPPool",
    method: "POST",
    path: "/v1/ip-pools",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createIdentity: {
    id: "createIdentity",
    method: "POST",
    path: "/v1/identities",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createRecipientRule: {
    id: "createRecipientRule",
    method: "POST",
    path: "/v1/identities/{identity_id}/recipient-rules",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createSuppression: {
    id: "createSuppression",
    method: "POST",
    path: "/v1/suppressions",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createTemplate: {
    id: "createTemplate",
    method: "POST",
    path: "/v1/templates",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteConfigurationSet: {
    id: "deleteConfigurationSet",
    method: "DELETE",
    path: "/v1/configuration-sets/{configuration_set_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteIPPool: {
    id: "deleteIPPool",
    method: "DELETE",
    path: "/v1/ip-pools/{ip_pool_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteIdentity: {
    id: "deleteIdentity",
    method: "DELETE",
    path: "/v1/identities/{identity_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteRecipientRule: {
    id: "deleteRecipientRule",
    method: "DELETE",
    path: "/v1/identities/{identity_id}/recipient-rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteSuppression: {
    id: "deleteSuppression",
    method: "DELETE",
    path: "/v1/suppressions/{suppression_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteTemplate: {
    id: "deleteTemplate",
    method: "DELETE",
    path: "/v1/templates/{template_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeConfigurationSet: {
    id: "describeConfigurationSet",
    method: "GET",
    path: "/v1/configuration-sets/{configuration_set_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeDedicatedIP: {
    id: "describeDedicatedIP",
    method: "GET",
    path: "/v1/dedicated-ips/{dedicated_ip_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeIPPool: {
    id: "describeIPPool",
    method: "GET",
    path: "/v1/ip-pools/{ip_pool_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeIdentity: {
    id: "describeIdentity",
    method: "GET",
    path: "/v1/identities/{identity_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeReceivedMessage: {
    id: "describeReceivedMessage",
    method: "GET",
    path: "/v1/received-messages/{message_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeRecipientRule: {
    id: "describeRecipientRule",
    method: "GET",
    path: "/v1/identities/{identity_id}/recipient-rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeSentMessage: {
    id: "describeSentMessage",
    method: "GET",
    path: "/v1/sent-messages/{message_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeSuppression: {
    id: "describeSuppression",
    method: "GET",
    path: "/v1/suppressions/{suppression_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeTemplate: {
    id: "describeTemplate",
    method: "GET",
    path: "/v1/templates/{template_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  downloadReceivedAttachment: {
    id: "downloadReceivedAttachment",
    method: "GET",
    path: "/v1/received-messages/{message_id}/attachments/{attachment_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  downloadReceivedMessage: {
    id: "downloadReceivedMessage",
    method: "GET",
    path: "/v1/received-messages/{message_id}/raw",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  downloadSentAttachment: {
    id: "downloadSentAttachment",
    method: "GET",
    path: "/v1/sent-messages/{message_id}/attachments/{attachment_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  downloadSentMessage: {
    id: "downloadSentMessage",
    method: "GET",
    path: "/v1/sent-messages/{message_id}/raw",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  finalizeDKIMRotation: {
    id: "finalizeDKIMRotation",
    method: "POST",
    path: "/v1/identities/{identity_id}/dkim/rotate/finalize",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getReceivedMessageContent: {
    id: "getReceivedMessageContent",
    method: "GET",
    path: "/v1/received-messages/{message_id}/content",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getReceivingConfiguration: {
    id: "getReceivingConfiguration",
    method: "GET",
    path: "/v1/identities/{identity_id}/receiving",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSentMessageContent: {
    id: "getSentMessageContent",
    method: "GET",
    path: "/v1/sent-messages/{message_id}/content",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSentMessageEngagement: {
    id: "getSentMessageEngagement",
    method: "GET",
    path: "/v1/sent-messages/{message_id}/engagement",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listConfigurationSets: {
    id: "listConfigurationSets",
    method: "GET",
    path: "/v1/configuration-sets",
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
    itemsKey: "configuration_sets",
  },
  listDMARCReports: {
    id: "listDMARCReports",
    method: "GET",
    path: "/v1/identities/{identity_id}/dmarc-reports",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      from: { style: "form", explode: true },
      to: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "records",
  },
  listDedicatedIPs: {
    id: "listDedicatedIPs",
    method: "GET",
    path: "/v1/dedicated-ips",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      ip_pool: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "dedicated_ips",
  },
  listIPPools: {
    id: "listIPPools",
    method: "GET",
    path: "/v1/ip-pools",
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
    itemsKey: "ip_pools",
  },
  listIdentities: {
    id: "listIdentities",
    method: "GET",
    path: "/v1/identities",
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
    itemsKey: "identities",
  },
  listReceivedMessages: {
    id: "listReceivedMessages",
    method: "GET",
    path: "/v1/received-messages",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      identity: { style: "form", explode: true },
      recipient: { style: "form", explode: true },
      review_reason: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "messages",
  },
  listRecipientRules: {
    id: "listRecipientRules",
    method: "GET",
    path: "/v1/identities/{identity_id}/recipient-rules",
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
    itemsKey: "rules",
  },
  listRejections: {
    id: "listRejections",
    method: "GET",
    path: "/v1/rejections",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      before: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      identity: { style: "form", explode: true },
      reason: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "rejections",
  },
  listSentMessages: {
    id: "listSentMessages",
    method: "GET",
    path: "/v1/sent-messages",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      identity: { style: "form", explode: true },
      status: { style: "form", explode: true },
      recipient: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "messages",
  },
  listSuppressions: {
    id: "listSuppressions",
    method: "GET",
    path: "/v1/suppressions",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      reason: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "suppressions",
  },
  listTemplates: {
    id: "listTemplates",
    method: "GET",
    path: "/v1/templates",
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
    itemsKey: "templates",
  },
  releaseDedicatedIP: {
    id: "releaseDedicatedIP",
    method: "DELETE",
    path: "/v1/dedicated-ips/{dedicated_ip_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  removeSuppressionOverride: {
    id: "removeSuppressionOverride",
    method: "DELETE",
    path: "/v1/configuration-sets/{configuration_set_id}/suppression-overrides/{address}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  requestDedicatedIP: {
    id: "requestDedicatedIP",
    method: "POST",
    path: "/v1/dedicated-ips",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "application/json",
    accept: "application/json",
  },
  sendMessage: {
    id: "sendMessage",
    method: "POST",
    path: "/v1/sent-messages",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  sendMessageBatch: {
    id: "sendMessageBatch",
    method: "POST",
    path: "/v1/sent-messages/batch",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  setBIMI: {
    id: "setBIMI",
    method: "PATCH",
    path: "/v1/identities/{identity_id}/bimi",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  setMailFromDomain: {
    id: "setMailFromDomain",
    method: "PATCH",
    path: "/v1/identities/{identity_id}/mail-from-domain",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateConfigurationSet: {
    id: "updateConfigurationSet",
    method: "PATCH",
    path: "/v1/configuration-sets/{configuration_set_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateDedicatedIP: {
    id: "updateDedicatedIP",
    method: "PATCH",
    path: "/v1/dedicated-ips/{dedicated_ip_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateIPPool: {
    id: "updateIPPool",
    method: "PATCH",
    path: "/v1/ip-pools/{ip_pool_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateIdentity: {
    id: "updateIdentity",
    method: "PATCH",
    path: "/v1/identities/{identity_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateReceivingConfiguration: {
    id: "updateReceivingConfiguration",
    method: "PATCH",
    path: "/v1/identities/{identity_id}/receiving",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateRecipientRule: {
    id: "updateRecipientRule",
    method: "PATCH",
    path: "/v1/identities/{identity_id}/recipient-rules/{rule_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateSuppression: {
    id: "updateSuppression",
    method: "PATCH",
    path: "/v1/suppressions/{suppression_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateTemplate: {
    id: "updateTemplate",
    method: "PATCH",
    path: "/v1/templates/{template_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  verifyBIMI: {
    id: "verifyBIMI",
    method: "POST",
    path: "/v1/identities/{identity_id}/bimi/verify",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  verifyIdentity: {
    id: "verifyIdentity",
    method: "POST",
    path: "/v1/identities/{identity_id}/verify",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  verifyMailFromDomain: {
    id: "verifyMailFromDomain",
    method: "POST",
    path: "/v1/identities/{identity_id}/mail-from-domain/verify",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class EmailService {
  constructor(private readonly transport: Transport) {}
  /** Add a suppression override address */
  addSuppressionOverride(
    configuration_set_id: string,
    body: AddSuppressionOverrideBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AddSuppressionOverrideResponse>> {
    return this.transport.json<AddSuppressionOverrideResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.addSuppressionOverride,
      { configuration_set_id },
      body,
      {},
      options,
    );
  }
  /** Begin DKIM key rotation */
  beginDKIMRotation(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<BeginDKIMRotationResponse>> {
    return this.transport.json<BeginDKIMRotationResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.beginDKIMRotation,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Cancel in-progress DKIM rotation */
  cancelDKIMRotation(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CancelDKIMRotationResponse>> {
    return this.transport.json<CancelDKIMRotationResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.cancelDKIMRotation,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Create a configuration set */
  createConfigurationSet(
    body: CreateConfigurationSetBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateConfigurationSetResponse>> {
    return this.transport.json<CreateConfigurationSetResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.createConfigurationSet,
      {},
      body,
      {},
      options,
    );
  }
  /** Create an IP pool */
  createIPPool(
    body: CreateIPPoolBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateIPPoolResponse>> {
    return this.transport.json<CreateIPPoolResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.createIPPool,
      {},
      body,
      {},
      options,
    );
  }
  /** Create a sender identity */
  createIdentity(
    body: CreateIdentityBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateIdentityResponse>> {
    return this.transport.json<CreateIdentityResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.createIdentity,
      {},
      body,
      {},
      options,
    );
  }
  /** Create recipient rule */
  createRecipientRule(
    identity_id: string,
    body: CreateRecipientRuleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateRecipientRuleResponse>> {
    return this.transport.json<CreateRecipientRuleResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.createRecipientRule,
      { identity_id },
      body,
      {},
      options,
    );
  }
  /** Add a suppression entry */
  createSuppression(
    body: CreateSuppressionBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateSuppressionResponse>> {
    return this.transport.json<CreateSuppressionResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.createSuppression,
      {},
      body,
      {},
      options,
    );
  }
  /** Create a template */
  createTemplate(
    body: CreateTemplateBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateTemplateResponse>> {
    return this.transport.json<CreateTemplateResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.createTemplate,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete a configuration set */
  deleteConfigurationSet(
    configuration_set_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.deleteConfigurationSet,
      { configuration_set_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete an IP pool */
  deleteIPPool(
    ip_pool_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.deleteIPPool,
      { ip_pool_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete an identity */
  deleteIdentity(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.deleteIdentity,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete recipient rule */
  deleteRecipientRule(
    identity_id: string,
    rule_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.deleteRecipientRule,
      { identity_id, rule_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete suppression */
  deleteSuppression(
    suppression_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.deleteSuppression,
      { suppression_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete a template */
  deleteTemplate(
    template_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.deleteTemplate,
      { template_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a configuration set */
  describeConfigurationSet(
    configuration_set_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeConfigurationSetResponse>> {
    return this.transport.json<DescribeConfigurationSetResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeConfigurationSet,
      { configuration_set_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a dedicated IP */
  describeDedicatedIP(
    dedicated_ip_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeDedicatedIPResponse>> {
    return this.transport.json<DescribeDedicatedIPResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeDedicatedIP,
      { dedicated_ip_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe an IP pool */
  describeIPPool(
    ip_pool_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeIPPoolResponse>> {
    return this.transport.json<DescribeIPPoolResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeIPPool,
      { ip_pool_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe an identity */
  describeIdentity(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeIdentityResponse>> {
    return this.transport.json<DescribeIdentityResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeIdentity,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Get received message metadata */
  describeReceivedMessage(
    message_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeReceivedMessageResponse>> {
    return this.transport.json<DescribeReceivedMessageResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeReceivedMessage,
      { message_id },
      undefined,
      {},
      options,
    );
  }
  /** Get recipient rule */
  describeRecipientRule(
    identity_id: string,
    rule_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeRecipientRuleResponse>> {
    return this.transport.json<DescribeRecipientRuleResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeRecipientRule,
      { identity_id, rule_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a sent message */
  describeSentMessage(
    message_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeSentMessageResponse>> {
    return this.transport.json<DescribeSentMessageResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeSentMessage,
      { message_id },
      undefined,
      {},
      options,
    );
  }
  /** Get suppression */
  describeSuppression(
    suppression_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeSuppressionResponse>> {
    return this.transport.json<DescribeSuppressionResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeSuppression,
      { suppression_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a template */
  describeTemplate(
    template_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeTemplateResponse>> {
    return this.transport.json<DescribeTemplateResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.describeTemplate,
      { template_id },
      undefined,
      {},
      options,
    );
  }
  /** Download received attachment */
  downloadReceivedAttachment(
    message_id: string,
    attachment_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.downloadReceivedAttachment,
      { message_id, attachment_id },
      undefined,
      {},
      options,
    );
  }
  /** Download received message */
  downloadReceivedMessage(
    message_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.downloadReceivedMessage,
      { message_id },
      undefined,
      {},
      options,
    );
  }
  /** Download sent attachment */
  downloadSentAttachment(
    message_id: string,
    attachment_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.downloadSentAttachment,
      { message_id, attachment_id },
      undefined,
      {},
      options,
    );
  }
  /** Download sent message */
  downloadSentMessage(
    message_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.downloadSentMessage,
      { message_id },
      undefined,
      {},
      options,
    );
  }
  /** Finalize DKIM key rotation */
  finalizeDKIMRotation(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<FinalizeDKIMRotationResponse>> {
    return this.transport.json<FinalizeDKIMRotationResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.finalizeDKIMRotation,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Get received message content */
  getReceivedMessageContent(
    message_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetReceivedMessageContentResponse>> {
    return this.transport.json<GetReceivedMessageContentResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.getReceivedMessageContent,
      { message_id },
      undefined,
      {},
      options,
    );
  }
  /** Get receiving configuration */
  getReceivingConfiguration(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetReceivingConfigurationResponse>> {
    return this.transport.json<GetReceivingConfigurationResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.getReceivingConfiguration,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Get sent message content */
  getSentMessageContent(
    message_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSentMessageContentResponse>> {
    return this.transport.json<GetSentMessageContentResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.getSentMessageContent,
      { message_id },
      undefined,
      {},
      options,
    );
  }
  /** Sent message engagement */
  getSentMessageEngagement(
    message_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSentMessageEngagementResponse>> {
    return this.transport.json<GetSentMessageEngagementResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.getSentMessageEngagement,
      { message_id },
      undefined,
      {},
      options,
    );
  }
  /** List configuration sets */
  listConfigurationSets(
    query: ListConfigurationSetsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListConfigurationSetsResponse, ListConfigurationSetsItem>> {
    return this.transport.page<
      ListConfigurationSetsResponse,
      ListConfigurationSetsItem
    >(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listConfigurationSets,
      {},
      undefined,
      query,
      options,
    );
  }
  listConfigurationSetsAll(
    query: ListConfigurationSetsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListConfigurationSetsItem> {
    return iteratePages(
      (marker) => this.listConfigurationSets({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List DMARC report records */
  listDMARCReports(
    identity_id: string,
    query: ListDMARCReportsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListDMARCReportsResponse, ListDMARCReportsItem>> {
    return this.transport.page<ListDMARCReportsResponse, ListDMARCReportsItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listDMARCReports,
      { identity_id },
      undefined,
      query,
      options,
    );
  }
  listDMARCReportsAll(
    identity_id: string,
    query: ListDMARCReportsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListDMARCReportsItem> {
    return iteratePages(
      (marker) =>
        this.listDMARCReports(identity_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List dedicated IPs */
  listDedicatedIPs(
    query: ListDedicatedIPsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListDedicatedIPsResponse, ListDedicatedIPsItem>> {
    return this.transport.page<ListDedicatedIPsResponse, ListDedicatedIPsItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listDedicatedIPs,
      {},
      undefined,
      query,
      options,
    );
  }
  listDedicatedIPsAll(
    query: ListDedicatedIPsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListDedicatedIPsItem> {
    return iteratePages(
      (marker) => this.listDedicatedIPs({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List IP pools */
  listIPPools(
    query: ListIPPoolsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListIPPoolsResponse, ListIPPoolsItem>> {
    return this.transport.page<ListIPPoolsResponse, ListIPPoolsItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listIPPools,
      {},
      undefined,
      query,
      options,
    );
  }
  listIPPoolsAll(
    query: ListIPPoolsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListIPPoolsItem> {
    return iteratePages(
      (marker) => this.listIPPools({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List sender identities */
  listIdentities(
    query: ListIdentitiesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListIdentitiesResponse, ListIdentitiesItem>> {
    return this.transport.page<ListIdentitiesResponse, ListIdentitiesItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listIdentities,
      {},
      undefined,
      query,
      options,
    );
  }
  listIdentitiesAll(
    query: ListIdentitiesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListIdentitiesItem> {
    return iteratePages(
      (marker) => this.listIdentities({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List received messages */
  listReceivedMessages(
    query: ListReceivedMessagesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListReceivedMessagesResponse, ListReceivedMessagesItem>> {
    return this.transport.page<
      ListReceivedMessagesResponse,
      ListReceivedMessagesItem
    >(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listReceivedMessages,
      {},
      undefined,
      query,
      options,
    );
  }
  listReceivedMessagesAll(
    query: ListReceivedMessagesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListReceivedMessagesItem> {
    return iteratePages(
      (marker) => this.listReceivedMessages({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List recipient rules */
  listRecipientRules(
    identity_id: string,
    query: ListRecipientRulesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRecipientRulesResponse, ListRecipientRulesItem>> {
    return this.transport.page<
      ListRecipientRulesResponse,
      ListRecipientRulesItem
    >(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listRecipientRules,
      { identity_id },
      undefined,
      query,
      options,
    );
  }
  listRecipientRulesAll(
    identity_id: string,
    query: ListRecipientRulesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListRecipientRulesItem> {
    return iteratePages(
      (marker) =>
        this.listRecipientRules(identity_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List API-side send rejections */
  listRejections(
    query: ListRejectionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRejectionsResponse, ListRejectionsItem>> {
    return this.transport.page<ListRejectionsResponse, ListRejectionsItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listRejections,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List sent messages */
  listSentMessages(
    query: ListSentMessagesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSentMessagesResponse, ListSentMessagesItem>> {
    return this.transport.page<ListSentMessagesResponse, ListSentMessagesItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listSentMessages,
      {},
      undefined,
      query,
      options,
    );
  }
  listSentMessagesAll(
    query: ListSentMessagesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSentMessagesItem> {
    return iteratePages(
      (marker) => this.listSentMessages({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List suppression entries */
  listSuppressions(
    query: ListSuppressionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSuppressionsResponse, ListSuppressionsItem>> {
    return this.transport.page<ListSuppressionsResponse, ListSuppressionsItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listSuppressions,
      {},
      undefined,
      query,
      options,
    );
  }
  listSuppressionsAll(
    query: ListSuppressionsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSuppressionsItem> {
    return iteratePages(
      (marker) => this.listSuppressions({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List templates */
  listTemplates(
    query: ListTemplatesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListTemplatesResponse, ListTemplatesItem>> {
    return this.transport.page<ListTemplatesResponse, ListTemplatesItem>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.listTemplates,
      {},
      undefined,
      query,
      options,
    );
  }
  listTemplatesAll(
    query: ListTemplatesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListTemplatesItem> {
    return iteratePages(
      (marker) => this.listTemplates({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Release a dedicated IP */
  releaseDedicatedIP(
    dedicated_ip_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.releaseDedicatedIP,
      { dedicated_ip_id },
      undefined,
      {},
      options,
    );
  }
  /** Remove a suppression override address */
  removeSuppressionOverride(
    configuration_set_id: string,
    address: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RemoveSuppressionOverrideResponse>> {
    return this.transport.json<RemoveSuppressionOverrideResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.removeSuppressionOverride,
      { configuration_set_id, address },
      undefined,
      {},
      options,
    );
  }
  /** Request a dedicated IP */
  requestDedicatedIP(
    body: RequestDedicatedIPBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RequestDedicatedIPResponse>> {
    return this.transport.json<RequestDedicatedIPResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.requestDedicatedIP,
      {},
      body,
      {},
      options,
    );
  }
  /** Send a message */
  sendMessage(
    body: SendMessageBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SendMessageResponse>> {
    return this.transport.json<SendMessageResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.sendMessage,
      {},
      body,
      {},
      options,
    );
  }
  /** Send message batch */
  sendMessageBatch(
    body: SendMessageBatchBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SendMessageBatchResponse>> {
    return this.transport.json<SendMessageBatchResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.sendMessageBatch,
      {},
      body,
      {},
      options,
    );
  }
  /** Set BIMI logo / VMC URLs */
  setBIMI(
    identity_id: string,
    body: SetBIMIBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SetBIMIResponse>> {
    return this.transport.json<SetBIMIResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.setBIMI,
      { identity_id },
      body,
      {},
      options,
    );
  }
  /** Set custom MAIL FROM domain */
  setMailFromDomain(
    identity_id: string,
    body: SetMailFromDomainBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SetMailFromDomainResponse>> {
    return this.transport.json<SetMailFromDomainResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.setMailFromDomain,
      { identity_id },
      body,
      {},
      options,
    );
  }
  /** Update a configuration set */
  updateConfigurationSet(
    configuration_set_id: string,
    body: UpdateConfigurationSetBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateConfigurationSetResponse>> {
    return this.transport.json<UpdateConfigurationSetResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateConfigurationSet,
      { configuration_set_id },
      body,
      {},
      options,
    );
  }
  /** Update a dedicated IP */
  updateDedicatedIP(
    dedicated_ip_id: string,
    body: UpdateDedicatedIPBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateDedicatedIPResponse>> {
    return this.transport.json<UpdateDedicatedIPResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateDedicatedIP,
      { dedicated_ip_id },
      body,
      {},
      options,
    );
  }
  /** Update an IP pool */
  updateIPPool(
    ip_pool_id: string,
    body: UpdateIPPoolBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateIPPoolResponse>> {
    return this.transport.json<UpdateIPPoolResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateIPPool,
      { ip_pool_id },
      body,
      {},
      options,
    );
  }
  /** Update identity */
  updateIdentity(
    identity_id: string,
    body: UpdateIdentityBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateIdentityResponse>> {
    return this.transport.json<UpdateIdentityResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateIdentity,
      { identity_id },
      body,
      {},
      options,
    );
  }
  /** Update receiving configuration */
  updateReceivingConfiguration(
    identity_id: string,
    body: UpdateReceivingConfigurationBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateReceivingConfiguration,
      { identity_id },
      body,
      {},
      options,
    );
  }
  /** Update recipient rule */
  updateRecipientRule(
    identity_id: string,
    rule_id: string,
    body: UpdateRecipientRuleBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateRecipientRuleResponse>> {
    return this.transport.json<UpdateRecipientRuleResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateRecipientRule,
      { identity_id, rule_id },
      body,
      {},
      options,
    );
  }
  /** Update suppression */
  updateSuppression(
    suppression_id: string,
    body: UpdateSuppressionBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateSuppressionResponse>> {
    return this.transport.json<UpdateSuppressionResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateSuppression,
      { suppression_id },
      body,
      {},
      options,
    );
  }
  /** Update a template */
  updateTemplate(
    template_id: string,
    body: UpdateTemplateBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateTemplateResponse>> {
    return this.transport.json<UpdateTemplateResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.updateTemplate,
      { template_id },
      body,
      {},
      options,
    );
  }
  /** Verify BIMI logo (+ optional VMC) */
  verifyBIMI(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<VerifyBIMIResponse>> {
    return this.transport.json<VerifyBIMIResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.verifyBIMI,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Trigger DNS verification */
  verifyIdentity(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<VerifyIdentityResponse>> {
    return this.transport.json<VerifyIdentityResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.verifyIdentity,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
  /** Verify custom MAIL FROM domain MX */
  verifyMailFromDomain(
    identity_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<VerifyMailFromDomainResponse>> {
    return this.transport.json<VerifyMailFromDomainResponse>(
      "email",
      "https://email.{region}.basaltic.sh",
      operations.verifyMailFromDomain,
      { identity_id },
      undefined,
      {},
      options,
    );
  }
}
