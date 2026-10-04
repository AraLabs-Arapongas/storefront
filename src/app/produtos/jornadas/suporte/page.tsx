import type { Metadata } from 'next';
import { Hl, LegalPage, SupportMail } from '@/components/legal/LegalPage';

const pageTitle = 'Suporte — Jornadas';
const pageDescription =
  'Suporte do Jornadas: contato por e-mail e respostas pras dúvidas mais comuns sobre dados, backup e lembretes.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/jornadas/suporte' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/jornadas/suporte',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function JornadasSuportePage() {
  return (
    <LegalPage
      product="jornadas"
      doc="suporte"
      title={
        <>
          Como podemos <Hl>ajudar?</Hl>
        </>
      }
      intro="Fale com a gente por e-mail ou veja as dúvidas mais comuns."
      date={{ label: 'Atualizado em', value: VIGENCIA }}
      lead={
        <p>
          Encontrou um problema, tem uma sugestão ou ficou com alguma dúvida sobre o Jornadas?
          Escreva pra <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Se puder,
          conte o modelo do seu iPhone, a versão do iOS e a versão do app (em Configurações, no fim
          da tela).
        </p>
      }
      callout={<SupportMail subject="Suporte Jornadas" />}
      sections={[
        {
          id: 'perguntas-frequentes',
          title: 'Perguntas frequentes',
          faq: [
            {
              id: 'conta',
              q: 'Preciso criar uma conta?',
              a: <p>Não. O Jornadas não tem login nem cadastro. É só abrir e usar.</p>,
            },
            {
              id: 'onde-ficam-os-dados',
              q: 'Onde ficam meus dados?',
              a: (
                <p>
                  No seu iPhone, dentro do armazenamento privado do app. Não existe servidor da
                  AraLabs guardando suas jornadas, sessões ou fotos. A única coisa que sai do
                  aparelho é o texto da busca de livros (ou o ISBN escaneado), enviado ao Google
                  Books e à Open Library pra encontrar título, autor e capa. Detalhes na{' '}
                  <a href="/produtos/jornadas/privacidade">Política de privacidade</a>.
                </p>
              ),
            },
            {
              id: 'backup',
              q: 'Tem backup? O que acontece se eu apagar o app?',
              a: (
                <>
                  <p>
                    O Jornadas ainda não tem backup ou sincronização próprios. Como tudo é local,{' '}
                    <strong>se você apagar o app, os dados são apagados junto</strong> e não temos
                    como recuperá-los — não existe cópia em lugar nenhum fora do seu aparelho.
                  </p>
                  <p>
                    Ao trocar de iPhone restaurando um backup completo do aparelho (iCloud ou
                    computador), os dados de apps normalmente vão junto, mas isso depende das suas
                    configurações de backup do iOS e não é garantido pelo app.
                  </p>
                </>
              ),
            },
            {
              id: 'apagar-dados',
              q: 'Como apago todos os meus dados?',
              a: (
                <p>
                  Em <strong>Configurações → Apagar dados</strong>. Jornadas, sessões, perfil e
                  preferências voltam ao estado inicial — não dá pra desfazer. Desinstalar o app
                  também apaga tudo, incluindo as fotos de capa salvas.
                </p>
              ),
            },
            {
              id: 'livro-nao-encontrado',
              q: 'Não encontrei meu livro na busca. E agora?',
              a: (
                <p>
                  Tente buscar pelo ISBN (digitado ou escaneado na contracapa). Se mesmo assim não
                  aparecer, use <strong>“Não encontrou? Adicionar manualmente”</strong> e preencha
                  título, autor e número de páginas.
                </p>
              ),
            },
            {
              id: 'camera-e-fotos',
              q: 'Por que o app pede acesso à câmera e às fotos?',
              a: (
                <p>
                  A câmera serve pra escanear o código de barras do livro e, se você quiser, tirar a
                  foto de capa de uma jornada. As fotos servem pra escolher uma capa ou sua foto de
                  perfil. Nada disso sai do aparelho, e você pode negar a permissão e usar o app
                  normalmente.
                </p>
              ),
            },
            {
              id: 'lembretes',
              q: 'Não estou recebendo os lembretes.',
              a: (
                <p>
                  Confira se os lembretes estão ligados em{' '}
                  <strong>Configurações → Notificações</strong> no app e se as notificações do
                  Jornadas estão permitidas em{' '}
                  <strong>Ajustes do iPhone → Jornadas → Notificações</strong>. Modos de Foco também
                  podem silenciar os avisos.
                </p>
              ),
            },
          ],
        },
        {
          id: 'documentos',
          title: 'Documentos',
          body: (
            <ul>
              <li>
                <a href="/produtos/jornadas/privacidade">Política de privacidade</a>
              </li>
              <li>
                <a href="/produtos/jornadas/termos">Termos de uso</a>
              </li>
            </ul>
          ),
        },
        {
          id: 'contato',
          title: 'Contato',
          body: (
            <p>
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a> — AraLabs (Thiago
              Tavares Consulting Ltda. - ME, CNPJ 50.010.836/0001-45).
            </p>
          ),
        },
      ]}
    />
  );
}
