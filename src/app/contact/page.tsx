import Link from "next/link";
import { Footer } from "../../components/site/footer";
import { Navbar } from "../../components/site/navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="border-b border-black/5 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in touch with Boostle
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Questions about Boostle apps, partnerships, or future product
            direction? Reach out and we’ll point you in the right direction.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-slate-950">
              Contact details
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              The simplest way to contact Boostle right now is by email. As the
              ecosystem grows, this page can expand into a full contact form and
              support workflow.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Email</p>
                <a
                  href="mailto:hello@boostle.pro"
                  className="mt-2 inline-block text-lg font-semibold text-slate-950 transition hover:text-blue-600"
                >
                  hello@boostle.pro
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Focus</p>
                <p className="mt-2 text-slate-700">
                  Shopify apps, merchant tools, conversion experiences, and
                  future support tooling.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/apps"
                className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}