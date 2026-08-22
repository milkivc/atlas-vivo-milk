/*
 * Atlas Vivo MILK — Leitor de Paróquias Eclesiásticas
 * Copyright: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Importante: paróquia eclesiástica != freguesia administrativa.
 * Este módulo não alimenta a base CAOP e não contém dados simulados.
 */

'use strict';

const crypto = require('crypto');

function sha256(value) {
  return crypto.createHash('sha256').update(String(value), 'utf8').digest('hex');
}

function clean(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

class ParoquiasScraper {
  constructor({ fetchImpl = globalThis.fetch, allowedHosts = [] } = {}) {
    if (typeof fetchImpl !== 'function') throw new Error('FETCH_IMPLEMENTATION_REQUIRED');
    this.fetch = fetchImpl;
    this.allowedHosts = new Set(allowedHosts);
  }

  _assertSource(url) {
    let parsed;
    try { parsed = new URL(url); } catch { throw new Error('INVALID_SOURCE_URL'); }
    if (parsed.protocol !== 'https:') throw new Error('SOURCE_MUST_USE_HTTPS');
    if (this.allowedHosts.size && !this.allowedHosts.has(parsed.hostname)) throw new Error(`UNAPPROVED_SOURCE_HOST:${parsed.hostname}`);
    return parsed;
  }

  normalizeRecord(record, provenance = {}) {
    const name = clean(record?.name || record?.nome);
    if (!name) throw new Error('PARISH_NAME_REQUIRED');
    return {
      id: record?.id || crypto.randomUUID(),
      name,
      diocese: clean(record?.diocese) || null,
      locality: clean(record?.locality || record?.localidade) || null,
      website: clean(record?.website || record?.url) || null,
      territorialClass: 'PAROQUIA_ECLESIASTICA',
      mustNotBeUsedAsCivilParish: true,
      source: provenance,
      state: 'PENDENTE_VALIDACAO_HUMANA',
      contactDataIncluded: false,
      automatedPublication: false,
    };
  }

  async readJsonDirectory(url) {
    const parsed = this._assertSource(url);
    const response = await this.fetch(parsed, { headers: { Accept: 'application/json' }, redirect: 'follow' });
    if (!response.ok) throw new Error(`SOURCE_HTTP_${response.status}`);
    const raw = Buffer.from(await response.arrayBuffer());
    const payload = JSON.parse(raw.toString('utf8'));
    const rows = Array.isArray(payload) ? payload : Array.isArray(payload.records) ? payload.records : [];
    const provenance = { sourceUrl: parsed.toString(), fetchedAt: new Date().toISOString(), contentHash: sha256(raw) };
    return {
      schemaVersion: '2.0.0',
      state: 'PENDENTE_VALIDACAO_HUMANA',
      territorialClass: 'PAROQUIA_ECLESIASTICA',
      provenance,
      paroquias: rows.map((row) => this.normalizeRecord(row, provenance)),
      mockDataUsed: false,
      automatedPublication: false,
    };
  }

  async scrapeAllParoquias() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED_NO_MOCK_FALLBACK'); }
  async scrapeParoquiasByConcelho() { throw new Error('DEPRECATED_DO_NOT_MIX_ECCLESIASTICAL_AND_CIVIL_PARISHES'); }
  async scrapePatriarcadoLisboa() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED'); }
  async scrapeDiocesePorto() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED'); }
  async scrapeDioceseFunchal() { throw new Error('DEPRECATED_EXPLICIT_SOURCE_REQUIRED'); }
}

module.exports = ParoquiasScraper;
