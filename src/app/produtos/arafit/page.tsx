import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';
import type { CSSProperties, ReactNode } from 'react';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bell,
  CalendarCheck,
  Check,
  HeartHandshake,
  Map as MapIcon,
  Megaphone,
  Minus,
  Music,
  Smartphone,
  Wallet,
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

/** The app's title face. Loaded only here; `.af-display` in globals.css uses the variable. */
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });

const pageDescription =
  'App de treino com IA para personal trainers e alunos. O personal cuida de alunos, programas com IA, agenda, cobrança e avaliações num app só; o aluno treina o programa série a série, com o Fito comemorando cada evolução. Grátis com 2 alunos, Pro R$ 9,90 (até 10 alunos), Ilimitado R$ 29,90. Arafit Pessoal R$ 4,90 para quem treina sem personal.';

export const metadata = pageMetadata({
  path: '/produtos/arafit',
  title: 'Arafit: app de treino com IA para personal trainer e aluno',
  description: pageDescription,
  image: '/produtos/arafit/opengraph-image',
});

/*
 * The app's light theme (upper-gym src/theme): red only for the brand and the calls to action,
 * purple only for the AI and the Fito, soft tints for everything else. Never a black surface.
 */
const RED = '#E10600';
const INK = '#121214';
const MUTED = '#5F5F68';
const BG = '#F4F4F6';
const WASH = '#FFEDE7';
const AI = '#6D28D9';
const AI_SOFT = '#F3EEFF';
const AI_BORDER = '#DDD0FB';
const GOLD = '#D4A72C';
const GOLD_DEEP = '#9A6F00';
const GOLD_CREAM = '#FBF3DC';

/** Card and icon tints from the app: `bg` is the card, `fg` the icon. */
const TINT = {
  coral: { bg: '#FFECEA', fg: '#E10600' },
  green: { bg: '#E6F6EC', fg: '#1E9E57' },
  amber: { bg: '#FFF5DC', fg: '#A87A06' },
  blue: { bg: '#E8F1FE', fg: '#2F6FDB' },
  pink: { bg: '#FDEBF3', fg: '#C2347A' },
  teal: { bg: '#E3F6F4', fg: '#0F8A7E' },
  peach: { bg: '#FFF4EC', fg: '#C23F00' },
  ai: { bg: AI_SOFT, fg: AI },
} as const;
type Tint = keyof typeof TINT;

const NOTIFY_HREF = contactHref('Arafit', 'Olá! Quero saber quando o Arafit chegar às lojas.');
const FOUNDER_HREF = contactHref(
  'Arafit',
  'Olá! Sou personal trainer e quero garantir uma vaga de fundador do Arafit.',
);

type Shot = { src: string; alt: string; t: string; b: string };

const AI_PERSONAL: Shot[] = [
  {
    src: '/images/arafit/iphone/ia-personal-programa.webp',
    alt: 'Programa com IA: o Fito pede o objetivo, os dias e as restrições do aluno',
    t: 'Programa com IA',
    b: 'Descreva o aluno em poucas palavras. O Fito entende o objetivo e as restrições, o programa sai do nosso catálogo revisado e você ajusta antes de mandar.',
  },
  {
    src: '/images/arafit/iphone/ia-personal-avaliacao.webp',
    alt: 'Avaliação física com o resumo para o aluno que o Fito escreve e o personal revisa',
    t: 'Resumo da avaliação',
    b: 'O que mudou desde a última avaliação, com os números certos e os próximos focos. Você edita e manda pelo WhatsApp.',
  },
  {
    src: '/images/arafit/iphone/ia-personal-anamnese.webp',
    alt: 'Anamnese com os pontos de atenção que o Fito destaca',
    t: 'Pontos de atenção da anamnese',
    b: 'Lesões, remédios e respostas do PAR-Q que não batem aparecem no topo, antes de você montar o treino.',
  },
  {
    src: '/images/arafit/iphone/ia-personal-escrever.webp',
    alt: 'Recado com IA: a ideia do personal e a escolha do tom',
    t: 'Escrever com IA',
    b: 'Promoção, recado ou cobrança com jeitinho: escreva a ideia, escolha o tom e receba três opções.',
  },
  {
    src: '/images/arafit/iphone/ia-personal-semana.webp',
    alt: 'Sua semana: quem atrasou, quem sumiu e quem bateu recorde, com a mensagem pronta',
    t: 'Sua semana',
    b: 'Quem sumiu, quem atrasou e quem bateu recorde, num toque, com a mensagem de WhatsApp pronta.',
  },
];

const AI_RULES = [
  'Você revisa antes: a IA não publica nem envia nada sozinha',
  'Nome e telefone do aluno não vão para a IA',
  'Número que não bate com os dados, a frase sai',
  'Sem diagnóstico e sem prescrever remédio ou dieta',
];

const PERSONAL_SHOTS: Shot[] = [
  {
    src: '/images/arafit/iphone/personal-inicio.webp',
    alt: 'Início do personal: aulas de hoje, quem treinou, quem sumiu e pagamentos em atraso',
    t: 'O dia num relance',
    b: 'Aulas de hoje, quem treinou na semana, quem sumiu e quem está com a mensalidade em atraso.',
  },
  {
    src: '/images/arafit/iphone/personal-agenda.webp',
    alt: 'Agenda da semana com aulas realizadas, faltas e horários fixos',
    t: 'Agenda que cobra sozinha',
    b: 'Horários fixos e avulsos. Marcou realizada, a aula sai do pacote. Falta não desconta, a não ser que você queira.',
  },
  {
    src: '/images/arafit/iphone/personal-alunos.webp',
    alt: 'Lista de alunos com o último treino de cada um',
    t: 'Todos os alunos',
    b: 'Quando cada um treinou e quantos treinos fez na semana. Quem ainda não entrou recebe o convite pelo WhatsApp.',
  },
  {
    src: '/images/arafit/iphone/personal-aluno.webp',
    alt: 'Página da aluna com treinos do mês, frequência e programa',
    t: 'A página de cada aluno',
    b: 'Frequência, último treino, o programa atual e o recado que aparece no celular dele.',
  },
  {
    src: '/images/arafit/iphone/personal-cobranca.webp',
    alt: 'Cobrança da aluna com mensalidade paga e lembrete automático',
    t: 'Cobrança sem planilha',
    b: 'Mensal, por aula ou pacote. O aluno avisa "Já paguei" e você confirma com um toque.',
  },
  {
    src: '/images/arafit/iphone/personal-saude.webp',
    alt: 'Saúde da aluna com peso, gordura, massa magra e categorias de avaliação',
    t: 'Avaliação física completa',
    b: 'Anamnese com perguntas suas, perimetria, dobras, postura, testes físicos e fotos de antes × depois.',
  },
];

/** The automations, run every morning by the server (October 2026). */
const AUTOPILOT: { t: string; icon: LucideIcon; tint: Tint; items: string[] }[] = [
  {
    t: 'Cobrança',
    icon: Wallet,
    tint: 'green',
    items: [
      'Lembrete no dia do vencimento e 3 dias depois',
      'Aviso quando o pacote está acabando',
      'Para sozinho quando o aluno paga',
    ],
  },
  {
    t: 'Retenção',
    icon: HeartHandshake,
    tint: 'amber',
    items: [
      '"Bora voltar?" para quem sumiu',
      'Resumo da manhã de quem parou',
      'Parabéns por bater a meta',
    ],
  },
  {
    t: 'Relacionamento',
    icon: CalendarCheck,
    tint: 'blue',
    items: [
      'Boas-vindas no primeiro acesso',
      'Parabéns no aniversário',
      'Lembrete de reavaliação a cada 60 dias',
    ],
  },
];

/** A day of the student, in the order it happens. */
const DAY: (Shot & { tint: Tint; step: string })[] = [
  {
    src: '/images/arafit/iphone/aluno-inicio.webp',
    alt: 'Início da aluna com o treino do dia, o botão de iniciar e a semana',
    t: 'O treino do dia',
    b: 'Abre o app e o treino de hoje está lá, com a semana e o mês ao lado.',
    tint: 'coral',
    step: 'Início',
  },
  {
    src: '/images/arafit/iphone/aluno-serie.webp',
    alt: 'Treino em andamento com carga, repetições e a última vez',
    t: 'Série a série',
    b: 'Carga e repetições da última vez à vista antes de cada série. Um toque e a série está marcada.',
    tint: 'blue',
    step: 'Treino',
  },
  {
    src: '/images/arafit/iphone/aluno-descanso.webp',
    alt: 'Treino em andamento com o cronômetro de descanso contando',
    t: 'Descanso contando',
    b: 'Marcou a série, o cronômetro começa sozinho e avisa quando é hora da próxima.',
    tint: 'teal',
    step: 'Descanso',
  },
  {
    src: '/images/arafit/iphone/aluno-evolucao.webp',
    alt: 'Evolução com o placar da semana, a sequência de semanas na meta e os totais',
    t: 'Placar da semana',
    b: 'Treinos na semana contra a meta, semanas seguidas na meta, tempo médio e volume levantado.',
    tint: 'green',
    step: 'Evolução',
  },
  {
    src: '/images/arafit/iphone/aluno-recordes.webp',
    alt: 'Lista de recordes com a carga nova e a marca anterior de cada exercício',
    t: 'Recorde que vale',
    b: 'Só é recorde quando passa a melhor marca na mesma faixa de repetições. Primeira vez não conta.',
    tint: 'amber',
    step: 'Recorde',
  },
  {
    src: '/images/arafit/iphone/aluno-compartilhar.webp',
    alt: 'Cartão de compartilhar o treino com o Fito, duração, séries, volume e sequência',
    t: 'Cartão de compartilhar',
    b: 'O treino vira um cartão com o Fito para o feed ou o story, em vários temas.',
    tint: 'pink',
    step: 'Compartilhar',
  },
];

/** What else stays on the student's side, said once. */
const STUDENT_EDGES: { icon: LucideIcon | 'ai'; tint: Tint; t: string; b: string }[] = [
  {
    icon: 'ai',
    tint: 'ai',
    t: 'Por que esse treino?',
    b: 'O Fito explica a ordem e o objetivo dos exercícios do programa que você montou.',
  },
  {
    icon: Bell,
    tint: 'blue',
    t: 'Aviso no celular',
    b: 'Programa novo, avaliação, recado ou mensalidade em aberto: o toque abre a tela certa.',
  },
  {
    icon: WifiOff,
    tint: 'teal',
    t: 'Treina sem internet',
    b: 'No subsolo da academia continua marcando séries, cargas e descanso. Tudo sobe quando a conexão volta.',
  },
  {
    icon: Wallet,
    tint: 'green',
    t: 'O seu Pix à mão',
    b: 'Na aba Meu personal: WhatsApp, chave Pix para copiar, o plano e o botão "Já paguei".',
  },
  {
    icon: Activity,
    tint: 'peach',
    t: 'Avaliação que ele entende',
    b: 'Gordura, massa magra e testes físicos com a classificação e a seta de evolução.',
  },
  {
    icon: Smartphone,
    tint: 'amber',
    t: 'Entra só com o celular',
    b: 'Você cadastra o número; o aluno entra com um código por SMS. Sem senha e sem e-mail.',
  },
];

const SOLO: { t: string; b: string; tint: Tint; ai?: boolean }[] = [
  {
    t: 'Programas prontos',
    b: 'Hipertrofia, emagrecimento, glúteo, em casa e mais. Escolha um e comece hoje.',
    tint: 'coral',
  },
  {
    t: 'Monte em 3 perguntas',
    b: 'Objetivo, dias por semana e tempo de treino: a rotina sai pronta.',
    tint: 'blue',
  },
  {
    t: 'Série a série',
    b: 'Carga da última vez, recorde e o descanso contando sozinho.',
    tint: 'teal',
  },
  {
    t: 'Sua evolução',
    b: 'Placar da semana, calendário de treinos, volume e recordes.',
    tint: 'green',
  },
  {
    t: 'Lembretes e música',
    b: 'Aviso nos dias de treino e a playlist do treino no Spotify.',
    tint: 'amber',
  },
  {
    t: 'O Fito com IA',
    b: 'Conte o objetivo, o tempo e o que dói: o Fito monta o treino e explica. 60 usos por mês.',
    tint: 'ai',
    ai: true,
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
  group: 'Preço por mês' | 'O que tem' | 'Com IA';
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
  {
    group: 'Com IA',
    label: 'Programa de treino com IA',
    cells: [
      {
        t: 'Sim',
        note: 'A IA entende o pedido e as restrições; os exercícios saem do nosso catálogo revisado',
      },
      'Sim (MFIT IA)',
      NI,
      'Sim',
    ],
  },
  {
    group: 'Com IA',
    label: 'Anamnese com IA',
    cells: [
      { t: 'Pontos de atenção', note: 'Lesões, remédios e respostas do PAR-Q que não batem' },
      'Resumo da anamnese',
      NI,
      NI,
    ],
  },
  {
    group: 'Com IA',
    label: 'Resumo da avaliação física',
    cells: [
      { t: 'Sim', note: 'Com os números conferidos, para editar e mandar pelo WhatsApp' },
      NI,
      NI,
      NI,
    ],
  },
  {
    group: 'Com IA',
    label: 'Mensagens com IA',
    cells: [
      { t: 'Avisos, recados e cobrança', note: 'Três opções no tom que você escolher' },
      'Notificações push',
      NI,
      { t: 'Agente no WhatsApp', note: 'Atendimento automático' },
    ],
  },
  {
    group: 'Com IA',
    label: 'Resumo da semana',
    cells: [
      { t: 'Sim', note: 'Quem sumiu, atrasou ou bateu recorde, com a mensagem pronta' },
      NI,
      NI,
      NI,
    ],
  },
  {
    group: 'Com IA',
    label: 'IA no app do aluno',
    cells: [
      {
        t: 'O Fito: treino explicado e evolução em palavras',
        note: 'E monta o treino de quem treina sozinho',
      },
      NI,
      NI,
      NI,
    ],
  },
];

/** What we did not find in what MFIT, Tecnofit and Mobitrainer publish (October 2026). */
const ONLY: { icon: LucideIcon | 'ai'; tint: Tint; t: string; b: string }[] = [
  {
    icon: CalendarCheck,
    tint: 'blue',
    t: 'A agenda cobra sozinha',
    b: 'Marcou a aula como realizada, ela sai do pacote. Falta não desconta, a não ser que você escolha.',
  },
  {
    icon: BadgeCheck,
    tint: 'green',
    t: '"Já paguei" pelo app',
    b: 'O aluno copia o seu Pix, paga e avisa. Você confirma com um toque, sem conferir extrato.',
  },
  {
    icon: Megaphone,
    tint: 'peach',
    t: 'Avisos com mural',
    b: 'Uma promoção ou um feriado vai para todos: notificação para quem aceitou e mural no app.',
  },
  {
    icon: WifiOff,
    tint: 'teal',
    t: 'O treino inteiro sem sinal',
    b: 'Séries, cargas e descanso funcionam no subsolo da academia e sobem quando a conexão volta.',
  },
  {
    icon: Music,
    tint: 'pink',
    t: 'Música do treino',
    b: 'Cada treino tem a sua playlist do Spotify, sugerida ou do próprio aluno, a um toque.',
  },
  {
    icon: MapIcon,
    tint: 'amber',
    t: 'O percurso na academia',
    b: 'O mapa da academia mostra onde está cada aparelho, na ordem dos exercícios do treino.',
  },
  {
    icon: 'ai',
    tint: 'ai',
    t: 'Avaliação resumida pela IA',
    b: 'O que mudou desde a última avaliação, com os números conferidos. Você edita e manda pelo WhatsApp.',
  },
  {
    icon: 'ai',
    tint: 'ai',
    t: 'Sua semana com IA',
    b: 'Quem sumiu, quem atrasou e quem bateu recorde, num cartão, com a mensagem pronta para cada um.',
  },
  {
    icon: 'ai',
    tint: 'ai',
    t: 'O Fito no app do aluno',
    b: 'Explica por que o treino é assim, conta a evolução em palavras e comemora cada recorde.',
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
    items: [
      '2 alunos ativos',
      'Tudo do app, sem prazo, menos os avisos para todos',
      '20 usos de IA por mês',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '9,90',
    period: '/mês',
    note: 'ou R$ 99 por ano · para quem está começando',
    items: ['Até 10 alunos ativos', '5 avisos para todos por mês', '150 usos de IA por mês'],
  },
  {
    id: 'ilimitado',
    name: 'Ilimitado',
    price: '29,90',
    period: '/mês',
    note: 'ou R$ 19,90/mês no anual (R$ 238,80) · para quem vive disso',
    items: ['Alunos sem limite', '30 avisos para todos por mês', '500 usos de IA por mês'],
  },
] as const;

const i = (n: number) => ({ '--i': n }) as CSSProperties;
const d = (ms: number) => ({ '--d': ms }) as CSSProperties;

/**
 * The AI mark from the app: a big and a small four-point sparkle, violet → fuchsia. The gradient is
 * defined once by <AiGradient /> (an SVG inside a hidden <svg> would not paint in Chrome).
 */
function AiMark({
  size = 16,
  className = '',
  solid,
}: {
  size?: number;
  className?: string;
  solid?: string;
}) {
  const fill = solid ?? 'url(#af-ai-grad)';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`inline-block shrink-0 ${className}`}
    >
      <path
        d="M10 4.5Q11.71 12.29 19.5 14Q11.71 15.71 10 23.5Q8.29 15.71 0.5 14Q8.29 12.29 10 4.5Z"
        fill={fill}
      />
      <path
        d="M19.4 0.4Q20.24 3.76 23.6 4.6Q20.24 5.44 19.4 8.8Q18.56 5.44 15.2 4.6Q18.56 3.76 19.4 0.4Z"
        fill={fill}
      />
    </svg>
  );
}

function AiGradient() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <linearGradient
          id="af-ai-grad"
          x1="2"
          y1="22"
          x2="22"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Animated loops of the Fito, with the still pose for prefers-reduced-motion. */
const STILL = {
  acenando: 'boas-vindas',
  pensando: 'pensando',
  comemorando: 'recorde',
  'levantando-peso': 'treino',
} as const;

function Fito({
  pose,
  still,
  className = '',
  eager,
}: {
  pose?: keyof typeof STILL;
  still?: string;
  className?: string;
  eager?: boolean;
}) {
  const base = '/images/arafit/fito/fito-';
  const img = (
    // Animated WebP: next/image would serve the first frame only.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={pose ? `${base}${pose}-anim.webp` : `${base}${still}.webp`}
      alt=""
      width={320}
      height={320}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`block h-auto ${className}`}
    />
  );
  if (!pose) return img;
  return (
    <picture>
      <source media="(prefers-reduced-motion: reduce)" srcSet={`${base}${STILL[pose]}.webp`} />
      {img}
    </picture>
  );
}

/** The Fito talking: the pose beside a speech bubble with the AI's moving border. */
function FitoSays({
  fito,
  label,
  children,
  className = '',
}: {
  fito: ReactNode;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={`flex items-end gap-2 sm:gap-3 ${className}`}>
      <div className="w-[96px] shrink-0 sm:w-[124px]">{fito}</div>
      <blockquote className="af-ai-border mb-5 min-w-0 flex-1 rounded-[22px] rounded-bl-[6px] px-4 py-3.5 shadow-[0_18px_40px_-24px_rgba(109,40,217,0.45)] sm:px-5 sm:py-4">
        <p
          className="mb-1 flex flex-wrap items-center gap-x-1.5 text-[12px] font-bold uppercase tracking-[0.14em]"
          style={{ color: AI }}
        >
          <AiMark size={13} />
          Fito
          {label ? (
            <span className="font-semibold normal-case tracking-normal" style={{ color: MUTED }}>
              · {label}
            </span>
          ) : null}
        </p>
        <p className="text-[15.5px] leading-[1.55]" style={{ color: INK }}>
          {children}
        </p>
      </blockquote>
    </figure>
  );
}

function Kicker({ children, color }: { children: ReactNode; color: string }) {
  return (
    <p
      className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.22em]"
      style={{ color: MUTED }}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} aria-hidden="true" />
      {children}
    </p>
  );
}

/** The app's wordmark: ARA + FIT in red and the ✦. */
function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`af-display inline-flex items-start ${className}`} style={{ color: INK }}>
      Ara<span style={{ color: RED }}>fit</span>
      <AiMark size={12} className="ml-0.5 mt-[0.05em] h-[0.36em] w-[0.36em]" />
    </span>
  );
}

function IconChip({
  icon,
  tint,
  size = 44,
}: {
  icon: LucideIcon | 'ai';
  tint: Tint;
  size?: number;
}) {
  const Icon = icon;
  return (
    <span
      className="grid shrink-0 place-items-center rounded-2xl"
      style={{ width: size, height: size, background: TINT[tint].bg, color: TINT[tint].fg }}
    >
      {Icon === 'ai' ? (
        <AiMark size={Math.round(size * 0.5)} />
      ) : (
        <Icon className="h-[46%] w-[46%]" aria-hidden="true" />
      )}
    </span>
  );
}

function PrimaryCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(225,6,0,0.7)] transition hover:brightness-110"
      style={{ background: RED }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

const SECONDARY =
  'inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3.5 text-[15px] font-semibold transition hover:bg-[#f2f2f5]';

/** A real iPhone screenshot in an iPhone frame: titanium edge, black bezel and the Dynamic Island. */
function Phone({
  src,
  alt,
  className = '',
  preload,
}: {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[13.5%/6.2%] bg-[#2b2b2e] p-[1.2%] shadow-[0_30px_60px_-28px_rgba(18,18,20,0.45),inset_0_0_0_1px_rgba(255,255,255,0.14)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[12.6%/5.8%] border-[5px] border-black bg-black">
        <Image
          src={src}
          alt={alt}
          width={540}
          height={1174}
          sizes="(min-width: 1024px) 280px, 60vw"
          preload={preload}
          className="block h-auto w-full"
        />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[1.6%] h-[3.4%] w-[31%] -translate-x-1/2 rounded-full bg-black"
        />
      </div>
    </div>
  );
}

/** Screens with a caption each; scrolls sideways on phones, a grid on large screens. */
function Gallery({
  shots,
  cols = 3,
  ai,
}: {
  shots: (Shot & { tint?: Tint; step?: string })[];
  cols?: 3 | 5;
  ai?: boolean;
}) {
  const grid = cols === 5 ? 'lg:grid-cols-5 lg:gap-6' : 'lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16';
  return (
    <InView
      as="ul"
      className={`-mx-6 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 ${grid}`}
      threshold={0.1}
    >
      {shots.map((s, k) => (
        <li
          key={s.src}
          className={`iv iv-up shrink-0 snap-start lg:w-auto ${cols === 5 ? 'w-[62vw] sm:w-[240px]' : 'w-[68vw] sm:w-[290px]'}`}
          style={i(k)}
        >
          <Phone
            src={s.src}
            alt={s.alt}
            className={`mx-auto ${cols === 5 ? 'max-w-[240px]' : 'max-w-[280px]'}`}
          />
          {s.step && s.tint ? (
            <p
              className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-[0.12em]"
              style={{ background: TINT[s.tint].bg, color: INK }}
            >
              <span
                className="grid h-5 w-5 place-items-center rounded-full text-[11px] text-white"
                style={{ background: TINT[s.tint].fg }}
                aria-hidden="true"
              >
                {k + 1}
              </span>
              {s.step}
            </p>
          ) : null}
          <h3
            className={`flex items-start gap-2 font-bold tracking-tight ${s.step ? 'mt-3' : 'mt-6'} ${cols === 5 ? 'text-[17px] leading-[1.3]' : 'text-[20px]'}`}
            style={{ color: INK }}
          >
            {ai ? <AiMark size={16} className="mt-[0.2em]" /> : null}
            {s.t}
          </h3>
          <p
            className={`mt-1.5 leading-[1.6] ${cols === 5 ? 'text-[14px]' : 'text-[15px]'}`}
            style={{ color: MUTED }}
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
      <span className="inline-flex items-center gap-2" style={{ color: MUTED }}>
        <Minus className="h-4 w-4" aria-hidden="true" />
        Não tem
      </span>
    );
  }
  if (v === NI) {
    return (
      <span style={{ color: MUTED }}>
        <span aria-hidden="true">—</span>
        <span className="sr-only">não informado</span>
      </span>
    );
  }
  if (typeof v === 'object') {
    return (
      <span className="block">
        <span className={`block ${ours ? 'font-semibold' : ''}`}>{v.t}</span>
        <span className="mt-1 block text-[12.5px] leading-[1.45]" style={{ color: MUTED }}>
          {v.note}
        </span>
      </span>
    );
  }
  return <span className={ours ? 'font-semibold' : ''}>{v}</span>;
}

/** Section title in Bebas. */
function Title({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`af-display mt-5 text-balance text-[clamp(2.8rem,7.4vw,5.2rem)] ${className}`}
      style={{ color: INK }}
    >
      {children}
    </h2>
  );
}

const WRAP = 'relative mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28';

export default async function ArafitPage() {
  const p = productBySlug('arafit');
  const seats = await founderSeatsLeft();
  const seatsTaken = FOUNDER_SEATS - seats;

  return (
    <div className={`af ${bebas.variable}`} style={{ background: BG, color: INK }}>
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
      <AiGradient />

      {/* 1 · HERO — the app's warm wash, both sides of the app and the Fito waving */}
      <section
        className="pk-hero relative flex items-center overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${WASH} 0%, ${BG} 78%)` }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-[-10%] top-[-18%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(243,238,255,0.95),transparent_70%)]" />
          <div className="absolute bottom-[-30%] left-[-12%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,236,234,0.9),transparent_70%)]" />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-6 pb-[calc(64px+var(--hero-cut))] pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-[calc(8px+var(--hero-cut))] lg:pt-8">
          <div className="min-w-0">
            <div className="pk-load-up flex flex-wrap items-center gap-3">
              <ProductTile product={p} size={40} />
              <Wordmark className="text-[38px]" />
              <span
                className="rounded-full border bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                style={{ borderColor: '#E6E6EA', color: MUTED }}
              >
                {p.status} · para personal e aluno
              </span>
              <a
                href="#ia"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] font-bold transition hover:brightness-95"
                style={{ background: AI_SOFT, borderColor: AI_BORDER, color: AI }}
              >
                <AiMark size={14} />
                Com IA
              </a>
            </div>
            <h1 className="mt-7 lg:mt-8">
              <span
                className="pk-load-up block text-[clamp(1.05rem,2vw,1.4rem)] font-semibold leading-[1.3] tracking-[-0.01em]"
                style={{ ...d(60), color: MUTED }}
              >
                Arafit, o app de treino com IA para personal e aluno.
              </span>
              <span className="af-display af-hero-title mt-3 block">
                <span className="pk-load-up block" style={d(120)}>
                  O personal orienta.
                </span>
                <span className="pk-load-up block" style={d(220)}>
                  O aluno realiza.
                </span>
                <span className="pk-load-up block" style={{ ...d(320), color: AI }}>
                  O Fito acompanha.
                </span>
              </span>
            </h1>
            <div className="pk-load-up" style={d(480)}>
              <p
                className="mt-6 max-w-[34rem] text-[17px] leading-[1.6] md:text-[18px]"
                style={{ color: MUTED }}
              >
                Alunos, programas com IA, agenda, cobrança e avaliações num app só para o personal.
                O programa no celular, série a série, para o aluno. E o Fito, o robô do Arafit,
                comemorando cada pequena evolução.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryCta href={NOTIFY_HREF}>Quero saber quando chegar</PrimaryCta>
                <a
                  href="#planos"
                  className={SECONDARY}
                  style={{ borderColor: '#E6E6EA', color: INK }}
                >
                  Ver planos
                </a>
              </div>
              <ul className="mt-7 grid max-w-[34rem] gap-3 sm:grid-cols-2">
                {(
                  [
                    {
                      href: '#personal',
                      t: 'Para o personal',
                      b: 'Alunos, programa com IA, agenda e cobrança',
                      tint: 'blue',
                    },
                    {
                      href: '#pessoal',
                      t: 'Para quem treina',
                      b: 'Arafit Pessoal com o Fito · R$ 4,90/mês',
                      tint: 'green',
                    },
                  ] as const
                ).map((x) => (
                  <li key={x.href}>
                    <a
                      href={x.href}
                      className="group flex h-full items-center gap-3 rounded-[20px] p-4 transition hover:-translate-y-0.5"
                      style={{ background: TINT[x.tint].bg }}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-bold" style={{ color: INK }}>
                          {x.t}
                        </span>
                        <span
                          className="mt-0.5 block text-[13.5px] leading-[1.4]"
                          style={{ color: MUTED }}
                        >
                          {x.b}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 transition group-hover:translate-x-1"
                        style={{ color: TINT[x.tint].fg }}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#fundador"
                className="mt-5 inline-flex max-w-full items-center gap-2.5 rounded-full border px-4 py-2 text-[13.5px] font-semibold transition hover:brightness-95"
                style={{ borderColor: `${GOLD}88`, color: GOLD_DEEP, background: GOLD_CREAM }}
              >
                <span aria-hidden="true">★</span>
                Fundador: R$ 19,90/mês para sempre · restam {seats} de {FOUNDER_SEATS} vagas
              </a>
            </div>
          </div>
          <figure className="pk-load-pop relative mx-auto w-full max-w-[520px]" style={d(400)}>
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              <Phone
                src="/images/arafit/iphone/personal-inicio.webp"
                alt="Início do personal no Arafit: aulas de hoje, treinos da semana e pagamentos"
                className="w-[40%] translate-y-6"
                preload
              />
              <Phone
                src="/images/arafit/iphone/aluno-inicio.webp"
                alt="Início da aluna no Arafit com o treino do dia"
                className="w-[40%]"
                preload
              />
            </div>
            <figcaption
              className="mt-9 flex justify-center gap-[16%] text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: MUTED }}
            >
              <span>Personal</span>
              <span>Aluno</span>
            </figcaption>
            <FitoSays className="mx-auto mt-6 max-w-[460px]" fito={<Fito pose="acenando" eager />}>
              Oi! Eu sou o Fito. Monto o rascunho do programa, comemoro cada recorde e lembro o
              treino do dia. Quem decide é sempre você.
            </FitoSays>
          </figure>
        </div>
      </section>

      {/* 2 · THE FITO FOR THE PERSONAL — lavender, the only purple surface on the page */}
      <section
        id="ia"
        className="cut-top-rev relative overflow-x-clip"
        style={{ background: `linear-gradient(180deg, ${AI_SOFT} 0%, #ffffff 100%)` }}
      >
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <Kicker color={AI}>O Fito para o personal</Kicker>
              <Title className="max-w-[16em]">
                A IA faz o rascunho.{' '}
                <span className="block" style={{ color: AI }}>
                  Você dá a palavra final.
                </span>
              </Title>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.7]" style={{ color: MUTED }}>
                Montar o programa, ler a avaliação, escrever a cobrança: o que tomava a noite agora
                leva um toque. Tudo o que o Fito escreve chega para você revisar, com o ✦ para saber
                de onde veio.
              </p>
            </div>
            <FitoSays fito={<Fito pose="pensando" />} label="Programa com IA">
              Me conta do aluno: objetivo, dias por semana, tempo, nível, local e dores ou lesões.
              Eu monto um rascunho a partir dos programas revisados. Você revisa e decide.
            </FitoSays>
          </div>

          <Gallery shots={AI_PERSONAL} cols={5} ai />

          <ul className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {AI_RULES.map((r) => (
              <li key={r} className="flex gap-2.5 text-[14px] leading-[1.5]" style={{ color: INK }}>
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: AI }}
                  aria-hidden="true"
                />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13.5px]" style={{ color: MUTED }}>
            Cada plano tem os seus usos de IA por mês: 20 no Grátis, 150 no Pro e 500 no Ilimitado.
            O aluno usa a cota dele, não a sua.
          </p>
        </div>
      </section>

      {/* 3 · FOR THE PERSONAL — the real screens and the morning automations */}
      <section
        id="personal"
        className="cut-top relative overflow-x-clip"
        style={{ background: BG }}
      >
        <div className={WRAP}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={TINT.blue.fg}>Para o personal</Kicker>
              <Title>
                Seus alunos. <span className="block">Num app só.</span>
              </Title>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7]" style={{ color: MUTED }}>
              O caderno, a planilha de treinos, a agenda e a lista de quem já pagou, tudo no
              celular. Estas são as telas do app, com alunos de exemplo.
            </p>
          </div>
          <Gallery shots={PERSONAL_SHOTS} />

          <div className="mt-20 rounded-[32px] bg-white p-7 shadow-[0_24px_60px_-40px_rgba(18,18,20,0.35)] sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <Kicker color={TINT.green.fg}>No piloto automático</Kicker>
                <h3 className="af-display mt-4 text-[clamp(2.3rem,5vw,3.6rem)]">
                  Cobrança, retenção e relacionamento sem você lembrar.
                </h3>
                <p className="mt-4 max-w-md text-[16px] leading-[1.7]" style={{ color: MUTED }}>
                  Todo dia de manhã o Arafit confere quem venceu, quem sumiu e quem faz aniversário,
                  e avisa no celular. Você liga o que quiser e escreve do seu jeito.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-3">
                {AUTOPILOT.map((x) => (
                  <li
                    key={x.t}
                    className="rounded-[22px] p-5"
                    style={{ background: TINT[x.tint].bg }}
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full bg-white"
                      style={{ color: TINT[x.tint].fg }}
                    >
                      <x.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-[18px] font-bold">{x.t}</p>
                    <ul
                      className="mt-2.5 space-y-2 text-[14px] leading-[1.5]"
                      style={{ color: MUTED }}
                    >
                      {x.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <Check
                            className="mt-[0.2em] h-3.5 w-3.5 shrink-0"
                            style={{ color: TINT[x.tint].fg }}
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
          </div>
        </div>
      </section>

      {/* 4 · THE STUDENT'S DAY — from the home screen to the share card, with the Fito celebrating */}
      <section id="aluno" className="cut-top-rev relative overflow-x-clip bg-white">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <Kicker color={TINT.green.fg}>Para o aluno</Kicker>
              <Title className="max-w-[16em]">O programa chega pronto. É só treinar.</Title>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.7]" style={{ color: MUTED }}>
                O mesmo app, do outro lado. O aluno entra com o número que você cadastrou, sem
                senha, e treina pelo seu programa. Para ele, é grátis. Um dia de treino é assim:
              </p>
            </div>
            <FitoSays fito={<Fito pose="comemorando" />} label="Recorde pessoal">
              Opa! Alguém ficou mais forte por aqui! Novo recorde no supino. Eu vi, hein!
            </FitoSays>
          </div>

          <Gallery shots={DAY} />

          <div className="mt-24 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              <Phone
                src="/images/arafit/iphone/aluno-meu-personal.webp"
                alt="Aba Meu personal com WhatsApp, chave Pix, plano mensal pago e próximas aulas"
                className="w-[46%] max-w-[250px] translate-y-6"
              />
              <Phone
                src="/images/arafit/iphone/aluno-avaliacao.webp"
                alt="Avaliação do personal na Evolução da aluna: gordura, massa magra, peso e gráfico"
                className="w-[46%] max-w-[250px]"
              />
            </div>
            <div>
              <h3 className="af-display text-[clamp(2.3rem,5vw,3.6rem)]">
                Do lado do aluno, também.
              </h3>
              <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {STUDENT_EDGES.map((x) => (
                  <li key={x.t} className="flex gap-4">
                    <IconChip icon={x.icon} tint={x.tint} />
                    <div>
                      <p className="text-[17px] font-bold tracking-tight">{x.t}</p>
                      <p className="mt-1 text-[14.5px] leading-[1.6]" style={{ color: MUTED }}>
                        {x.b}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · ARAFIT PESSOAL — for whoever trains without a personal, or beside one */}
      <section
        id="pessoal"
        className="cut-top relative overflow-x-clip"
        style={{ background: `linear-gradient(180deg, ${TINT.green.bg} 0%, ${BG} 100%)` }}
      >
        <span id="sozinho" className="absolute top-0" aria-hidden="true" />
        <div className={`${WRAP} grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20`}>
          <div className="min-w-0">
            <Kicker color={TINT.green.fg}>Para quem treina</Kicker>
            <Title className="max-w-[16em]">Sem personal, ou ao lado dele. Com o Fito.</Title>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.7]" style={{ color: MUTED }}>
              Com o <strong style={{ color: INK }}>Arafit Pessoal</strong> você treina por conta,
              com o mesmo app que os personais usam com os alunos, e o Fito por perto para explicar,
              lembrar e comemorar.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {SOLO.map((x) => (
                <li
                  key={x.t}
                  className={`rounded-[20px] p-4 ${x.ai ? 'border' : ''}`}
                  style={{
                    background: x.ai ? AI_SOFT : '#ffffff',
                    borderColor: x.ai ? AI_BORDER : undefined,
                  }}
                >
                  <p className="flex items-center gap-2.5 text-[16px] font-bold">
                    {x.ai ? (
                      <AiMark size={16} />
                    ) : (
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: TINT[x.tint].fg }}
                        aria-hidden="true"
                      />
                    )}
                    {x.t}
                  </p>
                  <p className="mt-1 text-[14.5px] leading-[1.55]" style={{ color: MUTED }}>
                    {x.b}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-4">
              <p className="af-display text-[clamp(3.4rem,6vw,4.8rem)]">
                <span className="align-top text-[0.36em]">R$</span>4,90
                <span
                  className="ml-1 font-[family-name:var(--font-sans)] text-[0.22em] font-semibold"
                  style={{ color: MUTED }}
                >
                  /mês
                </span>
              </p>
              <p className="max-w-sm text-[14.5px] leading-[1.6]" style={{ color: MUTED }}>
                Se um dia tiver personal, o programa dele entra junto. O que você treina por conta
                continua só seu.
              </p>
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              <Phone
                src="/images/arafit/iphone/aluno-treino.webp"
                alt="Aba Treino com o Fito sugerindo dicas do primeiro exercício e o programa da semana"
                className="w-[46%] max-w-[250px] translate-y-8"
              />
              <Phone
                src="/images/arafit/iphone/ia-aluno-assistente.webp"
                alt="Conversa com o Fito: hoje é o Treino A, ver os exercícios ou montar o programa"
                className="w-[46%] max-w-[250px]"
              />
            </div>
            <FitoSays
              className="mt-14"
              fito={<Fito pose="levantando-peso" />}
              label="Treino do dia"
            >
              Oi, Ana! Hoje é o Treino A, Peito e Abdômen. Quer se preparar?
            </FitoSays>
          </div>
        </div>
      </section>

      {/* 6 · COMPARISON — light table, the only-in-Arafit grid, what every plan has */}
      <section className="cut-top-rev relative overflow-x-clip bg-white">
        <div className={WRAP}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={TINT.pink.fg}>Comparando</Kicker>
              <Title>
                Mais alunos <span className="block">pelo mesmo preço.</span>
              </Title>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7]" style={{ color: MUTED }}>
              Pelo preço que outros cobram por 3 alunos, o Pro do Arafit leva 10. E o que vem junto
              — agenda que cobra, aviso no celular do aluno, treino offline e IA — está aqui, lado a
              lado.
            </p>
          </div>

          {/* Phones: one card per line of the comparison. */}
          <ul className="mt-12 grid gap-4 md:hidden">
            {MATRIX.map((r) => (
              <li
                key={r.label}
                className="rounded-[22px] border p-5"
                style={{ borderColor: '#E6E6EA', background: BG }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: MUTED }}
                >
                  {r.group}
                </p>
                <p className="mt-1 flex items-center gap-2 text-[18px] font-bold">
                  {r.group === 'Com IA' ? <AiMark size={16} /> : null}
                  {r.label}
                </p>
                <dl className="mt-3 grid gap-2 text-[14.5px]">
                  {APPS.map((app, k) => (
                    <div
                      key={app}
                      className="grid grid-cols-[6.8rem_1fr] gap-3 rounded-xl px-2.5 py-2"
                      style={{ background: k === 0 ? '#ffffff' : undefined }}
                    >
                      <dt style={{ color: k === 0 ? INK : MUTED }}>
                        {k === 0 ? <Wordmark className="text-[22px]" /> : app}
                      </dt>
                      <dd className="min-w-0">
                        <CompareCell v={r.cells[k]} ours={k === 0} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>

          <div
            className="mt-14 hidden overflow-x-auto rounded-[24px] border md:block"
            style={{ borderColor: '#E6E6EA' }}
          >
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
                      style={k === 0 ? { background: TINT.coral.bg } : undefined}
                    >
                      {k === 0 ? <Wordmark className="text-[32px]" /> : app}
                    </th>
                  ))}
                </tr>
              </thead>
              {(['Preço por mês', 'O que tem', 'Com IA'] as const).map((group) => (
                <tbody key={group}>
                  <tr className="border-t" style={{ borderColor: '#E6E6EA' }}>
                    <th
                      scope="colgroup"
                      colSpan={5}
                      className="px-5 pb-2 pt-6 text-[11.5px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: MUTED }}
                    >
                      {group}
                    </th>
                  </tr>
                  {MATRIX.filter((r) => r.group === group).map((r) => (
                    <tr key={r.label} className="border-t" style={{ borderColor: '#EFEFF2' }}>
                      <th scope="row" className="px-5 py-4 align-top font-semibold">
                        {r.group === 'Com IA' ? (
                          <span className="flex items-start gap-2">
                            <AiMark size={15} className="mt-[0.2em]" />
                            {r.label}
                          </span>
                        ) : (
                          r.label
                        )}
                      </th>
                      {r.cells.map((c, k) => (
                        <td
                          key={APPS[k]}
                          className="px-5 py-4 align-top"
                          style={k === 0 ? { background: TINT.coral.bg, color: INK } : undefined}
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
          <p className="mt-5 max-w-3xl text-[13px] leading-[1.6]" style={{ color: MUTED }}>
            Com base no que cada empresa publica no próprio site e nas lojas de apps, consultado em
            outubro de 2026; preços e funções podem ter mudado. Um traço (&mdash;) quer dizer que
            não encontramos a função descrita publicamente, não que ela não exista. Confira no site
            de cada um.
          </p>

          <div className="mt-24">
            <Kicker color={TINT.amber.fg}>Só no Arafit</Kicker>
            <h3 className="af-display mt-4 text-[clamp(2.3rem,5vw,3.8rem)]">
              O que você não acha nos outros.
            </h3>
            <InView
              as="ul"
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              threshold={0.1}
            >
              {ONLY.map(({ icon, tint, t, b }, k) => (
                <li
                  key={t}
                  className={`iv iv-up rounded-[24px] border p-6 lg:p-7 ${tint === 'ai' ? '' : 'bg-white'}`}
                  style={{
                    ...i(k),
                    borderColor: tint === 'ai' ? AI_BORDER : '#E6E6EA',
                    background: tint === 'ai' ? AI_SOFT : undefined,
                  }}
                >
                  <IconChip icon={icon} tint={tint} size={48} />
                  <h4 className="mt-5 text-[19px] font-bold tracking-tight">{t}</h4>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: MUTED }}>
                    {b}
                  </p>
                </li>
              ))}
            </InView>
            <p className="mt-4 text-[13px]" style={{ color: MUTED }}>
              Funções que não encontramos no que MFIT Personal, Tecnofit Personal e Mobitrainer
              divulgam (outubro de 2026).
            </p>
          </div>

          <div
            className="mt-20 grid gap-8 rounded-[28px] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
            style={{ background: BG }}
          >
            <h3 className="af-display text-[clamp(2.1rem,4vw,3rem)]">
              Em todos os planos, inclusive o grátis.
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {ALL_PLANS.map((x) => (
                <li key={x} className="flex items-start gap-3 text-[16px] font-semibold">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ background: TINT.green.bg, color: TINT.green.fg }}
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 · PLANS + FOUNDER */}
      <section id="planos" className="cut-top relative overflow-x-clip" style={{ background: BG }}>
        <div className={WRAP}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Kicker color={TINT.teal.fg}>Planos</Kicker>
              <Title>
                Comece com dois alunos. <span className="block">Cresça sem trocar de app.</span>
              </Title>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7]" style={{ color: MUTED }}>
              Avisos de serviço — treino novo, avaliação, recado e cobrança — são livres em todos os
              planos. Os avisos para todos os alunos (uma promoção, um feriado) vêm com o plano.
            </p>
          </div>

          <InView as="ol" className="mt-14 grid gap-4 md:grid-cols-3">
            {TIERS.map((t, k) => {
              const featured = t.id === 'ilimitado';
              return (
                <li
                  key={t.id}
                  className="iv iv-up flex flex-col rounded-[28px] bg-white p-7 sm:p-8"
                  style={{
                    ...i(k * 2),
                    boxShadow: featured
                      ? `inset 0 0 0 2px ${RED}, 0 30px 60px -40px rgba(225,6,0,0.55)`
                      : 'inset 0 0 0 1px #E6E6EA',
                  }}
                >
                  <p
                    className="text-[11.5px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: MUTED }}
                  >
                    Personal · {t.name}
                  </p>
                  <p className="af-display mt-5 text-[clamp(4rem,7vw,5.6rem)]">
                    <span className="align-top text-[0.32em]">R$</span>
                    {t.price}
                    {t.period ? (
                      <span
                        className="ml-1 font-[family-name:var(--font-sans)] text-[0.19em] font-semibold"
                        style={{ color: MUTED }}
                      >
                        {t.period}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-[15px]" style={{ color: MUTED }}>
                    {t.note}
                  </p>
                  <ul
                    className="mt-6 space-y-2.5 border-t pt-6 text-[15.5px] font-semibold"
                    style={{ borderColor: '#EFEFF2' }}
                  >
                    {t.items.map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <Check
                          className="mt-[0.2em] h-4 w-4 shrink-0"
                          style={{ color: x.includes('IA') ? AI : TINT.green.fg }}
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
            className="mt-16 grid gap-12 overflow-hidden rounded-[32px] border p-7 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
            style={{ borderColor: `${GOLD}66`, background: GOLD_CREAM }}
          >
            <div className="min-w-0">
              <Kicker color={GOLD}>Fundador</Kicker>
              <h3 className="af-display mt-4 text-[clamp(2.6rem,5.4vw,4.4rem)]">
                Os 100 primeiros pagam{' '}
                <span style={{ color: GOLD_DEEP }}>R$ 19,90 para sempre.</span>
              </h3>
              <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7]" style={{ color: MUTED }}>
                O Ilimitado inteiro por R$ 19,90 por mês (ou R$ 199 por ano), enquanto a assinatura
                continuar. Cada fundador ganha um número, o selo dourado e a marca do app em
                dourado. A vaga não volta: quem fica mais de 60 dias sem pagar perde o preço de
                fundador.
              </p>
              <div className="mt-8">
                <p className="text-[14px] font-bold" style={{ color: GOLD_DEEP }}>
                  {seats === 0 ? 'Vagas esgotadas' : `Restam ${seats} de ${FOUNDER_SEATS} vagas`}
                </p>
                <div
                  className="mt-3 h-2.5 overflow-hidden rounded-full bg-white"
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
              <div className="mt-9">
                <PrimaryCta href={FOUNDER_HREF}>Quero minha vaga de fundador</PrimaryCta>
              </div>
            </div>
            <figure className="mx-auto w-full max-w-[250px]">
              <Phone
                src="/images/arafit/iphone/personal-fundador.webp"
                alt="Perfil de um personal fundador com o selo Fundador #01 e a marca dourada"
              />
              <figcaption className="mt-4 text-center text-[12.5px]" style={{ color: MUTED }}>
                O selo e a marca dourada de um fundador
              </figcaption>
            </figure>
          </div>

          <div
            className="mt-12 grid gap-4 rounded-[24px] bg-white p-7 sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:gap-8"
            style={{ boxShadow: 'inset 0 0 0 1px #E6E6EA' }}
          >
            <p
              className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.2em]"
              style={{ color: MUTED }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: TINT.green.fg }}
                aria-hidden="true"
              />
              Aluno · Arafit Pessoal
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: MUTED }}>
              Com personal, o aluno usa grátis. O{' '}
              <strong style={{ color: INK }}>Arafit Pessoal</strong> (R$ 4,90/mês) é para quem
              também quer treinar por conta — programas próprios, programas prontos e montar treino
              com o Fito. O personal não vê o que ele treina por conta, e se o vínculo acabar o
              último programa e o histórico ficam com ele.
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-[13px] leading-[1.6]" style={{ color: MUTED }}>
            Assinatura dentro do app, cobrada pela App Store ou pelo Google Play, com renovação
            automática. Cancele nos ajustes da loja até 24 horas antes da renovação. A cobrança que
            você faz dos seus alunos não passa pelo app: ele lembra e registra, e o pagamento é
            entre vocês.
          </p>
        </div>
      </section>

      {/* 8 · COMING TO THE STORES — the warm wash again, closing where the hero opened */}
      <section
        id="contato"
        className="cut-top-rev relative overflow-x-clip"
        style={{ background: `linear-gradient(180deg, #ffffff 0%, ${WASH} 100%)` }}
        aria-labelledby="em-breve-title"
      >
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <Kicker color={TINT.peach.fg}>Em breve</Kicker>
              <h2
                id="em-breve-title"
                className="af-display mt-5 max-w-[14em] text-balance text-[clamp(2.8rem,7.4vw,5.6rem)]"
              >
                Chegando à App Store e ao Google Play.
              </h2>
              <p className="mt-7 max-w-xl text-[17px] leading-[1.7]" style={{ color: MUTED }}>
                O Arafit ainda não está nas lojas. Quer saber quando chegar, garantir uma vaga de
                fundador ou usar com os seus alunos desde o começo? Fale com a gente.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <PrimaryCta href={NOTIFY_HREF}>Quero saber quando chegar</PrimaryCta>
                <Link
                  href="/produtos"
                  className={SECONDARY}
                  style={{ borderColor: '#E6E6EA', color: INK }}
                >
                  Ver outros produtos
                </Link>
              </div>
            </div>
            <FitoSays fito={<Fito still="treino-feito" />}>
              Um treino de cada vez. Te vejo no primeiro!
            </FitoSays>
          </div>
          <nav
            aria-label="Documentos do Arafit"
            className="mt-20 flex flex-col gap-3 border-t pt-6 text-[13.5px] sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: 'rgba(18,18,20,0.12)', color: MUTED }}
          >
            <p>Documentos do Arafit, para as lojas de apps e para a LGPD.</p>
            <span className="flex flex-wrap gap-x-6 gap-y-2 font-semibold" style={{ color: INK }}>
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
    </div>
  );
}
