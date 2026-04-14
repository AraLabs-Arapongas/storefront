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
