export function CasaLeveMockup() {
  return (
    <div className="relative h-full min-h-[560px] w-full">
      {/* Soft glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.10),transparent_70%)]" />
      </div>

      {/* Back card: weekly dashboard */}
      <div className="absolute left-0 top-8 w-[62%] rotate-[-3deg] rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev-2)] p-5 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
              Casa Leve
            </p>
            <p className="mt-1 font-serif text-lg italic text-[color:var(--ink)]">
              Semana de abril
            </p>
          </div>
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--gold)]/15 text-[10px] font-semibold text-[color:var(--gold-soft)]">
            82%
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {[60, 85, 40, 95, 70, 30, 55].map((v, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="relative h-16 w-full overflow-hidden rounded-md bg-[color:var(--bg)]">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[color:var(--gold)] to-[color:var(--gold-soft)]"
                  style={{ height: `${v}%` }}
                />
              </div>
              <span className="text-[8px] font-medium uppercase tracking-wider text-[color:var(--ink-dim)]">
                {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][i]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border border-[color:var(--line)] bg-[color:var(--bg)]/50 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            <span className="text-[10px] font-medium text-[color:var(--ink)]">
              Pontos da família
            </span>
          </div>
          <span className="font-serif text-sm italic text-[color:var(--gold-soft)]">1.240</span>
        </div>
      </div>

      {/* Front card: task list */}
      <div className="absolute right-0 top-0 w-[60%] rotate-[2deg] rounded-[22px] border border-[color:var(--line-strong)] bg-gradient-to-b from-[#1d1a24] to-[#141218] p-5 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
              Hoje · quarta-feira
            </p>
            <p className="mt-1 font-serif text-lg italic text-[color:var(--ink)]">Rotina da casa</p>
          </div>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ink-dim)]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ink-dim)]/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ink-dim)]/30" />
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          {[
            { label: 'Arrumar mochila', who: 'Miguel', points: 10, done: true },
            { label: 'Tirar o lixo', who: 'Pedro', points: 5, done: true },
            { label: 'Estudar 30min', who: 'Miguel', points: 20, done: false },
            { label: 'Lavar a louça', who: 'Mãe', points: 8, done: false },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-3 rounded-lg border border-[color:var(--line)] bg-[color:var(--bg)]/60 px-3 py-2.5"
            >
              <span
                className={`grid h-4 w-4 place-items-center rounded-[5px] border ${
                  t.done
                    ? 'border-[color:var(--gold)] bg-[color:var(--gold)] text-[9px] text-[#1a1410]'
                    : 'border-[color:var(--line-strong)]'
                }`}
              >
                {t.done ? '✓' : ''}
              </span>
              <div className="flex-1">
                <p
                  className={`text-[11px] font-medium ${
                    t.done
                      ? 'text-[color:var(--ink-dim)] line-through'
                      : 'text-[color:var(--ink)]'
                  }`}
                >
                  {t.label}
                </p>
                <p className="mt-0.5 text-[9px] text-[color:var(--ink-dim)]">{t.who}</p>
              </div>
              <span className="font-serif text-[11px] italic text-[color:var(--gold-soft)]">
                +{t.points}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[color:var(--line)] pt-3">
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
            Progresso
          </span>
          <div className="flex items-center gap-1.5">
            <div className="h-1 w-16 overflow-hidden rounded-full bg-[color:var(--line-strong)]">
              <div className="h-full w-1/2 bg-[color:var(--gold)]" />
            </div>
            <span className="font-serif text-[11px] italic text-[color:var(--gold-soft)]">2/4</span>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-4 left-8 flex items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/90 px-4 py-2.5 shadow-xl backdrop-blur">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[11px] text-[color:var(--gold-soft)]">
          ✶
        </span>
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
            Miguel subiu de nível
          </p>
          <p className="text-[11px] font-semibold text-[color:var(--ink)]">Hábito de 7 dias</p>
        </div>
      </div>
    </div>
  );
}
