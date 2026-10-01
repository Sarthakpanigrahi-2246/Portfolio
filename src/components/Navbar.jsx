import { useState } from "react";
import { person, navLinks } from "../data.js";
import { GitHubIcon, MenuIcon, CloseIcon } from "./Icons.jsx";

export default function Navbar({ currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentPath !== "/") {
      onNavigate("/");
      setTimeout(() => {
        const targetId = href.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    } else {
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentPath !== "/") {
      onNavigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#eee5dc] border-b border-[#d8c9bc]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a44a2a] rounded"
        >
          <span className="w-8 h-8 rounded bg-neutral-900 text-white font-bold text-xs flex items-center justify-center tracking-tight transition-colors duration-150 group-hover:bg-[#a44a2a]">
            SP
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-[#2b2927] text-sm sm:text-base leading-tight">
              {person.name}
            </span>
            <span className="text-[11px] text-[#665f59] font-medium leading-none">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 text-sm font-medium text-[#514943] hover:text-[#2b2927] rounded hover:bg-[#dfd2c6] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="h-4 w-px bg-[#d8c9bc] mx-2" />
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-[#514943] hover:text-[#2b2927] rounded hover:bg-[#dfd2c6] transition-colors duration-150"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-[#514943] hover:text-[#2b2927] rounded hover:bg-[#dfd2c6] transition-colors duration-150"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#514943] hover:text-[#2b2927] rounded hover:bg-[#dfd2c6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a44a2a] transition-colors duration-150"
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#d8c9bc] bg-[#eee5dc] px-5 py-4 space-y-1 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2 text-base font-medium text-[#514943] hover:text-[#2b2927] hover:bg-[#dfd2c6] rounded transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
