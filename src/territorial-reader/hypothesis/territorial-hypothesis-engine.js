'use strict';
// SPDX-License-Identifier: EUPL-1.2

const crypto = require('node:crypto');
const { epistemicGate } = require('../epistemic-constitution/open-world');
const { ContradictionEngine } = require('./contradiction-engine');

class TerritorialHypothesisEngine {
  constructor({ contradictionEngine = new ContradictionEngine() } = {}) {
    this.contradictionEngine = contradictionEngine;
  }

  build(input = {}) {
    const evidence = Array.isArray(input.evidence) ? input.evidence.filter(Boolean) : [];
    const gate = epistemicGate({ evidence });
    const fingerprint = crypto.createHash('sha256').update(JSON.stringify({
      territory: input.territory || null,
      cut: input.cut || null,
      question: input.question || null,
      evidence: evidence.map((x) => ({ sourceId: x.sourceId, hash: x.hash, quote: x.quote })),
    })).digest('hex');

    if (!gate.pass) {
      return {
        id: `H-PENDENTE-${fingerprint.slice(0, 12)}`,
        state: gate.state,
        reason: gate.reason,
        territory: input.territory || null,
        cut: input.cut || null,
        evidence,
        automatedValidation: false,
      };
    }

    const contradictions = this.contradictionEngine.evaluate(input.signals || []);
    const independent = new Set(evidence.map((x) => x.dependencyRoot || x.sourceId).filter(Boolean));
    return {
      id: `H-${fingerprint.slice(0, 12).toUpperCase()}`,
      territory: input.territory || null,
      cut: input.cut || null,
      question: input.question || null,
      evidence,
      independentEvidenceCount: independent.size,
      contradictions,
      absences: input.absences || [],
      persistences: input.persistences || [],
      temporality: input.temporality || null,
      firstFailurePoint: input.firstFailurePoint || null,
      installedCapacity: input.installedCapacity || [],
      invisibleVitality: input.invisibleVitality || [],
      publicInsufficiency: input.publicInsufficiency || [],
      metrologies: input.metrologies || [],
      alternativeHypotheses: input.alternativeHypotheses || [],
      possibleInfrastructure: input.possibleInfrastructure || [],
      possibleCuratorialDevices: input.possibleCuratorialDevices || [],
      fundability: 'A_VERIFICAR',
      uncertainty: gate.uncertainty,
      gaps: input.gaps || [],
      risks: input.risks || [],
      state: 'REQUER_VALIDACAO_HUMANA',
      automatedValidation: false,
    };
  }
}

module.exports = TerritorialHypothesisEngine;
