const outcomes = [
  {
    value: "80%",
    label: "Reduction in research effort",
    source: "AI financial research platform",
  },
  {
    value: "50%",
    label: "Reduction in merchant onboarding time",
    source: "Centralized KYC platform",
  },
  {
    value: "70–80%",
    label: "Improvement in product-search performance",
    source: "High-traffic luxury e-commerce",
  },
  {
    value: "50–60%",
    label: "Increase in engineering productivity using AI agents",
    source: "AI-accelerated delivery",
  },
];

export function Outcomes() {
  return (
    <section aria-labelledby="outcomes-heading" className="border-b border-[#1b2b2d]/80 bg-[#0d1c1d] py-20 text-[#f5efe7]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#dbe7be] uppercase">Measurable outcomes</p>
            <h2
              id="outcomes-heading"
              className="mt-5 max-w-[16ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#f5efe7] sm:text-5xl"
            >
              Numbers from production, not pitch decks.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#d6dfd6]">
            Results our principal engineer delivered across FinTech, AI and e-commerce platforms, before Nuvortiq was founded.
          </p>
        </div>

        <dl className="mt-14 grid border-t border-[#dfe9d8]/15 sm:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="flex flex-col border-b border-[#dfe9d8]/15 py-8 sm:px-6 sm:odd:pl-0 xl:border-b-0 xl:border-l xl:px-6 xl:first:border-l-0 xl:first:pl-0"
            >
              <dt className="order-2 mt-5 max-w-[22ch] text-lg leading-7 text-[#f5efe7]">{outcome.label}</dt>
              <dd className="order-1 font-[family-name:var(--font-display)] text-[3.5rem] leading-none tracking-[-0.06em] text-[#c8f06c] sm:text-[4.25rem]">
                {outcome.value}
              </dd>
              <dd className="order-3 mt-4 text-[0.66rem] font-medium tracking-[0.22em] text-[#9fb3a6] uppercase">
                {outcome.source}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
