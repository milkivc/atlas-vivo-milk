'use strict';
// SPDX-License-Identifier: EUPL-1.2

const PATTERNS = Object.freeze([
  ['PERSISTENCIA', 'AUSENCIA', 'PERSISTENCIA+AUSENCIA'],
  ['DEMANDA_ALTA', 'OFERTA_BAIXA', 'DEMANDA_ALTA+OFERTA_BAIXA'],
  ['MEMORIA_ATIVA', 'INFRAESTRUTURA_INATIVA', 'MEMORIA_ATIVA+INFRAESTRUTURA_INATIVA'],
  ['PATRIMONIO_EXISTENTE', 'USO_INEXISTENTE', 'PATRIMONIO_EXISTENTE+USO_INEXISTENTE'],
  ['ASSOCIACAO_ATIVA', 'ESPACO_COLETIVO_AUSENTE', 'ASSOCIACAO_ATIVA+ESPACO_COLETIVO_AUSENTE'],
  ['POLITICA_DECLARADA', 'EXECUCAO_AUSENTE', 'POLITICA_DECLARADA+EXECUCAO_AUSENTE'],
]);

function detectContradictions(claims = []) {
  const set = new Set(claims);
  return PATTERNS
    .filter(([a, b]) => set.has(a) && set.has(b))
    .map(([left, right, type]) => ({
      type,
      left,
      right,
      state: 'CANDIDATE_CONTRADICTION',
      factualConclusion: null,
      humanValidationRequired: true,
    }));
}

module.exports = { PATTERNS, detectContradictions };
