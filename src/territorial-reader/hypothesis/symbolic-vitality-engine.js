'use strict';
// SPDX-License-Identifier: EUPL-1.2

function symbolicVitality({ memories = [], oralHistories = [], legends = [], repertoires = [], narrativeAbsences = [] } = {}) {
  return {
    state: memories.length || oralHistories.length || legends.length || repertoires.length ? 'SYMBOLIC_EVIDENCE_READY' : 'INSUFFICIENT_EVIDENCE',
    memories: [...memories],
    oralHistories: [...oralHistories],
    legends: legends.map((legend) => ({ ...legend, factualStatus: 'CULTURAL_NARRATIVE_NOT_FACT' })),
    repertoires: [...repertoires],
    narrativeAbsences: [...narrativeAbsences],
    inferredEmotion: false,
    territorialExoticisationAllowed: false,
    humanValidationRequired: true,
  };
}

module.exports = { symbolicVitality };
