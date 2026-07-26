# ATLAS VIVO MILK - SWH Integration Layer

## 📋 Overview

This is the **Software Heritage (SWH) Integration Layer** for the **ATLAS VIVO MILK** project. It provides a comprehensive API for:

- **Digital Heritage Preservation** via Software Heritage
- **Interoperability** with EU and Portugal state repositories
- **Migration to Codeberg/Forgejo** with qualified metadata
- **Legal Compliance** for academic and funding eligibility

## 🎯 Features

### ✅ SWH Integration
- Deposit code and data to Software Heritage
- Retrieve archive metadata by SWHID
- Search SWH archives
- Save origin URLs to SWH
- List all saved origins

### ✅ Forgejo/Codeberg Integration
- Create repositories in Codeberg
- Mirror repositories from GitHub to Codeberg
- Get repository information
- Full API support for Forgejo instances

### ✅ Compliance & Standards
- **GDPR** (Regulation (EU) 2016/679)
- **EU Open Data Directive** (2019/1024)
- **Portugal Admin Access Law** (Lei n.º 26/2016)
- **FAIR Principles** (Findable, Accessible, Interoperable, Reusable)
- **Dublin Core** metadata standard
- **Schema.org** structured data
- **DataCite** metadata schema
- **CodeMeta** software metadata

### ✅ Academic & Funding Eligibility
- **FCT** (Fundação para a Ciência e a Tecnologia) recognition
- **ANI** (Agência Nacional de Inovação) recognition
- **Horizon Europe** funding compliance
- **Creative Europe** programme compliance

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Docker (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/milkivc/atlas-vivo-milk.git
cd atlas-vivo-milk/src/backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Start development server
npm run dev

# Or start production server
npm run start:prod
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose -f docker-compose.yml up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api/swh
```

### Health Check
```
GET /health
```

### SWH Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/archive/{swhid}` | Get archive metadata by SWHID |
| POST | `/deposit` | Deposit content to SWH |
| POST | `/origin/save` | Save origin URL to SWH |
| GET | `/search` | Search SWH archives |
| GET | `/origins` | List all saved origins |

### Forgejo/Codeberg Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/forgejo/migrate` | Migrate repository to Forgejo |
| POST | `/forgejo/repos` | Create new repository in Forgejo |
| GET | `/forgejo/repos/{namespace}/{repo}` | Get repository information |

### Compliance & Documentation

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/compliance` | Get compliance information |
| GET | `/docs` | Get API documentation |

## 📝 Request Examples

### Deposit Content to SWH

```bash
curl -X POST http://localhost:3000/api/swh/deposit \
  -H "Content-Type: application/json" \
  -d '{
    "content": "const hello = \"Hello, World!\";",
    "metadata": {
      "description": "Example JavaScript file",
      "author": {
        "name": "MILK Association",
        "email": "compliance@milk.pt"
      },
      "license": "CC-BY-SA-4.0"
    }
  }'
```

### Save Origin URL to SWH

```bash
curl -X POST http://localhost:3000/api/swh/origin/save \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://github.com/milkivc/atlas-vivo-milk"
  }'
```

### Search SWH Archives

```bash
curl -X GET "http://localhost:3000/api/swh/search?query=portugal&page=1&perPage=10"
```

### Migrate Repository to Codeberg

```bash
curl -X POST http://localhost:3000/api/swh/forgejo/migrate \
  -H "Content-Type: application/json" \
  -d '{
    "sourceUrl": "https://github.com/milkivc/atlas-vivo-milk.git",
    "targetName": "atlas-vivo-milk",
    "config": {
      "description": "MILK Atlas Vivo - Digital Heritage Preservation",
      "visibility": "public",
      "license": "CC-BY-SA-4.0"
    }
  }'
```

### Get Compliance Information

```bash
curl -X GET http://localhost:3000/api/swh/compliance
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Application
NODE_ENV=development
PORT=3000
LOG_LEVEL=info

# SWH API
SWH_API_BASE_URL=https://archive.softwareheritage.org/api/1
SWH_DEPOSIT_URL=https://deposit.softwareheritage.org/1

# Forgejo/Codeberg
FORGEJO_ENABLED=true
FORGEJO_API_URL=https://codeberg.org/api/v1
FORGEJO_NAMESPACE=milkivc
FORGEJO_ACCESS_TOKEN=your_personal_access_token

# Compliance
COMPLIANCE_GDPR=true
COMPLIANCE_EU_OPEN_DATA=true
COMPLIANCE_PT_ADMIN_ACCESS=true
COMPLIANCE_ACADEMIC_ELIGIBILITY=true
COMPLIANCE_FUNDING_ELIGIBILITY=true
```

### Getting a Codeberg Access Token

1. Go to [Codeberg](https://codeberg.org)
2. Log in to your account
3. Go to **Settings** > **Applications**
4. Click **Generate New Token**
5. Give it a name (e.g., "MILK Atlas Vivo")
6. Select permissions: `repo`, `read:repo`, `write:repo`
7. Copy the token and add it to your `.env` file

## 📦 Project Structure

```
src/backend/
├── app.ts              # Main TypeScript application
├── app.js              # JavaScript version (for non-TS environments)
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── Dockerfile           # Docker build configuration
├── docker-compose.yml   # Docker Compose configuration
├── README.md            # This file
└── index.js             # Legacy backend entry point
```

## 🔒 Security

### Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Access-Control-Allow-Origin: *` (CORS)
- `X-Admin-Access: compliant`
- `X-Jurisdiction: PT`

### Rate Limiting
- Basic rate limiting is implemented
- For production, consider using `express-rate-limit`

### Authentication
- Forgejo API token is required for repository operations
- Token is injected via environment variables
- **NEVER** hardcode tokens in source code

## 📊 Monitoring

### Health Check
```bash
curl http://localhost:3000/api/swh/health
```

### Docker Health Check
```yaml
healthcheck:
  test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/api/swh/health"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 10s
```

### Prometheus Metrics (Optional)
Uncomment and configure in `docker-compose.yml`:
```yaml
prometheus:
  image: prom/prometheus:latest
  ports:
    - "9090:9090"
```

## 📚 API Documentation

### Response Format

All endpoints return a standardized response format:

```json
{
  "success": true,
  "data": { ... },
  "error": null,
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z",
    "requestId": "uuid-v4",
    "version": "1.0.0",
    "compliance": {
      "gdpr": true,
      "euOpenData": true,
      "ptAdminAccess": true
    }
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": { ... }
  },
  "metadata": { ... }
}
```

## 🎓 Academic & Funding Compliance

### FAIR Principles
- **Findable**: All resources have unique identifiers (SWHID)
- **Accessible**: Resources are accessible via standard protocols
- **Interoperable**: Uses standard metadata schemas (Dublin Core, Schema.org)
- **Reusable**: Clear licensing and provenance information

### Standards Supported
- **Dublin Core**: Core metadata elements
- **Schema.org**: Structured data markup
- **DataCite**: Research data metadata
- **CodeMeta**: Software metadata

### Legal Framework

#### European Union
- **GDPR** (Regulation (EU) 2016/679): Data protection
- **Directive (EU) 2019/1024**: Open Data and public sector information
- **Horizon Europe**: Research and innovation funding
- **Creative Europe**: Cultural and creative sectors funding

#### Portugal
- **Lei n.º 26/2016**: Acesso à Informação Administrativa
- **Lei n.º 58/2019**: Proteção de Dados Pessoais (GDPR implementation)
- **Decreto-Lei n.º 125/2018**: Governo Aberto (Open Government)

### Association Information

**MILK - Movimento de Intervenção para a Libertação do Conhecimento**
- Type: Non-profit Cultural Association
- Registration: Associação sem fins lucrativos (Portugal)
- Mission: Preservation and dissemination of Portuguese folk culture and intangible heritage
- Academic Recognition: FCT, ANI
- Funding Eligibility: EU, National, Private

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

## 📄 License

This project is licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License** (CC-BY-SA-4.0).

## 🙏 Acknowledgments

- **Software Heritage**: For providing long-term preservation of software source code
- **Codeberg**: For providing a free and ethical Git hosting platform
- **European Union**: For funding opportunities and open data initiatives
- **FCT - Fundação para a Ciência e a Tecnologia**: For academic recognition
- **ANI - Agência Nacional de Inovação**: For innovation support

## 📞 Contact

- **Email**: compliance@milk.pt
- **Website**: https://milk.pt
- **GitHub**: https://github.com/milkivc
- **Codeberg**: https://codeberg.org/milkivc

---

**© 2024 MILK Association - All Rights Reserved**

*Preserving Portuguese Cultural Heritage for Future Generations*
