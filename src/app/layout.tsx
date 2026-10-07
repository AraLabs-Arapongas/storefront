import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { ClickTracking } from '@/components/site/ClickTracking';
import { Analytics } from '@vercel/analytics/next';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/seo/schemas';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  SITE_TWITTER_DESCRIPTION,
  LOCALE,
  DEFAULT_OG_IMAGE,
} from '@/lib/seo/site';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: { icon: '/icon.svg' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    locale: LOCALE,
    type: 'website',
    images: [
      { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — ${SITE_TAGLINE}` },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_TWITTER_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: process.env.VERCEL_ENV === 'production',
    follow: true,
    googleBot: {
      index: process.env.VERCEL_ENV === 'production',
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
        <ClickTracking />
      </body>
    </html>
  );
}
