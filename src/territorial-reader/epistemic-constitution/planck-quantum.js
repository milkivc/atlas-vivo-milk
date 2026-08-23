'use strict';
// SPDX-License-Identifier: EUPL-1.2

const PLANCK_CONSTANT_SI = Object.freeze({
  value: 6.62607015e-34,
  unit: 'J·s',
  status: 'exact_SI_defined_constant',
  literalScientificUse: 'physics_only',
  authorialInterpretation: 'minimum epistemic granularity: no territorial hypothesis exists without at least one preserved evidence object',
  limitation: 'The physical constant is never used to measure people, parishes, needs, risk, culture or confidence.',
});

function evidenceQuantum(evidence = []) {
  const preserved = evidence.filter((item) => item && item.source && item.hash && item.quote !== undefined);
  return {
    admissible: preserved.length > 0,
    evidenceObjects: preserved.length,
    rule: 'AT_LEAST_ONE_PRESERVED_EVIDENCE_OBJECT',
    probability: null,
    priority: null,
  };
}

module.exports = { PLANCK_CONSTANT_SI, evidenceQuantum };
