export default function Testimonials() {
  return (
    <section className="bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="p-8 bg-card/50 rounded-lg border border-border/50">
            <p className="mb-6 text-foreground/80 italic">
              "Loydtech transformed our IoT security posture. Their platform detected and mitigated threats we didn't even know existed."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-foreground">Sarah Chen</h3>
                <p className="text-xs text-foreground/60">CTO, SmartCity Solutions</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="p-8 bg-card/50 rounded-lg border border-border/50">
            <p className="mb-6 text-foreground/80 italic">
              "The real-time dashboard and automated response capabilities have reduced our incident response time from hours to minutes."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.207 8.207a4 4 0 015.656 0l1.8 1.8a4 4 0 01-5.656 5.656l-1.8-1.8a4 4 0 010-5.656z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-foreground">Marcus Rodriguez</h3>
                <p className="text-xs text-foreground/60">VP of Manufacturing, AutoTech Inc.</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="p-8 bg-card/50 rounded-lg border border-border/50">
            <p className="mb-6 text-foreground/80 italic">
              "Loydtech's compliance reporting saved us weeks of audit preparation and helped us achieve ISO 27001 certification faster than expected."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-foreground">Dr. Amanda Park</h3>
                <p className="text-xs text-foreground/60">Director of Healthcare Innovation, MedSecure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}