import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { KOMYX_URL, productBySlug } from '@/lib/products';
import { KomyxMark } from '@/components/site/ProductMarks';
import { InView } from '@/components/home/InView';
import { HeroBuilder } from '@/components/products/komyx/HeroBuilder';

/*
 * Lean showcase. www.komyx.com.br is the source of truth for the product (plans, features,
 * proof, FAQ); this page only presents Komyx as an AraLabs product and sends people there.
 * Keep prices and detailed feature lists out of it so the two sites never disagree.
 */

const komyx = productBySlug('komyx');
const path = '/produtos/komyx';
const pageTitle = 'Komyx, o sistema para buffets da AraLabs';
const pageDescription =
  'Komyx é o sistema para buffets feito pela AraLabs: orçamento online, reserva no Pix, contrato e convite. Conheça os planos em komyx.com.br.';

export const metadata = pageMetadata({
  path,
  title: pageTitle,
  absoluteTitle: true,
  description: pageDescription,
  image: '/produtos/komyx/opengraph-image',
});

/** Light pink used for type on the pink and black surfaces. */
const BLUSH = '#ffd3e1';

const DOES = [
  {
    title: 'Orçamento online',
    body: 'O cliente escolhe data, pacote, tema e cardápio na página do buffet e o pedido chega pronto.',
  },
  {
    title: 'Reserva no Pix',
    body: 'O sinal sai com um identificador, então cada pagamento já aparece ligado à festa certa.',
  },
  {
    title: 'Contrato e convite',
    body: 'O contrato é preenchido sozinho no aceite, e a família monta a lista e manda o convite com confirmação.',
  },
  {
    title: 'Portaria no celular',
    body: 'No dia, a equipe marca quem chegou e lança os extras, sem papel na entrada.',
  },
];

const i = (n: number) => ({ '--i': n }) as CSSProperties;

function Button({
  href,
  children,
  variant = 'solid',
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost-light';
}) {
  const cls = {
    solid: 'bg-white hover:bg-[#ffd3e1]',
    'ghost-light': 'border border-white/45 text-white hover:bg-white/10',
  }[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition ${cls}`}
      style={variant === 'solid' ? { color: komyx.colorInk } : undefined}
    >
      {children}
    </a>
  );
}

function Ctas() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button href={KOMYX_URL}>
        Conhecer o Komyx
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Button>
      <Button href={KOMYX_URL} variant="ghost-light">
        Ver planos
      </Button>
    </div>
  );
}

export default function KomyxPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path,
            name: pageTitle,
            description: pageDescription,
            about: {
              '@type': 'SoftwareApplication',
              '@id': 'https://www.komyx.com.br/#software',
              name: 'Komyx',
              url: 'https://www.komyx.com.br',
            },
          }),
          breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: 'Komyx' }]),
        ]}
      />

      {/* 1 · HERO — pink, the client building the party on the buffet's page */}
      <section
        className="pk-hero relative flex items-center overflow-hidden text-white"
        style={{ background: komyx.colorInk }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-30%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_70%)]" />
          <div className="pk-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 px-6 pb-[calc(64px+var(--hero-cut))] pt-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-[calc(40px+var(--hero-cut))] lg:pt-8">
          <div>
            <div className="pk-load-up flex flex-wrap items-center gap-3">
              <KomyxMark className="h-10 w-10 text-white" />
              <p className="text-[26px] font-extrabold tracking-tight">Komyx</p>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]">
                Um produto AraLabs
              </span>
            </div>
            <h1 className="pk-hero-title display mt-7 text-balance lg:mt-8">
              <span className="pk-load-up block" style={{ '--d': 120 } as CSSProperties}>
                Komyx, sistema para buffets:
              </span>{' '}
              <span
                className="pk-load-up block"
                style={{ color: BLUSH, '--d': 320 } as CSSProperties}
              >
                a festa se vende sozinha.
              </span>
            </h1>
            <div className="pk-load-up" style={{ '--d': 520 } as CSSProperties}>
              <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.6] text-white/90 md:text-[18.5px]">
                O Komyx é o sistema da AraLabs para buffets infantis e casas de festa. O cliente
                monta a festa pela página do buffet; você recebe o pedido pronto, confirma, e o
                resto anda sozinho.
              </p>
              <div className="mt-7">
                <Ctas />
              </div>
              <p className="mt-4 text-[14px] text-white/80">
                {komyx.offer}. Planos e cadastro em komyx.com.br.
              </p>
            </div>
          </div>
          <figure>
            <HeroBuilder />
            <figcaption className="mt-6 text-center text-[12px] text-white/65 lg:text-right">
              Interface ilustrativa · nomes e valores de exemplo
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2 · WHAT IT IS AND WHO IT IS FOR — black, cut on the diagonal */}
      <section className="cut-top bg-[color:var(--dark)] text-[color:var(--bg)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <p
            className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: komyx.color }}
          >
            <span className="tri text-[8px]" aria-hidden="true" />
            Para buffets infantis e casas de festa
          </p>
          <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,6vw,5.6rem)]">
            Tudo que hoje vive no WhatsApp,{' '}
            <span style={{ color: komyx.color }}>num lugar só.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/70">
            Feito para quem toca o buffet com equipe pequena e agenda cheia: a dona confirma de
            qualquer lugar, a equipe cuida do dia a dia e a família acompanha a festa pelo celular.
          </p>
          <InView
            as="ul"
            className="mt-14 grid border-t border-white/15 md:grid-cols-2"
            threshold={0.3}
          >
            {DOES.map((d, k) => (
              <li
                key={d.title}
                className={`iv iv-up border-b border-white/15 py-8 ${
                  k % 2 === 0 ? 'md:pr-12' : 'md:border-l md:pl-12'
                }`}
                style={i(k)}
              >
                <h3 className="text-[clamp(1.3rem,2vw,1.7rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                  {d.title}
                </h3>
                <p className="mt-3 max-w-md text-[16px] leading-[1.7] text-white/70">{d.body}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3 · WHY ARALABS BUILT IT — cream */}
      <section className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-32">
          <h2 className="display max-w-[13ch] text-[clamp(2.4rem,5vw,4.6rem)]">
            Por que a AraLabs <span style={{ color: komyx.colorInk }}>fez o Komyx.</span>
          </h2>
          <div className="max-w-xl space-y-6 text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
            <p>
              O Komyx começou como um{' '}
              <Link
                href="/sob-medida"
                className="font-semibold text-[color:var(--ink)] underline underline-offset-4"
              >
                sistema sob medida
              </Link>{' '}
              para a rotina de um buffet: orçamento perdido no WhatsApp, data marcada duas vezes,
              Pix sem saber de qual festa era. Resolvido ali, ficou claro que o problema era de
              quase todo buffet.
            </p>
            <p>
              Então viramos o sistema em produto, com a mesma regra dos outros produtos da AraLabs:
              simples de usar no celular, sem treinamento longo e com preço que cabe num negócio
              pequeno.
            </p>
            <p>
              Planos, recursos e cadastro ficam no site do produto.{' '}
              <a
                href={KOMYX_URL}
                target="_blank"
                rel="noopener"
                className="font-semibold underline underline-offset-4"
                style={{ color: komyx.colorInk }}
              >
                Conheça o sistema Komyx para buffet infantil
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 4 · CLOSE — pink */}
      <section
        className="cut-top overflow-x-clip text-white"
        style={{ background: komyx.colorInk }}
        aria-labelledby="komyx-cta"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="pk-tri-grid-light absolute inset-0" />
          {/* The balloon, at the scale of the section, drifting off the right edge. */}
          <KomyxMark className="absolute -right-[12%] bottom-[-8%] h-[min(42rem,90vw)] w-[min(40rem,86vw)] rotate-[8deg] text-white/[0.09] lg:-right-[4%] lg:bottom-[-14%]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <KomyxMark className="h-12 w-12 text-white" />
          <h2 id="komyx-cta" className="display mt-8 max-w-[17ch] text-[clamp(2.6rem,6.4vw,6rem)]">
            Veja o Komyx funcionando <span style={{ color: BLUSH }}>no seu buffet.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/85">
            Crie o buffet, cadastre os pacotes e compartilhe a sua página com o próximo cliente que
            perguntar o preço.
          </p>
          <div className="mt-10">
            <Ctas />
          </div>
        </div>
      </section>
    </>
  );
}
