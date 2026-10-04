import type { ReactNode } from 'react';

/** Minimal phone shell for the illustrative UI: dark bezel, notch, warm white screen. */
export function Phone({
  children,
  className = '',
  screen = 'bg-[#fffaf3]',
}: {
  children: ReactNode;
  className?: string;
  screen?: string;
}) {
  return (
    <div
      className={`relative rounded-[40px] bg-[color:var(--dark)] p-[7px] shadow-[0_40px_80px_-30px_rgba(40,0,15,0.6)] ${className}`}
    >
      <div className={`relative overflow-hidden rounded-[33px] ${screen}`}>
        <div className="flex justify-center pt-2" aria-hidden="true">
          <span className="h-[18px] w-[78px] rounded-full bg-[color:var(--dark)]" />
        </div>
        {children}
      </div>
    </div>
  );
}

/** Deterministic QR-like pattern (decorative): three finder squares and pseudo-random modules. */
export function FakeQr({
  className = '',
  color = 'currentColor',
}: {
  className?: string;
  color?: string;
}) {
  const N = 21;
  const cells: [number, number][] = [];
  const finder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= N - 7 && y < 7) || (x < 7 && y >= N - 7);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (finder(x, y)) continue;
      const h = Math.imul(x * 374761393 + y * 668265263, 1274126177) >>> 0;
      if ((h >>> 13) % 9 < 4) cells.push([x, y]);
    }
  }
  const box = (x: number, y: number) => (
    <g key={`f${x}${y}`}>
      <rect x={x} y={y} width="7" height="7" fill={color} />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill={color} />
    </g>
  );
  return (
    <svg viewBox={`-1 -1 ${N + 2} ${N + 2}`} className={className} aria-hidden="true">
      <rect x="-1" y="-1" width={N + 2} height={N + 2} fill="#fff" />
      {box(0, 0)}
      {box(N - 7, 0)}
      {box(0, N - 7)}
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />
      ))}
    </svg>
  );
}
