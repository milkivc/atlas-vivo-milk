'use strict';
// SPDX-License-Identifier: EUPL-1.2

const { qualifyAbsence } = require('../epistemic-constitution/hilbert-open-world');

function absenceProfile({ searchedSources = [], explicitAbsenceEvidence = [], categories = [] } = {}) {
  const qualified = qualifyAbsence({ searchedSources, explicitAbsenceEvidence });
  return {
    ...qualified,
    categories: [...categories],
    absenceIsNotMissingData: true,
    publicClaimAllowed: false,
    humanValidationRequired: true,
  };
}

module.exports = { absenceProfile };
