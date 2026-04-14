import { ArrowRight } from 'lucide-react';

const nav = ['A Aralabs', 'Produtos', 'Casa Leve', 'Nossa Tese', 'Contato'];

const pillars = [
  {
    title: 'Empresa-mãe',
    body: 'A Aralabs é a estrutura central por trás dos produtos que vamos construir.',
    icon: '◧',
    accent: 'bg-[#f0e8dc] text-[#7a4cff]',
  },
  {
    title: 'Problemas reais',
    body: 'Escolhemos territórios onde há dor recorrente, atrito diário e espaço para gerar valor de verdade.',
    icon: '◎',
    accent: 'bg-[#fff1dc] text-[#b77900]',
  },
  {
    title: 'Clareza e estrutura',
    body: 'Construímos com direção, documentação e coerência, evitando improviso e excesso de complexidade.',
    icon: '▣',
    accent: 'bg-[#eef2ff] text-[#4338ca]',
  },
  {
    title: 'Visão de longo prazo',
    body: 'Não estamos criando um único app. Estamos construindo uma empresa capaz de sustentar múltiplos produtos.',
    icon: '◔',
    accent: 'bg-[#e8f7ff] text-[#0f766e]',
  },
];

const principles = [
  'Problemas reais antes de features',
  'Clareza antes de complexidade',
  'Utilidade antes de modismo',
  'Construção com intenção',
  'Longo prazo como filtro',
];

const productTags = ['Rotina da casa', 'Colaboração', 'Hábitos', 'Incentivo positivo'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#231f20] antialiased">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#9b6cff]/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[#caa46a]/12 blur-3xl" />
        <div className="absolute bottom-[20rem] left-[20%] h-[22rem] w-[22rem] rounded-full bg-[#7e57c2]/8 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold tracking-tight text-[#1d1b20]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1f2230] text-[#e6c58a] shadow-sm">
              A
            </span>
            <span className="text-xl">Aralabs</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3e3a3b] md:flex">
            {nav.map((item) => (
              <a key={item} href="#top" className="transition hover:text-[#7a4cff]">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-14 lg:grid-cols-2 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#7c6b58]">
            Empresa de produtos digitais
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#111015] md:text-6xl lg:text-7xl">
            Produtos <span className="text-[#7a4cff]">digitais</span> para problemas reais do
            cotidiano.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#4d4950] md:text-xl">
            A Aralabs é uma empresa brasileira criada para desenvolver produtos digitais úteis,
            claros e bem estruturados. Nosso primeiro foco está em ajudar famílias a funcionarem
            melhor no dia a dia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#product-highlight"
              className="rounded-full bg-[#1f2230] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:bg-[#2a2f43] hover:-translate-y-0.5"
            >
              Conheça o Casa Leve
            </a>
            <a
              href="#institutional-band"
              className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[#1f2230] transition duration-300 hover:border-[#7a4cff]/30 hover:text-[#7a4cff] hover:-translate-y-0.5"
            >
              Entenda a Aralabs
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#efe6db] via-white/60 to-[#efe8ff] shadow-[0_30px_80px_rgba(49,38,65,0.10)] ring-1 ring-black/5" />

          <div className="absolute left-[8%] top-[18%] h-[58%] w-[76%] rounded-[2rem] bg-[#1f2230] shadow-2xl shadow-black/20" />
          <div className="absolute left-[14%] top-[11%] h-[58%] w-[76%] rounded-[2rem] bg-[#d8c0ff] shadow-xl shadow-[#9b6cff]/20 ring-1 ring-white/50" />
          <div className="absolute left-[19%] top-[4%] h-[58%] w-[76%] rounded-[2rem] bg-[#faf7f2] shadow-xl shadow-black/10 ring-1 ring-black/5" />

          <div className="absolute left-[28%] top-[23%] flex h-[12%] w-[22%] items-center justify-center rounded-2xl bg-gradient-to-br from-[#dfbf88] to-[#c9993f] text-sm font-bold text-[#30240f] shadow-lg shadow-[#c9993f]/25">
            A
          </div>

          <div className="absolute bottom-[10%] right-[8%] w-[50%] rounded-[1.75rem] bg-white/85 p-6 shadow-2xl shadow-black/10 ring-1 ring-black/5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a7b69]">
              Visão institucional
            </p>
            <p className="mt-4 text-base leading-7 text-[#3e3a3b]">
              A Aralabs é a empresa-mãe que reúne produtos digitais com utilidade real. Nosso
              primeiro foco está em resolver desafios concretos do cotidiano.
            </p>
          </div>
        </div>
      </section>

      <section id="institutional-band" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="rounded-[2rem] bg-white/70 px-8 py-12 shadow-[0_20px_60px_rgba(50,38,64,0.06)] ring-1 ring-black/5 md:px-12 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7b69]">
              Aralabs
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#151318] md:text-5xl">
              Uma empresa de produtos, não apenas de software.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#57525b]">
              A Aralabs nasceu para criar produtos digitais com utilidade real. Nosso papel é
              identificar problemas importantes do cotidiano, formular boas teses e transformar
              essas teses em soluções claras, úteis e sustentáveis ao longo do tempo.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/6 bg-[#fcfbf8] p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accent} text-lg font-semibold`}
                >
                  {item.icon}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#1e1a1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#5a555c]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="principles"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 lg:grid-cols-[1.15fr_0.95fr] lg:px-10 lg:pb-28"
      >
        <div className="rounded-[2rem] bg-[#1f2230] px-8 py-10 text-white shadow-[0_30px_80px_rgba(23,19,33,0.24)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d7c29a]">
            Como pensamos
          </p>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Princípios que guiam nossas decisões.
          </h2>
          <ul className="mt-10 space-y-5">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-start gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d7c29a]" />
                <div>
                  <p className="text-lg font-semibold text-white">{principle}</p>
                  <p className="mt-1 text-sm leading-7 text-white/70">
                    Construímos com direção, sem improviso e sem transformar estratégia em ruído.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-white/75 p-8 shadow-[0_20px_60px_rgba(50,38,64,0.08)] ring-1 ring-black/5 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7b69]">
            Nosso primeiro produto
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#dfbf88] to-[#c9993f] font-bold text-[#3d2a09]">
              A
            </div>
            <h3 className="text-4xl font-semibold tracking-tight text-[#1a1719]">Casa Leve</h3>
          </div>
          <p className="mt-6 text-lg leading-8 text-[#57525b]">
            Um sistema para ajudar famílias a organizarem a rotina da casa, distribuírem
            responsabilidades, incentivarem hábitos e trazerem mais clareza e leveza para o dia a
            dia.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {productTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/8 bg-[#f8f3ea] px-4 py-2 text-sm font-medium text-[#4a4448]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center text-sm font-semibold text-[#7a4cff] transition hover:opacity-80"
          >
            Conhecer o Casa Leve <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { title: 'Bom dia, família 👋', value: '8', label: 'tarefas do dia' },
              { title: 'Rotina', value: '4', label: 'pendentes' },
              { title: 'Pontos', value: '1.250', label: 'na semana' },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[1.5rem] bg-[#faf7f2] p-4 ring-1 ring-black/5"
              >
                <p className="text-xs font-medium text-[#7c6b58]">{card.title}</p>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-[#19161a]">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-[#68616a]">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pb-28">
        <div className="rounded-[2rem] bg-[#f6efe5] p-8 ring-1 ring-black/5 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7b69]">
            Por que existimos
          </p>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#181519] md:text-5xl">
            Para construir produtos que façam sentido na vida real.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#59535b]">
            Muitos produtos digitais resolvem pedaços pequenos da vida real, mas poucos ajudam de
            verdade nas rotinas que mais geram desgaste, carga mental e desorganização.
          </p>
          <p className="mt-6 text-lg font-medium leading-8 text-[#2c2830]">
            A Aralabs nasce para atuar nesse espaço.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/70 p-8 shadow-[0_20px_60px_rgba(50,38,64,0.06)] ring-1 ring-black/5 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a7b69]">
            Em construção, com direção clara
          </p>
          <p className="mt-5 text-lg leading-8 text-[#57525b]">
            A Aralabs está em fase inicial de estruturação. Estamos construindo a base da empresa e
            desenvolvendo nosso primeiro produto com visão de longo prazo, sem pressa de parecer
            maior do que somos e sem abrir mão de solidez.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              { title: 'Empresa', text: 'em estruturação' },
              { title: 'Produto', text: 'em desenvolvimento' },
              { title: 'Futuro', text: 'em construção' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.25rem] bg-[#faf7f2] p-4 ring-1 ring-black/5"
              >
                <span className="mb-3 inline-block h-2.5 w-2.5 rounded-full bg-[#d7c29a]" />
                <p className="text-sm font-semibold text-[#1c191d]">{item.title}</p>
                <p className="mt-1 text-xs text-[#6b656d]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="rounded-[2rem] bg-[#222633] px-8 py-10 text-white shadow-[0_30px_80px_rgba(23,19,33,0.24)] md:flex md:items-center md:justify-between md:px-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Conheça o primeiro produto da Aralabs.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              O Casa Leve é o primeiro passo da nossa jornada, um produto pensado para ajudar
              famílias a organizar melhor a vida da casa.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 md:mt-0 md:justify-end">
            <a
              href="#product-highlight"
              className="rounded-full bg-[#d7c29a] px-6 py-3 text-sm font-semibold text-[#22190d] transition duration-300 hover:brightness-95 hover:-translate-y-0.5"
            >
              Conheça o Casa Leve
            </a>
            <a
              href="#institutional-band"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/5 hover:-translate-y-0.5"
            >
              Fale com a Aralabs
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d202b] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr] lg:px-10">
          <div>
            <div className="flex items-center gap-3 font-semibold tracking-tight text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e6c58a] text-[#1d202b] shadow-sm">
                A
              </span>
              <span className="text-2xl">Aralabs</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Empresa brasileira de produtos digitais úteis, claros e bem estruturados, conectados
              com problemas reais do cotidiano.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c29a]">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {nav.map((item) => (
                <li key={item}>
                  <a href="#top" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c29a]">
              Legal
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href="#" className="hover:text-white">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c29a]">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>contato@aralabs.com.br</li>
              <li>aralabs.com.br</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 px-6 py-5 text-center text-xs text-white/50 lg:px-10">
          © 2026 Aralabs. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
