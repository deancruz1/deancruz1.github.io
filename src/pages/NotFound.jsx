import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Grid from "../components/Grid";

const NotFound = () => {
  const introButton =
    "bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  return (
    <>
      <Helmet>
        <title>Dean Cruz - Page Not Found</title>
      </Helmet>

      <main className="relative flex min-h-screen items-center justify-center px-4 sm:px-8">
        <Grid />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Responsive 404 size */}
          <h1 className="text-7xl leading-none font-black text-(--accent) sm:text-9xl md:text-[12rem] lg:text-[14rem]">
            404
          </h1>

          <p className="-mt-2 mb-2 text-xl font-bold text-(--text-primary) sm:text-2xl md:-mt-4 md:text-3xl">
            Page not found
          </p>

          <p className="mb-6 max-w-xs text-sm text-(--text-secondary) sm:mb-10 sm:max-w-md sm:text-base md:mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className={introButton}>
              Back to Home
            </Link>
            <Link to="/projects" className={introButton}>
              View Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
