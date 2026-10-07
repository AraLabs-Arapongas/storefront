import Image from 'next/image';
import { GlassWater, Hand, User, Volume2 } from 'lucide-react';
import { productBySlug } from '@/lib/products';
import { InView } from '@/components/home/InView';
import { cssI } from '@/components/site/AppHero';

/*
 * Lumo's own moments. The phone and the three-phone strip are crops of the real screenshots in
 * /public/images (the app in Spanish and English); the sentence strip is an HTML illustration.
 */

/**
 * Shows only one region of a larger image. Percentages keep the crop exact at any width:
 * horizontal offsets and the vertical one are both expressed against the frame.
 */
function Crop({
  src,
  iw,
  ih,
  x,
  y,
  w,
  h,
  sizes,
  alt,
  preload,
  className = '',
}: {
  src: string;
  iw: number;
  ih: number;
  x: number;
  y: number;
  w: number;
  h: number;
  sizes: string;
  /** What the crop shows; empty only when the crop is decorative. */
  alt: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <Image
        src={src}
        alt={alt}
        width={iw}
        height={ih}
        sizes={sizes}
        preload={preload}
        className="absolute max-w-none"
        style={{
          width: `${(iw / w) * 100}%`,
          height: 'auto',
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
        }}
      />
    </div>
  );
}

const WORDS = [
  { w: 'eu', icon: User },
  { w: 'quero', icon: Hand },
  { w: 'água', icon: GlassWater },
];

/** The phrase bar: three cards drop in, the speak button pulses, each word lights up as spoken. */
export function LumoSentence({ className = '' }: { className?: string }) {
  const p = productBySlug('lumo');
  return (
    <div
      role="img"
      aria-label="Ilustração: a frase “eu quero água” montada com três cards e o botão de falar"
      className={`flex items-center gap-2 rounded-[22px] bg-white p-2.5 shadow-[0_24px_50px_-24px_rgba(54,32,140,0.55)] sm:gap-2.5 sm:p-3 ${className}`}
    >
      {WORDS.map((x, k) => (
        <span
          key={x.w}
          className="pa-say iv iv-pop flex w-[4.4rem] flex-col items-center rounded-[14px] border-2 px-1 pb-1.5 pt-2 sm:w-[5.2rem]"
          style={{ borderColor: p.colorSoft, color: p.colorInk, ...cssI(k * 2 + 1) }}
        >
          <x.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
          <span className="mt-1 text-[13px] font-bold sm:text-[14px]">{x.w}</span>
        </span>
      ))}
      <span
        className="lumo-speak iv iv-pop ml-auto grid h-12 w-12 shrink-0 place-items-center rounded-full text-white sm:h-14 sm:w-14"
        style={{ background: p.colorInk, ...cssI(7) }}
      >
        <Volume2 className="h-6 w-6" />
      </span>
    </div>
  );
}

/** Hero: the real Talk screen (Spanish UI), with the illustrated phrase bar riding over it. */
export function LumoHeroBoard() {
  return (
    <InView className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-0" threshold={0.2}>
      {/* The mark's triangle, in Lumo's lilac, standing behind the phone. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[-8%] bottom-[8%] top-[-4%]"
        style={{ background: '#e9e3fa', clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
      />
      <figure className="relative">
        <div className="relative mx-auto w-[66%] max-w-[300px] rotate-[2deg]">
          <Crop
            src="/images/lumo-banner-mobile.webp"
            alt="Tela Falar do Lumo, em espanhol: cards de pictogramas para montar a frase"
            iw={1200}
            ih={1500}
            x={527}
            y={403}
            w={538}
            h={800}
            sizes="(min-width: 1024px) 650px, 70vw"
            preload
            className="pa-lumo-phone rounded-t-[11%_7.5%] shadow-[0_40px_80px_-30px_rgba(54,32,140,0.55)]"
          />
        </div>
        <LumoSentence className="relative -mt-20 w-full sm:-mt-24 sm:w-fit lg:-ml-4" />
        <figcaption className="mt-4 text-center text-[12px] text-[color:var(--ink-dim)]">
          Tela do Lumo em espanhol · frase ilustrativa
        </figcaption>
      </figure>
    </InView>
  );
}

/** Three real screens of the app (English and Spanish), cropped from the store banner. */
export function LumoScreens({ className = '' }: { className?: string }) {
  return (
    <figure className={className}>
      <Crop
        src="/images/lumo-banner-02.webp"
        alt="Telas do Lumo em inglês e espanhol: falar, início e cards de pictogramas"
        iw={2880}
        ih={960}
        x={1490}
        y={90}
        w={1200}
        h={870}
        sizes="(min-width: 1024px) 1300px, 200vw"
        className="rounded-[28px] shadow-[0_40px_80px_-40px_rgba(20,10,60,0.6)]"
      />
    </figure>
  );
}
