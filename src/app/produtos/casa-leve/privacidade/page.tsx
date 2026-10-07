import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Política de Privacidade — Casa Leve';
const pageDescription =
  'Como o Casa Leve coleta, usa e protege os dados das famílias que usam o aplicativo. Conformidade com a LGPD e padrões de App Store / Google Play.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/casa-leve/privacidade',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

const VIGENCIA = '7 de maio de 2026';

export default function CasaLevePrivacidadePage() {
  return (
    <LegalPage
      product="casa-leve"
      doc="privacidade"
      title={
        <>
          Política de <Hl>privacidade.</Hl>
        </>
      }
      intro="Como o Casa Leve coleta, usa e protege os dados das famílias que usam o aplicativo."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Casa Leve é um aplicativo da AraLabs voltado para a rotina familiar — tarefas,
          recompensas, desafios e cardápio compartilhados entre os membros de uma mesma casa. Esta
          política descreve, em linguagem direta, quais dados coletamos, com qual finalidade e como
          você pode exercer seus direitos.
        </p>
      }
      summary={[
        {
          label: 'Que dados',
          text: (
            <>
              E-mail para o login com código (sem senha), nome e apelido na casa, papel, cor do
              avatar, as fotos que você decide enviar, o token de notificação, o conteúdo que você
              cria e metadados técnicos. <strong>Não vendemos seus dados</strong> nem os usamos para
              anúncios.
            </>
          ),
        },
        {
          label: 'Onde ficam',
          text: (
            <>
              Nos serviços que operam o app, como o Supabase (Estados Unidos), com criptografia em
              trânsito e em repouso. Cada subprocessador recebe só o mínimo necessário.
            </>
          ),
        },
        {
          label: 'Como apagar',
          text: (
            <>
              No app, em <strong>Ajustes → Excluir conta</strong>, ou pelo e-mail
              contato@aralabs.com.br. Os dados pessoais saem dos sistemas em até 30 dias; backups
              criptografados, em até mais 60 dias.
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
          id: 'dados-que-coletamos',
          n: '2',
          title: 'Dados que coletamos',
          body: (
            <>
              <p>
                Coletamos apenas o necessário para o aplicativo funcionar e cumprir as expectativas
                que você tem ao usá-lo:
              </p>
              <ul>
                <li>
                  <strong>E-mail</strong> — usado para login com código numérico (OTP). Não usamos
                  senha.
                </li>
                <li>
                  <strong>Nome e apelido na casa</strong> — para identificar quem é responsável por
                  cada tarefa.
                </li>
                <li>
                  <strong>Identificador da casa (household)</strong> — para conectar membros da
                  mesma família.
                </li>
                <li>
                  <strong>Papel</strong> — admin, adulto ou criança — para permissões dentro do app.
                </li>
                <li>
                  <strong>Cor do avatar e (opcionalmente) data de aniversário</strong> — usados
                  visualmente e para lembrete de aniversário.
                </li>
                <li>
                  <strong>Foto de perfil</strong> — quando você decide enviar uma.
                </li>
                <li>
                  <strong>Fotos anexadas a tarefas (foto-prova)</strong> — <em>opcional</em>,
                  somente quando a tarefa tem essa exigência e o usuário escolhe anexar uma.
                  Visíveis apenas para os membros da mesma casa.
                </li>
                <li>
                  <strong>Token de notificação push</strong> — gerado pelo dispositivo para receber
                  avisos do app (ex: tarefa atrasada, aprovação pendente).
                </li>
                <li>
                  <strong>Conteúdo gerado por você</strong> — tarefas, recompensas, desafios,
                  comentários, reações com emoji e mensagens de feedback.
                </li>
                <li>
                  <strong>Metadados técnicos</strong> — versão do app, sistema operacional
                  (iOS/Android) e horário das ações, usados para diagnóstico e priorização de
                  melhorias.
                </li>
              </ul>
              <p>
                <strong>Não coletamos</strong> localização precisa, contatos da agenda, dados
                bancários, histórico de navegação, leitura de SMS, microfone ou câmera em segundo
                plano. Câmera e galeria só são acessadas quando você toca em &ldquo;adicionar
                foto&rdquo;.
              </p>
            </>
          ),
        },
        {
          id: 'para-que-usamos',
          n: '3',
          title: 'Para quê usamos os dados',
          body: (
            <>
              <ul>
                <li>
                  <strong>Autenticação:</strong> enviar o código de login para seu e-mail e manter
                  sua sessão ativa entre aberturas do app.
                </li>
                <li>
                  <strong>Sincronização entre membros:</strong> permitir que sua família veja,
                  atualize e converse sobre as tarefas em tempo real.
                </li>
                <li>
                  <strong>Notificações push:</strong> avisar sobre eventos relevantes (tarefa nova,
                  aprovação pendente, lembrete de vencimento, aniversário).
                </li>
                <li>
                  <strong>Registro de feedback e suporte:</strong> quando você envia uma mensagem
                  pela tela “Enviar feedback”, ela chega ao nosso e-mail interno.
                </li>
                <li>
                  <strong>Diagnóstico técnico:</strong> identificar e corrigir erros, sem rastrear o
                  conteúdo das suas tarefas para fins de marketing.
                </li>
              </ul>
              <p>
                <strong>Não vendemos seus dados.</strong> Não usamos seus dados para anúncios. Não
                compartilhamos para uso publicitário de terceiros.
              </p>
            </>
          ),
        },
        {
          id: 'subprocessadores',
          n: '4',
          title: 'Com quem compartilhamos (subprocessadores)',
          body: (
            <>
              <p>
                Para operar o app usamos serviços de infraestrutura confiáveis. Cada um recebe
                apenas o mínimo necessário para a sua função:
              </p>
              <ul>
                <li>
                  <strong>Supabase Inc.</strong> (Estados Unidos) — banco de dados, storage de fotos
                  e autenticação. Dados em repouso e em trânsito são criptografados.{' '}
                  <a href="https://supabase.com/privacy" rel="noopener noreferrer" target="_blank">
                    supabase.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Resend</strong> (Estados Unidos) — envio dos e-mails de login (OTP) e dos
                  e-mails de feedback que você envia para nós.{' '}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    resend.com/legal/privacy-policy
                  </a>
                </li>
                <li>
                  <strong>Expo Push Service</strong> (Estados Unidos) — entrega das notificações
                  push para o seu dispositivo via Apple APNs ou Google FCM.{' '}
                  <a href="https://expo.dev/privacy" rel="noopener noreferrer" target="_blank">
                    expo.dev/privacy
                  </a>
                </li>
                <li>
                  <strong>Sentry</strong> (Estados Unidos) — monitoramento de erros e performance do
                  app. Recebe stack traces, identificador interno do dispositivo e do usuário (UUID,
                  sem nome ou email) e versão do app. Não recebe conteúdo das suas tarefas, fotos ou
                  mensagens.{' '}
                  <a href="https://sentry.io/privacy/" rel="noopener noreferrer" target="_blank">
                    sentry.io/privacy
                  </a>
                </li>
                <li>
                  <strong>Apple App Store / Google Play</strong> — distribuição do aplicativo.
                  Recebem dados de instalação que pertencem ao respectivo ecossistema.
                </li>
              </ul>
              <p>
                Eventuais transferências internacionais são feitas com cláusulas contratuais padrão
                e medidas equivalentes às exigidas pela LGPD.
              </p>
            </>
          ),
        },
        {
          id: 'criancas',
          n: '5',
          title: 'Crianças e adolescentes',
          body: (
            <>
              <p>
                O Casa Leve foi desenhado para uso familiar e prevê um perfil específico de
                &ldquo;criança&rdquo;. Em todos os casos, o cadastro de uma criança e a vinculação à
                conta da família devem ser feitos ou autorizados por um adulto responsável (admin)
                da casa. Recompensas resgatadas e tarefas marcadas pela criança passam por aprovação
                dos adultos antes de gerar pontuação ou efeito monetário.
              </p>
              <p>
                Não exibimos publicidade nem coletamos dados para perfilamento comportamental de
                crianças. Se você é responsável por uma criança e quer remover os dados dela, basta
                excluir o membro pelo aplicativo ou solicitar exclusão pelo e-mail acima.
              </p>
            </>
          ),
        },
        {
          id: 'retencao',
          n: '6',
          title: 'Retenção',
          body: (
            <>
              <p>
                Mantemos seus dados enquanto sua conta estiver ativa. Quando você exclui a conta
                dentro do app (Ajustes → Excluir conta) ou solicita por e-mail, removemos seus dados
                pessoais em até 30 dias dos nossos sistemas operacionais. Backups criptografados
                podem reter os dados por até mais 60 dias antes de serem sobrescritos pela rotação
                normal.
              </p>
              <p>
                Conteúdos colaborativos (tarefas que outros membros completaram, comentários
                trocados em conjunto) podem ser anonimizados em vez de apagados, para preservar o
                histórico da casa para os demais membros.
              </p>
            </>
          ),
        },
        {
          id: 'seus-direitos',
          n: '7',
          title: 'Seus direitos (LGPD)',
          body: (
            <>
              <p>A Lei Geral de Proteção de Dados garante que você possa:</p>
              <ul>
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar os dados que temos sobre você</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portar os dados a outro fornecedor</li>
                <li>Eliminar dados pessoais (excluir a conta)</li>
                <li>
                  Saber com quais entidades públicas e privadas seus dados foram compartilhados
                </li>
                <li>Revogar o consentimento</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, escreva para{' '}
                <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Respondemos em
                até 15 dias úteis.
              </p>
            </>
          ),
        },
        {
          id: 'seguranca',
          n: '8',
          title: 'Segurança',
          body: (
            <p>
              Aplicamos medidas técnicas e organizacionais razoáveis para proteger seus dados:
              criptografia em trânsito (TLS) e em repouso, autenticação por OTP em vez de senha,
              controle de acesso por papel e isolamento de dados por household via{' '}
              <em>row-level security</em> no banco. Mesmo assim, nenhum sistema é 100% imune. Em
              caso de incidente que afete seus dados, vamos comunicar você e a ANPD nos prazos
              previstos pela LGPD.
            </p>
          ),
        },
        {
          id: 'cookies',
          n: '9',
          title: 'Cookies e rastreamento na web',
          body: (
            <p>
              O site institucional aralabs.com.br não utiliza cookies de publicidade nem
              rastreadores de terceiros. O aplicativo móvel também não utiliza cookies — apenas
              armazenamento local (AsyncStorage) para guardar a sua sessão e suas preferências
              (tema, ajustes de UI).
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '10',
          title: 'Mudanças nesta política',
          body: (
            <p>
              Podemos atualizar esta política para refletir mudanças no produto ou exigências
              legais. Quando a mudança for material, vamos avisar dentro do app ou por e-mail. A
              versão em vigor está sempre disponível em{' '}
              <Link href="/produtos/casa-leve/privacidade">
                aralabs.com.br/produtos/casa-leve/privacidade
              </Link>
              . Versão atual: <strong>{VIGENCIA}</strong>.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '11',
          title: 'Contato',
          body: (
            <>
              <p>
                <strong>Thiago Tavares Consulting Ltda. - ME</strong> (AraLabs)
                <br />
                CNPJ 50.010.836/0001-45
                <br />
                Rua Guaraúna, 288 — Jardim Primavera
                <br />
                Arapongas/PR — CEP 86702-480 — Brasil
                <br />
                <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>
              </p>

              <hr />
              <p>
                Veja também os <Link href="/produtos/casa-leve/termos">Termos de Uso</Link> do Casa
                Leve.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
