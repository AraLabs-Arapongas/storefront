import { PRICING } from '@/lib/aragenda/copy';
import { WhatsAppButton } from './WhatsAppButton';

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-[color:var(--line)] bg-[color:var(--bg-elev)]/40"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
          Preço
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
          Um valor <span className="font-serif italic text-[color:var(--gold-soft)]">justo</span>,
          sem surpresa.
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* Card principal */}
          <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--gold)]/40 bg-[color:var(--bg-elev)] p-8 shadow-[0_24px_50px_rgba(0,0,0,0.08)] lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--gold-soft)]">
              ★ {PRICING.badge}
            </div>
            <p className="mt-3 text-[13.5px] text-[color:var(--ink-muted)]">
              {PRICING.badgeDetail}
            </p>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-[64px] font-bold leading-none tracking-[-0.03em] text-[color:var(--ink)]">
                {PRICING.price}
              </span>
              <span className="text-[15px] text-[color:var(--ink-muted)]">{PRICING.period}</span>
            </div>
            <p className="mt-3 text-[14px] leading-[1.55] text-[color:var(--ink-muted)]">
              {PRICING.priceDetail}
            </p>

            <ul className="mt-8 space-y-3">
              {PRICING.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-[color:var(--ink)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold-soft)]"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <WhatsAppButton variant="primary" className="w-full sm:w-auto">
                {PRICING.cta}
              </WhatsAppButton>
            </div>
          </div>

          {/* Comparativo */}
          <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/60 p-7">
            <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
              {PRICING.comparison.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {PRICING.comparison.rows.map((row) => (
                <li
                  key={row.name}
                  className={`rounded-xl border px-4 py-3 ${
                    row.highlight
                      ? 'border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5'
                      : 'border-[color:var(--line)] bg-[color:var(--bg)]/30'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={`text-[15px] ${
                        row.highlight
                          ? 'font-semibold text-[color:var(--ink)]'
                          : 'text-[color:var(--ink-muted)]'
                      }`}
                    >
                      {row.name}
                    </span>
                    <span
                      className={`text-[14px] ${
                        row.highlight
                          ? 'font-semibold text-[color:var(--gold-soft)]'
                          : 'text-[color:var(--ink-muted)]'
                      }`}
                    >
                      {row.price}
                    </span>
                  </div>
                  {row.note && (
                    <p className="mt-1 text-[12.5px] text-[color:var(--ink-dim)]">{row.note}</p>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[11.5px] leading-[1.5] text-[color:var(--ink-dim)]">
              {PRICING.comparison.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
