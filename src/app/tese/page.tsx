import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { Thesis } from '@/components/site/Thesis';
import { Problem } from '@/components/site/Problem';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { articleSchema } from '@/lib/seo/schemas';

const pageHeadline = 'Nossa tese sobre famílias, rotina e produtos digitais';
const pageDescription =
  'A tese da AraLabs: famílias precisam de sistemas que distribuem responsabilidades, tornam acordos visíveis e incentivam hábitos. Nosso ponto de vista sobre organização doméstica e produtos para famílias no Brasil.';

export const metadata: Metadata = {
  title: 'Nossa tese',
  description: pageDescription,
  alternates: { canonical: '/tese' },
  openGraph: {
    title: pageHeadline,
    description: pageDescription,
    url: '/tese',
    type: 'article',
  },
};

const readings = [
  {
    n: '01',
    title: 'Famílias não precisam só de lembretes',
    body: 'Precisam de um sistema que distribua responsabilidades e torne acordos visíveis.',
  },
  {
    n: '02',
    title: 'A organização não pode depender de uma pessoa',
    body: 'Quando a memória recai sobre um único adulto, a casa inteira fica instável.',
  },
  {
    n: '03',
    title: 'Cobrança não gera hábito',
    body: 'Clareza e incentivo sustentam rotina melhor do que repetição de avisos.',
  },
];

export default function TesePage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          path: '/tese',
          headline: pageHeadline,
          description: pageDescription,
          datePublished: '2026-04-17',
          image: '/images/tese-comtemplacao.png',
        })}
      />
      <PageHero
        eyebrow="Nossa tese"
        title={
          <>
            Bons produtos nascem de{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">
              leitura profunda
            </span>{' '}
            do problema.
          </>
        }
        description="O diferencial de uma empresa de produtos não está em construir rápido, mas em enxergar melhor, formular melhor e sustentar melhor uma direção de longo prazo."
        visual={
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
            <Image
              src="/images/tese-comtemplacao.png"
              alt="Mãos folheando um caderno com gráficos e anotações sob luz dourada de fim de tarde"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        }
      />

      <Thesis />

      {/* Big editorial image break */}
      <section className="relative border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/vida-real.png"
              alt="Panorâmica de uma cozinha em uso, família preparando algo junta"
              width={2400}
              height={1000}
              sizes="(min-width: 1240px) 1160px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <Problem />

      {/* Nossa leitura */}
      <section className="relative border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Nossa leitura
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              O que entendemos depois de escutar famílias.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {readings.map((r) => (
              <article
                key={r.n}
                className="relative rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8"
              >
                <span className="font-serif text-[13px] italic text-[color:var(--gold-soft)]">
                  {r.n}
                </span>
                <h3 className="mt-10 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-balance text-[26px] font-semibold tracking-tight text-[color:var(--ink)] md:text-[32px]">
                Ver a tese{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">
                  em produto
                </span>
                .
              </h3>
              <p className="mt-2 text-[15.5px] text-[color:var(--ink-muted)]">
                Conheça o Casa Leve — o primeiro produto da Aralabs em construção.
              </p>
            </div>
            <Link
              href="/casa-leve"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Conhecer o Casa Leve →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
