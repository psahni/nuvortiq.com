'use client';

import { useMemo, useState } from "react";

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const nodes = useMemo(
    () => [
      { left: "8%", top: "15%", size: 14 },
      { left: "17%", top: "55%", size: 10 },
      { left: "37%", top: "22%", size: 12 },
      { left: "58%", top: "36%", size: 14 },
      { left: "74%", top: "18%", size: 10 },
      { left: "82%", top: "52%", size: 12 },
      { left: "65%", top: "70%", size: 14 },
    ],
    [],
  );

  return (
    <section id="top" className="relative overflow-hidden border-b border-[#1b2b2d]/80 bg-[#f5efe7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,240,108,0.18),transparent_35%)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-[0.68rem] font-medium tracking-[0.24em] text-[#4a5d5f] uppercase">
            Nuvortiq — Founder-led technical consulting
          </p>

          <h1 className="max-w-[12ch] font-[family-name:var(--font-display)] text-[3.5rem] leading-[0.9] tracking-[-0.06em] text-[#0d1c1d] sm:text-[5rem] lg:text-[6.4rem]">
            AI speed. Senior judgment.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#2d3d3e] sm:text-lg">
            Technical strategy and AI-accelerated delivery for startup founders. Led by our Founder and Principal Consultant, with 15+ years of distributed systems engineering: we decide what to build, architect it to scale, and ship it in weeks.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0d1c1d] px-6 py-3 text-sm font-medium text-[#f6f0e8] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a conversation <span aria-hidden="true">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-[#1b2b2d]/60 px-6 py-3 text-sm font-medium text-[#0d1c1d] transition-colors duration-200 hover:bg-[#0d1c1d] hover:text-[#f5efe7]"
            >
              See the track record
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.68rem] font-medium tracking-[0.18em] text-[#4a5d5f] uppercase">
            <li>Founder-led · 15+ yrs</li>
            <li aria-hidden="true" className="text-[#1b2b2d]/30">/</li>
            <li>50–60% less dev effort with AI agents</li>
            <li aria-hidden="true" className="text-[#1b2b2d]/30">/</li>
            <li>FinTech · AI · Commerce · Media</li>
          </ul>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="relative h-[440px] w-full max-w-[500px] overflow-hidden rounded-[2rem] border border-[#1b2b2d]/10 bg-[#eef1eb]/70 shadow-[0_30px_80px_rgba(13,28,29,0.08)]"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setPointer({
                x: ((event.clientX - rect.left) / rect.width - 0.5) * 18,
                y: ((event.clientY - rect.top) / rect.height - 0.5) * 18,
              });
            }}
            onMouseLeave={() => setPointer({ x: 0, y: 0 })}
          >
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={{
                transform: `translate(${pointer.x * 0.8}px, ${pointer.y * 0.8}px) scale(1.03)`,
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,28,29,0.02),rgba(200,240,108,0.12))]" aria-hidden="true" />
              <div className="absolute inset-x-8 top-10 h-px bg-[#1b2b2d]/20" aria-hidden="true" />
              <div className="absolute bottom-16 left-10 right-10 h-px bg-[#1b2b2d]/25" aria-hidden="true" />
              <div className="absolute left-8 top-8 h-24 w-px bg-[#1b2b2d]/20" aria-hidden="true" />
              <div className="absolute right-10 top-20 h-32 w-px bg-[#1b2b2d]/20" aria-hidden="true" />
            </div>

            <div className="absolute inset-0">
              <svg viewBox="0 0 500 440" className="h-full w-full" aria-label="Abstract momentum diagram" role="img">
                <path d="M40 310 C130 245, 150 120, 250 180 S390 260, 460 115" fill="none" stroke="#123033" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                <path d="M55 325 C170 240, 200 255, 260 210 S385 145, 445 70" fill="none" stroke="#b7ee75" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                <path d="M125 135 L205 135 L205 215 L284 215 L284 302" fill="none" stroke="#d9e7df" strokeWidth="2" opacity="0.9" />
                <path d="M174 237 L233 237 L233 286 L295 286" fill="none" stroke="#d9e7df" strokeWidth="2" opacity="0.9" />
              </svg>
            </div>

            {nodes.map((node, index) => (
              <div
                key={index}
                className="absolute rounded-full border border-[#0d1c1d]/25 bg-[#f5efe7] shadow-[0_0_0_6px_rgba(13,28,29,0.03)]"
                style={{
                  left: node.left,
                  top: node.top,
                  width: `${node.size}px`,
                  height: `${node.size}px`,
                  transform: `translate(${pointer.x * (0.9 + index * 0.08)}px, ${pointer.y * (0.9 + index * 0.08)}px)`,
                }}
              >
                <span className="absolute inset-[4px] rounded-full bg-[#c8f06c]" aria-hidden="true" />
              </div>
            ))}

            <div className="absolute bottom-8 left-8 rounded-full border border-[#183235]/70 bg-[#f5efe7]/80 px-3 py-2 text-[0.62rem] font-medium tracking-[0.22em] text-[#183235] uppercase backdrop-blur-sm">
              BUILD • AUTOMATE • SHIP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
