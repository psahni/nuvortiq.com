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
  title: "Nuvortiq | Software engineering partner for startups",
  description:
    "Nuvortiq helps startups build, automate and accelerate digital products with senior product-minded engineering support.",
  openGraph: {
    title: "Nuvortiq",
    description:
      "An experienced technology partner for startups that need to build, automate or move faster.",
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
