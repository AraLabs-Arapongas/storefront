import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

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
    <>
      <PageHero
        eyebrow="Sono Leve · Privacidade"
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
              O Sono Leve é um aplicativo da AraLabs que auxilia famílias no treino de sono do bebê
              pelo método Ferber e variações. <strong>Tudo funciona offline.</strong> Esta política
              descreve em linguagem direta como tratamos privacidade.
            </p>

            <h2>1. Quem somos</h2>
            <p>
              <strong>Controlador dos dados:</strong> Thiago Tavares Consulting Ltda. - ME (nome
              fantasia <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>, com sede
              na Rua Guaraúna, 288, Jardim Primavera, Arapongas/PR, CEP 86702-480.
              <br />
              <strong>Encarregado / contato de privacidade:</strong>{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>2. Resumo em 1 linha</h2>
            <p>
              <strong>Nada sai do seu celular.</strong> O Sono Leve não tem servidor, não tem cloud,
              não tem analytics. Tudo o que você registra fica num banco SQLite local, dentro do
              sandbox do app no seu iPhone ou Android — nem outros apps do mesmo aparelho conseguem
              acessar.
            </p>

            <h2>3. O que o app armazena (localmente)</h2>
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

            <h2>4. O que o app NÃO faz</h2>
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

            <h2>5. Permissões do aparelho</h2>
            <ul>
              <li>
                <strong>Notificações</strong> — pra avisar a hora da próxima mamada, quando você
                habilita esse lembrete. O agendamento é todo local, pelo sistema de notificações do
                iOS/Android. Não há servidor envolvido.
              </li>
              <li>
                <strong>Fotos</strong> — só se você quiser adicionar uma foto do bebê. A imagem
                escolhida fica no aparelho.
              </li>
            </ul>
            <p>Você pode negar ou revogar qualquer permissão nos ajustes do sistema.</p>

            <h2>6. Atualizações do app</h2>
            <p>
              Ao abrir, o app pode consultar o serviço de atualizações da Expo (plataforma usada pra
              construir o Sono Leve) pra baixar correções. Essa consulta envia apenas informações
              técnicas — plataforma, versão do app e um identificador técnico de instalação gerado
              aleatoriamente — e <strong>nenhum dado do bebê ou da família</strong>. Como em
              qualquer acesso à internet, o serviço também recebe o endereço IP da conexão.
            </p>

            <h2>7. Relatórios de erro</h2>
            <p>
              Atualmente o Sono Leve <strong>não usa</strong> nenhuma ferramenta de captura de erros
              ou crashes. Se uma versão futura adicionar (ex: Sentry), ela não incluirá dados do
              bebê, esta política será atualizada e você poderá optar por sair.
            </p>

            <h2>8. Como apagar os dados</h2>
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

            <h2>9. LGPD</h2>
            <p>
              Como nada sai do seu celular, a AraLabs{' '}
              <strong>não realiza tratamento de dados pessoais</strong> nos termos da Lei Geral de
              Proteção de Dados (Lei 13.709/2018). Você é o controlador exclusivo dos seus próprios
              dados.
            </p>
            <p>
              Mesmo assim, em caso de dúvida sobre privacidade ou se você acreditar que essa
              política precisa de mais clareza, escreva pra{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>10. Crianças</h2>
            <p>
              O Sono Leve é usado por adultos — mães, pais e cuidadores. Os dados inseridos
              referem-se a um bebê (nome, data de nascimento, foto opcional, rotina de sono), mas{' '}
              <strong>nunca saem do dispositivo do adulto</strong>. Mesmo o nome do bebê fica apenas
              local. Não há perfil do bebê na nuvem nem possibilidade de comunicação com terceiros
              através do app.
            </p>

            <h2>11. Mudanças nesta política</h2>
            <p>
              Se uma versão futura do app passar a coletar algum dado (ex: conta compartilhada entre
              pai e mãe com sincronização), esta política será atualizada e o app avisará você,
              pedindo consentimento explícito antes de qualquer dado sair do seu dispositivo.
            </p>

            <h2>12. Contato</h2>
            <p>
              Dúvidas, sugestões ou denúncias:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja também a
              página de <a href="/produtos/sono-leve/suporte">suporte</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
