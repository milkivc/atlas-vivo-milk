'use strict';
// SPDX-License-Identifier: EUPL-1.2

function analyseAbsence({ searchedSources = [], explicitAbsenceEvidence = [], expectedCondition = null } = {}) {
  if (explicitAbsenceEvidence.length) {
    return {
      state: 'DOCUMENTED_ABSENCE_CANDIDATE',
      expectedCondition,
      evidence: [...explicitAbsenceEvidence],
      notFoundIsAbsence: false,
      humanValidationRequired: true,
    };
  }
  if (searchedSources.length) {
    return {
      state: 'NOT_FOUND_IN_CONSULTED_SOURCES',
      expectedCondition,
      evidence: [],
      searchedSources: [...searchedSources],
      notFoundIsAbsence: false,
      humanValidationRequired: true,
    };
  }
  return { state: 'DATA_INSUFFICIENT', expectedCondition, evidence: [], notFoundIsAbsence: false, humanValidationRequired: true };
}

module.exports = { analyseAbsence };
