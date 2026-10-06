import type { Metadata } from 'next';
import { Hl, LegalPage, SupportMail } from '@/components/legal/LegalPage';

const pageTitle = 'Suporte — Le Barista';
const pageDescription =
  'Suporte do Le Barista: contato por e-mail e respostas pras dúvidas mais comuns sobre balança, moedor, diagnóstico, dados e backup.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/le-barista/suporte' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/le-barista/suporte',
    type: 'website',
  },
};

const VIGENCIA = '6 de outubro de 2026';

export default function LeBaristaSuportePage() {
  return (
    <LegalPage
      product="le-barista"
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
          Encontrou um problema, tem uma sugestão ou ficou com alguma dúvida sobre o Le Barista?
          Escreva pra <a href="mailto:contato@aralabs.com.br">contato@aralabs.com.br</a>. Se puder,
          conte o modelo do seu iPhone, a versão do iOS e em que tela do app o problema aconteceu.
        </p>
      }
      callout={<SupportMail subject="Suporte Le Barista" />}
      sections={[
        {
          id: 'perguntas-frequentes',
          title: 'Perguntas frequentes',
          faq: [
            {
              id: 'balanca-e-moedor',
              q: 'Por que o app pergunta se eu tenho balança e moedor?',
              a: (
                <p>
                  Porque o caminho muda. Com balança, dose e rendimento são medidos em gramas; sem
                  balança, o app trabalha com ml. Com moedor regulável, o diagnóstico pode sugerir
                  cliques mais finos ou mais grossos; sem ele, os ajustes passam a ser na dose e no
                  rendimento. Se você usa WDT ou tela de dispersão, esses passos entram no preparo.
                </p>
              ),
            },
            {
              id: 'moedor-no-mais-fino',
              q: 'O app pede pra moer mais fino, mas meu moedor já está no mínimo. E agora?',
              a: (
                <p>
                  Quando o moedor já está no ajuste mais fino, o diagnóstico deixa de sugerir moagem
                  e passa a ajustar a dose ou o rendimento. Café torrado há muito tempo também
                  costuma correr rápido mesmo com moagem fina — vale conferir a data de torra.
                </p>
              ),
            },
            {
              id: 'corrigir-shot',
              q: 'Registrei um shot errado. Como corrijo?',
              a: (
                <p>
                  Na tela com a sugestão de ajuste, toque em <strong>“Voltar e corrigir”</strong>,
                  arrume o que estava errado (tempo, peso, moagem, sabor) e confirme de novo. A
                  sugestão é feita com os valores corrigidos.
                </p>
              ),
            },
            {
              id: 'internet',
              q: 'Preciso de internet?',
              a: (
                <p>
                  Não. O Le Barista funciona inteiro offline e não faz nenhuma requisição de rede.
                  Dá pra usar na cozinha sem Wi-Fi.
                </p>
              ),
            },
            {
              id: 'conta',
              q: 'Preciso criar uma conta?',
              a: <p>Não. O Le Barista não tem login nem cadastro. É só abrir e usar.</p>,
            },
            {
              id: 'backup',
              q: 'Tem backup? O que acontece se eu apagar o app?',
              a: (
                <>
                  <p>
                    O Le Barista ainda não tem backup ou sincronização próprios. Seus dados ficam só
                    num banco de dados local no iPhone, então{' '}
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
              id: 'trocar-equipamento',
              q: 'Troquei de máquina ou de moedor. Como atualizo?',
              a: (
                <p>
                  Na aba <strong>Perfil</strong>, edite seu equipamento: máquina, tamanho do filtro,
                  balança, moedor, WDT e tela de dispersão. Os próximos preparos e diagnósticos já
                  usam a configuração nova.
                </p>
              ),
            },
            {
              id: 'permissoes',
              q: 'O app pede alguma permissão?',
              a: (
                <p>
                  Não. Ele não acessa câmera, fotos, localização, contatos nem notificações. Só usa
                  a vibração e mantém a tela acesa durante os timers, o que não exige permissão.
                  Detalhes na <a href="/produtos/le-barista/privacidade">Política de privacidade</a>
                  .
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
                <a href="/produtos/le-barista/privacidade">Política de privacidade</a>
              </li>
              <li>
                <a href="/produtos/le-barista/termos">Termos de uso</a>
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
