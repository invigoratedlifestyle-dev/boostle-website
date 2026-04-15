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
            This Privacy Policy explains how Boostle collects, uses, and
            protects information when you visit the Boostle website or contact
            us through our services.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Effective date: April 15, 2026
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="prose prose-slate max-w-none">
              <h2>1. Overview</h2>
              <p>
                Boostle respects your privacy and is committed to handling
                personal information responsibly. This policy applies to
                information collected through the Boostle website, including
                pages on boostle.pro, and through related communications such as
                support emails or contact enquiries.
              </p>

              <h2>2. Information we may collect</h2>
              <p>
                We may collect information you provide directly, as well as
                limited technical information collected automatically when you
                use the website.
              </p>
              <p>Examples may include:</p>
              <ul>
                <li>Name and email address</li>
                <li>
                  Information you include in contact forms, emails, or support
                  requests
                </li>
                <li>Business or store details you choose to share with us</li>
                <li>
                  Basic usage data such as pages visited, browser type, device
                  type, and approximate analytics information
                </li>
              </ul>

              <h2>3. How we use information</h2>
              <p>We may use information we collect to:</p>
              <ul>
                <li>Respond to enquiries and support requests</li>
                <li>Provide, maintain, and improve Boostle services</li>
                <li>Monitor website performance and usage trends</li>
                <li>Communicate updates, product information, or service issues</li>
                <li>Protect the website, our services, and users from misuse</li>
              </ul>

              <h2>4. Support and communications</h2>
              <p>
                If you contact Boostle by email or through a support workflow,
                we may store your message and related details so we can respond,
                maintain support history, and improve our service quality.
              </p>

              <h2>5. Analytics and website data</h2>
              <p>
                Boostle may use analytics or similar tools to understand how the
                website is used and to improve performance, content, and user
                experience. These tools may collect technical data such as page
                visits, referring pages, device information, and general
                engagement metrics.
              </p>

              <h2>6. Third-party services</h2>
              <p>
                We may use trusted third-party providers to help operate the
                website and our services, including hosting, analytics, email,
                support, and infrastructure providers. These third parties may
                process information on our behalf in line with their own privacy
                policies and applicable agreements.
              </p>

              <h2>7. Data sharing</h2>
              <p>
                Boostle does not sell your personal information. We may share
                information only where reasonably necessary to operate the
                website and services, comply with legal obligations, protect our
                rights, or respond to legitimate requests from authorities.
              </p>

              <h2>8. Data retention</h2>
              <p>
                We keep personal information only for as long as reasonably
                necessary for the purposes described in this policy, including
                support, record-keeping, security, legal, and operational needs.
              </p>

              <h2>9. Security</h2>
              <p>
                We take reasonable steps to protect information from
                unauthorized access, loss, misuse, or disclosure. However, no
                system or transmission method is completely secure, and we
                cannot guarantee absolute security.
              </p>

              <h2>10. Your choices</h2>
              <p>
                You may choose not to provide certain information, though that
                may limit our ability to respond or provide services. You may
                also contact us to request access to, correction of, or deletion
                of personal information we hold about you, subject to legal and
                operational requirements.
              </p>

              <h2>11. International processing</h2>
              <p>
                Depending on the services we use, information may be processed
                or stored in countries outside your own. By using the website or
                contacting us, you understand that information may be handled in
                other jurisdictions where those service providers operate.
              </p>

              <h2>12. Children&apos;s privacy</h2>
              <p>
                The Boostle website and services are not directed to children,
                and we do not knowingly collect personal information from
                children.
              </p>

              <h2>13. Changes to this policy</h2>
              <p>
                Boostle may update this Privacy Policy from time to time. When
                changes are made, the updated version will be posted on this
                page with a revised effective date.
              </p>

              <h2>14. Contact</h2>
              <p>
                For privacy-related questions or requests, contact{" "}
                <a href="mailto:support@boostle.pro">support@boostle.pro</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}