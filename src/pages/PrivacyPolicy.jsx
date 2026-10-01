import { useEffect } from "react";
import { person } from "../data.js";

export default function PrivacyPolicy({ onNavigate }) {
  useEffect(() => {
    document.title = `Privacy Policy | ${person.name}`;
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    onNavigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
      <div className="mb-8">
        <a
          href="/"
          onClick={handleBack}
          className="inline-flex items-center text-sm font-medium text-[#a44a2a] hover:underline"
        >
          &larr; Back to Portfolio
        </a>
      </div>

      <header className="pb-8 border-b border-neutral-200 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500">
          Last updated: October 1, 2026
        </p>
      </header>

      <div className="space-y-8 text-neutral-700 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">
            1. Overview
          </h2>
          <p>
            This privacy policy applies to the personal developer portfolio website of {person.name} ({person.email}). As a personal showcase of full-stack software development projects and experience, this website does not operate accounts, process commercial payments, or collect personal consumer data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">
            2. Data Collection and Tracking
          </h2>
          <p>
            This website does not use tracking cookies, analytics pixels, third-party marketing tags, or advertising trackers. You can browse the portfolio freely without submitting any personal credentials.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">
            3. Server Logs
          </h2>
          <p>
            When you load pages on this website, standard technical request headers (such as IP address, browser type, and timestamps) may be automatically processed by the hosting network infrastructure (such as Vercel) strictly to deliver content, mitigate security threats, and maintain uptime.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">
            4. Direct Communications
          </h2>
          <p>
            If you choose to communicate by sending an email to{" "}
            <a
              href={`mailto:${person.email}`}
              className="text-[#a44a2a] underline hover:no-underline font-medium"
            >
              {person.email}
            </a>
            , any information you provide (such as your name, email address, and message contents) will be used solely to respond to your inquiry. Your details will never be sold, rented, or added to marketing newsletters.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">
            5. External Links
          </h2>
          <p>
            This website contains links to external platforms, notably GitHub. When navigating to third-party domains, their respective privacy practices and terms apply.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">
            6. Contact
          </h2>
          <p>
            For any questions or privacy inquiries regarding this site, you can directly contact {person.name} at{" "}
            <a
              href={`mailto:${person.email}`}
              className="text-[#a44a2a] underline hover:no-underline font-medium"
            >
              {person.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
