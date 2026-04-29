import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { articleSchema } from '@/lib/seo/schemas';

const pageHeadline = 'Tese da AraLabs';
const pageDescription =
  'A tese da AraLabs: existem muitos problemas cotidianos mal resolvidos por software — em famílias, em pequenos negócios e em operações locais. Criamos produtos próprios para esses contextos.';

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

const contexts = [
  {
    n: '01',
    title: 'Dentro de casa',
    body: 'Famílias tentando dividir melhor as responsabilidades, organizar rotina e manter acordos visíveis.',
  },
  {
    n: '02',
    title: 'Em pequenos negócios',
    body: 'Salões, clínicas, oficinas e profissionais autônomos tentando organizar a agenda e a presença digital.',
  },
  {
    n: '03',
    title: 'Em operações locais',
    body: 'Negócios e equipes que ainda dependem de WhatsApp, planilhas, memória e improviso para tomar decisões.',
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
          datePublished: '2026-04-28T00:00:00-03:00',
        })}
      />

      <PageHero
        eyebrow="Nossa tese"
        title={
          <>
            Software próprio para{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">problemas reais</span>{' '}
            do dia a dia.
          </>
        }
        description="A AraLabs acredita que ainda existem muitos problemas cotidianos mal resolvidos por software."
      />

      {/* Tese principal */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl space-y-7 text-[18px] leading-[1.75] text-[color:var(--ink-muted)] md:text-[19px]">
            <p>
              Alguns problemas são grandes demais para serem resolvidos por planilhas. Outros são
              simples demais para justificar sistemas corporativos pesados.
            </p>
            <p className="text-[color:var(--ink)]">É nesse espaço que queremos construir.</p>
            <p>
              Criamos produtos digitais para contextos onde organização, presença digital, rotina,
              operação e tomada de decisão ainda dependem de improviso, WhatsApp, memória e esforço
              manual.
            </p>
            <p>Nossa tese não está presa a um único mercado.</p>
            <p>
              Ela pode aparecer em uma família tentando dividir melhor as responsabilidades da casa.
              Pode aparecer em um salão tentando organizar sua agenda. Pode aparecer em um pequeno
              negócio tentando ter presença digital. Pode aparecer em uma operação local tentando
              parar de depender de processos soltos.
            </p>
            <p className="text-[color:var(--ink)]">
              A AraLabs existe para transformar esses problemas em produtos simples, úteis e
              sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Onde a tese aparece */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Onde a tese aparece
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Os mesmos sintomas em{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">
              contextos diferentes
            </span>
            .
          </h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {contexts.map((c) => (
              <li
                key={c.n}
                className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8"
              >
                <span className="font-serif text-[13px] italic text-[color:var(--gold-soft)]">
                  {c.n}
                </span>
                <h3 className="mt-8 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA para portfólio */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-balance text-[26px] font-semibold tracking-tight text-[color:var(--ink)] md:text-[32px]">
                Veja a tese{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">em produto</span>.
              </h3>
              <p className="mt-2 text-[15.5px] text-[color:var(--ink-muted)]">
                Conheça os produtos que a AraLabs constrói a partir dela.
              </p>
            </div>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Ver produtos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
