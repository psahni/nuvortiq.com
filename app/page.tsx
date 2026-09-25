import { About } from "@/components/About";
import { AISection } from "@/components/AISection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { StartupSection } from "@/components/StartupSection";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <main className="bg-[#f5efe7] text-[#0d1c1d]">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <StartupSection />
      <Technology />
      <AISection />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
