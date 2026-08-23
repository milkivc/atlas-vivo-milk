'use strict';
// SPDX-License-Identifier: EUPL-1.2

const HILBERT_OPEN_WORLD_ASSUMPTION = Object.freeze({
  mathematicalSource: 'Hilbert hotel paradox as analogy for open-ended enumerability',
  literalScientificUse: false,
  authorialInterpretation: 'A completed inventory never licenses the claim that a territory is exhausted.',
  operationalRule: 'NOT_FOUND_IS_NOT_ABSENT',
  limitation: 'This is an epistemic design analogy, not a theorem about territorial reality.',
});

function qualifyAbsence({ searchedSources = [], explicitAbsenceEvidence = [] } = {}) {
  if (explicitAbsenceEvidence.length > 0) {
    return {
      state: 'DOCUMENTED_ABSENCE_CANDIDATE',
      publishable: false,
      humanValidationRequired: true,
      evidenceCount: explicitAbsenceEvidence.length,
    };
  }
  return {
    state: searchedSources.length ? 'NOT_FOUND_IN_CONSULTED_SOURCES' : 'NOT_SEARCHED',
    publishable: false,
    humanValidationRequired: true,
    evidenceCount: 0,
  };
}

module.exports = { HILBERT_OPEN_WORLD_ASSUMPTION, qualifyAbsence };
