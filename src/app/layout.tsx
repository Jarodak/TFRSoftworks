import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Kernel Equity - Technology-Powered Equity. Human-Centered Partnership.',
  description: 'We partner with exceptional founders to build durable, efficient companies. Our model blends hands-on product development, smart capital, and go-to-market support to find—and scale—the Kernel of value.',
  keywords: ['venture capital', 'startup funding', 'SaaS', 'HealthTech', 'LegalTech', 'enterprise software', 'founder-first', 'Nashville'],
  authors: [{ name: 'Kernel Equity' }],
  themeColor: '#0f172a', // slate-900
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kernelequity.com',
    title: 'Kernel Equity',
    description: 'Technology-Powered Equity. Human-Centered Partnership.',
    siteName: 'Kernel Equity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kernel Equity',
    description: 'Technology-Powered Equity. Human-Centered Partnership.',
    creator: '@kernelequity',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
