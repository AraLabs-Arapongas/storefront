import { DEMOS } from '@/lib/aragenda/copy';

export function Demos() {
  return (
    <section className="border-b border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
          Exemplos
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
          Como <span className="font-serif italic text-[color:var(--gold-soft)]">fica</span> em
          diferentes negócios.
        </h2>
        <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
          Mockups ilustrativos. Páginas demo navegáveis em breve.
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((d) => (
            <li
              key={d.name}
              className="overflow-hidden rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]"
            >
              <div
                className="relative flex aspect-[4/3] items-center justify-center"
                style={{ background: d.color }}
              >
                <span className="font-serif text-[28px] italic text-white/90">{d.name}</span>
                <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  Em breve
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-[color:var(--ink)]">{d.name}</h3>
                <p className="mt-1 text-[13.5px] text-[color:var(--ink-muted)]">{d.vertical}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
