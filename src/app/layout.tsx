import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ClosePilot — AI Coaching for Real Estate & Lending Brokers",
  description:
    "The AI coaching platform that turns small brokerages into deal-closing powerhouses. AI agents, intelligent workflows, and the unfair advantage your competitors don't have.",
  openGraph: {
    title: "ClosePilot — AI Coaching for Real Estate & Lending Brokers",
    description:
      "Turn your small brokerage into a deal-closing powerhouse with AI agents, intelligent workflows, and technology that levels the playing field.",
    type: "website",
    url: "https://closepilot.ai",
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
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
