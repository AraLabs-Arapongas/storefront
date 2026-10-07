import Link from 'next/link';
import { GuideArticle } from '@/components/guides/GuideArticle';
import { guideByPath } from '@/lib/guides';
import { pageMetadata } from '@/lib/seo/metadata';

const guide = guideByPath('/guias/cafe/espresso-amargo-ou-azedo');

export const metadata = pageMetadata({
  path: guide.path,
  title: guide.metaTitle,
  description: guide.description,
});

export default function EspressoAmargoOuAzedoPage() {
  return (
    <GuideArticle
      guide={guide}
      lead={
        <p>
          Espresso azedo (ácido de um jeito agressivo, ralo, que some rápido da boca) costuma ser
          sinal de extração de menos; amargo, seco e áspero, de extração demais. Na maioria dos
          casos, o primeiro ajuste é a moagem: mais fina se está azedo, mais grossa se está amargo.
          Só depois mexa na proporção entre café e bebida, e sempre uma coisa de cada vez.
        </p>
      }
      summary={[
        'Azedo, ralo e rápido: provavelmente extração de menos. Amargo, seco e lento: provavelmente extração demais.',
        'Ajuste primeiro a moagem: mais fina para o azedo, mais grossa para o amargo, em passos pequenos.',
        'Depois, se precisar, ajuste a proporção entre dose e rendimento. O tempo é consequência dos dois.',
        'Um ponto de partida comum é 1:2 (por exemplo, 18 g de café para 36 g de bebida) em 25 a 30 segundos.',
        'Mude uma variável por shot e anote. Azedo e amargo ao mesmo tempo pedem olhar o preparo do pó.',
      ]}
      sections={[
        {
          id: 'extracao',
          title: 'Extração em um minuto',
          body: (
            <>
              <p>
                Fazer café é dissolver na água parte do que está no pó. Essa dissolução não acontece
                toda de uma vez: os ácidos saem primeiro, e os compostos mais amargos saem depois,
                quando boa parte dos ácidos e açúcares já foi dissolvida.
              </p>
              <p>
                Por isso o gosto conta a história da extração. Quando a água leva pouco do pó, o que
                chega à xícara é sobretudo acidez, sem a doçura para equilibrar: o espresso fica{' '}
                <strong>subextraído</strong> e azedo. Quando leva demais, o amargor e a sensação de
                secura dominam: ele fica <strong>superextraído</strong>. O ponto bom fica entre os
                dois, com acidez, doçura e amargor em equilíbrio.
              </p>
            </>
          ),
        },
        {
          id: 'pelo-gosto',
          title: 'Como reconhecer pelo gosto',
          body: (
            <>
              <p>
                Prove o shot puro, mexendo antes, porque a bebida não sai homogênea. Depois compare
                com a lista:
              </p>
              <dl>
                <dt>Azedo, ralo, termina rápido</dt>
                <dd>
                  Provável extração de menos. Costuma vir junto com um shot que correu rápido.
                </dd>
                <dt>Amargo, seco, áspero no final</dt>
                <dd>
                  Provável extração demais. Costuma vir junto com um shot lento, que pinga demais.
                </dd>
                <dt>Azedo e amargo ao mesmo tempo</dt>
                <dd>
                  Provável extração desigual: a água achou um caminho mais fácil no pó (canalização)
                  e extraiu demais uma parte e de menos outra.
                </dd>
                <dt>Equilibrado, mas fraco ou aguado</dt>
                <dd>A extração pode estar boa e a bebida, diluída: é caso de proporção.</dd>
              </dl>
              <p>
                O tempo ajuda a confirmar, mas quem decide é o gosto. Um shot no “tempo certo” que
                está azedo continua precisando de ajuste.
              </p>
            </>
          ),
        },
        {
          id: 'ordem-dos-ajustes',
          title: 'A ordem dos ajustes',
          sub: [
            { id: 'moagem', title: '1. Moagem' },
            { id: 'proporcao', title: '2. Dose e rendimento' },
            { id: 'tempo', title: '3. O tempo vem junto' },
          ],
          body: (
            <>
              <h3 id="moagem">1. Moagem</h3>
              <p>
                A moagem é a alavanca principal. Moer mais fino aumenta a superfície de contato e
                deixa a água passar mais devagar, extraindo mais; moer mais grosso faz o contrário.
                Então: <strong>azedo, moa mais fino; amargo, moa mais grosso</strong>. Vá em passos
                pequenos, um clique ou uma fração de volta, e tire outro shot antes de decidir de
                novo.
              </p>
              <h3 id="proporcao">2. Dose e rendimento</h3>
              <p>
                A proporção é a relação entre o peso do pó (dose) e o peso da bebida na xícara
                (rendimento). Aumentar o rendimento com a mesma dose deixa a bebida mais extraída e
                menos concentrada; diminuir deixa mais concentrada e menos extraída. Mexa na
                proporção quando a moagem já estiver perto do ponto e o café ainda pedir mais corpo
                ou mais leveza, ou quando o moedor não tiver mais para onde ir.
              </p>
              <h3 id="tempo">3. O tempo vem junto</h3>
              <p>
                O tempo de extração é consequência da moagem e da dose, não um botão separado. Se o
                shot está rápido e azedo, o ajuste é na moagem, e o tempo acompanha. Temperatura da
                água também influencia, mas muitas máquinas domésticas não deixam regular; trate
                como ajuste fino, para depois.
              </p>
            </>
          ),
        },
        {
          id: 'ponto-de-partida',
          title: 'Pontos de partida comuns (não são regra)',
          body: (
            <>
              <p>
                Uma receita inicial muito usada é a proporção <strong>1:2</strong>: 18 g de café
                moído para 36 g de bebida, em algo entre <strong>25 e 30 segundos</strong>. Se o seu
                filtro é menor, mantenha a proporção com a dose que cabe nele.
              </p>
              <p>
                São pontos de partida, não metas. Torras mais claras costumam pedir proporções mais
                longas, e torras mais escuras, mais curtas. O alvo é o gosto na xícara: um espresso
                gostoso fora desses números está certo; um dentro deles que está azedo, não.
              </p>
              <p>
                Sem balança, dá para trabalhar com volume na xícara, com menos precisão. Pesar dose
                e rendimento é o que mais facilita repetir um bom resultado.
              </p>
            </>
          ),
        },
        {
          id: 'um-por-vez',
          title: 'Uma mudança de cada vez',
          body: (
            <>
              <p>
                Se você moer mais fino e aumentar a dose no mesmo shot, não vai saber qual das duas
                mudanças fez efeito. Mude uma coisa, prove, anote e só então decida o próximo passo.
                Anotar dose, rendimento, tempo, ajuste do moedor e gosto parece exagero no começo,
                mas é o que impede de andar em círculos.
              </p>
              <p>
                Também vale lembrar que o café muda com os dias depois da torra, e um pacote novo
                quase sempre pede um pequeno reajuste.
              </p>
            </>
          ),
        },
        {
          id: 'quando-nao-e-moagem',
          title: 'Quando o problema não é a moagem',
          body: (
            <ul>
              <li>
                <strong>O moedor já está no mais fino e o shot continua rápido.</strong> Passe a
                ajustar dose e rendimento. Café torrado há muito tempo também costuma correr rápido
                mesmo com moagem fina; confira a data de torra.
              </li>
              <li>
                <strong>Azedo e amargo juntos.</strong> Olhe o preparo do pó: distribuição no
                filtro, compactação reta e por igual. Ferramentas como WDT (agulhas para soltar o
                pó) e tela de dispersão ajudam a evitar canalização.
              </li>
              <li>
                <strong>O resultado muda de um shot para outro sem você mexer em nada.</strong> Dose
                sem pesar e preparo do pó variando são as causas mais comuns. Comece pesando.
              </li>
            </ul>
          ),
        },
        {
          id: 'treinar-o-paladar',
          title: 'Treine o paladar',
          body: (
            <p>
              Separar acidez de amargor é a parte mais difícil para quem está começando, e confundir
              os dois leva ao ajuste errado. Provar lado a lado ajuda muito. O{' '}
              <Link href="/produtos/le-barista">Le Barista</Link>, app da AraLabs, tem um exercício
              para isso, o experimento das 3 xícaras, feito para reconhecer acidez, doçura e amargor
              e descrever melhor o que está na xícara.
            </p>
          ),
        },
        {
          id: 'le-barista',
          title: 'Como o Le Barista ajuda',
          body: (
            <>
              <p>
                O Le Barista segue a mesma lógica deste guia. Depois de cada shot, você registra
                tempo, peso e gosto, e o app devolve um ajuste só (cliques no moedor, dose ou
                rendimento), com o motivo. No shot seguinte, você vê se funcionou.
              </p>
              <p>
                Ele pergunta que equipamento você tem: sem balança, trabalha em ml; sem moedor
                regulável, ajusta pela dose e pelo rendimento; com o moedor no mais fino, passa a
                mexer nos outros dois. Funciona no iPhone, sem conta e sem internet. O app foi
                enviado para a App Store e está em revisão pela Apple.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        {
          label: 'Wikipedia: Coffee extraction',
          href: 'https://en.wikipedia.org/wiki/Coffee_extraction',
          note: '(ordem de extração de ácidos e amargos; sub e superextração, em inglês)',
        },
        {
          label: 'Clive Coffee: Why is my espresso sour or bitter? How to fix it',
          href: 'https://clivecoffee.com/blogs/learn/why-is-my-espresso-sour-or-bitter-how-to-fix-it-clive-coffee',
          note: '(diagnóstico pelo gosto e ajuste da moagem, em inglês)',
        },
        {
          label: 'Clive Coffee: Espresso extraction time & ratio, a complete guide',
          href: 'https://clivecoffee.com/blogs/learn/espresso-extraction-time-ratio-a-complete-guide-clive-coffee',
          note: '(receita inicial 1:2 em 25 a 30 segundos e proporção por torra, em inglês)',
        },
      ]}
      product={{
        text: (
          <p>
            Registre cada shot e receba um ajuste por vez, com o porquê, até o espresso ficar no
            ponto. Também tem guias de V60, AeroPress, leite vaporizado e bebidas.
          </p>
        ),
        cta: 'Conhecer o Le Barista',
      }}
    />
  );
}
