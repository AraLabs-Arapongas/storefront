import type { CSSProperties } from 'react';
import { BellRing, Check } from 'lucide-react';
import { productBySlug } from '@/lib/products';
import { Phone } from './Phone';

/*
 * Hero of the Komyx page: the buffet's public page on the client's phone. On load the client
 * picks the menu (choose 4 salgados, choose 3 docinhos) and the request lands on the buffet's
 * side. Pure CSS (pk-load-*), so the server HTML and reduced motion show the final state.
 */

const d = (ms: number) => ({ '--d': ms }) as CSSProperties;

const GROUPS = [
  {
    name: 'Salgados',
    choose: 4,
    items: [
      ['Coxinha', 0],
      ['Bolinha de queijo', 1],
      ['Risole', -1],
      ['Kibe', 2],
      ['Esfiha', -1],
      ['Empadinha', 3],
      ['Enroladinho', -1],
    ],
  },
  {
    name: 'Docinhos',
    choose: 3,
    items: [
      ['Brigadeiro', 4],
      ['Beijinho', 5],
      ['Cajuzinho', -1],
      ['Bicho-de-pé', 6],
      ['Olho-de-sogra', -1],
    ],
  },
] as const;

/** Delay (ms) of the n-th pick. */
const at = (n: number) => 900 + n * 330;

export function HeroBuilder() {
  const k = productBySlug('komyx');
  const on = { background: k.colorInk, borderColor: k.colorInk, color: '#fff' };
  return (
    <div className="relative mx-auto w-full max-w-[340px] lg:mr-0">
      <Phone className="pk-load-up w-full">
        <div className="px-4 pb-4 pt-2 text-[color:var(--ink)]">
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-extrabold text-white"
              style={{ background: '#f2a33c' }}
            >
              BA
            </span>
            <div className="min-w-0 leading-tight">
              <p className="text-[13px] font-bold">Buffet Alegria</p>
              <p className="text-[10.5px] text-[color:var(--ink-dim)]">Monte a sua festa</p>
            </div>
          </div>

          <ol className="mt-3 grid grid-cols-4 gap-1 text-[9.5px] font-semibold text-[color:var(--ink-dim)]">
            {['Data', 'Pacote', 'Cardápio', 'Enviar'].map((s, i) => (
              <li key={s}>
                <span
                  className="block h-1 rounded-full"
                  style={{ background: i < 3 ? k.color : 'var(--bg-elev-2)' }}
                />
                <span className={`mt-1 block ${i === 2 ? 'text-[color:var(--ink)]' : ''}`}>
                  {s}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10.5px]">
            <p className="rounded-xl bg-[color:var(--bg)] px-2.5 py-2">
              <span className="block text-[color:var(--ink-dim)]">Data</span>
              <strong className="font-semibold">27/11 · 18:30</strong>
            </p>
            <p className="rounded-xl bg-[color:var(--bg)] px-2.5 py-2">
              <span className="block text-[color:var(--ink-dim)]">Pacote Encanto</span>
              <strong className="font-semibold">80 pessoas</strong>
            </p>
          </div>

          {GROUPS.map((g) => (
            <div key={g.name} className="mt-3.5">
              <div className="flex items-baseline justify-between">
                <p className="text-[12.5px] font-bold">{g.name}</p>
                <p className="text-[10px] font-semibold text-[color:var(--ink-dim)]">
                  escolha {g.choose}
                  <span className="ml-1.5 inline-flex gap-[3px] align-middle" aria-hidden="true">
                    {g.items
                      .filter(([, n]) => n >= 0)
                      .map(([name, n]) => (
                        <span
                          key={name}
                          className="pk-load-on inline-block h-[7px] w-[7px] rounded-full border"
                          style={{ ...on, ...d(at(n)) }}
                        />
                      ))}
                  </span>
                </p>
              </div>
              <ul className="mt-1.5 flex flex-wrap gap-1.5">
                {g.items.map(([name, n]) => (
                  <li
                    key={name}
                    className={`rounded-full border px-2.5 py-[5px] text-[10.5px] font-semibold ${
                      n >= 0
                        ? 'pk-load-on'
                        : 'border-[color:var(--line-strong)] bg-white text-[color:var(--ink-muted)]'
                    }`}
                    style={n >= 0 ? { ...on, ...d(at(n)) } : undefined}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-4 flex items-center justify-between border-t border-[color:var(--line)] pt-3">
            <p className="leading-tight">
              <span className="block text-[10px] text-[color:var(--ink-dim)]">Valor do pacote</span>
              <strong className="text-[19px] font-extrabold tracking-tight">R$ 4.800</strong>
            </p>
            <span
              className="rounded-full px-3.5 py-2 text-[11.5px] font-bold text-white"
              style={{ background: k.colorInk }}
            >
              Enviar pedido
            </span>
          </div>
        </div>
      </Phone>

      {/* The buffet's side: the request arrives ready. */}
      <div
        className="pk-load-pop relative z-10 mx-auto mt-4 w-[min(88%,270px)] rotate-[-2.5deg] rounded-[20px] bg-white p-3.5 text-[color:var(--ink)] shadow-[0_30px_60px_-20px_rgba(40,0,15,0.55)] lg:absolute lg:bottom-[0%] lg:left-[-72%] lg:mt-0 lg:w-[250px]"
        style={d(at(7) + 500)}
      >
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-dim)]">
          <span
            className="grid h-6 w-6 place-items-center rounded-full text-white"
            style={{ background: k.color }}
          >
            <BellRing className="h-3.5 w-3.5" />
          </span>
          Pedido de orçamento
        </p>
        <p className="mt-2 text-[15px] font-bold leading-tight">Aniversário do Samuel</p>
        <p className="mt-0.5 text-[12px] text-[color:var(--ink-muted)]">
          27/11 · 80 pessoas · Pacote Encanto
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#1d7a45]">
          <Check className="h-3.5 w-3.5" strokeWidth={3} /> Cardápio escolhido
        </p>
        <span
          className="mt-3 block rounded-full py-2 text-center text-[12px] font-bold text-white"
          style={{ background: 'var(--dark)' }}
        >
          Criar orçamento
        </span>
      </div>
    </div>
  );
}
