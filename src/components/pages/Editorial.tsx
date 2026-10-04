import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS, countWord, type Product } from '@/lib/products';

/*
 * Small editorial kit for /produtos, /empresa and /sob-medida. Same language as the home (triangle
 * kicker, pill buttons, giant display type); styles live in globals.css under "pages:".
 */

/** Stagger index for `.iv` transitions. */
export const i = (n: number) => ({ '--i': n }) as CSSProperties;

export const capitalize = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

export function Kicker({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.28em] ${
        onDark ? 'text-[color:var(--gold)]' : 'text-[color:var(--gold-soft)]'
      }`}
    >
      <span className="tri text-[8px]" aria-hidden="true" />
      {children}
    </p>
  );
}

type PillProps = {
  href: string;
  children: ReactNode;
  /** ink: dark on cream · outline: thin border on cream · gold: on black · ghost: border on dark */
  look?: 'ink' | 'outline' | 'gold' | 'ghost' | 'white';
  arrow?: boolean;
  style?: CSSProperties;
};

const LOOKS: Record<NonNullable<PillProps['look']>, string> = {
  ink: 'bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--gold-soft)]',
  outline:
    'border border-[color:var(--line-strong)] text-[color:var(--ink)] hover:border-[color:var(--gold)]/60 hover:text-[color:var(--gold-soft)]',
  gold: 'bg-[color:var(--gold)] text-[color:var(--dark)] hover:bg-[color:var(--bg)]',
  ghost: 'border border-white/30 text-white hover:bg-white/10',
  white: 'bg-white hover:bg-white/85',
};

/** The home's pill button. Internal links use next/link; mailto/http open as plain anchors. */
export function Pill({ href, children, look = 'ink', arrow, style }: PillProps) {
  const cls = `group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14.5px] font-semibold transition sm:px-6 sm:py-3.5 sm:text-[15px] ${LOOKS[look]}`;
  const inner = (
    <>
      {children}
      {arrow ? <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /> : null}
    </>
  );
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const ext = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        style={style}
        target={ext ? '_blank' : undefined}
        rel={ext ? 'noopener' : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style}>
      {inner}
    </Link>
  );
}

const STATUS_LABEL: Record<Product['status'], string> = {
  'No ar': 'no ar',
  Beta: 'em beta',
  'Em breve': 'em breve',
};

/** Live count per status, read from products.ts ("três no ar", "um em beta"...). */
export function statusTally() {
  return (Object.keys(STATUS_LABEL) as Product['status'][])
    .map((status) => ({
      status,
      n: PRODUCTS.filter((p) => p.status === status).length,
      label: STATUS_LABEL[status],
    }))
    .filter((x) => x.n > 0);
}

/** "três no ar, um em beta e dois em breve". */
export function tallySentence() {
  const parts = statusTally().map(({ n, label }) => `${countWord(n)} ${label}`);
  return parts.length > 1
    ? `${parts.slice(0, -1).join(', ')} e ${parts[parts.length - 1]}`
    : (parts[0] ?? '');
}
