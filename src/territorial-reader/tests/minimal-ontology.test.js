'use strict';
// SPDX-License-Identifier: EUPL-1.2

const test = require('node:test');
const assert = require('node:assert/strict');
const { CLASSES, RELATIONS, assertMinimalVocabulary, toSemanticObject } = require('../ontology/minimal-ontology');

test('ontologia territorial mantém núcleo mínimo e mundo aberto', () => {
  const out = assertMinimalVocabulary();
  assert.equal(out.state, 'MINIMAL_ONTOLOGY_VALID');
  assert.equal(out.openWorld, true);
  assert.equal(out.extensionPolicy, 'PROFILE_NOT_KERNEL');
  assert.ok(CLASSES.length <= 16);
  assert.ok(RELATIONS.length <= 16);
});

test('objeto semântico exige tipo do núcleo e validação humana por defeito', () => {
  const obj = toSemanticObject({
    id: 'urn:milk:hypothesis:H-0047',
    type: 'Hypothesis',
    territoryId: '110601',
    state: 'HYPOTHESIS_CANDIDATE',
    provenance: ['sha256:abc'],
  });
  assert.equal(obj['@type'], 'milk:Hypothesis');
  assert.equal(obj['milk:aboutTerritory'], '110601');
  assert.equal(obj['milk:requiresValidation'], true);
  assert.throws(() => toSemanticObject({ id: 'x', type: 'PersonProfile' }), /TYPE_OUTSIDE_KERNEL/);
});
