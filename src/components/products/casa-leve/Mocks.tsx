import type { CSSProperties } from 'react';
import { Camera, Check, Flame, Gift, IceCreamCone, Target } from 'lucide-react';
import { productBySlug } from '@/lib/products';

/*
 * Illustrative Casa Leve UI in HTML/CSS. The hero animates on load (pk-load-*); the rest reacts
 * inside an <InView> on the page. Names and numbers are examples, labelled as such on the page.
 */

const d = (ms: number) => ({ '--d': ms }) as CSSProperties;
const i = (n: number) => ({ '--i': n }) as CSSProperties;
const cl = () => productBySlug('casa-leve');

const MEMBERS = [
  { n: 'Mãe', c: '#a85a17' },
  { n: 'Pai', c: '#36407a' },
  { n: 'Lia', c: '#d1497a' },
  { n: 'Theo', c: '#0e7c74' },
];

function Avatar({ n, c, size = 30 }: { n: string; c: string; size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full font-bold text-white"
      style={{ background: c, width: size, height: size, fontSize: size * 0.36 }}
    >
      {n.slice(0, 1)}
    </span>
  );
}

/** Hero: today's tasks ticking themselves off, the points going to the reward. */
export function HeroHouse() {
  const p = cl();
  const tasks = [
    { t: 'Arrumar a cama', who: MEMBERS[2], pts: 10 },
    { t: 'Dar comida ao gato', who: MEMBERS[3], pts: 5 },
    { t: 'Guardar os brinquedos', who: MEMBERS[3], pts: 10 },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:mr-0">
      <div className="pk-load-up rotate-[1.5deg] rounded-[28px] bg-[#fffaf3] p-5 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(110,50,0,0.45)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
              Hoje na casa
            </p>
            <p className="mt-0.5 text-[19px] font-bold tracking-tight">Rotina da família</p>
          </div>
          <span
            className="pk-load-pop rounded-full px-2.5 py-1 text-[11.5px] font-bold text-white"
            style={{ background: p.colorInk, ...d(2500) }}
          >
            +25 pts
          </span>
        </div>
        <ul className="mt-4 flex gap-3">
          {MEMBERS.map((m) => (
            <li
              key={m.n}
              className="flex flex-col items-center gap-1 text-[10.5px] font-semibold text-[color:var(--ink-muted)]"
            >
              <Avatar {...m} size={34} />
              {m.n}
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-2">
          {tasks.map((r, k) => (
            <li
              key={r.t}
              className="flex items-center gap-3 rounded-2xl bg-[color:var(--bg)] px-3 py-2.5 text-[13.5px]"
            >
              <span
                className="pk-load-on grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 text-white"
                style={{ background: p.colorInk, borderColor: p.colorInk, ...d(700 + k * 450) }}
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{r.t}</span>
                <span className="block text-[11.5px] text-[color:var(--ink-dim)]">{r.who.n}</span>
              </span>
              <span className="text-[12.5px] font-bold" style={{ color: p.colorInk }}>
                +{r.pts}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* The child's side: points turning into a reward. */}
      <div
        className="pk-load-pop relative z-10 mx-auto mt-4 w-[min(86%,250px)] -rotate-[3deg] rounded-[22px] bg-[color:var(--dark)] p-4 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] lg:absolute lg:-bottom-24 lg:-left-32 lg:mt-0"
        style={d(2800)}
      >
        <div className="flex items-center gap-3">
          <Avatar {...MEMBERS[2]} size={36} />
          <p className="leading-tight">
            <span className="block text-[11px] text-white/60">Lia</span>
            <span className="text-[24px] font-extrabold tracking-tight">128</span>{' '}
            <span className="text-[12px] text-white/70">pontos</span>
          </p>
        </div>
        <p className="mt-3 flex items-center gap-2 text-[12.5px] font-semibold">
          <IceCreamCone className="h-4 w-4 text-[#f6c86b]" /> Noite do sorvete
          <span className="ml-auto text-white/60">200</span>
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-[64%] rounded-full bg-[#f6c86b]" />
        </div>
      </div>
    </div>
  );
}

/** One small screen per role, side by side in the roles section. */
export function AdminMock() {
  const p = cl();
  const bars = [62, 48, 90, 74];
  return (
    <div className="rounded-[22px] bg-[#fffaf3] p-4 text-[color:var(--ink)] shadow-[0_30px_60px_-30px_rgba(60,20,0,0.6)]">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
        Pontos da semana
      </p>
      <ul className="mt-3 flex h-24 items-end gap-3">
        {MEMBERS.map((m, k) => (
          <li key={m.n} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
            <span
              className="pk-fill-y w-full rounded-t-lg"
              style={{ height: `${bars[k]}%`, background: m.c, ...i(k) }}
            />
            <span className="text-[10px] font-semibold text-[color:var(--ink-muted)]">{m.n}</span>
          </li>
        ))}
      </ul>
      <p
        className="mt-3 rounded-xl px-3 py-2 text-[11.5px] font-semibold"
        style={{ background: p.colorSoft, color: p.colorInk }}
      >
        2 tarefas esperando sua aprovação
      </p>
    </div>
  );
}

export function AdultMock() {
  const p = cl();
  return (
    <div className="rounded-[22px] bg-[#fffaf3] p-4 text-[color:var(--ink)] shadow-[0_30px_60px_-30px_rgba(60,20,0,0.6)]">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
        Para aprovar
      </p>
      <div className="mt-3 flex items-center gap-3">
        <span
          className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-white"
          style={{ background: `linear-gradient(150deg, ${p.color}, #f2a33c)` }}
        >
          <Camera className="h-5 w-5" />
        </span>
        <span className="min-w-0 text-[12.5px] leading-tight">
          <strong className="block font-semibold">Guardar os brinquedos</strong>
          <span className="text-[11px] text-[color:var(--ink-dim)]">Theo · com foto · +10</span>
        </span>
      </div>
      <div className="pk-swap mt-3 grid text-[11.5px] font-bold" style={i(3)}>
        <span aria-hidden="true" className="pk-a grid grid-cols-2 gap-1.5">
          <span
            className="rounded-full py-1.5 text-center text-white"
            style={{ background: p.colorInk }}
          >
            Aprovar
          </span>
          <span className="rounded-full border border-[color:var(--line-strong)] py-1.5 text-center">
            Refazer
          </span>
        </span>
        <span className="pk-b inline-flex items-center justify-center gap-1.5 rounded-full bg-[#dff3e6] py-1.5 text-[#1d7a45]">
          <Check className="h-3.5 w-3.5" strokeWidth={3} /> Aprovada · +10 para o Theo
        </span>
      </div>
    </div>
  );
}

export function ChildMock() {
  const p = cl();
  return (
    <div className="rounded-[22px] bg-[#fffaf3] p-4 text-[color:var(--ink)] shadow-[0_30px_60px_-30px_rgba(60,20,0,0.6)]">
      <div className="flex items-center gap-3">
        <Avatar {...MEMBERS[2]} size={40} />
        <p className="leading-none">
          <span className="text-[32px] font-extrabold tracking-tight" style={{ color: p.colorInk }}>
            128
          </span>{' '}
          <span className="text-[12px] font-semibold text-[color:var(--ink-muted)]">pontos</span>
        </p>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[color:var(--bg)] px-2 py-1 text-[11px] font-bold">
          <Flame className="h-3.5 w-3.5 text-[#e0582f]" /> 7 dias
        </span>
      </div>
      <p className="mt-3 flex items-center gap-2 text-[12px] font-semibold">
        <Gift className="h-4 w-4" style={{ color: p.colorInk }} /> Escolher o filme
        <span className="ml-auto text-[color:var(--ink-dim)]">150</span>
      </p>
      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-[color:var(--bg-elev)]">
        <div
          className="pk-fill h-full w-[85%] rounded-full"
          style={{ background: p.color, ['--from' as string]: 0.3 }}
        />
      </div>
      <p className="mt-2 text-[11px] text-[color:var(--ink-dim)]">Faltam 22 pontos</p>
    </div>
  );
}

/** Planner: habit heatmap filling in, today's focus and the evening reflection. */
export function PlannerMock() {
  const p = cl();
  const weeks = 26;
  // Deterministic "done" pattern that gets denser toward the present.
  const level = (w: number, day: number) => {
    const h = (Math.imul(w * 31 + day * 17, 2654435761) >>> 0) % 100;
    const chance = 30 + w * 2.6;
    return h < chance ? (h < chance / 2 ? 2 : 1) : 0;
  };
  return (
    <div className="relative mx-auto grid w-full max-w-[540px] gap-4">
      <div className="rounded-[24px] bg-[#fffaf3] p-5 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-bold tracking-tight">Ler 20 minutos</p>
          <span
            className="inline-flex items-center gap-1 text-[12px] font-bold"
            style={{ color: p.colorInk }}
          >
            <Flame className="h-4 w-4" /> 21 dias seguidos
          </span>
        </div>
        <ol
          className="mt-4 grid grid-flow-col gap-[2px] sm:gap-[3px]"
          style={{ gridTemplateRows: 'repeat(7, minmax(0, 1fr))' }}
          aria-label="Mapa de calor do hábito nas últimas semanas"
        >
          {Array.from({ length: weeks * 7 }, (_, n) => {
            const w = Math.floor(n / 7);
            const day = n % 7;
            const lv = w >= weeks - 3 ? 2 : level(w, day);
            return (
              <li
                key={n}
                className="pk-cell aspect-square rounded-[2px] sm:rounded-[3px]"
                style={{
                  background: lv === 2 ? p.colorInk : lv === 1 ? '#e6a66c' : 'var(--bg-elev)',
                  ...i(n),
                }}
              />
            );
          })}
        </ol>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div
          className="iv iv-up rounded-[22px] bg-[#fffaf3] p-4 text-[color:var(--ink)]"
          style={i(4)}
        >
          <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
            <Target className="h-3.5 w-3.5" style={{ color: p.colorInk }} /> Foco do dia
          </p>
          <ol className="mt-2 space-y-1.5 text-[12.5px] font-semibold">
            {['Pagar a conta de luz', 'Treino', 'Ligar para a escola'].map((x, n) => (
              <li key={x} className="flex items-center gap-2">
                <span className="text-[11px] font-bold" style={{ color: p.colorInk }}>
                  {n + 1}
                </span>
                {x}
              </li>
            ))}
          </ol>
        </div>
        <div
          className="iv iv-up rounded-[22px] bg-white/10 p-4 text-white ring-1 ring-white/15"
          style={i(6)}
        >
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Reflexão · 22:10
          </p>
          <p className="mt-2 text-[13px] font-semibold">Pelo que você é grato hoje?</p>
          <p className="mt-1.5 text-[12px] leading-[1.5] text-white/70">
            O almoço de domingo com todo mundo na mesa.
          </p>
        </div>
      </div>
    </div>
  );
}
