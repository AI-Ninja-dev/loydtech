export default function SolutionsDetails() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          How Our Solutions Work Together
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Detail 1: Device to Cloud */}
          <div className="p-8 bg-card/50 rounded-lg border border-border/50">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Device to Cloud Security</h3>
            <p className="mb-6 text-sm text-foreground/60">
              Secure the entire data flow from device to cloud with end-to-end encryption, secure boot, and continuous authentication.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-green-500/20 rounded-full">
                  <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Secure Device Identity</h4>
                  <p className="text-sm text-foreground/60">Each device gets a unique cryptographic identity for authentication and authorization.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-cyan-500/20 rounded-full">
                  <svg className="h-3 w-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Encrypted Communications</h4>
                  <p className="text-sm text-foreground/60">All data transmitted between devices and cloud is encrypted using industry-standard protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-green-500/20 rounded-full">
                  <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Continuous Monitoring</h4>
                  <p className="text-sm text-foreground/60">Real-time monitoring of device behavior to detect anomalies and potential threats.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Detail 2: Network Protection */}
          <div className="p-8 bg-card/50 rounded-lg border border-border/50">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Network Protection</h3>
            <p className="mb-6 text-sm text-foreground/60">
              Protect your IoT network infrastructure with segmentation, intrusion detection, and secure gateways.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-green-500/20 rounded-full">
                  <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Network Segmentation</h4>
                  <p className="text-sm text-foreground/60">Isolate IoT devices into secure zones to limit the blast radius of potential breaches.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-cyan-500/20 rounded-full">
                  <svg className="h-3 w-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Intrusion Detection</h4>
                  <p className="text-sm text-foreground/60">AI-powered detection of malicious network traffic and unauthorized access attempts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-green-500/20 rounded-full">
                  <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 1v10m-6-3a9 9 0 1018 0M5 7h14" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Secure Gateways</h4>
                  <p className="text-sm text-foreground/60">Hardened gateways that inspect and filter traffic between IoT devices and external networks.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Detail 3: Cloud & OT Security */}
          <div className="p-8 bg-card/50 rounded-lg border border-border/50">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Cloud & OT Security</h3>
            <p className="mb-6 text-sm text-foreground/60">
              Secure cloud-based IoT platforms and operational technology environments with specialized controls.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-green-500/20 rounded-full">
                  <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Cloud Security Posture</h4>
                  <p className="text-sm text-foreground/60">Continuous assessment and remediation of cloud configurations to maintain compliance and security.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-cyan-500/20 rounded-full">
                  <svg className="h-3 w-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">OT/ICS Protection</h4>
                  <p className="text-sm text-foreground/60">Specialized security for industrial control systems, including protocol-specific threat detection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-green-500/20 rounded-full">
                  <svg className="h-3 w-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Compliance Automation</h4>
                  <p className="text-sm text-foreground/60">Automated evidence collection and reporting for regulations like IEC 62443, ISO 27001, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}