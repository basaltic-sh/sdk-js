# TypeScript API reference

Generated from the reviewed Basaltic API definitions.
Use `client.<service>.<method>(...)`. Bodies and query objects use API field names.
`ApiResponse<T>.data` preserves the JSON envelope. `Page<T, Item>.items` contains this page;
`All` methods return a lazy `AsyncGenerator<Item>`. Binary methods return a Fetch `Response`.

## `audit.getAuditLog`

Get audit log entry

`GET /v1/audit-logs/{log_id}`

```ts
getAuditLog(log_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetAuditLogResponse>>
```

## `audit.listAuditLogs`

List audit logs

`GET /v1/audit-logs`

```ts
listAuditLogs(query: ListAuditLogsQuery = {}, options: RequestOptions = {}): Promise<Page<ListAuditLogsResponse, ListAuditLogsItem>>
```

## `billing.getBillingProfile`

Read the organization billing profile

`GET /v1/profile`

```ts
getBillingProfile(options: RequestOptions = {}): Promise<ApiResponse<GetBillingProfileResponse>>
```

## `billing.getCurrentUsage`

Get month-to-date usage total

`GET /v1/usage`

```ts
getCurrentUsage(options: RequestOptions = {}): Promise<ApiResponse<GetCurrentUsageResponse>>
```

## `billing.getFiscalInvoiceXml`

Download issued NFS-e XML

`GET /v1/fiscal-invoices/{document_id}/xml`

```ts
getFiscalInvoiceXml(document_id: string, options: RequestOptions = {}): Promise<Response>
```

## `billing.getInvoice`

Get an invoice with its line items

`GET /v1/invoices/{invoice_id}`

```ts
getInvoice(invoice_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetInvoiceResponse>>
```

## `billing.getInvoicePdf`

Download an invoice as a PDF statement

`GET /v1/invoices/{invoice_id}/pdf`

```ts
getInvoicePdf(invoice_id: string, options: RequestOptions = {}): Promise<Response>
```

## `billing.listCredits`

List credit grants

`GET /v1/credits`

```ts
listCredits(query: ListCreditsQuery = {}, options: RequestOptions = {}): Promise<Page<ListCreditsResponse, ListCreditsItem>>
```

## `billing.listFiscalInvoices`

List fiscal invoice issuance and delivery status

`GET /v1/fiscal-invoices`

```ts
listFiscalInvoices(query: ListFiscalInvoicesQuery = {}, options: RequestOptions = {}): Promise<Page<ListFiscalInvoicesResponse, ListFiscalInvoicesItem>>
```

## `billing.listInvoices`

List invoices

`GET /v1/invoices`

```ts
listInvoices(query: ListInvoicesQuery = {}, options: RequestOptions = {}): Promise<Page<ListInvoicesResponse, ListInvoicesItem>>
```

## `billing.listPayments`

List invoice payments

`GET /v1/payments`

```ts
listPayments(query: ListPaymentsQuery = {}, options: RequestOptions = {}): Promise<Page<ListPaymentsResponse, ListPaymentsItem>>
```

## `billing.listPrices`

List catalog prices

`GET /v1/prices`

```ts
listPrices(query: ListPricesQuery = {}, options: RequestOptions = {}): Promise<Page<ListPricesResponse, ListPricesItem>>
```

## `billing.listTransactions`

List ledger transactions

`GET /v1/transactions`

```ts
listTransactions(query: ListTransactionsQuery = {}, options: RequestOptions = {}): Promise<Page<ListTransactionsResponse, ListTransactionsItem>>
```

## `billing.updateBillingProfile`

Save organization billing details

`PUT /v1/profile`

```ts
updateBillingProfile(body: UpdateBillingProfileBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateBillingProfileResponse>>
```

## `catalog.getRegion`

Get a region

`GET /v1/regions/{code}`

```ts
getRegion(code: string, options: RequestOptions = {}): Promise<ApiResponse<GetRegionResponse>>
```

## `catalog.listRegions`

List regions

`GET /v1/regions`

```ts
listRegions(query: ListRegionsQuery = {}, options: RequestOptions = {}): Promise<Page<ListRegionsResponse, ListRegionsItem>>
```

## `certificate.createCertificate`

Create certificate

`POST /v1/certificates`

```ts
createCertificate(body: CreateCertificateBody, options: RequestOptions = {}): Promise<ApiResponse<CreateCertificateResponse>>
```

## `certificate.deleteCertificate`

Delete certificate

`DELETE /v1/certificates/{certificate_id}`

```ts
deleteCertificate(certificate_id: string, options: RequestOptions = {}): Promise<void>
```

## `certificate.getCertificate`

Get certificate

`GET /v1/certificates/{certificate_id}`

```ts
getCertificate(certificate_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetCertificateResponse>>
```

## `certificate.getCertificateMaterial`

Fetch certificate material (leaf, chain, private key)

`GET /v1/certificates/{certificate_id}/material`

```ts
getCertificateMaterial(certificate_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetCertificateMaterialResponse>>
```

## `certificate.listCertificates`

List certificates

`GET /v1/certificates`

```ts
listCertificates(query: ListCertificatesQuery = {}, options: RequestOptions = {}): Promise<Page<ListCertificatesResponse, ListCertificatesItem>>
```

## `certificate.revokeCertificate`

Revoke certificate

`POST /v1/certificates/{certificate_id}/revoke`

```ts
revokeCertificate(certificate_id: string, options: RequestOptions = {}): Promise<ApiResponse<RevokeCertificateResponse>>
```

## `compute.attachInstanceNIC`

Attach an existing NIC to an instance

`POST /v1/instances/{instance_id}/nics`

```ts
attachInstanceNIC(instance_id: string, body: AttachInstanceNICBody, options: RequestOptions = {}): Promise<ApiResponse<AttachInstanceNICResponse>>
```

## `compute.attachInstancePoolFloatingIp`

Give the pool a shared public address

`POST /v1/instance-pools/{pool_id}/floating-ips`

```ts
attachInstancePoolFloatingIp(pool_id: string, body: AttachInstancePoolFloatingIpBody, options: RequestOptions = {}): Promise<ApiResponse<AttachInstancePoolFloatingIpResponse>>
```

## `compute.attachInstanceVolume`

Attach a data volume to an instance

`POST /v1/instances/{instance_id}/volumes`

```ts
attachInstanceVolume(instance_id: string, body: AttachInstanceVolumeBody, options: RequestOptions = {}): Promise<ApiResponse<AttachInstanceVolumeResponse>>
```

## `compute.createImage`

Import an image from an object URL

`POST /v1/images`

```ts
createImage(body: CreateImageBody, options: RequestOptions = {}): Promise<ApiResponse<CreateImageResponse>>
```

## `compute.createInstance`

Create instance

`POST /v1/instances`

```ts
createInstance(body: CreateInstanceBody, options: RequestOptions = {}): Promise<ApiResponse<CreateInstanceResponse>>
```

## `compute.createInstancePool`

Create an instance pool

`POST /v1/instance-pools`

```ts
createInstancePool(body: CreateInstancePoolBody, options: RequestOptions = {}): Promise<ApiResponse<CreateInstancePoolResponse>>
```

## `compute.createSerialConsoleTicket`

Mint a ticket for the serial console

`POST /v1/instances/{instance_id}/console/ticket`

```ts
createSerialConsoleTicket(instance_id: string, options: RequestOptions = {}): Promise<ApiResponse<CreateSerialConsoleTicketResponse>>
```

## `compute.deleteImage`

Delete an unused image

`DELETE /v1/images/{image_id}`

```ts
deleteImage(image_id: string, options: RequestOptions = {}): Promise<ApiResponse<DeleteImageResponse>>
```

## `compute.deleteInstance`

Delete instance

`DELETE /v1/instances/{instance_id}`

```ts
deleteInstance(instance_id: string, options: RequestOptions = {}): Promise<void>
```

## `compute.deleteInstancePool`

Delete an instance pool

`DELETE /v1/instance-pools/{pool_id}`

```ts
deleteInstancePool(pool_id: string, options: RequestOptions = {}): Promise<void>
```

## `compute.detachInstanceNIC`

Detach a NIC from a running instance

`DELETE /v1/instances/{instance_id}/nics/{interface_id}`

```ts
detachInstanceNIC(instance_id: string, interface_id: string, options: RequestOptions = {}): Promise<void>
```

## `compute.detachInstancePoolFloatingIp`

Take a shared address off the pool

`DELETE /v1/instance-pools/{pool_id}/floating-ips/{floating_ip_id}`

```ts
detachInstancePoolFloatingIp(pool_id: string, floating_ip_id: string, options: RequestOptions = {}): Promise<void>
```

## `compute.detachInstanceVolume`

Detach a data volume from an instance

`DELETE /v1/instances/{instance_id}/volumes/{volume_id}`

```ts
detachInstanceVolume(instance_id: string, volume_id: string, options: RequestOptions = {}): Promise<void>
```

## `compute.getConsoleOutput`

Get the instance's serial console output

`GET /v1/instances/{instance_id}/console/output`

```ts
getConsoleOutput(instance_id: string, query: GetConsoleOutputQuery = {}, options: RequestOptions = {}): Promise<ApiResponse<GetConsoleOutputResponse>>
```

## `compute.getConsoleScreenshot`

Capture the instance's display

`GET /v1/instances/{instance_id}/console/screenshot`

```ts
getConsoleScreenshot(instance_id: string, options: RequestOptions = {}): Promise<Response>
```

## `compute.getFlavor`

Get flavor

`GET /v1/flavors/{flavor_id}`

```ts
getFlavor(flavor_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetFlavorResponse>>
```

## `compute.getImage`

Get an image

`GET /v1/images/{image_id}`

```ts
getImage(image_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetImageResponse>>
```

## `compute.getInstance`

Get instance

`GET /v1/instances/{instance_id}`

```ts
getInstance(instance_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetInstanceResponse>>
```

## `compute.getInstancePool`

Get an instance pool

`GET /v1/instance-pools/{pool_id}`

```ts
getInstancePool(pool_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetInstancePoolResponse>>
```

## `compute.listFlavors`

List flavors

`GET /v1/flavors`

```ts
listFlavors(query: ListFlavorsQuery = {}, options: RequestOptions = {}): Promise<Page<ListFlavorsResponse, ListFlavorsItem>>
```

## `compute.listImageCatalog`

List the launch image catalog

`GET /v1/image-catalog`

```ts
listImageCatalog(query: ListImageCatalogQuery = {}, options: RequestOptions = {}): Promise<Page<ListImageCatalogResponse, ListImageCatalogItem>>
```

## `compute.listImages`

List images

`GET /v1/images`

```ts
listImages(query: ListImagesQuery = {}, options: RequestOptions = {}): Promise<Page<ListImagesResponse, ListImagesItem>>
```

## `compute.listInstanceNICs`

List the instance's network interfaces

`GET /v1/instances/{instance_id}/nics`

```ts
listInstanceNICs(instance_id: string, query: ListInstanceNICsQuery = {}, options: RequestOptions = {}): Promise<Page<ListInstanceNICsResponse, ListInstanceNICsItem>>
```

## `compute.listInstancePoolFloatingIps`

List the pool's shared public addresses

`GET /v1/instance-pools/{pool_id}/floating-ips`

```ts
listInstancePoolFloatingIps(pool_id: string, query: ListInstancePoolFloatingIpsQuery = {}, options: RequestOptions = {}): Promise<Page<ListInstancePoolFloatingIpsResponse, ListInstancePoolFloatingIpsItem>>
```

## `compute.listInstancePools`

List instance pools

`GET /v1/instance-pools`

```ts
listInstancePools(query: ListInstancePoolsQuery = {}, options: RequestOptions = {}): Promise<Page<ListInstancePoolsResponse, ListInstancePoolsItem>>
```

## `compute.listInstanceVolumes`

List the instance's attached volumes

`GET /v1/instances/{instance_id}/volumes`

```ts
listInstanceVolumes(instance_id: string, query: ListInstanceVolumesQuery = {}, options: RequestOptions = {}): Promise<Page<ListInstanceVolumesResponse, ListInstanceVolumesItem>>
```

## `compute.listInstances`

List instances

`GET /v1/instances`

```ts
listInstances(query: ListInstancesQuery = {}, options: RequestOptions = {}): Promise<Page<ListInstancesResponse, ListInstancesItem>>
```

## `compute.listPoolInstances`

List a pool's instances

`GET /v1/instance-pools/{pool_id}/instances`

```ts
listPoolInstances(pool_id: string, query: ListPoolInstancesQuery = {}, options: RequestOptions = {}): Promise<Page<ListPoolInstancesResponse, ListPoolInstancesItem>>
```

## `compute.rebootInstance`

Reboot instance

`POST /v1/instances/{instance_id}/reboot`

```ts
rebootInstance(instance_id: string, body: RebootInstanceBody | undefined = undefined, options: RequestOptions = {}): Promise<void>
```

## `compute.refreshInstancePool`

Roll every member onto the pool's current launch template

`POST /v1/instance-pools/{pool_id}/refresh`

```ts
refreshInstancePool(pool_id: string, options: RequestOptions = {}): Promise<ApiResponse<RefreshInstancePoolResponse>>
```

## `compute.reinstallInstance`

Reinstall instance

`POST /v1/instances/{instance_id}/reinstall`

```ts
reinstallInstance(instance_id: string, body: ReinstallInstanceBody | undefined = undefined, options: RequestOptions = {}): Promise<void>
```

## `compute.resizeInstance`

Resize instance

`POST /v1/instances/{instance_id}/resize`

```ts
resizeInstance(instance_id: string, body: ResizeInstanceBody, options: RequestOptions = {}): Promise<void>
```

## `compute.startInstance`

Start instance

`POST /v1/instances/{instance_id}/start`

```ts
startInstance(instance_id: string, options: RequestOptions = {}): Promise<void>
```

## `compute.startSerialConsole`

Open an interactive serial console

`GET /v1/instances/{instance_id}/console/serial`

```ts
startSerialConsole(instance_id: string, query: StartSerialConsoleQuery = {}, options: RequestOptions = {}): Promise<WebSocketConnection>
```

## `compute.stopInstance`

Stop instance

`POST /v1/instances/{instance_id}/stop`

```ts
stopInstance(instance_id: string, options: RequestOptions = {}): Promise<void>
```

## `compute.updateImage`

Update an image's metadata

`PATCH /v1/images/{image_id}`

```ts
updateImage(image_id: string, body: UpdateImageBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateImageResponse>>
```

## `compute.updateInstance`

Update instance

`PATCH /v1/instances/{instance_id}`

```ts
updateInstance(instance_id: string, body: UpdateInstanceBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateInstanceResponse>>
```

## `compute.updateInstancePool`

Update an instance pool's description, size, tags or launch template

`PATCH /v1/instance-pools/{pool_id}`

```ts
updateInstancePool(pool_id: string, body: UpdateInstancePoolBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateInstancePoolResponse>>
```

## `compute.updateInstanceVolumeAttachment`

Update a volume attachment's settings

`PATCH /v1/instances/{instance_id}/volumes/{volume_id}`

```ts
updateInstanceVolumeAttachment(instance_id: string, volume_id: string, body: UpdateInstanceVolumeAttachmentBody, options: RequestOptions = {}): Promise<void>
```

## `dns.associateZoneVPC`

Associate a VPC with a private zone

`POST /v1/zones/{zone_id}/vpc-associations`

```ts
associateZoneVPC(zone_id: string, body: AssociateZoneVPCBody, options: RequestOptions = {}): Promise<ApiResponse<AssociateZoneVPCResponse>>
```

## `dns.createRecord`

Create record

`POST /v1/zones/{zone_id}/records`

```ts
createRecord(zone_id: string, body: CreateRecordBody, options: RequestOptions = {}): Promise<ApiResponse<CreateRecordResponse>>
```

## `dns.createZone`

Create zone

`POST /v1/zones`

```ts
createZone(body: CreateZoneBody, options: RequestOptions = {}): Promise<ApiResponse<CreateZoneResponse>>
```

## `dns.deleteRecord`

Delete record

`DELETE /v1/zones/{zone_id}/records/{record_id}`

```ts
deleteRecord(zone_id: string, record_id: string, options: RequestOptions = {}): Promise<void>
```

## `dns.deleteZone`

Delete zone

`DELETE /v1/zones/{zone_id}`

```ts
deleteZone(zone_id: string, options: RequestOptions = {}): Promise<void>
```

## `dns.deleteZoneRecordImport`

Discard the record-import outcome

`DELETE /v1/zones/{zone_id}/record-import`

```ts
deleteZoneRecordImport(zone_id: string, options: RequestOptions = {}): Promise<void>
```

## `dns.dissociateZoneVPC`

Dissociate a VPC from a private zone

`DELETE /v1/zones/{zone_id}/vpc-associations/{vpc_id}`

```ts
dissociateZoneVPC(zone_id: string, vpc_id: string, options: RequestOptions = {}): Promise<void>
```

## `dns.exportZoneFile`

Export the zone as a zone file

`GET /v1/zones/{zone_id}/export`

```ts
exportZoneFile(zone_id: string, options: RequestOptions = {}): Promise<Response>
```

## `dns.getRecord`

Get record

`GET /v1/zones/{zone_id}/records/{record_id}`

```ts
getRecord(zone_id: string, record_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetRecordResponse>>
```

## `dns.getZone`

Get zone

`GET /v1/zones/{zone_id}`

```ts
getZone(zone_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetZoneResponse>>
```

## `dns.getZoneRecordImport`

Get the record-import outcome

`GET /v1/zones/{zone_id}/record-import`

```ts
getZoneRecordImport(zone_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetZoneRecordImportResponse>>
```

## `dns.importZoneFile`

Import a zone file

`POST /v1/zones/{zone_id}/import`

```ts
importZoneFile(zone_id: string, body: ImportZoneFileBody, options: RequestOptions = {}): Promise<ApiResponse<ImportZoneFileResponse>>
```

## `dns.listRecords`

List records

`GET /v1/zones/{zone_id}/records`

```ts
listRecords(zone_id: string, query: ListRecordsQuery = {}, options: RequestOptions = {}): Promise<Page<ListRecordsResponse, ListRecordsItem>>
```

## `dns.listZoneVPCAssociations`

List VPC associations

`GET /v1/zones/{zone_id}/vpc-associations`

```ts
listZoneVPCAssociations(zone_id: string, query: ListZoneVPCAssociationsQuery = {}, options: RequestOptions = {}): Promise<Page<ListZoneVPCAssociationsResponse, ListZoneVPCAssociationsItem>>
```

## `dns.listZones`

List zones

`GET /v1/zones`

```ts
listZones(query: ListZonesQuery = {}, options: RequestOptions = {}): Promise<Page<ListZonesResponse, ListZonesItem>>
```

## `dns.updateRecord`

Update record

`PATCH /v1/zones/{zone_id}/records/{record_id}`

```ts
updateRecord(zone_id: string, record_id: string, body: UpdateRecordBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateRecordResponse>>
```

## `dns.updateZone`

Update zone

`PATCH /v1/zones/{zone_id}`

```ts
updateZone(zone_id: string, body: UpdateZoneBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateZoneResponse>>
```

## `dns.verifyZoneOwnership`

Verify zone ownership

`POST /v1/zones/{zone_id}/verify-ownership`

```ts
verifyZoneOwnership(zone_id: string, options: RequestOptions = {}): Promise<ApiResponse<VerifyZoneOwnershipResponse>>
```

## `iam.assumeRole`

Assume role

`POST /v1/assume-role`

```ts
assumeRole(body: AssumeRoleBody, options: RequestOptions = {}): Promise<ApiResponse<AssumeRoleResponse>>
```

## `iam.assumeRoleWithWebIdentity`

Assume role with web identity

`POST /v1/assume-role-with-web-identity`

```ts
assumeRoleWithWebIdentity(body: AssumeRoleWithWebIdentityBody, options: RequestOptions = {}): Promise<ApiResponse<AssumeRoleWithWebIdentityResponse>>
```

## `iam.attachRolePolicy`

Attach policy to role

`POST /v1/roles/{role_id}/policies`

```ts
attachRolePolicy(role_id: string, body: AttachRolePolicyBody, options: RequestOptions = {}): Promise<void>
```

## `iam.attachServiceAccountPolicy`

Attach policy to service account

`POST /v1/service-accounts/{service_account_id}/policies`

```ts
attachServiceAccountPolicy(service_account_id: string, body: AttachServiceAccountPolicyBody, options: RequestOptions = {}): Promise<void>
```

## `iam.authorizeOAuthClient`

Approve a CLI login and issue an authorization code

`POST /v1/oauth/authorize`

```ts
authorizeOAuthClient(body: AuthorizeOAuthClientBody, options: RequestOptions = {}): Promise<ApiResponse<AuthorizeOAuthClientResponse>>
```

## `iam.createPersonalSSHKey`

Add personal SSH key

`POST /v1/auth/ssh-keys`

```ts
createPersonalSSHKey(body: CreatePersonalSSHKeyBody, options: RequestOptions = {}): Promise<ApiResponse<CreatePersonalSSHKeyResponse>>
```

## `iam.createPolicy`

Create policy

`POST /v1/policies`

```ts
createPolicy(body: CreatePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<CreatePolicyResponse>>
```

## `iam.createRole`

Create role

`POST /v1/roles`

```ts
createRole(body: CreateRoleBody, options: RequestOptions = {}): Promise<ApiResponse<CreateRoleResponse>>
```

## `iam.createServiceAccount`

Create service account

`POST /v1/service-accounts`

```ts
createServiceAccount(body: CreateServiceAccountBody, options: RequestOptions = {}): Promise<ApiResponse<CreateServiceAccountResponse>>
```

## `iam.createServiceAccountCredential`

Create credential

`POST /v1/service-accounts/{service_account_id}/credentials`

```ts
createServiceAccountCredential(service_account_id: string, body: CreateServiceAccountCredentialBody, options: RequestOptions = {}): Promise<ApiResponse<CreateServiceAccountCredentialResponse>>
```

## `iam.createServiceAccountSSHKey`

Add service-account SSH key

`POST /v1/service-accounts/{service_account_id}/ssh-keys`

```ts
createServiceAccountSSHKey(service_account_id: string, body: CreateServiceAccountSSHKeyBody, options: RequestOptions = {}): Promise<ApiResponse<CreateServiceAccountSSHKeyResponse>>
```

## `iam.deletePersonalSSHKey`

Revoke personal SSH key

`DELETE /v1/auth/ssh-keys/{ssh_key_id}`

```ts
deletePersonalSSHKey(ssh_key_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.deletePolicy`

Delete policy

`DELETE /v1/policies/{policy_id}`

```ts
deletePolicy(policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.deleteRole`

Delete role

`DELETE /v1/roles/{role_id}`

```ts
deleteRole(role_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.deleteRoleInlinePolicy`

Delete a role's inline policy by name

`DELETE /v1/roles/{role_id}/inline-policies/{policy_name}`

```ts
deleteRoleInlinePolicy(role_id: string, policy_name: string, options: RequestOptions = {}): Promise<void>
```

## `iam.deleteServiceAccount`

Delete service account

`DELETE /v1/service-accounts/{service_account_id}`

```ts
deleteServiceAccount(service_account_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.deleteServiceAccountCredential`

Delete credential

`DELETE /v1/service-accounts/{service_account_id}/credentials/{credential_id}`

```ts
deleteServiceAccountCredential(service_account_id: string, credential_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.deleteServiceAccountInlinePolicy`

Delete a service account's inline policy by name

`DELETE /v1/service-accounts/{service_account_id}/inline-policies/{policy_name}`

```ts
deleteServiceAccountInlinePolicy(service_account_id: string, policy_name: string, options: RequestOptions = {}): Promise<void>
```

## `iam.deleteServiceAccountSSHKey`

Revoke service-account SSH key

`DELETE /v1/service-accounts/{service_account_id}/ssh-keys/{ssh_key_id}`

```ts
deleteServiceAccountSSHKey(service_account_id: string, ssh_key_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.detachRolePolicy`

Detach policy from role

`DELETE /v1/roles/{role_id}/policies/{policy_id}`

```ts
detachRolePolicy(role_id: string, policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.detachServiceAccountPolicy`

Detach policy from service account

`DELETE /v1/service-accounts/{service_account_id}/policies/{policy_id}`

```ts
detachServiceAccountPolicy(service_account_id: string, policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.getOAuthToken`

Exchange an access key for a bearer token

`POST /v1/oauth/token`

```ts
getOAuthToken(body: GetOAuthTokenBody, options: RequestOptions = {}): Promise<ApiResponse<GetOAuthTokenResponse>>
```

## `iam.getPersonalLinuxIdentity`

Get personal Linux identity

`GET /v1/auth/linux-identity`

```ts
getPersonalLinuxIdentity(options: RequestOptions = {}): Promise<ApiResponse<GetPersonalLinuxIdentityResponse>>
```

## `iam.getPolicy`

Get policy

`GET /v1/policies/{policy_id}`

```ts
getPolicy(policy_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetPolicyResponse>>
```

## `iam.getRole`

Get role

`GET /v1/roles/{role_id}`

```ts
getRole(role_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetRoleResponse>>
```

## `iam.getRoleInlinePolicy`

Get a role's inline policy by name

`GET /v1/roles/{role_id}/inline-policies/{policy_name}`

```ts
getRoleInlinePolicy(role_id: string, policy_name: string, options: RequestOptions = {}): Promise<ApiResponse<GetRoleInlinePolicyResponse>>
```

## `iam.getRolePermissionBoundary`

Get a role's permission boundary

`GET /v1/roles/{role_id}/permission-boundary`

```ts
getRolePermissionBoundary(role_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetRolePermissionBoundaryResponse>>
```

## `iam.getSTSSession`

Get STS session

`GET /v1/sts-sessions/{session_id}`

```ts
getSTSSession(session_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetSTSSessionResponse>>
```

## `iam.getServiceAccount`

Get service account

`GET /v1/service-accounts/{service_account_id}`

```ts
getServiceAccount(service_account_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetServiceAccountResponse>>
```

## `iam.getServiceAccountInlinePolicy`

Get a service account's inline policy by name

`GET /v1/service-accounts/{service_account_id}/inline-policies/{policy_name}`

```ts
getServiceAccountInlinePolicy(service_account_id: string, policy_name: string, options: RequestOptions = {}): Promise<ApiResponse<GetServiceAccountInlinePolicyResponse>>
```

## `iam.getServiceAccountLinuxIdentity`

Get serviceaccount Linux identity

`GET /v1/service-accounts/{service_account_id}/linux-identity`

```ts
getServiceAccountLinuxIdentity(service_account_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetServiceAccountLinuxIdentityResponse>>
```

## `iam.getServiceAccountPermissionBoundary`

Get a service account's permission boundary

`GET /v1/service-accounts/{service_account_id}/permission-boundary`

```ts
getServiceAccountPermissionBoundary(service_account_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetServiceAccountPermissionBoundaryResponse>>
```

## `iam.listPersonalSSHKeys`

List personal SSH keys

`GET /v1/auth/ssh-keys`

```ts
listPersonalSSHKeys(options: RequestOptions = {}): Promise<Page<ListPersonalSSHKeysResponse, ListPersonalSSHKeysItem>>
```

## `iam.listPolicies`

List policies

`GET /v1/policies`

```ts
listPolicies(query: ListPoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListPoliciesResponse, ListPoliciesItem>>
```

## `iam.listPolicyRoles`

List roles with policy

`GET /v1/policies/{policy_id}/roles`

```ts
listPolicyRoles(policy_id: string, query: ListPolicyRolesQuery = {}, options: RequestOptions = {}): Promise<Page<ListPolicyRolesResponse, ListPolicyRolesItem>>
```

## `iam.listPolicyServiceAccounts`

List service accounts with policy

`GET /v1/policies/{policy_id}/service-accounts`

```ts
listPolicyServiceAccounts(policy_id: string, query: ListPolicyServiceAccountsQuery = {}, options: RequestOptions = {}): Promise<Page<ListPolicyServiceAccountsResponse, ListPolicyServiceAccountsItem>>
```

## `iam.listRegions`

List regions (legacy IAM)

`GET /v1/regions`

```ts
listRegions(query: ListRegionsQuery = {}, options: RequestOptions = {}): Promise<Page<ListRegionsResponse, ListRegionsItem>>
```

## `iam.listRoleInlinePolicies`

List a role's inline policies

`GET /v1/roles/{role_id}/inline-policies`

```ts
listRoleInlinePolicies(role_id: string, query: ListRoleInlinePoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListRoleInlinePoliciesResponse, ListRoleInlinePoliciesItem>>
```

## `iam.listRolePolicies`

List role policies

`GET /v1/roles/{role_id}/policies`

```ts
listRolePolicies(role_id: string, query: ListRolePoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListRolePoliciesResponse, ListRolePoliciesItem>>
```

## `iam.listRoles`

List roles

`GET /v1/roles`

```ts
listRoles(query: ListRolesQuery = {}, options: RequestOptions = {}): Promise<Page<ListRolesResponse, ListRolesItem>>
```

## `iam.listSTSSessions`

List STS sessions

`GET /v1/sts-sessions`

```ts
listSTSSessions(query: ListSTSSessionsQuery = {}, options: RequestOptions = {}): Promise<Page<ListSTSSessionsResponse, ListSTSSessionsItem>>
```

## `iam.listServiceAccountCredentials`

List credentials

`GET /v1/service-accounts/{service_account_id}/credentials`

```ts
listServiceAccountCredentials(service_account_id: string, query: ListServiceAccountCredentialsQuery = {}, options: RequestOptions = {}): Promise<Page<ListServiceAccountCredentialsResponse, ListServiceAccountCredentialsItem>>
```

## `iam.listServiceAccountInlinePolicies`

List a service account's inline policies

`GET /v1/service-accounts/{service_account_id}/inline-policies`

```ts
listServiceAccountInlinePolicies(service_account_id: string, query: ListServiceAccountInlinePoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListServiceAccountInlinePoliciesResponse, ListServiceAccountInlinePoliciesItem>>
```

## `iam.listServiceAccountPolicies`

List service account policies

`GET /v1/service-accounts/{service_account_id}/policies`

```ts
listServiceAccountPolicies(service_account_id: string, query: ListServiceAccountPoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListServiceAccountPoliciesResponse, ListServiceAccountPoliciesItem>>
```

## `iam.listServiceAccountSSHKeys`

List service-account SSH keys

`GET /v1/service-accounts/{service_account_id}/ssh-keys`

```ts
listServiceAccountSSHKeys(service_account_id: string, options: RequestOptions = {}): Promise<Page<ListServiceAccountSSHKeysResponse, ListServiceAccountSSHKeysItem>>
```

## `iam.listServiceAccounts`

List service accounts

`GET /v1/service-accounts`

```ts
listServiceAccounts(query: ListServiceAccountsQuery = {}, options: RequestOptions = {}): Promise<Page<ListServiceAccountsResponse, ListServiceAccountsItem>>
```

## `iam.putRoleInlinePolicy`

Create or replace a role's inline policy

`PUT /v1/roles/{role_id}/inline-policies/{policy_name}`

```ts
putRoleInlinePolicy(role_id: string, policy_name: string, body: PutRoleInlinePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<PutRoleInlinePolicyResponse>>
```

## `iam.putServiceAccountInlinePolicy`

Create or replace a service account's inline policy

`PUT /v1/service-accounts/{service_account_id}/inline-policies/{policy_name}`

```ts
putServiceAccountInlinePolicy(service_account_id: string, policy_name: string, body: PutServiceAccountInlinePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<PutServiceAccountInlinePolicyResponse>>
```

## `iam.removeRolePermissionBoundary`

Remove a role's permission boundary

`DELETE /v1/roles/{role_id}/permission-boundary`

```ts
removeRolePermissionBoundary(role_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.removeServiceAccountPermissionBoundary`

Remove a service account's permission boundary

`DELETE /v1/service-accounts/{service_account_id}/permission-boundary`

```ts
removeServiceAccountPermissionBoundary(service_account_id: string, options: RequestOptions = {}): Promise<void>
```

## `iam.revokeOAuthToken`

Revoke a bearer token

`POST /v1/oauth/revoke`

```ts
revokeOAuthToken(body: RevokeOAuthTokenBody, options: RequestOptions = {}): Promise<void>
```

## `iam.revokeSTSSession`

Revoke STS session

`DELETE /v1/sts-sessions/{session_id}`

```ts
revokeSTSSession(session_id: string, body: RevokeSTSSessionBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<RevokeSTSSessionResponse>>
```

## `iam.setRolePermissionBoundary`

Set a role's permission boundary

`PUT /v1/roles/{role_id}/permission-boundary`

```ts
setRolePermissionBoundary(role_id: string, body: SetRolePermissionBoundaryBody, options: RequestOptions = {}): Promise<void>
```

## `iam.setServiceAccountPermissionBoundary`

Set a service account's permission boundary

`PUT /v1/service-accounts/{service_account_id}/permission-boundary`

```ts
setServiceAccountPermissionBoundary(service_account_id: string, body: SetServiceAccountPermissionBoundaryBody, options: RequestOptions = {}): Promise<void>
```

## `iam.updatePolicy`

Update policy

`PATCH /v1/policies/{policy_id}`

```ts
updatePolicy(policy_id: string, body: UpdatePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<UpdatePolicyResponse>>
```

## `iam.updateRole`

Update role

`PATCH /v1/roles/{role_id}`

```ts
updateRole(role_id: string, body: UpdateRoleBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateRoleResponse>>
```

## `iam.updateServiceAccount`

Update service account

`PATCH /v1/service-accounts/{service_account_id}`

```ts
updateServiceAccount(service_account_id: string, body: UpdateServiceAccountBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateServiceAccountResponse>>
```

## `kms.cancelKeyDeletion`

Cancel a scheduled deletion

`POST /v1/keys/{key_id}/cancel-deletion`

```ts
cancelKeyDeletion(key_id: string, options: RequestOptions = {}): Promise<ApiResponse<CancelKeyDeletionResponse>>
```

## `kms.createKey`

Create a KMS key

`POST /v1/keys`

```ts
createKey(body: CreateKeyBody, options: RequestOptions = {}): Promise<ApiResponse<CreateKeyResponse>>
```

## `kms.decrypt`

Decrypt a ciphertext

`POST /v1/keys/{key_id}/decrypt`

```ts
decrypt(key_id: string, body: DecryptBody, options: RequestOptions = {}): Promise<ApiResponse<DecryptResponse>>
```

## `kms.disableKey`

Disable a key

`POST /v1/keys/{key_id}/disable`

```ts
disableKey(key_id: string, options: RequestOptions = {}): Promise<ApiResponse<DisableKeyResponse>>
```

## `kms.enableKey`

Enable a disabled key

`POST /v1/keys/{key_id}/enable`

```ts
enableKey(key_id: string, options: RequestOptions = {}): Promise<ApiResponse<EnableKeyResponse>>
```

## `kms.encrypt`

Encrypt a payload

`POST /v1/keys/{key_id}/encrypt`

```ts
encrypt(key_id: string, body: EncryptBody, options: RequestOptions = {}): Promise<ApiResponse<EncryptResponse>>
```

## `kms.generateDataKey`

Generate a fresh data key

`POST /v1/keys/{key_id}/generate-data-key`

```ts
generateDataKey(key_id: string, body: GenerateDataKeyBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<GenerateDataKeyResponse>>
```

## `kms.getKey`

Get a KMS key

`GET /v1/keys/{key_id}`

```ts
getKey(key_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetKeyResponse>>
```

## `kms.listKeys`

List KMS keys

`GET /v1/keys`

```ts
listKeys(query: ListKeysQuery = {}, options: RequestOptions = {}): Promise<Page<ListKeysResponse, ListKeysItem>>
```

## `kms.scheduleKeyDeletion`

Schedule key for deletion

`POST /v1/keys/{key_id}/schedule-deletion`

```ts
scheduleKeyDeletion(key_id: string, body: ScheduleKeyDeletionBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<ScheduleKeyDeletionResponse>>
```

## `kms.sign`

Sign a message

`POST /v1/keys/{key_id}/sign`

```ts
sign(key_id: string, body: SignBody, options: RequestOptions = {}): Promise<ApiResponse<SignResponse>>
```

## `kms.updateKey`

Update key metadata

`PATCH /v1/keys/{key_id}`

```ts
updateKey(key_id: string, body: UpdateKeyBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateKeyResponse>>
```

## `kms.verify`

Verify a signature

`POST /v1/keys/{key_id}/verify`

```ts
verify(key_id: string, body: VerifyBody, options: RequestOptions = {}): Promise<ApiResponse<VerifyResponse>>
```

## `loadbalancer.attachListenerCertificate`

Attach an additional certificate to an HTTPS listener

`POST /v1/load-balancers/{id}/listeners/{listener_id}/certificates`

```ts
attachListenerCertificate(id: string, listener_id: string, body: AttachListenerCertificateBody, options: RequestOptions = {}): Promise<ApiResponse<AttachListenerCertificateResponse>>
```

## `loadbalancer.attachTarget`

Attach a target to this group

`POST /v1/target-groups/{id}/targets`

```ts
attachTarget(id: string, body: AttachTargetBody, options: RequestOptions = {}): Promise<ApiResponse<AttachTargetResponse>>
```

## `loadbalancer.createListener`

Create a listener on this load balancer

`POST /v1/load-balancers/{id}/listeners`

```ts
createListener(id: string, body: CreateListenerBody, options: RequestOptions = {}): Promise<ApiResponse<CreateListenerResponse>>
```

## `loadbalancer.createLoadBalancer`

Create a load balancer

`POST /v1/load-balancers`

```ts
createLoadBalancer(body: CreateLoadBalancerBody, options: RequestOptions = {}): Promise<ApiResponse<CreateLoadBalancerResponse>>
```

## `loadbalancer.createRule`

Create a routing rule on this listener (HTTP/HTTPS only)

`POST /v1/load-balancers/{id}/listeners/{listener_id}/rules`

```ts
createRule(id: string, listener_id: string, body: CreateRuleBody, options: RequestOptions = {}): Promise<ApiResponse<CreateRuleResponse>>
```

## `loadbalancer.createTargetGroup`

Create a target group

`POST /v1/target-groups`

```ts
createTargetGroup(body: CreateTargetGroupBody, options: RequestOptions = {}): Promise<ApiResponse<CreateTargetGroupResponse>>
```

## `loadbalancer.deleteListener`

Delete a listener

`DELETE /v1/load-balancers/{id}/listeners/{listener_id}`

```ts
deleteListener(id: string, listener_id: string, options: RequestOptions = {}): Promise<void>
```

## `loadbalancer.deleteLoadBalancer`

Delete a load balancer

`DELETE /v1/load-balancers/{id}`

```ts
deleteLoadBalancer(id: string, options: RequestOptions = {}): Promise<void>
```

## `loadbalancer.deleteRuleInListener`

Delete a routing rule

`DELETE /v1/load-balancers/{id}/listeners/{listener_id}/rules/{rule_id}`

```ts
deleteRuleInListener(id: string, listener_id: string, rule_id: string, options: RequestOptions = {}): Promise<void>
```

## `loadbalancer.deleteTargetGroup`

Delete a target group

`DELETE /v1/target-groups/{id}`

```ts
deleteTargetGroup(id: string, options: RequestOptions = {}): Promise<void>
```

## `loadbalancer.detachListenerCertificate`

Detach a certificate from an HTTPS listener

`DELETE /v1/load-balancers/{id}/listeners/{listener_id}/certificates/{certificate_id}`

```ts
detachListenerCertificate(id: string, listener_id: string, certificate_id: string, options: RequestOptions = {}): Promise<void>
```

## `loadbalancer.detachTarget`

Detach a target

`DELETE /v1/target-groups/{id}/targets/{target_id}`

```ts
detachTarget(id: string, target_id: string, options: RequestOptions = {}): Promise<void>
```

## `loadbalancer.getListener`

Get a listener

`GET /v1/load-balancers/{id}/listeners/{listener_id}`

```ts
getListener(id: string, listener_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetListenerResponse>>
```

## `loadbalancer.getLoadBalancer`

Get a load balancer

`GET /v1/load-balancers/{id}`

```ts
getLoadBalancer(id: string, options: RequestOptions = {}): Promise<ApiResponse<GetLoadBalancerResponse>>
```

## `loadbalancer.getRule`

Get a routing rule

`GET /v1/load-balancers/{id}/listeners/{listener_id}/rules/{rule_id}`

```ts
getRule(id: string, listener_id: string, rule_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetRuleResponse>>
```

## `loadbalancer.getTarget`

Get a target

`GET /v1/target-groups/{id}/targets/{target_id}`

```ts
getTarget(id: string, target_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetTargetResponse>>
```

## `loadbalancer.getTargetGroup`

Get a target group

`GET /v1/target-groups/{id}`

```ts
getTargetGroup(id: string, options: RequestOptions = {}): Promise<ApiResponse<GetTargetGroupResponse>>
```

## `loadbalancer.listListeners`

List this load balancer's listeners

`GET /v1/load-balancers/{id}/listeners`

```ts
listListeners(id: string, query: ListListenersQuery = {}, options: RequestOptions = {}): Promise<Page<ListListenersResponse, ListListenersItem>>
```

## `loadbalancer.listLoadBalancerReplicas`

List the LB's instance replicas with live health

`GET /v1/load-balancers/{id}/replicas`

```ts
listLoadBalancerReplicas(id: string, query: ListLoadBalancerReplicasQuery = {}, options: RequestOptions = {}): Promise<Page<ListLoadBalancerReplicasResponse, ListLoadBalancerReplicasItem>>
```

## `loadbalancer.listLoadBalancers`

List load balancers

`GET /v1/load-balancers`

```ts
listLoadBalancers(query: ListLoadBalancersQuery = {}, options: RequestOptions = {}): Promise<Page<ListLoadBalancersResponse, ListLoadBalancersItem>>
```

## `loadbalancer.listRules`

List this listener's rules

`GET /v1/load-balancers/{id}/listeners/{listener_id}/rules`

```ts
listRules(id: string, listener_id: string, query: ListRulesQuery = {}, options: RequestOptions = {}): Promise<Page<ListRulesResponse, ListRulesItem>>
```

## `loadbalancer.listTargetGroups`

List target groups

`GET /v1/target-groups`

```ts
listTargetGroups(query: ListTargetGroupsQuery = {}, options: RequestOptions = {}): Promise<Page<ListTargetGroupsResponse, ListTargetGroupsItem>>
```

## `loadbalancer.listTargets`

List targets in this group

`GET /v1/target-groups/{id}/targets`

```ts
listTargets(id: string, query: ListTargetsQuery = {}, options: RequestOptions = {}): Promise<Page<ListTargetsResponse, ListTargetsItem>>
```

## `loadbalancer.updateListener`

Patch a listener (rotate cert, change default target group)

`PATCH /v1/load-balancers/{id}/listeners/{listener_id}`

```ts
updateListener(id: string, listener_id: string, body: UpdateListenerBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateListenerResponse>>
```

## `loadbalancer.updateLoadBalancer`

Scale or resize a load balancer

`PATCH /v1/load-balancers/{id}`

```ts
updateLoadBalancer(id: string, body: UpdateLoadBalancerBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateLoadBalancerResponse>>
```

## `loadbalancer.updateRule`

Update a routing rule (full replace)

`PATCH /v1/load-balancers/{id}/listeners/{listener_id}/rules/{rule_id}`

```ts
updateRule(id: string, listener_id: string, rule_id: string, body: UpdateRuleBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateRuleResponse>>
```

## `loadbalancer.updateTargetGroup`

Update target group health checks, framing, or stickiness

`PATCH /v1/target-groups/{id}`

```ts
updateTargetGroup(id: string, body: UpdateTargetGroupBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateTargetGroupResponse>>
```

## `network.attachFloatingIp`

Attach a floating IP to an interface

`POST /v1/floating-ips/{floating_ip_id}/attach`

```ts
attachFloatingIp(floating_ip_id: string, body: AttachFloatingIpBody, options: RequestOptions = {}): Promise<ApiResponse<AttachFloatingIpResponse>>
```

## `network.attachInternetGateway`

Attach internet gateway to a VPC

`POST /v1/internet-gateways/{internet_gateway_id}/attach`

```ts
attachInternetGateway(internet_gateway_id: string, body: AttachInternetGatewayBody, options: RequestOptions = {}): Promise<ApiResponse<AttachInternetGatewayResponse>>
```

## `network.createEgressOnlyGateway`

Create egress-only gateway

`POST /v1/egress-only-gateways`

```ts
createEgressOnlyGateway(body: CreateEgressOnlyGatewayBody, options: RequestOptions = {}): Promise<ApiResponse<CreateEgressOnlyGatewayResponse>>
```

## `network.createFloatingIp`

Allocate floating IP

`POST /v1/floating-ips`

```ts
createFloatingIp(body: CreateFloatingIpBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<CreateFloatingIpResponse>>
```

## `network.createInterface`

Create interface

`POST /v1/interfaces`

```ts
createInterface(body: CreateInterfaceBody, options: RequestOptions = {}): Promise<ApiResponse<CreateInterfaceResponse>>
```

## `network.createInterfaceAddress`

Create interface address

`POST /v1/interfaces/{interface_id}/addresses`

```ts
createInterfaceAddress(interface_id: string, body: CreateInterfaceAddressBody, options: RequestOptions = {}): Promise<ApiResponse<CreateInterfaceAddressResponse>>
```

## `network.createInterfacePrefix`

Create interface prefix

`POST /v1/interfaces/{interface_id}/prefixes`

```ts
createInterfacePrefix(interface_id: string, body: CreateInterfacePrefixBody, options: RequestOptions = {}): Promise<ApiResponse<CreateInterfacePrefixResponse>>
```

## `network.createInternetGateway`

Create internet gateway

`POST /v1/internet-gateways`

```ts
createInternetGateway(body: CreateInternetGatewayBody, options: RequestOptions = {}): Promise<ApiResponse<CreateInternetGatewayResponse>>
```

## `network.createNATGateway`

Create NAT gateway

`POST /v1/nat-gateways`

```ts
createNATGateway(body: CreateNATGatewayBody, options: RequestOptions = {}): Promise<ApiResponse<CreateNATGatewayResponse>>
```

## `network.createPrefixPool`

Create prefix pool

`POST /v1/vpcs/{vpc_id}/prefix-pools`

```ts
createPrefixPool(vpc_id: string, body: CreatePrefixPoolBody, options: RequestOptions = {}): Promise<ApiResponse<CreatePrefixPoolResponse>>
```

## `network.createRoute`

Create route

`POST /v1/route-tables/{route_table_id}/routes`

```ts
createRoute(route_table_id: string, body: CreateRouteBody, options: RequestOptions = {}): Promise<ApiResponse<CreateRouteResponse>>
```

## `network.createRouteTable`

Create route table

`POST /v1/route-tables`

```ts
createRouteTable(body: CreateRouteTableBody, options: RequestOptions = {}): Promise<ApiResponse<CreateRouteTableResponse>>
```

## `network.createSecurityGroup`

Create security group

`POST /v1/security-groups`

```ts
createSecurityGroup(body: CreateSecurityGroupBody, options: RequestOptions = {}): Promise<ApiResponse<CreateSecurityGroupResponse>>
```

## `network.createSecurityGroupRule`

Create security group rule

`POST /v1/security-groups/{security_group_id}/rules`

```ts
createSecurityGroupRule(security_group_id: string, body: CreateSecurityGroupRuleBody, options: RequestOptions = {}): Promise<ApiResponse<CreateSecurityGroupRuleResponse>>
```

## `network.createSubnet`

Create subnet

`POST /v1/subnets`

```ts
createSubnet(body: CreateSubnetBody, options: RequestOptions = {}): Promise<ApiResponse<CreateSubnetResponse>>
```

## `network.createVpc`

Create VPC

`POST /v1/vpcs`

```ts
createVpc(body: CreateVpcBody, options: RequestOptions = {}): Promise<ApiResponse<CreateVpcResponse>>
```

## `network.deleteEgressOnlyGateway`

Delete egress-only gateway

`DELETE /v1/egress-only-gateways/{egress_only_gateway_id}`

```ts
deleteEgressOnlyGateway(egress_only_gateway_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteFloatingIp`

Release floating IP

`DELETE /v1/floating-ips/{floating_ip_id}`

```ts
deleteFloatingIp(floating_ip_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteInterface`

Delete interface

`DELETE /v1/interfaces/{interface_id}`

```ts
deleteInterface(interface_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteInterfaceAddress`

Delete interface address

`DELETE /v1/interfaces/{interface_id}/addresses/{address_id}`

```ts
deleteInterfaceAddress(interface_id: string, address_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteInterfacePrefix`

Delete interface prefix

`DELETE /v1/interfaces/{interface_id}/prefixes/{prefix_id}`

```ts
deleteInterfacePrefix(interface_id: string, prefix_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteInternetGateway`

Delete internet gateway

`DELETE /v1/internet-gateways/{internet_gateway_id}`

```ts
deleteInternetGateway(internet_gateway_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteNATGateway`

Delete NAT gateway

`DELETE /v1/nat-gateways/{nat_gateway_id}`

```ts
deleteNATGateway(nat_gateway_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deletePrefixPool`

Delete prefix pool

`DELETE /v1/vpcs/{vpc_id}/prefix-pools/{pool_id}`

```ts
deletePrefixPool(vpc_id: string, pool_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteRoute`

Delete route

`DELETE /v1/route-tables/{route_table_id}/routes/{route_id}`

```ts
deleteRoute(route_table_id: string, route_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteRouteTable`

Delete route table

`DELETE /v1/route-tables/{route_table_id}`

```ts
deleteRouteTable(route_table_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteSecurityGroup`

Delete security group

`DELETE /v1/security-groups/{security_group_id}`

```ts
deleteSecurityGroup(security_group_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteSecurityGroupRule`

Delete security group rule

`DELETE /v1/security-groups/{security_group_id}/rules/{rule_id}`

```ts
deleteSecurityGroupRule(security_group_id: string, rule_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteSubnet`

Delete subnet

`DELETE /v1/subnets/{subnet_id}`

```ts
deleteSubnet(subnet_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.deleteVpc`

Delete VPC

`DELETE /v1/vpcs/{vpc_id}`

```ts
deleteVpc(vpc_id: string, options: RequestOptions = {}): Promise<void>
```

## `network.detachFloatingIp`

Detach a floating IP

`POST /v1/floating-ips/{floating_ip_id}/detach`

```ts
detachFloatingIp(floating_ip_id: string, body: DetachFloatingIpBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<DetachFloatingIpResponse>>
```

## `network.detachInternetGateway`

Detach internet gateway from its VPC

`POST /v1/internet-gateways/{internet_gateway_id}/detach`

```ts
detachInternetGateway(internet_gateway_id: string, options: RequestOptions = {}): Promise<ApiResponse<DetachInternetGatewayResponse>>
```

## `network.getEgressOnlyGateway`

Get egress-only gateway

`GET /v1/egress-only-gateways/{egress_only_gateway_id}`

```ts
getEgressOnlyGateway(egress_only_gateway_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetEgressOnlyGatewayResponse>>
```

## `network.getFloatingIp`

Get floating IP

`GET /v1/floating-ips/{floating_ip_id}`

```ts
getFloatingIp(floating_ip_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetFloatingIpResponse>>
```

## `network.getInterface`

Get interface

`GET /v1/interfaces/{interface_id}`

```ts
getInterface(interface_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetInterfaceResponse>>
```

## `network.getInterfaceAddress`

Get interface address

`GET /v1/interfaces/{interface_id}/addresses/{address_id}`

```ts
getInterfaceAddress(interface_id: string, address_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetInterfaceAddressResponse>>
```

## `network.getInternetGateway`

Get internet gateway

`GET /v1/internet-gateways/{internet_gateway_id}`

```ts
getInternetGateway(internet_gateway_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetInternetGatewayResponse>>
```

## `network.getNATGateway`

Get NAT gateway

`GET /v1/nat-gateways/{nat_gateway_id}`

```ts
getNATGateway(nat_gateway_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetNATGatewayResponse>>
```

## `network.getRoute`

Get route

`GET /v1/route-tables/{route_table_id}/routes/{route_id}`

```ts
getRoute(route_table_id: string, route_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetRouteResponse>>
```

## `network.getRouteTable`

Get route table

`GET /v1/route-tables/{route_table_id}`

```ts
getRouteTable(route_table_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetRouteTableResponse>>
```

## `network.getSecurityGroup`

Get security group

`GET /v1/security-groups/{security_group_id}`

```ts
getSecurityGroup(security_group_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetSecurityGroupResponse>>
```

## `network.getSecurityGroupRule`

Get security group rule

`GET /v1/security-groups/{security_group_id}/rules/{rule_id}`

```ts
getSecurityGroupRule(security_group_id: string, rule_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetSecurityGroupRuleResponse>>
```

## `network.getSubnet`

Get subnet

`GET /v1/subnets/{subnet_id}`

```ts
getSubnet(subnet_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetSubnetResponse>>
```

## `network.getVpc`

Get VPC

`GET /v1/vpcs/{vpc_id}`

```ts
getVpc(vpc_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetVpcResponse>>
```

## `network.listEgressOnlyGatewayRoutes`

List egress-only gateway routes

`GET /v1/egress-only-gateways/{egress_only_gateway_id}/routes`

```ts
listEgressOnlyGatewayRoutes(egress_only_gateway_id: string, query: ListEgressOnlyGatewayRoutesQuery = {}, options: RequestOptions = {}): Promise<Page<ListEgressOnlyGatewayRoutesResponse, ListEgressOnlyGatewayRoutesItem>>
```

## `network.listEgressOnlyGateways`

List egress-only gateways

`GET /v1/egress-only-gateways`

```ts
listEgressOnlyGateways(query: ListEgressOnlyGatewaysQuery = {}, options: RequestOptions = {}): Promise<Page<ListEgressOnlyGatewaysResponse, ListEgressOnlyGatewaysItem>>
```

## `network.listFloatingIps`

List floating IPs

`GET /v1/floating-ips`

```ts
listFloatingIps(query: ListFloatingIpsQuery = {}, options: RequestOptions = {}): Promise<Page<ListFloatingIpsResponse, ListFloatingIpsItem>>
```

## `network.listInterfaceAddresses`

List interface addresses

`GET /v1/interfaces/{interface_id}/addresses`

```ts
listInterfaceAddresses(interface_id: string, options: RequestOptions = {}): Promise<Page<ListInterfaceAddressesResponse, ListInterfaceAddressesItem>>
```

## `network.listInterfacePrefixes`

List interface prefixes

`GET /v1/interfaces/{interface_id}/prefixes`

```ts
listInterfacePrefixes(interface_id: string, options: RequestOptions = {}): Promise<Page<ListInterfacePrefixesResponse, ListInterfacePrefixesItem>>
```

## `network.listInterfaceSecurityGroups`

List interface security-group membership

`GET /v1/interfaces/{interface_id}/security-groups`

```ts
listInterfaceSecurityGroups(interface_id: string, query: ListInterfaceSecurityGroupsQuery = {}, options: RequestOptions = {}): Promise<Page<ListInterfaceSecurityGroupsResponse, ListInterfaceSecurityGroupsItem>>
```

## `network.listInterfaces`

List interfaces

`GET /v1/interfaces`

```ts
listInterfaces(query: ListInterfacesQuery = {}, options: RequestOptions = {}): Promise<Page<ListInterfacesResponse, ListInterfacesItem>>
```

## `network.listInternetGatewayRoutes`

List internet gateway routes

`GET /v1/internet-gateways/{internet_gateway_id}/routes`

```ts
listInternetGatewayRoutes(internet_gateway_id: string, query: ListInternetGatewayRoutesQuery = {}, options: RequestOptions = {}): Promise<Page<ListInternetGatewayRoutesResponse, ListInternetGatewayRoutesItem>>
```

## `network.listInternetGateways`

List internet gateways

`GET /v1/internet-gateways`

```ts
listInternetGateways(query: ListInternetGatewaysQuery = {}, options: RequestOptions = {}): Promise<Page<ListInternetGatewaysResponse, ListInternetGatewaysItem>>
```

## `network.listNATGatewayRoutes`

List NAT gateway routes

`GET /v1/nat-gateways/{nat_gateway_id}/routes`

```ts
listNATGatewayRoutes(nat_gateway_id: string, query: ListNATGatewayRoutesQuery = {}, options: RequestOptions = {}): Promise<Page<ListNATGatewayRoutesResponse, ListNATGatewayRoutesItem>>
```

## `network.listNATGateways`

List NAT gateways

`GET /v1/nat-gateways`

```ts
listNATGateways(query: ListNATGatewaysQuery = {}, options: RequestOptions = {}): Promise<Page<ListNATGatewaysResponse, ListNATGatewaysItem>>
```

## `network.listPrefixPools`

List prefix pools

`GET /v1/vpcs/{vpc_id}/prefix-pools`

```ts
listPrefixPools(vpc_id: string, options: RequestOptions = {}): Promise<Page<ListPrefixPoolsResponse, ListPrefixPoolsItem>>
```

## `network.listRouteTables`

List route tables

`GET /v1/route-tables`

```ts
listRouteTables(query: ListRouteTablesQuery = {}, options: RequestOptions = {}): Promise<Page<ListRouteTablesResponse, ListRouteTablesItem>>
```

## `network.listRoutes`

List routes

`GET /v1/route-tables/{route_table_id}/routes`

```ts
listRoutes(route_table_id: string, query: ListRoutesQuery = {}, options: RequestOptions = {}): Promise<Page<ListRoutesResponse, ListRoutesItem>>
```

## `network.listSecurityGroupRules`

List security group rules

`GET /v1/security-groups/{security_group_id}/rules`

```ts
listSecurityGroupRules(security_group_id: string, query: ListSecurityGroupRulesQuery = {}, options: RequestOptions = {}): Promise<Page<ListSecurityGroupRulesResponse, ListSecurityGroupRulesItem>>
```

## `network.listSecurityGroups`

List security groups

`GET /v1/security-groups`

```ts
listSecurityGroups(query: ListSecurityGroupsQuery = {}, options: RequestOptions = {}): Promise<Page<ListSecurityGroupsResponse, ListSecurityGroupsItem>>
```

## `network.listSubnets`

List subnets

`GET /v1/subnets`

```ts
listSubnets(query: ListSubnetsQuery = {}, options: RequestOptions = {}): Promise<Page<ListSubnetsResponse, ListSubnetsItem>>
```

## `network.listVpcs`

List VPCs

`GET /v1/vpcs`

```ts
listVpcs(query: ListVpcsQuery = {}, options: RequestOptions = {}): Promise<Page<ListVpcsResponse, ListVpcsItem>>
```

## `network.setInterfaceSecurityGroups`

Set interface security-group membership

`PUT /v1/interfaces/{interface_id}/security-groups`

```ts
setInterfaceSecurityGroups(interface_id: string, body: SetInterfaceSecurityGroupsBody, options: RequestOptions = {}): Promise<ApiResponse<SetInterfaceSecurityGroupsResponse>>
```

## `network.updateEgressOnlyGateway`

Update egress-only gateway

`PATCH /v1/egress-only-gateways/{egress_only_gateway_id}`

```ts
updateEgressOnlyGateway(egress_only_gateway_id: string, body: UpdateEgressOnlyGatewayBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateEgressOnlyGatewayResponse>>
```

## `network.updateFloatingIp`

Update floating IP

`PATCH /v1/floating-ips/{floating_ip_id}`

```ts
updateFloatingIp(floating_ip_id: string, body: UpdateFloatingIpBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateFloatingIpResponse>>
```

## `network.updateInterface`

Update interface

`PATCH /v1/interfaces/{interface_id}`

```ts
updateInterface(interface_id: string, body: UpdateInterfaceBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateInterfaceResponse>>
```

## `network.updateInternetGateway`

Update internet gateway

`PATCH /v1/internet-gateways/{internet_gateway_id}`

```ts
updateInternetGateway(internet_gateway_id: string, body: UpdateInternetGatewayBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateInternetGatewayResponse>>
```

## `network.updateNATGateway`

Update NAT gateway

`PATCH /v1/nat-gateways/{nat_gateway_id}`

```ts
updateNATGateway(nat_gateway_id: string, body: UpdateNATGatewayBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateNATGatewayResponse>>
```

## `network.updateRoute`

Update route

`PATCH /v1/route-tables/{route_table_id}/routes/{route_id}`

```ts
updateRoute(route_table_id: string, route_id: string, body: UpdateRouteBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateRouteResponse>>
```

## `network.updateRouteTable`

Update route table

`PATCH /v1/route-tables/{route_table_id}`

```ts
updateRouteTable(route_table_id: string, body: UpdateRouteTableBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateRouteTableResponse>>
```

## `network.updateSecurityGroup`

Update security group

`PATCH /v1/security-groups/{security_group_id}`

```ts
updateSecurityGroup(security_group_id: string, body: UpdateSecurityGroupBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateSecurityGroupResponse>>
```

## `network.updateSubnet`

Update subnet

`PATCH /v1/subnets/{subnet_id}`

```ts
updateSubnet(subnet_id: string, body: UpdateSubnetBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateSubnetResponse>>
```

## `network.updateVpc`

Update VPC

`PATCH /v1/vpcs/{vpc_id}`

```ts
updateVpc(vpc_id: string, body: UpdateVpcBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateVpcResponse>>
```

## `quota.listQuotas`

List quotas

`GET /v1/quotas`

```ts
listQuotas(query: ListQuotasQuery = {}, options: RequestOptions = {}): Promise<Page<ListQuotasResponse, ListQuotasItem>>
```

## `secrets.createSecret`

Create a new secret with an initial value

`POST /v1/secrets`

```ts
createSecret(body: CreateSecretBody, options: RequestOptions = {}): Promise<ApiResponse<CreateSecretResponse>>
```

## `secrets.deleteSecret`

Schedule deletion (soft delete with recovery window)

`DELETE /v1/secrets/{secret_id}`

```ts
deleteSecret(secret_id: string, body: DeleteSecretBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<DeleteSecretResponse>>
```

## `secrets.describeSecret`

Describe a secret (no value)

`GET /v1/secrets/{secret_id}`

```ts
describeSecret(secret_id: string, options: RequestOptions = {}): Promise<ApiResponse<DescribeSecretResponse>>
```

## `secrets.getSecretValue`

Read the current value (or a specific version)

`GET /v1/secrets/{secret_id}/value`

```ts
getSecretValue(secret_id: string, query: GetSecretValueQuery = {}, options: RequestOptions = {}): Promise<ApiResponse<GetSecretValueResponse>>
```

## `secrets.listSecrets`

List secrets

`GET /v1/secrets`

```ts
listSecrets(query: ListSecretsQuery = {}, options: RequestOptions = {}): Promise<Page<ListSecretsResponse, ListSecretsItem>>
```

## `secrets.listVersions`

List versions

`GET /v1/secrets/{secret_id}/versions`

```ts
listVersions(secret_id: string, query: ListVersionsQuery = {}, options: RequestOptions = {}): Promise<Page<ListVersionsResponse, ListVersionsItem>>
```

## `secrets.putSecretValue`

Store a new version (becomes current)

`POST /v1/secrets/{secret_id}/value`

```ts
putSecretValue(secret_id: string, body: PutSecretValueBody, options: RequestOptions = {}): Promise<ApiResponse<PutSecretValueResponse>>
```

## `secrets.restoreSecret`

Restore a secret from the recovery window

`POST /v1/secrets/{secret_id}/restore`

```ts
restoreSecret(secret_id: string, options: RequestOptions = {}): Promise<ApiResponse<RestoreSecretResponse>>
```

## `secrets.updateSecret`

Update mutable metadata

`PATCH /v1/secrets/{secret_id}`

```ts
updateSecret(secret_id: string, body: UpdateSecretBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateSecretResponse>>
```

## `storage.abortMultipartUpload`

Abort a multipart upload

`DELETE /v1/buckets/{bucket}/multipart-uploads/{upload_id}`

```ts
abortMultipartUpload(bucket: string, upload_id: string, options: RequestOptions = {}): Promise<void>
```

## `storage.completeMultipartUpload`

Complete a multipart upload

`POST /v1/buckets/{bucket}/multipart-uploads/{upload_id}/complete`

```ts
completeMultipartUpload(bucket: string, upload_id: string, body: CompleteMultipartUploadBody, options: RequestOptions = {}): Promise<ApiResponse<CompleteMultipartUploadResponse>>
```

## `storage.createBucket`

Create bucket

`POST /v1/buckets`

```ts
createBucket(body: CreateBucketBody, options: RequestOptions = {}): Promise<ApiResponse<CreateBucketResponse>>
```

## `storage.createSnapshot`

Create snapshot

`POST /v1/snapshots`

```ts
createSnapshot(body: CreateSnapshotBody, options: RequestOptions = {}): Promise<ApiResponse<CreateSnapshotResponse>>
```

## `storage.createSnapshotPolicy`

Create snapshot policy

`POST /v1/snapshot-policies`

```ts
createSnapshotPolicy(body: CreateSnapshotPolicyBody, options: RequestOptions = {}): Promise<ApiResponse<CreateSnapshotPolicyResponse>>
```

## `storage.createVolume`

Create volume

`POST /v1/volumes`

```ts
createVolume(body: CreateVolumeBody, options: RequestOptions = {}): Promise<ApiResponse<CreateVolumeResponse>>
```

## `storage.deleteBucket`

Delete bucket

`DELETE /v1/buckets/{bucket}`

```ts
deleteBucket(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<DeleteBucketResponse>>
```

## `storage.deleteBucketCORS`

Delete bucket CORS configuration

`DELETE /v1/buckets/{bucket}/cors`

```ts
deleteBucketCORS(bucket: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteBucketEncryption`

Delete bucket encryption configuration

`DELETE /v1/buckets/{bucket}/encryption`

```ts
deleteBucketEncryption(bucket: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteBucketLifecycle`

Delete bucket lifecycle configuration

`DELETE /v1/buckets/{bucket}/lifecycle`

```ts
deleteBucketLifecycle(bucket: string, options: DeleteBucketLifecycleOptions): Promise<void>
```

## `storage.deleteBucketObjectLock`

Delete bucket object-lock configuration

`DELETE /v1/buckets/{bucket}/object-lock`

```ts
deleteBucketObjectLock(bucket: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteBucketPolicy`

Delete bucket policy

`DELETE /v1/buckets/{bucket}/policy`

```ts
deleteBucketPolicy(bucket: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteBucketTagging`

Delete bucket tag set

`DELETE /v1/buckets/{bucket}/tagging`

```ts
deleteBucketTagging(bucket: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteObject`

Delete object

`DELETE /v1/buckets/{bucket}/objects/{key}`

```ts
deleteObject(bucket: string, key: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteSnapshot`

Delete snapshot

`DELETE /v1/snapshots/{snapshot_id}`

```ts
deleteSnapshot(snapshot_id: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteSnapshotPolicy`

Delete snapshot policy

`DELETE /v1/snapshot-policies/{policy_id}`

```ts
deleteSnapshotPolicy(policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `storage.deleteVolume`

Delete volume

`DELETE /v1/volumes/{volume_id}`

```ts
deleteVolume(volume_id: string, options: RequestOptions = {}): Promise<void>
```

## `storage.extendVolume`

Extend volume

`POST /v1/volumes/{volume_id}/extend`

```ts
extendVolume(volume_id: string, body: ExtendVolumeBody, options: RequestOptions = {}): Promise<ApiResponse<ExtendVolumeResponse>>
```

## `storage.getBucketCORS`

Get bucket CORS configuration

`GET /v1/buckets/{bucket}/cors`

```ts
getBucketCORS(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<GetBucketCORSResponse>>
```

## `storage.getBucketEncryption`

Get bucket encryption configuration

`GET /v1/buckets/{bucket}/encryption`

```ts
getBucketEncryption(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<GetBucketEncryptionResponse>>
```

## `storage.getBucketLifecycle`

Get bucket lifecycle configuration

`GET /v1/buckets/{bucket}/lifecycle`

```ts
getBucketLifecycle(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<GetBucketLifecycleResponse>>
```

## `storage.getBucketObjectLock`

Get bucket object-lock configuration

`GET /v1/buckets/{bucket}/object-lock`

```ts
getBucketObjectLock(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<GetBucketObjectLockResponse>>
```

## `storage.getBucketPolicy`

Get bucket policy

`GET /v1/buckets/{bucket}/policy`

```ts
getBucketPolicy(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<GetBucketPolicyResponse>>
```

## `storage.getBucketTagging`

Get bucket tag set

`GET /v1/buckets/{bucket}/tagging`

```ts
getBucketTagging(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<GetBucketTaggingResponse>>
```

## `storage.getBucketVersioning`

Get bucket versioning state

`GET /v1/buckets/{bucket}/versioning`

```ts
getBucketVersioning(bucket: string, options: RequestOptions = {}): Promise<ApiResponse<GetBucketVersioningResponse>>
```

## `storage.getObject`

Download object

`GET /v1/buckets/{bucket}/objects/{key}`

```ts
getObject(bucket: string, key: string, options: RequestOptions = {}): Promise<Response>
```

## `storage.getSnapshot`

Get snapshot

`GET /v1/snapshots/{snapshot_id}`

```ts
getSnapshot(snapshot_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetSnapshotResponse>>
```

## `storage.getSnapshotPolicy`

Get snapshot policy

`GET /v1/snapshot-policies/{policy_id}`

```ts
getSnapshotPolicy(policy_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetSnapshotPolicyResponse>>
```

## `storage.getVolume`

Get volume

`GET /v1/volumes/{volume_id}`

```ts
getVolume(volume_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetVolumeResponse>>
```

## `storage.headBucket`

Head bucket

`HEAD /v1/buckets/{bucket}`

```ts
headBucket(bucket: string, options: RequestOptions = {}): Promise<Response>
```

## `storage.headObject`

Head object

`HEAD /v1/buckets/{bucket}/objects/{key}`

```ts
headObject(bucket: string, key: string, options: RequestOptions = {}): Promise<Response>
```

## `storage.initiateMultipartUpload`

Initiate a multipart upload

`POST /v1/buckets/{bucket}/multipart-uploads`

```ts
initiateMultipartUpload(bucket: string, body: InitiateMultipartUploadBody, options: RequestOptions = {}): Promise<ApiResponse<InitiateMultipartUploadResponse>>
```

## `storage.listBuckets`

List buckets

`GET /v1/buckets`

```ts
listBuckets(query: ListBucketsQuery = {}, options: RequestOptions = {}): Promise<Page<ListBucketsResponse, ListBucketsItem>>
```

## `storage.listMultipartUploads`

List in-flight multipart uploads

`GET /v1/buckets/{bucket}/multipart-uploads`

```ts
listMultipartUploads(bucket: string, query: ListMultipartUploadsQuery = {}, options: RequestOptions = {}): Promise<Page<ListMultipartUploadsResponse, ListMultipartUploadsItem>>
```

## `storage.listObjectVersions`

List object versions

`GET /v1/buckets/{bucket}/object-versions`

```ts
listObjectVersions(bucket: string, query: ListObjectVersionsQuery = {}, options: RequestOptions = {}): Promise<Page<ListObjectVersionsResponse, ListObjectVersionsItem>>
```

## `storage.listObjects`

List objects

`GET /v1/buckets/{bucket}/objects`

```ts
listObjects(bucket: string, query: ListObjectsQuery = {}, options: RequestOptions = {}): Promise<ApiResponse<ListObjectsResponse>>
```

## `storage.listParts`

List uploaded parts

`GET /v1/buckets/{bucket}/multipart-uploads/{upload_id}/parts`

```ts
listParts(bucket: string, upload_id: string, options: RequestOptions = {}): Promise<Page<ListPartsResponse, ListPartsItem>>
```

## `storage.listSnapshotPolicies`

List snapshot policies

`GET /v1/snapshot-policies`

```ts
listSnapshotPolicies(query: ListSnapshotPoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListSnapshotPoliciesResponse, ListSnapshotPoliciesItem>>
```

## `storage.listSnapshots`

List snapshots

`GET /v1/snapshots`

```ts
listSnapshots(query: ListSnapshotsQuery = {}, options: RequestOptions = {}): Promise<Page<ListSnapshotsResponse, ListSnapshotsItem>>
```

## `storage.listVolumeTypes`

List volume types

`GET /v1/volume-types`

```ts
listVolumeTypes(query: ListVolumeTypesQuery = {}, options: RequestOptions = {}): Promise<Page<ListVolumeTypesResponse, ListVolumeTypesItem>>
```

## `storage.listVolumes`

List volumes

`GET /v1/volumes`

```ts
listVolumes(query: ListVolumesQuery = {}, options: RequestOptions = {}): Promise<Page<ListVolumesResponse, ListVolumesItem>>
```

## `storage.putBucketCORS`

Put bucket CORS configuration

`PUT /v1/buckets/{bucket}/cors`

```ts
putBucketCORS(bucket: string, body: PutBucketCORSBody, options: RequestOptions = {}): Promise<void>
```

## `storage.putBucketDeletionProtection`

Set bucket deletion protection

`PUT /v1/buckets/{bucket}/deletion-protection`

```ts
putBucketDeletionProtection(bucket: string, body: PutBucketDeletionProtectionBody, options: RequestOptions = {}): Promise<void>
```

## `storage.putBucketEncryption`

Put bucket encryption configuration

`PUT /v1/buckets/{bucket}/encryption`

```ts
putBucketEncryption(bucket: string, body: PutBucketEncryptionBody, options: RequestOptions = {}): Promise<void>
```

## `storage.putBucketLifecycle`

Put bucket lifecycle configuration

`PUT /v1/buckets/{bucket}/lifecycle`

```ts
putBucketLifecycle(bucket: string, body: PutBucketLifecycleBody, options: PutBucketLifecycleOptions): Promise<void>
```

## `storage.putBucketObjectLock`

Put bucket object-lock configuration

`PUT /v1/buckets/{bucket}/object-lock`

```ts
putBucketObjectLock(bucket: string, body: PutBucketObjectLockBody, options: RequestOptions = {}): Promise<void>
```

## `storage.putBucketPolicy`

Put bucket policy

`PUT /v1/buckets/{bucket}/policy`

```ts
putBucketPolicy(bucket: string, body: PutBucketPolicyBody, options: RequestOptions = {}): Promise<void>
```

## `storage.putBucketTagging`

Put bucket tag set

`PUT /v1/buckets/{bucket}/tagging`

```ts
putBucketTagging(bucket: string, body: PutBucketTaggingBody, options: RequestOptions = {}): Promise<void>
```

## `storage.putBucketVersioning`

Set bucket versioning state

`PUT /v1/buckets/{bucket}/versioning`

```ts
putBucketVersioning(bucket: string, body: PutBucketVersioningBody, options: RequestOptions = {}): Promise<void>
```

## `storage.putObject`

Upload object

`PUT /v1/buckets/{bucket}/objects/{key}`

```ts
putObject(bucket: string, key: string, body: PutObjectBody, options: RequestOptions = {}): Promise<ApiResponse<PutObjectResponse>>
```

## `storage.restoreBucket`

Restore a bucket pending deletion

`POST /v1/buckets/{bucket}/restore`

```ts
restoreBucket(bucket: string, options: RequestOptions = {}): Promise<void>
```

## `storage.updateSnapshot`

Update snapshot metadata

`PATCH /v1/snapshots/{snapshot_id}`

```ts
updateSnapshot(snapshot_id: string, body: UpdateSnapshotBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateSnapshotResponse>>
```

## `storage.updateSnapshotPolicy`

Update snapshot policy

`PATCH /v1/snapshot-policies/{policy_id}`

```ts
updateSnapshotPolicy(policy_id: string, body: UpdateSnapshotPolicyBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateSnapshotPolicyResponse>>
```

## `storage.updateVolume`

Update volume metadata

`PATCH /v1/volumes/{volume_id}`

```ts
updateVolume(volume_id: string, body: UpdateVolumeBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateVolumeResponse>>
```

## `storage.updateVolumePerformance`

Update provisioned performance

`POST /v1/volumes/{volume_id}/performance`

```ts
updateVolumePerformance(volume_id: string, body: UpdateVolumePerformanceBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateVolumePerformanceResponse>>
```

## `storage.uploadPart`

Upload a part

`PUT /v1/buckets/{bucket}/multipart-uploads/{upload_id}/parts/{part_number}`

```ts
uploadPart(bucket: string, upload_id: string, part_number: string, body: UploadPartBody, options: RequestOptions = {}): Promise<ApiResponse<UploadPartResponse>>
```

## `telemetry.createLogGroup`

Create a log group

`POST /v1/log-groups`

```ts
createLogGroup(body: CreateLogGroupBody, options: RequestOptions = {}): Promise<ApiResponse<CreateLogGroupResponse>>
```

## `telemetry.deleteLogGroup`

Delete a log group

`DELETE /v1/log-groups/{id}`

```ts
deleteLogGroup(id: string, options: RequestOptions = {}): Promise<void>
```

## `telemetry.deleteTraceSettings`

Delete trace settings

`DELETE /v1/trace-settings`

```ts
deleteTraceSettings(options: RequestOptions = {}): Promise<void>
```

## `telemetry.getLog`

Get a single log record by id

`GET /v1/logs/{log_id}`

```ts
getLog(log_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetLogResponse>>
```

## `telemetry.getLogGroup`

Get a log group by id

`GET /v1/log-groups/{id}`

```ts
getLogGroup(id: string, options: RequestOptions = {}): Promise<ApiResponse<GetLogGroupResponse>>
```

## `telemetry.getRetainedTelemetryPresence`

Check retained telemetry presence

`GET /v1/trace-settings/retained-data`

```ts
getRetainedTelemetryPresence(options: RequestOptions = {}): Promise<ApiResponse<GetRetainedTelemetryPresenceResponse>>
```

## `telemetry.getTrace`

Get all spans for a trace

`GET /v1/traces/{trace_id}`

```ts
getTrace(trace_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetTraceResponse>>
```

## `telemetry.getTraceSettings`

Get the caller account's trace settings

`GET /v1/trace-settings`

```ts
getTraceSettings(options: RequestOptions = {}): Promise<ApiResponse<GetTraceSettingsResponse>>
```

## `telemetry.ingestLogs`

Ingest a batch of log records

`POST /v1/logs`

```ts
ingestLogs(body: IngestLogsBody, options: RequestOptions = {}): Promise<ApiResponse<IngestLogsResponse>>
```

## `telemetry.ingestSpans`

Ingest a batch of trace spans

`POST /v1/spans`

```ts
ingestSpans(body: IngestSpansBody, options: RequestOptions = {}): Promise<ApiResponse<IngestSpansResponse>>
```

## `telemetry.listLogGroups`

List log groups (or look up one by name)

`GET /v1/log-groups`

```ts
listLogGroups(query: ListLogGroupsQuery = {}, options: RequestOptions = {}): Promise<Page<ListLogGroupsResponse, ListLogGroupsItem>>
```

## `telemetry.listMetricNames`

List the distinct metric names emitted in a time window

`GET /v1/metrics/names`

```ts
listMetricNames(query: ListMetricNamesQuery, options: RequestOptions = {}): Promise<Page<ListMetricNamesResponse, ListMetricNamesItem>>
```

## `telemetry.listMetricNamesPost`

List the distinct metric names emitted in a time window (form body)

`POST /v1/metrics/names`

```ts
listMetricNamesPost(body: ListMetricNamesPostBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<ListMetricNamesPostResponse>>
```

## `telemetry.listMetricSeries`

List distinct label sets for a metric

`GET /v1/metrics/series`

```ts
listMetricSeries(query: ListMetricSeriesQuery, options: RequestOptions = {}): Promise<ApiResponse<ListMetricSeriesResponse>>
```

## `telemetry.listMetricSeriesPost`

List distinct label sets for a metric (form body)

`POST /v1/metrics/series`

```ts
listMetricSeriesPost(body: ListMetricSeriesPostBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<ListMetricSeriesPostResponse>>
```

## `telemetry.putTraceSettings`

Update the caller account's trace settings

`PUT /v1/trace-settings`

```ts
putTraceSettings(body: PutTraceSettingsBody, options: RequestOptions = {}): Promise<ApiResponse<PutTraceSettingsResponse>>
```

## `telemetry.queryMetricsInstant`

Instant structured metric query

`GET /v1/metrics/query`

```ts
queryMetricsInstant(query: QueryMetricsInstantQuery, options: RequestOptions = {}): Promise<ApiResponse<QueryMetricsInstantResponse>>
```

## `telemetry.queryMetricsInstantPost`

Instant structured metric query (form body)

`POST /v1/metrics/query`

```ts
queryMetricsInstantPost(body: QueryMetricsInstantPostBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<QueryMetricsInstantPostResponse>>
```

## `telemetry.queryMetricsRange`

Range structured metric query

`GET /v1/metrics/query_range`

```ts
queryMetricsRange(query: QueryMetricsRangeQuery, options: RequestOptions = {}): Promise<ApiResponse<QueryMetricsRangeResponse>>
```

## `telemetry.queryMetricsRangePost`

Range structured metric query (form body)

`POST /v1/metrics/query_range`

```ts
queryMetricsRangePost(body: QueryMetricsRangePostBody | undefined = undefined, options: RequestOptions = {}): Promise<ApiResponse<QueryMetricsRangePostResponse>>
```

## `telemetry.searchLogs`

Search log records

`GET /v1/logs`

```ts
searchLogs(query: SearchLogsQuery, options: RequestOptions = {}): Promise<ApiResponse<SearchLogsResponse>>
```

## `telemetry.searchTraces`

List traces

`GET /v1/traces`

```ts
searchTraces(query: SearchTracesQuery, options: RequestOptions = {}): Promise<ApiResponse<SearchTracesResponse>>
```

## `telemetry.updateLogGroup`

Update a log group

`PATCH /v1/log-groups/{id}`

```ts
updateLogGroup(id: string, body: UpdateLogGroupBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateLogGroupResponse>>
```

## `telemetry.writeMetrics`

Prometheus remote_write ingest

`POST /v1/metrics/write`

```ts
writeMetrics(body: WriteMetricsBody, options: RequestOptions = {}): Promise<void>
```

## `workspace.addUser`

Add user to organization

`POST /v1/users`

```ts
addUser(body: AddUserBody, options: RequestOptions = {}): Promise<ApiResponse<AddUserResponse>>
```

## `workspace.addUserToGroup`

Add user to group

`POST /v1/users/{user_id}/groups`

```ts
addUserToGroup(user_id: string, body: AddUserToGroupBody, options: RequestOptions = {}): Promise<void>
```

## `workspace.assignAccountRole`

Assign account role

`POST /v1/accounts/{account_id}/role-assignments`

```ts
assignAccountRole(account_id: string, body: AssignAccountRoleBody, options: RequestOptions = {}): Promise<ApiResponse<AssignAccountRoleResponse>>
```

## `workspace.attachGroupPolicy`

Attach policy to group

`POST /v1/groups/{group_id}/policies`

```ts
attachGroupPolicy(group_id: string, body: AttachGroupPolicyBody, options: RequestOptions = {}): Promise<void>
```

## `workspace.attachRolePolicy`

Attach policy to role

`POST /v1/roles/{role_id}/policies`

```ts
attachRolePolicy(role_id: string, body: AttachRolePolicyBody, options: RequestOptions = {}): Promise<void>
```

## `workspace.attachServiceAccountPolicy`

Attach policy to service account

`POST /v1/service-accounts/{service_account_id}/policies`

```ts
attachServiceAccountPolicy(service_account_id: string, body: AttachServiceAccountPolicyBody, options: RequestOptions = {}): Promise<void>
```

## `workspace.attachUserPolicy`

Attach policy to user

`POST /v1/users/{user_id}/policies`

```ts
attachUserPolicy(user_id: string, body: AttachUserPolicyBody, options: RequestOptions = {}): Promise<void>
```

## `workspace.cancelInvitation`

Cancel invitation

`DELETE /v1/invitations/{invitation_id}`

```ts
cancelInvitation(invitation_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.createAccount`

Create account

`POST /v1/accounts`

```ts
createAccount(body: CreateAccountBody, options: RequestOptions = {}): Promise<ApiResponse<CreateAccountResponse>>
```

## `workspace.createGroup`

Create group

`POST /v1/groups`

```ts
createGroup(body: CreateGroupBody, options: RequestOptions = {}): Promise<ApiResponse<CreateGroupResponse>>
```

## `workspace.createPolicy`

Create policy

`POST /v1/policies`

```ts
createPolicy(body: CreatePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<CreatePolicyResponse>>
```

## `workspace.deleteAccount`

Delete account

`DELETE /v1/accounts/{account_id}`

```ts
deleteAccount(account_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.deleteGroup`

Delete group

`DELETE /v1/groups/{group_id}`

```ts
deleteGroup(group_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.deleteGroupInlinePolicy`

Delete a group's inline policy by name

`DELETE /v1/groups/{group_id}/inline-policies/{policy_name}`

```ts
deleteGroupInlinePolicy(group_id: string, policy_name: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.deleteOrganization`

Delete organization

`DELETE /v1/organizations/{organization_id}`

```ts
deleteOrganization(organization_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.deletePolicy`

Delete policy

`DELETE /v1/policies/{policy_id}`

```ts
deletePolicy(policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.deleteUserInlinePolicy`

Delete a user's inline policy by name

`DELETE /v1/users/{user_id}/inline-policies/{policy_name}`

```ts
deleteUserInlinePolicy(user_id: string, policy_name: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.detachGroupPolicy`

Detach policy from group

`DELETE /v1/groups/{group_id}/policies/{policy_id}`

```ts
detachGroupPolicy(group_id: string, policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.detachRolePolicy`

Detach policy from role

`DELETE /v1/roles/{role_id}/policies/{policy_id}`

```ts
detachRolePolicy(role_id: string, policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.detachServiceAccountPolicy`

Detach policy from service account

`DELETE /v1/service-accounts/{service_account_id}/policies/{policy_id}`

```ts
detachServiceAccountPolicy(service_account_id: string, policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.detachUserPolicy`

Detach policy from user

`DELETE /v1/users/{user_id}/policies/{policy_id}`

```ts
detachUserPolicy(user_id: string, policy_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.getAccount`

Get account

`GET /v1/accounts/{account_id}`

```ts
getAccount(account_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetAccountResponse>>
```

## `workspace.getAccountResources`

Check account resource presence

`GET /v1/accounts/{account_id}/resources`

```ts
getAccountResources(account_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetAccountResourcesResponse>>
```

## `workspace.getGroup`

Get group

`GET /v1/groups/{group_id}`

```ts
getGroup(group_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetGroupResponse>>
```

## `workspace.getGroupInlinePolicy`

Get a group's inline policy by name

`GET /v1/groups/{group_id}/inline-policies/{policy_name}`

```ts
getGroupInlinePolicy(group_id: string, policy_name: string, options: RequestOptions = {}): Promise<ApiResponse<GetGroupInlinePolicyResponse>>
```

## `workspace.getInvitation`

Get invitation

`GET /v1/invitations/{invitation_id}`

```ts
getInvitation(invitation_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetInvitationResponse>>
```

## `workspace.getOrganization`

Get organization

`GET /v1/organizations/{organization_id}`

```ts
getOrganization(organization_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetOrganizationResponse>>
```

## `workspace.getPolicy`

Get policy

`GET /v1/policies/{policy_id}`

```ts
getPolicy(policy_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetPolicyResponse>>
```

## `workspace.getUser`

Get user

`GET /v1/users/{user_id}`

```ts
getUser(user_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetUserResponse>>
```

## `workspace.getUserInlinePolicy`

Get a user's inline policy by name

`GET /v1/users/{user_id}/inline-policies/{policy_name}`

```ts
getUserInlinePolicy(user_id: string, policy_name: string, options: RequestOptions = {}): Promise<ApiResponse<GetUserInlinePolicyResponse>>
```

## `workspace.getUserPermissionBoundary`

Get a user's permission boundary

`GET /v1/users/{user_id}/permission-boundary`

```ts
getUserPermissionBoundary(user_id: string, options: RequestOptions = {}): Promise<ApiResponse<GetUserPermissionBoundaryResponse>>
```

## `workspace.listAccountRoleAssignments`

List account role assignments

`GET /v1/accounts/{account_id}/role-assignments`

```ts
listAccountRoleAssignments(account_id: string, options: RequestOptions = {}): Promise<Page<ListAccountRoleAssignmentsResponse, ListAccountRoleAssignmentsItem>>
```

## `workspace.listAccountRoles`

List assigned account roles

`GET /v1/account-roles`

```ts
listAccountRoles(options: RequestOptions = {}): Promise<Page<ListAccountRolesResponse, ListAccountRolesItem>>
```

## `workspace.listAccounts`

List accounts

`GET /v1/accounts`

```ts
listAccounts(query: ListAccountsQuery = {}, options: RequestOptions = {}): Promise<Page<ListAccountsResponse, ListAccountsItem>>
```

## `workspace.listGroupInlinePolicies`

List a group's inline policies

`GET /v1/groups/{group_id}/inline-policies`

```ts
listGroupInlinePolicies(group_id: string, query: ListGroupInlinePoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListGroupInlinePoliciesResponse, ListGroupInlinePoliciesItem>>
```

## `workspace.listGroupPolicies`

List group policies

`GET /v1/groups/{group_id}/policies`

```ts
listGroupPolicies(group_id: string, query: ListGroupPoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListGroupPoliciesResponse, ListGroupPoliciesItem>>
```

## `workspace.listGroupUsers`

List group users

`GET /v1/groups/{group_id}/users`

```ts
listGroupUsers(group_id: string, query: ListGroupUsersQuery = {}, options: RequestOptions = {}): Promise<Page<ListGroupUsersResponse, ListGroupUsersItem>>
```

## `workspace.listGroups`

List groups

`GET /v1/groups`

```ts
listGroups(query: ListGroupsQuery = {}, options: RequestOptions = {}): Promise<Page<ListGroupsResponse, ListGroupsItem>>
```

## `workspace.listInvitations`

List invitations

`GET /v1/invitations`

```ts
listInvitations(query: ListInvitationsQuery = {}, options: RequestOptions = {}): Promise<Page<ListInvitationsResponse, ListInvitationsItem>>
```

## `workspace.listOrganizations`

List organizations

`GET /v1/organizations`

```ts
listOrganizations(query: ListOrganizationsQuery = {}, options: RequestOptions = {}): Promise<Page<ListOrganizationsResponse, ListOrganizationsItem>>
```

## `workspace.listPolicies`

List policies

`GET /v1/policies`

```ts
listPolicies(query: ListPoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListPoliciesResponse, ListPoliciesItem>>
```

## `workspace.listPolicyGroups`

List groups with policy

`GET /v1/policies/{policy_id}/groups`

```ts
listPolicyGroups(policy_id: string, query: ListPolicyGroupsQuery = {}, options: RequestOptions = {}): Promise<Page<ListPolicyGroupsResponse, ListPolicyGroupsItem>>
```

## `workspace.listPolicyRoles`

List roles with policy

`GET /v1/policies/{policy_id}/roles`

```ts
listPolicyRoles(policy_id: string, query: ListPolicyRolesQuery = {}, options: RequestOptions = {}): Promise<Page<ListPolicyRolesResponse, ListPolicyRolesItem>>
```

## `workspace.listPolicyServiceAccounts`

List service accounts with policy

`GET /v1/policies/{policy_id}/service-accounts`

```ts
listPolicyServiceAccounts(policy_id: string, query: ListPolicyServiceAccountsQuery = {}, options: RequestOptions = {}): Promise<Page<ListPolicyServiceAccountsResponse, ListPolicyServiceAccountsItem>>
```

## `workspace.listPolicyUsers`

List users with policy

`GET /v1/policies/{policy_id}/users`

```ts
listPolicyUsers(policy_id: string, query: ListPolicyUsersQuery = {}, options: RequestOptions = {}): Promise<Page<ListPolicyUsersResponse, ListPolicyUsersItem>>
```

## `workspace.listRolePolicies`

List role policies

`GET /v1/roles/{role_id}/policies`

```ts
listRolePolicies(role_id: string, query: ListRolePoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListRolePoliciesResponse, ListRolePoliciesItem>>
```

## `workspace.listServiceAccountPolicies`

List service account policies

`GET /v1/service-accounts/{service_account_id}/policies`

```ts
listServiceAccountPolicies(service_account_id: string, query: ListServiceAccountPoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListServiceAccountPoliciesResponse, ListServiceAccountPoliciesItem>>
```

## `workspace.listUserGroups`

List user groups

`GET /v1/users/{user_id}/groups`

```ts
listUserGroups(user_id: string, query: ListUserGroupsQuery = {}, options: RequestOptions = {}): Promise<Page<ListUserGroupsResponse, ListUserGroupsItem>>
```

## `workspace.listUserInlinePolicies`

List a user's inline policies

`GET /v1/users/{user_id}/inline-policies`

```ts
listUserInlinePolicies(user_id: string, query: ListUserInlinePoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListUserInlinePoliciesResponse, ListUserInlinePoliciesItem>>
```

## `workspace.listUserPolicies`

List user policies

`GET /v1/users/{user_id}/policies`

```ts
listUserPolicies(user_id: string, query: ListUserPoliciesQuery = {}, options: RequestOptions = {}): Promise<Page<ListUserPoliciesResponse, ListUserPoliciesItem>>
```

## `workspace.listUsers`

List users

`GET /v1/users`

```ts
listUsers(query: ListUsersQuery = {}, options: RequestOptions = {}): Promise<Page<ListUsersResponse, ListUsersItem>>
```

## `workspace.putGroupInlinePolicy`

Create or replace a group's inline policy

`PUT /v1/groups/{group_id}/inline-policies/{policy_name}`

```ts
putGroupInlinePolicy(group_id: string, policy_name: string, body: PutGroupInlinePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<PutGroupInlinePolicyResponse>>
```

## `workspace.putUserInlinePolicy`

Create or replace a user's inline policy

`PUT /v1/users/{user_id}/inline-policies/{policy_name}`

```ts
putUserInlinePolicy(user_id: string, policy_name: string, body: PutUserInlinePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<PutUserInlinePolicyResponse>>
```

## `workspace.removeAccountRoleAssignment`

Remove account role assignment

`DELETE /v1/accounts/{account_id}/role-assignments/{assignment_id}`

```ts
removeAccountRoleAssignment(account_id: string, assignment_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.removeUser`

Remove user from organization

`DELETE /v1/users/{user_id}`

```ts
removeUser(user_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.removeUserFromGroup`

Remove user from group

`DELETE /v1/users/{user_id}/groups/{group_id}`

```ts
removeUserFromGroup(user_id: string, group_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.removeUserPermissionBoundary`

Remove a user's permission boundary

`DELETE /v1/users/{user_id}/permission-boundary`

```ts
removeUserPermissionBoundary(user_id: string, options: RequestOptions = {}): Promise<void>
```

## `workspace.setUserPermissionBoundary`

Set a user's permission boundary

`PUT /v1/users/{user_id}/permission-boundary`

```ts
setUserPermissionBoundary(user_id: string, body: SetUserPermissionBoundaryBody, options: RequestOptions = {}): Promise<void>
```

## `workspace.updateAccount`

Update account

`PATCH /v1/accounts/{account_id}`

```ts
updateAccount(account_id: string, body: UpdateAccountBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateAccountResponse>>
```

## `workspace.updateGroup`

Update group

`PATCH /v1/groups/{group_id}`

```ts
updateGroup(group_id: string, body: UpdateGroupBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateGroupResponse>>
```

## `workspace.updateOrganization`

Update organization

`PATCH /v1/organizations/{organization_id}`

```ts
updateOrganization(organization_id: string, body: UpdateOrganizationBody, options: RequestOptions = {}): Promise<ApiResponse<UpdateOrganizationResponse>>
```

## `workspace.updatePolicy`

Update policy

`PATCH /v1/policies/{policy_id}`

```ts
updatePolicy(policy_id: string, body: UpdatePolicyBody, options: RequestOptions = {}): Promise<ApiResponse<UpdatePolicyResponse>>
```
