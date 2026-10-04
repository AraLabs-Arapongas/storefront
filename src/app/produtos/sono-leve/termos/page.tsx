import type { Metadata } from 'next';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Termos de uso — Sono Leve';
const pageDescription =
  'Termos de uso do Sono Leve. App de apoio ao treino de sono do bebê — não substitui orientação pediátrica.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/sono-leve/termos' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/sono-leve/termos',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function SonoLeveTermosPage() {
  return (
    <LegalPage
      product="sono-leve"
      doc="termos"
      title={
        <>
          Termos de <Hl>uso.</Hl>
        </>
      }
      intro="App de apoio ao treino de sono do bebê — não substitui orientação pediátrica."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Sono Leve é um aplicativo da AraLabs que auxilia famílias no treino de sono do bebê. Ao
          baixar e usar o app, você concorda com estes termos.
        </p>
      }
      summary={[
        {
          label: 'Não é conselho médico',
          text: (
            <>
              Não substitui o pediatra nem a supervisão direta do bebê.{' '}
              <strong>Em emergência, ligue 192 (SAMU).</strong>
            </>
          ),
        },
        {
          label: 'Sem promessa',
          text: (
            <>
              O app não promete que seu bebê vai dormir melhor. Interromper o treino a qualquer
              momento é sempre uma opção válida.
            </>
          ),
        },
        {
          label: 'Seus dados',
          text: <>Sem conta. Nada é enviado pra nuvem; se você apagar o app, os dados somem.</>,
        },
      ]}
      sections={[
        {
          id: 'sobre',
          n: '1',
          title: 'Sobre o Sono Leve',
          body: (
            <p>
              O Sono Leve é um app que auxilia famílias no treino de sono do bebê pelo método Ferber
              e variações. Ele oferece timer, registro de sessões, episódios noturnos e check-ins,
              registro de mamadas, histórico e dashboard.
            </p>
          ),
        },
        {
          id: 'nao-e-conselho-medico',
          n: '2',
          title: 'Não é conselho médico',
          body: (
            <>
              <p>
                <strong>
                  O Sono Leve é uma ferramenta auxiliar e não substitui a orientação do pediatra
                </strong>
                , de uma consultora de sono certificada ou de qualquer outro profissional de saúde.
                Também não substitui a supervisão direta do bebê:{' '}
                <strong>sempre supervisione o bebê de perto</strong>.
              </p>
              <ul>
                <li>O Sono Leve não diagnostica nenhuma condição.</li>
                <li>O Sono Leve não trata nem previne problemas de saúde do bebê.</li>
                <li>
                  O método Ferber pressupõe um bebê saudável. Antes de começar um treino de sono,
                  converse com o pediatra.
                </li>
                <li>
                  Em qualquer dúvida ou sinal de alerta, pegue o bebê no colo e procure um
                  profissional de saúde.
                </li>
                <li>
                  <strong>Em emergência, ligue 192 (SAMU)</strong> ou vá direto ao pronto-socorro
                  pediátrico.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'risco',
          n: '3',
          title: 'Uso por sua conta e risco',
          body: (
            <p>
              O treino de sono é uma decisão da família. Os métodos suportados pelo app (como Ferber
              clássico e suave) são amplamente discutidos na literatura pediátrica, mas{' '}
              <strong>não são adequados a todos os bebês</strong>. Avalie sempre os sinais do seu
              bebê — e o seu emocional. Interromper o treino a qualquer momento é sempre uma opção
              válida.
            </p>
          ),
        },
        {
          id: 'sem-garantias',
          n: '4',
          title: 'Sem garantias de resultado',
          body: (
            <p>
              O app não promete que seu bebê vai dormir melhor, mais rápido, ou em qualquer prazo. O
              sucesso depende de muitas variáveis fora do controle do app. Intervalos, lembretes e
              estatísticas são apoio à organização da família, não recomendação clínica.
            </p>
          ),
        },
        {
          id: 'privacidade',
          n: '5',
          title: 'Privacidade',
          body: (
            <p>
              Nada do que você registra no app é enviado pra nuvem, servidor ou terceiros. Se você
              apagar o app ou usar “Apagar todos os dados”, os dados somem. Detalhes em{' '}
              <a href="/produtos/sono-leve/privacidade">Política de privacidade</a>.
            </p>
          ),
        },
        {
          id: 'conta',
          n: '6',
          title: 'Conta',
          body: (
            <p>Não há conta no Sono Leve. Você não precisa fazer login. O app funciona offline.</p>
          ),
        },
        {
          id: 'responsabilidade',
          n: '7',
          title: 'Limitação de responsabilidade',
          body: (
            <p>
              O Sono Leve é fornecido “como está”. A AraLabs faz o melhor que pode pra que o app
              funcione bem, mas não pode garantir que será 100% livre de bugs — por isso{' '}
              <strong>
                nunca dependa só do app (timer, vibração ou notificação) pra cuidar do bebê
              </strong>
              . A AraLabs não se responsabiliza por decisões tomadas com base no app nem por perda
              de dados locais (ao desinstalar o app ou trocar de aparelho, por exemplo).
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '8',
          title: 'Mudanças nestes termos',
          body: (
            <p>
              Estes termos podem mudar em versões futuras do app. Em caso de mudança relevante,
              avisaremos na primeira vez que você abrir o app após a atualização.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '9',
          title: 'Contato',
          body: (
            <p>
              Dúvidas: <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja
              também a página de <a href="/produtos/sono-leve/suporte">suporte</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
