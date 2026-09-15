import './globals.css';
import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Loydtech - Intelligent Protection for the Connected World',
  description: 'IoT Security company providing intelligent protection for connected devices, networks, and cloud infrastructure.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground">
        <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-3">
                <Logo />
              </div>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-foreground">
                  About Us
                </Link>
                <Link href="/solutions" className="text-sm font-medium text-foreground/70 hover:text-foreground">
                  Solutions
                </Link>
                <Link href="/products" className="text-sm font-medium text-foreground/70 hover:text-foreground">
                  Products
                </Link>
                <Link href="/use-cases" className="text-sm font-medium text-foreground/70 hover:text-foreground">
                  Use Cases
                </Link>
                <Link href="/resources" className="text-sm font-medium text-foreground/70 hover:text-foreground">
                  Resources
                </Link>
                <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground">
                  Contact
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="md">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-border/50 bg-background/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Loydtech</h3>
                <p className="text-sm text-foreground/60">
                  Intelligent Protection for the Connected World
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>IoT Security</li>
                  <li>Device Security</li>
                  <li>Network Security</li>
                  <li>Cloud Security</li>
                  <li>OT Security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Partners</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-sm text-foreground/60">info@loydtech.com</p>
                <p className="text-sm text-foreground/60">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-foreground/50">
              &copy; {new Date().getFullYear()} Loydtech. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
