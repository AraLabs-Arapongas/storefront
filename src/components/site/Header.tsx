'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogoLockup } from './Logo';
import { ProductTile } from './ProductMarks';
import { PRODUCT_LINES } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';

const TOP_LINKS = [
  { label: 'Sob medida', href: '/sob-medida' },
  { label: 'Guias', href: '/guias' },
  { label: 'Empresa', href: '/empresa' },
];

const CONTACT = contactHref('Quero falar com a AraLabs');

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  // Set when the panel is closed with the toggle button or Escape while the pointer/focus is still
  // inside: hover and focus-within don't reopen it until they leave the wrapper.
  const [productsSuppressed, setProductsSuppressed] = useState(false);
  const closeProducts = () => {
    setProductsOpen(false);
    setProductsSuppressed(false);
  };

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
      <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            aria-label="AraLabs: Tecnologia simples para pequenos negócios"
            onClick={() => setOpen(false)}
          >
            <LogoLockup
              decorative
              markHeight={38}
              className="text-[color:var(--ink)] transition group-hover:text-[color:var(--gold-soft)]"
              tagline="Tecnologia simples para pequenos negócios"
              taglineClassName="hidden text-[color:var(--ink-dim)] sm:block"
            />
          </Link>

          <nav
            className="hidden items-center gap-8 text-[15px] font-medium text-[color:var(--ink-muted)] lg:flex"
            aria-label="Navegação principal"
          >
            {/* Disclosure: the "Produtos" link navigates; the small button next to it toggles the
                panel. Hover and focus-within also open it on desktop; Escape closes it. */}
            <div
              className="relative flex items-center gap-0.5"
              onMouseEnter={() => !productsSuppressed && setProductsOpen(true)}
              onMouseLeave={closeProducts}
              onFocus={() => !productsSuppressed && setProductsOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) closeProducts();
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Escape' || !productsOpen) return;
                setProductsOpen(false);
                setProductsSuppressed(true);
                e.currentTarget.querySelector<HTMLButtonElement>('button')?.focus();
              }}
            >
              <Link
                href="/produtos"
                onClick={closeProducts}
                className="transition hover:text-[color:var(--ink)]"
              >
                Produtos
              </Link>
              <button
                type="button"
                aria-expanded={productsOpen}
                aria-controls="products-panel"
                aria-label="Abrir lista de produtos"
                onClick={(e) => {
                  // A mouse click lands after hover has already opened the panel: keep it open.
                  // Keyboard activation (detail 0) still toggles.
                  if (e.detail > 0 && productsOpen) return;
                  if (productsOpen) {
                    setProductsOpen(false);
                    setProductsSuppressed(true);
                  } else {
                    setProductsOpen(true);
                    setProductsSuppressed(false);
                  }
                }}
                className="grid h-6 w-5 place-items-center rounded transition hover:text-[color:var(--ink)]"
              >
                <span
                  aria-hidden="true"
                  className={`text-[10px] transition ${productsOpen ? 'rotate-180' : ''}`}
                >
                  ▾
                </span>
              </button>
              <div
                id="products-panel"
                className={`absolute left-1/2 top-full z-50 w-[330px] -translate-x-1/2 pt-3 transition-all duration-150 ${
                  productsOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
                }`}
              >
                <ul className="overflow-hidden rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                  {PRODUCT_LINES.map((g) => (
                    <li key={g.line}>
                      <p className="px-3 pb-1 pt-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                        {g.label}
                      </p>
                      <ul>
                        {g.items.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={p.href}
                              onClick={closeProducts}
                              className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-[color:var(--bg)]"
                            >
                              <ProductTile product={p} size={34} />
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center gap-2 text-[14.5px] font-semibold text-[color:var(--ink)]">
                                  {p.name}
                                  {p.status !== 'No ar' ? (
                                    <span
                                      className="rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.12em]"
                                      style={{ background: p.colorSoft, color: p.color }}
                                    >
                                      {p.status}
                                    </span>
                                  ) : null}
                                </span>
                                <span className="block truncate text-[12.5px] text-[color:var(--ink-dim)]">
                                  {p.audience}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  <li className="border-t border-[color:var(--line)] mt-1 pt-1">
                    <Link
                      href="/produtos"
                      onClick={closeProducts}
                      className="block rounded-xl px-3 py-2 text-[13.5px] font-semibold text-[color:var(--gold-soft)] transition hover:bg-[color:var(--bg)]"
                    >
                      Ver todos os produtos →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {TOP_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative transition hover:text-[color:var(--ink)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={CONTACT}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-[14.5px] font-semibold text-[color:var(--bg)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Falar com a gente
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 lg:hidden"
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

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[color:var(--ink)]/30 backdrop-blur-md transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-[76px] mx-4 max-h-[calc(100svh-96px)] overflow-y-auto rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg)] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col" aria-label="Menu móvel">
            {PRODUCT_LINES.map((g) => (
              <div key={g.line} className="mb-1">
                <p className="px-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink-dim)]">
                  {g.label}
                </p>
                <ul className="mt-1.5 space-y-0.5">
                  {g.items.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={p.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-[color:var(--bg-elev)]"
                      >
                        <ProductTile product={p} size={38} />
                        <span className="min-w-0 flex-1">
                          <span className="block text-[16px] font-semibold text-[color:var(--ink)]">
                            {p.name}
                          </span>
                          <span className="block truncate text-[13px] text-[color:var(--ink-dim)]">
                            {p.audience}
                          </span>
                        </span>
                        {p.status !== 'No ar' ? (
                          <span
                            className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
                            style={{ background: p.colorSoft, color: p.color }}
                          >
                            {p.status}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-3 border-t border-[color:var(--line)] pt-2">
              {[{ label: 'Todos os produtos', href: '/produtos' }, ...TOP_LINKS].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-3 py-3.5 text-[17px] font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--bg-elev)]"
                >
                  {l.label}
                  <span className="text-[color:var(--ink-dim)]">→</span>
                </Link>
              ))}
            </div>
            <a
              href={CONTACT}
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-4 py-4 text-[15px] font-semibold text-[color:var(--bg)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Falar com a gente →
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
