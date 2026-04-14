import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, Cinzel, Orbitron } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

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
  title: 'AraLabs — Produtos digitais para problemas reais',
  description:
    'A AraLabs é uma empresa brasileira de produtos digitais que transforma problemas reais do cotidiano em soluções úteis, claras e sustentáveis.',
  metadataBase: new URL('https://aralabs.com.br'),
  openGraph: {
    title: 'AraLabs — Produtos digitais para problemas reais',
    description:
      'AraLabs é uma empresa brasileira que transforma desafios do cotidiano em produtos digitais úteis, claros e sustentáveis para famílias.',
    url: 'https://aralabs.com.br',
    siteName: 'AraLabs',
    locale: 'pt-BR',
    type: 'website',
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
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
