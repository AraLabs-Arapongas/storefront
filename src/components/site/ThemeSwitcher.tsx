'use client';

import { useEffect, useRef, useState } from 'react';

type ThemeId =
  | 'midnight'
  | 'espresso'
  | 'ink'
  | 'cream'
  | 'moss'
  | 'bordo'
  | 'paper'
  | 'sand'
  | 'slate'
  | 'dusk'
  | 'madeira'
  | 'medieval'
  | 'cyberpunk';

type Theme = {
  id: ThemeId;
  name: string;
  description: string;
  bg: string;
  ring: string;
  accent: string;
  premium?: boolean;
};

const themes: Theme[] = [
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Preto quente, dourado suave',
    bg: '#0d0c10',
    ring: 'rgba(243,238,228,0.16)',
    accent: '#d9a84a',
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Marrom profundo, tom humano',
    bg: '#1a130d',
    ring: 'rgba(246,239,226,0.16)',
    accent: '#e0a648',
  },
  {
    id: 'madeira',
    name: 'Madeira',
    description: 'Nogueira quente, mel âmbar',
    bg: '#1d130c',
    ring: 'rgba(244,230,207,0.18)',
    accent: '#e0a243',
  },
  {
    id: 'ink',
    name: 'Ink',
    description: 'Azul-noite, tipografia limpa',
    bg: '#0d1020',
    ring: 'rgba(200,210,240,0.18)',
    accent: '#d9a84a',
  },
  {
    id: 'moss',
    name: 'Moss',
    description: 'Verde floresta, champanhe',
    bg: '#0e1612',
    ring: 'rgba(236,240,226,0.18)',
    accent: '#cfa447',
  },
  {
    id: 'bordo',
    name: 'Bordô',
    description: 'Vinho profundo, tom luxuoso',
    bg: '#1a0d11',
    ring: 'rgba(245,232,224,0.18)',
    accent: '#e9b34a',
  },
  {
    id: 'slate',
    name: 'Slate',
    description: 'Cinza frio, accent turquesa',
    bg: '#0f1418',
    ring: 'rgba(232,238,242,0.18)',
    accent: '#5eb8a8',
  },
  {
    id: 'dusk',
    name: 'Dusk',
    description: 'Ameixa noturna, rosa dourado',
    bg: '#130b1a',
    ring: 'rgba(243,232,241,0.18)',
    accent: '#e8a4a0',
  },
  {
    id: 'cream',
    name: 'Cream',
    description: 'Claro editorial, vibe papel',
    bg: '#f5efe3',
    ring: 'rgba(36,29,21,0.18)',
    accent: '#b8822a',
  },
  {
    id: 'paper',
    name: 'Paper',
    description: 'Quase branco, tinta e vermelho',
    bg: '#f9f6ed',
    ring: 'rgba(20,17,11,0.2)',
    accent: '#c63d24',
  },
  {
    id: 'sand',
    name: 'Sand',
    description: 'Areia quente, terracota',
    bg: '#f1e8d6',
    ring: 'rgba(61,40,18,0.2)',
    accent: '#c25318',
  },
  {
    id: 'medieval',
    name: 'Medieval',
    description: 'Fortaleza de pedra, fogo da forja',
    bg: '#1a1410',
    ring: 'rgba(242,227,196,0.22)',
    accent: '#d97830',
    premium: true,
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon noturno, magenta e ciano',
    bg: '#070412',
    ring: 'rgba(0,234,255,0.28)',
    accent: '#ff2d95',
    premium: true,
  },
];

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Theme['id']>('cream');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = (localStorage.getItem('aralabs-theme') as Theme['id']) || 'cream';
    setCurrent(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const apply = (id: Theme['id']) => {
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('aralabs-theme', id);
    setCurrent(id);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Mudar tema"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-[18px] w-[18px] transition ${open ? 'rotate-45' : ''}`}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[52px] z-50 w-[320px] overflow-hidden rounded-[20px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        >
          <div className="border-b border-[color:var(--line)] px-5 py-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[color:var(--ink-dim)]">
              Tema
            </p>
            <p className="mt-1 font-serif text-base italic text-[color:var(--gold-soft)]">
              Escolha a atmosfera do site
            </p>
          </div>
          <ul className="p-2">
            {themes.map((t) => {
              const active = t.id === current;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => apply(t.id)}
                    className={`group flex w-full items-center gap-4 rounded-[14px] px-3 py-3 text-left transition ${
                      active
                        ? 'bg-[color:var(--bg-elev-2)]'
                        : 'hover:bg-[color:var(--bg-elev-2)]'
                    }`}
                  >
                    <span
                      className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full"
                      style={{
                        background: t.bg,
                        boxShadow: `inset 0 0 0 1px ${t.ring}`,
                      }}
                    >
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{ background: t.accent }}
                      />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 text-[14.5px] font-semibold text-[color:var(--ink)]">
                        {t.name}
                        {t.premium && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-1.5 py-[1px] text-[8.5px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-soft)]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-2.5 w-2.5"
                            >
                              <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Premium
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-[12.5px] text-[color:var(--ink-muted)]">
                        {t.description}
                      </span>
                    </span>
                    {active && (
                      <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                        atual
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
