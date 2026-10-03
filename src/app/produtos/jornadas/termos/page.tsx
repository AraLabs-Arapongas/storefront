import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Termos de uso — Jornadas';
const pageDescription =
  'Termos de uso do Jornadas. App da AraLabs pra acompanhar metas pessoais — leituras, cursos, hábitos.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/jornadas/termos' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/jornadas/termos',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function JornadasTermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Jornadas · Termos"
        title={
          <>
            Termos de <span className="font-serif italic text-[color:var(--gold-soft)]">uso</span>.
          </>
        }
        description={`Em vigor desde ${VIGENCIA}.`}
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              O Jornadas é um aplicativo da AraLabs pra acompanhar metas pessoais. Ao baixar e usar
              o app, você concorda com estes termos.
            </p>

            <h2>1. Sobre o Jornadas</h2>
            <p>
              O Jornadas ajuda você a acompanhar o que quer avançar — um livro, um curso, um
              projeto, um hábito. Você cria jornadas, registra sessões e check-ins, e acompanha
              progresso, sequência de dias, meta semanal e conquistas.
            </p>

            <h2>2. O que o Jornadas não promete</h2>
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

            <h2>3. Modelo gratuito</h2>
            <p>
              O Jornadas é <strong>gratuito</strong>, sem anúncios. Se no futuro houver recursos
              pagos, eles serão opcionais, apresentados com clareza antes de qualquer cobrança
              (feita pela App Store), e estes termos serão atualizados.
            </p>

            <h2>4. Conteúdo de terceiros</h2>
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

            <h2>5. Privacidade</h2>
            <p>
              O Jornadas não tem conta nem servidor. Seus dados ficam no seu dispositivo. Detalhes
              em <a href="/produtos/jornadas/privacidade">Política de privacidade</a>.
            </p>

            <h2>6. Uso responsável</h2>
            <p>
              Você é responsável pelo conteúdo que registra no app (nomes, notas, fotos) e por usar
              imagens que tem direito de usar. O app é de uso pessoal.
            </p>

            <h2>7. Limitação de responsabilidade</h2>
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

            <h2>8. Mudanças nestes termos</h2>
            <p>
              Se uma versão futura do app mudar substancialmente o modelo (ex: passar a ter recursos
              pagos, backup em nuvem ou outra forma de coleta de dados), estes termos serão
              atualizados e o app avisará você, pedindo consentimento explícito quando necessário.
            </p>

            <h2>9. Contato</h2>
            <p>
              Dúvidas: <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja
              também a página de <a href="/produtos/jornadas/suporte">suporte</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
