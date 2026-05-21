import Grid from "./Grid";

const Footer = () => {
  const email = "deancruzgg@gmail.com";

  return (
    <footer className="relative -left-[calc(50vw-50%)] w-screen overflow-hidden px-8 py-10 text-[var(--text-primary)]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Grid />
      </div>

      <div className="relative z-10">
        <div className="mb-12 flex flex-col items-center gap-8">
          <h1 className="text-6xl font-bold tracking-tight">
            Dean<span className="text-[var(--accent)]">.</span>
          </h1>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-base font-medium transition-colors duration-200 hover:text-[var(--accent)]"
          >
            <span className="text-lg">✉</span>
            <span>{email}</span>
          </a>
        </div>

        <div className="mx-auto mb-8 h-[3px] w-full max-w-[1200px] rounded-full bg-[var(--accent)]" />

        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-[var(--text-primary)]/70">
              © Dean Cruz. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-10">
              <a
                href="https://github.com/deancruz1/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[var(--accent)]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dean-cruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
              <a
                href="/Dean Cruz Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[var(--accent)]"
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
