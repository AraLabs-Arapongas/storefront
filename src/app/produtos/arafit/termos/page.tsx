import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Termos de Uso — Arafit';
const pageDescription =
  'Regras de uso do aplicativo Arafit da AraLabs. Cobre conta por telefone, responsabilidades do personal, saúde, assinaturas, cobrança entre personal e aluno e encerramento.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/arafit/termos',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

const VIGENCIA = '26 de outubro de 2026';

export default function ArafitTermosPage() {
  return (
    <LegalPage
      product="arafit"
      doc="termos"
      title={
        <>
          Termos de <Hl>uso.</Hl>
        </>
      }
      intro="Regras claras de uso do Arafit, para personal trainers e alunos."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          Estes Termos regulam o uso do aplicativo Arafit, fornecido pela AraLabs. Ao criar uma
          conta, você declara que leu, entendeu e concorda com os termos abaixo. Se não concorda com
          alguma parte, não use o aplicativo.
        </p>
      }
      summary={[
        {
          label: 'Orientação',
          text: (
            <>
              É do personal. O Arafit é uma ferramenta e{' '}
              <strong>não substitui avaliação médica</strong>. PAR-Q com alerta exige liberação
              médica antes de treinar.
            </>
          ),
        },
        {
          label: 'Assinaturas',
          text: (
            <>
              Pela App Store ou pelo Google Play, com renovação automática. Cancele nos ajustes da
              loja até 24 horas antes da renovação. Reembolsos seguem a política da loja.
            </>
          ),
        },
        {
          label: 'Cobrança dos alunos',
          text: (
            <>
              É entre o personal e o aluno. O app só registra e lembra; a AraLabs não recebe nem
              intermedia esse pagamento.
            </>
          ),
        },
        {
          label: 'Encerrar',
          text: (
            <>
              Você pode excluir sua conta a qualquer momento, no app (Perfil › Excluir conta) ou
              pelo e-mail contato@aralabs.com.br.
            </>
          ),
        },
      ]}
      sections={[
        {
          id: 'quem-oferece',
          n: '1',
          title: 'Quem oferece o serviço',
          body: (
            <p>
              O Arafit é desenvolvido e mantido pela{' '}
              <strong>Thiago Tavares Consulting Ltda. - ME</strong> (nome fantasia{' '}
              <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>, com sede na Rua
              Guaraúna, 288, Jardim Primavera, Arapongas/PR, CEP 86702-480. Para qualquer
              comunicação relativa a estes Termos, escreva para{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          ),
        },
        {
          id: 'o-que-e',
          n: '2',
          title: 'O que é o Arafit',
          body: (
            <>
              <p>
                O Arafit é um aplicativo móvel para personal trainers organizarem os alunos e para
                os alunos treinarem pelo programa do personal. O mesmo app serve aos dois; o papel
                de cada um vem da conta.
              </p>
              <ul>
                <li>
                  <strong>Personal:</strong> cadastra alunos, monta e envia programas de treino,
                  acompanha os treinos feitos nesses programas, organiza a agenda de aulas, registra
                  a cobrança dos alunos e faz avaliações físicas.
                </li>
                <li>
                  <strong>Aluno:</strong> entra com o número cadastrado pelo personal, treina pelo
                  programa e acompanha o histórico e a evolução. Com o Arafit Pessoal, também treina
                  por conta, com ou sem personal.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'conta',
          n: '3',
          title: 'Conta e acesso',
          body: (
            <ul>
              <li>
                O acesso exige login, feito com o número do celular e um código enviado por SMS. Não
                há senha nem e-mail.
              </li>
              <li>
                Você é responsável por manter o controle do número de telefone e do dispositivo onde
                o app está instalado. Se perder o número, avise a gente pelo e-mail abaixo.
              </li>
              <li>
                O personal deve cadastrar alunos apenas com o número correto e com o conhecimento do
                aluno.
              </li>
              <li>
                <strong>A conta de personal é individual.</strong> Ela é de um profissional, para os
                alunos que ele mesmo atende. Academias, estúdios, boxes, redes e empresas com vários
                profissionais não podem usar uma conta de personal para atender os alunos do
                estabelecimento, nem dividir uma mesma conta entre vários profissionais: cada personal
                tem a própria conta. Para uso por academias, fale com a gente em{' '}
                <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
              </li>
              <li>
                Não é permitido criar contas de personal de fachada para liberar o acesso de alunos
                (por exemplo, o próprio aluno criando uma conta de personal para si mesmo).
              </li>
              <li>
                O Arafit é destinado a maiores de 18 anos. Menores só podem usar com a autorização e
                o acompanhamento de um responsável legal.
              </li>
            </ul>
          ),
        },
        {
          id: 'personal',
          n: '4',
          title: 'Responsabilidades do personal trainer',
          body: (
            <>
              <ul>
                <li>
                  A orientação profissional, os programas, as cargas e as avaliações são de
                  responsabilidade do personal. O Arafit é uma ferramenta de organização e não
                  prescreve treino.
                </li>
                <li>
                  O personal é o controlador dos dados dos alunos dele, nos termos da{' '}
                  <Link href="/produtos/arafit/privacidade">Política de Privacidade</Link>, e deve
                  usá-los apenas para atender esses alunos.
                </li>
                <li>
                  As informações que o personal registra (avaliações, agenda, valores e status de
                  pagamento) são de responsabilidade dele.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'saude',
          n: '5',
          title: 'Saúde e segurança',
          body: (
            <>
              <p>
                <strong>O Arafit não substitui avaliação médica.</strong> Os recursos de anamnese,
                PAR-Q, avaliações e testes servem para registro e acompanhamento, não para
                diagnóstico.
              </p>
              <p>
                Quando o PAR-Q indica alerta, o aluno precisa de <strong>liberação médica</strong>{' '}
                antes de começar ou continuar o treino. Cabe ao personal e ao aluno respeitar essa
                orientação.
              </p>
              <p>
                O aluno deve informar ao personal, com sinceridade, o histórico de saúde, lesões e
                medicamentos, e interromper o exercício diante de qualquer sinal de mal-estar.
              </p>
            </>
          ),
        },
        {
          id: 'assinaturas',
          n: '6',
          title: 'Planos e assinaturas',
          body: (
            <>
              <ul>
                <li>
                  <strong>Personal:</strong> grátis com até 2 alunos ativos; <strong>Pro</strong>{' '}
                  (até 10 alunos ativos) por R$ 9,90/mês ou R$ 99/ano; <strong>Ilimitado</strong> por
                  R$ 29,90/mês ou R$ 239/ano.
                </li>
                <li>
                  <strong>Preço de fundador:</strong> os 100 primeiros assinantes do Ilimitado pagam
                  R$ 19,90/mês ou R$ 199/ano <strong>por 2 anos</strong> a partir da assinatura. Depois
                  desse prazo vale o preço normal do Ilimitado. Quem fica mais de 60 dias sem pagar
                  perde o preço de fundador.
                </li>
                <li>
                  <strong>Aluno:</strong> usa grátis o programa do personal. Com personal no plano
                  grátis, o acesso grátis dura 30 dias desde a entrada no app; com personal Pro ou
                  Ilimitado, não tem prazo. <strong>Arafit Pessoal</strong> por R$ 4,90/mês ou R$ 49/ano,
                  para treinar também por conta (programas próprios, programas prontos e montar treino
                  com a IA), com ou sem personal.
                </li>
                <li>
                  <strong>Pacote de IA:</strong> 200 usos por R$ 4,90, compra única, sem validade.
                  Os usos do pacote só são gastos depois da cota do mês do plano.
                </li>
              </ul>
              <p>
                As assinaturas são compradas dentro do app e cobradas pela{' '}
                <strong>Apple App Store</strong> ou pelo <strong>Google Play</strong>, na conta da
                loja de quem assina. A gestão das assinaturas é feita pelo RevenueCat.
              </p>
              <ul>
                <li>
                  A assinatura <strong>renova automaticamente</strong> ao fim de cada período, pelo
                  mesmo valor, até ser cancelada.
                </li>
                <li>
                  Para não ser cobrado no próximo período, cancele nos ajustes de assinaturas da App
                  Store ou do Google Play <strong>até 24 horas antes da renovação</strong>. O acesso
                  continua até o fim do período já pago.
                </li>
                <li>
                  O app não faz reembolsos: pedidos de reembolso seguem a política da loja onde a
                  compra foi feita.
                </li>
                <li>
                  Trocou de aparelho? Use <strong>Restaurar compras</strong> no app para recuperar
                  uma assinatura ativa.
                </li>
                <li>
                  Se os preços mudarem, avisaremos antes, e a mudança segue as regras da loja para
                  assinaturas em andamento.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'cobranca-dos-alunos',
          n: '7',
          title: 'Cobrança do personal aos alunos',
          body: (
            <>
              <p>
                O Arafit ajuda o personal a organizar a cobrança dos alunos (mensal, por aula ou por
                pacote de aulas) e a mandar lembretes pelo WhatsApp com a chave Pix dele.{' '}
                <strong>O app não processa esse pagamento</strong>: o dinheiro vai direto do aluno
                para o personal, e o personal marca no app quando recebeu.
              </p>
              <p>
                A AraLabs não é parte do acordo entre personal e aluno e não responde por valores,
                atrasos, descontos ou devoluções combinados entre eles. Divergências sobre esses
                pagamentos devem ser resolvidas entre o personal e o aluno.
              </p>
            </>
          ),
        },
        {
          id: 'uso-aceitavel',
          n: '8',
          title: 'Uso aceitável',
          body: (
            <>
              <p>Ao usar o Arafit, você concorda em NÃO:</p>
              <ul>
                <li>
                  Usar o aplicativo para fins ilegais, abusivos ou que violem direitos de terceiros.
                </li>
                <li>
                  Cadastrar pessoas sem o conhecimento delas ou usar o número de telefone de outra
                  pessoa.
                </li>
                <li>
                  Enviar conteúdo ofensivo, ameaçador, discriminatório ou sexualmente explícito.
                </li>
                <li>
                  Fazer engenharia reversa, descompilar, modificar ou tentar obter código-fonte do
                  aplicativo, exceto onde a lei expressamente permitir.
                </li>
                <li>Tentar acessar dados de outros usuários por meios não autorizados.</li>
                <li>
                  Usar os dados de alunos para qualquer finalidade fora do acompanhamento do treino.
                </li>
                <li>
                  Usar uma conta de personal em nome de uma academia ou empresa, ou compartilhar uma
                  conta entre vários profissionais (veja o item 3).
                </li>
              </ul>
              <p>
                Identificou uma vulnerabilidade? Reporte responsavelmente para{' '}
                <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a> antes de divulgar
                publicamente.
              </p>
            </>
          ),
        },
        {
          id: 'conteudo',
          n: '9',
          title: 'Seus dados e conteúdo',
          body: (
            <p>
              Programas, treinos, avaliações e demais registros que você cria continuam sendo seus.
              Você concede à AraLabs uma licença não-exclusiva e gratuita, limitada ao tempo de uso
              da conta, para armazenar, exibir e transmitir esse conteúdo às pessoas que podem vê-lo
              segundo a <Link href="/produtos/arafit/privacidade">Política de Privacidade</Link>,
              com o único objetivo de operar o aplicativo.
            </p>
          ),
        },
        {
          id: 'disponibilidade',
          n: '10',
          title: 'Disponibilidade e mudanças',
          body: (
            <p>
              Trabalhamos para manter o app disponível, mas não garantimos funcionamento 100%
              ininterrupto. Manutenção, indisponibilidade de serviços de terceiros (como o
              armazenamento em nuvem, o envio de SMS ou as lojas de apps) ou eventos fora do nosso
              controle podem causar interrupções pontuais. Podemos atualizar, modificar ou
              descontinuar funcionalidades; mudanças relevantes serão comunicadas pelo app.
            </p>
          ),
        },
        {
          id: 'encerramento',
          n: '11',
          title: 'Encerramento da conta',
          body: (
            <>
              <p>
                Você pode pedir a exclusão da sua conta a qualquer momento, como explicado em{' '}
                <Link href="/produtos/arafit/excluir-conta">Excluir conta</Link>. A exclusão remove
                seus dados pessoais nos prazos descritos na{' '}
                <Link href="/produtos/arafit/privacidade">Política de Privacidade</Link>. Excluir a
                conta não cancela uma assinatura: cancele na App Store ou no Google Play.
              </p>
              <p>
                Podemos suspender ou encerrar contas que violem estes Termos, especialmente em casos
                de uso abusivo, fraude ou risco a outros usuários. Quando possível, daremos aviso
                prévio.
              </p>
            </>
          ),
        },
        {
          id: 'responsabilidade',
          n: '12',
          title: 'Garantias e limitação de responsabilidade',
          body: (
            <>
              <p>
                O Arafit é fornecido &ldquo;como está&rdquo;. Não garantimos que ele atenda 100% das
                suas necessidades específicas, nem que esteja livre de erros. Faremos esforços
                razoáveis para corrigir problemas reportados.
              </p>
              <p>
                A AraLabs não responde pela orientação de treino, pelas cargas prescritas, por
                lesões decorrentes da prática de exercícios nem pelos acordos financeiros entre
                personal e aluno.
              </p>
              <p>
                Na máxima extensão permitida por lei, a responsabilidade total da AraLabs por
                quaisquer perdas relacionadas ao uso do app é limitada ao valor pago por você em
                assinaturas do Arafit nos 12 meses anteriores ao evento. Não somos responsáveis por
                danos indiretos, lucros cessantes ou perda de dados causados por terceiros.
              </p>
              <p>
                Nada nestes Termos limita responsabilidades que não podem ser excluídas por lei (ex:
                dolo, dano direto causado por culpa grave da AraLabs).
              </p>
            </>
          ),
        },
        {
          id: 'propriedade-intelectual',
          n: '13',
          title: 'Propriedade intelectual',
          body: (
            <p>
              A marca Arafit, o nome AraLabs, o logotipo, a identidade visual e o software em si são
              de propriedade da AraLabs. Você recebe uma licença pessoal, não-exclusiva e revogável
              para usar o app conforme estes Termos. Não pode redistribuir, sublicenciar ou criar
              obras derivadas sem autorização escrita.
            </p>
          ),
        },
        {
          id: 'lei-e-foro',
          n: '14',
          title: 'Lei aplicável e foro',
          body: (
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais
              litígios serão resolvidos no foro da Comarca de Arapongas, Paraná, salvo se a
              legislação consumerista aplicável exigir foro diverso.
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '15',
          title: 'Mudanças nestes Termos',
          body: (
            <p>
              Podemos revisar estes Termos para refletir evoluções do produto ou exigências legais.
              Quando houver mudança material, vamos avisar dentro do app antes de a nova versão
              entrar em vigor. A versão atual está sempre disponível em{' '}
              <Link href="/produtos/arafit/termos">aralabs.com.br/produtos/arafit/termos</Link>.
              Versão atual: <strong>{VIGENCIA}</strong>.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '16',
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
