# ATLAS VIVO MILK — MEMÓRIA OPERACIONAL DE NÃO REGRESSÃO

Este ficheiro é obrigatório para qualquer agente, modelo, workflow ou ferramenta de código que trabalhe neste repositório.

## FOCO ÚNICO
Construir, integrar, testar e estabilizar a WebApp do Atlas Vivo MILK para `atlas.associacaomilk.pt`.

## INFRAESTRUTURA CANÓNICA DESTE CICLO
- PTServidor = destino operacional da WebApp.
- Nextcloud = fonte operacional do corpus e dos ficheiros de trabalho para os agentes.
- Mistral Agents + Mistral Code/Vibe Code = interpretação, desenvolvimento, revisão e implementação.
- GitHub = superfície de trabalho/CI da branch actual, não fonte conceptual do Atlas.

## REGRA DE INGESTÃO
Neste ciclo, a ingestão curatorial deve partir do NEXTCLOUD.
Não voltar a usar Google Drive como fonte operacional de ingestão salvo ordem humana explícita posterior.

## COPÉRNICO
O globo COPÉRNICO já existe e deve ser recuperado, integrado e completado.
NÃO criar um globo substituto.
NÃO trocar COPÉRNICO por uma implementação genérica apenas porque é mais simples.

## FLUXO OBRIGATÓRIO
Nextcloud → leitura integral da fonte → decodificação curatorial por agentes Mistral → contrato de experiência → Mistral Code/Vibe Code → implementação → gates determinísticos → revisão multiagente → commit isolado → staging/validação → PTServidor.

## CURADORIAS, JOGOS E BRINCADEIRAS
- Cada curadoria deve manter mecânica, ritmo, sensação, gesto, linguagem, materialidade e relação territorial próprios.
- Não transformar curadorias em cards, tabs ou um motor genérico.
- Não inventar mecânicas por semelhança de título.
- Jogos, brincadeiras, convites e "tentar a sorte" são funções distintas.
- Preservar genealogia e versões autorais quando existirem divergências.
- O conteúdo documental serve ao código; o código serve à experiência.

## DRAMATURGIA PÚBLICA
Preservar a sequência e a lógica já estabelecidas da experiência pública, incluindo PRETO, SELO, TOQUE, COSMICOXES, palavras cósmicas, dissolução, COPÉRNICO/globo, MILKs territoriais, bilhete, descoberta, dispositivo autoral e retorno/latência, conforme fontes canónicas e estado validado da WebApp.

## COMPONENTES A PRESERVAR
Não reconstruir componentes que já existem. Em especial, recuperar/integrar antes de substituir: COPÉRNICO, COSMICOXES, Dado Sem Lado/Livro Cubo, Galeria Diletante, Fucô, Reizinho, Nuno, NÓS/falARTE, Palavra Ritual, A Casa que Não Existe, simpliCIDADE, ARTÉRIA, Curadoria do Inesperado e restantes curadorias documentadas.

## FRONTEIRA PÚBLICA
A Camada Invisível não deve ser tornada reversível pela WebApp pública. Dados internos, métodos, credenciais, material sensível, informação não publicada e conteúdo marcado NÃO PUBLICAR não entram na superfície pública.

## VERDADE OPERACIONAL
Nunca confundir:
- pedido com execução;
- configuração com funcionamento;
- commit com deploy;
- staging com produção;
- teste local com validação pública;
- presença de segredo com autenticação funcional.

Só usar FEITO / EXECUTADO / PUBLICADO / VALIDADO / VERIFICADO quando houver evidência correspondente.

## ANTI-REGRESSÃO
- Não recomeçar auditorias já fechadas.
- Não recriar ficheiros, assets, runtimes ou estruturas já existentes sem prova de necessidade.
- Não apagar, mover ou substituir originais.
- Não alterar interface, nomes, assets, RGPD, lógica validada ou arquitectura sem ordem explícita ou necessidade demonstrada pelos testes/fontes.
- Não introduzir plataformas alternativas por conveniência quando PTServidor + Nextcloud + Mistral resolvem o fluxo.
- Não voltar ao Replit/Vercel como destino da WebApp.
- Não tratar COSMICOXES como alias de Cosmic Flow.
- Não publicar um protótipo tecnicamente funcional se a experiência curatorial estiver incompleta.

## ESTADO DE CONTINUIDADE — 2026-09-02
Branch de trabalho: `work/copernico-recovery-webapp-20260902`.
O candidato falARTE com backend privado foi materializado nesta branch no commit `6f9728b37b066d359bbfac181dcc9401ef5fd79c`.
O workflow geral de decodificação Mistral ficou preso na ingestão Google Drive; esse ponto deve ser substituído por ingestão Nextcloud, sem perder o restante pipeline.
O foco imediato é: Nextcloud → decodificação Mistral das curadorias → Mistral Code → runtime WebApp → COPÉRNICO + territórios + curadorias funcionais → validação → PTServidor.

Antes de qualquer alteração relevante, ler este ficheiro e o último checkpoint documental do projecto. Em caso de conflito, prevalece a instrução humana mais recente e explícita.