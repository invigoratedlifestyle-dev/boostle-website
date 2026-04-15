import Link from "next/link";
import { Footer } from "../components/site/footer";
import { Navbar } from "../components/site/navbar";

const featureCards = [
  {
    title: "Increase buying momentum",
    description:
      "Show low-stock and urgency labels where they matter most so shoppers feel the decision is clearer and easier to make.",
  },
  {
    title: "Built for Shopify stores",
    description:
      "Boostle: Labels is designed to fit naturally into product pages without adding unnecessary friction or clutter.",
  },
  {
    title: "Fast to launch",
    description:
      "Install the app, add the block, and start showing stock-driven labels in your storefront experience.",
  },
];

const labelExamples = ["Only 3 left", "Low stock", "Selling fast", "Sold out"];

const steps = [
  {
    title: "Install Boostle: Labels",
    description:
      "Add the app to your Shopify store and open the app settings.",
  },
  {
    title: "Add the app block",
    description:
      "Place the label block on your product page where shoppers are already deciding whether to buy.",
  },
  {
    title: "Turn stock into action",
    description:
      "Show urgency and low-stock messaging that helps visitors act with more confidence.",
  },
];

const ecosystemCards = [
  {
    title: "Boostle: Labels",
    status: "Available now",
    description:
      "A lightweight Shopify app designed to make product page decisions clearer with low-stock and urgency labels.",
    href: "/apps/labels",
    cta: "View app",
  },
  {
    title: "Boostle dashboard",
    status: "Live",
    description:
      "Access the Boostle app experience, support flows, and the growing product ecosystem.",
    href: "/app",
    cta: "Open dashboard",
  },
  {
    title: "Boostle Support",
    status: "Growing",
    description:
      "A cleaner support and ticket workflow designed to help merchants get answers and resolve issues faster.",
    href: "/contact",
    cta: "Contact Boostle",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-black/5 bg-[radial-gradient(circle_at_top,_#eff6ff,_#ffffff_45%,_#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              {/* 🔥 Hook */}
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Most stores don’t do this…
              </p>

              {/* 💥 Headline */}
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Turn “I’ll think about it” into “I’ll buy it now”
              </h1>

              {/* 🧠 Core message */}
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Boostle: Labels helps stores show low-stock and urgency
                messaging directly on product pages, right where buying
                decisions happen.
              </p>

              {/* 🔥 Psychology trigger */}
              <p className="mt-4 max-w-2xl text-base font-medium text-slate-800">
                Because when nothing feels at risk, people don’t buy.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apps/labels"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  See how it works
                </Link>

                <Link
                  href="/app"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Open dashboard
                </Link>
              </div>

              {/* Trust */}
              <p className="mt-6 text-sm text-slate-500">
                Works with Shopify • 2 min setup • No code required
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                  Low-stock urgency labels
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                  Shopify-friendly setup
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                  Cleaner buying decisions
                </span>
              </div>
            </div>

            {/* PRODUCT VISUAL */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Boostle: Labels
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-950">
                      Example product page moment
                    </h2>
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Live app
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="mt-4 space-y-3">
                    <div className="h-6 w-2/3 rounded-lg bg-slate-200" />
                    <div className="h-4 w-1/3 rounded-lg bg-slate-100" />
                    <div className="h-10 w-32 rounded-full bg-slate-900" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-red-100 px-3 py-2 text-sm font-bold text-red-700">
                      Only 3 left
                    </span>
                    <span className="rounded-full bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700">
                      Low stock
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-medium text-slate-800">
                    This is what makes people act.
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Right where decisions happen.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {labelExamples.map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (rest unchanged) */}
      <Footer />
    </main>
  );
}