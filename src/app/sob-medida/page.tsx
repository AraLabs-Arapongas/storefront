import Link from 'next/link';
import {
  Calendar,
  Calculator,
  Users,
  QrCode,
  LayoutDashboard,
  Smartphone,
  FileText,
  Bell,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { contactHref } from '@/lib/seo/site';
import { InView } from '@/components/home/InView';
import { Kicker, Pill, capitalize, i } from '@/components/pages/Editorial';
import { countWord } from '@/lib/products';

const pageDescription =
  'Sistema sob medida para pequenos negócios: agenda, orçamento, cobrança por Pix e painel do dono. Preço fechado, proposta em 2 dias úteis. Arapongas (PR).';

export const metadata = pageMetadata({
  path: '/sob-medida',
  title: 'Sistema sob medida para pequenos negócios',
  description: pageDescription,
});

const PROMISES = [
  { k: 'Proposta', v: 'Em até 2 dias úteis' },
  { k: 'Preço', v: 'Fechado pelo projeto' },
  { k: 'O sistema', v: 'É seu: código e dados' },
];

const FOR = [
  'Buffets, salões de festa e espaços de eventos',
  'Salões de beleza, barbearias e clínicas de bairro',
  'Oficinas, assistências técnicas e lava-rápidos',
  'Escolinhas, cursos livres e estúdios',
  'Lojas e serviços que ainda vivem de WhatsApp e caderno',
];

const PIECES = [
  {
    icon: Calendar,
    title: 'Agenda e reservas',
    body: 'Horários, datas únicas, bloqueios e lembretes. O cliente escolhe sozinho pelo link.',
  },
  {
    icon: Calculator,
    title: 'Orçamento online',
    body: 'Pacotes, adicionais e regras de preço. O cliente monta, você recebe pronto.',
  },
  {
    icon: Users,
    title: 'Clientes e histórico',
    body: 'Quem é, o que comprou, quando volta. Busca por nome ou telefone.',
  },
  {
    icon: QrCode,
    title: 'Cobrança por Pix',
    body: 'QR e copia-e-cola com identificador no extrato, parcelas e saldo em aberto.',
  },
  {
    icon: FileText,
    title: 'Contratos e documentos',
    body: 'Modelo preenchido sozinho, numerado, aceito pelo link e guardado.',
  },
  {
    icon: LayoutDashboard,
    title: 'Painel do dono',
    body: 'O que vence hoje, o que falta receber, o que precisa de resposta. Em uma tela.',
  },
  {
    icon: Bell,
    title: 'Mensagens prontas',
    body: 'Cobrança, confirmação e lembrete abrindo no WhatsApp com o texto certo.',
  },
  {
    icon: Smartphone,
    title: 'App simples',
    body: 'Para a equipe no balcão ou na porta e para o cliente acompanhar sem ligar.',
  },
];

const STEPS = [
  {
    title: 'Uma conversa de 30 minutos.',
    body: 'Você conta como o dia funciona hoje. A gente devolve, em até 2 dias úteis, uma proposta com escopo, prazo e preço fechado.',
  },
  {
    title: 'Sem esperar seis meses para ver alguma coisa funcionando.',
    body: 'A primeira versão entra no ar rápido. Você usa de verdade antes de pagar o restante; ajuste no que atrapalha vem antes do que é bonito.',
  },
  {
    title: 'No ar, com a gente por perto.',
    body: 'Hospedagem, backup e suporte numa mensalidade pequena. Pedidos novos entram por ordem e quase sempre saem na mesma semana.',
  },
];

const FAQ = [
  {
    q: 'O sistema é meu?',
    a: 'Sim. Código e dados são seus. Se um dia quiser levar para outro lugar, entregamos tudo organizado e ajudamos na mudança.',
  },
  {
    q: 'Quanto custa?',
    a: 'Depende do escopo, mas a lógica é a mesma dos nossos produtos: um valor fechado pelo projeto e uma mensalidade pequena pela operação. Sem surpresa no meio.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'A primeira versão útil costuma ficar pronta em algumas semanas. Preferimos colocar o essencial no ar cedo e evoluir com você usando.',
  },
  {
    q: 'E se eu já uso planilha e WhatsApp?',
    a: 'Ótimo: é por aí que a gente começa. Importamos o que existe e desenhamos o sistema a partir da rotina real, não de um formulário em branco.',
  },
  {
    q: 'Vocês atendem fora de Arapongas?',
    a: 'Sim. Trabalhamos com clientes de qualquer cidade por chamada e WhatsApp. Quem é da região pode nos visitar.',
  },
];

const START = contactHref(
  'Quero um sistema sob medida',
  'Olá! Tenho um negócio e queria conversar sobre um sistema sob medida. Meu negócio é: ',
);

export default function SobMedidaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          path: '/sob-medida',
          name: 'Desenvolvimento de sistema sob medida',
          serviceType: 'Desenvolvimento de software sob medida',
          description: pageDescription,
          audience: 'Pequenos negócios de serviço',
        })}
      />

      {/* 1 · OPENING — the question, the answer, three promises */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-12%] top-[-30%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.16),transparent_70%)]" />
          <div className="tri-grid pg-grid-right absolute inset-0" />
        </div>
        <div className="pg-hero relative mx-auto max-w-[1240px] px-6 pb-20 pt-10 lg:px-10 lg:pb-24 lg:pt-14">
          <h1 className="pg-title-sob display text-[color:var(--ink)]">
            {/* The kicker line lives inside the h1 so the heading names the service. */}
            <span className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase leading-normal tracking-[0.2em] text-[color:var(--gold-soft)] sm:text-[11px] sm:tracking-[0.28em]">
              <span className="tri text-[8px]" aria-hidden="true" />
              Sistema sob medida para pequenos negócios.
            </span>{' '}
            <span className="lg:block">Seu problema ainda</span>{' '}
            <span className="lg:block">não tem produto?</span>{' '}
            <span className="block text-[color:var(--gold-soft)]">A gente faz.</span>
          </h1>
          <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
            <div>
              <p className="max-w-[540px] text-[17px] leading-[1.55] text-[color:var(--ink-muted)] md:text-[18.5px]">
                Sistemas feitos para o seu negócio, simples para quem usa. A primeira versão entra
                no ar rápido, com preço fechado. E o sistema é seu.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                <Pill href={START} arrow>
                  Começar a conversa
                </Pill>
                <Pill href="#como" look="outline">
                  Como funciona
                </Pill>
              </div>
            </div>
            <InView as="ul" className="grid grid-cols-3 gap-4 sm:gap-6" threshold={0.2}>
              {PROMISES.map((p, k) => (
                <li
                  key={p.k}
                  className="iv iv-up border-t-2 border-[color:var(--ink)] pt-3"
                  style={i(k + 1)}
                >
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold-soft)] sm:text-[11px] sm:tracking-[0.2em]">
                    <span className="tri text-[6px]" aria-hidden="true" />
                    {p.k}
                  </span>
                  <span className="mt-1.5 block text-[14px] font-semibold leading-snug text-[color:var(--ink)] sm:text-[16px]">
                    {p.v}
                  </span>
                </li>
              ))}
            </InView>
          </div>
        </div>
      </section>

      {/* 2 · FOR WHOM — cream, big list */}
      <section aria-labelledby="para-quem" className="border-t border-[color:var(--line)]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 pb-28 pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10 lg:pb-40 lg:pt-28">
          <div>
            <Kicker>Para quem</Kicker>
            <h2
              id="para-quem"
              className="display mt-6 max-w-[12ch] text-[clamp(2.5rem,5vw,4.6rem)] text-[color:var(--ink)]"
            >
              Negócios pequenos que vendem tempo, data ou serviço.
            </h2>
          </div>
          <InView
            as="ul"
            className="border-t border-[color:var(--line-strong)] lg:mt-3"
            threshold={0.2}
          >
            {FOR.map((f, k) => (
              <li
                key={f}
                className="iv iv-up group flex items-baseline gap-4 border-b border-[color:var(--line-strong)] py-5 text-[clamp(1.25rem,2.1vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-[color:var(--ink)] lg:py-6"
                style={i(k)}
              >
                <span
                  className="tri tri-r shrink-0 text-[9px] text-[color:var(--gold)] transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3 · THE BASE — black, a blueprint of the pieces */}
      <section
        aria-labelledby="base"
        className="cut-top relative overflow-hidden bg-[color:var(--dark)] text-[color:var(--bg)]"
      >
        <div className="pg-grid-dark pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker onDark>O que costumamos construir</Kicker>
          <h2 id="base" className="display mt-6 max-w-[11ch] text-[clamp(3rem,8.4vw,8rem)]">
            A gente não começa <span className="text-[color:var(--gold)]">do zero.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/75">
            Já temos uma base pronta para agenda, pagamentos, orçamentos e operação. Ela vira o
            sistema de um salão, de uma oficina ou de uma escolinha, do jeito que o seu dia
            funciona. O{' '}
            <Link
              href="/produtos/komyx"
              className="text-[color:var(--gold)] underline decoration-[color:var(--gold)]/40 underline-offset-4 transition hover:decoration-[color:var(--gold)]"
            >
              Komyx, sistema para buffet e casa de festas
            </Link>
            , nasceu exatamente assim.
          </p>
          <InView
            as="ul"
            className="pg-blueprint mt-16 grid grid-cols-1 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
            threshold={0.15}
          >
            {PIECES.map((p, k) => (
              <li key={p.title} className="iv iv-up px-5 py-5 sm:p-6 lg:p-8" style={i(k)}>
                <span className="flex items-center justify-between text-[color:var(--gold)]">
                  <p.icon className="h-6 w-6" strokeWidth={1.8} />
                  <span className="text-[11px] font-bold tabular-nums tracking-[0.16em] text-white/35">
                    {String(k + 1).padStart(2, '0')}
                  </span>
                </span>
                <h3 className="mt-4 text-[19px] font-semibold tracking-tight sm:mt-8">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-white/60">{p.body}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 4 · HOW — gold, a track drawn through three steps */}
      <section
        id="como"
        aria-labelledby="como-title"
        className="cut-top-rev relative overflow-hidden bg-[color:var(--gold)] text-[color:var(--dark)]"
      >
        <span aria-hidden="true" className="pg-corner-tri" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.28em]">
            <span className="tri text-[8px]" aria-hidden="true" />
            Como funciona
          </p>
          <h2 id="como-title" className="display mt-6 text-[clamp(2.8rem,7vw,6.6rem)]">
            {capitalize(countWord(STEPS.length))} passos.{' '}
            <span className="block">Sem surpresa.</span>
          </h2>
          <InView
            as="ol"
            className="pg-steps relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-24"
          >
            <span aria-hidden="true" className="pg-track" />
            {STEPS.map((s, k) => (
              <li key={s.title} className="relative pl-10 md:pl-0 md:pt-12">
                <span aria-hidden="true" className="pg-node iv iv-pop" style={i(k * 3 + 1)} />
                <span
                  className="iv iv-up display block text-[clamp(3.8rem,7vw,6rem)] leading-[0.8]"
                  style={i(k * 3 + 1)}
                >
                  {String(k + 1).padStart(2, '0')}
                </span>
                <p
                  className="iv iv-up mt-6 max-w-[22ch] text-[clamp(1.25rem,1.9vw,1.55rem)] font-bold leading-[1.2] tracking-[-0.02em]"
                  style={i(k * 3 + 2)}
                >
                  {s.title}
                </p>
                <p
                  className="iv iv-up mt-3 max-w-[34ch] text-[15.5px] leading-[1.65] text-[color:var(--dark)]/80"
                  style={i(k * 3 + 2)}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 5 · FAQ — cream */}
      <section aria-labelledby="faq">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-36">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>Perguntas frequentes</Kicker>
            <h2
              id="faq"
              className="display mt-6 max-w-[12ch] text-[clamp(2.4rem,4.4vw,4rem)] text-[color:var(--ink)]"
            >
              O que todo mundo pergunta antes de começar.
            </h2>
          </div>
          <dl className="border-t-2 border-[color:var(--ink)]">
            {FAQ.map((f) => (
              <div key={f.q} className="border-b border-[color:var(--line-strong)] py-8 lg:py-10">
                <dt className="flex items-baseline gap-4 text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[color:var(--ink)]">
                  <span
                    className="tri tri-r shrink-0 text-[9px] text-[color:var(--gold)]"
                    aria-hidden="true"
                  />
                  {f.q}
                </dt>
                <dd className="mt-3 max-w-[56ch] pl-[26px] text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 6 · CLOSING — black */}
      <section
        aria-labelledby="comecar"
        className="cut-top relative overflow-hidden bg-[color:var(--dark)] text-[color:var(--bg)]"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(197,140,43,0.22),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <Kicker onDark>Vamos começar</Kicker>
          <h2 id="comecar" className="display mt-6 max-w-[20ch] text-[clamp(2.6rem,5.6vw,5.4rem)]">
            Conta como é o seu dia hoje.{' '}
            <span className="text-[color:var(--gold)]">
              A gente devolve uma proposta em 2 dias úteis.
            </span>
          </h2>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-[17px] leading-[1.7] text-white/75">
              Não precisa saber o que quer em termos de sistema. Precisa saber o que atrapalha. O
              resto é com a gente.
            </p>
            <div className="flex flex-wrap gap-3">
              <Pill href={START} look="gold" arrow>
                Falar com a gente
              </Pill>
              <Pill href="/produtos" look="ghost">
                Ver os produtos prontos
              </Pill>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
