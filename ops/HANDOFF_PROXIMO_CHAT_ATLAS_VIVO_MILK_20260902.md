# HANDOFF — PRÓXIMO CHAT — ATLAS VIVO MILK

Data: 2026-09-02
Projecto: SANEAMENTO DRIVE / Atlas Vivo MILK
Branch de trabalho: `work/copernico-recovery-webapp-20260902`
Repo: `milkivc/atlas-vivo-milk`

## INSTRUÇÃO DE ARRANQUE DO PRÓXIMO CHAT

Não reiniciar auditorias, não regressar a explicações gerais, não reabrir decisões já fixadas. Retomar directamente a produção das experiências digitais curatoriais multissensoriais da WebApp.

Antes de afirmar estado de execução, verificar o branch e os GitHub Actions actuais.

## FOCO SOBERANO

A prioridade é a criação e implementação rigorosa de experiências digitais territoriais multissensoriais.

Ordem obrigatória:

**CURADORIA → DINÂMICA / BRINCADEIRA / RITO / CONVITE → EXPERIÊNCIA → DISPOSITIVO DERIVADO → CÓDIGO**

Não começar pelo dispositivo.
Não transformar as 49 curadorias num catálogo, cards ou um motor genérico.

## CONSTITUIÇÃO CANÓNICA

Documento soberano recém-fixado:

`curatorial-factory/CONSTITUICAO_EXPERIENCIAL_SOBERANA_ATLAS_VIVO_MILK_20260902.md`

Commit de fixação:

`89ea40296d00b0377d40920b7631c16d04147c27`

Este documento inclui:

- singularidade irreduzível;
- fenómeno antes do significado;
- encontro que transborda em conto;
- redes miceliais formadas por sorriso, toque, encanto, cuidado, emoções, arte e vida;
- canal vivo para palavras, imagens, desenhos, símbolos, ritos, memórias, textos, poesia, risos, saudade, choro, amor e sons consentidos;
- saber fundido ao sabor, cor, som, gesto, espaço e memória;
- retenção e protensão como acção;
- escuta causal, semântica e identitária;
- multissensorialidade funcional;
- acessibilidade sem empobrecimento poético;
- devolução territorial;
- FECHO CENTRAL DO NEXO CAUSAL.

### FECHO CENTRAL DO NEXO CAUSAL — INVARIANTE

**O nexo causal renasce de onde nasce.**

O Atlas não fecha o fenómeno numa causalidade linear. O fecho é retorno e reabertura:

**percepção → gesto → resposta → retenção → protensão → encontro → conto → rasto → nova percepção**

Aquilo que acontece modifica retrospectivamente o que acabou de acontecer e prospectivamente aquilo que ainda pode vir.

Invariante de produção:

**A curadoria cria a dinâmica. A dinâmica abre a experiência. A experiência exige o dispositivo. O código torna essa exigência operável. O encontro devolve tudo ao território e reabre o nexo causal.**

## ESTADO TÉCNICO CONHECIDO NO MOMENTO DESTE HANDOFF

### Mistral

- `MISTRAL_API_KEY` foi substituída por chave nova pelo utilizador.
- A chave nova foi validada com sucesso em chamada real.
- `codestral-latest` respondeu `PASS` no probe.
- Não expor valores de segredo.
- Manter `MISTRALAPI_KEY` separado; não substituir/mesclar sem necessidade.

### Experiências

- 49 blueprints multissensoriais já foram gerados e passaram gate de 49/49 assinaturas distintas.
- 35 runtimes Codestral já foram produzidos e preservados no branch.
- A recuperação dos 14 restantes foi reiniciada com a nova `MISTRAL_API_KEY`.
- Workflow actual de recuperação exacta:
  `.github/workflows/23-codestral-repair-integrate-49.yml`
- Commit de reinício do workflow exact-49:
  `8afee29b9231c69717fcf9f4fa627d41d1cc1434`
- NÃO afirmar que 49 runtimes estão concluídos sem verificar o run actual e a contagem real no branch.

### Oficina de rigor territorial/multissensorial

Workflow:
`.github/workflows/21-mistral-code-deep-curatorial-refinement.yml`

Commit da transformação em júri + oficina:
`ee9c106e06088564f1ad31a50643b85c24f504df`

Função: avaliar cada experiência por quatro perspectivas independentes antes de reparação:

1. território vivido e corpo;
2. dramaturgia multissensorial;
3. fidelidade curatorial/autoral;
4. singularidade experiencial.

Só reparar o que estiver raso, genérico, decorativo ou repetitivo.

### WebApp / COPÉRNICO

- Preservar COPÉRNICO existente; não reconstruir.
- Preservar entrada canónica PRETO → SELO → TOQUE → COSMICOXES → COPÉRNICO.
- Não fundir COSMICOXES com antigo Cosmic Flow.
- Não substituir Galeria Diletante, Fucô, Nuno, Dado Sem Lado/Reizinho ou outras identidades autorais por componentes genéricos.

### PTServidor

- Staging privado FTPS existe e já funcionou anteriormente com readback.
- `migration@associacaomilk.pt` usa `PTSERVIDOR_FTPS_PASSWORD` e é staging privado.
- `atlas@associacaomilk.pt` usa `PTSERVIDOR_ATLAS_FTPS_PASSWORD` e é a credencial dedicada da webroot Atlas.
- Nunca trocar uma pela outra.
- Não tocar em `associacaomilk.pt`.
- Promoção pública só depois dos gates necessários.

### Nextcloud

- Nextcloud canónico do corpus: `https://associacaomilk.pt/nextcloud`.
- Dados fora da webroot.
- O utilizador pediu que a Constituição Experiencial e este handoff sejam gravados no Nextcloud para não se perderem.
- No momento deste handoff, não existe conector Nextcloud/WebDAV instalado neste chat e a autenticação WebDAV anterior ainda não estava operacional.
- NÃO afirmar que os ficheiros já estão no Nextcloud sem obter confirmação de PUT/readback.
- Criar/usar uma sincronização segura assim que a autenticação Nextcloud for aceite, preferindo app-password dedicado em vez da password principal.

## FONTES CURATORIAIS PRIORITÁRIAS JÁ INCORPORADAS

Incluem, entre outras:

- falARTE / fragmentos falARTE;
- Livro Cubo / sete dinâmicas / Manual Invertido;
- Deriva do Sentido;
- Casa que Não Existia;
- festas 827 + convites curatoriais;
- brincadeiras, jogos e ludoterapia;
- topónimos, falares, lendas e folclore vivo;
- propostas espectaculares MILK;
- matriz de investigação Rilke / Ibn ʿArabī / Eckhart / Freire / Dumazedier / Cultural Probes / OARS / Data Feminism.

Regra: texto autoral/directo > curadoria > dinâmica/brincadeira > investigação > decisão técnica.

## NÃO REGREDIR

- não usar Drive como corpus desta fase; fonte canónica é Nextcloud;
- não inventar conteúdo curatorial quando a fonte não resolve uma escolha;
- não reduzir multisensorialidade a som + partículas;
- não produzir 49 variações do mesmo template;
- não permitir dispositivo-first;
- não expor Camada Invisível ou vocabulário confidencial na camada pública;
- não expor segredos em logs, código ou prompts;
- não declarar `FEITO` com base em configuração, blueprint ou artefacto parcial.

## PRIMEIRA ACÇÃO NO PRÓXIMO CHAT

1. Verificar HEAD do branch.
2. Verificar estado factual do workflow `23 MILK Codestral repair and integrate exact 49`.
3. Contar os runtimes reais em `deploy/atlas-public/experiences` excluindo `registry.js`.
4. Se 49/49: executar oficina de rigor territorial/multissensorial e staging privado PTServidor.
5. Se <49: reparar somente os faltantes, sem regenerar os já validados.
6. Assim que Nextcloud aceitar autenticação, sincronizar com readback este handoff e a Constituição Experiencial Soberana.
