import type { Metadata } from 'next';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Créditos e licenças — Lumo';
const pageDescription =
  'Atribuição formal dos pictogramas ARASAAC usados no Lumo, autor Sergio Palao, licença CC BY-NC-SA 4.0, propriedade do Governo de Aragón.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/lumo/creditos' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/lumo/creditos',
    type: 'website',
  },
};

export default function LumoCreditosPage() {
  return (
    <LegalPage
      product="lumo"
      doc="creditos"
      title={
        <>
          Créditos e <Hl>licenças.</Hl>
        </>
      }
      intro="O Lumo usa materiais de terceiros sob licenças abertas. Mantemos a atribuição visível pra respeitar o trabalho dos autores."
      toc={false}
      sections={[
        {
          id: 'pictogramas',
          title: 'Pictogramas',
          body: (
            <>
              <p>
                Os pictogramas utilizados no Lumo são fornecidos pelo{' '}
                <a href="https://arasaac.org" target="_blank" rel="noopener noreferrer">
                  ARASAAC
                </a>{' '}
                (Centro Aragonés de la Comunicación Aumentativa y Alternativa).
              </p>

              <dl>
                <dt>Autor pictogramas</dt>
                <dd>Sergio Palao</dd>
                <dt>Origem</dt>
                <dd>ARASAAC</dd>
                <dt>Licença</dt>
                <dd>
                  <a
                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Commons BY-NC-SA 4.0
                  </a>
                </dd>
                <dt>Propriedade</dt>
                <dd>Governo de Aragón (Espanha)</dd>
                <dt>Quantidade usada</dt>
                <dd>13.798 pictogramas bundleds no app</dd>
                <dt>Formato</dt>
                <dd>PNG 300px convertido pra WebP otimizado</dd>
              </dl>

              <p>
                O Lumo utiliza pictogramas para apoiar a comunicação visual de crianças e famílias.
                Os pictogramas são exibidos dentro do contexto de comunicação AAC do aplicativo, não
                são redistribuídos separadamente, e mantêm os créditos visíveis na tela “Sobre o
                Lumo” do app.
              </p>

              <p>Termos da licença CC BY-NC-SA 4.0:</p>
              <ul>
                <li>
                  <strong>Atribuição (BY)</strong> — créditos visíveis no app, conforme acima.
                </li>
                <li>
                  <strong>Não Comercial (NC)</strong> — o Lumo é distribuído gratuitamente para
                  famílias e não gera receita por venda da app, assinatura, anúncios ou
                  licenciamento. Eventuais opções futuras de “Apoiar o Lumo” via doação não
                  desbloquearão pictogramas nem funcionalidade.
                </li>
                <li>
                  <strong>Compartilha Igual (SA)</strong> — qualquer modificação técnica dos
                  pictogramas (redimensionamento, conversão de formato) é distribuída sob a mesma
                  licença CC BY-NC-SA 4.0.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'tipografia',
          title: 'Tipografia',
          body: (
            <p>
              <strong>Inter</strong> — Google Fonts, licença SIL Open Font License 1.1 (OFL).
            </p>
          ),
        },
        {
          id: 'tecnologias',
          title: 'Tecnologias',
          body: (
            <p>
              O Lumo é construído sobre tecnologias open source: Expo, React Native, SQLite,
              expo-image, expo-speech. Agradecemos às comunidades que mantêm essas ferramentas.
            </p>
          ),
        },
        {
          id: 'contato',
          title: 'Contato sobre direitos',
          body: (
            <p>
              Se você representa uma das partes envolvidas e quer ajustar alguma atribuição, escreva
              pra <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
