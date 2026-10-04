import type { Metadata } from 'next';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Política de Privacidade — Sono Leve';
const pageDescription =
  'O Sono Leve não tem conta, servidor nem analytics. Os dados do bebê não saem do seu celular. Esta política descreve em linguagem direta como tratamos privacidade.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/sono-leve/privacidade' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/sono-leve/privacidade',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function SonoLevePrivacidadePage() {
  return (
    <LegalPage
      product="sono-leve"
      doc="privacidade"
      title={
        <>
          Política de <Hl>privacidade.</Hl>
        </>
      }
      intro="Resumo: nada sai do seu celular."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Sono Leve é um aplicativo da AraLabs que auxilia famílias no treino de sono do bebê pelo
          método Ferber e variações. <strong>Tudo funciona offline.</strong> Esta política descreve
          em linguagem direta como tratamos privacidade.
        </p>
      }
      summary={[
        {
          label: 'Que dados',
          text: (
            <>
              Nome, data de nascimento, gênero e foto opcional do bebê, método de treino, sessões,
              check-ins, mamadas, configurações e notas opcionais.
            </>
          ),
        },
        {
          label: 'Onde ficam',
          text: (
            <>
              <strong>Só no seu celular</strong>, num banco SQLite local. Sem servidor, sem cloud,
              sem analytics. A consulta de atualizações da Expo não leva nenhum dado do bebê ou da
              família.
            </>
          ),
        },
        {
          label: 'Como apagar',
          text: (
            <>
              Em <strong>Ajustes → Apagar todos os dados</strong>, ou desinstalando o app.
            </>
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
              <strong>Nada sai do seu celular.</strong> O Sono Leve não tem servidor, não tem cloud,
              não tem analytics. Tudo o que você registra fica num banco SQLite local, dentro do
              sandbox do app no seu iPhone ou Android — nem outros apps do mesmo aparelho conseguem
              acessar.
            </p>
          ),
        },
        {
          id: 'o-que-armazena',
          n: '3',
          title: 'O que o app armazena (localmente)',
          body: (
            <>
              <p>Os seguintes dados ficam apenas no seu dispositivo:</p>
              <ul>
                <li>
                  <strong>Nome, data de nascimento, gênero e foto opcional do bebê</strong> — usados
                  pra personalizar o app e calcular a idade. Nunca saem do aparelho.
                </li>
                <li>
                  <strong>Método de treino</strong> escolhido e o dia atual da progressão.
                </li>
                <li>
                  <strong>Sessões de sono e episódios</strong> — horários de início, adormecimento,
                  despertares e encerramento.
                </li>
                <li>
                  <strong>Check-ins</strong> — intervalos esperados, duração no quarto e resultado.
                </li>
                <li>
                  <strong>Mamadas</strong> — data e hora.
                </li>
                <li>
                  <strong>Configurações</strong> — intervalo de mamada, ritual pré-sono e idioma.
                </li>
                <li>
                  <strong>Notas opcionais</strong> que você digitar.
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
              <li>Não envia esses dados pra nuvem ou servidor nosso.</li>
              <li>Não há servidor da AraLabs guardando dados do bebê ou da família.</li>
              <li>Não há analytics de uso (Google Analytics, Mixpanel, Amplitude, etc).</li>
              <li>Não há rastreamento de comportamento nem anúncios.</li>
              <li>Não compartilha com terceiros — Apple, Google, parceiros, ninguém.</li>
              <li>Não pede email, telefone ou qualquer identificador.</li>
              <li>
                Não usa microfone nem câmera — não há detecção automática de choro nem gravação de
                áudio.
              </li>
              <li>Não acessa contatos, localização ou outras informações do aparelho.</li>
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
              <ul>
                <li>
                  <strong>Notificações</strong> — pra avisar a hora da próxima mamada, quando você
                  habilita esse lembrete. O agendamento é todo local, pelo sistema de notificações
                  do iOS/Android. Não há servidor envolvido.
                </li>
                <li>
                  <strong>Fotos</strong> — só se você quiser adicionar uma foto do bebê. A imagem
                  escolhida fica no aparelho.
                </li>
              </ul>
              <p>Você pode negar ou revogar qualquer permissão nos ajustes do sistema.</p>
            </>
          ),
        },
        {
          id: 'atualizacoes',
          n: '6',
          title: 'Atualizações do app',
          body: (
            <p>
              Ao abrir, o app pode consultar o serviço de atualizações da Expo (plataforma usada pra
              construir o Sono Leve) pra baixar correções. Essa consulta envia apenas informações
              técnicas — plataforma, versão do app e um identificador técnico de instalação gerado
              aleatoriamente — e <strong>nenhum dado do bebê ou da família</strong>. Como em
              qualquer acesso à internet, o serviço também recebe o endereço IP da conexão.
            </p>
          ),
        },
        {
          id: 'relatorios-de-erro',
          n: '7',
          title: 'Relatórios de erro',
          body: (
            <p>
              Atualmente o Sono Leve <strong>não usa</strong> nenhuma ferramenta de captura de erros
              ou crashes. Se uma versão futura adicionar (ex: Sentry), ela não incluirá dados do
              bebê, esta política será atualizada e você poderá optar por sair.
            </p>
          ),
        },
        {
          id: 'como-apagar',
          n: '8',
          title: 'Como apagar os dados',
          body: (
            <>
              <p>Você tem controle total. Pra apagar tudo, basta:</p>
              <ul>
                <li>
                  Ir em <strong>Ajustes → Apagar todos os dados</strong> dentro do app (com
                  confirmação de 2 níveis). Bebê, método, sessões e mamadas são apagados.
                </li>
                <li>Ou simplesmente desinstalar o app — os dados somem junto.</li>
              </ul>
              <p>
                Não existe processo de exclusão remota porque não há cópia dos seus dados em lugar
                algum fora do seu dispositivo.
              </p>
            </>
          ),
        },
        {
          id: 'lgpd',
          n: '9',
          title: 'LGPD',
          body: (
            <>
              <p>
                Como nada sai do seu celular, a AraLabs{' '}
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
          n: '10',
          title: 'Crianças',
          body: (
            <p>
              O Sono Leve é usado por adultos — mães, pais e cuidadores. Os dados inseridos
              referem-se a um bebê (nome, data de nascimento, foto opcional, rotina de sono), mas{' '}
              <strong>nunca saem do dispositivo do adulto</strong>. Mesmo o nome do bebê fica apenas
              local. Não há perfil do bebê na nuvem nem possibilidade de comunicação com terceiros
              através do app.
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '11',
          title: 'Mudanças nesta política',
          body: (
            <p>
              Se uma versão futura do app passar a coletar algum dado (ex: conta compartilhada entre
              pai e mãe com sincronização), esta política será atualizada e o app avisará você,
              pedindo consentimento explícito antes de qualquer dado sair do seu dispositivo.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '12',
          title: 'Contato',
          body: (
            <p>
              Dúvidas, sugestões ou denúncias:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja também a
              página de <a href="/produtos/sono-leve/suporte">suporte</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
