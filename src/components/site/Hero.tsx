export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.14),transparent_70%)]" />
        <div className="absolute right-[-10%] top-[20%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,255,0.10),transparent_70%)]" />
      </div>
      <div className="grain" />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="flex flex-col justify-center rise">
          <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/60 py-2 pl-2 pr-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-muted)] backdrop-blur">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--gold)]/15 text-[color:var(--gold-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shimmer" />
            </span>
            Empresa-mãe de produtos digitais
          </div>

          <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] md:text-[52px] lg:text-[62px]">
            <span className="block">
              Produtos{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">digitais</span>
            </span>
            <span className="block">para problemas reais</span>
            <span className="block">do cotidiano.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[20px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[21px]">
            A Aralabs é uma empresa brasileira que transforma desafios recorrentes da vida real em
            produtos digitais úteis, claros e construídos com intenção de longo prazo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#casa-leve"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[15px] font-semibold tracking-tight text-[#1a1410] transition hover:bg-[color:var(--gold-soft)]"
            >
              Conhecer o Casa Leve
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#tese"
              className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-transparent px-6 py-3.5 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
            >
              Ler a nossa tese
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-[color:var(--line)] pt-8">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                Fundada em
              </dt>
              <dd className="mt-2 font-serif text-2xl italic text-[color:var(--ink)]">2026</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                Território inicial
              </dt>
              <dd className="mt-2 text-sm leading-snug text-[color:var(--ink)]">Vida familiar</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                Primeiro produto
              </dt>
              <dd className="mt-2 text-sm leading-snug text-[color:var(--ink)]">Casa Leve</dd>
            </div>
          </dl>
        </div>

        {/* Hero visual: placeholder for photo */}
        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <div className="absolute inset-0 rounded-[28px] border border-[color:var(--line-strong)] bg-gradient-to-br from-[#1b1822] via-[#14121a] to-[#0f0d12] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            {/* IMAGE PLACEHOLDER — replace with a photo */}
            <div className="flex h-full w-full flex-col justify-between p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                  Aralabs · Workspace
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--ink-dim)]/50" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--ink-dim)]/30" />
                  <span className="h-2 w-2 rounded-full bg-[color:var(--ink-dim)]/20" />
                </div>
              </div>

              <div className="flex-1" />

              <div className="grid grid-cols-[auto_1fr_auto] items-end gap-6">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--gold)] to-[#8a5d1a] font-serif text-4xl italic text-[#1a1410] shadow-2xl shadow-[color:var(--gold)]/20">
                  A
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                    Visão institucional
                  </p>
                  <p className="mt-2 font-serif text-[22px] leading-snug text-[color:var(--ink)]">
                    Construímos com <em className="italic text-[color:var(--gold-soft)]">intenção</em>,
                    não com pressa.
                  </p>
                </div>
                <div className="hidden text-right text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)] md:block">
                  001<br />
                  <span className="text-[color:var(--gold-soft)]">—</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg-elev-2)] p-4 lg:block">
            <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
              Longo prazo
            </div>
            <div className="mt-2 font-serif text-2xl italic text-[color:var(--gold-soft)]">∞</div>
          </div>
        </div>
      </div>
    </section>
  );
}
