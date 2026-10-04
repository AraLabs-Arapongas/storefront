import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  visual?: ReactNode;
};

/**
 * Opening for the plain pages (policies, terms, support, credits): the home's kicker, display type
 * and faint triangular lattice, at a size that leaves room for the text that follows.
 */
export function PageHero({ eyebrow, title, description, visual }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-40%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.14),transparent_70%)]" />
        <div className="tri-grid pg-grid-right absolute inset-0" />
      </div>

      <div
        className={`relative mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 pb-16 pt-14 lg:gap-14 lg:px-10 lg:pb-24 lg:pt-20 ${
          visual ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''
        }`}
      >
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-soft)] sm:text-[11px] sm:tracking-[0.28em]">
            <span className="tri text-[8px]" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="display mt-6 max-w-[16ch] text-balance text-[clamp(2.6rem,6.4vw,5.6rem)] text-[color:var(--ink)]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[18.5px]">
            {description}
          </p>
        </div>
        {visual ? <div className="relative min-h-[340px] lg:min-h-[460px]">{visual}</div> : null}
      </div>
    </section>
  );
}
