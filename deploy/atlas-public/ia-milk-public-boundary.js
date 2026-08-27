/**
 * Fronteira pública da IA MILK.
 *
 * Este módulo não executa modelos, não conhece endpoints privados e não importa
 * a Camada Invisível. Apenas aceita um produto público materializado, minimizado
 * e aprovado por validação humana.
 */

const FORBIDDEN_KEYS = new Set([
  "camada_invisivel",
  "invisible_layer",
  "evidence_graph",
  "hypothesis",
  "hipotese",
  "vulnerability",
  "vulnerabilidade",
  "sensitive",
  "restrito",
  "confidencial",
  "internal_id",
  "source_private",
  "raw_evidence",
  "mistral_prompt",
  "credential",
  "secret",
  "token"
]);

function assertNoForbiddenKeys(value, path = "$") {
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertNoForbiddenKeys(item, `${path}[${index}]`));
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (FORBIDDEN_KEYS.has(key.toLowerCase())) {
      throw new Error(`Campo proibido na superfície pública: ${path}.${key}`);
    }
    assertNoForbiddenKeys(child, `${path}.${key}`);
  }
}

export function validatePublicMaterialization(payload) {
  if (!payload || typeof payload !== "object") throw new Error("Produto público inválido");
  if (payload.layer !== "public") throw new Error("A superfície aceita apenas layer=public");
  if (payload.human_validation?.status !== "approved") {
    throw new Error("Validação humana pública em falta");
  }
  if (!payload.source_receipt?.sha256 || !/^[a-f0-9]{64}$/i.test(payload.source_receipt.sha256)) {
    throw new Error("Receipt SHA-256 público em falta ou inválido");
  }
  if (payload.reverse_link_to_private !== false) {
    throw new Error("Ligação reversa à Camada Invisível proibida");
  }
  assertNoForbiddenKeys(payload);
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
