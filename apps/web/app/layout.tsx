import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Pectrium — Technology built around real needs.", template: "%s — Pectrium" },
  description: "Pectrium explores software, intelligent systems and digital infrastructure to address meaningful digital needs.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Pectrium — Technology for what comes next.",
    description: "Explore Pectrium’s software, intelligent systems and digital infrastructure focus.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
