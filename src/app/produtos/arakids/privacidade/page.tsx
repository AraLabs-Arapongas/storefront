import type { Metadata } from 'next';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Política de Privacidade — Ara Kids (app)';
const pageDescription =
  'O app Ara Kids não tem conta, servidor, anúncios nem medição de uso. O progresso da criança fica só no aparelho. Esta política descreve em linguagem direta como tratamos privacidade.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/arakids/privacidade' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/arakids/privacidade',
    type: 'website',
  },
};

const VIGENCIA = '4 de outubro de 2026';

export default function ArakidsPrivacidadePage() {
  return (
    <LegalPage
      product="arakids"
      doc="privacidade"
      title={
        <>
          Política de <Hl>privacidade.</Hl>
        </>
      }
      intro="Resumo: nada sai do aparelho."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Ara Kids é um aplicativo da AraLabs (iOS e Android) com jogos educativos para crianças
          de 2 a 10 anos. <strong>Tudo funciona offline.</strong> Esta política vale para o app; o
          site do Ara Kids tem a própria página de privacidade.
        </p>
      }
      summary={[
        {
          label: 'Que dados',
          text: (
            <>
              Apelido, idade, figura e voz escolhidos para cada criança, fases vencidas, acertos e
              tempo de jogo, limite de tempo por dia, PIN dos adultos e pinturas do jogo de colorir.
            </>
          ),
        },
        {
          label: 'Onde ficam',
          text: (
            <>
              <strong>Só no aparelho</strong>, num banco de dados local do app. Sem servidor, sem
              conta, sem analytics, sem anúncios.
            </>
          ),
        },
        {
          label: 'Como apagar',
          text: <>Desinstalando o app: tudo é apagado junto.</>,
        },
      ]}
      sections={[
        {
          id: 'quem-somos',
          n: '1',
          title: 'Quem somos',
          body: (
            <p>
              <strong>Responsável:</strong> Thiago Tavares Consulting Ltda. - ME (nome fantasia{' '}
              <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>, com sede na Rua
              Guaraúna, 288, Jardim Primavera, Arapongas/PR, CEP 86702-480.
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
              <strong>Nada sai do aparelho.</strong> O Ara Kids não tem servidor, não tem conta e
              não mede o uso. Tudo o que o app guarda fica num banco local, dentro do espaço privado
              do app no iPhone, iPad ou Android.
            </p>
          ),
        },
        {
          id: 'o-que-armazena',
          n: '3',
          title: 'O que o app armazena (localmente)',
          body: (
            <>
              <p>Os seguintes dados ficam apenas no aparelho:</p>
              <ul>
                <li>
                  <strong>Perfil de cada criança</strong> — apelido, idade (vira um mês e ano
                  aproximados), figura e voz escolhida. Servem para o app saber por onde começar.
                </li>
                <li>
                  <strong>Progresso</strong> — fases vencidas, a ilha da jornada, acertos, erros e
                  tempo de cada jogo. Servem para ajustar a dificuldade e montar o relatório da área
                  dos adultos.
                </li>
                <li>
                  <strong>Tempo por dia</strong> — o limite escolhido pelo adulto e o tempo já
                  jogado no dia.
                </li>
                <li>
                  <strong>PIN dos adultos</strong> — guardado só como código embaralhado (hash),
                  nunca o número em si.
                </li>
                <li>
                  <strong>Pinturas</strong> do jogo de colorir e a escolha de som.
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
              <li>Não envia dados para nuvem ou servidor nosso. Não há servidor.</li>
              <li>Não há analytics de uso nem relatórios de erro de terceiros.</li>
              <li>Não há anúncios, rastreamento nem compras dentro do app.</li>
              <li>Não compartilha nada com terceiros.</li>
              <li>Não pede nome completo, e-mail, telefone, foto ou localização.</li>
              <li>
                Não usa câmera nem microfone. As vozes que falam com a criança são gravações que já
                vêm dentro do app: ele só fala, não grava nem escuta.
              </li>
              <li>Não tem links para fora do app nem chat com outras pessoas.</li>
              <li>Não há login, conta ou cadastro.</li>
            </ul>
          ),
        },
        {
          id: 'permissoes',
          n: '5',
          title: 'Permissões do aparelho',
          body: <p>O Ara Kids não pede nenhuma permissão do aparelho.</p>,
        },
        {
          id: 'como-apagar',
          n: '6',
          title: 'Como apagar os dados',
          body: (
            <p>
              Desinstale o app: os dados somem junto. Não existe exclusão remota porque não há cópia
              dos dados fora do aparelho.
            </p>
          ),
        },
        {
          id: 'criancas',
          n: '7',
          title: 'Crianças e LGPD',
          body: (
            <>
              <p>
                O Ara Kids é feito para crianças, com um adulto por perto. Seguimos a Lei Geral de
                Proteção de Dados (Lei 13.709/2018), que pede cuidado especial com dados de crianças
                (art. 14): o melhor interesse da criança vem antes de tudo. Como nada sai do
                aparelho, a AraLabs <strong>não recebe nem trata</strong> dados das crianças.
              </p>
              <p>
                A área dos adultos (relatório, tempo por dia, perfis) fica atrás de um PIN criado
                pelo adulto.
              </p>
            </>
          ),
        },
        {
          id: 'mudancas',
          n: '8',
          title: 'Mudanças nesta política',
          body: (
            <p>
              Se uma versão futura passar a usar conta, assinatura, câmera ou enviar algum dado,
              esta política muda antes, com a data, e o app pede o consentimento do adulto antes de
              qualquer dado sair do aparelho.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '9',
          title: 'Contato',
          body: (
            <p>
              Dúvidas, sugestões ou denúncias:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja também a
              página de <a href="/produtos/arakids/suporte">suporte</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
