import Link from 'next/link';
import Image from 'next/image';
import { ImagePlaceholder } from '@/components/site/ImagePlaceholder';
import { CasaLeveMockup } from '@/components/site/CasaLeveMockup';
import {
  RoutineMockup,
  CollabMockup,
  HabitsMockup,
} from '@/components/site/FeatureMockups';

const features = [
  {
    n: '01',
    title: 'Rotina da casa',
    body: 'Tarefas recorrentes, lembretes e checkpoints diários para toda a família.',
    mockup: <RoutineMockup />,
  },
  {
    n: '02',
    title: 'Colaboração familiar',
    body: 'Responsabilidades visíveis para todos os membros, sem depender da memória de um.',
    mockup: <CollabMockup />,
  },
  {
    n: '03',
    title: 'Hábitos e pontos',
    body: 'Incentivo positivo para crianças com pontos, metas e recompensas definidas pelos pais.',
    mockup: <HabitsMockup />,
  },
];

const principles = [
  {
    title: 'Menos cobrança',
    body: 'O sistema mostra o que precisa ser feito. Ninguém precisa ficar lembrando ninguém.',
  },
  {
    title: 'Mais clareza',
    body: 'Responsabilidades e acordos ficam visíveis. Todo mundo enxerga o mesmo.',
  },
  {
    title: 'Mais autonomia',
    body: 'Crianças acompanham sua rotina com incentivo, não com pressão.',
  },
  {
    title: 'Sem burocracia',
    body: 'Rápido de usar no dia a dia. Profundo na leitura do problema.',
  },
];

export default function CasaLevePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-20%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.14),transparent_70%)]" />
          <div className="absolute right-[-10%] top-[20%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,255,0.10),transparent_70%)]" />
        </div>
        <div className="grain" />

        <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="flex flex-col justify-center rise">
              <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/60 py-2 pl-2 pr-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-muted)] backdrop-blur">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--gold)]/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shimmer" />
                </span>
                Primeiro produto da Aralabs
              </div>

              <h1 className="text-balance text-[44px] font-semibold leading-[1.03] tracking-[-0.02em] text-[color:var(--ink)] md:text-[58px] lg:text-[68px]">
                <span className="font-serif italic text-[color:var(--gold-soft)]">Casa Leve</span>
                <br />
                um sistema para a família funcionar melhor.
              </h1>

              <p className="mt-8 max-w-xl text-[19px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[20px]">
                Rotina, responsabilidades, hábitos e colaboração em um só lugar. Menos cobrança,
                mais clareza, mais autonomia.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#features"
                  className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[15px] font-semibold tracking-tight text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
                >
                  Ver funcionalidades
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </a>
                <span className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
                  Em exploração
                </span>
              </div>

              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-[color:var(--line)] pt-8">
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                    Foco
                  </dt>
                  <dd className="mt-2 font-serif text-xl italic text-[color:var(--ink)]">
                    Família
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                    Plataforma
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-[color:var(--ink)]">
                    Mobile first
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                    Lançamento
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-[color:var(--ink)]">2026</dd>
                </div>
              </dl>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute inset-0 rounded-[28px] border border-[color:var(--line-strong)] bg-gradient-to-br from-[color:var(--bg-elev-2)] via-[color:var(--bg-elev)] to-[color:var(--surface-deep)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--gold-soft)] font-serif text-sm italic text-[color:var(--on-gold)]">
                      C
                    </span>
                    <span className="text-[13px] font-semibold text-[color:var(--ink)]">
                      Casa Leve
                    </span>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                    preview
                  </span>
                </div>
                <div className="h-[calc(100%-60px)]">
                  <CasaLeveMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big visual showcase */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Para quem é
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px]">
              Desenhado para{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">famílias</span>{' '}
              com filhos que querem uma rotina mais leve.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/family-1.png"
              alt="Família em casa dividindo uma tarefa cotidiana"
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1240px) 1160px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Features gallery */}
      <section id="features" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Funcionalidades
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px]">
                O que o Casa Leve faz{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">pela casa</span>.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.n}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] transition hover:border-[color:var(--gold)]/30"
              >
                <div className="relative h-[520px] border-b border-[color:var(--line)] bg-gradient-to-b from-[color:var(--bg-elev-2)] to-[color:var(--bg-elev)]">
                  {f.mockup}
                </div>
                <div className="p-7">
                  <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                    {f.n}
                  </span>
                  <h3 className="mt-3 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {f.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Princípios do produto */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Princípios do produto
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px]">
              Como o Casa Leve{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">pensa</span>{' '}
              rotina.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2">
            {principles.map((p, i) => (
              <article
                key={p.title}
                className="group bg-[color:var(--bg-elev)] p-8 transition hover:bg-[color:var(--bg-elev-2)]"
              >
                <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                  0{i + 1}
                </span>
                <h3 className="mt-10 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--line-strong)] bg-gradient-to-br from-[color:var(--bg-elev-2)] via-[color:var(--bg-elev)] to-[color:var(--surface-deep)] px-8 py-14 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.18),transparent_70%)]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                  — Casa Leve
                </p>
                <h2 className="mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
                  Quer acompanhar a construção?
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                  O Casa Leve está em exploração inicial. Entre em contato se você quer
                  acompanhar, testar ou conversar sobre o produto.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tese"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50"
                >
                  Ler a tese
                </Link>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
                >
                  Entrar em contato →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
