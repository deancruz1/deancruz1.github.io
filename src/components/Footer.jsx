import personalLinks, { socialButtons } from "../data/personal-links";
import { THEMES } from "../context/themes";
import { useTheme } from "../hooks/useTheme";
import "./Footer.css";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <div className="site-container">
      <footer className="site-footer">
        <div className="site-footer-left">
          <span>
            © {year} <span className="hi">Dean Cruz</span>
          </span>
          <span className="theme-dots" role="group" aria-label="Color theme">
            {THEMES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={theme === item.id ? "active" : undefined}
                onClick={() => setTheme(item.id)}
                title={item.label}
                aria-label={`Switch to ${item.label} theme`}
                aria-pressed={theme === item.id}
                style={{ background: item.swatch }}
              />
            ))}
          </span>
        </div>

        <div className="site-footer-links">
          <a href={`mailto:${personalLinks.email}`}>{personalLinks.email}</a>
          {socialButtons.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label} ↗
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
