import Link from 'next/link';
import type { CSSProperties } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, collectionPageSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { productBySlug } from '@/lib/products';
import { GUIDE_THEMES, guidesByTheme } from '@/lib/guides';
import { InView } from '@/components/home/InView';
import { Kicker, i } from '@/components/pages/Editorial';

const pageTitle = 'Guias da AraLabs: comunicação alternativa, sistemas e café';
const pageDescription =
  'Guias práticos da AraLabs: prancha de comunicação para crianças não-verbais, sistema sob medida ou pronto e como acertar o espresso em casa.';

export const metadata = pageMetadata({
  path: '/guias',
  title: pageTitle,
  absoluteTitle: true,
  description: pageDescription,
});

export default function GuiasPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({ path: '/guias', name: pageTitle, description: pageDescription }),
          breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Guias' }]),
        ]}
      />

      {/* 1 · OPENING */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-12%] top-[-30%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.16),transparent_70%)]" />
          <div className="tri-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-14 lg:px-10 lg:pb-20 lg:pt-20">
          <Kicker>Guias</Kicker>
          <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,7vw,6.2rem)] text-[color:var(--ink)]">
            Guias da <span className="text-[color:var(--gold-soft)]">AraLabs.</span>
          </h1>
          <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[18.5px]">
            Respostas diretas para dúvidas que aparecem em volta dos nossos produtos: como começar
            com comunicação alternativa em casa, como decidir entre um sistema pronto e um sob
            medida, e o que ajustar quando o espresso não fica bom. Sem enrolação, com fontes quando
            o assunto pede.
          </p>
        </div>
      </section>

      {/* 2 · THEMES */}
      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10 lg:pb-36">
          {GUIDE_THEMES.map((theme) => (
            <section
              key={theme.slug}
              id={theme.slug}
              aria-labelledby={`${theme.slug}-title`}
              className="grid gap-8 border-b border-[color:var(--line-strong)] py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20"
            >
              <div>
                <p
                  className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.28em]"
                  style={{ color: theme.accent }}
                >
                  <span className="tri text-[8px]" aria-hidden="true" />
                  Tema
                </p>
                <h2
                  id={`${theme.slug}-title`}
                  className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[color:var(--ink)]"
                >
                  {theme.label}
                </h2>
                <p className="mt-3 max-w-[38ch] text-[16px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {theme.intro}
                </p>
              </div>
              <InView as="ul" className="grid gap-5" threshold={0.2}>
                {guidesByTheme(theme.slug).map((g, k) => {
                  const product = productBySlug(g.product);
                  return (
                    <li key={g.path} className="iv iv-up" style={i(k)}>
                      <Link
                        href={g.path}
                        className="group block border-t-2 bg-[color:var(--bg-elev)] p-6 transition hover:bg-[color:var(--lg-soft)] sm:p-8"
                        style={
                          {
                            borderColor: theme.accent,
                            '--lg-soft': theme.soft,
                          } as CSSProperties
                        }
                      >
                        <h3 className="text-[clamp(1.3rem,2.2vw,1.65rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[color:var(--ink)]">
                          {g.title}
                        </h3>
                        <p className="mt-3 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                          {g.excerpt}
                        </p>
                        <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold">
                          <span
                            className="inline-flex items-center gap-2"
                            style={{ color: theme.accent }}
                          >
                            Ler o guia
                            <span
                              className="tri tri-r text-[7px] transition group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="text-[color:var(--ink-dim)]">
                            {g.readingMinutes} min · Relacionado: {product.name}
                          </span>
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </InView>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
