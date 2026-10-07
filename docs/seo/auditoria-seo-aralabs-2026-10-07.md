# Auditoria SEO — AraLabs

Data: 7 out. 2026. Escopo: produção `https://aralabs.com.br/` + código em `/Users/thiagotavares/Projects/a-labs/tech/aralabs-storefront`. Nenhum arquivo de produto foi alterado.

## 1. Executive summary

Base técnica é boa: Next.js App Router, HTML estático pré-renderizado, `robots.txt`, sitemap, canonicals, metadados por página comercial, redirects permanentes e JSON-LD. Build de produção passou e gerou 36 superfícies estáticas.

Principal limite não é renderização ou bloqueio técnico. É foco orgânico: domínio tenta servir software B2B para pequenos negócios e sete produtos B2C/B2B muito distintos. Só Komyx possui vertical comercial claramente definida. Não há hub de conteúdo, páginas por intenção/segmento, casos, autores, breadcrumbs, imagens sociais específicas ou mensuração de conversão. Resultado: Google entende páginas individuais de produto, mas tem pouco material para associar AraLabs às buscas não-marca e pouca prova para competir.

Prioridade máxima: decidir indexação das páginas legais/suporte; corrigir sitemap desatualizado; criar páginas de intenção comercial para Komyx e sob medida; medir aquisição/conversão. Não há bloqueador que exija desindexar site inteiro.

## 2. Método e evidências

* Inspeção completa de `src/app`, componentes reutilizados, `src/lib`, configurações, ativos e output do build.
* `npm run build`: sucesso; 36 rotas estáticas geradas.
* Produção: home, `/robots.txt` e `/sitemap.xml` respondem `200`; HTTP redireciona a HTTPS; `www` redireciona ao host canônico; redirects legados respondem `308` e chegam ao destino.
* Busca SERP exploratória: `sistema para buffet infantil agenda orçamento pix`, `software para buffet infantil gestão de eventos`, `aplicativo comunicação alternativa crianças não verbais`, `app treino de sono bebê método Ferber`.
* Não houve acesso a Google Search Console, GA4, Google Business Profile, logs, Lighthouse de campo ou contas de anúncios. Afirmações de indexação/ranking exigem validar nestas fontes.

## 3. Mapa da aplicação e inventário

Framework: Next.js 16.2.3, React 19.2.4, App Router, TypeScript, Tailwind 4. Não há rotas dinâmicas, route groups, middleware, rewrites, APIs, CMS, banco ou fetch de conteúdo no storefront. Todas páginas são Server Components estáticas, exceto seis componentes interativos pequenos (`Header`, `InView`, `HeroOrbit`, `KomyxLive`, `PhoneVideo`, `LegalToc`). Fonte: `package.json`, `src/app/**`, `src/components/**`.

| Rota | Papel | Indexar? | Title atual | H1 | Canonical/schema | Sitemap |
|---|---|---:|---|---|---|---:|
| `/` | marca + portfólio | Sim | `AraLabs — Tecnologia simples para pequenos negócios` | Software que cabe no seu negócio | `/`; WebSite + Organization | Sim |
| `/produtos` | hub de portfólio | Sim | Produtos · AraLabs | Produtos que a gente fez pra usar | próprio; CollectionPage | Sim |
| `/sob-medida` | serviço B2B geral | Sim | Sob medida · AraLabs | Sistema que cabe no seu dia | próprio; CollectionPage | Sim |
| `/empresa` | institucional | Sim | Empresa · AraLabs | Software simples. Feito perto. | próprio; AboutPage | Sim |
| `/produtos/komyx` | SaaS para buffets | Sim, maior prioridade | Komyx — Gestão para buffets · AraLabs | Seu buffet no controle | próprio; SoftwareApplication | Sim |
| `/produtos/casa-leve` | app familiar | Sim enquanto beta público | Casa Leve — família organizada, juntos · AraLabs | Família organizada, juntos. | próprio; SoftwareApplication | Sim |
| `/produtos/arakids` | portal de jogos | Sim | Arakids — jogos educativos sem anúncio · AraLabs | Jogos que respeitam a infância. | próprio; SoftwareApplication | Sim |
| `/produtos/lumo` | CAA/AAC | Sim | Lumo — comunicação visual pra famílias · AraLabs | Toque pra dizer. | próprio; SoftwareApplication | Sim |
| `/produtos/sono-leve` | app de sono | Sim apenas se pré-lançamento estratégico | Sono Leve — treino de sono do bebê · AraLabs | Treino de sono, com calma e com dados. | próprio; SoftwareApplication | Sim |
| `/produtos/jornadas` | app de hábitos | Sim apenas se pré-lançamento estratégico | Jornadas — livros, cursos e hábitos no iPhone · AraLabs | Um dia de cada vez. | próprio; SoftwareApplication | Sim |
| `/produtos/le-barista` | app de café | Sim apenas se pré-lançamento estratégico | Le Barista — espresso no ponto, passo a passo, no iPhone · AraLabs | O espresso no ponto. | próprio; SoftwareApplication | Sim |
| 7 legais Casa Leve/Lumo | termos, privacidade, créditos, conta | Misturado: privacidade/termos podem indexar; créditos, dedicatória e exclusão devem `noindex` | específico | via `LegalPage` | canonical próprio; sem schema | Sim |
| 12 legais/suporte Arakids, Sono, Jornadas, Le Barista | App Store e suporte | `noindex,follow` salvo suporte com intenção comprovada | específico | via `LegalPage` | canonical próprio; sem schema | Não |

Rotas legais detalhadas: `/produtos/arakids/{privacidade,suporte}`, `/produtos/casa-leve/{privacidade,termos,excluir-conta}`, `/produtos/lumo/{privacidade,termos,creditos,dedicatoria}`, `/produtos/sono-leve/{privacidade,termos,suporte}`, `/produtos/jornadas/{privacidade,termos,suporte}`, `/produtos/le-barista/{privacidade,termos,suporte}`. Todas recebem `index,follow` global hoje; nenhuma declara `robots` próprio.

Redirects configurados: `/casa-leve → /produtos/casa-leve`, `/ara-agenda`, `/aragenda`, `/produtos/aragenda → /sob-medida`, `/tese → /empresa`, `/komyx → /produtos/komyx`, `/arakids → /produtos/arakids`. Fonte: `next.config.ts:6-18`. Produção confirmou `308`, sem cadeia entre estes destinos.

## 4. Top 10 problemas

| Sev. / esforço / impacto | Evidência | Problema e correção concreta |
|---|---|---|
| 🟠 Alto / S / Indexação, crawl | `src/app/layout.tsx:47-55`; 12 rotas fora do sitemap | Sitemap não é regra de noindex. Documentos App Store/suporte continuam indexáveis e recebem `index,follow` global. Adicionar `robots: { index:false, follow:true }` aos documentos transacionais/administrativos e aos 12 documentos excluídos do sitemap; manter só os legais que tenham valor de confiança. |
| 🟠 Alto / XS / Crawl, confiança | `src/app/sitemap.ts:5`, build e commits posteriores | Todo `<lastmod>` é `2026-10-03`, mesmo com rotas/ativos posteriores. Calcular datas reais por página ou omitir `lastModified`; não declarar mudança mensal fixa sem atualização. |
| 🟠 Alto / M / Ranking, conversão | `src/app/sob-medida/page.tsx:19-33`, `Header.tsx:10-13` | Uma única página genérica tenta cobrir salão, clínica, oficina, escolinha, loja e serviços. Criar páginas profundas só para verticais comprovadas por venda/portfólio, começando por buffet/casa de festas — intenção já validada pelo Komyx. |
| 🟠 Alto / L / Ranking, autoridade | Todo `src/app`; zero `blog`/cases | Sem conteúdo que responda consultas antes de compra. Criar hub de recursos e 4–6 páginas pilares/estudos de caso com autoria, data e links para produto/serviço. |
| 🟠 Alto / S / CTR, compartilhamento | `src/app/layout.tsx:34-46`; páginas só definem texto OG | Todas páginas herdam imagem OG genérica `/opengraph-image`; nenhuma página comercial passa `openGraph.images`, `twitter.images`, `og:type=product` ou preview específico. Criar `opengraph-image.tsx` por rota comercial. |
| 🟡 Médio / M / Rich results, entendimento | `src/lib/seo/schemas.ts:66-94`; `/sob-medida` usa `CollectionPage` | Schema existe, mas SoftwareApplication não tem `@id`, `image`, `isPartOf`, `sameAs`, app-store URL nem oferta real; serviço B2B é coleção, não Service. Implementar Organization + WebSite + WebPage; `SoftwareApplication` completo por app; `Service` para sob medida; BreadcrumbList onde houver hierarquia. |
| 🟡 Médio / S / Conversão, aprendizado | `src/app/layout.tsx:6,71`; só `@vercel/analytics` | Não há GA4/GTM, eventos ou eventos de funil. Vercel Analytics não substitui medição de CTA, e-mail, App Store, formulário/demonstração. Instalar consent-aware GA4/GTM ou instrumento próprio e eventos definidos abaixo. |
| 🟡 Médio / M / LCP, bytes | `family-1.png` 2.60 MB; `casa-leve-banner-product*.png` 2.21–2.30 MB; chamadas em `casa-leve/page.tsx:381-495` | PNGs grandes são servidos diretamente do `/public` em produção. Converter a AVIF/WebP, reduzir dimensões, usar `sizes` preciso e confirmar prioridade somente no LCP. |
| 🟡 Médio / M / Ranking, CTR | `src/app/page.tsx:17-20`; `src/lib/seo/site.ts:6-8` | Home não define title/description próprios: herda texto amplo, mistura pequenos negócios e famílias. Definir intenção primária e title/description de home. Ex.: `Software para pequenos negócios em Arapongas | AraLabs`; description com sistemas sob medida, Komyx e CTA. |
| 🟡 Médio / M / IA, links internos | `Header.tsx:10-13`; `Footer.tsx:10-37` | Navegação global oferece apenas Produtos, Sob medida e Empresa; não há hubs por solução, segmento ou recursos, nem breadcrumbs. Adicionar hubs e links contextuais nos blocos de páginas antes de produzir conteúdo. |

## 5. Technical SEO, crawlability e indexability

### O que está correto

* `metadataBase`, template de title, `lang=pt-BR`, canonical absoluto derivado, OG base, Twitter card, manifest e fontes locais via `next/font`: `src/app/layout.tsx:18-57`.
* `robots.txt` permite produção e bloqueia previews por `VERCEL_ENV`; declara sitemap e host: `src/app/robots.ts:4-11`.
* Sitemap existe e inclui home, hubs, comerciais e parte de legais: `src/app/sitemap.ts:19-51`.
* Páginas comerciais têm `title`, `description`, canonical e OG URL próprios; landing pages usam HTML pré-renderizado. Build confirmou todas estáticas.
* HTTP → HTTPS, `www` → apex, e redirects legados funcionam em produção. HSTS presente. Sem chain encontrada nos sete legados.

### Riscos e recomendações

1. **Separar “não está no sitemap” de “não indexar”.** Comentário em `sitemap.ts:8-9` diz que 9 páginas ficam fora por App Store, mas elas não têm robots `noindex`. Google ainda pode descobri-las pelo footer, páginas legais e links externos. Criar utilitário `legalMetadata({ indexable })` e aplicar regra explícita.
2. **Definir política por documento.** Recomendo indexar privacidade e termos ativos de produtos públicos, por confiança/App Store; `noindex,follow` para suporte App Store de app indisponível, exclusão de conta, créditos e dedicatória. Decisão final deve seguir necessidade legal e dados do GSC.
3. **Sitemap não deve declarar prioridades como sinal de ranking.** `priority`/`changeFrequency` são ignorados por Google. Não prejudicam, mas dar manutenção a eles não gera ganho. Remover ou manter apenas por compatibilidade; corrigir `lastmod` é relevante.
4. **Não há trailing-slash policy explícita.** Next/Vercel normalmente normaliza. Testar no deploy e no GSC URLs com slash e parâmetros. Adicionar redirect só se houver versão duplicada observada; não inventar regra.
5. **`www` usa 307.** Funciona para canonicalização, mas 308 seria semântica permanente preferível. Configuração parece estar na plataforma, não no repo. Confirmar domínio primário no Vercel; mudar só se plataforma permitir redirect permanente.
6. **Headers de segurança ausentes no snapshot.** `X-Content-Type-Options`, `Referrer-Policy` e CSP não apareceram. Segurança, não ranking direto; adicionar em projeto/plataforma após testar Analytics, fontes e imagens. Não é P0 SEO.
7. **Não há middleware, API ou conteúdo client-only crítico.** Conteúdo principal está no HTML. `Header` é client component, mas links ainda existem no HTML; `InView` é animação. Sem risco de indexação por hidratação.

## 6. Auditoria on-page por página indexável

| URL | Diagnóstico | Recomendação title / description / conteúdo |
|---|---|---|
| `/` | H1 forte, um só, renderizado. Title/description genéricos herdados. Portfólio dilui intenção B2B e família. | Title: `Software para pequenos negócios em Arapongas | AraLabs`. Description: `Sistemas sob medida e produtos digitais simples para pequenos negócios. Conheça o Komyx para buffets e fale direto com a AraLabs.` Tornar Komyx + sob medida duas portas de intenção explícitas. |
| `/produtos` | Bom hub de marca, H1 e cards. Description enumera 7 produtos e estoura foco. | Manter indexável como catálogo, mas title: `Produtos digitais simples | AraLabs`; description curta. Não disputar termos genéricos de todos produtos. Adicionar links “para quem é / problema que resolve” para cada produto. |
| `/sob-medida` | Melhor página de captação B2B. H1/FAQ bons; FAQ está no HTML mas sem FAQPage — não adicionar só por rich result. Falta prova, vertical e case. | Title: `Sistema sob medida para pequenos negócios | AraLabs`; description atual boa, ajustar “software sob medida em Arapongas e remoto”. Acrescentar 2–3 cases verificáveis, processo, responsável, prazo típico por tipo de projeto e CTAs mensuráveis. |
| `/empresa` | Boa narrativa, Organization/AboutPage. Pouca evidência objetiva para E-E-A-T. | Title: `AraLabs: empresa de software em Arapongas, PR`; adicionar equipe/responsável, CNPJ se aplicável, links sociais/portfolio, data de fundação, clientes/cases autorizados. |
| `/produtos/komyx` | Página mais pronta para SEO comercial. Title tem intenção forte. Texto cobre agenda/orçamento/Pix/contrato/RSVP. | Novo title opcional: `Sistema para buffet infantil: agenda, orçamento e Pix | Komyx`; meta ≤160: `Gestão para buffet infantil: orçamento online, agenda sem conflito, contrato e reserva via Pix. Teste o Komyx grátis.` Criar páginas filhas por intenção real: `/komyx/sistema-para-buffet-infantil`, `/komyx/orcamento-online-para-buffet`, `/komyx/agenda-para-casa-de-festas` — conteúdo e prova únicos, não cópias. |
| `/produtos/casa-leve` | H1, conteúdo e preço claros. Descrição excessivamente técnica (`Tier Premium`, Pomodoro) para SERP. | Title: `App de organização familiar com tarefas e recompensas | Casa Leve`; description: `Organize tarefas, rotina, compras e recompensas da família em um só app. Teste por 30 dias.` Criar FAQ focado em famílias, privacidade infantil e comparação com planilha, só se sustentado. |
| `/produtos/arakids` | Intenção clara, age-range e sem anúncios destacados. Competição inclui portais de jogos e conteúdo infantil. | Title: `Jogos educativos para crianças de 2 a 10 anos, sem anúncios | Arakids`; description atual é boa. Criar páginas por faixa etária somente se cada uma listar jogos, objetivos e orientação aos pais; não gerar páginas vazias. |
| `/produtos/lumo` | Oportunidade forte: página fala “comunicação visual”, mas title evita termo pesquisado “comunicação alternativa/aumentativa (CAA)”. | Title: `App de comunicação alternativa (CAA) para crianças | Lumo`; description: `Comunicação aumentativa e alternativa com 13.798 pictogramas, rotinas e modo criança. Offline, sem cadastro, para iPhone.` Adicionar bloco editorial: o que é CAA, para quem serve, limites do app, uso com família/escola/terapeuta, com revisão por profissional identificado antes de publicar alegações clínicas. |
| `/produtos/sono-leve` | Boa transparência e aviso médico; produto em revisão. Tema YMYL infantil exige cautela e fontes/revisão. | Manter indexável só se equipe sustentar conteúdo responsável. Title atual adequado. Publicar conteúdo educativo apenas com revisão pediátrica identificada, referências e data; nunca prometer resultado. |
| `/produtos/jornadas` | Página completa, porém busca ampla e competição alta. Produto em revisão. | Title: `App para acompanhar hábitos, leituras e cursos | Jornadas`; melhorar description para intenção. Evitar conteúdo genérico de produtividade até produto estar público. |
| `/produtos/le-barista` | Boa especificidade em espresso; screenshots têm alts. Produto em revisão. | Title: `App para regular espresso e café coado | Le Barista`; meta com espresso, moagem, dose, V60. Depois de lançamento, criar guias realmente testados e assinados, ligados a métodos do app. |

Headings: páginas comerciais usam um H1; seções usam H2 e cards H3. Boa hierarquia. `AppHero` centraliza H1 em `src/components/site/AppHero.tsx:117`; mudança nele afeta Lumo, Sono, Jornadas, Le Barista e Arakids. Não usar headings apenas para estilo nos componentes futuros.

## 7. Keywords, intenção e canibalização

### Clusters prioritários

| Cluster | Consultas | URL atual / ação |
|---|---|---|
| Marca | AraLabs, Ara Labs, Komyx, Casa Leve, Arakids, Lumo | Home + páginas de produto. Garantir perfis sociais e App Store com links canônicos. |
| Komyx transacional | sistema para buffet infantil, software para buffet, sistema para casa de festas, agenda para buffet, orçamento para buffet, contrato buffet, reserva Pix buffet | `/produtos/komyx` cobre todas superficialmente. Criar hub Komyx e 2–3 landing pages profundas priorizadas por GSC/CRM. |
| Sob medida comercial | sistema para salão de beleza, agenda para clínica, sistema para oficina, software para escolinha, sistema para pequeno negócio | `/sob-medida` cobre todas sem página adequada. Criar somente segmentos com caso, produto ou pipeline real. |
| CAA/AAC | app comunicação alternativa, comunicação aumentativa e alternativa, app para criança não verbal, pictogramas para autismo, rotina visual | Lumo. Atualizar terminology; construir conteúdo revisado com escopo não clínico. |
| Organização familiar | app de tarefas para família, quadro de tarefas infantil, recompensas para crianças, rotina familiar | Casa Leve. Uma landing de “tarefas e recompensas para crianças” pode ter valor se produto estiver estável. |
| Infantil | jogos educativos sem anúncios, jogos por idade, jogos para criança de 2/3/4… anos | Arakids. Páginas por idade somente com catálogo útil e curadoria parental. |
| Café | regular espresso, ajuste de moagem espresso, receita V60, timer café coado | Le Barista. Adiar expansão até disponibilidade pública. |

Canibalização atual: baixa. Cada produto tem intenção distinta. Risco futuro: “software para pequenos negócios” entre home e `/sob-medida`; resolver posicionando home em marca/portfólio e `/sob-medida` em serviço. “Treino de sono” não deve competir com conteúdo médico: página comercial deve ser app/apoio, artigos devem ser educação revisada e linkar à página. `/produtos` não deve tentar ranquear pelos termos de cada produto.

## 8. Arquitetura, internal linking e novas páginas

Google entende portfólio e produto, graças à navegação global, `PRODUCTS` como fonte única (`src/lib/products.ts:31-160`) e links do header/footer. Não entende com clareza os principais assuntos de aquisição além de Komyx, porque há só um nó para sob medida e nenhum hub editorial.

Arquitetura proposta:

```text
/
├─ /produtos
│  ├─ /produtos/komyx  → hub futuro /komyx/*
│  ├─ /produtos/lumo   → hub futuro /lumo/*
│  └─ demais produtos
├─ /sob-medida
│  ├─ /solucoes/sistema-para-buffet-infantil
│  ├─ /solucoes/sistema-para-[vertical-validada]
│  └─ /cases/[cliente]
└─ /recursos
   ├─ /recursos/como-escolher-sistema-para-buffet
   └─ /recursos/[guia-editorial-revisado]
```

Links concretos:

| Origem | Âncora | Destino |
|---|---|---|
| Home, bloco Komyx | `sistema para buffet infantil` | `/produtos/komyx` ou futura landing específica |
| `/produtos/komyx` | `como organizar orçamento, contrato e reserva via Pix no buffet` | futuro guia/case, não home |
| `/sob-medida`, lista “buffets” | `sistema para buffet e casa de festas` | Komyx se encaixar; senão landing sob medida distinta |
| `/empresa` | `produtos para pequenos negócios` | `/produtos` |
| Lumo | `comunicação alternativa e aumentativa (CAA)` | futuro guia editorial revisado |
| Arakids | `jogos educativos por faixa etária` | futura página de idade com conteúdo real |

Implementar breadcrumbs apenas na hierarquia produto → legal/suporte e futuros recursos/soluções. Não são necessários em home ou landing rasa.

## 9. Schema, social e E-E-A-T

### Schema

Existem `Organization`, `WebSite`, `AboutPage`, `CollectionPage` e `SoftwareApplication` em `src/lib/seo/schemas.ts:15-134`. Boa fundação. Melhorar:

* `Organization`: adicionar `sameAs` só para perfis oficiais, telefone se publicado, `founder`/CNPJ somente após confirmação factual.
* `WebPage`: adicionar a cada página comercial com `@id`, `url`, `name`, `description`, `isPartOf` e `about`.
* `SoftwareApplication`: `@id`, `image`, `downloadUrl`/`installUrl` (App Store), `isPartOf`, `applicationSubCategory`; preço real apenas quando público. Não alegar avaliação/rating sem dados reais.
* `Service` para `/sob-medida`; `areaServed: BR` e `serviceType` somente com escopo confirmado. `LocalBusiness` não é necessário para venda nacional/remota; Organization com endereço já é suficiente.
* `BreadcrumbList` apenas onde breadcrumb visível existir. `FAQPage` não é prioridade: Google restringe rich result de FAQ; publicar FAQ por utilidade ao usuário, não markup.

JSON-LD recomendado para sob medida, após campo de telefone/URL de contato confirmado:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aralabs.com.br/sob-medida#service",
  "name": "Sistemas sob medida para pequenos negócios",
  "serviceType": "Desenvolvimento de software sob medida",
  "url": "https://aralabs.com.br/sob-medida",
  "provider": { "@id": "https://aralabs.com.br/#organization" },
  "areaServed": { "@type": "Country", "name": "Brasil" },
  "inLanguage": "pt-BR"
}
```

### Open Graph

Há title/description/URL por página, mas não imagem por página. Criar imagens 1200×630 para home, sob medida, empresa e cada produto; usar nome, problema, cor de produto e screenshot com contraste. Definir também `twitter.images`. Não usar imagem de produto em preview legal/suporte; pode herdar marca ou omitir.

### E-E-A-T

Já há endereço e e-mail em `src/lib/seo/site.ts:9-21`, política de privacidade detalhada e linguagem honesta. Faltam provas verificáveis: quem desenvolve, experiência na vertical, cases autorizados com situação→intervenção→resultado, metodologia, parceiros, páginas de autor/revisor para tópicos de saúde/desenvolvimento infantil, CNPJ/razão social se juridicamente adequado, canais oficiais. Não inventar depoimentos, métricas ou aprovação clínica.

## 10. Performance, imagens, mobile, semântica

### Performance/CWV

* **LCP provável em Casa Leve:** imagens 2.21–2.60 MB no `public` (`family-1.png`, banners) são PNG e respostas de produção mantêm esse tamanho. Converter, redimensionar e medir antes/depois em PageSpeed mobile.
* **Lumo:** `Crop` usa `<Image>`, `sizes` e `priority` no hero, positivo (`LumoVisuals.tsx:40-55,107-117`). Alguns screenshots são UI em espanhol/inglês enquanto página é PT-BR; não é CWV, mas reduz confiança/clareza.
* **Le Barista:** screenshot alts são excelentes (`LeBaristaVisuals.tsx:17-60`); hero carrega vídeo mudo com `preload="metadata"`, poster e imagem prioritária. Medir em 4G, respeitar `prefers-reduced-motion`, garantir poster otimizado.
* **JS:** sem Framer/GSAP/GTM; seis client components, majoritariamente menu/animação. `Header` client global adiciona hidratação a todas páginas; impacto provavelmente pequeno, mas pode ser Server Component + ilha de menu se bundle/Lighthouse apontar problema.
* **Fontes:** `next/font` com `display: swap` é correto (`layout.tsx:18-22`).
* Não há dados CrUX/Lighthouse, então não classificar LCP/INP/CLS como falha confirmada. Rodar PageSpeed para URLs `/`, `/sob-medida`, `/produtos/komyx`, `/produtos/casa-leve`, `/produtos/lumo` após correções.

### Imagens

Alt de screenshots Le Barista é específico. Imagens de crop Lumo têm `alt=""` porque há contexto/figcaption: aceitável decorativamente. Auditar alt dos demais `<Image>` durante implementação. Evitar keyword stuffing em alt; descrever função/imagem. Garantir largura/altura ou `fill` com container de proporção — os usos atuais relevantes já reservam espaço, reduzindo CLS.

### Mobile, acessibilidade e semântica

Boa base: `<main>` global (`layout.tsx:69`), header/nav/footer, sections com `aria-labelledby`, articles e botões reais; busca não encontrou `<div onClick>`. Menu móvel usa botão, Escape e body lock (`Header.tsx:17-30`).

Pontos a validar manualmente/automatizar: foco dentro do menu móvel aberto (não há focus trap), contraste dos textos pequenos sobre cores de produto, tamanho de target dos links de cards, navegação de galeria horizontal, zoom a 200%, ordem de tabulação, reduced motion. Isto afeta UX mobile e indiretamente conversão, não indexação HTML.

## 11. Analytics e mensuração

Implementado: apenas `@vercel/analytics` no layout. Não há GA4, GTM, gtag, pixel ou eventos detectados. Search Console não é detectável no repositório.

Eventos mínimos, com parâmetros `page_type`, `product`, `placement`, `cta_label`:

1. `cta_contact_click` — home, sob medida, Komyx; origem e `mailto`/WhatsApp.
2. `product_view` — cada produto.
3. `external_product_click` — Komyx, Arakids e App Store Lumo.
4. `pricing_view` e `beta_signup_click` — Casa Leve.
5. `service_interest_click` — vertical/solução futura.
6. `case_view` e `resource_to_product_click` — quando hubs existirem.

Implementar consentimento antes de analytics não essencial; não enviar PII no nome do evento/URL.

## 12. SEO gap e scores

| Área | Nota | Por quê |
|---|---:|---|
| Technical SEO | 78 | App Router estático, metadata base, canonicals, redirects; faltam política explícita de noindex, imagens OG específicas e headers complementares. |
| Crawlability | 82 | Robots/sitemap/200/308 bons; sitemap com lastmod falso e política legal inconsistente. |
| Indexability | 70 | Comerciais indexáveis; documentos administrativos podem indexar sem intenção. |
| On-page | 74 | Páginas de produto fortes, titles/descriptions específicos; home e hub diluídos, pré-lançamentos precisam decisão. |
| Conteúdo | 38 | Landings boas, mas sem cases, hub, guias ou cobertura de consultas pré-compra. |
| Internal linking | 62 | Header/footer fortes; poucos links contextuais/hubs/ancoras de intenção. |
| Structured data | 68 | Fundação correta; entidades e tipos podem ser mais completos. |
| Performance | 65 | Arquitetura leve; PNGs de 2MB+ são risco; sem campo/lab CWV para confirmar. |
| Social metadata | 55 | Texto/URL presentes; falta imagem OG por página. |
| Mobile | 73 | Design responsivo e semântica boa; validação real de foco/targets/CWV pendente. |
| Accessibility/semantics | 80 | Landmarks, H1 e HTML semântico bons; testes de teclado/contraste pendentes. |
| E-E-A-T | 52 | Endereço, e-mail e políticas; faltam prova, equipe, autores/revisores e cases. |
| **Geral** | **66** | Base técnica madura, aquisição orgânica ainda inicial. |

**Temos:** SSR/SSG, sitemap/robots/canonicals, schema básico, produto com conteúdo concreto, redirecionamentos e semântica boa.  
**Temos parcialmente:** metadados sociais, schema, links internos, confiança, performance.  
**Não temos:** estratégia de conteúdo, cases, páginas de intenção comercial, eventos de conversão, decisão de indexação legal, OG específicas.  
**Não precisamos agora:** milhares de páginas programáticas, hreflang (um idioma), schema LocalBusiness sem estratégia local, FAQ schema por si só, keywords meta tag.

## 13. Priorização e roadmap

### P0 — bloqueadores práticos

* 🟠 S: definir `index/noindex` por rota legal/suporte; aplicar e testar meta robots no HTML.
* 🟠 XS: substituir `LAST_MODIFIED` fixo do sitemap por data real/omissão.
* 🟠 S: verificar domínio primário/redirect permanente de `www` no Vercel e URLs duplicadas reais no GSC.

### P1 — alto impacto

* 🟠 M: metadata própria para home; OG/Twitter images por comercial.
* 🟠 M: GA4/GTM consent-aware + eventos de contato, clique externo, CTA e beta.
* 🟠 M: compactar PNGs de Casa Leve e medir CWV.
* 🟠 L: landing/hub Komyx por intenção comercial e uma página de solução sob medida validada.

### P2 — otimização

* 🟡 M: enriquecer schemas e breadcrumbs visíveis.
* 🟡 M: cases autorizados, página de equipe/autoridade, links contextuais.
* 🟡 S: revisar descriptions longas e claims de páginas pré-lançamento.
* 🟡 S: testes teclado, contraste e menu móvel.

### P3 — crescimento

* 🟢 L: hub `/recursos`, 4–6 conteúdos pilares validados por vendas/GSC.
* 🟢 L: clusters Lumo e Arakids com revisão especializada onde necessário.
* 🟢 L: páginas por vertical/localidade apenas com oferta, evidência e conteúdo único.

### Hoje

Decidir política legal; corrigir sitemap; configurar mensuração; preparar metas/OG da home.  
### Semana 1

Implementar P0/P1 técnico, imagens otimizadas, baseline PageSpeed e GSC.  
### Semana 2

Publicar landing Komyx e primeira landing sob medida + case real; links internos.  
### Semana 3+

Hub de recursos, conteúdo revisado, cases contínuos, experimentos de title/CTR via GSC.

## 14. Implementation plan — sem alteração aplicada

| Arquivo | Problema | Alteração | Risco | Impacto |
|---|---|---|---|---|
| `src/lib/seo/metadata.ts` (novo) | Política repetida/inexistente | Criar helpers `commercialMetadata`, `legalMetadata({indexable})`, imagem social e robots | Baixo | Indexação, CTR |
| 12 `src/app/produtos/*/{privacidade,termos,suporte}/page.tsx` selecionados | Fora do sitemap mas indexáveis | Aplicar `robots: { index:false, follow:true }` aos docs sem intenção orgânica | Médio: decisão legal | Crawl, indexação |
| `src/app/sitemap.ts` | `LAST_MODIFIED` enganoso | Remover data fixa ou alimentar datas de conteúdo; só páginas canônicas indexáveis | Baixo | Crawl |
| `src/app/page.tsx` | Home herda metadata geral | Definir title/description/OG específicos | Baixo | CTR, ranking |
| `src/app/**/opengraph-image.tsx` ou rota central parametrizada | Preview genérico | Criar imagens 1200×630 específicas; declarar `openGraph.images` e `twitter.images` | Baixo | CTR social |
| `src/lib/seo/schemas.ts` | Grafo incompleto | Acrescentar `webPageSchema`, `serviceSchema`, campos id/image/app URL e BreadcrumbList | Baixo | Entendimento |
| `src/app/sob-medida/page.tsx` | Schema tipo coleção; pouca prova | Trocar/adicionar Service, cases reais, links a solução; não usar dados inventados | Médio: conteúdo | Conversão, autoridade |
| `src/app/produtos/komyx/page.tsx` | Maior intenção comercial pouco segmentada | Refinar meta e links; criar páginas filhas só com conteúdo/CTA próprios | Médio | Ranking, conversão |
| `public/images/*.png`, componentes de Casa Leve | Ativos grandes | Gerar AVIF/WebP, atualizar `Image`, `sizes`, priority e verificar imagem visualmente | Médio | LCP, bytes |
| `src/components/analytics/*` (novo) + layout/CTAs | Sem funil | Integrar consentimento e eventos sem PII | Médio: privacidade | Conversão |
| `src/components/site/Header.tsx` | Navegação rasa + componente client global | Só após Lighthouse: extrair menu interativo, adicionar hubs aprovados; preservar foco/semântica | Médio | INP, links |

## 15. Oportunidades legítimas de páginas

1. **Komyx — Sistema para buffet infantil**: comparação com planilha/WhatsApp, fluxo orçamento→contrato→Pix, screenshots e caso real. Maior prioridade.
2. **Komyx — Agenda e orçamento online para casa de festas**: somente se diferencia de página 1 por tarefa/intenção e não repetir 80% do texto.
3. **Sistemas sob medida por vertical**: começar pelo vertical com cliente/case. Cada página precisa rotina, integrações, escopo, prova e CTA próprio.
4. **Lumo — guia de CAA em casa/escola**: precisa revisão por fono/terapeuta identificada e tom informativo, não clínico.
5. **Arakids por faixa etária**: catálogo específico, habilidades, orientação aos responsáveis e lista real de jogos.

Programmatic SEO não é recomendado agora. Portfólio pequeno e alta exigência de conteúdo tornam páginas em massa thin/duplicadas. Escalar somente catálogos estruturados com valor intrínseco, por exemplo jogos Arakids por idade+objetivo quando cada URL tiver jogos reais e curadoria.

## 16. Checklist externo: Search Console e operações

Depois do deploy, verificar: inspeção de todas comerciais e amostra legal; `Indexing > Pages` por `noindex`, canonical e 404; sitemap processado; `Performance` por query/URL/CTR; Core Web Vitals mobile; Mobile Usability; Rich Results; Manual Actions; Security Issues; links; domains `http`, `https`, `www` e apex. Comparar antes/depois por 28 dias, não por um dia.

Competidores de SERP observados: Festech, Buffetmax, SimpleWork, Oni, Sisfest, FestPRO, Eventool e ClickFest para gestão de buffet; Quero Dizer e Palavra Fácil para comunicação alternativa. Eles disputam intenção, não necessariamente negócio/localidade. Priorizar análise manual de SERP e GSC antes de copiar features, claims ou páginas deles.

## 17. Perguntas que mudam priorização

1. Komyx é produto de aquisição prioritária? Quais cidades/segmentos/termos já trazem leads?
2. Quais produtos em revisão devem aparecer no Google antes do lançamento? Há data pública e lista de espera real?
3. Quais legais/suportes precisam ser indexáveis por requisito de App Store ou jurídico?
4. Há CNPJ, Google Business Profile, telefone, perfis sociais e cases que podem ser publicados?
5. Qual stack de analytics/consentimento já aprovada pela empresa? Há GA4/GSC ativos?
6. Há especialistas que possam revisar conteúdo de sono infantil e CAA?

