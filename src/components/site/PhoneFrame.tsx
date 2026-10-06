import Image from 'next/image';
import type { CSSProperties } from 'react';
import { PhoneVideo } from './PhoneVideo';

/*
 * A real app screenshot (or a short screen recording) inside a CSS iPhone: brushed titanium rim,
 * black bezel, the screen at the 660 × 1434 ratio of an iPhone Pro Max capture. Every size is in
 * container units, so the frame keeps its proportions at any width the parent gives it.
 */

const SCREEN_RATIO = '660 / 1434';

const SHADOWS = {
  /** On cream: long, warm and soft. */
  soft: '0 60px 90px -40px rgba(40,24,14,0.55), 0 26px 40px -28px rgba(40,24,14,0.45)',
  /** On dark or coloured surfaces: deeper, so the rim still separates. */
  deep: '0 60px 90px -36px rgba(0,0,0,0.75), 0 24px 40px -24px rgba(0,0,0,0.6)',
  none: 'none',
} as const;

export function PhoneFrame({
  src,
  alt,
  sizes,
  priority,
  video,
  tilt = 0,
  shadow = 'soft',
  className = '',
  style,
}: {
  /** Screenshot under /public. Ignored when `video` is set (the poster stands in for it). */
  src?: string;
  /** What the screen shows; read by screen readers. */
  alt: string;
  /** `sizes` for next/image: the rendered width of the whole phone. */
  sizes: string;
  /** Only for the phone in the first viewport. */
  priority?: boolean;
  /** Muted looping clip; shows only the poster under prefers-reduced-motion. */
  video?: { src: string; poster: string };
  /** Rotation in degrees. */
  tilt?: number;
  shadow?: keyof typeof SHADOWS;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`@container relative ${className}`} style={style}>
      <div
        className="relative rounded-[15.5cqw] p-[1.1cqw]"
        style={{
          transform: tilt ? `rotate(${tilt}deg)` : undefined,
          background:
            'linear-gradient(150deg, #5d5852 0%, #2a2724 22%, #46423d 48%, #1f1c1a 72%, #4a4540 100%)',
          boxShadow: `${SHADOWS[shadow]}, inset 0 0 0 1px rgba(255,255,255,0.14)`,
        }}
      >
        {/* Side buttons: action + volume on the left, power on the right. */}
        <span aria-hidden="true" className="pf-btn left-[-0.9cqw] top-[18%] h-[5%]" />
        <span aria-hidden="true" className="pf-btn left-[-0.9cqw] top-[26%] h-[9%]" />
        <span aria-hidden="true" className="pf-btn left-[-0.9cqw] top-[37%] h-[9%]" />
        <span aria-hidden="true" className="pf-btn right-[-0.9cqw] top-[30%] h-[13%]" />
        <div className="rounded-[14.4cqw] bg-black p-[2.6cqw]">
          <div
            className="relative overflow-hidden rounded-[11.8cqw] bg-[#1b1310]"
            style={{ aspectRatio: SCREEN_RATIO }}
          >
            {video ? (
              <>
                <PhoneVideo src={video.src} poster={video.poster} label={alt} />
                {/* The recording's status bar is blanked out; the island stays. */}
                <span
                  aria-hidden="true"
                  className="absolute left-[35.8%] top-[1.46%] h-[3.77%] w-[28.3%] rounded-full bg-black"
                />
              </>
            ) : src ? (
              <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                quality={85}
                priority={priority}
                className="object-cover object-top"
              />
            ) : null}
            {/* Glass: a faint diagonal sheen over the screen. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 32%, transparent 33%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
