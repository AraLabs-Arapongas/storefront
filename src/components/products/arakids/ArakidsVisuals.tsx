import { cssI } from '@/components/site/AppHero';

/*
 * Arakids' own moments: the four age tracks as a staircase that climbs into the hero, and two
 * small drawings for the parents' places in the portal (the castle and the lighthouse), built
 * from the mark's triangle.
 */

export const YELLOW = '#ffe08a';
export const NAVY = '#123f66';

export const AGES = [
  { n: '2–3', title: 'Exploradores' },
  { n: '4–5', title: 'Curiosos' },
  { n: '6–7', title: 'Inventores' },
  { n: '8–10', title: 'Navegadores' },
];

/** Hero: four tiles growing from the floor into a staircase, a flag on the last step. */
export function AgeStairs() {
  return (
    <figure className="relative mx-auto w-full max-w-[520px] lg:ml-auto lg:mr-0">
      <ol
        aria-label="Quatro trilhas por idade, de 2 a 10 anos"
        className="relative grid h-[300px] grid-cols-4 items-end gap-2.5 sm:h-[400px] sm:gap-3.5 lg:h-[min(52svh,460px)]"
      >
        {AGES.map((a, k) => (
          <li
            key={a.n}
            className="pa-ak-tile relative flex flex-col justify-between rounded-[18px] px-2.5 pb-3 pt-3.5 shadow-[0_30px_50px_-28px_rgba(5,20,45,0.8)] sm:rounded-[24px] sm:px-4 sm:pb-4 sm:pt-5"
            style={{
              height: `${40 + k * 20}%`,
              background: k === 1 ? YELLOW : '#fff',
              color: NAVY,
              ...cssI(k + 2),
            }}
          >
            {k === AGES.length - 1 ? (
              <span
                aria-hidden="true"
                className="pa-ak-flag absolute -top-12 left-4 h-12 w-[3px] rounded-full bg-white sm:-top-14 sm:h-14"
              >
                <span
                  className="absolute left-[3px] top-0 h-6 w-8"
                  style={{
                    background: YELLOW,
                    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                  }}
                />
              </span>
            ) : null}
            <span className="block whitespace-nowrap text-[clamp(1.05rem,5.2vw,2.5rem)] font-extrabold leading-none tracking-[-0.04em] lg:text-[clamp(1.6rem,2.5vw,2.5rem)]">
              {a.n}
            </span>
            <span className="block">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] opacity-70 sm:text-[11px]">
                anos
              </span>
              <span className="mt-0.5 hidden text-[13px] font-bold sm:block">{a.title}</span>
            </span>
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className="mt-3 h-[3px] rounded-full bg-white/30" />
      <figcaption className="mt-3 text-[12.5px] text-white/75">
        Quatro trilhas, do primeiro toque à primeira estratégia.
      </figcaption>
    </figure>
  );
}

/** Castelo dos Pais: towers with triangle roofs. Decorative. */
export function CastleArt({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 240 170" className="h-auto w-full" aria-hidden="true">
      <polygon points="18,62 46,18 74,62" fill={color} />
      <polygon points="166,62 194,18 222,62" fill={color} />
      <polygon points="88,48 120,0 152,48" fill={YELLOW} />
      <rect x="24" y="62" width="44" height="108" rx="4" fill={color} opacity="0.85" />
      <rect x="172" y="62" width="44" height="108" rx="4" fill={color} opacity="0.85" />
      <rect x="94" y="48" width="52" height="122" rx="4" fill={color} />
      <rect x="62" y="96" width="116" height="74" fill={color} opacity="0.7" />
      <path d="M104 170 V140 a16 16 0 0 1 32 0 V170 Z" fill="#fff" opacity="0.9" />
      <rect x="112" y="76" width="16" height="20" rx="8" fill="#fff" opacity="0.85" />
      <rect x="38" y="90" width="14" height="18" rx="7" fill="#fff" opacity="0.6" />
      <rect x="186" y="90" width="14" height="18" rx="7" fill="#fff" opacity="0.6" />
    </svg>
  );
}

/** Farol da Privacidade: a striped tower and its beam. Decorative. */
export function LighthouseArt({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 240 170" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pa-ak-beam" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={YELLOW} />
          <stop offset="1" stopColor={YELLOW} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="128,40 240,4 240,84" fill="url(#pa-ak-beam)" />
      <polygon points="104,30 120,8 136,30" fill={color} />
      <rect x="104" y="30" width="32" height="20" rx="3" fill={YELLOW} />
      <polygon points="100,50 140,50 152,170 88,170" fill={color} />
      <polygon points="97,80 143,80 145,100 95,100" fill="#fff" opacity="0.9" />
      <polygon points="93,124 147,124 149,144 91,144" fill="#fff" opacity="0.9" />
      <rect x="40" y="166" width="160" height="4" rx="2" fill={color} opacity="0.4" />
    </svg>
  );
}
