"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function TheraVistaHealthPage() {
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
                    src="/Theravista.jpg"
                    alt="TheraVista Health"
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
                  <span className="text-white/70">HealthTech / Mental Health</span>
                </div>

                <a
                  href="https://theravista.health"
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
                  TheraVista Health
                </h1>
                
                <p className="text-xl text-white/70 mb-8">
                  Remote Therapeutic Monitoring focused on vestibular rehabilitation, providing specialized care for balance and dizziness disorders.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Mission</h3>
                      <p className="text-white/70">
                        Improving outcomes for patients with vestibular disorders through remote monitoring and specialized therapeutic interventions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Impact</h3>
                      <p className="text-white/70">
                        Enabling continuous care for balance disorders while reducing the need for frequent in-person visits and improving patient outcomes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[color:var(--sage-400)] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Partnership</h3>
                      <p className="text-white/70">
                        Kernel Equity provided specialized healthcare technology expertise and regulatory guidance for remote monitoring solutions.
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
                  <li>• Remote vestibular assessment tools</li>
                  <li>• Continuous balance monitoring</li>
                  <li>• Personalized therapy protocols</li>
                  <li>• Provider dashboard and analytics</li>
                  <li>• Patient progress tracking and reporting</li>
                </ul>
              </div>

              <div className="bg-slate-950/35 p-6 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Stack</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• React Native mobile applications</li>
                  <li>• IoT sensor integration</li>
                  <li>• Node.js & Express backend</li>
                  <li>• PostgreSQL database</li>
                  <li>• FDA-compliant infrastructure</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Kernel Equity&apos;s Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Platform Development</h4>
                  <p className="text-white/70 text-sm">
                    Developed specialized remote monitoring platform with focus on vestibular rehabilitation and patient outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Regulatory Compliance</h4>
                  <p className="text-white/70 text-sm">
                    Ensured FDA compliance and medical device regulations for remote therapeutic monitoring solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Clinical Integration</h4>
                  <p className="text-white/70 text-sm">
                    Facilitated integration with healthcare provider workflows and clinical decision-making processes.
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
