import type { Product } from '@/lib/products';

/** The auxiliary documents a product page can have, in the order they are listed. */
export type LegalDoc =
  | 'privacidade'
  | 'termos'
  | 'suporte'
  | 'excluir-conta'
  | 'creditos'
  | 'dedicatoria';

export const DOC_LABEL: Record<LegalDoc, { short: string; long: string }> = {
  privacidade: { short: 'Privacidade', long: 'Política de privacidade' },
  termos: { short: 'Termos', long: 'Termos de uso' },
  suporte: { short: 'Suporte', long: 'Suporte' },
  'excluir-conta': { short: 'Excluir conta', long: 'Excluir conta' },
  creditos: { short: 'Créditos', long: 'Créditos e licenças' },
  dedicatoria: { short: 'Dedicatória', long: 'Dedicatória' },
};

/** Which documents exist for each product (each one is a route under the product's page). */
export const PRODUCT_DOCS: Partial<Record<Product['slug'], LegalDoc[]>> = {
  arakids: ['privacidade', 'suporte'],
  'casa-leve': ['privacidade', 'termos', 'excluir-conta'],
  lumo: ['privacidade', 'termos', 'creditos', 'dedicatoria'],
  jornadas: ['privacidade', 'termos', 'suporte'],
  'sono-leve': ['privacidade', 'termos', 'suporte'],
  'le-barista': ['privacidade', 'termos', 'suporte'],
};

export const docHref = (product: Product, doc: LegalDoc) => `${product.href}/${doc}`;
