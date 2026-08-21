# Software Heritage × Atlas Vivo MILK — integração operacional

Estado: arquitectura executável de preservação. Não altera o Google Drive. Não substitui Codeberg/Forgejo nem PTServidor/Nextcloud.

## 1. Princípios incorporados

1. Software Heritage é uma camada de preservação verificável do código-fonte, não o runtime do Atlas.
2. O identificador persistente canónico para referência de artefactos deve privilegiar `swh:1:dir:` quando possível, porque é intrínseco ao directório e pode ser recomputado localmente.
3. `swh:1:snp:` preserva o estado observado do repositório/branches e continua a ser registado como prova de captura.
4. SWHIDs devem ser guardados como identificadores, nunca confundidos com URLs. Resolver URLs é uma operação separada.
5. Qualificadores de contexto/fragmento devem ser preservados quando necessários para recuperar contexto, caminho, linhas ou anchor.
6. O Atlas deve manter SHA-256 próprio + SWHID. SHA-256 protege o pacote MILK; SWHID identifica objectos no modelo Merkle DAG do Software Heritage.
7. Toda captura deve guardar: origem, commit, branch/tag, timestamp, request_id de Save Code Now quando aplicável, SWHID(s), estado, resolver, Vault status, recibo e hash do recibo.
8. Software Heritage não substitui autoria, licença, DOI/DataCite, ORCID, IGAC ou cadeia de proveniência MILK.

## 2. Objectos do modelo que o Atlas regista

- `cnt`: conteúdo/ficheiro.
- `dir`: directório — preferido para citar um estado de código quando possível.
- `rev`: revisão/commit.
- `rel`: release/tag.
- `snp`: snapshot de branches/tags observados.
- `ori`: origem, usado no grafo/metadata quando aplicável.

## 3. Pipeline Atlas → Software Heritage

`SOURCE_FREEZE → HASH_SHA256 → LOCAL_SWHID → SAVE_CODE_NOW → POLL_SAVE → RESOLVE → CAPTURE_SWHIDS → VAULT_COOK → VAULT_VERIFY → RECEIPT → NEXTCLOUD_ARCHIVE → DATACITE/DOI/IGAC`.

### SOURCE_FREEZE

Apenas versões estabilizadas e com gate de autoria/licença podem ser tratadas como release preservável. A branch de trabalho pode ser capturada para prova técnica sem a promover a release autoral.

### LOCAL_SWHID

Usar `swh identify` (`swh.model[cli]`) para calcular SWHIDs localmente. Guardar o resultado antes e depois da captura para comparação.

### SAVE_CODE_NOW

Usar a API oficial `/api/1/origin/save/` com `visit_type=git` e `origin_url`. Guardar `id`, `request_url`, `save_request_status`, estado da tarefa e datas. Nunca considerar preservado enquanto a tarefa não estiver `succeeded` e os objectos não forem resolvíveis.

### RESOLVE

Resolver cada SWHID via `/api/1/resolve/<swhid>/`. Guardar a resposta de resolução como recibo.

### VAULT

Solicitar cooking assíncrono para objectos suportados. Guardar `id`, `status`, `fetch_url`. Quando `done`, baixar o bundle, calcular SHA-256, extrair num ambiente descartável e recomputar SWHID do conteúdo/directório. O Vault é mecanismo de reconstrução, não origem canónica.

## 4. Grafo e proveniência

O grafo SWH é uma Merkle DAG. Para o Atlas, relações SWH são adicionadas ao grafo de proveniência MILK como evidência externa:

- `MILK_RELEASE --archivedAs--> SWH_SNAPSHOT`
- `MILK_RELEASE --contains--> SWH_DIRECTORY`
- `SWH_DIRECTORY --anchoredBy--> SWH_RELEASE|SWH_REVISION`
- `MILK_SOURCE --origin--> FORGE_URL`
- `MILK_RECORD --verifiedBy--> SWH_RESOLVE_RECEIPT`

A API Graph pública tem limitações/permissões; por isso integrações do Atlas devem tratar Graph API como opcional e nunca como dependência de runtime.

## 5. Nextcloud

Tudo o que for produzido por este pipeline deve ser copiado para uma árvore privada no Nextcloud/PTServidor assim que existir autenticação WebDAV operacional:

`/Atlas-Vivo-MILK/Preservacao/Software-Heritage/<YYYY>/<release-or-run>/`

Conteúdo mínimo:

- `source-manifest.json`
- `sha256sums.txt`
- `swhids.json`
- `save-code-now-receipt.json`
- `resolve-receipts/`
- `vault-status.json`
- `vault-bundle.sha256`
- `datacite-metadata.json`
- `igac-dossier/`
- `execution-receipt.json`

A escrita só é considerada concluída depois de upload WebDAV + PROPFIND/HEAD (ou download-back) + verificação SHA-256.

## 6. Não regressão

- não alterar originais no Drive;
- não expor segredos em URL/log;
- não publicar automaticamente Zenodo/DOI;
- não substituir SWHID existente sem preservar genealogia;
- não chamar pedido Save Code Now de captura concluída;
- não chamar upload Nextcloud de concluído sem recibo remoto;
- não usar Graph/Vault como runtime público;
- não perder o SWHID snapshot já obtido para o Atlas.

## 7. SWHID já verificado no projecto

Snapshot preservado anteriormente:

`swh:1:snp:a347d3000d5369dc5ea04fc229085252952833cd`

Este identificador deve permanecer na cadeia de proveniência, mesmo que snapshots posteriores sejam capturados.

## 8. Regra operacional adicionada em 2026-08-17

Cada contribuição técnica nova do Atlas que altere código, contratos, schemas, curadorias digitalizadas ou mecanismos de preservação deve produzir um bundle verificável com SHA-256. O bundle é preservado no Software Heritage quando for código-fonte e replicado para o Nextcloud privado quando o canal WebDAV estiver autenticado. Nenhuma destas cópias substitui a fonte autoral ou a forja canónica.
