import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import ResumeModal from "./ResumeModal";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 ${
        scrolled
          ? "top-4 left-4 right-4 bg-background border border-border rounded-xl py-3"
          : "top-0 left-0 right-0 bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 max-w-6xl">
        <Link to="/" aria-label="Trikam Devasi Home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-xs font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          
          <div className="h-4 w-px bg-border mx-1" />

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsResumeOpen(true)}
              aria-label="Open Resume PDF Viewer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border bg-surface-elevated hover:bg-surface-hover hover:border-border-hover text-foreground text-xs font-semibold uppercase tracking-wide transition-colors"
            >
              <FileText size={13} className="text-primary" />
              Resume
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-surface-elevated rounded-lg transition-colors"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-background border border-border rounded-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-1 transition-colors ${
                      isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="h-px bg-border w-full my-2" />
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsResumeOpen(true);
                    setMobileOpen(false);
                  }}
                  aria-label="Open Resume PDF Viewer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-border bg-surface-elevated text-foreground font-semibold text-sm hover:border-border-hover transition-colors"
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
