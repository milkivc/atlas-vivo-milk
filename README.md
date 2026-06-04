# Atlas Vivo MILK 🇵🇹

Plataforma Web para preservação e mapeamento do património imaterial português.

## 📌 Objetivo
- Coletar lendas, travas-línguas, adivinhas e rituais de Portugal.
- Mapear geograficamente o folclore.
- Publicar dados em formato aberto (Zenodo, GitHub).

## 🛠️ Estrutura
```
atlas-vivo-milk/
├── public/               # Arquivos estáticos (HTML, CSS, JS)
├── src/                  # Código-fonte (React/Vue/JS)
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas da Web App
│   ├── services/         # Integração com APIs
│   └── App.js
├── data/                 # Dados públicos
│   ├── raw/              # Dados brutos (CSV, JSON)
│   └── processed/        # Dados processados (JSON-LD)
├── docs/                 # Documentação
│   ├── LICENSE
│   ├── CITATION.cff
│   └── legal/
│       ├── PRIVACY_POLICY.md
│       └── TERMS_OF_USE.md
└── .github/
    └── workflows/
        └── zenodo.yml
```

## 📜 Licença
- **Código:** [MIT License](LICENSE)
- **Dados:** CC-BY-SA 4.0

## 🚀 Como Contribuir
1. Fork este repositório.
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -m "Adiciona nova funcionalidade"`).
4. Push e abra um Pull Request.