import { Check } from 'lucide-react';
import { InView } from '@/components/home/InView';
import { cssI } from '@/components/site/AppHero';

/*
 * Sono Leve's own moments. Texts in the mockups are the app's own (pt-BR catalog); names and
 * values are examples, marked as such on the page. The progression is the "Ferber clássico"
 * preset exactly as it ships in the app.
 */

export const NIGHT_BG = '#121735';
export const NIGHT_DEEP = '#0b1020';
export const LAVENDER = '#c8b6ff';

/** Ferber clássico, as shipped (src/data/presets.ts in the app): minutes per check-in, per night. */
export const FERBER_CLASSICO = [
  [3, 5, 10],
  [5, 10, 12],
  [10, 12, 15],
  [12, 15, 17],
  [15, 17, 20],
  [17, 20, 25],
  [20, 25, 30],
];

/** Night sky behind the hero and the dark sections: lavender moon glow, a few stars, the lattice. */
export function NightSky() {
  return (
    <>
      <div className="absolute right-[-8%] top-[-26%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(200,182,255,0.22),transparent_70%)]" />
      <div className="pa-stars absolute inset-0" />
      <div className="pa-tri-grid-light absolute inset-0 opacity-70" />
    </>
  );
}

/** Hero: the timer between check-ins, as the app shows it in the dark. */
export function NightTimer() {
  const r = 84;
  const c = 2 * Math.PI * r;
  return (
    <figure className="relative mx-auto w-full max-w-[400px] lg:ml-auto lg:mr-6">
      <div
        className="relative rotate-[1.5deg] rounded-[34px] border border-white/10 p-6 text-[#eef0fb] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] sm:p-7"
        style={{ background: NIGHT_DEEP }}
      >
        <p className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b91b3]">
          <span>Ana · ep 1 · check 2/3</span>
          <span className="rounded-full border border-white/12 px-2 py-0.5 normal-case tracking-normal">
            ⏸ pausar
          </span>
        </p>
        <div className="relative mx-auto mt-6 grid aspect-square w-[min(72%,230px)] place-items-center">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full -rotate-90"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r={r} fill="none" stroke="#22284a" strokeWidth="10" />
            <circle
              className="pa-sl-ring"
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={LAVENDER}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={c}
              style={{ ['--c' as string]: c, strokeDashoffset: c * 0.28 }}
            />
          </svg>
          <span className="text-center">
            <span className="block text-[clamp(2.6rem,9vw,3.4rem)] font-bold tabular-nums leading-none tracking-tight">
              08:38
            </span>
            <span className="mt-2 block text-[12px] text-[#8b91b3]">até o próximo check-in</span>
          </span>
        </div>
        <p className="mt-6 text-center text-[14px] text-[#c9cde6]">deixe Ana tentar se acalmar</p>
        <div className="mt-5 rounded-2xl bg-white/[0.05] px-4 py-3">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#8b91b3]">
            Enquanto espera
          </p>
          <p className="mt-1 text-[13px] text-[#c9cde6]">fique fora do quarto</p>
        </div>
        <p
          className="mt-4 rounded-2xl px-4 py-3 text-center text-[14px] font-semibold text-[#1a1640]"
          style={{ background: LAVENDER }}
        >
          Ana acalmou
          <span className="block text-[11.5px] font-medium opacity-70">
            voltar pra monitoramento
          </span>
        </p>
        <p className="mt-4 text-center text-[10.5px] text-[#8b91b3]">
          auxiliar — sempre supervisione o bebê de perto
        </p>
      </div>
      <div
        className="pa-in absolute top-[30%] hidden rounded-2xl sm:-left-28 bg-white px-4 py-3 text-[#1a1640] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)] sm:block lg:-left-40"
        style={cssI(6)}
      >
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#6b6f92]">
          Ferber clássico · noite 3
        </p>
        <p className="mt-1 flex items-baseline gap-2 text-[15px] font-semibold tabular-nums text-[#6b6f92]">
          10<span aria-hidden="true">·</span>
          <span
            className="rounded-md px-1.5 text-[18px] font-bold text-[#1a1640]"
            style={{ background: '#e7e0ff' }}
          >
            12
          </span>
          <span aria-hidden="true">·</span>15 <span className="text-[12px] font-medium">min</span>
        </p>
      </div>
      <figcaption className="mt-5 text-center text-[12px] text-white/60">
        Interface ilustrativa · nome de exemplo
      </figcaption>
    </figure>
  );
}

/** The seven nights of Ferber clássico as bars; they rise night by night when scrolled to. */
export function ProgressionChart() {
  const max = 30;
  return (
    <InView threshold={0.3}>
      <div
        role="img"
        aria-label="Ferber clássico: noite 1, 3, 5 e 10 minutos; noite 2, 5, 10 e 12; noite 3, 10, 12 e 15; noite 4, 12, 15 e 17; noite 5, 15, 17 e 20; noite 6, 17, 20 e 25; noite 7, 20, 25 e 30."
        className="grid grid-cols-7 items-end gap-2 sm:gap-4 lg:gap-6"
      >
        {FERBER_CLASSICO.map((night, n) => (
          <div key={n} className="flex flex-col">
            <div className="flex h-[200px] items-end gap-[3px] sm:h-[280px] sm:gap-1.5 lg:h-[340px]">
              {night.map((m, k) => (
                <div key={k} className="flex h-full flex-1 flex-col justify-end">
                  <span className="mb-1.5 hidden text-center text-[11px] font-semibold tabular-nums text-white/60 sm:block">
                    {m}
                  </span>
                  <span
                    className="pa-sl-bar block rounded-t-[6px] sm:rounded-t-[8px]"
                    style={{
                      height: `${(m / max) * 100}%`,
                      background: n === 2 ? LAVENDER : `rgba(200,182,255,${0.28 + k * 0.14})`,
                      ...cssI(n * 1.5 + k * 0.4),
                    }}
                  />
                </div>
              ))}
            </div>
            <p
              className={`mt-3 border-t pt-2 text-[11px] font-semibold sm:text-[12.5px] ${
                n === 2 ? 'border-[#c8b6ff] text-white' : 'border-white/20 text-white/55'
              }`}
            >
              <span className="hidden sm:inline">Noite </span>
              <span className="sm:hidden">N</span>
              {n + 1}
            </p>
          </div>
        ))}
      </div>
    </InView>
  );
}

const RITUAL = [
  { t: 'Banho morno', done: true },
  { t: 'Mamada / jantinha', done: true },
  { t: 'Troca de fralda / pijama', done: true },
  { t: 'Luz baixa no quarto', done: false },
  { t: 'História ou música calma', done: false },
];

/** The bedtime ritual as a checklist that ticks itself off. */
export function RitualMock({ ink }: { ink: string }) {
  let d = 0;
  return (
    <InView
      className="w-full rounded-[28px] bg-[#fffaf3] p-6 shadow-[0_30px_60px_-34px_rgba(36,29,21,0.5)]"
      threshold={0.4}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
        Ritual pré-sono
      </p>
      <ul className="mt-4 space-y-2">
        {RITUAL.map((r) => {
          const k = r.done ? d++ : 0;
          return (
            <li
              key={r.t}
              className="flex items-center gap-3 rounded-2xl bg-[color:var(--bg)] px-3.5 py-3 text-[14px]"
            >
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${r.done ? 'cl-check' : ''}`}
                style={{ borderColor: ink, background: r.done ? ink : 'transparent', ...cssI(k) }}
              >
                {r.done ? (
                  <Check
                    className="cl-check-icon iv h-3 w-3 text-white"
                    strokeWidth={3.5}
                    style={cssI(k + 3)}
                  />
                ) : null}
              </span>
              <span
                className={`font-semibold ${r.done ? 'cl-done block w-fit text-[color:var(--ink-dim)]' : 'text-[color:var(--ink)]'}`}
                style={r.done ? cssI(k) : undefined}
              >
                {r.t}
              </span>
            </li>
          );
        })}
      </ul>
    </InView>
  );
}

/** Dashboard: minutes until asleep over a week (example values, one hard night in the middle). */
export function HistoryMock({ ink }: { ink: string }) {
  const nights = [42, 35, 38, 24, 51, 19, 15];
  const avg = Math.round(nights.reduce((a, b) => a + b, 0) / nights.length);
  return (
    <InView
      className="w-full rounded-[28px] bg-[#fffaf3] p-6 shadow-[0_30px_60px_-34px_rgba(36,29,21,0.5)]"
      threshold={0.4}
    >
      <div className="flex items-baseline justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
          Minutos até dormir
        </p>
        <p className="text-[12px] text-[color:var(--ink-dim)]">últimas 7 noites</p>
      </div>
      <p
        className="mt-3 text-[30px] font-bold tabular-nums leading-none tracking-tight"
        style={{ color: ink }}
      >
        {avg} min{' '}
        <span className="text-[13px] font-medium text-[color:var(--ink-dim)]">em média</span>
      </p>
      <div className="relative mt-5 flex h-[140px] items-end gap-2.5">
        {nights.map((m, k) => (
          <span
            key={k}
            className="pa-sl-bar block flex-1 rounded-t-[8px]"
            style={{
              height: `${(m / 55) * 100}%`,
              background: k === 4 ? '#c9c3e6' : ink,
              opacity: k === 4 ? 1 : 0.55 + k * 0.07,
              ...cssI(k * 0.6),
            }}
          />
        ))}
      </div>
      <p className="mt-4 text-[13px] leading-[1.5] text-[color:var(--ink-muted)]">
        Noite difícil acontece. A tendência da semana continua ali.
      </p>
    </InView>
  );
}
