import type { Metadata } from 'next';
import {
  BookOpen,
  GraduationCap,
  Repeat,
  Footprints,
  Music,
  Timer,
  Flame,
  Target,
  ChartColumn,
  BellRing,
  Smartphone,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';
import { productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { AppHero, AppLegalLinks } from '@/components/site/AppHero';
import { CtaPanel, Eyebrow, Lead, Section, Title, Accent } from '@/components/site/ui';

const jornadas = productBySlug('jornadas');
const pageTitle = 'Jornadas — livros, cursos e hábitos no iPhone';
const pageDescription =
  'Jornadas é o app da AraLabs para acompanhar leituras, cursos, hábitos, corrida e prática de música: sessões de foco, sequência de dias, meta semanal e gráficos de progresso. Gratuito, sem anúncios e sem conta; os dados ficam no iPhone. Em revisão na App Store.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/jornadas' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/jornadas',
    type: 'website',
  },
};

const KINDS = [
  {
    icon: BookOpen,
    title: 'Livros',
    body: 'Busque pelo título ou escaneie o código de barras (ISBN) na contracapa. Título, autor, páginas e capa vêm sozinhos.',
  },
  {
    icon: GraduationCap,
    title: 'Cursos',
    body: 'Aquele curso online ou presencial que você começou, com o tempo que dedica a ele toda semana.',
  },
  {
    icon: Repeat,
    title: 'Hábitos',
    body: 'Meditar, alongar, estudar um idioma: o que você quer repetir até virar rotina.',
  },
  {
    icon: Footprints,
    title: 'Corrida',
    body: 'Os treinos da semana como parte da jornada, lado a lado com o resto das suas metas.',
  },
  {
    icon: Music,
    title: 'Prática de música',
    body: 'O violão, o piano, a voz. Sessões curtas e frequentes contam mais do que uma longa por mês.',
  },
];

const FEATURES = [
  {
    icon: Timer,
    title: 'Sessões de foco',
    body: 'Um timer para cada sessão. Ao terminar, o tempo entra na jornada e no seu histórico.',
  },
  {
    icon: Flame,
    title: 'Sequência de dias',
    body: 'Quantos dias seguidos você apareceu. Um empurrão discreto para não quebrar a corrente.',
  },
  {
    icon: Target,
    title: 'Meta semanal',
    body: 'Você define quanto quer dedicar por dia e acompanha, na semana, o quanto já cumpriu.',
  },
  {
    icon: ChartColumn,
    title: 'Gráficos de progresso',
    body: 'Tempo por dia, dias ativos e o avanço de cada objetivo, para ver a evolução de verdade.',
  },
  {
    icon: BellRing,
    title: 'Lembretes',
    body: 'Avisos no horário que você escolher, gerados no próprio iPhone. Dá para desligar quando quiser.',
  },
  {
    icon: Smartphone,
    title: 'Tudo no aparelho',
    body: 'Sem conta e sem servidor da AraLabs. Só o texto da busca de livros sai do iPhone, para achar o título.',
  },
];

export default function JornadasPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/jornadas',
          name: 'Jornadas',
          description: pageDescription,
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'iOS',
        })}
      />

      <AppHero
        product={jornadas}
        title={
          <>
            Livros, cursos e hábitos, <span className="text-[#ffe08a]">um dia de cada vez</span>.
          </>
        }
        lead="Para quem começa muita coisa e quer terminar mais. Cada objetivo vira uma jornada com sessões de foco, sequência de dias e meta semanal, e você vê o progresso crescer sem planilha nem caderno."
        pills={[jornadas.statusNote ?? jornadas.status, 'Gratuito, sem anúncios', 'Sem conta']}
      />

      <Section>
        <Eyebrow>O que dá para acompanhar</Eyebrow>
        <Title>
          Uma jornada para cada coisa que você <Accent>quer levar até o fim</Accent>.
        </Title>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-5">
          {KINDS.map((k) => (
            <li key={k.title} className="bg-[color:var(--bg-elev)] p-6">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: jornadas.colorSoft, color: jornadas.color }}
              >
                <k.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                {k.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                {k.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <Eyebrow>Como funciona</Eyebrow>
        <Title>Aparecer um pouco todo dia é o que faz a diferença.</Title>
        <Lead>
          O Jornadas não cobra, não compara você com ninguém e não promete milagre. Ele só deixa
          visível o tempo que você dedicou, para você decidir o próximo passo.
        </Lead>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="flex gap-4 rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg)] p-6"
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                style={{ background: jornadas.colorSoft, color: jornadas.color }}
              >
                <f.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[17.5px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Privacidade</Eyebrow>
            <Title size="sm">Suas metas são suas.</Title>
            <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Jornadas, sessões, fotos de capa e perfil ficam no armazenamento do app no seu iPhone.
              Não tem login, não tem anúncio e não tem rastreamento. Como não existe cópia fora do
              aparelho, apagar o app apaga os dados junto.
            </p>
            <AppLegalLinks product={jornadas} />
          </div>
          <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
              Disponibilidade
            </p>
            <p className="mt-3 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
              {jornadas.statusNote}
            </p>
            <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
              O app para iPhone foi enviado para a App Store em 3 de outubro de 2026 e está em
              revisão pela Apple. Assim que for aprovado, o link para baixar aparece nesta página.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <CtaPanel
          eyebrow="Em breve na App Store"
          title="Quer saber quando o Jornadas sair?"
          body="Mande uma mensagem e a gente avisa quando o app estiver disponível. Sugestões de tipos de jornada também são bem-vindas."
          primary={{ href: contactHref('Quero saber quando o Jornadas sair'), label: 'Me avise' }}
          secondary={{ href: '/produtos', label: 'Ver os outros produtos' }}
        />
      </Section>
    </>
  );
}
