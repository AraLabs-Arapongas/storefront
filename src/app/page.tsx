import Link from 'next/link';
import type { Metadata } from 'next';
import { LogoMark } from '@/components/site/Logo';
import { HomeHeroCarousel } from '@/components/site/HomeHeroCarousel';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const pillars = [
  {
    n: '01',
    title: 'Empresa-mãe',
    body: 'Estrutura que sustenta múltiplos produtos, não a marca de um único app.',
  },
  {
    n: '02',
    title: 'Problemas reais',
    body: 'Territórios com dor recorrente e impacto concreto no dia a dia.',
  },
  {
    n: '03',
    title: 'Clareza e estrutura',
    body: 'Documentação viva e direção estratégica antes de improviso.',
  },
  {
    n: '04',
    title: 'Longo prazo',
    body: 'Produtos que evoluem com intenção, não lançamentos descartáveis.',
  },
];

const routes = [
  {
    href: '/empresa',
    eyebrow: 'Empresa',
    title: 'Quem é a AraLabs',
    body: 'Lab brasileiro de produtos digitais próprios — base, princípios e como trabalhamos.',
  },
  {
    href: '/tese',
    eyebrow: 'Tese',
    title: 'Por que existimos',
    body: 'A leitura de problema que conecta família, pequeno negócio e operação local.',
  },
  {
    href: '/produtos',
    eyebrow: 'Produtos',
    title: 'O que construímos',
    body: 'Portfólio de produtos próprios da AraLabs e como um produto nasce aqui.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema()} />

      <HomeHeroCarousel />

      {/* Pilares */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Como pensamos
            </p>
            <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
              Uma empresa de{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">produtos</span>, não
              apenas de software.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article
                key={p.n}
                className="group relative bg-[color:var(--bg-elev)] p-7 transition hover:bg-[color:var(--bg-elev-2)]"
              >
                <span className="font-serif text-[13px] italic tracking-wider text-[color:var(--gold-soft)]">
                  {p.n}
                </span>
                <h3 className="mt-8 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tese curta */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Nossa tese
              </p>
              <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                Os mesmos sintomas em{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">
                  contextos diferentes
                </span>
                .
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
              <p>
                Existem muitos problemas cotidianos mal resolvidos por software. Alguns são grandes
                demais para planilhas; outros, simples demais para sistemas pesados.
              </p>
              <p>
                Aparecem dentro de casa, em pequenos negócios e em operações locais que ainda
                dependem de WhatsApp, memória e improviso.
              </p>
              <Link
                href="/tese"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-[14px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
              >
                Ler nossa tese completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Routes / Navegação interna */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Por onde começar
              </p>
              <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                Explore o que estamos construindo.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8 transition hover:border-[color:var(--gold)]/40 hover:bg-[color:var(--bg-elev-2)]"
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                    {r.eyebrow}
                  </p>
                  <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {r.body}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <LogoMark className="h-6 w-6 text-[color:var(--ink-dim)] transition group-hover:text-[color:var(--gold-soft)]" />
                  <span className="text-[color:var(--ink-dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--gold-soft)]">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
