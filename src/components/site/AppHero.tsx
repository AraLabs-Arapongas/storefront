import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import type { Product } from '@/lib/products';
import { ProductTile } from './ProductMarks';

/*
 * Shared pieces of the app pages (Lumo, Arakids, Sono Leve, Jornadas), in the home's editorial
 * language: a hero sized to the first desktop viewport, triangle kickers, ruled link lists. Each
 * page brings its own product moment (the `aside`) and its own colour rhythm below the hero.
 */

/** Stagger index for the CSS motion helpers (`--i` × 120ms). */
export const cssI = (n: number) => ({ '--i': n }) as CSSProperties;

export type AppTone = 'cream' | 'color' | 'night';

export function AppKicker({
  children,
  color,
  className = '',
}: {
  children: ReactNode;
  /** Colour of the text and triangle; defaults to the gold used by the home. */
  color?: string;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.28em] ${
        color ? '' : 'text-[color:var(--gold-soft)]'
      } ${className}`}
      style={color ? { color } : undefined}
    >
      <span className="tri text-[8px]" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Product mark + name + the honest status from products.ts. */
export function AppIdentity({ product, tone }: { product: Product; tone: AppTone }) {
  const onDark = tone !== 'cream';
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <ProductTile
        product={onDark ? { ...product, color: 'rgba(255,255,255,0.16)' } : product}
        size={40}
      />
      <p
        className={`text-[22px] font-extrabold tracking-tight ${onDark ? 'text-white' : ''}`}
        style={onDark ? undefined : { color: product.colorInk }}
      >
        {product.name}
      </p>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
          onDark ? 'bg-white/14 text-white' : ''
        }`}
        style={onDark ? undefined : { background: product.colorSoft, color: product.colorInk }}
      >
        {product.status !== 'No ar' ? (
          <span
            aria-hidden="true"
            className="shimmer h-1.5 w-1.5 rounded-full"
            style={{ background: onDark ? '#fff' : product.colorInk }}
          />
        ) : null}
        {product.statusNote ?? product.status}
      </span>
    </div>
  );
}

/**
 * Opening of an app page. On desktop it fills the first viewport under the header (minus the
 * next section's diagonal overlap); text on the left, the product's own moment on the right.
 */
export function AppHero({
  product,
  tone = 'cream',
  background,
  backdrop,
  title,
  titlePrefix,
  lead,
  actions,
  note,
  aside,
  titleSize = 'lg',
}: {
  product: Product;
  tone?: AppTone;
  /** `xl` for short, two-line titles that can take the whole column. */
  titleSize?: 'lg' | 'xl';
  /** Section background for the `color` and `night` tones. */
  background?: string;
  /** Decorative layer behind the content (glows, grids, stars). */
  backdrop?: ReactNode;
  title: ReactNode;
  /**
   * What the product is, said plainly ("Lumo, comunicação alternativa…"). It opens the h1 on a
   * smaller line above the slogan, so the heading names the product without losing the voice.
   */
  titlePrefix?: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  note?: ReactNode;
  aside?: ReactNode;
}) {
  const onDark = tone !== 'cream';
  return (
    <section
      className={`pa-hero relative overflow-hidden ${onDark ? 'text-white' : ''}`}
      style={onDark ? { background: background ?? product.colorInk } : undefined}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {backdrop}
      </div>
      <div className="pa-hero-shell relative mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10">
          <div className="pa-in" style={cssI(0)}>
            <AppIdentity product={product} tone={tone} />
            <h1
              className={`pa-hero-title ${titleSize === 'xl' ? 'pa-hero-title--xl' : ''} display mt-7 text-balance ${onDark ? '' : 'text-[color:var(--ink)]'}`}
            >
              {titlePrefix ? (
                <>
                  <span
                    className={`mb-3 block text-[clamp(1.15rem,2.1vw,1.7rem)] leading-[1.2] tracking-[-0.015em] lg:mb-4 ${
                      onDark ? 'text-white/85' : ''
                    }`}
                    style={onDark ? undefined : { color: product.colorInk }}
                  >
                    {titlePrefix}
                  </span>{' '}
                </>
              ) : null}
              {title}
            </h1>
            <div
              className={`pa-in mt-6 max-w-[540px] lg:mt-8 text-[17px] leading-[1.6] md:text-[18.5px] ${
                onDark ? 'text-white/85' : 'text-[color:var(--ink-muted)]'
              }`}
              style={cssI(2)}
            >
              {lead}
            </div>
            {actions ? (
              <div className="pa-in mt-7 flex flex-wrap items-center gap-3" style={cssI(3)}>
                {actions}
              </div>
            ) : null}
            {note ? (
              <p
                className={`pa-in mt-4 text-[13.5px] ${onDark ? 'text-white/70' : 'text-[color:var(--ink-dim)]'}`}
                style={cssI(4)}
              >
                {note}
              </p>
            ) : null}
          </div>
          {aside ? <div className="relative">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}

/** Pill button used across the app pages. */
export function AppButton({
  href,
  children,
  variant = 'solid',
  bg,
  fg,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost' | 'ghost-dark';
  /** Solid fill and text colours. */
  bg?: string;
  fg?: string;
  external?: boolean;
}) {
  const cls =
    variant === 'solid'
      ? 'pa-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition hover:-translate-y-0.5'
      : variant === 'ghost'
        ? 'inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/60 hover:text-[color:var(--gold-soft)]'
        : 'inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10';
  const style = variant === 'solid' ? { background: bg, color: fg } : undefined;
  const isPage = href.startsWith('/') || href.startsWith('#');
  if (isPage) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      style={style}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </a>
  );
}

/** Privacy, terms and support (plus any extra pages) as a ruled list, like the home's lists. */
export function AppLegalLinks({
  product,
  onDark,
  extra = [],
  support = true,
}: {
  product: Product;
  onDark?: boolean;
  extra?: { label: string; href: string }[];
  /** Lumo has no support page. */
  support?: boolean;
}) {
  const links = [
    { label: 'Política de privacidade', href: `${product.href}/privacidade` },
    { label: 'Termos de uso', href: `${product.href}/termos` },
    ...(support ? [{ label: 'Suporte', href: `${product.href}/suporte` }] : []),
    ...extra,
  ];
  return (
    <ul className={`border-t ${onDark ? 'border-white/20' : 'border-[color:var(--line-strong)]'}`}>
      {links.map((l) => (
        <li
          key={l.href}
          className={`border-b ${onDark ? 'border-white/20' : 'border-[color:var(--line-strong)]'}`}
        >
          <Link
            href={l.href}
            className={`group flex items-center justify-between gap-4 py-3.5 text-[15.5px] font-semibold transition ${
              onDark ? 'text-white hover:text-white/75' : 'text-[color:var(--ink)]'
            }`}
          >
            {l.label}
            <span
              className="tri tri-r text-[7px] transition group-hover:translate-x-1"
              style={onDark ? undefined : { color: product.colorInk }}
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Small caption for the HTML/CSS mockups. */
export function MockCaption({
  children = 'Interface ilustrativa',
  onDark,
  className = '',
}: {
  children?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-[12px] ${onDark ? 'text-white/60' : 'text-[color:var(--ink-dim)]'} ${className}`}
    >
      {children}
    </p>
  );
}
