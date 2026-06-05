import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

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
    <>
      <PageHero
        eyebrow="Lumo · Privacidade"
        title={
          <>
            Política de{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">privacidade</span>.
          </>
        }
        description={`Em vigor desde ${VIGENCIA}. Resumo: nada sai do seu celular.`}
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              O Lumo é um aplicativo da AraLabs de comunicação visual e rotina
              pra famílias com crianças não-verbais. <strong>Tudo funciona offline.</strong>
              Esta política descreve em linguagem direta como tratamos privacidade.
            </p>

            <h2>1. Quem somos</h2>
            <p>
              <strong>Controlador dos dados:</strong> Thiago Tavares Consulting Ltda. - ME
              (nome fantasia <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>,
              com sede na Rua Guaraúna, 288, Jardim Primavera, Arapongas/PR,
              CEP 86702-480.
              <br />
              <strong>Encarregado / contato de privacidade:</strong>{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>2. Resumo em 1 linha</h2>
            <p>
              <strong>Nada sai do seu celular ou tablet.</strong> O Lumo não tem
              servidor, não tem cloud, não tem analytics. Tudo o que você
              registra fica num banco SQLite local, dentro do sandbox do app no
              seu iPhone, iPad ou Android.
            </p>

            <h2>3. O que o app armazena (localmente)</h2>
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
                <strong>Cards de comunicação</strong> — pictogramas ARASAAC pré-existentes
                e cards customizados pela família (com foto, texto ou emoji).
              </li>
              <li>
                <strong>Rotinas visuais</strong> e itens de rotina.
              </li>
              <li>
                <strong>Frequência de uso de cards</strong> — pra ordenar
                "mais usados" automaticamente. Contagem fica no device.
              </li>
              <li>
                <strong>Frases compostas</strong> recentes pra histórico local.
              </li>
              <li>
                <strong>PIN de modo criança</strong> (se configurado).
              </li>
              <li>
                <strong>Configurações</strong> — tamanho de UI, categorias visíveis,
                voz preferida.
              </li>
            </ul>

            <h2>4. O que o app NÃO faz</h2>
            <ul>
              <li>Não envia esses dados pra nuvem ou servidor nosso.</li>
              <li>Não há servidor da AraLabs envolvido em momento algum.</li>
              <li>Não há analytics de uso (Google Analytics, Mixpanel, Amplitude, etc).</li>
              <li>Não há rastreamento de comportamento.</li>
              <li>Não compartilha com terceiros — Apple, Google, parceiros, ninguém.</li>
              <li>Não pede email, telefone ou qualquer identificador.</li>
              <li>
                Não acessa câmera, microfone ou galeria sem permissão explícita pra
                tirar foto/escolher imagem de um card específico.
              </li>
              <li>Não acessa contatos, localização ou outras informações do device.</li>
              <li>Não há login. Não há conta. Não há cadastro.</li>
            </ul>

            <h2>5. Síntese de voz (TTS)</h2>
            <p>
              Quando você toca um card e o app fala em voz alta, a síntese é
              feita pelo próprio sistema operacional (iOS / Android) localmente.
              Nenhum áudio é enviado pra servidor — nem nosso, nem da Apple ou
              Google.
            </p>

            <h2>6. Pictogramas ARASAAC</h2>
            <p>
              O Lumo inclui os 13.798 pictogramas do ARASAAC bundleds no app
              (bibliotecas do Centro Aragonés de la Comunicación Aumentativa
              y Alternativa). Os pictogramas são exibidos localmente — nenhuma
              chamada a servidor ARASAAC é feita durante o uso.
            </p>
            <p>
              Detalhes de licença em{' '}
              <a href="/produtos/lumo/creditos">Créditos e licenças</a>.
            </p>

            <h2>7. Como apagar os dados</h2>
            <p>Você tem controle total. Pra apagar tudo, basta:</p>
            <ul>
              <li>
                Ir em <strong>Configurações → Apagar todos os dados</strong> dentro do
                app (com confirmação de 2 níveis).
              </li>
              <li>Ou simplesmente desinstalar o app — os dados somem junto.</li>
            </ul>
            <p>
              Não existe processo de exclusão remota porque não há cópia dos
              seus dados em lugar algum fora do seu dispositivo.
            </p>

            <h2>8. LGPD</h2>
            <p>
              Como nada sai do seu celular, a AraLabs{' '}
              <strong>não realiza tratamento de dados pessoais</strong> nos
              termos da Lei Geral de Proteção de Dados (Lei 13.709/2018). Você
              é o controlador exclusivo dos seus próprios dados.
            </p>
            <p>
              Mesmo assim, em caso de dúvida sobre privacidade ou se você
              acreditar que essa política precisa de mais clareza, escreva
              pra <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>9. Crianças</h2>
            <p>
              O Lumo é usado por adultos (pais, cuidadores, terapeutas,
              professores) com crianças. Os dados inseridos referem-se a uma
              criança (nome, foto opcional, frequência de cards), mas{' '}
              <strong>nunca saem do dispositivo do adulto</strong>. Não há
              perfil de criança ativo na nuvem, não há conta de menor de idade,
              não há possibilidade de comunicação com terceiros através do app.
            </p>

            <h2>10. Modo criança</h2>
            <p>
              O Modo Criança ativa tela cheia com apenas cards de comunicação,
              sem acesso a configurações ou edição. A saída é protegida por PIN
              configurado pelo adulto. Isso impede que a criança altere
              configurações ou desinstale o app acidentalmente — mas nenhuma
              dessas interações gera coleta de dados.
            </p>

            <h2>11. Mudanças nesta política</h2>
            <p>
              Se uma versão futura do app passar a coletar algum dado (ex:
              opcionalmente sincronizar entre dispositivos da família via
              cloud), esta política será atualizada e o app avisará você na
              próxima abertura, pedindo consentimento explícito antes de
              qualquer coisa sair do seu dispositivo.
            </p>

            <h2>12. Contato</h2>
            <p>
              Dúvidas, sugestões ou denúncias:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
