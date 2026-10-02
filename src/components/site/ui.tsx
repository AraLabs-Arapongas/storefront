import Link from 'next/link';
import type { ReactNode } from 'react';

/** Small typographic kit shared by the marketing pages so every section reads the same. */

export function Eyebrow({
  children,
  tone = 'dim',
}: {
  children: ReactNode;
  tone?: 'dim' | 'gold';
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.26em] ${
        tone === 'gold' ? 'text-[color:var(--gold-soft)]' : 'text-[color:var(--ink-dim)]'
      }`}
    >
      {children}
    </p>
  );
}

export function Title({
  children,
  as: Tag = 'h2',
  size = 'md',
}: {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'sm' | 'md' | 'lg';
}) {
  const cls =
    size === 'lg'
      ? 'text-[38px] md:text-[50px] lg:text-[60px] leading-[1.02]'
      : size === 'md'
        ? 'text-[30px] md:text-[40px] leading-[1.08]'
        : 'text-[24px] md:text-[28px] leading-[1.15]';
  return (
    <Tag
      className={`mt-4 text-balance font-semibold tracking-[-0.02em] text-[color:var(--ink)] ${cls}`}
    >
      {children}
    </Tag>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-[color:var(--gold-soft)]">{children}</span>;
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`mt-6 max-w-2xl text-[17px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[19px] ${className}`}
    >
      {children}
    </p>
  );
}

export function Section({
  children,
  id,
  className = '',
  tight,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section id={id} className={`border-b border-[color:var(--line)] ${className}`}>
      <div
        className={`mx-auto max-w-[1240px] px-6 lg:px-10 ${tight ? 'py-14 lg:py-16' : 'py-20 lg:py-24'}`}
      >
        {children}
      </div>
    </section>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'gold';
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = 'primary',
  external,
  className = '',
}: BtnProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition';
  const look =
    variant === 'primary'
      ? 'bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--gold-soft)]'
      : variant === 'gold'
        ? 'bg-[color:var(--gold)] text-[color:var(--on-gold)] hover:bg-[color:var(--gold-soft)]'
        : 'border border-[color:var(--line-strong)] text-[color:var(--ink)] hover:border-[color:var(--gold)]/60 hover:text-[color:var(--gold-soft)]';
  const cls = `${base} ${look} ${className}`;
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  return isExternal ? (
    <a
      href={href}
      className={cls}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener' : undefined}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Bordered grid where each cell is a card; used for steps, principles, feature lists. */
export function CellGrid({
  children,
  cols = 'sm:grid-cols-2 lg:grid-cols-4',
  className = '',
}: {
  children: ReactNode;
  cols?: string;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] ${cols} ${className}`}
    >
      {children}
    </div>
  );
}

export function Cell({ n, title, body }: { n?: string; title: string; body: string }) {
  return (
    <article className="bg-[color:var(--bg-elev)] p-7 transition hover:bg-[color:var(--bg-elev-2)]">
      {n ? (
        <span className="text-[12px] font-bold tracking-wider text-[color:var(--gold-soft)]">
          {n}
        </span>
      ) : null}
      <h3
        className={`${n ? 'mt-7' : ''} text-[19px] font-semibold tracking-tight text-[color:var(--ink)]`}
      >
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">{body}</p>
    </article>
  );
}

/** Dark closing panel with a headline and one or two actions. */
export function CtaPanel({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[32px] px-8 py-14 text-[color:var(--bg)] md:px-14 md:py-16"
      style={{ background: 'var(--dark)' }}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.28),transparent_70%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--gold)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.06] tracking-[-0.02em] md:text-[40px]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-[16.5px] leading-[1.7] text-[color:var(--bg)]/75">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button href={primary.href} variant="gold">
            {primary.label} →
          </Button>
          {secondary ? (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-[color:var(--bg)] transition hover:bg-white/10"
            >
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
