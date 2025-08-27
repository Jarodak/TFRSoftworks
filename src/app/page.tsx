'use client';

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  <span className="inline-flex items-center rounded-full bg-[color:var(--fern-green-800)] px-3 py-1 text-xs font-medium tracking-wide text-[color:var(--sage-300)] ring-1 ring-[color:var(--sage-400)] backdrop-blur">
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
      ? "bg-[color:var(--sage-500)] text-[color:var(--hunter-green-100)] hover:bg-[color:var(--fern-green-500)] focus-visible:ring-[color:var(--sage-400)]"
      : "bg-transparent text-[color:var(--sage-400)] ring-1 ring-[color:var(--sage-500)] hover:bg-[color:var(--fern-green-800)]";
  return <button className={`${base} ${styles}`} onClick={onClick}>{children}</button>;
};

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-3xl bg-[color:var(--charcoal-1)] p-6 ring-1 ring-[color:var(--sage-400)]/30 ${className}`}>{children}</div>
);

// Animated Kernel Logo Component
const AnimatedKernelLogo = ({ className = "" }: { className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Blurred green glow background */}
      <div className="absolute inset-0 bg-[color:var(--sage-500)] opacity-20 blur-3xl rounded-full scale-110" />
      
      {/* Stalk layer (bottom) */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/Kernel Stalk.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 400px"
          className="object-contain"
          loading="eager"
          priority
        />
      </motion.div>

      {/* Leaves layer (middle) */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.45,
          type: "spring" as const,
          stiffness: 120,
          damping: 12
        }}
      >
        <Image
          src="/Kernel Leaves.png"
          alt=""
          fill
          sizes="(max-width: 768px) 300px, 400px"
          className="object-contain"
          loading="eager"
          priority
        />
      </motion.div>

      {/* Core layer (top) */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.4, 
          delay: 0.9,
          type: "spring" as const,
          stiffness: 200,
          damping: 10
        }}
      >
        <Image
          src="/Kernel Core.png"
          alt="Kernel Logo"
          fill
          sizes="(max-width: 768px) 300px, 400px"
          className="object-contain"
          loading="eager"
          priority
        />
      </motion.div>

      {/* Floating animation wrapper */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -4, 0, 4, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      )}
    </motion.div>
  );
};

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
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen text-[color:var(--timberwolf-900)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--charcoal-1)]/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="#top" className="group inline-flex items-center gap-2">
              <Image src="/header-logo.png" alt="Kernel Equity" width={200} height={48} priority className="h-10 w-auto md:h-12" />
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden items-center justify-center gap-8 md:flex flex-1">
              <Link href="/bio" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Bio
              </Link>
              <Link href="/team" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Team
              </Link>
              <Link href="/portfolio" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-sm font-medium text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-600)]">
                Contact
              </Link>
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
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-[color:var(--asparagus-25)]" href="/bio" onClick={() => setMobileOpen(false)}>
                  Bio
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-[color:var(--asparagus-25)]" href="/team" onClick={() => setMobileOpen(false)}>
                  Team
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
      <section id="top" className="relative bg-gradient-to-b from-[color:var(--charcoal-2)] to-[color:var(--hunter-green-500)] overflow-visible md:overflow-hidden min-h-[70vh]">
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
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-[color:var(--charcoal-2)]/60" />
          {/* Bottom scrim to further lift foreground text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal-1)]/50 via-transparent to-transparent" />
        </div>
        <Container>
          <div className="relative z-10 py-8 md:py-28">
            {/* Mobile: Logo first, then fade and text slides in */}
            <div className="lg:hidden relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 3.5,
                  times: [0, 0.3, 0.8, 1],
                  ease: "easeInOut"
                }}
                className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10"
              >
                <AnimatedKernelLogo className="w-80 h-80" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.3 }}
                className="space-y-6 rounded-2xl bg-slate-950/35 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <Pill>Founder‑first venture • Nashville</Pill>
                <h1 className="text-balance text-pretty text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                  Build. Invest. Scale.
                  <span className="block break-words text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">Human-centered venture.</span>
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
                  <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal-1)] px-3 py-1 ring-1 ring-[color:var(--sage-400)]/30">
                    <Shield className="h-4 w-4 text-[color:var(--sage-400)]" /> Aligned with founders
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal-1)] px-3 py-1 ring-1 ring-[color:var(--sage-400)]/30">
                    <Rocket className="h-4 w-4 text-[color:var(--sage-400)]" /> Faster to MVP
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal-1)] px-3 py-1 ring-1 ring-[color:var(--sage-400)]/30">
                    <Handshake className="h-4 w-4 text-[color:var(--sage-400)]" /> Operator‑led support
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Desktop: Side-by-side layout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:grid grid-cols-2 gap-8 items-center rounded-2xl bg-slate-950/35 p-6 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <Pill>Founder‑first venture • Nashville</Pill>
                <h1 className="text-balance text-pretty text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Build. Invest. Scale.
                  <span className="block break-words text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">Human-centered venture.</span>
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
                  <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal-1)] px-3 py-1 ring-1 ring-[color:var(--sage-400)]/30">
                    <Shield className="h-4 w-4 text-[color:var(--sage-400)]" /> Aligned with founders
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal-1)] px-3 py-1 ring-1 ring-[color:var(--sage-400)]/30">
                    <Rocket className="h-4 w-4 text-[color:var(--sage-400)]" /> Faster to MVP
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--charcoal-1)] px-3 py-1 ring-1 ring-[color:var(--sage-400)]/30">
                    <Handshake className="h-4 w-4 text-[color:var(--sage-400)]" /> Operator‑led support
                  </li>
                </ul>
              </div>
              {/* Animated Kernel Logo inside the box */}
              <div className="flex items-center justify-center">
                <AnimatedKernelLogo className="w-full max-w-lg h-80 md:h-96" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Market Solutions - Dark Band */}
      <section id="sectors" className="bg-[color:var(--charcoal-1)] text-[color:var(--timberwolf-800)] py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[color:var(--sage-400)]">Market Focus</h2>
              <p className="mt-2 max-w-2xl text-[color:var(--timberwolf-600)]">
                Vertical expertise across healthcare, legal, enterprise SaaS, and the public sector.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <Card key={s.title}>
                <div className="mb-3 text-[color:var(--sage-400)]">{s.icon}</div>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-1 text-sm text-[color:var(--timberwolf-600)]">{s.copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach - Dark Band */}
      <section id="approach" className="bg-[color:var(--charcoal-1)] text-[color:var(--timberwolf-800)] py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[color:var(--sage-400)]">Our Approach</h2>
              <p className="mt-2 max-w-2xl text-[color:var(--timberwolf-600)]">
                We combine engineering, capital, and operating experience to turn focus into traction.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Card key={p.title}>
                <div className="mb-3 text-[color:var(--sage-400)]">{p.icon}</div>
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-1 text-sm text-[color:var(--timberwolf-600)]">{p.copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[color:var(--charcoal-1)] ring-1 ring-[color:var(--sage-400)]/30 p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-[color:var(--sage-400)]">Ready to find your Kernel?</h3>
              <p className="mt-1 text-[color:var(--timberwolf-600)]">Let&#39;s explore how we can help you build, invest, and scale—together.</p>
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
                  className="w-full rounded-2xl bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--sage-400)]"
                  required
                />
                <a
                href="#contact"
                className="rounded-2xl bg-[color:var(--sage-500)] px-6 py-3 text-sm font-semibold text-[color:var(--hunter-green-100)] transition-colors hover:bg-[color:var(--timberwolf-600)]"
              >
                Start a conversation
              </a>
              </form>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-white/50"> {new Date().getFullYear()} Kernel Equity. All rights reserved.</div>
        </Container>
      </footer>
    </div>
  );
}
