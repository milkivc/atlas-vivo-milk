'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const NeedsDetector = require('../processors/needs-detector');
const TextAnalyzer = require('../processors/text-analyzer');
const ComplaintsParser = require('../processors/complaints-parser');
const CmFreguesiasScraper = require('../scrapers/cm-freguesias');
const AtasScraper = require('../scrapers/atas-scraper');
const AssociacoesScraper = require('../scrapers/associacoes');
const ParoquiasScraper = require('../scrapers/paroquias');

test('detecta ausência explícita com evidência, sem decidir prioridade', () => {
  const detector = new NeedsDetector();
  const text = 'Na freguesia não existe biblioteca nem espaço de encontro para a comunidade.';
  const out = detector.detectNeedsFromText(text, { sourceType: 'ata', sourceId: 'A-1' });
  assert.equal(out.count, 1);
  assert.equal(out.state, 'PENDENTE_VALIDACAO_HUMANA');
  assert.equal(out.automatedDecision, false);
  assert.equal(out.priorities.length, 0);
  assert.match(out.needs[0].statement, /não existe biblioteca/iu);
  assert.ok(out.needs[0].themes.some((x) => x.theme === 'cultura_memoria'));
  assert.ok(out.needs[0].themes.some((x) => x.theme === 'encontro_convivencia'));
  assert.equal(text.slice(out.needs[0].evidence.start, out.needs[0].evidence.end), out.needs[0].evidence.quote);
});

test('negação impede falso positivo', () => {
  const detector = new NeedsDetector();
  assert.equal(detector.detectNeedsFromText('Nesta freguesia não falta biblioteca.').count, 0);
  assert.equal(detector.detectNeedsFromText('Existe biblioteca e o jardim funciona.').count, 0);
});

test('palavra tema isolada não vira necessidade', () => {
  const detector = new NeedsDetector();
  assert.equal(detector.detectNeedsFromText('O museu abriu uma exposição e a praça recebeu uma festa.').count, 0);
});

test('analisador desativa sentimento e identidades', () => {
  const analyzer = new TextAnalyzer();
  const s = analyzer.analyzeSentiment('Estou triste com a praça.');
  const e = analyzer.extractEntities('João Silva esteve na Praça do Município.');
  assert.equal(s.disabled, true);
  assert.equal(s.score, null);
  assert.equal(e.disabled, true);
  assert.deepEqual(e.persons, []);
});

test('parser não cria urgência, responsável ou ação automática', () => {
  const parser = new ComplaintsParser();
  const out = parser.extractComplaint('Reclamação: falta uma rampa na Praça Central. É urgente.');
  assert.equal(out.isComplaintCandidate, true);
  assert.equal(out.urgency, 'human_review');
  assert.deepEqual(out.responsible, []);
  assert.deepEqual(out.actions, []);
  assert.equal(out.automatedDecision, false);
});

test('normaliza CAOP-like GeoJSON por DTMNFR e rejeita linha sem código', () => {
  const scraper = new CmFreguesiasScraper({ fetchImpl: async () => { throw new Error('unused'); } });
  const out = scraper.normalizeAdministrativeUnits({ features: [
    { properties: { DTMNFR: '110601', Freguesia: 'Exemplo A', Municipio: 'Lisboa', Distrito: 'Lisboa' } },
    { properties: { DTMNFR: '110602', Freguesia: 'Exemplo B', Municipio: 'Lisboa', Distrito: 'Lisboa' } },
    { properties: { Freguesia: 'Sem código' } },
  ] }, { sourceAuthority: 'dgterritorio.gov.pt' });
  assert.equal(out.count, 2);
  assert.equal(out.rejected.length, 1);
  assert.equal(out.mockDataUsed, false);
});

test('fonte territorial não oficial é bloqueada', async () => {
  const scraper = new CmFreguesiasScraper({ fetchImpl: async () => { throw new Error('must not be called'); } });
  await assert.rejects(() => scraper.fetchOfficialJson('https://example.com/freguesias.json'), /UNQUALIFIED_TERRITORIAL_SOURCE/);
  await assert.rejects(() => scraper.scrapeFreguesias('Lisboa'), /OFFICIAL_SOURCE_REQUIRED/);
});

test('falha de ata nunca cria conteúdo substituto', async () => {
  const fakeFetch = async () => ({ ok: false, status: 404, headers: new Map(), arrayBuffer: async () => new ArrayBuffer(0) });
  const scraper = new AtasScraper({ fetchImpl: fakeFetch, allowedHosts: ['municipio.example'] });
  const out = await scraper.readAta('https://municipio.example/ata.pdf');
  assert.equal(out.state, 'FALHA_FONTE');
  assert.equal(out.fabricatedFallbackUsed, false);
});

test('scrapers legados não podem regenerar diretórios simulados', async () => {
  const assoc = new AssociacoesScraper({ fetchImpl: async () => null });
  const parish = new ParoquiasScraper({ fetchImpl: async () => null });
  await assert.rejects(() => assoc.scrapeAllAssociacoes(), /NO_MOCK_FALLBACK/);
  await assert.rejects(() => parish.scrapeAllParoquias(), /NO_MOCK_FALLBACK/);
});

test('base legada está em quarentena e vazia no runtime', () => {
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../databases/entidades.json'), 'utf8'));
  assert.equal(db.state, 'QUARENTENA_LEGACY');
  assert.equal(db.runtimeAllowed, false);
  for (const value of Object.values(db.entidades)) assert.deepEqual(value, []);
});

test('não restam variáveis de mocks Mistral nos módulos saneados', () => {
  const root = path.join(__dirname, '..');
  const files = [
    'processors/needs-detector.js',
    'processors/text-analyzer.js',
    'processors/complaints-parser.js',
    'scrapers/cm-freguesias.js',
    'scrapers/atas-scraper.js',
    'scrapers/associacoes.js',
    'scrapers/paroquias.js',
  ];
  const prohibited = /mockFreguesias|mockAtas|mockAssociacoes|mockData\s*=|Adicionar dados mock|Dados mock de Paróquias|Simular extração/iu;
  for (const rel of files) {
    const source = fs.readFileSync(path.join(root, rel), 'utf8');
    assert.equal(prohibited.test(source), false, rel);
    assert.match(source, /SPDX-License-Identifier: EUPL-1\.2/);
  }
});
