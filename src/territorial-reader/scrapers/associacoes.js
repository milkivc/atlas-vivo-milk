/*
 * Atlas Vivo MILK — Leitor de Associações Territoriais
 * Copyright: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Não contém diretórios simulados. Qualquer registo deve chegar com fonte e proveniência.
 */

'use strict';

const crypto = require('crypto');

function sha256(value) {
  return crypto.createHash('sha256').update(String(value), 'utf8').digest('hex');
}

function clean(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

class AssociacoesScraper {
  constructor({ fetchImpl = globalThis.fetch, allowedHosts = [] } = {}) {
    if (typeof fetchImpl !== 'function') throw new Error('FETCH_IMPLEMENTATION_REQUIRED');
    this.fetch = fetchImpl;
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

  normalizeRecord(record, provenance = {}) {
    if (!record || typeof record !== 'object') throw new TypeError('record must be an object');
    const name = clean(record.name || record.nome);
    if (!name) throw new Error('ASSOCIATION_NAME_REQUIRED');
    return {
      id: record.id || crypto.randomUUID(),
      name,
      type: clean(record.type || record.tipo) || null,
      locality: clean(record.locality || record.localidade || record.freguesia) || null,
      municipality: clean(record.municipality || record.municipio || record.concelho) || null,
      website: clean(record.website || record.url) || null,
      source: provenance,
      state: 'PENDENTE_VALIDACAO_HUMANA',
      contactDataIncluded: false,
      automatedPublication: false,
    };
  }

  async readJsonDirectory(url) {
    const parsed = this._assertSource(url);
    const response = await this.fetch(parsed, {
      headers: { Accept: 'application/json', 'User-Agent': 'Atlas-Vivo-MILK-Territorial-Reader/2.0 (+https://associacaomilk.pt)' },
      redirect: 'follow',
    });
    if (!response.ok) throw new Error(`SOURCE_HTTP_${response.status}`);
    const raw = Buffer.from(await response.arrayBuffer());
    const payload = JSON.parse(raw.toString('utf8'));
    const rows = Array.isArray(payload) ? payload : Array.isArray(payload.records) ? payload.records : [];
    const provenance = {
      sourceUrl: parsed.toString(),
      fetchedAt: new Date().toISOString(),
      contentHash: sha256(raw),
    };
    return {
      schemaVersion: '2.0.0',
      state: 'PENDENTE_VALIDACAO_HUMANA',
      provenance,
      associacoes: rows.map((row) => this.normalizeRecord(row, provenance)),
      mockDataUsed: false,
      automatedPublication: false,
    };
  }

  async scrapeAllAssociacoes() {
    throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED_NO_MOCK_FALLBACK');
  }

  async scrapeAssociacoesPorto() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED'); }
  async scrapeAssociacoesLisboa() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED'); }
  async scrapeAssociacoesFunchal() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED'); }
}

module.exports = AssociacoesScraper;
