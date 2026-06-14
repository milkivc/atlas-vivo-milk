# Atlas Vivo MILK

[![ORCID - Eduardo](https://img.shields.io/badge/ORCID-0009--0004--9132--2925-green?logo=orcid)](https://orcid.org/0009-0004-9132-2925)
[![Zenodo](https://img.shields.io/badge/Zenodo-DOI-blue?logo=zenodo)](https://doi.org/10.5281/zenodo.XXXXXXX)
[![GitHub](https://img.shields.io/badge/GitHub-milkivc%2Fatlas--vivo--milk-black?logo=github)](https://github.com/milkivc/atlas-vivo-milk)
[![License: EUPL-1.2](https://img.shields.io/badge/License-EUPL--1.2-blue.svg)](https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12)
[![RGPD Compliant](https://img.shields.io/badge/RGPD-Compliant-green)](https://gdpr-info.eu/)
[![AI Act Compliant](https://img.shields.io/badge/AI_Act-Compliant-green)](https://artificialintelligenceact.eu/)
[![NIS2 Compliant](https://img.shields.io/badge/NIS2-Compliant-green)](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)
[![CARE Principles](https://img.shields.io/badge/CARE_Principles-Compliant-purple)](https://www.gida-global.org/care)

**Plataforma Web para preservação e mapeamento do patrimônio imaterial português**

⚡ **Maximizando DOIs:** Cada release gerada a partir de tags semânticas automaticamente:
- ✅ Cria DOI único via Zenodo
- ✅ Sincroniza com ORCID (Eduardo e Associação MILK)
- ✅ Atualiza metadados com o DOI gerado
- ✅ Publica release no GitHub com link para DOI

---

## 🎯 Objetivo
- 🗺️ Coletar lendas, travas-línguas, adivinhas e rituais de Portugal
- 📍 Mapear geograficamente o folclore
- 🌍 Publicar dados em formato aberto (Zenodo, GitHub)
- 🏛️ Preservar o patrimônio imaterial português

---

## 📁 Estrutura do Projeto

```
atlas-vivo-milk/
├── CITATION.cff              # Citação padronizada (CFF)
├── metadata.json             # Metadados padronizados (JSON-LD)
├── .zenodo.json              # Metadados para Zenodo
├── CONTRIBUTORS.md           # Lista de contribuidores
├── DATA_LICENSE              # Licença dos dados
├── LICENSE                   # EUPL-1.2 para código
├── assets/
│   ├── public/               # Arquivos públicos (imagens, audio, esculturas)
│   └── private/              # Arquivos restritos (requerem controle de acesso)
├── manifests/                # Metadados JSON (DataCite 4.5, Dublin Core)
│   └── datacite.json
├── src/
│   ├── backend/              # Google Apps Script, integração com APIs
│   └── frontend/             # HTML5, CSS3, JavaScript, Leaflet.js, WebXR
├── docs/
│   ├── legal/                # Políticas de privacidade, termos de uso, conformidade
│   └── technical/            # Documentação técnica, especificações de API
└── .github/
    └── workflows/
        ├── ci.yml
        ├── release.yml
        ├── sync-zenodo.yml
        ├── validate-metadata.yml
        └── zenodo-orcid-blindado.yml
```

---

## 📜 Licença
- **Código**: EUPL-1.2 (European Union Public Licence v1.2)
- **Dados culturais**: CC-BY-SA 4.0
- **Dados públicos**: CC0 1.0

---

## 🏛️ Autores
- **Associação MILK** - Movimento de Intervenções e Linguagens Kulturais e Arte 🏛️
- **Eduardo Maurício Vieira Cabral e Araujo** - [ORCID: 0009-0004-9132-2925](https://orcid.org/0009-0004-9132-2925) 👤

---

## 🚀 Integração com Zenodo e ORCID

### Geração Automática de DOI
Cada *release* deste repositório gera automaticamente um **DOI** via:
- **[Zenodo GitHub App](https://zenodo.org/integrations/github)** - Integração nativa
- **Workflow `release.yml`** - DOI + GitHub Release
- **Workflow `zenodo-orcid-blindado.yml`** - DOI + ORCID + Conformidade UE

### Processo de Publicação
```bash
# 1. Criar tag semântica
git tag v1.0.0
git push origin v1.0.0

# 2. O GitHub Actions automaticamente:
#    - Valida metadados
#    - Cria deposit no Zenodo
#    - Gera DOI
#    - Publica no Zenodo
#    - Atualiza metadados com DOI
#    - Sincroniza com ORCID
#    - Cria GitHub Release
```

### Sincronização com ORCID
- **Eduardo**: ORCID [0009-0004-9132-2925](https://orcid.org/0009-0004-9132-2925)


---

## ✅ Conformidade
- **🔒 RGPD**: Todos os dados pessoais estão anonimizados ou com consentimento explícito
- **🤖 AI Act**: Modelos de IA utilizados são *open-source* (ex: Mistral AI)
- **🛡️ NIS2**: Logs de auditoria imutáveis para metadados críticos
- **🇪🇺 EU Tech Sovereignty**: Infraestrutura alinhada com provedores europeus (PTServidor, Forgejo)
- **💜 CARE Principles**: Benefício Coletivo, Autoridade para Controlar, Responsabilidade, Ética

---

## 🤝 Como Contribuir
1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m "Adiciona nova funcionalidade"`)
4. Push e abra um Pull Request

---

## 📧 Contato
**Associação MILK** - Movimento de Intervenções e Linguagens Kulturais e Arte
- 📧 Email: milk@associacaomilk.pt
- 🌍 Website: [associacaomilk.pt](https://associacaomilk.pt)

---

## 🔗 Links Úteis
- [📦 Dados Territoriais](https://github.com/milkivc/atlas-datasets) - Repositório de dados geoespaciais
- [📚 Documentação](https://github.com/milkivc/atlas-docs) - Documentação técnica e legal
- [📦 Zenodo Community MILK](https://zenodo.org/communities/milk/) - Comunidade Zenodo
- [👤 ORCID Eduardo](https://orcid.org/0009-0004-9132-2925) - Perfil ORCID


---

## 📊 Estatísticas
- **DOIs Gerados**: 0 *(serão gerados automaticamente com cada release)*
- **Versão Atual**: 1.0.0
- **Última Atualização**: 2025-06-14
