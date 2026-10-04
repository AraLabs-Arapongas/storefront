import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { aboutPageSchema } from '@/lib/seo/schemas';
import { PRODUCTS, countWord, productsByLine } from '@/lib/products';
import { contactHref, CONTACT_EMAIL, JOBS_EMAIL, ORG_ADDRESS } from '@/lib/seo/site';
import { InView } from '@/components/home/InView';
import { Kicker, Pill, capitalize, i, tallySentence } from '@/components/pages/Editorial';

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

const RULE = [
  {
    word: 'Abra.',
    body: 'Sem onboarding de 47 minutos e sem “fale com vendas” para descobrir o preço. O preço aparece na página.',
  },
  {
    word: 'Entenda.',
    body: 'Tela que o dono usa no primeiro dia, sem treinamento e sem glossário. Cada coisa com o nome que ela já tem no seu negócio.',
  },
  {
    word: 'Use.',
    body: 'Só o que resolve o problema. Sem 83 funcionalidades que você nunca vai usar.',
  },
];

const PRINCIPLES = [
  {
    title: 'Problema real antes de funcionalidade.',
    body: 'Entendemos a rotina de quem usa antes de decidir o que construir. Funcionalidade sem dor por trás não entra.',
  },
  {
    title: 'Simples no uso, cuidadoso por dentro.',
    body: 'A tela tem que ser óbvia no primeiro dia. A engenharia por trás pode ser profunda, o produto não.',
  },
  {
    title: 'Preço de pequeno negócio.',
    body: 'Software bom não precisa custar o que custa para empresa grande. Mensalidade pequena, sem fidelidade.',
  },
  {
    title: 'Perto de quem usa.',
    body: 'Atendimento direto com quem constrói. Pedido de manhã, ajuste no ar na mesma semana quando dá.',
  },
  {
    title: 'Produtos que a gente também usa.',
    body: 'Casa Leve roda na casa de quem fez. Komyx nasceu olhando a rotina de um buffet de verdade.',
  },
  {
    title: 'Longo prazo como filtro.',
    body: 'Preferimos um produto que dura anos a um lançamento que faz barulho um mês. Decisão que não resiste ao tempo não entra.',
  },
];

export default function EmpresaPage() {
  const business = productsByLine('negocios');
  const family = productsByLine('familias');

  const masthead = [
    { k: 'Onde', v: `${ORG_ADDRESS.addressLocality}, Paraná`, sub: '23°25′ S · 51°25′ O' },
    { k: 'O que faz', v: 'Produtos próprios e sistemas sob medida' },
    {
      k: 'Produtos',
      v: `${capitalize(countWord(PRODUCTS.length))}`,
      sub: `${capitalize(tallySentence())}`,
    },
    { k: 'Atendimento', v: 'Direto, com quem constrói', sub: 'Sem robô e sem fila' },
    { k: 'Resposta', v: 'Em até 2 dias úteis' },
  ];

  return (
    <>
      <JsonLd
        data={aboutPageSchema({
          path: '/empresa',
          name: 'Sobre a AraLabs',
          description: pageDescription,
        })}
      />

      {/* 1 · OPENING — giant line + the masthead */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[-35%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.16),transparent_70%)]" />
          <div className="tri-grid pg-grid-right absolute inset-0" />
        </div>
        <div className="pg-hero relative mx-auto max-w-[1240px] px-6 pb-20 pt-10 lg:px-10 lg:pb-24 lg:pt-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-14">
            <div>
              <Kicker>Empresa · Arapongas, Paraná</Kicker>
              <h1 className="pg-title-empresa display mt-6 text-[color:var(--ink)]">
                <span className="block">Trabalhamos</span>
                <span className="block">para quem</span>
                <span className="block text-[color:var(--gold-soft)]">trabalha.</span>
              </h1>
              <p className="mt-8 max-w-[560px] text-[17px] leading-[1.55] text-[color:var(--ink-muted)] md:text-[18.5px]">
                A AraLabs faz tecnologia simples para pequenos negócios e para as famílias deles.
                Uma empresa pequena do interior do Paraná, que atende direto e escreve software para
                quem não tem tempo de aprender software.
              </p>
            </div>
            <InView as="figure" className="lg:pb-2" threshold={0.2}>
              <figcaption className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink-dim)]">
                <span className="tri text-[7px] text-[color:var(--gold)]" aria-hidden="true" />
                Expediente
              </figcaption>
              <dl className="mt-4 border-t-2 border-[color:var(--ink)]">
                {masthead.map((m, k) => (
                  <div
                    key={m.k}
                    className="iv iv-up grid grid-cols-[96px_1fr] gap-3 border-b border-[color:var(--line-strong)] py-3"
                    style={i(k)}
                  >
                    <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-dim)]">
                      {m.k}
                    </dt>
                    <dd className="text-[14.5px] font-semibold leading-snug text-[color:var(--ink)]">
                      {m.v}
                      {m.sub ? (
                        <span className="mt-0.5 block text-[12.5px] font-normal text-[color:var(--ink-dim)]">
                          {m.sub}
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </InView>
          </div>
        </div>
      </section>

      {/* 2 · TWO LINES OF WORK — black */}
      <section
        aria-labelledby="duas-linhas"
        className="cut-top overflow-x-clip bg-[color:var(--dark)] text-[color:var(--bg)]"
      >
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <Kicker onDark>O que fazemos</Kicker>
          <h2 id="duas-linhas" className="display mt-6 text-[clamp(2.8rem,7vw,6.6rem)]">
            Duas linhas de trabalho.{' '}
            <span className="block text-[color:var(--gold)]">Uma regra só.</span>
          </h2>
          <div className="mt-16 grid border-t border-white/15 lg:mt-24 lg:grid-cols-2">
            <article className="border-b border-white/15 py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-14">
              <p className="display text-[clamp(4.4rem,9vw,8rem)] leading-[0.8] text-[color:var(--gold)]">
                01
              </p>
              <h3 className="mt-8 text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                Produtos próprios, para assinar e usar hoje.
              </h3>
              <p className="mt-5 max-w-md text-[16.5px] leading-[1.7] text-white/70">
                Software pronto, com o preço na página. Para o seu negócio e para a sua casa, todos
                com a mesma cara de simples.
              </p>
              <ul className="mt-8 space-y-1">
                {[...business, ...family].map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={p.href}
                      className="group flex items-baseline gap-3 py-1 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold tracking-[-0.025em] text-white transition"
                    >
                      <span
                        className="tri tri-r text-[9px] transition group-hover:translate-x-1"
                        style={{ color: p.color }}
                        aria-hidden="true"
                      />
                      <span className="transition group-hover:text-[color:var(--gold)]">
                        {p.name}
                      </span>
                      <span className="text-[13px] font-medium tracking-normal text-white/45">
                        {p.audience.replace(/^Para /, 'para ')}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
            <article className="py-12 lg:py-16 lg:pl-14">
              <p className="display text-[clamp(4.4rem,9vw,8rem)] leading-[0.8] text-[color:var(--gold)]">
                02
              </p>
              <h3 className="mt-8 text-[clamp(1.7rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                Sob medida, quando o problema ainda não tem produto.
              </h3>
              <p className="mt-5 max-w-md text-[16.5px] leading-[1.7] text-white/70">
                Salão, clínica, oficina, escolinha. A gente não começa do zero: já temos uma base
                pronta para agenda, pagamentos, orçamentos e operação, e ela vira o sistema do seu
                negócio.
              </p>
              <p className="mt-8 max-w-md border-l-2 border-[color:var(--gold)] pl-5 text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-[1.3] tracking-tight">
                Preço fechado. A primeira versão no ar rápido. E o sistema é seu.
              </p>
              <div className="mt-10">
                <Pill href="/sob-medida" look="gold" arrow>
                  Como funciona o sob medida
                </Pill>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3 · THE RULE — gold, three giant words */}
      <section
        aria-labelledby="a-regra"
        className="cut-top-rev relative overflow-hidden bg-[color:var(--gold)] text-[color:var(--dark)]"
      >
        <span aria-hidden="true" className="pg-corner-tri" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.28em]">
            <span className="tri text-[8px]" aria-hidden="true" />A regra que vale para tudo
          </p>
          <h2 id="a-regra" className="sr-only">
            Abra. Entenda. Use.
          </h2>
          <InView as="ol" className="mt-12 border-b-2 border-[color:var(--dark)]" threshold={0.3}>
            {RULE.map((r, k) => (
              <li
                key={r.word}
                className="grid gap-4 border-t-2 border-[color:var(--dark)] pb-6 pt-5 md:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] md:items-end md:gap-10 lg:pb-8"
              >
                <span
                  aria-hidden="true"
                  className="iv iv-word display block text-[clamp(4.2rem,13vw,11rem)] leading-[0.86]"
                  style={i(k * 2)}
                >
                  {r.word}
                </span>
                <p
                  className="iv iv-up max-w-[34ch] text-[16.5px] leading-[1.6] text-[color:var(--dark)]/80 md:pb-3"
                  style={i(k * 2 + 1)}
                >
                  {r.body}
                </p>
              </li>
            ))}
          </InView>
          <p className="display mt-14 max-w-[18ch] text-[clamp(2rem,4.4vw,3.8rem)] lg:mt-20">
            Se precisa de manual, a gente refaz.
          </p>
        </div>
      </section>

      {/* 4 · PRINCIPLES — cream, numbered editorial list */}
      <section aria-labelledby="principios">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <Kicker>Como trabalhamos</Kicker>
              <h2
                id="principios"
                className="display mt-6 max-w-[17ch] text-[clamp(2.4rem,5vw,4.6rem)] text-[color:var(--ink)]"
              >
                {capitalize(countWord(PRINCIPLES.length))} princípios.{' '}
                <span className="text-[color:var(--gold-soft)]">
                  Decidem o que entra e o que fica de fora.
                </span>
              </h2>
            </div>
          </div>
          <InView
            as="ol"
            className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3"
            threshold={0.15}
          >
            {PRINCIPLES.map((p, k) => (
              <li
                key={p.title}
                className="iv iv-up border-t border-[color:var(--line-strong)] pb-12 pt-6"
                style={i(k)}
              >
                <span className="display flex items-start gap-2 text-[clamp(3.4rem,5vw,4.6rem)] leading-[0.85] text-[color:var(--gold-soft)]">
                  {String(k + 1).padStart(2, '0')}
                  <span className="tri mt-[0.12em] text-[0.2em]" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[21px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[36ch] text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 5 · ARAPONGAS + CONTACT — black */}
      <section
        aria-labelledby="onde"
        className="cut-top relative overflow-hidden bg-[color:var(--dark)] text-[color:var(--bg)]"
      >
        <div className="pg-grid-dark pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.2),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker onDark>Onde estamos</Kicker>
          <h2 id="onde" className="display mt-6 text-[clamp(3.4rem,11vw,10.4rem)] leading-[0.84]">
            Arapongas, <span className="block text-[color:var(--gold)]">Paraná.</span>
          </h2>
          <div className="mt-14 grid gap-12 border-t border-white/12 pt-12 md:grid-cols-3 md:gap-10 lg:mt-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Endereço
              </p>
              <address className="mt-3 text-[16.5px] not-italic leading-[1.7] text-white/85">
                {ORG_ADDRESS.streetAddress}
                <br />
                {ORG_ADDRESS.addressLocality}, {ORG_ADDRESS.addressRegion} ·{' '}
                {ORG_ADDRESS.postalCode}
              </address>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                De qualquer cidade
              </p>
              <p className="mt-3 text-[16.5px] leading-[1.7] text-white/85">
                Atendemos clientes de qualquer cidade por chamada e WhatsApp. Quem é da região é
                bem-vindo para um café.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Contato
              </p>
              <ul className="mt-3 space-y-2 text-[16.5px]">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-white transition hover:text-[color:var(--gold)]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <span className="block text-[13.5px] text-white/50">clientes e parcerias</span>
                </li>
                <li>
                  <a
                    href={`mailto:${JOBS_EMAIL}`}
                    className="font-semibold text-white transition hover:text-[color:var(--gold)]"
                  >
                    {JOBS_EMAIL}
                  </a>
                  <span className="block text-[13.5px] text-white/50">trabalhe com a gente</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 border-t border-white/12 pt-16 lg:mt-32 lg:pt-20">
            <p className="display max-w-[16ch] text-[clamp(2.4rem,5.6vw,5rem)]">
              Tem um negócio pequeno e um problema grande?
            </p>
            <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-lg text-[17px] leading-[1.7] text-white/70">
                Conta pra gente como é o seu dia. Se um dos nossos produtos resolve, a gente indica.
                Se não, desenhamos junto.
              </p>
              <div className="flex flex-wrap gap-3">
                <Pill href={contactHref('Quero conversar com a AraLabs')} look="gold" arrow>
                  Falar com a gente
                </Pill>
                <Pill href="/produtos" look="ghost">
                  Ver os produtos
                </Pill>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
