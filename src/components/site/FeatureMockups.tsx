import type { ReactNode } from 'react';

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center px-6 py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.10),transparent_70%)]" />
      </div>
      <div className="relative h-full max-h-[440px] w-full max-w-[230px]">
        <div className="relative h-full w-full rounded-[38px] bg-gradient-to-b from-[#2a2630] via-[#1a171f] to-[#0f0d13] p-[2.5px] shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
          <div className="absolute -left-[2.5px] top-[70px] h-[20px] w-[2.5px] rounded-l bg-[#1a171f]" />
          <div className="absolute -left-[2.5px] top-[100px] h-[34px] w-[2.5px] rounded-l bg-[#1a171f]" />
          <div className="absolute -left-[2.5px] top-[142px] h-[34px] w-[2.5px] rounded-l bg-[#1a171f]" />
          <div className="absolute -right-[2.5px] top-[100px] h-[52px] w-[2.5px] rounded-r bg-[#1a171f]" />

          <div className="relative h-full w-full overflow-hidden rounded-[35px] bg-[color:var(--bg)]">
            <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-[color:var(--bg-elev-2)] via-[color:var(--bg-elev)] to-[color:var(--surface-deep)] text-[color:var(--ink)]">
              <div className="relative flex items-center justify-between px-6 pt-2.5 text-[8px] font-semibold">
                <span className="tabular-nums">9:41</span>
                <span className="flex items-center gap-0.5 text-[color:var(--ink)]">
                  <svg viewBox="0 0 16 10" className="h-2 w-3" fill="currentColor">
                    <path d="M1 7h2v3H1zM5 5h2v5H5zM9 2h2v8H9zM13 0h2v10h-2z" />
                  </svg>
                  <svg viewBox="0 0 22 10" className="h-2 w-4">
                    <rect
                      x="0.5"
                      y="0.5"
                      width="18"
                      height="9"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.7"
                    />
                    <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
                    <rect
                      x="20"
                      y="3.5"
                      width="1.5"
                      height="3"
                      rx="0.5"
                      fill="currentColor"
                      fillOpacity="0.6"
                    />
                  </svg>
                </span>
              </div>
              <div className="absolute left-1/2 top-1.5 h-[20px] w-[72px] -translate-x-1/2 rounded-full bg-black" />

              <div className="flex-1 overflow-hidden">{children}</div>

              <div className="mx-auto mb-1 h-[3px] w-[80px] rounded-full bg-[color:var(--ink)]/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const routineSlots = [
  { label: 'Manhã', hour: '07h', tasks: 4, icon: '☀' },
  { label: 'Tarde', hour: '14h', tasks: 2, icon: '◐' },
  { label: 'Noite', hour: '19h', tasks: 3, icon: '☾' },
];

export function RoutineMockup() {
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col px-4 pt-5">
        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
          Semana · abril
        </p>
        <h3 className="mt-1 font-serif text-[17px] italic leading-tight text-[color:var(--ink)]">
          Rotina da casa
        </h3>

        {/* Week bars */}
        <div className="mt-4 grid grid-cols-7 gap-1">
          {[60, 85, 42, 95, 72, 30, 58].map((v, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="relative h-10 w-full overflow-hidden rounded-[3px] bg-[color:var(--bg)]/60">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[color:var(--gold)] to-[color:var(--gold-soft)]"
                  style={{ height: `${v}%` }}
                />
              </div>
              <span className="text-[7px] font-medium uppercase text-[color:var(--ink-dim)]">
                {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][i]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-1.5">
          {routineSlots.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2.5 rounded-[10px] border border-[color:var(--line)] bg-[color:var(--bg-elev)]/50 px-2 py-2"
            >
              <span className="grid h-6 w-6 place-items-center rounded-[7px] bg-[color:var(--gold)]/15 text-[11px] text-[color:var(--gold-soft)]">
                {s.icon}
              </span>
              <div className="flex-1">
                <p className="text-[9.5px] font-semibold text-[color:var(--ink)]">{s.label}</p>
                <p className="text-[7.5px] text-[color:var(--ink-dim)]">{s.hour} · rotina fixa</p>
              </div>
              <span className="font-serif text-[9px] italic text-[color:var(--gold-soft)]">
                {s.tasks}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto mb-4 flex items-center justify-between rounded-[10px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-2.5 py-2">
          <span className="text-[7.5px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
            Progresso semanal
          </span>
          <div className="flex items-center gap-1.5">
            <div className="h-[3px] w-10 overflow-hidden rounded-full bg-[color:var(--line-strong)]">
              <div className="h-full w-[72%] bg-[color:var(--gold)]" />
            </div>
            <span className="font-serif text-[8.5px] italic text-[color:var(--gold-soft)]">
              72%
            </span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

const members = [
  { name: 'Mãe', role: 'Adulto', initial: 'M', tasks: 5, color: 'var(--gold)' },
  { name: 'Pai', role: 'Adulto', initial: 'P', tasks: 3, color: 'var(--violet)' },
  { name: 'Miguel', role: 'Filho · 9', initial: 'M', tasks: 4, color: 'var(--warm)' },
  { name: 'Pedro', role: 'Filho · 7', initial: 'P', tasks: 3, color: 'var(--gold-soft)' },
];

export function CollabMockup() {
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col px-4 pt-5">
        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
          A nossa
        </p>
        <h3 className="mt-1 font-serif text-[17px] italic leading-tight text-[color:var(--ink)]">
          Família
        </h3>

        <div className="mt-3 flex items-center justify-between rounded-[10px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-2.5 py-2">
          <div>
            <p className="text-[7.5px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
              Tarefas do dia
            </p>
            <p className="mt-0.5 font-serif text-[13px] italic text-[color:var(--ink)]">15 ativas</p>
          </div>
          <div className="flex -space-x-1.5">
            {members.map((m) => (
              <span
                key={m.name}
                className="grid h-6 w-6 place-items-center rounded-full border-2 text-[8.5px] font-semibold text-[color:var(--on-gold)]"
                style={{
                  background: m.color,
                  borderColor: 'var(--bg-elev)',
                }}
              >
                {m.initial}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 space-y-1.5">
          {members.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-2.5 rounded-[10px] border border-[color:var(--line)] bg-[color:var(--bg-elev)]/50 px-2 py-2"
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold text-[color:var(--on-gold)]"
                style={{ background: m.color }}
              >
                {m.initial}
              </span>
              <div className="flex-1">
                <p className="text-[9.5px] font-semibold text-[color:var(--ink)]">{m.name}</p>
                <p className="text-[7.5px] text-[color:var(--ink-dim)]">{m.role}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-serif text-[9px] italic text-[color:var(--gold-soft)]">
                  {m.tasks}
                </span>
                <span className="text-[7px] uppercase text-[color:var(--ink-dim)]">tarefas</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto mb-4 flex items-center gap-2 rounded-[10px] border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-2.5 py-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[10px] text-[color:var(--gold-soft)]">
            ◎
          </span>
          <p className="text-[8.5px] font-medium text-[color:var(--ink)]">
            Todos sincronizados em tempo real
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

const rewards = [
  { label: 'Tempo extra de tela', points: 200, progress: 85 },
  { label: 'Escolher o filme', points: 150, progress: 60 },
  { label: 'Passeio de bike', points: 300, progress: 32 },
];

export function HabitsMockup() {
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col px-4 pt-5">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--gold-soft)] text-[12px] font-semibold text-[color:var(--on-gold)]">
            M
          </span>
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
              Perfil
            </p>
            <p className="font-serif text-[14px] italic text-[color:var(--ink)]">Miguel · 9 anos</p>
          </div>
        </div>

        <div className="mt-3 rounded-[12px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[7.5px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
                Saldo
              </p>
              <p className="mt-1 font-serif text-[24px] italic leading-none text-[color:var(--gold-soft)]">
                820
              </p>
              <p className="mt-0.5 text-[7.5px] text-[color:var(--ink-dim)]">pontos acumulados</p>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-2 py-1">
              <span className="text-[10px]">🔥</span>
              <span className="font-serif text-[9px] italic text-[color:var(--gold-soft)]">
                7 dias
              </span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1">
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <div
                key={i}
                className="grid h-4 place-items-center rounded-[3px] bg-[color:var(--gold)]/80 text-[7px] font-semibold text-[color:var(--on-gold)]"
              >
                ✓
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-[7.5px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          Recompensas
        </p>
        <div className="mt-1.5 space-y-1.5">
          {rewards.map((r) => (
            <div
              key={r.label}
              className="rounded-[10px] border border-[color:var(--line)] bg-[color:var(--bg-elev)]/50 p-2"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-[9px] font-semibold text-[color:var(--ink)]">{r.label}</p>
                <span className="font-serif text-[8.5px] italic text-[color:var(--gold-soft)]">
                  {r.points}
                </span>
              </div>
              <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-[color:var(--line-strong)]">
                <div
                  className="h-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold-soft)]"
                  style={{ width: `${r.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto mb-4" />
      </div>
    </PhoneFrame>
  );
}
