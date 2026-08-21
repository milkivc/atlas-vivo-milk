# Atlas Vivo MILK — matriz de recuperação e execução

Data: 2026-08-17
Estado: EXECUÇÃO CONTÍNUA

## Regra central

IA MILK participa transversalmente em todas as acções como memória institucional, proveniência, relação entre fontes, estados epistémicos, decisões, contradições, recibos e continuidade. Mistral executa pesquisa/engenharia/transformações autorizadas. ChatGPT coordena e audita. Google Drive permanece fonte imutável salvo actualizações deliberadas no ATLAS_CONTROLO_VIVO.

## PTServidor / Nextcloud recuperado

Factos confirmados por suporte e histórico operacional:
- cPanel já foi aberto com sucesso;
- conta autorizada e associada;
- utilizador cPanel: `associ16`;
- home: `/home/associ16`;
- 25 GB totais;
- Nextcloud permitido;
- FTP disponível em `associacaomilk.pt:21`;
- contas FTP adicionais são criadas em cPanel > FTP Accounts;
- SSH é opcional e restrito por IP, portanto não é dependência da migração.

Arquitectura recuperada de `agent/nextcloud-cloud-architecture`:
- dados pessoais, exports, credenciais, checkpoints e auditoria ficam fora de qualquer webroot;
- Nextcloud deve usar data directory fora da webroot;
- WebDAV: TLS obrigatório, timeouts, retries apenas seguros, path traversal bloqueado, checkpoint por objecto, tamanho+checksum para already-existing;
- Mistral recebe ferramentas restritas (`inventory.read`, `object.read`, `object.write-staging`, `checkpoint.append`, `publish.request`, `audit.read`), nunca shell irrestrito;
- migration batch só avança após reconciliação de discovered/transferred/verified/already-existing/failed/bytes.

## Atalhos históricos que NÃO devem ser executados

`agent/nextcloud-cloud-architecture/ONE_CLICK_REAL.sh` é histórico e incompatível com a governação actual porque:
- faz push automático para `master`;
- cria tags automáticas;
- pode disparar Zenodo antes dos gates de autoria/licença/versionamento;
- assume três repositórios e publicação automatizada.

Preservar como genealogia, mas nunca usar como executor actual.

## Sequência executora actual

1. Recuperar autenticação técnica existente sem expor palavra-passe principal.
2. Preferir conta FTP dedicada ou Nextcloud app-password restrito.
3. Executar canário não sensível.
4. Upload real → download-back/HEAD/PROPFIND → SHA-256.
5. Só após canário verificado: lote bounded.
6. Checkpoint append-only por objecto.
7. Reconciliar contagens/bytes/hashes.
8. Continuar resumivelmente.
9. Depois do corpus privado estabilizado, integrar Web App staging.
10. Codeberg/Forgejo apenas estado canónico estabilizado.
11. Software Heritage/CodeMeta/DataCite/ORCID/IGAC/Zenodo obedecem gates próprios; nenhum DOI inventado.

## Web App / curadorias

Todo conteúdo recuperado deve entrar em engenharia computacional e física sem reduzir a obra autoral a categorias genéricas. COSMICOXES é dispositivo canónico e não é alias de Cosmic Flow. Camada invisível permanece privada. Nuno/Escuta é porta multimodal com consentimento, idade, retirada e revisão humana. Todas as dinâmicas devem ter contrato de evento, estado, proveniência, acessibilidade, modo offline/degradado, ligação territorial real e gate humano.

## Estado de migração

Até recibo remoto: `transferred=0 proven`, `verified=0 proven`, `bytes=0 proven`. Preparação, preflight, ticket de suporte e workflows não contam como migração.
