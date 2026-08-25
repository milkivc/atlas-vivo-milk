'use strict';
// SPDX-License-Identifier: EUPL-1.2

const QUESTIONS = Object.freeze([
  'what_is_absent',
  'what_remains_alive',
  'what_is_dormant',
  'what_is_underused',
  'what_lost_support',
  'what_could_reappear',
  'what_right_is_poorly_materialised',
  'what_space_could_support_encounter_listening_permanence_play_repertoire',
  'what_milk_form_could_host_the_possibility',
]);

function possibilityProfile({ observations = [], candidates = [] } = {}) {
  return {
    state: 'POSSIBILITY_CANDIDATES_REQUIRE_HUMAN_VALIDATION',
    questions: QUESTIONS,
    observations: observations.map((o) => ({ id: o.id || null, evidenceRef: o.evidenceRef || null, statement: o.statement || null })),
    candidates: candidates.map((c) => ({
      id: c.id || null,
      form: c.form || null,
      evidenceRefs: c.evidenceRefs || [],
      state: (c.evidenceRefs || []).length ? 'POSSIBILITY_CANDIDATE' : 'UNSUPPORTED_POSSIBILITY',
      prescription: false,
    })),
    humanValidationRequired: true,
  };
}

module.exports = { QUESTIONS, possibilityProfile };
