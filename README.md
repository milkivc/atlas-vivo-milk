# Atlas Vivo MILK

Plataforma Web para preservacao e mapeamento do patrimonio imaterial portugues.

## Objetivo
- Coletar lendas, travas-linguas, adivinhas e rituais de Portugal.
- Mapear geograficamente o folclore.
- Publicar dados em formato aberto (Zenodo, GitHub).

## Estrutura do Projeto

atlas-vivo-milk/
├── assets/
│   ├── public/          # Arquivos publicos (imagens, audio, esculturas)
│   └── private/         # Arquivos restritos (requerem controle de acesso)
├── manifests/           # Metadados JSON (DataCite 4.5, Dublin Core)
├── src/
│   ├── backend/         # Google Apps Script, integracao com APIs
│   └── frontend/        # HTML5, CSS3, JavaScript, Leaflet.js, WebXR
├── docs/
│   ├── legal/           # Politicas de privacidade, termos de uso, conformidade
│   └── technical/       # Documentacao tecnica, especificacoes de API
├── CITATION.cff
├── LICENSE              # EUPL-1.2 para codigo
└── README.md

## Licenca
- Codigo: EUPL-1.2 (European Union Public Licence v1.2)
- Dados culturais: CC-BY-SA 4.0
- Dados publicos: CC0 1.0

## Conformidade
- RGPD (Regulamento Geral sobre a Protecao de Dados)
- AI Act (Regulamento de IA da UE)
- Principios CARE (Beneficio Coletivo, Autoridade para Controlar, Responsabilidade, Etica)
- Soberania tecnologica da UE

## Como Contribuir
1. Fork este repositorio.
2. Crie uma branch (git checkout -b feature/nova-funcionalidade).
3. Commit suas mudancas (git commit -m "Adiciona nova funcionalidade").
4. Push e abra um Pull Request.

## Integracao
- GitHub: Controle de versao e repositorio de codigo
- Zenodo: Preservacao de datasets e geracao de DOI
- ORCID: Vinculacao de contribuidores a publicacoes

## Contato
Associacao MILK - Movimento de Intervencoes e Linguagens Kulturais e Arte
Email: milk@associacaomilk.pt
