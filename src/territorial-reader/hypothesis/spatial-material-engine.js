'use strict';
// SPDX-License-Identifier: EUPL-1.2

const COMPONENTS = Object.freeze(['benches','tables','walls','steps','shade','climateShelter','surface','usefulWidth','edges','obstacles','supportSurfaces','pauseSurfaces','lighting','routeContinuity','activeFronts','inactiveFronts','accessibility','listeningSupport','conversationSupport','writingSupport','playSupport','restSupport','stayingSupport']);

function spatialMaterialProfile(observations = {}) {
  const documented = {};
  for (const key of COMPONENTS) {
    if (observations[key] !== undefined) documented[key] = observations[key];
  }
  return {
    state: Object.keys(documented).length ? 'SPATIAL_MATERIAL_EVIDENCE_READY' : 'INSUFFICIENT_EVIDENCE',
    documented,
    inferredHumanBehaviour: false,
    humanValidationRequired: true,
  };
}

module.exports = { COMPONENTS, spatialMaterialProfile };
