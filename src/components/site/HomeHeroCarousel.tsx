'use client';

import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

type Slide = {
  image: string;
  imageMd: string;
  imageMobile: string;
  imageAlt: string;
  badge?: string;
  headlinePrefix: string;
  headlineAccent: string;
  headlineSuffix: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    image: '/images/portfolio-banner.png',
    imageMd: '/images/portfolio-banner-md.png',
    imageMobile: '/images/portfolio-banner-mobile.png',
    imageAlt: '',
    badge: 'Lab brasileiro de produtos digitais',
    headlinePrefix: 'Software ',
    headlineAccent: 'próprio',
    headlineSuffix: ' para problemas reais do dia a dia.',
    body: 'Fábrica brasileira de produtos digitais. Criamos sistemas simples, bem desenhados e sustentáveis para organizar rotinas, operações e serviços que ainda dependem de improviso.',
    ctaLabel: 'Conhecer nossos produtos',
    ctaHref: '/produtos',
  },
  {
    image: '/images/aragenda-banner-02.png',
    imageMd: '/images/aragenda-banner-md.png',
    imageMobile: '/images/aragenda-banner-mobile.png',
    imageAlt: '',
    headlinePrefix: '',
    headlineAccent: 'Aragenda',
    headlineSuffix: ' — agenda online para pequenos negócios.',
    body: 'Para salões, clínicas, oficinas e profissionais autônomos que vendem tempo por horário. Combina agendamento online, página pública do negócio e ferramentas que tiram a operação do WhatsApp.',
    ctaLabel: 'Conhecer Aragenda',
    ctaHref: '/produtos/aragenda',
  },
  {
    image: '/images/casa-leve-banner-02.png',
    imageMd: '/images/casa-leve-banner-md.png',
    imageMobile: '/images/casa-leve-banner-mobile.png',
    imageAlt: '',
    headlinePrefix: '',
    headlineAccent: 'Casa Leve',
    headlineSuffix: ' — rotina e hábitos da família.',
    body: 'Sistema para famílias dividirem responsabilidades, organizarem rotina e manterem acordos visíveis. Menos cobrança, mais clareza, mais autonomia.',
    ctaLabel: 'Conhecer Casa Leve',
    ctaHref: '/produtos/casa-leve',
  },
];

export function HomeHeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="top"
      className="relative border-b border-[color:var(--line)]"
      aria-roledescription="carousel"
      aria-label="Destaques AraLabs"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <article
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} de ${total}`}
              className="relative aspect-[4/5] min-w-0 flex-[0_0_100%] overflow-hidden md:aspect-[16/9] lg:aspect-[3/1]"
            >
              <Image
                src={s.imageMobile}
                alt={s.imageAlt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-center md:hidden"
              />
              <Image
                src={s.imageMd}
                alt={s.imageAlt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="hidden object-cover object-center md:block lg:hidden"
              />
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="hidden object-cover object-center lg:block"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--bg)]/90 via-[color:var(--bg)]/65 to-[color:var(--bg)]/15" />
              <div className="grain absolute inset-0 opacity-60" />

              <div className="relative mx-auto flex h-full w-full max-w-[1240px] flex-col px-6 py-10 md:py-14 lg:px-10 lg:py-20">
                <div className="flex max-w-2xl flex-1 flex-col justify-start md:justify-center">
                  {s.badge && (
                    <div className="mb-5 hidden w-fit items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/70 py-1.5 pl-2 pr-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-muted)] backdrop-blur md:inline-flex">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--gold)]/15 text-[color:var(--gold-soft)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shimmer" />
                      </span>
                      {s.badge}
                    </div>
                  )}

                  {(() => {
                    const HeadingTag = i === 0 ? 'h1' : 'h2';
                    return (
                      <HeadingTag className="text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[36px] lg:text-[44px]">
                        {s.headlinePrefix}
                        <span className="font-serif italic text-[color:var(--gold-soft)]">
                          {s.headlineAccent}
                        </span>
                        {s.headlineSuffix}
                      </HeadingTag>
                    );
                  })()}

                  <p className="mt-5 hidden max-w-xl text-[14px] leading-[1.6] text-[color:var(--ink-muted)] md:block md:text-[16px]">
                    {s.body}
                  </p>
                </div>

                <div className="mt-6 flex max-w-2xl flex-wrap items-center gap-4">
                  <Link
                    href={s.ctaHref}
                    className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--gold)] px-5 py-3 text-[14px] font-semibold tracking-tight text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
                  >
                    {s.ctaLabel}
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 lg:bottom-8">
        <div className="pointer-events-auto relative mx-auto flex max-w-[1240px] items-center justify-end gap-6 px-6 lg:px-10">
          <div className="pointer-events-auto absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
                aria-current={selected === i}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i
                    ? 'w-10 bg-[color:var(--gold)]'
                    : 'w-6 bg-[color:var(--line-strong)] hover:bg-[color:var(--ink-dim)]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-serif text-sm italic text-[color:var(--ink-dim)]">
              {String(selected + 1).padStart(2, '0')}{' '}
              <span className="text-[color:var(--ink-dim)]/60">
                / {String(total).padStart(2, '0')}
              </span>
            </span>
            <button
              type="button"
              onClick={prev}
              aria-label="Slide anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/80 text-[color:var(--ink)] backdrop-blur transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/80 text-[color:var(--ink)] backdrop-blur transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
