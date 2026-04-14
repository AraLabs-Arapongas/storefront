import { ArrowRight, CheckCircle2, Layers, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-full bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200/50 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a className="flex items-center gap-3 text-lg font-semibold text-slate-950" href="#top">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-200 text-slate-950">
              A
            </span>
            Aralabs
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 xl:flex">
            <a href="#institutional-band" className="transition hover:text-slate-950">
              Institucional
            </a>
            <a href="#principles" className="transition hover:text-slate-950">
              Princípios
            </a>
            <a href="#product-highlight" className="transition hover:text-slate-950">
              Produto
            </a>
            <a href="#cta" className="transition hover:text-slate-950">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <section
          id="top"
          className="relative overflow-hidden px-6 py-20 lg:px-8"
          style={{
            backgroundImage: 'linear-gradient(135deg, #F7F3EE 0%, #F4ECFF 45%, #F2E7D8 100%)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_right,_rgba(122,76,255,0.22),_rgba(247,243,238,0)_55%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/50 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700 backdrop-blur-sm">
                Institucional
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-semibold tracking-[-0.03em] leading-[0.95] text-slate-950 sm:text-6xl">
                  Construímos produtos digitais com <span className="text-purple-500">clareza</span>
                  , <span className="text-amber-500">sofisticação</span> e profundidade.
                </h1>
                <p className="max-w-xl text-lg leading-9 text-slate-700">
                  A Aralabs cria experiências que organizam a vida da casa com presença, calma e
                  personalidade visual.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#product-highlight"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Ver produto
                  <ArrowRight className="ml-3 h-4 w-4" />
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-950 transition duration-300 hover:border-purple-300 hover:bg-slate-50 hover:shadow-lg"
                >
                  Falar com a Aralabs
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                {['Casa Leve', 'Sofisticação', 'Leveza', 'Confiança'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300/40 bg-white/80 px-3 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />
              <div className="absolute -right-16 bottom-20 h-52 w-52 rounded-full bg-amber-200/30 blur-3xl" />
              <div className="relative max-w-[430px]">
                <div className="absolute -top-8 left-12 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  Casa Leve — fluxo diário
                </div>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-white/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                  <div className="grid gap-6 rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                          Casa Leve
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold">Rotina da casa</h2>
                      </div>
                      <span className="rounded-3xl bg-amber-200/15 px-3 py-1 text-xs font-semibold text-amber-100">
                        Premium
                      </span>
                    </div>
                    <div className="space-y-4 rounded-[1.75rem] bg-slate-900/95 p-5">
                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>Agenda familiar</span>
                        <span className="text-amber-200">Atualizado</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          'Revisar listas de compras',
                          'Definir rancho semanal',
                          'Confirmar entregas',
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-3 text-sm">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-3 rounded-[1.75rem] border border-white/10 bg-white/10 p-4 text-sm text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>Organização</span>
                        <span className="font-semibold text-white">+28%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-amber-300" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 left-0 z-10 flex items-center gap-3 rounded-full border border-white/70 bg-white/95 px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-amber-200 text-slate-950">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Impacto real
                    </p>
                    <p className="text-sm font-semibold text-slate-950">
                      Mais clareza e menos atrito
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="institutional-band" className="bg-[#FCFBF8] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Institutional band
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950">
                Uma empresa de produtos, não apenas de software.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: 'Empresa-mãe',
                  description:
                    'A Aralabs é a estrutura central por trás dos produtos que você vai construir.',
                  icon: ShieldCheck,
                  accent: 'bg-violet-500/10 text-violet-700',
                },
                {
                  title: 'Problemas reais',
                  description:
                    'Escolhemos territórios onde há dor recorrente, atrito diário e espaço para gerar valor de verdade.',
                  icon: Lightbulb,
                  accent: 'bg-amber-500/10 text-amber-700',
                },
                {
                  title: 'Clareza e estrutura',
                  description:
                    'Construímos com direção, documentação e coerência, evitando improviso e excesso de complexidade.',
                  icon: Layers,
                  accent: 'bg-slate-900/5 text-slate-950',
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(32,24,48,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(99,102,241,0.15)]"
                  >
                    <div className="pointer-events-none absolute inset-x-4 top-0 h-28 rounded-[2rem] bg-gradient-to-br from-transparent via-purple-100/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-3xl ${card.accent} shadow-sm`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-950">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="principles" className="bg-[#1D202B] px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-purple-200">
                Principles section
              </p>
              <h2 className="text-4xl font-semibold">Princípios que guiam nossas decisões.</h2>
              <p className="max-w-xl text-lg leading-9 text-slate-300">
                Trabalhamos com clareza, calma e profundidade para construir produtos que soem
                sofisticados, contemporâneos e confiáveis.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_18px_40px_rgba(32,24,48,0.1)]">
              {[
                'Problemas reais antes de features',
                'Clareza antes de complexidade',
                'Utilidade antes de modismo',
                'Construção com intenção',
                'Longo prazo como filtro',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-amber-200" />
                  <p className="text-base leading-8 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signature" className="bg-[#F4ECFF] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-purple-200/40 bg-white/90 p-12 shadow-[0_24px_60px_rgba(99,102,241,0.12)]">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-500">
              Assinatura Aralabs
            </p>
            <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
              A maioria dos softwares organiza tarefas. Nós organizamos a vida da casa.
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">
              Fluxos visuais, prioridades claras e rotinas que realmente entram em prática, sem
              deixar a experiência da família para depois.
            </p>
          </div>
        </section>

        <section id="product-highlight" className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
                Product highlight
              </p>
              <h2 className="text-4xl font-semibold text-slate-950">
                Um produto pensado para trazer clareza e menos cobrança no dia a dia da casa.
              </h2>
              <p className="max-w-xl text-lg leading-9 text-slate-600">
                A Casa Leve ajuda famílias a dividir responsabilidades, registrar hábitos e manter
                tudo visível com uma interface leve, com foco em resultados reais.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: '+34% visibilidade', value: 'Mais controle nas rotinas' },
                  { label: '-18% atrito', value: 'Menos cobranças entre quem mora junto' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
              <div className="flex items-center justify-between rounded-[1.75rem] bg-slate-900 p-4 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Projetos ativos
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">Casa Leve</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-200/10 px-3 py-1 text-xs font-semibold text-amber-100">
                  <CheckCircle2 className="h-4 w-4 text-amber-300" />
                  Em dia
                </span>
              </div>
              <div className="mt-6 space-y-5">
                <div className="rounded-[1.75rem] bg-slate-900/90 p-5">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                    <span>Próxima meta</span>
                    <span>03h restante</span>
                  </div>
                  <div className="grid gap-3">
                    {['Planejamento semanal', 'Revisão de tarefas', 'Feedback da família'].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-300" />
                          <span>{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="grid gap-4 rounded-[1.75rem] bg-slate-800/95 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Progresso do mês</span>
                    <span className="text-slate-100">78%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-500 to-amber-300" />
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: 'Fluxo claro',
                    value: '+2.1x',
                    color: 'bg-violet-500/10 text-violet-200',
                  },
                  {
                    label: 'Direção visível',
                    value: '+89%',
                    color: 'bg-amber-300/10 text-amber-100',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-3xl border border-white/10 px-4 py-4 ${item.color}`}
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="bg-[#2A3040] px-6 py-20 text-slate-100 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#222633]/90 p-10 shadow-[0_18px_40px_rgba(32,24,48,0.16)] text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-200">Call to action</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Chega de soluções que não resolvem o problema da casa.
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-300">
              Vamos construir algo que funcione no dia a dia, com clareza, ritmo e presença visual.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-violet-600 to-amber-300 px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(255,238,205,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(255,238,205,0.35)]"
              >
                Falar com a Aralabs
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/15 hover:shadow-lg"
              >
                Ver proposta
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/40 bg-white/90 px-6 py-10 text-slate-600 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-950">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-200 text-slate-950">
                A
              </span>
              <span className="text-lg font-semibold">Aralabs</span>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Empresa brasileira de produtos digitais úteis, claros e bem estruturados, conectando
              com problemas reais do cotidiano.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <span>Instagram</span>
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Navegação</p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <a href="#top" className="block transition hover:text-slate-950">
                A Aralabs
              </a>
              <a href="#institutional-band" className="block transition hover:text-slate-950">
                Institucional
              </a>
              <a href="#principles" className="block transition hover:text-slate-950">
                Princípios
              </a>
              <a href="#product-highlight" className="block transition hover:text-slate-950">
                Produto
              </a>
              <a href="#cta" className="block transition hover:text-slate-950">
                Contato
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Legal</p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <span className="block">Política de Privacidade</span>
              <span className="block">Termos de Uso</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200/40 pt-6 text-sm text-slate-500">
          © 2026 Aralabs. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
