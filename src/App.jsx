import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const raw = window.location.pathname.replace(/\/+$/, "");
    return raw || "/";
  });

  useEffect(() => {
    const handlePopState = () => {
      const raw = window.location.pathname.replace(/\/+$/, "");
      setCurrentPath(raw || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    const normalized = to.split("#")[0].replace(/\/+$/, "") || "/";
    window.history.pushState({}, "", to);
    setCurrentPath(normalized);
  };

  useEffect(() => {
    if (currentPath === "/" || currentPath === "") {
      document.title = "Sarthak Panigrahi | Full-Stack Developer & AI Enthusiast";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Full-stack developer working with React, TypeScript, Node.js, MongoDB, and AI-powered applications."
        );
      }
    }
  }, [currentPath]);

  const renderContent = () => {
    if (currentPath === "/privacy-policy" || currentPath === "/privacy") {
      return <PrivacyPolicy onNavigate={navigate} />;
    }
    if (currentPath === "/terms-and-conditions" || currentPath === "/terms") {
      return <TermsConditions onNavigate={navigate} />;
    }
    return <Home />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f3ee] text-[#2b2927] antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:font-medium focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to content
      </a>

      <Navbar currentPath={currentPath} onNavigate={navigate} />

      <main id="main" className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
