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

const approved = {
  layer: "public",
  human_validation: { status: "approved" },
  source_receipt: { sha256: "a".repeat(64) },
  reverse_link_to_private: false
};
assert.equal(context.validate(approved).layer, "public");

const contract = {
  schema_version: "1.1.0",
  layer: "public",
  surface: "MILK public authorial experience",
  public_contract: {},
  territorial_scope: {},
  curatorial_incorporation: {},
  assets_and_rights: {},
  runtime_sources: {},
  ai_milk: {},
  human_validation: { status: "required" },
  reverse_link_to_private: false
};
assert.equal(context.validate(contract).human_validation.status, "required");

for (const payload of [
  { ...approved, layer: "internal" },
  { ...approved, human_validation: { status: "pending" } },
  { ...approved, reverse_link_to_private: true },
  { ...approved, source_receipt: { sha256: "invalid" } },
  { ...approved, unexpected_field: "x" }
]) {
  assert.throws(() => context.validate(payload));
}

console.log("MILK_PUBLIC_BOUNDARY_OK");
