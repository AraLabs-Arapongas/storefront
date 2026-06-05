import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';

const pageTitle = 'Lumo — comunicação visual pra famílias';
const pageDescription =
  'Lumo é o app da AraLabs de comunicação visual e rotina pra famílias com crianças não-verbais. 13.798 pictogramas ARASAAC, 4 idiomas, modo criança com PIN. Gratuito pra sempre. Funciona offline. Em breve na App Store.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/produtos/lumo' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/lumo',
    type: 'website',
  },
};

const PRA_QUEM = [
  {
    titulo: 'Famílias com crianças não-verbais',
    body:
      'Crianças de 2 a 8 anos com atraso de fala, autismo não-verbal ou minimamente verbal. Precisam de jeito visual pra pedir o que querem.',
  },
  {
    titulo: 'Terapeutas e fonoaudiólogos',
    body:
      'Multi-perfil pra usar com vários pacientes. Cada perfil tem sua biblioteca de cards, voz e configurações independentes.',
  },
  {
    titulo: 'Avós, cuidadores e escolas',
    body:
      'Mesmo card, mesma palavra. Reduz confusão entre "água" em casa e "aguinha" na escola. Família alinha vocabulário.',
  },
];

const COMO_FUNCIONA = [
  {
    n: '01',
    titulo: 'Cria o perfil',
    body:
      'Nome, foto opcional, idioma (PT-BR, PT-PT, EN-US ou ES-ES) e voz. Sem login. Sem cadastro. Dados ficam no celular.',
  },
  {
    n: '02',
    titulo: 'Toca pra dizer',
    body:
      'Criança escolhe cards com pictogramas, monta frases (eu + quero + água) e toca o botão de fala. App fala em voz alta no idioma escolhido.',
  },
  {
    n: '03',
    titulo: 'Cria cards próprios',
    body:
      'Tira foto da mamadeira da casa, escolhe pictograma ARASAAC, ou usa só texto. Card vira parte da biblioteca pessoal.',
  },
  {
    n: '04',
    titulo: 'Monta rotinas visuais',
    body:
      'Manhã, banho, escola, dormir, tomar remédio. Criança vê sequência do dia em cards, sabe o que vem agora, reduz ansiedade.',
  },
];

const FEATURES = [
  {
    titulo: '13.798 pictogramas ARASAAC',
    body:
      'Biblioteca completa do Centro Aragonés de la Comunicación Aumentativa y Alternativa, bundled no app. Busca por palavra-chave em 4 idiomas.',
  },
  {
    titulo: 'Quatro idiomas desde o dia 1',
    body:
      'PT-BR, PT-PT, EN-US, ES-ES. Catalogs separados — variantes regionais respeitadas (banheiro/casa de banho, suco/sumo, mamãe/mãe).',
  },
  {
    titulo: 'Modo criança protegido',
    body:
      'Fullscreen, sem tab bar, sem edição, sem ajustes. Sai só com PIN. Pra entregar tablet pra criança sem ela sair do app.',
  },
  {
    titulo: 'TTS nativo iOS/Android',
    body:
      'Síntese de voz do sistema operacional. Sem dependência de serviço cloud, sem custo por minuto, funciona offline.',
  },
  {
    titulo: 'Rotinas visuais integradas',
    body:
      'Não precisa segundo app de rotina. Os mesmos cards viram itens de rotina visual sequencial: manhã, banho, dormir, remédio.',
  },
  {
    titulo: 'Multi-perfil',
    body:
      'Vários filhos, ou terapeuta com vários pacientes. Cada perfil tem biblioteca, voz, idioma e configurações próprias.',
  },
  {
    titulo: 'Offline real',
    body:
      'SQLite local. Funciona em modo avião, sala de espera sem wifi, casa da avó, carro. Zero cloud na Fase 1.',
  },
  {
    titulo: 'Privacidade total',
    body:
      'Foto, nome e frequência de uso de criança ficam no device. Sem cadastro, sem login, sem rastreamento, sem analytics.',
  },
];

const COMPROMISSO = [
  {
    titulo: 'Gratuito pra sempre',
    body:
      'Sem assinatura, sem Premium, sem in-app purchases que desbloqueiem nada. Sem ads. Comunicação não deve ser privilégio.',
  },
  {
    titulo: 'Pictogramas profissionais',
    body:
      'ARASAAC é referência global em comunicação alternativa. CC BY-NC-SA 4.0, com autorização explícita do Centro Aragonés.',
  },
  {
    titulo: 'Sem agenda comercial',
    body:
      'Projeto pessoal da AraLabs pra comunidade AAC. No futuro pode haver parcerias institucionais e doações opt-in — uso familiar continua gratuito.',
  },
];

export default function LumoLandingPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/lumo',
          name: 'Lumo',
          description: pageDescription,
          applicationCategory: 'EducationApplication',
          operatingSystem: 'iOS, Android',
        })}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-8%] top-[-20%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.12),transparent_70%)]" />
          <div className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,255,0.08),transparent_70%)]" />
        </div>
        <div className="grain" />

        <div className="mx-auto max-w-[1240px] px-6 pb-20 pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="flex flex-col">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              — Lumo · Comunicação visual
            </p>
            <h1 className="max-w-3xl text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] md:text-[50px] lg:text-[58px]">
              Toque pra{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">dizer</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-[19px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[20px]">
              Lumo dá pra sua criança um jeito visual de pedir, contar e
              conversar — sem precisar de palavras. Cards, rotinas e pictogramas
              ARASAAC em quatro idiomas. Gratuito pra sempre.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-4 py-2 text-[13px] font-medium text-[color:var(--ink)]">
                Em breve na App Store
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-soft)]/30 bg-[color:var(--bg-elev)] px-4 py-2 text-[13px] font-medium text-[color:var(--gold-soft)]">
                Gratuito pra sempre
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-4 py-2 text-[13px] font-medium text-[color:var(--ink-muted)]">
                Offline real
              </span>
            </div>
            <p className="mt-5 text-[14px] text-[color:var(--ink-dim)]">
              Sem cadastro · Sem rastreamento · Dados ficam no celular
            </p>
          </div>
        </div>
      </section>

      {/* PRA QUEM */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Pra quem é
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Quando as palavras{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">não são o caminho</span>.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PRA_QUEM.map((p) => (
              <div
                key={p.titulo}
                className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7"
              >
                <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Como funciona
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Quatro passos pra começar.
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {COMO_FUNCIONA.map((s) => (
              <li key={s.n} className="bg-[color:var(--bg-elev)] p-7">
                <span className="font-serif text-[13px] italic tracking-wider text-[color:var(--gold-soft)]">
                  {s.n}
                </span>
                <h3 className="mt-8 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {s.titulo}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            O que o Lumo faz
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Ferramenta completa de comunicação visual.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.titulo}
                className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7"
              >
                <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {f.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPROMISSO */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Nosso compromisso
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Lumo é e sempre será{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">gratuito</span> pra famílias.
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
            Acreditamos que comunicação não deve ser privilégio. Toda criança
            merece uma forma de se expressar, ser ouvida e participar da própria
            rotina.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {COMPROMISSO.map((c) => (
              <div
                key={c.titulo}
                className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-7"
              >
                <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {c.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATÓRIA */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
            — Dedicatória
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Para Selma.
          </h2>
          <p className="mt-7 text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
            O Lumo nasceu em homenagem à{' '}
            <strong className="text-[color:var(--ink)]">
              Profa. Dra. Selma Lanhellas
            </strong>{' '}
            — educadora, inspiração e presença por trás deste projeto.
          </p>
          <p className="mt-5 text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
            Sua trajetória na educação, na inclusão e no cuidado com crianças
            que aprendem e se comunicam de formas diferentes inspirou uma
            ferramenta feita para ajudar crianças a serem ouvidas, mesmo quando
            as palavras não são o caminho.
          </p>
          <Link
            href="/produtos/lumo/dedicatoria"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-[color:var(--gold-soft)] hover:text-[color:var(--gold)]"
          >
            Ler dedicatória completa →
          </Link>
        </div>
      </section>

      {/* CRÉDITOS */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Créditos
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Pictogramas ARASAAC.
          </h2>
          <p className="mt-7 text-[17px] leading-[1.7] text-[color:var(--ink-muted)]">
            Símbolos pictográficos: ARASAAC, autor Sergio Palao, licença
            Creative Commons BY-NC-SA 4.0, propriedade do Governo de Aragón
            (Espanha).
          </p>
          <Link
            href="/produtos/lumo/creditos"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-[color:var(--gold-soft)] hover:text-[color:var(--gold)]"
          >
            Ver créditos e licenças completos →
          </Link>
        </div>
      </section>

      {/* FINAL */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-10 lg:p-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              — Em breve
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-[color:var(--ink)] md:text-[36px]">
              Lumo será disponibilizado na App Store em breve.
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              Famílias e terapeutas que quiserem participar do beta no
              TestFlight podem escrever pra gente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:contato@aralabs.com.br?subject=Lumo%20-%20Interesse%20no%20beta%20TestFlight"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-[15px] font-medium text-[color:var(--bg)] hover:opacity-90"
              >
                Quero entrar no beta
              </a>
              <Link
                href="/produtos/lumo/privacidade"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-transparent px-5 py-3 text-[15px] font-medium text-[color:var(--ink)] hover:border-[color:var(--gold-soft)]/40"
              >
                Política de privacidade
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
