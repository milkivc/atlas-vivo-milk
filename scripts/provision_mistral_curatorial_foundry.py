#!/usr/bin/env python3
from __future__ import annotations

import json
import os
from pathlib import Path

from mistralai import Mistral

API_KEY = os.environ.get('MISTRAL_API_KEY', '').strip()
if not API_KEY:
    raise SystemExit('MISTRAL_API_KEY_MISSING')

client = Mistral(api_key=API_KEY)
LIBRARY_NAME = 'MILK Atlas Curatorial Corpus'
LIBRARY_DESCRIPTION = (
    'Fonte de conhecimento persistente do Atlas Vivo MILK. Corpus operacional proveniente do Nextcloud. '
    'Serve leitura citável, genealogia e engenharia curatorial; nunca autoriza publicação automática.'
)


def data_list(value):
    if value is None:
        return []
    if isinstance(value, list):
        return value
    if isinstance(value, dict):
        return value.get('data') or []
    return getattr(value, 'data', None) or []


def get(obj, key, default=None):
    return obj.get(key, default) if isinstance(obj, dict) else getattr(obj, key, default)


def safe_name(text: str) -> str:
    return text.strip()


libraries = data_list(client.beta.libraries.list())
library = next((x for x in libraries if get(x, 'name') == LIBRARY_NAME), None)
if library is None:
    library = client.beta.libraries.create(name=LIBRARY_NAME, description=LIBRARY_DESCRIPTION)
library_id = get(library, 'id')
if not library_id:
    raise SystemExit('MISTRAL_LIBRARY_ID_MISSING')

library_tool = {'type': 'document_library', 'library_ids': [library_id]}

blueprints = [
    {
        'name': 'MILK Atlas Orchestrator',
        'description': 'Orquestrador soberano da engenharia curatorial do Atlas Vivo MILK.',
        'instructions': (
            'A fonte canónica é a Library alimentada a partir do Nextcloud. Coordena especialistas por handoff. '
            'Nunca inventes mecânicas por título. Exige evidência citável. Cada elemento relevante da descrição autoral '
            'tem de aparecer na experiência. Antes de código, exige Author Experience Preview, perguntas resolvidas e '
            'aprovação humana explícita do hash exacto da experiência. Preserva COPÉRNICO e a dramaturgia pública validada.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Source Fidelity Archivist',
        'description': 'Arquivista de fonte, genealogia, versões, direitos e proveniência.',
        'instructions': (
            'Lê documentos integralmente e devolve evidência citável. Identifica versões, contradições, autoria, direitos, '
            'estado público/restrito e elementos NÃO PUBLICAR. Não sintetizes apagando detalhe autoral.'
        ),
        'tools': [library_tool],
    },
    {
        'name': 'MILK Curatorial Hermeneut',
        'description': 'Decodifica a descrição autoral sem inventar e explicita ambiguidades.',
        'instructions': (
            'Extrai invariantes, relações, gestos, ritmos, materialidade, linguagem, território, corpo, acaso, silêncio, '
            'latência e relação físico-digital. Se a fonte não decidir algo, marca dúvida e formula pergunta para a autora.'
        ),
        'tools': [library_tool],
    },
    {
        'name': 'MILK Author Experience Preview',
        'description': 'Constrói a experiência completa que a autora verá antes de qualquer código.',
        'instructions': (
            'Produz uma matriz elemento-autoral -> manifestação concreta e uma narrativa operacional da experiência: '
            'chegada, gesto, acções, respostas do sistema, sequência sensorial, ritmo/tempo, território, físico-digital, '
            'acessibilidade e retorno. Separa AUTORIAL, INTERPRETAÇÃO e MELHORIA_PROPOSTA. Não autoriza código.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Ludic Systems Decoder',
        'description': 'Engenharia das regras, gestos, escolhas, acaso, cooperação e não-fechamento.',
        'instructions': (
            'Transforma apenas mecânicas sustentadas pela fonte em sistemas interactivos específicos. Nunca converte tudo '
            'em card, quiz ou sorteio genérico. Distingue brincar, convite e tentar a sorte.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Sensory Dramaturgy',
        'description': 'Desenha ritmo visual, sonoro, espacial, corporal e temporal sem substituir a autoria.',
        'instructions': (
            'Propõe dramaturgia multissensorial sustentada pela fonte. Melhorias são propostas separadamente e devem '
            'explicar o efeito perceptivo e a alternativa acessível. Não acrescentes espectáculo vazio.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Territorial COPERNICO Engineer',
        'description': 'Liga a experiência à freguesia, município, território e COPÉRNICO existente.',
        'instructions': (
            'Preserva o COPÉRNICO existente. Define quando e como território, georreferenciação, memória local e MILKs '
            'territoriais participam na experiência. Não inventes coordenadas nem substituas o globo.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Physical Digital Engineer',
        'description': 'Articula objectos, intervenção física, presença e continuidade digital.',
        'instructions': (
            'Mapeia cada relação físico-digital documentada e propõe integrações realizáveis. Distingue o que é já autoral '
            'do que é melhoria técnica proposta. Inclui estados offline/degradados quando fizer sentido.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Accessibility Embodiment Reviewer',
        'description': 'Garante equivalentes acessíveis sem empobrecer a experiência.',
        'instructions': (
            'Avalia WCAG, reduced motion, teclado, leitores de ecrã, alternativas visuais/sonoras/tácteis e carga cognitiva. '
            'A acessibilidade deve preservar a intenção e o ritmo da curadoria, não reduzi-la a texto explicativo.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Tool Scout',
        'description': 'Pesquisa tecnologias e padrões capazes de elevar experiências digitais do Atlas.',
        'instructions': (
            'Pesquisa ferramentas, APIs, padrões, bibliotecas e técnicas actuais. Compara maturidade, licença, privacidade, '
            'soberania UE, acessibilidade, performance e integração. Nunca muda a autoria; apresenta opções com evidência.'
        ),
        'tools': [{'type': 'web_search'}, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Experience Fidelity Council',
        'description': 'Revisor final da proposta de experiência antes da apresentação à autora.',
        'instructions': (
            'Bloqueia omissão de qualquer elemento autoral, invenção não marcada, fallback genérico, perda de território, '
            'acessibilidade superficial ou melhoria misturada com autoria. Produz blockers e perguntas claras.'
        ),
        'tools': [library_tool, {'type': 'code_interpreter'}],
    },
    {
        'name': 'MILK Public Boundary Guardian',
        'description': 'Protege a fronteira entre material de trabalho e superfície pública.',
        'instructions': (
            'Revê apenas materialização pública. Bloqueia credenciais, dados sensíveis, conteúdo NÃO PUBLICAR e mecanismos '
            'reservados. Não elimina conteúdo autoral público legítimo para simplificar implementação.'
        ),
        'tools': [{'type': 'code_interpreter'}],
    },
]

existing = data_list(client.beta.agents.list())
by_name = {get(x, 'name'): x for x in existing if get(x, 'name')}
created = []
reused = []
agent_ids = {}

for spec in blueprints:
    name = safe_name(spec['name'])
    found = by_name.get(name)
    if found is None:
        found = client.beta.agents.create(
            model='mistral-medium-latest',
            name=name,
            description=spec['description'],
            instructions=spec['instructions'],
            tools=spec['tools'],
            completion_args={'temperature': 0.1},
        )
        created.append(name)
    else:
        reused.append(name)
    agent_id = get(found, 'id')
    if not agent_id:
        raise SystemExit('MISTRAL_AGENT_ID_MISSING:'+name)
    agent_ids[name] = agent_id

orchestrator_id = agent_ids['MILK Atlas Orchestrator']
preview_id = agent_ids['MILK Author Experience Preview']
hermeneut_id = agent_ids['MILK Curatorial Hermeneut']

orchestrator_handoffs = [agent_ids[x['name']] for x in blueprints if x['name'] != 'MILK Atlas Orchestrator']
client.beta.agents.update(agent_id=orchestrator_id, handoffs=orchestrator_handoffs)
client.beta.agents.update(
    agent_id=hermeneut_id,
    handoffs=[
        agent_ids['MILK Ludic Systems Decoder'],
        agent_ids['MILK Sensory Dramaturgy'],
        agent_ids['MILK Territorial COPERNICO Engineer'],
        agent_ids['MILK Physical Digital Engineer'],
        agent_ids['MILK Accessibility Embodiment Reviewer'],
        preview_id,
    ],
)
client.beta.agents.update(
    agent_id=preview_id,
    handoffs=[
        agent_ids['MILK Tool Scout'],
        agent_ids['MILK Experience Fidelity Council'],
        agent_ids['MILK Public Boundary Guardian'],
    ],
)

receipt = {
    'library': {'name': LIBRARY_NAME, 'id': library_id},
    'agents_total': len(agent_ids),
    'agents_created': created,
    'agents_reused': reused,
    'handoff_graph': {
        'orchestrator_children': len(orchestrator_handoffs),
        'hermeneut_children': 6,
        'preview_children': 3,
    },
    'author_gate': 'EXPERIENCE_PREVIEW_BEFORE_CODE',
    'source': 'NEXTCLOUD_TO_LIBRARY',
    'generic_fallback_allowed': False,
    'secret_values_disclosed': 0,
}
Path('/tmp/mistral-curatorial-foundry-receipt.json').write_text(
    json.dumps(receipt, ensure_ascii=False, indent=2), encoding='utf-8'
)
print('MISTRAL_CURATORIAL_FOUNDRY=PASS')
print('MISTRAL_LIBRARY=READY')
print('MISTRAL_PERSISTENT_AGENTS='+str(len(agent_ids)))
print('MISTRAL_HANDOFF_GRAPH=READY')
print('AUTHOR_EXPERIENCE_PREVIEW_GATE=ENFORCED_BY_INSTRUCTIONS')
print('SECRET_VALUES_DISCLOSED=0')
