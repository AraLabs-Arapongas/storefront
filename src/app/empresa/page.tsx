import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { aboutPageSchema } from '@/lib/seo/schemas';
import { PRODUCTS } from '@/lib/products';
import { contactHref, CONTACT_EMAIL, JOBS_EMAIL } from '@/lib/seo/site';
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
import Link from 'next/link';

const pageDescription =
  'A AraLabs é uma empresa de software de Arapongas (PR) que faz tecnologia simples para pequenos negócios e para as famílias deles: produtos próprios e sistemas sob medida.';

export const metadata: Metadata = {
  title: 'Empresa',
  description: pageDescription,
  alternates: { canonical: '/empresa' },
  openGraph: {
    title: 'Sobre a AraLabs',
    description: pageDescription,
    url: '/empresa',
    type: 'website',
  },
};

const PRINCIPLES = [
  {
    n: '01',
    title: 'Problema real antes de funcionalidade',
    body: 'Entendemos a rotina de quem usa antes de decidir o que construir. Funcionalidade sem dor por trás não entra.',
  },
  {
    n: '02',
    title: 'Simples no uso, cuidadoso por dentro',
    body: 'A tela tem que ser óbvia no primeiro dia. A engenharia por trás pode ser profunda, o produto não.',
  },
  {
    n: '03',
    title: 'Preço de pequeno negócio',
    body: 'Software bom não precisa custar o que custa para empresa grande. Mensalidade pequena, sem fidelidade.',
  },
  {
    n: '04',
    title: 'Perto de quem usa',
    body: 'Atendimento direto com quem constrói. Pedido de manhã, ajuste no ar na mesma semana quando dá.',
  },
  {
    n: '05',
    title: 'Produtos que a gente também usa',
    body: 'Casa Leve roda na casa de quem fez. Komyx nasceu olhando a rotina de um buffet de verdade.',
  },
  {
    n: '06',
    title: 'Longo prazo como filtro',
    body: 'Preferimos um produto que dura anos a um lançamento que faz barulho um mês. Decisão que não resiste ao tempo não entra.',
  },
];

export default function EmpresaPage() {
  return (
    <>
      <JsonLd
        data={aboutPageSchema({
          path: '/empresa',
          name: 'Sobre a AraLabs',
          description: pageDescription,
        })}
      />

      <Section>
        <Eyebrow tone="gold">Empresa</Eyebrow>
        <Title as="h1" size="lg">
          Uma empresa de software de Arapongas que trabalha para <Accent>quem trabalha</Accent>.
        </Title>
        <Lead>
          A AraLabs faz tecnologia simples para pequenos negócios e para as famílias deles. Temos
          produtos próprios, como o Komyx para buffets e o Casa Leve para a casa, e construímos
          sistemas sob medida quando o problema de alguém ainda não tem produto.
        </Lead>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>O que fazemos</Eyebrow>
            <Title size="sm">Duas linhas, uma regra.</Title>
            <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Produtos prontos para assinar e sistemas sob medida. Nos dois casos a regra é a mesma:
              o dono tem que conseguir usar no primeiro dia, e o preço tem que caber no caixa de um
              negócio pequeno.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.href}
                  className="flex items-center gap-3 rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-4 py-3.5 transition hover:border-[color:var(--gold)]/50"
                >
                  <ProductTile product={p} size={40} />
                  <span className="min-w-0">
                    <span className="block text-[15.5px] font-semibold text-[color:var(--ink)]">
                      {p.name}
                    </span>
                    <span className="block truncate text-[13px] text-[color:var(--ink-dim)]">
                      {p.audience}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="sm:col-span-2">
              <Link
                href="/sob-medida"
                className="flex items-center justify-between rounded-2xl border border-dashed border-[color:var(--line-strong)] px-4 py-3.5 text-[15px] font-semibold text-[color:var(--gold-soft)] transition hover:border-[color:var(--gold)]/60"
              >
                Sistemas sob medida para o seu negócio <span>→</span>
              </Link>
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <Eyebrow>Como trabalhamos</Eyebrow>
        <Title>Seis princípios que decidem o que entra e o que fica de fora.</Title>
        <CellGrid className="mt-12" cols="sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <Cell key={p.n} {...p} />
          ))}
        </CellGrid>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Onde estamos</Eyebrow>
            <Title size="sm">Arapongas, Paraná.</Title>
            <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Rua Guaraúna, 288 · Jardim Primavera · Arapongas, PR. Atendemos clientes de qualquer
              cidade por chamada e WhatsApp; quem é da região é bem-vindo para um café.
            </p>
          </div>
          <div>
            <Eyebrow>Contato</Eyebrow>
            <ul className="mt-5 space-y-3 text-[16px]">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-[color:var(--ink)] hover:text-[color:var(--gold-soft)]"
                >
                  {CONTACT_EMAIL}
                </a>
                <span className="text-[color:var(--ink-dim)]"> · clientes e parcerias</span>
              </li>
              <li>
                <a
                  href={`mailto:${JOBS_EMAIL}`}
                  className="font-semibold text-[color:var(--ink)] hover:text-[color:var(--gold-soft)]"
                >
                  {JOBS_EMAIL}
                </a>
                <span className="text-[color:var(--ink-dim)]"> · trabalhe com a gente</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <CtaPanel
          eyebrow="Fale com a gente"
          title="Tem um negócio pequeno e um problema grande?"
          body="Conta pra gente como é o seu dia. Se um dos nossos produtos resolve, a gente indica. Se não, desenhamos junto."
          primary={{
            href: contactHref('Quero conversar com a AraLabs'),
            label: 'Falar com a gente',
          }}
          secondary={{ href: '/produtos', label: 'Ver os produtos' }}
        />
      </Section>
    </>
  );
}
