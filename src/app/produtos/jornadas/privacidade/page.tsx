import type { Metadata } from 'next';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Política de Privacidade — Jornadas';
const pageDescription =
  'O Jornadas não tem conta, servidor nem analytics. Seus dados ficam no seu celular. Esta política descreve em linguagem direta como tratamos privacidade.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/jornadas/privacidade' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/jornadas/privacidade',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function JornadasPrivacidadePage() {
  return (
    <LegalPage
      product="jornadas"
      doc="privacidade"
      title={
        <>
          Política de <Hl>privacidade.</Hl>
        </>
      }
      intro="Resumo: seus dados ficam no seu celular."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Jornadas é um aplicativo da AraLabs pra acompanhar metas pessoais — ler um livro, fazer
          um curso, criar um hábito.{' '}
          <strong>Não tem conta, não tem login, não tem servidor.</strong> Esta política descreve em
          linguagem direta como tratamos privacidade.
        </p>
      }
      summary={[
        {
          label: 'Que dados',
          text: (
            <>Perfil, jornadas, sessões e check-ins, estatísticas, preferências e fotos de capa.</>
          ),
        },
        {
          label: 'Onde ficam',
          text: (
            <>
              <strong>No armazenamento interno do app</strong>, no seu aparelho. Só o texto da busca
              de livros (ou o ISBN escaneado) sai, para o Google Books e a Open Library.
            </>
          ),
        },
        {
          label: 'Como apagar',
          text: (
            <>
              Em <strong>Configurações → Apagar dados</strong>, ou desinstalando o app.
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
              <strong>O que você registra fica no seu celular.</strong> O Jornadas não tem servidor
              da AraLabs, não tem cloud, não tem analytics e não tem anúncios. A única coisa que sai
              do aparelho é o texto que você digita na busca de livros (ou o ISBN escaneado), pra
              buscar título, autor e capa — veja a seção 5.
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
                Os seguintes dados ficam apenas no armazenamento interno do app, dentro do sandbox
                do seu dispositivo:
              </p>
              <ul>
                <li>
                  <strong>Perfil</strong> — nome, frase de motivação e foto de perfil opcional.
                </li>
                <li>
                  <strong>Jornadas</strong> — título, tipo (livro, curso, hábito etc.), autor, capa,
                  meta diária, total, progresso, motivação e horário de lembrete.
                </li>
                <li>
                  <strong>Sessões e check-ins</strong> — data, duração, avanço e notas opcionais que
                  você digitar.
                </li>
                <li>
                  <strong>Estatísticas e conquistas</strong> — sequência de dias, meta semanal,
                  minutos totais. Tudo calculado no próprio aparelho a partir das suas sessões.
                </li>
                <li>
                  <strong>Preferências</strong> — tom das mensagens de incentivo e configuração dos
                  lembretes.
                </li>
                <li>
                  <strong>Fotos de capa</strong> que você tira ou escolhe pra uma jornada — copiadas
                  pra pasta privada do app.
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
              <li>Não há servidor da AraLabs envolvido em momento algum.</li>
              <li>Não há analytics de uso (Google Analytics, Mixpanel, Amplitude, etc).</li>
              <li>Não há anúncios nem rastreamento entre apps.</li>
              <li>Não compartilha seus dados com terceiros.</li>
              <li>Não pede email, telefone ou qualquer identificador.</li>
              <li>
                Não acessa contatos, localização, microfone ou outras informações do aparelho.
              </li>
              <li>Não há login. Não há conta. Não há cadastro.</li>
            </ul>
          ),
        },
        {
          id: 'busca-de-livros',
          n: '5',
          title: 'Busca de livros (Google Books e Open Library)',
          body: (
            <>
              <p>
                Quando você busca um livro pelo título, autor ou ISBN — digitando ou escaneando o
                código de barras —, o app envia <strong>apenas o texto da busca ou o ISBN</strong>{' '}
                pra dois serviços públicos de catálogo de livros:
              </p>
              <ul>
                <li>
                  <strong>Google Books API</strong> (Google), e
                </li>
                <li>
                  <strong>Open Library</strong> (Internet Archive).
                </li>
              </ul>
              <p>
                Eles devolvem título, autor, número de páginas e o endereço da capa. As capas são
                carregadas desses mesmos serviços. Nenhum dado seu (nome, jornadas, sessões, fotos)
                é enviado junto. Como em qualquer acesso à internet, esses serviços recebem o
                endereço IP e informações técnicas da conexão, e tratam esses dados conforme as
                próprias políticas — por exemplo, a{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade do Google
                </a>
                .
              </p>
              <p>
                Se você não usar a busca (adicionando o livro manualmente ou criando outro tipo de
                jornada), nada sai do aparelho.
              </p>
            </>
          ),
        },
        {
          id: 'permissoes',
          n: '6',
          title: 'Permissões do aparelho',
          body: (
            <>
              <p>O app só pede permissão quando você usa o recurso correspondente:</p>
              <ul>
                <li>
                  <strong>Câmera</strong> — pra escanear o código de barras (ISBN) de um livro e, se
                  você quiser, tirar a foto de capa de uma jornada. Do escaneamento, só o número do
                  ISBN é usado; nenhuma imagem é guardada ou enviada. A foto de capa fica só no
                  aparelho.
                </li>
                <li>
                  <strong>Fotos</strong> — pra escolher a capa de uma jornada ou sua foto de perfil.
                  A imagem escolhida fica só no aparelho.
                </li>
                <li>
                  <strong>Notificações</strong> — pra lembretes que você configura. São agendados
                  localmente pelo sistema do iPhone; não há servidor de notificações.
                </li>
              </ul>
              <p>Você pode negar ou revogar qualquer permissão nos Ajustes do iPhone.</p>
            </>
          ),
        },
        {
          id: 'como-apagar',
          n: '7',
          title: 'Como apagar os dados',
          body: (
            <>
              <p>Você tem controle total. Pra apagar tudo, basta:</p>
              <ul>
                <li>
                  Ir em <strong>Configurações → Apagar dados</strong> dentro do app. Jornadas,
                  sessões, perfil e preferências voltam ao estado inicial.
                </li>
                <li>
                  Ou desinstalar o app — os dados somem junto, incluindo as fotos de capa salvas.
                </li>
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
              O Jornadas é feito pra público geral e não é direcionado a crianças. De todo modo, o
              app não coleta dados de ninguém: o que é registrado fica no aparelho de quem usa.
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
              página de <a href="/produtos/jornadas/suporte">suporte</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
