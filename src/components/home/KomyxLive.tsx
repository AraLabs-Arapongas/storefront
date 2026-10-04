'use client';

import { useEffect, useRef } from 'react';
import { Check, CalendarDays, Users, QrCode, Mail, Clock3, UserPlus } from 'lucide-react';
import { productBySlug } from '@/lib/products';

const TOTAL = 84;
const CONFIRMED = 72;

/**
 * Illustrative Komyx UI that reacts once it scrolls into view: the guest counter counts up, the
 * quote flips to approved and an RSVP arrives. Server HTML and reduced motion show the final state.
 */
export function KomyxLive() {
  const k = productBySlug('komyx');
  const ref = useRef<HTMLDivElement>(null);

  // Drives the DOM directly (no React state): the server HTML is the final state, and the
  // "before" state only exists once JS has run and motion is allowed.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const countEl = el.querySelector<HTMLElement>('[data-count]');
    const barEl = el.querySelector<HTMLElement>('[data-bar]');
    const flipEl = el.querySelector<HTMLElement>('[data-flip]');
    const rsvpEl = el.querySelector<HTMLElement>('[data-rsvp]');
    const FROM = 58;
    const setCount = (n: number) => {
      if (countEl) countEl.textContent = String(n);
      if (barEl) barEl.style.width = `${(n / TOTAL) * 100}%`;
    };
    const timers: number[] = [];
    let frame = 0;
    setCount(FROM);
    flipEl?.setAttribute('data-on', 'false');
    rsvpEl?.classList.remove('is-on');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1600);
          setCount(Math.round(FROM + (CONFIRMED - FROM) * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        timers.push(window.setTimeout(() => flipEl?.setAttribute('data-on', 'true'), 1100));
        timers.push(window.setTimeout(() => rsvpEl?.classList.add('is-on'), 1900));
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[560px] pb-6 lg:pb-0">
      {/* Main party card (buffet side) */}
      <div className="relative z-10 rounded-[26px] bg-[#fffaf3] p-5 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(40,0,15,0.55)] sm:p-7">
        <div className="flex items-center gap-4">
          <div
            className="grid h-[68px] w-[60px] shrink-0 place-items-center rounded-2xl text-white"
            style={{ background: k.colorInk }}
          >
            <span className="text-center leading-none">
              <span className="block text-[24px] font-extrabold">27</span>
              <span className="mt-1 block text-[10px] font-bold tracking-[0.18em]">NOV</span>
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
              Festa confirmada
            </p>
            <p className="mt-1 text-[20px] font-bold leading-tight tracking-tight sm:text-[24px]">
              Aniversário do Samuel
            </p>
            <p className="mt-1 text-[13.5px] text-[color:var(--ink-muted)]">
              18:30 · Buffet Alegria
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-baseline justify-between text-[13px]">
            <span className="font-semibold">Convidados</span>
            <span className="text-[color:var(--ink-muted)]" aria-live="off">
              <strong
                data-count
                className="inline-block min-w-[2ch] text-right tabular-nums text-[color:var(--ink)]"
              >
                {CONFIRMED}
              </strong>{' '}
              de {TOTAL} confirmados
            </span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[color:var(--bg-elev)]">
            <div
              data-bar
              className="h-full rounded-full transition-[width] duration-100"
              style={{ width: `${(CONFIRMED / TOTAL) * 100}%`, background: k.color }}
            />
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-3 gap-2 text-[11.5px] font-semibold text-[color:var(--ink-muted)]">
          {[
            { icon: CalendarDays, label: 'Agenda' },
            { icon: Users, label: 'Lista' },
            { icon: QrCode, label: 'Portaria' },
          ].map((x) => (
            <li
              key={x.label}
              className="flex flex-col items-center gap-1.5 rounded-xl bg-[color:var(--bg)] py-3"
            >
              <x.icon className="h-4 w-4" style={{ color: k.colorInk }} />
              {x.label}
            </li>
          ))}
        </ul>

        {/* RSVP arriving */}
        <div
          data-rsvp
          className="komyx-rsvp is-on mt-4 flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-white px-3.5 py-2.5 text-[13px]"
        >
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white"
            style={{ background: k.color }}
          >
            <UserPlus className="h-4 w-4" />
          </span>
          <span className="min-w-0 flex-1">
            <strong className="font-semibold">Marina confirmou presença</strong>
            <span className="block text-[11.5px] text-[color:var(--ink-dim)]">
              com mais 3 pessoas · agora
            </span>
          </span>
        </div>
      </div>

      {/* Quote: waiting → approved */}
      <div className="relative z-20 -mt-5 ml-auto mr-2 w-[min(78%,260px)] rotate-[2deg] rounded-[20px] bg-[color:var(--dark)] p-4 text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] sm:absolute sm:-right-6 sm:-top-24 sm:mt-0 lg:-right-10">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Orçamento
        </p>
        <p className="mt-1 text-[26px] font-extrabold tracking-tight">R$ 4.800</p>
        <div
          data-flip
          data-on="true"
          className="komyx-flip mt-1 h-[20px] text-[12.5px] font-semibold"
        >
          <span className="komyx-flip-face inline-flex items-center gap-1.5 text-[#f6c86b]">
            <Clock3 className="h-3.5 w-3.5" /> Aguardando o cliente
          </span>
          <span className="komyx-flip-face komyx-flip-back inline-flex items-center gap-1.5 text-[#8fe3b0]">
            <Check className="h-3.5 w-3.5" strokeWidth={3} /> Aprovado pelo cliente
          </span>
        </div>
      </div>

      {/* Client app: the family follows the party */}
      <div className="relative z-20 -mt-3 w-[min(82%,250px)] -rotate-[3deg] rounded-[30px] border-[6px] border-[color:var(--dark)] bg-[#fffaf3] p-3.5 text-[color:var(--ink)] shadow-[0_30px_60px_-25px_rgba(40,0,15,0.6)] sm:absolute sm:-bottom-32 sm:-left-6 sm:mt-0 lg:-left-14">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          App do cliente
        </p>
        <p className="mt-1 text-center text-[15px] font-bold tracking-tight">A festa do Samuel</p>
        <ul className="mt-3 space-y-1.5 text-[12.5px]">
          <li className="flex items-center justify-between rounded-xl bg-[color:var(--bg)] px-3 py-2">
            <span className="font-semibold">Parcela via Pix</span>
            <span className="font-semibold text-[#1d7a45]">Paga</span>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-[color:var(--bg)] px-3 py-2">
            <span className="font-semibold">Convidados</span>
            <span className="text-[color:var(--ink-muted)]">{TOTAL} na lista</span>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-[color:var(--bg)] px-3 py-2">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <Mail className="h-3.5 w-3.5" style={{ color: k.colorInk }} /> Convite
            </span>
            <span className="text-[color:var(--ink-muted)]">enviado</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
