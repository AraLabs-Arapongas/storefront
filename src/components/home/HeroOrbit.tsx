'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { PRODUCTS, type Product } from '@/lib/products';
import { ProductTile } from '@/components/site/ProductMarks';
import { runHeroIntro } from './heroIntro';

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
/** Resting depth (px toward the viewer) and float amplitude per window, in PRODUCTS order. */
const DEPTH_Z = [8, 5, 3, 1, -2, -4];
/** Where each window goes when the hero scrolls away (px, deg, scale at the end of the exit). */
const EXIT: Record<Product['slug'], { x: number; y: number; r: number; s: number }> = {
  komyx: { x: -40, y: -460, r: -9, s: 1.2 },
  'casa-leve': { x: 420, y: -60, r: 12, s: 0.95 },
  arakids: { x: 360, y: 90, r: -15, s: 0.92 },
  lumo: { x: 460, y: 220, r: 14, s: 1 },
  'sono-leve': { x: 140, y: 420, r: 18, s: 0.9 },
  jornadas: { x: -200, y: 460, r: -13, s: 0.95 },
};
const FLOAT = [4, 6, 3, 8, 5, 7];

export function HeroOrbit({ children }: { children: ReactNode }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 1280px)');
    let introDone = false;
    let frame = 0;
    let scrollFrame = 0;
    let tx = 0;
    let ty = 0;

    // Pointer: subtle parallax + perspective tilt (desktop mouse only).
    const onMove = (e: PointerEvent) => {
      if (!introDone || e.pointerType !== 'mouse' || reduce.matches || !wide.matches) return;
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

    // Scroll: on desktop the Komyx window grows and travels toward the Komyx section while the
    // others ease away; below xl each window gets a little scroll depth instead.
    const items = Array.from(el.querySelectorAll<HTMLElement>('.orbit-item'));
    const orbitBits = Array.from(
      el.querySelectorAll<HTMLElement | SVGElement>('[data-intro-orbit]'),
    );
    const hero = el.closest('section');
    let base: { li: HTMLElement; cx: number; cy: number }[] | null = null;
    const measure = () => {
      items.forEach((li) => {
        li.style.translate = '';
        li.style.rotate = '';
        li.style.scale = '';
        li.style.opacity = '';
      });
      base = items.map((li) => {
        const r = li.getBoundingClientRect();
        return { li, cx: r.left + r.width / 2, cy: r.top + r.height / 2 + window.scrollY };
      });
    };
    const applyScroll = () => {
      scrollFrame = 0;
      if (!introDone || reduce.matches || !hero) return;
      const y = window.scrollY;
      const h = hero.offsetHeight;
      const p = Math.min(1, Math.max(0, y / (h * 0.8)));
      const e = p * p * (3 - 2 * p);
      if (wide.matches) {
        if (!base) measure();
        if (!base) return;
        // Disassembly: every window leaves in its own direction (reversible on scroll up), and
        // the orbit line fades with them.
        orbitBits.forEach((o) => {
          o.style.opacity = p === 0 ? '' : Math.max(0, 1 - e * 1.6).toFixed(3);
        });
        base.forEach(({ li }) => {
          if (p === 0) {
            li.style.translate = '';
            li.style.rotate = '';
            li.style.scale = '';
            li.style.opacity = '';
            return;
          }
          const d = EXIT[li.dataset.slug as Product['slug']] ?? EXIT.komyx;
          li.style.translate = `${(d.x * e).toFixed(1)}px ${(d.y * e).toFixed(1)}px`;
          li.style.rotate = `${(d.r * e).toFixed(2)}deg`;
          li.style.scale = (1 + (d.s - 1) * e).toFixed(3);
          li.style.opacity = Math.max(0, 1 - Math.max(0, e - 0.5) * 2).toFixed(3);
        });
      } else {
        const depth = [0.05, 0.08, 0.03, 0.07, 0.04, 0.06];
        items.forEach((li, i) => {
          li.style.translate = y > h ? '' : `0 ${(-y * (depth[i] ?? 0.05)).toFixed(1)}px`;
        });
      }
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(applyScroll);
    };
    const onResize = () => {
      base = null;
      onScroll();
    };

    const finishIntro = () => {
      introDone = true;
      applyScroll();
    };
    let stopIntro = () => {};
    try {
      stopIntro = runHeroIntro(el, finishIntro);
    } catch {
      // Never let the intro take the page down: show the final layout.
      document.documentElement.removeAttribute('data-intro');
      finishIntro();
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      stopIntro();
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
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
        data-intro-orbit
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="orbit-layer pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible xl:block"
      >
        <path d={arcPath()} className="orbit-path" vectorEffect="non-scaling-stroke" />
      </svg>
      {markers.map((m, i) => (
        <span
          key={i}
          aria-hidden="true"
          data-intro-orbit
          className="orbit-layer orbit-marker tri absolute"
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
        className="orbit-layer mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:pointer-events-none xl:absolute xl:inset-0 xl:mt-0 xl:block"
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
    '--depth': 4 + ((index * 3) % 6),
    '--z': DEPTH_Z[index % DEPTH_Z.length],
    '--amp': `${FLOAT[index % FLOAT.length]}px`,
    '--delay': `${index * -0.6}s`,
  } as CSSProperties;
  return (
    <li className="orbit-item xl:pointer-events-auto xl:absolute" style={style} data-slug={p.slug}>
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
