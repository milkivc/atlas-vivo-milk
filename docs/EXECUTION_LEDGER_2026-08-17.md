# Atlas Vivo MILK — Execution Ledger / Memória Operacional

Data: 2026-08-17
Estado: CANÓNICO PARA CONTINUIDADE OPERACIONAL

## Erros corrigidos nesta retomada

1. Tratei ausência de secret no runner como se fosse indisponibilidade do PTServidor.
   - Correcção: distinguir `credencial não disponível ao executor` de `serviço indisponível`.
   - Prova actual: cPanel activo; utilizador `associ16`; home `/home/associ16`; IP `185.32.188.27`; `atlas.associacaomilk.pt` reconhecido; FTP confirmado pelo suporte em porta 21.

2. Insisti excessivamente em SSH/Replit quando existiam rotas alternativas autorizadas.
   - Correcção: ordem obrigatória de tentativa: conector directo → workflow existente → FTP/FTPS → WebDAV/Nextcloud → UAPI/cPanel → suporte técnico; Replit excluído.

3. Confundi limitação da ferramenta ChatGPT/GitHub com bloqueio da infraestrutura da MILK.
   - Correcção: nunca declarar infra bloqueada por falha de um conector. Testar todas as rotas autorizadas antes.

4. Pedi/reprocurei credenciais que já tinham sido tratadas anteriormente.
   - Correcção: antes de pedir acção humana, pesquisar Gmail, Drive, branches, workflows, secrets/referências e documentação canónica.

5. Não reli suficientemente os emails recentes antes de diagnosticar o transporte.
   - Correcção: qualquer decisão sobre PTServidor deve começar pela leitura dos tickets mais recentes.

6. Trabalhei sobre subconjuntos de curadorias quando o corpus já tinha conjuntos mais amplos recuperados.
   - Correcção: a execução curatorial deve partir do inventário integral recuperado e manter itens ausentes como `PENDENTE`, nunca completar por plausibilidade.

7. Deixei IA MILK implícita em algumas acções.
   - Correcção: IA MILK é transversal e obrigatória em migração, saneamento, engenharia, curadoria, proveniência, preservação, interoperabilidade e validação. Mistral executa; IA MILK conserva memória/estado/proveniência; humano valida.

8. Produzi preparação quando o utilizador pediu execução.
   - Correcção: usar sempre a máquina de estados `PEDIDO → PREPARADO → EXECUTADO → TESTADO → VALIDADO → VERIFICADO` e declarar o estado exacto.

## Regras anti-repetição obrigatórias

- Nunca chamar preparação de migração.
- Nunca chamar workflow/pacote de escrita remota sem recibo do destino.
- Nunca declarar PTServidor indisponível só porque um runner não possui secret.
- Nunca voltar a Replit.
- Nunca pedir token/chave/password já tratada sem pesquisar primeiro todas as fontes autorizadas.
- Nunca expor segredos, códigos de recuperação ou passwords em chat, commit, log ou documentação.
- Nunca alterar/apagar/mover originais do Drive; a excepção documental autorizada é o `ATLAS_CONTROLO_VIVO` para continuidade.
- Nunca tocar em `associacaomilk.pt` durante a construção do Atlas.
- Nunca publicar automaticamente conteúdo, DOI, Zenodo, IGAC ou camada invisível.
- Nunca confundir COSMICOXES com Cosmic Flow.
- Nunca inventar curadorias, dinâmicas, necessidades territoriais, coordenadas ou resultados.
- Sempre procurar rota alternativa antes de declarar bloqueio.
- Sempre trabalhar frentes independentes em paralelo quando uma rota aguarda dependência externa.
- Sempre produzir recibo: sistema, operação, data, executor, commit/run/request ID, hashes, resultado, teste, verificação, bloqueio real e próxima acção.

## Estado PTServidor confirmado

- Área de cliente activa e cPanel funcional.
- Current User: `associ16`; Home Directory: `/home/associ16`; Shared IP: `185.32.188.27`; SSL activo.
- `atlas.associacaomilk.pt` visível no cPanel.
- Ticket #882572: conta FTP dedicada Atlas criada pelo suporte.
- Pasta privada: `atlas_milk_private/migration`.
- Host: `associacaomilk.pt`; porta: `21`; utilizador técnico dedicado confirmado.
- A palavra-passe foi entregue pelo suporte através de cofre/paste seguro; o valor não é registado neste ledger.
- Executor Mistral v2: run `32049909991`, job `95446531586`.
- Resultado: `BLOCKED_BY_TOOL_CAPABILITY` apenas na leitura automatizada do cofre seguro; `target_private_writes=0`, `source_drive_writes=0`, canário não escrito.
- Artifact receipt: `9294303643`, digest `sha256:f5e0f70f3d35e664cd8a2c0d819560a80e4c1da1580d59a47a73dc8bc4a2c6a6`.
- Estado operacional da migração: `ROTA_EM_CORRECCAO`. A infraestrutura e a conta existem; a migração ainda não foi iniciada porque não há primeiro write remoto verificado.

## Web App + IA MILK — execução verificada

Action ID: `WEBAPP_IA_MILK_CORE_20260817_1734Z`

- Fonte de geração Mistral: artifact `9294283474`, digest `sha256:a6c88dab695986d03e8edc5f412a6d82f6d56e3ad0357e6919f9c18a0e4be6f0`.
- Reparação determinística auditada: `ops/repair_verified_webapp_ia_milk.py` + `ops/repair_webapp_compile_v2.py`.
- Workflow de verificação: `materialize-tested-core-v3.yml`.
- Run: `32050873870`; job: `95449666176`; conclusão: `SUCCESS`.
- IA MILK: `5 passed`; inclui chunking determinístico, bloqueio de segredos, retrieval com citações/proveniência, invariantes COSMICOXES/Cosmic Flow + Nuno + camada invisível e router read-only.
- Web App: `3 passed`; TypeScript `tsc --noEmit` passou; Vite build passou.
- Dependency audit de dependências de produção executada e concluída no workflow.
- Safety guard passou: nenhuma chave privada/API key hardcoded detectada; placeholder de privacidade removido do corpo materializado.
- Commit verificado na branch de segurança: `f39869712a23bcd34950763b55b6b200a3f83198` — `Verify Atlas Web App and IA MILK RAG core`.
- `master`: não alterado por esta execução.
- Drive writes: `0` nesta acção.
- Production writes: `0` nesta acção.
- Estado Web App/IA MILK desta base: `TESTADO`.
- Não declarar fine-tuning concluído: foi implementado e testado o núcleo RAG/avaliação/memória/router; treino/fine-tuning posterior depende do corpus explícito, direitos/RGPD e avaliação comparativa.

## Regra de escalonamento de problemas

Um problema só recebe estado `BLOQUEIO_HUMANO` depois de:
1. tentar a rota primária;
2. procurar artefactos/credenciais autorizados existentes;
3. tentar rota alternativa compatível;
4. verificar documentação/email mais recente;
5. continuar frentes independentes em paralelo;
6. produzir evidência técnica da impossibilidade restante.

Até lá, o estado é `ROTA_EM_CORRECCAO`, não `BLOQUEADO`.
