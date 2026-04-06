import Link from "next/link";
import { Footer } from "../../../components/site/footer";
import { Navbar } from "../../../components/site/navbar";

const features = [
  {
    title: "Urgency where it matters most",
    description:
      "Boostle: Labels is designed to sit between the product price and the add to cart button, helping shoppers notice urgency at the exact moment they are deciding whether to buy.",
  },
  {
    title: "Low stock messaging that feels natural",
    description:
      "Show messages like “Only 3 left”, “Low Stock”, or “Sold Out” in a simple, storefront-friendly way that supports action without cluttering the page.",
  },
  {
    title: "Simple setup for Shopify merchants",
    description:
      "Install the app, add the app block, position it above the buy buttons, and start showing urgency labels on supported product pages.",
  },
  {
    title: "Customisation as you grow",
    description:
      "Boostle: Labels starts with an easy free experience and expands into more control over thresholds, colours, text, and branding with paid plan features.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Install Boostle: Labels",
    description:
      "Add the app to your Shopify store and open the theme editor.",
  },
  {
    step: "2",
    title: "Place the app block",
    description:
      "Position the Boostle: Labels block between the product price and the add to cart section for the strongest impact.",
  },
  {
    step: "3",
    title: "Show urgency automatically",
    description:
      "Boostle displays low-stock and urgency labels based on your inventory levels and settings.",
  },
];

const highlights = [
  "Low stock urgency labels",
  "Clean placement between price and buy action",
  "Simple setup through Shopify theme editor",
  "Free plan available",
  "Starter plan unlocks customisation",
  "Built for clearer buying decisions",
];

export default function BoostleLabelsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Available now on Shopify
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Boostle: Labels
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Turn passive visitors into buyers with urgency that works.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Boostle: Labels shows real-time stock urgency exactly where it
              matters — between the product price and the buy button — helping
              shoppers make faster buying decisions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://apps.shopify.com/boostle-labels"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Install on Shopify
              </a>

              <Link
                href="/contact"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Contact Boostle
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Product page example
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                      Urgency placed where shoppers actually see it
                    </h2>
                  </div>

                  <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    Only 3 left
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)]" />

                  <div className="mt-6">
                    <p className="text-sm text-slate-500">Product</p>
                    <p className="mt-1 text-xl font-semibold text-slate-950">
                      Cozy Beige Slippers
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm text-slate-500">Price</p>
                    <p className="mt-1 text-3xl font-semibold text-slate-950">
                      $39.95
                    </p>
                  </div>

                  <div className="mt-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                    Only 3 left
                  </div>

                  <button
                    type="button"
                    className="mt-5 w-full rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white"
                  >
                    Add to cart
                  </button>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    This is the key placement: price first, urgency second, buy
                    action immediately after.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Why it works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Most shoppers delay when there is no reason to act now
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Product pages often leave too much room for hesitation. Boostle:
              Labels adds a simple urgency cue that helps create movement at the
              point of decision.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                Before
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                No urgency
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The shopper sees the product, thinks about it, and tells
                themselves they will come back later.
              </p>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                “I’ll come back later.”
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-200 bg-blue-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-700">
                After Boostle: Labels
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                Clear urgency, faster decisions
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                The shopper sees a low-stock message at the moment they are
                weighing the purchase, which makes action feel more immediate.
              </p>
              <div className="mt-8 rounded-2xl border border-blue-200 bg-white p-5 text-slate-800">
                “Only 3 left” — now they don’t wait.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built to feel simple for merchants and clear for shoppers
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Setup
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Get started in a few simple steps
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Boostle: Labels is designed to be quick to understand and easy to
              place into the product page flow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {item.step}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-950">
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

      <section className="border-b border-black/5 bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Install Boostle: Labels
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Add urgency to your product pages without adding clutter
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Start with the free plan, place the app block above your buy
              buttons, and turn more hesitation into action.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://apps.shopify.com/boostle-labels"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Install on Shopify
              </a>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Contact Boostle
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}