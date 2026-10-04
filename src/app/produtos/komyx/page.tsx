import type { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';
import { productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { KomyxMark } from '@/components/site/ProductMarks';
import { InView } from '@/components/home/InView';
import { HeroBuilder } from '@/components/products/komyx/HeroBuilder';
import {
  AgendaMock,
  ClientAppMock,
  ContractPixMock,
  PortariaMock,
  PublicPageMock,
  TabletMock,
} from '@/components/products/komyx/Mocks';

const komyx = productBySlug('komyx');
const pageTitle = 'Komyx — Gestão para buffets';
const pageDescription =
  'Komyx é o sistema da AraLabs para buffets infantis e de eventos: agenda com um evento por dia, orçamento online, reserva com Pix e identificador, contrato automático, convite com RSVP, portaria no celular e cobrança pelo WhatsApp. 1 mês grátis; depois de R$ 199 por R$ 149 no mensal, até R$ 99/mês no anual.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/komyx' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/komyx',
    type: 'website',
  },
};

/** Light pink used for type on the pink and black surfaces. */
const BLUSH = '#ffd3e1';

const NOT = ['Sem planilha.', 'Sem caderno.', 'Sem perder festa no WhatsApp.'];

const MORE = [
  {
    title: 'Sua página, com a sua cara',
    body: 'Cores, fonte, logo e capa do buffet. Pacotes com preço ou “sob consulta” e temas de festa com fotos.',
  },
  {
    title: 'O sino avisa o que importa',
    body: 'Pedido de orçamento, reserva online e contrato aceito. O resto fica na ficha da festa, sem barulho.',
  },
  {
    title: 'Aniversariantes do ano',
    body: 'Quem fez festa com você volta a aparecer perto do próximo aniversário, com a mensagem pronta para mandar.',
  },
  {
    title: 'A dona e a equipe',
    body: 'Cada um com o seu acesso. A dona confirma de qualquer lugar pelo app; a equipe cuida do dia a dia.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Cadastre pacotes e temas',
    body: 'Preço-base, adultos e crianças incluídos, cardápio, adicionais e fotos das decorações.',
  },
  {
    n: '02',
    title: 'Compartilhe sua página',
    body: 'Link para a bio do Instagram. O cliente monta o orçamento e vê a data livre.',
  },
  {
    n: '03',
    title: 'Confirme e cobre',
    body: 'Sinal por Pix com identificador, contrato gerado sozinho, parcelas e extras com um toque.',
  },
];

const PERIODS = [
  { months: 1, label: 'Mensal', perMonth: 149 },
  { months: 3, label: '3 meses', perMonth: 134 },
  { months: 6, label: '6 meses', perMonth: 119 },
  { months: 12, label: 'Anual', perMonth: 99 },
];
const BEST = 12;

const INCLUDED = [
  'Agenda, orçamentos e eventos',
  'Clientes e aniversariantes',
  'Contratos e Pix com identificador',
  'Página pública com orçamento online',
  'Site com suas cores, fonte, logo e capa',
  'Temas de festa com fotos',
  'Portaria no celular',
  'Proprietária + equipe',
  'App para o cliente acompanhar a festa',
];

const i = (n: number) => ({ '--i': n }) as CSSProperties;

type Tone = 'cream' | 'dark' | 'pink';

const TONE: Record<Tone, { num: string; kicker: string; body: string; rule: string }> = {
  cream: {
    num: komyx.colorInk,
    kicker: 'text-[color:var(--ink-dim)]',
    body: 'text-[color:var(--ink-muted)]',
    rule: 'border-[color:var(--line-strong)]',
  },
  dark: {
    num: komyx.color,
    kicker: 'text-white/55',
    body: 'text-white/70',
    rule: 'border-white/15',
  },
  pink: { num: BLUSH, kicker: 'text-white/70', body: 'text-white/85', rule: 'border-white/25' },
};

function Caption({ tone = 'cream' }: { tone?: Tone }) {
  return (
    <figcaption
      className={`mt-8 text-center text-[12px] ${tone === 'cream' ? 'text-[color:var(--ink-dim)]' : 'text-white/60'}`}
    >
      Interface ilustrativa · nomes e valores de exemplo
    </figcaption>
  );
}

/** One step of the party: giant number, statement, details on editorial rules, and the UI. */
function Chapter({
  n,
  kicker,
  title,
  children,
  points,
  mock,
  flip,
  tone = 'cream',
}: {
  n: string;
  kicker: string;
  title: ReactNode;
  children: ReactNode;
  points: string[];
  mock: ReactNode;
  flip?: boolean;
  tone?: Tone;
}) {
  const t = TONE[tone];
  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className={flip ? 'lg:order-2' : ''}>
        <p className="flex items-end gap-4">
          <span
            className="display text-[clamp(4.6rem,9vw,8.4rem)] leading-[0.78]"
            style={{ color: t.num }}
          >
            {n}
          </span>
          <span
            className={`mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${t.kicker}`}
          >
            <span className="tri text-[7px]" style={{ color: t.num }} aria-hidden="true" />
            {kicker}
          </span>
        </p>
        <h2 className="display mt-8 max-w-[14ch] text-[clamp(2.4rem,4.6vw,4.3rem)] leading-[0.96]">
          {title}
        </h2>
        <p className={`mt-6 max-w-lg text-[17px] leading-[1.7] ${t.body}`}>{children}</p>
        <ul className={`mt-8 max-w-lg border-t ${t.rule}`}>
          {points.map((x) => (
            <li
              key={x}
              className={`flex items-center gap-4 border-b py-3 text-[15.5px] font-semibold ${t.rule}`}
            >
              <span className="tri tri-r text-[7px]" style={{ color: t.num }} aria-hidden="true" />
              {x}
            </li>
          ))}
        </ul>
      </div>
      <figure className={flip ? 'lg:order-1' : ''}>
        <InView threshold={0.35}>{mock}</InView>
        <Caption tone={tone} />
      </figure>
    </div>
  );
}

function Button({
  href,
  children,
  variant = 'solid',
  external,
  style,
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost-light' | 'ghost-dark' | 'dark';
  external?: boolean;
  style?: CSSProperties;
}) {
  const cls = {
    solid: 'bg-white hover:bg-[#ffd3e1]',
    dark: 'bg-[color:var(--dark)] text-white hover:bg-black',
    'ghost-light': 'border border-white/45 text-white hover:bg-white/10',
    'ghost-dark':
      'border border-[color:var(--line-strong)] text-[color:var(--ink)] hover:border-[color:var(--ink)]',
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition ${cls}`}
      style={variant === 'solid' ? { color: komyx.colorInk, ...style } : style}
    >
      {children}
    </a>
  );
}

export default function KomyxPage() {
  const annual = PERIODS.find((p) => p.months === BEST)!;
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/komyx',
          name: 'Komyx',
          description: pageDescription,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
        })}
      />

      {/* 1 · HERO — pink, the client building the party on the buffet's page */}
      <section
        className="pk-hero relative flex items-center overflow-hidden text-white"
        style={{ background: komyx.colorInk }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-30%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_70%)]" />
          <div className="pk-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 px-6 pb-[calc(64px+var(--hero-cut))] pt-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-[calc(40px+var(--hero-cut))] lg:pt-8">
          <div>
            <div className="pk-load-up flex flex-wrap items-center gap-3">
              <KomyxMark className="h-10 w-10 text-white" />
              <p className="text-[26px] font-extrabold tracking-tight">Komyx</p>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em]">
                {komyx.status} · {komyx.audience.replace(/^Para /, 'para ')}
              </span>
            </div>
            <h1 className="pk-hero-title display mt-7 text-balance lg:mt-8">
              <span className="pk-load-up block" style={{ '--d': 120 } as CSSProperties}>
                A festa se vende sozinha.
              </span>
              <span
                className="pk-load-up block"
                style={{ color: BLUSH, '--d': 320 } as CSSProperties}
              >
                Você só confirma.
              </span>
            </h1>
            <div className="pk-load-up" style={{ '--d': 520 } as CSSProperties}>
              <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.6] text-white/90 md:text-[18.5px]">
                O sistema do buffet infantil e de eventos. O cliente monta a festa pela sua página,
                com pacote e cardápio; você recebe pronto, confirma, e o resto anda sozinho:
                contrato, Pix, convite e portaria.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={komyx.externalUrl!} external>
                  Testar 1 mês grátis
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
                <Button href="#preco" variant="ghost-light">
                  Ver preços
                </Button>
              </div>
              <p className="mt-4 text-[14px] text-white/80">
                {komyx.offer}. Tudo incluído, sem taxa por festa.
              </p>
            </div>
          </div>
          <figure>
            <HeroBuilder />
            <figcaption className="mt-6 text-center text-[12px] text-white/65 lg:text-right">
              Interface ilustrativa · nomes e valores de exemplo
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2 · MANIFESTO — black, cut on the diagonal */}
      <section className="cut-top bg-[color:var(--dark)] text-[color:var(--bg)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <InView as="ul" className="border-t border-white/12" threshold={0.4}>
            {NOT.map((line, k) => (
              <li
                key={line}
                className="border-b border-white/12 py-5 text-[clamp(1.25rem,3.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-white/55 lg:py-6"
              >
                <span className="strike" style={i(k)}>
                  {line}
                </span>
              </li>
            ))}
          </InView>
          <InView
            as="h2"
            className="display mt-14 max-w-[16ch] text-[clamp(2.8rem,7vw,6.6rem)] lg:mt-20"
          >
            <span className="iv iv-word inline-block" style={i(0)}>
              Tudo que hoje vive no WhatsApp,
            </span>{' '}
            <span className="iv iv-word inline-block" style={{ color: komyx.color, ...i(3) }}>
              registrado e automático.
            </span>
          </InView>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/70">
            Do primeiro “quanto fica?” ao último convidado na porta, a festa inteira fica num lugar
            só. Cinco momentos, na ordem em que acontecem.
          </p>
        </div>
      </section>

      {/* 3 · 01 + 02 — cream: the page sells, the agenda confirms */}
      <section className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]">
        <div className="mx-auto max-w-[1240px] space-y-28 px-6 py-24 lg:space-y-40 lg:px-10 lg:py-36">
          <Chapter
            n="01"
            kicker="O pedido"
            title="O cliente monta a festa sozinho."
            points={[
              'Datas livres à vista',
              'Pacote, tema e quantas pessoas',
              'Cardápio com grupos de escolha',
              'Valor na hora, sem esperar resposta',
            ]}
            mock={<PublicPageMock />}
          >
            Link na bio do Instagram. Na página do seu buffet ele escolhe pacote, tema e cardápio do
            jeito que você definiu: quatro salgados entre sete, três docinhos entre cinco. Você
            recebe o pedido pronto para virar orçamento.
          </Chapter>
          <Chapter
            n="02"
            kicker="A agenda"
            title="Um evento por dia. Você só confirma."
            points={[
              'Lista, semana ou mês numa tela',
              'Confirmadas em verde, aguardando em amarelo',
              'Prazo do sinal venceu, a data volta a ficar livre',
            ]}
            mock={<AgendaMock />}
            flip
          >
            A data reservada sai da agenda até o prazo do sinal. Ninguém marca duas festas no mesmo
            dia por engano: a equipe vê “dia ocupado” e só a dona abre exceção.
          </Chapter>
        </div>
      </section>

      {/* 4 · 03 — pink: contract and money */}
      <section
        className="cut-top overflow-x-clip text-white"
        style={{ background: komyx.colorInk }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Chapter
            n="03"
            kicker="Contrato e Pix"
            tone="pink"
            title="Aceito pelo link. Pago no Pix."
            points={[
              'Contrato numerado e registrado',
              'QR e copia-e-cola com identificador',
              'Parcelas e extras com status',
              '“Cobrar” abre o WhatsApp com o Pix exato',
            ]}
            mock={<ContractPixMock />}
          >
            No aceite do orçamento, o seu modelo de contrato é preenchido sozinho. A reserva sai com
            o Pix do sinal e um identificador que aparece no seu extrato, então você sabe de qual
            festa é cada pagamento.
          </Chapter>
        </div>
      </section>

      {/* 5 · 04 — cream: the family's app */}
      <section className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Chapter
            n="04"
            kicker="App do cliente"
            title="A família acompanha a festa pelo celular."
            points={[
              'Entra com o número do celular',
              'Paga sinal e parcelas no Pix',
              'Monta a lista e personaliza o convite',
              'Convidado confirma pelo link, sem baixar nada',
            ]}
            mock={<ClientAppMock />}
            flip
          >
            Tudo o que a família perguntaria no WhatsApp está no app: quanto falta pagar, quem já
            confirmou, o convite, o cardápio escolhido e como chegar ao buffet.
          </Chapter>
        </div>
      </section>

      {/* 6 · 05 — black: the night of the party */}
      <section className="cut-top overflow-x-clip bg-[color:var(--dark)] text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Chapter
            n="05"
            kicker="Portaria"
            tone="dark"
            title="No dia, a portaria cabe no celular."
            points={[
              'Check-in por nome ou por quantidade',
              'Convidado de última hora',
              'Pedidos na hora somam na conta',
              '“Fechar conta” com o Pix dos extras',
            ]}
            mock={<PortariaMock />}
          >
            Quem está na porta marca quem chegou e lança o que foi pedido durante a festa. No fim, a
            conta dos extras fecha ali mesmo. Prefere um tablet fixo na entrada? Tem o{' '}
            <a href="#balcao" className="font-semibold text-white underline underline-offset-4">
              Komyx Balcão
            </a>
            .
          </Chapter>
        </div>
      </section>

      {/* 7 · The rest of the day + getting started — cream */}
      <section className="cut-top-rev overflow-x-clip bg-[color:var(--bg)] text-[color:var(--ink)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
            <span className="tri text-[8px]" aria-hidden="true" />E no resto do mês
          </p>
          <InView
            as="ul"
            className="mt-10 grid border-t border-[color:var(--line-strong)] md:grid-cols-2"
          >
            {MORE.map((m, k) => (
              <li
                key={m.title}
                className={`iv iv-up border-b border-[color:var(--line-strong)] py-8 md:py-10 ${
                  k % 2 === 0 ? 'md:pr-12' : 'md:border-l md:pl-12'
                }`}
                style={i(k)}
              >
                <h3 className="text-[clamp(1.4rem,2.2vw,1.85rem)] font-bold leading-[1.15] tracking-[-0.02em]">
                  {m.title}
                </h3>
                <p className="mt-3 max-w-md text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                  {m.body}
                </p>
              </li>
            ))}
          </InView>

          <div className="mt-28 lg:mt-40">
            <h2 className="display max-w-[15ch] text-[clamp(2.6rem,6vw,5.6rem)]">
              Três passos para <span style={{ color: komyx.colorInk }}>a próxima festa.</span>
            </h2>
            <InView
              as="ol"
              className="mt-14 grid gap-10 border-t border-[color:var(--line-strong)] pt-10 md:grid-cols-3 md:gap-8"
            >
              {STEPS.map((s, k) => (
                <li key={s.n} className="iv iv-up" style={i(k * 2)}>
                  <span
                    className="display flex items-start gap-3 text-[clamp(3.4rem,6vw,5.2rem)]"
                    style={{ color: komyx.colorInk }}
                  >
                    {s.n}
                    <span className="tri mt-[0.12em] text-[0.18em]" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-[21px] font-semibold tracking-tight">{s.title}</p>
                  <p className="mt-2 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {s.body}
                  </p>
                </li>
              ))}
            </InView>
          </div>
        </div>
      </section>

      {/* 8 · PRICE — the numbers as the headline */}
      <section
        id="preco"
        className="border-t border-[color:var(--line)] bg-[color:var(--bg-elev)]/60 text-[color:var(--ink)]"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                <span className="tri text-[8px]" aria-hidden="true" />1 mês grátis, sem cartão
              </p>
              <h2 className="display mt-6 text-[clamp(2.6rem,6vw,5.6rem)]">
                Um plano, com tudo.{' '}
                <span className="block" style={{ color: komyx.colorInk }}>
                  Você escolhe o período.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
              Todos os recursos em qualquer período. Quanto maior o período, menor o valor por mês:
              de R$ 199 por R$ 149 no mensal, até R$ 99 no anual. Sem taxa por festa; ao fim do
              período, renova ou para.
            </p>
          </div>

          <InView
            as="ol"
            className="mt-16 grid grid-cols-2 border-t border-[color:var(--line-strong)] lg:grid-cols-4"
          >
            {PERIODS.map((p, k) => {
              const best = p.months === BEST;
              return (
                <li
                  key={p.months}
                  className={`iv iv-up relative border-b border-[color:var(--line-strong)] px-4 pb-8 pt-7 sm:px-6 lg:border-b-0 ${
                    k % 2 === 1 ? 'border-l' : ''
                  } ${k > 0 ? 'lg:border-l' : ''}`}
                  style={{ ...(best ? { background: komyx.colorSoft } : {}), ...i(k) }}
                >
                  <p className="flex flex-wrap items-center justify-between gap-2 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-dim)]">
                    {p.label}
                    {best ? (
                      <span
                        className="whitespace-nowrap rounded-full px-2 py-0.5 text-[9.5px] tracking-[0.14em] text-white"
                        style={{ background: komyx.colorInk }}
                      >
                        Melhor preço
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-5 text-[13px] font-semibold text-[color:var(--ink-dim)] line-through">
                    de R$ 199
                  </p>
                  <p
                    className="display mt-1 text-[clamp(3rem,6.4vw,5.8rem)] leading-[0.9]"
                    style={best ? { color: komyx.colorInk } : undefined}
                  >
                    <span className="align-top text-[0.32em] tracking-normal">R$</span>
                    {p.perMonth}
                    <span className="text-[0.2em] font-semibold tracking-normal text-[color:var(--ink-dim)]">
                      /mês
                    </span>
                  </p>
                  <p className="mt-3 text-[13.5px] text-[color:var(--ink-muted)]">
                    {p.months === 1
                      ? 'Cobrado todo mês'
                      : `R$ ${(p.perMonth * p.months).toLocaleString('pt-BR')} por ${p.months} meses`}
                  </p>
                </li>
              );
            })}
          </InView>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={komyx.externalUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-110"
              style={{ background: komyx.colorInk }}
            >
              Testar 1 mês grátis
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <p className="text-[14.5px] text-[color:var(--ink-muted)]">
              30 dias sem cartão. No anual, sai por R$ {annual.perMonth} por mês.
            </p>
          </div>

          <div className="mt-20 border-t border-[color:var(--line-strong)] pt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink-dim)]">
              Em qualquer período
            </p>
            <ul className="mt-6 grid gap-x-10 gap-y-3 text-[15.5px] font-semibold sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span
                    className="tri tri-r text-[7px]"
                    style={{ color: komyx.colorInk }}
                    aria-hidden="true"
                  />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9 · KOMYX BALCÃO — black */}
      <section
        id="balcao"
        className="cut-top overflow-x-clip bg-[color:var(--dark)] text-white"
        aria-labelledby="balcao-title"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(232,53,109,0.22),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-14 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-32">
          <div>
            <p
              className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: komyx.color }}
            >
              <span className="tri text-[8px]" aria-hidden="true" />
              Komyx Balcão · com tablet
            </p>
            <h2
              id="balcao-title"
              className="display mt-6 max-w-[14ch] text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[0.96]"
            >
              Um tablet na portaria, já configurado.
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-white/70">
              Um tablet de 10&quot; em modo quiosque. Abre direto na portaria da festa do dia e não
              sai dali: a equipe marca quem chegou e fecha a conta dos extras; a dona destrava com
              um PIN. Tablet e suporte em comodato, entrega configurada, troca em caso de defeito.
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-6 border-t border-white/15 pt-8">
              <p>
                <span
                  className="display text-[clamp(3.2rem,6vw,5.2rem)]"
                  style={{ color: komyx.color }}
                >
                  <span className="align-top text-[0.32em] tracking-normal">R$</span>149
                  <span className="text-[0.22em] font-semibold tracking-normal text-white/60">
                    /mês
                  </span>
                </span>
                <span className="mt-2 block text-[13.5px] text-white/60">
                  Plano anual (R$ 1.788) com o tablet incluído.
                </span>
              </p>
              <a
                href={contactHref('Quero o Komyx Balcão com tablet')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[color:var(--dark)] transition hover:bg-[#ffd3e1]"
              >
                Quero o tablet na portaria
              </a>
            </div>
          </div>
          <figure>
            <InView>
              <div className="iv iv-pop">
                <TabletMock />
              </div>
            </InView>
            <Caption tone="dark" />
          </figure>
        </div>
      </section>

      {/* 10 · CLOSE — pink */}
      <section
        className="cut-top-rev overflow-x-clip text-white"
        style={{ background: komyx.colorInk }}
        aria-labelledby="komyx-cta"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="pk-tri-grid-light absolute inset-0" />
          {/* The balloon, at the scale of the section, drifting off the right edge. */}
          <KomyxMark className="absolute -right-[12%] bottom-[-8%] h-[min(42rem,90vw)] w-[min(40rem,86vw)] rotate-[8deg] text-white/[0.09] lg:-right-[4%] lg:bottom-[-14%]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <KomyxMark className="h-12 w-12 text-white" />
          <h2 id="komyx-cta" className="display mt-8 max-w-[17ch] text-[clamp(2.8rem,7vw,6.6rem)]">
            Mande o link para o próximo cliente{' '}
            <span style={{ color: BLUSH }}>que perguntar o preço.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/85">
            Crie o buffet, cadastre dois pacotes e compartilhe a sua página. Se preferir, a gente
            faz a primeira configuração com você.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={komyx.externalUrl!} external>
              Criar meu buffet
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
            <Button href={contactHref('Quero uma demonstração do Komyx')} variant="ghost-light">
              Pedir uma demonstração
            </Button>
          </div>
          <p className="mt-5 text-[14px] text-white/80">
            {komyx.offer}. Tudo incluído, sem taxa por festa.
          </p>
        </div>
      </section>
    </>
  );
}
