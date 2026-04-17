'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogoMark, LogoWordmark } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Empresa', href: '/empresa' },
  { label: 'Tese', href: '/tese' },
  { label: 'Casa Leve', href: '/casa-leve' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="AraLabs — ir para a home"
            onClick={() => setOpen(false)}
          >
            <LogoMark className="h-11 w-11 text-[color:var(--ink)] transition group-hover:text-[color:var(--gold-soft)]" />
            <LogoWordmark className="hidden h-7 w-auto text-[color:var(--ink)] transition group-hover:text-[color:var(--gold-soft)] md:block" />
          </Link>

          <nav
            className="hidden items-center gap-8 text-[15px] font-medium text-[color:var(--ink-muted)] md:flex"
            aria-label="Navegação principal"
          >
            {links.map((l) =>
              l.href.startsWith('#') ? (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative transition hover:text-[color:var(--ink)]"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="relative transition hover:text-[color:var(--ink)]"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-4 py-2 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
            >
              Falar com a gente
              <span aria-hidden="true" className="text-[color:var(--gold-soft)]">
                →
              </span>
            </a>
            <ThemeSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={`absolute left-0 right-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-[6px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-[6px] h-[2px] rounded-full bg-current transition-all duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-[6px] -rotate-45' : 'top-[12px]'
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile sheet — overlay, doesn't push header */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[color:var(--bg)]/40 backdrop-blur-md transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sheet */}
        <div
          className={`absolute inset-x-0 top-[84px] mx-6 rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col" aria-label="Menu móvel">
            {links.map((l, i) =>
              l.href.startsWith('#') ? (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-[17px] font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--bg)]/80 ${
                    i < links.length - 1 ? 'border-b border-[color:var(--line)]' : ''
                  }`}
                >
                  {l.label}
                  <span className="text-[color:var(--ink-dim)]">→</span>
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-[17px] font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--bg)]/80 ${
                    i < links.length - 1 ? 'border-b border-[color:var(--line)]' : ''
                  }`}
                >
                  {l.label}
                  <span className="text-[color:var(--ink-dim)]">→</span>
                </Link>
              ),
            )}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-4 py-4 text-[15px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Falar com a gente →
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
