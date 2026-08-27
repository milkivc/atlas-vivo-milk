'use strict';
// SPDX-License-Identifier: EUPL-1.2

function stateTransitions(observations = []) {
  const transitions = observations
    .filter((item) => item && item.from && item.to)
    .map((item) => ({
      from: item.from,
      to: item.to,
      date: item.date || null,
      evidenceIds: Array.isArray(item.evidenceIds) ? item.evidenceIds : [],
      identityPreserved: null,
      causalConclusion: null,
      state: 'TRANSITION_CANDIDATE',
    }));
  return { state: transitions.length ? 'TRANSITIONS_READY_FOR_REVIEW' : 'NO_DOCUMENTED_TRANSITIONS', transitions, humanValidationRequired: true };
}

module.exports = { stateTransitions };
