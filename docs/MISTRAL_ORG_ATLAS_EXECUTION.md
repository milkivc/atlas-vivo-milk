# Mistral Organization — modelo operacional para Atlas Vivo MILK

Estado: desenho executável de governação; não implica que recursos administrativos já tenham sido criados na conta.

## Objectivo
Usar a Organização Mistral para governar a cadeia de desenvolvimento da WebApp Atlas Vivo MILK sem misturar corpus, desenvolvimento, staging e produção.

## Workspaces recomendados
1. `ATLAS-CORPUS` — leitura do corpus operacional sincronizado do Nextcloud; conectores e dados curatoriais; sem deploy.
2. `ATLAS-DEV` — Mistral Agents, Vibe Code, testes e branches de desenvolvimento.
3. `ATLAS-STAGING` — validação de pacote, browser/runtime, acessibilidade, hashes e ensaios PTServidor.
4. `ATLAS-PROD` — apenas release aprovado para `atlas.associacaomilk.pt`; princípio de menor privilégio.

## Identidades
- Pessoa administradora: conta humana da Associação MILK.
- Workflows: preferir service account própria quando disponível no plano/Workspace.
- Chaves: uma chave por Workspace/ambiente; nunca reutilizar chave de produção em desenvolvimento.
- Automação: connector scope `Shared connectors only` por defeito; elevar apenas quando estritamente necessário.

## Agentes Vibe Code do projecto
- `atlas-orchestrator` — agente principal de execução.
- `nextcloud-corpus-reader` — subagente read-only do corpus previamente obtido do Nextcloud.
- `curatorial-hermeneut` — subagente de fidelidade autoral.
- `ludic-systems-decoder` — subagente de jogos/brincadeiras/convites/acaso.
- `copernico-integrity` — auditor do globo COPÉRNICO e dados territoriais.
- `runtime-accessibility-reviewer` — runtime, acessibilidade e recursos.
- `ptservidor-release-guardian` — fronteira pública, hashes, backup e release.

Todos carregam `AGENTS.md` como memória operacional de não regressão.

## Nextcloud
Neste ciclo, o corpus entra pelo Nextcloud. A ingestão deve acontecer antes da chamada ao Vibe Code, colocando apenas as fontes necessárias numa área temporária de trabalho. O agente `nextcloud-corpus-reader` lê essa área em modo read-only. Não usar Google Drive como fallback automático.

## PTServidor
A produção continua no PTServidor. `ATLAS-PROD` não é repositório de corpus: recebe apenas o pacote PUBLIC-ONLY validado. A conta FTP dedicada do Atlas permanece separada do armazenamento privado.

## Organização e Administração Mistral
- Guardar o Organization ID para automação futura.
- Separar Workspaces e chaves por ambiente.
- Usar RBAC e service accounts para workflows quando disponíveis.
- Verificar o domínio institucional antes de activar autenticação por domínio ou SSO.
- SAML SSO e Admin API dependem do plano aplicável; não assumir disponibilidade sem probe/estado da conta.
- A Admin API é tratada como capacidade administrativa separada do Mistral API usado pelos agentes de desenvolvimento.

## Regra de promoção
`Nextcloud -> decodificação multiagente -> Vibe Code -> gates determinísticos -> revisão multiagente -> staging -> PTServidor`.
Nenhum Workspace altera esta ordem.
