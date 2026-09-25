const triggers = [
  "A website that needs to work harder",
  "A new feature that should ship faster",
  "A product built from the ground up",
  "A slow website that needs fixing",
  "An outdated site that needs a modern rebuild",
  "Additional senior engineering capacity",
];

export function Problem() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Problem → solution</p>
          <h2 className="mt-5 max-w-[12ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#0d1c1d] sm:text-5xl">
            Sometimes you don&apos;t need a bigger team. You need the right engineering partner.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-[#2d3d3e]">
          <p>
            Startups move fast. The challenge is rarely the idea — it&apos;s the execution, the product quality and the ability to keep momentum without dragging in unnecessary layers.
          </p>
          <p>
            Nuvortiq helps founders and teams solve the practical problems that slow growth: building the right thing, shipping the next release, improving product quality and tightening digital presence.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {triggers.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-full border border-[#1b2b2d]/10 bg-[#f0ede7] px-4 py-3 text-sm text-[#213437]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#c8f06c]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
