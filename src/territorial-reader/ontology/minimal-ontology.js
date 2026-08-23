'use strict';
// SPDX-License-Identifier: EUPL-1.2

const CLASSES = Object.freeze([
  'Territory',
  'Evidence',
  'Claim',
  'Hypothesis',
  'Absence',
  'InfrastructureCandidate',
  'CuratorialMatch',
  'FundingCandidate',
  'ValidationEvent',
  'ProvenanceEvent',
]);

const RELATIONS = Object.freeze([
  'aboutTerritory',
  'supports',
  'contradicts',
  'derivedFrom',
  'dependsOn',
  'observedAt',
  'possibleResponse',
  'requiresValidation',
  'validatedBy',
  'hasProvenance',
]);

const STATES = Object.freeze([
  'PRESERVED_EVIDENCE',
  'NOT_FOUND_IN_CONSULTED_SOURCES',
  'DOCUMENTED_ABSENCE_CANDIDATE',
  'HYPOTHESIS_CANDIDATE',
  'BLOCKED_PENDING_HUMAN_REVIEW',
  'VALIDATED_HUMAN',
  'REJECTED_HUMAN',
]);

function assertMinimalVocabulary({ classes = CLASSES, relations = RELATIONS } = {}) {
  const classSet = new Set(classes);
  const relationSet = new Set(relations);
  if (classSet.size !== classes.length || relationSet.size !== relations.length) {
    throw new Error('ONTOLOGY_DUPLICATE_TERM');
  }
  if (classes.length > 16 || relations.length > 16) {
    throw new Error('ONTOLOGY_KERNEL_TOO_LARGE');
  }
  return {
    state: 'MINIMAL_ONTOLOGY_VALID',
    classCount: classes.length,
    relationCount: relations.length,
    openWorld: true,
    extensionPolicy: 'PROFILE_NOT_KERNEL',
  };
}

function toSemanticObject({ id, type, territoryId, state, provenance = [], humanValidationRequired = true, ...rest } = {}) {
  if (!id) throw new Error('SEMANTIC_OBJECT_ID_REQUIRED');
  if (!CLASSES.includes(type)) throw new Error('SEMANTIC_OBJECT_TYPE_OUTSIDE_KERNEL');
  return {
    '@id': id,
    '@type': `milk:${type}`,
    'milk:aboutTerritory': territoryId || null,
    'milk:state': state || null,
    'milk:hasProvenance': provenance,
    'milk:requiresValidation': Boolean(humanValidationRequired),
    ...rest,
  };
}

module.exports = { CLASSES, RELATIONS, STATES, assertMinimalVocabulary, toSemanticObject };
