from dataclasses import dataclass
from typing import Literal
FunctionName=Literal['curadoria','territorial','migracao','webapp']
@dataclass(frozen=True)
class RouteDecision:function:FunctionName;requires_human_validation:bool;source_mutation_allowed:bool=False
def route(function:FunctionName)->RouteDecision:
    if function not in ('curadoria','territorial','migracao','webapp'):raise ValueError('unknown IA MILK function')
    return RouteDecision(function,function in ('curadoria','territorial'),False)
