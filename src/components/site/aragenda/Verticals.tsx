import { VERTICALS } from '@/lib/aragenda/copy';

export function Verticals() {
  return (
    <section className="border-b border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
      <div className="mx-auto max-w-[1240px] px-6 py-12 lg:px-10 lg:py-16">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
          Para qualquer negócio que vende por horário
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {VERTICALS.map((v) => (
            <li
              key={v}
              className="rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-4 py-1.5 text-[14px] text-[color:var(--ink)]"
            >
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
