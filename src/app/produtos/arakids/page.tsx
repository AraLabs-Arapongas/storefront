import type { Metadata } from 'next';
import { ShieldCheck, EyeOff, Clock3, Sparkles } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';
import { productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { ProductTile } from '@/components/site/ProductMarks';
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

const arakids = productBySlug('arakids');
const pageTitle = 'Arakids — jogos educativos sem anúncio';
const pageDescription =
  'Arakids é o portal da AraLabs com jogos educativos para crianças de 2 a 10 anos: sem anúncios, sem cadastro e sem truques para prender a criança na tela. Por faixa etária, com área dos pais e regras de tempo de tela. Grátis, no navegador.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/arakids' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/arakids',
    type: 'website',
  },
};

const AGES = [
  {
    n: '2–3',
    title: 'Exploradores',
    body: 'Toque, cor, som e forma. Jogos curtos para dedos pequenos, sem texto e sem pressa.',
  },
  {
    n: '4–5',
    title: 'Curiosos',
    body: 'Letras, números, pares e sequências. A criança descobre sozinha, sem contagem regressiva.',
  },
  {
    n: '6–7',
    title: 'Inventores',
    body: 'Leitura inicial, lógica e memória. Desafios que terminam e deixam a criança sair satisfeita.',
  },
  {
    n: '8–10',
    title: 'Navegadores',
    body: 'Raciocínio, estratégia e criação. Mais profundidade, mesma regra: nada de vício por desenho.',
  },
];

const RULES = [
  {
    icon: EyeOff,
    title: 'Sem anúncio, sem cadastro',
    body: 'Nenhuma propaganda, nenhuma conta, nenhum dado da criança coletado. Abre e joga.',
  },
  {
    icon: Clock3,
    title: 'Tela com propósito e com limite',
    body: 'Jogos terminam. Não há recompensas infinitas, notificações nem "só mais uma" para prender a criança.',
  },
  {
    icon: ShieldCheck,
    title: 'Castelo dos Pais',
    body: 'Área dos adultos protegida por toque longo, com as regras do portal e o que a criança está aprendendo em cada jogo.',
  },
  {
    icon: Sparkles,
    title: 'Farol da Privacidade',
    body: 'Explicamos, em linguagem simples, o que o portal guarda (quase nada) e o que nunca vai guardar.',
  },
];

export default function ArakidsPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/arakids',
          name: 'Arakids',
          description: pageDescription,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web',
        })}
      />

      <section
        className="relative overflow-hidden border-b border-[color:var(--line)]"
        style={{ background: arakids.color, color: '#fff' }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.22),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="flex items-center gap-3">
            <ProductTile product={{ ...arakids, color: 'rgba(255,255,255,0.18)' }} size={48} />
            <div className="leading-none">
              <p className="text-[26px] font-extrabold tracking-tight">Arakids</p>
              <p className="mt-1 text-[12px] font-semibold text-white/80">{arakids.audience}</p>
            </div>
          </div>
          <h1 className="mt-8 max-w-3xl text-balance text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em] md:text-[52px]">
            Pra onde vamos hoje? Jogos que ensinam e{' '}
            <span className="text-[#ffe08a]">deixam a criança sair</span>.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-white/85 md:text-[19px]">
            Um portal no navegador, por faixa etária, sem anúncio, sem cadastro e sem truque para
            prender a criança na tela. Com área dos pais e regras claras de tempo de tela.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={arakids.externalUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold transition hover:bg-[#ffe08a]"
              style={{ color: arakids.color }}
            >
              Abrir o Arakids →
            </a>
            <span className="inline-flex items-center rounded-full border border-white/35 px-5 py-3.5 text-[14px] font-semibold">
              {arakids.offer}
            </span>
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>Por idade</Eyebrow>
        <Title>
          Quatro trilhas, do primeiro toque à <Accent>primeira estratégia</Accent>.
        </Title>
        <CellGrid className="mt-12">
          {AGES.map((a) => (
            <Cell key={a.n} n={`${a.n} anos`} title={a.title} body={a.body} />
          ))}
        </CellGrid>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <Eyebrow>Regras da casa</Eyebrow>
        <Title>O que o Arakids não faz é o que importa.</Title>
        <Lead>
          Jogos para criança costumam ser desenhados para segurar atenção e vender. O Arakids é
          desenhado para a criança aprender algo e ir brincar de outra coisa.
        </Lead>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {RULES.map((r) => (
            <article
              key={r.title}
              className="flex gap-4 rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg)] p-7"
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                style={{ background: arakids.colorSoft, color: arakids.color }}
              >
                <r.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {r.body}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button href={arakids.externalUrl!} variant="secondary">
            Abrir o Arakids no navegador
          </Button>
        </div>
      </Section>

      <Section>
        <CtaPanel
          eyebrow="Escolas e famílias"
          title="Quer o Arakids na sua escola ou com jogos do seu jeito?"
          body="O portal é gratuito para famílias. Para escolas, creches e projetos sociais montamos trilhas e jogos sob medida com a mesma regra: sem anúncio, sem cadastro, sem truque."
          primary={{ href: contactHref('Arakids para a minha escola'), label: 'Falar com a gente' }}
          secondary={{ href: '/sob-medida', label: 'Ver o sob medida' }}
        />
      </Section>
    </>
  );
}
