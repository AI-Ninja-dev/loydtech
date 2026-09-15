export default function AboutValues() {
  return (
    <section className="bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Our Core Values
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Value 1 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              We continuously innovate to stay ahead of emerging threats and deliver cutting-edge security solutions.
            </p>
          </div>
          {/* Value 2 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2-.9-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Integrity</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              We uphold the highest ethical standards, ensuring transparency and trust in everything we do.
            </p>
          </div>
          {/* Value 3 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 1v10m-6-3a9 9 0 1018 0M5 7h14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Customer Focus</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              Our customers' success is our priority. We partner with them to solve their unique security challenges.
            </p>
          </div>
          {/* Value 4 */}
          <div className="flex flex-col items-center gap-6 p-8 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-500/20 rounded-lg">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
            <p className="text-sm text-foreground/60 text-center max-w-xs">
              We strive for excellence in our technology, services, and support to deliver the best outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}