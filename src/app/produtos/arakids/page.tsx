import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, softwareApplicationSchema } from '@/lib/seo/schemas';
import { pageMetadata } from '@/lib/seo/metadata';
import { ARAKIDS_URL, productBySlug } from '@/lib/products';
import { contactHref } from '@/lib/seo/site';
import { InView } from '@/components/home/InView';
import { AppButton, AppHero, AppKicker, cssI } from '@/components/site/AppHero';
import {
  AGES,
  AgeStairs,
  CastleArt,
  LighthouseArt,
  YELLOW,
} from '@/components/products/arakids/ArakidsVisuals';

const arakids = productBySlug('arakids');
const pageDescription =
  'Jogos educativos para crianças de 2 a 10 anos, por idade, sem anúncio, sem cadastro e sem truque para prender na tela. Com área dos pais. Grátis, no navegador.';

export const metadata = pageMetadata({
  path: '/produtos/arakids',
  title: 'Arakids: jogos educativos grátis, sem anúncio',
  description: pageDescription,
  image: '/produtos/arakids/opengraph-image',
});

const TRACK_BODY: Record<string, string> = {
  '2–3': 'Toque, cor, som e forma. Jogos curtos para dedos pequenos, sem texto e sem pressa.',
  '4–5':
    'Letras, números, pares e sequências. A criança descobre sozinha, sem contagem regressiva.',
  '6–7':
    'Leitura inicial, lógica e memória. Desafios que terminam e deixam a criança sair satisfeita.',
  '8–10':
    'Raciocínio, estratégia e criação. Mais profundidade, mesma regra: nada de vício por desenho.',
};

/** What the portal refuses to do, crossed out one by one (same motion as the home manifesto). */
const NAO = [
  'Anúncio.',
  'Cadastro.',
  'Dado da criança.',
  'Notificação.',
  'Recompensa infinita.',
  '“Só mais uma.”',
];

export default function ArakidsPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/arakids',
          name: 'Arakids',
          description: pageDescription,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web',
          offer: 'free',
          downloadUrl: ARAKIDS_URL,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([{ name: 'Produtos', path: '/produtos' }, { name: arakids.name }])}
      />

      {/* 1 · HERO — full blue, the age staircase */}
      <AppHero
        product={arakids}
        tone="color"
        titleSize="xl"
        backdrop={
          <>
            <div className="absolute right-[-12%] top-[-30%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.2),transparent_70%)]" />
            <div className="pa-tri-grid-light absolute inset-0" />
          </>
        }
        titlePrefix="Arakids: jogos educativos sem anúncio."
        title={
          <>
            Pra onde vamos <span style={{ color: YELLOW }}>hoje?</span>
          </>
        }
        lead={
          <p>
            <strong className="font-semibold text-white">
              Jogos que ensinam e deixam a criança sair.
            </strong>{' '}
            Um portal no navegador, por faixa etária, sem anúncio, sem cadastro e sem truque para
            prender a criança na tela.
          </p>
        }
        actions={
          <>
            <AppButton href={arakids.externalUrl!} external bg="#fff" fg={arakids.colorInk}>
              Abrir o Arakids <ArrowRight className="h-4 w-4" />
            </AppButton>
            <AppButton href="#trilhas" variant="ghost-dark">
              Ver as trilhas
            </AppButton>
          </>
        }
        note={`${arakids.offer} · Com área dos pais e regras de tempo de tela`}
        aside={<AgeStairs />}
      />

      {/* 2 · TRILHAS — each age a step further right */}
      <section id="trilhas" className="cut-top overflow-x-clip bg-[color:var(--bg)]">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={arakids.colorInk}>Por idade</AppKicker>
          <h2 className="display mt-6 max-w-[15ch] text-[clamp(2.6rem,6.4vw,5.8rem)] text-[color:var(--ink)]">
            Do primeiro toque à{' '}
            <span style={{ color: arakids.colorInk }}>primeira estratégia.</span>
          </h2>
          <InView as="ol" className="mt-14 border-t border-[color:var(--line-strong)] lg:mt-20">
            {AGES.map((a, k) => (
              <li
                key={a.n}
                className="pa-stair border-b border-[color:var(--line-strong)] py-8 lg:py-10"
                style={cssI(k)}
              >
                <div className="iv iv-up grid gap-3 sm:grid-cols-[minmax(0,19rem)_1fr] sm:items-baseline sm:gap-10">
                  <p
                    className="display whitespace-nowrap text-[clamp(3.4rem,7vw,6.2rem)]"
                    style={{ color: k === 1 ? '#b8860b' : arakids.colorInk }}
                  >
                    {a.n}
                    <span className="ml-2 text-[0.22em] font-semibold tracking-[0.02em] text-[color:var(--ink-dim)]">
                      anos
                    </span>
                  </p>
                  <div>
                    <h3 className="text-[23px] font-bold tracking-tight text-[color:var(--ink)]">
                      {a.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[16px] leading-[1.65] text-[color:var(--ink-muted)]">
                      {TRACK_BODY[a.n]}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3 · REGRAS DA CASA — black, the refusals crossed out */}
      <section
        className="cut-top-rev overflow-x-clip bg-[color:var(--dark)] text-white"
        aria-labelledby="arakids-regras"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-[-15%] top-[-10%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(47,143,214,0.3),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={YELLOW}>Regras da casa</AppKicker>
          <h2
            id="arakids-regras"
            className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,6vw,5.4rem)]"
          >
            O que o Arakids não faz é o que importa.
          </h2>
          <InView
            as="ul"
            className="mt-12 grid border-t border-white/12 md:grid-cols-2 md:gap-x-12"
            threshold={0.35}
          >
            {NAO.map((line, k) => (
              <li
                key={line}
                className="border-b border-white/12 py-4 text-[clamp(1.4rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-white/55 lg:py-6"
              >
                <span className="strike" style={cssI(k)}>
                  {line}
                </span>
              </li>
            ))}
          </InView>
          <InView as="p" className="display mt-16 text-[clamp(3.2rem,10vw,9rem)] lg:mt-24">
            <span className="iv iv-word inline-block" style={cssI(0)}>
              Abre.
            </span>{' '}
            <span className="iv iv-word inline-block" style={cssI(2)}>
              Joga.
            </span>{' '}
            <span className="iv iv-word inline-block" style={{ color: YELLOW, ...cssI(4) }}>
              Vai brincar.
            </span>
          </InView>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-white/70">
            Jogo para criança costuma ser desenhado para segurar atenção e vender. O Arakids é
            desenhado para a criança aprender alguma coisa e ir brincar de outra. Os jogos terminam:
            não tem “só mais uma” nem notificação chamando de volta.
          </p>
        </div>
      </section>

      {/* 4 · OS LUGARES DOS ADULTOS — the castle and the lighthouse */}
      <section
        className="cut-top overflow-x-clip bg-[color:var(--bg)]"
        aria-labelledby="arakids-pais"
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-36">
          <AppKicker color={arakids.colorInk}>Para os adultos</AppKicker>
          <h2
            id="arakids-pais"
            className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,6vw,5.4rem)] text-[color:var(--ink)]"
          >
            Dois lugares do portal são <span style={{ color: arakids.colorInk }}>só seus.</span>
          </h2>
          <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-10 lg:mt-20 lg:gap-16">
            <article>
              <div
                className="flex aspect-[16/10] items-end justify-center rounded-[28px] px-[12%] pt-[8%]"
                style={{ background: arakids.colorSoft }}
              >
                <CastleArt color={arakids.colorInk} />
              </div>
              <h3
                className="display mt-8 text-[clamp(2rem,3.6vw,3.2rem)]"
                style={{ color: arakids.colorInk }}
              >
                Castelo dos Pais
              </h3>
              <p className="mt-4 max-w-md text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
                A área dos adultos, protegida por toque longo. Lá ficam as regras do portal, as
                regras de tempo de tela e o que a criança está aprendendo em cada jogo.
              </p>
              <p className="mt-4 max-w-md text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
                E para a rotina fora da tela, o Casa Leve é o nosso{' '}
                <Link
                  href="/produtos/casa-leve"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: arakids.colorInk }}
                >
                  app de tarefas e rotina da família
                </Link>
                .
              </p>
            </article>
            <article className="md:mt-24">
              <div
                className="flex aspect-[16/10] items-end justify-center overflow-hidden rounded-[28px] px-[12%] pt-[8%]"
                style={{ background: arakids.colorInk }}
              >
                <LighthouseArt color="#0d3a63" />
              </div>
              <h3
                className="display mt-8 text-[clamp(2rem,3.6vw,3.2rem)]"
                style={{ color: arakids.colorInk }}
              >
                Farol da Privacidade
              </h3>
              <p className="mt-4 max-w-md text-[16.5px] leading-[1.7] text-[color:var(--ink-muted)]">
                Em linguagem simples, o que o portal guarda (quase nada) e o que nunca vai guardar.
                Nenhuma conta, nenhuma propaganda, nenhum dado da criança coletado.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5 · CTA — blue again: play now, or bring it to a school */}
      <section
        className="cut-top overflow-x-clip text-white"
        style={{ background: arakids.colorInk }}
        aria-labelledby="arakids-cta"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute bottom-[-30%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.16),transparent_70%)]" />
          <div className="pa-tri-grid-light absolute inset-0" />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10 lg:py-32">
          <div>
            <AppKicker color={YELLOW}>{arakids.offer}</AppKicker>
            <h2
              id="arakids-cta"
              className="display mt-6 max-w-[12ch] text-[clamp(2.8rem,6.6vw,6rem)]"
            >
              Abre no navegador <span style={{ color: YELLOW }}>e joga.</span>
            </h2>
            <p className="mt-8 max-w-lg text-[17px] leading-[1.7] text-white/85">
              No celular, no tablet ou no computador. Sem instalar nada e sem criar conta.
            </p>
            <div className="mt-9">
              <AppButton href={arakids.externalUrl!} external bg="#fff" fg={arakids.colorInk}>
                Abrir o Arakids <ArrowRight className="h-4 w-4" />
              </AppButton>
            </div>
          </div>
          <div className="border-t border-white/25 pt-8 lg:mt-auto">
            <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight">
              Quer o Arakids na sua escola, ou com jogos do seu jeito?
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7] text-white/80">
              O portal é gratuito para famílias. Para escolas, creches e projetos sociais, montamos
              trilhas e jogos sob medida com a mesma regra: sem anúncio, sem cadastro, sem truque.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <AppButton href={contactHref('Arakids para a minha escola')} bg={YELLOW} fg="#123f66">
                Falar com a gente
              </AppButton>
              <AppButton href="/sob-medida" variant="ghost-dark">
                Ver o sob medida
              </AppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
