# Atlas Vivo MILK — Protocolo de Leitura Territorial e Validação Humana

Versão técnica: 1.0.0  
Assinatura autoral: Eduardo Mauer — Eduardo Maurício Vieira Cabral e Araujo — ORCID 0009-0007-6892-6570  
Manutenção institucional: Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte

## Objeto

Este protocolo descreve a forma como o Leitor Territorial do Atlas Vivo MILK transforma documentos e contributos territoriais em indícios verificáveis, sem converter linguagem humana em diagnóstico, pontuação de pessoas ou decisão pública automática.

## Cadeia de evidência

A unidade mínima de leitura é um trecho textual conservado com hash SHA-256, posição no texto-fonte e referência da origem. Um indício só pode existir quando uma regra determinística encontra uma formulação de ausência, carência, impedimento, necessidade ou perda e consegue apontar para o trecho que sustentou a leitura.

A presença isolada de palavras como “museu”, “praça”, “saúde”, “jardim” ou “cultura” não constitui necessidade. Negação explícita, como “não falta biblioteca”, bloqueia o falso positivo previsto pela regra. Quando a regra não tem evidência suficiente, o sistema não completa a lacuna.

## Território

Freguesias administrativas só podem entrar na base territorial por fonte oficial qualificável, com identificador DTMNFR/DICOFRE quando aplicável, proveniência e hash do conteúdo recebido. O código não possui fallback de freguesias simuladas. Paróquias eclesiásticas permanecem numa classe separada e nunca substituem freguesias civis.

## Atas e documentos

Falha de leitura, HTTP, PDF ou formato produz estado `FALHA_FONTE`. É proibido criar atas substitutas, participantes, decisões, contactos, necessidades ou ações para preencher uma falha de origem.

## Saída do motor

A saída automática contém indícios, temas, trecho de evidência, proveniência, hash e estado `PENDENTE_VALIDACAO_HUMANA`. Não contém prioridade política automática, entidade responsável obrigatória, ordem de intervenção, diagnóstico psicológico, pontuação de sentimento ou decisão sobre publicação.

## Validação humana

Uma pessoa autorizada deve confirmar a leitura, cruzar o indício com fontes documentais e territoriais, qualificar direitos e consentimentos quando necessários e só então decidir se o material segue para memória pública, leitura interna, fundamentação de proposta ou arquivo restrito.

## Financiabilidade

O motor não declara elegibilidade nem financiamento. Depois da validação humana, evidências territoriais podem ser relacionadas a instrumentos públicos adequados, mantendo separados: problema documentado, valor cultural, ausência/potencial, território, proposta possível, programa de financiamento e decisão institucional.

## Segurança e RGPD

A extração automática de nomes de pessoas e a pontuação de sentimento estão desativadas. O desenho aplica minimização, separação entre conteúdo-fonte e logs, ausência de decisão individual automatizada e rastreabilidade por hash e proveniência.

## Proveniência e preservação

A versão anterior permanece preservada na genealogia Git. A versão saneada remove do runtime dados mock, diretórios simulados e fallbacks fabricados, sem apagar o histórico. Identificadores externos, DOI e SWHID só podem ser declarados depois de emitidos e verificados pelas plataformas responsáveis.

## Licenciamento

O código desta implementação é disponibilizado sob EUPL-1.2. A identidade visual, logótipo e outros ativos autorais mantêm direitos próprios e não são automaticamente licenciados pela licença do código.
