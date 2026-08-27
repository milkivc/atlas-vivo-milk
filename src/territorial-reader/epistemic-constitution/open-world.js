'use strict';
// SPDX-License-Identifier: EUPL-1.2

const CONSTITUTION = Object.freeze({
  heisenberg: {
    mathematicalSource: 'Heisenberg uncertainty principle: Δx·Δp ≥ ħ/2',
    literalScientificUse: false,
    authorialInterpretation: 'Toda hipótese territorial conserva incerteza explícita.',
    operationalUse: 'Impede converter inferência em facto e exige lacunas/alternativas.',
    limitations: 'Não mede incerteza social com grandezas quânticas.',
  },
  planck: {
    mathematicalSource: 'Planck constant h = 6.62607015e-34 J·s (exact SI value)',
    literalScientificUse: false,
    authorialInterpretation: 'Nenhuma hipótese nasce sem quantum mínimo de evidência.',
    operationalUse: 'Exige evidência citável antes de abrir uma hipótese.',
    limitations: 'h nunca é usado como unidade ou limiar territorial.',
  },
  hilbert: {
    mathematicalSource: 'Hilbert hotel thought experiment (countably infinite sets)',
    literalScientificUse: false,
    authorialInterpretation: 'Inventário completo não esgota o território.',
    operationalUse: 'NÃO_ENCONTRADO nunca é convertido automaticamente em AUSENTE.',
    limitations: 'Analogia de mundo aberto, não inferência matemática sobre território.',
  },
  graham: {
    mathematicalSource: 'Graham’s number is finite and extremely large.',
    literalScientificUse: false,
    authorialInterpretation: 'O espaço combinatório pode exceder o que é útil explorar.',
    operationalUse: 'Limita combinações de hipóteses e exige poda explicável.',
    limitations: 'Não serve como limiar numérico territorial.',
  },
  pi: {
    mathematicalSource: 'π has convergent series/algorithms.',
    literalScientificUse: false,
    authorialInterpretation: 'A leitura pode convergir sem reivindicar encerramento absoluto.',
    operationalUse: 'Permite revisão incremental quando novas fontes entram.',
    limitations: 'Convergência matemática não cria confiança empírica.',
  },
});

function absenceState({ explicitEvidence = false, searched = false } = {}) {
  if (explicitEvidence) return 'AUSÊNCIA_DOCUMENTADA';
  if (searched) return 'NÃO_ENCONTRADO';
  return 'DADO_INSUFICIENTE';
}

function epistemicGate(hypothesis = {}) {
  const evidence = Array.isArray(hypothesis.evidence) ? hypothesis.evidence : [];
  if (!evidence.length) return { pass: false, state: 'DADO_INSUFICIENTE', reason: 'EVIDENCE_REQUIRED' };
  return {
    pass: true,
    state: 'REQUER_VALIDACAO_HUMANA',
    uncertainty: 'NÃO_NULA',
    automatedValidation: false,
  };
}

module.exports = { CONSTITUTION, absenceState, epistemicGate };
