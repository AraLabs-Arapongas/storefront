/**
 * Single source of truth for the AraLabs portfolio. Header, footer, home, /produtos and the
 * sitemap all read from here, so adding or retiring a product is a one-file change.
 */
export type Product = {
  slug: 'komyx' | 'casa-leve' | 'arakids' | 'lumo' | 'sono-leve' | 'jornadas';
  name: string;
  /** Who it is for, shown as the eyebrow. */
  audience: string;
  tagline: string;
  /** What it is in a few lowercase words, for meta descriptions ("gestão para buffets"). */
  summary: string;
  description: string;
  /** Pricing or availability in a few words. */
  offer: string;
  status: 'No ar' | 'Beta' | 'Em breve';
  /** Longer, honest availability note (e.g. "Em revisão na App Store"). */
  statusNote?: string;
  href: string;
  /** Where the product actually lives (app or site), when it is online. */
  externalUrl?: string;
  /** Accent used on cards and tiles. */
  color: string;
  colorSoft: string;
  /** Deeper shade of the accent: readable text on cream and white text on top of it (AA). */
  colorInk: string;
  /** Business line, or the family/personal line. */
  line: 'negocios' | 'familias';
};

export const KOMYX_URL = 'https://komyx.com.br';
export const ARAKIDS_URL = 'https://arakids.aralabs.com.br';
export const LUMO_APPSTORE_URL = 'https://apps.apple.com/br/app/lumo/id6777104032';

export const PRODUCTS: Product[] = [
  {
    slug: 'komyx',
    name: 'Komyx',
    audience: 'Para buffets',
    tagline: 'Gestão para buffets.',
    summary: 'gestão para buffets',
    description:
      'Agenda, orçamento online, reserva com Pix, contrato automático, convite com RSVP e portaria no celular. O cliente monta a festa pela sua página; você só confirma.',
    offer: '1 mês grátis, depois a partir de R$ 99/mês',
    status: 'No ar',
    href: '/produtos/komyx',
    externalUrl: KOMYX_URL,
    color: '#e8356d',
    colorSoft: '#fde7ef',
    colorInk: '#c81e55',
    line: 'negocios',
  },
  {
    slug: 'casa-leve',
    name: 'Casa Leve',
    audience: 'Para famílias',
    tagline: 'Família organizada, juntos.',
    summary: 'rotina da família',
    description:
      'Tarefas com pontos, compras, agenda, recompensas e desafios num app só. Menos cobrança em casa, mais clareza e autonomia para as crianças.',
    offer: 'A partir de R$ 9,90/mês · 30 dias grátis',
    status: 'Beta',
    href: '/produtos/casa-leve',
    color: '#c26a1e',
    colorSoft: '#f7e6d6',
    colorInk: '#a85a17',
    line: 'familias',
  },
  {
    slug: 'arakids',
    name: 'Arakids',
    audience: 'Para crianças de 2 a 10 anos',
    tagline: 'Jogos educativos sem anúncio e sem truque.',
    summary: 'jogos educativos sem anúncio',
    description:
      'Portal de jogos no navegador, por faixa etária, sem cadastro e sem mecânicas para prender a criança na tela. Com área dos pais e regras de tempo de tela.',
    offer: 'Grátis, no navegador',
    status: 'No ar',
    href: '/produtos/arakids',
    externalUrl: ARAKIDS_URL,
    color: '#2f8fd6',
    colorSoft: '#dcecfa',
    colorInk: '#1f6fb0',
    line: 'familias',
  },
  {
    slug: 'lumo',
    name: 'Lumo',
    audience: 'Para crianças não-verbais',
    tagline: 'Toque pra dizer.',
    summary: 'comunicação visual para crianças não-verbais',
    description:
      'Cards, rotinas e 13.798 pictogramas ARASAAC para crianças não-verbais, em quatro idiomas. Tudo no dispositivo da família, sem cadastro e sem rastreamento.',
    offer: 'Gratuito, na App Store',
    status: 'No ar',
    externalUrl: LUMO_APPSTORE_URL,
    href: '/produtos/lumo',
    color: '#6a4bd6',
    colorSoft: '#e9e3fa',
    colorInk: '#6a4bd6',
    line: 'familias',
  },
  {
    slug: 'sono-leve',
    name: 'Sono Leve',
    audience: 'Para pais de bebês',
    tagline: 'Treino de sono com calma e com dados.',
    summary: 'treino de sono do bebê',
    description:
      'Ritual da hora de dormir, timer com os intervalos de check-in de cada noite, registro dos despertares e das mamadas e a evolução noite a noite. Tudo no celular, sem conta.',
    offer: 'iPhone · em revisão na App Store',
    status: 'Em breve',
    statusNote: 'Em revisão na App Store',
    href: '/produtos/sono-leve',
    color: '#36407a',
    colorSoft: '#e3e5f4',
    colorInk: '#36407a',
    line: 'familias',
  },
  {
    slug: 'jornadas',
    name: 'Jornadas',
    audience: 'Para quem quer criar hábitos',
    tagline: 'Livros, cursos e hábitos, um dia de cada vez.',
    summary: 'leituras, cursos e hábitos',
    description:
      'Acompanhe leituras, cursos, hábitos, corrida e prática de música com sessões de foco, sequência de dias, meta semanal e gráficos de progresso. Tudo no iPhone, sem conta.',
    offer: 'Gratuito · em revisão na App Store',
    status: 'Em breve',
    statusNote: 'Em revisão na App Store',
    href: '/produtos/jornadas',
    color: '#0e7c74',
    colorSoft: '#d8efec',
    colorInk: '#0e7c74',
    line: 'familias',
  },
];

export const productBySlug = (slug: Product['slug']) => PRODUCTS.find((p) => p.slug === slug)!;

const COUNT_WORDS = [
  'zero',
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez',
];

/** Number in words for small counts ("seis produtos"), digits beyond ten. */
export const countWord = (n: number) => COUNT_WORDS[n] ?? String(n);

export const productsByLine = (line: Product['line']) => PRODUCTS.filter((p) => p.line === line);

/** "Komyx, Casa Leve e Lumo" — joins product names the Portuguese way. */
export const joinNames = (items: Pick<Product, 'name'>[]) => {
  const names = items.map((p) => p.name);
  return names.length <= 1
    ? (names[0] ?? '')
    : `${names.slice(0, -1).join(', ')} e ${names[names.length - 1]}`;
};

/** The two product lines, in display order, with the label used in menus and section headers. */
export const PRODUCT_LINES: { line: Product['line']; label: string; items: Product[] }[] = [
  { line: 'negocios', label: 'Para o seu negócio', items: productsByLine('negocios') },
  { line: 'familias', label: 'Para a família e para você', items: productsByLine('familias') },
];
