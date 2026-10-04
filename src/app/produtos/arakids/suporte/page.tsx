import type { Metadata } from 'next';
import { Hl, LegalPage, SupportMail } from '@/components/legal/LegalPage';

const pageTitle = 'Suporte — Ara Kids (app)';
const pageDescription =
  'Suporte do app Ara Kids: contato por e-mail e respostas para as dúvidas mais comuns sobre PIN, tempo por dia, voz e dados.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/arakids/suporte' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/arakids/suporte',
    type: 'website',
  },
};

const VIGENCIA = '4 de outubro de 2026';

export default function ArakidsSuportePage() {
  return (
    <LegalPage
      product="arakids"
      doc="suporte"
      title={
        <>
          Como podemos <Hl>ajudar?</Hl>
        </>
      }
      intro="Fale com a gente por e-mail ou veja as dúvidas mais comuns."
      date={{ label: 'Atualizado em', value: VIGENCIA }}
      lead={
        <p>
          Encontrou um problema, tem uma sugestão ou ficou com alguma dúvida sobre o app Ara Kids?
          Escreva para <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Se puder,
          conte o modelo do aparelho e a versão do sistema.
        </p>
      }
      callout={<SupportMail subject="Suporte Ara Kids" />}
      sections={[
        {
          id: 'perguntas-frequentes',
          title: 'Perguntas frequentes',
          faq: [
            {
              id: 'conta',
              q: 'Preciso criar uma conta?',
              a: <p>Não. O Ara Kids não tem login nem cadastro e funciona offline.</p>,
            },
            {
              id: 'area-dos-adultos',
              q: 'Como entro na área dos adultos?',
              a: (
                <p>
                  No mapa, toque no <strong>Castelo dos Pais</strong> e em <strong>Adultos</strong>.
                  Na primeira vez você cria um PIN de 4 números, que abre essa área e libera mais
                  tempo de jogo.
                </p>
              ),
            },
            {
              id: 'esqueci-o-pin',
              q: 'Esqueci o PIN.',
              a: (
                <p>
                  Na tela do PIN, toque em <strong>Esqueci o PIN</strong> e resolva a conta de
                  adulto. Depois é só criar um PIN novo.
                </p>
              ),
            },
            {
              id: 'tempo-por-dia',
              q: 'Como limito o tempo de jogo?',
              a: (
                <p>
                  Na área dos adultos, escolha o tempo por dia de cada criança. Faltando 5 minutos a
                  araponguinha avisa; no fim, ela vai descansar. Com o PIN dá para liberar mais 15
                  minutos.
                </p>
              ),
            },
            {
              id: 'voz-e-som',
              q: 'Não ouço a voz ou a música.',
              a: (
                <p>
                  Confira o volume e a chave de silencioso do aparelho, e o botão de som no mapa. A
                  voz (herói ou heroína) é escolhida no perfil de cada criança.
                </p>
              ),
            },
            {
              id: 'dados',
              q: 'Onde ficam os dados da criança?',
              a: (
                <p>
                  Só no aparelho. Nada vai para a nuvem nem é compartilhado. Detalhes na{' '}
                  <a href="/produtos/arakids/privacidade">Política de privacidade</a>. Se apagar o
                  app, o progresso é apagado junto e não temos como recuperar.
                </p>
              ),
            },
          ],
        },
        {
          id: 'documentos',
          title: 'Documentos',
          body: (
            <ul>
              <li>
                <a href="/produtos/arakids/privacidade">Política de privacidade</a>
              </li>
            </ul>
          ),
        },
        {
          id: 'contato',
          title: 'Contato',
          body: (
            <p>
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a> — AraLabs (Thiago
              Tavares Consulting Ltda. - ME, CNPJ 50.010.836/0001-45).
            </p>
          ),
        },
      ]}
    />
  );
}
