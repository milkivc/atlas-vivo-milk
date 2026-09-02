#!/usr/bin/env python3
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]

boundary = ROOT / 'deploy/atlas-public/ia-milk-public-boundary.js'
boundary.write_text('''/**
 * Fronteira da superfície pública MILK.
 * Valida apenas o contrato público materializado e não incorpora vocabulário,
 * identificadores, rotas ou esquemas reservados.
 */

const PUBLIC_MANIFEST_KEYS = new Set([
  "schema_version",
  "layer",
  "surface",
  "public_contract",
  "territorial_scope",
  "curatorial_incorporation",
  "assets_and_rights",
  "runtime_sources",
  "ai_milk",
  "human_validation",
  "reverse_link_to_private",
  "source_receipt"
]);

function assertPublicEnvelope(payload) {
  for (const key of Object.keys(payload)) {
    if (!PUBLIC_MANIFEST_KEYS.has(key)) {
      throw new Error(`Campo não previsto no contrato público: ${key}`);
    }
  }
}

export function validatePublicMaterialization(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("Produto público inválido");
  }
  assertPublicEnvelope(payload);
  if (payload.layer !== "public") throw new Error("A superfície aceita apenas layer=public");

  const validationStatus = payload.human_validation?.status;
  if (!["required", "approved"].includes(validationStatus)) {
    throw new Error("Estado de validação humana pública inválido");
  }

  if (validationStatus === "approved") {
    if (!payload.source_receipt?.sha256 || !/^[a-f0-9]{64}$/i.test(payload.source_receipt.sha256)) {
      throw new Error("Receipt SHA-256 público em falta ou inválido");
    }
  }

  if (payload.reverse_link_to_private !== false) {
    throw new Error("Ligação reversa reservada não permitida");
  }
  return Object.freeze(structuredClone(payload));
}

export async function loadPublicMilkManifest(url = "./public-manifest.json") {
  const response = await fetch(url, {
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "application/json" }
  });
  if (!response.ok) throw new Error(`Manifesto público indisponível: ${response.status}`);
  return validatePublicMaterialization(await response.json());
}

export function installPublicMilkBoundary() {
  return loadPublicMilkManifest()
    .then((manifest) => {
      window.dispatchEvent(new CustomEvent("milk:public-ready", { detail: manifest }));
      return manifest;
    })
    .catch((error) => {
      window.dispatchEvent(new CustomEvent("milk:public-blocked", {
        detail: { reason: error.message }
      }));
      throw error;
    });
}

if (typeof window !== "undefined") installPublicMilkBoundary();
''', encoding='utf-8')

machine = ROOT / 'deploy/atlas-public/experience-machine.js'
text = machine.read_text(encoding='utf-8')
text = text.replace(
    '// PUBLIC-ONLY. Não contém nem pode reconstruir a Camada Invisível.',
    '// PUBLIC-ONLY. A superfície não incorpora mecanismos reservados.'
)
replacement = '''export function assertPublicPayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('PUBLIC_PAYLOAD_INVALID');
  }
  if (Object.hasOwn(payload, 'layer') && payload.layer !== 'public') {
    throw new Error('PUBLIC_LAYER_REQUIRED');
  }
  if (Object.hasOwn(payload, 'reverse_link_to_private') && payload.reverse_link_to_private !== false) {
    throw new Error('PUBLIC_REVERSE_LINK_REJECTED');
  }
  const serialized = JSON.stringify(payload);
  if (serialized.length > 2_000_000) throw new Error('PUBLIC_PAYLOAD_TOO_LARGE');
  return payload;
}

export {'''
text, count = re.subn(
    r"export function assertPublicPayload\(payload\) \{[\s\S]*?\n\}\n\nexport \{",
    replacement,
    text,
    count=1,
)
if count != 1:
    raise SystemExit('PUBLIC_PAYLOAD_FUNCTION_REWRITE_MISMATCH')
machine.write_text(text, encoding='utf-8')

catalog_path = ROOT / 'deploy/atlas-public/catalogo-curatorial.json'
catalog = json.loads(catalog_path.read_text(encoding='utf-8'))
catalog.pop('principio', None)
catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

manifest_path = ROOT / 'deploy/atlas-public/public-manifest.json'
manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
manifest.get('public_contract', {}).pop('public_reverse_link_to_invisible_layer', None)
manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

tests = ROOT / 'tests/ia-milk-public-boundary.test.mjs'
tests.write_text('''import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../deploy/atlas-public/ia-milk-public-boundary.js", import.meta.url), "utf8");
const transformed = source
  .replace(/export\\s+/g, "")
  .replace(/if \\(typeof window[\\s\\S]*$/m, "");
const context = { structuredClone, CustomEvent: class {}, window: undefined, fetch: undefined };
vm.createContext(context);
vm.runInContext(transformed + "\\nthis.validate = validatePublicMaterialization;", context);

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
''', encoding='utf-8')

if len(catalog.get('entradas', [])) != 49:
    raise SystemExit(f'CURATORIAL_CATALOG_COUNT_REGRESSION:{len(catalog.get("entradas", []))}')

print('PUBLIC_BOUNDARY_HARDENER=APPLIED')
print('CURATORIAL_CATALOG_COUNT=49')
