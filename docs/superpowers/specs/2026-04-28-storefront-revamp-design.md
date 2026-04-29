# Storefront revamp — AraLabs como lab de produtos próprios

**Data:** 2026-04-28
**Status:** Design aprovado, pendente plano de implementação.

## Problema

O storefront atual posiciona a AraLabs implicitamente como produto-único voltado a famílias. Três das quatro páginas orbitam Casa Leve:

- `/` (home) usa `CasaLeveDualMockup` como visual principal e única ilustração de produto.
- `/tese` é uma tese sobre famílias, rotina doméstica e distribuição de responsabilidades — tese **do Casa Leve**, não da empresa.
- `/casa-leve` é a única página de produto.
- `/empresa` é a única neutra, mas subdesenvolvida.

Resultado: ara-agenda (produto B2B/SMB de serviços, oficialmente no portfólio) não aparece em lugar nenhum, e quem chega no site não consegue ler a AraLabs como empresa-mãe que sustenta múltiplos produtos.

## Posicionamento alvo

**Lab brasileiro de produtos digitais próprios**, com porta aberta para parcerias selecionadas — não software house.

- Primeiro: empresa que cria produtos próprios para problemas cotidianos reais.
- Ocasionalmente: parceira técnica em projetos sob demanda com alinhamento claro de visão, qualidade e longo prazo.

A conexão honesta entre Casa Leve e ara-agenda é amplitude, não filosofia forçada:

> A AraLabs cria produtos próprios para problemas cotidianos reais. Alguns problemas estão dentro de casa. Outros estão dentro de pequenos negócios.

## Frase-mãe e subcopy

**Hero principal (home):**

> Software próprio para problemas reais do dia a dia.

**Subcopy:**

> A AraLabs é uma fábrica brasileira de produtos digitais. Criamos sistemas simples, bem desenhados e sustentáveis para organizar rotinas, operações e serviços que ainda dependem de improviso.

## Arquitetura de informação

```
/                        Home institucional + portfólio + tese curta
/empresa                 Sobre a AraLabs + princípios + como trabalhamos + parcerias selecionadas
/tese                    Tese completa da AraLabs (neutra, abrange família + SMB)
/produtos                Índice / portfólio
/produtos/ara-agenda     Produto ara-agenda (novo)
/produtos/casa-leve      Produto Casa Leve (movido de /casa-leve)
```

**Mudanças vs. estado atual:**

- `/casa-leve` → `/produtos/casa-leve` (com redirect 301).
- Novo `/produtos` (índice).
- Novo `/produtos/ara-agenda`.
- `/tese` reescrita do zero.
- `/empresa` ganha seções (princípios reforçados + parcerias selecionadas).
- Home reestruturada: hero novo, mostra portfólio (não Casa Leve isolado), tese curta.

## Conteúdo por página

### `/` — Home

**Hero**

- Headline: "Software próprio para problemas reais do dia a dia."
- Subcopy: ver acima.
- CTA primário: "Conheça nossos produtos" → `/produtos`.
- CTA secundário: "Sobre a AraLabs" → `/empresa`.
- Visual: NÃO usar `CasaLeveDualMockup` como ilustração principal (vira monoproduto). Usar visual neutro que represente "lab/produtos" — composição com mockups dos dois produtos lado a lado, ou ilustração abstrata da marca. Decisão visual final fica para a fase de implementação.

**Pilares (refinar os atuais 4)**

Manter o conceito mas reforçar a leitura "lab de produtos":

1. Empresa-mãe — estrutura que sustenta múltiplos produtos.
2. Problemas reais — territórios com dor recorrente.
3. Clareza e estrutura — documentação viva e direção antes de improviso.
4. Longo prazo — produtos que evoluem com intenção.

**Tese curta**

Parágrafo curto extraído de `/tese`, com link "Leia nossa tese completa" → `/tese`.

**Portfólio**

Cards dos dois produtos:

- ara-agenda — "Agenda online e presença digital para pequenos negócios de serviços." → `/produtos/ara-agenda`
- Casa Leve — "Rotina familiar: tarefas, colaboração e incentivos." (manter signal "em exploração" se ainda for verdade) → `/produtos/casa-leve`

**CTA final**

"Sobre a empresa" → `/empresa`.

### `/empresa`

Reforçar:

- Empresa brasileira.
- Produtos próprios.
- Construção independente.
- Software com utilidade real.
- Base em Arapongas (PR) com ambição digital maior.
- Produto, design e engenharia como núcleo.

**Seções:**

1. Hero da página — "Sobre a AraLabs" + parágrafo institucional.
2. Princípios (manter os 3 atuais, refinando texto):
   - Problemas reais antes de funcionalidades.
   - Clareza antes de velocidade.
   - Empresa antes de produto isolado.
3. Como trabalhamos — produto + design + engenharia como núcleo, construção independente, ritmo de longo prazo.
4. Parcerias selecionadas (nova seção):

   > A AraLabs nasce para construir produtos próprios, mas também pode participar de projetos sob demanda quando existe alinhamento claro de visão, qualidade e longo prazo.
   >
   > Não atuamos como uma fábrica de demandas genéricas. Entramos em parcerias onde conseguimos contribuir com produto, design, engenharia e clareza estratégica.
   >
   > Para conversar sobre uma possibilidade de parceria, entre em contato.

   CTA: `mailto:trabalhe@aralabs.com.br`.

### `/tese`

Reescrita completa. Texto fornecido pelo product owner:

> A AraLabs acredita que ainda existem muitos problemas cotidianos mal resolvidos por software.
>
> Alguns são grandes demais para serem resolvidos por planilhas. Outros são simples demais para justificar sistemas corporativos pesados.
>
> É nesse espaço que queremos construir.
>
> Criamos produtos digitais para contextos onde organização, presença digital, rotina, operação e tomada de decisão ainda dependem de improviso, WhatsApp, memória e esforço manual.
>
> Nossa tese não está presa a um único mercado.
>
> Ela pode aparecer em uma família tentando dividir melhor as responsabilidades da casa. Pode aparecer em um salão tentando organizar sua agenda. Pode aparecer em um pequeno negócio tentando ter presença digital. Pode aparecer em uma operação local tentando parar de depender de processos soltos.
>
> A AraLabs existe para transformar esses problemas em produtos simples, úteis e sustentáveis.

A página deve responder: **"Que tipo de problema a AraLabs procura?"** — não "Por que famílias precisam de um app?".

JSON-LD: trocar `articleSchema` atual (que está marcando a tese antiga como artigo) por algo apropriado — provavelmente `WebPage` ou manter Article mas com novo headline/description.

### `/produtos` (novo)

Índice simples do portfólio:

- Hero curto: "Nossos produtos".
- Grid/lista de cards: ara-agenda + Casa Leve, com headline + 1 frase + link.
- Sem CTA de "trabalhe com a gente" aqui (mantém foco no produto).

### `/produtos/ara-agenda` (novo)

Estrutura:

- **Hero:** "ara-agenda — Agenda online e presença digital para pequenos negócios de serviços."
- **Para quem é:** salões, barbearias, esmalterias, clínicas, estúdios de estética, oficinas, consultórios, profissionais autônomos.
- **Problema:** dependência de WhatsApp + agenda manual → horários esquecidos, perda de clientes, baixa previsibilidade.
- **Solução:** agendamento online + página pública do negócio + ferramentas que reduzem atrito do cliente.
- **Visão:** mais que agenda — camada de presença digital e operação para negócios locais.
- JSON-LD: `SoftwareApplication`.

Mockups visuais: placeholder por enquanto, refinar depois.

### `/produtos/casa-leve` (movido)

Conteúdo atual de `/casa-leve` migra praticamente intacto. Ajustes:

- Reforçar logo no hero: "Casa Leve é um produto da AraLabs." (não "a razão de ser").
- Atualizar canonical e og:url para `/produtos/casa-leve`.
- Manter status "em exploração" se ainda válido (verificar com PO antes de implementar).

### Redirect

`/casa-leve` → `/produtos/casa-leve` com 301 permanente. Implementar via [next.config.ts](next.config.ts).

## Mudanças técnicas

### Roteamento

- Mover `src/app/casa-leve/page.tsx` para `src/app/produtos/casa-leve/page.tsx`.
- Criar `src/app/produtos/page.tsx` (índice).
- Criar `src/app/produtos/ara-agenda/page.tsx`.
- Adicionar redirect 301 em `next.config.ts`.

### SEO

- [src/app/sitemap.ts](src/app/sitemap.ts) — adicionar `/produtos`, `/produtos/ara-agenda`, `/produtos/casa-leve`; remover `/casa-leve`.
- [src/lib/seo/schemas.ts](src/lib/seo/schemas.ts) — revisar `articleSchema` (tese), `softwareApplicationSchema` (atualmente para Casa Leve — vai precisar de uma versão por produto), `websiteSchema`, `aboutPageSchema`.
- Metadata por página: title, description, canonical, og:url, og:type — todas precisam refletir nova IA.
- Atualizar `Organization` JSON-LD se houver menção a produto único.

### Componentes

- Hero da home: novo, sem `CasaLeveDualMockup` como protagonista.
- `Pillars` / `Values` / `Principles`: revisar copy.
- Novo card de produto reutilizável (usado em home + `/produtos`).
- `Footer`: adicionar link "trabalhe com a gente" → `mailto:trabalhe@aralabs.com.br` (opcional, conversar na implementação).

### Header

Revisar links de navegação para refletir nova IA: `Empresa` · `Tese` · `Produtos`.

## Fora de escopo

- Página de blog / cases.
- Formulário de contato (vai de mailto por enquanto).
- Refazer design system / tokens.
- Animações ou interatividade nova.
- Novo branding / logo.

## Riscos e questões abertas

- **Visual do hero da home:** decisão de "como mostrar lab/portfólio sem virar Casa Leve hero" fica em aberto até a fase de implementação. Possíveis caminhos: composição multi-produto, ilustração abstrata da marca, ou hero apenas tipográfico com peso forte. Discutir ao iniciar.
- **Status "em exploração" do Casa Leve:** confirmar com PO antes de remover/manter na nova página.
- **`trabalhe@aralabs.com.br`:** confirmar se o mailbox existe ou precisa ser criado.
- **Mockups do ara-agenda:** placeholder na primeira versão; substituir por mockups reais quando disponíveis.

## Critérios de sucesso

1. Visitante que cai em `/` entende em 5 segundos que AraLabs é um lab de produtos próprios (não um app de família).
2. Ara-agenda tem página pública linkável.
3. Tese da AraLabs comporta família **e** SMB sem violência conceitual.
4. Casa Leve continua acessível em URL canônica nova; URL antiga redireciona com 301.
5. Sitemap, JSON-LD e metadata refletem a nova IA.
6. Posição de "parcerias selecionadas" existe mas é claramente secundária ao posicionamento de produto próprio.
