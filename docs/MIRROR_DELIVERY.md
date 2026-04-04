# Espelho de delivery — Cara Core MKT

**Padrão igual ao do Seed.** Portal de apresentação do produto MKT (Sala de Notícias, oficina, canal de feedback). Tema escuro, Inter, cards e navegação em grid.

## Premissa: valor da execução e lacuna de mercado

A estratégia é pública e os processos são transparentes. O diferencial competitivo está no **valor da execução**; a recompensa é proporcional à entrega validada. A paciência para o processo tornou-se um recurso raro. Os 6 robôs (oficina em D:\dev\caracore-mkt) protegem o tempo de quem opera. Validação CTO: `CTO_VALIDACAO_MKT.txt`.

## Regra: MKT não vendemos

- **Cara Core MKT** e **Cara Core Seed** são da Cara Core; **não vendemos**.
- **Apresentação (delivery):** na Matriz Cara Core Informática (este diretório: `delivery/mkt`).
- **Sala de Notícias:** conteúdo em `sala/` (D:\dev\caracore-site\sala). **A Sala é pública.**
- **Oficina (6 scripts Python):** projeto D:\dev\caracore-mkt (Python Baseline, Microsoft Store).

## Alinhamento

| Onde | Papel |
|------|--------|
| **Matriz — delivery/mkt** | Portal público do produto MKT (o que é, tecnologia, feedback, link para a Sala) |
| **sala/** | Conteúdo da Sala de Notícias (planos, campanhas, prompts IA); acesso restrito com login |
| **caracore-site/caracore-mkt (Node)** | Apenas portal: servidor de login e sessão; a lógica fica em sala/ |
| **D:\dev\caracore-mkt (Python)** | Oficina: scripts iniciar, validar, transportar, validar entrega |

- O conteúdo **canônico** do portal MKT fica em **delivery/mkt**. CSS: `assets/css/mkt-portal.css`.
- Links para o portfólio usam URL absoluta (caracore.com.br) quando necessário.
- Link para a Sala: relativo `../sala/index.htm` (ou URL do site quando em produção).
- **Convite "Entre em casa":** seção no index com imagem `sala_de_noticias.png`, link para Sala de Notícias (portal-controle) e para a loja (GitHub caracore-mkt). Imagem: copiar de `caracore-mkt/docs/assets/img/sala_de_noticias.png` para `delivery/mkt/assets/img/sala_de_noticias.png`. Loja organizada com pasta `docs/` no GitHub (docs/README.md, docs/assets/img/ com sala_de_noticias.png e prompt_img.txt).

*Cara Core Informática — Cara Core MKT.*
