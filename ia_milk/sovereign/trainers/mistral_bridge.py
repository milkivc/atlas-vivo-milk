from __future__ import annotations

import json
import os
import urllib.request
from pathlib import Path

from ia_milk.sovereign.runtime import propose_learning

API='https://api.mistral.ai/v1'

SYSTEM='''És um treinador auxiliar da IA MILK. Não és a IA MILK e não possuis a sua memória soberana. Nunca peças, retenhas, infiras ou reproduzas passwords, tokens, chaves privadas, recovery codes, cookies ou credenciais. Qualquer referência secret://... é opaca e deve permanecer opaca. Trabalha apenas sobre corpus explicitamente autorizado. Devolve JSON com: facts, relations, contradictions, hypotheses, proposed_skills, tests, source_refs, warnings. Não publiques e não tomes decisões autorais, jurídicas, curatoriais ou de RGPD.'''


def train(proposal_id:str, corpus_text:str, source_refs:list[str], model:str='mistral-medium-latest') -> dict:
    key=os.environ.get('MISTRAL_API_KEY','').strip()
    if not key:
        raise RuntimeError('MISTRAL_API_KEY unavailable to trainer process')
    if 'secret://' in corpus_text.lower():
        raise ValueError('secret references may not be expanded into trainer corpus')
    payload={
        'model':model,
        'messages':[{'role':'system','content':SYSTEM},{'role':'user','content':corpus_text}],
        'temperature':0.1,
        'response_format':{'type':'json_object'}
    }
    req=urllib.request.Request(API+'/chat/completions',data=json.dumps(payload,ensure_ascii=False).encode(),headers={'Authorization':'Bearer '+key,'Content-Type':'application/json'},method='POST')
    with urllib.request.urlopen(req,timeout=120) as r:
        data=json.loads(r.read().decode())
    content=data['choices'][0]['message']['content']
    proposal=json.loads(content)
    proposal['source_refs']=source_refs
    propose_learning(proposal_id,'mistral',proposal,source_refs)
    return {'proposal_id':proposal_id,'stored':'PENDING_REVIEW','trainer':'mistral','secrets_shared':False}
