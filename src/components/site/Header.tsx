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
          <span className="grid h-9 w-9 place-items-center rounded-[10px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev-2)] text-[color:var(--gold-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition group-hover:border-[color:var(--gold)]/60">
            <span className="font-serif text-[17px] italic leading-none">A</span>
          </span>
          <span className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold tracking-tight text-[color:var(--ink)]">
              Aralabs
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
              HQ
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-[color:var(--ink-muted)] md:flex">
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
          className="hidden items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-4 py-2 text-[13px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)] md:inline-flex"
        >
          Falar com a gente
          <span aria-hidden className="text-[color:var(--gold-soft)]">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
