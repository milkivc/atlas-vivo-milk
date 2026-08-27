#!/usr/bin/env bash
set -euo pipefail

# SPDX-License-Identifier: EUPL-1.2
# Estado: DESATIVADO POR SEGURANÇA
#
# Este ficheiro histórico continha credenciais incorporadas e operações
# simuladas apresentadas como execução. Os valores foram removidos do estado
# atual da branch. A remoção não elimina ocorrências no histórico Git.
#
# Não usar este script para publicação, depósitos, criação de repositórios,
# Codeberg, Zenodo, ORCID ou Software Heritage.
#
# Procedimento autorizado:
# 1. credenciais apenas em broker/secret store;
# 2. ações reais em workflows separados e determinísticos;
# 3. staging, testes, gate humano e receipt verificável;
# 4. camada pública e camada invisível em circuitos estanques;
# 5. nenhuma simulação pode emitir estado de sucesso.

printf '%s\n' 'MILK_SECURITY_STOP: ONE_CLICK_DEPLOY desativado; use workflows auditáveis e segregados.' >&2
exit 78
