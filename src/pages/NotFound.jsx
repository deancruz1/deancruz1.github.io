import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Dean Cruz - Page Not Found</title>
      </Helmet>

      <main className="site-container view-fade">
        <section
          style={{
            minHeight: "62vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "48px 0",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
              color: "var(--accent-text)",
              letterSpacing: "0.04em",
            }}
          >
            404
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 52px)",
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              color: "var(--text-bright)",
            }}
          >
            Page not found<span className="accent-dot">.</span>
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "460px",
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--text-dim)",
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <Link
              to="/"
              style={{
                padding: "9px 18px",
                borderRadius: "999px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: "13.5px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              ← Back to Work
            </Link>
            <Link
              to="/info"
              style={{
                padding: "9px 18px",
                borderRadius: "999px",
                border: "1px solid var(--border-outer)",
                background: "var(--surface-inner)",
                color: "var(--text-bright)",
                fontSize: "13.5px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              View Info →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
