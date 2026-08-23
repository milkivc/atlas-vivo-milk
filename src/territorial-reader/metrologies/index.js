'use strict';
// SPDX-License-Identifier: EUPL-1.2

const DEFINITIONS = Object.freeze({
  Batimetria: {
    originalRole: 'depth',
    operationalRule: 'Use literal environmental/depth data only from qualified sources; metaphorical depth remains interpretive.',
    requiresQualifiedData: true,
  },
  Bimetria: {
    originalRole: 'two-parameter relation',
    operationalRule: 'Compare two explicit variables or evidence regimes with units, provenance and scope.',
    requiresQualifiedData: true,
  },
  Assimetria: {
    originalRole: 'territorial imbalance',
    operationalRule: 'Describe documented distribution or visibility asymmetries; never profile protected individuals.',
    requiresQualifiedData: true,
  },
  Minometria: {
    originalRole: 'micro-scale',
    operationalRule: 'Track documented small-scale territorial signals with place/time provenance.',
    requiresQualifiedData: true,
  },
  Nanometria: {
    originalRole: 'nano/molecular scale',
    operationalRule: 'Return NOT_AVAILABLE unless a qualified laboratory or sensor source exists.',
    requiresQualifiedData: true,
  },
  Desmetria: {
    originalRole: 'disorder/chaos',
    operationalRule: 'Represent documented spatial or operational discontinuity; never score people or neighbourhoods as chaotic.',
    requiresQualifiedData: true,
  },
  Duametria: {
    originalRole: 'dual comparison',
    operationalRule: 'Compare two territories, states or claims only with explicit comparable dimensions and provenance.',
    requiresQualifiedData: true,
  },
  Nulometria: {
    originalRole: 'absence',
    operationalRule: 'Absence requires explicit/documented evidence; not-found is not absence.',
    requiresQualifiedData: true,
  },
  Ametria: {
    originalRole: 'qualitative/no unit',
    operationalRule: 'Use voluntary or validated qualitative statements; no sentiment, emotion or psychological inference.',
    requiresQualifiedData: false,
  },
  Dinametria: {
    originalRole: 'forces/flows',
    operationalRule: 'Use aggregate documented flows or time-series; apply privacy safeguards.',
    requiresQualifiedData: true,
  },
});

function evaluateMetrology(name, input = {}) {
  const definition = DEFINITIONS[name];
  if (!definition) throw new Error(`UNKNOWN_METROLOGY:${name}`);
  if (name === 'Nanometria' && !input.qualifiedSource) {
    return { name, state: 'NOT_AVAILABLE', result: null, humanValidationRequired: true, definition };
  }
  if (name === 'Nulometria' && !(input.explicitAbsenceEvidence || []).length) {
    return { name, state: 'INSUFFICIENT_EVIDENCE', result: null, humanValidationRequired: true, definition };
  }
  if (name === 'Ametria' && (input.sentimentScore !== undefined || input.psychologicalInference)) {
    return { name, state: 'BLOCKED_UNSAFE_INFERENCE', result: null, humanValidationRequired: true, definition };
  }
  return {
    name,
    state: 'EVIDENCE_READY_FOR_HUMAN_REVIEW',
    result: input.value ?? input.observation ?? null,
    humanValidationRequired: true,
    definition,
  };
}

module.exports = { DEFINITIONS, evaluateMetrology };
