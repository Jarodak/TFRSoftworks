"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

function CTAButton({ children, href = "/contact" }: { children: React.ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--sage-500)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-[color:var(--hunter-green-100)] transition-[color,background,transform] duration-200 ease-out hover:bg-[color:var(--sage-600)] active:bg-[color:var(--sage-400)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--sage-400)]"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-0.5" />
    </Link>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : (pathname === href || pathname.startsWith(href + "/"));
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="group relative inline-flex items-center px-1.5 pb-2 pt-2 text-sm font-medium text-[color:var(--timberwolf-700)] transition-[color,background,transform] duration-200 ease-out hover:text-[color:var(--timberwolf-900)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--sage-400)] border-b-2 border-transparent"
    >
      <span className={"transition-colors " + (active ? "font-semibold" : "")}>{children}</span>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-center rounded-full bg-[color:var(--sage-500)] transition-transform duration-200 ease-out ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
      />
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Scroll state for glass/blur/shadow changes
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click + Esc + focus trap
  useEffect(() => {
    if (!mobileOpen) return;
    const panel = panelRef.current;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
      if (e.key === "Tab" && panel) {
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const activeEl = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (activeEl === first || !panel.contains(activeEl)) {
            e.preventDefault();
            (last as HTMLElement).focus();
          }
        } else {
          if (activeEl === last) {
            e.preventDefault();
            (first as HTMLElement).focus();
          }
        }
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    // move focus into panel
    const firstLink = panel?.querySelector<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])');
    firstLink?.focus();
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
        isScrolled ? "backdrop-blur-md" : "backdrop-blur"
      }`}
    >
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed left-2 top-2 z-[60] rounded-md bg-[color:var(--charcoal-1)] px-3 py-2 text-sm text-white ring-2 ring-[color:var(--sage-400)]"
      >
        Skip to content
      </a>

      <div
        className={`border-b ${
          isScrolled ? "shadow-lg" : "shadow-none"
        } transition-[background,box-shadow,backdrop-filter] duration-200 ease-out`}
        style={{
          // Glass surface over gradient using brand var instead of raw black
          backgroundColor: isScrolled
            ? "color-mix(in oklab, var(--charcoal-1) 50%, transparent)"
            : "color-mix(in oklab, var(--charcoal-1) 35%, transparent)",
          borderColor: "color-mix(in oklab, var(--timberwolf-400) 20%, transparent)",
        }}
      >
        <Container>
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <Link href="/" className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--sage-400)]">
              <div className="relative h-7 w-auto sm:h-8 md:h-10" aria-hidden>
                <Image
                  src="/header-logo.png"
                  alt=""
                  width={160}
                  height={40}
                  priority
                  className="h-full w-auto"
                />
              </div>
              <span className="sr-only">Kernel Equity</span>
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Primary" className="hidden lg:flex flex-1 items-center justify-center">
              <ul className="flex items-center gap-8 lg:gap-10">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/bio">Bio</NavLink></li>
                <li><NavLink href="/team">Team</NavLink></li>
                <li><NavLink href="/portfolio">Portfolio</NavLink></li>
                <li><NavLink href="/contact">Contact</NavLink></li>
              </ul>
            </nav>

            {/* CTA (desktop) */}
            <div className="hidden lg:block">
              <CTAButton>Talk to us</CTAButton>
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/20 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--sage-400)]"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Panel */}
          <div
            id="mobile-menu"
            ref={panelRef}
            className={`lg:hidden origin-top overflow-hidden border-t transition-all duration-200 ease-out ${
              mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{
              backgroundColor: "color-mix(in oklab, var(--charcoal-1) 35%, transparent)",
              borderColor: "color-mix(in oklab, var(--timberwolf-400) 20%, transparent)",
            }}
            role="dialog"
            aria-modal="true"
          >
            <nav aria-label="Primary mobile">
              <ul className="px-4 py-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/bio", label: "Bio" },
                  { href: "/team", label: "Team" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href} className="">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block min-h-[44px] rounded-xl px-3 py-2 text-base text-[color:var(--timberwolf-700)] hover:text-[color:var(--timberwolf-900)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--sage-400)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
