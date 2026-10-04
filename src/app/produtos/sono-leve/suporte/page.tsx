import type { Metadata } from 'next';
import { Hl, LegalPage, SupportMail } from '@/components/legal/LegalPage';

const pageTitle = 'Suporte — Sono Leve';
const pageDescription =
  'Suporte do Sono Leve: contato por e-mail e respostas pras dúvidas mais comuns sobre dados, backup e notificações.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/sono-leve/suporte' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/sono-leve/suporte',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function SonoLeveSuportePage() {
  return (
    <LegalPage
      product="sono-leve"
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
          Encontrou um problema, tem uma sugestão ou ficou com alguma dúvida sobre o Sono Leve?
          Escreva pra <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Se puder,
          conte o modelo do seu celular, a versão do sistema e a versão do app (em Ajustes, no fim
          da tela).
        </p>
      }
      callout={
        <>
          <div className="lg-alert" role="note">
            <p>
              <strong>O Sono Leve não substitui o pediatra.</strong> Em qualquer sinal de alerta,
              pegue o bebê no colo e procure um profissional de saúde. Em emergência, ligue{' '}
              <strong>192 (SAMU)</strong>.
            </p>
          </div>
          <SupportMail subject="Suporte Sono Leve" />
        </>
      }
      sections={[
        {
          id: 'perguntas-frequentes',
          title: 'Perguntas frequentes',
          faq: [
            {
              id: 'conta',
              q: 'Preciso criar uma conta?',
              a: <p>Não. O Sono Leve não tem login nem cadastro e funciona offline.</p>,
            },
            {
              id: 'onde-ficam-os-dados',
              q: 'Onde ficam os dados do meu bebê?',
              a: (
                <p>
                  Num banco de dados local, dentro do armazenamento privado do app no seu celular.
                  Nada vai pra nuvem nem é compartilhado com terceiros. Detalhes na{' '}
                  <a href="/produtos/sono-leve/privacidade">Política de privacidade</a>.
                </p>
              ),
            },
            {
              id: 'backup',
              q: 'Tem backup? O que acontece se eu apagar o app?',
              a: (
                <>
                  <p>
                    O Sono Leve ainda não tem backup, exportação ou sincronização próprios. Como
                    tudo é local, <strong>se você apagar o app, os dados são apagados junto</strong>{' '}
                    e não temos como recuperá-los — não existe cópia em lugar nenhum fora do seu
                    aparelho.
                  </p>
                  <p>
                    Ao trocar de celular restaurando um backup completo do aparelho (iCloud ou
                    computador), os dados de apps normalmente vão junto, mas isso depende das suas
                    configurações de backup e não é garantido pelo app.
                  </p>
                </>
              ),
            },
            {
              id: 'dois-aparelhos',
              q: 'Dá pra usar no celular do pai e da mãe ao mesmo tempo?',
              a: (
                <p>
                  Hoje não há sincronização entre aparelhos: cada celular guarda os próprios
                  registros. O ideal é registrar as noites sempre no mesmo aparelho.
                </p>
              ),
            },
            {
              id: 'apagar-dados',
              q: 'Como apago todos os dados?',
              a: (
                <p>
                  Em <strong>Ajustes → Apagar todos os dados</strong>. O app pede duas confirmações
                  e apaga bebê, método, sessões e mamadas — não dá pra desfazer. Desinstalar o app
                  também apaga tudo.
                </p>
              ),
            },
            {
              id: 'trocar-metodo',
              q: 'Como recomeço o treino ou troco de método?',
              a: (
                <p>
                  Em <strong>Ajustes → Método de treino</strong>, escolha outro método. A progressão
                  volta pro dia 1; o histórico das noites anteriores continua salvo.
                </p>
              ),
            },
            {
              id: 'aviso-de-mamada',
              q: 'Não estou recebendo o aviso de mamada.',
              a: (
                <p>
                  O aviso é calculado a partir da última mamada registrada e do intervalo definido
                  em <strong>Ajustes → Mamada</strong>. Confira se os dois estão preenchidos e se as
                  notificações do Sono Leve estão permitidas nos ajustes do sistema (no iPhone:{' '}
                  <strong>Ajustes → Sono Leve → Notificações</strong>). Modos de Foco também podem
                  silenciar os avisos.
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
                <a href="/produtos/sono-leve/privacidade">Política de privacidade</a>
              </li>
              <li>
                <a href="/produtos/sono-leve/termos">Termos de uso</a>
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
