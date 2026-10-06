import Link from 'next/link';
import { LogoLockup } from './Logo';
import { PRODUCTS, type Product } from '@/lib/products';
import { CONTACT_EMAIL, JOBS_EMAIL, CONTACT_WHATSAPP } from '@/lib/seo/site';

/** Products with their own privacy policy and terms (App Store requirement for the apps). */
const LEGAL = PRODUCTS.filter((p) =>
  (['casa-leve', 'lumo', 'jornadas', 'sono-leve', 'le-barista'] as Product['slug'][]).includes(
    p.slug,
  ),
);

const columns: { title: string; links: { label: string; href: string | null }[] }[] = [
  {
    title: 'Produtos',
    links: PRODUCTS.map((p) => ({ label: p.name, href: p.href })),
  },
  {
    title: 'AraLabs',
    links: [
      { label: 'Sob medida', href: '/sob-medida' },
      { label: 'Empresa', href: '/empresa' },
      { label: 'Todos os produtos', href: '/produtos' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      ...(CONTACT_WHATSAPP
        ? [{ label: 'WhatsApp', href: `https://wa.me/${CONTACT_WHATSAPP}` }]
        : []),
      { label: JOBS_EMAIL, href: `mailto:${JOBS_EMAIL}` },
      { label: 'Arapongas, Paraná — Brasil', href: null },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-[color:var(--line)]">
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-[color:var(--line)] pb-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.6fr_0.8fr_1fr_1.3fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex" aria-label="AraLabs">
              <LogoLockup markHeight={46} className="text-[color:var(--ink)]" />
            </Link>
            <p className="mt-5 max-w-sm text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Tecnologia simples para pequenos negócios. Produtos prontos para assinar e sistemas
              sob medida, feitos em Arapongas, PR.
            </p>
            <p className="mt-6 flex items-center gap-2.5 text-[19px] font-bold tracking-[-0.02em] text-[color:var(--ink)]">
              <span className="tri text-[8px] text-[color:var(--gold)]" aria-hidden="true" />
              Abra. Entenda. <span className="text-[color:var(--gold-soft)]">Use.</span>
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--ink-dim)]">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      l.href.startsWith('/') ? (
                        <Link
                          href={l.href}
                          className="text-[15px] text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="text-[15px] text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
                        >
                          {l.label}
                        </a>
                      )
                    ) : (
                      <span className="text-[15px] text-[color:var(--ink-muted)]">{l.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--ink-dim)]">
              Privacidade e termos
            </h3>
            <ul className="mt-5 space-y-2.5">
              {LEGAL.map((p) => (
                <li
                  key={p.slug}
                  className="text-[15px] text-[color:var(--ink-muted)] lg:whitespace-nowrap"
                >
                  {p.name}:{' '}
                  <Link
                    href={`${p.href}/privacidade`}
                    className="text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
                  >
                    privacidade
                  </Link>{' '}
                  ·{' '}
                  <Link
                    href={`${p.href}/termos`}
                    className="text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
                  >
                    termos
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-7 text-[12.5px] text-[color:var(--ink-dim)] md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} AraLabs. Tecnologia simples para pequenos negócios.
          </span>
          <span>Feito em Arapongas, PR.</span>
        </div>
      </div>
    </footer>
  );
}
