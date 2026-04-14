const steps = [
  {
    n: '01',
    title: 'Concluir os documentos fundadores',
    body: 'Consolidar visão, tese, posicionamento e princípios da Aralabs como base documental viva.',
  },
  {
    n: '02',
    title: 'Amadurecer a visão do Casa Leve',
    body: 'Estruturar visão, proposta de valor e escopo do primeiro produto em exploração.',
  },
  {
    n: '03',
    title: 'Transformar ideias em documentação',
    body: 'Organizar hipóteses, decisões e direções para sustentar as escolhas de produto.',
  },
  {
    n: '04',
    title: 'Evoluir o workspace por versões',
    body: 'Crescer com base sólida, versão após versão, na medida em que as coisas amadurecem.',
  },
];

export function NextSteps() {
  return (
    <section
      id="proximos-passos"
      className="relative overflow-hidden border-b border-[color:var(--line)]"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--line-strong)] bg-gradient-to-br from-[#1b1822] via-[#141218] to-[#0e0d12] px-8 py-14 md:px-14 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.18),transparent_70%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Próximos passos
              </p>
              <h2 className="mt-6 text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px]">
                Para construir produtos que{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">
                  façam sentido
                </span>{' '}
                na vida real.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                A Aralabs está em fase inicial de estruturação. Esses são os movimentos que estamos
                fazendo agora para avançar com base sólida.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-[13px] font-semibold text-[#1a1410] transition hover:bg-[color:var(--gold-soft)]"
                >
                  Conhecer o primeiro produto →
                </a>
                <a
                  href="#empresa"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3 text-[13px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50"
                >
                  Sobre a Aralabs
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {steps.map((s) => (
                <article
                  key={s.n}
                  className="flex items-start gap-5 rounded-[16px] border border-[color:var(--line)] bg-[color:var(--bg)]/40 p-5 backdrop-blur"
                >
                  <span className="font-serif text-[13px] italic text-[color:var(--gold-soft)]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-[color:var(--ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.6] text-[color:var(--ink-muted)]">
                      {s.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
