import type { CSSProperties } from 'react';
import {
  Check,
  Copy,
  FileSignature,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Plus,
  QrCode,
  Search,
  Users,
  Wallet,
} from 'lucide-react';
import { productBySlug } from '@/lib/products';
import { FakeQr, Phone } from './Phone';

/*
 * Illustrative Komyx UI for the product page, in HTML/CSS. Each mock sits inside an <InView>
 * (on the page) and reacts once it scrolls in: a date turns confirmed, the contract gets its
 * stamp, the guests check in. Names and values are examples, labelled as such on the page.
 */

const i = (n: number) => ({ '--i': n }) as CSSProperties;
const k = () => productBySlug('komyx');

const GREEN = '#1d7a45';
const GREEN_SOFT = '#dff3e6';
const AMBER = '#b26b00';
const AMBER_SOFT = '#fdf0d5';

/** The buffet's own page (link in the Instagram bio): packages, themes, free dates. */
export function PublicPageMock() {
  const p = k();
  const packages = [
    { n: 'Alegria', d: 'até 50 pessoas', v: 'R$ 3.900' },
    { n: 'Encanto', d: 'até 80 pessoas', v: 'R$ 4.800', on: true },
    { n: 'Festão', d: 'até 150 pessoas', v: 'sob consulta' },
  ];
  const themes = [
    { n: 'Fundo do mar', c: 'linear-gradient(150deg,#4fb3d9,#1f6fb0)' },
    { n: 'Safári', c: 'linear-gradient(150deg,#e9c46a,#a8742a)' },
    { n: 'Jardim', c: 'linear-gradient(150deg,#f4a3c0,#d1497a)' },
    { n: 'Futebol', c: 'linear-gradient(150deg,#7cc47f,#2f7d4a)' },
  ];
  return (
    <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[22px] bg-white text-[color:var(--ink)] shadow-[0_50px_90px_-45px_rgba(36,29,21,0.55)] ring-1 ring-[color:var(--line)]">
      <div className="flex items-center gap-1.5 border-b border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-2.5">
        {[0, 1, 2].map((n) => (
          <span key={n} className="h-2.5 w-2.5 rounded-full bg-[color:var(--bg-elev-2)]" />
        ))}
        <span className="ml-3 truncate rounded-full bg-white px-3 py-0.5 text-[10.5px] text-[color:var(--ink-dim)]">
          a página do seu buffet · link na bio
        </span>
      </div>
      <div
        className="relative px-5 pb-5 pt-7 text-white sm:px-7"
        style={{ background: 'linear-gradient(135deg,#f2a33c,#e0582f)' }}
      >
        <span
          aria-hidden="true"
          className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-white/15"
        />
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[13px] font-extrabold text-[#e0582f]">
          BA
        </span>
        <p className="mt-3 text-[22px] font-extrabold leading-none tracking-tight sm:text-[26px]">
          Buffet Alegria
        </p>
        <p className="mt-1.5 text-[12px] text-white/90">
          Um evento por dia: no dia da sua festa, o salão é só seu.
        </p>
      </div>
      <div className="px-5 pb-5 pt-4 sm:px-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          Pacotes
        </p>
        <ul className="mt-2 grid grid-cols-3 gap-2">
          {packages.map((x, n) => (
            <li
              key={x.n}
              className="iv iv-up rounded-2xl border p-2.5 sm:p-3"
              style={{
                borderColor: x.on ? p.colorInk : 'var(--line-strong)',
                boxShadow: x.on ? `0 0 0 1px ${p.colorInk}` : undefined,
                ...i(n + 1),
              }}
            >
              <p className="text-[12px] font-bold sm:text-[13px]">{x.n}</p>
              <p className="text-[10px] text-[color:var(--ink-dim)] sm:text-[10.5px]">{x.d}</p>
              <p
                className="mt-1.5 text-[11.5px] font-bold sm:text-[13px]"
                style={x.on ? { color: p.colorInk } : undefined}
              >
                {x.v}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          Temas de festa
        </p>
        <ul className="mt-2 grid grid-cols-4 gap-2">
          {themes.map((t, n) => (
            <li key={t.n} className="iv iv-pop" style={i(n + 3)}>
              <span className="block aspect-[4/3] rounded-xl" style={{ background: t.c }} />
              <span className="mt-1 block truncate text-[10px] font-semibold text-[color:var(--ink-muted)] sm:text-[10.5px]">
                {t.n}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line)] pt-4">
          <p className="text-[12px] text-[color:var(--ink-muted)]">
            <strong className="font-semibold text-[color:var(--ink)]">9 datas livres</strong> em
            novembro
          </p>
          <span
            className="rounded-full px-4 py-2 text-[12px] font-bold text-white"
            style={{ background: p.colorInk }}
          >
            Montar orçamento
          </span>
        </div>
      </div>
    </div>
  );
}

/** Agenda: one party per day; the 27th goes from "aguardando sinal" to "confirmada". */
export function AgendaMock() {
  const p = k();
  // November 2026 starts on a Sunday.
  const days = Array.from({ length: 30 }, (_, n) => n + 1);
  const confirmed = new Set([7, 14, 21, 28]);
  const waiting = new Set([13]);
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="rounded-[26px] bg-white p-4 text-[color:var(--ink)] shadow-[0_40px_80px_-40px_rgba(36,29,21,0.45)] sm:p-6">
        <div className="flex items-center justify-between">
          <p className="text-[17px] font-bold tracking-tight">Novembro</p>
          <p className="flex gap-1 rounded-full bg-[color:var(--bg)] p-1 text-[11px] font-semibold text-[color:var(--ink-dim)]">
            <span className="px-2 py-0.5">Lista</span>
            <span className="px-2 py-0.5">Semana</span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[color:var(--ink)] shadow-sm">
              Mês
            </span>
          </p>
        </div>
        <ul className="mt-4 grid grid-cols-7 text-center text-[10.5px] font-semibold text-[color:var(--ink-dim)]">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((w, n) => (
            <li key={n}>{w}</li>
          ))}
        </ul>
        <ol className="mt-2 grid grid-cols-7 gap-1 sm:gap-1.5">
          {days.map((day) => {
            const isC = confirmed.has(day);
            const isW = waiting.has(day);
            const tone = isC
              ? { background: GREEN_SOFT, color: GREEN }
              : isW
                ? { background: AMBER_SOFT, color: AMBER }
                : undefined;
            if (day === 27) {
              return (
                <li
                  key={day}
                  className="pk-swap grid aspect-square text-[12px] font-bold"
                  style={i(2)}
                >
                  <span
                    aria-hidden="true"
                    className="pk-a grid place-items-center rounded-[10px] ring-2"
                    style={{
                      background: AMBER_SOFT,
                      color: AMBER,
                      ['--tw-ring-color' as string]: AMBER,
                    }}
                  >
                    27
                  </span>
                  <span
                    className="pk-b grid place-items-center rounded-[10px] text-white ring-2 ring-offset-1"
                    style={{ background: GREEN, ['--tw-ring-color' as string]: GREEN }}
                  >
                    27
                  </span>
                </li>
              );
            }
            return (
              <li
                key={day}
                className={`grid aspect-square place-items-center rounded-[10px] text-[12px] ${
                  tone ? 'font-bold' : 'text-[color:var(--ink-muted)]'
                }`}
                style={tone}
              >
                {day}
              </li>
            );
          })}
        </ol>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold text-[color:var(--ink-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: GREEN }} /> Confirmada
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: AMBER }} /> Aguardando
            sinal
          </span>
        </p>
      </div>

      {/* The day's card: flips to confirmed with the date. */}
      <div className="relative z-10 ml-auto mr-2 mt-4 w-[min(86%,270px)] rotate-[2deg] rounded-[20px] bg-[color:var(--dark)] p-4 text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] sm:absolute sm:-right-10 sm:-top-10 sm:mt-0">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/60">
          27/11 · 18:30
        </p>
        <p className="mt-1 text-[16px] font-bold">Aniversário do Samuel</p>
        <div className="pk-swap mt-1.5 grid text-[12.5px] font-semibold" style={i(2)}>
          <span aria-hidden="true" className="pk-a" style={{ color: '#f6c86b' }}>
            Aguardando sinal · reservada até 20/10
          </span>
          <span className="pk-b inline-flex items-center gap-1.5 text-[#8fe3b0]">
            <Check className="h-3.5 w-3.5" strokeWidth={3} /> Sinal recebido · confirmada
          </span>
        </div>
      </div>

      <p
        className="iv iv-up mt-4 flex items-center gap-2 rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-3.5 py-2.5 text-[12.5px] text-[color:var(--ink-muted)] sm:mt-5"
        style={i(6)}
      >
        <span className="tri text-[7px]" style={{ color: p.colorInk }} aria-hidden="true" />
        <span>
          <strong className="font-semibold text-[color:var(--ink)]">28/11 já tem festa.</strong> A
          equipe vê “dia ocupado”; só a dona abre exceção.
        </span>
      </p>
    </div>
  );
}

/** Contract accepted by link + Pix with identifier + installments that can be charged. */
export function ContractPixMock() {
  const p = k();
  return (
    <div className="relative mx-auto grid w-full max-w-[520px] gap-4 sm:block sm:h-[470px]">
      {/* Contract */}
      <div className="relative rounded-[22px] bg-[#fffaf3] p-5 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(40,0,15,0.6)] sm:absolute sm:left-0 sm:top-0 sm:w-[300px] sm:-rotate-[2.5deg]">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          <FileSignature className="h-4 w-4" style={{ color: p.colorInk }} /> Contrato nº 0127
        </p>
        <p className="mt-2 text-[16px] font-bold leading-tight">Aniversário do Samuel · 27/11</p>
        <div className="mt-4 space-y-2" aria-hidden="true">
          {[100, 92, 96, 70, 88, 54].map((w, n) => (
            <span
              key={n}
              className="block h-[6px] rounded-full bg-[color:var(--bg-elev)]"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <p className="mb-4 mt-4 text-[12px] text-[color:var(--ink-muted)]">
          Pacote Encanto · 80 pessoas
        </p>
        <div
          className="iv iv-pop absolute -bottom-5 right-4 rotate-[-8deg] rounded-xl border-[3px] px-3 py-1.5 text-center text-[12px] font-extrabold uppercase leading-tight tracking-[0.08em]"
          style={{ borderColor: GREEN, color: GREEN, background: '#fffaf3', ...i(3) }}
        >
          Aceito pelo link
          <span className="block text-[10px] font-semibold normal-case tracking-normal">
            14/10 · 21:12
          </span>
        </div>
      </div>

      {/* Pix */}
      <div className="relative rounded-[22px] bg-[color:var(--dark)] p-5 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:absolute sm:right-0 sm:top-6 sm:w-[230px] sm:rotate-[2.5deg]">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Reserva · sinal 30%
        </p>
        <p className="mt-1 text-[24px] font-extrabold tracking-tight">R$ 1.440</p>
        <div className="mt-3 flex gap-3 sm:block">
          <FakeQr
            className="h-24 w-24 shrink-0 rounded-lg sm:h-[132px] sm:w-[132px]"
            color="#1d1812"
          />
          <div className="text-[11.5px] sm:mt-3">
            <p className="text-white/60">Identificador no extrato</p>
            <p className="font-mono text-[13px] font-semibold tracking-wider">FESTA0127</p>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-semibold">
              <Copy className="h-3 w-3" /> Pix copia e cola
            </p>
          </div>
        </div>
      </div>

      {/* Installments */}
      <div className="relative rounded-[22px] bg-white p-4 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(40,0,15,0.6)] sm:absolute sm:bottom-0 sm:left-0 sm:w-[300px] sm:-rotate-[1deg]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          Parcelas
        </p>
        <ul className="mt-2 divide-y divide-[color:var(--line)] text-[13px]">
          <li className="flex items-center justify-between gap-3 py-2">
            <span>
              <strong className="font-semibold">Sinal · 30%</strong>
              <span className="block text-[11px] text-[color:var(--ink-dim)]">no aceite</span>
            </span>
            <span className="text-right">
              <span className="block font-semibold">R$ 1.440</span>
              <span className="pk-swap inline-grid text-[11px] font-bold" style={i(4)}>
                <span aria-hidden="true" className="pk-a" style={{ color: AMBER }}>
                  Aguardando
                </span>
                <span className="pk-b" style={{ color: GREEN }}>
                  Recebida
                </span>
              </span>
            </span>
          </li>
          <li className="flex items-center justify-between gap-3 py-2">
            <span>
              <strong className="font-semibold">Saldo · 70%</strong>
              <span className="block text-[11px] text-[color:var(--ink-dim)]">até 20/11</span>
            </span>
            <span className="text-right">
              <span className="block font-semibold">R$ 3.360</span>
              <span className="text-[11px] font-bold text-[color:var(--ink-dim)]">Em aberto</span>
            </span>
          </li>
        </ul>
        <span
          className="mt-2 flex items-center justify-center gap-2 rounded-full py-2.5 text-[12.5px] font-bold text-white"
          style={{ background: GREEN }}
        >
          <MessageCircle className="h-4 w-4" /> Cobrar R$ 3.360 no WhatsApp
        </span>
      </div>
    </div>
  );
}

/** Client app: the family runs the guest list; a guest confirms from the invite link. */
export function ClientAppMock() {
  const p = k();
  const rsvps = [
    { n: 'Marina', d: '2 adultos, 1 criança' },
    { n: 'Família Oliveira', d: '2 adultos, 2 crianças' },
    { n: 'Tio Rafa', d: '1 adulto' },
  ];
  const tabs = [
    { icon: Home, l: 'Início' },
    { icon: Wallet, l: 'Pagamento' },
    { icon: Users, l: 'Convidados', on: true },
    { icon: Mail, l: 'Convite' },
    { icon: MapPin, l: 'Local' },
  ];
  return (
    <div className="relative mx-auto flex w-full max-w-[520px] flex-col items-center gap-5 sm:block sm:h-[600px]">
      <Phone className="w-[280px] sm:absolute sm:left-0 sm:top-0">
        <div className="text-[color:var(--ink)]">
          <div className="px-4 pb-3 pt-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
              27/11 · Buffet Alegria
            </p>
            <p className="text-[16px] font-bold tracking-tight">A festa do Samuel</p>
          </div>
          <div className="mx-3 rounded-[20px] p-4 text-white" style={{ background: p.colorInk }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
              Convidados
            </p>
            <p className="mt-1 text-[30px] font-extrabold leading-none tracking-tight">
              72 <span className="text-[13px] font-semibold text-white/80">confirmados de 80</span>
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/25">
              <div
                className="pk-fill h-full w-[90%] rounded-full bg-white"
                style={{ ['--from' as string]: 0.55 }}
              />
            </div>
          </div>
          <ul className="mt-3 space-y-1.5 px-3">
            {rsvps.map((r, n) => (
              <li
                key={r.n}
                className="iv iv-up flex items-center gap-2.5 rounded-2xl bg-[color:var(--bg)] px-3 py-2"
                style={i(n * 2 + 3)}
              >
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white"
                  style={{ background: p.color }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="min-w-0 text-[12px] leading-tight">
                  <strong className="block font-semibold">{r.n} confirmou</strong>
                  <span className="text-[10.5px] text-[color:var(--ink-dim)]">{r.d}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mx-3 mt-3 rounded-full border border-[color:var(--line-strong)] py-2 text-center text-[11.5px] font-bold">
            Enviar link de confirmação
          </p>
          <ul className="mt-4 grid grid-cols-5 border-t border-[color:var(--line)] px-1 pb-3 pt-2 text-[8.5px] font-semibold text-[color:var(--ink-dim)]">
            {tabs.map((t) => (
              <li
                key={t.l}
                className="flex flex-col items-center gap-1"
                style={t.on ? { color: p.colorInk } : undefined}
              >
                <t.icon className="h-4 w-4" />
                {t.l}
              </li>
            ))}
          </ul>
        </div>
      </Phone>

      {/* What the guest opens: the invite with the RSVP. */}
      <div className="w-[min(100%,250px)] rotate-[2.5deg] rounded-[24px] bg-white p-3 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(36,29,21,0.55)] sm:absolute sm:right-0 sm:top-24">
        <div
          className="relative overflow-hidden rounded-[18px] px-4 pb-5 pt-6 text-center text-white"
          style={{ background: `linear-gradient(160deg, ${p.color}, #f2a33c)` }}
        >
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-white/20"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-6 right-2 h-20 w-20 rounded-full bg-white/15"
          />
          <p className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
            Você está convidado
          </p>
          <p className="relative mt-1 text-[26px] font-extrabold leading-none tracking-tight">
            Samuel faz 6!
          </p>
          <p className="relative mt-2 text-[11.5px] text-white/90">
            27/11 · 18:30 · Buffet Alegria
          </p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5 text-center text-[11px]">
          <p className="rounded-xl bg-[color:var(--bg)] py-1.5">
            Adultos <strong className="block text-[15px]">2</strong>
          </p>
          <p className="rounded-xl bg-[color:var(--bg)] py-1.5">
            Crianças <strong className="block text-[15px]">1</strong>
          </p>
        </div>
        <div className="pk-swap mt-2 grid text-[12px] font-bold" style={i(5)}>
          <span
            aria-hidden="true"
            className="pk-a rounded-full py-2 text-center text-white"
            style={{ background: p.colorInk }}
          >
            Confirmar presença
          </span>
          <span
            className="pk-b inline-flex items-center justify-center gap-1.5 rounded-full py-2"
            style={{ background: GREEN_SOFT, color: GREEN }}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} /> Presença confirmada
          </span>
        </div>
      </div>
    </div>
  );
}

/** Portaria: guests checked in one by one, extras closed with Pix at the end. */
export function PortariaMock() {
  const p = k();
  const guests = [
    { n: 'Marina Souza', d: '+3 · 2 adultos, 1 criança', done: true },
    { n: 'Família Oliveira', d: '4 pessoas', done: true },
    { n: 'Tio Rafa', d: '1 adulto', done: true },
    { n: 'Pedro Lima', d: '2 adultos', done: false },
  ];
  return (
    <div className="relative mx-auto flex w-full max-w-[520px] flex-col items-center gap-5 sm:block sm:h-[590px]">
      <Phone className="w-[280px] sm:absolute sm:right-0 sm:top-0">
        <div className="px-4 pb-4 pt-1 text-[color:var(--ink)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
            Portaria · hoje 18:30
          </p>
          <p className="text-[15px] font-bold tracking-tight">Aniversário do Samuel</p>
          <div className="mt-3 flex items-end justify-between rounded-[18px] bg-[color:var(--dark)] px-4 py-3 text-white">
            <p className="text-[11px] font-semibold text-white/65">Chegaram</p>
            <p className="text-[28px] font-extrabold leading-none tracking-tight">
              <span className="pk-swap inline-grid tabular-nums" style={i(5)}>
                <span aria-hidden="true" className="pk-a">
                  61
                </span>
                <span className="pk-b">64</span>
              </span>
              <span className="text-[13px] font-semibold text-white/60"> de 72</span>
            </p>
          </div>
          <p className="mt-3 flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-3 py-2 text-[11.5px] text-[color:var(--ink-dim)]">
            <Search className="h-3.5 w-3.5" /> Buscar convidado
          </p>
          <ul className="mt-2.5 space-y-1.5">
            {guests.map((g, n) => (
              <li
                key={g.n}
                className="flex items-center gap-2.5 rounded-2xl bg-[color:var(--bg)] px-3 py-2"
              >
                <span className="min-w-0 flex-1 text-[12px] leading-tight">
                  <strong className="block font-semibold">{g.n}</strong>
                  <span className="text-[10.5px] text-[color:var(--ink-dim)]">{g.d}</span>
                </span>
                {g.done ? (
                  <span
                    className="cl-check grid h-7 w-7 shrink-0 place-items-center rounded-full border-2"
                    style={{ borderColor: GREEN, background: GREEN, ...i(n) }}
                  >
                    <Check
                      className="cl-check-icon iv h-3.5 w-3.5 text-white"
                      strokeWidth={3.5}
                      style={i(n + 3)}
                    />
                  </span>
                ) : (
                  <span className="rounded-full border border-[color:var(--line-strong)] px-2.5 py-1 text-[10.5px] font-bold">
                    Chegou
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-2.5 flex items-center justify-center gap-1.5 rounded-full border border-dashed border-[color:var(--line-strong)] py-2 text-[11.5px] font-bold">
            <Plus className="h-3.5 w-3.5" /> Convidado extra
          </p>
        </div>
      </Phone>

      {/* End of the party: extras closed with Pix. */}
      <div
        className="iv iv-up w-[min(100%,250px)] -rotate-[2.5deg] rounded-[22px] bg-[#fffaf3] p-4 text-[color:var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:absolute sm:bottom-6 sm:left-0"
        style={i(4)}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
          Fechar conta
        </p>
        <ul className="mt-2 space-y-1 text-[12.5px]">
          <li className="flex justify-between">
            <span>Refrigerante 2L × 4</span>
            <span className="font-semibold">R$ 60</span>
          </li>
          <li className="flex justify-between">
            <span>Hora extra</span>
            <span className="font-semibold">R$ 120</span>
          </li>
          <li className="flex justify-between border-t border-[color:var(--line)] pt-1.5 font-bold">
            <span>Extras em aberto</span>
            <span>R$ 180</span>
          </li>
        </ul>
        <div className="mt-3 flex items-center gap-3">
          <FakeQr className="h-[72px] w-[72px] shrink-0 rounded-md" color="#1d1812" />
          <div className="space-y-1 text-[10.5px] font-bold">
            {['Recebido · Pix', 'Dinheiro', 'Cartão'].map((x, n) => (
              <span
                key={x}
                className="block rounded-full px-2.5 py-1 text-center"
                style={
                  n === 0
                    ? { background: p.colorInk, color: '#fff' }
                    : { border: '1px solid var(--line-strong)' }
                }
              >
                {x}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-[10.5px] text-[color:var(--ink-dim)]">
          <QrCode className="h-3 w-3" /> Pix do valor exato dos extras
        </p>
      </div>
    </div>
  );
}

/** Komyx Balcão: a 10" tablet in kiosk mode at the door. */
export function TabletMock() {
  const p = k();
  const rows = ['Marina Souza', 'Família Oliveira', 'Tio Rafa', 'Pedro Lima', 'Ana e Beto'];
  return (
    <div className="mx-auto w-full max-w-[520px] rotate-[-1.5deg] rounded-[30px] bg-[#0f0c09] p-3 shadow-[0_50px_90px_-40px_rgba(0,0,0,0.9)] ring-1 ring-white/10 sm:p-4">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-3 rounded-[20px] bg-[#fffaf3] p-3 text-[color:var(--ink)] sm:gap-4 sm:p-5">
        <div
          className="flex flex-col justify-between rounded-[16px] p-3 text-white sm:p-4"
          style={{ background: p.colorInk }}
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-[10.5px]">
            Portaria · modo quiosque
          </p>
          <p className="mt-2 text-[28px] font-extrabold leading-none tracking-tight sm:text-[40px]">
            64<span className="text-[12px] font-semibold text-white/75 sm:text-[14px]"> de 72</span>
          </p>
          <p className="mt-2 text-[10px] text-white/80 sm:text-[11.5px]">
            Aniversário do Samuel · 18:30
          </p>
        </div>
        <ul className="space-y-1 sm:space-y-1.5">
          {rows.map((r, n) => (
            <li
              key={r}
              className="flex items-center justify-between rounded-lg bg-[color:var(--bg)] px-2 py-1 text-[9.5px] font-semibold sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-[11.5px]"
            >
              {r}
              <span
                className="grid h-4 w-4 place-items-center rounded-full sm:h-5 sm:w-5"
                style={
                  n < 3
                    ? { background: GREEN, color: '#fff' }
                    : { border: '1.5px solid var(--line-strong)' }
                }
              >
                {n < 3 ? <Check className="h-2.5 w-2.5" strokeWidth={3.5} /> : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
