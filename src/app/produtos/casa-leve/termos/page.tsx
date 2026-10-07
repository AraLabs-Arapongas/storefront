import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Termos de Uso — Casa Leve';
const pageDescription =
  'Regras de uso do aplicativo Casa Leve da AraLabs. Cobre cadastro, conduta, conteúdo do usuário, encerramento e responsabilidades.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/casa-leve/termos',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

const VIGENCIA = '7 de maio de 2026';

export default function CasaLeveTermosPage() {
  return (
    <LegalPage
      product="casa-leve"
      doc="termos"
      title={
        <>
          Termos de <Hl>uso.</Hl>
        </>
      }
      intro="Regras claras de uso do Casa Leve."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          Estes Termos regulam o uso do aplicativo Casa Leve, fornecido pela AraLabs. Ao criar uma
          conta, você declara que leu, entendeu e concorda com os termos abaixo. Se não concorda com
          alguma parte, não use o aplicativo.
        </p>
      }
      summary={[
        {
          label: 'Quem cria a conta',
          text: (
            <>
              Um adulto (maior de 18 anos) responsável pela casa. Crianças e adolescentes entram com
              autorização dele e ficam sob a supervisão do admin.
            </>
          ),
        },
        {
          label: 'Seu conteúdo',
          text: (
            <>
              Continua sendo seu. Não usamos seu conteúdo para treinar modelos de IA, anúncios ou
              produtos externos. Conteúdo objetável tem <strong>zero tolerância</strong>, e toda
              denúncia é analisada em até 24 horas úteis.
            </>
          ),
        },
        {
          label: 'Pontos e mesada',
          text: (
            <>
              Pontos não têm valor monetário fora da família. A AraLabs não intermedia pagamentos.
            </>
          ),
        },
        {
          label: 'Encerrar',
          text: (
            <>
              Você pode excluir sua conta a qualquer momento, em{' '}
              <strong>Ajustes → Excluir conta</strong> ou por e-mail.
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
              O Casa Leve é desenvolvido e mantido pela{' '}
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
          title: 'O que é o Casa Leve',
          body: (
            <p>
              O Casa Leve é um aplicativo móvel para organização da rotina familiar. Permite criar
              tarefas, recompensas, desafios e cardápio compartilhados entre os membros de uma mesma
              casa, com sistema de pontuação e aprovação por adultos.
            </p>
          ),
        },
        {
          id: 'cadastro',
          n: '3',
          title: 'Cadastro e elegibilidade',
          body: (
            <ul>
              <li>
                O cadastro principal (admin) deve ser feito por um adulto (maior de 18 anos)
                responsável pela casa.
              </li>
              <li>
                Cadastros de adolescentes e crianças devem ser autorizados pelo adulto responsável e
                ficam sob a supervisão do admin da casa.
              </li>
              <li>
                Você se compromete a fornecer informações verdadeiras e manter o acesso ao e-mail
                cadastrado, já que o login é feito por código numérico (OTP) enviado para esse
                endereço.
              </li>
              <li>
                Você é responsável por manter a confidencialidade do seu e-mail e do dispositivo
                onde o app está instalado.
              </li>
            </ul>
          ),
        },
        {
          id: 'uso-aceitavel',
          n: '4',
          title: 'Uso aceitável',
          body: (
            <>
              <p>Ao usar o Casa Leve, você concorda em NÃO:</p>
              <ul>
                <li>
                  Usar o aplicativo para fins ilegais, abusivos ou que violem direitos de terceiros.
                </li>
                <li>
                  Enviar conteúdo ofensivo, ameaçador, discriminatório, sexualmente explícito ou que
                  promova violência, especialmente em households com crianças.
                </li>
                <li>
                  Fazer engenharia reversa, descompilar, modificar ou tentar obter código-fonte do
                  aplicativo, exceto onde a lei expressamente permitir.
                </li>
                <li>
                  Tentar acessar dados de outros households ou usuários por meios não autorizados.
                </li>
                <li>
                  Automatizar criação de contas em massa, enviar spam ou explorar falhas de
                  segurança sem reportá-las antes.
                </li>
                <li>
                  Usar o app para coletar dados pessoais de outros usuários para qualquer finalidade
                  fora do uso normal previsto.
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
          id: 'conteudo-do-usuario',
          n: '5',
          title: 'Conteúdo do usuário',
          sub: [{ id: 'conteudo-objetavel', title: '5.1 Conteúdo objetável e moderação' }],
          body: (
            <>
              <p>
                Tarefas, fotos, comentários, reações e qualquer outro conteúdo que você criar dentro
                do app continuam sendo seus.
              </p>
              <p>
                Você concede à AraLabs uma licença não-exclusiva e gratuita, limitada no tempo de
                uso da sua conta, para hospedar, exibir e transmitir esse conteúdo aos demais
                membros da sua casa, com o único objetivo de operar o aplicativo. Essa licença
                termina quando o conteúdo é apagado ou quando a conta é excluída.
              </p>
              <p>
                Você é o único responsável pelo conteúdo que envia. Não usamos seu conteúdo para
                treinar modelos de IA, anúncios ou produtos externos.
              </p>

              <h3 id="conteudo-objetavel">5.1 Conteúdo objetável e moderação</h3>
              <p>
                É proibido enviar, compartilhar ou tornar disponível através do Casa Leve qualquer
                conteúdo que seja ofensivo, ameaçador, discriminatório, violento, sexualmente
                explícito, falso, difamatório, ilegal ou que viole direitos de terceiros — sem
                exceções e independentemente do destinatário.
              </p>
              <p>
                Mantemos zero tolerância a esse tipo de conteúdo. A AraLabs pode, a qualquer momento
                e a seu critério, remover conteúdo identificado como objetável e suspender ou
                encerrar a conta do autor sem aviso prévio.
              </p>
              <p>
                <strong>Como reportar.</strong> Se você encontrar algum conteúdo ou usuário
                inadequado dentro do Casa Leve:
              </p>
              <ul>
                <li>
                  Use o botão <em>Reportar conteúdo</em> disponível na tela do membro envolvido. Ele
                  abre seu cliente de email com o contexto pré-preenchido.
                </li>
                <li>
                  Ou mande um email direto para{' '}
                  <a href="mailto:legal@aralabs.com.br">legal@aralabs.com.br</a> com a descrição do
                  problema.
                </li>
              </ul>
              <p>
                Analisamos toda denúncia em até 24 horas úteis e tomamos a ação cabível:
                notificação, remoção de conteúdo, suspensão ou banimento do usuário responsável.
              </p>
              <p>
                <strong>Como bloquear.</strong> Administradores da casa podem remover membros pela
                tela <em>Família</em> a qualquer momento. Membros removidos perdem acesso imediato
                ao conteúdo da casa.
              </p>
            </>
          ),
        },
        {
          id: 'aprovacoes-e-pontos',
          n: '6',
          title: 'Aprovações e pontos',
          body: (
            <>
              <p>
                O sistema de pontuação, recompensas, desafios, mesada e aprovações é uma ferramenta
                interna da casa. <strong>Pontos não têm valor monetário fora da família</strong>: a
                conversão em dinheiro (mesada) acontece apenas como acordo entre os membros da casa,
                sem envolvimento financeiro da AraLabs.
              </p>
              <p>
                A AraLabs não intermedia pagamentos e não é parte de qualquer acordo financeiro
                entre os membros. Disputas sobre mesada, recompensas ou pontuação devem ser
                resolvidas internamente pela família.
              </p>
            </>
          ),
        },
        {
          id: 'disponibilidade',
          n: '7',
          title: 'Disponibilidade e mudanças',
          body: (
            <>
              <p>
                Trabalhamos para manter o app disponível, mas não garantimos funcionamento 100%
                ininterrupto. Manutenção, indisponibilidade de serviços de terceiros (Supabase,
                Resend, Expo) ou eventos fora do nosso controle podem causar interrupções pontuais.
              </p>
              <p>
                Podemos atualizar, modificar ou descontinuar funcionalidades a qualquer momento.
                Mudanças relevantes serão comunicadas pelo app ou por e-mail. Se uma versão futura
                passar a oferecer recursos pagos, o aviso será claro antes da cobrança e nenhum
                valor será debitado sem consentimento explícito.
              </p>
            </>
          ),
        },
        {
          id: 'encerramento',
          n: '8',
          title: 'Encerramento da conta',
          body: (
            <>
              <p>
                Você pode excluir sua conta a qualquer momento dentro do app (Ajustes → Excluir
                conta) ou solicitando por e-mail. A exclusão remove seus dados pessoais nos prazos
                descritos na{' '}
                <Link href="/produtos/casa-leve/privacidade">Política de Privacidade</Link>.
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
          n: '9',
          title: 'Garantias e limitação de responsabilidade',
          body: (
            <>
              <p>
                O Casa Leve é fornecido &ldquo;como está&rdquo;. Não garantimos que ele atenda 100%
                das suas necessidades específicas, nem que esteja livre de erros. Faremos esforços
                razoáveis para corrigir problemas reportados.
              </p>
              <p>
                Na máxima extensão permitida por lei, a responsabilidade total da AraLabs por
                quaisquer perdas relacionadas ao uso do app é limitada ao valor pago por você nos 12
                meses anteriores ao evento (atualmente o app é gratuito; portanto, R$ 0,00). Não
                somos responsáveis por danos indiretos, lucros cessantes ou perda de dados causados
                por terceiros.
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
          n: '10',
          title: 'Propriedade intelectual',
          body: (
            <p>
              A marca Casa Leve, o nome AraLabs, o logotipo, a identidade visual, ícones,
              ilustrações (incluindo o personagem AraPonga) e o software em si são de propriedade da
              AraLabs. Você recebe uma licença pessoal, não-exclusiva e revogável para usar o app
              conforme estes Termos. Não pode redistribuir, sublicenciar ou criar obras derivadas
              sem autorização escrita.
            </p>
          ),
        },
        {
          id: 'lei-e-foro',
          n: '11',
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
          n: '12',
          title: 'Mudanças nestes Termos',
          body: (
            <p>
              Podemos revisar estes Termos para refletir evoluções do produto ou exigências legais.
              Quando houver mudança material, vamos avisar dentro do app ou por e-mail antes de a
              nova versão entrar em vigor. A versão atual está sempre disponível em{' '}
              <Link href="/produtos/casa-leve/termos">
                aralabs.com.br/produtos/casa-leve/termos
              </Link>
              . Versão atual: <strong>{VIGENCIA}</strong>.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '13',
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
