"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function CompassPage() {
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
              {/* Left: Logo, status, CTA */}
              <div>
                <div className="bg-white p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm mb-6">
                  <Image
                    src="/Compass.png"
                    alt="Compass"
                    width={480}
                    height={180}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-white/70">HealthTech / Navigation</span>
                </div>

                <div className="inline-block bg-slate-950/35 px-4 py-2 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                  <p className="text-white/70 text-sm">
                    No public site available
                  </p>
                </div>
              </div>

              {/* Right: Title + intro */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--sage-400)] to-[color:var(--timberwolf-600)]">
                  Compass
                </h1>
                <p className="text-xl text-white/70 mb-8">
                  Healthcare navigation platform helping patients find the right care at the right
                  time through intelligent matching and care coordination.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Mission</h3>
                      <p className="text-white/70">
                        Simplifying healthcare navigation by connecting patients with appropriate
                        care providers and resources based on their specific needs and
                        circumstances.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Impact</h3>
                      <p className="text-white/70">
                        Reducing patient confusion and improving care outcomes through intelligent
                        care coordination and provider matching algorithms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Partnership</h3>
                      <p className="text-white/70">
                        Kernel Equity provided product development expertise and go-to-market
                        strategy to help scale the platform and improve user experience.
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
                  <li>• Intelligent provider matching algorithms</li>
                  <li>• Real-time appointment scheduling</li>
                  <li>• Insurance verification and coverage analysis</li>
                  <li>• Care coordination and follow-up tracking</li>
                  <li>• Multi-language support and accessibility</li>
                </ul>
              </div>

              <div className="bg-slate-950/35 p-6 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Stack</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• React &amp; Next.js frontend</li>
                  <li>• Node.js &amp; Express backend</li>
                  <li>• PostgreSQL database</li>
                  <li>• AWS cloud infrastructure</li>
                  <li>• HIPAA-compliant security measures</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Kernel Equity&apos;s Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Product Development</h4>
                  <p className="text-white/70 text-sm">
                    Led full-stack development of the navigation platform, focusing on user
                    experience and scalability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Go-to-Market</h4>
                  <p className="text-white/70 text-sm">
                    Developed market entry strategy and partnership frameworks with healthcare
                    providers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Strategic Investment</h4>
                  <p className="text-white/70 text-sm">
                    Provided growth capital and ongoing operational support for platform expansion.
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
