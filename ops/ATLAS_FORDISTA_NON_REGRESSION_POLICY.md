# ATLAS VIVO MILK — TRAVAS DE FOCO, CREDENCIAIS E NÃO REGRESSÃO

Status: obrigatório para toda execução automatizada.

## Foco imutável deste ciclo
WebApp Atlas Vivo MILK em PTServidor, alimentada pelo corpus no Nextcloud e construída/revista pelos agentes Mistral + Mistral Code/Vibe Code.

## Linha fordista de produção
Cada curadoria percorre SEM SALTAR esta linha:

1. NEXTCLOUD_INGEST — recuperar fonte integral e checksum.
2. SOURCE_INTEGRITY — confirmar ficheiro, versão, direitos, estado público/restrito e proveniência.
3. MISTRAL_DOCUMENT_INTELLIGENCE — OCR/document understanding/library apenas se necessário.
4. MISTRAL_HERMENEUT — extrair invariantes autorais, ambiguidades e limites.
5. MISTRAL_LUDIC_SENSORY_DECODERS — mecânica, gesto, ritmo, acaso, som, silêncio, espaço, materialidade, físico/digital.
6. EXPERIENCE_CONTRACT — gerar JSON conforme `specs/curatorial-experience-contract.schema.json`.
7. HUMAN_SOURCE_GATE — falha fechada se a fonte não sustenta a mecânica ou se direitos/publicação não estão claros.
8. VIBE_CODE_BUILD — materializar runtime específico da curadoria.
9. DETERMINISTIC_TESTS — sintaxe, estados, assets, acessibilidade, privacidade, fronteira PUBLIC-ONLY, performance.
10. MISTRAL_COUNCIL — fidelidade autoral + runtime/acessibilidade + boundary + COPÉRNICO/território quando aplicável.
11. INTERNAL_STAGE — empacotar com SHA-256 e enviar para staging privado PTServidor; readback obrigatório.
12. SITEJET_CPANEL_TEST — composição/teste interno no construtor PTServidor quando token cPanel estiver validado.
13. EXPERIENCE_ACCEPTANCE — só conta como concluída quando há experiência funcional, não texto/card/modal genérico.
14. RELEASE_CANDIDATE — pacote PUBLIC-ONLY isolado.
15. PRODUCTION_PROMOTION — etapa separada, somente após gates completos.

## Travas absolutas
- `AGENTS.md` deve existir e conter o checkpoint actual.
- `ops/critical-credentials-registry.yml` deve existir.
- Nenhum workflow crítico pode iniciar uma etapa dependente sem verificar presença da credencial necessária.
- Nenhum workflow pode apagar, rodar ou substituir automaticamente credenciais.
- Nenhum valor secreto pode aparecer em logs, ficheiros, artefactos ou commits.
- Credencial recebida por email deve permanecer recuperável pelo rótulo Gmail `MILK/CREDENCIAIS/PTSERVIDOR-NEXTCLOUD`.
- Nextcloud é a fonte operacional deste ciclo. Google Drive não é fallback automático.
- COPÉRNICO existente é a base do globo; não criar substituto.
- Curadoria sem contrato de experiência válido não entra na fila de código.
- Curadoria com fallback genérico não pode ser marcada como concluída.
- Meta de conclusão: 49/49 runtimes específicos com `generic_fallback_allowed=false`.
- Material `NÃO PUBLICAR`, Camada Invisível, credenciais e dados sensíveis nunca entram no pacote público.
- Produção pública é sempre etapa posterior ao staging interno.
- `git push --mirror --force`, `git push --force` para branches canónicas e rotinas destrutivas são proibidos.
- Nenhuma falha de uma estação bloqueia as outras estações independentes: a linha deve continuar onde houver matéria e credenciais válidas.

## Estado real que não pode regredir
- Branch: `work/copernico-recovery-webapp-20260902`.
- COPÉRNICO materializado na WebApp e territorial gateado.
- `falARTE` tem candidato com backend privado em commit histórico `6f9728b37b066d359bbfac181dcc9401ef5fd79c`.
- Existe schema obrigatório de experiência em `specs/curatorial-experience-contract.schema.json`.
- Equipa `.vibe/agents/` especializada criada.
- Mistral API autenticada; 50 modelos visíveis; Codestral e Voxtral detectados.
- PTServidor confirma cPanel API + Softaculous API; cPanel exige API token.
- Conta `migration@associacaomilk.pt` autentica FTPS para staging privado.
- Conta dedicada `atlas@associacaomilk.pt` foi resetada pela PTServidor em 2026-09-02; a nova credencial ainda não foi injectada no secret actual do workflow.
- Nextcloud existente está em `https://associacaomilk.pt/nextcloud`; WebDAV actual devolve 401.
- PTServidor foi instruída a fazer reset `occ` do utilizador Nextcloud `admin` e entregar nova credencial por canal seguro.

## Critério de verdade
`FEITO` só significa que a etapa tem evidência: commit, hash, log PASS, readback, resposta API ou teste público correspondente.
