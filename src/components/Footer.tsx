'use client';

import Image from 'next/image';
import Link from 'next/link';

// This is a utility component, you might want to move it to a shared file.
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--charcoal-1)] py-6">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div>
            <div className="mb-2">
              <Link href="/">
                <Image src="/header-logo.png" alt="Kernel Equity" width={120} height={30} className="h-8 w-auto" />
              </Link>
            </div>
            <p className="text-sm text-white/70">
              Software‑driven, human‑powered. We back founders at the intersection of technology and real‑world impact.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Navigate</div>
            <div className="mt-2 grid grid-cols-2 gap-x-[4px] text-sm text-white/70">
              <ul className="space-y-0">
                <li><Link className="hover:text-white" href="/bio">Bio</Link></li>
                <li><Link className="hover:text-white" href="/team">Team</Link></li>
              </ul>
              <ul className="space-y-0">
                <li><Link className="hover:text-white" href="/portfolio">Portfolio</Link></li>
                <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-2 space-y-1.5 text-sm text-white/70">
              <li>1 Vantage Way, Suite C-250</li>
              <li>Nashville, TN 37228</li>
              <li><a className="hover:text-white" href="mailto:info@kernelequity.com">info@kernelequity.com</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Newsletter</div>
            <p className="mt-2 text-sm text-white/70">Monthly founder notes and vertical insights.</p>
            <form className="mt-2 flex gap-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-2xl bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[color:var(--sage-400)]"
                required
              />
              <button
                type="submit"
                className="rounded-2xl bg-[color:var(--sage-500)] px-4 py-2 text-sm font-semibold text-[color:var(--hunter-green-100)] transition-colors hover:bg-[color:var(--timberwolf-600)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center text-xs text-white/50 gap-4">
              <Link href="/" className="hover:text-white/70">Home</Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-white/70">Contact</Link>
            </div>
            <div className="text-center text-xs text-white/50">
              © 2017 – 2025 Kernel – An Equity Firm
            </div>
            <div className="text-xs text-white/50">
              Powered by Kernel Equity Firm
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
