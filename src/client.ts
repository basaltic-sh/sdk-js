import { Config } from "./config.js";
import type { ClientOptions } from "./config.js";
import { Transport } from "./transport.js";
import { AuditService } from "./services/audit.js";
import { BillingService } from "./services/billing.js";
import { CatalogService } from "./services/catalog.js";
import { CertificateService } from "./services/certificate.js";
import { ComputeService } from "./services/compute.js";
import { DnsService } from "./services/dns.js";
import { IamService } from "./services/iam.js";
import { KmsService } from "./services/kms.js";
import { LoadbalancerService } from "./services/loadbalancer.js";
import { NetworkService } from "./services/network.js";
import { QuotaService } from "./services/quota.js";
import { SecretsService } from "./services/secrets.js";
import { StorageService } from "./services/storage.js";
import { TelemetryService } from "./services/telemetry.js";
import { WorkspaceService } from "./services/workspace.js";
// Generated service accessors. Do not edit.
export class BasalticClient {
  readonly audit: AuditService;
  readonly billing: BillingService;
  readonly catalog: CatalogService;
  readonly certificate: CertificateService;
  readonly compute: ComputeService;
  readonly dns: DnsService;
  readonly iam: IamService;
  readonly kms: KmsService;
  readonly loadbalancer: LoadbalancerService;
  readonly network: NetworkService;
  readonly quota: QuotaService;
  readonly secrets: SecretsService;
  readonly storage: StorageService;
  readonly telemetry: TelemetryService;
  readonly workspace: WorkspaceService;
  constructor(options: ClientOptions | Config = {}) {
    const transport = new Transport(
      options instanceof Config ? options : new Config(options),
    );
    this.audit = new AuditService(transport);
    this.billing = new BillingService(transport);
    this.catalog = new CatalogService(transport);
    this.certificate = new CertificateService(transport);
    this.compute = new ComputeService(transport);
    this.dns = new DnsService(transport);
    this.iam = new IamService(transport);
    this.kms = new KmsService(transport);
    this.loadbalancer = new LoadbalancerService(transport);
    this.network = new NetworkService(transport);
    this.quota = new QuotaService(transport);
    this.secrets = new SecretsService(transport);
    this.storage = new StorageService(transport);
    this.telemetry = new TelemetryService(transport);
    this.workspace = new WorkspaceService(transport);
  }
}
