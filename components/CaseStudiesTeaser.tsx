import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export function CaseStudiesTeaser() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Technical consulting in practice</p>
          <h2 className="mt-5 max-w-[12ch] font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-[#0d1c1d] sm:text-5xl">
            Proven in production.
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-[#2d3d3e]">
            Systems architected and delivered by our Founder in senior technical leadership roles before Nuvortiq: AI news pipelines, embedded lending and KYC, luxury e-commerce, real-time contact centres, cross-cloud migrations and geospatial services at 30k requests per second. Each one cut cost, time or friction you could measure. That judgment is what you get in every engagement.
          </p>

          <p className="mt-6 text-[0.72rem] font-medium tracking-[0.16em] text-[#496163] uppercase">
            {caseStudies.map((study) => study.name).join(" · ")}
          </p>

          <Link
            href="/case-studies"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#0d1c1d] px-6 py-3 text-sm font-medium text-[#f6f0e8] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Read the case studies <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
