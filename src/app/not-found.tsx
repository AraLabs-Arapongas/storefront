import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';
import { CONTACT_EMAIL } from '@/lib/seo/site';

export const metadata: Metadata = {
  title: 'Página não encontrada',
};

const SITE_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Todos os produtos', href: '/produtos' },
  { label: 'Sob medida', href: '/sob-medida' },
  { label: 'Empresa', href: '/empresa' },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="nf-title">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-35%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.16),transparent_70%)]" />
        <div className="tri-grid absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-6 pb-24 pt-12 lg:px-10 lg:pb-32 lg:pt-20">
        <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
          <span className="tri text-[8px]" aria-hidden="true" />
          Erro 404 · Página não encontrada
        </p>
        <h1
          id="nf-title"
          className="display rise mt-6 max-w-[14ch] text-[clamp(2.8rem,7vw,6.2rem)] text-[color:var(--ink)]"
        >
          Essa página não está aqui.{' '}
          <span className="block text-[color:var(--gold-soft)]">O resto do site está.</span>
        </h1>
        <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[18.5px]">
          O endereço pode ter mudado ou ter sido digitado com algum erro. Escolha por onde seguir,
          ou escreva para a gente se estava procurando algo específico.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--bg)] transition hover:bg-[color:var(--gold-soft)]"
          >
            Voltar para o início <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/60 hover:text-[color:var(--gold-soft)]"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="mt-20 grid gap-12 border-t border-[color:var(--line-strong)] pt-10 md:grid-cols-[1.4fr_1fr] lg:mt-28">
          <nav aria-label="Produtos">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--ink-dim)]">
              Produtos
            </p>
            <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">
              {PRODUCTS.map((p) => (
                <li key={p.slug} className="border-b border-[color:var(--line)]">
                  <Link
                    href={p.href}
                    className="group flex items-baseline gap-3 py-3.5 transition hover:text-[color:var(--gold-soft)]"
                  >
                    <span
                      className="tri tri-r text-[7px]"
                      style={{ color: p.colorInk }}
                      aria-hidden="true"
                    />
                    <span className="text-[17px] font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--gold-soft)]">
                      {p.name}
                    </span>
                    <span className="text-[13.5px] text-[color:var(--ink-dim)]">{p.audience}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="AraLabs">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--ink-dim)]">
              AraLabs
            </p>
            <ul className="mt-5">
              {SITE_LINKS.map((l) => (
                <li key={l.href} className="border-b border-[color:var(--line)]">
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between py-3.5 text-[17px] font-semibold text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
                  >
                    {l.label}
                    <span
                      className="tri tri-r text-[7px] text-[color:var(--gold)] transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
