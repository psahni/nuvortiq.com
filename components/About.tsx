const strengths = [
  "Technical strategy & architecture",
  "15+ years distributed systems",
  "AI agents & automation",
  "FinTech & compliance",
  "Performance engineering",
  "Cloud architecture & cost",
];

export function About() {
  return (
    <section id="about" className="border-t border-[#1b2b2d]/80 bg-[#0d1c1d] py-20 text-[#f5efe7]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#dbe7be] uppercase">About</p>
            <h2 className="mt-5 max-w-[12ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#f5efe7] sm:text-5xl">
              Founder-led. No layers.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-[#d9e0d5]">
              Nuvortiq is led by our Founder and Principal Consultant, with 15+ years of distributed systems engineering across AI research, embedded lending, KYC compliance, luxury commerce and digital publishing. Direct access to senior technical expertise and strategic consulting—no account managers, no junior handoffs.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d9e0d5]">
              We work with founders as a strategic peer: pressure-testing the roadmap, choosing the architecture that survives growth, and using AI agents to compress delivery—without trading away data integrity, security or scale.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {strengths.map((strength) => (
                <li key={strength} className="rounded-full border border-[#dfe9d8]/15 bg-[#142728] px-4 py-3 text-sm text-[#edf3eb]">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
