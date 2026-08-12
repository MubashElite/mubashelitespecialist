import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import logoAsset from "@/assets/mubash-logo.png.asset.json";
const logo = logoAsset.url;

const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "audit", label: "AI Audit" },
  { id: "pricing", label: "Pricing" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? "" : ""}`}>
          <nav className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass shadow-card" : ""
          }`}>
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
              <img src={logo} alt="Mubash Elite Specialist logo" width={36} height={36} className="h-9 w-9" />
              <span className="font-display font-semibold text-sm sm:text-base hidden sm:inline">
                Mubash <span className="text-muted-foreground">Elite Specialist</span>
              </span>
            </button>
            <div className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                >
                  {n.label}
                </button>
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

              <a
                href="https://wa.me/2347014449168"
                target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center rounded-lg gradient-primary text-white px-4 py-2 text-sm font-medium shadow-glow hover:opacity-95 transition"
              >
                Book a call
              </a>
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
                <button
                  key={n.id}
                  onClick={() => { scrollTo(n.id); setOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-foreground/5 text-sm"
                >
                  {n.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
