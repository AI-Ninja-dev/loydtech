export default function ResourcesGrid() {
  return (
    <section className="bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Latest Resources
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Resource 1: Whitepaper */}
          <div className="flex h-[200px] flex-col items-start gap-4 p-6 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-foreground">IoT Security Whitepaper</h3>
              <p className="mb-4 text-sm text-foreground/60 line-clamp-3">
                Comprehensive guide to securing IoT devices, networks, and cloud infrastructure. Covers threat landscape, best practices, and compliance requirements.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-400">
                Download PDF
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
          </div>
          {/* Resource 2: Threat Report */}
          <div className="flex h-[200px] flex-col items-start gap-4 p-6 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-foreground">2024 IoT Threat Landscape Report</h3>
              <p className="mb-4 text-sm text-foreground/60 line-clamp-3">
                Analysis of the latest threats targeting IoT devices and networks, including ransomware, botnets, and supply chain attacks.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-500 hover:text-cyan-400">
                Download PDF
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
          </div>
          {/* Resource 3: Blog Post */}
          <div className="flex h-[200px] flex-col items-start gap-4 p-6 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-foreground">How to Implement Zero Trust for IoT</h3>
              <p className="mb-4 text-sm text-foreground/60 line-clamp-3">
                Practical guide to implementing zero trust architecture in IoT environments, covering identity, device, and network segmentation.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-400">
                Read Blog
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
          </div>
          {/* Resource 4: Case Study */}
          <div className="flex h-[200px] flex-col items-start gap-4 p-6 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-foreground">Smart City Security Case Study</h3>
              <p className="mb-4 text-sm text-foreground/60 line-clamp-3">
                How Loydtech secured a major metropolitan smart city deployment, protecting critical infrastructure and citizen data.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-500 hover:text-cyan-400">
                Read Case Study
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
          </div>
          {/* Resource 5: Compliance Guide */}
          <div className="flex h-[200px] flex-col items-start gap-4 p-6 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-foreground">IEC 62443 Compliance Guide</h3>
              <p className="mb-4 text-sm text-foreground/60 line-clamp-3">
                Step-by-step guide to achieving IEC 62443 compliance for industrial IoT and OT environments.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-400">
                Download Guide
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
          </div>
          {/* Resource 6: Webinar Recording */}
          <div className="flex h-[200px] flex-col items-start gap-4 p-6 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-semibold text-foreground">Live Webinar: AI-Powered IoT Threat Detection</h3>
              <p className="mb-4 text-sm text-foreground/60 line-clamp-3">
                Recording of our recent webinar on using machine learning for real-time threat detection in IoT networks.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-500 hover:text-cyan-400">
                Watch Recording
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}