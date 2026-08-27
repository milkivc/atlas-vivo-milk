import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../deploy/atlas-public/ia-milk-public-boundary.js", import.meta.url), "utf8");
const transformed = source
  .replace(/export\s+/g, "")
  .replace(/if \(typeof window[\s\S]*$/m, "");
const context = { structuredClone, CustomEvent: class {}, window: undefined, fetch: undefined };
vm.createContext(context);
vm.runInContext(transformed + "\nthis.validate = validatePublicMaterialization;", context);

const valid = {
  layer: "public",
  human_validation: { status: "approved" },
  source_receipt: { sha256: "a".repeat(64) },
  reverse_link_to_private: false,
  entries: [{ id: "public-1", title: "Curadoria pública" }]
};
assert.equal(context.validate(valid).layer, "public");

for (const payload of [
  { ...valid, layer: "internal" },
  { ...valid, human_validation: { status: "pending" } },
  { ...valid, reverse_link_to_private: true },
  { ...valid, source_receipt: { sha256: "invalid" } },
  { ...valid, entries: [{ internal_id: "x" }] },
  { ...valid, entries: [{ raw_evidence: "x" }] },
  { ...valid, token: "x" }
]) {
  assert.throws(() => context.validate(payload));
}

console.log("MILK_PUBLIC_BOUNDARY_OK");
