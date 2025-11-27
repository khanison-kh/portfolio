import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Khanifolio',
  description: 'Portfolio de Khanison.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} antialiased grid min-h-dvh grid-rows-[auto_1fr_auto] bg-[#f7f9fc]`}
      >
        <Navbar />
        <main className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
