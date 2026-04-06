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

        <Link
          href="/apps"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Explore apps
        </Link>
      </div>
    </header>
  );
}