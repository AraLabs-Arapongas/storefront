import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  LOCALE,
  ORG_ADDRESS,
  LOGO_PATH,
  ORG_ID,
  WEBSITE_ID,
  LEGAL_NAME,
  CNPJ,
} from './site';

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    alternateName: 'Ara Labs',
    legalName: LEGAL_NAME,
    taxID: CNPJ,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${LOGO_PATH}`,
    },
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...ORG_ADDRESS,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      contactType: 'customer support',
      availableLanguage: [{ '@type': 'Language', name: 'Portuguese', alternateName: LOCALE }],
    },
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: LOCALE,
    publisher: { '@id': ORG_ID },
  };
}

export function aboutPageSchema(params: { path: string; name: string; description: string }): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    description: params.description,
    inLanguage: LOCALE,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORG_ID },
  };
}

export type SoftwareOffer =
  | 'free'
  | {
      /** Lowest recurring price, as a decimal string ("9.90"). */
      price: string;
      description?: string;
    };

export function softwareApplicationSchema(params: {
  path: string;
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  /** Leave out while the price is not public; never claim "free" for a paid product. */
  offer?: SoftwareOffer;
  /** Where to get it (App Store link, web app URL). */
  downloadUrl?: string;
  /** Absolute or root-relative screenshot paths. */
  screenshot?: string[];
}): Json {
  const abs = (u: string) => (u.startsWith('http') ? u : `${SITE_URL}${u}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    description: params.description,
    applicationCategory: params.applicationCategory,
    operatingSystem: params.operatingSystem,
    inLanguage: LOCALE,
    publisher: { '@id': ORG_ID },
    ...(params.downloadUrl ? { downloadUrl: params.downloadUrl } : {}),
    ...(params.screenshot?.length ? { screenshot: params.screenshot.map(abs) } : {}),
    ...(params.offer
      ? {
          offers: {
            '@type': 'Offer',
            price: params.offer === 'free' ? '0' : params.offer.price,
            priceCurrency: 'BRL',
            ...(params.offer !== 'free' && params.offer.description
              ? { description: params.offer.description }
              : {}),
          },
        }
      : {}),
  };
}

/** A page about something that lives elsewhere (e.g. the Komyx showcase pointing at komyx.com.br). */
export function webPageSchema(params: {
  path: string;
  name: string;
  description: string;
  about?: Json;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    description: params.description,
    inLanguage: LOCALE,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    ...(params.about ? { about: params.about } : {}),
  };
}

export function serviceSchema(params: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  audience?: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${params.path}#service`,
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    inLanguage: LOCALE,
    ...(params.audience
      ? { audience: { '@type': 'BusinessAudience', audienceType: params.audience } }
      : {}),
  };
}

/** Breadcrumb trail; the last item is the current page and carries no link. */
export function breadcrumbSchema(items: { name: string; path?: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, k) => ({
      '@type': 'ListItem',
      position: k + 1,
      name: it.name,
      ...(it.path ? { item: `${SITE_URL}${it.path}` } : {}),
    })),
  };
}

export function articleSchema(params: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    url: `${SITE_URL}${params.path}`,
    headline: params.headline,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    inLanguage: LOCALE,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: params.image ? `${SITE_URL}${params.image}` : `${SITE_URL}/opengraph-image`,
  };
}

export function collectionPageSchema(params: {
  path: string;
  name: string;
  description: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    description: params.description,
    inLanguage: LOCALE,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
  };
}
