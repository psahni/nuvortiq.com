import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="group relative flex flex-col rounded-[2rem] border border-[#1b2b2d]/10 bg-[#f1efe9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b2b2d]/25 hover:shadow-[0_24px_60px_rgba(13,28,29,0.08)] sm:p-8">
      <p className="text-[0.66rem] font-medium tracking-[0.22em] text-[#486163] uppercase">
        {String(index + 1).padStart(2, "0")} — {study.domain}
      </p>

      <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-[1] tracking-[-0.05em] text-[#0d1c1d]">
        <Link href={`/case-studies/${study.slug}`} className="after:absolute after:inset-0 after:rounded-[2rem]">
          {study.name}
        </Link>
      </h2>
      <p className="mt-3 text-base leading-7 text-[#2d3d3e]">{study.summary}</p>

      {study.metric && (
        <p className="mt-6 flex w-fit items-baseline gap-3 border-l-2 border-[#c8f06c] pl-4">
          <span className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-[-0.05em] text-[#0d1c1d]">
            {study.metric.value}
          </span>
          <span className="text-[0.68rem] font-medium tracking-[0.18em] text-[#486163] uppercase">{study.metric.label}</span>
        </p>
      )}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {study.stack.slice(0, 4).map((tech) => (
          <li
            key={tech.name}
            className="rounded-full border border-[#1b2b2d]/15 bg-[#f5efe7] px-3 py-1.5 text-[0.72rem] font-medium tracking-[0.04em] text-[#213437]"
          >
            {tech.name}
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-8 text-[0.72rem] font-medium tracking-[0.16em] text-[#0d1c1d] uppercase">
        Read case study{" "}
        <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </p>
    </article>
  );
}
