export default function AboutCertifications() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Trust & Compliance
        </h2>
        <p className="mb-12 text-center text-foreground/60 max-w-2xl mx-auto">
          Loydtech adheres to the highest industry standards and certifications to ensure our solutions meet rigorous security and compliance requirements.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Certification 1 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">ISO 27001</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Information security management system certification demonstrating our commitment to protecting sensitive data.
            </p>
          </div>
          {/* Certification 2 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">SOC 2 Type II</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Security, availability, processing integrity, confidentiality, and privacy controls audited by independent third parties.
            </p>
          </div>
          {/* Certification 3 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">IEC 62443</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Standard for industrial communication networks security, ensuring protection for OT and industrial IoT environments.
            </p>
          </div>
          {/* Certification 4 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">GDPR Compliant</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Our solutions help clients meet General Data Protection Regulation requirements for data privacy and protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}