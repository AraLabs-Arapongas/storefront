import Link from 'next/link';
import Image from 'next/image';
import { RoutineMockup, CollabMockup, HabitsMockup } from '@/components/site/FeatureMockups';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';

const pageTitle = 'Casa Leve — família organizada, juntos';
const pageDescription =
  'Casa Leve é o app da AraLabs pra família: tarefas com pontos, agenda, compras, recompensas, desafios e Pomodoro. Tier Premium libera Cardápio, Finanças e Planner (hábitos, foco do dia, reflexão e visão semanal). Trial de 30 dias. A partir de R$ 9,90/mês.';

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

type FeatherIcon =
  | 'check-square'
  | 'shopping-cart'
  | 'calendar'
  | 'gift'
  | 'star'
  | 'clock'
  | 'coffee'
  | 'dollar-sign'
  | 'activity'
  | 'users'
  | 'home'
  | 'target'
  | 'edit-3'
  | 'bell'
  | 'shield'
  | 'zap';

type AppEntry = {
  key: string;
  titulo: string;
  descricao: string;
  premium: boolean;
};

const APPS: AppEntry[] = [
  {
    key: 'tarefas',
    titulo: 'Tarefas',
    descricao:
      'Recorrentes (diária, quinzenal, mensal, dia da semana), com pontos, hora, foto opcional e aprovação de adulto pra criança.',
    premium: false,
  },
  {
    key: 'compras',
    titulo: 'Compras',
    descricao:
      'Lista compartilhada da casa, catálogo de 300+ itens com emoji, recorrentes semanais, histórico.',
    premium: false,
  },
  {
    key: 'agenda',
    titulo: 'Agenda',
    descricao:
      'Eventos da casa, lembretes 30min antes, push pra todo mundo. Aniversários puxados automaticamente.',
    premium: false,
  },
  {
    key: 'recompensas',
    titulo: 'Recompensas',
    descricao:
      'Pais cadastram prêmios (1h de tela, sorvete, brinquedo). Filhos juntam pontos e resgatam — com ou sem aprovação.',
    premium: false,
  },
  {
    key: 'desafios',
    titulo: 'Desafios',
    descricao:
      'Metas curtas com bônus de pontos ("ler 5 livros até dezembro"). Família compete junto, ranking visível.',
    premium: false,
  },
  {
    key: 'pomodoro',
    titulo: 'Pomodoro',
    descricao:
      'Timer 25/5 com tela acordada enquanto roda, vinculação opcional a uma tarefa, histórico do dia.',
    premium: false,
  },
  {
    key: 'cardapio',
    titulo: 'Cardápio',
    descricao:
      'Planejamento semanal de refeições. Cada dia 4 slots (café, almoço, lanche, jantar). Toda quinta puxa lista de compras dos itens.',
    premium: true,
  },
  {
    key: 'financas',
    titulo: 'Finanças',
    descricao:
      'Contas a pagar com vencimento, mesada gamificada (criança troca pontos por dinheiro), metas com cofrinho compartilhado.',
    premium: true,
  },
  {
    key: 'planner',
    titulo: 'Planner',
    descricao:
      'Hábitos pessoais com streak e heatmap, foco do dia (3 prioridades), reflexão diária e visão semanal.',
    premium: true,
  },
];

const PAPEIS = [
  {
    titulo: 'Admin (dono da casa)',
    icone: '👤',
    body:
      'Configura a casa, convida até 10 membros, define tags, ícones, níveis. Aprova revisões de tarefas. Vê dashboard da família, gastos e pontos de cada um.',
  },
  {
    titulo: 'Adulto',
    icone: '👥',
    body:
      'Cria e edita tarefas, aprova as da criança, vê agenda e cardápio. Tem hábitos pessoais e Pomodoro pra produtividade.',
  },
  {
    titulo: 'Criança',
    icone: '🧒',
    body:
      'Tela simplificada com seu progresso do dia, foco em pontos e desafios. Marca tarefas (com foto se exigir) e resgata recompensas. Sem ajustes complexos.',
  },
];

const PLANNER_FEATURES = [
  {
    icon: 'activity',
    titulo: 'Hábitos pessoais',
    body:
      'Recorrentes só seus (esteira, meditar, ler). Streak diário, heatmap GitHub-style. Sem pontos — só consistência.',
  },
  {
    icon: 'target',
    titulo: 'Foco do dia',
    body:
      'Pin manual em até 3 tarefas/hábitos como prioridades. Aparece no topo da tela inicial.',
  },
  {
    icon: 'edit-3',
    titulo: 'Reflexão diária',
    body:
      '3 perguntas no fim do dia: gratidão, aprendizado, foco pra amanhã. Histórico privado, journaling honest.',
  },
  {
    icon: 'calendar',
    titulo: 'Visão semanal',
    body:
      'Grid 7 dias consolidando tarefas, hábitos, eventos e marcos de desafios. Vê a semana toda de relance.',
  },
];

const TIERS = [
  {
    id: 'essencial',
    nome: 'Casa Leve Essencial',
    preco: 'R$ 9,90',
    periodo: '/mês',
    descricao: 'O básico pra família funcionar',
    features: [
      'Tarefas com pontos e ranking',
      'Lista de compras compartilhada',
      'Agenda da casa',
      'Recompensas',
      'Desafios',
      'Família e ranking',
      'Pomodoro',
      'Push notifications',
      'Até 10 membros por casa',
    ],
    destaque: false,
  },
  {
    id: 'premium',
    nome: 'Casa Leve Premium',
    preco: 'R$ 19,90',
    periodo: '/mês',
    descricao: 'Tudo do Essencial + apps premium',
    features: [
      'Tudo do Essencial',
      '🥗 Cardápio (planejamento de refeições)',
      '💰 Finanças (contas, mesada, metas)',
      '📔 Planner (hábitos, foco, reflexão, semana)',
    ],
    destaque: true,
  },
];

const PRINCIPIOS = [
  {
    titulo: 'Menos cobrança',
    body:
      'O sistema mostra o que precisa ser feito. Ninguém precisa ficar lembrando ninguém.',
  },
  {
    titulo: 'Mais clareza',
    body:
      'Responsabilidades e acordos ficam visíveis. Todo mundo enxerga o mesmo.',
  },
  {
    titulo: 'Mais autonomia',
    body:
      'Crianças acompanham sua rotina com incentivo, não com pressão.',
  },
  {
    titulo: 'Sem burocracia',
    body:
      'Rápido de usar no dia a dia. Profundo na leitura do problema.',
  },
];

const COMOFUNCIONA = [
  {
    n: '01',
    titulo: 'Cria sua casa',
    body:
      'Faz login com email (sem senha — código de 6 dígitos). Sua casa aparece pronta com 30 dias grátis liberando tudo do Premium.',
  },
  {
    n: '02',
    titulo: 'Convida a família',
    body:
      'Adiciona até 10 membros (esposa, filhos, sogros, faxineira). Define o papel de cada um — adulto ou criança. Eles entram pelo email convite.',
  },
  {
    n: '03',
    titulo: 'Configura rotina',
    body:
      'Cria tarefas recorrentes (diárias, semanais, quinzenais, mensais), define pontos, atribui pra alguém ou rotaciona. Recompensas e desafios pra premiar.',
  },
  {
    n: '04',
    titulo: 'Família roda junto',
    body:
      'Cada um vê suas tarefas hoje, marca quando faz. Pontos somam, ranking aparece, push avisa do que importa. Adulto aprova quando criança termina.',
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
          operatingSystem: 'iOS, Android',
        })}
      />

      {/* Hero banner */}
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

      {/* Hero copy */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
          <div className="flex max-w-3xl flex-col">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              Beta privado · TestFlight aberto
            </p>
            <h1 className="mt-5 text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[42px] lg:text-[52px]">
              <span className="font-serif italic text-[color:var(--gold-soft)]">Casa Leve</span> —
              família organizada, juntos.
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[18px]">
              9 apps integrados pra rotina familiar: tarefas com pontos, compras, agenda,
              recompensas, desafios, finanças, cardápio, hábitos e Pomodoro. Sem cobrança,
              com clareza, com autonomia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
              >
                Ver planos →
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50"
              >
                Pedir acesso ao beta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Para quem é
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Desenhado para{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">famílias</span> que
              querem rodar com menos atrito.
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[17px]">
              Casa de casal com filhos. Pais separados que dividem responsabilidades. Trabalho
              remoto + filhos em casa. Mãe ou pai sozinho querendo dividir o jogo com as
              crianças. Avós próximos, sogros, faxineira — todo mundo cabe (até 10 pessoas
              na mesma casa).
            </p>
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

      {/* Como funciona — 4 passos */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Como funciona
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              4 passos pra{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">tirar do papel</span>.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {COMOFUNCIONA.map((step) => (
              <article key={step.n} className="bg-[color:var(--bg-elev)] p-7">
                <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                  {step.n}
                </span>
                <h3 className="mt-6 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {step.titulo}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Papéis na casa */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Papéis na casa
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Cada um vê o que{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">faz sentido</span>{' '}
              pra ele.
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)]">
              A interface adapta automaticamente. Criança não vê configuração de plano. Adulto
              não vê dashboard de admin. Cada papel tem o foco certo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PAPEIS.map((p) => (
              <article
                key={p.titulo}
                className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7"
              >
                <span className="text-3xl">{p.icone}</span>
                <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Apps */}
      <section id="apps" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              9 apps integrados
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Tudo que sua casa precisa{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">num app só</span>.
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)]">
              6 apps no plano Essencial. Mais 3 apps premium liberados no plano Premium.
              Os dados são compartilhados — uma tarefa pode virar pomodoro, um item de cardápio
              vira lista de compras, etc.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {APPS.map((app) => (
              <article
                key={app.key}
                className="relative rounded-[20px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6 transition hover:border-[color:var(--gold)]/40"
              >
                {app.premium && (
                  <span className="absolute right-4 top-4 rounded-full bg-[color:var(--gold)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--gold-soft)]">
                    ✨ Premium
                  </span>
                )}
                <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {app.titulo}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {app.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Planner spotlight */}
      <section className="border-b border-[color:var(--line)] bg-gradient-to-b from-[color:var(--bg-elev)] to-[color:var(--surface-deep)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              Destaque · Premium
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              <span className="font-serif italic text-[color:var(--gold-soft)]">Planner</span> — seu
              canto pessoal dentro da casa.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[17px]">
              Tarefa é pra família. Hábito é pra você. O Planner reúne suas práticas pessoais
              de auto-melhoria — sem pontos, sem ranking. Só consistência.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLANNER_FEATURES.map((f) => (
              <article
                key={f.titulo}
                className="rounded-[20px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6"
              >
                <h3 className="text-[16px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {f.titulo}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mockups */}
      <section id="features" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Em ação
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              No celular,{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">todo dia</span>.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', title: 'Rotina da casa', body: 'Tarefas hoje, streak de dias em chamas, recompensas perto.', mockup: <RoutineMockup /> },
              { n: '02', title: 'Família junto', body: 'Ranking, gastos, eventos da semana. Quem é responsável por quê.', mockup: <CollabMockup /> },
              { n: '03', title: 'Hábitos pessoais', body: 'Heatmap, streak por hábito, reflexão diária privada.', mockup: <HabitsMockup /> },
            ].map((f) => (
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

      {/* Pricing */}
      <section id="pricing" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-14 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Planos
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Trial de 30 dias com{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">tudo</span>{' '}
              liberado.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
              Cobrança por casa, não por usuário. Convidados não pagam. Cancela quando quiser.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {TIERS.map((tier) => (
              <article
                key={tier.id}
                className={`relative rounded-[24px] border p-8 ${
                  tier.destaque
                    ? 'border-[color:var(--gold)]/60 bg-[color:var(--bg-elev-2)] shadow-[0_40px_120px_rgba(217,168,74,0.15)]'
                    : 'border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]'
                }`}
              >
                {tier.destaque && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[color:var(--gold)] px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] text-[color:var(--on-gold)]">
                    Recomendado
                  </span>
                )}
                <h3 className="text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {tier.nome}
                </h3>
                <p className="mt-2 text-[14px] text-[color:var(--ink-muted)]">{tier.descricao}</p>
                <p className="mt-6 text-[40px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {tier.preco}
                  <span className="text-[16px] font-normal text-[color:var(--ink-muted)]">
                    {tier.periodo}
                  </span>
                </p>
                <ul className="mt-7 space-y-3 border-t border-[color:var(--line)] pt-7">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[14px] text-[color:var(--ink-muted)]"
                    >
                      <span className="mt-0.5 text-[color:var(--gold-soft)]">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-[13px] text-[color:var(--ink-dim)]">
            * Crianças e adultos convidados são gratuitos · até 10 membros por casa · cobrança via App Store
          </p>
        </div>
      </section>

      {/* Princípios */}
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
            {PRINCIPIOS.map((p, i) => (
              <article
                key={p.titulo}
                className="group bg-[color:var(--bg-elev)] p-8 transition hover:bg-[color:var(--bg-elev-2)]"
              >
                <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                  0{i + 1}
                </span>
                <h3 className="mt-10 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.titulo}
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
      <section id="contato" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--line-strong)] bg-gradient-to-br from-[color:var(--bg-elev-2)] via-[color:var(--bg-elev)] to-[color:var(--surface-deep)] px-8 py-14 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.18),transparent_70%)]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                  — Acesso ao beta
                </p>
                <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                  Quer testar antes do lançamento?
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                  Casa Leve está em beta privado no TestFlight (iOS). Mande seu email e a
                  gente te coloca no próximo grupo de convidados — sem custo durante o beta.
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
                  href="mailto:contato@aralabs.com.br?subject=Beta%20Casa%20Leve"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
                >
                  Pedir acesso ao beta →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10 lg:py-12">
          <div className="flex flex-col gap-2 text-[13.5px] text-[color:var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              Documentos legais do Casa Leve — exigidos para distribuição em loja e em
              conformidade com a LGPD.
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/produtos/casa-leve/privacidade"
                className="text-[color:var(--gold-soft)] transition hover:text-[color:var(--gold)]"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/produtos/casa-leve/termos"
                className="text-[color:var(--gold-soft)] transition hover:text-[color:var(--gold)]"
              >
                Termos de Uso
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
