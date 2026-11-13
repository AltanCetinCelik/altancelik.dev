import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://altancelik.dev";
const siteTitle =
  "Altan Çetin Çelik — AI Systems, LLM Evaluation & Backend Engineer";
const siteDescription =
  "Portfolio of Altan Çetin Çelik: adaptive LLM inference (SelectiveLLM), automated LLM evaluation & benchmarking pipelines, FastAPI/asyncio backends, PinShift EDA copilot, and CAN-bus IIoT systems.";

export const viewport: Viewport = {
  themeColor: "#07090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Altan Çetin Çelik",
  },
  description: siteDescription,
  applicationName: "Altan Çetin Çelik Portfolio",
  category: "technology",
  keywords: [
    "Altan Çetin Çelik",
    "Altan Celik",
    "AI Systems Engineer",
    "LLM Evaluation Engineer",
    "Python Backend Engineer",
    "FastAPI",
    "asyncio",
    "Pandas",
    "Adaptive LLM Inference",
    "SelectiveLLM",
    "Seed Agent",
    "PinShift",
    "LLM Routing",
    "AI Benchmarking",
    "PEFT LoRA",
    "RAG",
    "Agent Systems",
    "Edge AI",
    "Industrial IoT",
    "STM32",
    "CAN bus",
    "Pamukkale University",
    "Remote AI Engineer",
  ],
  authors: [{ name: "Altan Çetin Çelik", url: siteUrl }],
  creator: "Altan Çetin Çelik",
  publisher: "Altan Çetin Çelik",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "V0hCmpsmemfmi66DzDIEDjqvDIZWeEMplbRZUtoMO8I",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Altan Çetin Çelik",
    locale: "en_US",
    type: "profile",
    firstName: "Altan Çetin",
    lastName: "Çelik",
    username: "AltanCetinCelik",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
