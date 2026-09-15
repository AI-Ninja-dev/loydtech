import Button from '@/components/Button';

export default function Cta() {
  return (
    <section className="bg-gradient-to-br from-green-500 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Secure Your IoT Infrastructure?
        </h2>
        <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
          Get started with a free security assessment and see how Loydtech can protect your connected devices.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg">
            Start Free Assessment
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}