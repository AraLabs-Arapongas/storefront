'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { PRODUCTS, type Product } from '@/lib/products';
import { ProductTile } from '@/components/site/ProductMarks';

/**
 * Where each product "window" floats around the headline on wide screens (xl) (percent of the hero
 * stage), how much it tilts and how far it drifts with the pointer. Below xl they sit in a
 * loose, wrapped cluster under the headline instead.
 */
const ORBIT: Record<Product['slug'], { x: string; y: string; rot: number; depth: number }> = {
  komyx: { x: '50%', y: '1%', rot: -3, depth: 18 },
  'casa-leve': { x: '79%', y: '-3%', rot: 4, depth: 10 },
  arakids: { x: '71%', y: '26%', rot: -5, depth: 24 },
  lumo: { x: '80%', y: '46%', rot: 3, depth: 14 },
  'sono-leve': { x: '57%', y: '79%', rot: -2, depth: 20 },
  jornadas: { x: '80%', y: '76%', rot: 5, depth: 12 },
};

/**
 * Giant headline with the product windows orbiting it. Pointer parallax only for mouse users and
 * only without prefers-reduced-motion; everything is a plain link, so touch and keyboard get the
 * same information (name, audience, status) with no hover needed.
 */
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

  return (
    <div ref={stage} className="orbit-stage relative">
      {children}
      <ul
        aria-label="Produtos da AraLabs"
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:pointer-events-none xl:absolute xl:inset-0 xl:mt-0 xl:block"
      >
        {PRODUCTS.map((p, i) => (
          <OrbitWindow key={p.slug} product={p} index={i} />
        ))}
      </ul>
    </div>
  );
}

function OrbitWindow({ product: p, index }: { product: Product; index: number }) {
  const o = ORBIT[p.slug];
  const style = {
    '--x': o.x,
    '--y': o.y,
    '--rot': `${o.rot}deg`,
    '--depth': o.depth,
    '--delay': `${index * -1.3}s`,
  } as CSSProperties;
  return (
    <li className="orbit-item xl:pointer-events-auto xl:absolute" style={style}>
      <div className="orbit-float">
        <Link
          href={p.href}
          className="orbit-window group block w-full overflow-hidden rounded-[18px] text-white shadow-[0_18px_40px_-12px_rgba(36,29,21,0.45)] outline-offset-4 xl:w-[236px]"
          style={{ background: p.colorInk }}
        >
          <span className="flex items-center justify-between gap-2 border-b border-white/15 px-3 py-1.5">
            <span aria-hidden="true" className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </span>
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
