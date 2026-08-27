'use strict';
// SPDX-License-Identifier: EUPL-1.2

const RULES = Object.freeze([
  ['PERSISTÊNCIA', 'AUSÊNCIA'],
  ['MEMÓRIA_ATIVA', 'INFRAESTRUTURA_INATIVA'],
  ['PATRIMÓNIO_EXISTENTE', 'USO_INEXISTENTE'],
  ['POLÍTICA_DECLARADA', 'EXECUÇÃO_AUSENTE'],
  ['INVESTIMENTO', 'BAIXA_UTILIZAÇÃO'],
  ['PROGRAMAÇÃO', 'AUSÊNCIA_DE_PERMANÊNCIA'],
  ['EQUIPAMENTO', 'MEDIAÇÃO_INSUFICIENTE'],
]);

class ContradictionEngine {
  evaluate(signals = []) {
    const byKind = new Map();
    for (const signal of signals) {
      if (!signal || !signal.kind || !signal.evidence || !signal.evidence.sourceId) continue;
      if (!byKind.has(signal.kind)) byKind.set(signal.kind, []);
      byKind.get(signal.kind).push(signal);
    }
    const contradictions = [];
    for (const [left, right] of RULES) {
      const a = byKind.get(left) || [];
      const b = byKind.get(right) || [];
      if (!a.length || !b.length) continue;
      contradictions.push({
        type: `${left}+${right}`,
        leftEvidence: a.map((x) => x.evidence),
        rightEvidence: b.map((x) => x.evidence),
        state: 'CONTRADIÇÃO_A_CONFIRMAR',
        causalityClaimed: false,
        automatedDecision: false,
      });
    }
    return contradictions;
  }
}

module.exports = { ContradictionEngine, RULES };
