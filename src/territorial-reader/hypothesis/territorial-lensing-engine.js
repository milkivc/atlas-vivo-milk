'use strict';
// SPDX-License-Identifier: EUPL-1.2

function territorialLensing({ effects = [], latentCandidates = [] } = {}) {
  const effectIds = new Set(effects.filter((e) => e && e.id && e.evidenceRef).map((e) => e.id));
  const candidates = latentCandidates.map((candidate) => {
    const supportedEffects = (candidate.explainsEffectIds || []).filter((id) => effectIds.has(id));
    return {
      id: candidate.id,
      label: candidate.label || null,
      supportedEffects,
      unsupportedEffectClaims: (candidate.explainsEffectIds || []).filter((id) => !effectIds.has(id)),
      state: supportedEffects.length ? 'LATENT_STRUCTURE_HYPOTHESIS' : 'INSUFFICIENT_EVIDENCE',
      factualConclusion: null,
      score: null,
      probability: null,
      humanValidationRequired: true,
    };
  });
  return {
    state: 'TERRITORIAL_LENSING_READY',
    literalGravitationalLensingApplied: false,
    candidates,
    humanValidationRequired: true,
  };
}

module.exports = { territorialLensing };
