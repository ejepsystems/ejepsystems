import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Pectrium — Technology for what comes next.", template: "%s — Pectrium" },
  description: "Pectrium is a technology company focused on software, intelligent systems, and digital infrastructure.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Pectrium — Technology for what comes next.",
    description: "Software, intelligent systems, and digital infrastructure. Discover Pectrium’s technology focus and company direction.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
