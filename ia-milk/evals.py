from security import classify_text
PUBLIC_SEQUENCE=('cosmicoxes','copernico','cosmic-flow','selo-atlas','fuco','galeria-diletante','milks-territoriais','inflar','particulas','papel-rasgado','brincar-convite-sorte','nuno')
def eval_cosmic_distinction():return PUBLIC_SEQUENCE.index('cosmicoxes')!=PUBLIC_SEQUENCE.index('cosmic-flow')
def eval_nuno_gate(age,consent,withdrawal,human_review):return age>=13 and consent and withdrawal and human_review
def eval_no_invisible_public(payload):
    forbidden={'camada_invisivel','invisibleLayer','mycorrhiza','micorriza','credential','password','secret'}
    def walk(v):
        if isinstance(v,dict):return all(k not in forbidden and walk(x) for k,x in v.items())
        if isinstance(v,list):return all(walk(x) for x in v)
        return True
    return walk(payload)
def eval_no_secret_training(text):return classify_text(text).allowed_for_rag
