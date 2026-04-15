"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DASHBOARD_URL = "https://app.boostle.pro";

const dashboardLinks = [
  {
    title: "Tickets",
    description: "View and manage all customer conversations in one place.",
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
    description: "Access your Boostle app dashboard and tools.",
    href: DASHBOARD_URL,
    cta: "Go to dashboard",
  },
];

export default function AppHome() {
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const progressStops = [18, 28, 41, 56, 68, 79, 88, 94];
    let step = 0;

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (step >= progressStops.length) return current;
        const next = progressStops[step];
        step += 1;
        return next;
      });
    }, 180);

    const redirectTimer = window.setTimeout(() => {
      setProgress(100);
      window.location.href = DASHBOARD_URL;
    }, 1600);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fbff,_#ffffff_48%,_#f8fafc_100%)] text-gray-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10">
        <div className="w-full">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Boostle
                </div>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Opening your Boostle dashboard…
              </h1>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Taking you into the app experience. This should only take a
                moment.
              </p>

              <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-gray-200/80 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-900">
                    Secure redirect in progress
                  </span>
                  <span className="tabular-nums text-gray-500">
                    {progress}%
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-slate-900 transition-[width] duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-blue-500" />
                  Connecting to app.boostle.pro
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={DASHBOARD_URL}
                  className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Open dashboard now
                </a>

                <Link
                  href="/"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                >
                  Back to website
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {dashboardLinks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200/80 bg-white/85 p-6 shadow-sm backdrop-blur"
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

            <p className="mt-12 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Boostle. Built for Shopify growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}