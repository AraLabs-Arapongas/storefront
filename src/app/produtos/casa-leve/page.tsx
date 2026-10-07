import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight, Home } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, softwareApplicationSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { ProductTile } from '@/components/site/ProductMarks';
import { InView } from '@/components/home/InView';
import {
  AdminMock,
  AdultMock,
  ChildMock,
  HeroHouse,
  PlannerMock,
} from '@/components/products/casa-leve/Mocks';

const pageDescription =
  'Tarefas com pontos, compras, agenda e recompensas num app só para a família. Menos cobrança em casa, mais autonomia para as crianças. 30 dias grátis.';

export const metadata = pageMetadata({
  path: '/produtos/casa-leve',
  title: 'Casa Leve: app de tarefas e rotina da família',
  description: pageDescription,
  image: '/produtos/casa-leve/opengraph-image',
});

const PRINCIPLES = [
  {
    t: 'Menos cobrança.',
    b: 'O app mostra o que precisa ser feito. Ninguém precisa ficar lembrando ninguém.',
  },
  {
    t: 'Mais clareza.',
    b: 'Responsabilidades e acordos ficam visíveis. Todo mundo enxerga o mesmo.',
  },
  {
    t: 'Mais autonomia.',
    b: 'As crianças acompanham a própria rotina com incentivo, não com pressão.',
  },
  { t: 'Sem burocracia.', b: 'Rápido de usar no dia a dia. Marcar uma tarefa leva um toque.' },
];

const STEPS = [
  {
    n: '01',
    t: 'Crie a sua casa',
    b: 'Entre com o e-mail, sem senha: um código de 6 dígitos. A casa nasce com 30 dias grátis e tudo do Premium liberado.',
  },
  {
    n: '02',
    t: 'Chame a família',
    b: 'Até 10 pessoas, cada uma como adulto ou criança. O convite chega por e-mail.',
  },
  {
    n: '03',
    t: 'Monte a rotina',
    b: 'Tarefas diárias, semanais, quinzenais ou mensais, com pontos, para alguém ou em rodízio. Recompensas e desafios para premiar.',
  },
  {
    n: '04',
    t: 'A casa roda junto',
    b: 'Cada um vê as suas tarefas do dia e marca quando faz. Os pontos somam, o adulto aprova o que a criança terminou.',
  },
];

const ROLES = [
  {
    t: 'Quem cuida da casa',
    tag: 'Admin',
    b: 'Configura a casa, convida até 10 pessoas e aprova as tarefas revisadas. Vê o painel da família: pontos de cada um e gastos.',
    mock: <AdminMock />,
  },
  {
    t: 'Os adultos',
    tag: 'Adulto',
    b: 'Criam e editam tarefas, aprovam as das crianças, veem agenda e cardápio. E têm hábitos e Pomodoro para si.',
    mock: <AdultMock />,
  },
  {
    t: 'As crianças',
    tag: 'Criança',
    b: 'Uma tela simples com o progresso do dia, pontos e desafios. Marcam tarefas (com foto, quando pedido) e resgatam recompensas.',
    mock: <ChildMock />,
  },
];

type AppEntry = { t: string; b: string };

const ESSENCIAL: AppEntry[] = [
  {
    t: 'Tarefas',
    b: 'Recorrentes (diária, quinzenal, mensal, dia da semana), com pontos, hora, foto opcional e aprovação de adulto para a criança.',
  },
  {
    t: 'Compras',
    b: 'Lista compartilhada da casa, catálogo com mais de 300 itens, recorrentes da semana e histórico.',
  },
  {
    t: 'Agenda',
    b: 'Eventos da casa com lembrete 30 minutos antes para todo mundo. Aniversários entram sozinhos.',
  },
  {
    t: 'Recompensas',
    b: 'Os pais cadastram prêmios (1h de tela, sorvete, brinquedo); os filhos juntam pontos e resgatam, com ou sem aprovação.',
  },
  {
    t: 'Desafios',
    b: 'Metas curtas com bônus de pontos, como “ler 5 livros até dezembro”. A família compete junto, com ranking.',
  },
  {
    t: 'Pomodoro',
    b: 'Timer 25/5 com a tela acordada, ligado a uma tarefa se quiser, e o histórico do dia.',
  },
];

const PREMIUM: AppEntry[] = [
  {
    t: 'Cardápio',
    b: 'Refeições da semana em 4 momentos por dia. Toda quinta, os itens viram lista de compras.',
  },
  {
    t: 'Finanças',
    b: 'Contas com vencimento, mesada em que a criança troca pontos por dinheiro e metas com cofrinho compartilhado.',
  },
  {
    t: 'Planner',
    b: 'Hábitos pessoais com sequência e mapa de calor, foco do dia, reflexão diária e visão da semana.',
  },
];

const PLANNER = [
  {
    t: 'Hábitos pessoais',
    b: 'Só seus (esteira, meditar, ler). Sequência diária e mapa de calor.',
  },
  { t: 'Foco do dia', b: 'Até 3 prioridades fixadas no topo da tela inicial.' },
  {
    t: 'Reflexão diária',
    b: 'Três perguntas no fim do dia: gratidão, aprendizado, foco para amanhã. Histórico privado.',
  },
  {
    t: 'Visão semanal',
    b: 'Os 7 dias numa grade: tarefas, hábitos, eventos e marcos de desafios.',
  },
];

const TIERS = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: '9,90',
    note: 'O básico para a família funcionar',
    items: [
      'Tarefas com pontos e ranking',
      'Lista de compras compartilhada',
      'Agenda da casa',
      'Recompensas e desafios',
      'Pomodoro',
      'Notificações no celular',
      'Até 10 pessoas por casa',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '19,90',
    note: 'Tudo do Essencial, mais três apps',
    items: [
      'Tudo do Essencial',
      'Cardápio: refeições da semana',
      'Finanças: contas, mesada e metas',
      'Planner: hábitos, foco, reflexão e semana',
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

function AppRow({
  a,
  n,
  color,
  premium,
}: {
  a: AppEntry;
  n: number;
  color: string;
  premium?: boolean;
}) {
  return (
    <li
      className={`iv iv-up grid grid-cols-[3.2rem_1fr] gap-x-4 border-b border-[color:var(--line-strong)] py-6 sm:items-baseline ${
        premium ? 'sm:grid-cols-[4.5rem_1fr]' : 'sm:grid-cols-[4.5rem_11rem_1fr]'
      }`}
      style={i(n % 6)}
    >
      <span className="display text-[clamp(1.8rem,3vw,2.6rem)] tabular-nums" style={{ color }}>
        {String(n).padStart(2, '0')}
      </span>
      <h3 className="text-[21px] font-bold tracking-tight">{a.t}</h3>
      <p
        className={`col-start-2 mt-1 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)] ${
          premium ? '' : 'sm:col-start-3 sm:mt-0'
        }`}
      >
        {a.b}
      </p>
    </li>
  );
}

export default function CasaLevePage() {
  const p = productBySlug('casa-leve');
  const betaHref = contactHref('Quero testar o Casa Leve (beta)');

  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/casa-leve',
          name: 'Casa Leve',
          description: pageDescription,
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'iOS, Android',
          offer: { price: '9.90', description: 'A partir de R$ 9,90/mês, 30 dias grátis' },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: p.name }])}
      />

      {/* 1 · HERO — warm, the day's tasks ticking off */}
      <section
        className="pk-hero relative flex items-center overflow-hidden"
        style={{ background: p.colorSoft }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-8%] top-[-25%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.7),transparent_70%)]" />
          <div className="tri-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 px-6 pb-[calc(72px+var(--hero-cut))] pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-[calc(48px+var(--hero-cut))] lg:pt-8">
          <div>
            <div className="pk-load-up flex flex-wrap items-center gap-3">
              <ProductTile product={p} size={40} />
              <p
                className="text-[24px] font-extrabold tracking-tight"
                style={{ color: p.colorInk }}
              >
                {p.name}
              </p>
              <span
                className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white"
                style={{ background: p.colorInk }}
              >
                {p.status} · {p.audience.replace(/^Para /, 'para ')}
              </span>
            </div>
            <h1 className="pk-hero-title display mt-7 text-balance text-[color:var(--ink)] lg:mt-8">
              <span
                className="pk-load-up mb-3 block text-[clamp(1.15rem,2.1vw,1.7rem)] leading-[1.2] tracking-[-0.015em] lg:mb-4"
                style={{ color: p.colorInk, '--d': 60 } as CSSProperties}
              >
                Casa Leve, o app de rotina da família.
              </span>{' '}
              <span className="pk-load-up block" style={{ '--d': 120 } as CSSProperties}>
                Ninguém precisa ficar
              </span>{' '}
              <span
                className="pk-load-up block"
                style={{ color: p.colorInk, '--d': 320 } as CSSProperties}
              >
                lembrando ninguém.
              </span>
            </h1>
            <div className="pk-load-up" style={{ '--d': 520 } as CSSProperties}>
              <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.6] text-[color:var(--ink-muted)] md:text-[18.5px]">
                {p.tagline} Tarefas com pontos, compras, agenda, recompensas e desafios num app só.
                O app mostra o que precisa ser feito; as crianças cuidam da própria rotina.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={betaHref}
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-110"
                  style={{ background: p.colorInk }}
                >
                  Pedir acesso ao beta
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
                >
                  Ver planos
                </a>
              </div>
              <p className="mt-4 text-[14px] text-[color:var(--ink-muted)]">
                {p.offer} · beta privado no TestFlight (iOS)
              </p>
            </div>
          </div>
          <figure>
            <HeroHouse />
            <figcaption className="mt-16 text-center text-[12px] text-[color:var(--ink-dim)] lg:mt-32 lg:text-right">
              Interface ilustrativa · nomes e valores de exemplo
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2 · PRINCIPLES — black */}
      <section className="cut-top bg-[color:var(--dark)] text-[color:var(--bg)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <Kicker color={p.color}>Como o Casa Leve pensa a rotina</Kicker>
          <InView as="ul" className="mt-12 border-t border-white/12" threshold={0.2}>
            {PRINCIPLES.map((x, k) => (
              <li
                key={x.t}
                className="grid gap-3 border-b border-white/12 py-7 md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-10 lg:py-9"
              >
                <span
                  className="iv iv-word display block text-[clamp(2.5rem,5.6vw,5.4rem)]"
                  style={{ ...(k === 0 ? { color: p.color } : {}), ...i(k * 2) }}
                >
                  {x.t}
                </span>
                <span
                  className="iv iv-up max-w-sm text-[16.5px] leading-[1.65] text-white/70"
                  style={i(k * 2 + 1)}
                >
                  {x.b}
                </span>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3 · WHO + HOW — cream */}
      <section className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <Kicker color={p.colorInk}>Para quem é</Kicker>
              <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,5.4vw,5rem)]">
                Toda família cabe. <span style={{ color: p.colorInk }}>Do jeito que ela é.</span>
              </h2>
              <p className="mt-7 max-w-lg text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
                Casal com filhos. Pais separados que dividem as responsabilidades. Trabalho remoto
                com as crianças em casa. Mãe ou pai sozinho querendo dividir o jogo com os filhos.
                Avós, sogros, quem ajuda em casa: todo mundo entra.
              </p>
              <p className="mt-5 max-w-lg text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
                Para o tempo livre dos pequenos, a AraLabs também tem o Arakids, com{' '}
                <Link
                  href="/produtos/arakids"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: p.colorInk }}
                >
                  jogos educativos sem anúncio para as crianças
                </Link>
                .
              </p>
              <p className="mt-10 flex items-end gap-4 border-t border-[color:var(--line-strong)] pt-8">
                <span
                  className="display text-[clamp(5rem,10vw,8.5rem)] leading-[0.78]"
                  style={{ color: p.colorInk }}
                >
                  10
                </span>
                <span className="mb-1 max-w-[12ch] text-[17px] font-semibold leading-[1.3]">
                  pessoas na mesma casa, no mesmo app
                </span>
              </p>
            </div>
            <div className="relative lg:-mr-[max(0px,calc((100vw-1240px)/2+40px))]">
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 h-2/3 w-2/3 rounded-bl-[64px]"
                style={{ background: p.colorSoft }}
              />
              <Image
                src="/images/family-1.webp"
                alt="Família em casa dividindo as tarefas do dia: arrumar a mesa, organizar as mochilas, fazer o almoço"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="relative h-auto w-full rounded-[28px] lg:rounded-r-none"
              />
            </div>
          </div>

          <div className="mt-28 lg:mt-40">
            <Kicker color={p.colorInk}>Como funciona</Kicker>
            <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,5.4vw,5rem)]">
              Quatro passos para <span style={{ color: p.colorInk }}>tirar do papel.</span>
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

      {/* 4 · ROLES — full-bleed orange, one screen per person */}
      <section className="cut-top overflow-x-clip text-white" style={{ background: p.colorInk }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[5%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
          <div className="pk-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker color="#ffe1c4">Papéis na casa</Kicker>
          <h2 className="display mt-6 max-w-[15ch] text-[clamp(2.8rem,6.4vw,6rem)]">
            A mesma casa. <span className="text-[#ffe1c4]">Uma tela para cada um.</span>
          </h2>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.7] text-white/85">
            O app se adapta a quem abre. A criança não vê configuração de plano; o adulto não vê o
            painel de quem cuida da casa. Cada um com o foco certo.
          </p>
          <InView
            as="ul"
            className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12"
            threshold={0.25}
          >
            {ROLES.map((r, k) => (
              <li key={r.tag} className="iv iv-up" style={i(k * 2)}>
                <div className={k === 1 ? 'md:translate-y-10' : ''}>
                  {r.mock}
                  <div className="mt-8 border-t border-white/25 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
                      {r.tag}
                    </p>
                    <h3 className="mt-2 text-[24px] font-bold tracking-tight">{r.t}</h3>
                    <p className="mt-2 text-[15.5px] leading-[1.65] text-white/80">{r.b}</p>
                  </div>
                </div>
              </li>
            ))}
          </InView>
          <p className="mt-20 text-center text-[12px] text-white/60">
            Interface ilustrativa · nomes e valores de exemplo
          </p>
        </div>
      </section>

      {/* 5 · THE NINE APPS — cream, as an index */}
      <section
        id="apps"
        className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]"
      >
        <div className="mx-auto max-w-[1240px] px-6 pt-24 lg:px-10 lg:pt-36">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={p.colorInk}>No celular, todo dia</Kicker>
              <h2 className="display mt-6 text-[clamp(2.8rem,7vw,6.6rem)]">
                Nove apps.{' '}
                <span className="block" style={{ color: p.colorInk }}>
                  Uma casa.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              Seis no Essencial, mais três no Premium. Os dados conversam: uma tarefa vira Pomodoro,
              o cardápio da semana vira lista de compras.
            </p>
          </div>
        </div>
        <figure className="mt-14 lg:mt-20" style={{ background: p.colorSoft }}>
          <div className="relative mx-auto max-w-[1440px]">
            <Image
              src="/images/casa-leve-banner-product-mobile.webp"
              alt="Telas do Casa Leve: rotina da família, pontos e conquistas da criança, planejamento da semana"
              width={1122}
              height={1402}
              sizes="100vw"
              className="h-auto w-full md:hidden"
            />
            <Image
              src="/images/casa-leve-banner-product.webp"
              alt="Telas do Casa Leve: rotina da família, pontos e conquistas da criança, planejamento da semana"
              width={2000}
              height={667}
              sizes="(min-width: 1440px) 1440px, 100vw"
              className="hidden h-auto w-full md:block"
            />
          </div>
          <figcaption className="sr-only">Imagem ilustrativa do app</figcaption>
        </figure>
        <div className="mx-auto max-w-[1240px] px-6 pb-24 pt-16 lg:px-10 lg:pb-36 lg:pt-24">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink-dim)]">
                Essencial · {ESSENCIAL.length} apps
              </p>
              <InView
                as="ol"
                className="mt-4 border-t border-[color:var(--line-strong)]"
                threshold={0.1}
              >
                {ESSENCIAL.map((a, k) => (
                  <AppRow key={a.t} a={a} n={k + 1} color={p.colorInk} />
                ))}
              </InView>
            </div>
            <div className="lg:pt-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink-dim)]">
                Premium · mais {PREMIUM.length}
              </p>
              <InView
                as="ol"
                className="mt-4 border-t border-[color:var(--line-strong)]"
                threshold={0.1}
              >
                {PREMIUM.map((a, k) => (
                  <AppRow key={a.t} a={a} n={ESSENCIAL.length + k + 1} color={p.colorInk} premium />
                ))}
              </InView>
              <p className="mt-6 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                Liberados nos 30 dias grátis e no{' '}
                <a
                  href="#planos"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: p.colorInk }}
                >
                  plano Premium
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · PLANNER — dark, the personal corner */}
      <section className="cut-top overflow-x-clip bg-[color:var(--dark)] text-white">
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(194,106,30,0.25),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <Kicker color={p.color}>Destaque do Premium · Planner</Kicker>
            <h2 className="display mt-6 max-w-[13ch] text-[clamp(2.6rem,5.4vw,5rem)]">
              Tarefa é da família. <span style={{ color: p.color }}>Hábito é seu.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[17px] leading-[1.7] text-white/70">
              Um canto pessoal dentro da casa, sem pontos e sem ranking. Só consistência.
            </p>
            <ul className="mt-10 border-t border-white/15">
              {PLANNER.map((x) => (
                <li
                  key={x.t}
                  className="grid gap-1 border-b border-white/15 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <span className="flex items-center gap-3 text-[15.5px] font-semibold">
                    <span
                      className="tri tri-r text-[7px]"
                      style={{ color: p.color }}
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
          <figure>
            <InView threshold={0.3}>
              <PlannerMock />
            </InView>
            <figcaption className="mt-8 text-center text-[12px] text-white/55">
              Interface ilustrativa · nomes e valores de exemplo
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 7 · PLANS — cream, the prices as headlines */}
      <section
        id="planos"
        className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={p.colorInk}>Planos</Kicker>
              <h2 className="display mt-6 text-[clamp(2.6rem,6vw,5.6rem)]">
                30 dias com tudo liberado.{' '}
                <span className="block" style={{ color: p.colorInk }}>
                  Depois, você escolhe.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              Cobrança por casa, não por pessoa: crianças e adultos convidados não pagam. Cancela
              quando quiser.
            </p>
          </div>
          <InView
            as="ol"
            className="mt-16 grid border-t border-[color:var(--line-strong)] md:grid-cols-2"
          >
            {TIERS.map((t, k) => {
              const premium = t.id === 'premium';
              return (
                <li
                  key={t.id}
                  className={`iv iv-up px-0 pb-10 pt-8 sm:px-8 md:pb-12 ${
                    premium
                      ? 'px-5 md:border-l md:border-[color:var(--line-strong)]'
                      : 'border-b border-[color:var(--line-strong)] md:border-b-0'
                  }`}
                  style={{ ...(premium ? { background: p.colorSoft } : {}), ...i(k * 2) }}
                >
                  <p className="flex flex-wrap items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
                    Casa Leve {t.name}
                    {premium ? (
                      <span
                        className="rounded-full px-2 py-0.5 text-[9.5px] tracking-[0.14em] text-white"
                        style={{ background: p.colorInk }}
                      >
                        Recomendado
                      </span>
                    ) : null}
                  </p>
                  <p
                    className="display mt-5 text-[clamp(3.6rem,7.4vw,6.4rem)] leading-[0.9]"
                    style={premium ? { color: p.colorInk } : undefined}
                  >
                    <span className="align-top text-[0.3em] tracking-normal">R$</span>
                    {t.price}
                    <span className="text-[0.2em] font-semibold tracking-normal text-[color:var(--ink-dim)]">
                      /mês
                    </span>
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
          <p className="mt-8 text-[13.5px] text-[color:var(--ink-dim)]">
            Até 10 pessoas por casa · cobrança pela App Store · sem custo durante o beta
          </p>
        </div>
      </section>

      {/* 8 · BETA — full-bleed orange */}
      <section
        id="contato"
        className="cut-top overflow-x-clip text-white"
        style={{ background: p.colorInk }}
        aria-labelledby="beta-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="pk-tri-grid-light absolute inset-0" />
          {/* The house, at the scale of the section, leaning off the right edge. */}
          <Home
            className="absolute -right-[18%] top-[46%] lg:top-[12%] h-[min(40rem,88vw)] w-[min(40rem,88vw)] rotate-[8deg] text-white/[0.09] lg:-right-[3%]"
            strokeWidth={1.4}
          />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker color="#ffe1c4">Acesso ao beta</Kicker>
          <h2 id="beta-title" className="display mt-6 max-w-[15ch] text-[clamp(2.8rem,7vw,6.6rem)]">
            Quer testar antes do lançamento?
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/85">
            O Casa Leve está em beta privado no TestFlight (iOS). Mande uma mensagem e a gente põe a
            sua casa no próximo grupo de convidados, sem custo durante o beta.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={betaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold transition hover:bg-[#ffe1c4]"
              style={{ color: p.colorInk }}
            >
              Pedir acesso ao beta
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              Ver os outros produtos
            </Link>
          </div>
          <nav
            aria-label="Documentos do Casa Leve"
            className="mt-20 flex flex-col gap-3 border-t border-white/25 pt-6 text-[13.5px] text-white/75 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>Documentos do Casa Leve, para as lojas de apps e para a LGPD.</p>
            <span className="flex flex-wrap gap-x-6 gap-y-2 font-semibold text-white">
              <Link
                href="/produtos/casa-leve/privacidade"
                className="underline-offset-4 hover:underline"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/produtos/casa-leve/termos"
                className="underline-offset-4 hover:underline"
              >
                Termos de Uso
              </Link>
              <Link
                href="/produtos/casa-leve/excluir-conta"
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
