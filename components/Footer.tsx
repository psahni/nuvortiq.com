export function Footer() {
  return (
    <footer className="border-t border-[#1b2b2d]/80 bg-[#f5efe7]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-[#2d3d3e] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.24em] text-[#1b2b2d] uppercase">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c8f06c]" aria-hidden="true" />
          Nuvortiq
        </div>

        <div className="text-[0.72rem] tracking-[0.16em] uppercase text-[#496163]">
          Build. Automate. Accelerate.
        </div>
      </div>
    </footer>
  );
}
