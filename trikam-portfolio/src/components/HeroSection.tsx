import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ChevronRight, Trophy, Star, Code2, Briefcase, FileText } from "lucide-react";
import GitHubAvatar from "./GitHubAvatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative min-h-[min(100vh,950px)] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* ── Background Subtle Glow ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr,1fr] items-center gap-12 lg:gap-16 xl:gap-20">
          
          {/* ── Left Column: Value Proposition & Intro ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[11px] font-mono font-semibold uppercase tracking-wider mb-6 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              B.Tech CSE Student · 2025–2029
            </div>

            <h1 className="fluid-heading font-extrabold font-display tracking-tight text-foreground mb-6 leading-[1.05]">
              Building Modern <br />
              <span className="text-gradient">Full-Stack &amp; AI</span> <br />
              Web Systems.
            </h1>

            <p className="fluid-body text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
              Hi, I'm <strong className="text-foreground font-semibold">Trikam Devasi</strong>. I develop responsive web applications, real-time WebSocket platforms, and intelligent LLM-integrated APIs using React, Node.js, and TypeScript.
            </p>

            {/* Credible Milestone Signals */}
            <div className="w-full grid grid-cols-3 gap-4 sm:gap-6 mb-10 border-y border-border/50 py-6 items-center text-center lg:text-left">
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">3rd</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-center lg:justify-start gap-1">
                  <Trophy size={13} className="text-primary shrink-0" /> SU Hackathon '26
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">250+</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-center lg:justify-start gap-1">
                  <Code2 size={13} className="text-primary shrink-0" /> LeetCode DSA
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">6+</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-center lg:justify-start gap-1">
                  <Star size={13} className="text-primary shrink-0" /> Web Apps Shipped
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 transition-all hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] active:scale-[0.98]"
              >
                View Projects
                <ChevronRight size={16} />
              </Link>
              
              <button
                onClick={() => setIsResumeOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-secondary/80 border border-border text-foreground hover:border-primary/50 hover:text-primary font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <FileText size={16} />
                View Resume
              </button>
            </div>
          </motion.div>

          {/* ── Right Column: Identity Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative w-full max-w-[420px] mx-auto lg:ml-auto"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl glow-border">
              {/* Profile Avatar Header */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-36 h-36 sm:w-44 sm:h-44 mb-5 relative">
                  <GitHubAvatar />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 font-display tracking-tight">
                    Trikam Devasi
                  </h2>
                  <div className="text-xs font-mono text-primary flex items-center justify-center gap-1.5 font-bold uppercase tracking-wider">
                    <Briefcase size={13} />
                    Full-Stack Developer
                  </div>
                  
                  {/* Social Profile Links */}
                  <div className="flex justify-center gap-3 mt-4">
                    {[
                      { icon: Github, href: "https://github.com/TrikamDevasi", label: "GitHub Profile" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/trikam-devasi-3975573a2/", label: "LinkedIn Profile" },
                      { icon: Twitter, href: "https://x.com/TrikamDevasi16", label: "Twitter Profile" },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-muted-foreground hover:text-primary transition-all p-2 rounded-lg bg-secondary/50 border border-border/60 hover:border-primary/40 hover:bg-primary/10"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Skill Focus */}
              <div className="mb-6 border-t border-border/40 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-3">
                  Core Technologies
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { name: "React & Next.js", status: "Proficient" },
                    { name: "Node.js & Express", status: "Proficient" },
                    { name: "MongoDB & Postgres", status: "Applied" },
                    { name: "WebSocket & Redis", status: "Applied" }
                  ].map((tech) => (
                    <div key={tech.name} className="p-2.5 rounded-xl border border-border/50 bg-secondary/30">
                      <p className="text-xs font-bold text-foreground/90 leading-tight">{tech.name}</p>
                      <p className="text-[10px] font-mono text-primary/80 mt-0.5">{tech.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Goal Banner */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="text-xs font-bold text-foreground mb-1">
                  🎯 Current Focus
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Building SkillSense AI and advancing data structures &amp; algorithmic problem solving in C++.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
