import type { Metadata } from 'next';
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
import { collectionPageSchema } from '@/lib/seo/schemas';
import { contactHref } from '@/lib/seo/site';
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

const pageDescription =
  'Sistema sob medida para o seu negócio: agenda, orçamento, Pix e painel do dono. Primeira versão no ar rápido, preço fechado, o sistema é seu. AraLabs, Arapongas (PR).';

export const metadata: Metadata = {
  title: 'Sob medida',
  description: pageDescription,
  alternates: { canonical: '/sob-medida' },
  openGraph: {
    title: 'Sistemas sob medida · AraLabs',
    description: pageDescription,
    url: '/sob-medida',
    type: 'website',
  },
};

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
    n: '01',
    title: 'Uma conversa de 30 minutos',
    body: 'Você conta como o dia funciona hoje. A gente devolve, em até 2 dias úteis, uma proposta com escopo, prazo e preço fechado.',
  },
  {
    n: '02',
    title: 'Sem esperar seis meses',
    body: 'A primeira versão entra no ar rápido. Você usa de verdade antes de pagar o restante; ajuste no que atrapalha vem antes do que é bonito.',
  },
  {
    n: '03',
    title: 'No ar, com a gente por perto',
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

export default function SobMedidaPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: '/sob-medida',
          name: 'Sistemas sob medida',
          description: pageDescription,
        })}
      />

      <Section>
        <Eyebrow tone="gold">Sob medida</Eyebrow>
        <Title as="h1" size="lg">
          Quando o seu problema ainda não tem produto, <Accent>a gente faz</Accent>.
        </Title>
        <Lead>
          Sistemas feitos para o seu negócio, simples para quem usa. A primeira versão entra no ar
          rápido, com preço fechado. E o sistema é seu.
        </Lead>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={contactHref(
              'Quero um sistema sob medida',
              'Olá! Tenho um negócio e queria conversar sobre um sistema sob medida. Meu negócio é: ',
            )}
          >
            Começar a conversa →
          </Button>
          <Button href="#como" variant="secondary">
            Como funciona
          </Button>
        </div>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Para quem</Eyebrow>
            <Title size="sm">Negócios pequenos que vendem tempo, data ou serviço.</Title>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {FOR.map((f) => (
              <li
                key={f}
                className="rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-5 py-4 text-[15.5px] text-[color:var(--ink)]"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <Eyebrow>O que costumamos construir</Eyebrow>
        <Title>A gente não começa do zero.</Title>
        <Lead>
          Já temos uma base pronta para agenda, pagamentos, orçamentos e operação. Ela vira o
          sistema de um salão, de uma oficina ou de uma escolinha, do jeito que o seu dia funciona.
        </Lead>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PIECES.map((p) => (
            <article
              key={p.title}
              className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--gold)]/15 text-[color:var(--gold-soft)]">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-[color:var(--ink)]">
                {p.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="como">
        <Eyebrow>Como funciona</Eyebrow>
        <Title>Três passos, sem surpresa.</Title>
        <CellGrid className="mt-12" cols="md:grid-cols-3">
          {STEPS.map((s) => (
            <Cell key={s.n} {...s} />
          ))}
        </CellGrid>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <Eyebrow>Perguntas frequentes</Eyebrow>
        <Title>O que todo mundo pergunta antes de começar.</Title>
        <dl className="mt-10 divide-y divide-[color:var(--line)] rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg)]">
          {FAQ.map((f) => (
            <div key={f.q} className="grid gap-2 px-7 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
              <dt className="text-[17px] font-semibold text-[color:var(--ink)]">{f.q}</dt>
              <dd className="text-[15.5px] leading-[1.7] text-[color:var(--ink-muted)]">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <CtaPanel
          eyebrow="Vamos começar"
          title="Conta como é o seu dia hoje. A gente devolve uma proposta em 2 dias úteis."
          body="Não precisa saber o que quer em termos de sistema. Precisa saber o que atrapalha. O resto é com a gente."
          primary={{ href: contactHref('Quero um sistema sob medida'), label: 'Falar com a gente' }}
          secondary={{ href: '/produtos', label: 'Ver os produtos prontos' }}
        />
      </Section>
    </>
  );
}
