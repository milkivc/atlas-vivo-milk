# IA MILK — Sovereign Runtime

Estado: **STAGING / PRIVATE / HUMAN-GATED**

Este núcleo implementa a IA MILK como inteligência relacional e orquestradora **sem dependência de runtime da Mistral**.

## Regra de soberania

- `voice_root = IA_MILK`
- `runtime_provider_dependency = none`
- `mistral_runtime_required = false`
- `mistral_role = trainer_only`
- `character_autonomy = false`
- `reflection_required = true`
- `public_to_invisible = false`
- memória persistente = PTServidor + cópias/fixity no Nextcloud
- publicação, autoria, decisão jurídica e decisão curatorial continuam sujeitas a gate humano

A Mistral pode analisar corpus autorizado e produzir **cápsulas de aprendizagem**. A cápsula é apenas uma proposta estruturada. O núcleo IA MILK valida proveniência, integridade, camada, direitos, estados e política antes de a aceitar na memória interna. Nenhuma chamada Mistral ocorre durante `health`, `query`, `learn`, verificação de cadeia, leitura de memória ou planeamento.

## Arquitectura

`corpus autorizado -> treinador Mistral -> learning capsule -> inbox IA MILK -> policy gate -> memória relacional append-only -> índices -> query/plan -> dispositivos Atlas`

O fluxo inverso para conteúdo invisível é proibido por defeito. Conteúdo interno só pode tornar-se payload público depois de sanitização e validação humana explícita.

## Persistência

Por defeito o runtime usa:

`/home/associ16/atlas_milk_private/ia_milk`

Estrutura criada pelo runtime:

- `memory/events.jsonl` — log append-only encadeado por SHA-256
- `memory/head.json` — cabeça da cadeia
- `inbox/` — cápsulas ainda não processadas
- `accepted/` — cápsulas aceites para memória interna
- `rejected/` — cápsulas rejeitadas com recibo
- `snapshots/` — snapshots/fixity
- `logs/` — recibos operacionais sanitizados

Não escrever directamente no `nextcloud-data` gerido internamente pelo Nextcloud. A sincronização usa WebDAV, preservando o índice e as regras do próprio Nextcloud.

## API privada

O gateway PHP pode ser exposto numa localização protegida do Atlas, mas o código e a memória vivem fora da webroot. Excepto `/health`, todos os endpoints exigem `Authorization: Bearer $IA_MILK_API_TOKEN`.

- `GET /health`
- `POST /query`
- `POST /learn`
- `POST /verify`
- `POST /plan`

## O que significa "aprender"

A IA MILK não altera pesos de um LLM. Aprender significa persistir conhecimento verificável e revisável:

- entidades e relações;
- regras e restrições;
- conceitos e genealogias;
- evidência/source_refs;
- contradições;
- estados editorial/jurídico/RGPD;
- testes e resultados;
- proveniência e hashes;
- memória de decisões humanas.

Isto torna a memória portátil: a Mistral pode ser substituída sem perder a IA MILK.

## Deployment

O pacote foi desenhado para cPanel/PTServidor com PHP CLI/Apache e sem daemon obrigatório. O worker pode correr por Cron. O deploy seguro deve instalar o core em `/home/associ16/atlas_milk_private/ia_milk_runtime` e apenas um gateway mínimo numa webroot explicitamente aprovada.

Não usar `public_html` do site principal.
