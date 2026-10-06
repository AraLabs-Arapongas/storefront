import { Coffee, Scale, Sparkles, Timer } from 'lucide-react';
import { InView } from '@/components/home/InView';
import { cssI } from '@/components/site/AppHero';

/*
 * Le Barista's own moments, in the app's own palette (dark roast brown, cream line art, caramel
 * accent). Times, weights and the grinder setting are examples, marked as such on the page.
 */

export const APP = {
  bg: '#1b1310',
  surface: '#261b16',
  line: '#3e2e25',
  text: '#f4eadf',
  text2: '#c9b8a8',
  text3: '#9a8676',
  caramel: '#e3a857',
  green: '#9ccf8a',
} as const;

const DAYS = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

/** Simple cup in line art, cream on the dark background. */
function CupArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 96"
      className={className}
      fill="none"
      stroke={APP.text}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M44 10 c-6 8 6 12 0 20" opacity="0.55" />
      <path d="M60 6 c-6 8 6 12 0 20" opacity="0.55" />
      <path d="M76 10 c-6 8 6 12 0 20" opacity="0.55" />
      <path d="M26 38 h68 v14 a30 30 0 0 1 -30 30 h-8 a30 30 0 0 1 -30 -30 z" />
      <path d="M94 44 h6 a10 10 0 0 1 0 20 h-8" />
      <path d="M30 42 h60" stroke={APP.caramel} strokeWidth="5" />
      <path d="M14 88 h92" />
    </svg>
  );
}

/** Hero: a shot just pulled, timer on target, with what was recorded. */
export function ShotTimer() {
  // 0–40 s track; the target window is 25–30 s.
  const pct = (s: number) => `${(s / 40) * 100}%`;
  return (
    <figure className="relative mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-4">
      <InView
        className="relative rotate-[-1.5deg] rounded-[34px] p-6 shadow-[0_40px_80px_-34px_rgba(27,19,16,0.8)] sm:p-7"
        threshold={0.2}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[34px]"
          style={{ background: APP.bg }}
        />
        <div className="relative" style={{ color: APP.text }}>
          <div className="flex items-start justify-between gap-4">
            <p
              className="flex items-center gap-2 text-[14px] font-semibold"
              style={{ color: APP.caramel }}
            >
              <Timer className="h-4 w-4" /> Espresso · shot 3
            </p>
            <CupArt className="-mt-1 h-12 w-14 shrink-0" />
          </div>
          <p className="mt-3 text-[clamp(3.4rem,9vw,4.6rem)] font-bold tabular-nums leading-none tracking-tight">
            27 s
          </p>
          <p
            className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-semibold"
            style={{ background: 'rgba(227,168,87,0.16)', color: APP.caramel }}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ background: APP.caramel }}
            />
            No alvo
          </p>
          <div className="relative mt-6 h-2.5 rounded-full" style={{ background: APP.line }}>
            <span
              aria-hidden="true"
              className="absolute inset-y-0 rounded-full"
              style={{
                left: pct(25),
                width: pct(5),
                background: 'rgba(227,168,87,0.4)',
              }}
            />
            <span
              aria-hidden="true"
              className="pa-jd-fill absolute inset-y-0 left-0 rounded-full"
              style={{ width: pct(27), background: APP.caramel }}
            />
          </div>
          <div
            className="mt-2 flex justify-between text-[11.5px] tabular-nums"
            style={{ color: APP.text3 }}
          >
            <span>0 s</span>
            <span style={{ color: APP.text2 }}>alvo 25–30 s</span>
            <span>40 s</span>
          </div>
          <dl className="mt-6 grid grid-cols-3 gap-2">
            {[
              ['Dose', '18 g'],
              ['Rendimento', '36 g'],
              ['Moagem', '7'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl p-3" style={{ background: APP.surface }}>
                <dt
                  className="text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: APP.text3 }}
                >
                  {k}
                </dt>
                <dd className="mt-1 text-[18px] font-bold tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </InView>
      <figcaption className="mt-5 text-center text-[12px] text-[color:var(--ink-dim)]">
        Interface ilustrativa · valores de exemplo
      </figcaption>
    </figure>
  );
}

/** Diagnosis: what the shot tasted like, and the one adjustment that comes back. */
export function DiagnosisCard() {
  const tastes = ['Ácido', 'Equilibrado', 'Amargo'];
  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div
        className="rounded-[34px] p-5 shadow-[0_40px_80px_-34px_rgba(27,19,16,0.75)] sm:p-6"
        style={{ background: APP.bg, color: APP.text }}
      >
        <p className="text-[13px] font-semibold" style={{ color: APP.text2 }}>
          Como ficou o sabor?
        </p>
        <ul className="mt-3 grid grid-cols-3 gap-2" aria-label="Sabor: ácido">
          {tastes.map((t, k) => (
            <li
              key={t}
              className="rounded-full py-2 text-center text-[13px] font-semibold"
              style={
                k === 0
                  ? { background: APP.caramel, color: APP.bg }
                  : { border: `1.5px solid ${APP.line}`, color: APP.text3 }
              }
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12.5px]" style={{ color: APP.text3 }}>
          Shot de 19 s · 18 g → 40 g · moagem 9
        </p>
        <div className="mt-5 rounded-2xl p-5" style={{ background: APP.surface }}>
          <p
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: APP.caramel }}
          >
            <Sparkles className="h-3.5 w-3.5" /> Próximo ajuste
          </p>
          <p className="mt-3 text-[clamp(1.5rem,4vw,1.85rem)] font-bold leading-tight tracking-tight">
            Moa 2 cliques mais fino
          </p>
          <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: APP.text2 }}>
            Rápido demais e ácido: a água passou sem extrair o suficiente. Moagem mais fina segura o
            fluxo e alonga o tempo. Mantenha dose e rendimento iguais.
          </p>
        </div>
      </div>
      <figcaption className="mt-5 text-center text-[12px] text-[color:var(--ink-dim)]">
        Interface ilustrativa · valores de exemplo
      </figcaption>
    </figure>
  );
}

/** The recipe that landed, next to the week's brews. */
export function RecipeAndWeek() {
  const week = [2, 3, 1, 0, 2, 4, 3];
  const max = 4;
  return (
    <InView className="grid gap-4 sm:grid-cols-2" threshold={0.3}>
      <div className="rounded-[28px] p-6" style={{ background: APP.surface, color: APP.text }}>
        <p
          className="flex items-center gap-2 text-[13px] font-semibold"
          style={{ color: APP.text2 }}
        >
          <Coffee className="h-4 w-4" style={{ color: APP.caramel }} /> Receita no ponto
        </p>
        <p className="mt-6 flex items-baseline gap-3 text-[clamp(2.4rem,6vw,3.2rem)] font-bold tabular-nums leading-none tracking-tight">
          18 g <span style={{ color: APP.caramel }}>→</span> 36 g
        </p>
        <p className="mt-3 text-[13px]" style={{ color: APP.text2 }}>
          Proporção 1:2 · moagem 7 · 27 s
        </p>
        <p
          className="mt-6 flex items-center gap-2 border-t pt-4 text-[12.5px]"
          style={{ borderColor: APP.line, color: APP.text3 }}
        >
          <Scale className="h-4 w-4" /> Sem balança? O app troca gramas por ml.
        </p>
      </div>
      <div className="rounded-[28px] p-6" style={{ background: APP.surface, color: APP.text }}>
        <p className="text-[13px] font-semibold" style={{ color: APP.text2 }}>
          Preparos na semana
        </p>
        <div className="relative mt-6 flex h-[132px] items-end gap-2">
          {week.map((m, k) => (
            <span
              key={k}
              className="pa-sl-bar block flex-1 rounded-t-[7px]"
              style={{
                height: m ? `${(m / max) * 100}%` : '3px',
                background: m ? APP.caramel : APP.line,
                ...cssI(k * 0.6),
              }}
            />
          ))}
        </div>
        <div
          className="mt-2 grid grid-cols-7 gap-2 text-center text-[11px] font-semibold"
          style={{ color: APP.text3 }}
        >
          {DAYS.map((d, k) => (
            <span key={k}>{d}</span>
          ))}
        </div>
        <p className="mt-4 text-[12.5px]" style={{ color: APP.text2 }}>
          15 preparos · 80% dos espressos no alvo
        </p>
      </div>
    </InView>
  );
}
