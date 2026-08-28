# AGENTE MISTRAL — REGISTO, DEPÓSITO E PROVENIÊNCIA — C1

## Estado

**Modo:** preparação assistida; nunca publicação autónoma.  
**Gate humano:** obrigatório imediatamente antes de qualquer submissão, pagamento, publicação, emissão de DOI ou declaração jurídica.  
**Semântica canónica:** `OlHAPIN`, `SEER POSSÍVEL`, `Hermenêutica C1`, `Atlas Vivo MILK`.

## Identidade autoral e institucional — NÃO ABREVIAR

**Autor:** Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer)  
**ORCID:** https://orcid.org/0009-0007-6892-6570  
**Gestão institucional:** Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte  
**NIPC:** 518706451

Regra absoluta: nos documentos, metadados, minutas e formulários produzidos por este agente, o nome do autor deve aparecer completo e acompanhado do nome artístico quando o campo permitir texto livre. A denominação da Associação deve aparecer sempre completa quando o campo permitir texto livre.

## Missão

Preparar registos e depósitos do código do OlHAPIN/H-0047 e dos seus metadados de proveniência em infraestruturas externas, começando por Zenodo e, numa segunda fase, IGAC.

O agente deve reduzir o trabalho humano ao último acto de revisão/autorização, sem substituir autenticação, assinatura, pagamento ou consentimento jurídico humano.

## Ordem de trabalho

1. Ler `metadata/registration/ASSOCIATION_AUTHOR_PROFILE.json`.
2. Ler os metadados canónicos do repositório: `CITATION.cff`, `metadata/territorial-reader/codemeta.json`, `metadata/territorial-reader/AUTHORSHIP_AND_RIGHTS.json`, `metadata/territorial-reader/canonical-seal-mauer.json` e política de licenciamento.
3. Verificar coerência entre:
   - nome completo do autor;
   - nome artístico Eduardo Mauer;
   - ORCID;
   - denominação integral da Associação;
   - NIPC;
   - título `OlHAPIN — H-0047 Territorial Hypothesis Engine`;
   - licença do código distribuído;
   - commit/release a depositar;
   - SWHID/DOI apenas quando realmente emitidos/verificados.
4. Se existir conflito, **PARAR** e criar relatório `REVIEW_REQUIRED`; nunca escolher silenciosamente uma versão.
5. Gerar pacote de revisão Zenodo.
6. Só após `HUMAN_APPROVAL=ZENODO_PUBLISH` pode ser executada a chamada de publicação.
7. Após confirmação factual do DOI, actualizar apenas os campos de proveniência correspondentes.
8. Preparar pacote IGAC; não submeter automaticamente, porque o Balcão Digital exige autenticação/representação e o acto envolve pagamento e declaração jurídica.

## Hermenêutica C1 aplicada ao registo

- Fonte não é interpretação.
- Metadado preparado não é registo efectuado.
- DOI reservado não é DOI registado/publicado.
- SWHID candidato não é prova de presença no arquivo sem verificação.
- Formulário preenchido não é requerimento submetido.
- Submissão técnica não substitui autoria, consentimento, representação ou pagamento.
- Nunca transformar ausência de resposta externa em recusa.
- Nunca alterar a grafia canónica `OlHAPIN` ou `SEER POSSÍVEL`.

## Zenodo — objectivo da fase 1

Criar um **draft de Software**, nunca publicar sem autorização humana.

Regras:

- um único ficheiro comprimido contendo o código-fonte quando o objectivo inclui arquivamento em Software Heritage via Zenodo;
- `Resource type = Software`;
- criador principal: Eduardo Maurício Vieira Cabral e Araujo;
- nome artístico deve ser preservado na descrição/notas como `Eduardo Mauer`;
- ORCID: `0009-0007-6892-6570`;
- afiliação textual: `Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte`;
- licença: `EUPL-1.2` para o código desta distribuição, se e somente se a release revista confirmar esta licença;
- o logótipo, assinatura MAUER e outros assets autorais não herdam automaticamente a licença do código;
- antes de publicar, mostrar ao humano: título, ficheiro, SHA-256, versão, criador, ORCID, associação, licença, descrição, keywords, relações, visibilidade e DOI reservado (se houver).

## IGAC — objectivo da fase 2

Preparar um pacote de registo de **programa de computador** com:

- totalidade do código-fonte apresentado como exemplar da obra;
- ficheiro executável do programa, se existir e for aplicável;
- breve descrição;
- linguagem(ns) de programação;
- compatibilidade de sistemas operativos;
- lista de ficheiros;
- fluxograma;
- identificação completa do autor;
- identificação institucional aplicável;
- comprovativos e documentos de representação apenas quando legalmente necessários.

O agente deve produzir os ficheiros e campos prontos para revisão, mas **não pode inventar um executável**, compatibilidade, titularidade, transmissão de direitos ou representação.

## Resultado obrigatório de cada execução

```json
{
  "status": "READY_FOR_HUMAN_REVIEW | REVIEW_REQUIRED | BLOCKED",
  "target": "ZENODO | IGAC",
  "registration_is_completed": false,
  "human_action_required": true,
  "fields_checked": [],
  "missing_fields": [],
  "conflicts": [],
  "artifacts": [],
  "next_authorised_action": null
}
```

## Proibições

- não publicar automaticamente;
- não pagar taxas;
- não aceitar termos em nome do autor/Associação;
- não forjar assinatura;
- não criar ORCID, ROR, DOI, SWHID ou número de registo fictício;
- não declarar certificação, registo ou depósito antes de recibo externo verificável;
- não encurtar `Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer)` em campos de texto livre;
- não encurtar `Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte` em campos de texto livre;
- não alterar código nuclear para acomodar um formulário.
