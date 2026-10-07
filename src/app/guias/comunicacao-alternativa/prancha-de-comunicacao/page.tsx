import Link from 'next/link';
import { GuideArticle } from '@/components/guides/GuideArticle';
import { guideByPath } from '@/lib/guides';
import { pageMetadata } from '@/lib/seo/metadata';

const guide = guideByPath('/guias/comunicacao-alternativa/prancha-de-comunicacao');

export const metadata = pageMetadata({
  path: guide.path,
  title: guide.metaTitle,
  description: guide.description,
});

export default function PranchaDeComunicacaoPage() {
  return (
    <GuideArticle
      guide={guide}
      lead={
        <p>
          Uma prancha de comunicação é um quadro com figuras que a criança aponta ou toca para dizer
          o que quer, o que sente ou do que precisa. Para montar uma em casa, comece com poucas
          palavras úteis (como <em>quero</em>, <em>mais</em>, <em>parar</em> e <em>ajuda</em>), use
          você mesmo a prancha enquanto conversa com a criança e deixe-a sempre onde a conversa
          acontece. Ela é um recurso de comunicação aumentativa e alternativa (CAA) e funciona
          melhor junto com o acompanhamento de um fonoaudiólogo.
        </p>
      }
      notice={
        <p>
          <strong>Este guia não é terapia.</strong> Ele reúne o básico para a família começar e
          conversar melhor com os profissionais. Quem avalia a criança e indica o sistema de
          comunicação mais adequado é o fonoaudiólogo, de preferência com experiência em CAA.
        </p>
      }
      summary={[
        'CAA é qualquer forma de comunicação que complementa ou substitui a fala: gestos, sinais, figuras, pranchas e aplicativos que falam.',
        'Comece pequeno: algumas palavras que servem em muitas situações e poucas palavras específicas da rotina.',
        'Mostre como se usa. Aponte na prancha enquanto fala com a criança, sem cobrar que ela responda.',
        'Deixe a prancha onde a conversa acontece: na mesa do almoço, no banheiro, na mochila.',
        'Pictogramas ARASAAC são gratuitos para uso não comercial, com atribuição ao autor e à origem.',
        'As revisões de pesquisa disponíveis não encontraram prejuízo à fala com o uso de CAA.',
      ]}
      sections={[
        {
          id: 'o-que-e-caa',
          title: 'O que é comunicação aumentativa e alternativa (CAA)',
          body: (
            <>
              <p>
                A International Society for Augmentative and Alternative Communication (ISAAC)
                descreve a CAA como um conjunto de ferramentas e estratégias que a pessoa usa para
                resolver os desafios de comunicação do dia a dia. O nome tem duas partes:{' '}
                <strong>aumentativa</strong> quando complementa a fala que já existe, e{' '}
                <strong>alternativa</strong> quando ocupa o lugar dela.
              </p>
              <p>
                Na prática, entram aí gestos, sinais, fotos, figuras, pranchas de papel e
                aplicativos que falam em voz alta. O que importa não é o formato, e sim que a
                mensagem chegue a quem está ouvindo. A CAA é usada por crianças autistas (TEA), com
                apraxia de fala, paralisia cerebral, deficiência intelectual e outras condições que
                dificultam a fala, de forma temporária ou permanente.
              </p>
            </>
          ),
        },
        {
          id: 'o-que-e-prancha',
          title: 'O que é uma prancha de comunicação',
          body: (
            <>
              <p>
                É uma grade de símbolos, cada um com a palavra escrita embaixo. A criança aponta,
                toca ou olha para os símbolos para formar uma mensagem: às vezes uma palavra só
                (“água”), às vezes uma frase curta (“eu quero mais”).
              </p>
              <p>
                Existem pranchas gerais, para o dia todo, e pranchas temáticas, para um momento
                específico: refeição, banho, brincadeira, escola. Para quem está começando, uma
                prancha temática pequena, ligada a uma atividade que a criança gosta, costuma ser o
                caminho mais fácil.
              </p>
            </>
          ),
        },
        {
          id: 'impressa-ou-app',
          title: 'Prancha impressa ou aplicativo?',
          sub: [
            { id: 'impressa', title: 'Prancha impressa' },
            { id: 'aplicativo', title: 'Aplicativo de CAA' },
          ],
          body: (
            <>
              <p>
                As duas são CAA. A impressa é chamada de baixa tecnologia; o aplicativo, de alta
                tecnologia. Não é preciso passar por uma para chegar à outra: a escolha depende da
                criança e da orientação do fonoaudiólogo, e muitas famílias usam as duas.
              </p>
              <h3 id="impressa">Prancha impressa</h3>
              <ul>
                <li>Custa pouco, não descarrega e pode ir para a piscina ou para o banho.</li>
                <li>Fica sempre à vista, colada na parede ou na geladeira.</li>
                <li>
                  Não tem voz: quem está perto precisa olhar e ler em voz alta o que a criança
                  apontou.
                </li>
                <li>Cada palavra nova pede imprimir e recortar de novo.</li>
              </ul>
              <h3 id="aplicativo">Aplicativo de CAA</h3>
              <ul>
                <li>Fala em voz alta, então a criança é ouvida mesmo por quem não está olhando.</li>
                <li>Cabe muito mais vocabulário, com busca e frases montadas em sequência.</li>
                <li>Depende de celular ou tablet carregado, por perto e protegido.</li>
                <li>
                  Precisa de um modo que impeça a criança de sair do app ou mexer nas configurações.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'como-montar',
          title: 'Como montar uma prancha de comunicação em casa',
          body: (
            <>
              <p>
                O passo a passo abaixo serve tanto para a prancha de papel quanto para organizar os
                primeiros cards de um aplicativo. Se a criança já tem fonoaudiólogo, leve a ideia
                para a sessão: o profissional pode ajustar o vocabulário e o tamanho dos símbolos.
              </p>
              <ol>
                <li>
                  <strong>Observe o que a criança já tenta dizer.</strong> Ela puxa você até a
                  geladeira? Empurra o prato? Leva o brinquedo para você abrir? Esses pedidos são o
                  ponto de partida.
                </li>
                <li>
                  <strong>Escolha poucas palavras.</strong> Misture palavras que servem em muitas
                  situações (<em>quero</em>, <em>mais</em>, <em>não</em>, <em>parar</em>,{' '}
                  <em>ajuda</em>, <em>acabou</em>) com duas ou três palavras específicas daquele
                  momento (<em>água</em>, <em>bola</em>, <em>banho</em>). Algo entre 6 e 12 símbolos
                  já é um bom começo.
                </li>
                <li>
                  <strong>Escolha os símbolos.</strong> Pictogramas como os do ARASAAC funcionam bem
                  para palavras de ação e de sentimento. Para objetos muito concretos, uma foto do
                  copo ou do brinquedo da casa ajuda no começo.
                </li>
                <li>
                  <strong>Monte e mantenha cada palavra no mesmo lugar.</strong> Escreva a palavra
                  embaixo de cada figura e não troque a posição dos símbolos a cada versão. O lugar
                  fixo ajuda a criança a encontrar a palavra sem procurar.
                </li>
                <li>
                  <strong>Proteja e deixe à mão.</strong> Plastifique ou use plástico adesivo. Cole
                  uma cópia onde a atividade acontece: a prancha da refeição na mesa, a do banho no
                  azulejo.
                </li>
                <li>
                  <strong>Use você primeiro (modelagem).</strong> Enquanto fala, aponte na prancha:
                  “Você quer <em>mais</em>?”, “<em>Acabou</em> o banho”. A criança aprende a usar a
                  prancha vendo os outros usarem, do mesmo jeito que aprende a falar ouvindo.
                </li>
                <li>
                  <strong>Responda a toda tentativa.</strong> Se ela tocou em <em>mais</em>, dê
                  mais. Não transforme a prancha em teste (“me mostra onde está a água”) nem
                  condicione o que ela quer a apontar certo.
                </li>
                <li>
                  <strong>Amplie aos poucos.</strong> Quando uma palavra já é usada com facilidade,
                  acrescente outra. Anote o que funcionou para levar ao fonoaudiólogo.
                </li>
              </ol>
            </>
          ),
        },
        {
          id: 'pictogramas-arasaac',
          title: 'Pictogramas ARASAAC: o que são e como usar',
          body: (
            <>
              <p>
                O ARASAAC (Centro Aragonés de la Comunicación Aumentativa y Alternativa) mantém uma
                biblioteca gratuita de pictogramas que é referência em CAA, com versões em vários
                idiomas, incluindo o português. Os pictogramas são de autoria de Sergio Palao e
                propriedade do Governo de Aragão (Espanha), e são distribuídos sob a licença
                Creative Commons BY-NC-SA 4.0. Em termos simples, isso quer dizer:
              </p>
              <ul>
                <li>
                  <strong>Atribuição:</strong> o material precisa citar o autor, a origem e a
                  licença.
                </li>
                <li>
                  <strong>Não comercial:</strong> dá para usar em casa, na escola e na terapia, mas
                  não para vender a prancha ou um produto feito com os pictogramas.
                </li>
                <li>
                  <strong>Compartilhar igual:</strong> uma prancha feita com eles e distribuída para
                  outras pessoas segue sob a mesma licença.
                </li>
              </ul>
              <p>
                Uma forma de atribuição muito usada em materiais impressos é: “Autor dos
                pictogramas: Sergio Palao. Origem: ARASAAC (arasaac.org). Licença: CC BY-NC-SA.
                Propriedade: Governo de Aragão”. Confira sempre a versão atual nos termos de uso do
                ARASAAC, listados nas fontes.
              </p>
            </>
          ),
        },
        {
          id: 'mitos',
          title: 'Mitos comuns sobre CAA',
          sub: [
            { id: 'mito-fala', title: '“A prancha vai atrapalhar a fala”' },
            { id: 'mito-quem-fala', title: '“É só para quem não fala nada”' },
            { id: 'mito-terapia', title: '“A prancha substitui a terapia”' },
          ],
          body: (
            <>
              <h3 id="mito-fala">“A prancha vai atrapalhar a fala”</h3>
              <p>
                É o medo mais comum, e as revisões de pesquisa não o confirmam. Uma revisão de 23
                estudos publicada em 2006 no{' '}
                <em>Journal of Speech, Language, and Hearing Research</em> (Millar, Light e
                Schlosser) não encontrou queda na fala de pessoas com deficiências do
                desenvolvimento depois de intervenções com CAA, e encontrou ganhos de fala em parte
                dos casos. Em 2008, uma revisão focada em crianças com autismo (Schlosser e Wendt)
                chegou a uma conclusão parecida: a CAA não impediu a fala, e a maioria dos estudos
                relatou aumento, ainda que modesto.
              </p>
              <p>
                Os próprios autores chamam a evidência de preliminar e pedem expectativas realistas:
                a CAA não é uma forma de “fazer a criança falar”, e sim de ela se comunicar agora,
                enquanto a fala se desenvolve no tempo dela.
              </p>
              <h3 id="mito-quem-fala">“É só para quem não fala nada”</h3>
              <p>
                Não. A parte “aumentativa” do nome existe justamente para quem fala pouco ou de um
                jeito difícil de entender. A prancha complementa o que a criança já consegue dizer.
              </p>
              <h3 id="mito-terapia">“A prancha substitui a terapia”</h3>
              <p>
                Também não. A prancha é uma ferramenta; a escolha do vocabulário, do formato e das
                estratégias depende de uma avaliação profissional. O que a família faz em casa,
                principalmente a modelagem, potencializa esse trabalho.
              </p>
            </>
          ),
        },
        {
          id: 'lumo',
          title: 'Quando um aplicativo ajuda',
          body: (
            <>
              <p>
                Se a família decidir usar um app junto com a prancha de papel, o{' '}
                <Link href="/produtos/lumo">Lumo</Link>, feito pela AraLabs, é uma opção gratuita,
                na App Store. Ele traz os 13.798 pictogramas ARASAAC com busca em quatro idiomas
                (PT-BR, PT-PT, EN-US e ES-ES), monta frases que o aparelho fala em voz alta e
                permite criar cards com fotos da casa. Também tem rotinas visuais e um modo criança
                que só sai com PIN.
              </p>
              <p>
                Funciona offline e sem cadastro: os dados da criança ficam no aparelho. Como usa os
                mesmos pictogramas, dá para imprimir a prancha da refeição e ter os mesmos símbolos
                no tablet, sem a criança precisar aprender duas linguagens visuais.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        {
          label: 'ISAAC: About AAC',
          href: 'https://isaac-online.org/english/about-aac/',
          note: '(definição de CAA, em inglês)',
        },
        {
          label:
            'Millar, Light e Schlosser (2006). The impact of augmentative and alternative communication intervention on the speech production of individuals with developmental disabilities: a research review. Journal of Speech, Language, and Hearing Research, 49(2), 248–264',
          href: 'https://doi.org/10.1044/1092-4388(2006/017)',
        },
        {
          label: 'Resumo da revisão de Millar, Light e Schlosser no ASHA Evidence Maps',
          href: 'https://apps.asha.org/EvidenceMaps/Articles/ArticleSummary/48f75b29-1b15-4e0b-8e36-f65092d0d145',
        },
        {
          label:
            'Schlosser e Wendt (2008). Effects of augmentative and alternative communication intervention on speech production in children with autism: a systematic review. American Journal of Speech-Language Pathology, 17(3), 212–230',
          href: 'https://pubmed.ncbi.nlm.nih.gov/18663107/',
        },
        {
          label: 'ARASAAC: termos de uso',
          href: 'https://arasaac.org/terms-of-use',
        },
        {
          label: 'Creative Commons: licença CC BY-NC-SA 4.0 (em português)',
          href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br',
        },
      ]}
      product={{
        text: (
          <p>
            Prancha de comunicação no celular ou no tablet: pictogramas ARASAAC, frases faladas em
            voz alta, rotinas visuais e modo criança. Grátis, offline e sem cadastro.
          </p>
        ),
        cta: 'Conhecer o Lumo',
      }}
    />
  );
}
