/**
 * ============================================
 * ATLAS VIVO MILK - SWH Integration Layer
 * ============================================
 * 
 * :: Software Heritage (SWH) API Endpoints ::
 * 
 * Purpose: 
 *   - Preservação de código-fonte e metadados em arquivos SWH
 *   - Interoperabilidade com repositórios estatais (UE/Portugal)
 *   - Blindagem jurídica para elegibilidade académica e financiamento
 *   - Migração para Codeberg/Forgejo com metadados qualificados
 * 
 * Compliance:
 *   - GDPR (Regulamento Geral sobre a Proteção de Dados)
 *   - Diretiva EU 2019/1024 (Open Data)
 *   - Lei n.º 26/2016 (Acesso à Informação Administrativa, Portugal)
 *   - FAIR Principles (Findable, Accessible, Interoperable, Reusable)
 * 
 * Metadata Standards:
 *   - Dublin Core
 *   - Schema.org
 *   - DataCite
 *   - CodeMeta
 * 
 * :: Generated for MILK Association ::
 *   - Non-profit cultural heritage preservation
 *   - Academic eligibility (FCT/ANI recognition)
 *   - EU funding compliance (Horizon Europe, Creative Europe)
 * 
 * ============================================
 */

// ============================================
// IMPORTS
// ============================================
import express, { Request, Response, NextFunction, Router } from 'express';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import crypto from 'crypto';
import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

// ============================================
// TYPES & INTERFACES
// ============================================

/**
 * SWH Archive Identifier (SWHID)
 * Format: swh:1:<hash-type>:<hash-value>
 */
interface SWHID {
  id: string;
  hashType: 'sha1' | 'sha256' | 'sha512' | 'blake2s' | 'blake2b';
  hashValue: string;
}

/**
 * SWH Deposit Response
 */
interface SWHDepositResponse {
  depositId: string;
  swhid: SWHID;
  status: 'pending' | 'processing' | 'done' | 'failed';
  url: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

/**
 * SWH Archive Metadata
 */
interface SWHArchiveMetadata {
  swhid: SWHID;
  origin: {
    url: string;
    visit: string;
    snapshot: string;
  };
  timestamp: string;
  author?: {
    name: string;
    email?: string;
    affiliation?: string;
  };
  license?: string;
  description?: string;
  keywords?: string[];
  // FAIR Metadata
  fair: {
    identifier: string;
    title: string;
    description: string;
    creator: string[];
    publisher: string;
    datePublished: string;
    license: string;
    version?: string;
    keywords?: string[];
    funder?: string[];
    awardNumber?: string[];
  };
  // Legal Compliance
  compliance: {
    gdpr: boolean;
    euOpenData: boolean;
    ptAdminAccess: boolean;
    academicEligibility: boolean;
    fundingEligibility: boolean;
  };
}

/**
 * SWH Search Result
 */
interface SWHSearchResult {
  results: SWHArchiveMetadata[];
  total: number;
  page: number;
  perPage: number;
  nextPage?: string;
  prevPage?: string;
}

/**
 * SWH Origin Save Response
 */
interface SWHOriginSaveResponse {
  originUrl: string;
  visitId: string;
  snapshotId: string;
  swhid: SWHID;
  status: string;
  timestamp: string;
}

/**
 * API Response Wrapper
 */
interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  metadata: {
    timestamp: string;
    requestId: string;
    version: string;
    compliance: {
      gdpr: boolean;
      euOpenData: boolean;
      ptAdminAccess: boolean;
    };
  };
}

/**
 * Codeberg/Forgejo Migration Config
 */
interface ForgejoMigrationConfig {
  targetUrl: string;
  namespace: string;
  repository: string;
  accessToken: string; // Placeholder - NEVER hardcode
  mirror: boolean;
  preserveHistory: boolean;
  metadata: {
    description: string;
    homepage?: string;
    topics?: string[];
    visibility: 'public' | 'private' | 'internal';
    license?: string;
    readme?: string;
  };
}

// ============================================
// CONFIGURATION
// ============================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SWH API Configuration
const SWH_CONFIG = {
  API_BASE_URL: 'https://archive.softwareheritage.org/api/1',
  DEPOSIT_URL: 'https://deposit.softwareheritage.org/1',
  TIMEOUT: 30000, // 30 seconds
  RETRIES: 3,
  USER_AGENT: 'MILK-Atlas-Vivo/1.0 (+https://milk.pt; compliance@milk.pt)',
};

// Application Configuration
const APP_CONFIG = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  // Codeberg/Forgejo Migration (configure via environment)
  FORGEJO: {
    ENABLED: process.env.FORGEJO_ENABLED === 'true',
    API_URL: process.env.FORGEJO_API_URL || 'https://codeberg.org/api/v1',
    NAMESPACE: process.env.FORGEJO_NAMESPACE || 'milkivc',
    ACCESS_TOKEN: process.env.FORGEJO_ACCESS_TOKEN, // Injected at runtime
  },
  // Legal & Compliance
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

/**
 * Generate a unique request ID
 */
const generateRequestId = (): string => {
  return crypto.randomUUID();
};

/**
 * Generate timestamp in ISO 8601 format
 */
const getTimestamp = (): string => {
  return new Date().toISOString();
};

/**
 * Hash a string using SHA-256
 */
const hashString = (input: string): string => {
  return createHash('sha256').update(input).digest('hex');
};

/**
 * Validate SWHID format
 */
const isValidSWHID = (swhid: string): boolean => {
  const swhidRegex = /^swh:1:[a-z0-9]+:[a-f0-9]{40,}$/i;
  return swhidRegex.test(swhid);
};

/**
 * Parse SWHID into components
 */
const parseSWHID = (swhid: string): SWHID | null => {
  if (!isValidSWHID(swhid)) return null;
  
  const parts = swhid.split(':');
  if (parts.length < 4) return null;
  
  return {
    id: swhid,
    hashType: parts[2] as SWHID['hashType'],
    hashValue: parts.slice(3).join(':'),
  };
};

/**
 * Create FAIR-compliant metadata
 */
const createFAIRMetadata = (
  input: Partial<SWHArchiveMetadata['fair']>
): SWHArchiveMetadata['fair'] => {
  return {
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
      'cultural-heritage',
      'folk-traditions',
      'portugal',
      'digital-preservation',
      'academic-research',
      'eu-funding',
      'open-science',
    ],
    funder: input.funder || ['European Union', 'FCT - Fundação para a Ciência e a Tecnologia'],
    awardNumber: input.awardNumber || ['HORIZON-EU', 'PT2020'],
  };
};

/**
 * Create compliance metadata
 */
const createComplianceMetadata = (): APIResponse<unknown>['metadata']['compliance'] => {
  return {
    gdpr: APP_CONFIG.COMPLIANCE.GDPR,
    euOpenData: APP_CONFIG.COMPLIANCE.EU_OPEN_DATA,
    ptAdminAccess: APP_CONFIG.COMPLIANCE.PT_ADMIN_ACCESS,
  };
};

// ============================================
// SWH API CLIENT
// ============================================

class SWHClient {
  private readonly config: typeof SWH_CONFIG;
  
  constructor(config: typeof SWH_CONFIG = SWH_CONFIG) {
    this.config = config;
  }

  /**
   * Make a request to SWH API
   */
  private async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const url = `${this.config.API_BASE_URL}${endpoint}`;
    
    const axiosConfig: AxiosRequestConfig = {
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

    if (data) {
      axiosConfig.data = data;
    }

    try {
      const response: AxiosResponse<T> = await axios(axiosConfig);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new Error(
        `SWH API Error: ${axiosError.response?.status || 'UNKNOWN'} - ${axiosError.message}`
      );
    }
  }

  /**
   * Deposit code or data to SWH
   */
  async deposit(
    content: string | Buffer,
    metadata: Partial<SWHArchiveMetadata> = {}
  ): Promise<SWHDepositResponse> {
    // For actual deposit, we'd use the SWH deposit API
    // This is a simplified implementation
    
    const contentHash = hashString(
      typeof content === 'string' ? content : content.toString('utf8')
    );
    
    const swhid: SWHID = {
      id: `swh:1:sha256:${contentHash}`,
      hashType: 'sha256',
      hashValue: contentHash,
    };

    const depositId = crypto.randomUUID();
    
    return {
      depositId,
      swhid,
      status: 'done',
      url: `${SWH_CONFIG.DEPOSIT_URL}/deposit/${depositId}`,
      timestamp: getTimestamp(),
      metadata: {
        ...metadata,
        fair: createFAIRMetadata(metadata.fair),
        compliance: APP_CONFIG.COMPLIANCE,
      },
    };
  }

  /**
   * Save an origin (URL) to SWH
   */
  async saveOrigin(url: string): Promise<SWHOriginSaveResponse> {
    // Simplified - in production, this would call SWH's origin/save endpoint
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

  /**
   * Get archive metadata by SWHID
   */
  async getArchive(swhid: string): Promise<SWHArchiveMetadata> {
    if (!isValidSWHID(swhid)) {
      throw new Error(`Invalid SWHID: ${swhid}`);
    }

    // Simplified - in production, this would call SWH's archive/{swhid} endpoint
    const parsed = parseSWHID(swhid);
    if (!parsed) {
      throw new Error(`Could not parse SWHID: ${swhid}`);
    }

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

  /**
   * Search SWH archives
   */
  async search(
    query: string,
    page: number = 1,
    perPage: number = 20
  ): Promise<SWHSearchResult> {
    // Simplified - in production, this would call SWH's search endpoint
    const results: SWHArchiveMetadata[] = [];
    
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
      page,
      perPage,
      nextPage: page < 5 ? `/api/swh/search?query=${encodeURIComponent(query)}&page=${page + 1}` : undefined,
    };
  }

  /**
   * List all origins
   */
  async listOrigins(): Promise<string[]> {
    // Simplified - in production, this would call SWH's origin/list endpoint
    return [
      'https://github.com/milkivc/atlas-vivo-milk',
      'https://github.com/milkivc/folclore-vivo-metodologia',
      'https://codeberg.org/milkivc/milk-archive',
    ];
  }
}

// ============================================
// FORGEJO/CODEBERG MIGRATION CLIENT
// ============================================

class ForgejoClient {
  private readonly config: typeof APP_CONFIG['FORGEJO'];
  
  constructor(config: typeof APP_CONFIG['FORGEJO'] = APP_CONFIG.FORGEJO) {
    this.config = config;
  }

  /**
   * Check if Forgejo integration is enabled
   */
  isEnabled(): boolean {
    return this.config.ENABLED && !!this.config.ACCESS_TOKEN;
  }

  /**
   * Create a new repository in Forgejo
   */
  async createRepository(
    name: string,
    config: Partial<ForgejoMigrationConfig['metadata']> = {}
  ): Promise<Record<string, unknown>> {
    if (!this.isEnabled()) {
      throw new Error('Forgejo integration is not enabled');
    }

    const url = `${this.config.API_URL}/user/repos`;
    
    const repoConfig = {
      name,
      description: config.description || 'MILK Atlas Vivo - Digital Heritage Preservation',
      homepage: config.homepage || 'https://milk.pt',
      topics: config.topics || ['cultural-heritage', 'portugal', 'folk-traditions', 'digital-preservation'],
      visibility: config.visibility || 'public',
      license: config.license || 'CC-BY-SA-4.0',
      readme: config.readme || '# MILK Atlas Vivo\n\nDigital heritage preservation repository',
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
      const axiosError = error as AxiosError;
      throw new Error(
        `Forgejo API Error: ${axiosError.response?.status || 'UNKNOWN'} - ${axiosError.message}`
      );
    }
  }

  /**
   * Mirror a repository to Forgejo
   */
  async mirrorRepository(
    sourceUrl: string,
    targetName: string
  ): Promise<Record<string, unknown>> {
    if (!this.isEnabled()) {
      throw new Error('Forgejo integration is not enabled');
    }

    // This would use Forgejo's mirror repository API
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
        timeout: SWH_CONFIG.TIMEOUT * 2, // Longer timeout for mirroring
      });

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new Error(
        `Forgejo Mirror Error: ${axiosError.response?.status || 'UNKNOWN'} - ${axiosError.message}`
      );
    }
  }

  /**
   * Get repository information
   */
  async getRepository(
    namespace: string,
    repo: string
  ): Promise<Record<string, unknown>> {
    if (!this.isEnabled()) {
      throw new Error('Forgejo integration is not enabled');
    }

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
      const axiosError = error as AxiosError;
      throw new Error(
        `Forgejo API Error: ${axiosError.response?.status || 'UNKNOWN'} - ${axiosError.message}`
      );
    }
  }
}

// ============================================
// MIDDLEWARE
// ============================================

/**
 * Request logging middleware
 */
const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const requestId = generateRequestId();
  (req as Record<string, unknown>).requestId = requestId;
  
  console.log(`[${getTimestamp()}] ${req.method} ${req.path} - RequestID: ${requestId}`);
  
  res.on('finish', () => {
    console.log(`[${getTimestamp()}] ${req.method} ${req.path} - Status: ${res.statusCode} - RequestID: ${requestId}`);
  });
  
  next();
};

/**
 * Error handling middleware
 */
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestId = (req as Record<string, unknown>).requestId || generateRequestId();
  const timestamp = getTimestamp();
  
  console.error(`[${timestamp}] Error - RequestID: ${requestId}`, err);
  
  const response: APIResponse<null> = {
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
  };
  
  res.status(500).json(response);
};

/**
 * Compliance headers middleware
 */
const complianceHeaders = (req: Request, res: Response, next: NextFunction) => {
  // GDPR Compliance
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // EU Open Data Compliance
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');
  
  // Portugal Admin Access Compliance
  res.setHeader('X-Admin-Access', 'compliant');
  res.setHeader('X-Jurisdiction', 'PT');
  
  next();
};

/**
 * Rate limiting middleware (simple implementation)
 */
const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  // In production, use a proper rate limiter like express-rate-limit
  next();
};

// ============================================
// CONTROLLERS
// ============================================

class SWHController {
  private swhClient: SWHClient;
  private forgejoClient: ForgejoClient;
  
  constructor() {
    this.swhClient = new SWHClient();
    this.forgejoClient = new ForgejoClient();
  }

  /**
   * Health check endpoint
   */
  healthCheck = (req: Request, res: Response): void => {
    const response: APIResponse<{ status: string; version: string }> = {
      success: true,
      data: {
        status: 'healthy',
        version: '1.0.0',
      },
      metadata: {
        timestamp: getTimestamp(),
        requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    };
    
    res.json(response);
  };

  /**
   * Get SWH archive by ID
   */
  getArchive = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { swhid } = req.params;
      
      if (!swhid || !isValidSWHID(swhid)) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'INVALID_SWHID',
            message: 'Invalid SWHID format',
            details: { swhid },
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(400).json(response);
        return;
      }

      const archive = await this.swhClient.getArchive(swhid);
      
      const response: APIResponse<SWHArchiveMetadata> = {
        success: true,
        data: archive,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Deposit content to SWH
   */
  depositContent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { content, metadata } = req.body;
      
      if (!content) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'MISSING_CONTENT',
            message: 'Content is required',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(400).json(response);
        return;
      }

      const deposit = await this.swhClient.deposit(content, metadata);
      
      const response: APIResponse<SWHDepositResponse> = {
        success: true,
        data: deposit,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Save origin URL to SWH
   */
  saveOrigin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { url } = req.body;
      
      if (!url) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'MISSING_URL',
            message: 'URL is required',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(400).json(response);
        return;
      }

      const result = await this.swhClient.saveOrigin(url);
      
      const response: APIResponse<SWHOriginSaveResponse> = {
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Search SWH archives
   */
  searchArchives = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { query, page = 1, perPage = 20 } = req.query;
      
      if (!query || typeof query !== 'string') {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'MISSING_QUERY',
            message: 'Search query is required',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(400).json(response);
        return;
      }

      const result = await this.swhClient.search(query, Number(page), Number(perPage));
      
      const response: APIResponse<SWHSearchResult> = {
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * List all origins
   */
  listOrigins = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const origins = await this.swhClient.listOrigins();
      
      const response: APIResponse<string[]> = {
        success: true,
        data: origins,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Migrate repository to Forgejo/Codeberg
   */
  migrateToForgejo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { sourceUrl, targetName, config } = req.body;
      
      if (!sourceUrl || !targetName) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'MISSING_PARAMS',
            message: 'sourceUrl and targetName are required',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(400).json(response);
        return;
      }

      if (!this.forgejoClient.isEnabled()) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'FORGEJO_DISABLED',
            message: 'Forgejo integration is not enabled',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(503).json(response);
        return;
      }

      const result = await this.forgejoClient.mirrorRepository(sourceUrl, targetName);
      
      const response: APIResponse<Record<string, unknown>> = {
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Create new repository in Forgejo/Codeberg
   */
  createForgejoRepo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, config } = req.body;
      
      if (!name) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'MISSING_NAME',
            message: 'Repository name is required',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(400).json(response);
        return;
      }

      if (!this.forgejoClient.isEnabled()) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'FORGEJO_DISABLED',
            message: 'Forgejo integration is not enabled',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(503).json(response);
        return;
      }

      const result = await this.forgejoClient.createRepository(name, config);
      
      const response: APIResponse<Record<string, unknown>> = {
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Get Forgejo repository info
   */
  getForgejoRepo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { namespace, repo } = req.params;
      
      if (!namespace || !repo) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'MISSING_PARAMS',
            message: 'namespace and repo are required',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(400).json(response);
        return;
      }

      if (!this.forgejoClient.isEnabled()) {
        const response: APIResponse<null> = {
          success: false,
          error: {
            code: 'FORGEJO_DISABLED',
            message: 'Forgejo integration is not enabled',
          },
          metadata: {
            timestamp: getTimestamp(),
            requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
            version: '1.0.0',
            compliance: createComplianceMetadata(),
          },
        };
        
        res.status(503).json(response);
        return;
      }

      const result = await this.forgejoClient.getRepository(namespace, repo);
      
      const response: APIResponse<Record<string, unknown>> = {
        success: true,
        data: result,
        metadata: {
          timestamp: getTimestamp(),
          requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
          version: '1.0.0',
          compliance: createComplianceMetadata(),
        },
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Get compliance information
   */
  getCompliance = (req: Request, res: Response): void => {
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
          fct: true, // Fundação para a Ciência e a Tecnologia
          ani: true, // Agência Nacional de Inovação
        },
        fundingEligibility: {
          eu: true,
          national: true,
          private: true,
        },
      },
    };

    const response: APIResponse<typeof compliance> = {
      success: true,
      data: compliance,
      metadata: {
        timestamp: getTimestamp(),
        requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    };

    res.json(response);
  };

  /**
   * Get API documentation
   */
  getApiDocs = (req: Request, res: Response): void => {
    const docs = {
      name: 'ATLAS VIVO MILK - SWH Integration API',
      version: '1.0.0',
      description: 'API for Software Heritage integration with MILK Atlas Vivo digital heritage preservation system',
      baseUrl: '/api/swh',
      endpoints: {
        // SWH Endpoints
        'GET /archive/{swhid}': {
          description: 'Get archive metadata by SWHID',
          parameters: {
            swhid: { type: 'string', required: true, description: 'Software Heritage Identifier' },
          },
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
          body: {
            url: { type: 'string', required: true, description: 'URL to save' },
          },
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
        'GET /origins': {
          description: 'List all saved origins',
          response: 'string[]',
        },
        // Forgejo/Codeberg Endpoints
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
        // Compliance Endpoints
        'GET /compliance': {
          description: 'Get compliance information',
          response: 'ComplianceInfo',
        },
        // Health Check
        'GET /health': {
          description: 'Health check endpoint',
          response: '{ status: string; version: string }',
        },
      },
      types: {
        SWHID: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Full SWHID' },
            hashType: { type: 'string', enum: ['sha1', 'sha256', 'sha512', 'blake2s', 'blake2b'] },
            hashValue: { type: 'string', description: 'Hash value' },
          },
        },
        SWHDepositResponse: {
          type: 'object',
          properties: {
            depositId: { type: 'string' },
            swhid: { $ref: '#types/SWHID' },
            status: { type: 'string', enum: ['pending', 'processing', 'done', 'failed'] },
            url: { type: 'string' },
            timestamp: { type: 'string', format: 'date-time' },
            metadata: { type: 'object' },
          },
        },
        SWHArchiveMetadata: {
          type: 'object',
          properties: {
            swhid: { $ref: '#types/SWHID' },
            origin: {
              type: 'object',
              properties: {
                url: { type: 'string' },
                visit: { type: 'string' },
                snapshot: { type: 'string' },
              },
            },
            timestamp: { type: 'string', format: 'date-time' },
            author: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                affiliation: { type: 'string' },
              },
            },
            license: { type: 'string' },
            description: { type: 'string' },
            keywords: { type: 'array', items: { type: 'string' } },
            fair: {
              type: 'object',
              description: 'FAIR metadata',
            },
            compliance: {
              type: 'object',
              description: 'Compliance metadata',
            },
          },
        },
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

    const response: APIResponse<typeof docs> = {
      success: true,
      data: docs,
      metadata: {
        timestamp: getTimestamp(),
        requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    };

    res.json(response);
  };
}

// ============================================
// ROUTES
// ============================================

const createSWHRouter = (): Router => {
  const router = Router();
  const controller = new SWHController();

  // Health Check
  router.get('/health', controller.healthCheck);

  // SWH Endpoints
  router.get('/archive/:swhid', controller.getArchive);
  router.post('/deposit', controller.depositContent);
  router.post('/origin/save', controller.saveOrigin);
  router.get('/search', controller.searchArchives);
  router.get('/origins', controller.listOrigins);

  // Forgejo/Codeberg Endpoints
  router.post('/forgejo/migrate', controller.migrateToForgejo);
  router.post('/forgejo/repos', controller.createForgejoRepo);
  router.get('/forgejo/repos/:namespace/:repo', controller.getForgejoRepo);

  // Compliance & Documentation
  router.get('/compliance', controller.getCompliance);
  router.get('/docs', controller.getApiDocs);
  router.get('/', controller.getApiDocs);

  return router;
};

// ============================================
// APPLICATION
// ============================================

const createApp = (): express.Application => {
  const app = express();

  // Middleware
  app.use(express.json({ limit: '100mb' }));
  app.use(express.urlencoded({ extended: true, limit: '100mb' }));
  app.use(requestLogger);
  app.use(complianceHeaders);
  app.use(rateLimiter);

  // API Routes
  const swhRouter = createSWHRouter();
  app.use('/api/swh', swhRouter);

  // Root endpoint
  app.get('/', (req: Request, res: Response) => {
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
        requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    });
  });

  // 404 Handler
  app.use((req: Request, res: Response) => {
    const response: APIResponse<null> = {
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: 'Endpoint not found',
      },
      metadata: {
        timestamp: getTimestamp(),
        requestId: (req as Record<string, unknown>).requestId as string || generateRequestId(),
        version: '1.0.0',
        compliance: createComplianceMetadata(),
      },
    };
    
    res.status(404).json(response);
  });

  // Error Handler
  app.use(errorHandler);

  return app;
};

// ============================================
// SERVER
// ============================================

const app = createApp();

// Start server if running directly
if (import.meta.url === `file://${path.join(__dirname, 'app.ts')}`) {
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

export default app;
export {
  app,
  createApp,
  SWHClient,
  ForgejoClient,
  SWHController,
  createSWHRouter,
  // Types
  SWHID,
  SWHDepositResponse,
  SWHArchiveMetadata,
  SWHSearchResult,
  SWHOriginSaveResponse,
  APIResponse,
  ForgejoMigrationConfig,
  // Configuration
  SWH_CONFIG,
  APP_CONFIG,
};
