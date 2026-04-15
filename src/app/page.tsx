import Image from 'next/image';
import Link from 'next/link';
import { CasaLeveDualMockup } from '@/components/site/CasaLeveDualMockup';
import { LogoMark } from '@/components/site/Logo';

const pillars = [
  {
    n: '01',
    title: 'Empresa-mãe',
    body: 'Estrutura que sustenta múltiplos produtos, não a marca de um único app.',
  },
  {
    n: '02',
    title: 'Problemas reais',
    body: 'Territórios com dor recorrente e impacto emocional concreto.',
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
    title: 'Quem é a Aralabs',
    body: 'Visão, valores e princípios que guiam cada decisão.',
  },
  {
    href: '/tese',
    eyebrow: 'Tese',
    title: 'Por que existimos',
    body: 'A leitura do problema que move tudo o que construímos.',
  },
  {
    href: '/casa-leve',
    eyebrow: 'Casa Leve',
    title: 'Primeiro produto',
    body: 'Um sistema para ajudar a família a funcionar melhor.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-20%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.14),transparent_70%)]" />
          <div className="absolute right-[-10%] top-[20%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,255,0.10),transparent_70%)]" />
        </div>
        <div className="grain" />

        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="flex flex-col justify-center rise">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/60 py-2 pl-2 pr-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-muted)] backdrop-blur">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--gold)]/15 text-[color:var(--gold-soft)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shimmer" />
              </span>
              Empresa-mãe de produtos digitais
            </div>

            <h1 className="text-balance text-[42px] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] md:text-[54px] lg:text-[62px]">
              Produtos{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">digitais</span> para
              problemas reais do cotidiano.
            </h1>
            <p className="mt-8 max-w-xl text-[19px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[20px]">
              A Aralabs é uma empresa brasileira que transforma desafios recorrentes da vida real
              em produtos digitais úteis, claros e construídos com intenção de longo prazo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/casa-leve"
                className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[15px] font-semibold tracking-tight text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
              >
                Conhecer o Casa Leve
                <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/tese"
                className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
              >
                Ler a nossa tese
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
              <Image
                src="/images/hero-editorial.png"
                alt="Lar brasileiro em movimento — luz natural e objetos do cotidiano"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg-elev-2)] p-4 lg:block">
              <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                Longo prazo
              </div>
              <div className="mt-2 font-serif text-2xl italic text-[color:var(--gold-soft)]">∞</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick pillars row */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Como pensamos
            </p>
            <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
              Uma empresa de{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">produtos</span>,
              não apenas de software.
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

      {/* Visual teaser — Casa Leve */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-soft)]">
                  Primeiro produto
                </span>
                <span className="font-serif text-xs italic text-[color:var(--ink-muted)]">
                  em exploração
                </span>
              </div>
              <h2 className="mt-6 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
                <span className="font-serif italic text-[color:var(--gold-soft)]">Casa Leve</span>{' '}
                — um sistema para a família funcionar melhor.
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
                Rotina, responsabilidades, hábitos e colaboração em um só lugar. Menos cobrança,
                mais clareza e mais autonomia pra toda a família.
              </p>
              <Link
                href="/casa-leve"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-[14px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
              >
                Ver o Casa Leve →
              </Link>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-gradient-to-br from-[color:var(--bg-elev-2)] via-[color:var(--bg-elev)] to-[color:var(--surface-deep)] p-6">
              <CasaLeveDualMockup />
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
