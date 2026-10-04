import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';
import {
  PRODUCTS,
  PRODUCT_LINES,
  countWord,
  joinNames,
  productsByLine,
  type Product,
} from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { KomyxMark, ProductTile } from '@/components/site/ProductMarks';
import { InView } from '@/components/home/InView';
import { Kicker, Pill, capitalize, i, tallySentence } from '@/components/pages/Editorial';

const pageDescription = `Produtos da AraLabs: ${joinNames(
  PRODUCTS.map((p) => ({ name: `${p.name} (${p.summary})` })),
)}. Abra. Entenda. Use.`;

export const metadata: Metadata = {
  title: 'Produtos',
  description: pageDescription,
  alternates: { canonical: '/produtos' },
  openGraph: {
    title: 'Produtos da AraLabs',
    description: pageDescription,
    url: '/produtos',
    type: 'website',
  },
};

const HOW = [
  {
    title: 'Um problema que a gente conhece.',
    body: 'Começamos por uma dor concreta de um negócio ou de uma casa, não por uma ideia de app.',
  },
  {
    title: 'A versão mais simples que resolve.',
    body: 'A primeira versão entrega o essencial e vai cedo para a mão de quem usa.',
  },
  {
    title: 'Preço que cabe.',
    body: 'Mensalidade pequena ou gratuito quando faz sentido. Sem fidelidade, sem taxa por venda.',
  },
  {
    title: 'Evolui com quem usa.',
    body: 'O que o cliente pede de manhã pode estar no ar na mesma semana. Produto vivo, não lançamento.',
  },
];

const num = (p: Product) => String(PRODUCTS.indexOf(p) + 1).padStart(2, '0');
const lineLabel = (line: Product['line']) => PRODUCT_LINES.find((l) => l.line === line)!.label;
const vars = (p: Product) => ({ '--c': p.colorInk, '--cs': p.colorSoft }) as CSSProperties;

/** Where the product lives outside the site, in words. */
const externalLabel = (p: Product) =>
  p.externalUrl?.includes('apps.apple.com') ? 'Baixar na App Store' : `Abrir o ${p.name}`;

/** Second beat of the band headline, per product. */
const BAND_KICKER: Partial<Record<Product['slug'], string>> = {
  komyx: 'O cliente monta a festa. Você só confirma.',
};

/** Business line: each product is a full-bleed moment in its own colour. */
function BusinessBand({ p, first }: { p: Product; first: boolean }) {
  return (
    <section
      id={p.slug}
      aria-labelledby={`${p.slug}-title`}
      className="cut-top relative overflow-hidden text-white"
      style={{ background: p.colorInk }}
    >
      {p.slug === 'komyx' ? (
        <KomyxMark className="pg-band-mark pointer-events-none absolute text-white" />
      ) : null}
      <div className="relative mx-auto max-w-[1240px] px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        {first ? (
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-[11px] sm:tracking-[0.28em]">
            <span className="tri text-[8px]" aria-hidden="true" />
            {lineLabel('negocios')}
          </p>
        ) : null}
        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/85">
          <span className="tabular-nums">{num(p)}</span>
          <span>{p.audience}</span>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] tracking-[0.16em]">
            {p.statusNote ?? p.status}
          </span>
        </div>
        <h2
          id={`${p.slug}-title`}
          className="display mt-4 text-[clamp(4.6rem,19vw,15rem)] leading-[0.82]"
        >
          {p.name}
        </h2>
        <div className="mt-10 grid gap-10 border-t border-white/25 pt-10 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <p className="max-w-[16ch] text-[clamp(1.9rem,3.8vw,3.2rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            {p.tagline}{' '}
            {BAND_KICKER[p.slug] ? (
              <span className="text-white/70">{BAND_KICKER[p.slug]}</span>
            ) : null}
          </p>
          <div>
            <p className="max-w-lg text-[17px] leading-[1.7] text-white/90">{p.description}</p>
            <p className="mt-6 text-[15px] font-semibold">{p.offer}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href={p.href} look="white" arrow style={{ color: p.colorInk }}>
                Conhecer o {p.name}
              </Pill>
              {p.externalUrl ? (
                <Pill href={p.externalUrl} look="ghost">
                  {p.slug === 'komyx' ? 'Criar meu buffet' : externalLabel(p)}
                </Pill>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Family line: one editorial row per product, its colour arriving as a triangle. */
function FamilyRow({ p, alt }: { p: Product; alt: boolean }) {
  const note =
    p.statusNote && !p.offer.toLowerCase().includes(p.statusNote.toLowerCase())
      ? p.statusNote
      : null;
  return (
    <article
      id={p.slug}
      aria-labelledby={`${p.slug}-title`}
      className={`pg-prow relative border-t border-[color:var(--line-strong)] ${alt ? 'pg-prow-alt' : ''}`}
      style={vars(p)}
    >
      <InView className="relative py-14 lg:py-20" threshold={0.3}>
        <span aria-hidden="true" className="pg-prow-tri" />
        <div
          className={`relative grid gap-6 lg:gap-16 ${
            alt
              ? 'lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]'
              : 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'
          }`}
        >
          <div className={alt ? 'lg:order-2 lg:flex lg:flex-col lg:items-end lg:text-right' : ''}>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
              <span className="tri text-[8px]" style={{ color: p.colorInk }} aria-hidden="true" />
              <span className="tabular-nums" style={{ color: p.colorInk }}>
                {num(p)}
              </span>
              {p.audience}
              <span
                className="rounded-full px-2.5 py-1 text-[10px] tracking-[0.14em]"
                style={{ background: p.colorSoft, color: p.colorInk }}
              >
                {p.status}
              </span>
            </p>
            <h3
              id={`${p.slug}-title`}
              className="display iv iv-up mt-5 text-[clamp(3.3rem,9vw,8.4rem)]"
            >
              <Link href={p.href} className="pg-prow-name" style={{ color: p.colorInk }}>
                {p.name}
              </Link>
            </h3>
            <p className="mt-5 max-w-[22ch] text-[clamp(1.35rem,2.3vw,1.9rem)] font-semibold leading-[1.2] tracking-tight text-[color:var(--ink)]">
              {p.tagline}
            </p>
          </div>
          <div className="lg:pt-16">
            <p className="max-w-lg text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
              {p.description}
            </p>
            <p className="mt-6 flex items-center gap-3 text-[15px] font-semibold text-[color:var(--ink)]">
              <ProductTile product={p} size={30} />
              {p.offer}
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] font-semibold">
              <Link
                href={p.href}
                className="group inline-flex items-center gap-2"
                style={{ color: p.colorInk }}
              >
                Conhecer o {p.name}
                <span
                  className="tri tri-r text-[8px] transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              {p.externalUrl ? (
                <a
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-[color:var(--ink-muted)] underline decoration-[color:var(--line-strong)] underline-offset-4 transition hover:text-[color:var(--ink)]"
                >
                  {externalLabel(p)}
                </a>
              ) : note ? (
                <span className="text-[color:var(--ink-dim)]">{note}</span>
              ) : null}
            </p>
          </div>
        </div>
      </InView>
    </article>
  );
}

export default function ProdutosPage() {
  const business = productsByLine('negocios');
  const family = productsByLine('familias');

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: '/produtos',
          name: 'Produtos da AraLabs',
          description: pageDescription,
        })}
      />

      {/* 1 · OPENING — giant count, then the contents strip */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-18%] top-[-30%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.15),transparent_70%)]" />
          <div className="tri-grid pg-grid-right absolute inset-0" />
        </div>
        <div className="pg-hero relative mx-auto max-w-[1240px] px-6 pb-20 pt-10 lg:px-10 lg:pb-24 lg:pt-14">
          <Kicker>Produtos · feitos em Arapongas, PR</Kicker>
          <h1 className="pg-title-produtos display mt-6 text-[color:var(--ink)]">
            <span className="block">{capitalize(countWord(PRODUCTS.length))} produtos.</span>
            <span className="block text-[color:var(--gold-soft)]">Nenhum manual.</span>
          </h1>
          <p className="mt-7 max-w-[600px] text-[17px] leading-[1.55] text-[color:var(--ink-muted)] md:text-[18.5px]">
            Para o negócio e para a casa. Cada um nasce de um problema que a gente viu de perto e
            fica simples o bastante para usar no primeiro dia. Hoje são {tallySentence()}.
          </p>
          <InView
            as="ol"
            className="pg-index mt-10 grid grid-cols-2 gap-x-5 border-t border-[color:var(--line-strong)] sm:grid-cols-3 lg:mt-12 lg:grid-cols-6"
            threshold={0.2}
          >
            {PRODUCTS.map((p, k) => (
              <li key={p.slug} style={{ ...vars(p), ...i(k) }}>
                <a href={`#${p.slug}`} className="pg-index-item group block pb-4 pt-5">
                  <span className="flex items-center gap-2 text-[11px] font-bold tabular-nums tracking-[0.16em] text-[color:var(--c)]">
                    <span className="tri text-[7px]" aria-hidden="true" />
                    {num(p)}
                  </span>
                  <span className="mt-2 block text-[19px] font-bold tracking-tight text-[color:var(--ink)] transition group-hover:text-[color:var(--c)] lg:text-[21px]">
                    {p.name}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-[color:var(--ink-dim)]">
                    {p.status}
                  </span>
                </a>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 2 · BUSINESS LINE — full colour */}
      {business.map((p, k) => (
        <BusinessBand key={p.slug} p={p} first={k === 0} />
      ))}

      {/* Sob medida sits on the business line: same black strip the home uses for it. */}
      <section className="bg-[color:var(--dark)] text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-14">
          <p className="max-w-[34ch] text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Outro tipo de negócio?{' '}
            <span className="text-[color:var(--gold)]">
              Se o seu problema ainda não tem produto, a gente faz sob medida.
            </span>
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Pill href="/sob-medida" look="gold" arrow>
              Como funciona
            </Pill>
          </div>
        </div>
      </section>

      {/* 3 · FAMILY LINE — editorial rows on cream */}
      <section aria-labelledby="familia-title" className="overflow-x-clip">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="grid gap-8 pb-14 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:pb-20 lg:pt-32">
            <div>
              <Kicker>{lineLabel('familias')}</Kicker>
              <h2
                id="familia-title"
                className="display mt-6 max-w-[13ch] text-[clamp(2.8rem,7vw,6.4rem)] text-[color:var(--ink)]"
              >
                Para quando o trabalho termina.
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              A rotina da casa, as crianças, o sono do bebê e os seus próprios hábitos.{' '}
              {capitalize(countWord(family.length))} apps com a mesma regra dos produtos para
              negócio: abriu, entendeu, usou.
            </p>
          </div>
          {family.map((p, k) => (
            <FamilyRow key={p.slug} p={p} alt={k % 2 === 1} />
          ))}
        </div>
      </section>

      {/* 4 · HOW — black, four rules with giant numbers */}
      <section
        aria-labelledby="regras-title"
        className="cut-top bg-[color:var(--dark)] text-[color:var(--bg)]"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <Kicker onDark>Como um produto nasce aqui</Kicker>
          <h2 id="regras-title" className="display mt-6 text-[clamp(2.8rem,6.6vw,6rem)]">
            {capitalize(countWord(HOW.length))} regras.{' '}
            <span className="block text-[color:var(--gold)]">Valem para todos.</span>
          </h2>
          <InView
            as="ol"
            className="mt-16 grid border-t border-white/12 md:grid-cols-2 lg:mt-20"
            threshold={0.2}
          >
            {HOW.map((h, k) => (
              <li
                key={h.title}
                className="iv iv-up grid grid-cols-[auto_1fr] gap-6 border-b border-white/12 py-9 md:odd:border-r md:odd:pr-10 md:even:pl-10 lg:py-12"
                style={i(k)}
              >
                <span className="display flex items-start gap-2 text-[clamp(3.4rem,6vw,5.4rem)] leading-[0.8] text-[color:var(--gold)]">
                  {String(k + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block text-[21px] font-semibold tracking-tight">{h.title}</span>
                  <span className="mt-2 block text-[15.5px] leading-[1.65] text-white/65">
                    {h.body}
                  </span>
                </span>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 5 · CLOSING — gold */}
      <section
        aria-labelledby="nao-achou"
        className="cut-top-rev relative overflow-hidden bg-[color:var(--gold)] text-[color:var(--dark)]"
      >
        <span aria-hidden="true" className="pg-corner-tri" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.28em]">
            <span className="tri text-[8px]" aria-hidden="true" />
            Sob medida
          </p>
          <h2 id="nao-achou" className="display mt-6 max-w-[13ch] text-[clamp(3rem,8vw,7.4rem)]">
            Não achou o seu? <span className="block">A gente faz.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-[color:var(--dark)]/80">
            A gente não começa do zero: já temos uma base pronta para agenda, pagamentos, orçamentos
            e operação. A primeira versão entra no ar rápido, e depois a gente melhora junto.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Pill href="/sob-medida" arrow>
              Ver o sob medida
            </Pill>
            <a
              href={contactHref('Quero um sistema para o meu negócio')}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--dark)]/35 px-5 py-3 text-[14.5px] font-semibold transition hover:bg-[color:var(--dark)]/10 sm:px-6 sm:py-3.5 sm:text-[15px]"
            >
              Falar com a gente
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
