const principles = [
  { title: "UNDERSTAND", text: "Get close to the problem." },
  { title: "BUILD", text: "Turn ideas into working software." },
  { title: "ACCELERATE", text: "Keep improving and shipping." },
];

export function StartupSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Built for startup speed</p>
          <h2 className="mt-5 max-w-[10ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#0d1c1d] sm:text-5xl">
            Built for startup speed.
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-[#2c3c3d]">
            Startups need to experiment, learn and ship. Nuvortiq works alongside founders and teams to turn ideas into working software without unnecessary layers.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-[1.5rem] border border-[#1b2b2d]/10 bg-[#f0ede4] p-5">
                <p className="text-[0.66rem] font-medium tracking-[0.22em] text-[#486163] uppercase">{principle.title}</p>
                <p className="mt-4 text-lg leading-7 text-[#143337]">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
