# Território do Corpo — relatório técnico do código

**Autor:** Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer)  
**ORCID:** 0009-0007-6892-6570  
**Gestão institucional:** Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte  
**Licença do código:** EUPL-1.2

## Âmbito deste relatório

Este documento descreve **apenas o alcance técnico verificável do código** presente neste ramo. A fundamentação conceptual de **Território do Corpo** fica deliberadamente fora deste relatório e será acrescentada pelo autor em momento próprio.

O ramo de trabalho é:

`work/territorio-do-corpo-codeberg-20260829`

O alvo de preservação/migração no Codeberg/Forgejo é a branch:

`territorio-do-corpo`

## 1. Arquitectura técnica existente

O núcleo está organizado como módulos CommonJS/Node.js sob `src/territorial-reader/`, com separação entre:

- preservação e relações de evidência;
- análise documental;
- constituição epistémica e limites de operação;
- motores de hipótese;
- ontologia mínima;
- processamento territorial;
- bases/fontes e scrapers;
- metrologias;
- testes determinísticos.

A separação modular permite substituir, ampliar ou desligar motores sem transformar o sistema num bloco monolítico.

## 2. Grafo de evidência e proveniência

`src/territorial-reader/hypothesis/evidence-graph.js` implementa um grafo de evidência com:

- identificação territorial obrigatória;
- nós de evidência com `source`, `sourceType`, `sourceAuthority`, conteúdo, citação, data e claims;
- hash SHA-256 do conteúdo;
- identificador determinístico quando nenhum ID é fornecido;
- agrupamento por `dependencyKey` para distinguir fontes que não são realmente independentes;
- relações entre evidências marcadas para validação humana;
- serialização explícita em mundo aberto (`closedWorld: false`).

Isto permite preservar a cadeia que liga uma hipótese aos objectos documentais que a originaram, em vez de devolver apenas uma conclusão opaca.

## 3. Motor de hipóteses

`src/territorial-reader/hypothesis/hypothesis-engine.js` funciona como orquestrador. A partir do grafo e de entradas estruturadas, compõe módulos independentes para:

- contradições;
- perfil temporal;
- sinais fracos;
- ausência documentada;
- problema territorial inverso;
- incerteza explícita;
- lensing territorial;
- fissão/decomposição do problema;
- transições de estado;
- leitura espacial/material;
- pressão estrutural;
- realidade institucional;
- capacidade instalada;
- vitalidade simbólica;
- desertos territoriais documentados;
- campo de possibilidades;
- correspondência curatorial;
- correspondência com oportunidades de financiamento.

O motor não transforma hipótese em facto. O output contém explicitamente:

- `fact: false`;
- `hypothesis: true`;
- `openWorld: true`;
- `probability: null`;
- `confidenceScore: null`;
- `uncertaintyExplicit: true`;
- `publishable: false`;
- `actionable: false`;
- `automatedDecision: false`;
- `humanValidationRequired: true`.

Este desenho é tecnicamente relevante porque separa **capacidade de produzir hipóteses** de **autoridade para decidir ou publicar**.

## 4. Campo de possibilidades

`src/territorial-reader/hypothesis/possibility-engine.js` trabalha apenas com respostas que tenham `evidenceIds` associados. O módulo já possui questões estruturadas para detectar, entre outras coisas:

- o que está ausente;
- o que permanece vivo;
- o que está adormecido;
- o que está subutilizado;
- o que perdeu suporte;
- o que poderia reaparecer;
- que direito está pouco materializado;
- que espaço poderia sustentar encontro;
- escuta;
- permanência;
- brincar;
- repertório;
- e que forma MILK poderia acolher a possibilidade.

O resultado permanece `POSSIBILITY_TO_VALIDATE`, sem prescrição e sem selecção automática.

## 5. Financiamento: motor existente

`src/territorial-reader/hypothesis/funding-matcher.js` já aceita candidatos de financiamento estruturados com:

- programa;
- call;
- URL de fonte;
- evidência de elegibilidade;
- janela temporal;
- cofinanciamento;
- exigência de parceiros.

O módulo não declara financiamento como obtido. Um candidato com fonte passa para `A_VERIFICAR`; sem fonte, para `SOURCE_REQUIRED`. O output mantém `fundingGuaranteed: false` e `humanValidationRequired: true`.

Este desenho permite ligar feeds externos de oportunidades sem contaminar o núcleo com promessas de financiamento.

## 6. Alcance de integração

O código já permite, tecnicamente, construir uma cadeia em que:

1. objectos documentais entram como evidência preservada;
2. relações e dependências são explicitadas;
3. vários motores calculam perfis independentes;
4. hipóteses são geradas sem se tornarem automaticamente factos;
5. possibilidades são chamadas apenas quando há IDs de evidência;
6. oportunidades de financiamento podem ser anexadas como candidatos verificáveis;
7. a saída permanece dependente de validação humana.

A arquitectura é adequada para integração com fontes externas, pipelines documentais, APIs públicas, jobs periódicos e outros repositórios porque os módulos recebem e devolvem objectos JavaScript simples em vez de dependerem de uma interface única.

## 7. Segurança e qualidade verificável

O workflow `territorial-reader-saneado-tests.yml` executa:

- `node --check` em todos os JavaScript do módulo;
- a bateria de testes Node em `src/territorial-reader/tests/*.test.js`;
- procura por marcadores de dados simulados/mock no runtime;
- verificação de uma fonte territorial oficial;
- busca por padrões comuns de segredos em texto simples;
- recibo factual do resultado.

O objectivo desses testes não é demonstrar verdade conceptual; é demonstrar propriedades técnicas observáveis: sintaxe, ausência de mocks residuais, ausência de segredos comuns em claro, execução determinística dos testes e preservação do gate humano.

## 8. Migração para Codeberg/Forgejo

Neste ramo foi acrescentado `mistral-territorio-corpo-codeberg.yml`.

O workflow reaproveita a arquitectura de agente Mistral já existente no repositório e aplica uma política estrita:

- alvo exclusivo: `codeberg.org/milkivc/atlas-vivo-milk`, branch `territorio-do-corpo`;
- nunca modifica `master` no Codeberg;
- nunca usa `--force`;
- nunca apaga refs;
- nunca reescreve histórico;
- permite criar a branch remota quando ela ainda não existe;
- depois disso, só permite fast-forward;
- se Codeberg estiver à frente ou houver divergência, pára;
- o agente Mistral valida a operação permitida contra uma política determinística antes do push.

Isto torna o Codeberg/Forgejo um segundo ponto verificável de preservação/desenvolvimento sem usar uma sincronização destrutiva.

## 9. Dupla validação humana

A regra operacional deste ramo é **dupla validação humana** antes de consolidação/publicação: Eduardo Maurício Vieira Cabral e Araujo (Eduardo Mauer) + Nuno.

O gate de baixo nível existente no repositório aceita actualmente uma validação humana individual. Por isso, nenhuma integração externa deve tratar esse gate isolado como autorização final de publicação. A camada de publicação/financiamento deste ramo deverá exigir as duas validações antes de qualquer estado final.

## 10. O que este código já pode gerar

Sem acrescentar fundamentação conceptual, o código já pode produzir objectos estruturados para:

- inventário de evidências;
- hashes e recibos;
- relações entre evidências;
- contagem de fontes independentes por claim;
- contradições;
- perfil temporal;
- sinais fracos;
- ausências documentadas;
- incertezas e limitações;
- decomposição de problemas;
- estados e transições;
- perfis materiais/espaciais;
- capacidade instalada;
- candidatos de possibilidade suportados por evidência;
- candidatos curatoriais;
- candidatos de financiamento com estado de verificação.

## 11. Próxima extensão técnica

A extensão imediata é um **Funding Opportunity Discovery Adapter** separado do núcleo. Ele deve:

1. consultar apenas fontes configuradas e identificáveis;
2. normalizar cada oportunidade para o contrato já esperado pelo `funding-matcher.js`;
3. nunca afirmar elegibilidade sem evidência;
4. nunca afirmar aprovação/financiamento;
5. guardar URL, programa, call, prazo, parceiros e cofinanciamento;
6. devolver tudo como candidato `A_VERIFICAR`;
7. exigir dupla validação humana antes de qualquer uso em candidatura.

Assim, a capacidade técnica do repositório pode chamar possibilidades de financiamento sem transformar pesquisa de oportunidades em decisão automática.
