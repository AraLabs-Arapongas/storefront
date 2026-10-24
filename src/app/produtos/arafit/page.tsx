import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Dumbbell,
  Map as MapIcon,
  Megaphone,
  Minus,
  Music,
  WifiOff,
  type LucideIcon,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, softwareApplicationSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { contactHref } from '@/lib/seo/site';
import { productBySlug } from '@/lib/products';
import { ProductTile } from '@/components/site/ProductMarks';
import { InView } from '@/components/home/InView';
import { FOUNDER_SEATS, founderSeatsLeft } from './founder-seats';

const pageDescription =
  'App para personal trainers: alunos, programas de treino, agenda, cobrança e avaliações físicas num lugar só. O aluno treina pelo seu programa no celular e você vê tudo. Grátis com 2 alunos, Pro R$ 9,90 (até 10 alunos), Ilimitado R$ 29,90.';

export const metadata = pageMetadata({
  path: '/produtos/arafit',
  title: 'Arafit: app para personal trainer organizar alunos, treinos, agenda e cobrança',
  description: pageDescription,
  image: '/produtos/arafit/opengraph-image',
});

/** The app's own black, and its red read on it (small text needs a lighter red for AA). */
const BLACK = '#0a0a0a';
const RED = '#e10600';
const RED_ON_DARK = '#ff6b61';
const ON_RED = '#ffd6d2';
/** Founder gold, as the app shows it on dark. */
const GOLD = '#d4a72c';

const NOTIFY_HREF = contactHref(
  'Arafit',
  'Olá! Sou personal trainer e quero saber quando o Arafit chegar às lojas.',
);
const FOUNDER_HREF = contactHref(
  'Arafit',
  'Olá! Sou personal trainer e quero garantir uma vaga de fundador do Arafit.',
);

type Shot = { src: string; alt: string; t: string; b: string };

const PERSONAL_SHOTS: Shot[] = [
  {
    src: '/images/arafit/personal-inicio.webp',
    alt: 'Início do personal: aulas de hoje, quem treinou, alunos que sumiram e pagamentos em atraso',
    t: 'O dia num relance',
    b: 'Aulas de hoje, quem treinou, quem sumiu há mais de 7 dias e quem está com a mensalidade em atraso.',
  },
  {
    src: '/images/arafit/personal-agenda.webp',
    alt: 'Agenda da semana com aulas realizadas, faltas e horários fixos',
    t: 'Agenda que cobra sozinha',
    b: 'Horários fixos e avulsos. Marcou realizada, a aula sai do pacote. Falta não desconta, a não ser que você queira.',
  },
  {
    src: '/images/arafit/personal-alunos.webp',
    alt: 'Lista de alunos com o último treino de cada um',
    t: 'Todos os alunos',
    b: 'Quando cada um treinou e quantos treinos fez na semana. Quem ainda não entrou recebe o convite pelo WhatsApp.',
  },
  {
    src: '/images/arafit/personal-aluno.webp',
    alt: 'Ficha do aluno com treinos do mês, frequência e programa',
    t: 'A ficha de cada aluno',
    b: 'Frequência, último treino, o programa atual e o recado que aparece no celular dele.',
  },
  {
    src: '/images/arafit/personal-cobranca.webp',
    alt: 'Cobrança do aluno com mensalidade paga e próximas aulas',
    t: 'Cobrança sem planilha',
    b: 'Mensal, por aula ou pacote. O aluno avisa "Já paguei" e você confirma com um toque.',
  },
  {
    src: '/images/arafit/personal-saude.webp',
    alt: 'Saúde do aluno com peso, gordura, massa magra e categorias de avaliação',
    t: 'Avaliação física completa',
    b: 'Anamnese com perguntas suas, perimetria, dobras, postura, testes físicos e fotos de antes × depois.',
  },
];

const ALUNO_SHOTS: Shot[] = [
  {
    src: '/images/arafit/aluno-inicio.webp',
    alt: 'Início do aluno com o treino do dia e o ritmo da semana',
    t: 'O treino do dia',
    b: 'Abre o app e o treino de hoje está lá, com o ritmo da semana.',
  },
  {
    src: '/images/arafit/aluno-serie.webp',
    alt: 'Treino em andamento com carga, repetições e a última vez',
    t: 'Série a série',
    b: 'Carga e repetições da última vez, o recorde e o vídeo do exercício.',
  },
  {
    src: '/images/arafit/aluno-descanso.webp',
    alt: 'Cronômetro de descanso entre séries',
    t: 'Descanso contando',
    b: 'O cronômetro começa sozinho e avisa quando é hora da próxima série.',
  },
  {
    src: '/images/arafit/aluno-evolucao.webp',
    alt: 'Evolução com o placar da semana, sequência de semanas e totais',
    t: 'Placar da semana',
    b: 'Treinos na semana contra a meta, semanas seguidas e o volume levantado.',
  },
  {
    src: '/images/arafit/aluno-avaliacao.webp',
    alt: 'Avaliação física do personal com gordura, massa magra e gráfico',
    t: 'A avaliação no celular',
    b: 'Gordura, massa magra e peso, com a variação desde a última avaliação.',
  },
  {
    src: '/images/arafit/aluno-meu-personal.webp',
    alt: 'Aba Meu personal com WhatsApp, chave Pix, plano e próximas aulas',
    t: 'Meu personal',
    b: 'WhatsApp, chave Pix para copiar, o plano, as próximas aulas e os recados.',
  },
];

/** What we did not find in what MFIT, Tecnofit and Mobitrainer publish (October 2026). */
const ONLY: { icon: LucideIcon; t: string; b: string }[] = [
  {
    icon: CalendarCheck,
    t: 'A agenda cobra sozinha',
    b: 'Marcou a aula como realizada, ela sai do pacote. Falta não desconta, a não ser que você escolha.',
  },
  {
    icon: BadgeCheck,
    t: '"Já paguei" pelo app',
    b: 'O aluno copia o seu Pix, paga e avisa. Você confirma com um toque, sem conferir extrato.',
  },
  {
    icon: Megaphone,
    t: 'Avisos com mural',
    b: 'Uma promoção ou um feriado vai para todos: notificação para quem aceitou e mural no app.',
  },
  {
    icon: WifiOff,
    t: 'O treino inteiro sem sinal',
    b: 'No subsolo da academia o aluno continua marcando séries, cargas e descanso. Tudo sobe quando a conexão volta.',
  },
  {
    icon: Music,
    t: 'Música do treino',
    b: 'Cada treino tem a sua playlist do Spotify, sugerida ou do próprio aluno, a um toque.',
  },
  {
    icon: MapIcon,
    t: 'O percurso na academia',
    b: 'O mapa da academia mostra onde está cada aparelho, na ordem dos exercícios do treino.',
  },
];

/** The automations, run every morning by the server (October 2026). */
const AUTOPILOT = [
  {
    t: 'Cobrança',
    items: [
      'Lembrete no dia do vencimento e 3 dias depois',
      'Aviso quando o pacote está acabando',
      'Para sozinho quando o aluno paga',
    ],
  },
  {
    t: 'Retenção',
    items: [
      '"Bora voltar?" para quem sumiu',
      'Resumo da manhã de quem parou',
      'Parabéns por bater a meta',
    ],
  },
  {
    t: 'Relacionamento',
    items: [
      'Boas-vindas no primeiro acesso',
      'Parabéns no aniversário',
      'Lembrete de reavaliação a cada 60 dias',
    ],
  },
];

const SOLO = [
  {
    t: 'Programas prontos',
    b: 'Hipertrofia, emagrecimento, glúteo e mais. Escolha um e comece hoje.',
  },
  {
    t: 'Monte em 3 perguntas',
    b: 'Objetivo, dias por semana e tempo de treino: a rotina sai pronta.',
  },
  { t: 'Série a série', b: 'Carga da última vez, recorde e o descanso contando sozinho.' },
  { t: 'Sua evolução', b: 'Placar da semana, calendário de treinos, volume e recordes.' },
  { t: 'Lembretes e música', b: 'Aviso nos dias de treino e a playlist do treino no Spotify.' },
];

const EDGES = [
  {
    t: 'Avisa no celular do aluno',
    b: 'Programa novo, avaliação, recado ou mensalidade em aberto: o aluno recebe na hora e o toque abre a tela certa.',
  },
  {
    t: 'Treina sem internet',
    b: 'O treino roda offline, com cronômetro e cargas. Os treinos sobem quando a conexão volta.',
  },
  {
    t: 'Agenda ligada à cobrança',
    b: 'A aula realizada sai do pacote ou vira aula avulsa. Sem anotar em dois lugares.',
  },
  {
    t: 'O aluno vê o seu Pix',
    b: 'Na aba Meu personal: chave para copiar, valor, vencimento e o botão "Já paguei".',
  },
  {
    t: 'Avaliação que o aluno entende',
    b: 'Gordura, massa magra e testes físicos com a classificação e a seta de evolução.',
  },
  {
    t: 'Entra só com o celular',
    b: 'Você cadastra o número; o aluno entra com um código por SMS. Sem senha e sem e-mail.',
  },
];

/**
 * Side by side, from what each company publishes on its site and app store pages (October 2026).
 * `null` = the company has no such plan; `NI` = we did not find it described publicly (it may exist).
 */
const NI = 'ni' as const;
/** A value, optionally with a smaller note under it (what the plan leaves out, the annual price…). */
type Cell = string | { t: string; note: string } | null | typeof NI;
const APPS = ['Arafit', 'MFIT Personal', 'Tecnofit Personal', 'Mobitrainer'] as const;
const MATRIX: {
  group: 'Preço por mês' | 'O que tem';
  label: string;
  cells: [Cell, Cell, Cell, Cell];
}[] = [
  {
    group: 'Preço por mês',
    label: 'Grátis',
    cells: [
      { t: '2 alunos', note: 'Tudo, menos os avisos para todos' },
      { t: '1 aluno', note: 'Depois do teste de 10 dias' },
      {
        t: 'Até 10 alunos',
        note: 'Versão básica: cobrança automática e avaliação completa (PAR-Q, postural, fotos) só no pago',
      },
      null,
    ],
  },
  {
    group: 'Preço por mês',
    label: 'Plano de entrada',
    cells: ['R$ 9,90 · até 10 alunos', 'R$ 10,90 · até 3 alunos', null, 'R$ 29,90 · até 10 alunos'],
  },
  {
    group: 'Preço por mês',
    label: 'Alunos ilimitados',
    cells: [
      { t: 'R$ 29,90', note: 'R$ 19,90/mês no anual. Fundador: R$ 19,90 no mensal.' },
      'R$ 39,90',
      { t: 'R$ 36,90', note: 'R$ 24,90/mês no anual' },
      { t: 'Não tem', note: 'Até 30 alunos por R$ 69,90' },
    ],
  },
  {
    group: 'O que tem',
    label: 'App do aluno',
    cells: [
      {
        t: 'Grátis para o aluno',
        note: 'Carga da última vez e recorde, descanso automático, placar da semana, avaliação e Pix do personal; funciona sem internet',
      },
      'Treino com vídeo e cronômetro',
      'App do aluno; acompanhamento em tempo real no pago',
      'Treino e histórico em calendário',
    ],
  },
  {
    group: 'O que tem',
    label: 'Agenda de aulas',
    cells: ['Horários fixos e avulsos, falta e remarcação', NI, NI, 'Divulgação de horários'],
  },
  {
    group: 'O que tem',
    label: 'Aula realizada desconta do pacote',
    cells: ['Sim, sozinha', NI, NI, NI],
  },
  {
    group: 'O que tem',
    label: 'Cobrança dos alunos',
    cells: [
      {
        t: 'Mensal, por aula ou pacote',
        note: 'Lembrete automático no vencimento e quando o pacote acaba; o aluno vê o Pix e avisa "Já paguei"',
      },
      'Pagamento pelo app',
      'Cobrança automática no pago',
      'Venda com Asaas',
    ],
  },
  {
    group: 'O que tem',
    label: 'Retenção de alunos',
    cells: [
      { t: 'No automático', note: 'Chama o aluno que sumiu e te manda o resumo de quem parou' },
      NI,
      NI,
      NI,
    ],
  },
  {
    group: 'O que tem',
    label: 'Mensagens automáticas',
    cells: [
      {
        t: 'Boas-vindas, aniversário e reavaliação',
        note: 'Você liga, desliga e edita o texto de cada uma',
      },
      NI,
      NI,
      NI,
    ],
  },
  {
    group: 'O que tem',
    label: 'Avaliação física',
    cells: [
      {
        t: 'Anamnese com PAR-Q e perguntas suas, perimetria, dobras (Pollock 3 e 7), postural e fotos de progresso',
        note: 'Testes de mobilidade, força, resistência, cardio, funcional e neuromotora, com classificação, evolução e antes × depois',
      },
      'Anamnese; avaliação física, postural e neuromotora',
      'Básica no grátis; PAR-Q, postural e fotos no pago',
      'Anamnese e acompanhamento corporal',
    ],
  },
  {
    group: 'O que tem',
    label: 'Aviso no celular do aluno',
    cells: [
      'Treino novo, avaliação, recado e cobrança',
      NI,
      NI,
      'Notificações e mensagens do personal',
    ],
  },
  {
    group: 'O que tem',
    label: 'Treino sem internet',
    cells: [
      {
        t: 'O treino inteiro',
        note: 'Marca séries, cargas e descanso sem sinal; sobe sozinho quando a conexão volta',
      },
      NI,
      NI,
      'Mostra o último treino baixado',
    ],
  },
];

const ALL_PLANS = [
  'Programas, agenda, cobrança e avaliações',
  'App do aluno com o treino série a série',
  'Avisos de serviço no celular do aluno',
  'Treino offline com cronômetro',
];

const TIERS = [
  {
    id: 'gratis',
    name: 'Grátis',
    price: '0',
    period: '',
    note: 'Para testar com você e um aluno de verdade',
    items: ['2 alunos ativos', 'Tudo do app, sem prazo, menos os avisos para todos'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '9,90',
    period: '/mês',
    note: 'ou R$ 99 por ano · para quem está começando',
    items: ['Até 10 alunos ativos', '5 avisos para todos por mês'],
  },
  {
    id: 'ilimitado',
    name: 'Ilimitado',
    price: '29,90',
    period: '/mês',
    note: 'ou R$ 19,90/mês no anual (R$ 238,80) · para quem vive disso',
    items: ['Alunos sem limite', '30 avisos para todos por mês'],
  },
] as const;

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

/** The app's wordmark: ARA + FIT in red (gold for founders). */
function Wordmark({ className = '', accent = RED }: { className?: string; accent?: string }) {
  return (
    <span className={`display uppercase ${className}`}>
      Ara<span style={{ color: accent }}>fit</span>
    </span>
  );
}

/** A real screenshot of the app in a phone outline. */
function Phone({
  src,
  alt,
  className = '',
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[30px] border-[6px] border-[#1d1d1f] bg-black shadow-[0_30px_70px_-24px_rgba(0,0,0,0.55)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={540}
        height={1200}
        sizes="(min-width: 1024px) 280px, 60vw"
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Screens with a caption each; scrolls sideways on phones, a grid on large screens. */
function Gallery({ shots, dark }: { shots: Shot[]; dark?: boolean }) {
  return (
    <InView
      as="ul"
      className="-mx-6 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16 lg:overflow-visible lg:px-0"
      threshold={0.1}
    >
      {shots.map((s, k) => (
        <li
          key={s.src}
          className="iv iv-up w-[68vw] shrink-0 snap-start sm:w-[300px] lg:w-auto"
          style={i(k)}
        >
          <Phone src={s.src} alt={s.alt} className="mx-auto max-w-[280px]" />
          <h3 className="mt-6 text-[20px] font-bold tracking-tight">{s.t}</h3>
          <p
            className={`mt-1.5 text-[15px] leading-[1.6] ${dark ? 'text-white/80' : 'text-[color:var(--ink-muted)]'}`}
          >
            {s.b}
          </p>
        </li>
      ))}
    </InView>
  );
}

function CompareCell({ v, ours }: { v: Cell; ours?: boolean }) {
  if (v === null) {
    return (
      <span className="inline-flex items-center gap-2 text-[color:var(--ink-dim)]">
        <Minus className="h-4 w-4" aria-hidden="true" />
        Não tem
      </span>
    );
  }
  if (v === NI) {
    return (
      <span className="text-[color:var(--ink-dim)]">
        <span aria-hidden="true">—</span>
        <span className="sr-only">não informado</span>
      </span>
    );
  }
  if (typeof v === 'object') {
    return (
      <span className="block">
        <span className={`block ${ours ? 'font-semibold' : ''}`}>{v.t}</span>
        <span
          className={`mt-1 block text-[12.5px] leading-[1.45] ${ours ? '' : 'text-[color:var(--ink-dim)]'}`}
        >
          {v.note}
        </span>
      </span>
    );
  }
  return <span className={ours ? 'font-semibold' : ''}>{v}</span>;
}

export default async function ArafitPage() {
  const p = productBySlug('arafit');
  const seats = await founderSeatsLeft();
  const seatsTaken = FOUNDER_SEATS - seats;

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
              'Personal: grátis com 2 alunos; Pro R$ 9,90/mês (até 10 alunos); Ilimitado R$ 29,90/mês (fundador R$ 19,90 para os 100 primeiros). Aluno: Arafit Pessoal R$ 4,90/mês.',
          },
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: p.name }])}
      />

      {/* 1 · HERO — the app's red, the diamond grid showing through, both sides of the app */}
      <section
        className="pk-hero relative flex items-center overflow-hidden text-white"
        style={{
          background: `radial-gradient(130% 120% at 78% 22%, ${RED} 0%, #b80500 42%, #6e0300 78%, #3a0100 100%)`,
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-6%] top-[-20%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.16),transparent_70%)]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(60deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 96px), repeating-linear-gradient(-60deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 96px)',
              maskImage: 'radial-gradient(ellipse 95% 100% at 70% 40%, #000 0%, transparent 85%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 95% 100% at 70% 40%, #000 0%, transparent 85%)',
            }}
          />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 px-6 pb-[calc(72px+var(--hero-cut))] pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-[calc(48px+var(--hero-cut))] lg:pt-8">
          <div>
            <div className="pk-load-up flex flex-wrap items-center gap-3">
              <ProductTile product={p} size={40} />
              <Wordmark className="text-[30px] tracking-[-0.03em]" accent={BLACK} />
              <span
                className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white"
                style={{ background: BLACK }}
              >
                {p.status} · {p.audience.replace(/^Para /, 'para ')}
              </span>
            </div>
            <h1 className="pk-hero-title display mt-7 text-balance lg:mt-8">
              <span
                className="pk-load-up mb-3 block text-[clamp(1.15rem,2.1vw,1.7rem)] leading-[1.2] tracking-[-0.015em] lg:mb-4"
                style={{ color: ON_RED, '--d': 60 } as CSSProperties}
              >
                Arafit, o app do personal trainer.
              </span>{' '}
              <span className="pk-load-up block" style={{ '--d': 120 } as CSSProperties}>
                Você monta.
              </span>{' '}
              <span className="pk-load-up block" style={{ '--d': 220 } as CSSProperties}>
                O aluno treina.
              </span>{' '}
              <span
                className="pk-load-up block"
                style={{ color: BLACK, '--d': 320 } as CSSProperties}
              >
                Você vê tudo.
              </span>
            </h1>
            <div className="pk-load-up" style={{ '--d': 520 } as CSSProperties}>
              <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.6] text-white/85 md:text-[18.5px]">
                Alunos, programas, agenda, cobrança e avaliações físicas num app só. O aluno entra
                com o número do celular, o seu programa aparece pronto e cada treino feito chega
                para você.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={NOTIFY_HREF}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold transition hover:bg-[#ffd6d2]"
                  style={{ color: p.colorInk }}
                >
                  Quero saber quando chegar
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
                >
                  Ver planos
                </a>
              </div>
              <a
                href="#fundador"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[13.5px] font-semibold transition hover:brightness-125"
                style={{ borderColor: `${GOLD}99`, color: GOLD, background: 'rgba(10,10,10,0.72)' }}
              >
                <span aria-hidden="true">★</span>
                Fundador: R$ 19,90/mês para sempre · restam {seats} de {FOUNDER_SEATS} vagas
              </a>
              <a
                href="#sozinho"
                className="group mt-4 flex w-fit items-center gap-2 text-[14.5px] font-semibold text-white/90 underline-offset-4 hover:underline"
              >
                Treina sozinho? O Arafit também é para você
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <figure
            className="pk-load-pop relative mx-auto w-full max-w-[520px]"
            style={{ '--d': 400 } as CSSProperties}
          >
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              <Phone
                src="/images/arafit/personal-inicio.webp"
                alt="Início do personal no Arafit"
                className="w-[46%] translate-y-6"
                priority
              />
              <Phone
                src="/images/arafit/aluno-inicio.webp"
                alt="Início do aluno no Arafit com o treino do dia"
                className="w-[46%]"
                priority
              />
            </div>
            <figcaption className="mt-12 flex justify-center gap-[18%] text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
              <span>Personal</span>
              <span>Aluno</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2 · FOR THE PERSONAL — cream, the real screens */}
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
              celular. Estas são as telas do app, com alunos de exemplo.
            </p>
          </div>
          <Gallery shots={PERSONAL_SHOTS} />
        </div>
      </section>

      {/* 3 · FOR THE STUDENT — full-bleed red */}
      <section
        className="cut-top-rev relative overflow-x-clip text-white"
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
            treina pelo seu programa. Para ele, é grátis.
          </p>
          <Gallery shots={ALUNO_SHOTS} dark />
        </div>
      </section>

      {/* 3b · TRAINING SOLO — cream, the student without a personal */}
      <section
        id="sozinho"
        className="cut-top overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]"
      >
        <div className="mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <Kicker color={p.colorInk}>Para quem treina sozinho</Kicker>
            <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,6vw,5.6rem)]">
              Sem personal? <span style={{ color: p.colorInk }}>O Arafit também é seu.</span>
            </h2>
            <p className="mt-7 max-w-xl text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              Com o <strong className="text-[color:var(--ink)]">Arafit Pessoal</strong> você treina
              por conta, com o mesmo app que os personais usam com os alunos.
            </p>
            <ul className="mt-10 border-t border-[color:var(--line-strong)]">
              {SOLO.map((x) => (
                <li
                  key={x.t}
                  className="grid gap-1 border-b border-[color:var(--line-strong)] py-4 sm:grid-cols-[12rem_1fr] sm:gap-6"
                >
                  <span className="flex items-center gap-3 text-[16px] font-bold">
                    <span
                      className="tri tri-r text-[7px]"
                      style={{ color: p.colorInk }}
                      aria-hidden="true"
                    />
                    {x.t}
                  </span>
                  <span className="pl-[22px] text-[15px] leading-[1.6] text-[color:var(--ink-muted)] sm:pl-0">
                    {x.b}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-4">
              <p
                className="display text-[clamp(3rem,5vw,4.4rem)] leading-[0.9]"
                style={{ color: p.colorInk }}
              >
                <span className="align-top text-[0.3em] tracking-normal">R$</span>4,90
                <span className="text-[0.22em] font-semibold tracking-normal text-[color:var(--ink-dim)]">
                  /mês
                </span>
              </p>
              <p className="max-w-sm text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                Se um dia tiver personal, o programa dele entra junto. O que você treina por conta
                continua só seu.
              </p>
            </div>
          </div>
          <div className="flex items-end justify-center gap-4 sm:gap-6">
            <Phone
              src="/images/arafit/aluno-descanso.webp"
              alt="Treino em andamento com o cronômetro de descanso entre séries"
              className="w-[46%] max-w-[260px] translate-y-8"
            />
            <Phone
              src="/images/arafit/aluno-calendario.webp"
              alt="Evolução com o calendário de treinos do mês"
              className="w-[46%] max-w-[260px]"
            />
          </div>
        </div>
      </section>

      {/* 4 · WHAT SETS IT APART — dark, numbered index */}
      <section
        className="cut-top-rev relative overflow-x-clip text-white"
        style={{ background: BLACK }}
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(225,6,0,0.22),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Kicker color={RED_ON_DARK}>Por que o Arafit</Kicker>
              <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,5.4vw,5rem)]">
                O que fica <span style={{ color: RED }}>do lado do aluno.</span>
              </h2>
            </div>
            <p className="max-w-lg text-[17px] leading-[1.7] text-white/70">
              Ficha de treino todo app tem. O Arafit cuida do que acontece entre uma aula e outra: o
              aviso que chega, o treino que roda sem sinal e a cobrança que se resolve sozinha.
            </p>
          </div>
          <InView
            as="ol"
            className="mt-16 grid gap-x-12 border-t border-white/15 md:grid-cols-2"
            threshold={0.1}
          >
            {EDGES.map((x, k) => (
              <li
                key={x.t}
                className="iv iv-up grid grid-cols-[3.2rem_1fr] gap-x-4 border-b border-white/15 py-7"
                style={i(k)}
              >
                <span
                  className="display text-[clamp(1.8rem,3vw,2.4rem)] tabular-nums"
                  style={{ color: RED_ON_DARK }}
                >
                  {String(k + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight">{x.t}</h3>
                  <p className="mt-1.5 text-[15.5px] leading-[1.65] text-white/70">{x.b}</p>
                </div>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 5 · PRICE COMPARISON — cream table */}
      <section className="cut-top overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={p.colorInk}>Comparando</Kicker>
              <h2 className="display mt-6 text-[clamp(2.6rem,6vw,5.6rem)]">
                Mais alunos{' '}
                <span className="block" style={{ color: p.colorInk }}>
                  pelo mesmo preço.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              Pelo preço que outros cobram por 3 alunos, o Pro do Arafit leva 10. E o que vem junto
              — agenda que cobra, aviso no celular do aluno, treino offline — está aqui, lado a
              lado.
            </p>
          </div>

          {/* Phones: one card per line of the comparison. */}
          <ul className="mt-12 grid gap-4 md:hidden">
            {MATRIX.map((r) => (
              <li
                key={r.label}
                className="rounded-[22px] border border-[color:var(--line-strong)] p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                  {r.group}
                </p>
                <p className="mt-1 text-[18px] font-bold">{r.label}</p>
                <dl className="mt-3 grid gap-2.5 text-[14.5px]">
                  {APPS.map((app, k) => (
                    <div
                      key={app}
                      className="grid grid-cols-[7.5rem_1fr] gap-3 rounded-xl px-2 py-1.5"
                      style={k === 0 ? { background: p.colorSoft } : undefined}
                    >
                      <dt className={k === 0 ? 'font-bold' : 'text-[color:var(--ink-muted)]'}>
                        {k === 0 ? <Wordmark className="text-[18px]" /> : app}
                      </dt>
                      <dd>
                        <CompareCell v={r.cells[k]} ours={k === 0} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>

          <div className="mt-14 hidden overflow-x-auto rounded-[22px] border border-[color:var(--line-strong)] md:block">
            <table className="w-full min-w-[900px] border-collapse text-left text-[14.5px] leading-[1.5]">
              <caption className="sr-only">
                Arafit, MFIT Personal, Tecnofit Personal e Mobitrainer: preços e funções divulgados,
                consultados em outubro de 2026
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[19%] px-5 py-5" />
                  {APPS.map((app, k) => (
                    <th
                      key={app}
                      scope="col"
                      className="w-[20%] px-5 py-5 align-bottom text-[16px] font-bold"
                      style={k === 0 ? { background: p.colorSoft } : undefined}
                    >
                      {k === 0 ? <Wordmark className="text-[26px]" /> : app}
                    </th>
                  ))}
                </tr>
              </thead>
              {(['Preço por mês', 'O que tem'] as const).map((group) => (
                <tbody key={group}>
                  <tr className="border-t border-[color:var(--line-strong)]">
                    <th
                      scope="colgroup"
                      colSpan={5}
                      className="px-5 pb-2 pt-6 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]"
                    >
                      {group}
                    </th>
                  </tr>
                  {MATRIX.filter((r) => r.group === group).map((r) => (
                    <tr key={r.label} className="border-t border-[color:var(--line)]">
                      <th scope="row" className="px-5 py-4 align-top font-semibold">
                        {r.label}
                      </th>
                      {r.cells.map((c, k) => (
                        <td
                          key={APPS[k]}
                          className="px-5 py-4 align-top"
                          style={
                            k === 0 ? { background: p.colorSoft, color: p.colorInk } : undefined
                          }
                        >
                          <CompareCell v={c} ours={k === 0} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-[13px] leading-[1.6] text-[color:var(--ink-dim)]">
            Com base no que cada empresa publica no próprio site e nas lojas de apps, consultado em
            outubro de 2026; preços e funções podem ter mudado. Um traço (&mdash;) quer dizer que
            não encontramos a função descrita publicamente, não que ela não exista. Confira no site
            de cada um.
          </p>

          <div className="mt-24">
            <Kicker color={p.colorInk}>Só no Arafit</Kicker>
            <h3 className="display mt-5 max-w-[18ch] text-[clamp(2.2rem,4.4vw,3.8rem)]">
              O que você <span style={{ color: p.colorInk }}>não acha nos outros.</span>
            </h3>
            <InView
              as="ul"
              className="mt-12 grid gap-px overflow-hidden rounded-[26px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-3"
              threshold={0.1}
            >
              {ONLY.map(({ icon: Icon, t, b }, k) => (
                <li key={t} className="iv iv-up bg-[color:var(--bg)] p-7 lg:p-8" style={i(k)}>
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                    style={{ background: p.colorInk }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h4 className="mt-6 text-[20px] font-bold tracking-tight">{t}</h4>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--ink-muted)]">
                    {b}
                  </p>
                </li>
              ))}
            </InView>
            <p className="mt-4 text-[13px] text-[color:var(--ink-dim)]">
              Funções que não encontramos no que MFIT Personal, Tecnofit Personal e Mobitrainer
              divulgam (outubro de 2026).
            </p>
          </div>

          <div
            className="mt-16 grid gap-10 rounded-[30px] p-8 text-white sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            style={{ background: BLACK }}
          >
            <div>
              <Kicker color={RED_ON_DARK}>No piloto automático</Kicker>
              <h3 className="display mt-5 text-[clamp(2.2rem,4.4vw,3.8rem)]">
                Cobrança, retenção e relacionamento{' '}
                <span style={{ color: RED }}>sem você lembrar.</span>
              </h3>
              <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-white/70">
                Todo dia de manhã o Arafit confere quem venceu, quem sumiu e quem faz aniversário, e
                avisa no celular. Você liga o que quiser e escreve do seu jeito.
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-[22px] bg-white/10 sm:grid-cols-3">
              {AUTOPILOT.map((x) => (
                <li key={x.t} className="bg-[#141414] p-6">
                  <p className="text-[18px] font-bold">{x.t}</p>
                  <ul className="mt-3 space-y-2 text-[14px] leading-[1.5] text-white/70">
                    {x.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span
                          className="tri tri-r mt-[0.45em] text-[6px]"
                          style={{ color: RED_ON_DARK }}
                          aria-hidden="true"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 grid gap-10 border-t border-[color:var(--line-strong)] pt-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h3 className="display text-[clamp(2rem,3.6vw,3rem)]">
              Em todos os planos, <span style={{ color: p.colorInk }}>inclusive o grátis.</span>
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {ALL_PLANS.map((x) => (
                <li key={x} className="flex items-start gap-3 text-[16px] font-semibold">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: p.colorInk }}
                    aria-hidden="true"
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 · PLANS + FOUNDER */}
      <section
        id="planos"
        className="cut-top-rev relative overflow-x-clip text-white"
        style={{ background: BLACK }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={RED_ON_DARK}>Planos</Kicker>
              <h2 className="display mt-6 text-[clamp(2.6rem,6vw,5.6rem)]">
                Comece com dois alunos.{' '}
                <span className="block" style={{ color: RED }}>
                  Cresça sem trocar de app.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-white/70">
              Avisos de serviço — treino novo, avaliação, recado e cobrança — são livres em todos os
              planos. Os avisos para todos os alunos (uma promoção, um feriado) vêm com o plano.
            </p>
          </div>

          <InView as="ol" className="mt-16 grid border-t border-white/15 md:grid-cols-3">
            {TIERS.map((t, k) => {
              const featured = t.id === 'ilimitado';
              return (
                <li
                  key={t.id}
                  className={`iv iv-up px-0 pb-10 pt-8 sm:px-8 md:pb-12 ${featured ? 'px-5' : ''} ${
                    k > 0 ? 'md:border-l md:border-white/15' : ''
                  } ${k < TIERS.length - 1 ? 'border-b border-white/15 md:border-b-0' : ''}`}
                  style={{ ...(featured ? { background: 'rgba(225,6,0,0.12)' } : {}), ...i(k * 2) }}
                >
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/55">
                    Personal · {t.name}
                  </p>
                  <p
                    className="display mt-5 text-[clamp(3.6rem,6.4vw,5.6rem)] leading-[0.9]"
                    style={featured ? { color: RED_ON_DARK } : undefined}
                  >
                    <span className="align-top text-[0.3em] tracking-normal">R$</span>
                    {t.price}
                    {t.period ? (
                      <span className="text-[0.2em] font-semibold tracking-normal text-white/55">
                        {t.period}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-[15px] text-white/65">{t.note}</p>
                  <ul className="mt-7 space-y-2.5 border-t border-white/15 pt-6 text-[15.5px] font-semibold">
                    {t.items.map((x) => (
                      <li key={x} className="flex items-center gap-3">
                        <span
                          className="tri tri-r text-[7px]"
                          style={{ color: RED_ON_DARK }}
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

          {/* Founder: the 100 first */}
          <div
            id="fundador"
            className="mt-20 grid gap-12 overflow-hidden rounded-[32px] border p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
            style={{
              borderColor: `${GOLD}66`,
              background: 'linear-gradient(135deg, rgba(212,167,44,0.14), rgba(212,167,44,0.03))',
            }}
          >
            <div>
              <Kicker color={GOLD}>Fundador</Kicker>
              <h3 className="display mt-5 text-[clamp(2.4rem,5vw,4.4rem)]">
                Os 100 primeiros pagam <span style={{ color: GOLD }}>R$ 19,90 para sempre.</span>
              </h3>
              <p className="mt-6 max-w-xl text-[16.5px] leading-[1.7] text-white/75">
                O Ilimitado inteiro por R$ 19,90 por mês (ou R$ 199 por ano), enquanto a assinatura
                continuar. Cada fundador ganha um número, o selo dourado e a marca do app em
                dourado. A vaga não volta: quem fica mais de 60 dias sem pagar perde o preço de
                fundador.
              </p>
              <div className="mt-8">
                <div className="flex items-baseline justify-between text-[14px] font-semibold">
                  <span style={{ color: GOLD }}>
                    {seats === 0 ? 'Vagas esgotadas' : `Restam ${seats} de ${FOUNDER_SEATS} vagas`}
                  </span>
                  <span className="text-white/55">{seatsTaken} fundadores</span>
                </div>
                <div
                  className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10"
                  aria-hidden="true"
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(2, (seatsTaken / FOUNDER_SEATS) * 100)}%`,
                      background: GOLD,
                    }}
                  />
                </div>
              </div>
              <a
                href={FOUNDER_HREF}
                className="group mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-black transition hover:brightness-110"
                style={{ background: GOLD }}
              >
                Quero minha vaga de fundador
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
            <figure className="mx-auto w-full max-w-[260px]">
              <Phone
                src="/images/arafit/personal-fundador.webp"
                alt="Perfil de um personal fundador com o selo Fundador #01 e a marca dourada"
              />
              <figcaption className="mt-4 text-center text-[12.5px] text-white/55">
                O selo e a marca dourada de um fundador
              </figcaption>
            </figure>
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/15 pt-10 md:grid-cols-[0.8fr_1.2fr]">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Aluno · Arafit Pessoal
            </p>
            <p className="text-[16px] leading-[1.7] text-white/75">
              Com personal, o aluno usa grátis. O{' '}
              <strong className="text-white">Arafit Pessoal</strong> (R$ 4,90/mês) é para quem
              também quer treinar por conta — programas próprios, programas prontos e montar treino.
              O personal não vê o que ele treina por conta, e se o vínculo acabar o último programa
              e o histórico ficam com ele.
            </p>
          </div>

          <p className="mt-10 max-w-3xl text-[13px] leading-[1.6] text-white/50">
            Assinatura dentro do app, cobrada pela App Store ou pelo Google Play, com renovação
            automática. Cancele nos ajustes da loja até 24 horas antes da renovação. A cobrança que
            você faz dos seus alunos não passa pelo app: ele lembra e registra, e o pagamento é
            entre vocês.
          </p>
        </div>
      </section>

      {/* 7 · COMING SOON — full-bleed red */}
      <section
        id="contato"
        className="cut-top relative overflow-x-clip text-white"
        style={{ background: p.colorInk }}
        aria-labelledby="em-breve-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="pk-tri-grid-light absolute inset-0" />
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
            O Arafit ainda não está nas lojas. Quer saber quando chegar, garantir uma vaga de
            fundador ou usar com os seus alunos desde o começo? Fale com a gente.
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
