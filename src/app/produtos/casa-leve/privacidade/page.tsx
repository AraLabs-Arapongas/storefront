import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Política de Privacidade — Casa Leve';
const pageDescription =
  'Como o Casa Leve coleta, usa e protege os dados das famílias que usam o aplicativo. Conformidade com a LGPD e padrões de App Store / Google Play.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/casa-leve/privacidade' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/casa-leve/privacidade',
    type: 'website',
  },
};

const VIGENCIA = '7 de maio de 2026';

export default function CasaLevePrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Casa Leve · Privacidade"
        title={
          <>
            Política de{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">
              privacidade
            </span>
            .
          </>
        }
        description={`Como o Casa Leve coleta, usa e protege os dados das famílias que usam o aplicativo. Em vigor desde ${VIGENCIA}.`}
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              O Casa Leve é um aplicativo da AraLabs voltado para a rotina familiar
              — tarefas, recompensas, desafios e cardápio compartilhados entre os
              membros de uma mesma casa. Esta política descreve, em linguagem
              direta, quais dados coletamos, com qual finalidade e como você pode
              exercer seus direitos.
            </p>

            <h2>1. Quem somos</h2>
            <p>
              <strong>Controlador dos dados:</strong> Thiago Tavares Consulting
              Ltda. - ME (nome fantasia <strong>AraLabs</strong>), CNPJ{' '}
              <strong>50.010.836/0001-45</strong>, com sede na Rua Guaraná, 276,
              Lote 011 Quadra, Jardim Primavera, Arapongas/PR, CEP 86702-480.
              <br />
              <strong>Encarregado / contato de privacidade:</strong>{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>2. Dados que coletamos</h2>
            <p>
              Coletamos apenas o necessário para o aplicativo funcionar e
              cumprir as expectativas que você tem ao usá-lo:
            </p>
            <ul>
              <li>
                <strong>E-mail</strong> — usado para login com código numérico
                (OTP). Não usamos senha.
              </li>
              <li>
                <strong>Nome e apelido na casa</strong> — para identificar quem é
                responsável por cada tarefa.
              </li>
              <li>
                <strong>Identificador da casa (household)</strong> — para
                conectar membros da mesma família.
              </li>
              <li>
                <strong>Papel</strong> — admin, adulto ou criança — para
                permissões dentro do app.
              </li>
              <li>
                <strong>Cor do avatar e (opcionalmente) data de aniversário</strong>{' '}
                — usados visualmente e para lembrete de aniversário.
              </li>
              <li>
                <strong>Foto de perfil</strong> — quando você decide enviar uma.
              </li>
              <li>
                <strong>Fotos anexadas a tarefas (foto-prova)</strong> —{' '}
                <em>opcional</em>, somente quando a tarefa tem essa exigência e
                o usuário escolhe anexar uma. Visíveis apenas para os membros da
                mesma casa.
              </li>
              <li>
                <strong>Token de notificação push</strong> — gerado pelo dispositivo
                para receber avisos do app (ex: tarefa atrasada, aprovação
                pendente).
              </li>
              <li>
                <strong>Conteúdo gerado por você</strong> — tarefas, recompensas,
                desafios, comentários, reações com emoji e mensagens de feedback.
              </li>
              <li>
                <strong>Metadados técnicos</strong> — versão do app, sistema
                operacional (iOS/Android) e horário das ações, usados para
                diagnóstico e priorização de melhorias.
              </li>
            </ul>
            <p>
              <strong>Não coletamos</strong> localização precisa, contatos da
              agenda, dados bancários, histórico de navegação, leitura de SMS,
              microfone ou câmera em segundo plano. Câmera e galeria só são
              acessadas quando você toca em &ldquo;adicionar foto&rdquo;.
            </p>

            <h2>3. Para quê usamos os dados</h2>
            <ul>
              <li>
                <strong>Autenticação:</strong> enviar o código de login para seu
                e-mail e manter sua sessão ativa entre aberturas do app.
              </li>
              <li>
                <strong>Sincronização entre membros:</strong> permitir que sua
                família veja, atualize e converse sobre as tarefas em tempo
                real.
              </li>
              <li>
                <strong>Notificações push:</strong> avisar sobre eventos
                relevantes (tarefa nova, aprovação pendente, lembrete de
                vencimento, aniversário).
              </li>
              <li>
                <strong>Registro de feedback e suporte:</strong> quando você
                envia uma mensagem pela tela &ldquo;Enviar feedback&rdquo;, ela
                chega ao nosso e-mail interno.
              </li>
              <li>
                <strong>Diagnóstico técnico:</strong> identificar e corrigir
                erros, sem rastrear o conteúdo das suas tarefas para fins de
                marketing.
              </li>
            </ul>
            <p>
              <strong>Não vendemos seus dados.</strong> Não usamos seus dados
              para anúncios. Não compartilhamos para uso publicitário de
              terceiros.
            </p>

            <h2>4. Com quem compartilhamos (subprocessadores)</h2>
            <p>
              Para operar o app usamos serviços de infraestrutura confiáveis.
              Cada um recebe apenas o mínimo necessário para a sua função:
            </p>
            <ul>
              <li>
                <strong>Supabase Inc.</strong> (Estados Unidos) — banco de dados,
                storage de fotos e autenticação. Dados em repouso e em trânsito
                são criptografados.{' '}
                <a
                  href="https://supabase.com/privacy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  supabase.com/privacy
                </a>
              </li>
              <li>
                <strong>Resend</strong> (Estados Unidos) — envio dos e-mails de
                login (OTP) e dos e-mails de feedback que você envia para nós.{' '}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  resend.com/legal/privacy-policy
                </a>
              </li>
              <li>
                <strong>Expo Push Service</strong> (Estados Unidos) — entrega das
                notificações push para o seu dispositivo via Apple APNs ou
                Google FCM.{' '}
                <a
                  href="https://expo.dev/privacy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  expo.dev/privacy
                </a>
              </li>
              <li>
                <strong>Apple App Store / Google Play</strong> — distribuição do
                aplicativo. Recebem dados de instalação que pertencem ao
                respectivo ecossistema.
              </li>
            </ul>
            <p>
              Eventuais transferências internacionais são feitas com cláusulas
              contratuais padrão e medidas equivalentes às exigidas pela LGPD.
            </p>

            <h2>5. Crianças e adolescentes</h2>
            <p>
              O Casa Leve foi desenhado para uso familiar e prevê um perfil
              específico de &ldquo;criança&rdquo;. Em todos os casos, o cadastro
              de uma criança e a vinculação à conta da família devem ser feitos
              ou autorizados por um adulto responsável (admin) da casa.
              Recompensas resgatadas e tarefas marcadas pela criança passam
              por aprovação dos adultos antes de gerar pontuação ou efeito
              monetário.
            </p>
            <p>
              Não exibimos publicidade nem coletamos dados para perfilamento
              comportamental de crianças. Se você é responsável por uma criança
              e quer remover os dados dela, basta excluir o membro pelo
              aplicativo ou solicitar exclusão pelo e-mail acima.
            </p>

            <h2>6. Retenção</h2>
            <p>
              Mantemos seus dados enquanto sua conta estiver ativa. Quando você
              exclui a conta dentro do app (Ajustes → Excluir conta) ou solicita
              por e-mail, removemos seus dados pessoais em até 30 dias dos nossos
              sistemas operacionais. Backups criptografados podem reter os dados
              por até mais 60 dias antes de serem sobrescritos pela rotação
              normal.
            </p>
            <p>
              Conteúdos colaborativos (tarefas que outros membros completaram,
              comentários trocados em conjunto) podem ser anonimizados em vez de
              apagados, para preservar o histórico da casa para os demais
              membros.
            </p>

            <h2>7. Seus direitos (LGPD)</h2>
            <p>A Lei Geral de Proteção de Dados garante que você possa:</p>
            <ul>
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>
                Solicitar anonimização, bloqueio ou eliminação de dados
                desnecessários
              </li>
              <li>Portar os dados a outro fornecedor</li>
              <li>Eliminar dados pessoais (excluir a conta)</li>
              <li>
                Saber com quais entidades públicas e privadas seus dados foram
                compartilhados
              </li>
              <li>Revogar o consentimento</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, escreva para{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
              Respondemos em até 15 dias úteis.
            </p>

            <h2>8. Segurança</h2>
            <p>
              Aplicamos medidas técnicas e organizacionais razoáveis para
              proteger seus dados: criptografia em trânsito (TLS) e em repouso,
              autenticação por OTP em vez de senha, controle de acesso por papel
              e isolamento de dados por household via{' '}
              <em>row-level security</em> no banco. Mesmo assim, nenhum sistema
              é 100% imune. Em caso de incidente que afete seus dados, vamos
              comunicar você e a ANPD nos prazos previstos pela LGPD.
            </p>

            <h2>9. Cookies e rastreamento na web</h2>
            <p>
              O site institucional aralabs.com.br não utiliza cookies de
              publicidade nem rastreadores de terceiros. O aplicativo móvel
              também não utiliza cookies — apenas armazenamento local
              (AsyncStorage) para guardar a sua sessão e suas preferências
              (tema, ajustes de UI).
            </p>

            <h2>10. Mudanças nesta política</h2>
            <p>
              Podemos atualizar esta política para refletir mudanças no produto
              ou exigências legais. Quando a mudança for material, vamos avisar
              dentro do app ou por e-mail. A versão em vigor está sempre
              disponível em{' '}
              <Link href="/produtos/casa-leve/privacidade">
                aralabs.com.br/produtos/casa-leve/privacidade
              </Link>
              . Versão atual: <strong>{VIGENCIA}</strong>.
            </p>

            <h2>11. Contato</h2>
            <p>
              <strong>Thiago Tavares Consulting Ltda. - ME</strong> (AraLabs)
              <br />
              CNPJ 50.010.836/0001-45
              <br />
              Rua Guaraná, 276 — Lote 011 Quadra — Jardim Primavera
              <br />
              Arapongas/PR — CEP 86702-480 — Brasil
              <br />
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>
            </p>

            <hr />
            <p className="text-sm text-[color:var(--ink-muted)]">
              Veja também os{' '}
              <Link href="/produtos/casa-leve/termos">Termos de Uso</Link> do
              Casa Leve.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
