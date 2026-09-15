import Hero from '@/components/about-hero';
import Timeline from '@/components/about-timeline';
import Values from '@/components/about-values';
import Team from '@/components/about-team';
import Certifications from '@/components/about-certifications';

export default function About() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Values />
      <Team />
      <Certifications />
    </main>
  );
}