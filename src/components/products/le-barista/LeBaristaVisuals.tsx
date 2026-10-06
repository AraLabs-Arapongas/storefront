import { PhoneFrame } from '@/components/site/PhoneFrame';
import { cssI } from '@/components/site/AppHero';

/*
 * Le Barista's own screens: real iPhone 17 Pro Max captures from the app (example data: the
 * coffee, the grams, the grinder setting), plus the animated splash as a short muted loop.
 */

export const APP = {
  bg: '#1b1310',
  text: '#f4eadf',
  caramel: '#e3a857',
} as const;

const DIR = '/images/le-barista';

export const SCREENS = [
  {
    src: `${DIR}/1-inicio.png`,
    title: 'Início',
    caption: 'Retome o café de onde parou, com favoritos e seus números.',
    alt: 'Tela inicial do Le Barista: continuar o Etiópia Sidamo, favoritos e estatísticas',
  },
  {
    src: `${DIR}/2-cronometro.png`,
    title: 'Cronômetro',
    caption: 'Conta o shot e avisa a hora de parar a máquina.',
    alt: 'Cronômetro do espresso em 27 segundos, com o aviso “No alvo: pode parar”',
  },
  {
    src: `${DIR}/3-diagnostico.png`,
    title: 'Diagnóstico',
    caption: 'Um ajuste só, com o porquê e a próxima extração.',
    alt: 'Diagnóstico sugerindo moer 1 clique mais fino, com o resumo da próxima extração',
  },
  {
    src: `${DIR}/4-passo-moagem.png`,
    title: 'Passo a passo',
    caption: 'Cada etapa diz o que fazer e por que esse número.',
    alt: 'Passo do preparo: moa no 4, com a explicação de onde vem o número',
  },
  {
    src: `${DIR}/5-v60.png`,
    title: 'V60',
    caption: 'Os despejos na tela: quanto e quando, até o fim.',
    alt: 'Timer da V60 em 50 segundos, no primeiro despejo até 149 gramas',
  },
  {
    src: `${DIR}/6-metodos.png`,
    title: 'Métodos',
    caption: 'Todos os guias num lugar, com os favoritos no topo.',
    alt: 'Lista de métodos com espresso, V60 e cappuccino marcados como favoritos',
  },
  {
    src: `${DIR}/7-onboarding.png`,
    title: 'Boas-vindas',
    caption: 'Você tira, prova e conta; o app diz o que mudar.',
    alt: 'Tela de boas-vindas: vamos tirar o seu melhor espresso',
  },
] as const;

type ScreenTitle = (typeof SCREENS)[number]['title'];
const screen = (title: ScreenTitle) => SCREENS.find((s) => s.title === title)!;

const SPLASH = { src: `${DIR}/splash-loop.mp4`, poster: `${DIR}/splash-loop-poster.jpg` };

/** Hero: the home in front, the animated splash and the diagnosis fanned out behind it. */
export function LeBaristaHeroPhones() {
  const home = screen('Início');
  const diag = screen('Diagnóstico');
  return (
    <figure className="relative mx-auto w-full max-w-[min(540px,68svh)] lg:mr-0">
      <div
        aria-hidden="true"
        className="absolute inset-x-[4%] bottom-[6%] top-[4%] rounded-full bg-[radial-gradient(closest-side,rgba(227,168,87,0.3),transparent_72%)]"
      />
      <div className="relative aspect-[1/1.02]">
        <div className="pa-in absolute left-[-3%] top-[12%] w-[40%]" style={cssI(2)}>
          <PhoneFrame
            video={SPLASH}
            alt="Abertura animada do app: a máquina enche a xícara"
            sizes="(min-width: 1024px) 210px, 38vw"
            tilt={-8}
          />
        </div>
        <div className="pa-in absolute right-[-3%] top-[15%] w-[40%]" style={cssI(3)}>
          <PhoneFrame
            src={diag.src}
            alt={diag.alt}
            sizes="(min-width: 1024px) 210px, 38vw"
            tilt={8}
          />
        </div>
        <div className="pa-in absolute left-[28%] top-0 z-10 w-[44%]" style={cssI(1)}>
          <PhoneFrame
            src={home.src}
            alt={home.alt}
            sizes="(min-width: 1024px) 250px, 46vw"
            priority
          />
        </div>
      </div>
      <figcaption className="relative mt-6 text-center text-[12px] text-[color:var(--ink-dim)]">
        Telas do app · dados de exemplo
      </figcaption>
    </figure>
  );
}

/** Diagnosis section: the verdict in front, the guided grinder step behind it. */
export function DiagnosisPhones() {
  const diag = screen('Diagnóstico');
  const step = screen('Passo a passo');
  return (
    <figure className="relative mx-auto w-full max-w-[460px]">
      <div className="relative aspect-[1/1.06]">
        <div className="absolute left-0 top-[8%] w-[44%]">
          <PhoneFrame
            src={step.src}
            alt={step.alt}
            sizes="(min-width: 1024px) 200px, 44vw"
            tilt={-6}
          />
        </div>
        <div className="absolute right-[2%] top-0 z-10 w-[50%]">
          <PhoneFrame
            src={diag.src}
            alt={diag.alt}
            sizes="(min-width: 1024px) 230px, 50vw"
            tilt={3}
          />
        </div>
      </div>
      <figcaption className="mt-6 text-center text-[12px] text-[color:var(--ink-dim)]">
        Telas do app · dados de exemplo
      </figcaption>
    </figure>
  );
}

/** How-it-works section: the espresso timer and the V60 pour schedule, side by side. */
export function BrewPhones() {
  const timer = screen('Cronômetro');
  const v60 = screen('V60');
  return (
    <div className="relative mx-auto grid w-full max-w-[460px] grid-cols-2 gap-5 sm:gap-8">
      <div
        aria-hidden="true"
        className="absolute inset-[-12%] rounded-full bg-[radial-gradient(closest-side,rgba(227,168,87,0.22),transparent_70%)]"
      />
      <PhoneFrame
        src={timer.src}
        alt={timer.alt}
        sizes="(min-width: 640px) 215px, 44vw"
        shadow="deep"
        tilt={-2}
      />
      <PhoneFrame
        src={v60.src}
        alt={v60.alt}
        sizes="(min-width: 640px) 215px, 44vw"
        shadow="deep"
        tilt={2}
        className="mt-12"
      />
    </div>
  );
}

/** "Veja por dentro": every screen in a scroll-snapping row, staggered on desktop. */
export function ScreensGallery({ labelledBy }: { labelledBy: string }) {
  return (
    <div
      role="region"
      aria-labelledby={labelledBy}
      // Focusable so the row also scrolls with the arrow keys.
      tabIndex={0}
      className="pa-lb-strip mt-12 snap-x snap-mandatory overflow-x-auto scroll-px-6 px-6 pb-10 pt-4 lg:mt-16 lg:scroll-px-[max(2.5rem,calc((100%-1240px)/2+2.5rem))] lg:px-[max(2.5rem,calc((100%-1240px)/2+2.5rem))]"
    >
      <ol className="flex w-max gap-6 sm:gap-8">
        {SCREENS.map((s, n) => (
          <li
            key={s.src}
            className="w-[62vw] max-w-[250px] shrink-0 snap-start sm:w-[230px] lg:w-[240px] lg:even:mt-16"
          >
            <PhoneFrame src={s.src} alt={s.alt} sizes="(min-width: 640px) 240px, 62vw" />
            <p className="mt-7 flex items-baseline gap-2.5">
              <span className="text-[12px] font-semibold tabular-nums text-[color:var(--ink-dim)]">
                {String(n + 1).padStart(2, '0')}
              </span>
              <span className="text-[17px] font-bold tracking-tight text-[color:var(--ink)]">
                {s.title}
              </span>
            </p>
            <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[color:var(--ink-muted)]">
              {s.caption}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
