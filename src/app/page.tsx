'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
  Handshake,
  LineChart,
  Shield,
  Building2,
  ArrowRight,
  Menu,
  X,
  Boxes,
  Target,
  Users,
  Briefcase,
} from "lucide-react";

// --- Utility components ---
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-[color:var(--asparagus-25)] px-3 py-1 text-xs font-medium tracking-wide text-[color:var(--yellow-green)] ring-1 ring-[color:var(--yellow-green-60)] backdrop-blur">
    {children}
  </span>
);

const CTAButton = ({ 
  children, 
  variant = "primary",
  onClick
}: { 
  children: React.ReactNode, 
  variant?: "primary" | "secondary",
  onClick?: () => void
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--yellow-green)] text-slate-900 hover:bg-[color:var(--asparagus)] focus-visible:ring-[color:var(--yellow-green)]"
      : "bg-transparent text-[color:var(--yellow-green)] ring-1 ring-[color:var(--yellow-green)] hover:bg-[color:var(--asparagus-25)]";
  return <button className={`${base} ${styles}`} onClick={onClick}>{children}</button>;
};

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 ${className}`}>{children}</div>
);

// --- Data ---
const sectors = [
  {
    icon: <Shield className="h-6 w-6" aria-hidden />,
    title: "HealthTech",
    copy:
      "Clinical operations, remote monitoring, and competency platforms that improve outcomes and compliance.",
  },
  {
    icon: <Briefcase className="h-6 w-6" aria-hidden />,
    title: "LegalTech",
    copy:
      "Workflow, billing automation, and learning tools for modern practices and bar organizations.",
  },
  {
    icon: <Building2 className="h-6 w-6" aria-hidden />,
    title: "SaaS / Enterprise",
    copy:
      "Software products that scale—from scheduling engines to vertical CRMs and portfolio analytics.",
  },
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Public & Community",
    copy:
      "Civic, justice, and education solutions that serve mission‑critical institutions and their users.",
  },
];

const pillars = [
  {
    icon: <Rocket className="h-6 w-6" aria-hidden />,
    title: "Build",
    copy: "Fast, high‑quality product engineering with pragmatic roadmaps and rapid release cycles.",
  },
  {
    icon: <Handshake className="h-6 w-6" aria-hidden />,
    title: "Invest",
    copy: "Smart capital plus operational support—founder‑first structures and aligned incentives.",
  },
  {
    icon: <LineChart className="h-6 w-6" aria-hidden />,
    title: "Scale",
    copy: "Go‑to‑market, sales enablement, and partnerships to reach breakeven efficiently.",
  },
  {
    icon: <Target className="h-6 w-6" aria-hidden />,
    title: "Focus",
    copy: "Find the Kernel—clarify the core value, prioritize, and eliminate noise.",
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="#top" className="group inline-flex items-center gap-2">
              <Boxes className="h-6 w-6 text-white transition group-hover:scale-110" />
              <span className="text-base font-bold tracking-wide">Kernel Equity</span>
            </a>
            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className="text-sm font-medium text-white/80 hover:text-white"
                  aria-expanded={solutionsOpen}
                >
                  Solutions
                </button>
                {/* Hover bridge to prevent accidental close when moving cursor */}
                {solutionsOpen && (
                  <div className="absolute left-0 right-0 top-full h-3" />
                )}
                {/* Mega dropdown */}
                {solutionsOpen && (
                  <div className="absolute left-1/2 mt-3 w-[560px] -translate-x-1/2">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
                      <div className="grid grid-cols-2 gap-4">
                        {sectors.map((s) => (
                          <a
                            key={s.title}
                            href={`#sectors`}
                            className="group rounded-2xl p-4 transition hover:bg-white/5"
                            onClick={() => setSolutionsOpen(false)}
                          >
                            <div className="mb-2 text-white/90">{s.icon}</div>
                            <div className="text-sm font-semibold text-white">{s.title}</div>
                            <p className="mt-1 text-xs text-white/70">{s.copy}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a className="text-sm font-medium text-white/80 hover:text-white" href="#approach">Approach</a>
              <a className="text-sm font-medium text-white/80 hover:text-white" href="/portfolio">Portfolio</a>
              <a className="text-sm font-medium text-white/80 hover:text-white" href="#resources">Resources</a>
              <a className="text-sm font-medium text-white/80 hover:text-white" href="#about">About</a>
            </nav>
            <div className="hidden md:block">
              <CTAButton>
                Talk to us <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </div>

            {/* Mobile */}
            <button
              className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/20 md:hidden"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Panel */}
          {mobileOpen && (
            <div className="md:hidden">
              <div className="space-y-2 border-t border-white/10 py-4">
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-[color:var(--asparagus-25)]" href="#sectors" onClick={() => setMobileOpen(false)}>
                  Solutions
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-[color:var(--asparagus-25)]" href="#approach" onClick={() => setMobileOpen(false)}>
                  Approach
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-[color:var(--asparagus-25)]" href="/portfolio" onClick={() => setMobileOpen(false)}>
                  Portfolio
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-[color:var(--asparagus-25)]" href="#resources" onClick={() => setMobileOpen(false)}>
                  Resources
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-[color:var(--asparagus-25)]" href="#about" onClick={() => setMobileOpen(false)}>
                  About
                </a>
                <div className="pt-2">
                  <CTAButton>Talk to us</CTAButton>
                </div>
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden min-h-[70vh]">
        {/* Background banner image */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
          <Image
            src="/banner.jpg"
            alt="Nashville skyline"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          {/* Dark/brand overlay for text contrast */}
          <div className="absolute inset-0 bg-slate-950/60" />
          {/* Bottom scrim to further lift foreground text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_60%_at_50%_20%,var(--asparagus-25),rgba(15,23,42,0))]" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 rounded-2xl bg-slate-950/35 p-6 ring-1 ring-white/10 backdrop-blur-sm md:bg-slate-950/25"
            >
              <Pill>Founder‑first venture • Nashville</Pill>
              <h1 className="text-balance text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
                Build. Invest. Scale.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-green)] to-[var(--parchment)]">Human‑centered venture.</span>
              </h1>
              <p className="max-w-2xl text-lg text-white/90">
                We back exceptional founders and help ship faster—from zero to traction—with product engineering, smart capital, and GTM support.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton>
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <a href="/portfolio">
                  <CTAButton variant="secondary">Explore portfolio</CTAButton>
                </a>
              </div>
              <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--asparagus-25)] px-3 py-1 ring-1 ring-[color:var(--yellow-green-60)]">
                  <Shield className="h-4 w-4 text-[color:var(--yellow-green)]" /> Aligned with founders
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--asparagus-25)] px-3 py-1 ring-1 ring-[color:var(--yellow-green-60)]">
                  <Rocket className="h-4 w-4 text-[color:var(--yellow-green)]" /> Faster to MVP
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--asparagus-25)] px-3 py-1 ring-1 ring-[color:var(--yellow-green-60)]">
                  <Handshake className="h-4 w-4 text-[color:var(--yellow-green)]" /> Operator‑led support
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Market Solutions</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Vertical expertise across healthcare, legal, enterprise SaaS, and the public sector.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <Card key={s.title}>
                <div className="mb-3 text-[color:var(--yellow-green)]">{s.icon}</div>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-1 text-sm text-white/70">{s.copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-white/10 bg-slate-900/40 py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Our Approach</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                We combine engineering, capital, and operating experience to turn focus into traction.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Card key={p.title}>
                <div className="mb-3 text-[color:var(--yellow-green)]">{p.icon}</div>
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-1 text-sm text-white/70">{p.copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--asparagus-25)] to-[var(--yellow-green-60)] p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold">Ready to find your Kernel?</h3>
              <p className="mt-1 text-white/80">Let&#39;s explore how we can help you build, invest, and scale—together.</p>
            </div>
            <div className="flex gap-3">
              <CTAButton>
                Start a conversation <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton variant="secondary">See our approach</CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer id="about" className="mt-10 border-t border-white/10 bg-slate-950/80 py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2">
                <Boxes className="h-5 w-5" />
                <span className="text-sm font-bold">Kernel Equity</span>
              </div>
              <p className="text-sm text-white/70">
                Software‑driven, human‑powered. We back founders at the intersection of technology and real‑world impact.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Explore</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="#sectors">Solutions</a></li>
                <li><a className="hover:text-white" href="#approach">Approach</a></li>
                <li><a className="hover:text-white" href="/portfolio">Portfolio</a></li>
                <li><a className="hover:text-white" href="#resources">Resources</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>Nashville, Tennessee</li>
                <li><a className="hover:text-white" href="mailto:hello@kernelequity.com">hello@kernelequity.com</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Newsletter</div>
              <p className="mt-3 text-sm text-white/70">Monthly founder notes and vertical insights.</p>
              <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-2xl bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--yellow-green)]"
                  required
                />
                <button type="submit" className="rounded-2xl bg-[color:var(--yellow-green)] px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-[color:var(--asparagus)]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-white/50"> {new Date().getFullYear()} Kernel Equity. All rights reserved.</div>
        </Container>
      </footer>
    </div>
  );
}
