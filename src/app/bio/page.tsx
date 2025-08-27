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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--charcoal-1)]/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <Image src="/header-logo.png" alt="Kernel Equity" width={200} height={48} priority className="h-10 w-auto md:h-12" />
            </Link>
            <nav className="hidden items-center justify-center gap-8 md:flex flex-1">
              <Link href="/bio" className="text-sm font-medium text-[color:var(--sage-400)] hover:text-[color:var(--timberwolf-600)]">
                Bio
              </Link>
              <Link href="/team" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Team
              </Link>
              <Link href="/portfolio" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Portfolio
              </Link>
              <Link href="/bio" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Contact
              </Link>
            </nav>
          </div>
        </Container>
      </header>

      {/* Bio Content */}
      <main className="bg-[color:var(--charcoal-1)] text-[color:var(--brunswick-green-400)] py-20">
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
                className="rounded-2xl bg-[color:var(--charcoal-1)] p-8 ring-1 ring-[color:var(--sage-400)]/30 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Technology Roots
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed">
                  Kernel Equity has deep roots in technology. DevDigital has been developing websites, apps, infrastructure and hosting services for ten years in Nashville. By helping many young companies build their technology platform without fueling high burn rates, Dev's experience and efficiency allowed them to learn and pivot before their money ran out.
                </p>
              </motion.section>

              {/* Smart Money Fails */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl bg-[color:var(--charcoal-1)] p-8 ring-1 ring-[color:var(--sage-400)]/30 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Smart Money Fails, Mostly
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed">
                  People talk about the importance of getting smart money, equity partners who bring money, past successes, have experience in your industry, and have connections. These can be valuable assets. For most young companies, they aren't an option. Many of these companies are in Silicon Valley, and getting on their radar from Nashville is no small task. If you are lucky enough to be backed by them, your chances of success will still be less than 25%, according to research by Shikhar Ghosh, a senior lecturer at Harvard Business School.
                </p>
              </motion.section>

              {/* Focus on the Kernel */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl bg-[color:var(--charcoal-1)] p-8 ring-1 ring-[color:var(--sage-400)]/30 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Focus on the Kernel
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed mb-6">
                  At Kernel we believe too much emphasis is paid to 'raising money.' When investment funding becomes the scorecard, as it often does, an important balance is lost. Clay Christensen admonishes "be patient for growth, but impatient for profits." With very few exceptions, this is the smart path. Too much funding can be as harmful as too little.
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
                className="group relative overflow-hidden rounded-2xl bg-[color:var(--charcoal-1)] p-8 ring-1 ring-[color:var(--sage-400)]/30 backdrop-blur-sm text-center"
              >
                <h2 className="text-2xl font-bold mb-6 text-[color:var(--sage-400)]">
                  Kernel – An Equity Firm, Not Just a Fund
                </h2>
                <p className="text-lg text-[color:var(--timberwolf-600)] leading-relaxed">
                  We're partners in your journey, not just investors in your outcome.
                </p>
              </motion.section>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--sage-500)] px-8 py-4 text-lg font-semibold text-[color:var(--hunter-green-100)] transition hover:bg-[color:var(--fern-green-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sage-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </main>
    </div>
  );
}
