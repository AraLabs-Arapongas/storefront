import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { productBySlug, type Product } from '@/lib/products';
import { CONTACT_EMAIL } from '@/lib/seo/site';
import { DOC_LABEL, PRODUCT_DOCS, docHref, type LegalDoc } from './docs';
import { LegalToc, LegalTocMobile, type TocItem } from './LegalToc';

/*
 * One template for every product's privacy / terms / support / auxiliary page. Reading pages, so
 * the craft is typography and wayfinding: a product-coloured band with the document title and its
 * date, an optional plain-language "Em 1 minuto", sticky contents, a ~68ch column and links to the
 * product's other documents. The legal text itself lives in each page, untouched.
 */

export type LegalFaq = { id: string; q: string; a: ReactNode };

export type LegalSection = {
  /** Anchor for the heading (and the contents). */
  id: string;
  /** Clause number as printed in the text ("1", "2"...). */
  n?: string;
  title: string;
  body?: ReactNode;
  /** h3 anchors inside `body` that should appear in the contents. */
  sub?: { id: string; title: string }[];
  /** Support pages: question/answer blocks rendered after `body`. */
  faq?: LegalFaq[];
};

export type SummaryItem = { label: string; text: ReactNode };

type LegalPageProps = {
  product: Product['slug'];
  doc: LegalDoc;
  /** The h1. Wrap the last word in <Hl> for the lighter tint. */
  title: ReactNode;
  /** One line under the title. */
  intro: ReactNode;
  /** "Em vigor desde" / "Atualizado em" + date, as printed in the text. */
  date?: { label: string; value: string };
  /** Opening paragraph(s) of the document. */
  lead?: ReactNode;
  /** "Em 1 minuto": strictly restates what the text below already says. */
  summary?: SummaryItem[];
  /** Under the lead: a contact button or an important notice that is part of the text. */
  callout?: ReactNode;
  sections?: LegalSection[];
  /** Contents column; on by default when there are 3+ sections. */
  toc?: boolean;
  /** Free-form body after the sections (dedicatória). */
  children?: ReactNode;
  /** "Ficou alguma dúvida?" block at the end; off where it would be out of place. */
  contact?: boolean;
};

/** Support pages: the e-mail as a button, right under the lead. */
export function SupportMail({ subject }: { subject: string }) {
  return (
    <p className="lg-noprint mb-12 flex flex-wrap items-center gap-x-5 gap-y-3" data-legal-extra>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`}
        className="lg-mail"
      >
        Escrever para o suporte
        <span className="tri tri-r text-[7px]" aria-hidden="true" />
      </a>
      <span className="text-[14px] text-[color:var(--ink-dim)]">Abre o seu app de e-mail.</span>
    </p>
  );
}

/** Lighter tint for the end of a title on the coloured band. */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="lg-band-hl">{children}</span>;
}

export function LegalPage({
  product: slug,
  doc,
  title,
  intro,
  date,
  lead,
  summary,
  callout,
  sections = [],
  toc,
  children,
  contact = true,
}: LegalPageProps) {
  const product = productBySlug(slug);
  const docs = PRODUCT_DOCS[slug] ?? [doc];
  const tocItems: TocItem[] = sections.map((s) => ({
    id: s.id,
    n: s.n,
    title: s.title,
    sub: s.sub ?? s.faq?.map((f) => ({ id: f.id, title: f.q })),
  }));
  const showToc = toc ?? sections.length >= 3;
  const vars = { '--lg-accent': product.colorInk, '--lg-soft': product.colorSoft } as CSSProperties;

  return (
    <div className="lg-page" style={vars}>
      {/* Band: product colour, document title, date */}
      <header className="lg-band">
        <div className="lg-band-grid" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-14%] top-[-40%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
        <div className="lg-band-inner relative mx-auto max-w-[1240px] px-6 pb-[calc(clamp(28px,4.5vw,72px)+48px)] pt-8 lg:px-10 lg:pb-[calc(clamp(28px,4.5vw,72px)+48px)] lg:pt-10">
          <div className="lg-noprint flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
            <Link
              href={product.href}
              className="lg-back inline-flex items-center gap-2.5 text-[14px] font-semibold"
            >
              <span className="tri lg-tri-l text-[7px]" aria-hidden="true" />
              {product.name}
            </Link>
            {docs.length > 1 ? (
              <nav aria-label={`Documentos do ${product.name}`} className="lg-docnav">
                <ul className="flex flex-wrap gap-2">
                  {docs.map((d) => (
                    <li key={d}>
                      <Link
                        href={docHref(product, d)}
                        aria-current={d === doc ? 'page' : undefined}
                      >
                        {DOC_LABEL[d].short}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>

          <div className="rise mt-10 lg:mt-12">
            <p className="lg-band-muted flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]">
              <span className="tri text-[8px]" aria-hidden="true" />
              {product.name} · {DOC_LABEL[doc].short}
            </p>
            <h1 className="display mt-5 max-w-[15ch] text-balance text-[clamp(2.7rem,6.4vw,5.6rem)]">
              {title}
            </h1>
            <p className="lg-band-muted mt-7 max-w-[46ch] text-[17px] leading-[1.6] md:text-[19px]">
              {intro}
            </p>
            {date ? (
              <p className="lg-date mt-8">
                <span>{date.label}</span>
                <time>{date.value}</time>
              </p>
            ) : null}
          </div>
        </div>
      </header>

      {/* Body: climbs over the band on the mark's diagonal */}
      <div className="lg-body cut-top">
        <div className="mx-auto max-w-[1240px] px-6 pb-24 pt-10 lg:px-10 lg:pb-32 lg:pt-14">
          <div
            className={
              showToc
                ? 'lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-24'
                : ''
            }
          >
            {showToc ? (
              <aside className="lg-noprint hidden lg:block">
                <div className="sticky top-[108px]">
                  <LegalToc items={tocItems} />
                </div>
              </aside>
            ) : null}

            <div className={`min-w-0 max-w-[68ch] ${showToc ? '' : 'mx-auto'}`} data-legal-body>
              {lead ? <div className="lg-lead">{lead}</div> : null}

              {summary?.length ? (
                <aside className="lg-summary" aria-label="Em 1 minuto" data-legal-extra>
                  <p className="lg-kicker">
                    <span className="tri text-[7px]" aria-hidden="true" />
                    Em 1 minuto
                  </p>
                  <dl>
                    {summary.map((s) => (
                      <div key={s.label}>
                        <dt>{s.label}</dt>
                        <dd>{s.text}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="lg-summary-note">
                    Resumo em linguagem simples. O que vale é o texto completo abaixo.
                  </p>
                </aside>
              ) : null}

              {callout}

              {showToc ? <LegalTocMobile items={tocItems} /> : null}

              <div className="lg-prose">
                {sections.map((s) => (
                  <section key={s.id} aria-labelledby={s.id}>
                    <h2 id={s.id}>
                      {s.n ? (
                        <>
                          <span className="lg-num">{s.n}.</span>{' '}
                        </>
                      ) : null}
                      {s.title}
                    </h2>
                    {s.body}
                    {s.faq?.map((f) => (
                      <div key={f.id} className="lg-qa">
                        <h3 id={f.id}>{f.q}</h3>
                        {f.a}
                      </div>
                    ))}
                  </section>
                ))}
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* End: contact + the product's other documents */}
        <section
          className="lg-noprint border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]"
          aria-label={contact ? 'Contato e outros documentos' : 'Outros documentos'}
        >
          <div
            className={`mx-auto grid max-w-[1240px] gap-14 px-6 py-16 lg:gap-20 lg:px-10 lg:py-24 ${
              contact ? 'md:grid-cols-[1.15fr_0.85fr]' : 'md:grid-cols-[1fr_minmax(0,460px)]'
            }`}
          >
            {contact ? (
              <div>
                <p className="lg-kicker">
                  <span className="tri text-[7px]" aria-hidden="true" />
                  Fale com a gente
                </p>
                <p className="display mt-5 text-[clamp(2.2rem,4.6vw,3.8rem)] text-[color:var(--ink)]">
                  Ficou alguma dúvida?
                </p>
                <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                  Escreva para a gente. A AraLabs atende direto, sem robô e sem fila.
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="lg-mail mt-7">
                  {CONTACT_EMAIL}
                  <span className="tri tri-r text-[7px]" aria-hidden="true" />
                </a>
              </div>
            ) : (
              <p className="display self-center text-[clamp(2.2rem,4.6vw,3.8rem)] text-[color:var(--lg-accent)]">
                {product.tagline}
              </p>
            )}
            <nav aria-label={`Documentos do ${product.name}`}>
              <p className="lg-toc-label">
                <span className="tri text-[7px]" aria-hidden="true" />
                Documentos do {product.name}
              </p>
              <ul className="mt-5 border-t border-[color:var(--line-strong)]">
                {docs.map((d) => (
                  <li key={d} className="border-b border-[color:var(--line-strong)]">
                    <Link
                      href={docHref(product, d)}
                      aria-current={d === doc ? 'page' : undefined}
                      className="group flex items-center justify-between gap-4 py-3.5 text-[16px] font-semibold text-[color:var(--ink)] transition hover:text-[color:var(--lg-accent)] aria-[current=page]:text-[color:var(--lg-accent)]"
                    >
                      {DOC_LABEL[d].long}
                      {d === doc ? (
                        <span className="text-[12px] font-medium text-[color:var(--ink-dim)]">
                          você está aqui
                        </span>
                      ) : (
                        <span
                          className="tri tri-r text-[7px] transition group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={product.href}
                className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold"
                style={{ color: product.colorInk }}
              >
                Conhecer o {product.name}
                <span
                  className="tri tri-r text-[7px] transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}
