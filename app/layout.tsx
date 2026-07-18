import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/self/Navbar";
import InteractiveGrid from "@/components/self/InteractiveGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darius M.",
  description: "Portfolio for Darius M.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#08090a]">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <InteractiveGrid />
        </div>
        <div className="relative z-10 flex min-h-full flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
