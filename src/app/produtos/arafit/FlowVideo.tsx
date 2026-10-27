'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const INK = '#121214';
const MUTED = '#5F5F68';

export type FlowStep = {
  /** Second of the video where the step starts. */
  at: number;
  t: string;
  bg: string;
  fg: string;
};

/**
 * The app recorded on an iPhone, in an iPhone frame, with its steps underneath. The step that is
 * playing lights up and fills its bar; a click on a step jumps there. Plays only while on screen,
 * and not at all on its own under prefers-reduced-motion.
 */
export function FlowVideo({
  src,
  poster,
  label,
  steps,
  className = '',
}: {
  src: string;
  poster: string;
  label: string;
  steps: FlowStep[];
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const active = steps.reduce((k, s, j) => (time >= s.at ? j : k), 0);

  const go = (at: number) => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = at;
    setTime(at);
    v.play().catch(() => {});
  };

  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[280px] rounded-[13.5%/6.2%] bg-[#2b2b2e] p-[1.2%] shadow-[0_30px_60px_-28px_rgba(18,18,20,0.45),inset_0_0_0_1px_rgba(255,255,255,0.14)]">
        <div className="relative overflow-hidden rounded-[12.6%/5.8%] border-[5px] border-black bg-black">
          <video
            ref={ref}
            src={src}
            poster={poster}
            width={540}
            height={1174}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={label}
            className="block h-auto w-full"
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[1.6%] h-[3.4%] w-[31%] -translate-x-1/2 rounded-full bg-black"
          />
          {paused ? (
            <button
              type="button"
              onClick={() => ref.current?.play().catch(() => {})}
              className="absolute inset-0 grid place-items-center bg-black/10 transition hover:bg-black/20"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-lg">
                <Play className="ml-1 h-7 w-7" style={{ color: INK }} aria-hidden="true" />
              </span>
              <span className="sr-only">Assistir ao vídeo</span>
            </button>
          ) : null}
        </div>
      </div>
      <ol className="mx-auto mt-6 grid max-w-[460px] grid-cols-3 gap-2">
        {steps.map((s, j) => {
          const end = steps[j + 1]?.at ?? duration;
          const fill =
            j < active ? 1 : j > active || end <= s.at ? 0 : (time - s.at) / (end - s.at);
          const on = j === active;
          return (
            <li key={s.t}>
              <button
                type="button"
                onClick={() => go(s.at)}
                aria-current={on ? 'step' : undefined}
                className="flex h-full w-full flex-col rounded-[16px] p-2.5 text-left transition"
                style={{ background: on ? s.bg : 'transparent' }}
              >
                <span className="mb-2.5 flex items-start gap-1.5">
                  <span
                    className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white transition"
                    style={{ background: on ? s.fg : '#9A9AA3' }}
                    aria-hidden="true"
                  >
                    {j + 1}
                  </span>
                  <span
                    className="text-[13px] font-semibold leading-[1.3]"
                    style={{ color: on ? INK : MUTED }}
                  >
                    {s.t}
                  </span>
                </span>
                <span
                  className="mt-auto block h-1 w-full overflow-hidden rounded-full bg-black/[0.07]"
                  aria-hidden="true"
                >
                  <span
                    className="block h-full origin-left rounded-full"
                    style={{ background: s.fg, transform: `scaleX(${fill})` }}
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
