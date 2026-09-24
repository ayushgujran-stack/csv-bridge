import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CSV Bridge | Seamless Data Onboarding",
  description:
    "Embed seamless data onboarding in 5 minutes. The high-performance bridge that transforms chaotic spreadsheets into clean, structured JSON ready for your production code.",
  keywords: [
    "CSV importer",
    "SaaS",
    "data import",
    "CSV upload",
    "embeddable",
    "webhook",
    "data onboarding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
