# Atlas Vivo MILK — Interoperabilidade e Licenciamento

## Objetivo

Esta política procura garantir que o Atlas Vivo MILK possa interoperar com sistemas públicos, académicos e culturais sem obrigar a abertura de todas as camadas internas, sem transferir direitos sobre a marca MILK e sem impedir modelos comerciais.

## Princípio arquitetónico

**Interoperabilidade não implica transferência integral de propriedade intelectual.**

O Atlas Vivo MILK pode expor contratos técnicos estáveis — vocabulários, esquemas, APIs, perfis de metadados e identificadores — mantendo separadas:

- implementação pública;
- implementação comercial;
- módulos internos/confidenciais;
- dados sujeitos a direitos ou restrições;
- logótipo, marca e identidade visual.

## Superfícies públicas de interoperabilidade

A interoperabilidade pode usar, conforme aplicável:

- JSON e JSON-LD;
- JSON Schema;
- OpenAPI;
- GeoJSON;
- identificadores territoriais oficiais como DTMNFR/DICOFRE quando a fonte os disponibilizar;
- DCAT-AP / GeoDCAT-AP;
- Dublin Core;
- DataCite Metadata Schema;
- CodeMeta;
- Citation File Format (CFF);
- PROV-O para proveniência;
- SKOS para vocabulários controlados;
- IIIF para objetos visuais quando os direitos o permitirem;
- W3C Web Annotation quando aplicável;
- SPDX e REUSE para informação de licenças;
- ORCID e ROR como identificadores externos, quando verificados;
- SWHID para software efetivamente arquivado no Software Heritage.

A mera menção a um padrão não significa certificação de conformidade. Cada implementação deve ser testada antes de se declarar conformidade.

## Minimal Ontology

A Minimal Ontology deve permanecer deliberadamente pequena. O núcleo semântico serve para permitir entendimento entre sistemas sem transformar o Atlas numa ontologia totalizante.

O núcleo pode conter entidades e relações mínimas como:

- Território;
- Fonte;
- Evidência;
- Afirmação/Claim;
- Ausência Documentada;
- Hipótese Territorial;
- Dispositivo/Resposta Possível;
- Validação Humana;
- Proveniência;
- relação `refereTerritorio`;
- relação `derivaDeFonte`;
- relação `suportaClaim`;
- relação `contradiz`;
- relação `requerValidacao`;
- relação `podeRelacionarDispositivo`.

Extensões devem ser feitas por perfis ou contextos adicionais, preservando compatibilidade retroativa sempre que possível.

## Licença das interfaces

A implementação de software continua sujeita à licença indicada no respetivo pacote, atualmente EUPL-1.2 para a distribuição pública identificada como tal, podendo existir uma licença comercial alternativa.

Para favorecer interoperabilidade, especificações de interface, exemplos de payload, contextos JSON-LD e documentação de esquemas podem ser licenciados separadamente por uma licença permissiva de documentação, quando o titular assim indicar no próprio ficheiro. **Nenhuma licença separada é presumida sem indicação explícita.**

## Compatibilidade com comercialização

Entidades comerciais podem implementar clientes, conectores ou integrações contra interfaces publicamente documentadas, respeitando as licenças aplicáveis.

A Associação MILK / titular pode também oferecer:

- implementação certificada contratualmente;
- API gerida;
- conectores privados;
- SLA e suporte;
- instalação dedicada;
- integração com sistemas institucionais;
- migração e governança de dados;
- perfis ontológicos especializados;
- pacotes de interoperabilidade e conformidade;
- licenças proprietárias alternativas para versões elegíveis.

A compatibilidade técnica não concede direito de uso do logótipo, marca ou representação institucional MILK.

## Dados e direitos

Os esquemas podem ser públicos enquanto os dados permanecem restritos. Cada objeto de dados deve carregar, quando aplicável:

- origem;
- autor/titular;
- licença;
- estado de consentimento;
- estado de validação;
- âmbito público/interno/restrito;
- hash/proveniência;
- limitações de reutilização.

Não se deve inferir que um dataset é aberto apenas porque utiliza um formato aberto.

## Soberania e portabilidade

A interoperabilidade deve evitar dependência desnecessária de um fornecedor único. Onde tecnicamente possível, os dados exportáveis devem conservar formatos documentados, identificadores estáveis e proveniência suficiente para migração entre infraestruturas, incluindo armazenamento compatível com S3/MinIO e repositórios Git.

## Compatibilidade futura

Mudanças incompatíveis em contratos públicos devem:

1. receber nova versão;
2. conservar changelog;
3. fornecer estratégia de migração;
4. evitar alteração silenciosa de significado;
5. preservar a genealogia dos conceitos;
6. não reclassificar automaticamente dados restritos como públicos.

## Segurança e ética

Interoperabilidade não deve criar atalhos que contornem validação humana, consentimento, controlo de acesso, minimização de dados ou proteção de conteúdos sensíveis. Perfis psicológicos, scoring de pessoas e inferência de atributos sensíveis permanecem fora do contrato público do leitor territorial.