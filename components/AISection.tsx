const accelerates = [
  "Scaffolding and boilerplate",
  "Test generation and coverage",
  "Migrations and refactors",
  "Integrations and internal tooling",
];

const protects = [
  "Architecture and data models",
  "Security and compliance",
  "Performance under real load",
  "Failure modes and observability",
];

export function AISection() {
  return (
    <section className="border-y border-[#1b2b2d]/80 bg-[#0d1c1d] py-20 text-[#f5efe7]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#dbe7be] uppercase">AI &amp; automation</p>
          <h2 className="mt-5 max-w-[14ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#f5efe7] sm:text-5xl">
            AI changes the economics of building software.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#d6dfd6]">
            Engineering judgment keeps it production-ready. AI agents trained on our own conventions cut development effort by 50–60%. 15+ years of systems experience decides what ships.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:self-end">
          <div className="rounded-[1.6rem] border border-[#c8f06c]/30 bg-[#101f20] p-6">
            <p className="text-[0.66rem] font-medium tracking-[0.22em] text-[#c8f06c] uppercase">AI accelerates</p>
            <ul className="mt-5 space-y-3">
              {accelerates.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#edf3eb]">
                  <span className="mt-[0.6rem] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8f06c]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.6rem] border border-[#dfe9d8]/15 bg-[#142728] p-6">
            <p className="text-[0.66rem] font-medium tracking-[0.22em] text-[#dbe7be] uppercase">Judgment protects</p>
            <ul className="mt-5 space-y-3">
              {protects.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#edf3eb]">
                  <span className="mt-[0.6rem] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5efe7]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
