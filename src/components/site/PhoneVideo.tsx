'use client';

import { useEffect, useRef } from 'react';

/**
 * Muted screen recording for PhoneFrame. It plays (looping) only while on screen and only when the
 * visitor has not asked for reduced motion; otherwise the poster stays as a still frame.
 */
export function PhoneVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      if (visible && !motion.matches && !document.hidden) v.play().catch(() => {});
      else v.pause();
    };
    const io = new IntersectionObserver(([e]) => {
      visible = !!e?.isIntersecting;
      sync();
    });
    io.observe(v);
    motion.addEventListener('change', sync);
    // Browsers pause muted video in background tabs; pick it up again on return.
    document.addEventListener('visibilitychange', sync);
    return () => {
      io.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover object-top"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      role="img"
      aria-label={label}
    />
  );
}
