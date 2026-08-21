# Atlas Vivo MILK - Web App

## Descrição
Aplicação web para interação com o **Atlas Vivo MILK**, focada na conversão de pesquisa em arquitetura computacional rastreável.
**Princípios:**
- **Read-only** sobre o Google Drive de origem.
- **Provenência** obrigatória em todos os dados.
- **RGPD** e **WCAG 2.2 AA** em conformidade.
- **COSMICOXES != Cosmic Flow** (invariante crítica).
- **Camada invisível** nunca exposta publicamente.
- **Gate Nuno >=13**: Consentimento explícito, anonimato/pseudónimo/nome, revisão humana.
- **Nextcloud** é privado e não pode ser gargalo do runtime público.

---

## Estrutura do Projeto
```
webapp/
├── src/
│   ├── api.ts              # Cliente API (read-only, proveniência, autenticação)
│   ├── fixtures.ts         # Dados de exemplo (NOT_VERIFIED)
│   ├── types.ts            # Interfaces TypeScript (a criar)
│   ├── components/
│   │   ├── GaleriaDiletante.tsx   # Galeria para COSMICOXES/Cosmic Flow/Catasterismo
│   │   ├── CronicasFuco.tsx       # Crónicas para SEER/SEER Possível/PERCEPTIO
│   │   └── MilkTerritorial.tsx    # Dados territoriais (OlHaPIN/TerritorialData)
│   └── invariants.test.ts  # Testes de invariantes (COSMICOXES != Cosmic Flow, gate Nuno, etc.)
├── README.md               # Este ficheiro
```

---

## Requisitos
- Node.js >=18
- Yarn ou npm
- Variáveis de ambiente:
  - `REACT_APP_API_BASE_URL`: URL base da API (ex: `https://api.atlasvivomilk.pt/secure`)

---

## Instalação
```bash
cd webapp
yarn install
```

---
## Execução (Desenvolvimento)
```bash
yarn start
```
A aplicação estará disponível em `http://localhost:3000`.

---
## Testes
```bash
yarn test
```
- Valida **COSMICOXES != Cosmic Flow**.
- Valida **gate Nuno >=13** (consentimento).
- Valida que **nenhum campo invisível** é exposto.

---
## Notas
1. **Fixtures**: Todos os dados em `fixtures.ts` estão marcados como `PENDENTE/NOT_VERIFIED`. Nunca usar em produção sem validação humana.
2. **Autenticação**: Usar fluxo externo (ex: Nextcloud OAuth2) para gerar tokens. Nunca armazenar credenciais.
3. **Dados Territoriais**: Nunca inventar conteúdo territorial. Usar apenas dados verificados.
4. **Invariantes**: Os testes em `invariants.test.ts` devem ser executados antes de qualquer deployment.
5. **Acessibilidade**: Todos os componentes seguem **WCAG 2.2 AA** (ex: `aria-live`, `role`, `aria-label`).

---
## Licença
MIT (a confirmar com a equipa legal).

---
## Contato
- **Proveniência**: Todos os dados devem ter origem rastreável.
- **Dúvidas**: Abrir issue no repositório ou contactar a equipa do Atlas Vivo MILK.