'use strict';
// SPDX-License-Identifier: EUPL-1.2

const FORBIDDEN = new Set(['psychological_profile','religion_inference','political_opinion_inference','health_inference','sexual_orientation_inference','ethnicity_inference','emotion_inference']);

function symbolicVitality(records = []) {
  const blocked = records.filter((r) => r && FORBIDDEN.has(r.inferenceType));
  const narratives = records.filter((r) => r && !FORBIDDEN.has(r.inferenceType)).map((r) => ({
    id: r.id || null,
    type: r.type || 'narrative_trace',
    statement: r.statement || null,
    evidenceRef: r.evidenceRef || null,
    status: r.status || 'NARRATIVE_NOT_FACT',
  }));
  return {
    state: blocked.length ? 'PARTIAL_BLOCK_UNSAFE_INFERENCE' : 'SYMBOLIC_VITALITY_READY',
    narratives,
    blockedCount: blocked.length,
    personalProfileProduced: false,
    humanValidationRequired: true,
  };
}

module.exports = { symbolicVitality };
