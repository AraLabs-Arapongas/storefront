# Auditoria SEO — aralabs.com.br

**Data:** 2026-10-07 · **Escopo:** codebase `aralabs-storefront` (commit `6dc3c5b`) + HTML de produção de todas as 29 rotas públicas.
**Método:** leitura da codebase (rotas, layout, componentes, `lib/seo`, `next.config.ts`, CSS de animação), download do HTML renderizado de produção de cada rota com parsing de `<title>`, meta, canonical, OG/Twitter, JSON-LD, headings, `<img>`, landmarks e links internos; testes de status/redirect com `curl`; medição do peso de JS/CSS servido.
**Nada foi alterado no código.** Este arquivo é o único criado.

> Limitações: sem acesso a Search Console, CrUX/PageSpeed real, GA nem a contas Vercel. Números de Core Web Vitals são **inferências da implementação**, não dados de campo. A ferramenta de busca disponível é US-only, então a análise de SERP brasileira está como lista de buscas a verificar (seção 24).

---

## 1. Executive Summary

A base técnica é boa: Next.js 16 App Router, **todas as páginas pré-renderizadas estáticas** (`x-nextjs-prerender: 1`, cache HIT na Vercel `gru1`), HTML completo no servidor (nenhum conteúdo depende de hidratação), canonical em todas as páginas, `robots.ts`/`sitemap.ts` gerados, noindex automático fora de produção, redirects 308 para URLs antigas, 404 real, JSON-LD Organization/WebSite/SoftwareApplication. Não há blocker de indexação.

Os problemas estão em quatro frentes:

1. **Metadata social quebrada em 28 de 29 páginas** (bug sistêmico): como cada página define `openGraph`, o Next faz merge *raso* e descarta o `og:image`, `og:site_name` e `og:locale` do layout. E como nenhuma página define `twitter`, **todas as páginas internas publicam `twitter:title` e `twitter:description` da home**. Compartilhar `/produtos/komyx` no WhatsApp/LinkedIn/X gera preview sem imagem ou com o texto da home.
2. **On-page sem intenção de busca**: H1s são slogans ("Pra onde vamos hoje?", "Toque pra dizer.", "Um dia de cada vez.", "Trabalhamos para quem trabalha."), titles curtos e genéricos nas páginas comerciais ("Sob medida · AraLabs", "Empresa · AraLabs") e descriptions de 250–325 caracteres que o Google trunca.
3. **Identidade temática difusa**: o domínio se apresenta como "Tecnologia simples para pequenos negócios", mas 6 de 7 produtos são apps de consumo (família, AAC, sono do bebê, café, hábitos). O Komyx, único produto B2B pago, **compete com o próprio domínio `komyx.com.br`** (decidido: `komyx.com.br` é a fonte de verdade; ver seção 28). O Google não tem como saber qual é o assunto principal de `aralabs.com.br`, e nenhuma página trabalha as buscas com volume real (ex.: "comunicação alternativa app", "método Ferber", "sistema para buffet infantil", "desenvolvimento de sistema sob medida").
4. **LCP da home atrasado por design**: na primeira visita da sessão, o H1 da home fica escondido (máscara + `translate`) por **~1,4 s a 2,9 s no desktop e ~0,5 s a 1,2 s no mobile** (`heroIntro.ts`). Como o H1 é o elemento LCP provável, isso soma diretamente ao LCP medido por usuários reais.

Os ganhos rápidos são correções de metadata (helper único em `lib/seo`), schema com preço errado (Komyx e Casa Leve declaram `price: "0"`), titles/descriptions/H1 e a consistência do sitemap. O ganho de longo prazo é decidir **quais produtos o domínio vai disputar no Google** e construir conteúdo para eles (seções 17–18).

---

## 2. Site Map / Inventory

### Stack e arquitetura

| Item | Valor |
|---|---|
| Framework | Next.js **16.2.3**, App Router, React 19.2.4, Turbopack |
| CSS | Tailwind 4 + `globals.css` grande (CSS único de ~122 KB bruto, servido em todas as páginas) |
| Hospedagem | Vercel (projeto `storefront`, região `gru1`), deploy automático da `master` |
| Renderização | 100% SSG (sem `fetch`, `revalidate`, CMS, banco ou API). Conteúdo hardcoded em TSX + `src/lib/products.ts` (fonte única do portfólio) |
| Middleware / proxy / rewrites | Nenhum |
| Redirects | `next.config.ts`: 7 redirects 308 (`/casa-leve`, `/ara-agenda`, `/aragenda`, `/produtos/aragenda`, `/tese`, `/komyx`, `/arakids`) |
| Route groups / rotas dinâmicas | Nenhum. Todas as rotas são estáticas e explícitas |
| Client components | `Header`, `HeroOrbit`, `KomyxLive`, `InView`, `PhoneVideo`, `LegalToc` |
| Analytics | Só `@vercel/analytics` (pageview). Sem GA4/GTM/pixels |
| Arquivos de metadata | `layout.tsx` (global), `robots.ts`, `sitemap.ts`, `manifest.ts`, `opengraph-image.tsx` (raiz), `icon.svg` |
| Domínios relacionados | `komyx.com.br` → `www.komyx.com.br` (site próprio do Komyx); `arakids.aralabs.com.br` (portal do Arakids). Fora desta codebase |

### Inventário de URLs (produção, 2026-10-07)

Legenda: **Idx** = `index, follow` em produção · **SM** = está no sitemap · schema: Org = Organization (em todas), SA = SoftwareApplication.

| URL | Propósito | Idx | SM | Title atual (chars) | Description (chars) | H1 | Canonical | Schema | Prioridade SEO |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Home institucional | ✅ | ✅ | AraLabs — Tecnologia simples para pequenos negócios (51) | 223 | Software que cabe no seu negócio. Não o contrário. | ✅ | Org, WebSite | Alta (marca) |
| `/produtos` | Hub do portfólio | ✅ | ✅ | Produtos · AraLabs (18) | **313** | Sete produtos. Nenhum manual. *(spans sem espaço)* | ✅ | CollectionPage | Média |
| `/produtos/komyx` | Produto B2B (buffets) | ✅ | ✅ | Komyx — Gestão para buffets · AraLabs (37) | **307** | A festa se vende sozinha. Você só confirma. *(sem espaço)* | ✅ | SA (**preço 0, errado**) | Média: vitrine de portfólio; a busca de categoria fica com `komyx.com.br` (seção 28) |
| `/sob-medida` | Serviço (desenvolvimento sob medida) | ✅ | ✅ | Sob medida · AraLabs (20) | 166 | Seu problema ainda não tem produto? A gente faz. | ✅ | CollectionPage (**tipo errado**) | **Muito alta** (única página de serviço) |
| `/empresa` | Sobre | ✅ | ✅ | Empresa · AraLabs (17) | 170 | Trabalhamos para quem trabalha. *(sem espaço)* | ✅ | AboutPage | Média (E-E-A-T, local) |
| `/produtos/casa-leve` | App família (beta) | ✅ | ✅ | Casa Leve — família organizada, juntos · AraLabs (48) | 254 | Ninguém precisa ficar lembrando ninguém. *(sem espaço)* | ✅ | SA (**preço 0, errado**) | Média |
| `/produtos/arakids` | Portal de jogos (web) | ✅ | ✅ | Arakids — jogos educativos sem anúncio · AraLabs (48) | 238 | Pra onde vamos hoje? | ✅ | SA | Média |
| `/produtos/lumo` | App AAC (no ar) | ✅ | ✅ | Lumo — comunicação visual pra famílias · AraLabs (48) | 218 | Toque pra dizer. | ✅ | SA (**categoria inválida**) | **Alta** (nicho com demanda real) |
| `/produtos/sono-leve` | App sono do bebê (em revisão) | ✅ | ✅ | Sono Leve — treino de sono do bebê · AraLabs (44) | **325** | Treino de sono, com calma e com dados. | ✅ | SA | Alta (demanda real) |
| `/produtos/jornadas` | App hábitos (em revisão) | ✅ | ✅ | Jornadas — livros, cursos e hábitos no iPhone · AraLabs (55) | 260 | Um dia de cada vez. | ✅ | SA | Baixa–média |
| `/produtos/le-barista` | App café (em revisão) | ✅ | ✅ | Le Barista — espresso no ponto, passo a passo, no iPhone · AraLabs (**66**) | **316** | O espresso no ponto. | ✅ | SA | Média (long-tail de café) |
| `/produtos/casa-leve/privacidade` | Legal | ✅ | ✅ | Política de Privacidade — Casa Leve · AraLabs | 145 | Política de privacidade. | ✅ | Org | Baixa |
| `/produtos/casa-leve/termos` | Legal | ✅ | ✅ | Termos de Uso — Casa Leve · AraLabs | 129 | Termos de uso. | ✅ | Org | Baixa |
| `/produtos/casa-leve/excluir-conta` | Exigência Google Play | ✅ | ✅ | Excluir conta — Casa Leve · AraLabs | 124 | Excluir sua conta. | ✅ | Org | Baixa |
| `/produtos/lumo/privacidade` | Legal | ✅ | ✅ | Política de Privacidade — Lumo · AraLabs | 129 | Política de privacidade. | ✅ | Org | Baixa |
| `/produtos/lumo/termos` | Legal | ✅ | ✅ | Termos de uso — Lumo · AraLabs | 96 | Termos de uso. | ✅ | Org | Baixa |
| `/produtos/lumo/creditos` | Atribuição ARASAAC | ✅ | ✅ | Créditos e licenças — Lumo · AraLabs | 136 | Créditos e licenças. | ✅ | Org | Baixa |
| `/produtos/lumo/dedicatoria` | Homenagem | ✅ | ✅ | Dedicatória — Lumo · AraLabs | 115 | Para Selma. | ✅ | Org | Baixa |
| `/produtos/jornadas/privacidade` · `/termos` · `/suporte` | Legal / suporte (App Store) | ✅ | ❌ | Política… / Termos… / Suporte — Jornadas | 100–152 | Política… / Termos… / Como podemos ajudar? | ✅ | Org | Baixa (suporte: média) |
| `/produtos/sono-leve/privacidade` · `/termos` · `/suporte` | idem | ✅ | ❌ | idem — Sono Leve | 105–162 | idem | ✅ | Org | Baixa (suporte: média) |
| `/produtos/le-barista/privacidade` · `/termos` · `/suporte` | idem | ✅ | ❌ | idem — Le Barista | 112–172 | idem | ✅ | Org | Baixa (suporte: média) |
| `/produtos/arakids/privacidade` · `/suporte` | App Ara Kids (legal/suporte) | ✅ | ❌ | … — Ara Kids (app) | 122–182 | Política de privacidade. / Como podemos ajudar? | ✅ | Org | Baixa |

Endpoints gerados: `/robots.txt`, `/sitemap.xml` (18 URLs), `/manifest.webmanifest`, `/opengraph-image` (PNG 1200×630, 134 KB), `/icon.svg`. Não existe blog, `/contato`, página de cases nem páginas por segmento/cidade.

---

## 3. Top 10 problemas

| # | Problema | Sev. | Esforço | Impacto | Onde |
|---|---|---|---|---|---|
| 1 | `og:image`, `og:site_name`, `og:locale` ausentes e `twitter:title/description` **da home** em todas as 28 páginas internas | 🔴 | S | CTR social, marca | Todas as `page.tsx` com `openGraph` + `layout.tsx` |
| 2 | `/sob-medida`, a única página de serviço comercial, tem title "Sob medida · AraLabs", sem "sistema", "software" nem "desenvolvimento", e schema `CollectionPage` | 🔴 | S | Ranking, CTR | `src/app/sob-medida/page.tsx` |
| 3 | `/produtos/komyx` x `komyx.com.br` disputam a mesma intenção ("sistema para buffet"), sem canonical nem diferenciação. **Decidido: `komyx.com.br` é a fonte de verdade**; `/produtos/komyx` vira vitrine (seção 28) | 🟠 | M | Ranking | `src/app/produtos/komyx/page.tsx` + site Komyx |
| 4 | LCP da home atrasado 0,5–2,9 s pela intro (H1 mascarado até a animação) | 🟠 | M | Performance/CWV | `src/components/home/heroIntro.ts`, `globals.css:1170-1185` |
| 5 | SoftwareApplication declara `price: "0"` para produtos pagos (Komyx a partir de R$ 99/mês, Casa Leve R$ 9,90/mês) e Lumo usa categoria inválida `EducationApplication` | 🟠 | XS | Confiança/structured data | `src/lib/seo/schemas.ts:65`, `komyx/page.tsx:229`, `casa-leve/page.tsx:241`, `lumo/page.tsx:136` |
| 6 | H1s-slogan sem a entidade/keyword da página (Arakids, Lumo, Jornadas, Casa Leve, Le Barista, Empresa, Produtos) | 🟠 | S | Ranking | `page.tsx` de cada produto |
| 7 | 6 descriptions entre 254 e 325 caracteres (truncadas na SERP); a de `/produtos` termina em "Abra. Entenda. Use." | 🟡 | XS | CTR | `produtos`, `komyx`, `le-barista`, `sono-leve`, `jornadas`, `casa-leve` |
| 8 | Sitemap inconsistente: 11 páginas indexáveis e linkadas no footer de todas as páginas ficam fora; legais de Casa Leve/Lumo dentro; `lastmod` igual (2026-10-03) para tudo | 🟡 | XS | Indexação/qualidade de sinal | `src/app/sitemap.ts` |
| 9 | Nenhum conteúdo informacional: zero páginas para as buscas que trazem os públicos dos apps (AAC, Ferber, moagem, buffet) | 🟠 | L–XL | Ranking/autoridade | — (novo conteúdo) |
| 10 | E-E-A-T fraco nas páginas comerciais: sem pessoas, sem cases/clientes do Komyx, CNPJ só nos textos legais, sem `sameAs`, sem telefone/WhatsApp | 🟡 | S–M | Confiança/conversão | `/empresa`, `/sob-medida`, `schemas.ts` |

---

## 4. Technical SEO

### 4.1 O que está certo
- `metadataBase: new URL('https://aralabs.com.br')` e canonical relativo por página → canonicals absolutos corretos em 29/29.
- `title.template: '%s · AraLabs'` aplicado em todas.
- `robots` condicional a `VERCEL_ENV === 'production'` em `layout.tsx` **e** em `robots.ts` → previews não indexam. Muito bom.
- `googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 }` → permite thumbnails grandes no Discover/SERP.
- `<html lang="pt-BR">`, `next/font` com `display: swap` e preload do woff2.
- `JsonLd` escapa `<` (`<`) → sem XSS por JSON-LD.
- Nenhum conteúdo crítico depende de JS: `InView` e a intro só adicionam atributos depois do mount; sem JS o HTML aparece no estado final. Bem feito.

### 4.2 Bug sistêmico de metadata (merge raso)

O doc do Next 16 (`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`, seção *Merging*) confirma: `openGraph` definido na página **substitui o objeto inteiro** do layout. Resultado medido em produção:

| Página | og:image | og:site_name / og:locale | twitter:title |
|---|---|---|---|
| `/` | ✅ `/opengraph-image` | ✅ | ✅ próprio |
| Qualquer outra (28) | ❌ ausente | ❌ ausente | ❌ "AraLabs — Tecnologia simples para pequenos negócios" (herdado) |

Código atual (padrão repetido em ~28 arquivos), ex. `src/app/produtos/komyx/page.tsx:25`:
```ts
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/komyx' },
  openGraph: { title: pageTitle, description: pageDescription, url: '/produtos/komyx', type: 'website' },
};
```
Correção recomendada: um helper único que monta tudo (ver Implementation Plan, item 1).

### 4.3 Outros pontos técnicos
- **`priority` deprecado no Next 16** (doc `image.md`: "Starting with Next.js 16, the `priority` property has been deprecated in favor of `preload`"). Usado em `LumoVisuals.tsx:47,116`, `LeBaristaVisuals.tsx:99`, `PhoneFrame.tsx:85`. Hoje ainda funciona (o preload do hero do Lumo aparece no HTML), mas deve migrar para `preload` ou `fetchPriority="high"`.
- **`robots.ts` emite `Host: https://aralabs.com.br`**: diretiva não padrão (só Yandex), inofensiva. Pode remover.
- **404 com dois `<meta name="robots">`** (`noindex` e `index, follow`). O status 404 já resolve; o Google aplica o mais restritivo. Só ruído: adicionar `export const metadata = { robots: { index: false } }` em `not-found.tsx` não é possível de forma limpa; aceitar como está. 🟢
- **Dependências sem uso**: `embla-carousel-react` e `embla-carousel-autoplay` não são importadas em nenhum arquivo. Não pesam no bundle (tree-shaken), mas devem sair do `package.json`.
- **HTML grande**: home 199 KB bruto / 29 KB br; Komyx **303 KB bruto** (mocks inteiros em SVG/JSX + payload RSC duplicado). Não bloqueia, mas aumenta TTFB/parse em 3G. Ver seção 12.

---

## 5. Crawlability & Indexability

| Checagem | Resultado | Avaliação |
|---|---|---|
| `http://aralabs.com.br/` | 308 → `https://aralabs.com.br/` | ✅ |
| `https://www.aralabs.com.br/` | **307** → apex | 🟡 Deveria ser 308/301 (permanente). Configurar no painel Vercel → Domains (redirect `www` → apex como *permanent*) |
| `http://www.aralabs.com.br/` | 308 → `https://www…` → 307 → apex | 🟡 Cadeia de 2 saltos; some ao corrigir o item acima |
| Trailing slash `/produtos/` | 308 → `/produtos` | ✅ |
| Query string `/produtos?utm_source=x` | 200 com canonical `/produtos` | ✅ |
| URLs legadas (`/tese`, `/ara-agenda`, `/casa-leve`, `/komyx`, `/arakids`) | 308 para destino final (1 salto) | ✅ |
| Inexistente | 404 real (não soft 404), página útil com links | ✅ |
| `robots.txt` | `Allow: /` + sitemap | ✅ |
| Páginas órfãs | Nenhuma: todas recebem link do header/footer (produtos, legais de 5 apps) ou das páginas-mãe (suporte, créditos, dedicatória, Arakids legal) | ✅ |
| Crawl budget | 29 URLs estáticas: **não é um problema neste site**. Não otimizar isso | — |

**Sitemap (`src/app/sitemap.ts`) — inconsistências:**
- O comentário diz que as páginas App Store de Jornadas/Sono Leve/Le Barista "ficam fora do sitemap", mas elas são `index, follow` **e** linkadas pelo footer em todas as 29 páginas. Ficar fora do sitemap não impede a indexação; só manda um sinal contraditório.
- `/produtos/*/suporte` (4 páginas com FAQ real, como "O app pede pra moer mais fino, mas meu moedor já está no mínimo") são as legais com **mais** potencial de busca e estão fora.
- `lastModified = '2026-10-03'` para todas as URLs. O Google ignora `lastmod` quando percebe que não é confiável; `priority` e `changefreq` são ignorados pelo Google.

**Recomendação de política de indexação** (substituída pela versão final em 27.E):

| Tipo | Index | Sitemap | Motivo |
|---|---|---|---|
| Home, hubs, produtos, sob-medida, empresa | index | sim | páginas-alvo |
| `/produtos/*/suporte` | index | **sim** | FAQ responde dúvidas reais de usuários do app |
| `/produtos/*/privacidade`, `/termos`, `/excluir-conta` | **noindex, follow** | **não** | Precisam existir e ser acessíveis (App Store/Play), não precisam ranquear. `noindex` não bloqueia revisores nem usuários |
| `/produtos/lumo/creditos`, `/dedicatoria` | index | não | conteúdo único, baixo valor de busca |

Risco de "páginas inúteis indexadas": baixo hoje (os legais têm títulos distintos e não competem), mas 14 páginas legais em 29 URLs diluem a percepção do domínio. O `noindex` nos legais é recomendado, não urgente.

---

## 6. On-page SEO

### 6.1 Titles

| URL | Atual | Problema | Sugerido (≤ 60 chars, com template " · AraLabs" quando couber) |
|---|---|---|---|
| `/` | AraLabs — Tecnologia simples para pequenos negócios | Genérico; nenhuma categoria buscável | `AraLabs — Software para pequenos negócios e apps para famílias` (default absoluto, 62) ou manter a tagline se a marca for prioridade |
| `/sob-medida` | Sob medida · AraLabs | Sem keyword | `Sistema sob medida para pequenos negócios · AraLabs` |
| `/empresa` | Empresa · AraLabs | Sem entidade | `Sobre a AraLabs, empresa de software em Arapongas (PR)` (absoluto) |
| `/produtos` | Produtos · AraLabs | Genérico | `Apps e sistemas da AraLabs: Komyx, Lumo, Casa Leve e mais` (absoluto) |
| `/produtos/komyx` | Komyx — Gestão para buffets | Disputa a categoria com `komyx.com.br` | `Komyx, o sistema para buffets da AraLabs` (foco em marca/portfólio; seção 28) |
| `/produtos/lumo` | Lumo — comunicação visual pra famílias | Não usa o termo que o público busca (CAA/AAC, prancha) | `Lumo: app de comunicação alternativa (CAA) grátis · AraLabs` |
| `/produtos/sono-leve` | Sono Leve — treino de sono do bebê | Ok; pode citar o método | `Sono Leve: app de treino de sono do bebê (Ferber) · AraLabs` |
| `/produtos/arakids` | Arakids — jogos educativos sem anúncio | Bom; faltam idade/grátis | `Arakids: jogos educativos grátis sem anúncio, 2 a 10 anos` |
| `/produtos/casa-leve` | Casa Leve — família organizada, juntos | Slogan | `Casa Leve: app de tarefas e rotina da família · AraLabs` |
| `/produtos/jornadas` | 55 chars + template = 65 | Longo | `Jornadas: app de hábitos e metas de leitura · AraLabs` |
| `/produtos/le-barista` | 66 + template = 76 | Longo (truncado) | `Le Barista: app para regular o espresso em casa · AraLabs` |

### 6.2 Descriptions
Alvo de 140–158 caracteres, benefício + diferencial + CTA implícito. Hoje 6 passam de 250. Sugestões:

- `/produtos` (313 → 152): `Komyx para buffets, Lumo para crianças não-verbais, Casa Leve para a rotina da família e outros apps da AraLabs. Simples de usar, preço na página.`
- `/produtos/komyx` (307 → ~150): `Komyx é o sistema para buffets feito pela AraLabs: orçamento online, reserva no Pix, contrato e convite. Conheça os planos em komyx.com.br.` Sem preço detalhado aqui: preço e recursos ficam na fonte de verdade (seção 28). A frase atual "depois de R$ 199 por R$ 149 no mensal" também é confusa fora de contexto.
- `/produtos/sono-leve` (325 → 155): `Treino de sono do bebê com o método Ferber: timer com os intervalos de cada noite, registro de despertares e mamadas. Sem conta, dados só no celular.`
- `/produtos/le-barista` (316 → 150): `Registre cada shot e receba um ajuste por vez (moagem, dose ou tempo) até o espresso ficar no ponto. Guias de V60 e AeroPress. Grátis, para iPhone.`
- `/produtos/jornadas` (260 → 150): `Acompanhe livros, cursos e hábitos com sessões de foco, sequência de dias e meta semanal. Grátis, sem anúncios e sem conta. Para iPhone.`
- `/produtos/casa-leve` (254 → 155): `Tarefas com pontos, compras, agenda e recompensas num app só para a família. Menos cobrança em casa, mais autonomia para as crianças. 30 dias grátis.`
- `/sob-medida` (166 → 156): `Sistema sob medida para pequenos negócios: agenda, orçamento, cobrança por Pix e painel do dono. Preço fechado, proposta em 2 dias úteis. Arapongas (PR).`

### 6.3 H1

| URL | H1 atual | Problema | Sugestão (mantendo a voz) |
|---|---|---|---|
| `/` | Software que cabe no seu negócio. Não o contrário. | Ok para marca | Manter |
| `/sob-medida` | Seu problema ainda não tem produto? A gente faz. | Sem "sistema sob medida" | Kicker visível vira parte do H1: `Sistema sob medida: seu problema ainda não tem produto? A gente faz.`, ou manter o H1 e garantir "sistema sob medida" no primeiro parágrafo e no primeiro H2 |
| `/produtos/arakids` | Pra onde vamos hoje? | Não diz o que é | `Arakids: jogos educativos sem anúncio. Pra onde vamos hoje?` |
| `/produtos/lumo` | Toque pra dizer. | Não diz o que é | `Lumo, comunicação alternativa para crianças não-verbais. Toque pra dizer.` (segunda frase como linha estilizada) |
| `/produtos/jornadas` | Um dia de cada vez. | idem | `Jornadas: livros, cursos e hábitos, um dia de cada vez.` |
| `/produtos/casa-leve` | Ninguém precisa ficar lembrando ninguém. | idem | Prefixar com `Casa Leve:` ou colocar "app de rotina da família" no H1 |
| `/produtos/le-barista` | O espresso no ponto. | Falta marca/categoria | `Le Barista: o espresso no ponto, em casa.` |
| `/produtos/komyx` | A festa se vende sozinha. Você só confirma. | Falta a entidade | `Komyx, sistema para buffets: a festa se vende sozinha.` (H1 de categoria fica em `komyx.com.br`) |
| `/empresa`, `/produtos` | slogans | — | Manter, mas com espaço entre spans (abaixo) |

**Bug de texto em H1:** em `/empresa`, `/produtos`, `/produtos/komyx` e `/produtos/casa-leve` as linhas do H1 são `<span class="block">` **sem espaço** entre elas. O `textContent` vira "Trabalhamospara quemtrabalha." e "Sete produtos.Nenhum manual.". O Google renderiza com layout e costuma inserir a quebra, mas leitores de tela, snippets e ferramentas que leem `textContent` não. Correção: `{' '}` entre os spans (a home já faz isso corretamente).

### 6.4 Hierarquia de headings — problemas sistêmicos
- **Footer (`src/components/site/Footer.tsx:56,94`) usa `<h3>` para "Produtos", "AraLabs", "Contato", "Privacidade e termos"** em todas as 29 páginas. Esses H3 aparecem depois do último H2 da página e entram no outline como subtópicos dele (na home: "Seu problema ainda não tem produto?" → "Produtos", "Contato"…). Trocar por `<p>` (o `<nav>`/`<footer>` já dá a semântica) ou por `<h2>` dentro de um footer com `aria-labelledby`.
- **"Abra. Entenda. Use." é H2 na home e em `/empresa`** e aparece de novo no footer e no fim da description de `/produtos`. É mote de marca, não tópico: usar `<p>` estilizado.
- Home: os nomes dos produtos (Casa Leve, Arakids, Lumo…) são H3 sob H2 narrativos ("Então fizemos alguns para quando o trabalho termina."). Aceitável. O H2 `sr-only` "A caminho da App Store" está ok.
- Legais e suporte: hierarquia limpa (H1 → H2 numerados → H3 de FAQ). ✅

### 6.5 Conteúdo por página (o que falta e por quê)
- **`/sob-medida` (813 palavras)**: é a única página que pode captar busca comercial de serviço, e não cita tecnologias, tipos de sistema (agendamento, orçamento, gestão de clientes), faixa de preço nem prazo concreto. Faltam: (a) 2–3 **exemplos reais** de sistemas já feitos (o próprio Komyx nasceu assim; "Aragenda" foi descontinuado); (b) seção "Quanto custa um sistema sob medida" com faixa ou o modelo "setup + mensalidade" explicado com números; (c) segmentos atendidos com uma frase cada (salão, clínica, oficina, escolinha, que já são citados na home); (d) stack ("web + app, Pix, WhatsApp"), que dá confiança técnica a quem compara software houses. O FAQ já existe (5 perguntas boas).
- **`/produtos/komyx` (1.600 palavras)**: duplica a página comercial do `komyx.com.br`. Com a decisão da seção 28, provas (nº de buffets, depoimentos, prints reais) e FAQ de objeções ("Funciona para buffet de casamento?", "Como o cliente paga?") devem ir para o `komyx.com.br`; aqui fica um resumo com link forte.
- **`/produtos/lumo` (1.050 palavras)**: bom conteúdo, mas não usa o vocabulário do público: "comunicação aumentativa e alternativa", "CAA", "prancha de comunicação", "autismo", "TEA", "apraxia". Ao falar só em "crianças não-verbais", perde a maior parte das buscas. Incluir uma seção "Para quem é" mencionando TEA/autismo, apraxia de fala e síndrome de Down, com cuidado e sem promessa clínica.
- **`/produtos/sono-leve`**: citar "método Ferber", "check-in progressivo", "a partir de quantos meses" (com fonte e o aviso "não é conselho médico", que já existe).
- **`/produtos/le-barista`**: o FAQ de suporte tem perguntas excelentes de busca ("moedor já está no mínimo"). Essas respostas merecem virar conteúdo público (seção 17).
- **`/empresa` (785 palavras)**: princípios bons, mas sem pessoas. Ver E-E-A-T.

---

## 7. Pages audit (resumo por página indexável)

| URL | Primary keyword proposta | Secundárias | Intenção | Funil | Nota on-page atual |
|---|---|---|---|---|---|
| `/` | AraLabs | ara labs, aralabs arapongas, empresa de software arapongas | Navegacional | Topo/marca | 6/10 |
| `/sob-medida` | sistema sob medida | desenvolvimento de sistema sob medida, software sob medida pequena empresa, sistema de agendamento personalizado | Comercial | Meio/fundo | 4/10 |
| `/empresa` | AraLabs empresa | empresa de software em Arapongas, desenvolvedora de software Arapongas PR | Navegacional/local | Topo | 5/10 |
| `/produtos` | apps AraLabs | — | Navegacional | Topo | 5/10 |
| `/produtos/komyx` | Komyx AraLabs (marca) | Komyx buffet | Navegacional | Meio | 6/10 — `sistema para buffet infantil` e afins passam para `komyx.com.br` |
| `/produtos/lumo` | aplicativo de comunicação alternativa | app CAA grátis, prancha de comunicação autismo, pictogramas ARASAAC app | Comercial/transacional (download) | Meio/fundo | 5/10 |
| `/produtos/sono-leve` | app treino de sono bebê | método Ferber app, timer Ferber, treino de sono gradual | Comercial | Meio | 6/10 |
| `/produtos/arakids` | jogos educativos sem anúncio | jogos educativos grátis online crianças 4 anos, jogos infantis sem propaganda | Transacional (usar) | Fundo | 6/10 |
| `/produtos/casa-leve` | app de tarefas para família | app rotina das crianças, quadro de tarefas com pontos, app mesada tarefas | Comercial | Meio | 5/10 |
| `/produtos/jornadas` | app de hábitos | app meta de leitura, controle de leitura de livros app | Comercial | Meio | 5/10 |
| `/produtos/le-barista` | app para espresso | como regular moagem espresso, app barista caseiro | Comercial | Meio | 5/10 |
| `/produtos/*/suporte` | "[produto] suporte" | perguntas específicas | Navegacional/suporte | Pós-venda | 7/10 |

---

## 8. Keywords & Search Intent

**O que a AraLabs é, pela codebase:** empresa de software de Arapongas (PR) com duas linhas: (1) **B2B**: Komyx (SaaS para buffets) e desenvolvimento sob medida para pequenos negócios de serviço; (2) **B2C**: apps para família e uso pessoal (Casa Leve, Arakids, Lumo, Sono Leve, Jornadas, Le Barista).

**Público e dores:** dono de buffet que vive no WhatsApp e na planilha; pequeno negócio de serviço (salão, clínica, oficina, escolinha) sem sistema; pais de crianças não-verbais/autistas; pais de bebê com sono ruim; pais que querem jogos sem anúncio; quem faz espresso em casa.

### Clusters

| Cluster | Exemplos de buscas (pt-BR) | Página hoje | Status |
|---|---|---|---|
| **Brand** | AraLabs, Ara Labs, aralabs arapongas, aralabs apps | `/`, `/empresa` | ✅ (falta "Ara Labs" com espaço em algum lugar visível/`alternateName`) |
| **Serviço** | sistema sob medida, desenvolvimento de sistema personalizado, empresa de software para pequenas empresas, criar sistema de agendamento | `/sob-medida` | 🟡 fraca |
| **Dores (B2B)** | como organizar agenda de buffet, controlar orçamento de festa, sair da planilha, sistema para substituir WhatsApp | — | ❌ |
| **Produto B2B** | sistema para buffet, software buffet infantil, contrato buffet digital, portaria de festa lista de convidados | `komyx.com.br` (fonte de verdade) | ➡️ fora deste domínio |
| **Tecnologia** | sistema com Pix integrado, app para pequenas empresas, sistema web e app | — | ❌ |
| **Comercial** | quanto custa um sistema sob medida, software house Paraná, software house pequena empresa | — | ❌ |
| **Transacional** | baixar app comunicação alternativa grátis, app treino de sono, jogos educativos online grátis | produtos | 🟡 |
| **Long-tail (B2C)** | prancha de comunicação para autista imprimir, pictogramas ARASAAC português, método Ferber tabela de intervalos, espresso amargo o que fazer, moagem fina ou grossa espresso | — | ❌ |
| **Local** | empresa de software Arapongas, desenvolvimento de sistemas Arapongas, software house Londrina/Apucarana/norte do Paraná | `/empresa` (endereço) | 🟡 |
| **Inglês/espanhol** | AAC app free (Lumo tem 4 idiomas: PT-BR, PT-PT, EN-US, ES-ES) | — | ❌ (site só em pt-BR) |

### Keywords importantes sem página adequada
1. **"quanto custa um sistema sob medida"** / "quanto custa desenvolver um sistema" (comercial, alto valor).
2. **"comunicação alternativa e aumentativa app" / "prancha de comunicação autismo"** (Lumo tem o produto e não tem conteúdo).
3. **"método Ferber" / "tabela Ferber" / "treino de sono"** (Sono Leve).
4. **"como regular a moagem do espresso" / "espresso amargo ou azedo"** (Le Barista).
5. **"sistema de agendamento para [salão/clínica]"** (sob medida por segmento, só se houver casos).
6. **"empresa de software em Arapongas"** (local; hoje só existe o endereço em `/empresa`).

---

## 9. Content gaps
Ver clusters acima e seções 17–18. Resumo: o domínio não tem **nenhuma página informacional**. Todas as 29 URLs são de marca, produto ou legais. Sem conteúdo que responda dúvidas, a única forma de ranquear é por marca, e as marcas são novas.

---

## 10. Internal linking

**Diagnóstico (contado no HTML de produção):**
- Header + footer linkam as 7 páginas de produto, `/produtos`, `/sob-medida`, `/empresa` e **10 páginas legais** (privacidade e termos de 5 apps) a partir de **todas as 29 páginas**. Os legais recebem o mesmo nº de links internos que os produtos.
- Âncoras dos produtos no menu são `{nome}{público}` concatenados ("KomyxPara buffets"). Aceitável.
- **Não existe nenhum link contextual entre produtos relacionados** (ex.: Casa Leve ↔ Arakids ↔ Sono Leve, todos "família") nem do Komyx para o sob medida.
- `/sob-medida` recebe links com "Sob medida" / "Como funciona o sob medida", nunca com "sistema sob medida".
- Links externos para `https://komyx.com.br` passam por redirect 308 para `www.komyx.com.br` (5 ocorrências; `products.ts:34` `KOMYX_URL`).
- Suporte/créditos/dedicatória: 2–5 links internos, adequado ao papel delas.

**Sugestões concretas (ORIGEM → ANCHOR → DESTINO):**

| Origem | Anchor | Destino |
|---|---|---|
| `/` seção "Sob medida" (`page.tsx` botão "Como funciona o sob medida") | sistema sob medida para o seu negócio | `/sob-medida` |
| `/produtos/komyx` (fim da página) | O Komyx nasceu de um sistema sob medida. Precisa de algo parecido para outro tipo de negócio? | `/sob-medida` |
| `/sob-medida` seção "A gente não começa do zero" | sistema para buffets (Komyx) | `/produtos/komyx` |
| `/produtos/casa-leve` | jogos educativos sem anúncio para as crianças | `/produtos/arakids` |
| `/produtos/arakids` | app de tarefas e rotina da família | `/produtos/casa-leve` |
| `/produtos/sono-leve` | rotina da família depois que o bebê dorme | `/produtos/casa-leve` |
| `/produtos/lumo` | rotina visual também para os irmãos (Casa Leve) | `/produtos/casa-leve` |
| `/empresa` "Duas linhas de trabalho" | sistemas sob medida / Komyx, sistema para buffets | `/sob-medida`, `/produtos/komyx` |
| Cada `/produtos/*/suporte` | Conheça o {produto} | `/produtos/{produto}` (confirmar que existe; hoje o link de volta é só breadcrumb/TOC) |
| Futuro conteúdo (seção 17) | {nome do app} | página do produto correspondente |

E: atualizar `KOMYX_URL` para `https://www.komyx.com.br` (sem salto).

---

## 11. Structured data

### Existente

| Schema | Onde | Validade | Problema |
|---|---|---|---|
| Organization (`@id #organization`) | Todas | Válido | Falta `legalName` (Thiago Tavares Consulting Ltda. - ME), `taxID` (CNPJ já público nas políticas), `sameAs` (App Store, Instagram/LinkedIn se existirem), `alternateName: "Ara Labs"`, `foundingDate`, `founder` (se quiser mostrar) |
| WebSite | Home | Válido | Ok. `SearchAction` não faz sentido (não há busca) |
| AboutPage | `/empresa` | Válido | Ok |
| CollectionPage | `/produtos` | Válido | Poderia ter `mainEntity: ItemList` dos produtos |
| CollectionPage | `/sob-medida` | **Tipo errado** | É uma página de serviço → `Service` (+ `WebPage`) |
| SoftwareApplication | 7 produtos | Parcial | **Komyx e Casa Leve com `offers.price: "0"`** (no Komyx, a entidade completa deve ficar no `komyx.com.br`; seção 28) (falso: R$ 99+/mês e R$ 9,90/mês). **Lumo `EducationApplication`** não é valor reconhecido (o Google aceita `EducationalApplication`, que o Arakids usa). Sem `image`/`screenshot`, sem `downloadUrl` do Lumo na App Store. Sem `aggregateRating`/`review` → **não gera rich result de app**, só serve para entender a entidade. Para Sono Leve/Jornadas/Le Barista "em revisão", OK manter |
| BreadcrumbList | — | Ausente | Faz sentido em `/produtos/{x}` e `/produtos/{x}/{legal}` |

### Recomendações (só o que tem função)
- **Corrigir SoftwareApplication** (preço real ou omitir `offers`; categoria do Lumo).
- **Service em `/sob-medida`** ajuda o Google a classificar a página como serviço comercial:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aralabs.com.br/sob-medida#service",
  "name": "Desenvolvimento de sistema sob medida",
  "serviceType": "Desenvolvimento de software sob medida",
  "description": "Sistema sob medida para pequenos negócios: agenda, orçamento, cobrança por Pix e painel do dono. Preço fechado pelo projeto e mensalidade pela operação.",
  "provider": { "@id": "https://aralabs.com.br/#organization" },
  "areaServed": { "@type": "Country", "name": "Brasil" },
  "audience": { "@type": "BusinessAudience", "audienceType": "Pequenos negócios de serviço" },
  "url": "https://aralabs.com.br/sob-medida"
}
```
- **FAQPage**: desde 2023 o Google só mostra rich result de FAQ para sites governamentais/de saúde reconhecidos. **Não adicionar esperando rich result.** As FAQs de `/sob-medida` e `/suporte` já estão em HTML semântico (`dl/dt/dd`, `h3`), o que basta.
- **BreadcrumbList** (helper novo em `schemas.ts`), ex. para `/produtos/lumo/privacidade`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Produtos", "item": "https://aralabs.com.br/produtos" },
    { "@type": "ListItem", "position": 2, "name": "Lumo", "item": "https://aralabs.com.br/produtos/lumo" },
    { "@type": "ListItem", "position": 3, "name": "Política de privacidade" }
  ]
}
```
- **Organization enriquecida** (dados que já são públicos no site):
```json
{
  "@type": "Organization",
  "@id": "https://aralabs.com.br/#organization",
  "name": "AraLabs",
  "alternateName": ["Ara Labs"],
  "legalName": "Thiago Tavares Consulting Ltda. - ME",
  "taxID": "50.010.836/0001-45",
  "sameAs": ["https://www.instagram.com/…", "https://www.linkedin.com/company/…"]
}
```
(`sameAs` só aceita perfis da **própria** AraLabs, como redes sociais reais. Komyx e App Store do Lumo são outras entidades e não entram aqui; a relação AraLabs → Komyx vai no schema do Komyx, ver seção 28.)
- **LocalBusiness/ProfessionalService**: só depois de criar o Google Business Profile e ter telefone. Hoje não há telefone nem horário público; marcar `LocalBusiness` sem NAP completo não ajuda.
- **Person**: só se a empresa decidir mostrar o fundador em `/empresa`.
- **Product/Article/BlogPosting**: Article só quando houver conteúdo (o helper `articleSchema` já existe e não é usado).

---

## 12. Performance / Core Web Vitals

> Estimativas pela implementação. Validar com PageSpeed/CrUX (seção 23).

| Problema | Impacto | Arquivo | Correção |
|---|---|---|---|
| Intro da home esconde o H1: `[data-intro] .hero-line-in { translate: 0 1.35em }` + `clip-path` na linha; animação começa em **1.400 ms** (desktop) / 520 ms (mobile); última linha com `opacity: 0` até 2.450 ms; fallback remove em 3.500 ms | **LCP** +0,5 a 2,9 s na 1ª visita da sessão (que é a visita de quem chega do Google) | `src/components/home/heroIntro.ts:20,137-160,382-400`; `src/app/globals.css:1170-1185` | Opção A (recomendada): H1 visível desde o primeiro paint e só os cards voam (remover `.hero-line*` do estado inicial `[data-intro]`). Opção B: manter a máscara, mas começar o reveal do H1 em ≤ 200 ms. Opção C: tocar a intro só para quem não veio de busca (`document.referrer` sem google/bing). Decisão de design: é sua |
| `Header` inteiro é client component (mega menu + menu mobile) e hidrata em todas as páginas | JS/INP leve | `src/components/site/Header.tsx:1` | Manter o markup no servidor e isolar só o estado em ilhas pequenas (`MobileMenuButton`, `ProductsDisclosure`), ou usar `<details>`/CSS `:focus-within` para o dropdown |
| JS+CSS transferidos ≈ **230–242 KB (br)** por página, inclusive em legais | FCP/INP em 3G | build | Rodar `next build` com análise de bundle; checar se `KomyxLive`/`HeroOrbit` não entram em rotas que não os usam. Remover deps `embla-*` |
| CSS global único (~122 KB bruto) com estilos de todas as páginas | Render-blocking em todas as rotas | `src/app/globals.css` | Mover blocos específicos (komyx, lumo, legal, hero) para CSS Modules ou para `layout`s de segmento |
| HTML de `/produtos/komyx` com 303 KB bruto (mocks como JSX/SVG + payload RSC) | TTFB/parse | `components/products/komyx/Mocks.tsx` (634 linhas) | Mocks abaixo da dobra podem virar imagens AVIF/WebP com `loading="lazy"`, ou ficar no HTML com `content-visibility: auto` nas seções |
| `animation-timeline: view()` e animações de scroll (komyx-open) | CLS: nenhum (só transform/clip). INP: ok | `globals.css` | Nada a fazer |
| Fonte: 1 família (Plus Jakarta Sans) via `next/font`, preload, `swap` | ✅ | `layout.tsx` | — |
| Third-party: só Vercel Analytics (script pequeno, async) | ✅ | `layout.tsx` | — |
| Vídeo `splash-loop.mp4` (22 KB) com `preload="metadata"` e poster | ✅ | `PhoneVideo.tsx` | — |
| `fetchPriority` não usado; `priority` deprecado | LCP de Lumo/Le Barista | `LumoVisuals.tsx`, `LeBaristaVisuals.tsx`, `PhoneFrame.tsx` | Trocar `priority` por `preload` (Next 16) no hero; `fetchPriority="high"` no candidato a LCP |

---

## 13. Images

| Arquivo | Origem | Uso | Observação |
|---|---|---|---|
| `public/images/casa-leve-banner-product*.png` (3 arquivos, **2,2–2,3 MB** cada) | PNG | `casa-leve/page.tsx` via `next/image` | Servidos como WebP pelo otimizador (ok para usuário), mas a origem pesada encarece a 1ª otimização e o repositório. Converter a origem para WebP/AVIF ~85% |
| `public/images/family-1.png` (**2,6 MB**, 1536×1024) | PNG | Casa Leve, `lazy`, alt descritivo ✅ | idem |
| `public/images/lumo-banner-mobile.png` / `-02.png` / `-md.png` | PNG | Hero Lumo, **`alt=""`** | São telas do produto. Se forem o visual principal do hero, merecem alt ("Telas do Lumo: cards de pictogramas e rotina visual"). Se forem puramente decorativos, ok |
| `public/images/le-barista/*.png` (660×1434, 100–225 KB) | PNG, q=85 | `PhoneFrame` com `fill` + `sizes` corretos | ✅ alt descritivo e específico. `src` de fallback `w=3840` é padrão do Next; não afeta navegador moderno |
| `public/brand/logo-lockup.png` (4096×2662, 165 KB) | PNG | Não encontrado em uso no `src` | Remover ou reduzir |
| `public/brand/logo-mark.png` (**184×170**) | PNG | `logo` do Organization schema e ícone 512 do manifest | **O manifest declara `sizes: '512x512'` para um PNG de 184×170** (incorreto). Para logo no Google, o recomendado é ≥ 112×112 (ok), mas gere um 512×512 real para o manifest e um `apple-icon.png` 180×180 |
| `opengraph-image` (PNG 1200×630, 134 KB) | gerado | Só na home | Ver seção 15 |
| Komyx, Sono Leve, Jornadas, Arakids | Mocks em SVG/JSX, sem `<img>` | — | Sem imagens indexáveis no Google Imagens para essas marcas. Ter pelo menos 1 screenshot real por produto (também para `SoftwareApplication.screenshot` e `og:image`) |

Nomes de arquivo são descritivos (`3-diagnostico.png`, `5-v60.png`). ✅ Não há CLS de imagem: todas têm `width/height` ou `fill` em container dimensionado.

---

## 14. Mobile

- Menu mobile (`Header.tsx`) renderiza todos os links no HTML do servidor (sheet oculta com `aria-hidden`) → links rastreáveis no mobile-first. ✅
- Mesmo conteúdo em desktop e mobile (não há `hidden` de conteúdo textual relevante; só a tagline do logo `sm:block`). ✅
- Botão do menu 44×44 (`h-11 w-11`). ✅ CTAs em pílula ≥ 44 px de altura. ✅
- Links do footer "privacidade · termos" inline com 15 px e separados por " · " → alvos pequenos e próximos (Lighthouse pode apontar "tap targets"). 🟢 Aumentar `py` ou empilhar.
- Intro mobile (compactIntro) também atrasa o H1 (520–1180 ms). Ver seção 12.
- Textos legais `text-[10px]`/`[11px]` só em kickers/labels (uppercase). Aceitável.

---

## 15. Semantic HTML / Accessibility

✅ Bom: um `<main>` por página (no layout), `<header>`, `<footer>`, `<nav aria-label>`, `<section aria-labelledby>`, `<article>` nos cards, `dl/dt/dd` no FAQ, `figure/figcaption` nos mocks, `aria-hidden` nos ornamentos. **Nenhum `<div onClick>`/`<span onClick>`** encontrado. Hamburger com `aria-expanded`/`aria-controls`. Link do logo com `aria-label`.

Problemas:
- **Mega menu com `role="menu"`/`menuitem`** (`Header.tsx`, dropdown Produtos). O padrão ARIA *menu* exige navegação por setas, que não existe. O correto para navegação de site é o padrão *disclosure* (botão com `aria-expanded` + lista de links, sem `role="menu"`). Além disso, `aria-haspopup="menu"` está num `<Link>` que também navega. 🟡
- `<h3>` no footer (seção 6.4). 🟡
- H1 com spans sem espaço (seção 6.3). 🟡
- Âncora do logo: o SVG contém `<title>AraLabs</title>` repetido (4 ocorrências por página), então o texto acessível vira "AraLabsAraLabs…". O `aria-label` do link corrige no header; no footer o link tem `aria-label="AraLabs"`. 🟢 Remover `<title>` dos SVGs decorativos dentro de links rotulados.
- Duas `<header>` e 4–6 `<nav>` nas páginas legais (header do site + header da página legal + TOCs). Ok desde que cada `nav` tenha `aria-label` distinto (verificar `LegalToc.tsx`). 🟢

---

## 16. E-E-A-T

| Sinal | Situação | O que falta (sem inventar) |
|---|---|---|
| Quem é a empresa | `/empresa` com princípios e endereço completo | Pessoas: fundador/equipe, foto, trajetória, LinkedIn. Hoje "Thiago Tavares" só aparece como razão social nas políticas |
| Razão social e CNPJ | Só nas páginas de privacidade/suporte | No footer global e em `/empresa` (e no schema `legalName`/`taxID`). Isso pesa para quem vai pagar o Komyx ou contratar sob medida |
| Contato | E-mail (`mailto:`) em todo o site | `CONTACT_WHATSAPP` vazio (`site.ts:13`) → nenhum botão de WhatsApp. Para B2B local isso pesa na conversão. Sem telefone, sem formulário |
| Prova social | Nenhuma | Komyx: nº de buffets ativos, depoimento, logo/nome de cliente com autorização. Lumo: avaliações da App Store, menção de terapeutas/fonoaudiólogos que usam. Sob medida: 1–3 casos (problema → solução → resultado) |
| Expertise | Copy honesta ("não é conselho médico", ARASAAC creditado, LGPD detalhada) | Para Sono Leve e Lumo (temas YMYL leves: saúde/desenvolvimento infantil), citar fontes e, se possível, revisão por profissional nomeado |
| Políticas | Completas e específicas por app | ✅ |
| Endereço | Visível em `/empresa` + schema | ✅ (Google Business Profile ainda pendente, conforme `docs/futuro.md`) |

---

## 17. Analytics / Tracking

**Implementado:** só `<Analytics />` do `@vercel/analytics/next` (pageviews, referrer, país, device). Nenhum `track()` customizado, nenhum GA4/GTM, nenhum pixel, nenhuma meta de verificação do Search Console no HTML (pode estar via DNS; confirmar).

**Eventos que deveriam existir** (com `track()` do `@vercel/analytics`, sem novo terceiro):

| Evento | Onde | Gatilho |
|---|---|---|
| `cta_contact` `{source, page}` | Header "Falar com a gente", home "Falar com a gente", `/sob-medida` START, 404 | clique em `mailto:`/WhatsApp (`contactHref`) |
| `komyx_signup_click` | home "Criar meu buffet", `/produtos/komyx` | clique para `komyx.com.br` |
| `appstore_click` `{app}` | Lumo (e os outros quando publicados) | clique para `apps.apple.com` |
| `arakids_open` | `/produtos/arakids` "Abrir o Arakids" | clique para `arakids.aralabs.com.br` |
| `product_nav` `{from, to}` | mega menu / cards | navegação para página de produto |
| `sob_medida_view_faq` | `/sob-medida` | opcional |

Como os CTAs são `<a>` em server components, o jeito mais barato é um pequeno client component `TrackedLink` ou um listener delegado único no layout (`data-track="cta_contact"`).

---

## 18. SEO Gap

**Temos**
- SSG completo, HTML 100% no servidor, CDN com cache HIT.
- Canonical, title template, `metadataBase`, robots por ambiente, sitemap/robots gerados.
- HTTPS, redirects 308 de URLs antigas, 404 real com links úteis.
- Organization + WebSite + SoftwareApplication; JSON-LD seguro.
- Alts descritivos onde há `<img>`; `next/image` com `sizes`.
- Landmarks semânticos, sem div clicável, FAQ em `dl`.
- Páginas legais completas por app (confiança, exigência das lojas).

**Temos parcialmente**
- Open Graph / Twitter (só a home está certa).
- Titles/descriptions (existem e são únicos, mas sem intenção/tamanho certo).
- H1 (existem e são únicos, mas sem keyword).
- Structured data (preço errado, tipo errado em `/sob-medida`, sem Breadcrumb).
- Sitemap (inconsistente com a política de indexação).
- Local (endereço sim; GBP, telefone e copy local não).
- E-E-A-T (políticas sim; pessoas/provas não).
- Internal linking (navegação sim; contextual não).
- Performance (arquitetura ótima; intro da home atrapalha o LCP).

**Não temos**
- Conteúdo informacional (blog/guias) para qualquer cluster.
- Página de casos/clientes.
- Eventos de conversão.
- `og:image` por página.
- BreadcrumbList.
- ~~Estratégia definida entre `aralabs.com.br/produtos/komyx` e `komyx.com.br`.~~ Decidida: `komyx.com.br` é a fonte de verdade (seção 28); falta implementar.
- Versões EN/ES do Lumo (o app tem 4 idiomas).
- Google Business Profile (segundo `docs/futuro.md`).

**Não precisamos**
- Otimização de crawl budget (29 URLs).
- `SearchAction`/sitelinks searchbox (sem busca interna).
- FAQPage para rich results (não elegível).
- Páginas por cidade em massa (o atendimento é nacional/remoto; uma página local basta).
- ISR/revalidate (conteúdo estático).
- AMP.
- hreflang hoje (só pt-BR). Passa a ser necessário se o Lumo ganhar páginas EN/ES.

---

## 19. SEO Scores

| Área | Nota | Justificativa |
|---|---|---|
| Technical SEO | **78** | SSG, canonical, robots por ambiente, redirects corretos. Perde por metadata merge, `www` 307, `priority` deprecado e CSS/JS globais |
| Crawlability | **90** | Tudo linkado, HTML completo, sem órfãs, sem cadeias (exceto `http://www`) |
| Indexability | **80** | Nada bloqueado indevidamente; perde por sitemap incoerente e 14 legais indexáveis sem necessidade |
| On-page SEO | **50** | Titles/descriptions únicos, mas sem keyword nas páginas comerciais; 6 descriptions truncadas; H1-slogan sem entidade |
| Content | **42** | Páginas de produto ricas e honestas; nenhum conteúdo informacional; `/sob-medida` raso para busca comercial; vocabulário do público ausente (Lumo) |
| Internal linking | **60** | Navegação global completa; nenhum link contextual; âncoras genéricas para `/sob-medida` |
| Structured data | **55** | Base boa e com `@id`; preço falso em 2 produtos, categoria inválida, tipo errado no serviço, sem Breadcrumb |
| Performance | **65** (estimada) | Infra excelente; LCP da home penalizado pela intro; ~235 KB br de JS+CSS por página |
| E-E-A-T | **40** | Políticas e endereço sim; sem pessoas, sem provas, sem telefone/WhatsApp, CNPJ escondido |
| Social metadata | **25** | 1 de 29 páginas com preview completo; Twitter errado em 28 |
| Mobile | **82** | Conteúdo igual, alvos ok, menu rastreável; intro mobile e links do footer pequenos |
| Accessibility/Semantics | **74** | Landmarks e HTML semântico bons; ARIA menu incorreto, H3 no footer, spans sem espaço |
| **Geral** | **61** | Fundação técnica forte, posicionamento e conteúdo fracos para busca |

---

## 20. Prioritized Issues

| ID | Problema | Sev. | Esf. | Impacto |
|---|---|---|---|---|
| P-01 | OG image/site_name/locale ausentes + Twitter herdado da home (28 páginas) | 🔴 | S | CTR (social), marca |
| P-02 | `/sob-medida` sem keyword em title/H1/description; schema `CollectionPage` | 🔴 | S | Ranking, CTR |
| P-03 | Komyx: preço `0` no schema; Casa Leve idem | 🟠 | XS | Confiança, structured data |
| P-04 | Lumo: `EducationApplication` inválido | 🟡 | XS | Structured data |
| P-05 | Intro da home atrasa o LCP | 🟠 | M | Performance |
| P-06 | Canibalização `/produtos/komyx` x `komyx.com.br`: decidido, `komyx.com.br` é a fonte de verdade; implementar seção 28 | 🟠 | M | Ranking |
| P-07 | H1-slogan sem entidade (6 páginas) | 🟠 | S | Ranking |
| P-08 | Descriptions > 160 chars (6 páginas) | 🟡 | XS | CTR |
| P-09 | Titles genéricos (`/`, `/empresa`, `/produtos`) e longos (Le Barista, Jornadas) | 🟡 | XS | CTR |
| P-10 | Sitemap incoerente + `lastmod` fixo | 🟡 | XS | Indexação |
| P-11 | Legais indexáveis (sugestão: noindex,follow) | 🟢 | XS | Qualidade de índice |
| P-12 | `www` → apex com 307 | 🟡 | XS (painel Vercel) | Indexação/consolidação |
| P-13 | Footer `<h3>` e H2 "Abra. Entenda. Use." | 🟡 | XS | Semântica |
| P-14 | Spans do H1 sem espaço | 🟡 | XS | Semântica |
| P-15 | Sem BreadcrumbList | 🟢 | S | SERP (breadcrumb) |
| P-16 | Organization sem legalName/taxID/sameAs/alternateName | 🟢 | XS | Entidade/E-E-A-T |
| P-17 | Sem eventos de conversão | 🟡 | S | Conversão/mensuração |
| P-18 | Sem WhatsApp/telefone, CNPJ só em legais | 🟡 | XS | Conversão/E-E-A-T |
| P-19 | Sem provas sociais/cases | 🟠 | M | Conversão/E-E-A-T |
| P-20 | Zero conteúdo informacional | 🟠 | XL | Ranking/autoridade |
| P-21 | ARIA menu incorreto no header | 🟢 | S | Acessibilidade |
| P-22 | `priority` deprecado → `preload` | 🟢 | XS | Manutenção/LCP |
| P-23 | Manifest declara 512×512 para PNG 184×170; sem `apple-icon` | 🟢 | XS | PWA/ícone |
| P-24 | Header 100% client; CSS global único | 🟢 | M | Performance |
| P-25 | Assets PNG de 2+ MB na origem; `logo-lockup.png` sem uso; deps `embla-*` sem uso | 🟢 | XS | Higiene |
| P-26 | `KOMYX_URL` sem `www` (redirect em cada clique) | 🟢 | XS | Higiene |
| P-27 | Lumo sem alt no hero | 🟢 | XS | Imagens/acessibilidade |

---

## 21. Roadmap

**Prioridade 0 — bloqueadores:** nenhum bloqueador de indexação. P-01 é o mais próximo disso (afeta toda distribuição social).

**Prioridade 1 — alto impacto, fazer já:** P-01, P-02, P-03, P-04, P-07, P-08, P-09, P-12.

**Prioridade 2 — otimização:** P-05, P-06 (decisão), P-10, P-11, P-13, P-14, P-15, P-16, P-17, P-18, P-22, P-23.

**Prioridade 3 — crescimento:** P-19, P-20, páginas novas (seção 24), Lumo EN/ES, GBP.

| Quando | O quê |
|---|---|
| **Hoje** | Helper de metadata (P-01); titles/descriptions/H1 (P-02, P-07–P-09); schema preço/categoria/Service (P-02–P-04); `www` 308 no painel Vercel (P-12); `{' '}` nos H1 (P-14); footer `<p>` (P-13); `KOMYX_URL` (P-26) |
| **Semana 1** | Sitemap + política de noindex (P-10, P-11); Breadcrumb + Organization enriquecida (P-15, P-16); OG image por produto (`opengraph-image.tsx` por segmento); eventos `track()` (P-17); WhatsApp/CNPJ (P-18); Search Console: verificar domínio, enviar sitemap, inspecionar as 11 páginas-alvo |
| **Semana 2** | Intro da home (P-05); conteúdo on-page de `/sob-medida` (preço, casos, segmentos); seção "Para quem é" do Lumo com o vocabulário CAA/TEA; vitrine do Komyx conforme a seção 28 (P-06); links contextuais (seção 10) |
| **Semana 3+** | Hub de conteúdo para 1–2 clusters escolhidos (seção 17); página de casos; Google Business Profile; Lumo em EN/ES com hreflang; header com ilhas client (P-24) |

---

## 22. Implementation Plan

| # | Arquivo | Problema | Alteração | Risco | Impacto |
|---|---|---|---|---|---|
| 1 | **novo** `src/lib/seo/metadata.ts` + todas as `page.tsx` com `metadata` | Merge raso descarta OG/Twitter | Helper `pageMetadata({ path, title, description, ogTitle?, image? })` que devolve `title`, `description`, `alternates.canonical`, `openGraph` completo (url, siteName, locale, type, images) e `twitter` (card, title, description, images). Substituir os ~28 blocos | Baixo (só `<head>`) | Alto (social/CTR) |
| 2 | `src/app/layout.tsx` | Defaults espalhados | Extrair `DEFAULT_OG_IMAGE` (`/opengraph-image`) para `site.ts` e usar no helper | Baixo | — |
| 3 | `src/app/produtos/{slug}/opengraph-image.tsx` (novos, 1 por produto) | Preview genérico | OG por produto com nome, tagline e cor de `products.ts` (mesma base do OG da raiz). Com isso, o helper só precisa do fallback | Baixo | Médio |
| 4 | `src/lib/seo/schemas.ts:52-80` | `free` padrão `true` gera preço 0 | Trocar `free?: boolean` por `offer?: { price: string; priceCurrency?: 'BRL'; description?: string } \| 'free' \| null`; Komyx: retirar o `SoftwareApplication` completo (seção 28); Casa Leve: `{ price: '9.90' }`; aceitar `image`, `screenshot`, `downloadUrl` | Baixo | Médio |
| 5 | `src/app/produtos/lumo/page.tsx:136` | Categoria inválida | `'EducationalApplication'` + `downloadUrl: LUMO_APPSTORE_URL` | Nenhum | Baixo |
| 6 | `src/app/sob-medida/page.tsx:22-32,140` | Title/desc/schema | Title `Sistema sob medida para pequenos negócios`, description nova (6.2), `serviceSchema()` no lugar de `collectionPageSchema` | Baixo | Alto |
| 7 | `src/lib/seo/schemas.ts` | Falta Service/Breadcrumb; Organization pobre | Adicionar `serviceSchema()`, `breadcrumbSchema(items)`; Organization com `alternateName`, `legalName`, `taxID`, `sameAs` | Baixo | Médio |
| 8 | `src/components/legal/LegalPage.tsx` | Sem breadcrumb schema | Emitir `breadcrumbSchema` a partir do produto/título que o componente já recebe (afeta 14 páginas de uma vez) | Baixo | Baixo |
| 9 | Páginas de produto (`komyx`, `lumo`, `arakids`, `jornadas`, `casa-leve`, `le-barista`) | H1-slogan | Inserir entidade/categoria no H1 (6.3), mantendo a frase de marca como segunda linha estilizada | Médio (visual) | Alto |
| 10 | `src/app/empresa/page.tsx:103`, `src/app/produtos/page.tsx`, `komyx/page.tsx`, `casa-leve/page.tsx` | Spans sem espaço | `{' '}` entre os `<span className="block">` | Nenhum | Baixo |
| 11 | `src/components/site/Footer.tsx:56,94` | `<h3>` para rótulos | `<p>` (mesmas classes) | Nenhum | Baixo |
| 12 | `src/app/page.tsx` (InView `as="h2"` "Abra. Entenda. Use.") e `src/app/empresa/page.tsx` | Mote como H2 | `as="p"` | Nenhum | Baixo |
| 13 | `src/app/sitemap.ts` | Inconsistência | Lista = páginas-alvo + `/produtos/*/suporte`; remover legais; `lastModified` por rota (constante por página ou omitir) | Baixo | Médio |
| 14 | `src/components/legal/LegalPage.tsx` ou cada página legal | Legais indexáveis | `robots: { index: false, follow: true }` via helper (`pageMetadata({ ..., noindex: true })`) em privacidade/termos/excluir-conta | Baixo (as lojas acessam normalmente) | Baixo–médio |
| 15 | `src/components/home/heroIntro.ts`, `src/app/globals.css:1170-1185` | LCP | Remover o estado inicial oculto do H1 (`.hero-line`, `.hero-line-in`, `.hero-line-last`) ou antecipar o reveal para ≤ 200 ms; manter a coreografia dos cards | Médio (muda a intro) | Alto (CWV home) |
| 16 | `src/lib/products.ts:34` | Redirect em cada clique | `KOMYX_URL = 'https://www.komyx.com.br'` | Nenhum | Baixo |
| 17 | `src/lib/seo/site.ts:13` | Sem WhatsApp | Preencher `CONTACT_WHATSAPP` (já liga os botões automaticamente) | Nenhum | Conversão |
| 18 | `src/components/site/Footer.tsx` (barra inferior) | CNPJ escondido | "AraLabs · Thiago Tavares Consulting Ltda. - ME · CNPJ 50.010.836/0001-45" | Nenhum | E-E-A-T |
| 19 | **novo** `src/components/site/TrackedLink.tsx` ou listener no layout | Sem eventos | `track()` de `@vercel/analytics` nos CTAs da seção 17 | Baixo | Mensuração |
| 20 | `LumoVisuals.tsx`, `LeBaristaVisuals.tsx`, `PhoneFrame.tsx` | `priority` deprecado | `preload` (ou `fetchPriority="high"` + `loading="eager"`) | Nenhum | Baixo |
| 21 | `src/app/manifest.ts`, `public/brand/` | Ícone 512 falso | Gerar `logo-mark-512.png` real; adicionar `src/app/apple-icon.png` | Nenhum | Baixo |
| 22 | `src/components/site/Header.tsx` | `role="menu"` sem teclado | Padrão disclosure: remover `role="menu"/"menuitem"/aria-haspopup`; botão separado para abrir o dropdown | Baixo | A11y |
| 23 | `package.json`, `public/brand/logo-lockup.png`, PNGs de 2 MB | Higiene | Remover `embla-*`; remover/reduzir lockup; converter origens para WebP | Nenhum | Baixo |
| 24 | `src/app/robots.ts` | `host` não padrão | Remover `host` | Nenhum | — |
| 25 | Vercel → Domains | `www` 307 | Redirect permanente (308) `www.aralabs.com.br` → `aralabs.com.br` | Nenhum | Consolidação |

### Código recomendado — item 1

```ts
// src/lib/seo/metadata.ts
import type { Metadata } from 'next';
import { SITE_NAME, LOCALE } from './site';

type PageMeta = {
  path: string;
  /** Goes through the "%s · AraLabs" template. */
  title: string;
  description: string;
  /** Social title; defaults to "title · AraLabs". */
  socialTitle?: string;
  /** Absolute path of the share image; defaults to the root OG image. */
  image?: string;
  noindex?: boolean;
};

export function pageMetadata({ path, title, description, socialTitle, image, noindex }: PageMeta): Metadata {
  const shareTitle = socialTitle ?? `${title} · ${SITE_NAME}`;
  const images = [{ url: image ?? '/opengraph-image', width: 1200, height: 630, alt: shareTitle }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: shareTitle, description, url: path, siteName: SITE_NAME, locale: LOCALE, type: 'website', images },
    twitter: { card: 'summary_large_image', title: shareTitle, description, images },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
```
Uso (`src/app/produtos/komyx/page.tsx`):
```ts
export const metadata = pageMetadata({
  path: '/produtos/komyx',
  title: 'Komyx, o sistema para buffets da AraLabs',
  description: 'Komyx é o sistema para buffets feito pela AraLabs: orçamento online, reserva no Pix, contrato e convite. Conheça os planos em komyx.com.br.',
});
```
Atenção: com `opengraph-image.tsx` por segmento (item 3), o arquivo tem precedência e o `image` do helper vira só o fallback. Testar no build se o arquivo do segmento sobrevive ao `openGraph` da página; se não sobreviver, passar `image: '/produtos/komyx/opengraph-image'` explicitamente.

### Código recomendado — item 4

```ts
// atual (schemas.ts)
...(params.free === false ? {} : { offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' } }),

// recomendado
offer?: { price: string; description?: string } | 'free' | null;
...
...(params.offer === null || params.offer === undefined
  ? {}
  : {
      offers: {
        '@type': 'Offer',
        price: params.offer === 'free' ? '0' : params.offer.price,
        priceCurrency: 'BRL',
        ...(params.offer !== 'free' && params.offer.description ? { description: params.offer.description } : {}),
      },
    }),
```

### Código recomendado — item 15 (opção A)

```css
/* globals.css — remove the hidden starting state of the headline; cards still fly in */
[data-intro] .hero-line { clip-path: none; }
[data-intro] .hero-line-in { translate: none; }
[data-intro] .hero-line-last .hero-line-in { opacity: 1; }
```
E em `heroIntro.ts`, deixar de animar `lines`/`h1` em `desktopIntro()` e `compactIntro()` (ou animar só um "settle" de 2–4 px que não esconde o texto).

---

## 23. Quick Wins (≤ 1 h cada)

1. Helper `pageMetadata` + trocar os ~28 blocos (item 1).
2. Title, description e schema `Service` de `/sob-medida`.
3. `free`/`offer` do schema: Casa Leve com preço real; Komyx sem `SoftwareApplication` completo (seção 28); Lumo `EducationalApplication`.
4. Descriptions das 6 páginas longas (texto pronto na seção 6.2).
5. `{' '}` nos H1 + footer `<h3>` → `<p>`.
6. Redirect `www` → apex permanente no painel da Vercel.
7. `KOMYX_URL` com `www`.
8. CNPJ no footer e `legalName`/`taxID`/`alternateName` no Organization.
9. Preencher `CONTACT_WHATSAPP` (se houver número comercial).
10. Search Console: propriedade de domínio, enviar `sitemap.xml`, pedir indexação de `/sob-medida` e `/produtos/lumo` depois das mudanças.

---

## 24. Opportunities for new pages / content strategy

### Competidores de SERP (o que verificar)
> Concorrentes observados no Google Brasil estão em 27.A.
A busca automática disponível é US-only e não reflete o Google Brasil. Nos testes, o que apareceu foi: apps de AAC na App Store, como [Mand AAC](https://apps.apple.com/mx/app/mand-aac/id6738563315), e para Ferber [Sleep Trainer – Ferber Method](https://apps.apple.com/app/id1555062851) e [Oona](https://apps.apple.com/us/app/id6747005575); para software sob medida no PR, software houses como [UDS](https://uds.com.br/blog/entenda-a-procura-por-fabrica-de-desenvolvimento-de-software-em-sao-paulo) e perfis de LinkedIn ([CodeFlow](https://br.linkedin.com/company/codeflowdev), [DevSolutions](https://br.linkedin.com/company/devsolutions-software)); para buffet, a SERP de teste trouxe conteúdo de contrato/curso ([Senac](https://www.sp.senac.br/cursos-livres/curso-de-buffet-infantil-da-ideia-a-viabilidade), [Petições Online](https://www.peticoesonline.com.br/modelo-contrato-prestacao-servicos-buffet-word)) e não SaaS. Isso sugere que **"contrato de buffet"** é uma porta de entrada informacional para o Komyx.

Buscas para analisar manualmente no google.com.br (aba anônima, localização Brasil):
- `sistema para buffet infantil`, `software para buffet`, `contrato de buffet infantil modelo`, `como fazer orçamento de buffet`
- `aplicativo de comunicação alternativa`, `prancha de comunicação autismo`, `app CAA grátis`, `pictogramas arasaac`
- `método ferber`, `tabela ferber intervalos`, `treino de sono bebê 6 meses`
- `como regular moagem espresso`, `espresso amargo`, `receita v60`
- `sistema sob medida`, `quanto custa desenvolver um sistema`, `software house londrina`, `empresa de software arapongas`
- `jogos educativos sem anúncio`, `jogos educativos online grátis 4 anos`

Tipos de concorrente esperados: **SaaS verticais** (para buffet), **lojas de app** (App Store/Play dominam "app de X"), **portais de maternidade/saúde** (Ferber, sono: BabyCenter, Bebê.com.br), **associações e terapeutas** (CAA/autismo), **blogs de café** (moagem/V60), **software houses regionais + agregadores** (sob medida), **marketplaces de template** (contrato de buffet).

### Arquitetura recomendada
O domínio tem duas audiências que não se misturam. Não dá para construir autoridade temática "do domínio" em sete assuntos; dá para construir **por hub**:

```
/                         marca
/sob-medida               serviço (B2B)  ── /sob-medida/{segmento} (só com caso real)
/casos                    provas (B2B)
/produtos                 hub
/produtos/{app}           produto
/produtos/{app}/suporte   FAQ do app
/guias/{tema}/{artigo}    conteúdo informacional, agrupado por tema/produto
```
Use `/guias/` (ou `/conteudo/`) em vez de `/blog/`: o nome reforça a utilidade e permite agrupar por tema. Breadcrumbs: Início › Guias › Comunicação alternativa › Artigo.

### Pillars e clusters (adaptados ao negócio real)

**PILLAR 1 — Comunicação alternativa para crianças (Lumo)**: melhor relação demanda × diferencial (grátis, ARASAAC, offline, 4 idiomas).
- O que é comunicação aumentativa e alternativa (CAA) e quando começar
- Prancha de comunicação: como montar uma em casa (com pictogramas ARASAAC; dá para oferecer prancha imprimível)
- Rotina visual para crianças autistas: exemplos por momento do dia
- Pictogramas ARASAAC: o que são, licença e como usar
- CAA atrapalha a fala? O que dizem os estudos (com fontes; revisado por fonoaudióloga, se possível)
- Depois: os mesmos 2–3 pillars em EN/ES (`/en/lumo`, `/es/lumo`) com hreflang

**PILLAR 2 — Treino de sono do bebê (Sono Leve)**: alta demanda, YMYL leve; exige fontes e aviso médico.
- Método Ferber: como funciona e tabela de intervalos por noite
- Ferber x "chair method" x extinção gradual
- Com quantos meses dá para começar o treino de sono
- Ritual da hora de dormir: passo a passo

**PILLAR 3 — Gestão de buffet (Komyx)**: **vai para `komyx.com.br/recursos/`** (decisão da seção 28). Não publicar no domínio AraLabs.
- Modelo de contrato de buffet infantil (com o contrato que o Komyx gera)
- Como montar orçamento de festa infantil (pacotes, cardápio, por convidado)
- Como controlar a reserva e as parcelas da festa no Pix
- Lista de convidados e portaria: como organizar a entrada da festa

**PILLAR 4 — Sistema sob medida para pequenos negócios (serviço)**
- Quanto custa um sistema sob medida (modelo setup + mensalidade, com faixas reais)
- Sistema sob medida ou SaaS pronto: como decidir (o Komyx é o exemplo dos dois lados)
- Do WhatsApp e da planilha para um sistema: por onde começar
- Casos: 1 página por projeto real (problema → o que foi feito → resultado)

**PILLAR 5 — Espresso em casa (Le Barista)**: long-tail com demanda e pouca concorrência em PT.
- Espresso amargo ou azedo: o que ajustar primeiro
- Como regular a moagem do espresso (e o que fazer quando o moedor já está no mínimo, pergunta que já está no suporte)
- Receita de V60 / Chemex / AeroPress

Prioridade sugerida: 1 (Lumo) e 4 (Sob medida) primeiro; 2 em seguida; 5 como oportunidade barata; 3 é executado no `komyx.com.br`.

### SEO programático: onde faz sentido e onde não faz
> Atualizado em 27.D: não criar SEO programático agora; os itens abaixo ficam como exceções futuras.
- ✅ **Pictogramas/pranchas por tema** (`/guias/prancha-de-comunicacao/{alimentação, banho, escola…}`): há dados reais (ARASAAC, licença CC BY-NC-SA, que exige atribuição e uso não comercial; o Lumo é gratuito), há intenção ("prancha de comunicação alimentação") e cada página tem conteúdo útil (prancha imprimível + explicação). Escala: 10–20 páginas, não milhares.
- ✅ **Receitas por método de café** (`/guias/cafe/{v60, chemex, aeropress, moka}`): 5–8 páginas com parâmetros reais do app.
- ⚠️ **Sob medida por segmento** (`/sob-medida/{salao, clinica, oficina, escolinha}`): **só** com caso real ou com módulo específico por segmento. Sem isso, vira thin content trocando substantivos.
- ❌ **Serviço × cidade** ("sistema sob medida em {cidade}"): não recomendo. O atendimento é remoto/nacional; uma página local em Arapongas basta (via `/empresa` + GBP).

### Local SEO
Faz sentido **parcialmente**: há endereço físico em Arapongas e o FAQ diz "quem é da região pode nos visitar". Para "empresa de software Arapongas", o caminho é: (1) Google Business Profile (categoria "Empresa de software"), (2) NAP idêntico em site/GBP/schema, com telefone, (3) uma seção visível em `/empresa` ou `/sob-medida` sobre atender negócios de Arapongas, Apucarana, Londrina e região, com um caso local, se existir. Não há demanda para páginas por cidade.

### Internacionalização
O site é só pt-BR (`lang="pt-BR"`, sem hreflang). O único produto com motivo para outras línguas é o **Lumo** (app em PT-BR, PT-PT, EN-US, ES-ES). Sugestão para o futuro: `/en/products/lumo` e `/es/productos/lumo` (+ privacidade traduzida), `alternates.languages` no metadata e sitemap com `alternates`. Não traduzir o restante.

### Canibalização

| Páginas | Keyword | Risco | Recomendação |
|---|---|---|---|
| `aralabs.com.br/produtos/komyx` × `www.komyx.com.br` | sistema/gestão para buffet | **Alto**: mesma intenção em dois domínios. `komyx.com.br` não tem canonical; o sitemap dele responde 307 | **Decidido: `komyx.com.br` é o dono da busca e a fonte de verdade (seção 28).** Em `/produtos/komyx`, mudar o foco para "Komyx, da AraLabs" (história, por que existe, link forte para komyx.com.br) e cortar a duplicação de funcionalidades, **ou** usar `canonical` cross-domain para komyx.com.br se o conteúdo continuar igual. Corrigir o sitemap/canonical do site do Komyx (outro repositório) |
| `/produtos/arakids` × `arakids.aralabs.com.br` | jogos educativos sem anúncio | Médio. O portal tem title "Ara Kids" fraco | O portal é o destino de uso; `/produtos/arakids` é a vitrine. Melhorar o title do portal e padronizar o nome ("Arakids" x "Ara Kids", hoje há os dois no site) |
| Home (H2 Komyx "A festa se vende sozinha…") × `/produtos/komyx` (H1 idêntico) | — | Baixo | Mudar o H2 da home para algo que aponte para a página ("Komyx, o sistema para buffets") |
| `/` × `/sob-medida` (H2 da home = H1 do sob medida: "Seu problema ainda não tem produto? A gente faz.") | sob medida | Baixo | Diferenciar o H2 da home |

---

## 25. Google Search Console — checklist

1. **Propriedade**: verificar como *propriedade de domínio* (DNS) para cobrir apex, `www` e subdomínios (`arakids.`).
2. **Sitemaps**: enviar `https://aralabs.com.br/sitemap.xml`; conferir "Sucesso" e nº de URLs descobertas.
3. **Páginas › Indexação**: listar "Rastreada, mas não indexada" e "Descoberta, não indexada"; conferir se legais estão ocupando o índice; conferir "Página alternativa com tag canônica adequada" (www/http).
4. **Inspeção de URL**: home, `/sob-medida`, `/produtos/komyx`, `/produtos/lumo`. Ver HTML renderizado, canonical escolhido pelo Google e se o H1 aparece.
5. **Desempenho**: queries por página (filtro de página); separar queries de marca (aralabs, komyx, lumo…) das sem marca; CTR por posição nas 10 páginas principais; impressões de `/sob-medida` (esperado: quase zero hoje).
6. **Core Web Vitals**: grupos de URL mobile/desktop; olhar LCP da home especificamente (hipótese da intro).
7. **Experiência na página / HTTPS**: ok esperado.
8. **Melhorias / rich results**: Logo (Organization), Breadcrumbs (depois do item 8). SoftwareApplication não deve gerar rich result sem rating.
9. **Ações manuais e problemas de segurança**: confirmar vazio.
10. **Links**: principais sites que linkam (App Store? komyx.com.br?) e páginas internas mais linkadas (devem ser produtos, não legais).
11. **Configurações › Rastreamento**: status do robots.txt e host; erros 5xx.
12. Repetir para `komyx.com.br` (propriedade separada): é lá que `sistema para buffet infantil` deve ganhar impressões. Acompanhar a queda de impressões de `/produtos/komyx` para essas queries depois da seção 28.

---

## 26. Perguntas / informações externas que faltam

1. ~~**Komyx**: qual domínio deve ranquear?~~ **Respondido: `komyx.com.br`.** Falta saber quem mantém o site do Komyx (outro repositório) para as tarefas externas da seção 28.
2. **Prioridade de negócio**: qual linha precisa de tráfego orgânico agora: sob medida (leads B2B), Komyx (assinaturas) ou apps de família (downloads)? Isso muda a ordem dos pillars.
3. Existe **número comercial de WhatsApp/telefone** que possa ir para o site e para o GBP?
4. Há **clientes/casos** do sob medida ou do Komyx que podem ser citados (com autorização)? Números (buffets ativos, festas, downloads do Lumo, avaliações na App Store)?
5. O fundador/equipe **aceita aparecer** em `/empresa` (nome, foto, LinkedIn)?
6. Perfis sociais oficiais (Instagram, LinkedIn, YouTube) para `sameAs`?
7. Dados do **Search Console** e do Vercel Analytics (queries, páginas de entrada, CWV de campo) para validar as hipóteses.
8. A **intro da home** é inegociável no desenho, ou dá para deixar o H1 visível desde o início?
9. Há interesse em **Lumo EN/ES** na web (o app já tem os idiomas)?
10. Existe faixa de **preço** pública para o sob medida (mesmo "a partir de")?
11. Quem pode **revisar tecnicamente** conteúdo de CAA (fonoaudióloga) e de sono infantil (pediatra/consultora)?

---

## 27. Adendos

Estes itens complementam a auditoria acima sem repetir os achados. Quando um adendo contradiz uma seção anterior, **vale o adendo** (ver 27.E).

### 27.A SERP: concorrência observada

Pesquisa exploratória em 7 out. 2026. É um retrato pontual: validar em navegador anônimo, no Google Brasil e nas cidades-alvo.

#### Gestão para buffet

Consultas: `sistema para buffet infantil agenda orçamento pix` e `software para buffet infantil gestão de eventos`.

| Domínio | Proposta visível na SERP | Implicação para o Komyx |
|---|---|---|
| Festech | Plataforma de gestão para buffets infantis: agenda, CRM, contratos, financeiro, custos e estoque | Concorrente mais amplo. O Komyx deve se diferenciar pelo foco: orçamento online, reserva no Pix, contrato, convite/RSVP e operação simples |
| Buffetmax | Software para buffet infantil e eventos | Disputa os termos de categoria. Exige landing com a entidade `sistema para buffet infantil`, não só a marca Komyx |
| SimpleWork | Captação de leads, eventos, orçamentos e financeiro para buffet infantil | Validar quais recursos o Komyx atende e não alegar lacunas que não existem |
| Oni Plataforma | Software para buffet/casa de festas com foco em WhatsApp, agenda e financeiro | A dor "WhatsApp + agenda + cobrança" é linguagem forte para páginas comerciais |
| Sisfest, FestPRO, Eventool, ClickFest | Gestão de festas, contratos, convidados, financeiro e operação | A SERP é disputada por SaaS verticais; a página precisa de provas, casos e diferenciação verificável |

Recomendação (**decidido**: `komyx.com.br` é o dono de `sistema para buffet infantil`; ver seção 28): a landing e o conteúdo ficam no domínio Komyx; a AraLabs mantém a página de portfólio e marca, com link contextual forte para o domínio do produto. Isso detalha a recomendação de canibalização da seção 24.

#### Comunicação alternativa (CAA)

Consulta: `aplicativo comunicação alternativa crianças não verbais`.

| Domínio | Proposta visível na SERP | Implicação para o Lumo |
|---|---|---|
| Quero Dizer | App de comunicação aumentativa em português para crianças autistas e não verbais, famílias e escolas | O Lumo precisa usar os termos buscados: comunicação aumentativa e alternativa (CAA), prancha/comunicação visual e autismo, quando tecnicamente apropriado |
| Palavra Fácil | Comunicação alternativa e acompanhamento terapêutico infantil | Diferenciar o Lumo como ferramenta local/offline, sem cadastro nem rastreamento, que não é terapia nem promessa clínica |

#### Sono infantil

Consulta: `app treino de sono bebê método Ferber`.

Os resultados tendem a privilegiar conteúdos médicos, guias e comunidades, não apps. Conteúdo para o Sono Leve exige fonte, revisor identificado e linguagem não clínica. A página comercial deve continuar apresentando o app como ferramenta de organização e registro, não como orientação médica.

### 27.B Produção: redirects, HTTP e headers

Testes em produção confirmaram:

| URL / superfície | Resultado |
|---|---|
| `https://aralabs.com.br/` | `200`, HTTPS e HSTS ativo (`max-age=63072000`) |
| `/robots.txt` e `/sitemap.xml` | `200`, tipos `text/plain` e `application/xml` corretos |
| `http://aralabs.com.br/` | `308` para HTTPS |
| `https://www.aralabs.com.br/` | `307` para o apex (P-12) |
| Redirects legados do `next.config.ts` | `308`, destino final `200` |

Headers ausentes no snapshot: `X-Content-Type-Options`, `Referrer-Policy` e CSP. Não é problema de SEO prioritário; tratar como hardening (via `headers()` no `next.config.ts`) depois de testar Vercel Analytics, fontes e imagens.

### 27.C Imagens do Casa Leve: risco de bytes e LCP

Tamanhos de origem dos ativos em `public/`:

| Ativo | Tamanho |
|---|---:|
| `public/images/family-1.png` | 2,60 MB |
| `public/images/casa-leve-banner-product-mobile.png` | 2,30 MB |
| `public/images/casa-leve-banner-product.png` | 2,21 MB |
| `public/images/casa-leve-banner-product-md.png` | 2,19 MB |

Uso: `src/app/produtos/casa-leve/page.tsx:381-495`.

Acréscimo ao plano (complementa P-25): converter as origens para AVIF/WebP, reduzir as dimensões ao tamanho renderizado, manter `next/image` com `sizes` e medir PageSpeed mobile antes e depois. O `next/image` já entrega WebP ao navegador, então isso **não é regressão de CWV confirmada** sem dados de CrUX/Lighthouse.

### 27.D Conteúdo, arquitetura e linking: complemento

A arquitetura proposta na seção 24 deve respeitar a decisão sobre o Komyx:

```text
aralabs.com.br/
├─ /sob-medida
├─ /casos/[cliente]
├─ /guias/[tema]/[artigo]
└─ /produtos/[produto]       # vitrine e entidade

komyx.com.br/
├─ /sistema-para-buffet-infantil
├─ /recursos/[artigo]
└─ /[fluxo-comercial]
```

Com isso, o pillar "Gestão de buffet" da seção 24 passa para `komyx.com.br/recursos/`.

Links internos adicionais (o domínio Komyx é o dono da busca):

| Origem | Âncora | Destino |
|---|---|---|
| `/produtos/komyx` | Conheça o sistema Komyx para buffet infantil | `https://www.komyx.com.br/` |
| `/sob-medida` | Komyx, sistema para buffet e casa de festas | `/produtos/komyx` |
| Home, seção Komyx | Komyx, sistema para buffets | `/produtos/komyx` |

**Não criar SEO programático agora.** Esta regra substitui os itens marcados com ✅ em "SEO programático" na seção 24. Exceções futuras, só com conteúdo único e utilidade real:

- **Arakids**: páginas por faixa etária + objetivo, com catálogo real de jogos e orientação aos responsáveis.
- **Lumo**: pranchas/pictogramas por contexto, só respeitando a licença ARASAAC e com material utilizável.
- **Le Barista**: guias por método de café, com parâmetros realmente usados e testados no produto.

### 27.E Política final de indexação: legais, suporte e sitemap

Substitui a tabela "Recomendação de política de indexação" da seção 5 e os itens 13–14 do Implementation Plan:

| Tipo | Indexar | Sitemap | Motivo |
|---|---:|---:|---|
| Home, hubs, produtos, empresa, sob medida | Sim | Sim | Páginas-alvo |
| Suporte por produto com FAQ útil | Sim | Sim | Intenção pós-venda e long-tail legítima |
| Privacidade, termos e exclusão de conta | Não (`noindex, follow`) | Não | Exigência legal/das lojas, sem alvo orgânico |
| Créditos e dedicatória do Lumo | Decisão editorial; padrão: não indexar | Não | Baixo valor de busca, sem intenção comercial |

Se houver valor de marca deliberado em créditos/dedicatória, mantê-los indexáveis é aceitável. Não são risco técnico, e a prioridade é menor que OG, schema, LCP e a estratégia de domínio do Komyx.

### 27.F Itens externos ainda pendentes

1. ~~Confirmar qual domínio é dono da estratégia do Komyx.~~ Resolvido: `komyx.com.br` (seção 28).
2. Rodar PageSpeed/CrUX em `/`, `/sob-medida`, `/produtos/komyx`, `/produtos/casa-leve` e `/produtos/lumo`.
3. Consultar o Search Console: queries, canonicals escolhidos, páginas indexadas, CWV e CTR.
4. Validar as SERPs no Google Brasil por cidade e dispositivo.
5. Confirmar casos, dados públicos, especialistas revisores e canais oficiais antes de publicar provas de E-E-A-T.

---

## 28. Decisão: `komyx.com.br` é a fonte de verdade do Komyx

**Decidido em 2026-10-07.** Tudo sobre o Komyx (preço, planos, recursos, provas, FAQ comercial, conteúdo de buffet e a busca `sistema para buffet infantil`) mora em `https://www.komyx.com.br`. O `aralabs.com.br` só apresenta o Komyx como produto da AraLabs e manda o visitante para lá. Esta seção prevalece sobre qualquer recomendação anterior sobre o Komyx.

### 28.1 Papel de cada domínio

| | `www.komyx.com.br` | `aralabs.com.br/produtos/komyx` |
|---|---|---|
| Papel | Fonte de verdade, página comercial e cadastro | Vitrine do portfólio e prova de que a AraLabs faz produto B2B |
| Keywords | `sistema para buffet infantil`, `software para buffet`, `gestão de buffet`, `contrato de buffet`, `orçamento de festa` | `Komyx AraLabs`, `AraLabs buffet` (marca) |
| Preço e recursos | Completos e sempre atualizados | Resumo de 1 frase, sem números que possam ficar desatualizados, e link "Ver planos" |
| Provas, cases, FAQ de objeções | Sim | Não (no máximo 1 destaque com link) |
| Conteúdo informacional (`/recursos/…`) | Sim (pillar 3 da seção 24) | Não |
| Schema | `SoftwareApplication` completo com `offers` reais, `publisher`/`provider` → AraLabs | Sem `SoftwareApplication` completo; `WebPage` com `about` apontando para a entidade do Komyx |

### 28.2 Opções para `/produtos/komyx`

| Opção | O que é | Prós | Contras |
|---|---|---|---|
| **A. Vitrine enxuta, indexável (recomendada)** | Reescrever a página com cerca de 300–500 palavras: o que é, para quem, por que a AraLabs fez, 1 visual e CTA forte para o komyx.com.br. Canonical continua próprio | Mantém menu/footer/home coerentes; ranqueia por marca; zero duplicação | Exige reescrita da página (705 linhas hoje) |
| B. Redirect 308 para `www.komyx.com.br` | `next.config.ts` redireciona `/produtos/komyx` (e o `/komyx` atual) para o domínio do produto | Consolidação máxima, nada para manter | Menu e home passam a levar para fora do site; perde a página de portfólio |
| C. Manter a página e usar canonical cross-domain | `alternates.canonical: 'https://www.komyx.com.br/'` | Mudança de 1 linha | Só funciona se o conteúdo for quase igual ao do Komyx, ou seja, mantém a duplicação que a decisão quer eliminar. O Google pode ignorar o canonical. Não recomendado |

### 28.3 Mudanças nesta codebase (aralabs-storefront)

| # | Arquivo | Alteração | Risco | Impacto |
|---|---|---|---|---|
| K-1 | `src/app/produtos/komyx/page.tsx` | Opção A: reescrever como vitrine (título `Komyx, o sistema para buffets da AraLabs`, description da seção 6.2, H1 da seção 6.3). Remover as seções que duplicam o komyx.com.br (fluxo detalhado, planos/preço, tablet, passos). Manter 1 mock ou screenshot. Dois CTAs para `KOMYX_URL`: "Conhecer o Komyx" e "Ver planos" | Médio (visual/copy) | Alto: elimina a canibalização |
| K-2 | `src/app/produtos/komyx/page.tsx:229` | Trocar `softwareApplicationSchema` por um `WebPage` com `about: { "@id": "https://www.komyx.com.br/#software" }` (o `@id` precisa existir no komyx.com.br, ver K-7). Isso também elimina o preço `0` falso do Komyx (P-03) | Baixo | Médio |
| K-3 | `src/lib/products.ts:37-50` (`komyx.offer` na linha 44, `description`) | O texto aparece em home, `/produtos`, menu e meta. Trocar o preço detalhado por algo estável ("1 mês grátis") para não divergir da fonte de verdade quando o preço mudar | Baixo | Consistência |
| K-4 | `src/lib/products.ts:34` | `KOMYX_URL = 'https://www.komyx.com.br'` (P-26: sem salto de redirect) | Nenhum | Baixo |
| K-5 | `src/app/page.tsx` (seção Komyx) | Manter, com o H2 diferente do H1 de `/produtos/komyx` e do komyx.com.br; o botão "Criar meu buffet" já aponta para o komyx.com.br (ok) | Baixo | Baixo |
| K-6 | `src/components/products/komyx/*`, `src/components/home/KomyxLive.tsx`, CSS `komyx-*` em `globals.css` | Remover os mocks que deixarem de ser usados depois do K-1 (`Mocks.tsx` tem 634 linhas). Isso também resolve os 303 KB de HTML da página (seção 12) | Baixo | Performance |
| — | Eventos (seção 17) | `komyx_signup_click` passa a ser a métrica principal da página (cliques para o komyx.com.br) | Nenhum | Mensuração |

### 28.4 Tarefas no `komyx.com.br` (outro repositório, fora desta auditoria)

Achados do teste em produção de 2026-10-07: a home **não tem `<link rel="canonical">`** e `/sitemap.xml` responde **307**.

| # | Tarefa |
|---|---|
| K-7 | Canonical self-referencing em todas as páginas; `metadataBase` = `https://www.komyx.com.br`; garantir que o apex `komyx.com.br` redirecione com 308 |
| K-8 | `sitemap.xml` respondendo 200 (hoje 307) e enviado no Search Console da propriedade `komyx.com.br` |
| K-9 | `SoftwareApplication` completo com `@id: https://www.komyx.com.br/#software`, `offers` reais (planos atuais), `publisher`/`provider: { "@id": "https://aralabs.com.br/#organization", "name": "AraLabs" }` e screenshots |
| K-10 | Landing de categoria `/sistema-para-buffet-infantil` (ou a home focada nisso), com o diferencial da seção 27.A: orçamento online, reserva no Pix, contrato, convite/RSVP, portaria e operação simples |
| K-11 | Provas e FAQ de objeções (seção 6.5 antiga): nº de buffets, depoimentos autorizados, prints reais |
| K-12 | `/recursos/…`: pillar 3 da seção 24 (modelo de contrato de buffet infantil, orçamento de festa, reserva no Pix, lista de convidados e portaria) |
| K-13 | Link de volta "Um produto AraLabs" para `https://aralabs.com.br` no footer, para reforçar a relação entre as entidades |

### 28.5 Como medir

- Search Console `komyx.com.br`: impressões e posição de `sistema para buffet infantil`, `software para buffet` e `gestão de buffet`.
- Search Console `aralabs.com.br`: essas mesmas queries devem **sair** de `/produtos/komyx`, ficando só as queries de marca.
- Vercel Analytics: `komyx_signup_click` por origem (home, `/produtos/komyx`, menu).

---

## 29. Status da implementação (2026-10-07)

Implementado no código (sem commit) e verificado com `next build` + HTML local de produção nas 29 rotas:

| Item | Status |
|---|---|
| P-01 OG/Twitter completos em todas as páginas (`src/lib/seo/metadata.ts`) + OG por produto (`src/lib/seo/productOg.tsx`, Komyx próprio) | ✅ |
| P-02 `/sob-medida`: title, description, H1 com "Sistema sob medida", schema `Service` | ✅ |
| P-03/P-04 Schema: Casa Leve R$ 9,90, apps grátis com preço 0, Sono Leve sem oferta, Lumo `EducationalApplication` | ✅ |
| P-05 H1/parágrafo da home visíveis desde o primeiro paint; só os cards animam | ✅ |
| P-06 / K-1–K-4, K-6 Komyx vitrine, `WebPage` → `komyx.com.br/#software`, `KOMYX_URL` com www | ✅ (K-7–K-13 no repo do Komyx: pendente) |
| P-07–P-09 titles, descriptions ≤160, H1 com entidade | ✅ |
| P-10/P-11 sitemap (15 URLs, `lastmod` por rota) e noindex em 14 páginas legais (27.E) | ✅ |
| P-13/P-14 footer sem `<h3>`, spans com espaço, mote como `<p>` | ✅ |
| P-15/P-16 Breadcrumb em produtos e legais; Organization com `alternateName`, `legalName`, `taxID` | ✅ (`sameAs` aguarda perfis reais) |
| P-17 eventos via `ClickTracking.tsx` (`cta_contact`, `komyx_click`, `appstore_click`, `arakids_open`, `product_nav`) | ✅ |
| P-18 CNPJ no footer e em `/empresa` | ✅ (WhatsApp aguarda número) |
| P-21 menu Produtos no padrão disclosure | ✅ |
| P-22 `priority` → `preload` | ✅ |
| P-23 ícone 512 real + `apple-icon.png` | ✅ |
| P-25 PNGs → WebP (−95%), `logo-lockup.png` e deps `embla-*` removidos | ✅ |
| P-26 `KOMYX_URL` com www | ✅ |
| P-27 alt nas imagens do Lumo | ✅ |
| Links contextuais da seção 10 / 27.D | ✅ |
| `robots.ts` sem `host` | ✅ |

Pendente (externo ou decisão):
- P-12 redirect `www` → apex permanente: painel Vercel → Domains.
- P-19 provas/cases, P-20 conteúdo (`/guias`), Lumo EN/ES, Google Business Profile.
- P-24 header em ilhas client + CSS por segmento (refatoração maior).
- `komyx.com.br` (K-7–K-13).
- Link "Pedir uma demonstração" do Komyx saiu da vitrine: decidir se volta e onde.
