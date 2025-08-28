"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Target } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function MaxxContentPage() {
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
                    src="/Maxxcontent.png"
                    alt="MaxxContent"
                    width={480}
                    height={180}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center rounded-full bg-red-400/20 px-3 py-1 text-sm font-medium text-red-300">
                    Exit
                  </span>
                  <span className="text-white/70">Media / Content</span>
                </div>
                
                <div className="bg-slate-950/35 p-4 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                  <p className="text-white/70 text-sm">
                    No public site available
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--sage-400)] to-[color:var(--timberwolf-600)]">
                  MaxxContent
                </h1>
                
                <p className="text-xl text-white/70 mb-8">
                  Digital media and marketing venture focused on content creation and distribution platforms.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Mission</h3>
                      <p className="text-white/70">
                        Revolutionizing digital content creation and marketing through innovative platforms and distribution strategies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Impact</h3>
                      <p className="text-white/70">
                        Enabled content creators and marketers to reach broader audiences through scalable digital platforms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Partnership</h3>
                      <p className="text-white/70">
                        Kernel Equity provided platform development and digital marketing expertise for successful market entry and exit.
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
                  <li>• Content management and publishing tools</li>
                  <li>• Digital marketing automation</li>
                  <li>• Analytics and performance tracking</li>
                  <li>• Multi-channel distribution</li>
                  <li>• Creator monetization platforms</li>
                </ul>
              </div>

              <div className="bg-slate-950/35 p-6 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Stack</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• React & JavaScript frontend</li>
                  <li>• Content delivery networks</li>
                  <li>• Node.js backend services</li>
                  <li>• MySQL database</li>
                  <li>• Cloud media processing</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Kernel Equity&apos;s Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Platform Development</h4>
                  <p className="text-white/70 text-sm">
                    Built scalable content management and distribution platform with focus on creator tools and audience engagement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Market Strategy</h4>
                  <p className="text-white/70 text-sm">
                    Developed digital marketing strategies and growth frameworks for content creator marketplace expansion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Content Strategy</h4>
                  <p className="text-white/70 text-sm">
                    Guided company through strategic positioning and market development leading to successful acquisition.
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
