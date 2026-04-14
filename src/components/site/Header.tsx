import { LogoMark } from './Logo';

const links = [
  { label: 'A Aralabs', href: '#empresa' },
  { label: 'Tese', href: '#tese' },
  { label: 'Problema', href: '#problema' },
  { label: 'Casa Leve', href: '#casa-leve' },
  { label: 'Princípios', href: '#principios' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <LogoMark className="h-9 w-9 text-[color:var(--ink)] transition group-hover:text-[color:var(--gold-soft)]" />
          <span className="text-[15px] font-semibold tracking-tight text-[color:var(--ink)]">
            Aralabs
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-[color:var(--ink-muted)] md:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative transition hover:text-[color:var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-4 py-2 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)] md:inline-flex"
        >
          Falar com a gente
          <span aria-hidden="true" className="text-[color:var(--gold-soft)]">
            →
          </span>
        </a>

        <details className="md:hidden">
          <summary className="inline-flex items-center justify-between gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-4 py-2 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]">
            Menu
            <span aria-hidden="true">▾</span>
          </summary>

          <div className="mt-3 space-y-2 rounded-[1.75rem] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-4 shadow-lg">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-[color:var(--ink)] transition hover:bg-[color:var(--bg)]/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="block rounded-2xl bg-[color:var(--gold)] px-4 py-3 text-[15px] font-semibold text-[#1a1410] transition hover:bg-[color:var(--gold-soft)]"
            >
              Falar com a gente
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
