import { Footer } from "../../components/site/footer";
import { Navbar } from "../../components/site/navbar";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="border-b border-black/5 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This is a starter privacy policy page for the Boostle website.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="prose prose-slate max-w-none">
              <h2>Overview</h2>
              <p>
                Boostle respects your privacy and is committed to protecting
                personal information shared through this website.
              </p>

              <h2>Information we may collect</h2>
              <p>
                We may collect information you provide directly, such as your
                name, email address, and any details included in messages sent
                to us.
              </p>

              <h2>How we use information</h2>
              <p>
                Information may be used to respond to enquiries, improve the
                website, and support Boostle products and services.
              </p>

              <h2>Third-party services</h2>
              <p>
                Boostle may use third-party services for hosting, analytics, or
                communication. Those services may process data in accordance
                with their own privacy practices.
              </p>

              <h2>Contact</h2>
              <p>
                For privacy-related questions, contact hello@boostle.pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}