import { FINAL_CTA } from '@/lib/aragenda/copy';
import { WhatsAppButton } from './WhatsAppButton';

export function FinalCta() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[920px] px-6 py-24 text-center lg:px-10 lg:py-32">
        <h2 className="text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px]">
          {FINAL_CTA.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.65] text-[color:var(--ink-muted)]">
          {FINAL_CTA.sub}
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton variant="jumbo">{FINAL_CTA.cta}</WhatsAppButton>
        </div>
        <p className="mt-5 text-[13px] text-[color:var(--ink-dim)]">
          R$ 79/mês · Pioneiros até 31/07/2026: 60 dias grátis + selo permanente · sem fidelidade
        </p>
      </div>
    </section>
  );
}
