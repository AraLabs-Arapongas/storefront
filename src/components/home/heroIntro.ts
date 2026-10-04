import type { Product } from '@/lib/products';

/*
 * Hero intro: "chaos → organization". The six product windows land scattered over the page like
 * cards dropped on a table, the headline rises line by line, the cards make room, slow down and
 * snap into the orbit as "Não o contrário." lands.
 *
 * The server HTML is always the final layout. A tiny inline script (INTRO_BOOT, rendered before
 * the hero markup) marks <html data-intro="full|short"> before first paint, which hides the
 * animated pieces via CSS; this module then animates them with WAAPI (transform-ish properties,
 * opacity, filter) and removes the attribute at the end, leaving the natural CSS state. No
 * attribute (reduced motion, client navigation, no JS) means no intro at all.
 */

export const INTRO_KEY = 'aralabs-intro';

/** Runs during HTML parsing, before the hero paints. Keep it tiny and dependency-free. */
export const INTRO_BOOT = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var s=false;try{s=sessionStorage.getItem('${INTRO_KEY}')==='1'}catch(e){}d.setAttribute('data-intro',s?'short':'full');setTimeout(function(){if(!window.__aralabsIntro)d.removeAttribute('data-intro')},3500)}catch(e){}})();`;

type Chaos = {
  /** Landing spot as a fraction of the viewport. */
  x: number;
  y: number;
  /** Where it flies in from (unit-ish vector, scaled by the viewport). */
  from: [number, number];
  rot: number;
  scale: number;
};

/** Where each card lands in the "dropped on the table" moment (desktop). */
const CHAOS: Record<Product['slug'], Chaos> = {
  komyx: { x: 0.34, y: 0.46, from: [-1, 0.2], rot: -14, scale: 1.55 },
  'casa-leve': { x: 0.63, y: 0.3, from: [0.3, -1], rot: 11, scale: 1.45 },
  arakids: { x: 0.2, y: 0.74, from: [-0.4, 1], rot: 9, scale: 1.4 },
  lumo: { x: 0.52, y: 0.66, from: [0.6, 1], rot: -19, scale: 1.55 },
  'sono-leve': { x: 0.82, y: 0.68, from: [1, 0.3], rot: 16, scale: 1.4 },
  jornadas: { x: 0.8, y: 0.22, from: [1, -0.6], rot: -8, scale: 1.5 },
};

/** Arrival order: the order the cards hit the table. */
const ARRIVAL: Product['slug'][] = [
  'komyx',
  'jornadas',
  'casa-leve',
  'arakids',
  'lumo',
  'sono-leve',
];

const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';
const EASE_FLIGHT = 'cubic-bezier(0.2, 0.9, 0.25, 1)';
const EASE_SOFT = 'cubic-bezier(0.33, 0, 0.2, 1)';

type Kf = Keyframe & { offset?: number };

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
  const fades = Array.from(stage.querySelectorAll<HTMLElement>('[data-intro-fade]'));
  const items = Array.from(stage.querySelectorAll<HTMLElement>('.orbit-item'));
  const orbit = Array.from(stage.querySelectorAll<Element>('[data-intro-orbit]'));
  const h1 = stage.querySelector<HTMLElement>('h1');
  const anims: Animation[] = [];
  let deferCards = false;
  let done = false;
  const add = (el: Element, kf: Kf[], opts: KeyframeAnimationOptions) => {
    const a = el.animate(kf, { fill: 'both', ...opts });
    anims.push(a);
    return a;
  };

  items.forEach((li) => (li.style.willChange = 'translate, rotate, scale, opacity, filter'));

  if (mode === 'short') {
    lines.forEach((el, i) =>
      add(el, [{ translate: '0 0.6em' }, { translate: '0 0' }], {
        delay: i * 60,
        duration: 450,
        easing: EASE_OUT,
      }),
    );
    [...fades, ...orbit].forEach((el) =>
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

  function desktopIntro() {
    const D = 2800;
    const at = (ms: number) => Math.min(1, ms / D);
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Headline
    const [l0, l1, l2, l3] = lines;
    if (l0)
      add(
        l0,
        [
          { translate: '0 1.35em', scale: 1.16 },
          { translate: '0 -0.05em', scale: 1.01, offset: 0.72 },
          { translate: '0 0', scale: 1 },
        ],
        { delay: 400, duration: 760, easing: EASE_OUT },
      );
    if (l1)
      add(l1, [{ translate: '0 1.35em' }, { translate: '0 0' }], {
        delay: 1200,
        duration: 600,
        easing: EASE_OUT,
      });
    if (l2)
      add(l2, [{ translate: '0 1.35em' }, { translate: '0 0' }], {
        delay: 1420,
        duration: 620,
        easing: EASE_OUT,
      });
    if (l3)
      add(
        l3,
        [
          { translate: '0 -0.4em', scale: 1.45, opacity: 0 },
          { translate: '0 0.05em', scale: 0.97, opacity: 1, offset: 0.62 },
          { translate: '0 0', scale: 1, opacity: 1 },
        ],
        { delay: 2400, duration: 420, easing: 'cubic-bezier(0.55, 0, 0.25, 1)' },
      );
    // The landing shakes the block a little.
    if (h1)
      add(h1, [{ translate: '0 0' }, { translate: '0 7px', offset: 0.3 }, { translate: '0 0' }], {
        delay: 2640,
        duration: 280,
        easing: 'ease-out',
      });
    fades.forEach((el, i) =>
      add(
        el,
        [
          { opacity: 0, translate: '0 10px' },
          { opacity: 1, translate: '0 0' },
        ],
        {
          delay: i === 0 ? 480 : 2560,
          duration: 520,
          easing: EASE_OUT,
        },
      ),
    );

    // The orbit path shows up only once things organise themselves.
    orbit.forEach((el) =>
      add(el, [{ opacity: 0 }, { opacity: 1 }], { delay: 2250, duration: 650, easing: 'ease-out' }),
    );

    // Cards
    const bySlug = new Map(items.map((li) => [li.dataset.slug as Product['slug'], li]));
    ARRIVAL.forEach((slug, i) => {
      const li = bySlug.get(slug);
      if (!li) return;
      const c = CHAOS[slug];
      const r = li.getBoundingClientRect();
      const fx = r.left + r.width / 2;
      const fy = r.top + r.height / 2;
      const cx = c.x * vw - fx;
      const cy = c.y * vh - fy;
      const sx = cx + c.from[0] * vw * 0.85;
      const sy = cy + c.from[1] * vh * 0.85;
      const tStart = 400 + i * 70;
      const tLand = tStart + 300;
      const tOpen = 700 + i * 80;
      const ox = cx * 0.42;
      const oy = cy * 0.42;
      const nx = cx * 0.06;
      const ny = cy * 0.06;
      const px = (v: number) => `${v.toFixed(1)}px`;
      const tr = (x: number, y: number) => `${px(x)} ${px(y)}`;
      const kf: Kf[] = [
        {
          offset: 0,
          translate: tr(sx, sy),
          rotate: `${c.rot * 1.6}deg`,
          scale: c.scale,
          opacity: 0,
          filter: 'blur(0px)',
        },
        {
          offset: at(tStart),
          translate: tr(sx, sy),
          rotate: `${c.rot * 1.6}deg`,
          scale: c.scale,
          opacity: 0,
          filter: 'blur(12px)',
          easing: 'steps(1, end)',
        },
        {
          offset: at(tStart + 1),
          translate: tr(sx, sy),
          rotate: `${c.rot * 1.6}deg`,
          scale: c.scale,
          opacity: 1,
          filter: 'blur(12px)',
          easing: EASE_FLIGHT,
        },
        {
          offset: at(tLand),
          translate: tr(cx, cy),
          rotate: `${c.rot}deg`,
          scale: c.scale,
          opacity: 1,
          filter: 'blur(0px)',
        },
      ];
      // A neighbour gets nudged when Lumo lands next to it.
      if (slug === 'komyx') {
        const tHit = 400 + ARRIVAL.indexOf('lumo') * 70 + 300;
        kf.push(
          {
            offset: at(Math.max(tLand + 20, tHit)),
            translate: tr(cx, cy),
            rotate: `${c.rot}deg`,
            scale: c.scale,
            opacity: 1,
            filter: 'blur(0px)',
            easing: 'cubic-bezier(0.3, 1.6, 0.5, 1)',
          },
          {
            offset: at(tHit + 160),
            translate: tr(cx - 14, cy - 6),
            rotate: `${c.rot - 3}deg`,
            scale: c.scale,
            opacity: 1,
            filter: 'blur(0px)',
            easing: EASE_SOFT,
          },
          {
            offset: at(tHit + 420),
            translate: tr(cx - 10, cy - 4),
            rotate: `${c.rot - 1}deg`,
            scale: c.scale,
            opacity: 1,
            filter: 'blur(0px)',
          },
        );
      }
      if (slug === 'casa-leve') {
        const tHit = 400 + ARRIVAL.indexOf('sono-leve') * 70 + 300;
        kf.push(
          {
            offset: at(Math.max(tLand + 20, tHit)),
            translate: tr(cx, cy),
            rotate: `${c.rot}deg`,
            scale: c.scale,
            opacity: 1,
            filter: 'blur(0px)',
            easing: 'cubic-bezier(0.3, 1.6, 0.5, 1)',
          },
          {
            offset: at(tHit + 180),
            translate: tr(cx + 8, cy - 10),
            rotate: `${c.rot + 3}deg`,
            scale: c.scale,
            opacity: 1,
            filter: 'blur(0px)',
          },
        );
      }
      const last = kf[kf.length - 1];
      kf.push(
        {
          offset: at(Math.max(tOpen, Math.round((last.offset ?? 0) * D) + 30)),
          translate: last.translate,
          rotate: last.rotate,
          scale: c.scale,
          opacity: 1,
          filter: 'blur(0px)',
          easing: EASE_SOFT,
        },
        {
          offset: at(1650),
          translate: tr(ox, oy),
          rotate: `${c.rot * 0.35}deg`,
          scale: 1 + (c.scale - 1) * 0.35,
          opacity: 1,
          filter: 'blur(0px)',
          easing: 'cubic-bezier(0.1, 0.6, 0.2, 1)',
        },
        {
          offset: at(2400),
          translate: tr(nx, ny),
          rotate: `${c.rot * 0.06}deg`,
          scale: 1.02,
          opacity: 1,
          filter: 'blur(0px)',
          easing: 'cubic-bezier(0.5, 0, 0.3, 1)',
        },
        {
          offset: at(2560),
          translate: tr(-cx * 0.025, -cy * 0.025),
          rotate: `${-c.rot * 0.05}deg`,
          scale: 0.985,
          opacity: 1,
          filter: 'blur(0px)',
          easing: EASE_SOFT,
        },
        {
          offset: 1,
          translate: '0px 0px',
          rotate: '0deg',
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        },
      );
      add(li, kf, { duration: D });
    });
  }

  function compactIntro() {
    orbit.forEach((el) => add(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 300 }));
    lines.forEach((el, i) => {
      const isLast = i === lines.length - 1;
      add(
        el,
        isLast
          ? [
              { translate: '0 -0.3em', scale: 1.3, opacity: 0 },
              { translate: '0 0.04em', scale: 0.97, opacity: 1, offset: 0.62 },
              { translate: '0 0', scale: 1, opacity: 1 },
            ]
          : [{ translate: '0 1.35em' }, { translate: '0 0' }],
        {
          delay: [150, 330, 480][i] ?? 760,
          duration: isLast ? 420 : 520,
          easing: isLast ? 'cubic-bezier(0.55, 0, 0.25, 1)' : EASE_OUT,
        },
      );
    });
    fades.forEach((el, i) =>
      add(
        el,
        [
          { opacity: 0, translate: '0 10px' },
          { opacity: 1, translate: '0 0' },
        ],
        {
          delay: i === 0 ? 100 : 950,
          duration: 450,
          easing: EASE_OUT,
        },
      ),
    );
    // Below the fold the drop would play unseen: hold the cards and drop them in on view.
    const below =
      items.length > 0 && items[0].getBoundingClientRect().top > window.innerHeight * 0.85;
    if (below) {
      deferCards = true;
      return;
    }
    items.forEach((li, i) =>
      add(li, dropKeyframes(i), { delay: 1050 + i * 80, duration: 620, easing: EASE_OUT }),
    );
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
    items.forEach((li) => (li.style.willChange = ''));
    if (deferCards) dropOnView(items);
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
    w.__aralabsIntroTimer = window.setTimeout(() => root.removeAttribute('data-intro'), 60);
  };
}

/** Cards dropping into the tilted grid (below xl). */
function dropKeyframes(i: number): Kf[] {
  const dir = i % 2 ? 1 : -1;
  return [
    { opacity: 0, translate: `${dir * 24}px 70px`, rotate: `${dir * 12}deg`, scale: 0.9 },
    {
      opacity: 1,
      translate: `${-dir * 2}px -4px`,
      rotate: `${-dir * 1.5}deg`,
      scale: 1.01,
      offset: 0.7,
    },
    { opacity: 1, translate: '0px 0px', rotate: '0deg', scale: 1 },
  ];
}

/** Plays the drop when the grid scrolls into view (once). */
function dropOnView(items: HTMLElement[]) {
  const list = items[0]?.parentElement;
  if (!list) return;
  items.forEach((li) => (li.style.opacity = '0'));
  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry || entry.intersectionRatio < 0.2) return;
      io.disconnect();
      items.forEach((li, i) => {
        li.animate(dropKeyframes(i), {
          delay: i * 70,
          duration: 620,
          easing: EASE_OUT,
          fill: 'backwards',
        });
        li.style.opacity = '';
      });
    },
    { threshold: [0, 0.2] },
  );
  io.observe(list);
}
