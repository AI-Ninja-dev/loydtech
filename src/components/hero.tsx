import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Animated background - simple moving dots */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--background),_transparent_70%)]">
          <div className="w-full h-full bg-[radial-gradient(circle_at_bottom_right,_transparent,_var(--background)_70%)] opacity-50"></div>
        </div>
        <div className="w-full h-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22grad1%22 x1=%220%22 y1=%220%22 x2=%22100%22 y2=%22100%22><stop offset=%220%22 style=%22stop:rgb(16,185,129;stop-opacity:0.1)%22 /><stop offset=%22100%22 style=%22stop:rgb(6,182,212;stop-opacity:0.1)%22 /></linearGradient></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grad1)%22 /></svg>)'] bg-[size:200px_200px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Intelligent Protection for the Connected World
          </h1>
          <p className="mb-8 text-xl text-foreground/70 max-w-2xl mx-auto">
            Loydtech delivers cutting-edge IoT security solutions that safeguard devices, networks, and cloud infrastructure from evolving cyber threats. Our AI-powered platform provides real-time threat detection, automated response, and continuous compliance monitoring.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              Request Live Demo
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}