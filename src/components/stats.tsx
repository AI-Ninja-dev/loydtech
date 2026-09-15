export default function Stats() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
          Trusted by Industry Leaders
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-4xl font-bold text-green-400">
              500+
            </div>
            <p className="text-sm text-foreground/60">
              Enterprise Clients
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-4xl font-bold text-cyan-400">
              10M+
            </div>
            <p className="text-sm text-foreground/60">
              Devices Secured
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-4xl font-bold text-green-400">
              99.9%
            </div>
            <p className="text-sm text-foreground/60">
              Threat Detection Rate
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-card/50 rounded-lg border border-border/50">
            <div className="text-4xl font-bold text-cyan-400">
              24/7
            </div>
            <p className="text-sm text-foreground/60">
              Security Operations Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}