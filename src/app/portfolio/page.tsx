"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Filter, Boxes } from "lucide-react";

// Local Container (mirrors Home page container)
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

// Logo component: explicit map to public assets, then attempts multiple extensions and locations, with fallback
const logoMap: Record<string, string> = {
  "Compass": "/Compass.png",
  "Tempo (Formerly Kalatech)": "/Tempo.png",
  "HopDoc": "/HopDoc.png",
  "Time Miner": "/TimeMiner.png",
  "Plankk": "/Plankk.png",
  "TheraVista Health": "/Theravista.jpg",
  "Clarity Behavioural Health": "/Clarity.png",
  "5 Star Finds": "/5StarFinds.png",
  "Clearly Legal": "/Clearly.png",
  "Creative Health Care Insight": "/CreativeHealthcare.png",
  "MaxxContent": "/Maxxcontent.png",
  "CoreCommerce": "/CoreCommerce.png",
  "OtherLeft": "/Otherleft.png",
};
const exts = ["png", "svg", "webp", "jpg", "jpeg"] as const;
const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/\(([^)]+)\)/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

function Logo({ name, mode = "inline", className = "" }: { name: string; mode?: "inline" | "fill"; className?: string }) {
  const explicit = logoMap[name];
  const slug = toSlug(name);
  const [extI, setExtI] = useState(0);
  const [baseI, setBaseI] = useState(0);
  const [usedExplicit, setUsedExplicit] = useState(!!explicit);
  const [failed, setFailed] = useState(false);
  const bases = [`/logos/${slug}`, `/${slug}`];
  const src = usedExplicit && explicit ? explicit : `${bases[baseI]}.${exts[extI]}`;

  if (failed) {
    const initials = name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
    return mode === "fill" ? (
      <div className="flex h-full w-full items-center justify-center">
        <div className="inline-flex items-center justify-center rounded-md bg-white/10 px-3 py-1 text-sm font-semibold tracking-wide text-white/80 ring-1 ring-white/15">
          {initials}
        </div>
      </div>
    ) : (
      <div className="inline-flex h-8 items-center justify-center rounded-md bg-white/10 px-2 text-xs font-semibold tracking-wide text-white/80 ring-1 ring-white/15">
        {initials}
      </div>
    );
  }

  return mode === "fill" ? (
    <Image
      src={src}
      alt={`${name} logo`}
      fill
      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
      className={`object-contain opacity-90 ${className}`}
      onError={() => {
        if (usedExplicit) {
          // Switch to fallback search strategy
          setUsedExplicit(false);
          setExtI(0);
          setBaseI(0);
          return;
        }
        if (extI < exts.length - 1) setExtI(extI + 1);
        else if (baseI < bases.length - 1) {
          setExtI(0);
          setBaseI(baseI + 1);
        } else setFailed(true);
      }}
      priority={false}
    />
  ) : (
    <Image
      src={src}
      alt={`${name} logo`}
      width={320}
      height={120}
      className={`opacity-90 ${className}`}
      onError={() => {
        if (usedExplicit) {
          setUsedExplicit(false);
          setExtI(0);
          setBaseI(0);
          return;
        }
        if (extI < exts.length - 1) setExtI(extI + 1);
        else if (baseI < bases.length - 1) {
          setExtI(0);
          setBaseI(baseI + 1);
        } else setFailed(true);
      }}
      priority={false}
    />
  );
}

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
              <Image src="/header-logo.png" alt="Kernel Equity" width={200} height={48} priority className="h-10 w-auto md:h-12" />
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
          <div className="relative py-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[color:var(--yellow-green)] via-[color:var(--asparagus)] to-white bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-white/80">
              Builders, operators, and creators across healthcare, legal, enterprise software, and community ventures.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-6">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, idx) => (
              <motion.div
                key={`${p.name}-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className="h-full min-h-[220px] rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:ring-[color:var(--yellow-green-60)]"
              >
                <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-[9rem,1fr]">
                  {/* Logo column — single centered canvas */}
                  <div className="flex items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-black/5">
                    <Logo name={p.name} mode="inline" className="h-28 sm:h-32 w-auto object-contain" />
                  </div>
                  {/* Content column */}
                  <div className="flex min-w-0 flex-col min-h-[10rem]">
                    {/* top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-snug text-white line-clamp-2">{p.name}</h3>
                        <div className="mt-0.5 text-[11px] uppercase tracking-wide text-[color:var(--yellow-green)]">{p.sector}</div>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          p.status === "Active"
                            ? "bg-[color:var(--yellow-green-60)]/20 text-[color:var(--parchment)] ring-1 ring-[color:var(--yellow-green-60)]/30"
                            : "bg-white/10 text-white/80 ring-1 ring-white/20"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    {/* description */}
                    <p className="mt-2 line-clamp-2 text-sm text-white/70">{p.blurb}</p>
                    {/* actions pinned to bottom */}
                    <div className="mt-auto flex items-center justify-between pt-3">
                      {p.url ? (
                        <a href={p.url} className="text-sm font-medium text-[color:var(--yellow-green)] hover:text-white" target="_blank" rel="noopener noreferrer">
                          Visit site →
                        </a>
                      ) : (
                        <span className="text-sm text-white/50">No public site listed</span>
                      )}
                      <button className="rounded-2xl bg-[color:var(--yellow-green)] px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-[color:var(--asparagus)]">
                        Learn more →
                      </button>
                    </div>
                  </div>
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
