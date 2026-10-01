import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import logo from "@/assets/mubash-logo.png";

const SERVICE_LINKS = [
  { to: "/services", label: "All Services" },
  { to: "/shopify-ecommerce", label: "Shopify & E-commerce" },
  { to: "/social-media-marketing", label: "Social Media Marketing" },
  { to: "/email-marketing", label: "Email Marketing" },
] as const;

const NAV = [
  { to: "/portfolio", label: "Projects" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

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
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
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

  const linkCls =
    "px-3 py-2 text-xs font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div className="h-full gradient-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className={`flex items-center justify-between border-b px-1 py-3 transition-all ${scrolled ? "border-border bg-background/90 px-4 shadow-card backdrop-blur-xl" : "border-transparent"}`}>
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Mubash Elite logo" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-lg font-medium hidden sm:inline">
                Mubash <span className="text-muted-foreground">Elite</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link to="/about" activeProps={{ className: "text-foreground bg-foreground/5" }} className={linkCls}>
                About
              </Link>

              <div className="relative" ref={dropRef}>
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                    className={`${linkCls} inline-flex items-center gap-1 bg-transparent`}
                >
                  Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 glass rounded-2xl p-2 shadow-card animate-fade-up">
                    {SERVICE_LINKS.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeProps={{ className: "text-foreground bg-foreground/5" }}
                  className={linkCls}
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
                  className="hidden sm:inline-flex items-center justify-center border border-primary bg-primary px-4 py-2 text-xs font-semibold uppercase text-primary-foreground transition hover:bg-primary/90"
              >
                Work With Me
              </Link>
              <button
                aria-label="Menu"
                className="lg:hidden h-9 w-9 grid place-items-center border border-border hover:bg-foreground/5"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>

          {open && (
            <div className="lg:hidden mt-2 glass rounded-2xl p-2 animate-fade-up max-h-[75vh] overflow-y-auto">
              <Link to="/about" onClick={() => setOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-foreground/5 text-sm">
                About
              </Link>
              <div className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Services</div>
              {SERVICE_LINKS.map((s) => (
                <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-foreground/5 text-sm">
                  {s.label}
                </Link>
              ))}
              <div className="my-1 h-px bg-border" />
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-foreground/5 text-sm">
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 block w-full text-center px-4 py-3 rounded-xl gradient-primary text-white text-sm font-medium"
              >
                Work With Me
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
