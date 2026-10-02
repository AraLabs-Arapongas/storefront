export const SITE_URL = 'https://aralabs.com.br';
export const SITE_NAME = 'AraLabs';
export const SITE_TAGLINE = 'Tecnologia simples para pequenos negócios';
export const SITE_DESCRIPTION =
  'A AraLabs faz software simples para pequenos negócios e para as famílias deles, em Arapongas (PR). Produtos prontos para assinar, como o Komyx para buffets, e sistemas sob medida quando o seu problema ainda não tem produto.';
export const SITE_TWITTER_DESCRIPTION =
  'Tecnologia simples para pequenos negócios: produtos prontos (Komyx, Casa Leve, Arakids, Lumo) e sistemas sob medida. Arapongas, PR.';
export const CONTACT_EMAIL = 'contato@aralabs.com.br';
export const JOBS_EMAIL = 'trabalhe@aralabs.com.br';
/** Digits only with country code (55...). Empty hides every WhatsApp button; email is the fallback. */
export const CONTACT_WHATSAPP = '';
export const LOCALE = 'pt-BR';

export const ORG_ADDRESS = {
  streetAddress: 'Rua Guaraúna, 288 - Jardim Primavera',
  addressLocality: 'Arapongas',
  addressRegion: 'PR',
  postalCode: '86702-480',
  addressCountry: 'BR',
} as const;

export const LOGO_PATH = '/brand/logo-mark.png';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function contactHref(subject: string, body?: string) {
  if (CONTACT_WHATSAPP) {
    return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(body ?? subject)}`;
  }
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
}
