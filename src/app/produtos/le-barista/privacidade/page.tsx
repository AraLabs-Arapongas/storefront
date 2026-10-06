import type { Metadata } from 'next';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Política de Privacidade — Le Barista';
const pageDescription =
  'O Le Barista não tem conta, servidor, analytics nem acesso à internet. Seus dados ficam no seu iPhone. Esta política descreve em linguagem direta como tratamos privacidade.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/le-barista/privacidade' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/le-barista/privacidade',
    type: 'website',
  },
};

const VIGENCIA = '6 de outubro de 2026';

export default function LeBaristaPrivacidadePage() {
  return (
    <LegalPage
      product="le-barista"
      doc="privacidade"
      title={
        <>
          Política de <Hl>privacidade.</Hl>
        </>
      }
      intro="Resumo: seus dados ficam no seu iPhone, e o app não usa a internet."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Le Barista é um aplicativo da AraLabs que guia, passo a passo, quem faz café em casa —
          do espresso ao coado. <strong>Não tem conta, não tem login, não tem servidor.</strong>{' '}
          Esta política descreve em linguagem direta como tratamos privacidade.
        </p>
      }
      summary={[
        {
          label: 'Que dados',
          text: (
            <>
              Equipamento, cafés cadastrados, histórico de shots e preparos, receitas, favoritos e o
              perfil opcional.
            </>
          ),
        },
        {
          label: 'Onde ficam',
          text: (
            <>
              <strong>Num banco de dados local (SQLite)</strong>, no seu aparelho. O app não faz
              nenhuma requisição de rede: nada sai do iPhone.
            </>
          ),
        },
        {
          label: 'Como apagar',
          text: (
            <>Desinstalando o app. Os dados são apagados junto e não existe cópia em outro lugar.</>
          ),
        },
      ]}
      sections={[
        {
          id: 'quem-somos',
          n: '1',
          title: 'Quem somos',
          body: (
            <p>
              <strong>Controlador dos dados:</strong> Thiago Tavares Consulting Ltda. - ME (nome
              fantasia <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>, com sede
              na Rua Guaraúna, 288, Jardim Primavera, Arapongas/PR, CEP 86702-480.
              <br />
              <strong>Encarregado / contato de privacidade:</strong>{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          ),
        },
        {
          id: 'resumo',
          n: '2',
          title: 'Resumo em 1 linha',
          body: (
            <p>
              <strong>O que você registra fica no seu iPhone, e nada sai dele.</strong> O Le Barista
              não tem servidor da AraLabs, não tem cloud, não tem analytics, não tem anúncios e não
              faz nenhuma requisição de rede.
            </p>
          ),
        },
        {
          id: 'o-que-armazena',
          n: '3',
          title: 'O que o app armazena (localmente)',
          body: (
            <>
              <p>
                Os seguintes dados ficam apenas num banco de dados local (SQLite), dentro do sandbox
                do app no seu dispositivo:
              </p>
              <ul>
                <li>
                  <strong>Equipamento</strong> — máquina, tamanho do filtro, se você tem balança,
                  moedor regulável, WDT e tela de dispersão.
                </li>
                <li>
                  <strong>Cafés cadastrados</strong> — nome, torrefação, torra, data de torra,
                  processo e altitude.
                </li>
                <li>
                  <strong>Histórico de shots e preparos</strong> — tempo, dose, rendimento, moagem,
                  sabor e corpo de cada shot, e os preparos de coados e outras bebidas.
                </li>
                <li>
                  <strong>Receitas e favoritos</strong> — as receitas salvas e os preparos que você
                  marcou como favoritos.
                </li>
                <li>
                  <strong>Perfil (opcional)</strong> — nome, cor do avatar, nível e bebida favorita.
                </li>
                <li>
                  <strong>Estatísticas</strong> — espressos tirados, cafés no ponto, tempo médio,
                  sequência de dias. Tudo calculado no próprio aparelho a partir do seu histórico.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'o-que-nao-faz',
          n: '4',
          title: 'O que o app NÃO faz',
          body: (
            <ul>
              <li>Não envia seus dados pra nuvem ou servidor nosso.</li>
              <li>Não faz nenhuma requisição de rede — funciona inteiro sem internet.</li>
              <li>Não há analytics de uso (Google Analytics, Mixpanel, Amplitude, etc).</li>
              <li>
                Não há serviço de relatório de erros (crash reporting) nem de atualização remota do
                app.
              </li>
              <li>Não há anúncios nem rastreamento entre apps.</li>
              <li>Não há SDKs de terceiros que coletem dados.</li>
              <li>Não compartilha seus dados com terceiros.</li>
              <li>Não pede email, telefone ou qualquer identificador.</li>
              <li>Não há login. Não há conta. Não há cadastro.</li>
            </ul>
          ),
        },
        {
          id: 'permissoes',
          n: '5',
          title: 'Permissões do aparelho',
          body: (
            <>
              <p>
                O Le Barista <strong>não pede nenhuma permissão</strong>: não acessa câmera, fotos,
                localização, contatos, microfone nem notificações.
              </p>
              <p>
                O app usa a vibração (háptico) do iPhone e mantém a tela acesa enquanto um timer
                está rodando. Nenhum dos dois exige permissão nem envolve coleta de dados.
              </p>
            </>
          ),
        },
        {
          id: 'como-apagar',
          n: '6',
          title: 'Como apagar os dados',
          body: (
            <>
              <p>
                Pra apagar tudo, basta <strong>desinstalar o app</strong>: o banco de dados local é
                apagado junto.
              </p>
              <p>
                Não existe processo de exclusão remota porque não há cópia dos seus dados em lugar
                algum fora do seu dispositivo.
              </p>
            </>
          ),
        },
        {
          id: 'app-store',
          n: '7',
          title: 'Rótulo de privacidade da App Store',
          body: (
            <p>
              Na App Store, o Le Barista declara <strong>“Dados não coletados”</strong>. É
              exatamente o que esta política descreve: o desenvolvedor não coleta nenhum dado do
              app.
            </p>
          ),
        },
        {
          id: 'lgpd',
          n: '8',
          title: 'LGPD',
          body: (
            <>
              <p>
                Como seus dados não saem do seu celular, a AraLabs{' '}
                <strong>não realiza tratamento de dados pessoais</strong> nos termos da Lei Geral de
                Proteção de Dados (Lei 13.709/2018). Você é o controlador exclusivo dos seus
                próprios dados.
              </p>
              <p>
                Mesmo assim, em caso de dúvida sobre privacidade ou se você acreditar que essa
                política precisa de mais clareza, escreva pra{' '}
                <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
              </p>
            </>
          ),
        },
        {
          id: 'criancas',
          n: '9',
          title: 'Crianças',
          body: (
            <p>
              O Le Barista é um app sobre preparo de café, feito pra público adulto, e não é
              direcionado a crianças menores de 13 anos. De todo modo, o app não coleta dados de
              ninguém: o que é registrado fica no aparelho de quem usa.
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '10',
          title: 'Mudanças nesta política',
          body: (
            <p>
              Se uma versão futura do app passar a coletar algum dado (ex: backup ou sincronização
              opcional entre aparelhos), esta política será atualizada e o app avisará você, pedindo
              consentimento explícito antes de qualquer dado seu sair do dispositivo.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '11',
          title: 'Contato',
          body: (
            <p>
              Dúvidas, sugestões ou denúncias:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja também a
              página de <a href="/produtos/le-barista/suporte">suporte</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
