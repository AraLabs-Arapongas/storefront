import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Check, Volume2, User, Hand, GlassWater } from 'lucide-react';
import { productBySlug, type Product } from '@/lib/products';
import { InView } from './InView';

/*
 * The three family products that are already live, each with its own composition and its own
 * small piece of motion (tasks ticking off, tiles climbing, a sentence being built). The UI bits
 * are illustrative.
 */

const i = (n: number) => ({ '--i': n }) as CSSProperties;

function Meta({ p, n, align = 'start' }: { p: Product; n: number; align?: 'start' | 'end' }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-dim)] ${
        align === 'end' ? 'lg:justify-end' : ''
      }`}
    >
      <span className="tri text-[8px]" style={{ color: p.colorInk }} aria-hidden="true" />
      <span className="tabular-nums" style={{ color: p.colorInk }}>
        {String(n).padStart(2, '0')}
      </span>
      {p.audience}
      <span
        className="rounded-full px-2.5 py-1 text-[10px] tracking-[0.14em]"
        style={{ background: p.colorSoft, color: p.colorInk }}
      >
        {p.status}
      </span>
    </p>
  );
}

function More({ p }: { p: Product }) {
  return (
    <p className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
      <span className="font-semibold text-[color:var(--ink)]">{p.offer}</span>
      <Link
        href={p.href}
        className="group inline-flex items-center gap-2 font-semibold"
        style={{ color: p.colorInk }}
      >
        Conhecer o {p.name}
        <span
          className="tri tri-r text-[8px] transition group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </p>
  );
}

/** Casa Leve: a wide warm block hugging the left edge, the task list ticking itself off. */
export function CasaLeveFeature({ n }: { n: number }) {
  const p = productBySlug('casa-leve');
  const tasks = [
    { t: 'Arrumar a cama', who: 'Ana', pts: 10 },
    { t: 'Dar comida ao gato', who: 'Léo', pts: 5 },
    { t: 'Guardar os brinquedos', who: 'Ana', pts: 10 },
  ];
  return (
    <InView className="relative py-16 lg:py-24" threshold={0.35}>
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[-50vw] right-[-6vw] rounded-br-[64px] lg:right-[24%]"
        style={{ background: p.colorSoft }}
      />
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,0.32fr)] lg:items-center">
        <div className="lg:pr-12">
          <Meta p={p} n={n} />
          <h3
            className="display mt-5 text-[clamp(3.4rem,10vw,9.5rem)]"
            style={{ color: p.colorInk }}
          >
            {p.name}
          </h3>
          <p className="mt-6 max-w-xl text-[clamp(1.3rem,2.2vw,1.75rem)] font-semibold leading-[1.25] tracking-tight text-[color:var(--ink)]">
            {p.tagline}
          </p>
          <p className="mt-4 max-w-lg text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
            {p.description}
          </p>
          <More p={p} />
        </div>
        <div className="relative lg:-ml-10">
          <div className="w-full max-w-[340px] rotate-[2.5deg] rounded-[24px] bg-[#fffaf3] p-5 shadow-[0_30px_60px_-30px_rgba(36,29,21,0.5)]">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                Tarefas de hoje
              </p>
              <span
                className="iv iv-pop rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
                style={{ background: p.colorInk, ...i(10) }}
              >
                +25 pts
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {tasks.map((r, k) => (
                <li
                  key={r.t}
                  className="flex items-center gap-3 rounded-2xl bg-[color:var(--bg)] px-3 py-2.5 text-[13.5px]"
                >
                  <span
                    className="cl-check grid h-5 w-5 shrink-0 place-items-center rounded-full border-2"
                    style={{ borderColor: p.colorInk, background: p.colorInk, ...i(k) }}
                  >
                    <Check
                      className="cl-check-icon iv h-3 w-3 text-white"
                      strokeWidth={3.5}
                      style={i(k + 3)}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="cl-done block w-fit font-semibold text-[color:var(--ink-dim)]"
                      style={i(k)}
                    >
                      {r.t}
                    </span>
                    <span className="block text-[11.5px] text-[color:var(--ink-dim)]">{r.who}</span>
                  </span>
                  <span className="text-[12px] font-bold" style={{ color: p.colorInk }}>
                    +{r.pts}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </InView>
  );
}

/** Arakids: pushed to the right edge, age tiles climbing into a staircase. */
export function ArakidsFeature({ n }: { n: number }) {
  const p = productBySlug('arakids');
  const ages = [
    { a: '2–3', l: 'Exploradores' },
    { a: '4–5', l: 'Curiosos' },
    { a: '6–7', l: 'Inventores' },
    { a: '8–10', l: 'Navegadores' },
  ];
  return (
    <InView className="relative py-20 lg:py-28" threshold={0.3}>
      {/* A big triangle bleeding off the right edge: the mark, in the product's color. */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[-30vw] top-0 w-[70vw] lg:right-[-18vw] lg:w-[48vw]"
        style={{
          background: p.colorSoft,
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        }}
      />
      <div className="relative lg:ml-auto lg:w-[82%] lg:text-right">
        <Meta p={p} n={n} align="end" />
        <h3
          className="display mt-5 text-[clamp(3.6rem,13vw,12.5rem)]"
          style={{ color: p.colorInk }}
        >
          {p.name}
        </h3>
        <div className="lg:flex lg:flex-col lg:items-end">
          <p className="mt-6 max-w-xl text-[clamp(1.3rem,2.2vw,1.75rem)] font-semibold leading-[1.25] tracking-tight text-[color:var(--ink)]">
            {p.tagline}
          </p>
          <p className="mt-4 max-w-lg text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
            {p.description}
          </p>
          <More p={p} />
        </div>
        <ol
          className="mt-14 grid grid-cols-4 items-end gap-2 sm:gap-4 lg:ml-auto lg:mt-20 lg:w-[86%]"
          aria-label="Trilhas por idade"
        >
          {ages.map((x, k) => (
            <li
              key={x.a}
              className="ak-step rounded-[16px] px-2 pb-3 pt-6 text-left text-white shadow-[0_20px_40px_-24px_rgba(10,40,80,0.7)] sm:rounded-[22px] sm:px-4 sm:pb-4 sm:pt-10"
              style={{ background: k === 1 ? '#ffe08a' : p.colorInk, ...i(k) }}
            >
              <span
                className="block text-[clamp(1.3rem,4.2vw,3.4rem)] font-extrabold leading-none tracking-tight"
                style={k === 1 ? { color: '#1b3a5c' } : undefined}
              >
                {x.a}
              </span>
              <span
                className={`mt-2 hidden text-[10.5px] font-semibold sm:block sm:text-[13px] ${k === 1 ? 'text-[#1b3a5c]' : 'text-white'}`}
              >
                {x.l}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </InView>
  );
}

/** Lumo: the sentence itself at full scale, word by word, then the app. */
export function LumoFeature({ n }: { n: number }) {
  const p = productBySlug('lumo');
  const words = [
    { w: 'eu', icon: User },
    { w: 'quero', icon: Hand },
    { w: 'água.', icon: GlassWater },
  ];
  return (
    <InView className="relative py-20 lg:py-28" threshold={0.25}>
      <Meta p={p} n={n} />
      <div
        role="img"
        aria-label="Exemplo de uso: a frase “eu quero água” montada com três cards"
        className="mt-10 flex flex-wrap items-end gap-x-[2.5vw] gap-y-4"
      >
        {words.map((x, k) => (
          <span key={x.w} className="iv iv-word inline-flex flex-col" style={i(k * 2)}>
            <span
              className="mb-2 grid h-[clamp(2.4rem,5vw,4.5rem)] w-[clamp(2.4rem,5vw,4.5rem)] place-items-center rounded-[14px] border-2"
              style={{ borderColor: p.colorSoft, background: '#fff', color: p.colorInk }}
            >
              <x.icon className="h-1/2 w-1/2" />
            </span>
            <span
              className="display text-[clamp(3.4rem,10.4vw,10rem)]"
              style={{ color: p.colorInk }}
            >
              {x.w}
            </span>
          </span>
        ))}
        <span
          className="lumo-speak iv iv-pop mb-[2vw] grid h-[clamp(3rem,6vw,5.5rem)] w-[clamp(3rem,6vw,5.5rem)] place-items-center rounded-full text-white"
          style={{ background: p.colorInk, ...i(7) }}
        >
          <Volume2 className="h-1/2 w-1/2" />
        </span>
      </div>
      <div className="mt-14 grid gap-8 border-t border-[color:var(--line-strong)] pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <div>
          <h3 className="display text-[clamp(2.8rem,6vw,5rem)]" style={{ color: p.colorInk }}>
            {p.name}
          </h3>
          <p className="mt-3 text-[clamp(1.2rem,1.8vw,1.5rem)] font-semibold tracking-tight text-[color:var(--ink)]">
            {p.tagline}
          </p>
        </div>
        <div>
          <p className="max-w-xl text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
            {p.description} Para a criança que ainda não fala, um jeito de pedir, contar e
            conversar.
          </p>
          <More p={p} />
        </div>
      </div>
    </InView>
  );
}
