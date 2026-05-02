import { HERO } from '@/lib/aragenda/copy';
import { WhatsAppButton } from './WhatsAppButton';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="grain" />
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex max-w-3xl flex-col">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            {HERO.eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px] lg:text-[56px]">
            {HERO.title.pre}{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">
              {HERO.title.accent}
            </span>
            {HERO.title.post}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[19px]">
            {HERO.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton variant="primary">{HERO.ctaPrimary}</WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-5 py-3 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
          <p className="mt-5 text-[13px] text-[color:var(--ink-dim)]">
            R$ 79/mês até 10 profissionais · Pioneiros até 31/07: 60 dias grátis + selo permanente
          </p>
        </div>
      </div>
    </section>
  );
}
