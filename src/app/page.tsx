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

const labelExamples = [
  "Only 3 left",
  "Low stock",
  "Selling fast",
  "Sold out",
];

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

      <section className="border-b border-black/5 bg-[radial-gradient(circle_at_top,_#eff6ff,_#ffffff_45%,_#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Shopify apps built to increase conversions
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Turn product page hesitation into action with Boostle: Labels
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Boostle builds lightweight Shopify apps designed to improve the
                customer journey. Boostle: Labels helps stores show low-stock
                and urgency messaging directly on product pages, right where
                buying decisions happen.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apps/labels"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View Boostle: Labels
                </Link>

                <Link
                  href="/app"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Open dashboard
                </Link>
              </div>

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

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-4">
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
                  <p className="text-sm font-medium text-slate-500">
                    Product page
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="h-6 w-2/3 rounded-lg bg-slate-200" />
                    <div className="h-4 w-1/3 rounded-lg bg-slate-100" />
                    <div className="h-10 w-32 rounded-full bg-slate-900" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
                      Only 3 left
                    </span>
                    <span className="rounded-full bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                      Low stock
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    Place urgency labels between price and add to cart so the
                    message appears exactly where shoppers are deciding.
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Why it works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built to support clearer buying decisions
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Boostle: Labels helps merchants add subtle urgency and stock
              visibility without overwhelming the product page.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featureCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A simple path from install to live product page labels
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Keep the setup light, the placement intentional, and the
                customer experience focused.
              </p>

              <div className="mt-8">
                <Link
                  href="/apps/labels"
                  className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Learn more about Boostle: Labels
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              The Boostle ecosystem
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More than one app. A growing merchant toolkit.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Boostle starts with conversion-focused Shopify apps and expands
              into support, workflow, and merchant-friendly tooling over time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ecosystemCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-semibold text-slate-950 transition hover:opacity-70"
                >
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Ready to explore Boostle?
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Start with Boostle: Labels
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore the app, see how it fits your product pages, and step into
            the growing Boostle ecosystem.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/apps/labels"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              View Boostle: Labels
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Contact Boostle
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}