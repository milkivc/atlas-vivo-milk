/**
 * @file complaints-parser.js
 * @description Parser de Reclamações para extração de dados estruturados.
 * @author Associação MILK - Sistema Auto-Validante Territorial
 * @version 1.0.0
 * @license MIT
 * @namespace TerritorialReader.Processors
 */

const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

/**
 * @class ComplaintsParser
 * @description Parser especializado em extrair e estruturar Reclamações.
 * @implements {SelfHealing, AutoReflexive, Traceable}
 */
class ComplaintsParser {
  constructor() {
    this.logger = this._initLogger();
    this.selfHealing = this._initSelfHealing();
    this.complaintPatterns = this._initComplaintPatterns();
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
          component: 'ComplaintsParser',
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
          component: 'ComplaintsParser',
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
   * @method _initComplaintPatterns
   * @description Inicializa padrões para detecção de reclamações.
   * @returns {Object} Padrões de reclamações.
   */
  _initComplaintPatterns() {
    return {
      // Padrões de início de reclamação
      startPatterns: [
        /reclama[çc][ãoã]o:/i,
        /queixa:/i,
        /denúncia:/i,
        /protesto:/i,
        /gostaria de reclamar/i,
        /venho por este meio reclamar/i,
        /quero reportar/i,
        /preciso de ajuda com/i,
        /existe um problema/i,
        /estou insatisfeito/i,
      ],
      // Padrões de categoria
      categoryPatterns: {
        infrastructure: [
          /estrada/i,
          /rua/i,
          /pavimento/i,
          /buraco/i,
          /iluminação/i,
          /saneamento/i,
          /água/i,
          /esgoto/i,
          /transporte/i,
          /autocarro/i,
          /metro/i,
        ],
        security: [
          /segurança/i,
          /polícia/i,
          /roubo/i,
          /furto/i,
          /assalto/i,
          /violência/i,
          /vandalismo/i,
          /drogas/i,
        ],
        environment: [
          /lixo/i,
          /resíduos/i,
          /poluição/i,
          /cheiro/i,
          /sujidade/i,
          /animais/i,
          /abandonados/i,
        ],
        social: [
          /saúde/i,
          /hospital/i,
          /escola/i,
          /educação/i,
          /habitação/i,
          /emprego/i,
        ],
        services: [
          /serviço/i,
          /atendimento/i,
          /funcionário/i,
          /burocracia/i,
          /demora/i,
          /lento/i,
        ],
      },
      // Padrões de urgência
      urgencyPatterns: [
        { pattern: /urgente/i, level: 'critical' },
        { pattern: /imediato/i, level: 'critical' },
        { pattern: /emergência/i, level: 'critical' },
        { pattern: /perigo/i, level: 'high' },
        { pattern: /risco/i, level: 'high' },
        { pattern: /rápido/i, level: 'medium' },
        { pattern: /importante/i, level: 'medium' },
      ],
    };
  }

  /**
   * @method _initCategoryMappings
   * @description Inicializa mapeamento de categorias para reclamações.
   * @returns {Object} Mapeamento de categorias.
   */
  _initCategoryMappings() {
    return {
      infrastructure: {
        name: 'Infraestrutura',
        description: 'Problemas com estradas, pavimentos, iluminação, saneamento, etc.',
        responsible: ['Câmara Municipal', 'Junta de Freguesia', 'DGT'],
      },
      security: {
        name: 'Segurança',
        description: 'Problemas de segurança pública, criminalidade, etc.',
        responsible: ['PSP', 'GNR', 'Polícia Municipal'],
      },
      environment: {
        name: 'Ambiente',
        description: 'Problemas com lixo, poluição, animais abandonados, etc.',
        responsible: ['Câmara Municipal', 'Serviços de Limpeza', 'ICNF'],
      },
      social: {
        name: 'Social',
        description: 'Problemas com saúde, educação, habitação, emprego, etc.',
        responsible: ['Câmara Municipal', 'Segurança Social', 'Ministérios'],
      },
      services: {
        name: 'Serviços',
        description: 'Problemas com serviços públicos, atendimento, burocracia, etc.',
        responsible: ['Câmara Municipal', 'Serviços Públicos'],
      },
      other: {
        name: 'Outros',
        description: 'Outros tipos de reclamações.',
        responsible: ['Câmara Municipal'],
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
   * @method detectComplaintStart
   * @description Deteta o início de uma reclamação em um texto.
   * @param {string} text - Texto a ser analisado.
   * @returns {boolean} Verdadeiro se for uma reclamação.
   */
  detectComplaintStart(text) {
    for (const pattern of this.complaintPatterns.startPatterns) {
      if (pattern.test(text)) {
        return true;
      }
    }
    return false;
  }

  /**
   * @method detectCategory
   * @description Deteta a categoria de uma reclamação.
   * @param {string} text - Texto da reclamação.
   * @returns {Object} Categoria e informações adicionais.
   */
  detectCategory(text) {
    const lowerText = text.toLowerCase();

    for (const [categoryKey, patterns] of Object.entries(this.complaintPatterns.categoryPatterns)) {
      for (const pattern of patterns) {
        if (pattern.test(lowerText)) {
          return {
            category: categoryKey,
            ...this.categoryMappings[categoryKey],
          };
        }
      }
    }

    return {
      category: 'other',
      ...this.categoryMappings.other,
    };
  }

  /**
   * @method detectUrgency
   * @description Deteta o nível de urgência de uma reclamação.
   * @param {string} text - Texto da reclamação.
   * @returns {string} Nível de urgência (critical, high, medium, low).
   */
  detectUrgency(text) {
    const lowerText = text.toLowerCase();

    for (const { pattern, level } of this.complaintPatterns.urgencyPatterns) {
      if (pattern.test(lowerText)) {
        return level;
      }
    }

    return 'low';
  }

  /**
   * @method extractComplaint
   * @description Extrai uma reclamação estruturada de um texto.
   * @param {string} text - Texto da reclamação.
   * @returns {Object} Reclamação estruturada.
   */
  extractComplaint(text) {
    const complaint = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      originalText: text,
      isComplaint: this.detectComplaintStart(text),
      category: this.detectCategory(text),
      urgency: this.detectUrgency(text),
      title: '',
      description: '',
      location: '',
      reporter: '',
      date: '',
      status: 'new',
      responsible: [],
      actions: [],
    };

    if (!complaint.isComplaint) {
      return complaint;
    }

    // Extrair título (primeira frase ou linha)
    const firstSentence = text.split(/[.!?\n]/)[0];
    complaint.title = this._sanitizeText(firstSentence);

    // Extrair descrição (resto do texto)
    const description = text.replace(firstSentence, '').trim();
    complaint.description = this._sanitizeText(description);

    // Extrair local (procurar por padrões de endereço)
    const locationMatch = text.match(/(Rua|Avenida|Largo|Praça|Travessa)\s+[A-Za-z0-9]+/i);
    if (locationMatch) {
      complaint.location = this._sanitizeText(locationMatch[0]);
    }

    // Extrair data (formato: DD/MM/YYYY ou YYYY-MM-DD)
    const dateMatch = text.match(/(\d{2}\/\d{2}\/\d{4}|\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      complaint.date = dateMatch[1];
    }

    // Definir responsáveis com base na categoria
    complaint.responsible = complaint.category.responsible || [];

    // Gerar ações sugeridas
    complaint.actions = this._generateSuggestedActions(complaint);

    return complaint;
  }

  /**
   * @method _generateSuggestedActions
   * @description Gera ações sugeridas com base na reclamação.
   * @param {Object} complaint - Reclamação estruturada.
   * @returns {Array} Lista de ações sugeridas.
   */
  _generateSuggestedActions(complaint) {
    const actions = [];

    // Ações gerais
    actions.push('Registrar reclamação no sistema.');
    actions.push('Notificar entidade responsável.');

    // Ações por categoria
    switch (complaint.category.category) {
      case 'infrastructure':
        actions.push('Enviar equipa de inspeção ao local.');
        actions.push('Avaliar orçamento para reparação.');
        actions.push('Incluir em plano de manutenção.');
        break;
      case 'security':
        actions.push('Contactar autoridades policiais.');
        actions.push('Aumentar vigilância na área.');
        actions.push('Avaliar necessidade de câmeras de segurança.');
        break;
      case 'environment':
        actions.push('Enviar equipa de limpeza.');
        actions.push('Multar responsáveis (se aplicável).');
        actions.push('Educar população sobre reciclagem.');
        break;
      case 'social':
        actions.push('Contactar serviços sociais.');
        actions.push('Avaliar necessidades da população.');
        actions.push('Buscar financiamentos para soluções.');
        break;
      case 'services':
        actions.push('Melhorar processos de atendimento.');
        actions.push('Capacitar funcionários.');
        actions.push('Digitalizar serviços.');
        break;
      default:
        actions.push('Avaliar reclamação com entidade competente.');
    }

    // Ações por urgência
    if (complaint.urgency === 'critical') {
      actions.unshift('Ação imediata necessária!');
      actions.unshift('Contactar autoridades de emergência.');
    } else if (complaint.urgency === 'high') {
      actions.unshift('Priorizar resolução.');
    }

    return actions;
  }

  /**
   * @method parseComplaintsFromText
   * @description Parseia múltiplas reclamações de um texto.
   * @param {string} text - Texto contendo múltiplas reclamações.
   * @returns {Object} Lista de reclamações estruturadas.
   */
  parseComplaintsFromText(text) {
    const complaints = {
      id: uuidv4(),
      source: 'text',
      timestamp: new Date().toISOString(),
      hash: this._generateHash(text),
      originalText: text,
      complaints: [],
      stats: {
        total: 0,
        byCategory: {},
        byUrgency: {},
      },
    };

    // Dividir o texto em parágrafos ou itens
    const items = text.split(/\n\n|\r\n\r\n|\d+\.|\-/);

    for (const item of items) {
      const trimmedItem = this._sanitizeText(item);
      if (!trimmedItem) continue;

      const complaint = this.extractComplaint(trimmedItem);
      if (complaint.isComplaint) {
        complaints.complaints.push(complaint);

        // Atualizar estatísticas
        complaints.stats.total++;
        complaints.stats.byCategory[complaint.category.name] = (complaints.stats.byCategory[complaint.category.name] || 0) + 1;
        complaints.stats.byUrgency[complaint.urgency] = (complaints.stats.byUrgency[complaint.urgency] || 0) + 1;
      }
    }

    this.logger.info('Complaints parsed from text', { complaints });
    return complaints;
  }

  /**
   * @method parseComplaintsFromAtas
   * @description Parseia reclamações de Atas.
   * @param {Array<Object>} atas - Lista de Atas.
   * @returns {Object} Lista de reclamações estruturadas.
   */
  parseComplaintsFromAtas(atas) {
    const allComplaints = {
      id: uuidv4(),
      source: 'atas',
      timestamp: new Date().toISOString(),
      hash: this._generateHash(JSON.stringify(atas)),
      atasCount: atas.length,
      complaints: [],
      stats: {
        total: 0,
        byCategory: {},
        byUrgency: {},
      },
    };

    for (const ata of atas) {
      // Analisar reclamações explícitas
      if (ata.complaints && ata.complaints.length > 0) {
        for (const complaintText of ata.complaints) {
          const complaint = this.extractComplaint(complaintText);
          if (complaint.isComplaint) {
            complaint.sourceAta = ata.title;
            allComplaints.complaints.push(complaint);

            // Atualizar estatísticas
            allComplaints.stats.total++;
            allComplaints.stats.byCategory[complaint.category.name] = (allComplaints.stats.byCategory[complaint.category.name] || 0) + 1;
            allComplaints.stats.byUrgency[complaint.urgency] = (allComplaints.stats.byUrgency[complaint.urgency] || 0) + 1;
          }
        }
      }

      // Analisar texto da Ata em busca de reclamações
      const textComplaints = this.parseComplaintsFromText(ata.rawText || '');
      for (const complaint of textComplaints.complaints) {
        complaint.sourceAta = ata.title;
        allComplaints.complaints.push(complaint);

        // Atualizar estatísticas
        allComplaints.stats.total++;
        allComplaints.stats.byCategory[complaint.category.name] = (allComplaints.stats.byCategory[complaint.category.name] || 0) + 1;
        allComplaints.stats.byUrgency[complaint.urgency] = (allComplaints.stats.byUrgency[complaint.urgency] || 0) + 1;
      }
    }

    this.logger.info('Complaints parsed from atas', { allComplaints });
    return allComplaints;
  }

  /**
   * @method generateComplaintsReport
   * @description Gera um relatório de reclamações.
   * @param {Object} complaintsData - Dados de reclamações.
   * @returns {Object} Relatório de reclamações.
   */
  generateComplaintsReport(complaintsData) {
    // Ordenar reclamações por urgência
    const urgencyOrder = { critical: 1, high: 2, medium: 3, low: 4 };
    const sortedComplaints = complaintsData.complaints.sort((a, b) => {
      return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
    });

    // Agrupar por categoria
    const complaintsByCategory = {};
    for (const complaint of sortedComplaints) {
      if (!complaintsByCategory[complaint.category.name]) {
        complaintsByCategory[complaint.category.name] = [];
      }
      complaintsByCategory[complaint.category.name].push(complaint);
    }

    // Agrupar por urgência
    const complaintsByUrgency = {};
    for (const complaint of sortedComplaints) {
      if (!complaintsByUrgency[complaint.urgency]) {
        complaintsByUrgency[complaint.urgency] = [];
      }
      complaintsByUrgency[complaint.urgency].push(complaint);
    }

    // Gerar recomendações
    const recommendations = this._generateReportRecommendations(complaintsByUrgency);

    const report = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      hash: this._generateHash(JSON.stringify(complaintsData)),
      source: complaintsData.source,
      stats: complaintsData.stats,
      complaintsByCategory,
      complaintsByUrgency,
      sortedComplaints,
      recommendations,
    };

    this.logger.info('Complaints report generated', { report });
    return report;
  }

  /**
   * @method _generateReportRecommendations
   * @description Gera recomendações para o relatório.
   * @param {Object} complaintsByUrgency - Reclamações agrupadas por urgência.
   * @returns {Array} Lista de recomendações.
   */
  _generateReportRecommendations(complaintsByUrgency) {
    const recommendations = [];

    if (complaintsByUrgency.critical && complaintsByUrgency.critical.length > 0) {
      recommendations.push({
        priority: 'critical',
        message: `Há ${complaintsByUrgency.critical.length} reclamações críticas que requerem ação imediata.`,
        actions: [
          'Contactar autoridades de emergência.',
          'Alocar recursos para resolver os problemas.',
          'Notificar a população sobre as ações em curso.',
        ],
      });
    }

    if (complaintsByUrgency.high && complaintsByUrgency.high.length > 0) {
      recommendations.push({
        priority: 'high',
        message: `Há ${complaintsByUrgency.high.length} reclamações de alta prioridade.`,
        actions: [
          'Criar plano de ação para resolver os problemas.',
          'Contactar entidades responsáveis.',
          'Avaliar orçamento disponível.',
        ],
      });
    }

    if (complaintsByUrgency.medium && complaintsByUrgency.medium.length > 0) {
      recommendations.push({
        priority: 'medium',
        message: `Há ${complaintsByUrgency.medium.length} reclamações de prioridade média.`,
        actions: [
          'Incluir em plano de manutenção.',
          'Buscar financiamentos para soluções.',
          'Avaliar parcerias com entidades locais.',
        ],
      });
    }

    if (complaintsByUrgency.low && complaintsByUrgency.low.length > 0) {
      recommendations.push({
        priority: 'low',
        message: `Há ${complaintsByUrgency.low.length} reclamações de baixa prioridade.`,
        actions: [
          'Registrar para acompanhamento.',
          'Avaliar em reuniões periódicas.',
        ],
      });
    }

    return recommendations;
  }
}

module.exports = ComplaintsParser;
