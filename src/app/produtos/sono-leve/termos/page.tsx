import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Termos de uso — Sono Leve';
const pageDescription =
  'Termos de uso do Sono Leve. App de apoio ao treino de sono do bebê — não substitui orientação pediátrica.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/sono-leve/termos' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/sono-leve/termos',
    type: 'website',
  },
};

const VIGENCIA = '3 de outubro de 2026';

export default function SonoLeveTermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sono Leve · Termos"
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
              O Sono Leve é um aplicativo da AraLabs que auxilia famílias no treino de sono do bebê.
              Ao baixar e usar o app, você concorda com estes termos.
            </p>

            <h2>1. Sobre o Sono Leve</h2>
            <p>
              O Sono Leve é um app que auxilia famílias no treino de sono do bebê pelo método Ferber
              e variações. Ele oferece timer, registro de sessões, episódios noturnos e check-ins,
              registro de mamadas, histórico e dashboard.
            </p>

            <h2>2. Não é conselho médico</h2>
            <p>
              <strong>
                O Sono Leve é uma ferramenta auxiliar e não substitui a orientação do pediatra
              </strong>
              , de uma consultora de sono certificada ou de qualquer outro profissional de saúde.
              Também não substitui a supervisão direta do bebê:{' '}
              <strong>sempre supervisione o bebê de perto</strong>.
            </p>
            <ul>
              <li>O Sono Leve não diagnostica nenhuma condição.</li>
              <li>O Sono Leve não trata nem previne problemas de saúde do bebê.</li>
              <li>
                O método Ferber pressupõe um bebê saudável. Antes de começar um treino de sono,
                converse com o pediatra.
              </li>
              <li>
                Em qualquer dúvida ou sinal de alerta, pegue o bebê no colo e procure um
                profissional de saúde.
              </li>
              <li>
                <strong>Em emergência, ligue 192 (SAMU)</strong> ou vá direto ao pronto-socorro
                pediátrico.
              </li>
            </ul>

            <h2>3. Uso por sua conta e risco</h2>
            <p>
              O treino de sono é uma decisão da família. Os métodos suportados pelo app (como Ferber
              clássico e suave) são amplamente discutidos na literatura pediátrica, mas{' '}
              <strong>não são adequados a todos os bebês</strong>. Avalie sempre os sinais do seu
              bebê — e o seu emocional. Interromper o treino a qualquer momento é sempre uma opção
              válida.
            </p>

            <h2>4. Sem garantias de resultado</h2>
            <p>
              O app não promete que seu bebê vai dormir melhor, mais rápido, ou em qualquer prazo. O
              sucesso depende de muitas variáveis fora do controle do app. Intervalos, lembretes e
              estatísticas são apoio à organização da família, não recomendação clínica.
            </p>

            <h2>5. Privacidade</h2>
            <p>
              Nada do que você registra no app é enviado pra nuvem, servidor ou terceiros. Se você
              apagar o app ou usar “Apagar todos os dados”, os dados somem. Detalhes em{' '}
              <a href="/produtos/sono-leve/privacidade">Política de privacidade</a>.
            </p>

            <h2>6. Conta</h2>
            <p>Não há conta no Sono Leve. Você não precisa fazer login. O app funciona offline.</p>

            <h2>7. Limitação de responsabilidade</h2>
            <p>
              O Sono Leve é fornecido “como está”. A AraLabs faz o melhor que pode pra que o app
              funcione bem, mas não pode garantir que será 100% livre de bugs — por isso{' '}
              <strong>
                nunca dependa só do app (timer, vibração ou notificação) pra cuidar do bebê
              </strong>
              . A AraLabs não se responsabiliza por decisões tomadas com base no app nem por perda
              de dados locais (ao desinstalar o app ou trocar de aparelho, por exemplo).
            </p>

            <h2>8. Mudanças nestes termos</h2>
            <p>
              Estes termos podem mudar em versões futuras do app. Em caso de mudança relevante,
              avisaremos na primeira vez que você abrir o app após a atualização.
            </p>

            <h2>9. Contato</h2>
            <p>
              Dúvidas: <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Veja
              também a página de <a href="/produtos/sono-leve/suporte">suporte</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
