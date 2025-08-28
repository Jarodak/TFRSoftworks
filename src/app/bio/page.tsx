'use client';
// Delete this chatgpt

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function Bio() {
  return (
    <div className="min-h-screen">
      {/* Page header removed; using global Header */}

      {/* Bio Content */}
      <main className="text-[color:var(--brunswick-green-400)] py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
              <div className="text-[color:var(--sage-400)]"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">
                Our Story
              </span>
            </h1>

            <div className="space-y-12">
              {/* Technology Roots */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Technology Roots
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed">
                  Kernel Equity has deep roots in technology. DevDigital has been developing websites, apps, infrastructure and hosting services for ten years in Nashville. By helping many young companies build their technology platform without fueling high burn rates, Dev&apos;s experience and efficiency allowed them to learn and pivot before their money ran out.
                </p>
              </motion.section>

              {/* Smart Money Fails */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Smart Money Fails, Mostly
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed">
                  People talk about the importance of getting smart money, equity partners who bring money, past successes, have experience in your industry, and have connections. These can be valuable assets. For most young companies, they aren&apos;t an option. Many of these companies are in Silicon Valley, and getting on their radar from Nashville is no small task. If you are lucky enough to be backed by them, your chances of success will still be less than 25%, according to research by Shikhar Ghosh, a senior lecturer at Harvard Business School.
                </p>
              </motion.section>

              {/* Focus on the Kernel */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Focus on the Kernel
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed mb-6">
                  At Kernel we believe too much emphasis is paid to &apos;raising money.&apos; When investment funding becomes the scorecard, as it often does, an important balance is lost. Clay Christensen admonishes &ldquo;be patient for growth, but impatient for profits.&rdquo; With very few exceptions, this is the smart path. Too much funding can be as harmful as too little.
                </p>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed">
                  Using bottom-up street smarts and top-down strategic thinking, we help our clients seek a breakeven quickly, find the core value (the Kernel) for customers, craft a solid business model, and yes, develop a compelling technology platform. This balanced breakthrough approach gives them more confidence and leverage to get the smart money and better utilize it.
                </p>
              </motion.section>

              {/* Kernel - An Equity Firm */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative overflow-hidden text-center bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Kernel – An Equity Firm, Not Just a Fund
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed">
                  We&apos;re partners in your journey, not just investors in your outcome.
                </p>
              </motion.section>
            </div>

            {/* Removed CTA: Start a Conversation */}
          </motion.div>
        </Container>
      </main>
    </div>
  );
}
