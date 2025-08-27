'use client';
import { useState } from "react";
import { motion } from "framer-motion";
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
  BookOpen,
  Briefcase,
  Lightbulb,
} from "lucide-react";

// --- Utility components ---
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white ring-1 ring-white/20 backdrop-blur">
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
      ? "bg-white text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-900"
      : "bg-transparent text-white ring-1 ring-white/40 hover:bg-white/10";
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

const portfolio = [
  {
    name: "Time Miner",
    tag: "LegalTech",
    blurb:
      "Retroactive time capture for calls, texts, and email with exports to Clio and more—recover lost revenue.",
  },
  {
    name: "Clearly Legal",
    tag: "LegalTech / EdTech",
    blurb:
      "CLE‑by‑podcast microlearning with automated credit tracking and jurisdictional reporting.",
  },
  {
    name: "Compass (Ortho)",
    tag: "HealthTech",
    blurb:
      "Surgical scheduling and expense oversight built for orthopedic practices and FDA‑compliant workflows.",
  },
  {
    name: "Tempo (Kalatech)",
    tag: "SaaS / Media",
    blurb:
      "Business solutions for agencies, publishers, and tour managers across the music industry.",
  },
  {
    name: "HopDoc",
    tag: "HealthTech",
    blurb:
      "Digital front‑door tools helping clinics modernize patient engagement and scheduling.",
  },
  {
    name: "Creative Healthcare Insight",
    tag: "HealthTech / Workforce",
    blurb:
      "Competency and portfolio solutions aligned to ANCC standards for large health organizations.",
  },
];

const resources = [
  {
    title: "Founder‑First Venture: Operating With Purpose",
    blurb: "How hands‑on partners accelerate time to traction without adding overhead.",
  },
  {
    title: "From MVP to PMF: A Practical Playbook",
    blurb: "Shaping product bets with real‑world feedback loops and guardrails.",
  },
  {
    title: "Scaling Efficiently: The Breakeven Mindset",
    blurb: "Why capital efficiency beats blitzscaling for most vertical SaaS.",
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
              <div className="relative">
                <button
                  className="text-sm font-medium text-white/80 hover:text-white"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  Solutions
                </button>
                {/* Mega dropdown */}
                {solutionsOpen && (
                  <div
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="absolute left-1/2 mt-3 w-[560px] -translate-x-1/2"
                  >
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
              <a className="text-sm font-medium text-white/80 hover:text-white" href="#portfolio">Portfolio</a>
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
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-white/5" href="#sectors" onClick={() => setMobileOpen(false)}>
                  Solutions
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-white/5" href="#approach" onClick={() => setMobileOpen(false)}>
                  Approach
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-white/5" href="#portfolio" onClick={() => setMobileOpen(false)}>
                  Portfolio
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-white/5" href="#resources" onClick={() => setMobileOpen(false)}>
                  Resources
                </a>
                <a className="block rounded-xl px-2 py-2 text-sm hover:bg-white/5" href="#about" onClick={() => setMobileOpen(false)}>
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
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(99,102,241,0.3),rgba(15,23,42,0))]" />
        <Container>
          <div className="relative grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Pill>Founder‑first venture • Nashville</Pill>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                Technology‑Powered Equity. <span className="text-indigo-300">Human‑Centered</span> Partnership.
              </h1>
              <p className="max-w-xl text-base text-white/80">
                We partner with exceptional founders to build durable, efficient companies. Our model blends hands‑on product development, smart capital, and go‑to‑market support to find—and scale—the <em>Kernel</em> of value.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton>
                  Get in touch <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton variant="secondary">Explore portfolio</CTAButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/40 to-blue-500/20 p-8 shadow-2xl ring-1 ring-white/10">
                <div className="mb-4 flex items-center gap-2 text-sm text-indigo-200">
                  <Shield className="h-4 w-4" /> Trusted Build‑Invest‑Scale Model
                </div>
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  <li className="rounded-2xl bg-white/5 p-4">
                    <div className="text-2xl font-bold">50%+</div>
                    <div className="text-white/70">Faster MVP cycles</div>
                  </li>
                  <li className="rounded-2xl bg-white/5 p-4">
                    <div className="text-2xl font-bold">Efficient</div>
                    <div className="text-white/70">Breakeven path focus</div>
                  </li>
                  <li className="rounded-2xl bg-white/5 p-4">
                    <div className="text-2xl font-bold">Hands‑on</div>
                    <div className="text-white/70">Product & GTM support</div>
                  </li>
                  <li className="rounded-2xl bg-white/5 p-4">
                    <div className="text-2xl font-bold">Aligned</div>
                    <div className="text-white/70">Founder‑first structures</div>
                  </li>
                </ul>
              </div>
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
                <div className="mb-3 text-indigo-200">{s.icon}</div>
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
                <div className="mb-3 text-indigo-200">{p.icon}</div>
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-1 text-sm text-white/70">{p.copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Portfolio Highlights</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                A sample of the companies we build with and back.
              </p>
            </div>
            <div className="hidden md:block">
              <CTAButton variant="secondary">View all</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <Card key={p.name}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{p.name}</div>
                    <div className="text-xs uppercase tracking-wide text-indigo-200">{p.tag}</div>
                  </div>
                  <div>
                    <ArrowRight className="h-5 w-5 text-white/60" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/70">{p.blurb}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources */}
      <section id="resources" className="border-t border-white/10 bg-slate-900/40 py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">Resources & Insights</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Practical guidance for founders building in complex, regulated, and vertical markets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {resources.map((r) => (
              <Card key={r.title}>
                <div className="text-lg font-semibold">{r.title}</div>
                <p className="mt-2 text-sm text-white/70">{r.blurb}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-200">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-blue-500/10 p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold">Ready to find your Kernel?</h3>
              <p className="mt-1 text-white/80">Let's explore how we can help you build, invest, and scale—together.</p>
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
                <li><a className="hover:text-white" href="#portfolio">Portfolio</a></li>
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
                  className="w-full rounded-2xl bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <button type="submit" className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-gray-900">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Kernel Equity. All rights reserved.</div>
        </Container>
      </footer>
    </div>
  );
}
