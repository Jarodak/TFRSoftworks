'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function ToddMcCullough() {
  return (
    <div className="min-h-screen">
      {/* Page header removed; using global Header */}

      {/* Member Profile */}
      <main className="py-20">
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
                  src="/Todd.png"
                  alt="Todd McCullough headshot"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">
                    Todd McCullough
                  </span>
                </h1>
                <p className="text-2xl text-[color:var(--sage-400)] font-medium mb-4">Partner and Advisor</p>
                <a 
                  href="https://www.linkedin.com/in/todd-a-mccullough/" 
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
                About Todd
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed mb-6">
                  Todd McCullough serves as Partner and Advisor at Kernel Equity. His career is centered on business growth and innovation. He previously led Growth and Innovation at North Highland and has advised more than 100 Fortune 500 companies across industries including financial services, healthcare, retail, and food service.
                </p>
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed mb-6">
                  McCullough also served as a senior partner at Monitor Group after leading Doblin, now part of Deloitte&apos;s Innovation Strategy practice. Known as a &ldquo;consultant to consultants,&rdquo; he has advised five of the six largest global management consulting firms. He holds both a CPA and an MBA, combining strong financial acumen with expertise in design thinking.
                </p>
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed">
                  McCullough has taught business through Vanderbilt and Notre Dame as well as design at the Institute of Design in Chicago, with upcoming courses at O&apos;More College of Design. His representative client base includes Ford, McDonald&apos;s, EY, Pfizer, HCA, Subway, Boston Scientific, SC Johnson, Coca-Cola, Target, and GE.
                </p>
              </div>
            </div>

          </motion.div>
        </Container>
      </main>
    </div>
  );
}
