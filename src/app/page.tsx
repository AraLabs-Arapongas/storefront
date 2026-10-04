import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema } from '@/lib/seo/schemas';
import { PRODUCTS, countWord, productBySlug, productsByLine, type Product } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { KomyxMark } from '@/components/site/ProductMarks';
import { HeroOrbit } from '@/components/home/HeroOrbit';
import {
  ArakidsMock,
  CasaLeveMock,
  JornadasMock,
  KomyxStage,
  LumoMock,
  SonoLeveMock,
} from '@/components/home/Mocks';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const MOCKS: Record<Product['slug'], (() => ReactNode) | undefined> = {
  komyx: undefined,
  'casa-leve': CasaLeveMock,
  arakids: ArakidsMock,
  lumo: LumoMock,
  'sono-leve': SonoLeveMock,
  jornadas: JornadasMock,
};

const KOMYX_FLOW = [
  'Agenda sem choque de datas',
  'Orçamento com pacotes e cardápio',
  'Contrato aceito pelo link',
  'Reserva e parcelas no Pix',
  'Convite com confirmação de presença',
  'Portaria no celular',
];

const NOS = [
  'Sem onboarding de 47 minutos.',
  'Sem “fale com vendas” para descobrir o preço.',
  'Sem 83 funcionalidades que você nunca vai usar.',
];

const SOB_MEDIDA = [
  { n: '01', title: 'Uma conversa.', body: 'Você conta como é o seu dia e onde ele trava.' },
  {
    n: '02',
    title: 'Primeira versão em semanas.',
    body: 'Montada com as mesmas peças do Komyx: agenda, orçamento, Pix, painel do dono.',
  },
  {
    n: '03',
    title: 'O sistema é seu.',
    body: 'Preço fechado, e a gente segue cuidando da operação depois.',
  },
];

const capitalize = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

/** "Seis produtos: três no ar, um em beta e dois em breve." Always matches products.ts. */
function portfolioLine() {
  const parts = (
    [
      ['No ar', 'no ar'],
      ['Beta', 'em beta'],
      ['Em breve', 'em breve'],
    ] as const
  )
    .map(([status, label]) => ({ n: PRODUCTS.filter((p) => p.status === status).length, label }))
    .filter((x) => x.n > 0)
    .map(({ n, label }) => `${countWord(n)} ${label}`);
  const list =
    parts.length > 1 ? `${parts.slice(0, -1).join(', ')} e ${parts[parts.length - 1]}` : parts[0];
  return `${capitalize(countWord(PRODUCTS.length))} produtos: ${list}.`;
}

function Kicker({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
        onDark ? 'text-[color:var(--gold)]' : 'text-[color:var(--gold-soft)]'
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  const komyx = productBySlug('komyx');
  const family = productsByLine('familias');
  const live = family.filter((p) => p.status !== 'Em breve');
  const coming = family.filter((p) => p.status === 'Em breve');

  return (
    <>
      <JsonLd data={websiteSchema()} />

      {/* 1 · HERO — giant type, products orbiting it */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[-35%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.16),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-14">
          <HeroOrbit>
            <Kicker>Tecnologia simples para pequenos negócios · Arapongas, PR</Kicker>
            <h1 className="display rise mt-6 text-[clamp(3.2rem,9.4vw,8.6rem)] text-[color:var(--ink)]">
              <span className="lg:block">Software</span>{' '}
              <span className="lg:block">que cabe no</span>{' '}
              <span className="lg:block">seu negócio.</span>{' '}
              <span className="block text-[color:var(--gold-soft)]">Não o contrário.</span>
            </h1>
            <div className="mt-10 max-w-[460px] lg:mt-14">
              <p className="text-[18px] leading-[1.6] text-[color:var(--ink-muted)] md:text-[19px]">
                Produtos prontos para assinar e sistemas sob medida, para quem não tem tempo de
                aprender software. Abriu, entendeu, usou.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/produtos"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--bg)] transition hover:bg-[color:var(--gold-soft)]"
                >
                  Ver os produtos <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/sob-medida"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/60 hover:text-[color:var(--gold-soft)]"
                >
                  Sob medida
                </Link>
              </div>
              <p className="mt-5 text-[13.5px] text-[color:var(--ink-dim)]">{portfolioLine()}</p>
            </div>
          </HeroOrbit>
        </div>
      </section>

      {/* 2 · MANIFESTO — black */}
      <section className="relative overflow-hidden bg-[color:var(--dark)] text-[color:var(--bg)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker onDark>Como a gente faz software</Kicker>
          <ul className="mt-10 border-t border-white/12">
            {NOS.map((line) => (
              <li
                key={line}
                className="reveal border-b border-white/12 py-5 text-[clamp(1.5rem,3.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-white/55 lg:py-7"
              >
                {line}
              </li>
            ))}
          </ul>
          <h2 className="display reveal mt-14 text-[clamp(3.6rem,12vw,11rem)] lg:mt-20">
            Abra. Entenda. <span className="text-[color:var(--gold)]">Use.</span>
          </h2>
          <p className="reveal mt-8 max-w-xl text-[17px] leading-[1.7] text-white/70">
            Tela que o dono usa no primeiro dia, preço que aparece na página e só o que resolve o
            problema. Se precisa de manual, a gente refaz.
          </p>
        </div>
      </section>

      {/* 3 · KOMYX — full-bleed pink, the product working */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: komyx.colorInk }}
        aria-labelledby="komyx-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-12%] top-[-20%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.16),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-center gap-3">
            <KomyxMark className="h-10 w-10 text-white" />
            <p className="text-[26px] font-extrabold tracking-tight">Komyx</p>
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]">
              {komyx.status} · {komyx.audience.replace(/^Para /, 'para ')}
            </span>
          </div>
          <h2
            id="komyx-title"
            className="display reveal mt-8 text-[clamp(2.9rem,6vw,5.9rem)] leading-[0.95]"
          >
            A festa se vende sozinha.{' '}
            <span className="block text-[#ffd3e1]">Você só confirma.</span>
          </h2>
          <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div>
              <p className="mt-7 max-w-lg text-[17px] leading-[1.7] text-white/90">
                O cliente monta a festa pela página do seu buffet, escolhe pacote e cardápio, aceita
                o contrato e paga a reserva no Pix. Você abre o Komyx e confirma.
              </p>
              <ol className="mt-8 max-w-lg border-t border-white/25">
                {KOMYX_FLOW.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-baseline gap-4 border-b border-white/25 py-3 text-[16px] font-semibold"
                  >
                    <span className="w-6 shrink-0 text-[12px] tabular-nums text-white/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-7 max-w-lg text-[16px] leading-[1.7] text-white/90">
                E a família acompanha tudo pelo app do cliente: paga as parcelas no Pix, monta a
                lista de convidados e manda o convite.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href={komyx.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold transition hover:bg-[#ffd3e1]"
                  style={{ color: komyx.colorInk }}
                >
                  Conhecer o Komyx <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={komyx.externalUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
                >
                  Criar meu buffet
                </a>
              </div>
              <p className="mt-4 text-[14px] text-white/80">
                {komyx.offer}. Tudo incluído, sem taxa por festa.
              </p>
            </div>
            <figure className="relative lg:sticky lg:top-32 lg:pt-12">
              <KomyxStage />
              <figcaption className="mt-10 text-center text-[12px] text-white/70 sm:mt-40">
                Interface ilustrativa · nomes e valores de exemplo
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4 · STORY — the other side of the day */}
      <section className="border-b border-[color:var(--line)]" aria-labelledby="outro-lado">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="py-20 lg:py-32">
            <p className="display reveal max-w-[14ch] text-[clamp(2.4rem,6.6vw,6rem)] text-[color:var(--ink)]">
              Você trabalha com software o dia inteiro.
            </p>
            <p className="display reveal mt-16 text-right text-[clamp(2.4rem,6.6vw,6rem)] text-[color:var(--gold-soft)] lg:mt-28">
              Nós também.
            </p>
            <h2
              id="outro-lado"
              className="display reveal mt-16 max-w-[18ch] text-[clamp(2.4rem,6.6vw,6rem)] text-[color:var(--ink)] lg:mt-28"
            >
              Então fizemos alguns para quando o trabalho termina.
            </h2>
          </div>

          <ol>
            {live.map((p, i) => {
              const Mock = MOCKS[p.slug];
              return (
                <li
                  key={p.slug}
                  className="grid gap-10 border-t border-[color:var(--line-strong)] py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-24"
                >
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2 lg:pl-10' : ''}`}>
                    <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
                      <span className="tabular-nums" style={{ color: p.colorInk }}>
                        {String(i + 1).padStart(2, '0')}
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
                      className="display reveal mt-5 text-[clamp(3.2rem,8.4vw,7.6rem)]"
                      style={{ color: p.colorInk }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-5 text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.25] tracking-tight text-[color:var(--ink)]">
                      {p.tagline}
                    </p>
                    <p className="mt-4 max-w-xl text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
                      {p.description}
                    </p>
                    <p className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
                      <span className="font-semibold text-[color:var(--ink)]">{p.offer}</span>
                      <Link
                        href={p.href}
                        className="group inline-flex items-center gap-2 font-semibold"
                        style={{ color: p.colorInk }}
                      >
                        Conhecer o {p.name}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </p>
                  </div>
                  {Mock ? (
                    <div
                      className={`reveal-pop flex lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1 lg:justify-start' : 'lg:justify-end'} ${i % 2 === 1 ? '-rotate-2' : 'rotate-2'}`}
                    >
                      <Mock />
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 5 · COLOR MOMENT — what is arriving */}
      {coming.length ? (
        <section aria-labelledby="chegando" className="text-white">
          <h2 id="chegando" className="sr-only">
            A caminho da App Store
          </h2>
          <div className={`grid ${coming.length > 1 ? 'lg:grid-cols-2' : ''}`}>
            {coming.map((p) => {
              const Mock = MOCKS[p.slug];
              return (
                <article
                  key={p.slug}
                  className="relative overflow-hidden px-6 py-20 lg:px-14 lg:py-28"
                  style={{ background: p.colorInk }}
                >
                  <div className="pointer-events-none absolute right-[-30%] top-[-30%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
                  <div className="relative mx-auto max-w-[560px]">
                    <p
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-semibold"
                      style={{ color: p.colorInk }}
                    >
                      <span
                        aria-hidden="true"
                        className="shimmer h-2 w-2 rounded-full"
                        style={{ background: p.colorInk }}
                      />
                      {p.statusNote ?? p.status}
                    </p>
                    <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/75">
                      {p.audience}
                    </p>
                    <h3 className="display reveal mt-3 text-[clamp(3.2rem,7vw,6.4rem)]">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-[clamp(1.2rem,1.8vw,1.45rem)] font-semibold leading-[1.3]">
                      {p.tagline}
                    </p>
                    <p className="mt-4 text-[16px] leading-[1.7] text-white/85">{p.description}</p>
                    {Mock ? (
                      <div className="reveal-pop mt-10 flex justify-center">
                        <Mock />
                      </div>
                    ) : null}
                    <Link
                      href={p.href}
                      className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3.5 text-[15px] font-semibold transition hover:bg-white/10"
                    >
                      Conhecer o {p.name}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* 6 · SOB MEDIDA + ARAPONGAS — black */}
      <section
        className="relative overflow-hidden bg-[color:var(--dark)] text-[color:var(--bg)]"
        aria-labelledby="sob-medida-title"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.22),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker onDark>Sob medida</Kicker>
          <h2
            id="sob-medida-title"
            className="display reveal mt-6 max-w-[15ch] text-[clamp(2.8rem,7vw,6.6rem)]"
          >
            Seu problema ainda não tem produto?{' '}
            <span className="block text-[color:var(--gold)]">A gente faz.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/75">
            Salão, clínica, oficina, escolinha. Se o que trava o seu dia não cabe em nenhum produto,
            montamos o sistema do seu negócio.
          </p>
          <ol className="mt-14 grid gap-10 border-t border-white/12 pt-10 md:grid-cols-3 md:gap-8">
            {SOB_MEDIDA.map((s) => (
              <li key={s.n} className="reveal">
                <span className="display block text-[clamp(3.4rem,6vw,5.2rem)] text-[color:var(--gold)]/85">
                  {s.n}
                </span>
                <p className="mt-4 text-[21px] font-semibold tracking-tight">{s.title}</p>
                <p className="mt-2 text-[15.5px] leading-[1.65] text-white/65">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/sob-medida"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--dark)] transition hover:bg-[color:var(--bg)]"
            >
              Como funciona o sob medida <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contactHref('Quero conversar com a AraLabs')}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold transition hover:bg-white/10"
            >
              Falar com a gente
            </a>
          </div>

          <div className="mt-28 border-t border-white/12 pt-16 lg:mt-36 lg:pt-24">
            <p className="display reveal text-[clamp(2.7rem,6.6vw,6.2rem)]">
              Feito em Arapongas.{' '}
              <span className="block text-[color:var(--gold)]">Para negócios de verdade.</span>
            </p>
            <div className="mt-10 flex flex-col gap-6 text-[15.5px] text-white/70 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md leading-[1.7]">
                Uma empresa pequena do interior do Paraná, que atende direto, sem robô e sem fila.
                Resposta em até 2 dias úteis.
              </p>
              <Link
                href="/empresa"
                className="group inline-flex items-center gap-2 font-semibold text-[color:var(--gold)]"
              >
                Conhecer a empresa
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
