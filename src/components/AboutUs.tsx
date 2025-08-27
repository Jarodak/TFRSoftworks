import { motion, useReducedMotion } from "framer-motion";

export default function AboutUs() {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 16 };
  const animate = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section id="about-us" className="bg-[color:var(--timberwolf-800)] text-[color:var(--hunter-green-500)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-sm font-semibold tracking-wider text-[color:var(--fern-green-600)]">
            ABOUT US
          </h2>

          <div className="mt-3 space-y-4 text-base leading-relaxed text-[color:var(--timberwolf-600)]">
            <p>
              As Nashville grows and evolves, so does DevDigital/Kernel Equity.
              Kernel (launched in early 2017) celebrates the key role technology
              plays in innovation. We try to embody the overlap where technology
              and innovation create, develop and deliver "what's next."
            </p>
            <p>
              Whether you are a small company trying to break through the
              clutter, an investor looking for the next great idea, or an
              advisor helping companies reach their potential, think of Kernel.
            </p>
            <p>
              We are known for fast, high-quality, low-cost technology
              development. We also bring strategy insights, street smarts and
              sales help as appropriate. Our leaders have been around the block.
              We eagerly team with founders, VCs and Private Equity, academia,
              innovation centers, design thinkers, makers, agile and lean
              facilitators, branding gurus, etc.
            </p>
            <p>
              If you want to work hard, you know what you are great at (and
              not), and you are fun to deal with, we want to meet you. Let's
              find a way to work together on a newsworthy cause. Maybe, instead
              of watching Nashville's growth, we can be a catalyst for it.
            </p>

            <p className="font-semibold text-[color:var(--sage-400)]">
              Kernel – an equity firm, not just a fund
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl bg-[color:var(--fern-green-500)] px-5 py-3 text-sm font-semibold text-[color:var(--timberwolf-900)] hover:bg-[color:var(--sage-500)] hover:text-[color:var(--hunter-green-100)] transition-colors"
            >
              Start a conversation
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center rounded-2xl bg-transparent px-5 py-3 text-sm font-semibold text-[color:var(--timberwolf-600)] ring-1 ring-[color:var(--fern-green-400)] hover:bg-[color:var(--fern-green-800)] transition-colors"
            >
              Explore portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
