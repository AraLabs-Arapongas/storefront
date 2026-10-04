import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';
import { PRODUCTS, PRODUCT_LINES, countWord, joinNames } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { ProductTile } from '@/components/site/ProductMarks';
import {
  Accent,
  Cell,
  CellGrid,
  CtaPanel,
  Eyebrow,
  Lead,
  Section,
  Title,
} from '@/components/site/ui';

const pageDescription = `Produtos da AraLabs: ${joinNames(
  PRODUCTS.map((p) => ({ name: `${p.name} (${p.summary})` })),
)}.`;

export const metadata: Metadata = {
  title: 'Produtos',
  description: pageDescription,
  alternates: { canonical: '/produtos' },
  openGraph: {
    title: 'Produtos da AraLabs',
    description: pageDescription,
    url: '/produtos',
    type: 'website',
  },
};

const HOW = [
  {
    n: '01',
    title: 'Um problema que a gente conhece',
    body: 'Começamos por uma dor concreta de um negócio ou de uma casa, não por uma ideia de app.',
  },
  {
    n: '02',
    title: 'A versão mais simples que resolve',
    body: 'A primeira versão entrega o essencial e vai para a mão de quem usa em semanas.',
  },
  {
    n: '03',
    title: 'Preço que cabe',
    body: 'Mensalidade pequena ou gratuito quando faz sentido. Sem fidelidade, sem taxa por venda.',
  },
  {
    n: '04',
    title: 'Evolui com quem usa',
    body: 'O que o cliente pede de manhã pode estar no ar na mesma semana. Produto vivo, não lançamento.',
  },
];

export default function ProdutosPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: '/produtos',
          name: 'Produtos da AraLabs',
          description: pageDescription,
        })}
      />

      <Section>
        <Eyebrow tone="gold">Produtos</Eyebrow>
        <Title as="h1" size="lg">
          Prontos para usar, <Accent>feitos para durar</Accent>.
        </Title>
        <Lead>
          {countWord(PRODUCTS.length).replace(/^./, (c) => c.toUpperCase())} produtos, para o
          negócio e para a casa. Cada um nasce de um problema que a gente viu de perto e fica
          simples o bastante para usar no primeiro dia.
        </Lead>
      </Section>

      {PRODUCT_LINES.map((group) => (
        <Section key={group.line}>
          <Eyebrow>{group.label}</Eyebrow>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {group.items.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group flex flex-col justify-between rounded-[26px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7 transition hover:-translate-y-0.5 hover:border-[color:var(--gold)]/50 hover:shadow-[0_18px_40px_rgba(32,24,48,0.10)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <ProductTile product={p} size={56} />
                    <span
                      className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                      style={{ background: p.colorSoft, color: p.color }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                    {p.audience}
                  </p>
                  <h2 className="mt-1 text-[26px] font-semibold tracking-tight text-[color:var(--ink)]">
                    {p.name}
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {p.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-[14px]">
                  <span className="font-semibold text-[color:var(--ink)]">{p.offer}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[color:var(--gold-soft)]">
                    Conhecer{' '}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
            {group.line === 'negocios' ? (
              <Link
                href="/sob-medida"
                className="group flex flex-col justify-between rounded-[26px] border border-dashed border-[color:var(--line-strong)] p-7 transition hover:border-[color:var(--gold)]/60 hover:bg-[color:var(--bg-elev)]"
              >
                <div>
                  <span className="inline-grid h-14 w-14 place-items-center rounded-[16px] border border-dashed border-[color:var(--line-strong)] text-[22px] font-semibold text-[color:var(--gold-soft)]">
                    +
                  </span>
                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                    Para o seu negócio
                  </p>
                  <h2 className="mt-1 text-[26px] font-semibold tracking-tight text-[color:var(--ink)]">
                    Sob medida
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    Salão, clínica, oficina, escolinha: se o seu problema ainda não tem produto,
                    montamos o sistema com as mesmas peças do Komyx. Primeira versão em semanas.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-[14px]">
                  <span className="font-semibold text-[color:var(--ink)]">
                    Preço fechado · o sistema é seu
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[color:var(--gold-soft)]">
                    Como funciona{' '}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ) : null}
          </div>
        </Section>
      ))}

      <Section>
        <Eyebrow>Como um produto nasce aqui</Eyebrow>
        <Title>Quatro regras que valem para todos.</Title>
        <CellGrid className="mt-12">
          {HOW.map((h) => (
            <Cell key={h.n} {...h} />
          ))}
        </CellGrid>
      </Section>

      <Section>
        <CtaPanel
          eyebrow="Não achou o seu?"
          title="Se o seu problema ainda não tem produto, a gente faz sob medida."
          body="Agenda, orçamento online, cadastro de clientes, cobrança por Pix, painel do dono: montamos o sistema do seu negócio com as mesmas peças dos nossos produtos."
          primary={{ href: '/sob-medida', label: 'Ver o sob medida' }}
          secondary={{
            href: contactHref('Quero um sistema para o meu negócio'),
            label: 'Falar com a gente',
          }}
        />
      </Section>
    </>
  );
}
