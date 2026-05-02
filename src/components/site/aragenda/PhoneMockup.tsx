/**
 * Mockup CSS-only de tela de celular pra ilustrar o produto na landing.
 * Sem screenshot real (zero dependência de asset). Conteúdo é estilizado
 * pra parecer plausível mas é genérico — se virar problema (parecer
 * "fake"), trocar por screenshot real via scripts/capture-screenshots.ts.
 */

type Variant = 'booking' | 'agenda' | 'dashboard';

type Props = {
  variant: Variant;
  className?: string;
};

export function PhoneMockup({ variant, className = '' }: Props) {
  return (
    <div
      className={`relative aspect-[9/19] w-full max-w-[220px] rounded-[36px] border-[6px] border-[color:var(--ink)] bg-[color:var(--bg)] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.25)] ${className}`}
      aria-hidden="true"
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-[color:var(--ink)]" />

      <div className="h-full w-full overflow-hidden rounded-[26px] bg-[color:var(--bg-elev)] p-3">
        {variant === 'booking' && <BookingScreen />}
        {variant === 'agenda' && <AgendaScreen />}
        {variant === 'dashboard' && <DashboardScreen />}
      </div>
    </div>
  );
}

function BookingScreen() {
  return (
    <div className="flex h-full flex-col gap-2 pt-4">
      <div className="text-center">
        <div className="mx-auto h-2 w-12 rounded bg-[color:var(--gold-soft)]/40" />
        <div className="mt-2 text-[10px] font-semibold text-[color:var(--ink)]">
          Escolha o horário
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00'].map(
          (h, i) => (
            <div
              key={h}
              className={`rounded-md py-1 text-center text-[8px] font-medium ${
                i === 4
                  ? 'bg-[color:var(--gold)] text-[color:var(--on-gold)]'
                  : 'bg-[color:var(--bg)] text-[color:var(--ink)]'
              }`}
            >
              {h}
            </div>
          ),
        )}
      </div>
      <div className="mt-auto rounded-lg bg-[color:var(--gold)] py-1.5 text-center text-[9px] font-semibold text-[color:var(--on-gold)]">
        Confirmar reserva
      </div>
    </div>
  );
}

function AgendaScreen() {
  return (
    <div className="flex h-full flex-col gap-1.5 pt-4">
      <div className="text-[10px] font-semibold text-[color:var(--ink)]">Hoje · qua</div>
      {[
        { h: '09:00', n: 'Marcos' },
        { h: '10:30', n: 'Júlia' },
        { h: '11:00', n: 'Bruno' },
        { h: '14:00', n: 'Ana' },
        { h: '15:30', n: 'Carlos' },
      ].map((a, i) => (
        <div
          key={a.h}
          className={`flex items-center gap-1.5 rounded-md p-1.5 ${
            i === 1
              ? 'bg-[color:var(--gold)]/15 ring-1 ring-[color:var(--gold)]/40'
              : 'bg-[color:var(--bg)]'
          }`}
        >
          <div className="text-[8px] font-semibold text-[color:var(--ink-muted)]">{a.h}</div>
          <div className="text-[8px] text-[color:var(--ink)]">{a.n}</div>
        </div>
      ))}
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="flex h-full flex-col gap-2 pt-4">
      <div className="text-[10px] font-semibold text-[color:var(--ink)]">Painel</div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { l: 'Hoje', v: '12' },
          { l: 'Semana', v: '47' },
          { l: 'Clientes', v: '184' },
          { l: 'Receita', v: 'R$ 3,2k' },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-[color:var(--bg)] p-1.5">
            <div className="text-[7px] uppercase tracking-wider text-[color:var(--ink-dim)]">
              {s.l}
            </div>
            <div className="text-[11px] font-bold text-[color:var(--ink)]">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-1 rounded-md bg-[color:var(--bg)] p-1.5">
        <div className="text-[7px] uppercase tracking-wider text-[color:var(--ink-dim)]">
          Próximos
        </div>
        <div className="mt-1 space-y-0.5">
          <div className="text-[8px] text-[color:var(--ink)]">14:00 · Ana</div>
          <div className="text-[8px] text-[color:var(--ink)]">15:30 · Carlos</div>
        </div>
      </div>
    </div>
  );
}
