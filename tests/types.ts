import { Client } from "../src/index.js";
import type { ComputeTypes } from "../src/index.js";
const client = new Client({ accessToken: "example", region: "sa-saopaulo-1" });
const body: ComputeTypes.CreateInstanceBody = {
  name: "vm",
  flavor: "f",
  networks: [],
};
void client.compute.createInstance(body);
void client.compute.listInstances({ limit: 10, current_state: "running" });
void client.storage.deleteBucketLifecycle("bucket", {
  headers: { "If-Match": "etag" },
});
// @ts-expect-error The create body requires a flavor and networks.
void client.compute.createInstance({ name: "vm" });
// @ts-expect-error Query types are not arbitrary strings.
void client.compute.listInstances({ limit: "10" });
// @ts-expect-error The optimistic concurrency header is required.
void client.storage.deleteBucketLifecycle("bucket", {});
// @ts-expect-error State enums reject unknown values.
void client.compute.listInstances({ current_state: "unknown-state" });
async function typedPage() {
  for await (const item of client.compute.listInstancesAll()) {
    const id: string | undefined = item.id;
    void id;
  }
}
void typedPage;
