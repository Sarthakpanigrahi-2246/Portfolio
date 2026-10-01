import { person } from "../data.js";
import { GitHubIcon, MailIcon, ArrowUpIcon } from "./Icons.jsx";

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLegalClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#d8c9bc] bg-[#eee5dc] text-[#2b2927] mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-[#d8c9bc]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-neutral-900 text-white font-bold text-[10px] flex items-center justify-center">
                SP
              </span>
              <span className="font-semibold text-[#2b2927]">{person.name}</span>
            </div>
            <p className="text-sm text-[#665f59] mt-1 max-w-md">
              Full-Stack Developer &amp; AI Enthusiast. Building reliable web applications and AI-driven products.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-[#514943]">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#f7f3ee] transition-colors duration-150"
            >
              <MailIcon className="w-4 h-4 text-[#665f59]" />
              <span>Email</span>
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#f7f3ee] transition-colors duration-150"
            >
              <GitHubIcon className="w-4 h-4 text-[#665f59]" />
              <span>GitHub</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#665f59] hover:text-[#2b2927] transition-colors duration-150 text-xs uppercase tracking-wider font-semibold ml-2 cursor-pointer"
            >
              <ArrowUpIcon className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#665f59]">
          <p>&copy; {person.year} {person.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLegalClick(e, "/privacy-policy")}
              className="hover:text-[#2b2927] transition-colors duration-150 underline underline-offset-2"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              onClick={(e) => handleLegalClick(e, "/terms-and-conditions")}
              className="hover:text-[#2b2927] transition-colors duration-150 underline underline-offset-2"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
