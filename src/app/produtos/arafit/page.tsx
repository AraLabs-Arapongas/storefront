import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight, Dumbbell } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, softwareApplicationSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { contactHref } from '@/lib/seo/site';
import { productBySlug } from '@/lib/products';
import { ProductTile } from '@/components/site/ProductMarks';
import { InView } from '@/components/home/InView';

const pageDescription =
  'App para personal trainers: alunos, programas de treino, agenda, cobrança e avaliações físicas num lugar só. O aluno treina pelo seu programa no celular. Grátis até 5 alunos.';

export const metadata = pageMetadata({
  path: '/produtos/arafit',
  title: 'Arafit: app para personal trainer organizar alunos e programas',
  description: pageDescription,
  image: '/produtos/arafit/opengraph-image',
});

/** The app's own black, and its red read on it (small text needs a lighter red for AA). */
const BLACK = '#0a0a0a';
const RED = '#e10600';
const RED_ON_DARK = '#ff6b61';
const ON_RED = '#ffd6d2';

const NOTIFY_HREF = contactHref(
  'Arafit',
  'Olá! Sou personal trainer e quero saber quando o Arafit chegar às lojas.',
);

type AppEntry = { t: string; b: string };

const PERSONAL: AppEntry[] = [
  {
    t: 'Alunos',
    b: 'Cadastre pelo celular, com o número do aluno. A conta dele já nasce ligada a você.',
  },
  {
    t: 'Programas',
    b: 'Treinos A, B, C, com séries, cargas e descanso. Monte uma vez e envie para o aluno.',
  },
  {
    t: 'Quem treinou',
    b: 'Os treinos feitos pelo programa chegam para você. Dá para ver quem está em dia e quem sumiu.',
  },
  {
    t: 'Agenda',
    b: 'Aulas em horários fixos da semana e aulas avulsas, na mesma agenda.',
  },
  {
    t: 'Cobrança',
    b: 'Mensal, por aula ou pacote de aulas. Lembrete pelo WhatsApp com o seu Pix; você marca quando o aluno pagou.',
  },
  {
    t: 'Avaliações',
    b: 'Anamnese, medidas, composição corporal e testes físicos, com gráficos de progressão.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Entre com o celular',
    b: 'Número do telefone e um código por SMS. Sem senha e sem e-mail.',
  },
  {
    n: '02',
    t: 'Cadastre os alunos',
    b: 'Nome e número de cada um. Até 5 alunos ativos sem pagar nada.',
  },
  {
    n: '03',
    t: 'Monte os programas',
    b: 'Treinos A, B, C com séries, cargas e descanso, e envie para cada aluno.',
  },
  {
    n: '04',
    t: 'Acompanhe',
    b: 'O aluno treina pelo app; você vê quem treinou, a agenda e quem está com a cobrança em aberto.',
  },
];

const ALUNO = [
  {
    t: 'O programa pronto',
    b: 'Entra com o número que o personal cadastrou e o programa já está lá.',
  },
  {
    t: 'Série a série',
    b: 'Carga, repetições e o descanso contando entre uma série e outra.',
  },
  {
    t: 'Histórico',
    b: 'Os treinos feitos e a evolução, no celular.',
  },
  {
    t: 'Junto do personal',
    b: 'Os treinos do programa aparecem para o personal, que acompanha de perto.',
  },
];

const AVALIACOES = [
  { t: 'Anamnese', b: 'Histórico de saúde, lesões, medicamentos e o questionário PAR-Q.' },
  { t: 'Perimetria', b: 'Medidas do corpo, comparadas avaliação a avaliação.' },
  {
    t: 'Composição corporal',
    b: 'Dobras cutâneas pelos protocolos de Pollock de 3 e de 7 dobras.',
  },
  {
    t: 'Testes',
    b: 'Postura, mobilidade, força, resistência, cardio e funcional.',
  },
  { t: 'Progressão', b: 'Gráficos para mostrar ao aluno o quanto ele evoluiu.' },
];

const TIERS = [
  {
    id: 'gratis',
    who: 'Personal',
    name: 'Grátis',
    price: '0',
    period: '',
    note: 'Para começar com os primeiros alunos',
    items: ['Até 5 alunos ativos'],
  },
  {
    id: 'ilimitado',
    who: 'Personal',
    name: 'Ilimitado',
    price: '19,90',
    period: '/mês',
    note: 'ou R$ 199 por ano',
    items: ['Alunos ativos sem limite', 'Mensal ou anual'],
  },
  {
    id: 'pessoal',
    who: 'Aluno',
    name: 'Arafit Pessoal',
    price: '4,90',
    period: '/mês',
    note: 'Para o aluno treinar também por conta',
    items: [
      'Programas próprios e programas prontos',
      'Montar treino',
      'Com ou sem personal',
      'O personal não vê o que ele treina por conta',
      'Se o vínculo acabar, o último programa e o histórico ficam',
    ],
  },
];

const i = (n: number) => ({ '--i': n }) as CSSProperties;

function Kicker({ children, color }: { children: ReactNode; color: string }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
      style={{ color }}
    >
      <span className="tri text-[8px]" aria-hidden="true" />
      {children}
    </p>
  );
}

/** The app's wordmark: ARA + FIT in red. */
function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`display uppercase ${className}`}>
      Ara<span style={{ color: RED }}>fit</span>
    </span>
  );
}

function AppRow({ a, n, color }: { a: AppEntry; n: number; color: string }) {
  return (
    <li
      className="iv iv-up grid grid-cols-[3.2rem_1fr] gap-x-4 border-b border-[color:var(--line-strong)] py-6 sm:grid-cols-[4.5rem_11rem_1fr] sm:items-baseline"
      style={i(n % 6)}
    >
      <span className="display text-[clamp(1.8rem,3vw,2.6rem)] tabular-nums" style={{ color }}>
        {String(n).padStart(2, '0')}
      </span>
      <h3 className="text-[21px] font-bold tracking-tight">{a.t}</h3>
      <p className="col-start-2 mt-1 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)] sm:col-start-3 sm:mt-0">
        {a.b}
      </p>
    </li>
  );
}

/** A day's workout as the student sees it. Illustrative: names and numbers are examples. */
const FICHA = [
  { ex: 'Supino reto', sets: '4 × 10', load: '30 kg', rest: '90 s', done: true },
  { ex: 'Supino inclinado', sets: '3 × 12', load: '24 kg', rest: '75 s', done: true },
  { ex: 'Crucifixo', sets: '3 × 12', load: '12 kg', rest: '60 s', done: false },
  { ex: 'Tríceps na polia', sets: '4 × 12', load: '20 kg', rest: '60 s', done: false },
];

function FichaMock() {
  return (
    <div
      className="mx-auto w-full max-w-[380px] rounded-[28px] border border-white/10 p-5 text-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]"
      style={{ background: '#141414' }}
    >
      <div className="flex items-center justify-between">
        <Wordmark className="text-[22px]" />
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/75">
          Programa do personal
        </span>
      </div>
      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
        Treino A
      </p>
      <p className="mt-1 text-[22px] font-bold tracking-tight">Peito e tríceps</p>
      <ul className="mt-5 space-y-2">
        {FICHA.map((r) => (
          <li
            key={r.ex}
            className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3"
            style={{ background: r.done ? 'rgba(225,6,0,0.16)' : 'rgba(255,255,255,0.05)' }}
          >
            <span className="min-w-0">
              <span className="block text-[15px] font-semibold">{r.ex}</span>
              <span className="block text-[12.5px] text-white/60">
                {r.sets} · {r.load} · descanso {r.rest}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-bold"
              style={
                r.done
                  ? { background: RED, color: '#fff' }
                  : { border: '1.5px solid rgba(255,255,255,0.25)' }
              }
            >
              {r.done ? '✓' : ''}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
        <span className="text-[13px] text-white/65">Descanso</span>
        <span className="display text-[30px] tabular-nums" style={{ color: RED_ON_DARK }}>
          0:42
        </span>
      </div>
    </div>
  );
}

export default function ArafitPage() {
  const p = productBySlug('arafit');

  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/arafit',
          name: 'Arafit',
          description: pageDescription,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'iOS, Android',
          offer: {
            price: '0',
            description:
              'Personal: grátis até 5 alunos ativos; Ilimitado R$ 19,90/mês ou R$ 199/ano. Aluno: Arafit Pessoal R$ 4,90/mês.',
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: p.name }])}
      />

      {/* 1 · HERO — the app's black, the program in the student's hand */}
      <section
        className="pk-hero relative flex items-center overflow-hidden text-white"
        style={{ background: BLACK }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-8%] top-[-25%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(225,6,0,0.22),transparent_70%)]" />
          <div className="pk-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 px-6 pb-[calc(72px+var(--hero-cut))] pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-[calc(48px+var(--hero-cut))] lg:pt-8">
          <div>
            <div className="pk-load-up flex flex-wrap items-center gap-3">
              <ProductTile product={p} size={40} />
              <Wordmark className="text-[30px] tracking-[-0.03em]" />
              <span
                className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white"
                style={{ background: p.colorInk }}
              >
                {p.status} · {p.audience.replace(/^Para /, 'para ')}
              </span>
            </div>
            <h1 className="pk-hero-title display mt-7 text-balance lg:mt-8">
              <span
                className="pk-load-up mb-3 block text-[clamp(1.15rem,2.1vw,1.7rem)] leading-[1.2] tracking-[-0.015em] lg:mb-4"
                style={{ color: RED_ON_DARK, '--d': 60 } as CSSProperties}
              >
                Arafit, o app do personal trainer.
              </span>{' '}
              <span className="pk-load-up block" style={{ '--d': 120 } as CSSProperties}>
                Você monta o programa.
              </span>{' '}
              <span
                className="pk-load-up block"
                style={{ color: RED, '--d': 320 } as CSSProperties}
              >
                O aluno treina.
              </span>
            </h1>
            <div className="pk-load-up" style={{ '--d': 520 } as CSSProperties}>
              <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.6] text-white/75 md:text-[18.5px]">
                Alunos, programas, agenda, cobrança e avaliações físicas num app só. O aluno entra
                com o número do celular, o seu programa aparece pronto e cada treino feito chega
                para você.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={NOTIFY_HREF}
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-110"
                  style={{ background: p.colorInk }}
                >
                  Quero saber quando chegar
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:border-white"
                >
                  Ver planos
                </a>
              </div>
              <p className="mt-4 text-[14px] text-white/65">
                {p.offer} · em breve na App Store e no Google Play
              </p>
            </div>
          </div>
          <figure className="pk-load-pop" style={{ '--d': 400 } as CSSProperties}>
            <FichaMock />
            <figcaption className="mt-8 text-center text-[12px] text-white/55">
              Interface ilustrativa · nomes e valores de exemplo
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2 · FOR THE PERSONAL — cream, the six things as an index */}
      <section className="cut-top overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={p.colorInk}>Para o personal</Kicker>
              <h2 className="display mt-6 text-[clamp(2.8rem,7vw,6.6rem)]">
                Seus alunos.{' '}
                <span className="block" style={{ color: p.colorInk }}>
                  Num app só.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              O caderno, a planilha de treinos, a agenda e a lista de quem já pagou, tudo no
              celular.
            </p>
          </div>
          <InView
            as="ol"
            className="mt-14 border-t border-[color:var(--line-strong)]"
            threshold={0.1}
          >
            {PERSONAL.map((a, k) => (
              <AppRow key={a.t} a={a} n={k + 1} color={p.colorInk} />
            ))}
          </InView>

          <div className="mt-28 lg:mt-40">
            <Kicker color={p.colorInk}>Como funciona</Kicker>
            <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,5.4vw,5rem)]">
              Quatro passos para <span style={{ color: p.colorInk }}>sair do caderno.</span>
            </h2>
            <InView
              as="ol"
              className="mt-14 grid gap-10 border-t border-[color:var(--line-strong)] pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            >
              {STEPS.map((s, k) => (
                <li key={s.n} className="iv iv-up" style={i(k * 2)}>
                  <span
                    className="display flex items-start gap-3 text-[clamp(3.4rem,6vw,5.2rem)]"
                    style={{ color: p.colorInk }}
                  >
                    {s.n}
                    <span className="tri mt-[0.12em] text-[0.18em]" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-[21px] font-semibold tracking-tight">{s.t}</p>
                  <p className="mt-2 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {s.b}
                  </p>
                </li>
              ))}
            </InView>
          </div>
        </div>
      </section>

      {/* 3 · FOR THE STUDENT — full-bleed red */}
      <section
        className="cut-top-rev overflow-x-clip text-white"
        style={{ background: p.colorInk }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[5%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
          <div className="pk-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker color={ON_RED}>Para o aluno</Kicker>
          <h2 className="display mt-6 max-w-[15ch] text-[clamp(2.8rem,6.4vw,6rem)]">
            O programa chega pronto. <span style={{ color: ON_RED }}>É só treinar.</span>
          </h2>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.7] text-white/85">
            O mesmo app, do outro lado. O aluno entra com o número que você cadastrou, sem senha, e
            treina pelo seu programa.
          </p>
          <InView
            as="ul"
            className="mt-16 grid gap-10 border-t border-white/25 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            threshold={0.25}
          >
            {ALUNO.map((x, k) => (
              <li key={x.t} className="iv iv-up" style={i(k * 2)}>
                <span
                  className="tri tri-r text-[8px]"
                  style={{ color: ON_RED }}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-[22px] font-bold tracking-tight">{x.t}</h3>
                <p className="mt-2 text-[15.5px] leading-[1.65] text-white/85">{x.b}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 4 · ASSESSMENTS — dark */}
      <section className="cut-top overflow-x-clip text-white" style={{ background: BLACK }}>
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(225,6,0,0.22),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <Kicker color={RED_ON_DARK}>Avaliações físicas</Kicker>
            <h2 className="display mt-6 max-w-[13ch] text-[clamp(2.6rem,5.4vw,5rem)]">
              Avaliar no celular. <span style={{ color: RED }}>Mostrar a evolução.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[17px] leading-[1.7] text-white/70">
              Da anamnese aos testes, com gráficos de progressão para cada aluno. Um PAR-Q com
              alerta pede liberação médica antes de o aluno treinar.
            </p>
          </div>
          <ul className="border-t border-white/15">
            {AVALIACOES.map((x) => (
              <li
                key={x.t}
                className="grid gap-1 border-b border-white/15 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6"
              >
                <span className="flex items-center gap-3 text-[16px] font-semibold">
                  <span
                    className="tri tri-r text-[7px]"
                    style={{ color: RED_ON_DARK }}
                    aria-hidden="true"
                  />
                  {x.t}
                </span>
                <span className="pl-[22px] text-[15px] leading-[1.6] text-white/65 sm:pl-0">
                  {x.b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 · PLANS — cream, the prices as headlines */}
      <section
        id="planos"
        className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={p.colorInk}>Planos</Kicker>
              <h2 className="display mt-6 text-[clamp(2.6rem,6vw,5.6rem)]">
                Até 5 alunos, grátis.{' '}
                <span className="block" style={{ color: p.colorInk }}>
                  Depois, você escolhe.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              O aluno com personal treina pelo programa sem pagar nada. O Arafit Pessoal é para quem
              também quer treinar por conta, com ou sem personal.
            </p>
          </div>
          <InView
            as="ol"
            className="mt-16 grid border-t border-[color:var(--line-strong)] md:grid-cols-3"
          >
            {TIERS.map((t, k) => {
              const featured = t.id === 'ilimitado';
              return (
                <li
                  key={t.id}
                  className={`iv iv-up px-0 pb-10 pt-8 sm:px-8 md:pb-12 ${
                    featured ? 'px-5' : ''
                  } ${k > 0 ? 'md:border-l md:border-[color:var(--line-strong)]' : ''} ${
                    k < TIERS.length - 1
                      ? 'border-b border-[color:var(--line-strong)] md:border-b-0'
                      : ''
                  }`}
                  style={{ ...(featured ? { background: p.colorSoft } : {}), ...i(k * 2) }}
                >
                  <p className="flex flex-wrap items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
                    {t.who} · {t.name}
                  </p>
                  <p
                    className="display mt-5 text-[clamp(3.6rem,6.4vw,5.6rem)] leading-[0.9]"
                    style={featured ? { color: p.colorInk } : undefined}
                  >
                    <span className="align-top text-[0.3em] tracking-normal">R$</span>
                    {t.price}
                    {t.period ? (
                      <span className="text-[0.2em] font-semibold tracking-normal text-[color:var(--ink-dim)]">
                        {t.period}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-[15px] text-[color:var(--ink-muted)]">{t.note}</p>
                  <ul className="mt-7 space-y-2.5 border-t border-[color:var(--line-strong)] pt-6 text-[15.5px] font-semibold">
                    {t.items.map((x) => (
                      <li key={x} className="flex items-center gap-3">
                        <span
                          className="tri tri-r text-[7px]"
                          style={{ color: p.colorInk }}
                          aria-hidden="true"
                        />
                        {x}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </InView>
          <p className="mt-8 max-w-3xl text-[13.5px] leading-[1.6] text-[color:var(--ink-dim)]">
            Assinatura dentro do app, cobrada pela App Store ou pelo Google Play, com renovação
            automática. Cancele nos ajustes da loja até 24 horas antes da renovação. A cobrança que
            você faz dos seus alunos não passa pelo app: ele lembra e registra, e o pagamento é
            entre vocês.
          </p>
        </div>
      </section>

      {/* 6 · COMING SOON — full-bleed red */}
      <section
        id="contato"
        className="cut-top overflow-x-clip text-white"
        style={{ background: p.colorInk }}
        aria-labelledby="em-breve-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="pk-tri-grid-light absolute inset-0" />
          {/* The dumbbell, at the scale of the section, leaning off the right edge. */}
          <Dumbbell
            className="absolute -right-[18%] top-[46%] h-[min(40rem,88vw)] w-[min(40rem,88vw)] rotate-[-18deg] text-white/[0.09] lg:-right-[3%] lg:top-[12%]"
            strokeWidth={1.4}
          />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker color={ON_RED}>Em breve</Kicker>
          <h2
            id="em-breve-title"
            className="display mt-6 max-w-[15ch] text-[clamp(2.8rem,7vw,6.6rem)]"
          >
            Chegando à App Store e ao Google Play.
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/85">
            O Arafit ainda não está nas lojas. Quer saber quando chegar, ou usar com os seus alunos
            desde o começo? Fale com a gente.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={NOTIFY_HREF}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold transition hover:bg-[#ffd6d2]"
              style={{ color: p.colorInk }}
            >
              Quero saber quando chegar
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              Ver outros produtos
            </Link>
          </div>
          <nav
            aria-label="Documentos do Arafit"
            className="mt-20 flex flex-col gap-3 border-t border-white/25 pt-6 text-[13.5px] text-white/75 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>Documentos do Arafit, para as lojas de apps e para a LGPD.</p>
            <span className="flex flex-wrap gap-x-6 gap-y-2 font-semibold text-white">
              <Link
                href="/produtos/arafit/privacidade"
                className="underline-offset-4 hover:underline"
              >
                Política de Privacidade
              </Link>
              <Link href="/produtos/arafit/termos" className="underline-offset-4 hover:underline">
                Termos de Uso
              </Link>
              <Link
                href="/produtos/arafit/excluir-conta"
                className="underline-offset-4 hover:underline"
              >
                Excluir conta
              </Link>
            </span>
          </nav>
        </div>
      </section>
    </>
  );
}
