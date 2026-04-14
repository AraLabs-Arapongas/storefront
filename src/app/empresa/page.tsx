import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { ImagePlaceholder } from '@/components/site/ImagePlaceholder';
import { Pillars } from '@/components/site/Pillars';
import { Values } from '@/components/site/Values';
import { NextSteps } from '@/components/site/NextSteps';

const principles = [
  {
    n: '01',
    title: 'Problemas reais antes de funcionalidades',
    body: 'Entender a dor antes de decidir o que construir.',
  },
  {
    n: '02',
    title: 'Clareza antes de velocidade',
    body: 'Construir rápido sem entendimento gera retrabalho e perda de foco.',
  },
  {
    n: '03',
    title: 'Empresa antes de produto isolado',
    body: 'Decisões pensam no portfólio e na consistência de longo prazo.',
  },
  {
    n: '04',
    title: 'Simplicidade na experiência, profundidade na estratégia',
    body: 'Simples no resultado, profundo na leitura do problema.',
  },
  {
    n: '05',
    title: 'Foco no que gera valor real',
    body: 'Favorecer o que aumenta clareza, utilidade e diferenciação.',
  },
  {
    n: '06',
    title: 'Documentar para pensar melhor',
    body: 'Documentação não é burocracia, é parte do processo de clareza.',
  },
  {
    n: '07',
    title: 'Longo prazo como filtro',
    body: 'Avaliar cada decisão pelo impacto no médio e longo prazo.',
  },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="A Aralabs"
        title={
          <>
            Uma empresa para{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">criar</span>{' '}
            produtos, não apenas software.
          </>
        }
        description="A Aralabs é uma empresa brasileira em construção, criada como estrutura-mãe para conceber, organizar e evoluir produtos digitais com utilidade real e visão de longo prazo."
        visual={
          <ImagePlaceholder
            className="absolute inset-0 h-full w-full"
            description="Retrato editorial do time/fundador em ambiente de trabalho intencional: caderno, computador, luz lateral. Tom quente, câmera analógica. Nada de clichê de startup."
            width={1200}
            height={900}
            label="Empresa · retrato"
          />
        }
      />

      <Pillars />

      {/* Big visual break */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Base da empresa
              </p>
              <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                Documentação como{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">
                  forma de pensar
                </span>
                .
              </h2>
            </div>
            <p className="max-w-sm text-[15.5px] leading-[1.7] text-[color:var(--ink-muted)]">
              A Aralabs constrói sua base documental antes de escalar execução. Visão, tese,
              problema e decisões são registradas pra sustentar o crescimento com clareza.
            </p>
          </div>

          <ImagePlaceholder
            description="Mesa vista de cima: caderno aberto com anotações manuscritas em português, caneta, livro, xícara de café. Estética editorial, tom quente, composição limpa. Sem laptop."
            width={2000}
            height={900}
            label="Base documental"
            className="min-h-[420px]"
          />
        </div>
      </section>

      <Values />

      {/* Princípios de decisão */}
      <section className="relative border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Princípios de decisão
              </p>
              <h2 className="mt-6 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
                Diretrizes que guiam{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">
                  cada escolha
                </span>
                .
              </h2>
              <p className="mt-7 max-w-md text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
                Essas diretrizes existem para manter consistência estratégica, reduzir decisões
                impulsivas e criar uma base clara para priorização e foco.
              </p>
            </div>

            <ul className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
              {principles.map((p) => (
                <li key={p.n} className="py-6">
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-[13px] italic text-[color:var(--gold-soft)]">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-semibold text-[color:var(--ink)]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <NextSteps />

      {/* Bottom CTA */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-balance text-[26px] font-semibold tracking-tight text-[color:var(--ink)] md:text-[32px]">
                Quer entender{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">por que</span>{' '}
                existimos?
              </h3>
              <p className="mt-2 text-[15.5px] text-[color:var(--ink-muted)]">
                Leia a tese que move cada produto da Aralabs.
              </p>
            </div>
            <Link
              href="/tese"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Ler nossa tese →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
