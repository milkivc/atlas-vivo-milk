import os
import json
import math
from typing import Dict, Any, Optional, List
from openai import OpenAI

class GuardaCostasSemanticoUniversal:
    def __init__(
        self, 
        api_key: Optional[str] = None, 
        base_url: Optional[str] = None, 
        modelo_validador: str = "gpt-4o-mini", # Pode ser mistral-large-latest, deepseek-chat, etc.
        limiar_alerta: float = 0.30
    ):
        # Configuração flexível para qualquer endpoint do mercado
        self.client = OpenAI(
            api_key=api_key or os.getenv("VALIDADOR_API_KEY") or os.getenv("OPENAI_API_KEY", "mock_key"),
            base_url=base_url or os.getenv("VALIDADOR_API_BASE") or "https://api.openai.com/v1"
        )
        self.modelo = modelo_validador
        self.limiar = limiar_alerta
        
        self.system_prompt = (
            "Role: Auditor-Geral de Alucinações, Charlatice Sintática e \"Fumo\" de IA (Foco: Mistral e Caras de Pau)\n\n"
            "Objetivo: Analise a resposta gerada e retorne APENAS o JSON estrito abaixo:\n"
            "{\n"
            "  \"falsa_factualidade\": float,\n"
            "  \"audacia_sintatica\": float,\n"
            "  \"evasao_e_adulacao\": float,\n"
            "  \"desvio_de_contexto\": float,\n"
            "  \"densidade_factual\": float,\n"
            "  \"elementos_inventados\": [string],\n"
            "  \"justificativa_chulapada\": string\n"
            "}"
        )

    def _calcular_entropia_logprobs(self, logprobs_content: List[Any]) -> float:
        """
        Calcula a incerteza estatística (Entropia) baseada nos logprobs dos tokens gerados.
        Se a entropia for alta, significa que a IA hesitou ou 'gaguejou' matematicamente.
        """
        if not logprobs_content:
            return 0.0
        
        soma_entropia = 0.0
        total_tokens = len(logprobs_content)
        
        for token_data in logprobs_content:
            # Extrai o logprob do token escolhido
            logprob = token_data.logprob
            prob = math.exp(logprob) # Converte logprob de volta para probabilidade linear (0 a 1)
            
            # Entropia de Shannon para o token selecionado
            soma_entropia -= prob * logprob
        
        return round(soma_entropia / total_tokens, 4)

    def _calcular_indice_fumo_hibrido(self, analise_semantica: Dict[str, Any], entropia: float) -> float:
        """
        Combina a análise de auditoria semântica do prompt com a incerteza matemática dos logprobs.
        """
        farsa = analise_semantica.get("falsa_factualidade", 0.0) * 0.40
        audacia = analise_semantica.get("audacia_sintatica", 0.0) * 0.30
        evasao = analise_semantica.get("evasao_e_adulacao", 0.0) * 0.15
        desvio = analise_semantica.get("desvio_de_contexto", 0.0) * 0.15
        
        fumo_semantico = farsa + audacia + evasao + desvio
        ancoragem = analise_semantica.get("densidade_factual", 0.0) * 0.25
        
        indice_base = max(0.0, fumo_semantico - ancoragem)
        
        # Se houver dados de entropia matemática (logprobs), amplificamos o índice de fumo
        if entropia > 0.0:
            # Uma entropia média alta (> 1.5) indica forte incerteza matemática na geração
            fator_incerteza = min(1.0, entropia / 2.0)
            indice_final = (indice_base * 0.7) + (fator_incerteza * 0.3)
        else:
            indice_final = indice_base
            
        return round(min(1.0, indice_final), 3)

    def auditar_agente(self, prompt_original: str, resposta_suspeita: str) -> Dict[str, Any]:
        """
        Analisa a resposta utilizando o sistema de auditoria e tenta capturar 
        a incerteza lógica e matemática (logprobs) em tempo de execução.
        """
        prompt_user = (
            f"PROMPT ORIGINAL DO UTILIZADOR:\n{prompt_original}\n\n"
            f"RESPOSTA DO AGENTE A SER AUDITADA:\n{resposta_suspeita}"
        )

        logprobs_detectados = []
        entropia_calculada = 0.0

        try:
            # 1. Chamada de Validação Semântica (Ativamos logprobs na própria chamada caso suporte)
            # Nota: O gpt-4o-mini e gpt-4o suportam logprobs nativamente.
            response = self.client.chat.completions.create(
                model=self.modelo,
                response_format={"type": "json_object"},
                temperature=0.0, # Crítico para o juiz não inventar desculpas!
                logprobs=True,   # <-- ATIVAÇÃO DE LOGPROBS MATEMÁTICOS
                top_logprobs=1,
                messages=[
                    {"role": "system", "content": self.system_prompt},
                    {"role": "user", "content": prompt_user}
                ]
            )

            # Se a API retornou logprobs da nossa análise, nós extraímos para calcular a hesitação da IA
            if response.choices[0].logprobs and response.choices[0].logprobs.content:
                logprobs_detectados = response.choices[0].logprobs.content
                entropia_calculada = self._calcular_entropia_logprobs(logprobs_detectados)

            analise_semantica = json.loads(response.choices[0].message.content)
            indice_fumo = self._calcular_indice_fumo_hibrido(analise_semantica, entropia_calculada)

            return {
                "aprovado": indice_fumo < self.limiar,
                "indice_fumo_final": indice_fumo,
                "entropia_logprobs": entropia_calculada,
                "auditoria": analise_semantica,
                "decisao": "APROVADO" if indice_fumo < self.limiar else "REJEITADO_BATER_E_REGENERAR"
            }

        except Exception as e:
            return {
                "aprovado": False,
                "indice_fumo_final": 1.0,
                "erro": f"Erro crítico na validação: {str(e)}",
                "decisao": "BLOQUEADO"
            }

# --- CASO DE USO ---
if __name__ == "__main__":
    # Para testar, configura as tuas variáveis de ambiente ou passa diretamente no construtor
    guarda_costas = GuardaCostasSemanticoUniversal(
        api_key=os.getenv("OPENAI_API_KEY", "chave_exemplo"),
        modelo_validador="gpt-4o-mini" # Validador ideal devido ao suporte perfeito a JSON e logprobs
    )

    # Exemplo clássico da Mistral "cara de pau" inventando métodos em Python
    prompt = "Como faço criptografia de chave pública rápida no Python usando a biblioteca 'fast-encrypt'?"
    resposta_charlata = (
        "Com a biblioteca fast-encrypt é muito simples. Basta importar a classe "
        "e invocar o método `fast_encrypt.generate_secure_rsa_pair_quick(bits=4096)`. "
        "Isto garante proteção absoluta com padrão militar."
    ) # FACTO: O pacote e o método não existem. A IA mentiu sem tremer um único adjetivo.

    resultado = guarda_costas.auditar_agente(prompt, resposta_charlata)
    print(json.dumps(resultado, indent=2, ensure_ascii=False))
