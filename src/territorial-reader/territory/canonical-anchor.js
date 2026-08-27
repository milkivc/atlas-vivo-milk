'use strict';
// SPDX-License-Identifier: EUPL-1.2

const crypto = require('crypto');

const TERRITORY_STATES = Object.freeze([
  'PENDENTE',
  'PUBLICAVEL',
  'LATENCIA_PUBLICA',
  'REVISAO',
  'RETIRADO',
]);

function clean(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

function stableId(namespace, code) {
  return `milk:territory:${namespace}:${clean(code)}`;
}

function validateCoordinates(coordinates) {
  if (coordinates == null) return null;
  const lat = Number(coordinates.lat);
  const lng = Number(coordinates.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    throw new Error('INVALID_REAL_COORDINATES');
  }
  return { lat, lng };
}

function canonicalParish({
  dtmnfr,
  name,
  municipalityCode = null,
  municipalityName = null,
  districtOrRegion = null,
  aliases = [],
  coordinates = null,
  source,
  sourceHash = null,
  referenceEdition,
  state = 'PENDENTE',
  temConteudoCuratorial = false,
  history = [],
} = {}) {
  const code = clean(dtmnfr);
  const canonicalName = clean(name);
  if (!code) throw new Error('DTMNFR_REQUIRED');
  if (!canonicalName) throw new Error('CANONICAL_PARISH_NAME_REQUIRED');
  if (!source || !source.url || !source.authority) throw new Error('OFFICIAL_SOURCE_PROVENANCE_REQUIRED');
  if (!referenceEdition) throw new Error('TERRITORIAL_REFERENCE_EDITION_REQUIRED');
  if (!TERRITORY_STATES.includes(state)) throw new Error('INVALID_TERRITORY_STATE');

  const normalizedAliases = [...new Set((aliases || []).map(clean).filter(Boolean))]
    .filter((alias) => alias !== canonicalName);

  return {
    id: stableId('parish', code),
    type: 'FREGUESIA',
    dtmnfr: code,
    canonicalName,
    aliases: normalizedAliases,
    municipality: {
      code: clean(municipalityCode) || null,
      canonicalName: clean(municipalityName) || null,
    },
    districtOrRegion: clean(districtOrRegion) || null,
    coordinates: validateCoordinates(coordinates),
    source: {
      url: String(source.url),
      authority: clean(source.authority),
      licenceOrReuseCondition: source.licenceOrReuseCondition || 'A_VERIFICAR_POR_RECURSO',
    },
    sourceHash,
    referenceEdition: String(referenceEdition),
    state,
    tem_conteudo_curatorial: Boolean(temConteudoCuratorial),
    history: Array.isArray(history) ? history.map((entry) => ({ ...entry })) : [],
    humanValidationRequired: true,
    publicationAutomatic: false,
  };
}

function canonicalMunicipality({ code, name, aliases = [], districtOrRegion = null, source, referenceEdition, state = 'PENDENTE', history = [] } = {}) {
  const municipalityCode = clean(code);
  const canonicalName = clean(name);
  if (!municipalityCode) throw new Error('MUNICIPALITY_CODE_REQUIRED');
  if (!canonicalName) throw new Error('CANONICAL_MUNICIPALITY_NAME_REQUIRED');
  if (!source || !source.url || !source.authority) throw new Error('OFFICIAL_SOURCE_PROVENANCE_REQUIRED');
  if (!referenceEdition) throw new Error('TERRITORIAL_REFERENCE_EDITION_REQUIRED');
  if (!TERRITORY_STATES.includes(state)) throw new Error('INVALID_TERRITORY_STATE');
  return {
    id: stableId('municipality', municipalityCode),
    type: 'MUNICIPIO',
    code: municipalityCode,
    canonicalName,
    aliases: [...new Set((aliases || []).map(clean).filter(Boolean))].filter((alias) => alias !== canonicalName),
    districtOrRegion: clean(districtOrRegion) || null,
    source: { ...source },
    referenceEdition: String(referenceEdition),
    state,
    history: Array.isArray(history) ? history.map((entry) => ({ ...entry })) : [],
    humanValidationRequired: true,
    publicationAutomatic: false,
  };
}

function transitionTerritoryState(entity, { to, at, reason, validatorId = null } = {}) {
  if (!entity || !entity.id) throw new Error('CANONICAL_TERRITORY_REQUIRED');
  if (!TERRITORY_STATES.includes(to)) throw new Error('INVALID_TERRITORY_STATE');
  if (!at || !reason) throw new Error('STATE_TRANSITION_PROVENANCE_REQUIRED');
  return {
    ...entity,
    state: to,
    history: [
      ...(entity.history || []),
      { from: entity.state, to, at, reason, validatorId, automated: false },
    ],
  };
}

function auditReferenceCoverage(entities = [], { referenceEdition, expectedCodes = [] } = {}) {
  if (!referenceEdition) throw new Error('TERRITORIAL_REFERENCE_EDITION_REQUIRED');
  const observed = new Set(entities.map((entity) => clean(entity.dtmnfr || entity.code)).filter(Boolean));
  const expected = new Set((expectedCodes || []).map(clean).filter(Boolean));
  const missing = [...expected].filter((code) => !observed.has(code));
  const unexpected = [...observed].filter((code) => expected.size && !expected.has(code));
  return {
    referenceEdition,
    observedCount: observed.size,
    expectedCount: expected.size || null,
    missingCodes: missing,
    unexpectedCodes: unexpected,
    completeAgainstReference: expected.size ? missing.length === 0 : null,
    historicalFixedCountAssumed: false,
    humanValidationRequired: true,
  };
}

function sourceFingerprint(sourceObject) {
  return crypto.createHash('sha256').update(JSON.stringify(sourceObject)).digest('hex');
}

module.exports = {
  TERRITORY_STATES,
  canonicalParish,
  canonicalMunicipality,
  transitionTerritoryState,
  auditReferenceCoverage,
  validateCoordinates,
  sourceFingerprint,
};
