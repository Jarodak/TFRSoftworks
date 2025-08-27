"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Filter, Boxes } from "lucide-react";

// Local Container (mirrors Home page container)
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const partners = [
  // --- Active ---
  {
    name: "Compass",
    sector: "HealthTech / Ortho",
    status: "Active",
    url: null,
    blurb:
      "Orthopedic scheduling and reporting platform capturing procedure data, logistics, and compliance.",
  },
  {
    name: "Tempo (Formerly Kalatech)",
    sector: "SaaS / Media",
    status: "Active",
    url: "https://www.yourtempo.com",
    blurb:
      "Business solutions for agencies, tour managers, publishers, buyers, and crew in the music industry.",
  },
  {
    name: "HopDoc",
    sector: "HealthTech",
    status: "Active",
    url: "https://www.hopdoc.com",
    blurb:
      "Digital front‑door and engagement toolbox for clinics and providers.",
  },
  {
    name: "Time Miner",
    sector: "LegalTech",
    status: "Active",
    url: "https://timeminer.com",
    blurb:
      "Retroactive time capture for calls, texts, and email; exports entries to Clio and more.",
  },
  {
    name: "Plankk",
    sector: "Fitness / Creator",
    status: "Active",
    url: "https://plankk.com",
    blurb:
      "Health & fitness platform connecting users with creators and personalized programs.",
  },
  {
    name: "TheraVista Health",
    sector: "HealthTech",
    status: "Active",
    url: "https://theravista.health",
    blurb:
      "Remote Therapeutic Monitoring focused on vestibular rehabilitation.",
  },
  {
    name: "Clarity Behavioural Health",
    sector: "Behavioral Health",
    status: "Active",
    url: "https://claritybhs.com",
    blurb:
      "Personalized treatment and relaxation content for in‑patient behavioral health centers.",
  },
  {
    name: "5 Star Finds",
    sector: "Retail / eCommerce",
    status: "Active",
    url: "https://www.5ivestarfinds.com",
    blurb:
      "Overstock and liquidation retail with a community‑first experience in Hendersonville, TN.",
  },
  {
    name: "Clearly Legal",
    sector: "LegalTech / EdTech",
    status: "Active",
    url: "https://clearly.legal",
    blurb:
      "CLE‑by‑podcast microlearning with automatic credit tracking and reporting.",
  },
  {
    name: "Creative Health Care Insight",
    sector: "HealthTech / Workforce",
    status: "Active",
    url: "https://mychci.com",
    blurb:
      "Cloud platform for competency and professional portfolio suites aligned to ANCC requirements.",
  },
  // --- Exits ---
  { name: "MaxxContent", sector: "Media / Digital", status: "Exit", url: null, blurb: "Digital media/marketing venture (exited)." },
  { name: "CoreCommerce", sector: "eCommerce", status: "Exit", url: null, blurb: "eCommerce platform (exited)." },
  { name: "OtherLeft", sector: "Technology / Services", status: "Exit", url: null, blurb: "Technology/services venture (exited)." },
];

const filters = ["All", "Active", "Exit"] as const;

type Status = typeof filters[number];

export default function KernelPortfolioPage() {
  const [status, setStatus] = useState<Status>("All");
  const list = useMemo(
    () => partners.filter((p) => (status === "All" ? true : p.status === status)),
    [status]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <Boxes className="h-6 w-6 text-[color:var(--yellow-green)]" />
              <span className="text-base font-bold tracking-wide">Kernel Equity</span>
            </Link>
            <div className="flex items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setStatus(f)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm ring-1 ring-white/15 transition ${
                    status === f
                      ? "bg-[color:var(--yellow-green)] text-slate-900"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  {f === "All" && <Filter className="h-4 w-4" />}
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,var(--asparagus-25),rgba(15,23,42,0))]" />
        <Container>
          <div className="relative py-16">
            <h1 className="text-4xl font-extrabold">Our Portfolio</h1>
            <p className="mt-3 max-w-2xl text-white/80">
              Builders, operators, and creators across healthcare, legal, enterprise software, and community ventures.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-6">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, idx) => (
              <motion.div
                key={`${p.name}-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">{p.name}</div>
                    <div className="text-xs uppercase tracking-wide text-[color:var(--yellow-green)]">{p.sector}</div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                      p.status === "Active"
                        ? "bg-[color:var(--asparagus-25)] text-[color:var(--yellow-green)] ring-1 ring-[color:var(--yellow-green-60)]"
                        : "bg-white/10 text-white/80 ring-1 ring-white/20"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/80">{p.blurb}</p>
                <div className="mt-4 flex items-center justify-between">
                  {p.url ? (
                    <a
                      href={p.url}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--yellow-green)] hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-sm text-white/50">No public site listed</span>
                  )}
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--yellow-green)] px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-[color:var(--asparagus)]">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--asparagus-25)] to-[var(--yellow-green-60)] p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold">Are we missing a partner?</h3>
              <p className="mt-1 text-white/80">Send updates and new logos. We&#39;ll refresh this page as your ecosystem grows.</p>
            </div>
            <div>
              <a href="mailto:hello@kernelequity.com" className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--yellow-green)] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-[color:var(--asparagus)]">
                Email updates <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer (lite) */}
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <Container>
          <div className="text-center text-xs text-white/60">© {new Date().getFullYear()} Kernel Equity. All rights reserved.</div>
        </Container>
      </footer>
    </div>
  );
}
