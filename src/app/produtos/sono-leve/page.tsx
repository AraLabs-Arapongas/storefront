import type { Metadata } from 'next';
import { HeartHandshake, ShieldCheck, Smartphone, Milk, TriangleAlert } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';
import { productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { AppHero, AppLegalLinks } from '@/components/site/AppHero';
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

const sonoLeve = productBySlug('sono-leve');
const pageTitle = 'Sono Leve — treino de sono do bebê';
const pageDescription =
  'Sono Leve é o app da AraLabs que ajuda pais no treino de sono gradual do bebê (método Ferber e variações): ritual da hora de dormir, timer com os intervalos de check-in de cada noite, registro dos despertares e mamadas, histórico e painel. Sem conta; os dados ficam no celular. Não é conselho médico. Em revisão na App Store.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/sono-leve' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/sono-leve',
    type: 'website',
  },
};

const NIGHT = [
  {
    n: '01',
    title: 'Ritual da hora de dormir',
    body: 'Uma lista simples do que vem antes de dormir, para a noite começar igual, não importa quem está colocando o bebê.',
  },
  {
    n: '02',
    title: 'Timer com os check-ins',
    body: 'O app mostra quanto esperar antes de ir até o bebê. Os intervalos crescem a cada noite da progressão, sem conta de cabeça no escuro.',
  },
  {
    n: '03',
    title: 'Registro da noite',
    body: 'Cada despertar, cada check-in e as mamadas ficam anotados com poucos toques, com aviso para a próxima mamada.',
  },
  {
    n: '04',
    title: 'Histórico e painel',
    body: 'Minutos até dormir e número de despertares, noite a noite. Uma noite difícil não apaga a semana que deu certo.',
  },
];

const PROMISES = [
  {
    icon: HeartHandshake,
    title: 'Estrutura, não milagre',
    body: 'O app não promete que o bebê vai dormir em tantos dias. Ele organiza o método que a família escolheu e mostra o que aconteceu.',
  },
  {
    icon: ShieldCheck,
    title: 'Vocês decidem',
    body: 'Parar, pegar no colo ou trocar de método é sempre uma opção válida. O Sono Leve anota e segue junto, sem julgamento.',
  },
  {
    icon: Milk,
    title: 'Lembrete de mamada',
    body: 'O aviso é calculado a partir da última mamada registrada e do intervalo que vocês definirem.',
  },
  {
    icon: Smartphone,
    title: 'Dados só no celular',
    body: 'Sem conta, sem nuvem e sem anúncios. O que você registra sobre o bebê não sai do aparelho.',
  },
];

export default function SonoLevePage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/sono-leve',
          name: 'Sono Leve',
          description: pageDescription,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'iOS',
          free: false,
        })}
      />

      <AppHero
        product={sonoLeve}
        title={
          <>
            Treino de sono do bebê, <span className="text-[#ffe08a]">com calma e com dados</span>.
          </>
        }
        lead="Para mães e pais que escolheram o treino de sono gradual, como o método Ferber, e querem fazer com estrutura: o ritual, o tempo de cada check-in e o registro de cada noite no mesmo lugar. Sem chute e sem caderno."
        pills={[sonoLeve.statusNote ?? sonoLeve.status, 'Sem conta', 'Funciona offline']}
      />

      <section className="border-b border-[color:var(--line)] bg-[color:var(--bg-elev)]/60">
        <div className="mx-auto flex max-w-[1240px] gap-4 px-6 py-6 lg:px-10">
          <TriangleAlert
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--gold-soft)]"
          />
          <p className="text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]">
            <strong className="text-[color:var(--ink)]">Não é conselho médico.</strong> O Sono Leve
            é uma ferramenta de apoio e não substitui o pediatra nem a supervisão direta do bebê.
            Converse com o pediatra antes de começar um treino de sono. Em emergência, ligue{' '}
            <strong className="text-[color:var(--ink)]">192 (SAMU)</strong>.
          </p>
        </div>
      </section>

      <Section>
        <Eyebrow>Uma noite com o Sono Leve</Eyebrow>
        <Title>
          Do ritual ao último despertar, <Accent>tudo num lugar só</Accent>.
        </Title>
        <CellGrid className="mt-12">
          {NIGHT.map((s) => (
            <Cell key={s.n} {...s} />
          ))}
        </CellGrid>
      </Section>

      <Section className="bg-[color:var(--bg-elev)]/50">
        <Eyebrow>Como a gente pensa</Eyebrow>
        <Title>Feito para pais cansados, não para pais perfeitos.</Title>
        <Lead>
          Treino de sono é uma decisão da família e não serve para todo bebê. O app não toma lado,
          não pressiona e não cobra resultado. Ele tira a conta de cabeça e a dúvida do caminho.
        </Lead>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PROMISES.map((r) => (
            <article
              key={r.title}
              className="flex gap-4 rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg)] p-7"
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                style={{ background: sonoLeve.colorSoft, color: sonoLeve.color }}
              >
                <r.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
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
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Privacidade</Eyebrow>
            <Title size="sm">O sono do seu bebê não é dado de ninguém.</Title>
            <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Bebê, método, noites e mamadas ficam num banco de dados local, dentro do app. Não tem
              login, não tem servidor e nada é compartilhado com terceiros. Como não existe cópia
              fora do aparelho, apagar o app apaga os dados junto.
            </p>
            <AppLegalLinks product={sonoLeve} />
          </div>
          <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-dim)]">
              Disponibilidade
            </p>
            <p className="mt-3 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
              {sonoLeve.statusNote}
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
          title="Quer saber quando o Sono Leve sair?"
          body="Mande uma mensagem e a gente avisa quando o app estiver disponível. Se você já passou por um treino de sono, sua experiência ajuda a gente a fazer um app melhor."
          primary={{ href: contactHref('Quero saber quando o Sono Leve sair'), label: 'Me avise' }}
          secondary={{ href: '/produtos', label: 'Ver os outros produtos' }}
        />
      </Section>
    </>
  );
}
