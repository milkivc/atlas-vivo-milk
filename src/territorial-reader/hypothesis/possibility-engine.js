'use strict';
// SPDX-License-Identifier: EUPL-1.2

const QUESTIONS = Object.freeze([
  'what_is_absent','what_remains_alive','what_is_dormant','what_is_underused','what_lost_support','what_could_reappear','what_right_is_poorly_materialised','what_space_could_sustain_encounter','what_space_could_sustain_listening','what_space_could_sustain_staying','what_space_could_sustain_play','what_space_could_sustain_repertoire','what_milk_form_could_host_the_possibility'
]);

function possibilityEngine(responses = {}) {
  const evidenceBacked = QUESTIONS
    .filter((key) => responses[key] && Array.isArray(responses[key].evidenceIds) && responses[key].evidenceIds.length)
    .map((key) => ({ question: key, ...responses[key] }));
  return {
    state: evidenceBacked.length ? 'POSSIBILITY_TO_VALIDATE' : 'INSUFFICIENT_EVIDENCE',
    possibilities: evidenceBacked,
    prescription: null,
    automatedSelection: false,
    humanValidationRequired: true,
  };
}

module.exports = { QUESTIONS, possibilityEngine };
