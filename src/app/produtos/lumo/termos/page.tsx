import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo/metadata';
import { Hl, LegalPage } from '@/components/legal/LegalPage';

const pageTitle = 'Termos de uso — Lumo';
const pageDescription =
  'Termos de uso do Lumo. App gratuito de comunicação visual pra famílias com crianças não-verbais.';

export const metadata: Metadata = pageMetadata({
  path: '/produtos/lumo/termos',
  title: pageTitle,
  description: pageDescription,
  noindex: true,
});

const VIGENCIA = '28 de maio de 2026';

export default function LumoTermosPage() {
  return (
    <LegalPage
      product="lumo"
      doc="termos"
      title={
        <>
          Termos de <Hl>uso.</Hl>
        </>
      }
      intro="App gratuito de comunicação visual pra famílias com crianças não-verbais."
      date={{ label: 'Em vigor desde', value: VIGENCIA }}
      lead={
        <p>
          O Lumo é um aplicativo da AraLabs de comunicação visual pra famílias com crianças
          não-verbais. Ao baixar e usar o app, você concorda com estes termos.
        </p>
      }
      summary={[
        {
          label: 'O que é',
          text: (
            <>
              Uma ponte de comunicação (AAC).{' '}
              <strong>Não substitui acompanhamento profissional</strong>, não diagnostica e não
              promete que a criança vai falar.
            </>
          ),
        },
        {
          label: 'Quanto custa',
          text: <>Gratuito pra sempre para famílias. Sem assinatura, sem ads.</>,
        },
        {
          label: 'Uso',
          text: <>Supervisionado por um adulto. Seus dados ficam no seu dispositivo.</>,
        },
      ]}
      sections={[
        {
          id: 'sobre',
          n: '1',
          title: 'Sobre o Lumo',
          body: (
            <p>
              O Lumo é uma ferramenta de Comunicação Aumentativa e Alternativa (AAC) — apoia
              famílias a se comunicarem com crianças que ainda não falam ou comunicam-se de formas
              diferentes. <strong>O Lumo não substitui acompanhamento profissional</strong> de
              fonoaudiólogo, terapeuta ocupacional, psicólogo ou outro profissional de saúde ou
              educação.
            </p>
          ),
        },
        {
          id: 'nao-promete',
          n: '2',
          title: 'O que o Lumo não promete',
          body: (
            <>
              <ul>
                <li>O Lumo não diagnostica nenhuma condição.</li>
                <li>
                  O Lumo não trata, cura, nem reverte atraso de fala, autismo ou qualquer outra
                  condição.
                </li>
                <li>O Lumo não promete que a criança vai falar.</li>
                <li>
                  O Lumo não substitui terapia, fonoaudiologia, educação inclusiva ou avaliação
                  médica.
                </li>
              </ul>
              <p>
                O Lumo é uma <strong>ponte de comunicação</strong>. Ajuda a criança a pedir,
                escolher, contar e se expressar via cards visuais. O progresso de cada criança
                depende de muitos fatores além do app.
              </p>
            </>
          ),
        },
        {
          id: 'gratuito',
          n: '3',
          title: 'Modelo gratuito',
          body: (
            <p>
              O Lumo é <strong>gratuito pra sempre para famílias</strong>. Sem assinatura, sem
              in-app purchases que desbloqueiem funcionalidade, sem ads. Eventuais opções futuras de
              “Apoiar o Lumo” via doação opt-in não desbloqueiam funcionalidade — o app continua
              igual de graça pra todo mundo.
            </p>
          ),
        },
        {
          id: 'terceiros',
          n: '4',
          title: 'Conteúdo de terceiros',
          body: (
            <p>
              O Lumo inclui pictogramas do{' '}
              <a href="https://arasaac.org" target="_blank" rel="noopener noreferrer">
                ARASAAC
              </a>{' '}
              sob licença Creative Commons BY-NC-SA 4.0. Detalhes em{' '}
              <a href="/produtos/lumo/creditos">Créditos e licenças</a>.
            </p>
          ),
        },
        {
          id: 'privacidade',
          n: '5',
          title: 'Privacidade',
          body: (
            <p>
              O Lumo não coleta dados. Tudo fica no seu dispositivo. Detalhes em{' '}
              <a href="/produtos/lumo/privacidade">Política de privacidade</a>.
            </p>
          ),
        },
        {
          id: 'uso-responsavel',
          n: '6',
          title: 'Uso responsável',
          body: (
            <p>
              O Modo Criança permite entregar o tablet pra criança sem que ela acesse configurações.
              Esse modo é protegido por PIN configurado por um adulto responsável.{' '}
              <strong>O uso do Lumo deve ser supervisionado por um adulto</strong>, especialmente
              nas primeiras experiências da criança com comunicação aumentativa.
            </p>
          ),
        },
        {
          id: 'responsabilidade',
          n: '7',
          title: 'Limitação de responsabilidade',
          body: (
            <p>
              O Lumo é fornecido “como está”. A AraLabs faz o melhor que pode pra que o app funcione
              bem, mas não pode garantir que será 100% livre de bugs. Em caso de falha do app, a
              AraLabs não se responsabiliza por consequências indiretas (frustração, atraso de
              comunicação, perda de dados locais). Os dados do app ficam no dispositivo do usuário —
              recomendamos exportar regularmente quando essa funcionalidade for adicionada.
            </p>
          ),
        },
        {
          id: 'mudancas',
          n: '8',
          title: 'Mudanças nestes termos',
          body: (
            <p>
              Se uma versão futura do app mudar substancialmente o modelo (ex: passar a ter tier
              pago, mudar coleta de dados), estes termos serão atualizados e o app avisará você na
              próxima abertura, pedindo consentimento explícito.
            </p>
          ),
        },
        {
          id: 'contato',
          n: '9',
          title: 'Contato',
          body: (
            <p>
              Dúvidas: <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
