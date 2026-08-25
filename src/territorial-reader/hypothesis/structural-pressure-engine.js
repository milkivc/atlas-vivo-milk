'use strict';
// SPDX-License-Identifier: EUPL-1.2

function structuralPressure({ pressureEvidence = [], components = [] } = {}) {
  const documentedFailures = components.filter((c) => c && Array.isArray(c.failureEvidence) && c.failureEvidence.length);
  const sequenced = documentedFailures.filter((c) => Number.isFinite(c.failureSequence)).sort((a,b) => a.failureSequence - b.failureSequence);
  const first = sequenced[0] || null;
  return {
    state: pressureEvidence.length ? 'STRUCTURAL_PRESSURE_READING_READY' : 'INSUFFICIENT_PRESSURE_EVIDENCE',
    pressureEvidence: [...pressureEvidence],
    components: components.map((c) => ({
      id: c.id || null,
      type: c.type || null,
      limitEvidence: c.limitEvidence || [],
      absorptionEvidence: c.absorptionEvidence || [],
      saturationEvidence: c.saturationEvidence || [],
      failureEvidence: c.failureEvidence || [],
      failureSequence: Number.isFinite(c.failureSequence) ? c.failureSequence : null,
    })),
    firstFailurePoint: first ? { componentId: first.id || null, evidence: first.failureEvidence } : null,
    inferredFirstFailureWithoutSequence: false,
    humanValidationRequired: true,
  };
}

module.exports = { structuralPressure };
