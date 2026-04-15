import { TrackLink } from "../components/analytics/track-link";
import { Footer } from "../components/site/footer";
import { Navbar } from "../components/site/navbar";

const features = [
  {
    title: "Conversion-focused by design",
    description:
      "Every Boostle app is built to support better buying behaviour, clearer decisions, and more action from shoppers.",
  },
  {
    title: "Lightweight and merchant-friendly",
    description:
      "Simple setup, clean storefront integration, and practical features that work without bloating the theme.",
  },
  {
    title: "Built for a growing ecosystem",
    description:
      "Boostle starts with urgency and expands into tools that help merchants support, optimise, and grow their stores.",
  },
];

const apps = [
  {
    name: "Boostle: Labels",
    status: "Available now",
    description:
      "Low-stock and urgency labels for Shopify product pages, designed to help shoppers act faster.",
    href: "/apps/labels",
    cta: "View app",
  },
  {
    name: "Boostle Support",
    status: "Coming soon",
    description:
      "A future support and ticketing experience designed to help merchants manage customer enquiries more efficiently.",
    href: "/contact",
    cta: "Contact us",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Shopify apps built for growth
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Turn passive visitors into buyers with urgency that works.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Boostle: Labels shows real-time stock urgency exactly where it
              matters — between price and the buy button.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <TrackLink
                href="/apps/labels"
                eventName="homepage_view_labels_click"
                eventLabel="homepage_hero_view_labels"
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                View Boostle: Labels
              </TrackLink>

              <TrackLink
                href="/contact"
                eventName="homepage_contact_click"
                eventLabel="homepage_hero_contact"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Contact Boostle
              </TrackLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>Lightweight UX</span>
              <span>Conversion-focused</span>
              <span>Built for Shopify growth</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 text-sm font-medium text-slate-500">
                  Featured app
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-blue-600">
                        Boostle: Labels
                      </p>
                      <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                        Increase conversions with urgency labels
                      </h2>
                    </div>

                    <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      Only 3 left
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div>
                      <p className="text-sm text-slate-500">Product</p>
                      <p className="mt-1 font-medium text-slate-900">
                        Cozy Beige Slippers
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-500">Price</p>
                        <p className="mt-1 text-2xl font-semibold text-slate-950">
                          $39.95
                        </p>
                      </div>

                      <button
                        type="button"
                        className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-6 text-slate-600">
                    Place urgency where it matters most: between price and the
                    buy action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Apps
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built to solve practical problems for Shopify merchants
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The Boostle ecosystem starts with conversion tools and expands
              into apps that help merchants support, optimise, and grow their
              stores more effectively.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {apps.map((app) => (
              <article
                key={app.name}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {app.name}
                  </h3>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                    {app.status}
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {app.description}
                </p>

                <TrackLink
                  href={app.href}
                  eventName="homepage_app_card_click"
                  eventLabel={`homepage_app_card_${app.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                  className="mt-8 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {app.cta}
                </TrackLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Why Boostle
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A focused approach beats feature bloat
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Boostle is designed around focused outcomes. Clear value,
              practical setup, and storefront experiences that support action.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Get started
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Start with Boostle: Labels and grow from there
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Explore the first Boostle app today and follow the growth of the
              wider Boostle ecosystem as new tools are released.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TrackLink
                href="/apps/labels"
                eventName="homepage_mid_cta_click"
                eventLabel="homepage_mid_cta_explore_labels"
                className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Boostle: Labels
              </TrackLink>
              <TrackLink
                href="/contact"
                eventName="homepage_mid_contact_click"
                eventLabel="homepage_mid_cta_contact"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Contact Boostle
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 px-8 py-12 text-white shadow-[0_20px_80px_rgba(15,23,42,0.5)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Boostle: Labels
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Turn hesitation into action with simple urgency
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Add low-stock urgency exactly where it matters — between price and
              the buy button — and help shoppers make faster buying decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <TrackLink
                href="/apps/labels"
                eventName="homepage_final_view_labels_click"
                eventLabel="homepage_final_cta_view_labels"
                className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                View Boostle: Labels
              </TrackLink>

              <TrackLink
                href="https://apps.shopify.com/boostle-labels"
                eventName="homepage_final_install_click"
                eventLabel="homepage_final_cta_install_shopify"
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