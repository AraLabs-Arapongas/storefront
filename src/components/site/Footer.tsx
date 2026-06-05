import { LogoMark, LogoWordmark } from './Logo';

const columns = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '/empresa' },
      { label: 'Tese', href: '/tese' },
      { label: 'Parcerias', href: '/empresa#parcerias' },
    ],
  },
  {
    title: 'Produtos',
    links: [
      { label: 'Portfólio', href: '/produtos' },
      { label: 'Aragenda', href: '/ara-agenda' },
      { label: 'Casa Leve', href: '/produtos/casa-leve' },
      { label: 'Sono Leve', href: '/produtos/sono-leve' },
      { label: 'Lumo', href: '/produtos/lumo' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'contato@aralabs.com.br', href: 'mailto:contato@aralabs.com.br' },
      { label: 'trabalhe@aralabs.com.br', href: 'mailto:trabalhe@aralabs.com.br' },
      { label: 'Arapongas, Paraná — Brasil', href: null },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contato" className="relative">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 border-b border-[color:var(--line)] pb-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="AraLabs">
              <LogoMark className="h-14 w-14 text-[color:var(--ink)]" />
              <LogoWordmark className="hidden h-10 w-auto text-[color:var(--ink)] md:block" />
            </a>
            <p className="mt-6 max-w-sm text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Empresa brasileira de produtos digitais úteis, claros e bem estruturados, conectados
              com problemas reais do cotidiano.
            </p>
            <p className="mt-6 font-serif text-sm italic text-[color:var(--gold-soft)]">
              aralabs.com.br
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a
                        href={l.href}
                        className="text-[15.5px] text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span className="text-[15.5px] text-[color:var(--ink-muted)]">{l.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-[12px] text-[color:var(--ink-dim)] md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span>© 2026 Aralabs.</span>
            <span>Empresa-mãe de produtos digitais.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[color:var(--ink)]">
              Privacidade
            </a>
            <a href="#" className="hover:text-[color:var(--ink)]">
              Termos
            </a>
            <span className="font-serif italic text-[color:var(--gold-soft)]">
              Feito em Arapongas, PR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
