import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import ResumeModal from "./ResumeModal";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "/about", id: "about" },
  { label: "Projects", href: "/projects", id: "projects" },
  { label: "Hackathons", href: "/hackathons", id: "hackathons" },
  { label: "Certifications", href: "/certifications", id: "certifications" },
  { label: "Contact", href: "/contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy: identify active section based on scroll offset
      const scrollPosition = window.scrollY + 180;
      let found = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            found = link.id;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
      window.history.pushState(null, "", href);
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "top-3 left-4 right-4 bg-background/90 backdrop-blur-md border border-border/80 shadow-sm rounded-xl py-2.5"
          : "top-0 left-0 right-0 bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 max-w-6xl">
        <Link to="/" aria-label="Trikam Devasi Home" className="transition-transform duration-200 active:scale-95">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || location.pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative text-xs font-semibold tracking-wide transition-colors duration-200 py-1 ${
                    isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && !shouldReduceMotion && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-primary rounded-full"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </div>
          
          <div className="h-4 w-px bg-border mx-1" />

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsResumeOpen(true)}
              aria-label="Open Resume PDF Viewer"
              className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border bg-surface-elevated hover:bg-surface-hover hover:border-border-hover text-foreground text-xs font-semibold uppercase tracking-wide transition-all duration-200 active:scale-95"
            >
              <FileText size={13} className="text-primary transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-surface-elevated rounded-lg transition-colors active:scale-95"
          aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || location.pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href, link.id);
                      setMobileOpen(false);
                    }}
                    className={`text-base font-semibold py-1 transition-colors ${
                      isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="h-px bg-border w-full my-1.5" />
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsResumeOpen(true);
                    setMobileOpen(false);
                  }}
                  aria-label="Open Resume PDF Viewer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-border bg-surface-elevated text-foreground font-semibold text-sm hover:border-border-hover transition-colors active:scale-[0.98]"
                >
                  <FileText size={16} className="text-primary" />
                  View Resume
                </button>
              </div>

              <div className="flex items-center justify-center border-t border-border/40 pt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mr-3">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </nav>
  );
};

export default Navbar;
