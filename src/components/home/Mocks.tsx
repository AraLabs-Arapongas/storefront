import { Flame, BookOpen, Timer, Coffee } from 'lucide-react';

/*
 * Illustrative product UI built in HTML/CSS for the home page. Names, dates and values are
 * examples (marked as such on the page), not customers or metrics.
 */

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

export function LeBaristaMock() {
  // Target window 25–30 s on a 0–40 s track.
  return (
    <div className="w-full max-w-[300px] rounded-[28px] bg-[#1b1310] p-5 text-[#f4eadf] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
      <p className="flex items-center gap-2 text-[13px] font-semibold text-[#e3a857]">
        <Coffee className="h-4 w-4" /> Espresso · shot 3
      </p>
      <p className="mt-4 text-[44px] font-bold tabular-nums leading-none tracking-tight">
        27 s{' '}
        <span className="align-middle text-[14px] font-semibold text-[#e3a857]">· No alvo</span>
      </p>
      <div className="relative mt-4 h-2 rounded-full bg-[#33251e]">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 rounded-full bg-[#e3a857]/35"
          style={{ left: '62.5%', width: '12.5%' }}
        />
        <span
          aria-hidden="true"
          className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1b1310] bg-[#e3a857]"
          style={{ left: '67.5%' }}
        />
      </div>
      <p className="mt-2 text-[11.5px] text-[#b9a999]">Alvo: 25 a 30 s · 18 g → 36 g</p>
    </div>
  );
}
