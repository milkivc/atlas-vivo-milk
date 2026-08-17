import React from 'react'
export type CronicaFuco={id:string;titulo:string;excerto?:string;estado:'PENDENTE'|'PUBLICADO'|'NOT_VERIFIED'}
type Props={cronicas?:CronicaFuco[]}
const CronicasFuco:React.FC<Props>=({cronicas=[]})=><section aria-labelledby="cronicas-fuco-title"><h2 id="cronicas-fuco-title">Crónicas Cãotadas por Fucô</h2>{cronicas.length===0?<p>Crónicas: PENDENTE.</p>:<ul>{cronicas.map(c=><li key={c.id}><article><h3>{c.titulo}</h3>{c.excerto?<p>{c.excerto}</p>:null}<small>{c.estado}</small></article></li>)}</ul>}</section>
export default CronicasFuco
