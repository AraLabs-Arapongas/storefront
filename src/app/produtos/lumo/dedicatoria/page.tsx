import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Dedicatória — Lumo';
const pageDescription =
  'O Lumo nasceu em homenagem à Profa. Dra. Selma Lanhellas — educadora, inspiração e presença por trás deste projeto.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/lumo/dedicatoria' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/lumo/dedicatoria',
    type: 'website',
  },
};

export default function LumoDedicatoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Lumo · Dedicatória"
        title={
          <>
            Para{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">Selma</span>.
          </>
        }
        description="O Lumo nasceu em homenagem à educadora que inspirou este projeto."
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[720px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              O Lumo nasceu em homenagem à{' '}
              <strong>Profa. Dra. Selma Lanhellas</strong> — educadora, inspiração
              e presença por trás deste projeto.
            </p>
            <p>
              Sua trajetória na educação, na inclusão e no cuidado com crianças
              que aprendem e se comunicam de formas diferentes inspirou uma
              ferramenta feita para ajudar crianças a serem ouvidas, mesmo
              quando as palavras não são o caminho.
            </p>

            <blockquote>
              Que cada criança encontre aqui um caminho para se expressar.
              <br />
              Que cada família encontre mais escuta, presença e conexão.
            </blockquote>
          </article>
        </div>
      </section>
    </>
  );
}
