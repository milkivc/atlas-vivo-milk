'use strict';
// SPDX-License-Identifier: EUPL-1.2

const crypto = require('crypto');

const DOCUMENT_TYPES = Object.freeze([
  'ATA','DELIBERACAO','ORCAMENTO','OBRA','INVESTIMENTO','CONTRATACAO_PUBLICA','EDITAL','AVISO',
  'PROGRAMACAO_PUBLICA','PLANO_MUNICIPAL','REGULAMENTO','NOTICIA_LOCAL','MEDIA_REGIONAL','ASSOCIACAO',
  'AGENTE_CULTURAL','EQUIPAMENTO','BIBLIOTECA','ARQUIVO','CENTRO_MEMORIA','PUBLICACAO_LOCAL','QUEIXA_PUBLICA',
  'CONFLITO_PUBLICO_DOCUMENTADO','DADO_OFICIAL','FONTE_EUROPEIA','OUTRO_DOCUMENTADO'
]);

const CLAIM_TYPES = Object.freeze(['PROMISE','EXECUTION','OMISSION_EXPLICIT','CONTINUITY','INTERRUPTION','ABSENCE_EXPLICIT','PRESENCE','OTHER']);

function clean(value) { return String(value ?? '').replace(/\s+/gu, ' ').trim(); }
function sha256(value) { return crypto.createHash('sha256').update(Buffer.isBuffer(value) ? value : Buffer.from(String(value), 'utf8')).digest('hex'); }

function assertPublicHttps(url, approvedHost) {
  let parsed;
  try { parsed = new URL(url); } catch { throw new Error('INVALID_DOCUMENT_SOURCE_URL'); }
  if (parsed.protocol !== 'https:') throw new Error('DOCUMENT_SOURCE_HTTPS_REQUIRED');
  const host = parsed.hostname.toLowerCase();
  if (!approvedHost || host !== String(approvedHost).toLowerCase()) throw new Error('DOCUMENT_SOURCE_HOST_MUST_BE_EXPLICITLY_APPROVED');
  if (host === 'localhost' || host.endsWith('.local') || /^127\./u.test(host) || /^10\./u.test(host) || /^192\.168\./u.test(host)) {
    throw new Error('PRIVATE_OR_LOCAL_SOURCE_PROHIBITED');
  }
  return parsed;
}

function sourceRecord({
  id,
  type,
  url,
  approvedHost,
  authority,
  territoryId,
  fetchedAt,
  documentDate = null,
  contentHash,
  reuseCondition = 'A_VERIFICAR_POR_RECURSO',
  dependencyKey = null,
  formalKey = null,
  semanticKey = null,
  issueKey = null,
  relationKey = null,
  claimTypes = [],
  provenance = [],
} = {}) {
  if (!id) throw new Error('DOCUMENT_RECORD_ID_REQUIRED');
  if (!DOCUMENT_TYPES.includes(type)) throw new Error('UNSUPPORTED_DOCUMENT_TYPE');
  const parsed = assertPublicHttps(url, approvedHost);
  if (!clean(authority)) throw new Error('DOCUMENT_AUTHORITY_REQUIRED');
  if (!clean(territoryId)) throw new Error('DOCUMENT_TERRITORY_REQUIRED');
  if (!fetchedAt) throw new Error('DOCUMENT_RETRIEVAL_DATE_REQUIRED');
  if (!/^[a-f0-9]{64}$/u.test(String(contentHash || ''))) throw new Error('DOCUMENT_SHA256_REQUIRED');
  const claims = [...new Set((claimTypes || []).map(String))];
  if (claims.some((claim) => !CLAIM_TYPES.includes(claim))) throw new Error('UNSUPPORTED_DOCUMENT_CLAIM_TYPE');
  return {
    id: String(id), type, sourceUrl: parsed.toString(), authority: clean(authority), territoryId: clean(territoryId),
    fetchedAt: String(fetchedAt), documentDate: documentDate ? String(documentDate) : null, contentHash: String(contentHash),
    reuseCondition: String(reuseCondition), dependencyKey: dependencyKey || null, formalKey: formalKey || null,
    semanticKey: semanticKey || null, issueKey: issueKey || null, relationKey: relationKey || null, claimTypes: claims,
    provenance: Array.isArray(provenance) ? provenance.map((item) => ({ ...item })) : [],
    originalPreserved: true, externalContentTrust: 'UNTRUSTED_CONTENT', automatedPublication: false,
    humanValidationRequired: true,
  };
}

module.exports = { DOCUMENT_TYPES, CLAIM_TYPES, sourceRecord, assertPublicHttps, sha256 };
