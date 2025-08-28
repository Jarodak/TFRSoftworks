import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kernel Equity",
  description: "Software-driven, human-powered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-fixed bg-[linear-gradient(315deg,var(--charcoal-3)_0%,var(--charcoal-2)_50%,var(--charcoal-1)_100%)]`}
      >
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
