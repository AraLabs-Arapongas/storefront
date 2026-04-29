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
- **Visual:** NÃO usar mockup de produto específico (nem Casa Leve nem ara-agenda). Mockup de produto único faz a AraLabs voltar a parecer "ser aquele produto". O hero deve representar a empresa como sistema/fábrica de portfólio.

  Direção preferida — **grid de cards do portfólio**:

  ```
  AraLabs
  ├─ ara-agenda
  ├─ Casa Leve
  └─ próximo produto
  ```

  Comunica portfólio imediatamente. Alternativas válidas: diagrama AraLabs → Produtos → Problemas, cards abstratos de software, mini interfaces genéricas sem marca de produto, ou composição editorial com blocos (Produto · Problema · Sistema · Operação).

**Pilares (refinar os atuais 4)**

Manter o conceito mas reforçar a leitura "lab de produtos":

1. Empresa-mãe — estrutura que sustenta múltiplos produtos.
2. Problemas reais — territórios com dor recorrente.
3. Clareza e estrutura — documentação viva e direção antes de improviso.
4. Longo prazo — produtos que evoluem com intenção.

**Tese curta**

Parágrafo curto extraído de `/tese`, com link "Leia nossa tese completa" → `/tese`.

**Portfólio**

Cards dos dois produtos com sinalização de maturidade:

- **ara-agenda** — "Agenda online e presença digital para pequenos negócios de serviços." Status: **Em desenvolvimento**. → `/produtos/ara-agenda`
- **Casa Leve** — "Rotina familiar: tarefas, colaboração e incentivos." Status: **Em exploração**. → `/produtos/casa-leve`

A diferença de status é deliberada — comunica honestidade sobre maturidade dos produtos sem dar peso operacional igual aos dois.

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

**Tom:** concreto, não abstrato demais. As frases que conectam família + SMB + operação local são o que faz a ponte entre os produtos. Manter explicitamente algo como:

> Alguns problemas aparecem dentro de casa. Outros aparecem em pequenos negócios. Outros aparecem em operações locais que ainda dependem de WhatsApp, planilhas, memória e improviso.

Sem essa ponte, a tese vira manifesto vazio de startup. Com ela, o leitor entende imediatamente por que Casa Leve e ara-agenda coexistem.

JSON-LD: trocar `articleSchema` atual (que está marcando a tese antiga como artigo) por algo apropriado — provavelmente `WebPage` ou manter Article mas com novo headline/description.

### `/produtos` (novo)

Página forte que vende a **lógica do portfólio**, não só listinha de cards.

**Estrutura:**

1. **Hero curto** — "Produtos. A AraLabs cria produtos próprios para problemas reais do cotidiano."
2. **Produtos atuais** — grid com:
   - **ara-agenda** — "Agenda online + presença digital para pequenos negócios de serviços." Status: Em desenvolvimento. → `/produtos/ara-agenda`
   - **Casa Leve** — "Sistema para ajudar famílias a organizar rotina, responsabilidades e hábitos." Status: Em exploração. → `/produtos/casa-leve`
3. **Como um produto nasce na AraLabs** — seção que reforça a empresa como fábrica de produto:
   1. Problema real
   2. Tese clara
   3. Produto simples
   4. Base técnica sólida
   5. Evolução contínua

Sem CTA de "trabalhe com a gente" aqui (mantém foco no produto).

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
- Manter status **"Em exploração"**, com copy honesta para não parecer abandonado:

  > **Status: Em exploração**
  >
  > O Casa Leve está em fase de definição de produto, validação de proposta e construção conceitual.

### Redirect

`/casa-leve` → `/produtos/casa-leve` com 301 permanente. Implementar via [next.config.ts](next.config.ts).

## Mudanças técnicas

### Roteamento

- Mover `src/app/casa-leve/page.tsx` para `src/app/produtos/casa-leve/page.tsx`.
- Criar `src/app/produtos/page.tsx` (índice).
- Criar `src/app/produtos/ara-agenda/page.tsx`.
- Adicionar redirect 301 em `next.config.ts`.

### SEO

- [src/app/sitemap.ts](src/app/sitemap.ts) — adicionar `/produtos`, `/produtos/ara-agenda`, `/produtos/casa-leve`; remover `/casa-leve`. Validar que `/casa-leve` não fica no sitemap novo (apenas redirect 301).
- Metadata por página: title, description, canonical, og:url, og:type — todas precisam refletir nova IA.
- Atualizar `Organization` JSON-LD se houver menção a produto único.

**Mapa de schemas JSON-LD por rota** (mantém consistência com o trabalho de SEO recente):

| Rota | Schema(s) |
|---|---|
| `/` | `Organization` + `WebSite` |
| `/empresa` | `AboutPage` + `Organization` |
| `/tese` | `Article` ou `WebPage` |
| `/produtos` | `CollectionPage` |
| `/produtos/ara-agenda` | `SoftwareApplication` (ou `Product`) |
| `/produtos/casa-leve` | `SoftwareApplication` (ou `Product`) |

[src/lib/seo/schemas.ts](src/lib/seo/schemas.ts) — revisar/expandir: `articleSchema` (tese), `softwareApplicationSchema` precisa virar factory parametrizada por produto, adicionar `collectionPageSchema` para `/produtos`, manter `websiteSchema` e `aboutPageSchema`.

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

## Decisões finais antes da implementação

- Hero **não** deve usar mockup de produto específico.
- Hero deve representar a AraLabs como empresa de portfólio / produtos próprios. Direção preferida: grid de cards do portfólio (AraLabs → ara-agenda · Casa Leve · próximo produto).
- Casa Leve permanece com status **"Em exploração"** (com copy honesta que evita parecer abandonado).
- ara-agenda entra como **"Em desenvolvimento"** (produto ativo).
- `trabalhe@aralabs.com.br` precisa ser validado **antes** do deploy. Se mailbox não existir, criar via Cloudflare Email Routing (ou provedor atual). Se houver risco de atraso, usar alias temporário já existente e trocar depois — mas nunca publicar email morto.
- `/casa-leve` redireciona 301 para `/produtos/casa-leve`. Validar que sitemap novo não mantém `/casa-leve`.

## Riscos e questões abertas

- **Mockups do ara-agenda:** placeholder na primeira versão; substituir por mockups reais quando disponíveis.
- **Visual concreto do hero (componente):** direção decidida (grid de cards), execução visual fina fica para a fase de implementação no design system.

## Critérios de sucesso

1. Visitante que cai em `/` entende em 5 segundos que AraLabs é um lab de produtos próprios (não um app de família).
2. Ara-agenda tem página pública linkável.
3. Tese da AraLabs comporta família **e** SMB sem violência conceitual.
4. Casa Leve continua acessível em URL canônica nova; URL antiga redireciona com 301.
5. Sitemap, JSON-LD e metadata refletem a nova IA.
6. Posição de "parcerias selecionadas" existe mas é claramente secundária ao posicionamento de produto próprio.
