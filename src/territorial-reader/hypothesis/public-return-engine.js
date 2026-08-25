'use strict';
// SPDX-License-Identifier: EUPL-1.2

const BLOCKED_FLAGS = new Set(['raw_sensitive_data','territorial_vulnerability_exposure','person_ranking','territory_ranking','surveillance_view','psychological_profile','fake_completeness','technocratic_dashboard']);

function publicReturn({ validated = false, flags = [], provenance = [], publicFragment = null, latency = false } = {}) {
  const blocked = flags.filter((flag) => BLOCKED_FLAGS.has(flag));
  if (!validated || blocked.length) {
    return {
      state: 'BLOCKED_FROM_PUBLIC_RETURN',
      blocked,
      publishable: false,
      publicFragment: null,
      humanValidationRequired: true,
    };
  }
  return {
    state: latency ? 'PUBLIC_LATENCY' : 'PUBLIC_RETURN_CANDIDATE',
    blocked: [],
    publishable: false,
    publicFragment,
    provenance: [...provenance],
    rankingProduced: false,
    dashboardProduced: false,
    finalPublicationRequiresSeparateGate: true,
    humanValidationRequired: true,
  };
}

module.exports = { publicReturn };
