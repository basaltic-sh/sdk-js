import { Config } from "./config.js";
import type { ClientOptions } from "./config.js";
import { Transport } from "./transport.js";
import { AuditService } from "./services/audit.js";
import { BillingService } from "./services/billing.js";
import { CatalogService } from "./services/catalog.js";
import { CertificateService } from "./services/certificate.js";
import { ComputeService } from "./services/compute.js";
import { DnsService } from "./services/dns.js";
import { EmailService } from "./services/email.js";
import { IamService } from "./services/iam.js";
import { KmsService } from "./services/kms.js";
import { LoadbalancerService } from "./services/loadbalancer.js";
import { NetworkService } from "./services/network.js";
import { NotificationsService } from "./services/notifications.js";
import { QueueService } from "./services/queue.js";
import { QuotaService } from "./services/quota.js";
import { RegistryService } from "./services/registry.js";
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
  readonly email: EmailService;
  readonly iam: IamService;
  readonly kms: KmsService;
  readonly loadbalancer: LoadbalancerService;
  readonly network: NetworkService;
  readonly notifications: NotificationsService;
  readonly queue: QueueService;
  readonly quota: QuotaService;
  readonly registry: RegistryService;
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
    this.email = new EmailService(transport);
    this.iam = new IamService(transport);
    this.kms = new KmsService(transport);
    this.loadbalancer = new LoadbalancerService(transport);
    this.network = new NetworkService(transport);
    this.notifications = new NotificationsService(transport);
    this.queue = new QueueService(transport);
    this.quota = new QuotaService(transport);
    this.registry = new RegistryService(transport);
    this.secrets = new SecretsService(transport);
    this.storage = new StorageService(transport);
    this.telemetry = new TelemetryService(transport);
    this.workspace = new WorkspaceService(transport);
  }
}
