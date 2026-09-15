import Button from '@/components/Button';

export default function SolutionsCards() {
  return (
    <section className="bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Our Security Solutions
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Solution Card 1: IoT Security */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">IoT Security</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Comprehensive security for connected devices, including device identity, secure boot, and runtime protection.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Solution Card 2: Device Security */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Device Security</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Hardware-based security, secure enclaves, and device lifecycle management to prevent tampering and cloning.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Solution Card 3: Network Security */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Network Security</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Encryption, network segmentation, intrusion detection/prevention, and secure gateways for IoT communications.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Solution Card 4: Cloud Security */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Cloud Security</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Identity and access management, data encryption, secure APIs, and continuous compliance for cloud-based IoT platforms.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Solution Card 5: OT Security */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 1v10m-6-3a9 9 0 1018 0M5 7h14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">OT Security</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Specialized protection for industrial control systems, SCADA, and industrial IoT environments.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
          {/* Solution Card 6: Security Management */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Security Management</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Unified dashboard, policy orchestration, automated remediation, and compliance reporting.
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