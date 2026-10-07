import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, softwareApplicationSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { LUMO_APPSTORE_URL, productBySlug } from '@/lib/products';
import { InView } from '@/components/home/InView';
import { AppButton, AppHero, AppKicker, AppLegalLinks, cssI } from '@/components/site/AppHero';
import { LumoHeroBoard, LumoScreens } from '@/components/products/lumo/LumoVisuals';

const lumo = productBySlug('lumo');
/** Lighter purple for type and accents on the dark and purple sections. */
const LILAC = '#d9cffb';

const pageDescription =
  'Lumo é um app gratuito de comunicação alternativa para crianças não-verbais: 13.798 pictogramas ARASAAC, rotinas visuais e 4 idiomas. Offline e sem cadastro.';

export const metadata = pageMetadata({
  path: '/produtos/lumo',
  title: 'Lumo: app de comunicação alternativa (CAA) grátis',
  description: pageDescription,
  image: '/produtos/lumo/opengraph-image',
});

const PRA_QUEM = [
  {
    titulo: 'Famílias com crianças não-verbais',
    body: 'Crianças de 2 a 8 anos com atraso de fala, autismo não-verbal ou minimamente verbal, que precisam de um jeito visual de pedir o que querem.',
  },
  {
    titulo: 'Terapeutas e fonoaudiólogos',
    body: 'Um perfil para cada paciente, cada um com a sua biblioteca de cards, a sua voz e as suas configurações.',
  },
  {
    titulo: 'Avós, cuidadores e escolas',
    body: 'Mesmo card, mesma palavra. Acaba a confusão entre “água” em casa e “aguinha” na escola: a família alinha o vocabulário.',
  },
];

const COMO_FUNCIONA = [
  {
    n: '01',
    titulo: 'Crie o perfil',
    body: 'Nome, foto se quiser, idioma (PT-BR, PT-PT, EN-US ou ES-ES) e voz. Sem login e sem cadastro: os dados ficam no celular.',
  },
  {
    n: '02',
    titulo: 'Toque pra dizer',
    body: 'A criança escolhe cards com pictogramas, monta a frase (eu + quero + água) e toca o botão de fala. O app fala em voz alta, no idioma escolhido.',
  },
  {
    n: '03',
    titulo: 'Crie cards próprios',
    body: 'Tire uma foto da mamadeira da casa, escolha um pictograma ARASAAC ou use só texto. O card entra na biblioteca da criança.',
  },
  {
    n: '04',
    titulo: 'Monte rotinas visuais',
    body: 'Manhã, banho, escola, dormir, remédio. A criança vê a sequência do dia em cards e sabe o que vem agora. Menos ansiedade.',
  },
];

/** The same word in the four catalogs; regional variants are respected, not translated by machine. */
const PALAVRAS = [
  ['água', 'água', 'water', 'agua'],
  ['banheiro', 'casa de banho', 'bathroom', 'baño'],
  ['suco', 'sumo', 'juice', 'zumo'],
  ['mamãe', 'mãe', 'mom', 'mamá'],
];
const IDIOMAS = ['PT-BR', 'PT-PT', 'EN-US', 'ES-ES'];

const FEATURES = [
  {
    titulo: '13.798 pictogramas ARASAAC',
    body: 'A biblioteca completa do Centro Aragonés de la Comunicación Aumentativa y Alternativa, dentro do app. Busca por palavra nos quatro idiomas.',
  },
  {
    titulo: 'Quatro idiomas desde o primeiro dia',
    body: 'PT-BR, PT-PT, EN-US e ES-ES, cada um com o seu catálogo. Banheiro e casa de banho, suco e sumo, mamãe e mãe.',
  },
  {
    titulo: 'Modo criança protegido',
    body: 'Tela cheia, sem abas, sem edição e sem ajustes. Só sai com PIN. Dá para entregar o tablet sem a criança sair do app.',
  },
  {
    titulo: 'Voz do próprio aparelho',
    body: 'Usa a síntese de voz do sistema. Sem serviço na nuvem, sem custo por minuto e funcionando offline.',
  },
  {
    titulo: 'Rotinas visuais no mesmo app',
    body: 'Os mesmos cards viram a rotina do dia, em sequência: manhã, banho, dormir, remédio. Sem um segundo app.',
  },
  {
    titulo: 'Vários perfis',
    body: 'Vários filhos, ou um terapeuta com vários pacientes. Cada perfil tem biblioteca, voz, idioma e configurações próprios.',
  },
  {
    titulo: 'Offline de verdade',
    body: 'Banco de dados local. Funciona em modo avião, na sala de espera sem wi-fi, na casa da avó, no carro.',
  },
  {
    titulo: 'Privacidade total',
    body: 'Foto, nome e uso da criança ficam no aparelho. Sem cadastro, sem login, sem rastreamento e sem analytics.',
  },
];

const COMPROMISSO = [
  {
    titulo: 'Gratuito pra sempre',
    body: 'Sem assinatura, sem Premium, sem compra dentro do app que desbloqueie alguma coisa. Sem anúncio.',
  },
  {
    titulo: 'Pictogramas profissionais',
    body: 'ARASAAC é referência mundial em comunicação alternativa. Licença CC BY-NC-SA 4.0, com autorização explícita do Centro Aragonés.',
  },
  {
    titulo: 'Sem agenda comercial',
    body: 'Um projeto pessoal da AraLabs para a comunidade de CAA. Se um dia houver parcerias institucionais ou doações opcionais, o uso pelas famílias continua gratuito.',
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
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'iOS',
          offer: 'free',
          downloadUrl: LUMO_APPSTORE_URL,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: lumo.name }])}
      />

      {/* 1 · HERO — the phrase being built over the real Talk screen */}
      <AppHero
        product={lumo}
        titleSize="xl"
        titlePrefix="Lumo, comunicação alternativa para crianças não-verbais."
        backdrop={
          <>
            <div className="absolute right-[-10%] top-[-30%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(106,75,214,0.16),transparent_70%)]" />
            <div className="tri-grid absolute inset-0" />
          </>
        }
        title={
          <>
            Toque pra <span style={{ color: lumo.colorInk }}>dizer.</span>
          </>
        }
        lead={
          <p>
            Lumo dá pra sua criança um jeito visual de pedir, contar e conversar, sem precisar de
            palavras. Cards, rotinas e pictogramas ARASAAC em quatro idiomas.
          </p>
        }
        actions={
          <>
            <AppButton href={LUMO_APPSTORE_URL} external bg={lumo.colorInk} fg="#fff">
              Baixar na App Store <ArrowRight className="h-4 w-4" />
            </AppButton>
            <AppButton href="#como-funciona" variant="ghost">
              Como funciona
            </AppButton>
          </>
        }
        note="Gratuito pra sempre · Offline · Sem cadastro · Dados ficam no celular"
        aside={<LumoHeroBoard />}
      />

      {/* 2 · PRA QUEM — full purple, cut on the diagonal */}
      <section
        className="cut-top overflow-x-clip text-white"
        style={{ background: lumo.colorInk }}
        aria-labelledby="lumo-pra-quem"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-[-15%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
          <AppKicker color={LILAC}>Pra quem é</AppKicker>
          <h2
            id="lumo-pra-quem"
            className="display mt-6 max-w-[16ch] text-[clamp(2.8rem,7vw,6.4rem)]"
          >
            Quando as palavras <span style={{ color: LILAC }}>não são o caminho.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-white/85">
            O Lumo é um app de comunicação aumentativa e alternativa (CAA): uma prancha de
            comunicação no celular ou no tablet, com cards que falam em voz alta. Serve para
            crianças autistas (TEA), com apraxia de fala ou com outras condições que dificultam a
            fala, na hora de pedir, escolher e contar. É uma ferramenta de comunicação, não uma
            terapia, e funciona junto com o trabalho do fonoaudiólogo.
          </p>
          <InView
            as="ul"
            className="mt-14 grid gap-10 border-t border-white/25 pt-10 md:grid-cols-3 md:gap-10 lg:mt-20"
          >
            {PRA_QUEM.map((x, k) => (
              <li key={x.titulo} className="iv iv-up" style={cssI(k * 2)}>
                <span className="tri text-[10px] text-white/70" aria-hidden="true" />
                <h3 className="mt-5 text-[clamp(1.35rem,2vw,1.6rem)] font-bold leading-[1.15] tracking-tight">
                  {x.titulo}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-white/80">{x.body}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3 · COMO FUNCIONA — four steps, giant numerals */}
      <section id="como-funciona" className="overflow-x-clip" aria-labelledby="lumo-passos">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <AppKicker color={lumo.colorInk}>Como funciona</AppKicker>
              <h2
                id="lumo-passos"
                className="display mt-6 text-[clamp(2.6rem,6vw,5.4rem)] text-[color:var(--ink)]"
              >
                Quatro passos pra começar.
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-[1.7] text-[color:var(--ink-muted)] lg:justify-self-end">
              Do perfil criado à primeira frase dita em voz alta, sem cadastro e sem internet.
            </p>
          </div>
          <InView
            as="ol"
            className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-8"
          >
            {COMO_FUNCIONA.map((s, k) => (
              <li
                key={s.n}
                className="iv iv-up border-t-2 pt-6"
                style={{ borderColor: lumo.colorInk, ...cssI(k * 2) }}
              >
                <span
                  className="display flex items-start gap-2 text-[clamp(3.6rem,6vw,5.4rem)]"
                  style={{ color: lumo.colorInk }}
                >
                  {s.n}
                  <span className="tri mt-[0.14em] text-[0.18em]" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[21px] font-bold tracking-tight text-[color:var(--ink)]">
                  {s.titulo}
                </h3>
                <p className="mt-2 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {s.body}
                </p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 4 · ONE WORD, FOUR LANGUAGES — black, the catalog as type */}
      <section
        className="cut-top-rev overflow-x-clip bg-[color:var(--dark)] text-white"
        aria-labelledby="lumo-idiomas"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-[-15%] top-[-10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(106,75,214,0.32),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={LILAC}>Quatro idiomas</AppKicker>
          <h2
            id="lumo-idiomas"
            className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,6.4vw,5.8rem)]"
          >
            A mesma palavra, <span style={{ color: LILAC }}>do jeito de cada casa.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/70">
            Cada idioma tem o seu catálogo. Português do Brasil e de Portugal não são a mesma coisa,
            e a criança aprende a palavra que a família usa.
          </p>

          <div
            className="mt-14 lg:mt-20"
            role="table"
            aria-label="A mesma palavra nos quatro idiomas"
          >
            <div
              role="row"
              className="grid grid-cols-2 gap-x-6 border-b border-white/15 pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 md:grid-cols-4"
            >
              {IDIOMAS.map((l, k) => (
                <span role="columnheader" key={l} className={k > 1 ? 'hidden md:block' : ''}>
                  {l}
                </span>
              ))}
            </div>
            <InView threshold={0.2}>
              {PALAVRAS.map((row, r) => (
                <div
                  role="row"
                  key={row[0]}
                  className="iv iv-up grid grid-cols-2 items-baseline gap-x-6 border-b border-white/15 py-4 md:grid-cols-4 md:py-5"
                  style={cssI(r * 2)}
                >
                  {row.map((w, k) => (
                    <span
                      role="cell"
                      key={IDIOMAS[k]}
                      className={`display text-[clamp(1.6rem,3.6vw,3.3rem)] leading-[1] ${
                        k > 1 ? 'hidden text-white/45 md:block' : ''
                      }`}
                      style={k < 2 && row[0] !== row[1] ? { color: k ? LILAC : '#fff' } : undefined}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              ))}
            </InView>
            <p className="mt-4 text-[12.5px] text-white/50 md:hidden">
              Em inglês e espanhol: water, bathroom, juice, mom · agua, baño, zumo, mamá.
            </p>
          </div>

          <div className="mt-24 grid gap-10 border-t border-white/15 pt-16 lg:mt-32 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pt-20">
            <InView as="p" className="display text-[clamp(4.6rem,15vw,13rem)] leading-[0.82]">
              <span className="iv iv-word inline-block" style={{ color: LILAC }}>
                13.798
              </span>
            </InView>
            <p className="max-w-sm text-[17px] leading-[1.65] text-white/75">
              pictogramas ARASAAC dentro do app, com busca por palavra nos quatro idiomas. Sem
              baixar nada depois e sem internet.
            </p>
          </div>
        </div>
      </section>

      {/* 5 · WHAT IT DOES — the real screens + an editorial list */}
      <section className="overflow-x-clip" aria-labelledby="lumo-faz">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={lumo.colorInk}>O que o Lumo faz</AppKicker>
          <h2
            id="lumo-faz"
            className="display mt-6 max-w-[17ch] text-[clamp(2.6rem,6vw,5.4rem)] text-[color:var(--ink)]"
          >
            Comunicação visual completa,{' '}
            <span style={{ color: lumo.colorInk }}>num app calmo.</span>
          </h2>
          <div
            className="relative mt-14 overflow-hidden rounded-[32px] px-5 pt-8 sm:px-10 sm:pt-12 lg:mt-20"
            style={{ background: lumo.colorSoft }}
          >
            <div className="mx-auto max-w-[900px] translate-y-6">
              <LumoScreens />
            </div>
          </div>
          <p className="mt-3 text-[12px] text-[color:var(--ink-dim)]">
            Telas do Lumo em inglês e espanhol: falar, início e cards.
          </p>
          <ul className="mt-14 grid gap-x-14 border-t border-[color:var(--line-strong)] md:grid-cols-2 lg:mt-20">
            {FEATURES.map((f) => (
              <li
                key={f.titulo}
                className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-[color:var(--line-strong)] py-6"
              >
                <span
                  className="tri tri-r mt-[0.45em] text-[8px]"
                  style={{ color: lumo.colorInk }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-[19px] font-bold tracking-tight text-[color:var(--ink)]">
                    {f.titulo}
                  </h3>
                  <p className="mt-1.5 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 · COMPROMISSO — purple again, the promise at full size */}
      <section
        className="cut-top overflow-x-clip text-white"
        style={{ background: lumo.colorInk }}
        aria-label="Nosso compromisso"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute bottom-[-30%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={LILAC}>Nosso compromisso</AppKicker>
          <InView as="h2" className="display mt-6 text-[clamp(3.2rem,10vw,9.5rem)]">
            <span className="iv iv-word inline-block" style={cssI(0)}>
              Gratuito
            </span>{' '}
            <span className="iv iv-word inline-block" style={{ color: LILAC, ...cssI(2) }}>
              pra sempre.
            </span>
          </InView>
          <p className="mt-8 max-w-xl text-[18px] leading-[1.65] text-white/85">
            Comunicação não deve ser privilégio. Toda criança merece um jeito de se expressar, ser
            ouvida e participar da própria rotina.
          </p>
          <ul className="mt-14 grid gap-10 border-t border-white/25 pt-10 md:grid-cols-3 lg:mt-20">
            {COMPROMISSO.map((c) => (
              <li key={c.titulo}>
                <h3 className="flex items-center gap-3 text-[20px] font-bold tracking-tight">
                  <span className="tri text-[8px] text-white/70" aria-hidden="true" />
                  {c.titulo}
                </h3>
                <p className="mt-3 text-[15.5px] leading-[1.65] text-white/80">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 · DEDICATÓRIA + CRÉDITOS */}
      <section className="overflow-x-clip" aria-labelledby="lumo-selma">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:px-10 lg:py-36">
          <div>
            <AppKicker color={lumo.colorInk}>Dedicatória</AppKicker>
            <h2
              id="lumo-selma"
              className="display mt-6 text-[clamp(3.6rem,10vw,8.6rem)]"
              style={{ color: lumo.colorInk }}
            >
              Para Selma.
            </h2>
            <p className="mt-8 max-w-xl text-[18px] leading-[1.7] text-[color:var(--ink)]">
              O Lumo nasceu em homenagem à <strong>Profa. Dra. Selma Lanhellas</strong>, educadora,
              inspiração e presença por trás deste projeto.
            </p>
            <p className="mt-5 max-w-xl text-[16.5px] leading-[1.75] text-[color:var(--ink-muted)]">
              Sua trajetória na educação, na inclusão e no cuidado com crianças que aprendem e se
              comunicam de formas diferentes inspirou uma ferramenta feita para ajudar crianças a
              serem ouvidas, mesmo quando as palavras não são o caminho.
            </p>
            <Link
              href="/produtos/lumo/dedicatoria"
              className="group mt-8 inline-flex items-center gap-2 text-[15.5px] font-semibold"
              style={{ color: lumo.colorInk }}
            >
              Ler a dedicatória completa
              <span
                className="tri tri-r text-[8px] transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="border-t border-[color:var(--line-strong)] pt-8 lg:mt-auto">
            <AppKicker>Créditos</AppKicker>
            <h3 className="mt-5 text-[26px] font-bold tracking-tight text-[color:var(--ink)]">
              Pictogramas ARASAAC.
            </h3>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[color:var(--ink-muted)]">
              Símbolos pictográficos: ARASAAC, autor Sergio Palao, licença Creative Commons BY-NC-SA
              4.0, propriedade do Governo de Aragón (Espanha).
            </p>
            <Link
              href="/produtos/lumo/creditos"
              className="group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[color:var(--gold-soft)]"
            >
              Ver créditos e licenças completos
              <span
                className="tri tri-r text-[8px] transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 · FINAL — black, download */}
      <section
        className="cut-top-rev overflow-x-clip bg-[color:var(--dark)] text-white"
        aria-labelledby="lumo-baixar"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-[-10%] top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(106,75,214,0.3),transparent_70%)]" />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-14 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-10 lg:py-32">
          <div>
            <AppKicker color={LILAC}>{lumo.offer}</AppKicker>
            <h2
              id="lumo-baixar"
              className="display mt-6 max-w-[13ch] text-[clamp(2.8rem,6.4vw,5.8rem)]"
            >
              Baixe, crie o perfil e <span style={{ color: LILAC }}>comece hoje.</span>
            </h2>
            <p className="mt-8 max-w-lg text-[17px] leading-[1.7] text-white/75">
              Sem cadastro e sem internet. Famílias e terapeutas com sugestões ou dúvidas podem
              escrever pra gente. E para as tarefas e a agenda da casa toda, a AraLabs também faz o{' '}
              <Link
                href="/produtos/casa-leve"
                className="font-semibold text-white underline underline-offset-4"
              >
                Casa Leve
              </Link>
              .
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <AppButton href={LUMO_APPSTORE_URL} external bg="#fff" fg={lumo.colorInk}>
                Baixar na App Store <ArrowRight className="h-4 w-4" />
              </AppButton>
              <AppButton href="mailto:contato@aralabs.com.br?subject=Lumo" variant="ghost-dark">
                Falar com a gente
              </AppButton>
            </div>
          </div>
          <div className="lg:mt-auto">
            <AppLegalLinks
              product={lumo}
              onDark
              support={false}
              extra={[
                { label: 'Créditos e licenças', href: '/produtos/lumo/creditos' },
                { label: 'Dedicatória', href: '/produtos/lumo/dedicatoria' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
