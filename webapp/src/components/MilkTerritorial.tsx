import React from 'react'
import type {Distrito} from '../domain'
type Props={distritos?:Distrito[]}
const MilkTerritorial:React.FC<Props>=({distritos=[]})=><section aria-labelledby="milk-territorial-title"><h2 id="milk-territorial-title">MILK territorial</h2>{distritos.length===0?<p>Base territorial pública: PENDENTE / NOT_VERIFIED.</p>:<ul>{distritos.map(d=><li key={d.id}>{d.nome} — {d.concelhos.length} concelho(s)</li>)}</ul>}</section>
export default MilkTerritorial
