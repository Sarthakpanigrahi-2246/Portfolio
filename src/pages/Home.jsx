import { useEffect } from "react";
import {
  person,
  aboutData,
  skillCategories,
  experienceData,
  projectsData,
} from "../data.js";
import { GitHubIcon, MailIcon, ExternalLinkIcon } from "../components/Icons.jsx";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-24 py-8 sm:py-12">
      {/* HERO SECTION */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-5 sm:px-8 pt-4 sm:pt-10"
        aria-label="Introduction"
        data-reveal="hero"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a44a2a]">
                Full-Stack Developer &amp; AI Enthusiast
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                {person.name}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              {person.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-md bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors duration-150 inline-flex items-center justify-center cursor-pointer shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-md bg-white border border-neutral-300 text-neutral-800 font-medium text-sm hover:bg-neutral-100 hover:border-neutral-400 transition-colors duration-150 inline-flex items-center justify-center cursor-pointer"
              >
                Contact Me
              </a>
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-md bg-white border border-neutral-300 text-neutral-700 font-medium text-sm hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-150 inline-flex items-center gap-2"
              >
                <GitHubIcon className="w-4 h-4 text-neutral-700" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Availability Note */}
            <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-500 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-[2px] bg-[#a44a2a]" aria-hidden="true" />
              <span>Available for full-stack engineering and AI product roles</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="bg-white p-2 rounded-lg border border-neutral-200 shadow-sm">
                <img
                  src={person.profileImage}
                  alt="Portrait of Sarthak Panigrahi"
                  width="1130"
                  height="1392"
                  className="w-full h-auto object-cover rounded-md aspect-[4/5] bg-neutral-100"
                  loading="eager"
                />
              </div>
              <div className="mt-2 text-center text-xs text-neutral-500">
                Sarthak Panigrahi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-5 sm:px-8 scroll-mt-20"
        aria-label="About"
        data-reveal
      >
        <div className="border-t border-neutral-200 pt-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#a44a2a] mb-2">
              About
            </h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-snug">
              {aboutData.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutData.highlights.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition-colors duration-150"
              >
                <h3 className="font-semibold text-neutral-900 text-base mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-5 sm:px-8 scroll-mt-20"
        aria-label="Technical Skills"
        data-reveal
      >
        <div className="border-t border-neutral-200 pt-16">
          <div className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#a44a2a] mb-2">
              Skills
            </h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Technical Stack &amp; Competencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-white border border-neutral-200 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors duration-150"
              >
                <div>
                  <h3 className="font-semibold text-neutral-900 text-base pb-3 mb-4 border-b border-neutral-100">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-2.5 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded hover:bg-neutral-200/70 transition-colors duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-5 sm:px-8 scroll-mt-20"
        aria-label="Professional Experience"
        data-reveal
      >
        <div className="border-t border-neutral-200 pt-16">
          <div className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#a44a2a] mb-2">
              Experience
            </h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Work &amp; Internships
            </p>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp) => (
              <div
                key={exp.role}
                className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 hover:border-neutral-300 transition-colors duration-150"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-4 mb-4 border-b border-neutral-100">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-[#a44a2a]">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-neutral-500 tracking-wide">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-neutral-700 text-sm leading-relaxed list-disc list-outside pl-5">
                  {exp.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-5 sm:px-8 scroll-mt-20"
        aria-label="Projects"
        data-reveal
      >
        <div className="border-t border-neutral-200 pt-16">
          <div className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#a44a2a] mb-2">
              Projects
            </h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Featured Work
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project) => (
              <article
                key={project.title}
                className="bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 hover:border-neutral-300 transition-colors duration-150"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-4 mb-4 border-b border-neutral-100">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                        {project.title}
                      </h3>
                      {project.status && (
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-0">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 text-neutral-600 text-sm leading-relaxed list-disc list-outside pl-5">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-5 sm:px-8 scroll-mt-20"
        aria-label="Contact"
        data-reveal
      >
        <div className="border-t border-neutral-200 pt-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#a44a2a] mb-2">
              Contact
            </h2>
            <p className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
              Let's build something useful.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              I am open to full-stack engineering roles and AI application development. The best way to reach me is directly by email or on GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {/* Email Card */}
            <a
              href={`mailto:${person.email}`}
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:border-[#a44a2a] hover:shadow-sm transition-all duration-150"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded bg-neutral-100 text-neutral-800 group-hover:bg-[#fbf1ed] group-hover:text-[#a44a2a] transition-colors duration-150">
                  <MailIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-neutral-400 group-hover:text-[#a44a2a] transition-colors duration-150">
                  Send email &rarr;
                </span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                Email
              </h3>
              <p className="text-sm font-mono text-neutral-600 group-hover:text-neutral-900 transition-colors duration-150 break-all">
                {person.email}
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-neutral-200 rounded-lg p-6 hover:border-[#a44a2a] hover:shadow-sm transition-all duration-150"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded bg-neutral-100 text-neutral-800 group-hover:bg-[#fbf1ed] group-hover:text-[#a44a2a] transition-colors duration-150">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-neutral-400 group-hover:text-[#a44a2a] transition-colors duration-150 flex items-center gap-1">
                  <span>Open</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                GitHub Profile
              </h3>
              <p className="text-sm font-mono text-neutral-600 group-hover:text-neutral-900 transition-colors duration-150 break-all">
                github.com/Sarthakpanigrahi-2246
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
