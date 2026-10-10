import { Client } from "../src/index.js";
import type { ComputeTypes, LoadbalancerTypes } from "../src/index.js";
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

const scaling: LoadbalancerTypes.UpdateLoadBalancerBody = {
  min_count: 0,
  max_count: 3,
  autoscaling: {
    enabled: false,
    drain_seconds: 0,
    metrics: [
      { source: "cpu", target_type: "utilization", target_value: 60 },
      {
        source: "telemetry",
        target_type: "average_value",
        target_value: 100,
        name: "requests",
        labels: { service: "web" },
        sample_aggregation: "rate",
      },
    ],
  },
};
void client.loadbalancer.updateLoadBalancer("lb", scaling);
void client.compute.updateInstancePool("pool", { desired_count: 0 });
