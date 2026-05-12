import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Política de Privacidade — Sono Leve';
const pageDescription =
  'O Sono Leve não coleta dados. Nada sai do seu celular. Esta política descreve em linguagem direta como tratamos privacidade.';

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

const VIGENCIA = '12 de maio de 2026';

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
              O Sono Leve é um aplicativo da AraLabs que auxilia famílias no treino de sono
              do bebê pelo método Ferber. <strong>Tudo funciona offline.</strong> Esta política
              descreve em linguagem direta como tratamos privacidade.
            </p>

            <h2>1. Quem somos</h2>
            <p>
              <strong>Controlador dos dados:</strong> Thiago Tavares Consulting Ltda. - ME (nome
              fantasia <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>, com
              sede na Rua Guaraná, 276, Lote 011 Quadra, Jardim Primavera, Arapongas/PR, CEP
              86702-480.
              <br />
              <strong>Encarregado / contato de privacidade:</strong>{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>2. Resumo em 1 linha</h2>
            <p>
              <strong>Nada sai do seu celular.</strong> O Sono Leve não tem servidor, não tem
              cloud, não tem analytics. Tudo o que você registra fica num banco SQLite local,
              dentro do sandbox do app no seu iPhone ou Android.
            </p>

            <h2>3. O que o app armazena (localmente)</h2>
            <p>Os seguintes dados ficam apenas no seu dispositivo:</p>
            <ul>
              <li>
                <strong>Nome, data de nascimento e gênero do bebê</strong> — usados pra mostrar
                idade correta e adaptar a copy (ela/ele, calma/calmo).
              </li>
              <li>
                <strong>Método de treino escolhido</strong> e dia atual da progressão Ferber.
              </li>
              <li>
                <strong>Sessões de sono</strong> e episódios — horários de início, adormecimento e
                encerramento.
              </li>
              <li>
                <strong>Check-ins</strong> — intervalo esperado, duração no quarto, resultado
                (acalmou, continuou chorando, dormiu, colo).
              </li>
              <li>
                <strong>Mamadas</strong> — data e hora dos registros.
              </li>
              <li>
                <strong>Configurações</strong> — intervalo de mamada, passos do ritual pré-sono.
              </li>
              <li>
                <strong>Notas opcionais</strong> que você digitar em sessões.
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
              <li>Não acessa câmera, microfone, contatos, localização ou outras informações do device.</li>
              <li>Não há login. Não há conta. Não há cadastro.</li>
            </ul>

            <h2>5. Notificações</h2>
            <p>
              Quando você habilita notificações de mamada, o agendamento é feito pelo próprio
              sistema operacional (iOS/Android) localmente. Não há servidor envolvido — nem nosso
              nem da Apple/Google. A notificação é criada, agendada e disparada no seu próprio
              dispositivo.
            </p>

            <h2>6. Como apagar os dados</h2>
            <p>Você tem controle total. Pra apagar tudo, basta:</p>
            <ul>
              <li>
                Ir em <strong>Ajustes → Apagar todos os dados</strong> dentro do app (com
                confirmação de 2 níveis).
              </li>
              <li>Ou simplesmente desinstalar o app — os dados somem junto.</li>
            </ul>
            <p>
              Não existe processo de exclusão remota porque não há cópia dos seus dados em lugar
              algum fora do seu celular.
            </p>

            <h2>7. LGPD</h2>
            <p>
              Como nada sai do seu celular, a AraLabs <strong>não realiza tratamento de dados
              pessoais</strong> nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018).
              Você é o controlador exclusivo dos seus próprios dados.
            </p>
            <p>
              Mesmo assim, em caso de dúvida sobre privacidade ou se você acreditar que essa
              política precisa de mais clareza, escreva pra{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>8. Crianças</h2>
            <p>
              O Sono Leve é usado por pais e cuidadores adultos. Os dados inseridos referem-se a
              um bebê (nome, data de nascimento, gênero), mas <strong>nunca saem do dispositivo
              do adulto</strong>. Não há perfil de criança ativo, não há conta de menor de idade,
              não há possibilidade de comunicação com terceiros.
            </p>

            <h2>9. Mudanças nesta política</h2>
            <p>
              Se uma versão futura do app passar a coletar algum dado (ex: opcionalmente
              sincronizar entre dispositivos via cloud), esta política será atualizada e o app
              avisará você na próxima abertura, pedindo consentimento explícito antes de qualquer
              coisa sair do seu celular.
            </p>

            <h2>10. Contato</h2>
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
