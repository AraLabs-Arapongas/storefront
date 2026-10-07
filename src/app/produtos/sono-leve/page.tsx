import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Smartphone, Milk, TriangleAlert } from 'lucide-react';
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
  HistoryMock,
  LAVENDER,
  NIGHT_BG,
  NightSky,
  NightTimer,
  ProgressionChart,
  RitualMock,
} from '@/components/products/sono-leve/SonoVisuals';

const sonoLeve = productBySlug('sono-leve');
const pageDescription =
  'Treino de sono do bebê com o método Ferber: timer com os intervalos de cada noite, registro de despertares e mamadas. Sem conta, dados só no celular.';

export const metadata = pageMetadata({
  path: '/produtos/sono-leve',
  title: 'Sono Leve: app de treino de sono do bebê (Ferber)',
  description: pageDescription,
  image: '/produtos/sono-leve/opengraph-image',
});

const NOTIFY = contactHref('Quero saber quando o Sono Leve sair');

const NIGHT = [
  {
    n: '01',
    title: 'Ritual da hora de dormir',
    body: 'Uma lista simples do que vem antes de dormir, para a noite começar igual, não importa quem está colocando o bebê.',
  },
  {
    n: '02',
    title: 'Timer com os check-ins',
    body: 'O app mostra quanto esperar antes de ir até o bebê. Os intervalos crescem a cada noite da progressão, sem conta de cabeça no escuro.',
  },
  {
    n: '03',
    title: 'Registro da noite',
    body: 'Cada despertar, cada check-in e as mamadas ficam anotados com poucos toques, com aviso para a próxima mamada.',
  },
  {
    n: '04',
    title: 'Histórico e painel',
    body: 'Minutos até dormir e número de despertares, noite a noite. Uma noite difícil não apaga a semana que deu certo.',
  },
];

/** The timer's own states, in the order a night goes through them (texts from the app). */
const STATES = [
  {
    t: 'monitorando',
    body: 'Bebê no berço, você fora do quarto. Se dormir, um toque em “dormiu”.',
  },
  {
    t: 'até o próximo check‑in',
    body: 'Começou a chorar: o timer conta o intervalo daquela noite. Você só espera.',
  },
  { t: 'hora de checar', body: 'O intervalo zerou. Olhe e ouça antes de entrar.' },
  { t: 'no quarto', body: 'Voz calma, luz apagada. Passou de 1 minuto, o app avisa: saia agora.' },
];

const PROMISES = [
  {
    icon: HeartHandshake,
    title: 'Estrutura, não milagre',
    body: 'O app não promete que o bebê vai dormir em tantos dias. Ele organiza o método que a família escolheu e mostra o que aconteceu.',
  },
  {
    icon: ShieldCheck,
    title: 'Vocês decidem',
    body: 'Parar, pegar no colo ou trocar de método é sempre uma opção válida. O Sono Leve anota e segue junto, sem julgamento.',
  },
  {
    icon: Milk,
    title: 'Lembrete de mamada',
    body: 'O aviso é calculado a partir da última mamada registrada e do intervalo que vocês definirem.',
  },
  {
    icon: Smartphone,
    title: 'Dados só no celular',
    body: 'Sem conta, sem nuvem e sem anúncios. O que você registra sobre o bebê não sai do aparelho.',
  },
];

export default function SonoLevePage() {
  const ink = sonoLeve.colorInk;
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/sono-leve',
          name: 'Sono Leve',
          description: pageDescription,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'iOS',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: sonoLeve.name }])}
      />

      {/* 1 · HERO — night, the timer between check-ins */}
      <AppHero
        product={sonoLeve}
        tone="night"
        background={NIGHT_BG}
        backdrop={<NightSky />}
        title={
          <>
            Treino de sono, <span style={{ color: LAVENDER }}>com calma e com dados.</span>
          </>
        }
        lead={
          <p>
            Para quem escolheu o treino de sono gradual, como o método Ferber: o ritual, o tempo de
            cada check-in e o registro de cada noite no mesmo lugar. Sem chute e sem caderno.
          </p>
        }
        actions={
          <>
            <AppButton href={NOTIFY} bg={LAVENDER} fg="#1a1640">
              Me avise quando sair
            </AppButton>
            <AppButton href="#noite" variant="ghost-dark">
              Como funciona
            </AppButton>
          </>
        }
        note="iPhone · Sem conta · Funciona offline · Dados ficam no celular"
        aside={<NightTimer />}
      />

      {/* 2 · AVISO — kept prominent, right under the opening */}
      <section
        className="cut-top"
        style={{ background: sonoLeve.colorSoft }}
        aria-label="Aviso importante"
      >
        <div className="mx-auto flex max-w-[1240px] gap-4 px-6 py-9 lg:px-10 lg:py-11">
          <TriangleAlert
            aria-hidden="true"
            className="mt-0.5 h-6 w-6 shrink-0"
            style={{ color: ink }}
          />
          <p className="max-w-4xl text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[16.5px]">
            <strong className="text-[color:var(--ink)]">Não é conselho médico.</strong> O Sono Leve
            é uma ferramenta de apoio e não substitui o pediatra nem a supervisão direta do bebê.
            Converse com o pediatra antes de começar um treino de sono. Em emergência, ligue{' '}
            <strong className="text-[color:var(--ink)]">192 (SAMU)</strong>.
          </p>
        </div>
      </section>

      {/* 3 · UMA NOITE — the four parts along the night, then the ritual and the history */}
      <section id="noite" className="overflow-x-clip" aria-labelledby="sl-noite">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={ink}>Uma noite com o Sono Leve</AppKicker>
          <h2
            id="sl-noite"
            className="display mt-6 max-w-[17ch] text-[clamp(2.6rem,6.2vw,5.6rem)] text-[color:var(--ink)]"
          >
            Do ritual ao último despertar, <span style={{ color: ink }}>num lugar só.</span>
          </h2>
          <InView
            as="ol"
            className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8"
          >
            <span
              aria-hidden="true"
              className="pa-sl-axis absolute left-0 right-0 top-[11px] hidden lg:block"
            />
            {NIGHT.map((s, k) => (
              <li key={s.n} className="iv iv-up relative" style={cssI(k * 2)}>
                <span className="relative flex w-fit items-center gap-3 bg-[color:var(--bg)] pr-3">
                  <span className="tri text-[18px]" style={{ color: ink }} aria-hidden="true" />
                  <span
                    className="text-[12px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: ink }}
                  >
                    {s.n}
                  </span>
                </span>
                <h3 className="mt-6 text-[22px] font-bold leading-[1.2] tracking-tight text-[color:var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {s.body}
                </p>
              </li>
            ))}
          </InView>
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:mt-28 lg:gap-12">
            <div className="md:-rotate-[1.5deg]">
              <RitualMock ink={ink} />
            </div>
            <div className="md:mt-16 md:rotate-[1.5deg]">
              <HistoryMock ink={ink} />
            </div>
          </div>
          <MockCaption className="mt-8 text-center">
            Interface ilustrativa · valores de exemplo
          </MockCaption>
        </div>
      </section>

      {/* 4 · A PROGRESSÃO — night again; the preset as it ships, then the timer's states */}
      <section
        className="cut-top overflow-x-clip text-white"
        style={{ background: NIGHT_BG }}
        aria-labelledby="sl-progressao"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <NightSky />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <AppKicker color={LAVENDER}>A progressão</AppKicker>
              <h2
                id="sl-progressao"
                className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,6.2vw,5.6rem)]"
              >
                O intervalo cresce <span style={{ color: LAVENDER }}>sozinho, noite a noite.</span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-white/75">
              Você escolhe o método e o app sabe em que noite está. Às três da manhã, ninguém
              precisa lembrar de tabela.
            </p>
          </div>
          <div className="mt-14 lg:mt-20">
            <ProgressionChart />
            <p className="mt-6 text-[13px] leading-[1.6] text-white/60">
              Minutos de espera antes de cada check-in no Ferber clássico, como vem no app. O Ferber
              suave começa com 1, 2 e 3 minutos.
            </p>
          </div>

          <InView
            as="ol"
            className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/12 bg-white/12 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4"
          >
            {STATES.map((s, k) => (
              <li
                key={s.t}
                className="iv iv-up p-6 lg:p-7"
                style={{ background: NIGHT_BG, ...cssI(k * 2) }}
              >
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  <span
                    className="tri tri-r text-[7px]"
                    style={{ color: LAVENDER }}
                    aria-hidden="true"
                  />
                  Tela {k + 1}
                </span>
                <p
                  className="mt-4 text-[22px] font-bold leading-[1.15] tracking-tight"
                  style={{ color: LAVENDER }}
                >
                  {s.t}
                </p>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/75">{s.body}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 5 · COMO A GENTE PENSA */}
      <section
        className="cut-top-rev overflow-x-clip bg-[color:var(--bg)]"
        aria-labelledby="sl-pensa"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={ink}>Como a gente pensa</AppKicker>
          <h2
            id="sl-pensa"
            className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,6.4vw,5.8rem)] text-[color:var(--ink)]"
          >
            Feito para pais cansados, <span style={{ color: ink }}>não para pais perfeitos.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
            Treino de sono é uma decisão da família e não serve para todo bebê. O app não toma lado,
            não pressiona e não cobra resultado. Ele tira a conta de cabeça e a dúvida do caminho. E
            para o resto do dia, o Casa Leve cuida das tarefas, das compras e da{' '}
            <Link
              href="/produtos/casa-leve"
              className="font-semibold underline underline-offset-4"
              style={{ color: ink }}
            >
              rotina da família
            </Link>
            .
          </p>
          <ul className="mt-14 grid gap-x-14 border-t border-[color:var(--line-strong)] md:grid-cols-2 lg:mt-20">
            {PROMISES.map((r) => (
              <li
                key={r.title}
                className="flex gap-5 border-b border-[color:var(--line-strong)] py-8"
              >
                <r.icon
                  className="mt-1 h-6 w-6 shrink-0"
                  style={{ color: ink }}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-[21px] font-bold tracking-tight text-[color:var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {r.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 · PRIVACIDADE + DISPONIBILIDADE — night to close */}
      <section
        className="cut-top overflow-x-clip text-white"
        style={{ background: NIGHT_BG }}
        aria-labelledby="sl-privacidade"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <NightSky />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <AppKicker color={LAVENDER}>Privacidade</AppKicker>
          <h2
            id="sl-privacidade"
            className="display mt-6 max-w-[15ch] text-[clamp(2.8rem,6.6vw,6rem)]"
          >
            O sono do seu bebê <span style={{ color: LAVENDER }}>não é dado de ninguém.</span>
          </h2>
          <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="max-w-lg text-[17px] leading-[1.7] text-white/80">
                Bebê, método, noites e mamadas ficam num banco de dados local, dentro do app. Não
                tem login, não tem servidor e nada é compartilhado com terceiros. Como não existe
                cópia fora do aparelho, apagar o app apaga os dados junto.
              </p>
              <div className="mt-10">
                <AppLegalLinks product={sonoLeve} onDark />
              </div>
            </div>
            <div className="border-t border-white/20 pt-8">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                <span
                  aria-hidden="true"
                  className="shimmer h-2 w-2 rounded-full"
                  style={{ background: LAVENDER }}
                />
                {sonoLeve.statusNote ?? sonoLeve.status}
              </p>
              <p className="mt-5 text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold leading-[1.15] tracking-tight">
                Quer saber quando o Sono Leve sair?
              </p>
              <p className="mt-4 text-[16px] leading-[1.7] text-white/75">
                O app para iPhone foi enviado para a App Store em 3 de outubro de 2026 e está em
                revisão pela Apple. Assim que for aprovado, o link para baixar aparece nesta página.
                Mande uma mensagem e a gente avisa. Se você já passou por um treino de sono, sua
                experiência ajuda a gente a fazer um app melhor.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AppButton href={NOTIFY} bg={LAVENDER} fg="#1a1640">
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
