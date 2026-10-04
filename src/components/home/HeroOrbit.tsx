'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { PRODUCTS, type Product } from '@/lib/products';
import { ProductTile } from '@/components/site/ProductMarks';

/*
 * On wide screens (xl+) the product windows sit on one elliptical arc that wraps the right end of
 * the headline, evenly spaced, each drifting a few pixels along the arc's tangent. Coordinates are
 * percentages of the hero stage. Below xl they become a tilted 2/3-column cluster instead.
 */
const ARC = { cx: 52, cy: 50, rx: 41, ry: 52 };
const START = -78;
const END = 78;

const rad = (deg: number) => (deg * Math.PI) / 180;

function arcPoint(deg: number) {
  const t = rad(deg);
  const x = ARC.cx + ARC.rx * Math.cos(t);
  const y = ARC.cy + ARC.ry * Math.sin(t);
  // Tangent (direction of travel along the arc), normalised.
  const tx = -ARC.rx * Math.sin(t);
  const ty = ARC.ry * Math.cos(t);
  const len = Math.hypot(tx, ty) || 1;
  return { x, y, tx: tx / len, ty: ty / len };
}

/** SVG path of the visible arc (a little longer than the span of the windows). */
function arcPath() {
  const a = arcPoint(START - 14);
  const b = arcPoint(END + 16);
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${ARC.rx} ${ARC.ry} 0 0 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}

const TILT = [-3, 3, -4, 3, -2, 4];

export function HeroOrbit({ children }: { children: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 1280px)');
    let frame = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || reduce.matches || !wide.matches) return;
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!frame)
        frame = requestAnimationFrame(() => {
          frame = 0;
          el.style.setProperty('--px', tx.toFixed(3));
          el.style.setProperty('--py', ty.toFixed(3));
        });
    };
    const onLeave = () => {
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  const step = (END - START) / (PRODUCTS.length - 1);
  // Small direction markers halfway between windows.
  const markers = PRODUCTS.slice(1).map((_, i) => arcPoint(START + step * (i + 0.5)));

  return (
    <div ref={stage} className="orbit-stage relative">
      {/* The orbit itself: dashed arc + triangle markers pointing the way. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible xl:block"
      >
        <path d={arcPath()} className="orbit-path" vectorEffect="non-scaling-stroke" />
      </svg>
      {markers.map((m, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="orbit-marker tri absolute hidden xl:block"
          style={
            {
              left: `${m.x.toFixed(3)}%`,
              top: `${m.y.toFixed(3)}%`,
              '--angle': `${((Math.atan2(m.ty, m.tx) * 180) / Math.PI + 90).toFixed(2)}deg`,
            } as CSSProperties
          }
        />
      ))}

      {children}

      <ul
        aria-label="Produtos da AraLabs"
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:pointer-events-none xl:absolute xl:inset-0 xl:mt-0 xl:block"
      >
        {PRODUCTS.map((p, i) => (
          <OrbitWindow key={p.slug} product={p} index={i} at={arcPoint(START + step * i)} />
        ))}
      </ul>
    </div>
  );
}

function OrbitWindow({
  product: p,
  index,
  at,
}: {
  product: Product;
  index: number;
  at: ReturnType<typeof arcPoint>;
}) {
  const style = {
    '--x': `${at.x.toFixed(3)}%`,
    '--y': `${at.y.toFixed(3)}%`,
    '--tx': at.tx.toFixed(3),
    '--ty': at.ty.toFixed(3),
    '--rot': `${TILT[index % TILT.length]}deg`,
    '--depth': 10 + ((index * 7) % 16),
    '--delay': `${index * -0.6}s`,
  } as CSSProperties;
  return (
    <li className="orbit-item xl:pointer-events-auto xl:absolute" style={style}>
      <div className="orbit-float">
        <Link
          href={p.href}
          className="orbit-window group block w-full overflow-hidden rounded-[18px] text-white shadow-[0_18px_40px_-12px_rgba(36,29,21,0.45)] outline-offset-4 xl:w-[208px]"
          style={{ background: p.colorInk }}
        >
          <span className="flex items-center justify-between gap-2 border-b border-white/15 px-3 py-1.5">
            <span aria-hidden="true" className="tri text-[9px] text-white/60" />
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/85">
              <span className="xl:hidden">{p.status}</span>
              <span className="hidden xl:inline">{p.statusNote ?? p.status}</span>
            </span>
          </span>
          <span className="flex items-center gap-3 px-3 pb-3 pt-2.5">
            <ProductTile product={{ ...p, color: 'rgba(255,255,255,0.16)' }} size={36} />
            <span className="min-w-0">
              <span className="block text-[16px] font-bold leading-tight tracking-tight">
                {p.name}
              </span>
              <span className="block text-[12px] leading-snug text-white/80">{p.audience}</span>
            </span>
          </span>
          <span className="orbit-more grid px-3 text-[12.5px] leading-[1.45] text-white/90">
            <span className="overflow-hidden">
              <span className="block pb-3">{p.tagline} →</span>
            </span>
          </span>
        </Link>
      </div>
    </li>
  );
}
