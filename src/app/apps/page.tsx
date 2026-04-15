import { TrackLink } from "../../components/analytics/track-link";
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
    install: "https://apps.shopify.com/boostle-labels",
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
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
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

                <div className="flex shrink-0 flex-col gap-3">
                  <TrackLink
                    href={app.href}
                    eventName="apps_page_view_click"
                    eventLabel={`apps_page_view_${app.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {app.cta}
                  </TrackLink>

                  {"install" in app && app.install && (
                    <TrackLink
                      href={app.install}
                      eventName="apps_page_install_click"
                      eventLabel="apps_page_install_boostle_labels"
                      external
                      className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                    >
                      Install on Shopify
                    </TrackLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 px-8 py-12 text-white shadow-[0_20px_80px_rgba(15,23,42,0.5)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Boostle: Labels
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Add urgency to your product pages in minutes
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Place low-stock messaging exactly where it matters — between price
              and the buy button — and help shoppers act faster.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TrackLink
                href="/apps/labels"
                eventName="apps_page_final_view_click"
                eventLabel="apps_page_final_cta_view_labels"
                className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                View Boostle: Labels
              </TrackLink>

              <TrackLink
                href="https://apps.shopify.com/boostle-labels"
                eventName="apps_page_final_install_click"
                eventLabel="apps_page_final_cta_install_shopify"
                external
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Install on Shopify
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}