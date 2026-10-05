import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};

  return {
    title: `${study.name} | Case study | Nuvortiq`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">{children}</h2>;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className="bg-[#f5efe7] text-[#0d1c1d]">
      <Navbar />

      <header className="border-b border-[#1b2b2d]/80">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/case-studies"
            className="text-[0.68rem] font-medium tracking-[0.2em] text-[#496163] uppercase transition-colors duration-200 hover:text-[#0d1c1d]"
          >
            <span aria-hidden="true">←</span> All case studies
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">{study.domain}</p>
              <h1 className="mt-5 max-w-[16ch] font-[family-name:var(--font-display)] text-[2.75rem] leading-[0.95] tracking-[-0.06em] text-[#0d1c1d] sm:text-[4rem]">
                {study.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#2d3d3e]">{study.summary}</p>
            </div>

            {study.metric && (
              <p className="flex w-fit items-baseline gap-4 border-l-2 border-[#c8f06c] pl-5 lg:justify-self-end">
                <span className="font-[family-name:var(--font-display)] text-5xl leading-none tracking-[-0.05em] text-[#0d1c1d]">
                  {study.metric.value}
                </span>
                <span className="max-w-[12ch] text-[0.7rem] font-medium tracking-[0.18em] text-[#486163] uppercase">
                  {study.metric.label}
                </span>
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <section className="grid gap-6 border-b border-[#1b2b2d]/10 py-14 lg:grid-cols-[0.35fr_1fr] lg:gap-12">
          <SectionLabel>The challenge</SectionLabel>
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#2d3d3e]">
            {study.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {study.role && (
          <section className="grid gap-6 border-b border-[#1b2b2d]/10 py-14 lg:grid-cols-[0.35fr_1fr] lg:gap-12">
            <SectionLabel>Our Founder&apos;s role</SectionLabel>
            <ul className="max-w-3xl space-y-4">
              {study.role.map((item) => (
                <li key={item} className="border-l-2 border-[#c8f06c] pl-5 text-lg leading-8 text-[#0d1c1d]">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="grid gap-6 border-b border-[#1b2b2d]/10 py-14 lg:grid-cols-[0.35fr_1fr] lg:gap-12">
          <SectionLabel>How it works</SectionLabel>
          <ol className="max-w-3xl space-y-8">
            {study.approach.map((step, i) => (
              <li key={step.title} className="grid gap-2 sm:grid-cols-[3rem_1fr]">
                <span className="text-[0.66rem] font-medium tracking-[0.22em] text-[#486163] uppercase sm:pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#0d1c1d]">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#2d3d3e]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {study.decisions.length > 0 && (
          <section className="grid gap-6 border-b border-[#1b2b2d]/10 py-14 lg:grid-cols-[0.35fr_1fr] lg:gap-12">
            <SectionLabel>Engineering decisions</SectionLabel>
            <div className="grid max-w-3xl gap-4">
              {study.decisions.map((decision) => (
                <div key={decision.title} className="rounded-[1.6rem] border border-[#1b2b2d]/10 bg-[#f1efe9] p-6">
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#0d1c1d]">{decision.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {decision.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-base leading-7 text-[#2d3d3e]">
                        <span className="mt-[0.65rem] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d1c1d]/40" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-6 border-b border-[#1b2b2d]/10 py-14 lg:grid-cols-[0.35fr_1fr] lg:gap-12">
          <SectionLabel>Outcomes</SectionLabel>
          <ul className="max-w-3xl space-y-4">
            {study.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-lg leading-8 text-[#0d1c1d]">
                <span className="mt-[0.7rem] inline-flex h-2 w-2 shrink-0 rounded-full bg-[#c8f06c] ring-1 ring-[#0d1c1d]/20" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 py-14 lg:grid-cols-[0.35fr_1fr] lg:gap-12">
          <SectionLabel>Technology</SectionLabel>
          <dl className="max-w-3xl divide-y divide-[#1b2b2d]/10 border-y border-[#1b2b2d]/10">
            {study.stack.map((tech) => (
              <div key={tech.name} className="grid gap-1 py-3 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                <dt className="text-base font-medium text-[#0d1c1d]">{tech.name}</dt>
                {tech.usage && <dd className="text-base text-[#486163]">{tech.usage}</dd>}
              </div>
            ))}
          </dl>
        </section>

        <nav aria-label="Next case study" className="border-t border-[#1b2b2d]/80 py-10">
          <Link href={`/case-studies/${next.slug}`} className="group flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Next case study</span>
            <span className="font-[family-name:var(--font-display)] text-3xl tracking-[-0.05em] text-[#0d1c1d]">
              {next.name}{" "}
              <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </nav>
      </div>

      <CTA />
      <Footer />
    </main>
  );
}
