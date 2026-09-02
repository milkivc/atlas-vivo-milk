/**
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
