const strengths = [
  "Senior engineering experience",
  "Full-stack development",
  "Product thinking",
  "Modern web technologies",
  "AI / agentic systems",
  "Performance engineering",
];

export function About() {
  return (
    <section id="about" className="border-t border-[#1b2b2d]/80 bg-[#0d1c1d] py-20 text-[#f5efe7]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#dbe7be] uppercase">About</p>
            <h2 className="mt-5 max-w-[12ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#f5efe7] sm:text-5xl">
              A quiet but experienced partner.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-[#d9e0d5]">
              Nuvortiq is built for teams that need senior product-minded engineering without the overhead of a large agency. The focus is on clear execution, thoughtful product decisions and modern technology that helps products move faster.
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
