import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Pectrium — Intelligent Systems. Global Possibilities.", template: "%s — Pectrium" },
  description: "Pectrium is being established to architect software, intelligent systems, and technology foundations.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Pectrium — Intelligent Systems. Global Possibilities.",
    description: "Technology foundations and intelligent systems. Pectrium is at the establishment stage.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
