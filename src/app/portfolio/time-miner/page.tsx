"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function TimeMinerPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero / Top Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[color:var(--sage-400)] hover:text-[color:var(--timberwolf-600)] transition-colors mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="bg-white p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm mb-6">
                  <Image
                    src="/TimeMiner.png"
                    alt="Time Miner"
                    width={480}
                    height={180}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center rounded-full bg-[color:var(--sage-500)] px-3 py-1 text-sm font-medium text-[color:var(--hunter-green-100)]">
                    Active
                  </span>
                  <span className="text-white/70">Productivity / Analytics</span>
                </div>

                <a
                  href="https://timeminer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--sage-500)] px-6 py-3 text-sm font-semibold text-[color:var(--hunter-green-100)] transition-colors hover:bg-[color:var(--timberwolf-600)]"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--sage-400)] to-[color:var(--timberwolf-600)]">
                  Time Miner
                </h1>
                
                <p className="text-xl text-white/70 mb-8">
                  Legal time tracking and billing platform designed to streamline professional services workflows and improve billing accuracy.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Mission</h3>
                      <p className="text-white/70">
                        Revolutionizing legal billing through intelligent time tracking, automated workflows, and comprehensive practice management tools.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Impact</h3>
                      <p className="text-white/70">
                        Helping law firms increase billing accuracy, reduce administrative overhead, and improve client transparency.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Partnership</h3>
                      <p className="text-white/70">
                        Kernel Equity provided platform development and legal industry expertise to build comprehensive practice management solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--sage-400)] to-[color:var(--timberwolf-600)]">
              Technology &amp; Innovation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-950/35 p-6 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Intelligent time tracking and categorization</li>
                  <li>• Automated billing and invoice generation</li>
                  <li>• Client portal and transparency tools</li>
                  <li>• Matter management and case tracking</li>
                  <li>• Detailed reporting and analytics</li>
                </ul>
              </div>

              <div className="bg-slate-950/35 p-6 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Stack</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• React & TypeScript frontend</li>
                  <li>• Node.js & Express backend</li>
                  <li>• PostgreSQL database</li>
                  <li>• AWS cloud infrastructure</li>
                  <li>• Advanced security and compliance</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Kernel Equity&apos;s Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Product Development</h4>
                  <p className="text-white/70 text-sm">
                    Built comprehensive legal practice management platform with focus on user experience and workflow optimization.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Analytics Engine</h4>
                  <p className="text-white/70 text-sm">
                    Leveraged deep understanding of legal workflows to create intuitive, industry-specific solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Market Strategy</h4>
                  <p className="text-white/70 text-sm">
                    Developed go-to-market strategy and customer acquisition frameworks for legal services market.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
