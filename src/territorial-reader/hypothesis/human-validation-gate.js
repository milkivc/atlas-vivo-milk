'use strict';
// SPDX-License-Identifier: EUPL-1.2

function humanValidationGate({ decision, validatorId, evidenceReceipt, notes = null } = {}) {
  const allowed = new Set(['APPROVE','REJECT','RETURN_FOR_REVIEW']);
  if (!decision || !allowed.has(decision) || !validatorId || !evidenceReceipt) {
    return { state: 'HUMAN_VALIDATION_REQUIRED', validated: false, publishable: false };
  }
  return {
    state: decision,
    validated: decision === 'APPROVE',
    publishable: decision === 'APPROVE',
    validatorId,
    evidenceReceipt,
    notes,
    automatedDecision: false,
  };
}

module.exports = { humanValidationGate };
