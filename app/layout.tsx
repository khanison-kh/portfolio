import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khanifolio",
  description: "Portfolio de Khanison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} grid min-h-dvh grid-rows-[auto_1fr_auto] bg-stone-100 text-neutral-900 antialiased`}
      >
        <Navbar />
        <main className="flex flex-col text-lg leading-relaxed">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
