import React from 'react'
export type SequenceStep={id:string;label:string;duration:number;element:React.ReactNode}
const step=(id:string,label:string,duration=2400):SequenceStep=>({id,label,duration,element:React.createElement('section',{className:`sequence-panel sequence-${id}`,'aria-label':label},label)})
export const AtlasSequence:SequenceStep[]=[step('cosmicoxes','COSMICOXES'),step('copernico','Copérnico / globo'),step('cosmic-flow','Cosmic Flow'),step('selo-atlas','Selo Atlas'),step('fuco','Crónicas Cãotadas por Fucô'),step('galeria-diletante','Galeria Diletante'),step('milks-territoriais','MILKs territoriais'),step('inflar','Inflar'),step('particulas','Partículas'),step('papel-rasgado','Papel rasgado'),step('brincar-convite-sorte','Brincar · convite · tentar a sorte'),step('nuno','Contribuição Nuno')]
export const sequenceIds=AtlasSequence.map(x=>x.id)
