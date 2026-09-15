export default function Features() {
  return (
    <section className="bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive IoT Security Solutions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our platform delivers end-to-end security for the entire IoT lifecycle, from device manufacturing to deployment and beyond.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Device Security</h3>
            <p className="text-sm text-foreground/60 text-center">
              Secure IoT devices with hardware-based attestation, secure boot, and runtime protection against tampering and malware.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Network Security</h3>
            <p className="text-sm text-foreground/60 text-center">
              Protect IoT communications with encryption, network segmentation, and intrusion detection/prevention systems.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Cloud Security</h3>
            <p className="text-sm text-foreground/60 text-center">
              Safeguard cloud-based IoT platforms with identity management, data encryption, and continuous compliance monitoring.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">OT Security</h3>
            <p className="text-sm text-foreground/60 text-center">
              Secure operational technology environments with specialized protection for industrial IoT and SCADA systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}