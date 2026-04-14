const beliefs = [
  {
    title: 'Superficialidade',
    body: 'Soluções fragmentadas tratam sintomas, não a estrutura do problema.',
  },
  {
    title: 'Fragmentação',
    body: 'A vida real precisa de sistemas integrados, não de apps soltos.',
  },
  {
    title: 'Carga mental',
    body: 'Organizar o cotidiano não pode depender só da memória de uma pessoa.',
  },
];

export function Thesis() {
  return (
    <section id="tese" className="relative border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="sticky top-28">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              — Nossa tese
            </p>
            <div className="mt-6 font-serif text-[11px] italic text-[color:var(--gold-soft)]">
              (em uma frase)
            </div>
          </div>

          <div>
            <h2 className="text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[56px]">
              Bons produtos nascem de{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">leitura profunda</span>{' '}
              do problema.
            </h2>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              O diferencial mais importante de uma empresa de produtos não está em construir rápido,
              mas em enxergar melhor, formular melhor e sustentar melhor uma direção de longo prazo.
              Acreditamos que bons produtos digitais geram valor real quando partem de problemas
              concretos, recorrentes e emocionalmente relevantes.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {beliefs.map((b, i) => (
                <div
                  key={b.title}
                  className="group relative rounded-[18px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6 transition hover:border-[color:var(--gold)]/30 hover:bg-[color:var(--bg-elev-2)]"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                      0{i + 1}
                    </span>
                    <span className="h-px w-10 bg-[color:var(--line-strong)]" />
                  </div>
                  <h3 className="mt-8 text-[18px] font-semibold text-[color:var(--ink)]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
