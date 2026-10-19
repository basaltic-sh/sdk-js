// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages } from "../response.js";
export type ChangeMessageVisibilityBody = ChangeVisibilityRequestInput;
export type ChangeMessageVisibilityBatchBody =
  ChangeVisibilityBatchRequestInput;
export type ChangeMessageVisibilityBatchResponse = BatchResponse;
export type CreateQueueBody = CreateQueueRequestInput;
export type CreateQueueResponse = QueueResponse;
export type DeleteMessageQuery = { receipt_handle: string };
export type DeleteMessageBatchBody = DeleteMessageBatchRequestInput;
export type DeleteMessageBatchResponse = BatchResponse;
export type DescribeQueueResponse = QueueResponse;
export type ListQueuesQuery = {
  name?: string;
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListQueuesResponse = QueueListResponse;
export type ListQueuesItem = Queue;
export type PeekMessagesQuery = {
  crn?: string;
  visibility?: "available" | "in_flight" | "delayed";
  marker?: string;
  limit?: number;
};
export type PeekMessagesResponse = PeekResponse;
export type PurgeQueueResponse = PurgeQueueResponse2;
export type ReceiveMessagesBody = ReceiveRequestInput;
export type ReceiveMessagesResponse = ReceiveResponse;
export type SendMessageBody = SendMessageRequestInput;
export type SendMessageResponse = SendMessageResponse2;
export type SendMessageBatchBody = SendMessageBatchRequestInput;
export type SendMessageBatchResponse = BatchResponse;
export type UpdateQueueBody = UpdateQueueRequestInput;
export type UpdateQueueResponse = QueueResponse;
export type ChangeVisibilityRequestInput = {
  receipt_handle: string;
  visibility_timeout_seconds: number;
};
export type ChangeVisibilityBatchRequestInput = {
  entries: {
    id: string;
    receipt_handle: string;
    visibility_timeout_seconds: number;
  }[];
};
export type BatchResponse = { results: BatchResult[] };
export type BatchResult = {
  id: string;
  message_id?: string;
  duplicate?: boolean;
  error?: string;
  message?: string;
};
export type CreateQueueRequestInput = {
  name: string;
  visibility_timeout_seconds?: number;
  message_retention_seconds?: number;
  max_message_bytes?: number;
  delay_seconds?: number;
  receive_wait_time_seconds?: number;
  kms_data_key_reuse_period_seconds?: number;
  content_based_deduplication?: boolean;
  kms_key?: string;
  redrive_policy?: RedrivePolicyInputInput;
  tags?: TagsInput;
};
export type RedrivePolicyInputInput = {
  dead_letter_queue: string;
  max_receive_count: number;
};
export type TagsInput = { [key: string]: string };
export type QueueResponse = { queue: Queue };
export type Queue = {
  id: string;
  crn: string;
  name: string;
  kind: "standard" | "fifo";
  attributes: QueueAttributes;
  redrive_policy?: RedrivePolicy;
  content_based_deduplication?: boolean;
  kms_key?: ResourceRef;
  tags?: Tags;
  depth?: QueueDepth;
  created_at: string;
  updated_at: string;
};
export type QueueAttributes = {
  visibility_timeout_seconds?: number;
  message_retention_seconds?: number;
  max_message_bytes?: number;
  delay_seconds?: number;
  receive_wait_time_seconds?: number;
  kms_data_key_reuse_period_seconds?: number;
};
export type RedrivePolicy = {
  dead_letter_queue: ResourceRef;
  max_receive_count: number;
};
export type ResourceRef = { id: string; crn: string; name?: string };
export type Tags = { [key: string]: string };
export type QueueDepth = {
  approximate_available?: number;
  approximate_in_flight?: number;
  approximate_delayed?: number;
  counts_capped?: boolean;
};
export type DeleteMessageBatchRequestInput = {
  entries: { id: string; receipt_handle: string }[];
};
export type QueueListResponse = { queues: Queue[]; meta?: PaginationMeta };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type PeekResponse = { messages: Message[]; meta?: PaginationMeta };
export type Message = {
  id: string;
  crn: string;
  queue_id: string;
  body?: string;
  attributes?: MessageAttributes;
  visibility: "available" | "in_flight" | "delayed";
  receive_count: number;
  body_bytes?: number;
  message_group_id?: string;
  enqueued_at: string;
  visible_at: string;
  expires_at: string;
  first_received_at?: string | null;
};
export type MessageAttributes = {
  [key: string]: { type: "String" | "Number" | "Binary"; value: string };
};
export type PurgeQueueResponse2 = { messages_deleted: number };
export type ReceiveRequestInput = {
  max_messages?: number;
  visibility_timeout_seconds?: number;
  wait_time_seconds?: number;
};
export type ReceiveResponse = { messages: ReceivedMessage[] };
export type ReceivedMessage = {
  id: string;
  receipt_handle: string;
  body: string;
  attributes?: MessageAttributes;
  receive_count: number;
  message_group_id?: string;
  enqueued_at: string;
  visible_at: string;
};
export type SendMessageRequestInput = {
  body: string;
  attributes?: MessageAttributesInput;
  delay_seconds?: number;
  message_group_id?: string;
  message_deduplication_id?: string;
};
export type MessageAttributesInput = {
  [key: string]: { type: "String" | "Number" | "Binary"; value: string };
};
export type SendMessageResponse2 = { result: SendResult };
export type SendResult = { message_id: string; duplicate?: boolean };
export type SendMessageBatchRequestInput = {
  entries: ({ id: string } & SendMessageRequestInput)[];
};
export type UpdateQueueRequestInput = {
  visibility_timeout_seconds?: number;
  message_retention_seconds?: number;
  max_message_bytes?: number;
  delay_seconds?: number;
  receive_wait_time_seconds?: number;
  kms_data_key_reuse_period_seconds?: number;
  redrive_policy?: {
    dead_letter_queue: string;
    max_receive_count: number;
  } | null;
  kms_key?: string | null;
  tags?: TagsInput;
};
const operations = {
  changeMessageVisibility: {
    id: "changeMessageVisibility",
    method: "POST",
    path: "/v1/queues/{queue_id}/messages/visibility",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  changeMessageVisibilityBatch: {
    id: "changeMessageVisibilityBatch",
    method: "POST",
    path: "/v1/queues/{queue_id}/messages/visibility-batch",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createQueue: {
    id: "createQueue",
    method: "POST",
    path: "/v1/queues",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteMessage: {
    id: "deleteMessage",
    method: "DELETE",
    path: "/v1/queues/{queue_id}/messages",
    authenticated: true,
    requiredQuery: ["receipt_handle"],
    requiredHeaders: [],
    queryEncoding: { receipt_handle: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteMessageBatch: {
    id: "deleteMessageBatch",
    method: "POST",
    path: "/v1/queues/{queue_id}/messages/delete-batch",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteQueue: {
    id: "deleteQueue",
    method: "DELETE",
    path: "/v1/queues/{queue_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  describeQueue: {
    id: "describeQueue",
    method: "GET",
    path: "/v1/queues/{queue_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listQueues: {
    id: "listQueues",
    method: "GET",
    path: "/v1/queues",
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
    itemsKey: "queues",
  },
  peekMessages: {
    id: "peekMessages",
    method: "GET",
    path: "/v1/queues/{queue_id}/messages",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      crn: { style: "form", explode: true },
      visibility: { style: "form", explode: true },
      marker: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  purgeQueue: {
    id: "purgeQueue",
    method: "POST",
    path: "/v1/queues/{queue_id}/purge",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  receiveMessages: {
    id: "receiveMessages",
    method: "POST",
    path: "/v1/queues/{queue_id}/messages/receive",
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
    path: "/v1/queues/{queue_id}/messages",
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
    path: "/v1/queues/{queue_id}/messages/batch",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateQueue: {
    id: "updateQueue",
    method: "PATCH",
    path: "/v1/queues/{queue_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class QueueService {
  constructor(private readonly transport: Transport) {}
  /** Extend or shorten a lease */
  changeMessageVisibility(
    queue_id: string,
    body: ChangeMessageVisibilityBody,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.changeMessageVisibility,
      { queue_id },
      body,
      {},
      options,
    );
  }
  /** Extend or shorten up to ten leases */
  changeMessageVisibilityBatch(
    queue_id: string,
    body: ChangeMessageVisibilityBatchBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ChangeMessageVisibilityBatchResponse>> {
    return this.transport.json<ChangeMessageVisibilityBatchResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.changeMessageVisibilityBatch,
      { queue_id },
      body,
      {},
      options,
    );
  }
  /** Create a queue */
  createQueue(
    body: CreateQueueBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateQueueResponse>> {
    return this.transport.json<CreateQueueResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.createQueue,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete a leased message */
  deleteMessage(
    queue_id: string,
    query: DeleteMessageQuery,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.deleteMessage,
      { queue_id },
      undefined,
      query,
      options,
    );
  }
  /** Delete up to ten leased messages */
  deleteMessageBatch(
    queue_id: string,
    body: DeleteMessageBatchBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DeleteMessageBatchResponse>> {
    return this.transport.json<DeleteMessageBatchResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.deleteMessageBatch,
      { queue_id },
      body,
      {},
      options,
    );
  }
  /** Delete a queue */
  deleteQueue(queue_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.deleteQueue,
      { queue_id },
      undefined,
      {},
      options,
    );
  }
  /** Describe a queue */
  describeQueue(
    queue_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<DescribeQueueResponse>> {
    return this.transport.json<DescribeQueueResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.describeQueue,
      { queue_id },
      undefined,
      {},
      options,
    );
  }
  /** List queues */
  listQueues(
    query: ListQueuesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListQueuesResponse, ListQueuesItem>> {
    return this.transport.page<ListQueuesResponse, ListQueuesItem>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.listQueues,
      {},
      undefined,
      query,
      options,
    );
  }
  listQueuesAll(
    query: ListQueuesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListQueuesItem> {
    return iteratePages(
      (marker) => this.listQueues({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Peek at a queue's messages */
  peekMessages(
    queue_id: string,
    query: PeekMessagesQuery = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<PeekMessagesResponse>> {
    return this.transport.json<PeekMessagesResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.peekMessages,
      { queue_id },
      undefined,
      query,
      options,
    );
  }
  /** Delete every message on a queue */
  purgeQueue(
    queue_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<PurgeQueueResponse>> {
    return this.transport.json<PurgeQueueResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.purgeQueue,
      { queue_id },
      undefined,
      {},
      options,
    );
  }
  /** Lease messages */
  receiveMessages(
    queue_id: string,
    body: ReceiveMessagesBody | undefined = undefined,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ReceiveMessagesResponse>> {
    return this.transport.json<ReceiveMessagesResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.receiveMessages,
      { queue_id },
      body,
      {},
      options,
    );
  }
  /** Send a message */
  sendMessage(
    queue_id: string,
    body: SendMessageBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SendMessageResponse>> {
    return this.transport.json<SendMessageResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.sendMessage,
      { queue_id },
      body,
      {},
      options,
    );
  }
  /** Send up to ten messages */
  sendMessageBatch(
    queue_id: string,
    body: SendMessageBatchBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<SendMessageBatchResponse>> {
    return this.transport.json<SendMessageBatchResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.sendMessageBatch,
      { queue_id },
      body,
      {},
      options,
    );
  }
  /** Update queue attributes */
  updateQueue(
    queue_id: string,
    body: UpdateQueueBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateQueueResponse>> {
    return this.transport.json<UpdateQueueResponse>(
      "queue",
      "https://queue.{region}.basaltic.sh",
      operations.updateQueue,
      { queue_id },
      body,
      {},
      options,
    );
  }
}
