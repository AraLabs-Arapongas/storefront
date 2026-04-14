import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  visual?: ReactNode;
};

export function PageHero({ eyebrow, title, description, visual }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-[-20%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.12),transparent_70%)]" />
        <div className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,255,0.08),transparent_70%)]" />
      </div>
      <div className="grain" />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center rise">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
            — {eyebrow}
          </p>
          <h1 className="text-balance text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] md:text-[56px] lg:text-[64px]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-[19px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[20px]">
            {description}
          </p>
        </div>
        {visual ? (
          <div className="relative min-h-[340px] lg:min-h-[460px]">{visual}</div>
        ) : null}
      </div>
    </section>
  );
}
