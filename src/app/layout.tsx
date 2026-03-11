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
  title: "ClosePilot — AI Coaching for Real Estate & Lending Brokers",
  description:
    "The AI coaching platform that turns small brokerages into deal-closing powerhouses. AI agents, intelligent workflows, and the unfair advantage your competitors don't have.",
  keywords: [
    "AI coaching",
    "real estate AI",
    "broker AI tools",
    "AI for brokers",
    "real estate technology",
    "lending broker AI",
    "AI agents real estate",
    "AI workflows",
  ],
  openGraph: {
    title: "ClosePilot — AI Coaching for Real Estate & Lending Brokers",
    description:
      "Turn your small brokerage into a deal-closing powerhouse with AI agents, intelligent workflows, and technology that levels the playing field.",
    type: "website",
    url: "https://closepilot.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClosePilot — AI Coaching for Real Estate & Lending Brokers",
    description:
      "Turn your small brokerage into a deal-closing powerhouse with AI agents, intelligent workflows, and technology that levels the playing field.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
