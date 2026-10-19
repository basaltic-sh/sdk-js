// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages } from "../response.js";
export type CreateTopicBody = CreateTopicRequestInput;
export type CreateTopicResponse = TopicResponse;
export type DescribeMessageResponse = MessageResponse;
export type DescribeSubscriptionResponse = SubscriptionResponse;
export type DescribeTopicResponse = TopicResponse;
export type GetSubscriptionSigningSecretResponse = SigningSecretResponse;
export type GetTopicPolicyResponse = TopicPolicyResponse;
export type ListDeliveriesQuery = {
  crn?: string;
  message?: string;
  subscription?: string;
  status?: "pending" | "delivered" | "failed";
  marker?: string;
  limit?: number;
};
export type ListDeliveriesResponse = DeliveryListResponse;
export type ListDeliveriesItem = Delivery;
export type ListMessagesQuery = {
  crn?: string;
  fanout_state?: "pending" | "complete";
  marker?: string;
  limit?: number;
};
export type ListMessagesResponse = MessageListResponse;
export type ListMessagesItem = Message;
export type ListSubscriptionsQuery = {
  crn?: string;
  status?: "pending_confirmation" | "confirmed";
  marker?: string;
  limit?: number;
};
export type ListSubscriptionsResponse = SubscriptionListResponse;
export type ListSubscriptionsItem = Subscription;
export type ListTopicsQuery = {
  name?: string;
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListTopicsResponse = TopicListResponse;
export type ListTopicsItem = Topic;
export type PublishBody = PublishRequestInput;
export type PublishResponse = PublishResponse2;
export type PublishBatchBody = PublishBatchRequestInput;
export type PublishBatchResponse = PublishBatchResponse2;
export type PutTopicPolicyBody = PutTopicPolicyRequestInput;
export type PutTopicPolicyResponse = TopicPolicyResponse;
export type ResendConfirmationResponse = SubscriptionResponse;
export type RotateSubscriptionSigningSecretResponse = SigningSecretResponse;
export type SubscribeBody = SubscribeRequestInput;
export type SubscribeResponse = SubscribeResponse2;
export type UpdateSubscriptionBody = UpdateSubscriptionRequestInput;
export type UpdateSubscriptionResponse = SubscriptionResponse;
export type UpdateTopicBody = UpdateTopicRequestInput;
export type UpdateTopicResponse = TopicResponse;
export type CreateTopicRequestInput = {
  name: string;
  display_name?: string;
  delivery_policy?: DeliveryPolicyInput;
  tags?: TagsInput;
};
export type DeliveryPolicyInput = {
  max_attempts?: number;
  min_delay_seconds?: number;
  max_delay_seconds?: number;
  timeout_seconds?: number;
};
export type TagsInput = { [key: string]: string };
export type TopicResponse = { topic: Topic };
export type Topic = {
  id: string;
  crn: string;
  name: string;
  display_name?: string;
  delivery_policy?: DeliveryPolicy;
  tags?: Tags;
  created_at: string;
  updated_at: string;
};
export type DeliveryPolicy = {
  max_attempts?: number;
  min_delay_seconds?: number;
  max_delay_seconds?: number;
  timeout_seconds?: number;
};
export type Tags = { [key: string]: string };
export type MessageResponse = { message: Message };
export type Message = {
  crn: string;
  id: string;
  subject?: string;
  message_structure?: "" | "json";
  attributes?: MessageAttributes;
  fanout_state: "pending" | "complete";
  delivery_count: number;
  published_at: string;
  fanned_out_at?: string | null;
};
export type MessageAttributes = {
  [key: string]: { type: "String" | "Number"; value: string };
};
export type SubscriptionResponse = { subscription: Subscription };
export type Subscription = {
  id: string;
  crn: string;
  protocol: "email" | "https" | "http" | "queue";
  endpoint: string;
  status: "pending_confirmation" | "confirmed";
  raw_message_delivery: boolean;
  filter_policy?: FilterPolicy;
  delivery_policy?: DeliveryPolicy;
  redrive_policy?: RedrivePolicy;
  confirmation_expires_at?: string | null;
  confirmed_at?: string | null;
  tags?: Tags;
  created_at: string;
  updated_at: string;
};
export type FilterPolicy = { [key: string]: unknown[] };
export type RedrivePolicy = { dead_letter_queue: ResourceRef };
export type ResourceRef = { id: string; crn: string; name?: string };
export type SigningSecretResponse = {
  subscription: ResourceRef;
  signing_secret: string;
};
export type TopicPolicyResponse = { document: TopicPolicy };
export type TopicPolicy = { [key: string]: unknown };
export type DeliveryListResponse = {
  deliveries: Delivery[];
  meta?: PaginationMeta;
};
export type Delivery = {
  crn: string;
  id: string;
  message: ResourceRef;
  subscription: ResourceRef;
  protocol: "email" | "https" | "http" | "queue";
  endpoint: string;
  status: "pending" | "delivered" | "failed";
  attempts: number;
  last_status_code?: number | null;
  last_error?: string;
  created_at: string;
  last_attempt_at?: string | null;
  completed_at?: string | null;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type MessageListResponse = { messages: Message[]; meta: PaginationMeta };
export type SubscriptionListResponse = {
  subscriptions: Subscription[];
  meta?: PaginationMeta;
};
export type TopicListResponse = { topics: Topic[]; meta?: PaginationMeta };
export type PublishRequestInput = {
  subject?: string;
  message: string;
  message_structure?: "" | "json";
  attributes?: MessageAttributesInput;
};
export type MessageAttributesInput = {
  [key: string]: { type: "String" | "Number"; value: string };
};
export type PublishResponse2 = { message_id: string };
export type PublishBatchRequestInput = {
  entries: ({ id: string } & PublishRequestInput)[];
};
export type PublishBatchResponse2 = {
  successful?: { id: string; message_id: string }[];
  failed?: { id: string; code: string; message: string }[];
};
export type PutTopicPolicyRequestInput = { document: TopicPolicyInput };
export type TopicPolicyInput = { [key: string]: unknown };
export type SubscribeRequestInput = {
  protocol: "email" | "https" | "http" | "queue";
  endpoint: string;
  raw_message_delivery?: boolean;
  filter_policy?: FilterPolicyInput;
  delivery_policy?: DeliveryPolicyInput;
  redrive_policy?: RedrivePolicyInputInput;
  tags?: TagsInput;
};
export type FilterPolicyInput = { [key: string]: unknown[] };
export type RedrivePolicyInputInput = { dead_letter_queue: string };
export type SubscribeResponse2 = {
  subscription: Subscription;
  signing_secret?: string;
};
export type UpdateSubscriptionRequestInput = {
  raw_message_delivery?: boolean;
  filter_policy?: FilterPolicyInput;
  delivery_policy?: DeliveryPolicyInput;
  redrive_policy?: RedrivePolicyInputInput;
  tags?: TagsInput;
};
export type UpdateTopicRequestInput = {
  display_name?: string;
  delivery_policy?: DeliveryPolicyInput;
  tags?: TagsInput;
};
const operations = {
  createTopic: {
    id: "createTopic",
    method: "POST",
    path: "/v1/topics",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteTopic: {
    id: "deleteTopic",
    method: "DELETE",
    path: "/v1/topics/{topic_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteTopicPolicy: {
    id: "deleteTopicPolicy",
    method: "DELETE",
    path: "/v1/topics/{topic_id}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeMessage: {
    id: "describeMessage",
    method: "GET",
    path: "/v1/topics/{topic_id}/messages/{message_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeSubscription: {
    id: "describeSubscription",
    method: "GET",
    path: "/v1/topics/{topic_id}/subscriptions/{subscription_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeTopic: {
    id: "describeTopic",
    method: "GET",
    path: "/v1/topics/{topic_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getSubscriptionSigningSecret: {
    id: "getSubscriptionSigningSecret",
    method: "GET",
    path: "/v1/topics/{topic_id}/subscriptions/{subscription_id}/signing-secret",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getTopicPolicy: {
    id: "getTopicPolicy",
    method: "GET",
    path: "/v1/topics/{topic_id}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listDeliveries: {
    id: "listDeliveries",
    method: "GET",
    path: "/v1/topics/{topic_id}/deliveries",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      message: { style: "form", explode: true },
      subscription: { style: "form", explode: true },
      status: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "deliveries",
  },
  listMessages: {
    id: "listMessages",
    method: "GET",
    path: "/v1/topics/{topic_id}/messages",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      fanout_state: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "messages",
  },
  listSubscriptions: {
    id: "listSubscriptions",
    method: "GET",
    path: "/v1/topics/{topic_id}/subscriptions",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      status: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "subscriptions",
  },
  listTopics: {
    id: "listTopics",
    method: "GET",
    path: "/v1/topics",
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
    itemsKey: "topics",
  },
  publish: {
    id: "publish",
    method: "POST",
    path: "/v1/topics/{topic_id}/publish",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  publishBatch: {
    id: "publishBatch",
    method: "POST",
    path: "/v1/topics/{topic_id}/publish-batch",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  putTopicPolicy: {
    id: "putTopicPolicy",
    method: "PUT",
    path: "/v1/topics/{topic_id}/policy",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  resendConfirmation: {
    id: "resendConfirmation",
    method: "POST",
    path: "/v1/topics/{topic_id}/subscriptions/{subscription_id}/resend-confirmation",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  rotateSubscriptionSigningSecret: {
    id: "rotateSubscriptionSigningSecret",
    method: "POST",
    path: "/v1/topics/{topic_id}/subscriptions/{subscription_id}/signing-secret/rotate",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  subscribe: {
    id: "subscribe",
    method: "POST",
    path: "/v1/topics/{topic_id}/subscriptions",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  unsubscribe: {
    id: "unsubscribe",
    method: "DELETE",
    path: "/v1/topics/{topic_id}/subscriptions/{subscription_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  updateSubscription: {
    id: "updateSubscription",
    method: "PATCH",
    path: "/v1/topics/{topic_id}/subscriptions/{subscription_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateTopic: {
    id: "updateTopic",
    method: "PATCH",
    path: "/v1/topics/{topic_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class NotificationsService {
  constructor(private readonly transport: Transport) {}
  /** Create a topic */
  createTopic(
    body: CreateTopicBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateTopicResponse>> {
    return this.transport.json<CreateTopicResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.createTopic,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete a topic */
  deleteTopic(topic_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.deleteTopic,
      { topic_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete the topic's resource policy */
  deleteTopicPolicy(
    topic_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.deleteTopicPolicy,
      { topic_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a published notification */
  describeMessage(
    topic_id: string,
    message_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeMessageResponse>> {
    return this.transport.json<DescribeMessageResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.describeMessage,
      { topic_id, message_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a subscription */
  describeSubscription(
    topic_id: string,
    subscription_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeSubscriptionResponse>> {
    return this.transport.json<DescribeSubscriptionResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.describeSubscription,
      { topic_id, subscription_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a topic */
  describeTopic(
    topic_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeTopicResponse>> {
    return this.transport.json<DescribeTopicResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.describeTopic,
      { topic_id },
      undefined,
      {},
      options,
    );
  }
  /** Read the webhook signing secret */
  getSubscriptionSigningSecret(
    topic_id: string,
    subscription_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetSubscriptionSigningSecretResponse>> {
    return this.transport.json<GetSubscriptionSigningSecretResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.getSubscriptionSigningSecret,
      { topic_id, subscription_id },
      undefined,
      {},
      options,
    );
  }
  /** Read the topic's resource policy */
  getTopicPolicy(
    topic_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetTopicPolicyResponse>> {
    return this.transport.json<GetTopicPolicyResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.getTopicPolicy,
      { topic_id },
      undefined,
      {},
      options,
    );
  }
  /** List delivery records */
  listDeliveries(
    topic_id: string,
    query: ListDeliveriesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListDeliveriesResponse, ListDeliveriesItem>> {
    return this.transport.page<ListDeliveriesResponse, ListDeliveriesItem>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.listDeliveries,
      { topic_id },
      undefined,
      query,
      options,
    );
  }
  listDeliveriesAll(
    topic_id: string,
    query: ListDeliveriesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListDeliveriesItem> {
    return iteratePages(
      (marker) => this.listDeliveries(topic_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List messages */
  listMessages(
    topic_id: string,
    query: ListMessagesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListMessagesResponse, ListMessagesItem>> {
    return this.transport.page<ListMessagesResponse, ListMessagesItem>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.listMessages,
      { topic_id },
      undefined,
      query,
      options,
    );
  }
  listMessagesAll(
    topic_id: string,
    query: ListMessagesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListMessagesItem> {
    return iteratePages(
      (marker) => this.listMessages(topic_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List subscriptions */
  listSubscriptions(
    topic_id: string,
    query: ListSubscriptionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListSubscriptionsResponse, ListSubscriptionsItem>> {
    return this.transport.page<
      ListSubscriptionsResponse,
      ListSubscriptionsItem
    >(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.listSubscriptions,
      { topic_id },
      undefined,
      query,
      options,
    );
  }
  listSubscriptionsAll(
    topic_id: string,
    query: ListSubscriptionsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListSubscriptionsItem> {
    return iteratePages(
      (marker) =>
        this.listSubscriptions(topic_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List topics */
  listTopics(
    query: ListTopicsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListTopicsResponse, ListTopicsItem>> {
    return this.transport.page<ListTopicsResponse, ListTopicsItem>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.listTopics,
      {},
      undefined,
      query,
      options,
    );
  }
  listTopicsAll(
    query: ListTopicsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListTopicsItem> {
    return iteratePages(
      (marker) => this.listTopics({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Publish a notification */
  publish(
    topic_id: string,
    body: PublishBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PublishResponse>> {
    return this.transport.json<PublishResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.publish,
      { topic_id },
      body,
      {},
      options,
    );
  }
  /** Publish up to 10 notifications */
  publishBatch(
    topic_id: string,
    body: PublishBatchBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PublishBatchResponse>> {
    return this.transport.json<PublishBatchResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.publishBatch,
      { topic_id },
      body,
      {},
      options,
    );
  }
  /** Set the topic's resource policy */
  putTopicPolicy(
    topic_id: string,
    body: PutTopicPolicyBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PutTopicPolicyResponse>> {
    return this.transport.json<PutTopicPolicyResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.putTopicPolicy,
      { topic_id },
      body,
      {},
      options,
    );
  }
  /** Re-send the confirmation handshake */
  resendConfirmation(
    topic_id: string,
    subscription_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ResendConfirmationResponse>> {
    return this.transport.json<ResendConfirmationResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.resendConfirmation,
      { topic_id, subscription_id },
      undefined,
      {},
      options,
    );
  }
  /** Rotate the webhook signing secret */
  rotateSubscriptionSigningSecret(
    topic_id: string,
    subscription_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RotateSubscriptionSigningSecretResponse>> {
    return this.transport.json<RotateSubscriptionSigningSecretResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.rotateSubscriptionSigningSecret,
      { topic_id, subscription_id },
      undefined,
      {},
      options,
    );
  }
  /** Subscribe an endpoint to a topic */
  subscribe(
    topic_id: string,
    body: SubscribeBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SubscribeResponse>> {
    return this.transport.json<SubscribeResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.subscribe,
      { topic_id },
      body,
      {},
      options,
    );
  }
  /** Unsubscribe */
  unsubscribe(
    topic_id: string,
    subscription_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.unsubscribe,
      { topic_id, subscription_id },
      undefined,
      {},
      options,
    );
  }
  /** Update mutable subscription settings */
  updateSubscription(
    topic_id: string,
    subscription_id: string,
    body: UpdateSubscriptionBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateSubscriptionResponse>> {
    return this.transport.json<UpdateSubscriptionResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.updateSubscription,
      { topic_id, subscription_id },
      body,
      {},
      options,
    );
  }
  /** Update mutable topic metadata */
  updateTopic(
    topic_id: string,
    body: UpdateTopicBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateTopicResponse>> {
    return this.transport.json<UpdateTopicResponse>(
      "notifications",
      "https://notifications.{region}.basaltic.sh",
      operations.updateTopic,
      { topic_id },
      body,
      {},
      options,
    );
  }
}
