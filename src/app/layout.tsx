import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Aralabs — Produtos digitais para problemas reais',
  description:
    'A Aralabs é uma empresa brasileira de produtos digitais que transforma problemas reais do cotidiano em soluções úteis, claras e sustentáveis.',
  metadataBase: new URL('https://aralabs.com.br'),
  keywords: [
    'Aralabs',
    'produtos digitais',
    'empresa brasileira',
    'rotina familiar',
    'experiência mobile',
    'soluções úteis',
  ],
  authors: [{ name: 'Aralabs', url: 'https://aralabs.com.br' }],
  openGraph: {
    title: 'Aralabs — Produtos digitais para problemas reais',
    description:
      'Aralabs é uma empresa brasileira que transforma desafios do cotidiano em produtos digitais úteis, claros e sustentáveis para famílias.',
    url: 'https://aralabs.com.br',
    siteName: 'Aralabs',
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aralabs — Produtos digitais para problemas reais',
    description:
      'Aralabs é uma empresa brasileira que transforma desafios do cotidiano em soluções digitais úteis e claras.',
    creator: '@aralabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">{children}</body>
    </html>
  );
}
