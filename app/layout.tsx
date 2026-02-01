import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
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
  const themeScript = `
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  `;

  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          "text-fg-primary bg-canvas grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased",
        )}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
        <Navbar />
        <main className="flex flex-col text-lg leading-relaxed">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
