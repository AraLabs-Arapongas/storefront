import { BookOpen, Flame, ScanLine, Timer } from 'lucide-react';
import { InView } from '@/components/home/InView';
import { cssI } from '@/components/site/AppHero';

/*
 * Jornadas' own moments, in the app's own palette (dark, warm, gold and ember). Values, names and
 * the book are examples, marked as such on the page.
 */

export const APP = {
  bg: '#0b1118',
  surface: '#121a23',
  line: '#2a3a4d',
  text: '#eef3f7',
  text2: '#a7b2bf',
  text3: '#6c7886',
  gold: '#f6c84c',
  ember: '#f2a33c',
  blue: '#6aa6ff',
  green: '#78c76f',
  red: '#ff7a59',
} as const;

const DAYS = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

/** Hero: the week filling in one day at a time, the book of the moment, the weekly goal. */
export function WeekStreak() {
  return (
    <figure className="relative mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-4">
      <InView
        className="relative rotate-[-1.5deg] rounded-[34px] p-6 shadow-[0_40px_80px_-34px_rgba(11,17,24,0.75)] sm:p-7"
        threshold={0.2}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[34px]"
          style={{ background: APP.bg }}
        />
        <div className="relative" style={{ color: APP.text }}>
          <p
            className="flex items-center gap-2 text-[14px] font-semibold"
            style={{ color: APP.ember }}
          >
            <Flame className="h-4 w-4" /> Sequência de 5 dias
          </p>
          <ol
            className="mt-4 grid grid-cols-7 gap-1.5 sm:gap-2"
            aria-label="Semana: cinco dias feitos"
          >
            {DAYS.map((d, k) => (
              <li
                key={k}
                className={`grid aspect-square place-items-center rounded-full text-[12px] font-bold sm:text-[13px] ${
                  k < 5 ? 'pa-jd-day' : ''
                }`}
                style={
                  k < 5
                    ? { background: APP.ember, color: '#1a1206', ...cssI(k + 2) }
                    : { border: `1.5px solid ${APP.line}`, color: APP.text3 }
                }
              >
                {d}
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-2xl p-4" style={{ background: APP.surface }}>
            <p className="flex items-center gap-2 text-[13.5px] font-semibold">
              <BookOpen className="h-4 w-4" style={{ color: APP.gold }} /> Livro da vez
            </p>
            <div
              className="mt-3 h-2.5 overflow-hidden rounded-full"
              style={{ background: '#1e2c3b' }}
            >
              <div
                className="pa-jd-fill h-full rounded-full"
                style={{ width: '62%', background: APP.gold }}
              />
            </div>
            <p className="mt-2 text-[12px]" style={{ color: APP.text2 }}>
              186 de 300 páginas
            </p>
          </div>
          <div
            className="mt-3 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl p-4"
            style={{ background: APP.surface }}
          >
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: APP.text3 }}
              >
                Meta semanal
              </p>
              <p className="mt-1 text-[22px] font-bold tabular-nums leading-none">
                3h 20{' '}
                <span className="text-[13px] font-medium" style={{ color: APP.text2 }}>
                  de 5h
                </span>
              </p>
            </div>
            <span
              className="grid h-12 w-12 place-items-center rounded-full"
              style={{ background: `conic-gradient(${APP.green} 0 67%, #1e2c3b 67% 100%)` }}
              aria-hidden="true"
            >
              <span className="h-9 w-9 rounded-full" style={{ background: APP.surface }} />
            </span>
          </div>
        </div>
      </InView>
      <figcaption className="mt-5 text-center text-[12px] text-[color:var(--ink-dim)]">
        Interface ilustrativa · valores de exemplo
      </figcaption>
    </figure>
  );
}

/** ISBN: the barcode under a scanning line, then the book as it comes back. */
export function IsbnScan() {
  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div
        className="rounded-[34px] p-5 shadow-[0_40px_80px_-34px_rgba(11,17,24,0.7)] sm:p-6"
        style={{ background: APP.bg, color: APP.text }}
      >
        <p
          className="flex items-center gap-2 text-[13px] font-semibold"
          style={{ color: APP.text2 }}
        >
          <ScanLine className="h-4 w-4" style={{ color: APP.gold }} /> Escanear ISBN
        </p>
        <div className="relative mt-4 overflow-hidden rounded-2xl bg-[#f5efe3] px-8 pb-5 pt-7">
          <div
            aria-hidden="true"
            className="mx-auto h-24 max-w-[260px]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #1d1812 0 2px, transparent 2px 4px, #1d1812 4px 7px, transparent 7px 9px, #1d1812 9px 10px, transparent 10px 13px, #1d1812 13px 16px, transparent 16px 17px)',
            }}
          />
          <p className="mt-2 text-center font-mono text-[12px] tracking-[0.2em] text-[#1d1812]">
            9 788500 000000
          </p>
          <span
            aria-hidden="true"
            className="pa-jd-scan absolute inset-x-4 top-6 h-[2px] rounded-full"
            style={{ background: APP.red, boxShadow: `0 0 12px ${APP.red}` }}
          />
        </div>
        <div
          className="pa-jd-found mt-4 flex gap-4 rounded-2xl p-4"
          style={{ background: APP.surface }}
        >
          <span
            aria-hidden="true"
            className="grid h-[84px] w-[58px] shrink-0 place-items-end rounded-[6px] p-1.5 text-[7.5px] font-bold leading-tight text-[#1a1206]"
            style={{ background: `linear-gradient(160deg, ${APP.gold}, ${APP.ember})` }}
          >
            DOM CASMURRO
          </span>
          <div className="min-w-0">
            <p className="text-[16px] font-bold leading-tight">Dom Casmurro</p>
            <p className="mt-1 text-[13px]" style={{ color: APP.text2 }}>
              Machado de Assis
            </p>
            <p className="mt-2 text-[12px]" style={{ color: APP.text3 }}>
              256 páginas · capa encontrada
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-5 text-center text-[12px] text-[color:var(--ink-dim)]">
        Interface ilustrativa · livro e código de exemplo
      </figcaption>
    </figure>
  );
}

/** A focus session in progress and the week's minutes, side by side. */
export function FocusAndWeek() {
  const week = [35, 50, 20, 45, 60, 0, 25];
  const goal = 40;
  return (
    <InView className="grid gap-4 sm:grid-cols-2" threshold={0.3}>
      <div className="rounded-[28px] p-6" style={{ background: APP.surface, color: APP.text }}>
        <p
          className="flex items-center gap-2 text-[13px] font-semibold"
          style={{ color: APP.text2 }}
        >
          <Timer className="h-4 w-4" style={{ color: APP.blue }} /> Sessão de foco
        </p>
        <p className="mt-6 text-[clamp(3rem,7vw,4.4rem)] font-bold tabular-nums leading-none tracking-tight">
          18:42
        </p>
        <p className="mt-3 text-[13px]" style={{ color: APP.text2 }}>
          Curso de inglês · o tempo entra na jornada ao terminar
        </p>
        <div className="mt-6 h-2 overflow-hidden rounded-full" style={{ background: '#1e2c3b' }}>
          <div
            className="pa-jd-fill h-full rounded-full"
            style={{ width: '74%', background: APP.blue }}
          />
        </div>
      </div>
      <div className="rounded-[28px] p-6" style={{ background: APP.surface, color: APP.text }}>
        <p className="text-[13px] font-semibold" style={{ color: APP.text2 }}>
          Minutos por dia
        </p>
        <div className="relative mt-6 flex h-[132px] items-end gap-2">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 border-t border-dashed"
            style={{ bottom: `${(goal / 60) * 100}%`, borderColor: APP.gold }}
          />
          {week.map((m, k) => (
            <span
              key={k}
              className="pa-sl-bar block flex-1 rounded-t-[7px]"
              style={{
                height: m ? `${(m / 60) * 100}%` : '3px',
                background: m >= goal ? APP.gold : '#3a4a5c',
                ...cssI(k * 0.6),
              }}
            />
          ))}
        </div>
        <div
          className="mt-2 grid grid-cols-7 gap-2 text-center text-[11px] font-semibold"
          style={{ color: APP.text3 }}
        >
          {DAYS.map((d, k) => (
            <span key={k}>{d}</span>
          ))}
        </div>
        <p className="mt-4 text-[12.5px]" style={{ color: APP.text2 }}>
          Linha dourada: a meta que você definiu por dia.
        </p>
      </div>
    </InView>
  );
}
