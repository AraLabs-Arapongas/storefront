import Link from 'next/link';
import { GuideArticle } from '@/components/guides/GuideArticle';
import { guideByPath } from '@/lib/guides';
import { pageMetadata } from '@/lib/seo/metadata';

const guide = guideByPath('/guias/sistemas/sistema-sob-medida-ou-pronto');

export const metadata = pageMetadata({
  path: guide.path,
  title: guide.metaTitle,
  description: guide.description,
});

export default function SobMedidaOuProntoPage() {
  return (
    <GuideArticle
      guide={guide}
      lead={
        <p>
          Se o seu negócio funciona parecido com a maioria do seu segmento, um sistema pronto (SaaS)
          costuma resolver mais rápido e com menos risco. O sistema sob medida passa a valer a pena
          quando o que diferencia o seu negócio não cabe em nenhum produto, quando a adaptação e o
          retrabalho já custam caro, ou quando você precisa ser dono do sistema e dos dados. A
          decisão é menos sobre tecnologia e mais sobre quanto da sua rotina o software precisa
          respeitar.
        </p>
      }
      summary={[
        'Sistema pronto: você assina um produto que muitos negócios usam. Começa rápido, mas você se adapta a ele.',
        'Sob medida: o sistema é feito para a sua operação. Leva mais tempo para começar, mas se adapta a você.',
        'Os dois têm custos escondidos: adaptação e dependência no pronto; manutenção e tempo seu no sob medida.',
        'Antes de assinar, pergunte como exportar os seus dados. Antes de contratar, pergunte de quem é o código.',
        'Se a resposta da maioria das perguntas do checklist for “sim”, vale conversar sobre sob medida.',
      ]}
      sections={[
        {
          id: 'diferenca',
          title: 'A diferença em uma frase',
          body: (
            <>
              <p>
                No <strong>sistema pronto</strong>, você paga para usar um produto que já existe e
                que muitos outros negócios usam do mesmo jeito: agenda de salão, sistema para
                clínica, gestão de oficina. No <strong>sob medida</strong>, alguém constrói um
                sistema a partir de como o seu negócio funciona, e esse sistema atende só você.
              </p>
              <p>
                Nenhum dos dois é melhor por natureza. Um pequeno negócio que escolhe sob medida sem
                precisar gasta mais do que devia; um que força um produto pronto contra a própria
                rotina paga em retrabalho todo dia, só que sem perceber na fatura.
              </p>
            </>
          ),
        },
        {
          id: 'quando-pronto',
          title: 'Quando o sistema pronto é suficiente',
          body: (
            <>
              <p>Um SaaS costuma ser a melhor escolha quando:</p>
              <ul>
                <li>
                  o seu processo é o padrão do segmento (marcar horário, cobrar, lembrar o cliente)
                  e você não se importa de seguir o fluxo que o produto propõe;
                </li>
                <li>existe um produto bem avaliado e mantido para o seu tipo de negócio;</li>
                <li>você precisa começar esta semana, não daqui a um mês;</li>
                <li>
                  a equipe é pequena e ninguém tem tempo para participar da construção de um
                  sistema;
                </li>
                <li>
                  o que você ganha com um processo diferente não compensa o custo de manter um
                  sistema só seu.
                </li>
              </ul>
              <p>
                Use o período de teste de verdade: cadastre clientes reais, rode uma semana inteira
                e veja onde você precisou de planilha ou de WhatsApp por fora. Esses buracos são a
                melhor medida de quanto o produto encaixa.
              </p>
            </>
          ),
        },
        {
          id: 'quando-sob-medida',
          title: 'Quando o sob medida compensa',
          body: (
            <>
              <p>O sob medida começa a fazer sentido quando:</p>
              <ul>
                <li>
                  o jeito como você trabalha é parte do motivo de o cliente escolher você, e mudar
                  isso para caber num produto seria perder a vantagem;
                </li>
                <li>
                  você usa três ou quatro ferramentas diferentes e cola tudo com planilha, copiando
                  o mesmo dado de um lugar para outro;
                </li>
                <li>
                  as regras de preço, de agenda ou de cobrança são específicas demais para os campos
                  de um sistema genérico;
                </li>
                <li>
                  você precisa de algo que nenhum produto do segmento oferece, ou de uma integração
                  que eles não fazem;
                </li>
                <li>ter o código e os dados sob o seu controle é importante para o negócio.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'custos-escondidos',
          title: 'Os custos que não aparecem na etiqueta',
          sub: [
            { id: 'custos-pronto', title: 'No sistema pronto' },
            { id: 'custos-sob-medida', title: 'No sob medida' },
          ],
          body: (
            <>
              <p>
                Comparar só a mensalidade de um com o orçamento do outro leva a decisões ruins. Os
                dois caminhos têm custos que só aparecem com o uso.
              </p>
              <h3 id="custos-pronto">No sistema pronto</h3>
              <ul>
                <li>
                  <strong>Adaptação:</strong> é a equipe que muda o processo para caber no sistema.
                  Isso custa tempo, treinamento e, às vezes, clientes que estranham a mudança.
                </li>
                <li>
                  <strong>Pagar pelo que não usa:</strong> planos costumam vir em pacotes; o recurso
                  de que você precisa pode estar só no plano de cima.
                </li>
                <li>
                  <strong>Dependência:</strong> preço, recursos e até a continuidade do produto são
                  decididos por outra empresa. Trocar depois de anos de histórico é caro.
                </li>
                <li>
                  <strong>Dados:</strong> confirme, antes de assinar, se dá para exportar clientes,
                  agendamentos e financeiro em planilha ou outro formato aberto. Se não dá, os dados
                  estão presos.
                </li>
              </ul>
              <h3 id="custos-sob-medida">No sob medida</h3>
              <ul>
                <li>
                  <strong>Tempo seu:</strong> alguém do negócio precisa explicar a rotina, testar e
                  dar retorno. Sem isso, o sistema sai do jeito que o fornecedor imaginou.
                </li>
                <li>
                  <strong>Manutenção:</strong> um sistema no ar precisa de hospedagem, backup,
                  atualizações de segurança e pequenos ajustes. Ele não termina no dia da entrega.
                </li>
                <li>
                  <strong>Escopo aberto:</strong> projeto sem escopo e preço definidos tende a
                  crescer. Prefira proposta com o que entra, o que não entra e quanto custa.
                </li>
                <li>
                  <strong>Dependência do fornecedor:</strong> se o código não é seu, você troca a
                  dependência de um produto pela dependência de uma pessoa ou empresa.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'checklist',
          title: 'Checklist rápido para decidir',
          body: (
            <>
              <p>Responda sim ou não, pensando em como o negócio funciona hoje:</p>
              <ol>
                <li>Testei pelo menos um sistema pronto do meu segmento com dados reais?</li>
                <li>
                  Mesmo com ele, continuei precisando de planilha ou WhatsApp para fechar o dia?
                </li>
                <li>Meu jeito de vender, cobrar ou agendar é diferente do padrão do mercado?</li>
                <li>Esse jeito diferente é uma vantagem que eu não quero perder?</li>
                <li>Copio o mesmo dado em mais de um lugar toda semana?</li>
                <li>Ter os dados e o sistema sob o meu controle é importante?</li>
                <li>
                  Tenho alguém que pode dedicar algumas horas por semana ao projeto no começo?
                </li>
              </ol>
              <p>
                Muitos “sim”, principalmente nas perguntas 2 a 5, indicam que vale conversar sobre
                um sistema sob medida. Muitos “não” indicam que um bom produto pronto resolve, e que
                o melhor investimento agora é escolher bem e usar direito.
              </p>
            </>
          ),
        },
        {
          id: 'exemplo-komyx',
          title: 'Um exemplo real: do sob medida ao produto',
          body: (
            <>
              <p>
                O <Link href="/produtos/komyx">Komyx</Link> começou como um sistema sob medida feito
                pela AraLabs para a rotina de um buffet. Os problemas eram concretos: orçamento
                perdido no WhatsApp, data marcada duas vezes, Pix entrando sem saber de qual festa
                era. Resolvido ali, ficou claro que o problema era de quase todo buffet, e o sistema
                virou um produto para buffets infantis e casas de festa.
              </p>
              <p>
                O caso mostra os dois lados da decisão. Para o primeiro buffet, o sob medida fez
                sentido porque não havia nada que encaixasse na rotina dele. Para os buffets
                seguintes, com a mesma dor, o produto pronto é o caminho mais rápido e mais barato.
                Antes de encomendar um sistema, vale perguntar: o meu problema é só meu, ou é do meu
                segmento inteiro?
              </p>
            </>
          ),
        },
        {
          id: 'como-a-aralabs-trabalha',
          title: 'Como a AraLabs trabalha no sob medida',
          body: (
            <>
              <p>
                Se a conclusão for sob medida, este é o jeito como a AraLabs conduz o projeto. Ele
                foi pensado para reduzir os custos escondidos da lista acima:
              </p>
              <ul>
                <li>
                  <strong>Uma conversa de 30 minutos</strong> sobre como o seu dia funciona hoje.
                </li>
                <li>
                  <strong>Proposta em até 2 dias úteis</strong>, com escopo, prazo e preço fechado
                  pelo projeto.
                </li>
                <li>
                  <strong>Primeira versão no ar rápido</strong>, em algumas semanas: você usa de
                  verdade antes de pagar o restante.
                </li>
                <li>
                  <strong>O sistema é seu:</strong> código e dados. Se um dia quiser levar para
                  outro lugar, entregamos tudo organizado.
                </li>
                <li>
                  <strong>Operação numa mensalidade pequena</strong>, com hospedagem, backup e
                  suporte.
                </li>
              </ul>
              <p>
                A gente também não começa do zero: há uma base pronta para agenda, orçamento,
                cobrança por Pix e painel do dono, que vira o sistema do seu negócio. Os detalhes
                estão na página de <Link href="/sob-medida">sistema sob medida</Link>.
              </p>
            </>
          ),
        },
      ]}
      product={{
        text: (
          <p>
            O Komyx é o sistema para buffets que nasceu de um projeto sob medida da AraLabs:
            orçamento online, reserva no Pix, contrato e convite. Se o seu caso é outro, a conversa
            sobre sob medida começa na página de{' '}
            <Link href="/sob-medida" className="font-semibold underline underline-offset-4">
              sistema sob medida
            </Link>
            .
          </p>
        ),
        cta: 'Conhecer o Komyx',
      }}
    />
  );
}
