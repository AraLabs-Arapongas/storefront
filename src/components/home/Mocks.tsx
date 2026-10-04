import {
  Check,
  CalendarDays,
  Users,
  QrCode,
  Mail,
  Volume2,
  User,
  Hand,
  GlassWater,
  Smile,
  Flame,
  BookOpen,
  Timer,
} from 'lucide-react';
import { productBySlug } from '@/lib/products';

/*
 * Illustrative product UI built in HTML/CSS for the home page. Names, dates and values are
 * examples (marked as such on the page), not customers or metrics.
 */

export function KomyxStage() {
  const k = productBySlug('komyx');
  return (
    <div className="relative mx-auto w-full max-w-[560px] pb-6 lg:pb-0">
      {/* Main party card (buffet side) */}
      <div className="reveal-pop relative z-10 rounded-[26px] bg-[#fffaf3] p-5 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(40,0,15,0.55)] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="grid h-[68px] w-[60px] shrink-0 place-items-center rounded-2xl text-white"
              style={{ background: k.colorInk }}
            >
              <span className="text-center leading-none">
                <span className="block text-[24px] font-extrabold">27</span>
                <span className="mt-1 block text-[10px] font-bold tracking-[0.18em]">NOV</span>
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                Festa confirmada
              </p>
              <p className="mt-1 text-[20px] font-bold leading-tight tracking-tight sm:text-[24px]">
                Aniversário do Samuel
              </p>
              <p className="mt-1 text-[13.5px] text-[color:var(--ink-muted)]">
                18:30 · Buffet Alegria
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-baseline justify-between text-[13px]">
            <span className="inline-flex items-center gap-2 font-semibold">
              Convidados
              <span className="hidden rounded-full bg-[#e7f5ec] px-2 py-0.5 text-[10.5px] font-semibold text-[#1d7a45] sm:inline">
                Contrato aceito
              </span>
            </span>
            <span className="text-[color:var(--ink-muted)]">
              <strong className="text-[color:var(--ink)]">72</strong> de 84 confirmados
            </span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[color:var(--bg-elev)]">
            <div className="h-full rounded-full" style={{ width: '86%', background: k.color }} />
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-3 gap-2 text-[11.5px] font-semibold text-[color:var(--ink-muted)]">
          {[
            { icon: CalendarDays, label: 'Agenda' },
            { icon: Users, label: 'Lista' },
            { icon: QrCode, label: 'Portaria' },
          ].map((x) => (
            <li
              key={x.label}
              className="flex flex-col items-center gap-1.5 rounded-xl bg-[color:var(--bg)] py-3"
            >
              <x.icon className="h-4 w-4" style={{ color: k.colorInk }} />
              {x.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Quote approved */}
      <div className="reveal-pop relative z-20 -mt-5 ml-auto mr-2 w-[min(78%,260px)] rotate-[2deg] rounded-[20px] bg-[color:var(--dark)] p-4 text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] sm:absolute sm:-right-6 sm:-top-24 sm:mt-0 lg:-right-10">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Orçamento
        </p>
        <p className="mt-1 text-[26px] font-extrabold tracking-tight">R$ 4.800</p>
        <p className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#8fe3b0]">
          <Check className="h-3.5 w-3.5" strokeWidth={3} /> Aprovado pelo cliente
        </p>
      </div>

      {/* Client app: the family follows the party */}
      <div className="reveal-pop relative z-20 -mt-3 w-[min(82%,250px)] -rotate-[3deg] rounded-[30px] border-[6px] border-[color:var(--dark)] bg-[#fffaf3] p-3.5 text-[color:var(--ink)] shadow-[0_30px_60px_-25px_rgba(40,0,15,0.6)] sm:absolute sm:-bottom-32 sm:-left-6 sm:mt-0 lg:-left-14">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          App do cliente
        </p>
        <p className="mt-1 text-center text-[15px] font-bold tracking-tight">A festa do Samuel</p>
        <ul className="mt-3 space-y-1.5 text-[12.5px]">
          <li className="flex items-center justify-between rounded-xl bg-[color:var(--bg)] px-3 py-2">
            <span className="font-semibold">Parcela via Pix</span>
            <span className="font-semibold text-[#1d7a45]">Paga</span>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-[color:var(--bg)] px-3 py-2">
            <span className="font-semibold">Convidados</span>
            <span className="text-[color:var(--ink-muted)]">84 na lista</span>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-[color:var(--bg)] px-3 py-2">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <Mail className="h-3.5 w-3.5" style={{ color: k.colorInk }} /> Convite
            </span>
            <span className="text-[color:var(--ink-muted)]">enviado</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function CasaLeveMock() {
  const p = productBySlug('casa-leve');
  const rows = [
    { t: 'Arrumar a cama', who: 'Ana', pts: 10, done: true },
    { t: 'Dar comida ao gato', who: 'Léo', pts: 5, done: true },
    { t: 'Guardar os brinquedos', who: 'Ana', pts: 10, done: false },
  ];
  return (
    <div className="w-full max-w-[340px] rounded-[24px] bg-[#fffaf3] p-5 shadow-[0_30px_60px_-30px_rgba(36,29,21,0.45)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
        Tarefas de hoje
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (
          <li
            key={r.t}
            className="flex items-center gap-3 rounded-2xl bg-[color:var(--bg)] px-3 py-2.5 text-[13.5px]"
          >
            <span
              className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2"
              style={{
                borderColor: p.colorInk,
                background: r.done ? p.colorInk : 'transparent',
              }}
            >
              {r.done ? <Check className="h-3 w-3 text-white" strokeWidth={3.5} /> : null}
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={`block font-semibold ${r.done ? 'text-[color:var(--ink-dim)] line-through' : 'text-[color:var(--ink)]'}`}
              >
                {r.t}
              </span>
              <span className="block text-[11.5px] text-[color:var(--ink-dim)]">{r.who}</span>
            </span>
            <span className="text-[12px] font-bold" style={{ color: p.colorInk }}>
              +{r.pts}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArakidsMock() {
  const p = productBySlug('arakids');
  const ages = ['2–3', '4–5', '6–7', '8–10'];
  return (
    <div
      className="w-full max-w-[340px] rounded-[24px] p-5 text-white shadow-[0_30px_60px_-30px_rgba(10,40,80,0.6)]"
      style={{ background: p.colorInk }}
    >
      <p className="text-[18px] font-extrabold tracking-tight">Pra onde vamos hoje?</p>
      <ul className="mt-4 grid grid-cols-2 gap-2">
        {ages.map((a, i) => (
          <li
            key={a}
            className={`rounded-2xl px-3 py-3 ${i === 1 ? 'bg-[#ffe08a] text-[#1b3a5c]' : 'bg-white/14'}`}
          >
            <span className="block text-[20px] font-extrabold leading-none">{a}</span>
            <span className="mt-1 block text-[11px] font-semibold opacity-80">anos</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[12px] text-white/80">Sem anúncio · sem cadastro</p>
    </div>
  );
}

export function LumoMock() {
  const p = productBySlug('lumo');
  const cards = [
    { icon: User, label: 'eu' },
    { icon: Hand, label: 'quero' },
    { icon: GlassWater, label: 'água' },
    { icon: Smile, label: 'brincar' },
  ];
  return (
    <div className="w-full max-w-[340px] rounded-[24px] bg-[#fffaf3] p-5 shadow-[0_30px_60px_-30px_rgba(36,29,21,0.45)]">
      <div
        className="flex items-center gap-2 rounded-2xl px-3 py-2.5"
        style={{ background: p.colorSoft }}
      >
        <span className="flex-1 text-[15px] font-bold" style={{ color: p.colorInk }}>
          eu quero água
        </span>
        <span
          className="grid h-8 w-8 place-items-center rounded-full text-white"
          style={{ background: p.colorInk }}
        >
          <Volume2 className="h-4 w-4" />
        </span>
      </div>
      <ul className="mt-3 grid grid-cols-4 gap-2">
        {cards.map((c) => (
          <li
            key={c.label}
            className="flex flex-col items-center gap-1 rounded-xl border-2 bg-white px-1 py-2.5 text-[11.5px] font-bold text-[color:var(--ink)]"
            style={{ borderColor: p.colorSoft }}
          >
            <c.icon className="h-5 w-5" style={{ color: p.colorInk }} />
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SonoLeveMock() {
  return (
    <div className="w-full max-w-[300px] rounded-[28px] bg-[#0b1020] p-5 text-[#eef0fb] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b91b3]">
        Noite 3 · próximo check-in
      </p>
      <div className="mx-auto mt-4 grid h-36 w-36 place-items-center rounded-full border-[6px] border-[#22284a] [border-top-color:#c8b6ff] [border-right-color:#c8b6ff]">
        <span className="text-center">
          <span className="block text-[34px] font-bold tabular-nums leading-none">05:00</span>
          <span className="mt-1 block text-[11px] text-[#8b91b3]">minutos</span>
        </span>
      </div>
      <p className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-[#c8b6ff]">
        <Timer className="h-3.5 w-3.5" /> Check-in curto, voz baixa.
      </p>
    </div>
  );
}

export function JornadasMock() {
  const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
  return (
    <div className="w-full max-w-[300px] rounded-[28px] bg-[#0b1118] p-5 text-[#eef3f7] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
      <p className="flex items-center gap-2 text-[13px] font-semibold text-[#f2a33c]">
        <Flame className="h-4 w-4" /> Sequência de 5 dias
      </p>
      <ul className="mt-3 flex justify-between">
        {days.map((d, i) => (
          <li
            key={i}
            className={`grid h-8 w-8 place-items-center rounded-full text-[11px] font-bold ${
              i < 5 ? 'bg-[#f2a33c] text-[#1a1206]' : 'border border-[#2a3a4d] text-[#6c7886]'
            }`}
          >
            {d}
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-2xl bg-[#121a23] p-3.5">
        <p className="flex items-center gap-2 text-[13px] font-semibold">
          <BookOpen className="h-4 w-4 text-[#f6c84c]" /> Livro da vez
        </p>
        <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[#1e2c3b]">
          <div className="h-full w-[62%] rounded-full bg-[#f6c84c]" />
        </div>
        <p className="mt-2 text-[11.5px] text-[#a7b2bf]">186 de 300 páginas</p>
      </div>
    </div>
  );
}
