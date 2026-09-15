import Button from '@/components/Button';

export default function ProductsGrid() {
  return (
    <section className="bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Our Security Products
        </h2>
        <p className="mb-12 text-center text-foreground/60 max-w-2xl mx-auto">
          Loydtech offers a range of hardware and software products designed to secure your IoT infrastructure from edge to cloud.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1: Secure IoT Gateway */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Secure IoT Gateway</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Hardware gateway with built-in firewall, intrusion detection, and secure boot for protecting device networks.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Product 2: Device Security Agent */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Device Security Agent</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Lightweight software agent for real-time threat detection, integrity monitoring, and secure device management.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Product 3: Cloud Security Platform */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Cloud Security Platform</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Unified platform for managing IoT device security, compliance, and threat response across cloud environments.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Product 4: OT Security Appliance */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 1v10m-6-3a9 9 0 1018 0M5 7h14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">OT Security Appliance</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Hardware appliance designed for industrial environments, providing deep packet inspection and protocol-specific security.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Product 5: Security Management Console */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Security Management Console</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Centralized dashboard for policy orchestration, incident response, and compliance reporting across all IoT assets.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Product 6: Threat Intelligence Feed */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Threat Intelligence Feed</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Real-time threat intelligence specific to IoT and OT environments, updated continuously from global sensors.
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