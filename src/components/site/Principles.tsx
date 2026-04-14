import { CasaLeveMockup } from './CasaLeveMockup';

const principles = [
  { n: '01', title: 'Problemas reais antes de funcionalidades' },
  { n: '02', title: 'Clareza antes de velocidade' },
  { n: '03', title: 'Empresa antes de produto isolado' },
  { n: '04', title: 'Simplicidade na experiência, profundidade na estratégia' },
  { n: '05', title: 'Foco no que gera valor real' },
  { n: '06', title: 'Documentar para pensar melhor' },
  { n: '07', title: 'Longo prazo como filtro de decisão' },
];

export function Principles() {
  return (
    <section
      id="principios"
      className="relative overflow-hidden border-b border-[color:var(--line)]"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Princípios de decisão
            </p>
            <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px]">
              Os princípios que guiam{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">cada decisão</span>.
            </h2>
            <p className="mt-7 max-w-md text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Essas diretrizes existem para manter consistência estratégica, reduzir decisões
              impulsivas e criar uma base clara para priorização e foco ao longo do tempo.
            </p>

            <ul className="mt-12 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
              {principles.map((p) => (
                <li
                  key={p.n}
                  className="group flex items-center gap-6 py-5 transition hover:pl-2"
                >
                  <span className="font-serif text-[13px] italic text-[color:var(--gold-soft)]">
                    {p.n}
                  </span>
                  <span className="flex-1 text-[15.5px] font-medium text-[color:var(--ink)]">
                    {p.title}
                  </span>
                  <span className="text-[color:var(--ink-dim)] transition group-hover:text-[color:var(--gold-soft)]">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div id="casa-leve" className="relative">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Primeiro produto
              </span>
              <span className="h-px flex-1 bg-[color:var(--line-strong)]" />
              <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                em exploração
              </span>
            </div>

            <div className="rounded-[28px] border border-[color:var(--line-strong)] bg-gradient-to-b from-[#16141b] to-[#0f0d12] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--gold)] to-[#8a5d1a] font-serif text-base italic text-[#1a1410]">
                      C
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-[color:var(--ink)]">Casa Leve</p>
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
                        Um produto Aralabs
                      </p>
                    </div>
                  </div>
                </div>
                <span className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
                  Em breve
                </span>
              </div>

              <p className="mt-5 font-serif text-[22px] leading-snug italic text-[color:var(--ink)]">
                Um sistema para ajudar a família a funcionar melhor — com rotina clara, colaboração
                e menos cobrança.
              </p>

              <div className="mt-6 h-[420px]">
                <CasaLeveMockup />
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3 border-t border-[color:var(--line)] pt-5">
                {['Rotina', 'Colaboração', 'Hábitos', 'Recompensas'].map((t) => (
                  <div key={t} className="text-center">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
