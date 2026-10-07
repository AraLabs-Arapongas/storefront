import {
  BookOpen,
  GraduationCap,
  Repeat,
  Footprints,
  Music,
  Timer,
  Flame,
  Target,
  ChartColumn,
  BellRing,
  Smartphone,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, softwareApplicationSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { InView } from '@/components/home/InView';
import {
  AppButton,
  AppHero,
  AppKicker,
  AppLegalLinks,
  MockCaption,
  cssI,
} from '@/components/site/AppHero';
import {
  APP,
  FocusAndWeek,
  IsbnScan,
  WeekStreak,
} from '@/components/products/jornadas/JornadasVisuals';

const jornadas = productBySlug('jornadas');
const pageDescription =
  'Acompanhe livros, cursos e hábitos com sessões de foco, sequência de dias e meta semanal. Grátis, sem anúncios e sem conta. Para iPhone.';

export const metadata = pageMetadata({
  path: '/produtos/jornadas',
  title: 'Jornadas: app de hábitos e metas de leitura',
  description: pageDescription,
  image: '/produtos/jornadas/opengraph-image',
});

const NOTIFY = contactHref('Quero saber quando o Jornadas sair');
/** Light teal for type on the teal and dark sections. */
const MINT = '#9fe3d8';

/** Each kind keeps the accent the app gives it (rings, icons, bars). */
const KINDS = [
  {
    icon: BookOpen,
    color: APP.gold,
    title: 'Livros',
    body: 'Busque pelo título ou escaneie o código de barras (ISBN) na contracapa. Título, autor, páginas e capa vêm sozinhos.',
  },
  {
    icon: GraduationCap,
    color: APP.blue,
    title: 'Cursos',
    body: 'Aquele curso online ou presencial que você começou, com o tempo que dedica a ele toda semana.',
  },
  {
    icon: Repeat,
    color: APP.ember,
    title: 'Hábitos',
    body: 'Meditar, alongar, estudar um idioma: o que você quer repetir até virar rotina.',
  },
  {
    icon: Footprints,
    color: APP.red,
    title: 'Corrida',
    body: 'Os treinos da semana como parte da jornada, lado a lado com o resto das suas metas.',
  },
  {
    icon: Music,
    color: APP.green,
    title: 'Música',
    body: 'O violão, o piano, a voz. Sessões curtas e frequentes contam mais do que uma longa por mês.',
  },
];

const FEATURES = [
  {
    icon: Timer,
    title: 'Sessões de foco',
    body: 'Um timer para cada sessão. Ao terminar, o tempo entra na jornada e no seu histórico.',
  },
  {
    icon: Flame,
    title: 'Sequência de dias',
    body: 'Quantos dias seguidos você apareceu. Um empurrão discreto para não quebrar a corrente.',
  },
  {
    icon: Target,
    title: 'Meta semanal',
    body: 'Você define quanto quer dedicar por dia e acompanha, na semana, o quanto já cumpriu.',
  },
  {
    icon: ChartColumn,
    title: 'Gráficos de progresso',
    body: 'Tempo por dia, dias ativos e o avanço de cada objetivo, para ver a evolução de verdade.',
  },
  {
    icon: BellRing,
    title: 'Lembretes',
    body: 'Avisos no horário que você escolher, gerados no próprio iPhone. Dá para desligar quando quiser.',
  },
  {
    icon: Smartphone,
    title: 'Tudo no aparelho',
    body: 'Sem conta e sem servidor da AraLabs. Só o texto da busca de livros sai do iPhone, para achar o título.',
  },
];

export default function JornadasPage() {
  const ink = jornadas.colorInk;
  const price = jornadas.offer.split(' · ')[0];
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/jornadas',
          name: 'Jornadas',
          description: pageDescription,
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'iOS',
          offer: 'free',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: jornadas.name }])}
      />

      {/* 1 · HERO — the week filling in, one day at a time */}
      <AppHero
        product={jornadas}
        titleSize="xl"
        titlePrefix="Jornadas: livros, cursos e hábitos."
        backdrop={
          <>
            <div className="absolute right-[-10%] top-[-30%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(14,124,116,0.16),transparent_70%)]" />
            <div className="tri-grid absolute inset-0" />
          </>
        }
        title={
          <>
            Um dia <span style={{ color: ink }}>de cada vez.</span>
          </>
        }
        lead={
          <p>
            Livros, cursos, hábitos, corrida e música. Cada objetivo vira uma jornada com sessões de
            foco, sequência de dias e meta semanal, e você vê o progresso crescer sem planilha nem
            caderno.
          </p>
        }
        actions={
          <>
            <AppButton href={NOTIFY} bg={ink} fg="#fff">
              Me avise quando sair
            </AppButton>
            <AppButton href="#jornadas" variant="ghost">
              O que dá para acompanhar
            </AppButton>
          </>
        }
        note={`${price} · iPhone · Sem conta · Sem anúncios`}
        aside={<WeekStreak />}
      />

      {/* 2 · TIPOS — full teal, five kinds as giant words */}
      <section
        id="jornadas"
        className="cut-top overflow-x-clip text-white"
        style={{ background: ink }}
        aria-labelledby="jd-tipos"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-[-15%] top-[5%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <AppKicker color={MINT}>O que dá para acompanhar</AppKicker>
          <h2 id="jd-tipos" className="display mt-6 max-w-[17ch] text-[clamp(2.6rem,6vw,5.4rem)]">
            Uma jornada para cada coisa que você{' '}
            <span style={{ color: MINT }}>quer levar até o fim.</span>
          </h2>
          <InView as="ul" className="mt-14 border-t border-white/25 lg:mt-20" threshold={0.2}>
            {KINDS.map((k, n) => (
              <li
                key={k.title}
                className="iv iv-up grid gap-3 border-b border-white/25 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:gap-10 lg:py-7"
                style={cssI(n)}
              >
                <p className="flex items-center gap-4 sm:gap-6">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full sm:h-14 sm:w-14"
                    style={{ background: 'rgba(11,17,24,0.28)', color: k.color }}
                  >
                    <k.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="display text-[clamp(2.6rem,7vw,6rem)]">{k.title}</span>
                </p>
                <p className="max-w-md text-[16px] leading-[1.65] text-white/80">{k.body}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3 · ISBN — a book in one move */}
      <section className="overflow-x-clip" aria-labelledby="jd-isbn">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <AppKicker color={ink}>Livros</AppKicker>
            <h2
              id="jd-isbn"
              className="display mt-6 max-w-[13ch] text-[clamp(2.6rem,6vw,5.4rem)] text-[color:var(--ink)]"
            >
              Aponte a câmera <span style={{ color: ink }}>para a contracapa.</span>
            </h2>
            <p className="mt-8 max-w-lg text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              O código de barras (ISBN) basta: título, autor, número de páginas e capa vêm da Open
              Library, com edições em português primeiro. Se preferir, busque pelo título.
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-[color:var(--ink-dim)]">
              É a única coisa que sai do iPhone: o texto da busca, para achar o livro. O resto da
              jornada fica no aparelho.
            </p>
          </div>
          <IsbnScan />
        </div>
      </section>

      {/* 4 · COMO FUNCIONA — the app's own dark */}
      <section
        className="cut-top overflow-x-clip"
        style={{ background: APP.bg, color: APP.text }}
        aria-labelledby="jd-como"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-[-12%] top-[-10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(246,200,76,0.14),transparent_70%)]" />
          <div className="pa-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
            <div>
              <AppKicker color={APP.gold}>Como funciona</AppKicker>
              <h2 id="jd-como" className="display mt-6 text-[clamp(2.6rem,5.6vw,5rem)]">
                Aparecer um pouco todo dia{' '}
                <span style={{ color: APP.gold }}>é o que faz a diferença.</span>
              </h2>
              <p className="mt-8 max-w-lg text-[17px] leading-[1.7] text-white/70">
                O Jornadas não cobra, não compara você com ninguém e não promete milagre. Ele só
                deixa visível o tempo que você dedicou, para você decidir o próximo passo.
              </p>
            </div>
            <div>
              <FocusAndWeek />
              <MockCaption onDark className="mt-4">
                Interface ilustrativa · valores de exemplo
              </MockCaption>
            </div>
          </div>
          <ul className="mt-16 grid gap-x-12 border-t border-white/12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-4 border-b border-white/12 py-7">
                <f.icon
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: APP.gold }}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-[19px] font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-white/65">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 · PRIVACIDADE + DISPONIBILIDADE — teal to close */}
      <section
        className="cut-top-rev overflow-x-clip text-white"
        style={{ background: ink }}
        aria-labelledby="jd-privacidade"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute bottom-[-30%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <AppKicker color={MINT}>Privacidade</AppKicker>
          <InView as="h2" className="display mt-6 text-[clamp(3.2rem,9vw,8.4rem)]">
            <span id="jd-privacidade" className="iv iv-word inline-block" style={cssI(0)}>
              Suas metas
            </span>{' '}
            <span className="iv iv-word inline-block" style={{ color: MINT, ...cssI(2) }}>
              são suas.
            </span>
          </InView>
          <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="max-w-lg text-[17px] leading-[1.7] text-white/85">
                Jornadas, sessões, fotos de capa e perfil ficam no armazenamento do app no seu
                iPhone. Não tem login, não tem anúncio e não tem rastreamento. Como não existe cópia
                fora do aparelho, apagar o app apaga os dados junto.
              </p>
              <div className="mt-10">
                <AppLegalLinks product={jornadas} onDark />
              </div>
            </div>
            <div className="border-t border-white/25 pt-8">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                <span aria-hidden="true" className="shimmer h-2 w-2 rounded-full bg-white" />
                {jornadas.statusNote ?? jornadas.status}
              </p>
              <p className="mt-5 text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold leading-[1.15] tracking-tight">
                Quer saber quando o Jornadas sair?
              </p>
              <p className="mt-4 text-[16px] leading-[1.7] text-white/80">
                O app para iPhone foi enviado para a App Store em 3 de outubro de 2026 e está em
                revisão pela Apple. Assim que for aprovado, o link para baixar aparece nesta página.
                Mande uma mensagem e a gente avisa. Sugestões de tipos de jornada também são
                bem-vindas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AppButton href={NOTIFY} bg="#fff" fg={ink}>
                  Me avise
                </AppButton>
                <AppButton href="/produtos" variant="ghost-dark">
                  Ver os outros produtos
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
