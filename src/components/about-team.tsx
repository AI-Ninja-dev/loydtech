export default function AboutTeam() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Meet Our Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Team member 1 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500/20 flex items-center justify-center">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">James Loyd</h3>
            <p className="text-sm text-foreground/60">Founder & CEO</p>
            <p className="text-xs text-foreground/50">20+ years in IoT and cybersecurity</p>
          </div>
          {/* Team member 2 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500/20 flex items-center justify-center">
              <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Dr. Elena Rodriguez</h3>
            <p className="text-sm text-foreground/60">Chief Technology Officer</p>
            <p className="text-xs text-foreground/50">Expert in AI-driven threat detection</p>
          </div>
          {/* Team member 3 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500/20 flex items-center justify-center">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Michael Chen</h3>
            <p className="text-sm text-foreground/60">VP of Engineering</p>
            <p className="text-xs text-foreground/50">Specialist in secure embedded systems</p>
          </div>
          {/* Team member 4 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-cyan-500/20 flex items-center justify-center">
              <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 1v10m-6-3a9 9 0 1018 0M5 7h14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Sarah Johnson</h3>
            <p className="text-sm text-foreground/60">Director of Compliance</p>
            <p className="text-xs text-foreground/50">ISO 27001, SOC 2, IEC 62443 specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
}