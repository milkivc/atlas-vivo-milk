'use strict';
// SPDX-License-Identifier: EUPL-1.2

const HEISENBERG_UNCERTAINTY = Object.freeze({
  formula: 'ΔxΔp ≥ ħ/2',
  literalScientificUse: 'quantum_physics_only',
  authorialInterpretation: 'Toda hipótese territorial deve conservar e declarar a sua incerteza.',
  operationalUse: 'Expose knowns, unknowns, limitations and unresolved alternatives; never convert the physical relation into a territorial measurement.',
  limitations: 'Analogy only outside quantum physics; produces no territorial probability or confidence score.',
});

function expressUncertainty({ known = [], unknown = [], limitations = [], alternatives = [] } = {}) {
  return {
    state: unknown.length || limitations.length || alternatives.length ? 'UNCERTAINTY_EXPLICIT' : 'UNCERTAINTY_NOT_ELIMINATED',
    known: [...known],
    unknown: [...unknown],
    limitations: [...limitations],
    alternatives: [...alternatives],
    probability: null,
    confidenceScore: null,
    humanValidationRequired: true,
    scientificReference: HEISENBERG_UNCERTAINTY,
  };
}

module.exports = { HEISENBERG_UNCERTAINTY, expressUncertainty };
