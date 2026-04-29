import Link from 'next/link';
import Image from 'next/image';
import { RoutineMockup, CollabMockup, HabitsMockup } from '@/components/site/FeatureMockups';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';

const pageTitle = 'Casa Leve — rotina familiar';
const pageDescription =
  'Casa Leve é o aplicativo da AraLabs para rotina familiar: tarefas recorrentes, colaboração entre os membros da família e incentivos positivos para crianças. Em exploração.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/casa-leve' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/casa-leve',
    type: 'website',
  },
};

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
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/casa-leve',
          name: 'Casa Leve',
          description: pageDescription,
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Web, iOS, Android',
        })}
      />
      {/* Hero banner · imagem livre */}
      <section className="relative aspect-[4/5] overflow-hidden border-b border-[color:var(--line)] md:aspect-[16/9] lg:aspect-[3/1]">
        <Image
          src="/images/casa-leve-banner-product-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        <Image
          src="/images/casa-leve-banner-product-md.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block lg:hidden"
        />
        <Image
          src="/images/casa-leve-banner-product.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
        />
      </section>

      {/* Copy do produto */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
          <div className="flex max-w-3xl flex-col">
            <h1 className="text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[42px] lg:text-[52px]">
              <span className="font-serif italic text-[color:var(--gold-soft)]">Casa Leve</span> —
              um sistema para a família funcionar melhor.
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[18px]">
              Rotina, responsabilidades, hábitos e colaboração em um só lugar. Menos cobrança, mais
              clareza, mais autonomia.
            </p>
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
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Desenhado para{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">famílias</span> com
              filhos que querem uma rotina mais leve.
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
              <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
                O que o <span className="whitespace-nowrap">Casa Leve</span> faz{' '}
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
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Como o Casa Leve{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">pensa</span> rotina.
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
                <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                  Quer acompanhar a construção?
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                  O Casa Leve está em exploração inicial. Entre em contato se você quer acompanhar,
                  testar ou conversar sobre o produto.
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
