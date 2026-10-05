import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies | Nuvortiq",
  description:
    "Production systems across AI, FinTech, compliance, e-commerce and publishing, architected and delivered by Nuvortiq's Founder.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#f5efe7] text-[#0d1c1d]">
      <Navbar />

      <section className="border-b border-[#1b2b2d]/80">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-24">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Case studies</p>
            <h1 className="mt-5 max-w-[14ch] font-[family-name:var(--font-display)] text-[3rem] leading-[0.92] tracking-[-0.06em] text-[#0d1c1d] sm:text-[4.25rem]">
              Our core expertise in action.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#2d3d3e]">
            Systems our Founder architected and shipped in senior technical expert and consultant roles before launching Nuvortiq. The same judgment now drives our technical consulting and strategy work.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
