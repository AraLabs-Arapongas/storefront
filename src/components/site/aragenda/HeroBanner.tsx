import Image from 'next/image';

/**
 * Banner visual full-bleed do topo da landing. Art direction
 * por viewport (mobile retrato, md paisagem, lg ultra-wide) preserva
 * composição da arte original em cada formato.
 */
export function HeroBanner() {
  return (
    <section className="relative aspect-[4/5] overflow-hidden border-b border-[color:var(--line)] md:aspect-[16/9] lg:aspect-[3/1]">
      <Image
        src="/images/aragenda-banner-product-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />
      <Image
        src="/images/aragenda-banner-product-md.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center md:block lg:hidden"
      />
      <Image
        src="/images/aragenda-banner-product.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center lg:block"
      />
    </section>
  );
}
