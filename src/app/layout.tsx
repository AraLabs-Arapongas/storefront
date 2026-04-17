import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, Cinzel, Orbitron } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Analytics } from '@vercel/analytics/next';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/seo/schemas';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  LOCALE,
} from '@/lib/seo/site';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

const cinzel = Cinzel({
  variable: '--font-medieval',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
});

const orbitron = Orbitron({
  variable: '--font-cyber',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700', '800'],
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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Empresa brasileira que transforma desafios do cotidiano em produtos digitais úteis, claros e sustentáveis.',
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
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${fraunces.variable} ${cinzel.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('aralabs-theme');var v=['midnight','espresso','ink','cream','moss','bordo','paper','sand','slate','dusk','madeira','medieval','cyberpunk'];if(t&&v.indexOf(t)>-1){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','cream');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
