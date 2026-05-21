// Footer.jsx
import Grid from "./Grid";

const Footer = () => {
  const email = "deancruzgg@gmail.com";

  return (
    <footer className="relative -left-[calc(50vw-50%)] w-screen overflow-hidden px-8 py-10 text-white">
      {/* 1. BACKGROUND LAYER: Lock the grid behind everything so it can't push content */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Grid />
      </div>

      {/* 2. CONTENT LAYER: Bring all your text above the grid */}
      <div className="relative z-10">
        {/* Top */}
        <div className="mb-12 flex flex-col items-center gap-8">
          <h1 className="text-6xl font-bold tracking-tight">
            Dean<span className="text-[#6864e7]">.</span>
          </h1>

          {/* Simple Mailto Email Link */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-base font-medium transition-colors duration-200 hover:text-[#6864e7]"
          >
            <span className="text-lg">✉</span>
            <span>{email}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mb-8 h-[3px] w-full max-w-[1200px] rounded-full bg-[#6864e7]" />

        {/* Bottom */}
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-white/70">
              © Dean Cruz. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-10">
              <a
                href="https://github.com/deancruz1/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[#6864e7]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dean-cruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[#6864e7]"
              >
                LinkedIn
              </a>
              <a
                href="/Dean Cruz Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[#6864e7]"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
