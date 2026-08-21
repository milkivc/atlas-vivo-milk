# Atlas Vivo MILK — integrações em qualificação

Este repositório contém um protótipo de clientes de integração. **Não é uma versão de produção** e não constitui prova de integração activa, conformidade legal, elegibilidade para financiamento ou publicação científica.

## Estado verificável

- Código presente: clientes JavaScript para Zenodo, ORCID e GitHub/Codeberg.
- Estado operacional: **não verificado de ponta a ponta**.
- Publicação externa automática: **bloqueada nos workflows deste repositório**.
- Fonte canónica prevista: Codeberg/Forgejo; este espelho GitHub não deve ser tratado como fonte soberana.
- Dados e documentos do Drive: não podem ser publicados por este repositório sem leitura integral, qualificação, reescrita derivada, validação humana e manifesto SHA-256.

## Regra de publicação

Uma publicação só pode avançar quando existir, para cada objecto:

1. origem e autoria registadas;
2. camada definida: pública, invisível, propriedade intelectual ou código;
3. revisão de dados pessoais e direitos de terceiros;
4. versão derivada qualificada;
5. aprovação humana identificada;
6. manifesto público e SHA-256 correspondentes.

Os workflows apenas validam um pacote já aprovado. Não criam depósitos, não publicam DOI, não escrevem em ORCID e não fazem `push` automático.

## Desenvolvimento local

```bash
npm ci
npm test
npm run audit:dependencies
```

Os testes de cada fornecedor devem utilizar ambientes de teste e credenciais de menor privilégio. Nunca colocar tokens em código, ficheiros públicos, URLs ou logs.

## Licenciamento

O licenciamento integral do conteúdo e do código ainda requer validação por camada e por objecto. Até essa decisão, o pacote permanece `UNLICENSED`; nenhuma licença aberta genérica deve ser inferida.
