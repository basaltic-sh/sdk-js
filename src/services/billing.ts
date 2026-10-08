// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type GetBillingProfileResponse = BillingProfile;
export type GetCurrentUsageResponse = CurrentUsage;
export type GetInvoiceResponse = Invoice;
export type ListCreditsQuery = {
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListCreditsResponse = CreditListResponse;
export type ListCreditsItem = Credit;
export type ListFiscalInvoicesQuery = { invoice?: string };
export type ListFiscalInvoicesResponse = { fiscal_documents: FiscalInvoice[] };
export type ListFiscalInvoicesItem = FiscalInvoice;
export type ListInvoicesQuery = {
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListInvoicesResponse = InvoiceListResponse;
export type ListInvoicesItem = Invoice;
export type ListPaymentsQuery = {
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListPaymentsResponse = PaymentListResponse;
export type ListPaymentsItem = Payment;
export type ListPricesQuery = {
  service?: string;
  resource_type?: string;
  sku?: string;
  family?: string;
  at?: string;
};
export type ListPricesResponse = PriceListResponse;
export type ListPricesItem = Price;
export type ListTransactionsQuery = {
  crn?: string;
  marker?: string;
  limit?: number;
};
export type ListTransactionsResponse = TransactionListResponse;
export type ListTransactionsItem = Transaction;
export type UpdateBillingProfileBody = BillingProfileInput;
export type UpdateBillingProfileResponse = BillingProfile;
export type BillingProfile = {
  customer_type?: "" | "individual" | "company";
  company_name?: string;
  country?: string;
  tax_id?: string;
  foreign_tax_id?: string;
  no_tax_id_reason?: string;
  email?: string;
  phone?: string;
  street_name?: string;
  street_number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  municipality_code?: string;
  state?: string;
  postal_code?: string;
  ready?: boolean;
  missing_fields?: string[];
};
export type CurrentUsage = {
  amount: string;
  period_start: string;
  items: UsageLine[];
};
export type UsageLine = {
  sku: string;
  description: string;
  quantity: string;
  unit: string;
  amount: string;
};
export type Invoice = {
  crn: string;
  id: string;
  invoice_number: string;
  period_start: string;
  period_end: string;
  subtotal: string;
  credits_applied: string;
  total: string;
  currency: string;
  refunded_amount: string;
  disputed_amount: string;
  status: "open" | "paid" | "past_due" | "uncollectible" | "void";
  issued_at?: string | null;
  due_at?: string | null;
  paid_at?: string | null;
  created_at: string;
  pdf_url?: string;
  items?: InvoiceItem[];
};
export type InvoiceItem = {
  kind: "usage" | "credit";
  sku?: string | null;
  description: string;
  quantity: string;
  unit?: string | null;
  unit_price: string;
  amount: string;
};
export type CreditListResponse = { credits: Credit[]; meta: PaginationMeta };
export type Credit = {
  crn: string;
  id: string;
  source: "promo" | "coupon" | "adjustment" | "migration";
  description: string;
  amount: string;
  remaining: string;
  expires_at?: string | null;
  created_at: string;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type FiscalInvoice = {
  id: string;
  organization_id: string;
  payment_id: string;
  invoice_id?: string | null;
  amount: string;
  status:
    | "queued"
    | "waiting_details"
    | "retrying"
    | "rejected"
    | "issued"
    | "review_required";
  email_status: "pending" | "queued";
  last_error?: string;
  attempts: number;
  number?: string;
  verification_code?: string;
  url?: string;
  issued_at?: string;
  requires_review: boolean;
  created_at: string;
};
export type InvoiceListResponse = { invoices: Invoice[]; meta: PaginationMeta };
export type PaymentListResponse = { payments: Payment[]; meta: PaginationMeta };
export type Payment = {
  crn: string;
  id: string;
  invoice: Invoice | null;
  amount: string;
  refunded_amount: string;
  disputed_amount: string;
  retained_amount: string;
  status: "pending" | "processing" | "succeeded" | "failed" | "refunded";
  attempt: number;
  completed_at?: string | null;
  created_at: string;
};
export type PriceListResponse = { prices: Price[]; as_of: string };
export type Price = {
  sku: string;
  service: string;
  resource_type: string;
  name: string;
  description?: string | null;
  unit: string;
  unit_price: string;
  currency: string;
  metadata: { [key: string]: unknown };
};
export type TransactionListResponse = {
  transactions: Transaction[];
  meta: PaginationMeta;
};
export type Transaction = {
  crn: string;
  id: string;
  type:
    | "payment"
    | "refund"
    | "refund_reversal"
    | "dispute"
    | "dispute_reversal"
    | "adjustment"
    | "credit_grant"
    | "credit_applied";
  amount: string;
  description?: string | null;
  reference?: string | null;
  created_at: string;
};
export type BillingProfileInput = {
  customer_type?: "" | "individual" | "company";
  company_name?: string;
  country?: string;
  tax_id?: string;
  foreign_tax_id?: string;
  no_tax_id_reason?: string;
  email?: string;
  phone?: string;
  street_name?: string;
  street_number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  municipality_code?: string;
  state?: string;
  postal_code?: string;
};
const operations = {
  getBillingProfile: {
    id: "getBillingProfile",
    method: "GET",
    path: "/v1/profile",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getCurrentUsage: {
    id: "getCurrentUsage",
    method: "GET",
    path: "/v1/usage",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getFiscalInvoiceXml: {
    id: "getFiscalInvoiceXml",
    method: "GET",
    path: "/v1/fiscal-invoices/{document_id}/xml",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  getInvoice: {
    id: "getInvoice",
    method: "GET",
    path: "/v1/invoices/{invoice_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getInvoicePdf: {
    id: "getInvoicePdf",
    method: "GET",
    path: "/v1/invoices/{invoice_id}/pdf",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  listCredits: {
    id: "listCredits",
    method: "GET",
    path: "/v1/credits",
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
    itemsKey: "credits",
  },
  listFiscalInvoices: {
    id: "listFiscalInvoices",
    method: "GET",
    path: "/v1/fiscal-invoices",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: { invoice: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "fiscal_documents",
  },
  listInvoices: {
    id: "listInvoices",
    method: "GET",
    path: "/v1/invoices",
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
    itemsKey: "invoices",
  },
  listPayments: {
    id: "listPayments",
    method: "GET",
    path: "/v1/payments",
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
    itemsKey: "payments",
  },
  listPrices: {
    id: "listPrices",
    method: "GET",
    path: "/v1/prices",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      service: { style: "form", explode: true },
      resource_type: { style: "form", explode: true },
      sku: { style: "form", explode: true },
      family: { style: "form", explode: true },
      at: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "prices",
  },
  listTransactions: {
    id: "listTransactions",
    method: "GET",
    path: "/v1/transactions",
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
    itemsKey: "transactions",
  },
  updateBillingProfile: {
    id: "updateBillingProfile",
    method: "PUT",
    path: "/v1/profile",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class BillingService {
  constructor(private readonly transport: Transport) {}
  /** Read the organization billing profile */
  getBillingProfile(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetBillingProfileResponse>> {
    return this.transport.json<GetBillingProfileResponse>(
      "billing",
      "https://billing.basaltic.sh",
      operations.getBillingProfile,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Get month-to-date usage total */
  getCurrentUsage(
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetCurrentUsageResponse>> {
    return this.transport.json<GetCurrentUsageResponse>(
      "billing",
      "https://billing.basaltic.sh",
      operations.getCurrentUsage,
      {},
      undefined,
      {},
      options,
    );
  }
  /** Download issued NFS-e XML */
  getFiscalInvoiceXml(
    document_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "billing",
      "https://billing.basaltic.sh",
      operations.getFiscalInvoiceXml,
      { document_id },
      undefined,
      {},
      options,
    );
  }
  /** Get an invoice with its line items */
  getInvoice(
    invoice_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    return this.transport.json<GetInvoiceResponse>(
      "billing",
      "https://billing.basaltic.sh",
      operations.getInvoice,
      { invoice_id },
      undefined,
      {},
      options,
    );
  }
  getInvoiceByReference(
    reference: string,
    scope: Omit<ListInvoicesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetInvoiceResponse>> {
    return resolveReference<GetInvoiceResponse>(
      reference,
      (id) => this.getInvoice(id, options),
      (filter) =>
        this.listInvoices(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      false,
    );
  }
  /** Download an invoice as a PDF statement */
  getInvoicePdf(
    invoice_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "billing",
      "https://billing.basaltic.sh",
      operations.getInvoicePdf,
      { invoice_id },
      undefined,
      {},
      options,
    );
  }
  /** List credit grants */
  listCredits(
    query: ListCreditsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListCreditsResponse, ListCreditsItem>> {
    return this.transport.page<ListCreditsResponse, ListCreditsItem>(
      "billing",
      "https://billing.basaltic.sh",
      operations.listCredits,
      {},
      undefined,
      query,
      options,
    );
  }
  listCreditsAll(
    query: ListCreditsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListCreditsItem> {
    return iteratePages(
      (marker) => this.listCredits({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List fiscal invoice issuance and delivery status */
  listFiscalInvoices(
    query: ListFiscalInvoicesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListFiscalInvoicesResponse, ListFiscalInvoicesItem>> {
    return this.transport.page<
      ListFiscalInvoicesResponse,
      ListFiscalInvoicesItem
    >(
      "billing",
      "https://billing.basaltic.sh",
      operations.listFiscalInvoices,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List invoices */
  listInvoices(
    query: ListInvoicesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListInvoicesResponse, ListInvoicesItem>> {
    return this.transport.page<ListInvoicesResponse, ListInvoicesItem>(
      "billing",
      "https://billing.basaltic.sh",
      operations.listInvoices,
      {},
      undefined,
      query,
      options,
    );
  }
  listInvoicesAll(
    query: ListInvoicesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListInvoicesItem> {
    return iteratePages(
      (marker) => this.listInvoices({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List invoice payments */
  listPayments(
    query: ListPaymentsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPaymentsResponse, ListPaymentsItem>> {
    return this.transport.page<ListPaymentsResponse, ListPaymentsItem>(
      "billing",
      "https://billing.basaltic.sh",
      operations.listPayments,
      {},
      undefined,
      query,
      options,
    );
  }
  listPaymentsAll(
    query: ListPaymentsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListPaymentsItem> {
    return iteratePages(
      (marker) => this.listPayments({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List catalog prices */
  listPrices(
    query: ListPricesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListPricesResponse, ListPricesItem>> {
    return this.transport.page<ListPricesResponse, ListPricesItem>(
      "billing",
      "https://billing.basaltic.sh",
      operations.listPrices,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List ledger transactions */
  listTransactions(
    query: ListTransactionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListTransactionsResponse, ListTransactionsItem>> {
    return this.transport.page<ListTransactionsResponse, ListTransactionsItem>(
      "billing",
      "https://billing.basaltic.sh",
      operations.listTransactions,
      {},
      undefined,
      query,
      options,
    );
  }
  listTransactionsAll(
    query: ListTransactionsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListTransactionsItem> {
    return iteratePages(
      (marker) => this.listTransactions({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Save organization billing details */
  updateBillingProfile(
    body: UpdateBillingProfileBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateBillingProfileResponse>> {
    return this.transport.json<UpdateBillingProfileResponse>(
      "billing",
      "https://billing.basaltic.sh",
      operations.updateBillingProfile,
      {},
      body,
      {},
      options,
    );
  }
}
