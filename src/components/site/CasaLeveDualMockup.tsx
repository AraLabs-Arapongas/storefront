const tasks = [
  { label: 'Arrumar mochila', who: 'Miguel', points: 10, done: true },
  { label: 'Tirar o lixo', who: 'Pedro', points: 5, done: true },
  { label: 'Estudar 30min', who: 'Miguel', points: 20, done: false },
  { label: 'Lavar a louça', who: 'Mãe', points: 8, done: false },
];

const kids = [
  { name: 'Miguel', level: 7, points: 1240, streak: 12, progress: 0.72 },
  { name: 'Pedro', level: 5, points: 860, streak: 6, progress: 0.44 },
];

const habits = [
  { label: 'Escovar os dentes', days: [1, 1, 1, 1, 1, 1, 0] },
  { label: 'Arrumar a cama', days: [1, 1, 0, 1, 1, 1, 1] },
  { label: 'Ler 15min', days: [0, 1, 1, 1, 0, 1, 1] },
];

function StatusBar() {
  return (
    <div className="relative flex items-center justify-between px-7 pt-3 text-[10px] font-semibold">
      <span className="tabular-nums">9:41</span>
      <span className="flex items-center gap-1 text-[color:var(--ink)]">
        <svg viewBox="0 0 16 10" className="h-2.5 w-3.5" fill="currentColor">
          <path d="M1 7h2v3H1zM5 5h2v5H5zM9 2h2v8H9zM13 0h2v10h-2z" />
        </svg>
        <svg viewBox="0 0 16 12" className="h-2.5 w-3.5" fill="currentColor">
          <path d="M8 2c2.8 0 5.4 1 7.4 2.8l-1 1A9 9 0 0 0 8 3.5a9 9 0 0 0-6.4 2.3l-1-1A10.9 10.9 0 0 1 8 2zm0 3.5c1.9 0 3.6.7 4.9 1.9l-1 1a6 6 0 0 0-4-1.4 6 6 0 0 0-4 1.4l-1-1A7.4 7.4 0 0 1 8 5.5zm0 3.5a3 3 0 0 1 2.1.9L8 12l-2.1-2.1A3 3 0 0 1 8 9z" />
        </svg>
        <svg viewBox="0 0 22 10" className="h-2.5 w-5">
          <rect x="0.5" y="0.5" width="18" height="9" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.7" />
          <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
          <rect x="20" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" fillOpacity="0.6" />
        </svg>
      </span>
    </div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full rounded-[46px] bg-gradient-to-b from-[#2a2630] via-[#1a171f] to-[#0f0d13] p-[3px] shadow-[0_50px_120px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
      <div className="absolute -left-[3px] top-[88px] h-[26px] w-[3px] rounded-l bg-[#1a171f]" />
      <div className="absolute -left-[3px] top-[128px] h-[44px] w-[3px] rounded-l bg-[#1a171f]" />
      <div className="absolute -left-[3px] top-[184px] h-[44px] w-[3px] rounded-l bg-[#1a171f]" />
      <div className="absolute -right-[3px] top-[128px] h-[64px] w-[3px] rounded-r bg-[#1a171f]" />
      <div className="relative h-full w-full overflow-hidden rounded-[43px] bg-[color:var(--bg)]">
        <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-[color:var(--bg-elev-2)] via-[color:var(--bg-elev)] to-[color:var(--surface-deep)] text-[color:var(--ink)]">
          <StatusBar />
          <div className="absolute left-1/2 top-2 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          {children}
          <div className="mx-auto mb-1.5 h-1 w-[110px] rounded-full bg-[color:var(--ink)]/70" />
        </div>
      </div>
    </div>
  );
}

function RoutineScreen() {
  return (
    <PhoneShell>
      <div className="mt-9 px-5">
        <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
          Hoje · quarta-feira
        </p>
        <div className="mt-1 flex items-end justify-between">
          <h3 className="font-serif text-xl italic text-[color:var(--ink)]">Rotina da casa</h3>
          <div className="flex h-8 items-center gap-1.5 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            <span className="font-serif text-[10px] italic text-[color:var(--gold-soft)]">4 de 8</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex-1 space-y-1.5 px-3">
        {tasks.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2.5 rounded-[12px] border border-[color:var(--line)] bg-[color:var(--bg-elev)]/50 px-2.5 py-2"
          >
            <span
              className={`grid h-4 w-4 shrink-0 place-items-center rounded-[4px] border ${
                t.done
                  ? 'border-[color:var(--gold)] bg-[color:var(--gold)] text-[8px] text-[color:var(--on-gold)]'
                  : 'border-[color:var(--line-strong)]'
              }`}
            >
              {t.done ? '✓' : ''}
            </span>
            <div className="min-w-0 flex-1">
              <p
                className={`text-[10.5px] font-medium ${
                  t.done ? 'text-[color:var(--ink-dim)] line-through' : 'text-[color:var(--ink)]'
                }`}
              >
                {t.label}
              </p>
              <p className="mt-[1px] text-[8.5px] text-[color:var(--ink-dim)]">{t.who}</p>
            </div>
            <span className="font-serif text-[10px] italic text-[color:var(--gold-soft)]">+{t.points}</span>
          </div>
        ))}
      </div>

      <div className="mx-3 mb-5 mt-3 flex items-center justify-around rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/60 py-2.5 backdrop-blur">
        {[
          { label: 'Hoje', active: true },
          { label: 'Família' },
          { label: 'Pontos' },
          { label: 'Ajustes' },
        ].map((tab) => (
          <span
            key={tab.label}
            className={`text-[9px] font-semibold ${
              tab.active ? 'text-[color:var(--gold-soft)]' : 'text-[color:var(--ink-dim)]'
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>
    </PhoneShell>
  );
}

function HabitsScreen() {
  return (
    <PhoneShell>
      <div className="mt-9 px-5">
        <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
          Esta semana
        </p>
        <div className="mt-1 flex items-end justify-between">
          <h3 className="font-serif text-xl italic text-[color:var(--ink)]">Pontos e hábitos</h3>
          <span className="font-serif text-[10px] italic text-[color:var(--gold-soft)]">▴ 18%</span>
        </div>
      </div>

      <div className="mt-4 space-y-2 px-3">
        {kids.map((k) => (
          <div
            key={k.name}
            className="rounded-[14px] border border-[color:var(--line)] bg-[color:var(--bg-elev)]/55 px-3 py-2.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--gold-soft)] font-serif text-[11px] italic text-[color:var(--on-gold)]">
                  {k.name[0]}
                </span>
                <div>
                  <p className="text-[10.5px] font-semibold leading-tight text-[color:var(--ink)]">
                    {k.name}
                  </p>
                  <p className="text-[8.5px] leading-tight text-[color:var(--ink-dim)]">
                    Nível {k.level} · {k.streak} dias
                  </p>
                </div>
              </div>
              <span className="font-serif text-[12px] italic text-[color:var(--gold-soft)]">
                {k.points.toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[color:var(--line)]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold-soft)]"
                style={{ width: `${k.progress * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex-1 px-3">
        <p className="px-1 text-[8.5px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
          Hábitos · Miguel
        </p>
        <div className="mt-1.5 space-y-1">
          {habits.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 rounded-[10px] border border-[color:var(--line)] bg-[color:var(--bg-elev)]/40 px-2 py-1.5"
            >
              <p className="flex-1 text-[9.5px] font-medium text-[color:var(--ink)]">{h.label}</p>
              <div className="flex gap-[3px]">
                {h.days.map((d, i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-[2px] ${
                      d ? 'bg-[color:var(--gold)]' : 'bg-[color:var(--line-strong)]'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-3 mb-5 mt-3 flex items-center justify-around rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/60 py-2.5 backdrop-blur">
        {[
          { label: 'Hoje' },
          { label: 'Família' },
          { label: 'Pontos', active: true },
          { label: 'Ajustes' },
        ].map((tab) => (
          <span
            key={tab.label}
            className={`text-[9px] font-semibold ${
              tab.active ? 'text-[color:var(--gold-soft)]' : 'text-[color:var(--ink-dim)]'
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>
    </PhoneShell>
  );
}

export function CasaLeveDualMockup() {
  return (
    <div className="relative flex h-full min-h-[520px] w-full items-center justify-center">
      {/* Warm ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[10%] h-[90%] w-[90%] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.18),transparent_70%)]" />
        <div className="absolute right-[5%] bottom-[5%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(229,140,90,0.12),transparent_70%)]" />
      </div>

      <div className="relative h-[540px] w-[460px] max-w-full">
        {/* Back phone — routine */}
        <div className="absolute left-[4%] top-[8%] h-[500px] w-[250px] -rotate-[7deg]">
          <RoutineScreen />
        </div>

        {/* Front phone — habits & points */}
        <div className="absolute right-[2%] top-[2%] h-[520px] w-[260px] rotate-[5deg] drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]">
          <HabitsScreen />
        </div>

        {/* Floating level-up badge */}
        <div className="absolute -bottom-2 left-[10%] flex items-center gap-2.5 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev-2)]/95 px-3.5 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[11px] text-[color:var(--gold-soft)]">
            ✶
          </span>
          <div>
            <p className="text-[8.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
              Miguel subiu de nível
            </p>
            <p className="text-[10.5px] font-semibold text-[color:var(--ink)]">Hábito de 7 dias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
