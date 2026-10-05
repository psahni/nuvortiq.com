import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvortiq.com"),
  title: "Nuvortiq | Founder-led technical consulting & AI-accelerated engineering",
  description:
    "Technical strategy and AI-accelerated delivery for startup founders, led by a Founder and Principal Consultant with 15+ years of distributed systems engineering.",
  openGraph: {
    title: "Nuvortiq",
    description:
      "AI changes the economics of building software. Engineering judgment keeps it production-ready.",
    url: "https://nuvortiq.com",
    siteName: "Nuvortiq",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-[#f5efe7] text-[#0d1c1d] antialiased">{children}</body>
    </html>
  );
}
