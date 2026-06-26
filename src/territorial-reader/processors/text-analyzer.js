/**
 * @file text-analyzer.js
 * @description Analisador de Texto com NLP para detecção de necessidades, reclamações e falhas.
 * @author Associação MILK - Sistema Auto-Validante Territorial
 * @version 1.0.0
 * @license MIT
 * @namespace TerritorialReader.Processors
 */

const natural = require('natural');
const { v4: uuidv4 } = require('uuid');
const stopword = require('stopword');
const Stemmer = natural.PorterStemmer;
const tokenizer = new natural.WordTokenizer();

/**
 * @class TextAnalyzer
 * @description Analisador de texto com NLP para extrair insights de documentos.
 * @implements {SelfHealing, AutoReflexive, Traceable}
 */
class TextAnalyzer {
  constructor() {
    this.logger = this._initLogger();
    this.selfHealing = this._initSelfHealing();
    this.keywords = this._initKeywords();
    this.stopWords = new Set(stopword.pt);
    this.stemmer = Stemmer;
  }

  /**
   * @method _initLogger
   * @description Inicializa o sistema de logging com rastreabilidade.
   * @returns {Object} Logger configurado.
   */
  _initLogger() {
    return {
      info: (message, metadata = {}) => {
        const logEntry = {
          timestamp: new Date().toISOString(),
          level: 'INFO',
          message,
          component: 'TextAnalyzer',
          traceId: uuidv4(),
          ...metadata,
        };
        console.log(JSON.stringify(logEntry));
        return logEntry;
      },
      error: (message, metadata = {}) => {
        const logEntry = {
          timestamp: new Date().toISOString(),
          level: 'ERROR',
          message,
          component: 'TextAnalyzer',
          traceId: uuidv4(),
          ...metadata,
        };
        console.error(JSON.stringify(logEntry));
        return logEntry;
      },
    };
  }

  /**
   * @method _initSelfHealing
   * @description Inicializa o mecanismo de auto-correção.
   * @returns {Object} Módulo de auto-correção.
   */
  _initSelfHealing() {
    return {
      retry: async (fn, context, retries = 3) => {
        let lastError;
        for (let i = 0; i < retries; i++) {
          try {
            return await fn();
          } catch (error) {
            lastError = error;
            this.logger.error(`Attempt ${i + 1} failed`, {
              error: error.message,
              context,
            });
            await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
          }
        }
        throw new Error(`Max retries (${retries}) exceeded. Last error: ${lastError.message}`);
      },
      fallback: (primaryFn, fallbackFn) => {
        return async (...args) => {
          try {
            return await primaryFn(...args);
          } catch (error) {
            this.logger.error('Primary function failed, using fallback', {
              error: error.message,
            });
            return fallbackFn(...args);
          }
        };
      },
    };
  }

  /**
   * @method _initKeywords
   * @description Inicializa listas de palavras-chave para detecção.
   * @returns {Object} Palavras-chave organizadas por categoria.
   */
  _initKeywords() {
    return {
      needs: [
        'necessidade', 'necessário', 'precisa', 'preciso', 'falta', 'faltam',
        'carência', 'carências', 'problema', 'problemas', 'dificuldade',
        'dificuldades', 'urgente', 'prioridade', 'prioritário', 'melhorar',
        'reparar', 'construir', 'implementar', 'criar', 'desenvolver',
        'aquisição', 'contratação', 'recursos', 'orçamento', 'verba',
        'financiamento', 'subvenção', 'apoio', 'investimento',
      ],
      complaints: [
        'reclamação', 'reclamações', 'queixa', 'queixas', 'denúncia',
        'denúncias', 'protesto', 'protestos', 'insatisfação', 'insatisfeito',
        'reclamar', 'queixar', 'denunciar', 'protestar', 'ruim', 'mau',
        'péssimo', 'horrível', 'inaceitável', 'lento', 'demorado',
        'ineficiente', 'desorganizado', 'falha', 'falhas', 'erro',
      ],
      infrastructure: [
        'estrada', 'rua', 'avenida', 'calçada', 'pavimento', 'iluminação',
        'saneamento', 'água', 'esgoto', 'eletricidade', 'gás', 'telecomunicações',
        'transporte', 'autocarro', 'metro', 'comboio', 'barco', 'porto',
        'aeroporto', 'ponte', 'túnel', 'passagem', 'sinalização',
        'semáforo', 'parque', 'jardim', 'espaço público',
      ],
      social: [
        'saúde', 'hospital', 'centro de saúde', 'médico', 'enfermeiro',
        'educação', 'escola', 'creche', 'jardim de infância', 'universidade',
        'cultura', 'biblioteca', 'museu', 'teatro', 'cinema', 'evento',
        'desporto', 'piscina', 'ginásio', 'campo', 'pavilhão',
        'habitação', 'casa', 'apartamento', 'alojamento', 'renda',
        'emprego', 'trabalho', 'desemprego', 'formação', 'qualificação',
      ],
      security: [
        'segurança', 'polícia', 'GNR', 'PSP', 'vigilância', 'câmera',
        'roubo', 'furto', 'assalto', 'violência', 'vandalismo',
        'incêndio', 'bombeiros', 'emergência', 'socorro', 'primeiros socorros',
        'prevenção', 'proteção', 'risco', 'perigo', 'ameaça',
      ],
      environment: [
        'ambiente', 'natureza', 'floresta', 'árvore', 'planta', 'jardim',
        'poluição', 'lixo', 'resíduos', 'reciclagem', 'sustentabilidade',
        'água', 'rio', 'mar', 'praia', 'clima', 'tempo',
        'animais', 'fauna', 'flora', 'biodiversidade',
      ],
      economic: [
        'economia', 'negócio', 'empresa', 'comércio', 'indústria',
        'turismo', 'hotel', 'restaurante', 'loja', 'mercado',
        'investimento', 'desenvolvimento', 'crescimento', 'empreendedorismo',
        'subsídio', 'incentivo', 'financiamento', 'crédito',
      ],
    };
  }

  /**
   * @method _generateHash
   * @description Gera hash SHA-256 para rastreabilidade de dados.
   * @param {string} data - Dados para gerar hash.
   * @returns {string} Hash SHA-256.
   */
  _generateHash(data) {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  /**
   * @method preprocessText
   * @description Pré-processa o texto (tokenização, remoção de stopwords, stemming).
   * @param {string} text - Texto a ser processado.
   * @returns {Array} Tokens processados.
   */
  preprocessText(text) {
    if (!text) return [];
    
    // Tokenização
    const tokens = tokenizer.tokenize(text.toLowerCase());
    
    // Remoção de stopwords
    const filteredTokens = tokens.filter((token) => !this.stopWords.has(token));
    
    // Stemming
    const stemmedTokens = filteredTokens.map((token) => this.stemmer.stem(token));
    
    return stemmedTokens;
  }

  /**
   * @method extractKeywords
   * @description Extrai palavras-chave de um texto.
   * @param {string} text - Texto a ser analisado.
   * @param {Array} keywordList - Lista de palavras-chave para procurar.
   * @returns {Array} Palavras-chave encontradas.
   */
  extractKeywords(text, keywordList) {
    const tokens = this.preprocessText(text);
    const foundKeywords = new Set();
    
    for (const keyword of keywordList) {
      const stemmedKeyword = this.stemmer.stem(keyword.toLowerCase());
      if (tokens.includes(stemmedKeyword)) {
        foundKeywords.add(keyword);
      }
    }
    
    return Array.from(foundKeywords);
  }

  /**
   * @method detectNeeds
   * @description Deteta necessidades em um texto.
   * @param {string} text - Texto a ser analisado.
   * @returns {Object} Necessidades detectadas.
   */
  detectNeeds(text) {
    const needsKeywords = this.extractKeywords(text, this.keywords.needs);
    const infrastructureKeywords = this.extractKeywords(text, this.keywords.infrastructure);
    const socialKeywords = this.extractKeywords(text, this.keywords.social);
    const economicKeywords = this.extractKeywords(text, this.keywords.economic);
    const environmentKeywords = this.extractKeywords(text, this.keywords.environment);

    const needs = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      general: needsKeywords,
      infrastructure: infrastructureKeywords,
      social: socialKeywords,
      economic: economicKeywords,
      environment: environmentKeywords,
      all: [...new Set([...needsKeywords, ...infrastructureKeywords, ...socialKeywords, ...economicKeywords, ...environmentKeywords])],
    };

    this.logger.info('Needs detected', { needs });
    return needs;
  }

  /**
   * @method detectComplaints
   * @description Deteta reclamações em um texto.
   * @param {string} text - Texto a ser analisado.
   * @returns {Object} Reclamações detectadas.
   */
  detectComplaints(text) {
    const complaintsKeywords = this.extractKeywords(text, this.keywords.complaints);
    const infrastructureKeywords = this.extractKeywords(text, this.keywords.infrastructure);
    const securityKeywords = this.extractKeywords(text, this.keywords.security);

    const complaints = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      general: complaintsKeywords,
      infrastructure: infrastructureKeywords,
      security: securityKeywords,
      all: [...new Set([...complaintsKeywords, ...infrastructureKeywords, ...securityKeywords])],
    };

    this.logger.info('Complaints detected', { complaints });
    return complaints;
  }

  /**
   * @method detectFailures
   * @description Deteta falhas em um texto.
   * @param {string} text - Texto a ser analisado.
   * @returns {Object} Falhas detectadas.
   */
  detectFailures(text) {
    const failureKeywords = [
      ...this.keywords.complaints,
      ...this.keywords.needs,
      'falha', 'falhas', 'erro', 'erros', 'problema', 'problemas',
      'avaria', 'avarias', 'deficiência', 'deficiências', 'ineficácia',
      'ineficiência', 'desfuncionamento', 'quebra', 'dano', 'prejuízo',
    ];
    const detectedKeywords = this.extractKeywords(text, failureKeywords);

    const failures = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      keywords: detectedKeywords,
      count: detectedKeywords.length,
    };

    this.logger.info('Failures detected', { failures });
    return failures;
  }

  /**
   * @method analyzeSentiment
   * @description Analisa o sentimento de um texto (positivo, negativo, neutro).
   * @param {string} text - Texto a ser analisado.
   * @returns {Object} Análise de sentimento.
   */
  analyzeSentiment(text) {
    const positiveWords = ['bom', 'bom', 'excelente', 'ótimo', 'maravilhoso', 'perfeito', 'satisfatório', 'positivo'];
    const negativeWords = ['mau', 'péssimo', 'horrível', 'ruim', 'negativo', 'insatisfatório', 'problema', 'falha', 'erro'];

    const tokens = this.preprocessText(text);
    let positiveCount = 0;
    let negativeCount = 0;

    for (const token of tokens) {
      if (positiveWords.includes(token)) positiveCount++;
      if (negativeWords.includes(token)) negativeCount++;
    }

    const total = positiveCount + negativeCount;
    const score = total > 0 ? (positiveCount - negativeCount) / total : 0;

    let sentiment;
    if (score > 0.1) sentiment = 'positive';
    else if (score < -0.1) sentiment = 'negative';
    else sentiment = 'neutral';

    const sentimentAnalysis = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      score,
      sentiment,
      positiveCount,
      negativeCount,
    };

    this.logger.info('Sentiment analyzed', { sentimentAnalysis });
    return sentimentAnalysis;
  }

  /**
   * @method extractEntities
   * @description Extrai entidades (pessoas, locais, organizações) de um texto.
   * @param {string} text - Texto a ser analisado.
   * @returns {Object} Entidades extraídas.
   */
  extractEntities(text) {
    // Usar expressões regulares para extrair entidades
    const personRegex = /([A-Z][a-z]+\s+[A-Z][a-z]+)/g; // Nomes próprios
    const locationRegex = /(Rua\s+[A-Za-z]+|Avenida\s+[A-Za-z]+|Largo\s+[A-Za-z]+|Praça\s+[A-Za-z]+|[A-Z][a-z]+\s+de\s+[A-Z][a-z]+)/g; // Locais
    const orgRegex = /(Câmara\s+Municipal|Associação|Paróquia|Escola|Hospital|[A-Z][a-z]+\s+S\.A\.)/g; // Organizações

    const persons = text.match(personRegex) || [];
    const locations = text.match(locationRegex) || [];
    const organizations = text.match(orgRegex) || [];

    const entities = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      persons: [...new Set(persons)].map((p) => this._sanitizeText(p)),
      locations: [...new Set(locations)].map((l) => this._sanitizeText(l)),
      organizations: [...new Set(organizations)].map((o) => this._sanitizeText(o)),
    };

    this.logger.info('Entities extracted', { entities });
    return entities;
  }

  /**
   * @method _sanitizeText
   * @description Limpa e normaliza texto.
   * @param {string} text - Texto a ser sanitizado.
   * @returns {string} Texto sanitizado.
   */
  _sanitizeText(text) {
    if (!text) return '';
    return text
      .replace(/\s+/g, ' ')
      .replace(/\n/g, ' ')
      .trim();
  }

  /**
   * @method analyzeText
   * @description Analisa um texto de forma abrangente.
   * @param {string} text - Texto a ser analisado.
   * @returns {Object} Análise completa do texto.
   */
  analyzeText(text) {
    const analysis = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      originalText: text,
      needs: this.detectNeeds(text),
      complaints: this.detectComplaints(text),
      failures: this.detectFailures(text),
      sentiment: this.analyzeSentiment(text),
      entities: this.extractEntities(text),
    };

    this.logger.info('Text analyzed comprehensively', { analysis });
    return analysis;
  }

  /**
   * @method analyzeBatch
   * @description Analisa um lote de textos.
   * @param {Array<string>} texts - Lista de textos a serem analisados.
   * @returns {Promise<Array>} Lista de análises.
   */
  async analyzeBatch(texts) {
    const results = [];
    for (const text of texts) {
      try {
        const analysis = this.analyzeText(text);
        results.push(analysis);
      } catch (error) {
        this.logger.error('Failed to analyze text', { error: error.message });
      }
    }
    return results;
  }
}

module.exports = TextAnalyzer;
