import Link from "next/link";

const dashboardLinks = [
  {
    title: "View tickets",
    description:
      "Open the support dashboard to view and manage customer conversations.",
    href: "https://app.boostle.pro/admin",
    cta: "Open dashboard",
  },
  {
    title: "Open ticket inbox",
    description:
      "Jump straight into the full ticket list and start handling support faster.",
    href: "https://app.boostle.pro/admin",
    cta: "View all tickets",
  },
  {
    title: "Contact Boostle support",
    description:
      "Need help with setup, app issues, or merchant support workflows? Reach out directly.",
    href: "mailto:support@boostle.pro",
    cta: "Email support",
  },
];

export default function AppHome() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 sm:px-10">
        <div className="w-full">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Boostle
                </div>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Access your Boostle dashboard
              </h1>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Manage support, access Boostle tools, and continue into the
                Boostle app experience from one central place.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://app.boostle.pro"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Open your dashboard
                </a>

                <Link
                  href="/"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                >
                  Back to website
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {dashboardLinks.map((item) => {
                const isExternal =
                  item.href.startsWith("mailto:") ||
                  item.href.startsWith("http");

                const cardClasses =
                  "mt-5 inline-flex items-center text-sm font-medium text-gray-900 transition hover:opacity-70";

                return (
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

                    {isExternal ? (
                      <a href={item.href} className={cardClasses}>
                        {item.cta} →
                      </a>
                    ) : (
                      <Link href={item.href} className={cardClasses}>
                        {item.cta} →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-14 rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Boostle ecosystem
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Move from the website into the real app experience
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                    This page acts as a clean handoff between the main Boostle
                    website and the app platform, making it easier for merchants
                    to find support, tickets, and future tools.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="text-sm font-semibold text-gray-900">
                    Quick actions
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href="https://app.boostle.pro"
                      className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Go to app.boostle.pro
                    </a>

                    <a
                      href="mailto:support@boostle.pro"
                      className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                    >
                      Email support
                    </a>
                  </div>
                </div>
              </div>
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