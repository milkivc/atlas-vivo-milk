'use strict';
// SPDX-License-Identifier: EUPL-1.2

function institutionalReality({ declarations = [], executions = [], omissions = [], accessEvidence = [], utilisationEvidence = [] } = {}) {
  return {
    state: declarations.length || executions.length || omissions.length ? 'INSTITUTIONAL_EVIDENCE_READY' : 'INSUFFICIENT_EVIDENCE',
    declarations: [...declarations],
    executions: [...executions],
    omissions: [...omissions],
    accessEvidence: [...accessEvidence],
    utilisationEvidence: [...utilisationEvidence],
    promiseExecutionEquivalence: null,
    institutionalFailureConclusion: null,
    humanValidationRequired: true,
  };
}

module.exports = { institutionalReality };
