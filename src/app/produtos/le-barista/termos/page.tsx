import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Termos de uso — Le Barista';
const pageDescription =
  'Termos de uso do Le Barista. App da AraLabs que guia, passo a passo, o preparo de espresso e café coado em casa.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/le-barista/termos',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

const VIGENCIA = '6 de outubro de 2026';

export default function LeBaristaTermosPage() {
  return (
    <LegalPage
      product="le-barista"
      doc="termos"
      title={
        <>
          Termos de <Hl>uso.</Hl>
        </>
      }
      intro="App da AraLabs que guia, passo a passo, o preparo de espresso e café coado em casa."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Le Barista é um aplicativo da AraLabs pra quem faz café em casa. Ao baixar e usar o app,
          você concorda com estes termos.
        </p>
      }
      summary={[
        {
          label: 'Quanto custa',
          text: <>Gratuito, sem anúncios.</>,
        },
        {
          label: 'O que não é',
          text: (
            <>
              As orientações são informativas e <strong>não garantem o resultado na xícara</strong>.
              Siga sempre as instruções do fabricante da sua máquina.
            </>
          ),
        },
        {
          label: 'Seus dados',
          text: (
            <>
              Ficam só no seu dispositivo. Desinstalar o app apaga seus registros, e a AraLabs não
              tem como recuperá-los.
            </>
          ),
        },
      ]}
      sections={[
        {
          id: 'sobre',
          n: '1',
          title: 'Sobre o Le Barista',
          body: (
            <p>
              O Le Barista ajuda você a acertar o café em casa. No espresso, você registra cada shot
              (tempo, dose, rendimento, moagem, sabor e corpo) e o app sugere um ajuste por vez,
              explicando o motivo. Também há guias de coados, imersão, leite vaporizado e bebidas,
              com timers e ilustrações, e o histórico dos seus preparos.
            </p>
          ),
        },
        {
          id: 'orientacoes',
          n: '2',
          title: 'As orientações são informativas',
          body: (
            <ul>
              <li>
                O diagnóstico é gerado automaticamente por regras, a partir do que você registra. É
                uma sugestão, não uma garantia: café, moedor e máquina variam, e o resultado na
                xícara depende deles.
              </li>
              <li>Tempos e proporções sugeridos são pontos de partida, não regras fixas.</li>
              <li>O app não é avaliado nem endossado por fabricantes de máquinas ou moedores.</li>
            </ul>
          ),
        },
        {
          id: 'seguranca',
          n: '3',
          title: 'Segurança no preparo',
          body: (
            <>
              <p>
                Preparar café envolve <strong>água quente, vapor e máquinas sob pressão</strong>.
                Tome cuidado com queimaduras, principalmente ao vaporizar leite, ao remover o
                porta-filtro e ao manusear chaleiras.
              </p>
              <p>
                Você é responsável por usar seu equipamento com segurança e por seguir as{' '}
                <strong>instruções do fabricante da sua máquina</strong>. Se alguma orientação do
                app conflitar com o manual do seu equipamento, siga o manual.
              </p>
            </>
          ),
        },
        {
          id: 'gratuito',
          n: '4',
          title: 'Modelo gratuito',
          body: (
            <p>
              O Le Barista é <strong>gratuito</strong>, sem anúncios. Se no futuro houver recursos
              pagos, eles serão opcionais, apresentados com clareza antes de qualquer cobrança
              (feita pela App Store), e estes termos serão atualizados.
            </p>
          ),
        },
        {
          id: 'privacidade',
          n: '5',
          title: 'Privacidade',
          body: (
            <p>
              O Le Barista não tem conta, não tem servidor e não usa a internet. Seus dados ficam no
              seu dispositivo. Detalhes em{' '}
              <a href="/produtos/le-barista/privacidade">Política de privacidade</a>.
            </p>
          ),
        },
        {
          id: 'uso-responsavel',
          n: '6',
          title: 'Uso responsável',
          body: (
            <p>
              Você é responsável pelo conteúdo que registra no app (nomes de cafés, torrefações,
              notas). O app é de uso pessoal.
            </p>
          ),
        },
        {
          id: 'responsabilidade',
          n: '7',
          title: 'Limitação de responsabilidade',
          body: (
            <p>
              O Le Barista é fornecido “como está”. A AraLabs faz o melhor que pode pra que o app
              funcione bem, mas não pode garantir que será 100% livre de bugs nem que você vai
              chegar a um resultado específico. Como os dados ficam só no seu dispositivo,{' '}
              <strong>
                desinstalar o app ou trocar de aparelho sem backup apaga seus registros
              </strong>
              , e a AraLabs não tem como recuperá-los. A AraLabs não se responsabiliza por danos ao
              equipamento, por acidentes no preparo nem por consequências indiretas de falhas do app
              ou de perda de dados locais.
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '8',
          title: 'Mudanças nestes termos',
          body: (
            <p>
              Se uma versão futura do app mudar substancialmente o modelo (ex: passar a ter recursos
              pagos, backup em nuvem ou outra forma de coleta de dados), estes termos serão
              atualizados e o app avisará você, pedindo consentimento explícito quando necessário.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '9',
          title: 'Contato',
          body: (
            <p>
              Dúvidas: <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja
              também a página de <a href="/produtos/le-barista/suporte">suporte</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
