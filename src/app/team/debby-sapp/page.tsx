'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function DebbySapp() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--charcoal-1)]/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <Image src="/header-logo.png" alt="Kernel Equity" width={200} height={48} priority className="h-10 w-auto md:h-12" />
            </Link>
            <nav className="hidden items-center justify-center gap-8 md:flex flex-1">
              <Link href="/bio" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Bio
              </Link>
              <Link href="/team" className="text-sm font-medium text-[color:var(--sage-400)] hover:text-[color:var(--timberwolf-600)]">
                Team
              </Link>
              <Link href="/portfolio" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Contact
              </Link>
            </nav>
          </div>
        </Container>
      </header>

      {/* Member Profile */}
      <main className="bg-[color:var(--charcoal-1)] py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back to Team */}
            <Link 
              href="/team" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Team
            </Link>

            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-white/20 flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src="/Debby Sapp.png"
                  alt="Debby Sapp headshot"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">
                    Debby Sapp
                  </span>
                </h1>
                <p className="text-2xl text-[color:var(--sage-400)] font-medium mb-4">Partner & CFO</p>
                <a 
                  href="https://www.linkedin.com/in/debby-sapp-b5750666/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-[color:var(--sage-400)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Bio Content */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">
                About Debby
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed mb-6">
                  Debby Sapp is a Partner and the Chief Financial Officer of Kernel Equity. She was formerly CFO of DevDigital, where she helped guide its acquisition in 2023. At Kernel, she oversees all financial operations for six portfolio companies and manages compliance and reporting for both U.S. and international entities.
                </p>
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed mb-6">
                  She has more than two decades of experience in finance across healthcare and the music industry, where she worked with artists such as Alan Jackson and George Jones. Sapp has been deeply involved in successful exits at Kernel including Maxx Content, CoreCommerce, and Other Left.
                </p>
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed">
                  Outside her professional role, she is active in community service as treasurer for a Christian youth camp, a board member at her church, and a supporter of a special-needs sports foundation.
                </p>
              </div>
            </div>

          </motion.div>
        </Container>
      </main>
    </div>
  );
}
