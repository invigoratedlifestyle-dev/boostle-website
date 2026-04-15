import { Footer } from "../../components/site/footer";
import { Navbar } from "../../components/site/navbar";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-black/5 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Terms of Service
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            These Terms of Service govern your use of the Boostle website and
            related services.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Effective date: April 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="prose prose-slate max-w-none">
              <h2>1. Overview</h2>
              <p>
                By accessing or using the Boostle website (boostle.pro), you
                agree to be bound by these Terms of Service. If you do not agree,
                you should not use this website.
              </p>

              <h2>2. Scope of these terms</h2>
              <p>
                These terms apply to the Boostle website and general
                interactions. Separate terms may apply to specific Boostle
                products, applications, or services (including apps hosted on
                app.boostle.pro).
              </p>

              <h2>3. Use of the website</h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Disrupt or damage the website or its functionality</li>
                <li>Attempt unauthorized access to systems or data</li>
              </ul>

              <h2>4. Intellectual property</h2>
              <p>
                All content on this website, including text, branding, design,
                and visuals, is owned by or licensed to Boostle unless otherwise
                stated. You may not reproduce, distribute, or use content without
                permission.
              </p>

              <h2>5. Product and service information</h2>
              <p>
                Information about Boostle products and services is provided for
                general informational purposes. Features, availability, and
                pricing may change at any time without notice.
              </p>

              <h2>6. Third-party services</h2>
              <p>
                The Boostle website may link to or rely on third-party services.
                Boostle is not responsible for the content, policies, or actions
                of those third parties.
              </p>

              <h2>7. Disclaimer</h2>
              <p>
                The website is provided on an “as is” and “as available” basis.
                Boostle makes no warranties, express or implied, regarding the
                reliability, accuracy, or availability of the website.
              </p>

              <h2>8. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, Boostle will not be
                liable for any indirect, incidental, or consequential damages
                arising from your use of the website.
              </p>

              <h2>9. Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless Boostle from any claims,
                damages, or losses resulting from your misuse of the website or
                violation of these terms.
              </p>

              <h2>10. Changes to these terms</h2>
              <p>
                Boostle may update these Terms of Service at any time. Continued
                use of the website after changes are posted constitutes
                acceptance of the updated terms.
              </p>

              <h2>11. Governing law</h2>
              <p>
                These terms are governed by the laws of Australia. Any disputes
                arising from these terms or use of the website will be subject to
                the applicable jurisdiction.
              </p>

              <h2>12. Contact</h2>
              <p>
                For questions about these Terms of Service, contact{" "}
                <a href="mailto:support@boostle.pro">
                  support@boostle.pro
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}