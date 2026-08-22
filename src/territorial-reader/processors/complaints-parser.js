/*
 * Atlas Vivo MILK — Parser de Contributos Territoriais
 * Copyright: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Mantém compatibilidade de nome com o módulo legado, mas não classifica pessoas,
 * não atribui urgência clínica/policial e não encaminha automaticamente para entidades.
 */

'use strict';

const crypto = require('crypto');

function sha256(value) {
  return crypto.createHash('sha256').update(String(value), 'utf8').digest('hex');
}

function clean(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

class ComplaintsParser {
  constructor() {
    this.explicitMarkers = [
      /\breclama[cç][aã]o\b/iu,
      /\bqueixa\b/iu,
      /\bden[uú]ncia\b/iu,
      /\bvenho\s+(?:por\s+este\s+meio\s+)?reclamar\b/iu,
      /\bquero\s+reportar\b/iu,
      /\bexiste\s+um\s+problema\b/iu,
    ];
    this.themeRules = Object.freeze({
      infraestrutura: ['estrada', 'pavimento', 'iluminação', 'saneamento', 'água', 'esgoto', 'transporte'],
      espaco_publico: ['rua', 'praça', 'largo', 'jardim', 'parque', 'passeio'],
      cultura_patrimonio: ['cultura', 'património', 'memória', 'biblioteca', 'museu', 'teatro', 'festa'],
      acessibilidade: ['acessibilidade', 'rampa', 'barreira', 'mobilidade reduzida', 'piso tátil'],
      ambiente: ['lixo', 'resíduos', 'poluição', 'árvore', 'rio', 'floresta', 'biodiversidade'],
      cuidado_comunitario: ['isolamento', 'solidão', 'cuidado', 'idosos', 'crianças', 'jovens', 'comunidade'],
      habitacao: ['habitação', 'casa', 'alojamento', 'renda', 'arrendamento'],
      educacao: ['escola', 'creche', 'educação', 'formação', 'aprendizagem'],
    });
  }

  detectComplaintStart(text) {
    const source = String(text ?? '');
    return this.explicitMarkers.some((pattern) => pattern.test(source));
  }

  detectCategory(text) {
    const lower = clean(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-PT');
    const matches = [];
    for (const [theme, terms] of Object.entries(this.themeRules)) {
      const evidenceTerms = terms.filter((term) => lower.includes(term.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-PT')));
      if (evidenceTerms.length) matches.push({ theme, evidenceTerms: [...new Set(evidenceTerms)] });
    }
    return {
      category: matches[0]?.theme || 'outros',
      matches,
      responsible: [],
      requiresHumanValidation: true,
    };
  }

  detectUrgency() {
    // A palavra “urgente” é evidência textual, não autorização para pontuação automática.
    return 'human_review';
  }

  extractComplaint(text, context = {}) {
    const source = String(text ?? '');
    const firstSentence = clean(source.split(/[.!?\n]/u)[0]);
    const dateMatch = source.match(/\b(\d{2}\/\d{2}\/\d{4}|\d{4}-\d{2}-\d{2})\b/u);
    const locationMatch = source.match(/\b(Rua|Avenida|Largo|Praça|Travessa)\s+[\p{L}\d][\p{L}\d .,'’\-]{1,100}/iu);
    const explicit = this.detectComplaintStart(source);
    const category = this.detectCategory(source);

    return {
      id: crypto.randomUUID(),
      schemaVersion: '2.0.0',
      sourceHash: sha256(source),
      source: {
        sourceType: context.sourceType || 'territorial_contribution',
        sourceId: context.sourceId || null,
        sourceUrl: context.sourceUrl || null,
        consentReference: context.consentReference || null,
      },
      state: 'PENDENTE_VALIDACAO_HUMANA',
      isComplaintCandidate: explicit,
      title: firstSentence,
      // O texto integral permanece na camada de origem; este parser não o replica nos logs/metadados públicos.
      description: clean(source.replace(firstSentence, '')),
      locationEvidence: locationMatch ? clean(locationMatch[0]) : null,
      dateEvidence: dateMatch ? dateMatch[1] : null,
      category,
      urgency: 'human_review',
      responsible: [],
      actions: [],
      automatedDecision: false,
      humanDecisionRequired: true,
    };
  }

  parseComplaintsFromText(text, context = {}) {
    const source = String(text ?? '');
    const blocks = source
      .split(/\n{2,}|(?:^|\n)\s*\d+[.)]\s+/u)
      .map(clean)
      .filter(Boolean);

    const records = blocks
      .map((block, index) => this.extractComplaint(block, { ...context, sourceId: context.sourceId ? `${context.sourceId}:${index + 1}` : null }))
      .filter((record) => record.isComplaintCandidate);

    return {
      id: crypto.randomUUID(),
      schemaVersion: '2.0.0',
      sourceHash: sha256(source),
      state: 'PENDENTE_VALIDACAO_HUMANA',
      complaints: records,
      stats: {
        totalCandidates: records.length,
        byTheme: records.reduce((acc, record) => {
          for (const hit of record.category.matches) acc[hit.theme] = (acc[hit.theme] || 0) + 1;
          return acc;
        }, {}),
      },
      automatedDecision: false,
      humanDecisionRequired: true,
    };
  }

  // Compatibilidade com consumidor legado. Não gera ordens operacionais automáticas.
  _generateSuggestedActions() {
    return [];
  }
}

module.exports = ComplaintsParser;
