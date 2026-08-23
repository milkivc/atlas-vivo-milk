'use strict';
// SPDX-License-Identifier: EUPL-1.2

const BLOCKING_RISKS = new Set([
  'IDENTIFIABLE_PERSON',
  'PSYCHOLOGICAL_INFERENCE',
  'SPECIAL_CATEGORY_DATA',
  'MINOR_EXPOSURE',
  'COERCIVE_ACTION',
  'UNSUPPORTED_FACT',
  'PUBLICATION_WITHOUT_CONSENT',
]);

function nonMaleficenceGate({ risks = [], requestedAction = 'ANALYSE' } = {}) {
  const blocking = risks.filter((risk) => BLOCKING_RISKS.has(risk));
  const publicationLike = ['PUBLISH', 'PUBLIC_DECISION', 'AUTOMATED_ACTION'].includes(requestedAction);
  return {
    allowedAutomatically: blocking.length === 0 && !publicationLike,
    blockingRisks: blocking,
    humanValidationRequired: true,
    automatedDecision: false,
    requestedAction,
    rule: blocking.length ? 'FAIL_CLOSED' : 'HUMAN_GATE_ALWAYS_FOR_ACTIONABLE_OUTPUT',
  };
}

module.exports = { BLOCKING_RISKS, nonMaleficenceGate };
