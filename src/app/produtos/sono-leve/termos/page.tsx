import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Termos de Uso — Sono Leve';
const pageDescription =
  'Termos de uso do Sono Leve: app auxiliar de treino de sono pra bebê. Não substitui supervisão direta nem conselho médico.';

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

const VIGENCIA = '12 de maio de 2026';

export default function SonoLeveTermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sono Leve · Termos"
        title={
          <>
            Termos de{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">uso</span>.
          </>
        }
        description={`Em vigor desde ${VIGENCIA}.`}
      />

      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <article className="prose-policy">
            <p className="lead">
              Estes termos descrevem as condições de uso do <strong>Sono Leve</strong>,
              aplicativo da AraLabs voltado pra auxiliar famílias no treino de sono do bebê. Ao
              instalar e usar o app, você concorda com o disposto abaixo.
            </p>

            <h2>1. O que é o Sono Leve</h2>
            <p>
              O Sono Leve é uma ferramenta auxiliar pra registro e cronometragem do método
              Ferber (e variantes) de treino de sono infantil. Ele oferece:
            </p>
            <ul>
              <li>Timer Ferber com progressão automática de intervalos.</li>
              <li>Registro de check-ins por episódio (incluindo despertares noturnos).</li>
              <li>Histórico de sessões e dashboard de evolução.</li>
              <li>Alerta configurável de horário de mamada.</li>
              <li>Checklist de ritual pré-sono.</li>
              <li>Conteúdo educacional sobre quando interromper o método.</li>
            </ul>

            <h2>2. Não é conselho médico</h2>
            <p>
              <strong>O Sono Leve é uma ferramenta auxiliar.</strong> Não substitui supervisão
              direta do bebê, nem orientação de pediatra, consultora de sono certificada ou
              qualquer profissional de saúde habilitado. Em qualquer dúvida, sinal de alerta ou
              situação que pareça anormal, procure um profissional.
            </p>
            <p>
              <strong>Em emergência, ligue 192 (SAMU)</strong> ou vá direto ao pronto-socorro
              pediátrico.
            </p>

            <h2>3. Uso por sua conta e risco</h2>
            <p>
              O treino de sono é uma decisão livre da família. Os métodos suportados pelo app
              (Ferber clássico e Ferber suave) são amplamente discutidos na literatura
              pediátrica, mas não são adequados a todos os bebês ou todas as famílias.
            </p>
            <p>
              Avalie sempre:
            </p>
            <ul>
              <li>Os sinais físicos do seu bebê (saúde, idade adequada — geralmente 4-6 meses+).</li>
              <li>O estado emocional dos cuidadores.</li>
              <li>O conselho do pediatra do seu bebê.</li>
            </ul>
            <p>
              A AraLabs não se responsabiliza por decisões tomadas com base no uso do app, nem
              por resultados (ou falta deles) do treino de sono.
            </p>

            <h2>4. Sem garantias de resultado</h2>
            <p>
              O Sono Leve <strong>não promete</strong> que seu bebê vai dormir melhor, mais
              rápido, em qualquer prazo, ou que o método Ferber vai funcionar com seu filho.
              O sucesso depende de inúmeras variáveis fora do controle do app — idade do bebê,
              consistência da família, contexto da casa, saúde física e emocional.
            </p>

            <h2>5. Dados ficam no seu celular</h2>
            <p>
              Veja a{' '}
              <a href="/produtos/sono-leve/privacidade">Política de Privacidade</a>{' '}
              pra detalhes. Em resumo: nada do que você registra no app é enviado pra cloud,
              servidor ou terceiros. Se você apagar o app ou usar &ldquo;Apagar todos os
              dados&rdquo;, os dados somem.
            </p>

            <h2>6. Conta</h2>
            <p>
              <strong>Não há conta no Sono Leve.</strong> Você não precisa fazer login, criar
              cadastro nem fornecer email pra usar o app. O app funciona 100% offline.
            </p>

            <h2>7. Propriedade intelectual</h2>
            <p>
              O nome &ldquo;Sono Leve&rdquo;, o ícone, a marca AraLabs, o código-fonte e todo o
              conteúdo original do app são de propriedade exclusiva da AraLabs (Thiago Tavares
              Consulting Ltda. - ME). Você pode usar o app pra fins pessoais e familiares, mas
              não pode redistribuir, modificar, descompilar ou criar trabalhos derivados sem
              autorização escrita.
            </p>
            <p>
              O método Ferber é propriedade intelectual do Dr. Richard Ferber. O app referencia o
              método e implementa sua estrutura de intervalos progressivos, mas não está
              afiliado, endossado ou conectado ao Dr. Ferber ou suas obras.
            </p>

            <h2>8. Disponibilidade</h2>
            <p>
              O Sono Leve é distribuído via App Store (iOS). A AraLabs não garante
              disponibilidade contínua e pode descontinuar o app a qualquer momento mediante
              aviso prévio. Como os dados são locais, descontinuação não implica perda — eles
              continuam no seu dispositivo enquanto o app estiver instalado.
            </p>

            <h2>9. Mudanças nestes termos</h2>
            <p>
              Estes termos podem ser atualizados em versões futuras do app. Em caso de mudança
              relevante (ex: introdução de funcionalidade que coleta dados), o app avisará você
              na próxima abertura.
            </p>

            <h2>10. Foro</h2>
            <p>
              Eventuais disputas serão resolvidas no foro da comarca de Arapongas/PR, salvo se
              a legislação consumerista determinar foro diverso.
            </p>

            <h2>11. Contato</h2>
            <p>
              Dúvidas, sugestões ou suporte:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
