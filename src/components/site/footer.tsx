import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Boostle. All rights reserved.</p>

        <div className="flex flex-wrap gap-6">
          <Link href="/apps" className="transition hover:text-slate-900">
            Apps
          </Link>
          <Link href="/contact" className="transition hover:text-slate-900">
            Contact
          </Link>
          <Link href="/privacy" className="transition hover:text-slate-900">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-slate-900">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}