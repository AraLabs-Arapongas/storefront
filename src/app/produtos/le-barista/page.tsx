import type { Metadata } from 'next';
import {
  Coffee,
  Filter,
  FlaskConical,
  Milk,
  CupSoda,
  ListChecks,
  Scale,
  SlidersHorizontal,
  Timer,
  ChartColumn,
  Smartphone,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';
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
  BrewPhones,
  DiagnosisPhones,
  LeBaristaHeroPhones,
  ScreensGallery,
} from '@/components/products/le-barista/LeBaristaVisuals';

const barista = productBySlug('le-barista');
const pageTitle = 'Le Barista — espresso no ponto, passo a passo, no iPhone';
const pageDescription =
  'Le Barista é o app da AraLabs para quem faz café em casa: registre cada shot de espresso e receba um ajuste por vez, com o porquê, até o café ficar no ponto. Também tem guias de V60, Chemex, AeroPress, leite vaporizado e bebidas. Gratuito, sem anúncios e sem conta; os dados ficam no iPhone. Em revisão na App Store.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/le-barista' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/le-barista',
    type: 'website',
  },
};

const NOTIFY = contactHref('Quero saber quando o Le Barista sair');
/** Light caramel for type on the brown and dark sections. */
const CREMA = '#f3cf98';

/** The guides, each with its own way of brewing. */
const GUIDES = [
  {
    icon: Coffee,
    title: 'Espresso',
    body: 'Tempo, dose, rendimento, moagem, sabor e corpo de cada shot. O diagnóstico devolve um ajuste por vez até acertar.',
  },
  {
    icon: Filter,
    title: 'Coados',
    body: 'V60, Melitta e Chemex com a agenda de despejos na tela: a pré-infusão e cada etapa “até X g”, no tempo certo.',
  },
  {
    icon: FlaskConical,
    title: 'Imersão',
    body: 'AeroPress e prensa francesa, com timer para o contato e o momento de prensar.',
  },
  {
    icon: Milk,
    title: 'Leite',
    body: 'Leite vaporizado passo a passo, com uma lista de sintomas para entender o que deu errado na textura.',
  },
  {
    icon: CupSoda,
    title: 'Bebidas',
    body: 'Cappuccino, moccaccino e café gelado, montados a partir do espresso que você já acertou.',
  },
];

const FEATURES = [
  {
    icon: SlidersHorizontal,
    title: 'Um ajuste de cada vez',
    body: 'Moagem, dose ou rendimento: o diagnóstico sugere uma mudança só, para você saber o que fez efeito.',
  },
  {
    icon: Scale,
    title: 'Com ou sem balança',
    body: 'O app pergunta o que você tem. Sem balança, ele trabalha em ml; sem moedor regulável, ele ajusta pela dose e pelo rendimento.',
  },
  {
    icon: Timer,
    title: 'Timers e ilustrações',
    body: 'Cada guia tem ilustrações animadas e timer, e a tela fica acesa enquanto o timer corre.',
  },
  {
    icon: ListChecks,
    title: 'Experimento das 3 xícaras',
    body: 'Um exercício de prova para reconhecer acidez, doçura e amargor, e descrever melhor o que está na xícara.',
  },
  {
    icon: ChartColumn,
    title: 'Seu histórico',
    body: 'Espressos tirados, cafés no ponto, tempo médio, % no alvo, dias seguidos e o gráfico dos últimos 7 dias.',
  },
  {
    icon: Smartphone,
    title: 'Tudo no aparelho',
    body: 'Sem conta, sem servidor da AraLabs e sem internet. O app não faz nenhuma requisição de rede.',
  },
];

export default function LeBaristaPage() {
  const ink = barista.colorInk;
  const price = barista.offer.split(' · ')[0];
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/le-barista',
          name: 'Le Barista',
          description: pageDescription,
          applicationCategory: 'FoodAndDrinkApplication',
          operatingSystem: 'iOS',
        })}
      />

      {/* 1 · HERO — the app itself, three real screens */}
      <AppHero
        product={barista}
        titleSize="xl"
        backdrop={
          <>
            <div className="absolute right-[-10%] top-[-30%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(138,90,59,0.18),transparent_70%)]" />
            <div className="tri-grid absolute inset-0" />
          </>
        }
        title={
          <>
            O espresso <span style={{ color: ink }}>no ponto.</span>
          </>
        }
        lead={
          <p>
            Depois de cada shot, você conta o tempo, o peso e o gosto. O Le Barista devolve um
            ajuste só, com o porquê, e acompanha você até o café ficar como deveria. Sem tabela
            decorada e sem chute.
          </p>
        }
        actions={
          <>
            <AppButton href={NOTIFY} bg={ink} fg="#fff">
              Me avise quando sair
            </AppButton>
            <AppButton href="#guias" variant="ghost">
              O que dá para preparar
            </AppButton>
          </>
        }
        note={`${price} · iPhone · Sem conta · Sem anúncios`}
        aside={<LeBaristaHeroPhones />}
      />

      {/* 2 · GUIAS — full coffee brown, the ways to brew as giant words */}
      <section
        id="guias"
        className="cut-top overflow-x-clip text-white"
        style={{ background: ink }}
        aria-labelledby="lb-guias"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-[-15%] top-[5%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <AppKicker color={CREMA}>O que dá para preparar</AppKicker>
          <h2 id="lb-guias" className="display mt-6 max-w-[17ch] text-[clamp(2.6rem,6vw,5.4rem)]">
            Do espresso ao coado,{' '}
            <span style={{ color: CREMA }}>com um passo a passo para cada um.</span>
          </h2>
          <InView as="ul" className="mt-14 border-t border-white/25 lg:mt-20" threshold={0.2}>
            {GUIDES.map((g, n) => (
              <li
                key={g.title}
                className="iv iv-up grid gap-3 border-b border-white/25 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:gap-10 lg:py-7"
                style={cssI(n)}
              >
                <p className="flex items-center gap-4 sm:gap-6">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full sm:h-14 sm:w-14"
                    style={{ background: 'rgba(27,19,16,0.3)', color: APP.caramel }}
                  >
                    <g.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="display text-[clamp(2.6rem,7vw,6rem)]">{g.title}</span>
                </p>
                <p className="max-w-md text-[16px] leading-[1.65] text-white/80">{g.body}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3 · DIAGNÓSTICO — one change at a time */}
      <section className="overflow-x-clip" aria-labelledby="lb-diagnostico">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <AppKicker color={ink}>Diagnóstico</AppKicker>
            <h2
              id="lb-diagnostico"
              className="display mt-6 max-w-[13ch] text-[clamp(2.6rem,6vw,5.4rem)] text-[color:var(--ink)]"
            >
              Um ajuste por vez, <span style={{ color: ink }}>com o porquê.</span>
            </h2>
            <p className="mt-8 max-w-lg text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              Ácido, equilibrado ou amargo? Rápido ou demorado? Com o que você registrou, o app
              sugere uma mudança só (cliques no moedor, dose ou rendimento) e explica o motivo. No
              shot seguinte, você vê se funcionou.
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-[color:var(--ink-dim)]">
              Se o moedor já está no mais fino, o diagnóstico passa a mexer na dose e no rendimento.
              Se você usa WDT ou tela de dispersão, esses passos entram no preparo.
            </p>
          </div>
          <DiagnosisPhones />
        </div>
      </section>

      {/* 4 · COMO FUNCIONA — the app's own dark */}
      <section
        className="cut-top overflow-x-clip"
        style={{ background: APP.bg, color: APP.text }}
        aria-labelledby="lb-como"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-[-12%] top-[-10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(227,168,87,0.14),transparent_70%)]" />
          <div className="pa-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <AppKicker color={APP.caramel}>Como funciona</AppKicker>
              <h2 id="lb-como" className="display mt-6 text-[clamp(2.6rem,5.6vw,5rem)]">
                Seu equipamento, <span style={{ color: APP.caramel }}>suas receitas.</span>
              </h2>
              <p className="mt-8 max-w-lg text-[17px] leading-[1.7] text-white/70">
                No Perfil, você conta o que tem: máquina, tamanho do filtro, balança, moedor, WDT e
                tela de dispersão. Os guias se adaptam a isso, e as receitas que deram certo ficam
                salvas para a próxima vez.
              </p>
            </div>
            <div>
              <BrewPhones />
              <MockCaption onDark className="mt-6 text-center">
                Telas do app · dados de exemplo
              </MockCaption>
            </div>
          </div>
          <ul className="mt-16 grid gap-x-12 border-t border-white/12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-4 border-b border-white/12 py-7">
                <f.icon
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: APP.caramel }}
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

      {/* 5 · VEJA POR DENTRO — every screen, in a row you can scroll */}
      <section className="overflow-x-clip pb-20 lg:pb-28" aria-labelledby="lb-telas">
        <div className="mx-auto max-w-[1240px] px-6 pt-24 lg:px-10 lg:pt-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <AppKicker color={ink}>Veja por dentro</AppKicker>
              <h2
                id="lb-telas"
                className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,6vw,5.4rem)] text-[color:var(--ink)]"
              >
                Sete telas, <span style={{ color: ink }}>um café melhor.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-[1.7] text-[color:var(--ink-dim)]">
              Telas do app no iPhone, com dados de exemplo.{' '}
              <span className="lg:hidden">Arraste para o lado para ver todas.</span>
              <span className="hidden lg:inline">
                Role para o lado, ou clique na faixa e use as setas do teclado.
              </span>
            </p>
          </div>
        </div>
        <ScreensGallery labelledBy="lb-telas" />
      </section>

      {/* 6 · PRIVACIDADE + DISPONIBILIDADE — brown to close */}
      <section
        className="cut-top-rev overflow-x-clip text-white"
        style={{ background: ink }}
        aria-labelledby="lb-privacidade"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute bottom-[-30%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <AppKicker color={CREMA}>Privacidade</AppKicker>
          <InView as="h2" className="display mt-6 text-[clamp(3.2rem,9vw,8.4rem)]">
            <span id="lb-privacidade" className="iv iv-word inline-block" style={cssI(0)}>
              Seu café
            </span>{' '}
            <span className="iv iv-word inline-block" style={{ color: CREMA, ...cssI(2) }}>
              fica com você.
            </span>
          </InView>
          <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="max-w-lg text-[17px] leading-[1.7] text-white/85">
                Equipamento, cafés, shots, receitas, favoritos e perfil ficam num banco de dados
                local no seu iPhone. Não tem login, não tem anúncio, não tem rastreamento e o app
                não pede nenhuma permissão. Como não existe cópia fora do aparelho, apagar o app
                apaga os dados junto.
              </p>
              <div className="mt-10">
                <AppLegalLinks product={barista} onDark />
              </div>
            </div>
            <div className="border-t border-white/25 pt-8">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                <span aria-hidden="true" className="shimmer h-2 w-2 rounded-full bg-white" />
                {barista.statusNote ?? barista.status}
              </p>
              <p className="mt-5 text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold leading-[1.15] tracking-tight">
                Quer saber quando o Le Barista sair?
              </p>
              <p className="mt-4 text-[16px] leading-[1.7] text-white/80">
                O app para iPhone foi enviado para a App Store em 6 de outubro de 2026 e está em
                revisão pela Apple. Assim que for aprovado, o link para baixar aparece nesta página.
                Mande uma mensagem e a gente avisa. Sugestões de guias e bebidas também são
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
