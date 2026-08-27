'use strict';
// SPDX-License-Identifier: EUPL-1.2

function territorialLensing({ observedEffects = [], candidateLatentCauses = [] } = {}) {
  const effects = observedEffects.filter(Boolean);
  const causes = candidateLatentCauses.filter(Boolean).map((cause) => ({
    ...cause,
    state: 'LATENT_CAUSE_HYPOTHESIS',
    factualConclusion: null,
    humanValidationRequired: true,
  }));
  return {
    state: effects.length && causes.length ? 'LENSING_HYPOTHESES_READY' : 'INSUFFICIENT_EVIDENCE',
    observedEffects: effects,
    candidateLatentCauses: causes,
    literalPhysics: false,
    analogy: 'gravitational_lensing',
    humanValidationRequired: true,
  };
}

module.exports = { territorialLensing };
