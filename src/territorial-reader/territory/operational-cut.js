'use strict';
// SPDX-License-Identifier: EUPL-1.2

const CUT_TYPES = Object.freeze([
  'FREGUESIA',
  'SUBZONA',
  'JARDIM',
  'LARGO',
  'PRACA',
  'EIXO_COMERCIAL',
  'EQUIPAMENTO',
  'BORDA',
  'CIRCUITO',
  'PONTO_DE_FRICCAO',
  'MICROECOLOGIA_DE_USO',
  'MERCADO',
  'BIBLIOTECA',
  'ESCOLA',
  'COLETIVIDADE',
  'CENTRO_CIVICO',
  'PATRIMONIO_SUBUTILIZADO',
]);

function clean(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

function operationalCut({ id, type, parishId, name = null, justification, geometry = null, evidenceIds = [], parentCutId = null } = {}) {
  if (!id) throw new Error('OPERATIONAL_CUT_ID_REQUIRED');
  if (!CUT_TYPES.includes(type)) throw new Error('INVALID_OPERATIONAL_CUT_TYPE');
  if (!parishId || !String(parishId).startsWith('milk:territory:parish:')) throw new Error('CANONICAL_PARISH_LINK_REQUIRED');
  if (!clean(justification)) throw new Error('OPERATIONAL_CUT_JUSTIFICATION_REQUIRED');
  return {
    id: String(id),
    type,
    parishId: String(parishId),
    name: clean(name) || null,
    justification: clean(justification),
    geometry,
    evidenceIds: [...new Set((evidenceIds || []).filter(Boolean))],
    parentCutId: parentCutId || null,
    parishTreatedAsHomogeneousBlock: false,
    state: 'PENDENTE_VALIDACAO_HUMANA',
    publicationAutomatic: false,
    humanValidationRequired: true,
  };
}

function validateCoexistingCuts(cuts = []) {
  const ids = new Set();
  for (const cut of cuts) {
    if (!cut || !cut.id || !cut.parishId) throw new Error('INVALID_OPERATIONAL_CUT');
    if (ids.has(cut.id)) throw new Error('DUPLICATE_OPERATIONAL_CUT_ID');
    ids.add(cut.id);
  }
  const parishGroups = cuts.reduce((acc, cut) => {
    if (!acc[cut.parishId]) acc[cut.parishId] = [];
    acc[cut.parishId].push(cut.id);
    return acc;
  }, {});
  return {
    state: 'COEXISTING_CUTS_VALID',
    parishGroups,
    multipleCutsPerParishAllowed: true,
    homogeneityAssumed: false,
  };
}

module.exports = { CUT_TYPES, operationalCut, validateCoexistingCuts };
