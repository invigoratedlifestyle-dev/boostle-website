import Link from "next/link";
import { Footer } from "../../components/site/footer";
import { Navbar } from "../../components/site/navbar";

const apps = [
  {
    name: "Boostle: Labels",
    status: "Available now",
    description:
      "Display low-stock and urgency labels on product pages to help shoppers act faster and convert with more confidence.",
    highlights: [
      "Low-stock urgency labels",
      "Sits between price and add to cart",
      "Simple Shopify setup",
      "Designed for cleaner buying decisions",
    ],
    href: "/apps/labels",
    cta: "View app",
  },
  {
    name: "Boostle Support",
    status: "Coming soon",
    description:
      "A future support and ticketing experience built to help merchants manage customer conversations and support requests more efficiently.",
    highlights: [
      "Support workflow direction",
      "Customer ticket visibility",
      "Future ecosystem expansion",
      "Merchant-friendly approach",
    ],
    href: "/contact",
    cta: "Contact us",
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="border-b border-black/5 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Boostle apps
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Focused Shopify apps built to support store growth
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Boostle is building a growing app ecosystem for Shopify merchants,
            starting with conversion-first tools and expanding into support and
            operational experiences.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6">
          {apps.map((app) => (
            <article
              key={app.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold text-slate-950">
                      {app.name}
                    </h2>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      {app.status}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-600">
                    {app.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {app.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0">
                  <Link
                    href={app.href}
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {app.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}