 "use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
  {
    name: "Creative Health Care Insight",
    sector: "HealthTech / Workforce",
    exited: false,
    url: "https://mychci.com",
    blurb:
      "Cloud platform for competency and professional portfolio suites aligned to ANCC requirements.",
  },
  {
    name: "Clarity Behavioural Health",
    sector: "Behavioral Health",
    exited: false,
    url: "https://claritybhs.com",
    blurb:
      "Personalized treatment and relaxation content for in‑patient behavioral health centers.",
  },
  {
    name: "Time Miner",
    sector: "LegalTech",
    exited: false,
    url: "https://timeminer.com",
    blurb:
      "Retroactive time capture for calls, texts, and email; exports entries to Clio and more.",
  },
  {
    name: "Tempo (Formerly Kalatech)",
    sector: "SaaS / Media",
    exited: false,
    url: "https://www.yourtempo.com",
    blurb:
      "Business solutions for agencies, tour managers, publishers, buyers, and crew in the music industry.",
  },
  {
    name: "Compass",
    sector: "HealthTech / Ortho",
    exited: false,
    url: null,
    blurb:
      "Orthopedic scheduling and reporting platform capturing procedure data, logistics, and compliance.",
  },
  { name: "CoreCommerce", sector: "eCommerce", exited: true, url: null, blurb: "eCommerce platform." },
  {
    name: "Clearly Legal",
    sector: "LegalTech / EdTech",
    exited: false,
    url: "https://clearly.legal",
    blurb:
      "CLE‑by‑podcast microlearning with automatic credit tracking and reporting.",
  },
  {
    name: "TheraVista Health",
    sector: "HealthTech",
    exited: false,
    url: "https://theravista.health",
    blurb:
      "Remote Therapeutic Monitoring focused on vestibular rehabilitation.",
  },
  {
    name: "HopDoc",
    sector: "HealthTech",
    exited: false,
    url: "https://www.hopdoc.com",
    blurb:
      "Digital front‑door and engagement toolbox for clinics and providers.",
  },
  {
    name: "5 Star Finds",
    sector: "Retail / eCommerce",
    exited: false,
    url: "https://www.5ivestarfinds.com",
    blurb:
      "Overstock and liquidation retail with a community‑first experience in Hendersonville, TN.",
  },
  {
    name: "Plankk",
    sector: "Fitness / Creator",
    exited: false,
    url: "https://plankk.com",
    blurb:
      "Health & fitness platform connecting users with creators and personalized programs.",
  },
  { name: "MaxxContent", sector: "Media / Digital", exited: true, url: null, blurb: "Digital media/marketing venture." },
  { name: "OtherLeft", sector: "Technology / Services", exited: true, url: null, blurb: "Technology/services venture." },
];

const filters = ["All", "Active", "Exit"] as const;

type Status = typeof filters[number];

export default function KernelPortfolioPage() {
  const [status, setStatus] = useState<Status>("All");
  const list = useMemo(
    () => partners.filter((p) => {
      if (status === "All") return true;
      if (status === "Active") return !p.exited;
      if (status === "Exit") return p.exited;
      return true;
    }),
    [status]
  );

  return (
    <div className="min-h-screen">
      {/* Page header removed; using global Header */}

      {/* Hero */}
      <section id="top" className="relative">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative py-14 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[color:var(--sage-400)] via-[color:var(--fern-green-500)] to-white bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="mt-3 mx-auto max-w-2xl text-base sm:text-lg text-white/80">
              Builders, operators, and creators across healthcare, legal, enterprise software, and community ventures.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Grid */}
      <section className="text-[color:var(--brunswick-green-400)] py-6">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((p: { name: string; sector: string; exited: boolean; blurb: string; url?: string | null }) => (
              <article
                key={p.name}
                className="
                  relative group transition-colors
                  bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm
                "
                tabIndex={p.exited ? 0 : -1}
              >
                <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-[9rem,1fr]">
                  {/* Logo column — fixed aspect to prevent CLS */}
                  <div className="relative rounded-2xl bg-white ring-1 ring-black/5">
                    <div className="aspect-[3/2] flex items-center justify-center p-3">
                      <Logo name={p.name} mode="inline" className="max-h-full max-w-full object-contain" />
                    </div>
                  </div>
                  {/* Content column */}
                  <div className="flex min-w-0 flex-col min-h-[10rem]">
                    {/* top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-snug text-[color:var(--sage-400)] line-clamp-2">
                          {p.name}
                        </h3>
                        <div className="mt-0.5 text-[11px] uppercase tracking-wide text-[color:var(--sage-400)]">
                          {p.sector}
                        </div>
                      </div>
                    </div>
                    {/* description */}
                    <p className="mt-3 text-sm text-[color:var(--timberwolf-600)]">{p.blurb}</p>
                    {/* bottom row */}
                    <div className="mt-auto flex items-center justify-between pt-4">
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-[color:var(--sage-400)] hover:text-[color:var(--timberwolf-600)] transition-colors"
                        >
                          Visit site →
                        </a>
                      ) : (
                        <span className="text-sm text-[color:var(--timberwolf-700)]">No public site listed</span>
                      )}
                      <Link
                        href={`/portfolio/${p.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace('formerly-', '').replace('kalatech', '').replace(/-+$/, '')}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sage-500)] px-4 py-2 text-sm font-semibold text-[color:var(--hunter-green-100)] hover:bg-[color:var(--sage-600)] active:bg-[color:var(--sage-400)] transition-[color,background,transform] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--sage-400)]"
                        aria-label={`Learn more about ${p.name}`}
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* EXIT overlay — only for exited items */}
                {p.exited && (
                  <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                    <div className="absolute inset-0 rounded-2xl bg-red-500/10 ring-1 ring-inset ring-red-500/40" />
                    <div
                      className="select-none rounded-md bg-red-600/90 px-10 py-3 text-4xl font-extrabold uppercase tracking-widest text-white"
                      style={{ transform: "rotate(-20deg)" }}
                    >
                      EXIT
                    </div>
                  </div>
                )}
              </article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Removed CTA: Are we missing a partner? */}

      {/* Page-specific footer removed; global footer is rendered via layout */}
      </div>
    );
  }
