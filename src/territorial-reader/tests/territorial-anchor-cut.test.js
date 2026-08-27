'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  canonicalParish,
  canonicalMunicipality,
  transitionTerritoryState,
  auditReferenceCoverage,
} = require('../territory/canonical-anchor');
const { operationalCut, validateCoexistingCuts } = require('../territory/operational-cut');

const source = {
  url: 'https://www.dgterritorio.gov.pt/caop',
  authority: 'DGT',
  licenceOrReuseCondition: 'A_VERIFICAR_POR_RECURSO',
};

test('freguesia canónica exige DTMNFR, fonte oficial e edição territorial', () => {
  assert.throws(() => canonicalParish({ name: 'Exemplo', source, referenceEdition: 'CAOP-X' }), /DTMNFR_REQUIRED/);
  const parish = canonicalParish({
    dtmnfr: '110601', name: 'Exemplo', aliases: ['Exemplo Antigo'], municipalityCode: '1106', municipalityName: 'Município',
    source, referenceEdition: 'CAOP-X', coordinates: { lat: 38.72, lng: -9.14 },
  });
  assert.equal(parish.id, 'milk:territory:parish:110601');
  assert.equal(parish.state, 'PENDENTE');
  assert.equal(parish.publicationAutomatic, false);
});

test('município canónico preserva aliases e não publica automaticamente', () => {
  const municipality = canonicalMunicipality({ code: '1106', name: 'Município', aliases: ['Nome histórico'], source, referenceEdition: 'CAOP-X' });
  assert.deepEqual(municipality.aliases, ['Nome histórico']);
  assert.equal(municipality.humanValidationRequired, true);
});

test('transição territorial fica historizada e nunca é automática', () => {
  const parish = canonicalParish({ dtmnfr: '110601', name: 'Exemplo', source, referenceEdition: 'CAOP-X' });
  const next = transitionTerritoryState(parish, { to: 'LATENCIA_PUBLICA', at: '2026-08-27T00:00:00Z', reason: 'conteúdo público ainda escasso' });
  assert.equal(next.state, 'LATENCIA_PUBLICA');
  assert.equal(next.history[0].automated, false);
});

test('cobertura é avaliada contra edição oficial fornecida, não contra contagem histórica hardcoded', () => {
  const p1 = canonicalParish({ dtmnfr: '1', name: 'A', source, referenceEdition: 'REF' });
  const audit = auditReferenceCoverage([p1], { referenceEdition: 'REF', expectedCodes: ['1','2'] });
  assert.deepEqual(audit.missingCodes, ['2']);
  assert.equal(audit.historicalFixedCountAssumed, false);
  assert.equal(audit.completeAgainstReference, false);
});

test('recorte operacional exige vínculo canónico e justificação', () => {
  assert.throws(() => operationalCut({ id: 'cut-1', type: 'JARDIM', parishId: '110601', justification: 'x' }), /CANONICAL_PARISH_LINK_REQUIRED/);
  assert.throws(() => operationalCut({ id: 'cut-1', type: 'JARDIM', parishId: 'milk:territory:parish:110601' }), /JUSTIFICATION_REQUIRED/);
  const cut = operationalCut({ id: 'cut-1', type: 'JARDIM', parishId: 'milk:territory:parish:110601', justification: 'observação espacial documentada', evidenceIds: ['e1'] });
  assert.equal(cut.parishTreatedAsHomogeneousBlock, false);
  assert.equal(cut.humanValidationRequired, true);
});

test('múltiplos recortes podem coexistir na mesma freguesia sem pressupor homogeneidade', () => {
  const parishId = 'milk:territory:parish:110601';
  const cuts = [
    operationalCut({ id: 'cut-1', type: 'JARDIM', parishId, justification: 'jardim observado' }),
    operationalCut({ id: 'cut-2', type: 'EIXO_COMERCIAL', parishId, justification: 'eixo documentado' }),
  ];
  const result = validateCoexistingCuts(cuts);
  assert.equal(result.multipleCutsPerParishAllowed, true);
  assert.equal(result.homogeneityAssumed, false);
  assert.equal(result.parishGroups[parishId].length, 2);
});
