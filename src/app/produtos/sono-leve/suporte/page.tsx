import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Suporte — Sono Leve';
const pageDescription =
  'Suporte do Sono Leve: contato por e-mail e respostas pras dúvidas mais comuns sobre dados, backup e notificações.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/sono-leve/suporte' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/sono-leve/suporte',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function SonoLeveSuportePage() {
  return (
    <>
      <PageHero
        eyebrow="Sono Leve · Suporte"
        title={
          <>
            Como podemos{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">ajudar</span>?
          </>
        }
        description={`Atualizado em ${VIGENCIA}. Fale com a gente por e-mail ou veja as dúvidas mais comuns.`}
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              Encontrou um problema, tem uma sugestão ou ficou com alguma dúvida sobre o Sono Leve?
              Escreva pra <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Se
              puder, conte o modelo do seu celular, a versão do sistema e a versão do app (em
              Ajustes, no fim da tela).
            </p>
            <p>
              <strong>O Sono Leve não substitui o pediatra.</strong> Em qualquer sinal de alerta,
              pegue o bebê no colo e procure um profissional de saúde. Em emergência, ligue{' '}
              <strong>192 (SAMU)</strong>.
            </p>

            <h2>Perguntas frequentes</h2>

            <h3>Preciso criar uma conta?</h3>
            <p>Não. O Sono Leve não tem login nem cadastro e funciona offline.</p>

            <h3>Onde ficam os dados do meu bebê?</h3>
            <p>
              Num banco de dados local, dentro do armazenamento privado do app no seu celular. Nada
              vai pra nuvem nem é compartilhado com terceiros. Detalhes na{' '}
              <a href="/produtos/sono-leve/privacidade">Política de privacidade</a>.
            </p>

            <h3>Tem backup? O que acontece se eu apagar o app?</h3>
            <p>
              O Sono Leve ainda não tem backup, exportação ou sincronização próprios. Como tudo é
              local, <strong>se você apagar o app, os dados são apagados junto</strong> e não temos
              como recuperá-los — não existe cópia em lugar nenhum fora do seu aparelho.
            </p>
            <p>
              Ao trocar de celular restaurando um backup completo do aparelho (iCloud ou
              computador), os dados de apps normalmente vão junto, mas isso depende das suas
              configurações de backup e não é garantido pelo app.
            </p>

            <h3>Dá pra usar no celular do pai e da mãe ao mesmo tempo?</h3>
            <p>
              Hoje não há sincronização entre aparelhos: cada celular guarda os próprios registros.
              O ideal é registrar as noites sempre no mesmo aparelho.
            </p>

            <h3>Como apago todos os dados?</h3>
            <p>
              Em <strong>Ajustes → Apagar todos os dados</strong>. O app pede duas confirmações e
              apaga bebê, método, sessões e mamadas — não dá pra desfazer. Desinstalar o app também
              apaga tudo.
            </p>

            <h3>Como recomeço o treino ou troco de método?</h3>
            <p>
              Em <strong>Ajustes → Método de treino</strong>, escolha outro método. A progressão
              volta pro dia 1; o histórico das noites anteriores continua salvo.
            </p>

            <h3>Não estou recebendo o aviso de mamada.</h3>
            <p>
              O aviso é calculado a partir da última mamada registrada e do intervalo definido em{' '}
              <strong>Ajustes → Mamada</strong>. Confira se os dois estão preenchidos e se as
              notificações do Sono Leve estão permitidas nos ajustes do sistema (no iPhone:{' '}
              <strong>Ajustes → Sono Leve → Notificações</strong>). Modos de Foco também podem
              silenciar os avisos.
            </p>

            <h2>Documentos</h2>
            <ul>
              <li>
                <a href="/produtos/sono-leve/privacidade">Política de privacidade</a>
              </li>
              <li>
                <a href="/produtos/sono-leve/termos">Termos de uso</a>
              </li>
            </ul>

            <h2>Contato</h2>
            <p>
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a> — AraLabs (Thiago
              Tavares Consulting Ltda. - ME, CNPJ 50.010.836/0001-45).
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
