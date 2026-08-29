# Mistral — perfil de governação, AI Act, EIF e FIWARE

**Sistema:** orquestração Mistral nos repositórios interoperáveis da Associação MILK  
**Autor do software e desenho:** Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer)  
**ORCID:** 0009-0007-6892-6570  
**Gestão institucional:** Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte

## 1. Natureza deste documento

Este documento é um **perfil técnico-jurídico de alinhamento e evidência**. Não constitui uma declaração automática de conformidade, certificação, avaliação jurídica final ou classificação regulatória definitiva.

O Regulamento (UE) 2024/1689 — Regulamento da Inteligência Artificial — é aplicável, em termos gerais, desde 2 de agosto de 2026, com calendários específicos para certas disposições. Fonte oficial: `https://eur-lex.europa.eu/eli/reg/2024/1689/oj`.

O European Interoperability Framework (EIF) e o Regulamento (UE) 2024/903 — Interoperable Europe Act — estruturam a interoperabilidade em dimensões legal, organizacional, semântica e técnica. Fontes oficiais: `https://interoperable-europe.ec.europa.eu/Interoperable-Europe-Act-Regulation` e `https://interoperable-europe.ec.europa.eu/collection/iopeu-monitoring/european-interoperability-framework-eif`.

## 2. Papel da Mistral neste sistema

A Mistral é usada como **modelo/serviço de IA de terceiro** dentro de workflows restritos. A Associação MILK não declara ser fornecedora do modelo Mistral.

Papel operacional actualmente permitido:

1. validar uma operação de sincronização Git contra uma política determinística;
2. fazer preflight de metadados;
3. detectar lacunas de interoperabilidade;
4. organizar candidatos de financiamento recolhidos de fontes oficiais;
5. produzir relatórios de controlo e receipts;
6. devolver uma classificação ou recomendação que **não tem autoridade de publicação, candidatura, contratação ou decisão pública**.

A classificação jurídica exacta da Associação MILK em cada implantação — deployer, provider de um sistema a jusante, integrador ou outro papel definido no AI Act — deve ser reavaliada sempre que a finalidade, distribuição, autonomia ou público-alvo do sistema mude.

## 3. Restrições vinculativas do agente

O agente Mistral não pode, por si só:

- publicar uma candidatura a financiamento;
- declarar uma entidade elegível;
- afirmar financiamento garantido;
- publicar um depósito científico ou legal;
- aceitar termos legais;
- efectuar pagamentos;
- alterar `main` ou `master` no Codeberg sem política expressa;
- fazer force-push;
- apagar refs ou reescrever histórico;
- transformar hipótese em facto;
- substituir as duas validações humanas exigidas pelo projecto.

Todas as saídas relevantes mantêm `humanValidationRequired: true` e, nos fluxos finais, `dualHumanValidationRequired: true`.

Validadores humanos finais:

- Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer);
- Nuno.

## 4. AI Act — evidência mínima mantida

### 4.1 Identidade e finalidade

Cada workflow deve documentar:

- nome do sistema e versão;
- modelo Mistral utilizado;
- finalidade específica da execução;
- origem dos dados/documentos fornecidos ao modelo;
- operação permitida;
- operação proibida;
- resultado produzido;
- decisão humana posterior, quando aplicável.

### 4.2 Supervisão humana

A Mistral actua como componente de apoio. O sistema não lhe transfere autoridade para:

- classificação jurídica final;
- decisão financeira;
- decisão pública;
- aprovação de publicação;
- avaliação de uma pessoa para acesso a direitos ou serviços.

### 4.3 Transparência de conteúdo gerado

Quando texto, imagem, áudio ou vídeo gerado ou substancialmente alterado por IA for publicado ao público, o fluxo deve verificar as obrigações de transparência aplicáveis, incluindo o artigo 50 do AI Act quando pertinente.

Metadados internos, receipts técnicos e classificações de pipeline não são automaticamente convertidos em conteúdo público.

### 4.4 Literacia e documentação

O repositório deve manter instruções suficientes para que operadores humanos compreendam:

- capacidades e limites do agente;
- dependência do fornecedor Mistral;
- possibilidade de erro e alucinação;
- necessidade de conferir fontes;
- significado dos estados `A_VERIFICAR`, `SOURCE_REQUIRED`, `HUMAN_VALIDATION_REQUIRED` e equivalentes.

### 4.5 Proibições e limites de finalidade

O agente de repositório/interoperabilidade não é autorizado a executar:

- social scoring;
- manipulação de utilizadores;
- exploração de vulnerabilidades;
- policiamento preditivo;
- reconhecimento de emoções;
- categorização biométrica;
- inferência de atributos sensíveis de pessoas.

Qualquer nova função desse tipo exige nova análise e não fica autorizada por este documento.

## 5. Matriz EIF

### Interoperabilidade legal

Evidências/reposições previstas:

- licença SPDX/EUPL-1.2 do código aplicável;
- direitos/autoria documentados;
- ORCID do autor;
- política de dados e de propriedade intelectual separada por objecto;
- AI Act system card;
- proveniência e receipts de execução;
- identificação de termos de APIs externas.

### Interoperabilidade organizacional

- Associação MILK identificada pelo nome completo;
- autor e responsável intelectual identificados;
- papéis de agente, operador e validadores separados;
- dupla validação humana para consolidação/publicação;
- processos de preservação, metadados e financiamento separados.

### Interoperabilidade semântica

- DataCite Metadata Schema 4.7;
- OpenAIRE Research Product — Software;
- CodeMeta;
- ORCID;
- SPDX;
- SWHID;
- JSON/JSON-LD;
- FIWARE/NGSI-LD como perfil de troca semântica.

### Interoperabilidade técnica

- Git/Forgejo/Codeberg;
- Software Heritage Save Code Now API;
- DataCite REST API;
- OpenAIRE Graph API para verificação de discoverability;
- Zenodo quando aplicável ao depósito/release;
- HTTPS e tokens em secret stores;
- CI com testes determinísticos e receipts.

## 6. FIWARE / NGSI-LD

FIWARE é usado como **perfil de interoperabilidade de dados**, não como alegação de certificação FIWARE.

Tags obrigatórias para recursos compatíveis deste pipeline:

- `fiware`;
- `ngsi-ld`;
- `smart-data-models`;
- `interoperability`;
- `provenance`;
- `human-validation`;
- `cultural-heritage` quando semanticamente aplicável.

Contexto mínimo NGSI-LD:

`https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld`

O perfil actual é classificado como `custom-profile-candidate`. Não se declara que exista um Smart Data Model oficial FIWARE específico para a metodologia MILK.

## 7. DataCite e OpenAIRE

Do mesmo perfil canónico são gerados **dois metadados principais**:

1. `datacite-4.7.json` — payload compatível com a estrutura JSON da DataCite REST API e Metadata Schema 4.7;
2. `openaire-research-product-software.json` — perfil de software para interoperabilidade/validação no OpenAIRE Research Graph.

O DataCite Metadata Schema 4.7 passou a aceitar `SWHID` como `relatedIdentifierType`, permitindo ligar o DOI ao objecto preservado no Software Heritage.

O OpenAIRE Graph API é usado para **pesquisa e verificação de presença/discoverability**. O pipeline não afirma que existe uma API de depósito directo OpenAIRE para este repositório. A integração normal deve decorrer por repositórios/serviços que o OpenAIRE colhe, como infraestruturas de depósito científico compatíveis.

## 8. Software Heritage

Após sincronização verificada com Codeberg, o workflow pode chamar `Save Code Now` para o origin Git público e conservar:

- request id;
- estado do pedido;
- estado da tarefa;
- snapshot SWHID quando devolvido;
- SHA Git da versão correspondente;
- URL do origin Codeberg.

Não se declara um SWHID de um commit específico sem receipt que estabeleça a relação.

## 9. Financiamento

A Mistral pode orquestrar a leitura de fontes oficiais e converter chamadas em candidatos estruturados. A pesquisa deve preservar:

- autoridade da fonte;
- URL oficial;
- programa;
- call/aviso;
- prazo;
- orçamento global quando publicado;
- critérios de acesso encontrados;
- evidência de possível correspondência técnica;
- lacunas ainda por confirmar.

Estados permitidos:

- `A_VERIFICAR`;
- `SOURCE_REQUIRED`;
- `POSSIBLE_TECHNICAL_FIT`;
- `NOT_ELIGIBLE_BY_EXPLICIT_RULE` apenas quando uma regra oficial for inequívoca e citada;
- `HUMAN_REVIEW_REQUIRED`.

Estados proibidos sem decisão oficial externa:

- `APPROVED`;
- `FUNDED`;
- `GUARANTEED`;
- `ELIGIBLE` como conclusão automática.

## 10. Regra de alteração

Qualquer mudança em finalidade, modelo, autonomia, dados tratados, população afectada, integração com serviços públicos ou função decisória deve gerar nova versão deste perfil e nova revisão humana.
