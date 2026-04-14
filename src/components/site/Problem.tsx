const pains = [
  'Tarefas implícitas e mal distribuídas',
  'Dependência da memória de uma pessoa só',
  'Excesso de cobrança no dia a dia',
  'Responsabilidades concentradas nos pais',
  'Pouca clareza sobre quem faz o quê',
  'Dificuldade para criar hábitos nos filhos',
  'Conflitos por esquecimento ou falta de alinhamento',
  'Sensação constante de desorganização dentro de casa',
];

export function Problem() {
  return (
    <section id="problema" className="relative border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:pr-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              O problema que escolhemos resolver
            </p>
            <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)] md:text-[48px]">
              Famílias precisam de um{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">sistema claro</span>{' '}
              para rotina, responsabilidades e acordos.
            </h2>
            <p className="mt-7 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Hoje, muitas casas dependem de lembretes informais, da memória de uma pessoa só e de
              ferramentas desconectadas. O resultado é sobrecarga mental, cobrança constante e pouca
              clareza sobre quem faz o quê.
            </p>
            <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Acreditamos que o problema não está na falta de boa vontade — está na{' '}
              <span className="text-[color:var(--ink)]">ausência de um sistema</span> que ajude a
              família a funcionar melhor como um todo.
            </p>
          </div>

          <div className="grid gap-3">
            {pains.map((p, i) => (
              <article
                key={p}
                className="group flex items-start gap-5 rounded-[16px] border border-[color:var(--line)] bg-[color:var(--bg-elev)]/50 px-6 py-5 transition hover:border-[color:var(--gold)]/25 hover:bg-[color:var(--bg-elev)]"
              >
                <span className="mt-0.5 font-serif text-[11px] italic text-[color:var(--gold-soft)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="flex-1 text-[15.5px] font-medium leading-[1.5] text-[color:var(--ink)]">
                  {p}
                </p>
                <span className="text-[color:var(--ink-dim)] transition group-hover:text-[color:var(--gold-soft)]">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
