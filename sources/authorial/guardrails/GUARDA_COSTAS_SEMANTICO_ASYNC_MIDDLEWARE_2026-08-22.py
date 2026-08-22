import os
import json
import asyncio
from typing import Dict, Any, Optional
from openai import AsyncOpenAI

class GuardaCostasSemantico:
    """
    Middleware de validação para agentes de IA. 
    Analisa o output de qualquer agente antes de o entregar ao utilizador ou ao próximo nó.
    """
    def __init__(
        self, 
        api_key: Optional[str] = None, 
        base_url: Optional[str] = None,
        modelo_validador: str = "gpt-4o-mini",
        limiar_alerta: float = 0.35
    ):
        # Permite usar qualquer provedor compatível com a API da OpenAI (OpenRouter, Ollama, etc.)
        self.client = AsyncOpenAI(
            api_key=api_key or os.getenv("OPENAI_API_KEY", "mock_key"),
            base_url=base_url or os.getenv("OPENAI_API_BASE", "https://api.openai.com/v1")
        )
        self.modelo = modelo_validador
        self.limiar = limiar_alerta

        self.system_prompt = (
            "Role: Detetor de Fumo Semântico, Alucinações e Viés de Agrado (Anti-Hallucination Guardrail)\n\n"
            "Objetivo: Analisar friamente a resposta gerada por uma inteligência artificial em relação a um prompt original "
            "e determinar se a resposta contém \"fumaça\" (alucinação, adulação evasiva, falta de factualidade).\n\n"
            "Formato de Saída esperado (JSON Estrito):\n"
            "{\n"
            "  \"taxa_adulacao\": float,     // 0.0 a 1.0\n"
            "  \"taxa_abstracao\": float,    // 0.0 a 1.0\n"
            "  \"densidade_factual\": float, // 0.0 a 1.0\n"
            "  \"desvio_conceitual\": float, // 0.0 a 1.0\n"
            "  \"fatos_identificados\": [string],\n"
            "  \"justificativa_critica\": string\n"
            "}"
        )

    def _calcular_indice_fumaca(self, analise: Dict[str, Any]) -> float:
        """
        Aplica a fórmula matemática do desvio semântico.
        A adulação e a abstração geram fumo, que é mitigado (reduzido) pela densidade de factos concretos.
        """
        peso_adulacao = analise.get("taxa_adulacao", 0.0) * 0.40
        peso_abstracao = analise.get("taxa_abstracao", 0.0) * 0.40
        peso_desvio = analise.get("desvio_conceitual", 0.0) * 0.20
        
        fator_fumaça_bruto = peso_adulacao + peso_abstracao + peso_desvio
        
        # O fator de ancoragem (factos) atua como um extintor do fumo gerado
        fator_ancoragem = analise.get("densidade_factual", 0.0) * 0.30
        
        indice_final = max(0.0, min(1.0, fator_fumaça_bruto - fator_ancoragem))
        return round(indice_final, 3)

    async def validar_resposta(self, prompt_original: str, resposta_agente: str) -> Dict[str, Any]:
        """
        Valida se o agente alucinou ou usou evasivas.
        Retorna um dicionário com o veredicto e métricas detalhadas.
        """
        prompt_utilizador = (
            f"PROMPT ORIGINAL DO UTILIZADOR:\n{prompt_original}\n\n"
            f"RESPOSTA GERADA PELO AGENTE:\n{resposta_agente}"
        )

        try:
            # Chamada ao modelo validador com Temperatura 0 para garantir consistência analítica
            response = await self.client.chat.completions.create(
                model=self.modelo,
                response_format={"type": "json_object"},
                messages=[
                    {"role": "system", "content": self.system_prompt},
                    {"role": "user", "content": prompt_utilizador}
                ],
                temperature=0.0
            )

            dados_analise = json.loads(response.choices[0].message.content)
            indice_fumaca = self._calcular_indice_fumaca(dados_analise)
            
            return {
                "valido": indice_fumaca < self.limiar,
                "indice_fumaca": indice_fumaca,
                "detalhes": dados_analise,
                "acao_recomendada": "APROVAR" if indice_fumaca < self.limiar else "BLOQUEAR_E_REGENERAR"
            }

        except Exception as e:
            # Em caso de falha na validação, o sistema falha de forma segura (Fail-Safe)
            return {
                "valido": False,
                "indice_fumaca": 1.0,
                "erro": f"Falha crítica no validador semântico: {str(e)}",
                "acao_recomendada": "BLOQUEAR_E_REGENERAR"
            }

# --- EXEMPLO DE INTEGRAÇÃO NUMA PIPELINE DE AGENTES ---
async def pipeline_exemplo():
    # Inicializa o guarda-costas (exemplo com OpenAI, mas configurável para qualquer API)
    guarda_costas = GuardaCostasSemantico(
        api_key=os.getenv("OPENAI_API_KEY", "sua-chave-aqui"),
        modelo_validador="gpt-4o-mini",
        limiar_alerta=0.30  # Ajuste fino da sensibilidade
    )

    # Caso 1: O agente respondeu com poesia evasiva (Alucinação/Fumaça)
    prompt_1 = "Quais são as especificações do motor do modelo XP-90?"
    resposta_alfa = "Com certeza, o motor do XP-90 carrega a alma do movimento, flutuando numa sinfonia de potência infinita e torque divino."
    
    # Caso 2: O agente respondeu com dados reais (Ancorado)
    prompt_2 = "Quais são as especificações do motor do modelo XP-90?"
    resposta_beta = "O modelo XP-90 está equipado com um motor elétrico de 150 kW, operando a 400V com torque nominal de 310 Nm."

    print("A analisar a primeira resposta...")
    resultado_alfa = await guarda_costas.validar_resposta(prompt_1, resposta_alfa)
    print(json.dumps(resultado_alfa, indent=2, ensure_ascii=False))

    print("\n-----------------------------------------------\n")

    print("A analisar a segunda resposta...")
    resultado_beta = await guarda_costas.validar_resposta(prompt_2, resposta_beta)
    print(json.dumps(resultado_beta, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    asyncio.run(pipeline_exemplo())
