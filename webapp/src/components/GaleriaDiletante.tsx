import React from 'react'
export type GaleriaItem={id:string;titulo:string;imagemUrl?:string;estado:'PENDENTE'|'PUBLICADO'|'NOT_VERIFIED'}
type Props={items?:GaleriaItem[]}
const GaleriaDiletante:React.FC<Props>=({items=[]})=><section aria-labelledby="galeria-diletante-title"><h2 id="galeria-diletante-title">Galeria Diletante</h2>{items.length===0?<p>Conteúdo curatorial: PENDENTE.</p>:<ul>{items.map(item=><li key={item.id}><strong>{item.titulo}</strong><span> — {item.estado}</span>{item.imagemUrl?<img src={item.imagemUrl} alt="" loading="lazy"/>:null}</li>)}</ul>}</section>
export default GaleriaDiletante
