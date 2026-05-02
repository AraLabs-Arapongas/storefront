import { SITE_URL, ORG_ID, LOCALE } from '@/lib/seo/site';
import { FAQ, META, PRICING } from './copy';

type Json = Record<string, unknown>;

const PATH = '/ara-agenda';

export function aragendaSoftwareApplicationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    url: `${SITE_URL}${PATH}`,
    name: 'Aragenda',
    description: META.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android (PWA)',
    inLanguage: LOCALE,
    publisher: { '@id': ORG_ID },
    offers: {
      '@type': 'Offer',
      price: '79.00',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '79.00',
        priceCurrency: 'BRL',
        unitText: 'MON',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: 1,
          unitCode: 'MON',
        },
      },
    },
    featureList: PRICING.bullets,
  };
}

export function aragendaFaqPageSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
