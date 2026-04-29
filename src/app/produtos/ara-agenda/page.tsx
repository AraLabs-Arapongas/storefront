import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';

const pageTitle = 'ara-agenda — Agenda online para pequenos negócios';
const pageDescription =
  'ara-agenda é o produto da AraLabs para pequenos negócios de serviços: agendamento online, página pública do negócio e ferramentas de presença digital. Em desenvolvimento.';

export const metadata: Metadata = {
  title: 'ara-agenda',
  description: pageDescription,
  alternates: { canonical: '/produtos/ara-agenda' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/ara-agenda',
    type: 'website',
  },
};

const audience = [
  'salões de beleza',
  'barbearias',
  'esmalterias',
  'clínicas',
  'estúdios de estética',
  'oficinas',
  'consultórios',
  'profissionais autônomos',
];

const problems = [
  'horários esquecidos',
  'dificuldade para organizar a agenda',
  'perda de clientes',
  'pouca presença digital',
  'dependência total do atendimento manual',
  'baixa previsibilidade para o dono',
];

export default function AraAgendaPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/ara-agenda',
          name: 'ara-agenda',
          description: pageDescription,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
        })}
      />

      <PageHero
        eyebrow="Produto · Em desenvolvimento"
        title={
          <>
            <span className="font-serif italic text-[color:var(--gold-soft)]">ara-agenda</span>
            {' — '}
            agenda online e presença digital para pequenos negócios de serviços.
          </>
        }
        description="O ara-agenda é um produto da AraLabs pensado para negócios que vendem tempo por horário."
      />

      {/* Status */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10 lg:py-14">
          <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              Status: Em desenvolvimento
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              O ara-agenda está em construção ativa. As funcionalidades aqui descritas refletem a
              visão do produto em curso.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Para quem é
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Pensado para negócios que{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">vendem tempo</span>{' '}
            por horário.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((item) => (
              <li
                key={item}
                className="rounded-[18px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-5 py-4 text-[15px] text-[color:var(--ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problema */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Problema
              </p>
              <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                WhatsApp, agenda manual e{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">improviso</span>.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
                Muitos pequenos negócios ainda dependem de mensagens soltas e confirmação informal
                para gerenciar a operação. Isso gera:
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {problems.map((item) => (
                <li
                  key={item}
                  className="rounded-[18px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-5 py-4 text-[15px] text-[color:var(--ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Solução
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Agendamento online, página pública e{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">menos atrito</span>{' '}
            para o cliente marcar.
          </h2>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
            O ara-agenda combina agendamento online, página pública do negócio e ferramentas que
            ajudam o cliente a marcar horário sem depender de mensagens.
          </p>
        </div>
      </section>

      {/* Visão */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Visão
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Não é apenas uma agenda. É uma{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">camada</span> de
            presença digital e operação para negócios locais.
          </h2>
        </div>
      </section>

      {/* Voltar para portfólio */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-[14px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
          >
            ← Ver todos os produtos
          </Link>
        </div>
      </section>
    </>
  );
}
