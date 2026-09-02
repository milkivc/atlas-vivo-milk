# Atlas Vivo MILK — instruções operacionais para Mistral Vibe Code

## Base canónica
Trabalhar exclusivamente a partir desta branch derivada de `work/public-experience-architecture-20260829`.
Ler antes de editar:
1. `docs/ATLAS_CAMADA_PUBLICA_EXPERIENCIA_CANONICA_20260829.md`
2. `docs/ATLAS_PUBLIC_SURFACE_CANONICAL_CONTRACT_20260827.md`
3. `migration/PUBLIC_LAYER_SOURCE_MANIFEST_20260829.json`
4. `docs/agent-input/ATLAS_EXECUTION_PACK_20260902.md`
5. `deploy/atlas-public/experience-machine.js`
6. `deploy/atlas-public/public-runtime-config.json`
7. `tests/ia-milk-public-boundary.test.mjs`

## Regra de execução
Primeiro ler e cruzar fontes; depois interpretar a função curatorial; só então alterar código. Título, caminho ou nome de ficheiro não classificam conteúdo. Não inventar mecânicas, textos, factos territoriais, direitos, consentimentos ou estados de publicação.

## Dramaturgia pública obrigatória
`PRETO → SELO → TOQUE → COSMICOXES → PALAVRAS CÓSMICAS → SEGUNDO GESTO → DISSOLUÇÃO → GLOBO NEGRO → MILKs TERRITORIAIS → BILHETE → DESCOBERTA → DISPOSITIVO AUTORAL → RETORNO/LATÊNCIA`.

A superfície não é dashboard, catálogo, menu 3D, homepage promocional, feed ou grelha de cards. A presença do nome de uma curadoria não equivale à sua implementação. Implementação exige conservar mecânica, sensação, ritmo, surpresa, materialidade, linguagem e possibilidade de encontro.

`COSMICOXES` não pode ser tratado como alias de `Cosmic Flow`. Divergências históricas devem ser preservadas e reconciliadas documentalmente, não apagadas.

## Dispositivos e identidade
Preservar autonomia de Fucô, Galeria Diletante, Reizinho, Dado Sem Lado, Livro Cubo/Livro-Esfera e Nuno. Nuno só aparece no limiar de contribuição/recolha. `brincar`, `convite` e `tentar a sorte` são funções distintas.

## Fronteira pública
PUBLIC-ONLY. Nunca expor, serializar, importar ou reconstruir Camada Invisível, motores privados, prompts internos, credenciais, consentimentos integrais, dados pessoais não publicados ou regras de scoring. Não promover para `main`. Não publicar em produção a partir desta branch.

## PTServidor / cPanel / Sitejet
O PTServidor confirmou que as APIs cPanel e Softaculous estão disponíveis. Sitejet Builder é uma ferramenta adicional de construção/edição, não a fonte canónica do Atlas.
- Usar Sitejet apenas em domínio/subdomínio de staging ou preview isolado.
- Nunca publicar Sitejet directamente sobre a webroot viva sem restore point e validação.
- O motor de estados, dados públicos, plugins curatoriais e testes permanecem no repositório.
- Sitejet pode ser usado para montagem visual, prototipagem responsiva e comparação de experiência, nunca para substituir lógica ou genealogia.
- A integração cPanel/Sitejet deve usar UAPI com token cPanel armazenado como secret; nunca colocar token no código ou logs.
- APIs Sitejet relevantes: `create_sitejet_account`, `create_sitejet_website`, `get_sitejet_sso_link`, `start_publish_sitejet`.

## Mistral Vibe Code
Usar subagentes para leitura de corpus, integridade curatorial, acessibilidade/runtime, fronteira pública e integração Sitejet/PTServidor. Nenhum subagente pode inventar requisitos. Toda proposta deve apontar para fonte concreta no repositório ou no execution pack.

## Alterações permitidas nesta fase
Somente `deploy/atlas-public/**` e `tests/**` para construção controlada. Não apagar ficheiros canónicos. Não alterar Drive. Não tocar em produção. Não criar PR.

## Gate de conclusão
Uma alteração só pode ser commitada nesta branch se:
- passa sintaxe/testes determinísticos;
- preserva a dramaturgia e dispositivos autorais;
- não contém referências proibidas à camada não pública;
- mantém acessibilidade por teclado/reduced-motion/fallback textual;
- cada mudança possui razão rastreável a fonte;
- revisão Mistral multiagente não identifica regressão comprovada.
