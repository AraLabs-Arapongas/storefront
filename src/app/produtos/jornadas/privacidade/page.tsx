import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Política de Privacidade — Jornadas';
const pageDescription =
  'O Jornadas não tem conta, servidor nem analytics. Seus dados ficam no seu celular. Esta política descreve em linguagem direta como tratamos privacidade.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/jornadas/privacidade' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/jornadas/privacidade',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function JornadasPrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Jornadas · Privacidade"
        title={
          <>
            Política de{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">privacidade</span>.
          </>
        }
        description={`Em vigor desde ${VIGENCIA}. Resumo: seus dados ficam no seu celular.`}
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              O Jornadas é um aplicativo da AraLabs pra acompanhar metas pessoais — ler um livro,
              fazer um curso, criar um hábito.{' '}
              <strong>Não tem conta, não tem login, não tem servidor.</strong> Esta política
              descreve em linguagem direta como tratamos privacidade.
            </p>

            <h2>1. Quem somos</h2>
            <p>
              <strong>Controlador dos dados:</strong> Thiago Tavares Consulting Ltda. - ME (nome
              fantasia <strong>AraLabs</strong>), CNPJ <strong>50.010.836/0001-45</strong>, com sede
              na Rua Guaraúna, 288, Jardim Primavera, Arapongas/PR, CEP 86702-480.
              <br />
              <strong>Encarregado / contato de privacidade:</strong>{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>2. Resumo em 1 linha</h2>
            <p>
              <strong>O que você registra fica no seu celular.</strong> O Jornadas não tem servidor
              da AraLabs, não tem cloud, não tem analytics e não tem anúncios. A única coisa que sai
              do aparelho é o texto que você digita na busca de livros (ou o ISBN escaneado), pra
              buscar título, autor e capa — veja a seção 5.
            </p>

            <h2>3. O que o app armazena (localmente)</h2>
            <p>
              Os seguintes dados ficam apenas no armazenamento interno do app, dentro do sandbox do
              seu dispositivo:
            </p>
            <ul>
              <li>
                <strong>Perfil</strong> — nome, frase de motivação e foto de perfil opcional.
              </li>
              <li>
                <strong>Jornadas</strong> — título, tipo (livro, curso, hábito etc.), autor, capa,
                meta diária, total, progresso, motivação e horário de lembrete.
              </li>
              <li>
                <strong>Sessões e check-ins</strong> — data, duração, avanço e notas opcionais que
                você digitar.
              </li>
              <li>
                <strong>Estatísticas e conquistas</strong> — sequência de dias, meta semanal,
                minutos totais. Tudo calculado no próprio aparelho a partir das suas sessões.
              </li>
              <li>
                <strong>Preferências</strong> — tom das mensagens de incentivo e configuração dos
                lembretes.
              </li>
              <li>
                <strong>Fotos de capa</strong> que você tira ou escolhe pra uma jornada — copiadas
                pra pasta privada do app.
              </li>
            </ul>

            <h2>4. O que o app NÃO faz</h2>
            <ul>
              <li>Não envia seus dados pra nuvem ou servidor nosso.</li>
              <li>Não há servidor da AraLabs envolvido em momento algum.</li>
              <li>Não há analytics de uso (Google Analytics, Mixpanel, Amplitude, etc).</li>
              <li>Não há anúncios nem rastreamento entre apps.</li>
              <li>Não compartilha seus dados com terceiros.</li>
              <li>Não pede email, telefone ou qualquer identificador.</li>
              <li>
                Não acessa contatos, localização, microfone ou outras informações do aparelho.
              </li>
              <li>Não há login. Não há conta. Não há cadastro.</li>
            </ul>

            <h2>5. Busca de livros (Google Books e Open Library)</h2>
            <p>
              Quando você busca um livro pelo título, autor ou ISBN — digitando ou escaneando o
              código de barras —, o app envia <strong>apenas o texto da busca ou o ISBN</strong> pra
              dois serviços públicos de catálogo de livros:
            </p>
            <ul>
              <li>
                <strong>Google Books API</strong> (Google), e
              </li>
              <li>
                <strong>Open Library</strong> (Internet Archive).
              </li>
            </ul>
            <p>
              Eles devolvem título, autor, número de páginas e o endereço da capa. As capas são
              carregadas desses mesmos serviços. Nenhum dado seu (nome, jornadas, sessões, fotos) é
              enviado junto. Como em qualquer acesso à internet, esses serviços recebem o endereço
              IP e informações técnicas da conexão, e tratam esses dados conforme as próprias
              políticas — por exemplo, a{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade do Google
              </a>
              .
            </p>
            <p>
              Se você não usar a busca (adicionando o livro manualmente ou criando outro tipo de
              jornada), nada sai do aparelho.
            </p>

            <h2>6. Permissões do aparelho</h2>
            <p>O app só pede permissão quando você usa o recurso correspondente:</p>
            <ul>
              <li>
                <strong>Câmera</strong> — pra escanear o código de barras (ISBN) de um livro e, se
                você quiser, tirar a foto de capa de uma jornada. Do escaneamento, só o número do
                ISBN é usado; nenhuma imagem é guardada ou enviada. A foto de capa fica só no
                aparelho.
              </li>
              <li>
                <strong>Fotos</strong> — pra escolher a capa de uma jornada ou sua foto de perfil. A
                imagem escolhida fica só no aparelho.
              </li>
              <li>
                <strong>Notificações</strong> — pra lembretes que você configura. São agendados
                localmente pelo sistema do iPhone; não há servidor de notificações.
              </li>
            </ul>
            <p>Você pode negar ou revogar qualquer permissão nos Ajustes do iPhone.</p>

            <h2>7. Como apagar os dados</h2>
            <p>Você tem controle total. Pra apagar tudo, basta:</p>
            <ul>
              <li>
                Ir em <strong>Configurações → Apagar dados</strong> dentro do app. Jornadas,
                sessões, perfil e preferências voltam ao estado inicial.
              </li>
              <li>
                Ou desinstalar o app — os dados somem junto, incluindo as fotos de capa salvas.
              </li>
            </ul>
            <p>
              Não existe processo de exclusão remota porque não há cópia dos seus dados em lugar
              algum fora do seu dispositivo.
            </p>

            <h2>8. LGPD</h2>
            <p>
              Como seus dados não saem do seu celular, a AraLabs{' '}
              <strong>não realiza tratamento de dados pessoais</strong> nos termos da Lei Geral de
              Proteção de Dados (Lei 13.709/2018). Você é o controlador exclusivo dos seus próprios
              dados.
            </p>
            <p>
              Mesmo assim, em caso de dúvida sobre privacidade ou se você acreditar que essa
              política precisa de mais clareza, escreva pra{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>

            <h2>9. Crianças</h2>
            <p>
              O Jornadas é feito pra público geral e não é direcionado a crianças. De todo modo, o
              app não coleta dados de ninguém: o que é registrado fica no aparelho de quem usa.
            </p>

            <h2>10. Mudanças nesta política</h2>
            <p>
              Se uma versão futura do app passar a coletar algum dado (ex: backup ou sincronização
              opcional entre aparelhos), esta política será atualizada e o app avisará você, pedindo
              consentimento explícito antes de qualquer dado seu sair do dispositivo.
            </p>

            <h2>11. Contato</h2>
            <p>
              Dúvidas, sugestões ou denúncias:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja também a
              página de <a href="/produtos/jornadas/suporte">suporte</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
