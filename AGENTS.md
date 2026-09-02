# Atlas Vivo MILK — instruções para Vibe Code

Este repositório contém a camada pública e integrações técnicas do Atlas Vivo MILK.

## Regras absolutas
- Trabalhar em PT-PT quando produzir texto de interface ou documentação destinada à MILK.
- Preservar integralmente a autoria e a densidade curatorial; não simplificar, comercializar nem neutralizar o texto MILK.
- Não misturar camada pública com Camada Invisível, investigação privada, credenciais, dados pessoais ou motores confidenciais.
- Nunca tocar em `associacaomilk.pt`; qualquer publicação web deste projecto tem como alvo exclusivo `atlas.associacaomilk.pt`.
- Não apagar, mover ou substituir dados de origem do Drive/Nextcloud durante tarefas de saneamento ou migração.
- Segredos nunca entram em ficheiros, prompts, logs, diffs ou comentários.
- Qualquer deploy deve ser preservativo: validar pacote, criar backup, promover apenas ficheiros do Atlas, fazer readback/hash e smoke test; em falha, rollback.
- Não declarar publicação, migração ou validação concluída sem evidência determinística.

## Web App pública
Prioridades de engenharia:
1. experiência viva e não meramente explicativa;
2. mínimo de cliques;
3. dispositivos curatoriais como experiências sensoriais/lúdicas, não como catálogo comercial;
4. desempenho, acessibilidade WCAG 2.2 AA e comportamento responsivo;
5. separação clara entre dados públicos, lógica de interface e integrações privadas;
6. HTML/JS/CSS auditáveis e progressivamente modularizáveis sem regressão visual;
7. manter compatibilidade com `deploy/atlas-public/manifest.sha256` e validações existentes.

## Método de trabalho do agente
- Primeiro ler e mapear antes de editar.
- Identificar dependências e invariantes antes de propor refactor.
- Preferir mudanças pequenas, reversíveis e testáveis.
- Em auditorias, distinguir: facto observado, risco, proposta e teste de aceitação.
- Em implementação, não inventar conteúdo curatorial ausente.
- Quando houver dúvida sobre intenção curatorial, preservar o estado actual e marcar para validação humana.
