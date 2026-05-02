import { PERSONAS } from '@/lib/aragenda/copy';

export function Personas() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
          Para quem é
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
          Cabe no seu jeito de{' '}
          <span className="font-serif italic text-[color:var(--gold-soft)]">trabalhar</span>.
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((p) => (
            <li
              key={p.title}
              className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6"
            >
              <h3 className="text-[17px] font-semibold text-[color:var(--ink)]">{p.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
