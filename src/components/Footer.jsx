import Grid from "./Grid";
import { EmailIcon } from "../components/Icons";
import { Link } from "react-router-dom"; // adjust if you're using a different router
import personalLinks, { socialButtons } from "../data/personal-links.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { email, github, linkedin, resume } = personalLinks;

  return (
    <footer className="relative -left-[calc(50vw-50%)] w-screen overflow-hidden py-10 text-(--text-primary)">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Grid />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5">
        <div className="mb-12 flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Dean<span className="text-(--accent)">.</span>
          </h1>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-(--accent) sm:text-base"
          >
            <span className="text-base sm:text-lg"><EmailIcon /></span>
            <span>{email}</span>
          </a>

        </div>

        <div className="mx-auto mb-8 h-0.75 w-full max-w-300 rounded-full bg-(--accent)" />

        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-xs text-(--text-primary)/70 sm:text-sm">
            © Dean Cruz, {currentYear}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {socialButtons.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 hover:text-(--accent)"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;