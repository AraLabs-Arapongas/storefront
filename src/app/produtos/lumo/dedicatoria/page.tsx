import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Dedicatória — Lumo';
const pageDescription =
  'O Lumo nasceu em homenagem à Profa. Dra. Selma Lanhellas — educadora, inspiração e presença por trás deste projeto.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/lumo/dedicatoria',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

export default function LumoDedicatoriaPage() {
  return (
    <LegalPage
      product="lumo"
      doc="dedicatoria"
      title={
        <>
          Para <Hl>Selma.</Hl>
        </>
      }
      intro="O Lumo nasceu em homenagem à educadora que inspirou este projeto."
      lead={
        <p>
          O Lumo nasceu em homenagem à <strong>Profa. Dra. Selma Lanhellas</strong> — educadora,
          inspiração e presença por trás deste projeto.
        </p>
      }
      toc={false}
      contact={false}
    >
      <p className="lg-letter">
        Sua trajetória na educação, na inclusão e no cuidado com crianças que aprendem e se
        comunicam de formas diferentes inspirou uma ferramenta feita para ajudar crianças a serem
        ouvidas, mesmo quando as palavras não são o caminho.
      </p>

      <blockquote className="lg-quote">
        Que cada criança encontre aqui um caminho para se expressar.
        <br />
        Que cada família encontre mais escuta, presença e conexão.
      </blockquote>
    </LegalPage>
  );
}
