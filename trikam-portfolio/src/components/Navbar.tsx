import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link to="/" className="text-xl font-bold font-display tracking-tight flex items-center gap-2 group">
          <span className="text-primary group-hover:rotate-12 transition-transform">&lt;</span>
          <span className="text-foreground transition-colors group-hover:text-primary">TD</span>
          <span className="text-primary group-hover:-rotate-12 transition-transform">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => 
                  `relative text-[13px] font-medium tracking-wide transition-all duration-300 ${
                    isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                  } group`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full opacity-50" />
              </NavLink>
            ))}
          </div>
          
          <div className="h-4 w-px bg-white/10 mx-2" />

          <div className="flex items-center gap-4">
            <a
              href="/resume/Trikam_Devasi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
            >
              <FileText size={14} />
              Resume
            </a>
            <NavLink
              to="/contact"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest transition-all hover:shadow-[0_4px_20px_rgba(var(--primary),0.2)] active:scale-95"
            >
              Hire Me
            </NavLink>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 glass-card border border-white/5 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => 
                    `text-lg font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground/60 hover:text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="h-px bg-white/5 w-full" />
              <div className="flex flex-col gap-4">
                <a
                  href="/resume/Trikam_Devasi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-foreground/80 font-medium"
                >
                  <FileText size={20} />
                  Resume
                </a>
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground text-center font-bold"
                >
                  Hire Me
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
