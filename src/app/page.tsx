import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema } from '@/lib/seo/schemas';
import { PRODUCTS, productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { ProductTile, KomyxMark } from '@/components/site/ProductMarks';
import {
  Accent,
  Button,
  Cell,
  CellGrid,
  CtaPanel,
  Eyebrow,
  Lead,
  Section,
  Title,
} from '@/components/site/ui';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const WAYS = [
  {
    title: 'Produtos prontos',
    body: 'Assina e começa hoje. Komyx para buffets, e apps para a família: Casa Leve, Arakids e Lumo. Preço de pequeno negócio, sem contrato de fidelidade.',
    href: '/produtos',
    cta: 'Ver os produtos',
  },
  {
    title: 'Sistemas sob medida',
    body: 'Quando o seu problema ainda não tem produto. Uma conversa, uma primeira versão em semanas e a gente cuida da operação depois. O sistema é seu.',
    href: '/sob-medida',
    cta: 'Como funciona',
  },
];

const KOMYX_POINTS = [
  'Um evento por dia, agenda sem choque',
  'Orçamento online com pacotes e temas',
  'Reserva com Pix e identificador no extrato',
  'Contrato gerado e aceito pelo link',
  'Convite com RSVP e portaria no celular',
  'Cobrança de parcelas e extras pelo WhatsApp',
];

const WHY = [
  {
    n: '01',
    title: 'Simples de verdade',
    body: 'Telas que o dono usa no primeiro dia, sem treinamento. Se precisa de manual, a gente refaz.',
  },
  {
    n: '02',
    title: 'Preço de pequeno negócio',
    body: 'Mensalidade que cabe no caixa de um buffet, um salão ou uma clínica de bairro. Sem taxa por venda.',
  },
  {
    n: '03',
    title: 'Perto de quem usa',
    body: 'Atendimento direto com quem constrói, de Arapongas (PR). Ideia que chega de manhã pode estar no ar na mesma semana.',
  },
  {
    n: '04',
    title: 'Para o negócio e para a casa',
    body: 'Quem toca um negócio pequeno também tem família. Fazemos software para os dois lados do dia.',
  },
];

export default function Home() {
  const komyx = productBySlug('komyx');
  return (
    <>
      <JsonLd data={websiteSchema()} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-30%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.14),transparent_70%)]" />
          <div className="absolute right-[-12%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(111,75,255,0.08),transparent_70%)]" />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-12 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-20">
          <div className="rise">
            <Eyebrow tone="gold">AraLabs · Arapongas, PR</Eyebrow>
            <Title as="h1" size="lg">
              Tecnologia simples para <Accent>pequenos negócios</Accent>.
            </Title>
            <Lead>
              Software que o dono de um negócio pequeno consegue usar no primeiro dia. Produtos
              prontos para assinar e sistemas sob medida quando o seu problema ainda não tem
              produto.
            </Lead>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/produtos">
                Conhecer os produtos <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/sob-medida" variant="secondary">
                Pedir um sistema sob medida
              </Button>
            </div>
            <p className="mt-5 text-[14px] text-[color:var(--ink-dim)]">
              Quatro produtos no ar ou em beta. Resposta em até 2 dias úteis.
            </p>
          </div>

          {/* Product shelf */}
          <ul className="grid grid-cols-2 gap-4" aria-label="Produtos da AraLabs">
            {PRODUCTS.map((p, i) => (
              <li key={p.slug} className={i % 2 === 1 ? 'translate-y-6' : ''}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col justify-between rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--gold)]/50 hover:shadow-[0_18px_40px_rgba(32,24,48,0.10)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <ProductTile product={p} size={48} />
                    <span
                      className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                      style={{ background: p.colorSoft, color: p.color }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                      {p.audience}
                    </p>
                    <h2 className="mt-1 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                      {p.name}
                    </h2>
                    <p className="mt-1.5 text-[14px] leading-[1.5] text-[color:var(--ink-muted)]">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TWO WAYS */}
      <Section>
        <Eyebrow>Dois jeitos de trabalhar com a gente</Eyebrow>
        <Title>Pronto para assinar ou feito para você.</Title>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {WAYS.map((w) => (
            <Link
              key={w.href}
              href={w.href}
              className="group flex flex-col justify-between rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8 transition hover:border-[color:var(--gold)]/50 hover:bg-[color:var(--bg-elev-2)]"
            >
              <div>
                <h3 className="text-[26px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {w.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                  {w.body}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[color:var(--gold-soft)]">
                {w.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* KOMYX SPOTLIGHT */}
      <Section className="bg-[color:var(--bg-elev)]/50">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow tone="gold">Novo · {komyx.audience.toLowerCase()}</Eyebrow>
            <div className="mt-5 flex items-center gap-3 text-[color:var(--ink)]">
              <KomyxMark className="h-12 w-12" style={{ color: komyx.color }} />
              <span className="text-[34px] font-extrabold tracking-tight">Komyx</span>
            </div>
            <h2 className="mt-5 text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[38px]">
              A festa se vende sozinha. <Accent>Você só confirma.</Accent>
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
              {komyx.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={komyx.href}>Conhecer o Komyx</Button>
              <Button href={komyx.externalUrl!} variant="secondary">
                Criar meu buffet
              </Button>
            </div>
            <p className="mt-4 text-[14px] text-[color:var(--ink-dim)]">
              {komyx.offer}. Tudo incluído, sem taxa por festa.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {KOMYX_POINTS.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-4 py-3.5 text-[15px] text-[color:var(--ink)]"
              >
                <span
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                  style={{ background: komyx.colorSoft, color: komyx.color }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* WHY */}
      <Section>
        <Eyebrow>Por que a AraLabs</Eyebrow>
        <Title>Software que cabe no dia de quem trabalha.</Title>
        <CellGrid className="mt-12">
          {WHY.map((w) => (
            <Cell key={w.n} {...w} />
          ))}
        </CellGrid>
      </Section>

      {/* CTA */}
      <Section>
        <CtaPanel
          eyebrow="Fale com a gente"
          title={<>Conta pra gente o que trava o seu dia.</>}
          body="Um buffet perdendo festa no WhatsApp, uma agenda que vive em caderno, um controle que só uma pessoa entende. Mande uma mensagem e a gente responde em até 2 dias úteis."
          primary={{
            href: contactHref('Quero conversar com a AraLabs'),
            label: 'Falar com a gente',
          }}
          secondary={{ href: '/sob-medida', label: 'Ver como funciona o sob medida' }}
        />
      </Section>
    </>
  );
}
