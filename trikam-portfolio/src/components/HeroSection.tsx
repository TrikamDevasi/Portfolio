import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Youtube, Twitter, Code2, Eye, Download } from "lucide-react";
import GitHubAvatar from "./GitHubAvatar";

const roles = ["Full-Stack Developer", "AI Integration Enthusiast", "Hackathon Builder"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-pulse-glow" />
      </div>

      {/* ── Grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main content: two-column desktop, stacked mobile ── */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-20">

        {/* ── Left col (mobile: bottom, desktop: left) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider"
          >
            {"// Hello World, I'm"}
          </motion.p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-display mb-4 tracking-tight">
            <span className="text-foreground">Trikam</span>{" "}
            <span className="text-gradient neon-text">Devasi</span>
          </h1>

          {/* Typing animation */}
          <div className="h-10 mb-6">
            <span className="text-xl md:text-2xl font-mono text-muted-foreground">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-muted-foreground max-w-xl mb-10 text-base md:text-lg leading-relaxed">
            B.Tech CSE student at Swaminarayan University (2025-29) building intelligent web applications.
            Currently crafting{" "}
            <span className="text-primary font-medium">SkillSense AI</span> — an AI-powered skill assessment platform.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-center transition-all hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]"
            >
              View Projects
            </a>
            
            <a
              href="/resume/Trikam_Devasi_Resume.pdf"
              download="Trikam_Devasi_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-white font-medium transition-all hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="/resume/Trikam_Devasi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 font-medium bg-transparent transition-all hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]"
            >
              <Eye size={18} />
              View Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border bg-secondary text-foreground font-medium text-center transition-all hover:border-primary/50"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center lg:justify-start gap-5">
            {[
              { icon: Github, href: "https://github.com/TrikamDevasi", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/trikam-devasi-3975573a2/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/TrikamDevasi16", label: "X (Twitter)" },
              { icon: Code2, href: "https://leetcode.com/u/TrikamDevasi/", label: "LeetCode" },
              { icon: Youtube, href: "https://youtube.com/@trikamdevasi16?si=erOHjEcrcvh1mS6Z", label: "YouTube" },
              { icon: Mail, href: "mailto:trikam.devasi.cg@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="p-3 rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Right col: avatar (mobile: top, desktop: right) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 order-1 lg:order-2"
        >
          {/* Mobile: 160px visual, desktop: 220px — controlled inside GitHubAvatar */}
          <div className="scale-75 sm:scale-90 lg:scale-100 origin-center">
            <GitHubAvatar />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
