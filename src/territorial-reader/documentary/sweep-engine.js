'use strict';
// SPDX-License-Identifier: EUPL-1.2

const { assertPublicHttps, sha256, sourceRecord } = require('./source-record');

class DocumentarySweepEngine {
  constructor({ fetchImpl = globalThis.fetch, timeoutMs = 30000 } = {}) {
    if (typeof fetchImpl !== 'function') throw new Error('FETCH_IMPLEMENTATION_REQUIRED');
    this.fetch = fetchImpl;
    this.timeoutMs = timeoutMs;
  }

  async fetchDeclaredSource(descriptor = {}) {
    const parsed = assertPublicHttps(descriptor.url, descriptor.approvedHost);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await this.fetch(parsed, {
        signal: controller.signal,
        redirect: 'follow',
        headers: { 'User-Agent': 'Atlas-Vivo-MILK-Documentary-Sweep/1.0 (+https://associacaomilk.pt)' },
      });
      if (!response.ok) throw new Error(`DOCUMENT_SOURCE_HTTP_${response.status}`);
      const raw = Buffer.from(await response.arrayBuffer());
      const contentType = response.headers.get('content-type') || 'application/octet-stream';
      return {
        raw,
        contentType,
        record: sourceRecord({
          ...descriptor,
          url: parsed.toString(),
          fetchedAt: new Date().toISOString(),
          contentHash: sha256(raw),
          provenance: [...(descriptor.provenance || []), { event: 'FETCHED_DECLARED_SOURCE', at: new Date().toISOString(), contentType }],
        }),
      };
    } finally {
      clearTimeout(timer);
    }
  }

  async sweep(descriptors = []) {
    const records = [];
    const failures = [];
    for (const descriptor of descriptors) {
      try {
        const result = await this.fetchDeclaredSource(descriptor);
        records.push(result.record);
      } catch (error) {
        failures.push({ id: descriptor?.id || null, url: descriptor?.url || null, state: 'FALHA_FONTE', errorCode: error.message, fabricatedFallbackUsed: false });
      }
    }
    return {
      state: failures.length ? 'DOCUMENTARY_SWEEP_PARTIAL' : 'DOCUMENTARY_SWEEP_COMPLETED_FOR_DECLARED_SOURCES',
      records, failures, declaredSourceCount: descriptors.length, fabricatedFallbackUsed: false,
      discoveredLinksAutoFollowed: false, automatedPublication: false, humanValidationRequired: true,
    };
  }
}

module.exports = { DocumentarySweepEngine };
