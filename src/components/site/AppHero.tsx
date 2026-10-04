import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Product } from '@/lib/products';
import { ProductTile } from './ProductMarks';

/**
 * Full-bleed hero on the product's accent color, same shape as the Arakids page: tile + name,
 * headline, lead, then availability pills and actions. Used by the app pages that have no artwork.
 */
export function AppHero({
  product,
  title,
  lead,
  pills,
  actions,
}: {
  product: Product;
  title: ReactNode;
  lead: string;
  pills: string[];
  actions?: ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden border-b border-[color:var(--line)]"
      style={{ background: product.color, color: '#fff' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_70%)]" />
        <div className="absolute bottom-[-40%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.18),transparent_70%)]" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="flex items-center gap-3">
          <ProductTile product={{ ...product, color: 'rgba(255,255,255,0.18)' }} size={48} />
          <div className="leading-none">
            <p className="text-[26px] font-extrabold tracking-tight">{product.name}</p>
            <p className="mt-1 text-[12px] font-semibold text-white/80">{product.audience}</p>
          </div>
        </div>
        <h1 className="mt-8 max-w-3xl text-balance text-[36px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[52px]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-white/85 md:text-[19px]">
          {lead}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {pills.map((pill, i) => (
            <li
              key={pill}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-semibold ${
                i === 0 ? 'bg-white' : 'border border-white/35'
              }`}
              style={i === 0 ? { color: product.color } : undefined}
            >
              {i === 0 ? (
                <span
                  aria-hidden="true"
                  className="shimmer h-2 w-2 rounded-full"
                  style={{ background: product.color }}
                />
              ) : null}
              {pill}
            </li>
          ))}
        </ul>
        {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

/** Plain links to an app's privacy policy, terms and support pages. */
export function AppLegalLinks({ product }: { product: Product }) {
  const links = [
    { label: 'Política de privacidade', href: `${product.href}/privacidade` },
    { label: 'Termos de uso', href: `${product.href}/termos` },
    { label: 'Suporte', href: `${product.href}/suporte` },
  ];
  return (
    <ul className="mt-8 flex flex-wrap gap-3">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-[14.5px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/60 hover:text-[color:var(--gold-soft)]"
          >
            {l.label} →
          </Link>
        </li>
      ))}
    </ul>
  );
}
