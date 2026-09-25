export function CTA() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#1b2b2d]/10 bg-[#edf1e7] p-8 sm:p-12 lg:p-16">
        <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Contact</p>
        <h2 className="mt-5 max-w-[12ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#0d1c1d] sm:text-5xl lg:text-7xl">
          Have something you want to build?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#2d3d3e]">
          Tell us what you&apos;re working on. Let&apos;s figure out the next step.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@nuvortiq.com"
            className="inline-flex items-center justify-center rounded-full bg-[#0d1c1d] px-6 py-3 text-sm font-medium text-[#f6f0e8] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:hello@nuvortiq.com"
            className="text-sm font-medium tracking-[0.16em] text-[#1b2b2d] uppercase transition-colors duration-200 hover:text-[#0d1c1d]"
          >
            hello@nuvortiq.com
          </a>
        </div>
      </div>
    </section>
  );
}
