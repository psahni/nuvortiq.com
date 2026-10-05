import { About } from "@/components/About";
import { AISection } from "@/components/AISection";
import { CaseStudiesTeaser } from "@/components/CaseStudiesTeaser";
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
      {/* <Outcomes /> — hidden for now */}
      <Problem />
      <Services />
      <CaseStudiesTeaser />
      <AISection />
      <StartupSection />
      <Technology />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
