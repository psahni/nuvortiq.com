const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Understand the product, business and problem.",
  },
  {
    number: "02",
    title: "PLAN",
    description: "Define the simplest practical path forward.",
  },
  {
    number: "03",
    title: "BUILD",
    description: "Design, develop and iterate.",
  },
  {
    number: "04",
    title: "SHIP",
    description: "Launch, automate releases, measure and improve.",
  },
];

export function Process() {
  return (
    <section id="approach" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Approach</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="rounded-[1.6rem] border border-[#1b2b2d]/10 bg-[#f1efe9] p-5">
            <p className="text-[0.66rem] font-medium tracking-[0.22em] text-[#486163] uppercase">{step.number}</p>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-[#0d1c1d]">{step.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#2a3d3e]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
