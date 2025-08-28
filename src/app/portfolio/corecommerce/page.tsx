"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Target } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function CoreCommercePage() {
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
                    src="/CoreCommerce.png"
                    alt="CoreCommerce"
                    width={480}
                    height={180}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-white/70">E-commerce / Technology</span>
                </div>
                
                <div className="inline-block bg-slate-950/35 px-4 py-2 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                  <p className="text-white/70 text-sm">
                    No public site available
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--sage-400)] to-[color:var(--timberwolf-600)]">
                  CoreCommerce
                </h1>
                
                <p className="text-xl text-white/70 mb-8">
                  Comprehensive eCommerce platform providing businesses with tools for online retail, inventory management, and customer engagement.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Mission</h3>
                      <p className="text-white/70">
                        Empowering businesses to succeed in digital commerce through comprehensive, scalable eCommerce solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Impact</h3>
                      <p className="text-white/70">
                        Enabled hundreds of businesses to establish and grow their online presence with integrated commerce tools.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Partnership</h3>
                      <p className="text-white/70">
                        Kernel Equity provided eCommerce platform development and market expansion strategy for successful growth and exit.
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
                  <li>• Complete eCommerce storefront builder</li>
                  <li>• Inventory and order management</li>
                  <li>• Payment processing integration</li>
                  <li>• Customer relationship management</li>
                  <li>• Analytics and reporting dashboard</li>
                </ul>
              </div>

              <div className="bg-slate-950/35 p-6 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Stack</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• PHP & Laravel framework</li>
                  <li>• MySQL database</li>
                  <li>• JavaScript & jQuery frontend</li>
                  <li>• RESTful API architecture</li>
                  <li>• Cloud hosting infrastructure</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Kernel Equity&apos;s Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Platform Development</h4>
                  <p className="text-white/70 text-sm">
                    Built comprehensive eCommerce platform with focus on scalability, performance, and merchant success.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Market Strategy</h4>
                  <p className="text-white/70 text-sm">
                    Developed go-to-market strategies and partnership frameworks for rapid customer acquisition and growth.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">E-commerce Strategy</h4>
                  <p className="text-white/70 text-sm">
                    Guided strategic positioning and market development leading to successful acquisition by larger eCommerce player.
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
