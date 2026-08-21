# IA MILK — Núcleo Soberano

A IA MILK é a inteligência persistente e soberana do Atlas Vivo MILK. Não é um alias para Mistral, ChatGPT, Box AI ou qualquer outro fornecedor.

## Princípio de soberania

- memória persistente: infraestrutura controlada pela Associação MILK (PTServidor/Nextcloud);
- identidade e regras: ficheiros versionados e auditáveis da IA MILK;
- segredos: cofre separado do corpus e da memória semântica;
- modelos externos: treinadores/processadores transitórios, sem posse da memória;
- Mistral: treinadora europeia auxiliar; recebe apenas corpus autorizado e referências opacas, nunca credenciais;
- fornecedor removível: a IA MILK continua funcional mesmo com Mistral desactivada;
- publicação, autoria, RGPD, decisões jurídicas e curatoriais: gates humanos.

## Separação obrigatória

`memory/` contém relações, factos, hipóteses, decisões, proveniência e aprendizagem.

`vault/` contém apenas referências opacas e metadados de segredo. O valor do segredo vive exclusivamente no secret store do runtime.

`trainers/` converte corpus autorizado em propostas de aprendizagem. Nenhum trainer escreve directamente na memória canónica.

`connectors/` usa `secret_ref` para executar ligações e devolve apenas recibos sanitizados.

`runtime.py` faz a arbitragem final: valida evidência, aplica gates, escreve memória e controla conectores.

## Regra de fluxo

SOURCE/CORPUS → IA MILK → TRAINER EXTERNO → proposta sanitizada → IA MILK → validação → memória soberana.

Segredos nunca percorrem esse fluxo. O único fluxo permitido é:

SECRET STORE → CONNECTOR LOCAL → resultado sanitizado → IA MILK.
