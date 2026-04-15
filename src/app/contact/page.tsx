import Link from "next/link";
import { Footer } from "../../components/site/footer";
import { Navbar } from "../../components/site/navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-black/5 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch with Boostle
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Need help with a Boostle app, have a question, or want to explore
            something bigger? Choose the best option below and we’ll get you
            sorted quickly.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Support (PRIMARY) */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Support
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                Get help with your app
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                For app support, tickets, and technical help, use the Boostle
                support system. This is the fastest way to get help.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://app.boostle.pro/admin"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Open support dashboard
                </a>

                <a
                  href="https://app.boostle.pro"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Go to app
                </a>
              </div>
            </div>

            {/* General Contact */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                General
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                Questions or partnerships
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                For partnerships, product questions, or anything else, send us
                an email and we’ll point you in the right direction.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Email</p>

                <a
                  href="mailto:hello@boostle.pro"
                  className="mt-2 inline-block text-lg font-semibold text-slate-950 transition hover:text-blue-600"
                >
                  hello@boostle.pro
                </a>
              </div>
            </div>
          </div>

          {/* Focus Section */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">What we work on</p>

            <p className="mt-2 text-slate-700">
              Shopify apps, conversion optimisation, merchant tooling, and the
              growing Boostle ecosystem.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apps"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View apps
            </Link>

            <Link
              href="/app"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Go to dashboard
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}