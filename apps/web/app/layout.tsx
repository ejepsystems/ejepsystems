import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const display = Manrope({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: { default: "Pectrium — Technology built around real needs.", template: "%s — Pectrium" },
  description: "Pectrium explores software, intelligent systems and digital infrastructure to address meaningful digital needs.",
  robots: { index: isProduction, follow: isProduction },
  openGraph: {
    title: "Pectrium — Technology built around real needs.",
    description: "Explore Pectrium’s software, intelligent systems and digital infrastructure focus.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable} ${display.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
