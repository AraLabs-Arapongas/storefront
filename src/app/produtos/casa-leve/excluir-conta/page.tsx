import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Excluir conta — Casa Leve';
const pageDescription =
  'Como excluir sua conta do Casa Leve e o que acontece com seus dados. Exclusão pelo aplicativo ou por solicitação via e-mail.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/casa-leve/excluir-conta',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

export default function CasaLeveExcluirContaPage() {
  return (
    <LegalPage
      product="casa-leve"
      doc="excluir-conta"
      title={
        <>
          Excluir sua <Hl>conta.</Hl>
        </>
      }
      intro="Você pode excluir sua conta do Casa Leve a qualquer momento — pelo aplicativo ou por solicitação via e-mail."
      lead={
        <p>
          Esta página explica como solicitar a exclusão da sua conta do Casa Leve, o que é apagado e
          em quanto tempo. A exclusão é definitiva e não pode ser desfeita.
        </p>
      }
      summary={[
        {
          label: 'Pelo app',
          text: (
            <>
              <strong>Ajustes → Excluir conta</strong>, no fim da tela. É imediato e não pode ser
              desfeito.
            </>
          ),
        },
        {
          label: 'Sem acesso ao app',
          text: (
            <>
              Escreva para contato@aralabs.com.br com o e-mail cadastrado e a frase &ldquo;Solicito
              a exclusão da minha conta Casa Leve&rdquo;.
            </>
          ),
        },
        {
          label: 'Prazo',
          text: (
            <>
              Dados pessoais saem dos nossos sistemas em até <strong>30 dias</strong>; backups
              criptografados, em até mais 60 dias.
            </>
          ),
        },
      ]}
      sections={[
        {
          id: 'o-que-e-apagado',
          n: '1',
          title: 'O que é apagado',
          body: (
            <>
              <p>Ao excluir sua conta, removemos:</p>
              <ul>
                <li>
                  Seu perfil — nome, e-mail, apelido na casa, cor do avatar e data de aniversário
                  (quando informada).
                </li>
                <li>
                  Seu histórico de tarefas concluídas, recompensas resgatadas, desafios e pontuação.
                </li>
                <li>Fotos que você anexou a tarefas.</li>
                <li>Suas contribuições em metas (cofrinho).</li>
                <li>Seus tokens de notificação push.</li>
                <li>Comentários e reações que você fez.</li>
                <li>Registros de assinatura associados à sua conta.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'pelo-aplicativo',
          n: '2',
          title: 'Como excluir pelo aplicativo',
          body: (
            <>
              <p>É o caminho mais rápido e recomendado:</p>
              <ol>
                <li>Abra o Casa Leve e faça login.</li>
                <li>
                  Toque em <strong>Ajustes</strong> (última aba na barra inferior).
                </li>
                <li>
                  Role até o fim e toque em <strong>Excluir conta</strong>.
                </li>
                <li>Confirme a exclusão. A ação é imediata e não pode ser desfeita.</li>
              </ol>
            </>
          ),
        },
        {
          id: 'dono-da-casa',
          n: '3',
          title: 'Se você é o dono (admin) da casa',
          body: (
            <p>
              Excluir a conta do dono apaga a casa inteira — todas as tarefas, eventos, listas,
              recompensas, finanças e os perfis de criança gerenciados. Se há outros adultos na casa
              e você quer preservar os dados dela, transfira a administração para outro adulto antes
              de excluir sua conta.
            </p>
          ),
        },
        {
          id: 'membro-da-casa',
          n: '4',
          title: 'Se você é membro da casa',
          body: (
            <p>
              Sua participação na casa é removida e seus dados pessoais são apagados. Os dados da
              casa permanecem com os demais membros.
            </p>
          ),
        },
        {
          id: 'por-email',
          n: '5',
          title: 'Não consegue acessar o aplicativo?',
          body: (
            <>
              <p>
                Solicite a exclusão por e-mail. Envie uma mensagem para{' '}
                <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a> com:
              </p>
              <ul>
                <li>O e-mail cadastrado na sua conta Casa Leve;</li>
                <li>A frase &ldquo;Solicito a exclusão da minha conta Casa Leve&rdquo;.</li>
              </ul>
              <p>
                Confirmamos o recebimento e processamos o pedido. Você recebe um e-mail quando a
                exclusão for concluída.
              </p>
            </>
          ),
        },
        {
          id: 'prazos',
          n: '6',
          title: 'Prazos e retenção',
          body: (
            <>
              <p>
                Dados pessoais são removidos dos nossos sistemas operacionais em até{' '}
                <strong>30 dias</strong> após o pedido. Backups criptografados podem reter os dados
                por até mais 60 dias antes de serem sobrescritos pela rotação normal. Conteúdos
                colaborativos (tarefas concluídas em conjunto, comentários trocados) podem ser
                anonimizados em vez de apagados, para preservar o histórico da casa para os demais
                membros.
              </p>

              <hr />
              <p>
                Veja também a{' '}
                <Link href="/produtos/casa-leve/privacidade">Política de Privacidade</Link> do Casa
                Leve.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
