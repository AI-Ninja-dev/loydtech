import ContactHero from '@/components/contact-hero';
import ContactForm from '@/components/contact-form';
import ContactInfo from '@/components/contact-info';

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}