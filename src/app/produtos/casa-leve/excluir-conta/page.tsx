import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Excluir conta — Casa Leve';
const pageDescription =
  'Como excluir sua conta do Casa Leve e o que acontece com seus dados. Exclusão pelo aplicativo ou por solicitação via e-mail.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/casa-leve/excluir-conta' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/casa-leve/excluir-conta',
    type: 'website',
  },
};

export default function CasaLeveExcluirContaPage() {
  return (
    <>
      <PageHero
        eyebrow="Casa Leve · Excluir conta"
        title={
          <>
            Excluir sua{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">
              conta
            </span>
            .
          </>
        }
        description="Você pode excluir sua conta do Casa Leve a qualquer momento — pelo aplicativo ou por solicitação via e-mail."
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              Esta página explica como solicitar a exclusão da sua conta do
              Casa Leve, o que é apagado e em quanto tempo. A exclusão é
              definitiva e não pode ser desfeita.
            </p>

            <h2>1. O que é apagado</h2>
            <p>Ao excluir sua conta, removemos:</p>
            <ul>
              <li>
                Seu perfil — nome, e-mail, apelido na casa, cor do avatar e
                data de aniversário (quando informada).
              </li>
              <li>
                Seu histórico de tarefas concluídas, recompensas resgatadas,
                desafios e pontuação.
              </li>
              <li>Fotos que você anexou a tarefas.</li>
              <li>Suas contribuições em metas (cofrinho).</li>
              <li>Seus tokens de notificação push.</li>
              <li>Comentários e reações que você fez.</li>
              <li>Registros de assinatura associados à sua conta.</li>
            </ul>

            <h2>2. Como excluir pelo aplicativo</h2>
            <p>É o caminho mais rápido e recomendado:</p>
            <ol>
              <li>Abra o Casa Leve e faça login.</li>
              <li>
                Toque em <strong>Ajustes</strong> (última aba na barra
                inferior).
              </li>
              <li>
                Role até o fim e toque em <strong>Excluir conta</strong>.
              </li>
              <li>
                Confirme a exclusão. A ação é imediata e não pode ser
                desfeita.
              </li>
            </ol>

            <h2>3. Se você é o dono (admin) da casa</h2>
            <p>
              Excluir a conta do dono apaga a casa inteira — todas as tarefas,
              eventos, listas, recompensas, finanças e os perfis de criança
              gerenciados. Se há outros adultos na casa e você quer preservar
              os dados dela, transfira a administração para outro adulto antes
              de excluir sua conta.
            </p>

            <h2>4. Se você é membro da casa</h2>
            <p>
              Sua participação na casa é removida e seus dados pessoais são
              apagados. Os dados da casa permanecem com os demais membros.
            </p>

            <h2>5. Não consegue acessar o aplicativo?</h2>
            <p>
              Solicite a exclusão por e-mail. Envie uma mensagem para{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>{' '}
              com:
            </p>
            <ul>
              <li>O e-mail cadastrado na sua conta Casa Leve;</li>
              <li>
                A frase &ldquo;Solicito a exclusão da minha conta Casa
                Leve&rdquo;.
              </li>
            </ul>
            <p>
              Confirmamos o recebimento e processamos o pedido. Você recebe um
              e-mail quando a exclusão for concluída.
            </p>

            <h2>6. Prazos e retenção</h2>
            <p>
              Dados pessoais são removidos dos nossos sistemas operacionais em
              até <strong>30 dias</strong> após o pedido. Backups
              criptografados podem reter os dados por até mais 60 dias antes de
              serem sobrescritos pela rotação normal. Conteúdos colaborativos
              (tarefas concluídas em conjunto, comentários trocados) podem ser
              anonimizados em vez de apagados, para preservar o histórico da
              casa para os demais membros.
            </p>

            <hr />
            <p className="text-sm text-[color:var(--ink-muted)]">
              Veja também a{' '}
              <Link href="/produtos/casa-leve/privacidade">
                Política de Privacidade
              </Link>{' '}
              do Casa Leve.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
