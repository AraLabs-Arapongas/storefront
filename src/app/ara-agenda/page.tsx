import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { aragendaSoftwareApplicationSchema, aragendaFaqPageSchema } from '@/lib/aragenda/jsonld';
import { META } from '@/lib/aragenda/copy';
import { HeroBanner } from '@/components/site/aragenda/HeroBanner';
import { Hero } from '@/components/site/aragenda/Hero';
import { Verticals } from '@/components/site/aragenda/Verticals';
import { Personas } from '@/components/site/aragenda/Personas';
import { Features } from '@/components/site/aragenda/Features';
import { HowItWorks } from '@/components/site/aragenda/HowItWorks';
import { OwnLink } from '@/components/site/aragenda/OwnLink';
import { Demos } from '@/components/site/aragenda/Demos';
import { ValueProps } from '@/components/site/aragenda/ValueProps';
import { Pricing } from '@/components/site/aragenda/Pricing';
import { Faq } from '@/components/site/aragenda/Faq';
import { FinalCta } from '@/components/site/aragenda/FinalCta';

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: '/ara-agenda' },
  openGraph: {
    title: `${META.title}${META.titleSuffix}`,
    description: META.description,
    url: '/ara-agenda',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'AraLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: META.title,
    description: META.description,
  },
  keywords: [
    'agenda online',
    'agendamento online',
    'sistema de agendamento',
    'salão de beleza',
    'barbearia',
    'clínica',
    'PWA',
    'pequeno negócio',
    'SaaS Brasil',
    'aragenda',
  ],
};

export default function AragendaLandingPage() {
  return (
    <>
      <JsonLd data={aragendaSoftwareApplicationSchema()} />
      <JsonLd data={aragendaFaqPageSchema()} />

      <HeroBanner />
      <Hero />
      <Verticals />
      <Personas />
      <Features />
      <HowItWorks />
      <OwnLink />
      <Demos />
      <ValueProps />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
