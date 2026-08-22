/*
 * Atlas Vivo MILK — Leitor Preservativo de Atas
 * Copyright: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Nunca cria atas, participantes, decisões ou necessidades de substituição.
 * Se a fonte não puder ser lida, o estado é FALHA_FONTE e exige revisão humana.
 */

'use strict';

const crypto = require('crypto');

function sha256(value) {
  const data = Buffer.isBuffer(value) ? value : Buffer.from(String(value), 'utf8');
  return crypto.createHash('sha256').update(data).digest('hex');
}

function clean(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

class AtasScraper {
  constructor({ fetchImpl = globalThis.fetch, pdfTextExtractor = null, allowedHosts = [] } = {}) {
    if (typeof fetchImpl !== 'function') throw new Error('FETCH_IMPLEMENTATION_REQUIRED');
    this.fetch = fetchImpl;
    this.pdfTextExtractor = pdfTextExtractor;
    this.allowedHosts = new Set(allowedHosts);
  }

  _assertSource(url) {
    let parsed;
    try { parsed = new URL(url); } catch { throw new Error('INVALID_SOURCE_URL'); }
    if (parsed.protocol !== 'https:') throw new Error('SOURCE_MUST_USE_HTTPS');
    if (this.allowedHosts.size && !this.allowedHosts.has(parsed.hostname)) {
      throw new Error(`UNAPPROVED_SOURCE_HOST:${parsed.hostname}`);
    }
    return parsed;
  }

  async fetchDocument(url) {
    const parsed = this._assertSource(url);
    const response = await this.fetch(parsed, {
      headers: {
        Accept: 'application/pdf,text/html,text/plain;q=0.9,*/*;q=0.1',
        'User-Agent': 'Atlas-Vivo-MILK-Territorial-Reader/2.0 (+https://associacaomilk.pt)',
      },
      redirect: 'follow',
    });
    if (!response.ok) throw new Error(`SOURCE_HTTP_${response.status}`);
    const raw = Buffer.from(await response.arrayBuffer());
    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    let text = '';
    if (/pdf/iu.test(contentType)) {
      if (typeof this.pdfTextExtractor !== 'function') throw new Error('PDF_TEXT_EXTRACTOR_REQUIRED');
      text = await this.pdfTextExtractor(raw);
    } else if (/html|text/iu.test(contentType)) {
      text = raw.toString('utf8');
    } else {
      throw new Error(`UNSUPPORTED_DOCUMENT_TYPE:${contentType}`);
    }
    return {
      text,
      provenance: {
        sourceUrl: parsed.toString(),
        fetchedAt: new Date().toISOString(),
        contentType,
        contentHash: sha256(raw),
      },
    };
  }

  extractAtaData(text, metadata = {}) {
    const source = String(text ?? '');
    const dateMatch = source.match(/\b(\d{2}\/\d{2}\/\d{4}|\d{4}-\d{2}-\d{2})\b/u);
    const titleMatch = source.match(/\bAta\b[^\n.]{0,180}/iu);
    const decisions = [...source.matchAll(/\bDecis(?:ão|oes|ões)\s*[:\-]\s*([^\n]{1,600})/giu)].map((m) => clean(m[1]));
    const needs = [...source.matchAll(/\bNecessidade(?:s)?\s*[:\-]\s*([^\n]{1,600})/giu)].map((m) => clean(m[1]));
    const actionItems = [...source.matchAll(/\bA[cç][aã]o\s*[:\-]\s*([^\n]{1,600})/giu)].map((m) => clean(m[1]));

    return {
      id: crypto.randomUUID(),
      schemaVersion: '2.0.0',
      state: 'PENDENTE_VALIDACAO_HUMANA',
      source: metadata.source || metadata.sourceUrl || null,
      sourceHash: metadata.contentHash || sha256(source),
      fetchedAt: metadata.fetchedAt || null,
      titleEvidence: titleMatch ? clean(titleMatch[0]) : null,
      dateEvidence: dateMatch ? dateMatch[1] : null,
      decisions,
      actionItems,
      needs,
      participants: [],
      participantExtraction: 'disabled_for_data_minimisation',
      rawTextStoredHere: false,
      automatedDecision: false,
      humanDecisionRequired: true,
    };
  }

  async readAta(url) {
    try {
      const { text, provenance } = await this.fetchDocument(url);
      return this.extractAtaData(text, provenance);
    } catch (error) {
      return {
        id: crypto.randomUUID(),
        schemaVersion: '2.0.0',
        state: 'FALHA_FONTE',
        source: url,
        errorCode: error.message,
        fabricatedFallbackUsed: false,
        automatedDecision: false,
        humanDecisionRequired: true,
      };
    }
  }

  // Métodos legados: proibido voltar a gerar listas mock por município.
  async scrapeAtasCmPorto() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_URL_REQUIRED'); }
  async scrapeAtasCmLisboa() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_URL_REQUIRED'); }
  async scrapeAtasCmFunchal() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_URL_REQUIRED'); }
}

module.exports = AtasScraper;
