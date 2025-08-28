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
  <span className="inline-flex items-center rounded-full bg-[color:var(--charcoal-1)] px-3 py-1 text-xs font-medium tracking-wide text-white/90 ring-1 ring-[color:var(--sage-400)]/30 backdrop-blur">
    {children}
  </span>
);

const CTAButton = ({
  children,
  href = "/contact",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[color,background,transform] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--sage-500)] text-[color:var(--hunter-green-100)] hover:bg-[color:var(--sage-600)] active:bg-[color:var(--sage-400)] focus-visible:ring-[color:var(--sage-400)]"
      : "bg-transparent text-[color:var(--sage-400)] ring-1 ring-[color:var(--sage-500)] hover:bg-white/5";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm ${className}`}>{children}</div>
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
      {/* Page header removed; using global Header */}

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
                  <CTAButton href="/contact">
                    Start a conversation <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                  <CTAButton href="/portfolio" variant="secondary">Explore portfolio</CTAButton>
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
                  <CTAButton href="/contact">
                    Start a conversation <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                  <CTAButton href="/portfolio" variant="secondary">Explore portfolio</CTAButton>
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
      <section id="sectors" className="text-[color:var(--timberwolf-800)] py-20">
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

      {/* About Us */}
      <section id="about" className="text-[color:var(--timberwolf-800)] py-20">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[color:var(--sage-400)]">About Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 items-start">
            {/* Left: Image */}
            <div>
              <div className="overflow-hidden rounded-xl shadow-lg shadow-black/20">
                <Image
                  src="/about-us.jpg"
                  alt="About Kernel Equity"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            {/* Right: Copy */}
            <div className="flex items-center">
              <div className="space-y-4">
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed">
                  As Nashville grows and evolves, so does DevDigital/Kernel Equity. Kernel (launched in early 2017) celebrates the key role technology plays in innovation. We try to embody the overlap where technology and innovation create, develop and deliver ‘what’s next.’
                </p>
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed">
                  Whether you are a small company trying to break through the clutter, an investor looking for the next great idea, or an advisor helping companies reach their potential, think of Kernel.
                </p>
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed">
                  We are known for fast, high-quality, low-cost technology development. We also bring strategy insights, street smarts and sales help as appropriate. Our leaders have been around the block. We eagerly team with founders, VCs and Private Equity, academia, innovation centers, design thinkers, makers, agile and lean facilitators, branding gurus, etc.
                </p>
                <p className="text-[color:var(--timberwolf-600)] leading-relaxed">
                  If you want to work hard, you know what you are great at (and not), and you are fun to be around, we want to meet you. Let’s find a way to work together on a newsworthy cause. Maybe, instead of watching Nashville’s growth, we can be a catalyst for it.
                </p>
                <p className="text-[color:var(--sage-400)] leading-relaxed font-semibold">
                  Kernel – an equity firm, not just a fund
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach - Dark Band */}
      <section id="approach" className="text-[color:var(--timberwolf-800)] py-20">
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
          <div className="flex flex-col items-center justify-between gap-6 p-8 text-center md:flex-row md:text-left bg-slate-950/35 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm">
            <div>
              <h3 className="text-2xl font-bold text-[color:var(--sage-400)]">Ready to find your Kernel?</h3>
              <p className="mt-1 text-[color:var(--timberwolf-600)]">Let&#39;s explore how we can help you build, invest, and scale—together.</p>
            </div>
            <div className="flex gap-3">
              <CTAButton href="/contact">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="/bio" variant="secondary">See our story</CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      {/* Footer moved to global layout */}
      </div>
    );
  }
