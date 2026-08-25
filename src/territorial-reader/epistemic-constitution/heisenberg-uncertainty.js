'use strict';
// SPDX-License-Identifier: EUPL-1.2

const HEISENBERG_UNCERTAINTY = Object.freeze({
  formula: 'Δx·Δp ≥ ħ/2',
  literalScientificUse: 'quantum_physics_only',
  authorialInterpretation: 'Every territorial hypothesis must preserve what remains unknown or underdetermined.',
  operationalUse: 'metadata_only_no_territorial_measurement',
  limitations: 'The physical inequality is never used to calculate social, cultural or territorial uncertainty.',
});

function uncertaintyEnvelope({ known = [], unknown = [], alternatives = [] } = {}) {
  return {
    state: unknown.length || alternatives.length ? 'UNCERTAINTY_EXPLICIT' : 'UNCERTAINTY_NOT_ELIMINATED',
    known: [...known],
    unknown: [...unknown],
    alternatives: [...alternatives],
    probability: null,
    confidenceScore: null,
    literalPhysicsApplied: false,
    humanValidationRequired: true,
    scientificReference: HEISENBERG_UNCERTAINTY,
  };
}

module.exports = { HEISENBERG_UNCERTAINTY, uncertaintyEnvelope };
