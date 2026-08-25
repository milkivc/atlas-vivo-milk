'use strict';
// SPDX-License-Identifier: EUPL-1.2

const { readSpatialMaterial } = require('./spatial-material-engine');
const { structuralPressure } = require('./structural-pressure-engine');
const { analyseAbsence } = require('./absence-engine');
const { institutionalReality } = require('./institutional-reality-engine');
const { installedCapacity } = require('./installed-capacity-engine');
const { symbolicVitality } = require('./symbolic-vitality-engine');
const { detectTerritorialDeserts } = require('./territorial-desert-engine');
const { territorialLensing } = require('./territorial-lensing-engine');
const { problemFission } = require('./problem-fission-engine');
const { stateTransitions } = require('./state-transition-engine');
const { possibilityProfile } = require('./possibility-engine');
const { curatorialMatches } = require('./curatorial-matcher');
const { fundingMatches } = require('./funding-matcher');

function deepTerritorialReading(input = {}) {
  return {
    state: 'DEEP_TERRITORIAL_READING_CANDIDATE',
    chambers: {
      spatialMaterial: readSpatialMaterial(input.spatialElements || []),
      structuralPressure: structuralPressure(input.structuralPressure || {}),
      absence: analyseAbsence(input.absence || {}),
      institutional: institutionalReality(input.institutionalPairs || []),
      symbolicVitality: symbolicVitality(input.symbolicRecords || []),
      installedCapacity: installedCapacity(input.facilities || []),
      territorialDeserts: detectTerritorialDeserts(input.desertCandidates || []),
      lensing: territorialLensing(input.lensing || {}),
      problemFission: problemFission(input.problemSignals || []),
      stateTransitions: stateTransitions(input.stateObservations || []),
      possibility: possibilityProfile(input.possibility || {}),
      curatorial: curatorialMatches(input.curatorial || {}),
      funding: fundingMatches(input.funding || {}),
    },
    automatedDecision: false,
    publicDecision: false,
    humanValidationRequired: true,
  };
}

module.exports = { deepTerritorialReading };
