import type { Metadata } from 'next';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Política de Privacidade — Lumo';
const pageDescription =
  'O Lumo não coleta dados. Nada sai do seu celular ou tablet. Esta política descreve em linguagem direta como tratamos privacidade.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/lumo/privacidade' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/lumo/privacidade',
    type: 'website',
  },
};

const VIGENCIA = '28 de maio de 2026';

export default function LumoPrivacidadePage() {
  return (
    <LegalPage
      product="lumo"
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
          O Lumo é um aplicativo da AraLabs de comunicação visual e rotina pra famílias com crianças
          não-verbais. <strong>Tudo funciona offline.</strong> Esta política descreve em linguagem
          direta como tratamos privacidade.
        </p>
      }
      summary={[
        {
          label: 'Que dados',
          text: (
            <>
              O perfil da criança (nome, foto e data de nascimento opcionais), idioma e voz, cards,
              rotinas, frases recentes, PIN do modo criança e configurações.
            </>
          ),
        },
        {
          label: 'Onde ficam',
          text: (
            <>
              <strong>Só no seu dispositivo</strong>, num banco SQLite local. Sem servidor, sem
              cloud, sem analytics, sem login.
            </>
          ),
        },
        {
          label: 'Como apagar',
          text: (
            <>
              Em <strong>Configurações → Apagar todos os dados</strong>, ou desinstalando o app.
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
              <strong>Nada sai do seu celular ou tablet.</strong> O Lumo não tem servidor, não tem
              cloud, não tem analytics. Tudo o que você registra fica num banco SQLite local, dentro
              do sandbox do app no seu iPhone, iPad ou Android.
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
                  <strong>Nome, foto opcional e data de nascimento opcional da criança</strong> —
                  usados pra personalizar o perfil. Foto e nome nunca saem do device.
                </li>
                <li>
                  <strong>Idioma e voz selecionada</strong> por perfil.
                </li>
                <li>
                  <strong>Cards de comunicação</strong> — pictogramas ARASAAC pré-existentes e cards
                  customizados pela família (com foto, texto ou emoji).
                </li>
                <li>
                  <strong>Rotinas visuais</strong> e itens de rotina.
                </li>
                <li>
                  <strong>Frequência de uso de cards</strong> — pra ordenar “mais usados”
                  automaticamente. Contagem fica no device.
                </li>
                <li>
                  <strong>Frases compostas</strong> recentes pra histórico local.
                </li>
                <li>
                  <strong>PIN de modo criança</strong> (se configurado).
                </li>
                <li>
                  <strong>Configurações</strong> — tamanho de UI, categorias visíveis, voz
                  preferida.
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
              <li>Não há servidor da AraLabs envolvido em momento algum.</li>
              <li>Não há analytics de uso (Google Analytics, Mixpanel, Amplitude, etc).</li>
              <li>Não há rastreamento de comportamento.</li>
              <li>Não compartilha com terceiros — Apple, Google, parceiros, ninguém.</li>
              <li>Não pede email, telefone ou qualquer identificador.</li>
              <li>
                Não acessa câmera, microfone ou galeria sem permissão explícita pra tirar
                foto/escolher imagem de um card específico.
              </li>
              <li>Não acessa contatos, localização ou outras informações do device.</li>
              <li>Não há login. Não há conta. Não há cadastro.</li>
            </ul>
          ),
        },
        {
          id: 'sintese-de-voz',
          n: '5',
          title: 'Síntese de voz (TTS)',
          body: (
            <p>
              Quando você toca um card e o app fala em voz alta, a síntese é feita pelo próprio
              sistema operacional (iOS / Android) localmente. Nenhum áudio é enviado pra servidor —
              nem nosso, nem da Apple ou Google.
            </p>
          ),
        },
        {
          id: 'arasaac',
          n: '6',
          title: 'Pictogramas ARASAAC',
          body: (
            <>
              <p>
                O Lumo inclui os 13.798 pictogramas do ARASAAC bundleds no app (bibliotecas do
                Centro Aragonés de la Comunicación Aumentativa y Alternativa). Os pictogramas são
                exibidos localmente — nenhuma chamada a servidor ARASAAC é feita durante o uso.
              </p>
              <p>
                Detalhes de licença em <a href="/produtos/lumo/creditos">Créditos e licenças</a>.
              </p>
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
                  Ir em <strong>Configurações → Apagar todos os dados</strong> dentro do app (com
                  confirmação de 2 níveis).
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
          n: '8',
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
          n: '9',
          title: 'Crianças',
          body: (
            <p>
              O Lumo é usado por adultos (pais, cuidadores, terapeutas, professores) com crianças.
              Os dados inseridos referem-se a uma criança (nome, foto opcional, frequência de
              cards), mas <strong>nunca saem do dispositivo do adulto</strong>. Não há perfil de
              criança ativo na nuvem, não há conta de menor de idade, não há possibilidade de
              comunicação com terceiros através do app.
            </p>
          ),
        },
        {
          id: 'modo-crianca',
          n: '10',
          title: 'Modo criança',
          body: (
            <p>
              O Modo Criança ativa tela cheia com apenas cards de comunicação, sem acesso a
              configurações ou edição. A saída é protegida por PIN configurado pelo adulto. Isso
              impede que a criança altere configurações ou desinstale o app acidentalmente — mas
              nenhuma dessas interações gera coleta de dados.
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '11',
          title: 'Mudanças nesta política',
          body: (
            <p>
              Se uma versão futura do app passar a coletar algum dado (ex: opcionalmente sincronizar
              entre dispositivos da família via cloud), esta política será atualizada e o app
              avisará você na próxima abertura, pedindo consentimento explícito antes de qualquer
              coisa sair do seu dispositivo.
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
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
