"use client";

import { useEffect } from "react";
import Link from "next/link";

const DASHBOARD_URL = "https://app.boostle.pro";

const dashboardLinks = [
  {
    title: "Tickets",
    description:
      "View and manage all customer conversations in one place.",
    href: `${DASHBOARD_URL}/admin`,
    cta: "Open tickets",
  },
  {
    title: "Support",
    description:
      "Get help with your Boostle apps, setup, and merchant workflows.",
    href: "mailto:support@boostle.pro",
    cta: "Contact support",
  },
  {
    title: "Dashboard",
    description:
      "Access your Boostle app dashboard and tools.",
    href: DASHBOARD_URL,
    cta: "Go to dashboard",
  },
];

export default function AppHome() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = DASHBOARD_URL;
    }, 1200); // 1.2s delay feels intentional

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10">
        <div className="w-full">
          <div className="mx-auto max-w-5xl">
            {/* Hero */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Boostle
                </div>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Opening your Boostle dashboard…
              </h1>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Taking you to your app experience. If nothing happens, use the
                button below.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={DASHBOARD_URL}
                  className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Open dashboard
                </a>

                <Link
                  href="/"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                >
                  Back to website
                </Link>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {dashboardLinks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="mt-5 inline-flex items-center text-sm font-medium text-gray-900 transition hover:opacity-70"
                  >
                    {item.cta} →
                  </a>
                </div>
              ))}
            </div>

            {/* Footer */}
            <p className="mt-12 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Boostle. Built for Shopify growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}