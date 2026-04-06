import { Footer } from "../../components/site/footer";
import { Navbar } from "../../components/site/navbar";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="border-b border-black/5 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Terms of Service
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This is a starter terms page for the Boostle website.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="prose prose-slate max-w-none">
              <h2>Overview</h2>
              <p>
                By using the Boostle website, you agree to these terms.
              </p>

              <h2>Website use</h2>
              <p>
                You agree to use this website lawfully and not in a way that
                could harm Boostle, its services, or other users.
              </p>

              <h2>Content</h2>
              <p>
                Website content is provided for general information and may be
                updated or changed over time without notice.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                Boostle is not liable for indirect or incidental damages arising
                from the use of this website, to the extent permitted by law.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms can be sent to hello@boostle.pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}