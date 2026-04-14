const values = [
  {
    title: 'Clareza',
    body: 'Pensar, documentar e decidir com transparência. Ideias bem organizadas geram produtos melhores.',
  },
  {
    title: 'Utilidade real',
    body: 'Nada de software por vaidade ou modismo. Só construímos o que faz diferença concreta.',
  },
  {
    title: 'Intenção',
    body: 'Cada decisão, cada produto e cada documento precisa existir por um motivo claro.',
  },
  {
    title: 'Simplicidade com profundidade',
    body: 'Simples no resultado para o usuário, profundo na leitura do problema que resolvemos.',
  },
  {
    title: 'Consistência',
    body: 'Preferimos progresso sustentável a movimento desordenado. Evolução com base sólida.',
  },
  {
    title: 'Longo prazo',
    body: 'Decisões que fortaleçam a empresa e seus produtos ao longo do tempo, além da pressa.',
  },
];

export function Values() {
  return (
    <section id="valores" className="relative border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Valores
            </p>
            <h2 className="mt-6 max-w-2xl text-[38px] font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-[color:var(--ink)] md:text-[48px]">
              Aquilo em que{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">acreditamos</span>{' '}
              enquanto construímos.
            </h2>
          </div>
          <p className="max-w-sm text-[18px] leading-[1.7] text-[color:var(--ink-muted)]">
            Esses valores orientam como a Aralabs escolhe problemas, toma decisões e sustenta
            produtos ao longo do tempo.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <article
              key={v.title}
              className="group relative bg-[color:var(--bg-elev)] p-8 transition hover:bg-[color:var(--bg-elev-2)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                  0{i + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]/60 transition group-hover:bg-[color:var(--gold)]" />
              </div>
              <h3 className="mt-14 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                {v.title}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
