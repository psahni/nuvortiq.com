const services = [
  {
    title: "BUILD",
    kicker: "Starting from zero?",
    description: "Websites, web applications and digital products built around your business goals.",
  },
  {
    title: "EXTEND",
    kicker: "Need to ship something new?",
    description: "New features, integrations and product capabilities for existing applications.",
  },
  {
    title: "IMPROVE",
    kicker: "Something isn&apos;t performing?",
    description: "Performance optimization, Core Web Vitals, UX improvements and technical refinement.",
  },
  {
    title: "REBUILD",
    kicker: "Has your website fallen behind?",
    description: "Modern redesigns and rebuilds using current web technologies.",
  },
  {
    title: "DIGITAL PRESENCE",
    kicker: "Don&apos;t have a website yet?",
    description: "Create a modern digital presence that helps your business reach customers online.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-y border-[#1b2b2d]/80 bg-[#0d1c1d] py-20 text-[#f5efe7]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#dbe7be] uppercase">What we do</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#f5efe7] sm:text-5xl">
              Product thinking for the next move.
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-[#d5e7d7]/10 bg-[#101f20] p-5 transition-all duration-300 hover:border-[#c8f06c]/40 hover:bg-[#132425] sm:p-7"
            >
              <div className="grid gap-4 md:grid-cols-[0.9fr_1.8fr_1.2fr] md:items-center">
                <div className="text-[0.66rem] font-medium tracking-[0.24em] text-[#dfecc8] uppercase">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#f5efe7] sm:text-3xl">{service.title}</h3>
                  <p className="mt-2 text-base text-[#dfe6db]">{service.kicker}</p>
                </div>

                <p className="text-base leading-7 text-[#d6dfd6] md:text-right">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
