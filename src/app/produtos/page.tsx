import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

const pageDescription =
  'Produtos da AraLabs: Aragenda (agenda online e presença digital para pequenos negócios) e Casa Leve (rotina familiar). Lab brasileiro de produtos digitais próprios.';

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

const products = [
  {
    href: '/produtos/aragenda',
    name: 'Aragenda',
    tagline: 'Agenda online + presença digital para pequenos negócios de serviços.',
    status: 'Em desenvolvimento',
  },
  {
    href: '/produtos/casa-leve',
    name: 'Casa Leve',
    tagline: 'Sistema para ajudar famílias a organizar rotina, responsabilidades e hábitos.',
    status: 'Em exploração',
  },
];

const lifecycle = [
  { n: '01', title: 'Problema real', body: 'Começamos por uma dor concreta, não por uma ideia.' },
  {
    n: '02',
    title: 'Tese clara',
    body: 'Antes de construir, formulamos o ponto de vista que justifica o produto.',
  },
  {
    n: '03',
    title: 'Produto simples',
    body: 'A primeira versão entrega o essencial sem inflar o escopo.',
  },
  {
    n: '04',
    title: 'Base técnica sólida',
    body: 'Engenharia e design servem o produto pelo longo prazo.',
  },
  { n: '05', title: 'Evolução contínua', body: 'Produto vive — observa-se, ajusta-se, refina-se.' },
];

export default function ProdutosPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: '/produtos',
          name: 'Produtos da AraLabs',
          description: pageDescription,
        })}
      />

      {/* Hero banner · imagem livre */}
      <section className="relative aspect-[4/5] overflow-hidden border-b border-[color:var(--line)] md:aspect-[16/9] lg:aspect-[3/1]">
        <Image
          src="/images/portfolio-banner-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        <Image
          src="/images/portfolio-banner-md.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block lg:hidden"
        />
        <Image
          src="/images/portfolio-banner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
        />
      </section>

      {/* Copy do portfólio */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
          <div className="flex max-w-3xl flex-col">
            <h1 className="text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[42px] lg:text-[52px]">
              A AraLabs cria produtos próprios para{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">problemas reais</span>{' '}
              do cotidiano.
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[18px]">
              Nosso portfólio reúne produtos digitais construídos com intenção de longo prazo, base
              técnica sólida e leitura direta do problema.
            </p>
          </div>
        </div>
      </section>

      {/* Produtos atuais */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Produtos atuais
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8 transition hover:border-[color:var(--gold)]/40 hover:bg-[color:var(--bg-elev-2)]"
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                    Status: {p.status}
                  </p>
                  <h3 className="mt-5 text-[26px] font-semibold tracking-tight text-[color:var(--ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {p.tagline}
                  </p>
                </div>
                <span className="mt-10 text-[color:var(--ink-dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--gold-soft)]">
                  Conhecer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Como um produto nasce */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Como construímos
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Como um produto nasce na{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">AraLabs</span>.
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-5">
            {lifecycle.map((s) => (
              <li key={s.n} className="bg-[color:var(--bg-elev)] p-7">
                <span className="font-serif text-[13px] italic tracking-wider text-[color:var(--gold-soft)]">
                  {s.n}
                </span>
                <h3 className="mt-8 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
