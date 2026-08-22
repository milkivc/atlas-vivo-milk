/*
 * Atlas Vivo MILK — Leitor Territorial / Detetor de Indícios de Necessidade
 * Copyright: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Regra: este módulo não diagnostica pessoas, não decide prioridades públicas e não
 * transforma palavras-chave em factos. Produz indícios rastreáveis para validação humana.
 */

'use strict';

const crypto = require('crypto');

const HUMAN_REVIEW_STATE = 'PENDENTE_VALIDACAO_HUMANA';

const NEED_MARKERS = [
  /\bn[aã]o\s+(?:h[aá]|existe|existem|temos|dispomos)\b/iu,
  /\bsem\s+(?:um|uma|o|a|os|as)?\s*[\p{L}\d]/iu,
  /\bfalta(?:m)?\b/iu,
  /\bcar[eê]ncia(?:s)?\b/iu,
  /\bprecis(?:a|amos|am|o)\b/iu,
  /\bnecessidade(?:s)?\b/iu,
  /\bfoi\s+(?:encerrad[oa]|retirad[oa]|demolid[oa])\b/iu,
  /\bdeixou\s+de\s+(?:existir|funcionar)\b/iu,
  /\bdificuldade(?:s)?\s+(?:de|em|para)\b/iu,
  /\bimpede\s+(?:o|a|os|as)?\b/iu,
];

const FALSE_POSITIVE_GUARDS = [
  /\bn[aã]o\s+falta\b/iu,
  /\bn[aã]o\s+h[aá]\s+falta\b/iu,
  /\bsem\s+falta\b/iu,
  /\bn[aã]o\s+[ée]\s+(?:necess[aá]rio|preciso)\b/iu,
];

const THEMES = Object.freeze({
  cultura_memoria: ['cultura', 'memória', 'arquivo', 'biblioteca', 'museu', 'teatro', 'cinema', 'património', 'tradição', 'festa', 'romaria'],
  encontro_convivencia: ['encontro', 'convivência', 'convívio', 'reunião', 'estar juntos', 'espaço comum', 'comunidade', 'associação'],
  espaco_publico: ['praça', 'jardim', 'parque', 'rua', 'largo', 'espaço público', 'banco', 'sombra', 'fonte'],
  acessibilidade: ['acessibilidade', 'rampa', 'cadeira de rodas', 'mobilidade reduzida', 'barreira', 'degrau', 'piso tátil', 'língua gestual'],
  mobilidade: ['autocarro', 'comboio', 'metro', 'transporte', 'paragem', 'ciclovia', 'passeio', 'travessia', 'mobilidade'],
  cuidado_comunitario: ['cuidado', 'apoio', 'isolamento', 'solidão', 'descanso', 'saúde comunitária', 'idosos', 'crianças', 'jovens'],
  infraestrutura_basica: ['água', 'saneamento', 'esgoto', 'eletricidade', 'iluminação', 'pavimento', 'estrada'],
  ambiente: ['árvore', 'floresta', 'rio', 'mar', 'água', 'resíduos', 'lixo', 'poluição', 'biodiversidade', 'natureza'],
  habitacao: ['habitação', 'casa', 'alojamento', 'renda', 'arrendamento'],
  educacao: ['escola', 'creche', 'educação', 'formação', 'aprendizagem'],
});

const INFRASTRUCTURE_HINTS = Object.freeze({
  cultura_memoria: ['espaço cultural', 'arquivo comunitário', 'biblioteca de proximidade', 'dispositivo de memória'],
  encontro_convivencia: ['espaço de encontro', 'casa comunitária', 'dispositivo de convivência'],
  espaco_publico: ['microinfraestrutura de espaço público', 'zona de sombra/repouso', 'dispositivo de permanência'],
  acessibilidade: ['adaptação de acessibilidade', 'percurso acessível'],
  mobilidade: ['infraestrutura de mobilidade de proximidade'],
  cuidado_comunitario: ['espaço comunitário de cuidado e encontro'],
  infraestrutura_basica: ['infraestrutura básica a confirmar pela entidade competente'],
  ambiente: ['infraestrutura ecológica/de cuidado territorial'],
  habitacao: ['necessidade habitacional a documentar'],
  educacao: ['espaço educativo/de aprendizagem não formal'],
});

function sha256(value) {
  return crypto.createHash('sha256').update(String(value), 'utf8').digest('hex');
}

function normalizeWhitespace(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

function fold(value) {
  return normalizeWhitespace(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-PT');
}

function splitSentences(text) {
  const source = String(text ?? '');
  const out = [];
  const rx = /[^.!?\n]+(?:[.!?]+|$)/gu;
  let match;
  while ((match = rx.exec(source)) !== null) {
    const raw = match[0];
    const clean = normalizeWhitespace(raw.replace(/[.!?]+$/u, ''));
    if (!clean) continue;
    const leading = raw.search(/\S/u);
    const start = match.index + (leading < 0 ? 0 : leading);
    out.push({ text: clean, start, end: start + clean.length });
  }
  return out;
}

class NeedsDetector {
  constructor({ logger = null } = {}) {
    this.logger = logger;
  }

  _safeLog(event, payload = {}) {
    if (!this.logger) return;
    const safe = {
      event,
      timestamp: new Date().toISOString(),
      ...payload,
    };
    // Nunca registar texto-fonte, nomes de pessoas ou conteúdo de submissões.
    if (typeof this.logger.info === 'function') this.logger.info(safe);
  }

  _findThemes(sentence) {
    const haystack = fold(sentence);
    const themes = [];
    for (const [theme, terms] of Object.entries(THEMES)) {
      const evidence = terms.filter((term) => haystack.includes(fold(term)));
      if (evidence.length) themes.push({ theme, evidenceTerms: [...new Set(evidence)] });
    }
    return themes;
  }

  _isNeedCandidate(sentence) {
    if (FALSE_POSITIVE_GUARDS.some((rx) => rx.test(sentence))) return false;
    return NEED_MARKERS.some((rx) => rx.test(sentence));
  }

  _confidence(sentence, themes) {
    const markerHits = NEED_MARKERS.reduce((n, rx) => n + (rx.test(sentence) ? 1 : 0), 0);
    const themeHits = themes.reduce((n, item) => n + item.evidenceTerms.length, 0);
    // Heurística transparente; não é probabilidade estatística.
    const score = Math.min(1, 0.45 + markerHits * 0.18 + Math.min(themeHits, 3) * 0.08);
    return Number(score.toFixed(2));
  }

  detectNeedsFromText(text, context = {}) {
    if (typeof text !== 'string') throw new TypeError('text must be a string');
    const sourceHash = sha256(text);
    const source = {
      sourceType: context.sourceType || 'text',
      sourceId: context.sourceId || null,
      sourceUrl: context.sourceUrl || null,
      fetchedAt: context.fetchedAt || null,
      contentHash: sourceHash,
    };

    const candidates = [];
    for (const sentence of splitSentences(text)) {
      if (!this._isNeedCandidate(sentence.text)) continue;
      const themes = this._findThemes(sentence.text);
      const confidence = this._confidence(sentence.text, themes);
      candidates.push({
        id: crypto.randomUUID(),
        state: HUMAN_REVIEW_STATE,
        statement: sentence.text,
        evidence: {
          quote: sentence.text,
          start: sentence.start,
          end: sentence.end,
          sourceHash,
        },
        themes,
        infrastructureHints: [...new Set(themes.flatMap((t) => INFRASTRUCTURE_HINTS[t.theme] || []))],
        confidence,
        confidenceMeaning: 'força da regra determinística; não é probabilidade nem prioridade pública',
        requiresHumanValidation: true,
      });
    }

    const result = {
      id: crypto.randomUUID(),
      schemaVersion: '2.0.0',
      source,
      state: HUMAN_REVIEW_STATE,
      count: candidates.length,
      needs: candidates,
      categories: [...new Set(candidates.flatMap((c) => c.themes.map((t) => t.theme)))],
      priorities: [],
      humanDecisionRequired: true,
      automatedDecision: false,
    };

    this._safeLog('territorial_need_scan_completed', {
      sourceHash,
      candidateCount: result.count,
      categories: result.categories,
    });
    return result;
  }

  detectNeedsFromAtas(atas) {
    if (!Array.isArray(atas)) throw new TypeError('atas must be an array');
    const aggregate = [];
    for (const ata of atas) {
      const fragments = [ata?.title, ...(ata?.decisions || []), ...(ata?.actionItems || []), ...(ata?.needs || [])]
        .filter((v) => typeof v === 'string' && v.trim());
      for (const fragment of fragments) {
        const scan = this.detectNeedsFromText(fragment, {
          sourceType: 'ata',
          sourceId: ata?.id || ata?.title || null,
          sourceUrl: ata?.sourceUrl || null,
          fetchedAt: ata?.fetchedAt || null,
        });
        aggregate.push(...scan.needs);
      }
    }
    return this._aggregate('atas', atas, aggregate);
  }

  detectNeedsFromComplaints(complaints) {
    if (!Array.isArray(complaints)) throw new TypeError('complaints must be an array');
    const aggregate = [];
    for (const item of complaints) {
      const text = typeof item === 'string' ? item : item?.text || item?.description || '';
      if (!text) continue;
      const scan = this.detectNeedsFromText(text, {
        sourceType: 'territorial_contribution',
        sourceId: typeof item === 'object' ? item.id || null : null,
        sourceUrl: typeof item === 'object' ? item.sourceUrl || null : null,
      });
      aggregate.push(...scan.needs);
    }
    return this._aggregate('territorial_contributions', complaints, aggregate);
  }

  _aggregate(sourceType, sourceValue, needs) {
    return {
      id: crypto.randomUUID(),
      schemaVersion: '2.0.0',
      source: sourceType,
      sourceHash: sha256(JSON.stringify(sourceValue)),
      state: HUMAN_REVIEW_STATE,
      needs,
      count: needs.length,
      categories: [...new Set(needs.flatMap((n) => n.themes.map((t) => t.theme)))],
      priorities: [],
      humanDecisionRequired: true,
      automatedDecision: false,
    };
  }

  // Compatibilidade: ordena apenas por força da evidência, nunca por valor humano/político.
  prioritizeNeeds(needs) {
    return [...needs].sort((a, b) => (b.confidence || 0) - (a.confidence || 0));
  }

  generateNeedsReport(needsData) {
    const evidenceOrdered = this.prioritizeNeeds(needsData?.needs || []);
    const byTheme = {};
    for (const need of evidenceOrdered) {
      for (const { theme } of need.themes || []) {
        (byTheme[theme] ||= []).push(need.id);
      }
    }
    return {
      id: crypto.randomUUID(),
      schemaVersion: '2.0.0',
      generatedAt: new Date().toISOString(),
      sourceHash: needsData?.sourceHash || needsData?.source?.contentHash || null,
      state: HUMAN_REVIEW_STATE,
      totalCandidates: evidenceOrdered.length,
      byTheme,
      candidates: evidenceOrdered,
      recommendations: [],
      nextStep: 'VALIDACAO_HUMANA_E_CRUZAMENTO_COM_FONTES_TERRITORIAIS_OFICIAIS',
      automatedDecision: false,
    };
  }

  // Compatibilidade com código legado: sem atribuir prioridade automática.
  categorizeNeed(text) {
    const themes = this._findThemes(text);
    return {
      category: themes[0]?.theme || 'outros',
      priority: 'review',
      weight: null,
      themes,
      requiresHumanValidation: true,
    };
  }
}

module.exports = NeedsDetector;
module.exports.HUMAN_REVIEW_STATE = HUMAN_REVIEW_STATE;
