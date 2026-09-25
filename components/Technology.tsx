const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "Ruby",
  "PostgreSQL",
  "AWS",
  "GCP",
  "Vercel",
  "AI / Agentic AI",
];

export function Technology() {
  return (
    <section className="border-t border-[#1b2b2d]/80 bg-[#f5efe7]">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <p className="text-[0.68rem] font-medium tracking-[0.24em] text-[#496163] uppercase">Technology</p>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3 text-[1.7rem] leading-none tracking-[-0.06em] text-[#0d1c1d] sm:text-[2.2rem] lg:text-[3rem]">
          {stack.map((item, index) => (
            <span key={item} className="inline-block whitespace-nowrap">
              {item}
              {index !== stack.length - 1 ? <span className="mx-3 text-[#9db0b0]">/</span> : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
