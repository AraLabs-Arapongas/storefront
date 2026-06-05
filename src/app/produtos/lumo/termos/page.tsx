import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';

const pageTitle = 'Termos de uso — Lumo';
const pageDescription =
  'Termos de uso do Lumo. App gratuito de comunicação visual pra famílias com crianças não-verbais.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/lumo/termos' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/lumo/termos',
    type: 'website',
  },
};

const VIGENCIA = '28 de maio de 2026';

export default function LumoTermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Lumo · Termos"
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
              O Lumo é um aplicativo da AraLabs de comunicação visual pra
              famílias com crianças não-verbais. Ao baixar e usar o app, você
              concorda com estes termos.
            </p>

            <h2>1. Sobre o Lumo</h2>
            <p>
              O Lumo é uma ferramenta de Comunicação Aumentativa e Alternativa
              (AAC) — apoia famílias a se comunicarem com crianças que ainda
              não falam ou comunicam-se de formas diferentes. <strong>O Lumo
              não substitui acompanhamento profissional</strong> de fonoaudiólogo,
              terapeuta ocupacional, psicólogo ou outro profissional de saúde
              ou educação.
            </p>

            <h2>2. O que o Lumo não promete</h2>
            <ul>
              <li>O Lumo não diagnostica nenhuma condição.</li>
              <li>O Lumo não trata, cura, nem reverte atraso de fala, autismo ou qualquer outra condição.</li>
              <li>O Lumo não promete que a criança vai falar.</li>
              <li>O Lumo não substitui terapia, fonoaudiologia, educação inclusiva ou avaliação médica.</li>
            </ul>
            <p>
              O Lumo é uma <strong>ponte de comunicação</strong>. Ajuda a criança
              a pedir, escolher, contar e se expressar via cards visuais. O
              progresso de cada criança depende de muitos fatores além do app.
            </p>

            <h2>3. Modelo gratuito</h2>
            <p>
              O Lumo é{' '}
              <strong>gratuito pra sempre para famílias</strong>. Sem assinatura,
              sem in-app purchases que desbloqueiem funcionalidade, sem ads.
              Eventuais opções futuras de "Apoiar o Lumo" via doação opt-in não
              desbloqueiam funcionalidade — o app continua igual de graça pra
              todo mundo.
            </p>

            <h2>4. Conteúdo de terceiros</h2>
            <p>
              O Lumo inclui pictogramas do{' '}
              <a href="https://arasaac.org" target="_blank" rel="noopener noreferrer">
                ARASAAC
              </a>{' '}
              sob licença Creative Commons BY-NC-SA 4.0. Detalhes em{' '}
              <a href="/produtos/lumo/creditos">Créditos e licenças</a>.
            </p>

            <h2>5. Privacidade</h2>
            <p>
              O Lumo não coleta dados. Tudo fica no seu dispositivo. Detalhes
              em <a href="/produtos/lumo/privacidade">Política de privacidade</a>.
            </p>

            <h2>6. Uso responsável</h2>
            <p>
              O Modo Criança permite entregar o tablet pra criança sem que ela
              acesse configurações. Esse modo é protegido por PIN configurado
              por um adulto responsável. <strong>O uso do Lumo deve ser
              supervisionado por um adulto</strong>, especialmente nas primeiras
              experiências da criança com comunicação aumentativa.
            </p>

            <h2>7. Limitação de responsabilidade</h2>
            <p>
              O Lumo é fornecido "como está". A AraLabs faz o melhor que pode
              pra que o app funcione bem, mas não pode garantir que será 100%
              livre de bugs. Em caso de falha do app, a AraLabs não se
              responsabiliza por consequências indiretas (frustração, atraso de
              comunicação, perda de dados locais). Os dados do app ficam no
              dispositivo do usuário — recomendamos exportar regularmente
              quando essa funcionalidade for adicionada.
            </p>

            <h2>8. Mudanças nestes termos</h2>
            <p>
              Se uma versão futura do app mudar substancialmente o modelo (ex:
              passar a ter tier pago, mudar coleta de dados), estes termos
              serão atualizados e o app avisará você na próxima abertura,
              pedindo consentimento explícito.
            </p>

            <h2>9. Contato</h2>
            <p>
              Dúvidas:{' '}
              <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
