import type { Product } from '@/lib/products';

/*
 * Hero intro: "chaos → organization". Product windows tumble in as physical objects at different
 * depths (near the camera: huge, blurred, fast; far away: small, sharp, slow), cross in front of
 * the headline and find their places with small, per-card imperfections. Komyx is the signature:
 * it comes in fast from the right, misses "negócio" by a hair, brakes, rotates and snaps home,
 * and the headline gives a tiny nudge when it brakes.
 *
 * The headline, kicker, paragraph and CTAs are NEVER hidden or masked: they are fully visible
 * from the first paint (they are the LCP candidates, and most first visits come from search).
 * Only the product windows and the orbit line are animated in.
 *
 * The server HTML is always the final layout. A tiny inline script (INTRO_BOOT, rendered before
 * the hero markup) marks <html data-intro="full|short"> before first paint, which hides the
 * cards and the orbit via CSS; this module animates them with WAAPI (translate/rotate/scale,
 * opacity, filter) and removes the attribute at the end, leaving the natural CSS state. No
 * attribute (reduced motion, client navigation, no JS) means no intro at all.
 */

export const INTRO_KEY = 'aralabs-intro';

/** Runs during HTML parsing, before the hero paints. Keep it tiny and dependency-free. */
export const INTRO_BOOT = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var s=false;try{s=sessionStorage.getItem('${INTRO_KEY}')==='1'}catch(e){}d.setAttribute('data-intro',s?'short':'full');setTimeout(function(){if(!window.__aralabsIntro)d.removeAttribute('data-intro')},3500)}catch(e){}})();`;

const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';
const EASE_SOFT = 'cubic-bezier(0.33, 0, 0.2, 1)';
/** Fast in, then hard brake. */
const BRAKE = 'cubic-bezier(0.05, 0.75, 0.1, 1)';
/** Thrown: accelerating out of the hand. */
const THROW = 'cubic-bezier(0.25, 0.6, 0.35, 1)';

type Kf = Keyframe & { offset?: number };
type Pt = { x: number; y: number };

/**
 * A waypoint for a card, in viewport coordinates of its centre. `depth` drives blur and shadow:
 * 3 = right at the camera, 2 = mid, 1 = far back, 0 = resting on the page.
 */
type Wp = {
  t: number;
  x: number;
  y: number;
  rot: number;
  s: number;
  depth?: 0 | 1 | 2 | 3;
  blur?: number;
  /** Easing of the segment that starts at this waypoint. */
  ease?: string;
};

const SHADOW: Record<number, [number, number, number]> = {
  0: [0, 0, 0],
  1: [6, 10, 0.12],
  2: [26, 34, 0.24],
  3: [60, 60, 0.32],
};

function filterFor(depth: number, blur: number) {
  const [y, r, a] = SHADOW[depth] ?? SHADOW[0];
  return `blur(${blur.toFixed(1)}px) drop-shadow(0px ${y}px ${r}px rgba(36, 29, 21, ${a}))`;
}

export function runHeroIntro(stage: HTMLElement, onDone: () => void): () => void {
  const root = document.documentElement;
  const mode = root.getAttribute('data-intro');
  if (!mode || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.removeAttribute('data-intro');
    onDone();
    return () => {};
  }
  const w = window as unknown as { __aralabsIntro?: boolean; __aralabsIntroTimer?: number };
  w.__aralabsIntro = true;
  // React dev (strict mode) mounts, unmounts and remounts: a pending "give up" from the first
  // unmount is cancelled here so the remount plays the intro.
  window.clearTimeout(w.__aralabsIntroTimer);

  // Reloaded mid-page (scroll restored): don't play anything.
  if (window.scrollY > 40) {
    root.removeAttribute('data-intro');
    onDone();
    return () => {};
  }

  const wide = window.matchMedia('(min-width: 1280px)').matches;
  const lines = Array.from(stage.querySelectorAll<HTMLElement>('.hero-line-in'));
  const items = Array.from(stage.querySelectorAll<HTMLElement>('.orbit-item'));
  const orbit = Array.from(stage.querySelectorAll<Element>('[data-intro-orbit]'));
  const h1 = stage.querySelector<HTMLElement>('h1');
  const anims: Animation[] = [];
  let done = false;
  const add = (el: Element, kf: Kf[], opts: KeyframeAnimationOptions) => {
    const a = el.animate(kf, { fill: 'both', ...opts });
    anims.push(a);
    return a;
  };

  items.forEach((li) => (li.style.willChange = 'translate, rotate, scale, opacity, filter'));

  if (mode === 'short') {
    orbit.forEach((el) =>
      add(el, [{ opacity: 0 }, { opacity: 1 }], { delay: 150, duration: 400, easing: 'ease-out' }),
    );
    items.forEach((li, i) =>
      add(
        li,
        [
          { opacity: 0, translate: '0 16px', scale: 0.97 },
          { opacity: 1, translate: '0 0', scale: 1 },
        ],
        { delay: 100 + i * 40, duration: 450, easing: EASE_OUT },
      ),
    );
  } else if (wide) {
    desktopIntro();
  } else {
    compactIntro();
  }

  /** Turns waypoints into one keyframe animation on a card (translate relative to its rest). */
  function flight(li: HTMLElement, rest: Pt, wps: Wp[], D: number, z: number) {
    const at = (ms: number) => Math.min(1, Math.max(0, ms / D));
    const kf: Kf[] = [];
    const frame = (p: Wp, offset: number, opacity: number, easing?: string): Kf => ({
      offset,
      translate: `${(p.x - rest.x).toFixed(1)}px ${(p.y - rest.y).toFixed(1)}px`,
      rotate: `${p.rot}deg`,
      scale: p.s,
      opacity,
      filter: filterFor(p.depth ?? 0, p.blur ?? 0),
      ...(easing ? { easing } : {}),
    });
    const first = wps[0];
    kf.push(frame(first, 0, 0, 'steps(1, end)'));
    kf.push(frame(first, at(first.t), 0, 'steps(1, end)'));
    wps.forEach((p, i) => {
      const off = at(i === 0 ? first.t + 1 : p.t);
      kf.push(frame(p, Math.max(off, kf[kf.length - 1].offset ?? 0), 1, p.ease ?? EASE_SOFT));
    });
    const last = kf[kf.length - 1];
    if ((last.offset ?? 0) < 1) kf.push({ ...last, offset: 1 });
    li.style.zIndex = String(z);
    add(li, kf, { duration: D });
  }

  function desktopIntro() {
    const D = 3000;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const V = (fx: number, fy: number) => ({ x: fx * vw, y: fy * vh });

    // ---- Headline: always visible. It only gives a tiny nudge (never hidden) when Komyx brakes
    // right next to "negócio".
    if (h1)
      add(
        h1,
        [
          { translate: '0 0' },
          { translate: '0 5px', offset: 0.3 },
          { translate: '0 -1px', offset: 0.65 },
          { translate: '0 0' },
        ],
        { delay: 2140, duration: 320, easing: 'ease-out' },
      );
    orbit.forEach((el) =>
      add(el, [{ opacity: 0 }, { opacity: 1 }], { delay: 2550, duration: 650, easing: 'ease-out' }),
    );

    // ---- Cards
    const bySlug = new Map(items.map((li) => [li.dataset.slug as Product['slug'], li]));
    const restOf = (li: HTMLElement): Pt => {
      const r = li.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };
    // "negócio." — its right edge and line centre, for Komyx's near miss.
    const word = lines[2]?.getBoundingClientRect();
    const wordBox = lines[2]?.parentElement?.getBoundingClientRect();

    const plan: Partial<Record<Product['slug'], (rest: Pt) => { z: number; wps: Wp[] }>> = {
      // Near the camera, thrown in from bottom-left, then lands and drifts.
      'casa-leve': (R) => ({
        z: 30,
        wps: [
          { t: 420, ...V(-0.15, 1.25), rot: 28, s: 2.7, depth: 3, blur: 18, ease: THROW },
          { t: 700, ...V(0.36, 0.56), rot: 14, s: 1.9, depth: 3, blur: 6, ease: BRAKE },
          { t: 960, ...V(0.58, 0.36), rot: 9, s: 1.3, depth: 2, ease: EASE_SOFT },
          {
            t: 1750,
            ...V(0.64, 0.3),
            rot: 7,
            s: 1.22,
            depth: 2,
            ease: 'cubic-bezier(0.5, 0, 0.2, 1)',
          },
          { t: 2300, x: R.x + 13, y: R.y - 7, rot: 2.4, s: 1.01, depth: 1, ease: EASE_SOFT },
          { t: 2480, x: R.x - 3, y: R.y + 2, rot: -1, s: 1, depth: 0, ease: EASE_SOFT },
          { t: 2640, x: R.x, y: R.y, rot: 0, s: 1, depth: 0 },
        ],
      }),
      // Far away, small and sharp, drifting slowly from the top across the headline area.
      arakids: (R) => ({
        z: 10,
        wps: [
          {
            t: 480,
            ...V(0.2, -0.25),
            rot: -10,
            s: 0.55,
            depth: 1,
            blur: 1.5,
            ease: 'cubic-bezier(0.2, 0.6, 0.3, 1)',
          },
          { t: 1150, ...V(0.17, 0.3), rot: -6, s: 0.7, depth: 1, ease: 'linear' },
          { t: 1750, ...V(0.4, 0.5), rot: 4, s: 0.86, depth: 1, ease: EASE_SOFT },
          { t: 2250, x: R.x - 6, y: R.y + 11, rot: -2.2, s: 1, depth: 0, ease: EASE_SOFT },
          // Lumo bumps into it.
          {
            t: 2400,
            x: R.x - 2,
            y: R.y + 4,
            rot: -0.6,
            s: 1,
            depth: 0,
            ease: 'cubic-bezier(0.3, 1.6, 0.5, 1)',
          },
          { t: 2520, x: R.x + 7, y: R.y - 3, rot: 1.8, s: 1, depth: 0, ease: EASE_SOFT },
          { t: 2760, x: R.x, y: R.y, rot: 0, s: 1, depth: 0 },
        ],
      }),
      // Right at the camera: rips in from the right, then crosses in front of the headline.
      lumo: (R) => ({
        z: 32,
        wps: [
          { t: 560, ...V(1.4, 0.95), rot: -32, s: 2.9, depth: 3, blur: 20, ease: THROW },
          { t: 820, ...V(0.7, 0.66), rot: -20, s: 2.1, depth: 3, blur: 6, ease: BRAKE },
          { t: 1060, ...V(0.53, 0.62), rot: -14, s: 1.35, depth: 2, ease: 'linear' },
          {
            t: 1680,
            ...V(0.3, 0.56),
            rot: -9,
            s: 1.18,
            depth: 2,
            ease: 'cubic-bezier(0.45, 0, 0.2, 1)',
          },
          { t: 2380, x: R.x - 12, y: R.y + 6, rot: -2.5, s: 1.02, depth: 1, ease: EASE_SOFT },
          { t: 2560, x: R.x + 4, y: R.y - 2, rot: 1, s: 1, depth: 0, ease: EASE_SOFT },
          { t: 2740, x: R.x, y: R.y, rot: 0, s: 1, depth: 0 },
        ],
      }),
      // Far back, from the bottom right, slow.
      'sono-leve': (R) => ({
        z: 12,
        wps: [
          {
            t: 600,
            ...V(1.05, 1.2),
            rot: 22,
            s: 0.6,
            depth: 1,
            blur: 2,
            ease: 'cubic-bezier(0.2, 0.6, 0.3, 1)',
          },
          { t: 1350, ...V(0.84, 0.76), rot: 11, s: 0.78, depth: 1, ease: 'linear' },
          { t: 1900, ...V(0.8, 0.72), rot: 9, s: 0.84, depth: 1, ease: EASE_SOFT },
          { t: 2380, x: R.x - 14, y: R.y, rot: 2, s: 1, depth: 0, ease: EASE_SOFT },
          // Jornadas lands under it and nudges it.
          {
            t: 2500,
            x: R.x + 2,
            y: R.y + 1,
            rot: -0.5,
            s: 1,
            depth: 0,
            ease: 'cubic-bezier(0.3, 1.6, 0.5, 1)',
          },
          { t: 2620, x: R.x + 8, y: R.y - 5, rot: 1.6, s: 1, depth: 0, ease: EASE_SOFT },
          { t: 2860, x: R.x, y: R.y, rot: 0, s: 1, depth: 0 },
        ],
      }),
      // Mid depth from the top right, sweeps across where "Software" will appear.
      jornadas: (R) => ({
        z: 20,
        wps: [
          { t: 700, ...V(1.15, -0.45), rot: -24, s: 1.6, depth: 2, blur: 12, ease: THROW },
          { t: 980, ...V(0.72, 0.2), rot: -10, s: 1.15, depth: 2, ease: 'linear' },
          {
            t: 1700,
            ...V(0.34, 0.24),
            rot: -6,
            s: 1.08,
            depth: 2,
            ease: 'cubic-bezier(0.45, 0, 0.2, 1)',
          },
          { t: 2420, x: R.x + 4, y: R.y + 12, rot: 2.2, s: 1, depth: 1, ease: EASE_SOFT },
          { t: 2600, x: R.x - 2, y: R.y - 3, rot: -0.8, s: 1, depth: 0, ease: EASE_SOFT },
          { t: 2800, x: R.x, y: R.y, rot: 0, s: 1, depth: 0 },
        ],
      }),
      // Far back, rising slowly from below the fold, last to settle.
      'le-barista': (R) => ({
        z: 14,
        wps: [
          {
            t: 760,
            ...V(0.62, 1.25),
            rot: 16,
            s: 0.62,
            depth: 1,
            blur: 2,
            ease: 'cubic-bezier(0.2, 0.6, 0.3, 1)',
          },
          { t: 1500, ...V(0.7, 0.92), rot: 8, s: 0.8, depth: 1, ease: 'linear' },
          { t: 2100, x: R.x - 10, y: R.y + 18, rot: 3, s: 0.94, depth: 1, ease: EASE_SOFT },
          { t: 2560, x: R.x + 3, y: R.y - 4, rot: -1.2, s: 1, depth: 0, ease: EASE_SOFT },
          { t: 2900, x: R.x, y: R.y, rot: 0, s: 1, depth: 0 },
        ],
      }),
      // Signature: fast from the right, near miss on "negócio", hard brake, rotate, snap home.
      komyx: (R) => {
        const halfW = (items[0]?.getBoundingClientRect().width ?? 208) / 2;
        const lineY = wordBox ? wordBox.top + wordBox.height * 0.55 : vh * 0.55;
        const missX = (word ? word.right : vw * 0.62) + 30 + halfW * 1.12;
        return {
          z: 40,
          wps: [
            {
              t: 1880,
              x: vw + halfW * 3,
              y: lineY - 30,
              rot: -22,
              s: 1.35,
              depth: 3,
              blur: 16,
              ease: BRAKE,
            },
            {
              t: 2130,
              x: missX,
              y: lineY,
              rot: -8,
              s: 1.12,
              depth: 2,
              blur: 0,
              ease: 'cubic-bezier(0.3, 1.5, 0.6, 1)',
            },
            {
              t: 2260,
              x: missX + 12,
              y: lineY - 4,
              rot: 5,
              s: 1.1,
              depth: 2,
              ease: 'cubic-bezier(0.6, 0, 0.2, 1)',
            },
            {
              t: 2700,
              x: R.x,
              y: R.y - 14,
              rot: 2,
              s: 1,
              depth: 1,
              ease: 'cubic-bezier(0.3, 1.4, 0.5, 1)',
            },
            { t: 2840, x: R.x, y: R.y + 4, rot: -1, s: 1, depth: 0, ease: EASE_SOFT },
            { t: 3000, x: R.x, y: R.y, rot: 0, s: 1, depth: 0 },
          ],
        };
      },
    };

    (Object.keys(plan) as Product['slug'][]).forEach((slug) => {
      const li = bySlug.get(slug);
      const make = plan[slug];
      if (!li || !make) return;
      const rest = restOf(li);
      const { z, wps } = make(rest);
      flight(li, rest, wps, D, z);
    });
  }

  /** Mobile/tablet: its own, lighter piece. Cards fall vertically through the viewport. */
  function compactIntro() {
    const vh = window.innerHeight;
    orbit.forEach((el) => add(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 300 }));
    // Each card falls from above the viewport to its spot in the grid (usually just below the
    // fold), so they pass through the screen around the headline. Two of them are fast crossers.
    const fast = new Set([1, 4]);
    const sway = [-26, 34, -18, 22, -30, 14, -20];
    const spin = [-14, 18, -9, 12, -20, 8, -11];
    const starts = [260, 380, 470, 600, 700, 820, 900];
    items.forEach((li, i) => {
      const top = li.getBoundingClientRect().top;
      const fall = Math.max(top + 160, vh * 0.9) + 120;
      const isFast = fast.has(i);
      add(
        li,
        [
          {
            opacity: 1,
            translate: `${sway[i]}px ${-fall}px`,
            rotate: `${spin[i]}deg`,
            filter: `blur(${isFast ? 5 : 0}px)`,
          },
          {
            translate: `${-sway[i] * 0.15}px 10px`,
            rotate: `${-spin[i] * 0.12}deg`,
            filter: 'blur(0px)',
            offset: 0.78,
            easing: 'cubic-bezier(0.3, 1.4, 0.5, 1)',
          },
          { opacity: 1, translate: '0px 0px', rotate: '0deg', filter: 'blur(0px)' },
        ],
        {
          delay: starts[i] ?? 260 + i * 110,
          duration: isFast ? 620 : 980,
          easing: isFast ? 'cubic-bezier(0.5, 0, 0.6, 1)' : 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        },
      );
    });
  }

  const events = ['pointerdown', 'wheel', 'touchstart', 'keydown'] as const;
  const onScroll = () => {
    if (window.scrollY > 4) finishNow();
  };
  const cleanup = () => {
    events.forEach((e) => window.removeEventListener(e, finishNow));
    window.removeEventListener('scroll', onScroll);
    root.removeAttribute('data-intro');
    anims.forEach((a) => a.cancel());
    items.forEach((li) => {
      li.style.willChange = '';
      li.style.zIndex = '';
    });
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* private mode: replay next time, that's fine */
    }
    onDone();
  };
  function finishNow() {
    if (done) return;
    done = true;
    anims.forEach((a) => {
      try {
        a.finish();
      } catch {
        /* ignore */
      }
    });
    cleanup();
  }
  events.forEach((e) => window.addEventListener(e, finishNow, { passive: true }));
  window.addEventListener('scroll', onScroll, { passive: true });
  Promise.all(anims.map((a) => a.finished))
    .then(() => {
      if (done) return;
      done = true;
      cleanup();
    })
    .catch(() => {});

  return () => {
    if (done) return;
    done = true;
    events.forEach((e) => window.removeEventListener(e, finishNow));
    window.removeEventListener('scroll', onScroll);
    anims.forEach((a) => a.cancel());
    items.forEach((li) => (li.style.zIndex = ''));
    w.__aralabsIntroTimer = window.setTimeout(() => root.removeAttribute('data-intro'), 60);
  };
}
