import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Termos de uso — Jornadas';
const pageDescription =
  'Termos de uso do Jornadas. App da AraLabs pra acompanhar metas pessoais — leituras, cursos, hábitos.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/jornadas/termos',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

const VIGENCIA = '3 de outubro de 2026';

export default function JornadasTermosPage() {
  return (
    <LegalPage
      product="jornadas"
      doc="termos"
      title={
        <>
          Termos de <Hl>uso.</Hl>
        </>
      }
      intro="App da AraLabs pra acompanhar metas pessoais — leituras, cursos, hábitos."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Jornadas é um aplicativo da AraLabs pra acompanhar metas pessoais. Ao baixar e usar o
          app, você concorda com estes termos.
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
              Não garante que você vai concluir suas metas e{' '}
              <strong>não substitui orientação médica, nutricional ou de educação física</strong>.
            </>
          ),
        },
        {
          label: 'Seus dados',
          text: (
            <>
              Ficam só no seu dispositivo. Desinstalar o app ou usar “Apagar dados” apaga seus
              registros, e a AraLabs não tem como recuperá-los.
            </>
          ),
        },
      ]}
      sections={[
        {
          id: 'sobre',
          n: '1',
          title: 'Sobre o Jornadas',
          body: (
            <p>
              O Jornadas ajuda você a acompanhar o que quer avançar — um livro, um curso, um
              projeto, um hábito. Você cria jornadas, registra sessões e check-ins, e acompanha
              progresso, sequência de dias, meta semanal e conquistas.
            </p>
          ),
        },
        {
          id: 'nao-promete',
          n: '2',
          title: 'O que o Jornadas não promete',
          body: (
            <ul>
              <li>O Jornadas não garante que você vai concluir suas metas.</li>
              <li>
                As mensagens de incentivo são geradas automaticamente no app e não são orientação
                profissional.
              </li>
              <li>
                Jornadas de saúde ou atividade física são só registro: o app{' '}
                <strong>não substitui orientação médica, nutricional ou de educação física</strong>.
              </li>
            </ul>
          ),
        },
        {
          id: 'gratuito',
          n: '3',
          title: 'Modelo gratuito',
          body: (
            <p>
              O Jornadas é <strong>gratuito</strong>, sem anúncios. Se no futuro houver recursos
              pagos, eles serão opcionais, apresentados com clareza antes de qualquer cobrança
              (feita pela App Store), e estes termos serão atualizados.
            </p>
          ),
        },
        {
          id: 'terceiros',
          n: '4',
          title: 'Conteúdo de terceiros',
          body: (
            <p>
              Título, autor, número de páginas e capa dos livros encontrados na busca vêm do{' '}
              <a href="https://books.google.com" target="_blank" rel="noopener noreferrer">
                Google Books
              </a>{' '}
              e da{' '}
              <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">
                Open Library
              </a>
              . Esse conteúdo pertence aos respectivos titulares, é exibido só pra identificar o
              livro na sua jornada, e a AraLabs não garante que esteja completo ou correto — você
              pode editar ou adicionar o livro manualmente.
            </p>
          ),
        },
        {
          id: 'privacidade',
          n: '5',
          title: 'Privacidade',
          body: (
            <p>
              O Jornadas não tem conta nem servidor. Seus dados ficam no seu dispositivo. Detalhes
              em <a href="/produtos/jornadas/privacidade">Política de privacidade</a>.
            </p>
          ),
        },
        {
          id: 'uso-responsavel',
          n: '6',
          title: 'Uso responsável',
          body: (
            <p>
              Você é responsável pelo conteúdo que registra no app (nomes, notas, fotos) e por usar
              imagens que tem direito de usar. O app é de uso pessoal.
            </p>
          ),
        },
        {
          id: 'responsabilidade',
          n: '7',
          title: 'Limitação de responsabilidade',
          body: (
            <p>
              O Jornadas é fornecido “como está”. A AraLabs faz o melhor que pode pra que o app
              funcione bem, mas não pode garantir que será 100% livre de bugs. Como os dados ficam
              só no seu dispositivo,{' '}
              <strong>
                desinstalar o app, trocar de aparelho sem backup ou usar “Apagar dados” apaga seus
                registros
              </strong>
              , e a AraLabs não tem como recuperá-los. A AraLabs não se responsabiliza por
              consequências indiretas de falhas do app ou de perda de dados locais.
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
              também a página de <a href="/produtos/jornadas/suporte">suporte</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
