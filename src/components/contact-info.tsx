export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-green-500/20 rounded-full">
            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Email</h3>
            <p className="text-sm text-foreground/60">info@loydtech.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-green-500/20 rounded-full">
            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.489 4.246a1 1 0 01-.5.866l-2.42.78a1.018 1.018 0 01-.866-.5L5.07 9.38a1 1 0 01-.28-.722V5a2 2 0 012-2zm2.146 11.354l-.708-.708A8.016 8.016 0 004 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Phone</h3>
            <p className="text-sm text-foreground/60">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-green-500/20 rounded-full">
            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 18v1a1 1 0 001 1h12a1 1 0 001-1v-1M6 13a9 9 0 1018 0M9 9a3 3 0 110-6m0 6a3 3 0 100-6z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Address</h3>
            <p className="text-sm text-foreground/60">
              123 Innovation Drive<br />
              San Francisco, CA 94107<br />
              USA
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-medium text-foreground">Follow Us</h3>
        <div className="flex gap-4 mt-3">
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-card/50 border border-border/50 rounded-lg hover:bg-card/70 transition-colors">
            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-card/50 border border-border/50 rounded-lg hover:bg-card/70 transition-colors">
            <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-card/50 border border-border/50 rounded-lg hover:bg-card/70 transition-colors">
            <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.734-.715-1.608-2.376-2.734-4.312-2.734-2.589 0-4.688 2.015-4.688 4.5v17.25a3.375 3.375 0 003.375 3.375h.75" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-card/50 border border-border/50 rounded-lg hover:bg-card/70 transition-colors">
            <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2h-5a5 5 0 00-5-5h-5a5 5 0 00-5-5h-5a2 2 0 01-2-2v-5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}