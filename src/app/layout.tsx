import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kernel Equity | Technology-Powered Investment & Partnership",
  description: "We partner with exceptional founders to build durable, efficient companies through hands-on product development, smart capital, and go-to-market support.",
  keywords: ["venture capital", "startup funding", "tech investment", "founder partnership", "SaaS", "HealthTech", "LegalTech"],
  authors: [{ name: "Kernel Equity" }],
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Kernel Equity | Technology-Powered Investment & Partnership",
    description: "We partner with exceptional founders to build durable, efficient companies through hands-on product development, smart capital, and go-to-market support.",
    url: "https://kernelequity.com",
    siteName: "Kernel Equity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kernel Equity | Technology-Powered Investment & Partnership",
    description: "We partner with exceptional founders to build durable, efficient companies through hands-on product development, smart capital, and go-to-market support.",
  },
};

export const viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
