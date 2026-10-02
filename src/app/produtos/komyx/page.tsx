import type { Metadata } from 'next';
import {
  Calendar,
  Calculator,
  QrCode,
  FileSignature,
  Mail,
  DoorOpen,
  MessageCircle,
  Cake,
  Smartphone,
  Check,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';
import { productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { KomyxMark } from '@/components/site/ProductMarks';
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

const komyx = productBySlug('komyx');
const pageTitle = 'Komyx — Gestão para buffets';
const pageDescription =
  'Komyx é o sistema da AraLabs para buffets infantis e de eventos: agenda com um evento por dia, orçamento online, reserva com Pix e identificador, contrato automático, convite com RSVP, portaria no celular e cobrança pelo WhatsApp. R$ 99/mês, tudo incluído.';

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

const FEATURES = [
  {
    icon: Calendar,
    title: 'Agenda: um evento por dia',
    body: 'Mês inteiro numa tela. Confirmadas em verde, aguardando sinal em amarelo. Só a dona abre exceção.',
  },
  {
    icon: Calculator,
    title: 'Orçamento online',
    body: 'O cliente escolhe pacote, tema, data e quantas pessoas na sua página. Vê o valor na hora; você recebe pronto para virar evento.',
  },
  {
    icon: QrCode,
    title: 'Reserva com Pix',
    body: 'QR e copia-e-cola com o sinal e um identificador que aparece no seu extrato. Passou o prazo, a data volta a ficar livre sozinha.',
  },
  {
    icon: FileSignature,
    title: 'Contrato automático',
    body: 'No aceite do orçamento, seu modelo é preenchido, numerado e registrado. O cliente lê e aceita pelo link.',
  },
  {
    icon: Mail,
    title: 'Convite com RSVP',
    body: 'Convite personalizado pela família, lista de convidados confirmando pelo link, sem app.',
  },
  {
    icon: DoorOpen,
    title: 'Portaria no celular',
    body: 'Quem está na porta marca quem chegou, adiciona convidado de última hora e fecha a conta dos extras com Pix.',
  },
  {
    icon: MessageCircle,
    title: 'Cobrança pelo WhatsApp',
    body: 'Parcelas e extras com status. "Cobrar" abre o WhatsApp com a mensagem pronta e o Pix do valor exato.',
  },
  {
    icon: Cake,
    title: 'Aniversariantes do ano',
    body: 'Quem fez festa com você volta a aparecer perto do próximo aniversário, com a mensagem pronta para mandar.',
  },
  {
    icon: Smartphone,
    title: 'App para a dona, a portaria e o cliente',
    body: 'A dona confirma de qualquer lugar; o cliente acompanha reserva, contrato e convite pelo celular.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Cadastre pacotes e temas',
    body: 'Preço-base, adultos e crianças incluídos, adicionais e fotos das decorações.',
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

export default function KomyxPage() {
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

      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-[color:var(--line)]"
        style={{ background: '#1b1f3a', color: '#fffdf7' }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[-30%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(232,53,109,0.25),transparent_70%)]" />
          <div className="absolute left-[-10%] bottom-[-40%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,196,61,0.18),transparent_70%)]" />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-20">
          <div>
            <div className="flex items-center gap-3">
              <KomyxMark className="h-12 w-12" style={{ color: '#ffc43d' }} />
              <div className="leading-none">
                <p className="text-[26px] font-extrabold tracking-tight">Komyx</p>
                <p className="mt-1 text-[12px] font-semibold" style={{ color: '#cfd2e6' }}>
                  Gestão para buffets
                </p>
              </div>
            </div>
            <h1 className="mt-8 text-balance text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em] md:text-[52px]">
              A festa se vende sozinha. Você só confirma.
            </h1>
            <p
              className="mt-6 max-w-xl text-[17px] leading-[1.7] md:text-[19px]"
              style={{ color: '#cfd2e6' }}
            >
              Agenda, orçamento, Pix, contrato, convite e portaria em um lugar só, feito para buffet
              infantil e de eventos. Sem planilha, sem caderno, sem perder festa no WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={komyx.externalUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-110"
                style={{ background: komyx.color }}
              >
                Criar meu buffet →
              </a>
              <a
                href={contactHref('Quero conhecer o Komyx')}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold transition hover:bg-white/10"
              >
                Falar com a gente
              </a>
            </div>
            <p className="mt-4 text-[14px]" style={{ color: '#9da1bd' }}>
              {komyx.offer}. Cancele quando quiser.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {FEATURES.slice(0, 6).map((f) => (
              <li
                key={f.title}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-[14.5px]"
              >
                <f.icon className="mt-0.5 h-4.5 w-4.5 shrink-0" style={{ color: '#ffc43d' }} />
                <span className="font-semibold">{f.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section>
        <Eyebrow>Como funciona</Eyebrow>
        <Title>Três passos para quem vende a festa.</Title>
        <CellGrid className="mt-12" cols="md:grid-cols-3">
          {STEPS.map((s) => (
            <Cell key={s.n} {...s} />
          ))}
        </CellGrid>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <Eyebrow>O que o Komyx faz</Eyebrow>
        <Title>
          Tudo que hoje vive no WhatsApp, <Accent>registrado e automático</Accent>.
        </Title>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg)] p-7"
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: komyx.colorSoft, color: komyx.color }}
              >
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="preco">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="gold">Oferta de lançamento</Eyebrow>
            <Title>Um plano, tudo incluído.</Title>
            <Lead>
              Quem entra agora fica com todos os recursos, inclusive os que um dia virarão Premium,
              por este preço. Para sempre. Sem taxa por festa, sem fidelidade: cancele e reative
              quando quiser.
            </Lead>
          </div>
          <div
            className="rounded-[28px] border-2 bg-white p-7 shadow-[0_18px_50px_rgba(27,31,58,0.10)]"
            style={{ borderColor: komyx.color }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="text-[20px] font-extrabold text-[color:var(--ink)]">Komyx completo</p>
              <p
                className="text-[40px] font-extrabold tracking-tight"
                style={{ color: komyx.color }}
              >
                R$ 99
                <span className="text-[15px] font-semibold text-[color:var(--ink-dim)]">/mês</span>
              </p>
            </div>
            <ul className="mt-5 grid gap-x-4 gap-y-2 text-[14.5px] text-[color:var(--ink)] sm:grid-cols-2">
              {INCLUDED.map((i) => (
                <li key={i} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#2ec4a6' }} /> {i}
                </li>
              ))}
            </ul>
            <a
              href={komyx.externalUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full py-4 text-[15px] font-extrabold text-white transition hover:brightness-110"
              style={{ background: komyx.color }}
            >
              Criar meu buffet por R$ 99/mês
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <CtaPanel
          eyebrow="Para buffets"
          title="Pronta para parar de perder festa no WhatsApp?"
          body="Crie o buffet, cadastre dois pacotes e mande o link para o próximo cliente que perguntar o preço. Se preferir, a gente faz a primeira configuração com você."
          primary={{ href: komyx.externalUrl!, label: 'Criar meu buffet' }}
          secondary={{
            href: contactHref('Quero uma demonstração do Komyx'),
            label: 'Pedir uma demonstração',
          }}
        />
      </Section>
    </>
  );
}
