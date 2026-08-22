/*
 * Atlas Vivo MILK — Analisador Textual Territorial
 * Copyright: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Análise determinística, explicável e não clínica. Não faz perfil psicológico,
 * pontuação de pessoas, sentimento individual nem extração automática de identidades.
 */

'use strict';

const crypto = require('crypto');
const NeedsDetector = require('./needs-detector');

function sha256(value) {
  return crypto.createHash('sha256').update(String(value), 'utf8').digest('hex');
}

function normalize(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

function fold(value) {
  return normalize(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-PT');
}

class TextAnalyzer {
  constructor(options = {}) {
    this.needsDetector = options.needsDetector || new NeedsDetector({ logger: options.logger || null });
    this.themes = Object.freeze({
      cultura: ['cultura', 'património', 'memória', 'arquivo', 'museu', 'biblioteca', 'festa', 'romaria'],
      convivio: ['convívio', 'convivência', 'encontro', 'comunidade', 'associação', 'estar juntos'],
      espaco_publico: ['praça', 'jardim', 'parque', 'largo', 'rua', 'espaço público', 'fonte', 'sombra'],
      acessibilidade: ['acessibilidade', 'rampa', 'barreira', 'mobilidade reduzida', 'piso tátil', 'língua gestual'],
      mobilidade: ['autocarro', 'comboio', 'metro', 'transporte', 'paragem', 'travessia', 'passeio', 'ciclovia'],
      ambiente: ['rio', 'mar', 'árvore', 'floresta', 'resíduos', 'lixo', 'poluição', 'biodiversidade'],
      educacao: ['escola', 'creche', 'formação', 'aprendizagem', 'educação'],
      habitacao: ['habitação', 'casa', 'alojamento', 'renda', 'arrendamento'],
    });
  }

  preprocessText(text) {
    return fold(text).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  }

  extractKeywords(text, keywordList = []) {
    const haystack = ` ${fold(text)} `;
    return [...new Set(keywordList.filter((keyword) => haystack.includes(` ${fold(keyword)} `) || haystack.includes(fold(keyword))))];
  }

  detectNeeds(text, context = {}) {
    return this.needsDetector.detectNeedsFromText(String(text ?? ''), context);
  }

  detectComplaints(text) {
    const source = String(text ?? '');
    const patterns = [/\breclama[cç][aã]o\b/iu, /\bqueixa\b/iu, /\bden[uú]ncia\b/iu, /\bvenho\s+reclamar\b/iu, /\bexiste\s+um\s+problema\b/iu];
    const evidence = patterns.filter((rx) => rx.test(source)).map((rx) => rx.source);
    return {
      id: crypto.randomUUID(),
      sourceHash: sha256(source),
      state: 'PENDENTE_VALIDACAO_HUMANA',
      isExplicitComplaintCandidate: evidence.length > 0,
      evidenceRules: evidence,
      automatedDecision: false,
    };
  }

  detectFailures(text) {
    const terms = ['falha', 'avaria', 'encerrado', 'deixou de funcionar', 'não funciona', 'inacessível', 'degradado', 'abandonado'];
    const found = this.extractKeywords(text, terms);
    return {
      id: crypto.randomUUID(),
      sourceHash: sha256(text),
      state: 'PENDENTE_VALIDACAO_HUMANA',
      evidenceTerms: found,
      count: found.length,
      automatedDecision: false,
    };
  }

  analyzeThemes(text) {
    const hits = [];
    for (const [theme, terms] of Object.entries(this.themes)) {
      const evidenceTerms = this.extractKeywords(text, terms);
      if (evidenceTerms.length) hits.push({ theme, evidenceTerms });
    }
    return hits;
  }

  analyze(text, context = {}) {
    const source = String(text ?? '');
    return {
      id: crypto.randomUUID(),
      schemaVersion: '2.0.0',
      sourceHash: sha256(source),
      state: 'PENDENTE_VALIDACAO_HUMANA',
      themes: this.analyzeThemes(source),
      needs: this.detectNeeds(source, context),
      complaintSignal: this.detectComplaints(source),
      failureSignal: this.detectFailures(source),
      privacy: {
        personExtraction: 'disabled',
        psychologicalProfiling: 'disabled',
        sentimentScoring: 'disabled',
      },
      automatedDecision: false,
      humanDecisionRequired: true,
    };
  }

  // Métodos legados mantidos para não quebrar consumidores; retornam bloqueio explícito.
  analyzeSentiment(text) {
    return {
      id: crypto.randomUUID(),
      sourceHash: sha256(text),
      disabled: true,
      reason: 'O Atlas Vivo MILK não usa pontuação de sentimento para inferir estado humano.',
      sentiment: null,
      score: null,
    };
  }

  extractEntities(text) {
    return {
      id: crypto.randomUUID(),
      sourceHash: sha256(text),
      persons: [],
      locations: [],
      organizations: [],
      disabled: true,
      reason: 'Extração automática de identidades desativada por minimização e validação humana.',
    };
  }
}

module.exports = TextAnalyzer;
