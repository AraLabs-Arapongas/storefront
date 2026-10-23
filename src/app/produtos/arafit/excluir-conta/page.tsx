import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Excluir conta — Arafit';
const pageDescription =
  'Como excluir sua conta do Arafit e o que acontece com seus dados. Pelo app ou por e-mail, prazos e cancelamento de assinatura na loja.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/arafit/excluir-conta',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

export default function ArafitExcluirContaPage() {
  return (
    <LegalPage
      product="arafit"
      doc="excluir-conta"
      title={
        <>
          Excluir sua <Hl>conta.</Hl>
        </>
      }
      intro="Você pode excluir sua conta do Arafit a qualquer momento, pelo próprio app ou por e-mail."
      lead={
        <p>
          Esta página explica como excluir sua conta do Arafit, o que é apagado e em quanto tempo. A
          exclusão é definitiva e não pode ser desfeita.
        </p>
      }
      summary={[
        {
          label: 'Como excluir',
          text: (
            <>
              No app: <strong>Perfil › Excluir conta</strong>. Sem acesso ao app, escreva para
              contato@aralabs.com.br com o número de celular da conta.
            </>
          ),
        },
        {
          label: 'Prazo',
          text: (
            <>
              Dados pessoais saem dos nossos sistemas em até <strong>30 dias</strong>; backups, em
              até mais 60 dias.
            </>
          ),
        },
        {
          label: 'Assinatura',
          text: (
            <>
              Excluir a conta <strong>não cancela</strong> a assinatura. Cancele antes nos ajustes
              da App Store ou do Google Play.
            </>
          ),
        },
      ]}
      sections={[
        {
          id: 'como-pedir',
          n: '1',
          title: 'Como excluir',
          body: (
            <>
              <p>
                <strong>Pelo app:</strong> abra o Arafit, vá em <strong>Perfil</strong> e toque em{' '}
                <strong>Excluir conta</strong>. O app mostra o que será apagado e pede confirmação.
                A conta é apagada na hora dos nossos servidores e do aparelho.
              </p>
              <p>
                <strong>Sem acesso ao app:</strong> envie uma mensagem para{' '}
                <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a> com:
              </p>
              <ul>
                <li>O número de celular usado para entrar no Arafit;</li>
                <li>A frase &ldquo;Solicito a exclusão da minha conta Arafit&rdquo;.</li>
              </ul>
              <p>
                Confirmamos o recebimento e processamos o pedido. Se precisarmos confirmar que o
                pedido é seu, entramos em contato pelo número cadastrado. Você recebe uma resposta
                quando a exclusão for concluída.
              </p>
            </>
          ),
        },
        {
          id: 'assinatura',
          n: '2',
          title: 'Antes: cancele a assinatura na loja',
          body: (
            <p>
              Assinaturas do Arafit (Ilimitado, para o personal, e Arafit Pessoal, para o aluno) são
              cobradas pela App Store ou pelo Google Play. A AraLabs não consegue cancelá-las por
              você, e excluir a conta não interrompe a cobrança. Cancele nos ajustes de assinaturas
              da loja onde você assinou, até 24 horas antes da próxima renovação.
            </p>
          ),
        },
        {
          id: 'aluno',
          n: '3',
          title: 'Se você é aluno',
          body: (
            <>
              <p>Ao excluir sua conta, removemos:</p>
              <ul>
                <li>Seu perfil: telefone, nome e fotos.</li>
                <li>
                  Seus treinos e histórico, inclusive o que você treinou por conta no Arafit
                  Pessoal.
                </li>
                <li>Seus programas próprios, peso e medidas que você registrou.</li>
                <li>
                  A ligação da sua conta com o seu personal e o registro do seu consentimento.
                </li>
                <li>Os registros de assinatura associados à sua conta.</li>
              </ul>
              <p>
                O cadastro que o seu personal fez de você (nome, telefone, anamnese, avaliações
                físicas e cobrança) é do personal, que é o controlador desses dados: ele continua
                com ele, marcado como inativo e sem ligação com a sua conta. Para apagar esses
                dados, peça ao seu personal ou escreva para contato@aralabs.com.br.
              </p>
            </>
          ),
        },
        {
          id: 'personal',
          n: '4',
          title: 'Se você é personal',
          body: (
            <>
              <p>Ao excluir sua conta, removemos:</p>
              <ul>
                <li>Seu perfil: telefone, nome, fotos e chave Pix.</li>
                <li>
                  A agenda, a cobrança e as avaliações que você registrou sobre os seus alunos, e as
                  fichas que você criou.
                </li>
                <li>Os registros de assinatura associados à sua conta.</li>
              </ul>
              <p>
                As contas dos seus alunos não são apagadas: elas pertencem a cada aluno, que
                continua podendo entrar no Arafit. O vínculo com você termina. Quem tem o Arafit
                Pessoal fica com a última ficha e o histórico de treinos, como em qualquer fim de
                vínculo.
              </p>
            </>
          ),
        },
        {
          id: 'prazos',
          n: '5',
          title: 'Prazos e retenção',
          body: (
            <>
              <p>
                Dados pessoais são removidos dos nossos sistemas em até <strong>30 dias</strong>{' '}
                após o pedido. Backups podem reter os dados por até mais 60 dias antes de serem
                sobrescritos pela rotação normal.
              </p>

              <hr />
              <p>
                Veja também a{' '}
                <Link href="/produtos/arafit/privacidade">Política de Privacidade</Link> do Arafit.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
