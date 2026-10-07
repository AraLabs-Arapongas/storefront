import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { LegalToc, LegalTocMobile, type TocItem } from '@/components/legal/LegalToc';
import { articleSchema, breadcrumbSchema } from '@/lib/seo/schemas';
import { productBySlug } from '@/lib/products';
import { themeBySlug, type Guide } from '@/lib/guides';

/*
 * Layout for the /guias articles. Same reading kit as the legal and support pages (the .lg-*
 * styles in globals.css): a coloured band with the headline and the date, sticky contents, a ~68ch
 * column. On top of that: a visible breadcrumb, a "Resumo" checklist, sources and a product box.
 */

export type GuideSection = {
  id: string;
  title: string;
  body: ReactNode;
  /** h3 anchors inside `body` that should appear in the contents. */
  sub?: { id: string; title: string }[];
};

export type GuideSource = { label: ReactNode; href: string; note?: ReactNode };

type GuideArticleProps = {
  guide: Guide;
  /** Answers the query in 2–3 sentences, right under the band. */
  lead: ReactNode;
  /** Important notice that belongs at the top (e.g. "not therapy"). */
  notice?: ReactNode;
  /** "Resumo": the article as a short checklist. */
  summary: ReactNode[];
  sections: GuideSection[];
  sources?: GuideSource[];
  /** Closing box about the related product. */
  product: { text: ReactNode; cta: string };
};

export function GuideArticle({
  guide,
  lead,
  notice,
  summary,
  sections,
  sources,
  product: productBox,
}: GuideArticleProps) {
  const theme = themeBySlug(guide.theme);
  const product = productBySlug(guide.product);
  const vars = { '--lg-accent': theme.accent, '--lg-soft': theme.soft } as CSSProperties;

  const all: GuideSection[] = [
    ...sections,
    ...(sources?.length ? [{ id: 'fontes', title: 'Fontes', body: null }] : []),
  ];
  const tocItems: TocItem[] = all.map((s) => ({ id: s.id, title: s.title, sub: s.sub }));

  return (
    <div className="lg-page" style={vars}>
      <JsonLd
        data={[
          articleSchema({
            path: guide.path,
            headline: guide.title,
            description: guide.description,
            datePublished: guide.datePublished,
          }),
          // Theme pages don't exist yet: the theme crumb carries no link.
          breadcrumbSchema([
            { name: 'Início', path: '/' },
            { name: 'Guias', path: '/guias' },
            { name: theme.label },
            { name: guide.title },
          ]),
        ]}
      />

      <header className="lg-band">
        <div className="lg-band-grid" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-14%] top-[-40%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pb-[calc(clamp(28px,4.5vw,72px)+48px)] pt-8 lg:px-10 lg:pt-10">
          <nav aria-label="Você está em" className="lg-noprint">
            <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[14px] font-semibold">
              <li>
                <Link href="/" className="lg-back">
                  Início
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/50">
                ›
              </li>
              <li>
                <Link href="/guias" className="lg-back">
                  Guias
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/50">
                ›
              </li>
              <li className="text-white/70">{theme.label}</li>
            </ol>
          </nav>

          <div className="rise mt-10 lg:mt-12">
            <p className="lg-band-muted flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]">
              <span className="tri text-[8px]" aria-hidden="true" />
              Guia · {theme.label}
            </p>
            <h1 className="display mt-5 max-w-[20ch] text-balance text-[clamp(2.4rem,5.4vw,4.8rem)]">
              {guide.title}
            </h1>
            <p className="lg-date mt-8">
              <span>Publicado em</span>
              <time dateTime={guide.datePublished}>{guide.dateLabel}</time>
              <span aria-hidden="true">·</span>
              <span>Por AraLabs</span>
              <span aria-hidden="true">·</span>
              <span>{guide.readingMinutes} min de leitura</span>
            </p>
          </div>
        </div>
      </header>

      <div className="lg-body cut-top">
        <div className="mx-auto max-w-[1240px] px-6 pb-24 pt-10 lg:px-10 lg:pb-32 lg:pt-14">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-24">
            <aside className="lg-noprint hidden lg:block">
              <div className="sticky top-[108px]">
                <LegalToc items={tocItems} />
              </div>
            </aside>

            <article className="min-w-0 max-w-[68ch]">
              <div className="lg-lead">{lead}</div>

              {notice ? <div className="lg-alert">{notice}</div> : null}

              <aside className="lg-summary" aria-labelledby="resumo">
                <p id="resumo" className="lg-kicker">
                  <span className="tri text-[7px]" aria-hidden="true" />
                  Resumo
                </p>
                <ul className="mt-4">
                  {summary.map((item, k) => (
                    <li
                      key={k}
                      className="flex gap-3 border-t border-[color:color-mix(in_srgb,var(--lg-accent)_24%,transparent)] py-3 text-[15.5px] leading-[1.6] text-[color:var(--ink)]"
                    >
                      <span
                        className="tri tri-r mt-[0.55em] shrink-0 text-[7px] text-[color:var(--lg-accent)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>

              <LegalTocMobile items={tocItems} />

              <div className="lg-prose">
                {sections.map((s) => (
                  <section key={s.id} aria-labelledby={s.id}>
                    <h2 id={s.id}>{s.title}</h2>
                    {s.body}
                  </section>
                ))}
              </div>

              <aside
                className="lg-noprint mt-14 border-t-2 border-[color:var(--lg-accent)] bg-[color:var(--lg-soft)] px-6 py-7 sm:px-8"
                aria-label={`Sobre o ${product.name}`}
              >
                <p className="lg-kicker">
                  <span className="tri text-[7px]" aria-hidden="true" />
                  {product.name} · {product.offer}
                </p>
                <div className="mt-4 text-[16.5px] leading-[1.7] text-[color:var(--ink)]">
                  {productBox.text}
                </div>
                <Link
                  href={product.href}
                  className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--lg-accent)] px-5 py-3 text-[15px] font-semibold text-white transition hover:brightness-110"
                >
                  {productBox.cta}
                  <span className="tri tri-r text-[7px]" aria-hidden="true" />
                </Link>
              </aside>

              <div className="lg-prose mt-14">
                {sources?.length ? (
                  <section aria-labelledby="fontes">
                    <h2 id="fontes">Fontes</h2>
                    <ul className="text-[15.5px]">
                      {sources.map((s) => (
                        <li key={s.href}>
                          <a href={s.href} target="_blank" rel="noopener">
                            {s.label}
                          </a>
                          {s.note ? <> {s.note}</> : null}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <p className="mt-12 text-[14px] text-[color:var(--ink-dim)]">
                  <Link href="/guias">Ver todos os guias da AraLabs</Link>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
