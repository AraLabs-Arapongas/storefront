import { FAQ } from '@/lib/aragenda/copy';

export function Faq() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[920px] px-6 py-20 lg:px-10 lg:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
          Perguntas frequentes
        </p>
        <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
          Dúvidas <span className="font-serif italic text-[color:var(--gold-soft)]">comuns</span>.
        </h2>

        <ul className="mt-10 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {FAQ.map((item) => (
            <li key={item.q}>
              <details className="group py-5">
                <summary className="flex items-center justify-between gap-6 text-[16.5px] font-medium text-[color:var(--ink)]">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-[color:var(--gold-soft)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-[15px] leading-[1.7] text-[color:var(--ink-muted)]">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
