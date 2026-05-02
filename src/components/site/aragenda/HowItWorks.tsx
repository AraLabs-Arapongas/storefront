import { HOW_IT_WORKS } from '@/lib/aragenda/copy';

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-b border-[color:var(--line)] bg-[color:var(--bg-elev)]/40"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
          Como funciona
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
          Do <span className="font-serif italic text-[color:var(--gold-soft)]">cadastro</span> ao
          primeiro agendamento em uma tarde.
        </h2>
        <ol className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {HOW_IT_WORKS.map((step) => (
            <li
              key={step.n}
              className="relative rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7"
            >
              <span className="font-serif text-[44px] italic leading-none text-[color:var(--gold-soft)]">
                {step.n}
              </span>
              <h3 className="mt-3 text-[19px] font-semibold text-[color:var(--ink)]">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
