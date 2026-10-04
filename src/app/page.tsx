import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema } from '@/lib/seo/schemas';
import {
  PRODUCTS,
  PRODUCT_LINES,
  countWord,
  productBySlug,
  productsByLine,
  type Product,
} from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { ProductTile, KomyxMark } from '@/components/site/ProductMarks';
import { LogoMark } from '@/components/site/Logo';
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

const LG_SPAN: Record<number, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
};

const capitalize = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

/** "Seis produtos: três no ar, um em beta e dois em breve." Always matches products.ts. */
function portfolioLine() {
  const parts = (['No ar', 'Beta', 'Em breve'] as const)
    .map((status) => ({
      status,
      n: PRODUCTS.filter((p) => p.status === status).length,
    }))
    .filter((x) => x.n > 0)
    .map(({ status, n }) =>
      status === 'No ar'
        ? `${countWord(n)} no ar`
        : status === 'Beta'
          ? `${countWord(n)} em beta`
          : `${countWord(n)} em breve`,
    );
  const list =
    parts.length > 1 ? `${parts.slice(0, -1).join(', ')} e ${parts[parts.length - 1]}` : parts[0];
  return `${capitalize(countWord(PRODUCTS.length))} produtos: ${list}.`;
}

function StatusPill({
  product,
  className = '',
  small,
}: {
  product: Product;
  className?: string;
  small?: boolean;
}) {
  return (
    <span
      className={`shrink-0 items-center gap-1.5 rounded-full font-semibold uppercase tracking-[0.14em] ${
        small ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[10px]'
      } ${className || 'inline-flex'}`}
      style={{ background: product.colorSoft, color: product.color }}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${product.status === 'No ar' ? '' : 'opacity-50'}`}
        style={{ background: product.color }}
      />
      {product.status}
    </span>
  );
}

export default function Home() {
  const komyx = productBySlug('komyx');
  const forHome = productsByLine('familias');
  const ways = [
    {
      title: 'Produtos prontos',
      body: `O Komyx para buffets e ${countWord(forHome.length)} apps para a família e para o dia a dia. Preço de pequeno negócio (ou gratuito), sem contrato de fidelidade.`,
      href: '/produtos',
      cta: 'Ver todos os produtos',
    },
    {
      title: 'Sistemas sob medida',
      body: 'Quando o seu problema ainda não tem produto. Uma conversa, uma primeira versão em semanas e a gente cuida da operação depois. O sistema é seu.',
      href: '/sob-medida',
      cta: 'Como funciona o sob medida',
    },
  ];
  return (
    <>
      <JsonLd data={websiteSchema()} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-30%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.14),transparent_70%)]" />
          <div className="absolute right-[-12%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(111,75,255,0.07),transparent_70%)]" />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-12 px-6 pb-16 pt-12 lg:grid-cols-[1fr_minmax(0,500px)] lg:items-center lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="rise min-w-0">
            <Eyebrow tone="gold">AraLabs · Arapongas, PR</Eyebrow>
            <Title as="h1" size="lg">
              Tecnologia simples para <Accent>pequenos negócios</Accent>.
            </Title>
            <Lead>
              Software que o dono de um negócio pequeno consegue usar no primeiro dia, e apps para a
              família dele também. Produtos prontos para assinar e sistemas sob medida quando o seu
              problema ainda não tem produto.
            </Lead>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/produtos">
                Conhecer os produtos <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/sob-medida" variant="secondary">
                Pedir um sistema sob medida
              </Button>
            </div>
            <p className="mt-6 text-[14px] leading-[1.6] text-[color:var(--ink-dim)]">
              {portfolioLine()} Resposta em até 2 dias úteis.
            </p>
          </div>

          {/* Product index: every product, grouped by who it is for. */}
          <nav
            aria-label="Produtos da AraLabs"
            className="rise min-w-0 rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/80 p-2 shadow-[0_24px_60px_rgba(36,29,21,0.08)] backdrop-blur"
          >
            {PRODUCT_LINES.map((g, gi) => (
              <div
                key={g.line}
                className={gi > 0 ? 'mt-1 border-t border-[color:var(--line)] pt-1' : ''}
              >
                <p className="flex items-center justify-between px-4 pb-1.5 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
                  {g.label}
                  <span className="tabular-nums tracking-normal">{g.items.length}</span>
                </p>
                <ul>
                  {g.items.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={p.href}
                        className="group flex items-center gap-3.5 rounded-[18px] px-3 py-2.5 transition hover:bg-[color:var(--bg)] sm:px-4"
                      >
                        <ProductTile product={p} size={42} />
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2 text-[16.5px] font-semibold tracking-tight text-[color:var(--ink)]">
                            {p.name}
                            <StatusPill product={p} small className="inline-flex sm:hidden" />
                          </span>
                          <span className="block truncate text-[13px] text-[color:var(--ink-dim)]">
                            {p.audience}
                          </span>
                        </span>
                        <StatusPill product={p} className="hidden sm:inline-flex" />
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-[color:var(--ink-dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--gold-soft)]"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* KOMYX SPOTLIGHT */}
      <Section className="bg-[color:var(--bg-elev)]/50">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow tone="gold">
              Para o seu negócio · {komyx.audience.replace(/^Para /, '')}
            </Eyebrow>
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

      {/* FAMILY & PERSONAL LINE */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="gold">Para a família e para você</Eyebrow>
            <Title>Apps para o outro lado do dia.</Title>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
              Quem toca um negócio pequeno também tem casa, filhos e metas próprias. A rotina da
              família, jogos para as crianças, comunicação visual, o sono do bebê e os hábitos de
              cada um, com a mesma regra: simples no primeiro dia.
            </p>
          </div>
          <Link
            href="/produtos"
            className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-[color:var(--gold-soft)] transition hover:text-[color:var(--ink)]"
          >
            Ver todos os produtos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forHome.map((p) => (
            <li key={p.slug} className="min-w-0">
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6 transition hover:-translate-y-0.5 hover:border-[color:var(--gold)]/50 hover:shadow-[0_18px_40px_rgba(36,29,21,0.10)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <ProductTile product={p} size={48} />
                  <StatusPill product={p} />
                </div>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-dim)]">
                  {p.audience}
                </p>
                <h3 className="mt-1 text-[23px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.name}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-[color:var(--ink)]">{p.tagline}</p>
                <p className="mt-3 flex-1 text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {p.description}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[color:var(--line)] pt-4 text-[13.5px]">
                  <span className="min-w-0 font-semibold text-[color:var(--ink)]">{p.offer}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[color:var(--gold-soft)] transition group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            </li>
          ))}
          {/* Closing card that always completes the last row of the grid. */}
          <li
            className={`min-w-0 ${forHome.length % 2 === 0 ? 'sm:col-span-2' : ''} ${LG_SPAN[3 - (forHome.length % 3)]}`}
          >
            <Link
              href="/empresa"
              className="group flex h-full flex-col justify-between rounded-[24px] border border-dashed border-[color:var(--line-strong)] p-6 transition hover:border-[color:var(--gold)]/60 hover:bg-[color:var(--bg-elev)]"
            >
              <div>
                <LogoMark className="h-9 w-9 text-[color:var(--gold-soft)]" />
                <h3 className="mt-6 text-[21px] font-semibold tracking-tight text-[color:var(--ink)]">
                  Feito por uma empresa pequena, de perto.
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  Todos os produtos são feitos e atendidos pela mesma equipe, em Arapongas (PR).
                  Dúvida, sugestão ou problema: você fala direto com quem constrói.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-[color:var(--gold-soft)]">
                Conhecer a AraLabs{' '}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        </ul>
      </Section>

      {/* TWO WAYS */}
      <Section className="bg-[color:var(--bg-elev)]/50">
        <Eyebrow>Dois jeitos de trabalhar com a gente</Eyebrow>
        <Title>Pronto para assinar ou feito para você.</Title>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ways.map((w) => (
            <Link
              key={w.href}
              href={w.href}
              className="group flex flex-col justify-between rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg)] p-8 transition hover:border-[color:var(--gold)]/50 hover:bg-[color:var(--bg-elev)]"
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

      {/* WHY */}
      <Section>
        <Eyebrow>Por que a AraLabs</Eyebrow>
        <Title>Software que cabe no dia de quem trabalha.</Title>
        <CellGrid className="mt-12">
          {WHY.map((w) => (
            <Cell key={w.n} {...w} />
          ))}
        </CellGrid>
        <div className="mt-8">
          <Button href="/empresa" variant="secondary">
            Conhecer a empresa <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
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
