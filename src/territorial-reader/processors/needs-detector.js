/**
 * @file needs-detector.js
 * @description Detetor de Necessidades com IA para análise de dados territoriais.
 * @author Associação MILK - Sistema Auto-Validante Territorial
 * @version 1.0.0
 * @license MIT
 * @namespace TerritorialReader.Processors
 */

const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

/**
 * @class NeedsDetector
 * @description Detetor de necessidades com base em dados de Atas, Reclamações e Análises.
 * @implements {SelfHealing, AutoReflexive, Traceable}
 */
class NeedsDetector {
  constructor() {
    this.logger = this._initLogger();
    this.selfHealing = this._initSelfHealing();
    this.priorityWeights = this._initPriorityWeights();
    this.categoryMappings = this._initCategoryMappings();
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
          component: 'NeedsDetector',
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
          component: 'NeedsDetector',
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
   * @method _initPriorityWeights
   * @description Inicializa pesos de prioridade para categorias de necessidades.
   * @returns {Object} Pesos de prioridade.
   */
  _initPriorityWeights() {
    return {
      // Prioridade 5 (Crítica)
      critical: {
        weight: 5,
        categories: ['segurança pública', 'saúde pública', 'emergência', 'risco de vida'],
      },
      // Prioridade 4 (Alta)
      high: {
        weight: 4,
        categories: ['infraestrutura crítica', 'água', 'eletricidade', 'saneamento', 'transporte público'],
      },
      // Prioridade 3 (Média)
      medium: {
        weight: 3,
        categories: ['educação', 'cultura', 'desporto', 'habitação', 'emprego'],
      },
      // Prioridade 2 (Baixa)
      low: {
        weight: 2,
        categories: ['limpeza urbana', 'jardins', 'parques', 'iluminação decorativa'],
      },
      // Prioridade 1 (Mínima)
      minimal: {
        weight: 1,
        categories: ['melhorias estéticas', 'eventos pontuais'],
      },
    };
  }

  /**
   * @method _initCategoryMappings
   * @description Inicializa mapeamento de palavras-chave para categorias.
   * @returns {Object} Mapeamento de categorias.
   */
  _initCategoryMappings() {
    return {
      // Segurança
      security: {
        keywords: ['segurança', 'polícia', 'GNR', 'PSP', 'vigilância', 'roubo', 'furto', 'assalto', 'violência', 'vandalismo'],
        category: 'Segurança Pública',
        priority: 'critical',
      },
      // Saúde
      health: {
        keywords: ['saúde', 'hospital', 'centro de saúde', 'médico', 'enfermeiro', 'pandemia', 'vacinação'],
        category: 'Saúde Pública',
        priority: 'critical',
      },
      // Infraestrutura
      infrastructure: {
        keywords: ['estrada', 'rua', 'avenida', 'pavimento', 'iluminação', 'saneamento', 'água', 'esgoto'],
        category: 'Infraestrutura',
        priority: 'high',
      },
      // Transporte
      transport: {
        keywords: ['transporte', 'autocarro', 'metro', 'comboio', 'barco', 'aeroporto', 'ponte', 'túnel'],
        category: 'Transporte Público',
        priority: 'high',
      },
      // Educação
      education: {
        keywords: ['educação', 'escola', 'creche', 'jardim de infância', 'universidade', 'formação'],
        category: 'Educação',
        priority: 'medium',
      },
      // Cultura
      culture: {
        keywords: ['cultura', 'biblioteca', 'museu', 'teatro', 'cinema', 'evento', 'património'],
        category: 'Cultura',
        priority: 'medium',
      },
      // Desporto
      sports: {
        keywords: ['desporto', 'piscina', 'ginásio', 'campo', 'pavilhão', 'clube'],
        category: 'Desporto',
        priority: 'medium',
      },
      // Habitação
      housing: {
        keywords: ['habitação', 'casa', 'apartamento', 'alojamento', 'renda', 'arrendamento'],
        category: 'Habitação',
        priority: 'medium',
      },
      // Emprego
      employment: {
        keywords: ['emprego', 'trabalho', 'desemprego', 'formação', 'qualificação', 'profissional'],
        category: 'Emprego',
        priority: 'medium',
      },
      // Ambiente
      environment: {
        keywords: ['ambiente', 'natureza', 'floresta', 'poluição', 'lixo', 'resíduos', 'reciclagem'],
        category: 'Ambiente',
        priority: 'medium',
      },
      // Economia
      economy: {
        keywords: ['economia', 'negócio', 'empresa', 'comércio', 'turismo', 'investimento'],
        category: 'Economia',
        priority: 'medium',
      },
      // Limpeza Urbana
      cleaning: {
        keywords: ['limpeza', 'lixo', 'resíduos', 'varrição', 'higiene', 'saneamento'],
        category: 'Limpeza Urbana',
        priority: 'low',
      },
      // Jardins e Parques
      parks: {
        keywords: ['jardim', 'parque', 'espaço verde', 'árvore', 'planta', 'floresta'],
        category: 'Jardins e Parques',
        priority: 'low',
      },
    };
  }

  /**
   * @method _generateHash
   * @description Gera hash SHA-256 para rastreabilidade de dados.
   * @param {string} data - Dados para gerar hash.
   * @returns {string} Hash SHA-256.
   */
  _generateHash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
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
   * @method categorizeNeed
   * @description Categoriza uma necessidade com base em palavras-chave.
   * @param {string} text - Texto da necessidade.
   * @returns {Object} Categoria e prioridade.
   */
  categorizeNeed(text) {
    const lowerText = text.toLowerCase();
    
    for (const [categoryKey, categoryData] of Object.entries(this.categoryMappings)) {
      for (const keyword of categoryData.keywords) {
        if (lowerText.includes(keyword)) {
          return {
            category: categoryData.category,
            priority: categoryData.priority,
            weight: this.priorityWeights[categoryData.priority].weight,
          };
        }
      }
    }

    // Categoria padrão
    return {
      category: 'Outros',
      priority: 'low',
      weight: 1,
    };
  }

  /**
   * @method detectNeedsFromText
   * @description Deteta necessidades em um texto.
   * @param {string} text - Texto a ser analisado.
   * @returns {Object} Necessidades detectadas.
   */
  detectNeedsFromText(text) {
    const needs = {
      id: uuidv4(),
      source: 'text',
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      originalText: text,
      needs: [],
      categories: new Set(),
      priorities: new Set(),
    };

    // Dividir o texto em frases
    const sentences = text.split(/[.!?]+/);

    for (const sentence of sentences) {
      const trimmedSentence = this._sanitizeText(sentence);
      if (!trimmedSentence) continue;

      // Verificar se a frase contém palavras-chave de necessidades
      const needKeywords = ['necessidade', 'precisa', 'falta', 'carência', 'problema', 'dificuldade', 'urgente'];
      const hasNeed = needKeywords.some((keyword) => trimmedSentence.toLowerCase().includes(keyword));

      if (hasNeed) {
        const categorized = this.categorizeNeed(trimmedSentence);
        needs.needs.push({
          id: uuidv4(),
          text: trimmedSentence,
          category: categorized.category,
          priority: categorized.priority,
          weight: categorized.weight,
        });
        needs.categories.add(categorized.category);
        needs.priorities.add(categorized.priority);
      }
    }

    needs.categories = Array.from(needs.categories);
    needs.priorities = Array.from(needs.priorities);
    needs.count = needs.needs.length;

    this.logger.info('Needs detected from text', { needs });
    return needs;
  }

  /**
   * @method detectNeedsFromAtas
   * @description Deteta necessidades a partir de Atas.
   * @param {Array<Object>} atas - Lista de Atas.
   * @returns {Object} Necessidades detectadas.
   */
  detectNeedsFromAtas(atas) {
    const allNeeds = {
      id: uuidv4(),
      source: 'atas',
      timestamp: new Date().toISOString(),
      hash: this._generateHash(JSON.stringify(atas)),
      atasCount: atas.length,
      needs: [],
      categories: new Set(),
      priorities: new Set(),
    };

    for (const ata of atas) {
      // Analisar título
      const titleNeeds = this.detectNeedsFromText(ata.title);
      allNeeds.needs.push(...titleNeeds.needs);
      titleNeeds.categories.forEach((c) => allNeeds.categories.add(c));
      titleNeeds.priorities.forEach((p) => allNeeds.priorities.add(p));

      // Analisar decisões
      if (ata.decisions && ata.decisions.length > 0) {
        const decisionsText = ata.decisions.join(' ');
        const decisionsNeeds = this.detectNeedsFromText(decisionsText);
        allNeeds.needs.push(...decisionsNeeds.needs);
        decisionsNeeds.categories.forEach((c) => allNeeds.categories.add(c));
        decisionsNeeds.priorities.forEach((p) => allNeeds.priorities.add(p));
      }

      // Analisar itens de ação
      if (ata.actionItems && ata.actionItems.length > 0) {
        const actionItemsText = ata.actionItems.join(' ');
        const actionItemsNeeds = this.detectNeedsFromText(actionItemsText);
        allNeeds.needs.push(...actionItemsNeeds.needs);
        actionItemsNeeds.categories.forEach((c) => allNeeds.categories.add(c));
        actionItemsNeeds.priorities.forEach((p) => allNeeds.priorities.add(p));
      }

      // Analisar necessidades explícitas
      if (ata.needs && ata.needs.length > 0) {
        for (const need of ata.needs) {
          const categorized = this.categorizeNeed(need);
          allNeeds.needs.push({
            id: uuidv4(),
            text: need,
            category: categorized.category,
            priority: categorized.priority,
            weight: categorized.weight,
            sourceAta: ata.title,
          });
          allNeeds.categories.add(categorized.category);
          allNeeds.priorities.add(categorized.priority);
        }
      }
    }

    allNeeds.categories = Array.from(allNeeds.categories);
    allNeeds.priorities = Array.from(allNeeds.priorities);
    allNeeds.count = allNeeds.needs.length;

    this.logger.info('Needs detected from atas', { allNeeds });
    return allNeeds;
  }

  /**
   * @method detectNeedsFromComplaints
   * @description Deteta necessidades a partir de Reclamações.
   * @param {Array<Object>} complaints - Lista de Reclamações.
   * @returns {Object} Necessidades detectadas.
   */
  detectNeedsFromComplaints(complaints) {
    const allNeeds = {
      id: uuidv4(),
      source: 'complaints',
      timestamp: new Date().toISOString(),
      hash: this._generateHash(JSON.stringify(complaints)),
      complaintsCount: complaints.length,
      needs: [],
      categories: new Set(),
      priorities: new Set(),
    };

    for (const complaint of complaints) {
      const categorized = this.categorizeNeed(complaint);
      allNeeds.needs.push({
        id: uuidv4(),
        text: complaint,
        category: categorized.category,
        priority: categorized.priority,
        weight: categorized.weight,
      });
      allNeeds.categories.add(categorized.category);
      allNeeds.priorities.add(categorized.priority);
    }

    allNeeds.categories = Array.from(allNeeds.categories);
    allNeeds.priorities = Array.from(allNeeds.priorities);
    allNeeds.count = allNeeds.needs.length;

    this.logger.info('Needs detected from complaints', { allNeeds });
    return allNeeds;
  }

  /**
   * @method prioritizeNeeds
   * @description Prioriza necessidades com base em pesos.
   * @param {Array<Object>} needs - Lista de necessidades.
   * @returns {Array<Object>} Necessidades ordenadas por prioridade.
   */
  prioritizeNeeds(needs) {
    return needs.sort((a, b) => {
      // Ordenar por peso (descendente)
      if (b.weight !== a.weight) return b.weight - a.weight;
      // Se mesmo peso, ordenar por categoria (alfabético)
      return a.category.localeCompare(b.category);
    });
  }

  /**
   * @method generateNeedsReport
   * @description Gera um relatório de necessidades.
   * @param {Object} needsData - Dados de necessidades.
   * @returns {Object} Relatório de necessidades.
   */
  generateNeedsReport(needsData) {
    const prioritizedNeeds = this.prioritizeNeeds(needsData.needs);
    
    // Agrupar por categoria
    const needsByCategory = {};
    for (const need of prioritizedNeeds) {
      if (!needsByCategory[need.category]) {
        needsByCategory[need.category] = [];
      }
      needsByCategory[need.category].push(need);
    }

    // Agrupar por prioridade
    const needsByPriority = {};
    for (const need of prioritizedNeeds) {
      if (!needsByPriority[need.priority]) {
        needsByPriority[need.priority] = [];
      }
      needsByPriority[need.priority].push(need);
    }

    // Estatísticas
    const stats = {
      totalNeeds: needsData.count,
      categories: needsData.categories.length,
      priorities: needsData.priorities.length,
      needsByCategory,
      needsByPriority,
    };

    const report = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(JSON.stringify(needsData)),
      source: needsData.source,
      stats,
      prioritizedNeeds,
      recommendations: this._generateRecommendations(needsByPriority),
    };

    this.logger.info('Needs report generated', { report });
    return report;
  }

  /**
   * @method _generateRecommendations
   * @description Gera recomendações com base em necessidades priorizadas.
   * @param {Object} needsByPriority - Necessidades agrupadas por prioridade.
   * @returns {Array} Lista de recomendações.
   */
  _generateRecommendations(needsByPriority) {
    const recommendations = [];

    // Recomendações para necessidades críticas
    if (needsByPriority.critical && needsByPriority.critical.length > 0) {
      recommendations.push({
        priority: 'critical',
        message: 'Ação imediata necessária para resolver problemas críticos de segurança e saúde.',
        actions: [
          'Contactar autoridades competentes (PSP, GNR, Bombeiros, Saúde Pública).',
          'Alocar recursos de emergência.',
          'Criar plano de ação imediato.',
        ],
      });
    }

    // Recomendações para necessidades altas
    if (needsByPriority.high && needsByPriority.high.length > 0) {
      recommendations.push({
        priority: 'high',
        message: 'Priorizar resolução de problemas de infraestrutura e transporte.',
        actions: [
          'Contactar Câmaras Municipais e entidades responsáveis.',
          'Avaliar orçamento disponível.',
          'Criar cronograma de intervenções.',
        ],
      });
    }

    // Recomendações para necessidades médias
    if (needsByPriority.medium && needsByPriority.medium.length > 0) {
      recommendations.push({
        priority: 'medium',
        message: 'Planejar melhorias em educação, cultura, desporto e habitação.',
        actions: [
          'Criar grupos de trabalho com a comunidade.',
          'Buscar financiamentos (Portugal 2030, FCT, etc.).',
          'Avaliar parcerias com entidades locais.',
        ],
      });
    }

    // Recomendações para necessidades baixas
    if (needsByPriority.low && needsByPriority.low.length > 0) {
      recommendations.push({
        priority: 'low',
        message: 'Manter manutenção regular de limpeza urbana e espaços verdes.',
        actions: [
          'Incluir em plano de manutenção anual.',
          'Buscar voluntários para ações pontuais.',
        ],
      });
    }

    return recommendations;
  }
}

module.exports = NeedsDetector;
