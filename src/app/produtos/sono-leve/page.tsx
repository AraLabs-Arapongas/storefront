import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';

const pageTitle = 'Sono Leve — treino de sono pro bebê, sem chute';
const pageDescription =
  'Sono Leve é o app da AraLabs pra treinar o sono do bebê pelo método Ferber. Timer dedicado, progressão automática, check-ins registrados, dashboard de evolução. Tudo offline — dados ficam no celular. Em beta privado no TestFlight.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/sono-leve' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/sono-leve',
    type: 'website',
  },
};

const PRA_QUEM = [
  {
    icone: '👶',
    titulo: 'Famílias com bebê 4-18 meses',
    body:
      'Idade típica de início de treino de sono. O app respeita janelas de sono e avisa pais que bebês menores precisam de outra abordagem.',
  },
  {
    icone: '🌙',
    titulo: 'Pais que tentaram "deixar chorar"',
    body:
      'Sem método, sem timer, sem registro — e ficaram inseguros. O Sono Leve traz estrutura: quanto tempo esperar, quando entrar, o que fazer no quarto.',
  },
  {
    icone: '🤝',
    titulo: 'Mãe e pai dividindo a noite',
    body:
      'Quem estava de plantão registra o que aconteceu. De manhã não tem "como foi a noite?" — tem dashboard com tudo que rolou.',
  },
];

const COMO_FUNCIONA = [
  {
    n: '01',
    titulo: 'Cadastra o bebê',
    body:
      'Nome, data de nascimento, menino ou menina. Nada vai pra cloud — fica só no seu celular.',
  },
  {
    n: '02',
    titulo: 'Escolhe o método',
    body:
      'Ferber clássico (3·5·10 min no Dia 1) ou Suave (1·2·3 min). Pode trocar a qualquer momento nas configurações.',
  },
  {
    n: '03',
    titulo: 'Configura mamada e ritual',
    body:
      'De quanto em quanto tempo mama (alerta persistente quando passa). Quais passos do ritual pré-sono (banho, mamada, luz baixa, ruído branco).',
  },
  {
    n: '04',
    titulo: 'Inicia a sessão',
    body:
      'Coloca no berço, anota estado e ambiente. App entra em modo monitoramento — só roda o timer quando o bebê começa a chorar.',
  },
];

const FASES_TIMER = [
  {
    cor: 'success',
    titulo: 'Monitorando',
    body:
      'Bebê no berço, calmo. Sem countdown. Contador positivo do tempo no berço. Se começar a chorar, você toca um botão e o timer Ferber arranca.',
  },
  {
    cor: 'warn',
    titulo: 'Aguardando',
    body:
      'Timer Ferber rodando. Modo noturno preto puro, texto huge, vibração no fim (sem som — não acorda o bebê). Pode pausar, ou marcar que ele acalmou.',
  },
  {
    cor: 'accent',
    titulo: 'Hora de checar',
    body:
      'Intervalo zerou. Vibração avisa. 3 escolhas: iniciei check-in (vai pro quarto), já acalmou (volta pra monitorar), ou dormiu (encerra episódio).',
  },
  {
    cor: 'warn',
    titulo: 'Check-in',
    body:
      'Você no quarto. Checklist ✓/✗ na tela das regras Ferber (fale baixo · pode tocar leve · não pegue no colo · não acenda luz · não dê mama). Vibração de alerta quando passa de 1 min.',
  },
  {
    cor: 'accent',
    titulo: 'Dormindo',
    body:
      'Bebê adormeceu. Tela silenciosa com contador positivo (1h32m dormindo). Se acordar e chorar, "voltou a chorar" cria novo episódio na mesma noite — Ferber recomeça do dia atual.',
  },
];

const FEATURES = [
  {
    titulo: 'Timer Ferber dedicado',
    body:
      'Não é uma feature secundária num app genérico de bebê. É o coração do produto. Modo noturno real, vibração no lugar de som, expo-keep-awake na tela toda.',
  },
  {
    titulo: 'Progressão automática',
    body:
      'Dia 1 = 3·5·10 (depois mantém em 10). Dia 2 = 5·10·12. Avança sozinho a cada noite. Pais não precisam decorar tabela.',
  },
  {
    titulo: 'Múltiplos episódios por noite',
    body:
      'Bebê dorme às 22h, acorda às 2h, acorda às 4h? Cada despertar vira um episódio dentro da mesma sessão. Relatório agrupa tudo.',
  },
  {
    titulo: 'Alerta de mamada persistente',
    body:
      'Banner laranja aparece em qualquer tela quando passa do intervalo configurado. Não some por swipe — só por "Mamou ✓" ou "+15min". Notif local funciona com app fechado.',
  },
  {
    titulo: 'Histórico + dashboard',
    body:
      'Cada noite vira um card no histórico, tappable, com timeline visual SVG dos episódios. Dashboard mostra média de tempo até dormir, distribuição, sessões por dia.',
  },
  {
    titulo: 'Tela "Sinais de alerta"',
    body:
      'Quando pegar no colo sem pensar (sinais físicos, padrão do choro). Linkada dos Ajustes. O app é auxiliar — não substitui pediatra.',
  },
];

const PRINCIPIOS = [
  {
    titulo: 'Sem julgamento',
    body:
      '"Noite difícil acontece" > "você falhou". Copy acolhedora, nunca culpando os pais quando o método não rola.',
  },
  {
    titulo: 'Privacidade total',
    body:
      'Dado de bebê é íntimo. Nada vai pra cloud, sem conta, sem analytics. Tudo offline no SQLite local. Apaga o app, apaga tudo.',
  },
  {
    titulo: 'Mobile-first noturno',
    body:
      'Tela do timer pensada pra ser olhada no escuro com bebê no colo. Preto puro, texto enorme, contraste alto, vibração no lugar de som.',
  },
  {
    titulo: 'Auxiliar, não substituto',
    body:
      'Disclaimer presente em todas as telas. Em emergência, 192 (SAMU). Pediatra e consultora de sono certificada sabem mais que qualquer app.',
  },
];

export default function SonoLevePage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/sono-leve',
          name: 'Sono Leve',
          description: pageDescription,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'iOS',
        })}
      />

      {/* Hero — gradiente lavanda/escuro (sem imagem por enquanto) */}
      <section className="relative aspect-[4/5] overflow-hidden border-b border-[color:var(--line)] md:aspect-[16/9] lg:aspect-[3/1]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#1d2342] to-[#3a2858]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-[120px] leading-none md:text-[180px] lg:text-[220px]">🌙</div>
            <p className="mt-4 font-serif text-2xl italic text-[#c8b6ff] md:text-3xl lg:text-4xl">
              Sono Leve
            </p>
          </div>
        </div>
      </section>

      {/* Hero copy */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-10 lg:py-20">
          <div className="flex max-w-3xl flex-col">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              Beta privado · TestFlight aberto
            </p>
            <h1 className="mt-5 text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[42px] lg:text-[52px]">
              <span className="font-serif italic text-[color:var(--gold-soft)]">Sono Leve</span> —
              treino de sono pro bebê, sem chute.
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[18px]">
              Timer Ferber dedicado, progressão automática dos intervalos, check-ins registrados,
              dashboard de evolução. Funciona offline, sem conta, sem cloud — dado de bebê não sai
              do iPhone.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
              >
                Pedir acesso ao beta →
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50"
              >
                Ver como funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pra quem é */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Pra quem é
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Pensado pra família que quer{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">estrutura</span>,
              não milagre.
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[17px]">
              Treino de sono é decisão da família. O Sono Leve não promete que seu bebê vai dormir
              em 3 dias. Promete estrutura — alguém dizendo &quot;espere 3 minutos, agora vai lá,
              fale baixinho, sai em 1 minuto&quot; — e registro pra ver a evolução noite a noite.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PRA_QUEM.map((p) => (
              <article
                key={p.titulo}
                className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7"
              >
                <span className="text-3xl">{p.icone}</span>
                <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="metodo" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Como funciona
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              4 passos pra{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">começar</span>.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {COMO_FUNCIONA.map((step) => (
              <article key={step.n} className="bg-[color:var(--bg-elev)] p-7">
                <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                  {step.n}
                </span>
                <h3 className="mt-6 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {step.titulo}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fases do timer */}
      <section className="border-b border-[color:var(--line)] bg-gradient-to-b from-[color:var(--bg-elev)] to-[color:var(--surface-deep)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              O coração do produto
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              <span className="font-serif italic text-[color:var(--gold-soft)]">5 fases</span> do
              timer Ferber.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.65] text-[color:var(--ink-muted)] md:text-[17px]">
              Cada fase tem instruções claras do que fazer — checklist visual com ✓ e ✗ — pra mãe
              ou pai nunca ficar olhando pra tela sem saber o próximo passo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FASES_TIMER.map((f, i) => (
              <article
                key={f.titulo}
                className="rounded-[20px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6"
              >
                <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {f.titulo}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              O que tem
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Tudo pensado pro{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">uso noturno</span>{' '}
              com bebê no colo.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <article
                key={f.titulo}
                className="rounded-[20px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-6 transition hover:border-[color:var(--gold)]/40"
              >
                <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {f.titulo}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Princípios do produto
            </p>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
              Como o Sono Leve{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">pensa</span> sono
              de bebê.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2">
            {PRINCIPIOS.map((p, i) => (
              <article
                key={p.titulo}
                className="group bg-[color:var(--bg-elev)] p-8 transition hover:bg-[color:var(--bg-elev-2)]"
              >
                <span className="font-serif text-xs italic text-[color:var(--gold-soft)]">
                  0{i + 1}
                </span>
                <h3 className="mt-10 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--line-strong)] bg-gradient-to-br from-[color:var(--bg-elev-2)] via-[color:var(--bg-elev)] to-[color:var(--surface-deep)] px-8 py-14 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(200,182,255,0.18),transparent_70%)]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                  — Acesso ao beta
                </p>
                <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                  Sua família quer testar antes do lançamento?
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
                  Sono Leve está em beta privado no TestFlight (iOS). Mande seu email e a gente
                  te coloca no próximo grupo — sem custo durante o beta.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tese"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50"
                >
                  Ler a tese
                </Link>
                <a
                  href="mailto:contato@aralabs.com.br?subject=Beta%20Sono%20Leve"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
                >
                  Pedir acesso ao beta →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10 lg:py-12">
          <div className="flex flex-col gap-2 text-[13.5px] text-[color:var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              Documentos legais do Sono Leve — exigidos para distribuição em loja e em
              conformidade com a LGPD.
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/produtos/sono-leve/privacidade"
                className="text-[color:var(--gold-soft)] transition hover:text-[color:var(--gold)]"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/produtos/sono-leve/termos"
                className="text-[color:var(--gold-soft)] transition hover:text-[color:var(--gold)]"
              >
                Termos de Uso
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
