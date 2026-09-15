import Button from '@/components/Button';

export default function UseCasesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Securing IoT Across Industries
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Use Case 1: Smart City */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Smart City</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Secure smart infrastructure including traffic systems, public safety, environmental monitoring, and utilities.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Use Case 2: Healthcare */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Healthcare</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Protect medical devices, patient data, and hospital IoT networks from cyber threats.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Use Case 3: Manufacturing */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Manufacturing</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Secure industrial IoT, SCADA systems, and production lines from ransomware and sabotage.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Use Case 4: Energy & Utilities */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.252a9.008 9.008 0 116.567 3.934A12.002 12.002 0 0121 12c0 5.523-4.477 10-10 10S2 17.523 2 12a12.002 12.002 0 015.67-5.813A9.008 9.008 0 0112 2.252z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Energy & Utilities</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Protect power grids, water treatment, and oil & gas infrastructure from cyber attacks.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Use Case 5: Transportation & Logistics */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 12h14M5 16h11" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Transportation & Logistics</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Secure connected vehicles, fleet management, and supply chain tracking systems.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Use Case 6: Retail */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.252a9.008 9.008 0 116.567 3.934A12.002 12.002 0 0121 12c0 5.523-4.477 10-10 10S2 17.523 2 12a12.002 12.002 0 015.67-5.813A9.008 9.008 0 0112 2.252z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Retail</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Protect point-of-sale systems, inventory tracking, and customer data in retail IoT environments.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}