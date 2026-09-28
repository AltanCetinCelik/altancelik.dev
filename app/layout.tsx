import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://altancelik.dev"),
  title: {
    default: "Altan Çetin Çelik — AI/ML Systems",
    template: "%s — Altan Çetin Çelik",
  },
  description:
    "AI/ML systems engineer focused on adaptive inference, agent architecture, backend systems, and edge AI.",
  keywords: [
    "Altan Çetin Çelik",
    "AI systems",
    "ML systems",
    "adaptive inference",
    "LLM routing",
    "AI agents",
    "edge AI",
    "SelectiveLLM",
  ],
  authors: [{ name: "Altan Çetin Çelik", url: "https://altancelik.dev" }],
  creator: "Altan Çetin Çelik",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Altan Çetin Çelik — AI/ML Systems",
    description:
      "Adaptive inference, agent architecture, backend systems, and edge AI.",
    url: "https://altancelik.dev",
    siteName: "Altan Çetin Çelik",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Altan Çetin Çelik — AI/ML Systems",
    description:
      "Adaptive inference, agent architecture, backend systems, and edge AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
