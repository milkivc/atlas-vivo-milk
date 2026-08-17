import json, pathlib, re, sys

root = pathlib.Path('.')
receipt = json.loads((root/'docs/preservation/SOFTWARE_HERITAGE_RECEIPT.json').read_text(encoding='utf-8'))
meta = json.loads((root/'metadata.json').read_text(encoding='utf-8'))
zen = json.loads((root/'.zenodo.json').read_text(encoding='utf-8'))

errors=[]
if not receipt.get('verified'):
    errors.append('SWH receipt not verified')
if not re.fullmatch(r'swh:1:snp:[0-9a-f]{40}', receipt.get('swhid','')):
    errors.append('invalid SWHID')

meta_orcids={c.get('orcid') for c in meta.get('creators',[]) if c.get('orcid')}
zen_orcids={c.get('orcid') for c in zen.get('metadata',{}).get('creators',[]) if c.get('orcid')}
if not meta_orcids.issubset(zen_orcids):
    errors.append(f'ORCID divergence metadata vs zenodo: {sorted(meta_orcids)} / {sorted(zen_orcids)}')

if meta.get('doi'):
    errors.append('metadata.json claims DOI before verified registration')
if zen.get('metadata',{}).get('doi'):
    errors.append('.zenodo.json claims DOI before verified registration')

if errors:
    print(json.dumps({'state':'FAILED','errors':errors},ensure_ascii=False))
    sys.exit(1)
print(json.dumps({'state':'PRESERVATION_IDENTITY_VERIFIED','swhid':receipt['swhid'],'orcid_consistency':True,'doi_overclaim':False},ensure_ascii=False))
