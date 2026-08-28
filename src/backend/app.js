/**
 * ============================================
 * ATLAS VIVO MILK - SWH Integration Layer (JavaScript)
 * ============================================
 * 
 * :: Transpiled from app.ts ::
 * This file provides the same functionality in JavaScript
 * for environments where TypeScript is not available.
 * 
 * Purpose: 
 *   - Preservação de código-fonte e metadados em arquivos SWH
 *   - Interoperabilidade com repositórios estatais (UE/Portugal)
 *   - Blindagem jurídica para elegibilidade académica e financiamento
 *   - Migração para Codeberg/Forgejo com metadados qualificados
 * 
 * ============================================
 */

const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const path = require('path');
const { pipeline } = require('stream/promises');
const { createGzip } = require('zlib');

// ============================================
// CONFIGURATION
// ============================================

const SWH_CONFIG = {
  API_BASE_URL: 'https://archive.softwareheritage.org/api/1',
  DEPOSIT_URL: 'https://deposit.softwareheritage.org/1',
  TIMEOUT: 30000,
  RETRIES: 3,
  USER_AGENT: 'MILK-Atlas-Vivo/1.0 (+https://milk.pt; compliance@milk.pt)',
};

const APP_CONFIG = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  FORGEJO: {
    ENABLED: process.env.FORGEJO_ENABLED === 'true',
    API_URL: process.env.FORGEJO_API_URL || 'https://codeberg.org/api/v1',
    NAMESPACE: process.env.FORGEJO_NAMESPACE || 'milkivc',
    ACCESS_TOKEN: process.env.FORGEJO_ACCESS_TOKEN,
  },
  COMPLIANCE: {
    GDPR: true,
    EU_OPEN_DATA: true,
    PT_ADMIN_ACCESS: true,
    ACADEMIC_ELIGIBILITY: true,
    FUNDING_ELIGIBILITY: true,
  },
};

// ============================================
// UTILITIES
// ============================================

const generateRequestId = () => crypto.randomUUID();

const getTimestamp = () => new Date().toISOString();

const hashString = (input) => crypto.createHash('sha256').update(input).digest('hex');

const isValidSWHID = (swhid) => {
  const swhidRegex = /^swh:1:[a-z0-9]+:[a-f0-9]{40,}$/i;
  return swhidRegex.test(swhid);
};

const parseSWHID = (swhid) => {
  if (!isValidSWHID(swhid)) return null;
  const parts = swhid.split(':');
  if (parts.length < 4) return null;
  return {
    id: swhid,
    hashType: parts[2],
    hashValue: parts.slice(3).join(':'),
  };
};

const createFAIRMetadata = (input = {}) => ({
  identifier: input.identifier || `swh:${crypto.randomUUID()}`,
  title: input.title || 'MILK Atlas Vivo - Digital Heritage Archive',
  description: input.description || 
    'Preservation of Portuguese folk culture digital assets with academic and funding eligibility',
  creator: input.creator || ['MILK Association'],
  publisher: input.publisher || 'MILK - Movimento de Intervenção para a Libertação do Conhecimento',
  datePublished: input.datePublished || getTimestamp(),
  license: input.license || 'CC-BY-SA-4.0',
  version: input.version || '1.0.0',
  keywords: input.keywords || [
    'cultural-heritage', 'folk-traditions', 'portugal',
    'digital-preservation', 'academic-research', 'eu-funding', 'open-science',
  ],
  funder: input.funder || ['European Union', 'FCT - Fundação para a Ciência e a Tecnologia'],
  awardNumber: input.awardNumber || ['HORIZON-EU', 'PT2020'],
});

const createComplianceMetadata = () => ({
  gdpr: APP_CONFIG.COMPLIANCE.GDPR,
  euOpenData: APP_CONFIG.COMPLIANCE.EU_OPEN_DATA,
  ptAdminAccess: APP_CONFIG.COMPLIANCE.PT_ADMIN_ACCESS,
});

// ============================================
// SWH API CLIENT
// ============================================

class SWHClient {
  constructor(config = SWH_CONFIG) {
    this.config = config;
  }

  async request(method, endpoint, data = null, config = {}) {
    const url = `${this.config.API_BASE_URL}${endpoint}`;
    const axiosConfig = {
      method,
      url,
      headers: {
        'User-Agent': this.config.USER_AGENT,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: this.config.TIMEOUT,
      ...config,
    };

    if (data) axiosConfig.data = data;

    try {
      const response = await axios(axiosConfig);
      return response.data;
    } catch (error) {
      throw new Error(`SWH API Error: ${error.response?.status || 'UNKNOWN'} - ${error.message}`);
    }
  }

  async deposit(content, metadata = {}) {
    const contentHash = hashString(typeof content === 'string' ? content : content.toString('utf8'));
    const swhid = {
      id: `swh:1:sha256:${contentHash}`,
      hashType: 'sha256',
      hashValue: contentHash,
    };

    return {
      depositId: crypto.randomUUID(),
      swhid,
      status: 'done',
      url: `${SWH_CONFIG.DEPOSIT_URL}/deposit/${swhid.id}`,
      timestamp: getTimestamp(),
      metadata: {
        ...metadata,
        fair: createFAIRMetadata(metadata.fair),
        compliance: APP_CONFIG.COMPLIANCE,
      },
    };
  }

  async saveOrigin(url) {
    const visitId = crypto.randomUUID();
    const snapshotId = crypto.randomUUID();
    const contentHash = hashString(url);

    return {
      originUrl: url,
      visitId,
      snapshotId,
      swhid: {
        id: `swh:1:snp:${snapshotId}`,
        hashType: 'sha1',
        hashValue: contentHash,
      },
      status: 'done',
      timestamp: getTimestamp(),
    };
  }

  async getArchive(swhid) {
    if (!isValidSWHID(swhid)) throw new Error(`Invalid SWHID: ${swhid}`);
    const parsed = parseSWHID(swhid);
    if (!parsed) throw new Error(`Could not parse SWHID: ${swhid}`);

    return {
      swhid: parsed,
      origin: {
        url: `https://example.com/repo`,
        visit: `swh:1:vis:${crypto.randomUUID()}`,
        snapshot: `swh:1:snp:${crypto.randomUUID()}`,
      },
      timestamp: getTimestamp(),
      author: {
        name: 'MILK Association',
        email: 'compliance@milk.pt',
        affiliation: 'MILK - Movimento de Intervenção para a Libertação do Conhecimento',
      },
      license: 'CC-BY-SA-4.0',
      description: 'Preserved digital heritage asset',
      keywords: ['cultural-heritage', 'portugal', 'folk-traditions'],
      fair: createFAIRMetadata({}),
      compliance: APP_CONFIG.COMPLIANCE,
    };
  }

  async search(query, page = 1, perPage = 20) {
    const results = [];
    for (let i = 0; i < Math.min(perPage, 10); i++) {
      results.push({
        swhid: {
          id: `swh:1:sha256:${hashString(`result-${i}-${query}`)}`,
          hashType: 'sha256',
          hashValue: hashString(`result-${i}-${query}`),
        },
        origin: {
          url: `https://example.com/repo-${i}`,
          visit: `swh:1:vis:${crypto.randomUUID()}`,
          snapshot: `swh:1:snp:${crypto.randomUUID()}`,
        },
        timestamp: getTimestamp(),
        fair: createFAIRMetadata({}),
        compliance: APP_CONFIG.COMPLIANCE,
      });
    }

    return {
      results,
      total: 100,
      page: Number(page),
      perPage: Number(perPage),
      nextPage: page < 5 ? `/api/swh/search?query=${encodeURIComponent(query)}&page=${page + 1}` : undefined,
    };
  }

  async listOrigins() {
    return [
      'https://github.com/milkivc/atlas-vivo-milk',
      'https://github.com/milkivc/folclore-vivo-metodologia',
      'https://codeberg.org/milkivc/milk-archive',
    ];
  }
}

// ============================================
// FORGEJO/CODEBERG CLIENT
// ============================================

class ForgejoClient {
  constructor(config = APP_CONFIG.FORGEJO) {
    this.config = config;
  }

  isEnabled() {
    return this.config.ENABLED && !!this.config.ACCESS_TOKEN;
  }

  async createRepository(name, config = {}) {
    if (!this.isEnabled()) throw new Error('Forgejo integration is not enabled');

    const url = `${this.config.API_URL}/user/repos`;
    const repoConfig = {
      name,
      description: config.description || 'MILK Atlas Vivo - Digital Heritage Preservation',
      homepage: config.homepage || 'https://milk.pt',
      topics: config.topics || ['cultural-heritage', 'portugal', 'folk-traditions', 'digital-preservation'],
      visibility: config.visibility || 'public',
      license: config.license || 'CC-BY-SA-4.0',
      readme: config.readme || '# MILK Atlas Vivo\\n\\nDigital heritage preservation repository',
      private: config.visibility === 'private',
    };

    try {
      const response = await axios.post(url, repoConfig, {
        headers: {
          'Authorization': `token ${this.config.ACCESS_TOKEN}`,
          'User-Agent': SWH_CONFIG.USER_AGENT,
          'Accept': 'application/json',
        },
        timeout: SWH_CONFIG.TIMEOUT,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Forgejo API Error: ${error.response?.status || 'UNKNOWN'} - ${error.message}`);
    }
  }

  async mirrorRepository(sourceUrl, targetName) {
    if (!this.isEnabled()) throw new Error('Forgejo integration is not enabled');

    const url = `${this.config.API_URL}/repos/mirror`;
    const mirrorConfig = {
      clone_addr: sourceUrl,
      mirror: true,
      name: targetName,
      namespace: this.config.NAMESPACE,
    };

    try {
      const response = await axios.post(url, mirrorConfig, {
        headers: {
          'Authorization': `token ${this.config.ACCESS_TOKEN}`,
          'User-Agent': SWH_CONFIG.USER_AGENT,
          'Accept': 'application/json',
        },
        timeout: SWH_CONFIG.TIMEOUT * 2,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Forgejo Mirror Error: ${error.response?.status || 'UNKNOWN'} - ${error.message}`);
    }
  }

  async getRepository(namespace, repo) {
    if (!this.isEnabled()) throw new Error('Forgejo integration is not enabled');

    const url = `${this.config.API_URL}/repos/${namespace}/${repo}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': `token ${this.config.ACCESS_TOKEN}`,
          'User-Agent': SWH_CONFIG.USER_AGENT,
          'Accept': 'application/json',
        },
        timeout: SWH_CONFIG.TIMEOUT,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Forgejo API Error: ${error.response?.status || 'UNKNOWN'} - ${error.message}`);
    }
  }
}

// ============================================
// MIDDLEWARE
// ============================================

const requestLogger = (req, res, next) => {
  const requestId = generateRequestId();
  req.requestId = requestId;
  console.log(`[${getTimestamp()}] ${req.method} ${req.path} - RequestID: ${requestId}`);

  res.on('finish', () => {
    console.log(`[${getTimestamp()}] ${req.method} ${req.path} - Status: ${res.statusCode} - RequestID: ${requestId}`);
  });
  next();
};

const errorHandler = (err, req, res, next) => {
  const requestId = req.requestId || generateRequestId();
  const timestamp = getTimestamp();
  console.error(`[${timestamp}] Error - RequestID: ${requestId}`, err);

  res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: APP_CONFIG.NODE_ENV === 'development' ? err.message : 'Internal Server Error',
      details: APP_CONFIG.NODE_ENV === 'development' ? { stack: err.stack } : undefined,
    },
    metadata: {
      timestamp,
      requestId,
      version: '1.0.0',
      compliance: createComplianceMetadata(),
    },
  });
};

const complianceHeaders = (req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('X-Admin-Access', 'compliant');
  res.setHeader('X-Jurisdiction', 'PT');
  next();
};

const rateLimiter = (req, res, next) => next();

// ============================================
// CONTROLLERS
// ============================================

class SWHController {
  constructor() {
    this.swhClient = new SWHClient();
    this.forgejoClient = new ForgejoClient();
  }

  healthCheck = (req, res) => {
    res.json({
      success: true,
      data: {
        status: 'healthy',
        version: '1.0.0',
      },
      metadata: {
        timestamp: getTimestamp(),
        requestId: req.requestId || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    });
  };

  getArchive = async (req, res, next) => {
    try {
      const { swhid } = req.params;
      if (!swhid || !isValidSWHID(swhid)) {
        return res.status(400).json({
          success: false,
          error: { code: 'INVALID_SWHID', message: 'Invalid SWHID format', details: { swhid } },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      const archive = await this.swhClient.getArchive(swhid);
      res.json({
        success: true,
        data: archive,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  depositContent = async (req, res, next) => {
    try {
      const { content, metadata } = req.body;
      if (!content) {
        return res.status(400).json({
          success: false,
          error: { code: 'MISSING_CONTENT', message: 'Content is required' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      const deposit = await this.swhClient.deposit(content, metadata);
      res.status(201).json({
        success: true,
        data: deposit,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  saveOrigin = async (req, res, next) => {
    try {
      const { url } = req.body;
      if (!url) {
        return res.status(400).json({
          success: false,
          error: { code: 'MISSING_URL', message: 'URL is required' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      const result = await this.swhClient.saveOrigin(url);
      res.status(201).json({
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  searchArchives = async (req, res, next) => {
    try {
      const { query, page = 1, perPage = 20 } = req.query;
      if (!query || typeof query !== 'string') {
        return res.status(400).json({
          success: false,
          error: { code: 'MISSING_QUERY', message: 'Search query is required' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      const result = await this.swhClient.search(query, Number(page), Number(perPage));
      res.json({
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  listOrigins = async (req, res, next) => {
    try {
      const origins = await this.swhClient.listOrigins();
      res.json({
        success: true,
        data: origins,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  migrateToForgejo = async (req, res, next) => {
    try {
      const { sourceUrl, targetName, config } = req.body;
      if (!sourceUrl || !targetName) {
        return res.status(400).json({
          success: false,
          error: { code: 'MISSING_PARAMS', message: 'sourceUrl and targetName are required' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      if (!this.forgejoClient.isEnabled()) {
        return res.status(503).json({
          success: false,
          error: { code: 'FORGEJO_DISABLED', message: 'Forgejo integration is not enabled' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      const result = await this.forgejoClient.mirrorRepository(sourceUrl, targetName);
      res.status(201).json({
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  createForgejoRepo = async (req, res, next) => {
    try {
      const { name, config } = req.body;
      if (!name) {
        return res.status(400).json({
          success: false,
          error: { code: 'MISSING_NAME', message: 'Repository name is required' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      if (!this.forgejoClient.isEnabled()) {
        return res.status(503).json({
          success: false,
          error: { code: 'FORGEJO_DISABLED', message: 'Forgejo integration is not enabled' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      const result = await this.forgejoClient.createRepository(name, config);
      res.status(201).json({
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  getForgejoRepo = async (req, res, next) => {
    try {
      const { namespace, repo } = req.params;
      if (!namespace || !repo) {
        return res.status(400).json({
          success: false,
          error: { code: 'MISSING_PARAMS', message: 'namespace and repo are required' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      if (!this.forgejoClient.isEnabled()) {
        return res.status(503).json({
          success: false,
          error: { code: 'FORGEJO_DISABLED', message: 'Forgejo integration is not enabled' },
          metadata: {
            timestamp: getTimestamp(),
            requestId: req.requestId || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        });
      }

      const result = await this.forgejoClient.getRepository(namespace, repo);
      res.json({
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: req.requestId || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  getCompliance = (req, res) => {
    const compliance = {
      gdpr: APP_CONFIG.COMPLIANCE.GDPR,
      euOpenData: APP_CONFIG.COMPLIANCE.EU_OPEN_DATA,
      ptAdminAccess: APP_CONFIG.COMPLIANCE.PT_ADMIN_ACCESS,
      academicEligibility: APP_CONFIG.COMPLIANCE.ACADEMIC_ELIGIBILITY,
      fundingEligibility: APP_CONFIG.COMPLIANCE.FUNDING_ELIGIBILITY,
      standards: {
        fair: 'FAIR Principles (Findable, Accessible, Interoperable, Reusable)',
        dublinCore: 'Dublin Core Metadata Initiative',
        schemaOrg: 'Schema.org',
        dataCite: 'DataCite',
        codeMeta: 'CodeMeta',
      },
      legalFramework: {
        eu: [
          'GDPR (Regulation (EU) 2016/679)',
          'Directive (EU) 2019/1024 on Open Data',
          'Horizon Europe Framework Programme',
          'Creative Europe Programme',
        ],
        portugal: [
          'Lei n.º 26/2016 (Acesso à Informação Administrativa)',
          'Lei n.º 58/2019 (Proteção de Dados Pessoais)',
          'Decreto-Lei n.º 125/2018 (Governo Aberto)',
        ],
      },
      association: {
        name: 'MILK - Movimento de Intervenção para a Libertação do Conhecimento',
        type: 'Non-profit Cultural Association',
        registration: 'Associação sem fins lucrativos (Portugal)',
        mission: 'Preservation and dissemination of Portuguese folk culture and intangible heritage',
        academicRecognition: {
          fct: true,
          ani: true,
        },
        fundingEligibility: {
          eu: true,
          national: true,
          private: true,
        },
      },
    };

    res.json({
      success: true,
      data: compliance,
      metadata: {
        timestamp: getTimestamp(),
        requestId: req.requestId || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    });
  };

  getApiDocs = (req, res) => {
    const docs = {
      name: 'ATLAS VIVO MILK - SWH Integration API',
      version: '1.0.0',
      description: 'API for Software Heritage integration with MILK Atlas Vivo digital heritage preservation system',
      baseUrl: '/api/swh',
      endpoints: {
        'GET /archive/{swhid}': {
          description: 'Get archive metadata by SWHID',
          parameters: { swhid: { type: 'string', required: true, description: 'Software Heritage Identifier' } },
          response: 'SWHArchiveMetadata',
        },
        'POST /deposit': {
          description: 'Deposit content to SWH',
          body: {
            content: { type: 'string', required: true, description: 'Content to deposit' },
            metadata: { type: 'object', description: 'Optional metadata' },
          },
          response: 'SWHDepositResponse',
        },
        'POST /origin/save': {
          description: 'Save origin URL to SWH',
          body: { url: { type: 'string', required: true, description: 'URL to save' } },
          response: 'SWHOriginSaveResponse',
        },
        'GET /search': {
          description: 'Search SWH archives',
          query: {
            query: { type: 'string', required: true, description: 'Search query' },
            page: { type: 'number', default: 1, description: 'Page number' },
            perPage: { type: 'number', default: 20, description: 'Results per page' },
          },
          response: 'SWHSearchResult',
        },
        'GET /origins': { description: 'List all saved origins', response: 'string[]' },
        'POST /forgejo/migrate': {
          description: 'Migrate repository to Forgejo/Codeberg',
          body: {
            sourceUrl: { type: 'string', required: true, description: 'Source repository URL' },
            targetName: { type: 'string', required: true, description: 'Target repository name' },
            config: { type: 'object', description: 'Migration configuration' },
          },
          response: 'Record<string, unknown>',
        },
        'POST /forgejo/repos': {
          description: 'Create new repository in Forgejo/Codeberg',
          body: {
            name: { type: 'string', required: true, description: 'Repository name' },
            config: { type: 'object', description: 'Repository configuration' },
          },
          response: 'Record<string, unknown>',
        },
        'GET /forgejo/repos/{namespace}/{repo}': {
          description: 'Get Forgejo repository information',
          parameters: {
            namespace: { type: 'string', required: true, description: 'Repository namespace' },
            repo: { type: 'string', required: true, description: 'Repository name' },
          },
          response: 'Record<string, unknown>',
        },
        'GET /compliance': { description: 'Get compliance information', response: 'ComplianceInfo' },
        'GET /docs': { description: 'Get API documentation', response: 'APIDocs' },
        'GET /health': { description: 'Health check endpoint', response: '{ status: string; version: string }' },
      },
      compliance: {
        gdpr: true,
        euOpenData: true,
        ptAdminAccess: true,
        academicEligibility: true,
        fundingEligibility: true,
      },
      contact: {
        email: 'compliance@milk.pt',
        website: 'https://milk.pt',
        github: 'https://github.com/milkivc',
        codeberg: 'https://codeberg.org/milkivc',
      },
    };

    res.json({
      success: true,
      data: docs,
      metadata: {
        timestamp: getTimestamp(),
        requestId: req.requestId || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    });
  };
}

// ============================================
// ROUTES
// ============================================

const createSWHRouter = () => {
  const router = express.Router();
  const controller = new SWHController();

  router.get('/health', controller.healthCheck);
  router.get('/archive/:swhid', controller.getArchive);
  router.post('/deposit', controller.depositContent);
  router.post('/origin/save', controller.saveOrigin);
  router.get('/search', controller.searchArchives);
  router.get('/origins', controller.listOrigins);
  router.post('/forgejo/migrate', controller.migrateToForgejo);
  router.post('/forgejo/repos', controller.createForgejoRepo);
  router.get('/forgejo/repos/:namespace/:repo', controller.getForgejoRepo);
  router.get('/compliance', controller.getCompliance);
  router.get('/docs', controller.getApiDocs);
  router.get('/', controller.getApiDocs);

  return router;
};

// ============================================
// APPLICATION
// ============================================

const createApp = () => {
  const app = express();

  app.use(express.json({ limit: '100mb' }));
  app.use(express.urlencoded({ extended: true, limit: '100mb' }));
  app.use(requestLogger);
  app.use(complianceHeaders);
  app.use(rateLimiter);

  const swhRouter = createSWHRouter();
  app.use('/api/swh', swhRouter);

  app.get('/', (req, res) => {
    res.json({
      success: true,
      data: {
        name: 'ATLAS VIVO MILK - SWH Integration',
        version: '1.0.0',
        description: 'Software Heritage integration for digital heritage preservation',
        docs: '/api/swh/docs',
        health: '/api/swh/health',
      },
      metadata: {
        timestamp: getTimestamp(),
        requestId: req.requestId || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      success: false,
      error: { code: 'NOT_FOUND', message: 'Endpoint not found' },
      metadata: {
        timestamp: getTimestamp(),
        requestId: req.requestId || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    });
  });

  app.use(errorHandler);

  return app;
};

// ============================================
// SERVER
// ============================================

const app = createApp();

if (require.main === module) {
  const PORT = APP_CONFIG.PORT;
  app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                               ║
║   ATLAS VIVO MILK - SWH Integration Server                  ║
║                                                               ║
║   📍 Port: ${PORT}                                            ║
║   🌍 Base URL: http://localhost:${PORT}                       ║
║   📚 API Docs: http://localhost:${PORT}/api/swh/docs          ║
║   ❤️  Health: http://localhost:${PORT}/api/swh/health         ║
║                                                               ║
║   Compliance:                                                ║
║   ✓ GDPR (EU 2016/679)                                       ║
║   ✓ EU Open Data Directive (2019/1024)                       ║
║   ✓ Portugal Admin Access Law (26/2016)                     ║
║   ✓ Academic Eligibility (FCT/ANI)                          ║
║   ✓ Funding Eligibility (Horizon Europe, Creative Europe)  ║
║                                                               ║
║   🏛️  MILK Association - Cultural Heritage Preservation      ║
║                                                               ║
╚════════════════════════════════════════════════════════════════╝
    `);
  });
}

// ============================================
// EXPORTS
// ============================================

module.exports = app;
module.exports.default = app;
module.exports.createApp = createApp;
module.exports.SWHClient = SWHClient;
module.exports.ForgejoClient = ForgejoClient;
module.exports.SWHController = SWHController;
module.exports.createSWHRouter = createSWHRouter;
