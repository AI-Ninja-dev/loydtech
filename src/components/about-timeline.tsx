export default function AboutTimeline() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute inset-0 w-0.5 bg-green-400/20"></div>
          <div className="space-y-12">
            {/* Timeline item 1 */}
            <div className="relative">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-500 border-2 border-background"></div>
              <div className="ml-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">2020</h3>
                <p className="text-sm text-foreground/60 max-w-xl">
                  Founded by a team of IoT and cybersecurity experts with a vision to secure the rapidly growing connected device landscape.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-green-500">
                  Headquarters: San Francisco, CA
                </span>
              </div>
            </div>
            {/* Timeline item 2 */}
            <div className="relative">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cyan-500 border-2 border-background"></div>
              <div className="ml-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">2021</h3>
                <p className="text-sm text-foreground/60 max-w-xl">
                  Launched our first IoT security platform, providing real-time threat detection for connected devices.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-cyan-500">
                  First enterprise client: SmartCity Solutions
                </span>
              </div>
            </div>
            {/* Timeline item 3 */}
            <div className="relative">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-500 border-2 border-background"></div>
              <div className="ml-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">2022</h3>
                <p className="text-sm text-foreground/60 max-w-xl">
                  Achieved ISO 27001 and SOC 2 certifications, demonstrating our commitment to security and compliance.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-green-500">
                  Expanded to Europe and APAC regions
                </span>
              </div>
            </div>
            {/* Timeline item 4 */}
            <div className="relative">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-cyan-500 border-2 border-background"></div>
              <div className="ml-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">2023</h3>
                <p className="text-sm text-foreground/60 max-w-xl">
                  Introduced AI-powered threat intelligence and automated response capabilities.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-cyan-500">
                  Reached 1M+ secured devices worldwide
                </span>
              </div>
            </div>
            {/* Timeline item 5 */}
            <div className="relative">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-500 border-2 border-background"></div>
              <div className="ml-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">2024</h3>
                <p className="text-sm text-foreground/60 max-w-xl">
                  Launched OT/Industrial IoT security solutions for manufacturing and critical infrastructure.
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-green-500">
                  Partnered with leading industrial automation providers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}