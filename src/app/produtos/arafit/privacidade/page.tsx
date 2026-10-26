import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Política de Privacidade — Arafit';
const pageDescription =
  'Como o Arafit coleta, usa e protege os dados de personal trainers e alunos, inclusive dados de saúde. Conformidade com a LGPD e padrões de App Store / Google Play.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/arafit/privacidade',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

const VIGENCIA = '26 de outubro de 2026';

export default function ArafitPrivacidadePage() {
  return (
    <LegalPage
      product="arafit"
      doc="privacidade"
      title={
        <>
          Política de <Hl>privacidade.</Hl>
        </>
      }
      intro="Como o Arafit coleta, usa e protege os dados de personal trainers e alunos, inclusive dados de saúde."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Arafit é um aplicativo da AraLabs para personal trainers organizarem os alunos e para os
          alunos treinarem pelo programa do personal. O mesmo app serve aos dois; o papel de cada um
          vem da conta. Esta política descreve, em linguagem direta, quais dados tratamos, com qual
          finalidade, quem vê o quê e como você pode exercer seus direitos.
        </p>
      }
      summary={[
        {
          label: 'Que dados',
          text: (
            <>
              Telefone (login por SMS, sem senha e sem e-mail), nome, foto opcional, medidas,{' '}
              <strong>dados de saúde</strong> (anamnese, PAR-Q, avaliações), treinos, agenda e
              cobrança registradas pelo personal e o status da assinatura.{' '}
              <strong>Não vendemos seus dados</strong> nem os usamos para anúncios.
            </>
          ),
        },
        {
          label: 'Quem vê',
          text: (
            <>
              O personal vê o programa, os treinos feitos nele, as avaliações e a cobrança dos
              alunos dele. O que o aluno treina por conta no Arafit Pessoal{' '}
              <strong>não aparece para o personal</strong>.
            </>
          ),
        },
        {
          label: 'Saúde',
          text: (
            <>
              Dados de saúde são dados sensíveis (art. 11 da LGPD) e só são tratados com o
              consentimento específico do aluno, pedido no primeiro acesso.
            </>
          ),
        },
        {
          label: 'Como apagar',
          text: (
            <>
              No app, em Perfil › Excluir conta, ou pelo e-mail contato@aralabs.com.br, com o número
              cadastrado. Veja <Link href="/produtos/arafit/excluir-conta">Excluir conta</Link>.
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
              O Arafit é desenvolvido e operado pela Thiago Tavares Consulting Ltda. - ME (nome
              fantasia <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>, com sede
              na Rua Guaraúna, 288, Jardim Primavera, Arapongas/PR, CEP 86702-480.
              <br />
              <strong>Encarregado / contato de privacidade:</strong>{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          ),
        },
        {
          id: 'papeis',
          n: '2',
          title: 'Quem decide sobre os dados (controlador e operadora)',
          body: (
            <>
              <p>
                <strong>O personal trainer é o controlador dos dados dos alunos dele.</strong> É ele
                quem cadastra o aluno, monta o programa, faz as avaliações e registra a agenda e a
                cobrança, e é ele quem decide para que esses dados servem na relação com o aluno.
              </p>
              <p>
                <strong>A AraLabs é a operadora</strong> desses dados: armazena e processa as
                informações em nome do personal, apenas para fazer o Arafit funcionar, seguindo esta
                política.
              </p>
              <p>
                Para os dados da própria conta de cada usuário (telefone de login e assinatura) e
                para o que o aluno treina por conta no Arafit Pessoal, sem relação com um personal,
                a AraLabs trata os dados diretamente, nos termos desta política.
              </p>
            </>
          ),
        },
        {
          id: 'dados-que-coletamos',
          n: '3',
          title: 'Dados que coletamos',
          sub: [{ id: 'dados-de-saude', title: '3.1 Dados de saúde' }],
          body: (
            <>
              <p>Tratamos apenas o necessário para o aplicativo funcionar:</p>
              <ul>
                <li>
                  <strong>Telefone</strong> — usado para o login, com um código enviado por SMS. Não
                  usamos senha nem e-mail.
                </li>
                <li>
                  <strong>Nome</strong> — para identificar personal e alunos dentro do app.
                </li>
                <li>
                  <strong>Fotos</strong> — <em>opcionais</em>, como foto de perfil ou fotos de
                  evolução, somente quando você decide adicionar.
                </li>
                <li>
                  <strong>Peso, altura e medidas do corpo</strong> — registrados pelo aluno ou pelo
                  personal nas avaliações.
                </li>
                <li>
                  <strong>Dados de saúde</strong> — anamnese, questionário PAR-Q, lesões,
                  medicamentos, avaliações físicas e testes (veja o item 3.1).
                </li>
                <li>
                  <strong>Treinos</strong> — programas, séries, cargas, repetições, descanso e os
                  treinos realizados.
                </li>
                <li>
                  <strong>Agenda e cobrança registradas pelo personal</strong> — horários das aulas,
                  valores, datas e status de pagamento. <strong>Não há dados de cartão</strong>: o
                  Arafit não processa o pagamento entre personal e aluno.
                </li>
                <li>
                  <strong>Chave Pix do personal</strong> — <em>opcional</em>, usada só nas mensagens
                  de lembrete de cobrança que o personal envia aos alunos.
                </li>
                <li>
                  <strong>Dados de assinatura</strong> — status e data de expiração da assinatura,
                  informados pela App Store ou pelo Google Play por meio do RevenueCat. O app não vê
                  dados do seu cartão.
                </li>
              </ul>

              <h3 id="dados-de-saude">3.1 Dados de saúde</h3>
              <p>
                Anamnese, PAR-Q, lesões, medicamentos, medidas, avaliações físicas, testes e treinos
                são <strong>dados pessoais sensíveis</strong> (art. 11 da LGPD). Eles só são
                tratados com o <strong>consentimento específico do aluno</strong>, pedido na
                primeira vez que ele entra no app. O aluno pode revogar esse consentimento a
                qualquer momento (veja o item 9).
              </p>
            </>
          ),
        },
        {
          id: 'para-que-usamos',
          n: '4',
          title: 'Para quê usamos os dados',
          body: (
            <>
              <ul>
                <li>
                  <strong>Login:</strong> enviar o código por SMS e manter sua sessão ativa.
                </li>
                <li>
                  <strong>Ligar personal e aluno:</strong> o personal cadastra o aluno pelo número
                  do celular, e o aluno encontra o programa pronto ao entrar com esse número.
                </li>
                <li>
                  <strong>Treino:</strong> mostrar o programa, registrar cada série e guardar o
                  histórico e a evolução.
                </li>
                <li>
                  <strong>Acompanhamento pelo personal:</strong> mostrar ao personal os treinos do
                  programa, as avaliações, a agenda e a cobrança dos alunos dele.
                </li>
                <li>
                  <strong>Lembretes de cobrança:</strong> quando o personal escolhe, o app abre o
                  WhatsApp dele com uma mensagem pronta e a chave Pix. A mensagem é enviada pelo
                  próprio personal.
                </li>
                <li>
                  <strong>Assinaturas:</strong> saber se a conta tem um plano ativo para liberar os
                  recursos correspondentes.
                </li>
                <li>
                  <strong>Recursos de IA (marcados com ✦):</strong> quando você pede, o app envia à
                  IA só o necessário para a tarefa (por exemplo, objetivo, nível, restrições e
                  séries de um treino). <strong>Nome e telefone não são enviados.</strong> A IA não
                  prescreve sozinha: o personal ou o aluno revisa antes de usar.
                </li>
                <li>
                  <strong>Avisos (notificações):</strong> lembretes de treino, recados e avisos do
                  personal, com a sua permissão. Novidades e dicas do Arafit só chegam se você
                  aceitar; dá para desligar em Perfil › Notificações.
                </li>
                <li>
                  <strong>Dados de uso (opcional):</strong> se você aceitar em Perfil › Dados de uso,
                  registramos eventos de uso do app (telas abertas, treinos iniciados e concluídos,
                  compras) ligados a um identificador da conta, sem nome, telefone, endereço IP ou
                  dados de saúde, para entender o que melhorar. Sem o seu aceite, nada é enviado.
                </li>
                <li>
                  <strong>Ditado por voz:</strong> o microfone só é usado quando você toca para
                  falar. A transcrição é feita pelo reconhecimento de voz do próprio aparelho (Apple
                  ou Google); o áudio não é guardado pelo Arafit.
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
          id: 'quem-ve',
          n: '5',
          title: 'Quem vê o quê',
          body: (
            <ul>
              <li>
                <strong>O aluno</strong> vê os próprios dados: programa, treinos, histórico,
                avaliações e medidas.
              </li>
              <li>
                <strong>O personal</strong> vê, dos alunos dele: o programa, os treinos feitos nele,
                as avaliações e os dados de saúde, a agenda e a cobrança.
              </li>
              <li>
                <strong>O que o aluno treina por conta no Arafit Pessoal</strong> (programas
                próprios, programas prontos e treinos montados por ele){' '}
                <strong>não é visível para o personal</strong>.
              </li>
              <li>
                <strong>Um personal não vê os alunos de outro personal</strong>, e um aluno não vê
                os dados de outros alunos.
              </li>
            </ul>
          ),
        },
        {
          id: 'subprocessadores',
          n: '6',
          title: 'Com quem compartilhamos (subprocessadores)',
          body: (
            <>
              <p>
                Para operar o app usamos serviços de terceiros. Cada um recebe apenas o mínimo
                necessário para a sua função:
              </p>
              <ul>
                <li>
                  <strong>Supabase</strong> — armazenamento dos dados em nuvem e autenticação, com
                  controle de acesso por usuário: cada conta só acessa os dados que pode ver segundo
                  o item 5.{' '}
                  <a href="https://supabase.com/privacy" rel="noopener noreferrer" target="_blank">
                    supabase.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Comtele</strong> (provedor de SMS) — recebe o seu número de telefone para
                  enviar o código de login.
                </li>
                <li>
                  <strong>Anthropic</strong> (modelo de IA Claude) — recebe o texto das tarefas de
                  IA que você pede, sem nome nem telefone. Não usa esses dados para treinar modelos.{' '}
                  <a href="https://www.anthropic.com/legal/privacy" rel="noopener noreferrer" target="_blank">
                    anthropic.com/legal/privacy
                  </a>
                </li>
                <li>
                  <strong>PostHog</strong> — dados de uso, apenas de quem aceitou, sem endereço IP.{' '}
                  <a href="https://posthog.com/privacy" rel="noopener noreferrer" target="_blank">
                    posthog.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Expo / Apple / Google</strong> — entrega das notificações ao seu aparelho.
                </li>
                <li>
                  <strong>Apple App Store / Google Play</strong> — distribuição do app e
                  processamento do pagamento das assinaturas.
                </li>
                <li>
                  <strong>RevenueCat</strong> — gestão das assinaturas: recebe da loja o status e a
                  validade da assinatura, ligados a um identificador da conta.{' '}
                  <a
                    href="https://www.revenuecat.com/privacy"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    revenuecat.com/privacy
                  </a>
                </li>
              </ul>
              <p>
                Alguns desses serviços podem processar dados fora do Brasil. Nesses casos, a
                transferência segue as hipóteses previstas na LGPD.
              </p>
            </>
          ),
        },
        {
          id: 'menores',
          n: '7',
          title: 'Menores de 18 anos',
          body: (
            <p>
              O Arafit é destinado a maiores de 18 anos. Um aluno menor de idade só pode usar o app
              com a autorização e o acompanhamento de um pai, mãe ou responsável legal, que dá o
              consentimento em nome dele. Se você é responsável por um menor e quer remover os dados
              dele, escreva para <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          ),
        },
        {
          id: 'retencao',
          n: '8',
          title: 'Retenção e exclusão',
          body: (
            <p>
              Mantemos os dados enquanto a conta estiver ativa. Quando você pede a exclusão da
              conta, removemos seus dados pessoais em até 30 dias dos nossos sistemas. Backups podem
              reter os dados por até mais 60 dias antes de serem sobrescritos. O passo a passo está
              em <Link href="/produtos/arafit/excluir-conta">Excluir conta</Link>. Excluir a conta
              não cancela uma assinatura: ela é cancelada nos ajustes da App Store ou do Google
              Play.
            </p>
          ),
        },
        {
          id: 'seus-direitos',
          n: '9',
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
                <li>
                  Revogar o consentimento, inclusive o consentimento para dados de saúde. Sem ele, o
                  Arafit deixa de tratar esses dados.
                </li>
              </ul>
              <p>
                Se você é aluno de um personal, pode falar com ele, que é o controlador dos seus
                dados no Arafit, ou direto com a gente. Para exercer qualquer um desses direitos,
                escreva para <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
                Respondemos em até 15 dias úteis.
              </p>
            </>
          ),
        },
        {
          id: 'mudancas',
          n: '10',
          title: 'Mudanças nesta política',
          body: (
            <p>
              Podemos atualizar esta política para refletir mudanças no produto ou exigências
              legais. Quando a mudança for material, vamos avisar dentro do app. A versão em vigor
              está sempre disponível em{' '}
              <Link href="/produtos/arafit/privacidade">
                aralabs.com.br/produtos/arafit/privacidade
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
                Veja também os <Link href="/produtos/arafit/termos">Termos de Uso</Link> do Arafit.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
