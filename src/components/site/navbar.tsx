import Link from "next/link";

const navLinks = [
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-slate-950 transition hover:opacity-80"
        >
          Boostle
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side CTAs */}
        <div className="flex items-center gap-3">
          {/* Secondary CTA */}
          <Link
            href="/apps"
            className="hidden sm:inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Explore apps
          </Link>

          {/* Primary CTA */}
          <Link
            href="/app"
            className="inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}