import { useEffect } from "react";
import { person } from "../data.js";

export default function TermsConditions({ onNavigate }) {
  useEffect(() => {
    document.title = `Terms & Conditions | ${person.name}`;
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (event) => {
    event.preventDefault();
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
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-neutral-500">Last updated: October 1, 2026</p>
      </header>

      <div className="space-y-8 text-neutral-700 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">1. Agreement to Terms</h2>
          <p>
            By accessing this personal portfolio website, you agree to these terms. If you do not agree with them, please discontinue use of the website.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">2. Website Purpose</h2>
          <p>
            This website is an informational portfolio presenting the professional experience, skills, and software projects of {person.name}. It does not offer paid memberships, consumer transactions, or automated commercial guarantees.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">3. Intellectual Property</h2>
          <p>
            Unless stated otherwise, the code, design, written content, and personal photographs on this website belong to {person.name}. Please request permission before reproducing or redistributing them.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">4. Project Information</h2>
          <p>
            Project descriptions are provided in good faith and may change as projects evolve. External services and linked projects have their own terms and availability.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">5. External Links</h2>
          <p>
            This portfolio links to independent websites, including GitHub. {person.name} is not responsible for the content, availability, or practices of those external services.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-neutral-900 mb-2">6. Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${person.email}`} className="text-[#a44a2a] underline hover:no-underline font-medium">
              {person.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
