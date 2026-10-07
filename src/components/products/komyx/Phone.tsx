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
