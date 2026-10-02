/**
 * Single source of truth for the AraLabs portfolio. Header, footer, home, /produtos and the
 * sitemap all read from here, so adding or retiring a product is a one-file change.
 */
export type Product = {
  slug: 'komyx' | 'casa-leve' | 'arakids' | 'lumo';
  name: string;
  /** Who it is for, shown as the eyebrow. */
  audience: string;
  tagline: string;
  description: string;
  /** Pricing or availability in a few words. */
  offer: string;
  status: 'No ar' | 'Beta' | 'Em breve';
  href: string;
  /** Where the product actually lives (app or site), when it is online. */
  externalUrl?: string;
  /** Accent used on cards and tiles. */
  color: string;
  colorSoft: string;
  /** Business or family line. */
  line: 'negocios' | 'familias';
};

export const KOMYX_URL = 'https://komyx.aralabs.com.br';
export const ARAKIDS_URL = 'https://arakids.aralabs.com.br';

export const PRODUCTS: Product[] = [
  {
    slug: 'komyx',
    name: 'Komyx',
    audience: 'Para buffets',
    tagline: 'Gestão para buffets.',
    description:
      'Agenda, orçamento online, reserva com Pix, contrato automático, convite com RSVP e portaria no celular. O cliente monta a festa pela sua página; você só confirma.',
    offer: 'R$ 99/mês, tudo incluído',
    status: 'No ar',
    href: '/produtos/komyx',
    externalUrl: KOMYX_URL,
    color: '#e8356d',
    colorSoft: '#fde7ef',
    line: 'negocios',
  },
  {
    slug: 'casa-leve',
    name: 'Casa Leve',
    audience: 'Para famílias',
    tagline: 'Família organizada, juntos.',
    description:
      'Tarefas com pontos, compras, agenda, recompensas e desafios num app só. Menos cobrança em casa, mais clareza e autonomia para as crianças.',
    offer: 'A partir de R$ 9,90/mês · 30 dias grátis',
    status: 'Beta',
    href: '/produtos/casa-leve',
    color: '#c26a1e',
    colorSoft: '#f7e6d6',
    line: 'familias',
  },
  {
    slug: 'arakids',
    name: 'Arakids',
    audience: 'Para crianças de 2 a 10 anos',
    tagline: 'Jogos educativos sem anúncio e sem truque.',
    description:
      'Portal de jogos no navegador, por faixa etária, sem cadastro e sem mecânicas para prender a criança na tela. Com área dos pais e regras de tempo de tela.',
    offer: 'Grátis, no navegador',
    status: 'No ar',
    href: '/produtos/arakids',
    externalUrl: ARAKIDS_URL,
    color: '#2f8fd6',
    colorSoft: '#dcecfa',
    line: 'familias',
  },
  {
    slug: 'lumo',
    name: 'Lumo',
    audience: 'Comunicação visual',
    tagline: 'Toque pra dizer.',
    description:
      'Cards, rotinas e 13.798 pictogramas ARASAAC para crianças não-verbais, em quatro idiomas. Tudo no dispositivo da família, sem cadastro e sem rastreamento.',
    offer: 'Gratuito para sempre',
    status: 'Em breve',
    href: '/produtos/lumo',
    color: '#6a4bd6',
    colorSoft: '#e9e3fa',
    line: 'familias',
  },
];

export const productBySlug = (slug: Product['slug']) => PRODUCTS.find((p) => p.slug === slug)!;
