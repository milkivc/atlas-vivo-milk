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
   - Correcção: qualquer decisão sobre PTServidor deve começar pela leitura dos tickets mais recentes. O ticket 882572 confirmou FTP Accounts, host `associacaomilk.pt`, porta 21.

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

- Área de cliente activa.
- cPanel funcional.
- Current User: `associ16`.
- Home Directory: `/home/associ16`.
- Shared IP: `185.32.188.27`.
- SSL activo.
- `atlas.associacaomilk.pt` visível no cPanel.
- Suporte: conta FTP adicional em `FTP > FTP Accounts`.
- Host FTP confirmado: `associacaomilk.pt`.
- Porta FTP confirmada: `21`.
- SFTP adicional não suportado; SFTP/SSH principal tem restrições próprias.

## Regra de escalonamento de problemas

Um problema só recebe estado `BLOQUEIO_HUMANO` depois de:
1. tentar a rota primária;
2. procurar artefactos/credenciais autorizados existentes;
3. tentar rota alternativa compatível;
4. verificar documentação/email mais recente;
5. continuar frentes independentes em paralelo;
6. produzir evidência técnica da impossibilidade restante.

Até lá, o estado é `ROTA_EM_CORRECCAO`, não `BLOQUEADO`.
