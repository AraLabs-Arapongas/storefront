const pillars = [
  {
    number: '01',
    title: 'Empresa-mãe',
    body: 'A Aralabs é uma estrutura que sustenta múltiplos produtos, não a marca de um único app.',
    accent: 'text-[color:var(--gold-soft)]',
  },
  {
    number: '02',
    title: 'Problemas reais',
    body: 'Escolhemos territórios com dor recorrente, atrito diário e impacto emocional concreto.',
    accent: 'text-[color:var(--warm)]',
  },
  {
    number: '03',
    title: 'Clareza e estrutura',
    body: 'Documentação viva, direção estratégica e consistência antes de improviso.',
    accent: 'text-[color:var(--violet)]',
  },
  {
    number: '04',
    title: 'Longo prazo',
    body: 'Produtos que evoluem com intenção, não lançamentos rápidos e descartáveis.',
    accent: 'text-[color:var(--gold-soft)]',
  },
];

export function Pillars() {
  return (
    <section id="empresa" className="relative border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Aralabs HQ · Empresa
            </p>
            <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-[color:var(--ink)] md:text-[48px]">
              Uma empresa de{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">produtos</span>,
              <br />
              não apenas de software.
            </h2>
            <p className="mt-7 max-w-md text-[19px] leading-[1.7] text-[color:var(--ink-muted)]">
              A Aralabs nasce como base estratégica e documental. Seu papel é identificar problemas
              relevantes, formular teses sólidas e sustentar produtos com clareza de direção.
            </p>
            <a
              href="#tese"
              className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[color:var(--gold-soft)] transition hover:text-[color:var(--gold)]"
            >
              Conhecer nossa tese <span>→</span>
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2">
            {pillars.map((p) => (
              <article
                key={p.number}
                className="group relative bg-[color:var(--bg-elev)] p-8 transition hover:bg-[color:var(--bg-elev-2)]"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-serif text-[13px] italic tracking-wider ${p.accent}`}
                  >
                    {p.number}
                  </span>
                  <span className="text-[color:var(--ink-dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--gold-soft)]">
                    →
                  </span>
                </div>
                <h3 className="mt-10 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
