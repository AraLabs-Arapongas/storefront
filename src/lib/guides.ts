import type { Product } from '@/lib/products';

/**
 * The /guias hub: informational articles grouped by theme, each tied to the product it helps
 * with. The hub, the sitemap and every article read from here, so adding a guide is one entry
 * plus its page.
 */

export type GuideTheme = {
  slug: 'comunicacao-alternativa' | 'sistemas' | 'cafe';
  label: string;
  /** One line under the theme heading on the hub. */
  intro: string;
  /** Band and accent colour (AA with white text) and its light tint. */
  accent: string;
  soft: string;
};

export const GUIDE_THEMES: GuideTheme[] = [
  {
    slug: 'comunicacao-alternativa',
    label: 'Comunicação alternativa',
    intro: 'Para famílias de crianças não-verbais que estão começando com a CAA.',
    accent: '#6a4bd6',
    soft: '#e9e3fa',
  },
  {
    slug: 'sistemas',
    label: 'Sistemas para pequenos negócios',
    intro: 'Para donos de negócios de serviço decidindo como sair da planilha e do WhatsApp.',
    accent: '#8a5f1a',
    soft: '#efe2c6',
  },
  {
    slug: 'cafe',
    label: 'Café em casa',
    intro: 'Para quem tem máquina de espresso em casa e quer acertar o ponto.',
    accent: '#7a4a2c',
    soft: '#f1e3d6',
  },
];

export const themeBySlug = (slug: GuideTheme['slug']) => GUIDE_THEMES.find((t) => t.slug === slug)!;

export type Guide = {
  theme: GuideTheme['slug'];
  slug: string;
  path: string;
  /** The h1 and the Article headline: the main query, in full. */
  title: string;
  /** <title>, ≤ 50 chars so it fits 60 with " · AraLabs". */
  metaTitle: string;
  /** Meta description, ≤ 160 chars. */
  description: string;
  /** Card text on the hub. */
  excerpt: string;
  product: Product['slug'];
  datePublished: string;
  /** Printed publication date. */
  dateLabel: string;
  readingMinutes: number;
};

export const GUIDES: Guide[] = [
  {
    theme: 'comunicacao-alternativa',
    slug: 'prancha-de-comunicacao',
    path: '/guias/comunicacao-alternativa/prancha-de-comunicacao',
    title: 'Prancha de comunicação: o que é e como montar uma em casa',
    metaTitle: 'Prancha de comunicação: como montar em casa',
    description:
      'O que é CAA e prancha de comunicação, impressa ou no app, e um passo a passo para começar em casa com pictogramas ARASAAC e modelagem. Sem substituir a fono.',
    excerpt:
      'O que é comunicação aumentativa e alternativa, prancha impressa ou aplicativo, por onde começar e o que dizem os estudos sobre CAA e fala.',
    product: 'lumo',
    datePublished: '2026-10-07',
    dateLabel: '7 de outubro de 2026',
    readingMinutes: 7,
  },
  {
    theme: 'sistemas',
    slug: 'sistema-sob-medida-ou-pronto',
    path: '/guias/sistemas/sistema-sob-medida-ou-pronto',
    title: 'Sistema sob medida ou sistema pronto: como decidir',
    metaTitle: 'Sistema sob medida ou pronto: como decidir',
    description:
      'Quando um sistema pronto basta, quando o sob medida compensa e os custos que não aparecem na etiqueta de cada um. Com checklist e um caso real.',
    excerpt:
      'Quando um SaaS resolve, quando vale fazer o seu, os custos escondidos dos dois lados e um checklist curto para decidir.',
    product: 'komyx',
    datePublished: '2026-10-07',
    dateLabel: '7 de outubro de 2026',
    readingMinutes: 6,
  },
  {
    theme: 'cafe',
    slug: 'espresso-amargo-ou-azedo',
    path: '/guias/cafe/espresso-amargo-ou-azedo',
    title: 'Espresso amargo ou azedo: o que ajustar primeiro',
    metaTitle: 'Espresso amargo ou azedo: o que ajustar primeiro',
    description:
      'Azedo é extração de menos, amargo é extração demais. Veja como reconhecer pelo gosto e a ordem dos ajustes: moagem, depois dose e rendimento, um por vez.',
    excerpt:
      'Como reconhecer extração de menos e de mais pelo gosto e a ordem certa dos ajustes: moagem, proporção e só então o resto.',
    product: 'le-barista',
    datePublished: '2026-10-07',
    dateLabel: '7 de outubro de 2026',
    readingMinutes: 6,
  },
];

export const guideByPath = (path: string) => GUIDES.find((g) => g.path === path)!;
export const guidesByTheme = (theme: GuideTheme['slug']) => GUIDES.filter((g) => g.theme === theme);
