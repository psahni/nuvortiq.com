import Link from "next/link";

// Absolute paths so the nav also works from /case-studies.
const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1b2b2d]/80 bg-[#f5efe7]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-[0.28em] text-[#0d1c1d] uppercase">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c8f06c] shadow-[0_0_18px_rgba(200,240,108,0.8)]" aria-hidden="true" />
          Nuvortiq
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-[0.72rem] font-medium tracking-[0.18em] text-[#243436] uppercase md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors duration-200 hover:text-[#0d1c1d]">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-[#1d2e2d] bg-[#0d1c1d] px-4 py-2 text-[0.7rem] font-medium tracking-[0.16em] text-[#f5efe7] uppercase transition-transform duration-200 hover:-translate-y-0.5"
        >
          Let&apos;s talk <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
