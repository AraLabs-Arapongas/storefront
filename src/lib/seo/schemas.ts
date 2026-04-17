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
} from './site';

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
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
      availableLanguage: ['Portuguese', LOCALE],
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

export function softwareApplicationSchema(params: {
  path: string;
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
}): Json {
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
  };
}

export function articleSchema(params: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
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
  };
}
