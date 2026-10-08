// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type CreateCertificateBody = CertificateIssueRequestInput;
export type CreateCertificateResponse = CertificateResponse;
export type GetCertificateResponse = CertificateResponse;
export type GetCertificateMaterialResponse = MaterialResponse;
export type ListCertificatesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListCertificatesResponse = CertificateListResponse;
export type ListCertificatesItem = Certificate;
export type RevokeCertificateResponse = CertificateResponse;
export type CertificateIssueRequestInput = {
  name: string;
  domains: string[];
  key_algorithm?: CertificateKeyAlgorithmInput;
  source?: CertificateSourceInput;
  certificate_pem?: string;
  chain_pem?: string;
  private_key_pem?: string;
  tags?: TagsInput;
};
export type CertificateKeyAlgorithmInput =
  "ecdsa-p256" | "ecdsa-p384" | "rsa-2048" | "rsa-4096";
export type CertificateSourceInput = "acme" | "uploaded";
export type TagsInput = { [key: string]: string };
export type CertificateResponse = { certificate?: Certificate };
export type Certificate = {
  id?: string;
  crn?: string;
  name?: string;
  domains?: string[];
  status?: CertificateStatus;
  source?: CertificateSource;
  key_algorithm?: CertificateKeyAlgorithm;
  challenges?: CertificateChallenge[];
  certificate_pem?: string;
  chain_pem?: string;
  fingerprint?: string;
  issued_at?: string;
  expires_at?: string;
  faults: Fault[];
  tags?: Tags;
};
export type CertificateStatus =
  "pending_dns" | "pending" | "active" | "error" | "expired" | "revoked";
export type CertificateSource = "acme" | "uploaded";
export type CertificateKeyAlgorithm =
  "ecdsa-p256" | "ecdsa-p384" | "rsa-2048" | "rsa-4096";
export type CertificateChallenge = {
  domain?: string;
  cname_record_name?: string;
  expected_cname?: string;
  our_dns?: boolean;
  verified?: boolean;
  verified_at?: string;
  faults: Fault[];
};
export type Fault = {
  code: string;
  severity: "error" | "warning";
  message: string;
  details: { [key: string]: unknown } | null;
  first_at: string;
  last_at: string;
  occurrences: number;
};
export type Tags = { [key: string]: string };
export type MaterialResponse = { material?: Material };
export type Material = {
  certificate_pem?: string;
  chain_pem?: string;
  private_key_pem?: string;
  fingerprint?: string;
};
export type CertificateListResponse = {
  certificates?: Certificate[];
  meta?: PaginationMeta;
};
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
const operations = {
  createCertificate: {
    id: "createCertificate",
    method: "POST",
    path: "/v1/certificates",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteCertificate: {
    id: "deleteCertificate",
    method: "DELETE",
    path: "/v1/certificates/{certificate_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getCertificate: {
    id: "getCertificate",
    method: "GET",
    path: "/v1/certificates/{certificate_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getCertificateMaterial: {
    id: "getCertificateMaterial",
    method: "GET",
    path: "/v1/certificates/{certificate_id}/material",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listCertificates: {
    id: "listCertificates",
    method: "GET",
    path: "/v1/certificates",
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
    itemsKey: "certificates",
  },
  revokeCertificate: {
    id: "revokeCertificate",
    method: "POST",
    path: "/v1/certificates/{certificate_id}/revoke",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class CertificateService {
  constructor(private readonly transport: Transport) {}
  /** Create certificate */
  createCertificate(
    body: CreateCertificateBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateCertificateResponse>> {
    return this.transport.json<CreateCertificateResponse>(
      "certificate",
      "https://certificate.{region}.basaltic.sh",
      operations.createCertificate,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete certificate */
  deleteCertificate(
    certificate_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "certificate",
      "https://certificate.{region}.basaltic.sh",
      operations.deleteCertificate,
      { certificate_id },
      undefined,
      {},
      options,
    );
  }
  /** Get certificate */
  getCertificate(
    certificate_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetCertificateResponse>> {
    return this.transport.json<GetCertificateResponse>(
      "certificate",
      "https://certificate.{region}.basaltic.sh",
      operations.getCertificate,
      { certificate_id },
      undefined,
      {},
      options,
    );
  }
  getCertificateByReference(
    reference: string,
    scope: Omit<ListCertificatesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Certificate>> {
    return resolveReference<Certificate>(
      reference,
      (id) => this.getCertificate(id, options),
      (filter) =>
        this.listCertificates(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "certificate",
    );
  }
  /** Fetch certificate material (leaf, chain, private key) */
  getCertificateMaterial(
    certificate_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetCertificateMaterialResponse>> {
    return this.transport.json<GetCertificateMaterialResponse>(
      "certificate",
      "https://certificate.{region}.basaltic.sh",
      operations.getCertificateMaterial,
      { certificate_id },
      undefined,
      {},
      options,
    );
  }
  /** List certificates */
  listCertificates(
    query: ListCertificatesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListCertificatesResponse, ListCertificatesItem>> {
    return this.transport.page<ListCertificatesResponse, ListCertificatesItem>(
      "certificate",
      "https://certificate.{region}.basaltic.sh",
      operations.listCertificates,
      {},
      undefined,
      query,
      options,
    );
  }
  listCertificatesAll(
    query: ListCertificatesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListCertificatesItem> {
    return iteratePages(
      (marker) => this.listCertificates({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Revoke certificate */
  revokeCertificate(
    certificate_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<RevokeCertificateResponse>> {
    return this.transport.json<RevokeCertificateResponse>(
      "certificate",
      "https://certificate.{region}.basaltic.sh",
      operations.revokeCertificate,
      { certificate_id },
      undefined,
      {},
      options,
    );
  }
}
