import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import logo from "@/assets/mubash-logo.png";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefers);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((v) => {
      const next = !v;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div className="h-full gradient-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass shadow-card" : ""}`}>
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Mubash Elite Specialist logo" width={36} height={36} className="h-9 w-9" />
              <span className="font-display font-semibold text-sm sm:text-base hidden sm:inline">
                Mubash <span className="text-muted-foreground">Elite Specialist</span>
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeProps={{ className: "text-foreground bg-foreground/5" }}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                >
                  {n.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                title={dark ? "Light mode" : "Dark mode"}
                onClick={toggleTheme}
                className="h-9 w-9 grid place-items-center rounded-lg border border-border bg-card/60 hover:bg-foreground/5 text-muted-foreground hover:text-foreground transition"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center rounded-lg gradient-primary text-white px-4 py-2 text-sm font-medium shadow-glow hover:opacity-95 transition"
              >
                Book a call
              </Link>
              <button
                aria-label="Menu"
                className="lg:hidden h-9 w-9 grid place-items-center rounded-lg hover:bg-foreground/5"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
          {open && (
            <div className="lg:hidden mt-2 glass rounded-2xl p-2 animate-fade-up">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-foreground/5 text-sm"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 block w-full text-center px-4 py-3 rounded-xl gradient-primary text-white text-sm font-medium"
              >
                Book a call
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
