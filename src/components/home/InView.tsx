'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Marks its wrapper with data-inview="false" after mount and flips it to "true" the first time it
 * scrolls into view; CSS in globals.css animates from one state to the other. Server HTML has no
 * attribute, so without JS (or with prefers-reduced-motion) everything shows its final state.
 */
export function InView({
  children,
  className = '',
  threshold = 0.3,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
  as?: 'div' | 'ul' | 'ol' | 'p' | 'h2' | 'figure';
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.dataset.inview = 'false';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.inview = 'true';
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
