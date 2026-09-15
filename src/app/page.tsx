import Hero from '@/components/hero';
import Features from '@/components/features';
import Stats from '@/components/stats';
import Testimonials from '@/components/testimonials';
import Cta from '@/components/cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Cta />
    </main>
  );
}
