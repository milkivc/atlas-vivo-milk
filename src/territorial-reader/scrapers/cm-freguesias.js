/*
 * Atlas Vivo MILK — Leitor de Unidades Territoriais Oficiais
 * Copyright: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Fontes aceites: DGT/SNIG/dados.gov.pt/INE ou ficheiros derivados dessas fontes
 * com proveniência preservada. É proibido preencher freguesias com mocks.
 */

'use strict';

const crypto = require('crypto');

const OFFICIAL_HOSTS = new Set([
  'www.dgterritorio.gov.pt',
  'dgterritorio.gov.pt',
  'snig.dgterritorio.gov.pt',
  'dados.gov.pt',
  'www.ine.pt',
  'ine.pt',
]);

function sha256(value) {
  const buffer = Buffer.isBuffer(value) ? value : Buffer.from(String(value), 'utf8');
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function clean(value) {
  return String(value ?? '').replace(/\s+/gu, ' ').trim();
}

function assertOfficialUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error('INVALID_SOURCE_URL');
  }
  if (parsed.protocol !== 'https:') throw new Error('OFFICIAL_SOURCE_MUST_USE_HTTPS');
  if (!OFFICIAL_HOSTS.has(parsed.hostname)) throw new Error(`UNQUALIFIED_TERRITORIAL_SOURCE:${parsed.hostname}`);
  return parsed;
}

function normalizeFeature(properties = {}) {
  const code = clean(properties.DTMNFR || properties.dtmnfr || properties.DICOFRE || properties.dicofre || properties.codigo || properties.code);
  const parish = clean(properties.Freguesia || properties.freguesia || properties.FR || properties.name || properties.nome);
  const municipality = clean(properties.Municipio || properties.municipio || properties.Concelho || properties.concelho || properties.MN);
  const district = clean(properties.Distrito || properties.distrito || properties.DT);
  if (!code || !parish) return null;
  return {
    dtmnfr: code,
    freguesia: parish,
    municipio: municipality || null,
    distrito: district || null,
  };
}

class CmFreguesiasScraper {
  constructor({ fetchImpl = globalThis.fetch, timeoutMs = 20000 } = {}) {
    if (typeof fetchImpl !== 'function') throw new Error('FETCH_IMPLEMENTATION_REQUIRED');
    this.fetch = fetchImpl;
    this.timeoutMs = timeoutMs;
  }

  async fetchOfficialJson(url) {
    const parsed = assertOfficialUrl(url);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await this.fetch(parsed, {
        signal: controller.signal,
        headers: {
          Accept: 'application/geo+json, application/json;q=0.9, */*;q=0.1',
          'User-Agent': 'Atlas-Vivo-MILK-Territorial-Reader/2.0 (+https://associacaomilk.pt)',
        },
        redirect: 'follow',
      });
      if (!response.ok) throw new Error(`OFFICIAL_SOURCE_HTTP_${response.status}`);
      const raw = Buffer.from(await response.arrayBuffer());
      const contentType = response.headers.get('content-type') || '';
      if (!/json|geo\+json/iu.test(contentType)) throw new Error(`UNSUPPORTED_OFFICIAL_FORMAT:${contentType}`);
      const payload = JSON.parse(raw.toString('utf8'));
      return {
        payload,
        provenance: {
          sourceUrl: parsed.toString(),
          fetchedAt: new Date().toISOString(),
          contentHash: sha256(raw),
          contentType,
          sourceAuthority: parsed.hostname,
          validationState: 'FONTE_OFICIAL_A_VALIDAR_HUMANAMENTE',
        },
      };
    } finally {
      clearTimeout(timer);
    }
  }

  normalizeAdministrativeUnits(payload, provenance = {}) {
    const features = Array.isArray(payload?.features)
      ? payload.features
      : Array.isArray(payload)
        ? payload.map((properties) => ({ properties }))
        : [];

    const units = [];
    const rejected = [];
    const seen = new Map();

    for (let index = 0; index < features.length; index += 1) {
      const feature = features[index] || {};
      const unit = normalizeFeature(feature.properties || feature);
      if (!unit) {
        rejected.push({ index, reason: 'MISSING_DTMNFR_OR_PARISH_NAME' });
        continue;
      }
      const previous = seen.get(unit.dtmnfr);
      if (previous && (previous.freguesia !== unit.freguesia || previous.municipio !== unit.municipio)) {
        rejected.push({ index, reason: 'CONFLICTING_DTMNFR', dtmnfr: unit.dtmnfr });
        continue;
      }
      if (!previous) {
        seen.set(unit.dtmnfr, unit);
        units.push(unit);
      }
    }

    units.sort((a, b) => a.dtmnfr.localeCompare(b.dtmnfr, 'pt-PT'));
    return {
      schemaVersion: '2.0.0',
      state: 'PENDENTE_VALIDACAO_HUMANA',
      provenance,
      count: units.length,
      units,
      rejected,
      mockDataUsed: false,
      automatedPublication: false,
    };
  }

  async scrapeFreguesias(concelho, { sourceUrl } = {}) {
    if (!sourceUrl) {
      const error = new Error('OFFICIAL_SOURCE_REQUIRED_NO_MOCK_FALLBACK');
      error.code = 'OFFICIAL_SOURCE_REQUIRED';
      throw error;
    }
    const { payload, provenance } = await this.fetchOfficialJson(sourceUrl);
    const normalized = this.normalizeAdministrativeUnits(payload, provenance);
    const target = clean(concelho).toLocaleLowerCase('pt-PT');
    if (!target) return normalized;
    return {
      ...normalized,
      requestedMunicipality: clean(concelho),
      units: normalized.units.filter((unit) => clean(unit.municipio).toLocaleLowerCase('pt-PT') === target),
    };
  }

  auditCoverage(units, expectedCodes = []) {
    const codes = new Set((units || []).map((unit) => clean(unit.dtmnfr)).filter(Boolean));
    const expected = new Set((expectedCodes || []).map(clean).filter(Boolean));
    const missing = [...expected].filter((code) => !codes.has(code));
    const unexpected = [...codes].filter((code) => expected.size > 0 && !expected.has(code));
    return {
      state: missing.length ? 'PENDENTE' : 'SEM_LACUNAS_NA_REFERENCIA_FORNECIDA',
      observedCount: codes.size,
      expectedCount: expected.size || null,
      missingCodes: missing,
      unexpectedCodes: unexpected,
      complete: expected.size > 0 ? missing.length === 0 : null,
      humanValidationRequired: true,
    };
  }

  // Compatibilidade com o nome antigo. Não inventa uma lista de três câmaras.
  async scrapeAllCms() {
    throw new Error('DEPRECATED: forneça explicitamente uma fonte oficial CAOP/INE; não existe fallback simulado.');
  }
}

module.exports = CmFreguesiasScraper;
module.exports.assertOfficialUrl = assertOfficialUrl;
module.exports.normalizeFeature = normalizeFeature;
