# IA MILK — núcleo RAG executável

Estado: engenharia funcional e avaliação local. **Não existe declaração de fine-tuning concluído.**

Fluxo obrigatório: corpus autorizado/exportado → classificação de segurança → chunking determinístico + SHA-256 → índice lexical local → retrieval com citações → inferência Mistral opcional → avaliação → validação humana quando aplicável → receipt/proveniência.

Credenciais, segredos e potenciais dados pessoais ficam fora do corpus RAG por defeito. O Drive de origem permanece read-only. Funções: `curadoria`, `territorial`, `migracao`, `webapp`. Nenhuma recebe autorização implícita para alterar a origem. Fine-tuning futuro exige dataset explícito, revisão de direitos/RGPD, split de avaliação, baseline RAG e aprovação humana.
