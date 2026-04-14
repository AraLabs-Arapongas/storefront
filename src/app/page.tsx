import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { Pillars } from '@/components/site/Pillars';
import { Thesis } from '@/components/site/Thesis';
import { Problem } from '@/components/site/Problem';
import { Principles } from '@/components/site/Principles';
import { Values } from '@/components/site/Values';
import { NextSteps } from '@/components/site/NextSteps';
import { Footer } from '@/components/site/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Pillars />
      <Thesis />
      <Problem />
      <Principles />
      <Values />
      <NextSteps />
      <Footer />
    </main>
  );
}
