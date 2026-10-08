// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { iteratePages, referenceScope, resolveReference } from "../response.js";
export type AssociateZoneVPCBody = VPCAssociationRequestInput;
export type AssociateZoneVPCResponse = VPCAssociationAccepted;
export type CreateRecordBody = RecordCreateRequestInput;
export type CreateRecordResponse = RecordResponse;
export type CreateZoneBody = ZoneCreateRequestInput;
export type CreateZoneResponse = ZoneResponse;
export type GetRecordResponse = RecordResponse;
export type GetZoneResponse = ZoneResponse;
export type GetZoneRecordImportResponse = ZoneRecordImportResponse;
export type ImportZoneFileBody = ZoneImportRequestInput;
export type ImportZoneFileResponse = ZoneImportResponse;
export type ListRecordsQuery = {
  type?: string;
  name?: string;
  crn?: string;
  include_managed?: boolean;
  limit?: number;
  marker?: string;
};
export type ListRecordsResponse = RecordListResponse;
export type ListRecordsItem = Record2;
export type ListZoneVPCAssociationsQuery = { name?: string; crn?: string };
export type ListZoneVPCAssociationsResponse = VPCAssociationsResponse;
export type ListZoneVPCAssociationsItem = string;
export type ListZonesQuery = {
  name?: string;
  crn?: string;
  limit?: number;
  marker?: string;
};
export type ListZonesResponse = ZoneListResponse;
export type ListZonesItem = Zone;
export type UpdateRecordBody = RecordUpdateRequestInput;
export type UpdateRecordResponse = RecordResponse;
export type UpdateZoneBody = ZoneUpdateRequestInput;
export type UpdateZoneResponse = ZoneResponse;
export type VerifyZoneOwnershipResponse = ZoneResponse;
export type VPCAssociationRequestInput = { vpc: string };
export type VPCAssociationAccepted = { zone_id: string; vpc_id: string };
export type RecordCreateRequestInput = {
  name: string;
  type: RecordTypeInput;
  ttl?: number;
  values: RecordValueInput[];
};
export type RecordTypeInput =
  | "A"
  | "AAAA"
  | "AFSDB"
  | "APL"
  | "CAA"
  | "CERT"
  | "CNAME"
  | "CSYNC"
  | "DHCID"
  | "DNAME"
  | "EUI48"
  | "EUI64"
  | "HINFO"
  | "HTTPS"
  | "IPSECKEY"
  | "KX"
  | "L32"
  | "L64"
  | "LOC"
  | "LP"
  | "MX"
  | "NAPTR"
  | "NID"
  | "NS"
  | "OPENPGPKEY"
  | "PTR"
  | "RKEY"
  | "RP"
  | "SMIMEA"
  | "SPF"
  | "SRV"
  | "SSHFP"
  | "SVCB"
  | "TLSA"
  | "TXT"
  | "URI";
export type RecordValueInput = { content: string; disabled?: boolean };
export type RecordResponse = { record?: Record2 };
export type Record2 = {
  id?: string;
  crn?: string;
  zone_id?: string;
  name?: string;
  type?: string;
  ttl?: number;
  managed?: boolean;
  values?: RecordValue[];
};
export type RecordValue = { content: string; disabled?: boolean };
export type ZoneCreateRequestInput = {
  name: string;
  description?: string;
  visibility?: "public" | "private";
  dnssec?: boolean;
  import_existing_records?: boolean;
  vpcs?: string[];
  tags?: TagsInput;
};
export type TagsInput = { [key: string]: string };
export type ZoneResponse = { zone?: Zone };
export type Zone = {
  id?: string;
  crn?: string;
  name?: string;
  description?: string;
  nameservers?: string[];
  soa?: SOA;
  visibility?: "public" | "private";
  dnssec?: ZoneDNSSEC;
  tags?: Tags;
  ownership?: ZoneOwnership;
};
export type SOA = {
  primary_ns?: string;
  admin_email?: string;
  refresh?: number;
  retry?: number;
  expire?: number;
  minimum?: number;
};
export type ZoneDNSSEC = {
  enabled: boolean;
  ksk_key_tag?: number;
  zsk_key_tag?: number;
  algorithm?: number;
  ds_records?: ZoneDSRecord[];
};
export type ZoneDSRecord = {
  key_tag: number;
  algorithm: number;
  digest_type: number;
  digest: string;
  rdata: string;
};
export type Tags = { [key: string]: string };
export type ZoneOwnership = {
  verified?: boolean;
  verified_at?: string | null;
  checked_at?: string;
  recheck_deadline?: string;
};
export type ZoneRecordImportResponse = { record_import?: ZoneRecordImport };
export type ZoneRecordImport = {
  state?: "pending" | "complete" | "failed";
  source?: "axfr" | "nsec-walk" | "query";
  complete?: boolean;
  found?: number;
  imported?: number;
  notes?: string[];
  error?: string;
  updated_at?: string;
};
export type ZoneImportRequestInput = { zone_file: string };
export type ZoneImportResponse = { import?: ZoneImportResult };
export type ZoneImportResult = {
  records_created?: number;
  records_replaced?: number;
  records_by_type?: { [key: string]: number };
  skipped?: ZoneImportSkipped[];
  warnings?: string[];
};
export type ZoneImportSkipped = {
  name?: string;
  type?: string;
  reason?: string;
};
export type RecordListResponse = { records?: Record2[]; meta?: PaginationMeta };
export type PaginationMeta = {
  total?: number;
  limit?: number;
  marker?: string;
  has_more?: boolean;
};
export type VPCAssociationsResponse = { vpc_ids: string[] };
export type ZoneListResponse = { zones?: Zone[]; meta?: PaginationMeta };
export type RecordUpdateRequestInput = {
  ttl?: number;
  values?: RecordValueInput[];
};
export type ZoneUpdateRequestInput = {
  description?: string;
  tags?: TagsInput & unknown;
};
const operations = {
  associateZoneVPC: {
    id: "associateZoneVPC",
    method: "POST",
    path: "/v1/zones/{zone_id}/vpc-associations",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createRecord: {
    id: "createRecord",
    method: "POST",
    path: "/v1/zones/{zone_id}/records",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  createZone: {
    id: "createZone",
    method: "POST",
    path: "/v1/zones",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  deleteRecord: {
    id: "deleteRecord",
    method: "DELETE",
    path: "/v1/zones/{zone_id}/records/{record_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteZone: {
    id: "deleteZone",
    method: "DELETE",
    path: "/v1/zones/{zone_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  deleteZoneRecordImport: {
    id: "deleteZoneRecordImport",
    method: "DELETE",
    path: "/v1/zones/{zone_id}/record-import",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  dissociateZoneVPC: {
    id: "dissociateZoneVPC",
    method: "DELETE",
    path: "/v1/zones/{zone_id}/vpc-associations/{vpc_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  exportZoneFile: {
    id: "exportZoneFile",
    method: "GET",
    path: "/v1/zones/{zone_id}/export",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "*/*",
  },
  getRecord: {
    id: "getRecord",
    method: "GET",
    path: "/v1/zones/{zone_id}/records/{record_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getZone: {
    id: "getZone",
    method: "GET",
    path: "/v1/zones/{zone_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getZoneRecordImport: {
    id: "getZoneRecordImport",
    method: "GET",
    path: "/v1/zones/{zone_id}/record-import",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  importZoneFile: {
    id: "importZoneFile",
    method: "POST",
    path: "/v1/zones/{zone_id}/import",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  listRecords: {
    id: "listRecords",
    method: "GET",
    path: "/v1/zones/{zone_id}/records",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      type: { style: "form", explode: true },
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
      include_managed: { style: "form", explode: true },
      limit: { style: "form", explode: true },
      marker: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "records",
  },
  listZoneVPCAssociations: {
    id: "listZoneVPCAssociations",
    method: "GET",
    path: "/v1/zones/{zone_id}/vpc-associations",
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
    itemsKey: "vpc_ids",
  },
  listZones: {
    id: "listZones",
    method: "GET",
    path: "/v1/zones",
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
    itemsKey: "zones",
  },
  updateRecord: {
    id: "updateRecord",
    method: "PATCH",
    path: "/v1/zones/{zone_id}/records/{record_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  updateZone: {
    id: "updateZone",
    method: "PATCH",
    path: "/v1/zones/{zone_id}",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: true,
    contentType: "application/json",
    accept: "application/json",
  },
  verifyZoneOwnership: {
    id: "verifyZoneOwnership",
    method: "POST",
    path: "/v1/zones/{zone_id}/verify-ownership",
    authenticated: true,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class DnsService {
  constructor(private readonly transport: Transport) {}
  /** Associate a VPC with a private zone */
  associateZoneVPC(
    zone_id: string,
    body: AssociateZoneVPCBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<AssociateZoneVPCResponse>> {
    return this.transport.json<AssociateZoneVPCResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.associateZoneVPC,
      { zone_id },
      body,
      {},
      options,
    );
  }
  /** Create record */
  createRecord(
    zone_id: string,
    body: CreateRecordBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateRecordResponse>> {
    return this.transport.json<CreateRecordResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.createRecord,
      { zone_id },
      body,
      {},
      options,
    );
  }
  /** Create zone */
  createZone(
    body: CreateZoneBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<CreateZoneResponse>> {
    return this.transport.json<CreateZoneResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.createZone,
      {},
      body,
      {},
      options,
    );
  }
  /** Delete record */
  deleteRecord(
    zone_id: string,
    record_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "dns",
      "https://dns.basaltic.sh",
      operations.deleteRecord,
      { zone_id, record_id },
      undefined,
      {},
      options,
    );
  }
  /** Delete zone */
  deleteZone(zone_id: string, options: RequestOptions = {}): Promise<void> {
    return this.transport.discard(
      "dns",
      "https://dns.basaltic.sh",
      operations.deleteZone,
      { zone_id },
      undefined,
      {},
      options,
    );
  }
  /** Discard the record-import outcome */
  deleteZoneRecordImport(
    zone_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "dns",
      "https://dns.basaltic.sh",
      operations.deleteZoneRecordImport,
      { zone_id },
      undefined,
      {},
      options,
    );
  }
  /** Dissociate a VPC from a private zone */
  dissociateZoneVPC(
    zone_id: string,
    vpc_id: string,
    options: RequestOptions = {},
  ): Promise<void> {
    return this.transport.discard(
      "dns",
      "https://dns.basaltic.sh",
      operations.dissociateZoneVPC,
      { zone_id, vpc_id },
      undefined,
      {},
      options,
    );
  }
  /** Export the zone as a zone file */
  exportZoneFile(
    zone_id: string,
    options: RequestOptions = {},
  ): Promise<Response> {
    return this.transport.binary(
      "dns",
      "https://dns.basaltic.sh",
      operations.exportZoneFile,
      { zone_id },
      undefined,
      {},
      options,
    );
  }
  /** Get record */
  getRecord(
    zone_id: string,
    record_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRecordResponse>> {
    return this.transport.json<GetRecordResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.getRecord,
      { zone_id, record_id },
      undefined,
      {},
      options,
    );
  }
  getRecordByReference(
    zone_id: string,
    reference: string,
    scope: Omit<ListRecordsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Record2>> {
    return resolveReference<Record2>(
      reference,
      (id) => this.getRecord(zone_id, id, options),
      (filter) =>
        this.listRecords(
          zone_id,
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "record",
    );
  }
  /** Get zone */
  getZone(
    zone_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetZoneResponse>> {
    return this.transport.json<GetZoneResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.getZone,
      { zone_id },
      undefined,
      {},
      options,
    );
  }
  getZoneByReference(
    reference: string,
    scope: Omit<ListZonesQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<Zone>> {
    return resolveReference<Zone>(
      reference,
      (id) => this.getZone(id, options),
      (filter) =>
        this.listZones(
          { ...referenceScope(scope), ...filter, limit: 2 },
          options,
        ),
      true,
      "zone",
    );
  }
  /** Get the record-import outcome */
  getZoneRecordImport(
    zone_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetZoneRecordImportResponse>> {
    return this.transport.json<GetZoneRecordImportResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.getZoneRecordImport,
      { zone_id },
      undefined,
      {},
      options,
    );
  }
  /** Import a zone file */
  importZoneFile(
    zone_id: string,
    body: ImportZoneFileBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<ImportZoneFileResponse>> {
    return this.transport.json<ImportZoneFileResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.importZoneFile,
      { zone_id },
      body,
      {},
      options,
    );
  }
  /** List records */
  listRecords(
    zone_id: string,
    query: ListRecordsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRecordsResponse, ListRecordsItem>> {
    return this.transport.page<ListRecordsResponse, ListRecordsItem>(
      "dns",
      "https://dns.basaltic.sh",
      operations.listRecords,
      { zone_id },
      undefined,
      query,
      options,
    );
  }
  listRecordsAll(
    zone_id: string,
    query: ListRecordsQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListRecordsItem> {
    return iteratePages(
      (marker) => this.listRecords(zone_id, { ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** List VPC associations */
  listZoneVPCAssociations(
    zone_id: string,
    query: ListZoneVPCAssociationsQuery = {},
    options: RequestOptions = {},
  ): Promise<
    Page<ListZoneVPCAssociationsResponse, ListZoneVPCAssociationsItem>
  > {
    return this.transport.page<
      ListZoneVPCAssociationsResponse,
      ListZoneVPCAssociationsItem
    >(
      "dns",
      "https://dns.basaltic.sh",
      operations.listZoneVPCAssociations,
      { zone_id },
      undefined,
      query,
      options,
    );
  }
  /** List zones */
  listZones(
    query: ListZonesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListZonesResponse, ListZonesItem>> {
    return this.transport.page<ListZonesResponse, ListZonesItem>(
      "dns",
      "https://dns.basaltic.sh",
      operations.listZones,
      {},
      undefined,
      query,
      options,
    );
  }
  listZonesAll(
    query: ListZonesQuery = {},
    options: RequestOptions = {},
  ): AsyncGenerator<ListZonesItem> {
    return iteratePages(
      (marker) => this.listZones({ ...query, marker }, options),
      query.marker ?? "",
    );
  }
  /** Update record */
  updateRecord(
    zone_id: string,
    record_id: string,
    body: UpdateRecordBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateRecordResponse>> {
    return this.transport.json<UpdateRecordResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.updateRecord,
      { zone_id, record_id },
      body,
      {},
      options,
    );
  }
  /** Update zone */
  updateZone(
    zone_id: string,
    body: UpdateZoneBody,
    options: RequestOptions = {},
  ): Promise<ApiResponse<UpdateZoneResponse>> {
    return this.transport.json<UpdateZoneResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.updateZone,
      { zone_id },
      body,
      {},
      options,
    );
  }
  /** Verify zone ownership */
  verifyZoneOwnership(
    zone_id: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<VerifyZoneOwnershipResponse>> {
    return this.transport.json<VerifyZoneOwnershipResponse>(
      "dns",
      "https://dns.basaltic.sh",
      operations.verifyZoneOwnership,
      { zone_id },
      undefined,
      {},
      options,
    );
  }
}
