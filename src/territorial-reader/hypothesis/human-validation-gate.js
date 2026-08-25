'use strict';
// SPDX-License-Identifier: EUPL-1.2

function humanValidationGate({ validatorId = null, decision = null, evidenceReviewed = [], notes = null } = {}) {
  const validDecision = ['APPROVE','REJECT','RETURN_FOR_REVIEW'].includes(decision);
  const complete = Boolean(validatorId && validDecision && evidenceReviewed.length);
  return {
    state: complete ? `HUMAN_${decision}` : 'HUMAN_VALIDATION_INCOMPLETE',
    validatorId: validatorId || null,
    evidenceReviewed: [...evidenceReviewed],
    notes,
    approved: complete && decision === 'APPROVE',
    automatedApproval: false,
  };
}

module.exports = { humanValidationGate };
