import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Code2, FileText, ChevronRight, Trophy, Star, Activity, Award, Briefcase, Layout } from "lucide-react";
import GitHubAvatar from "./GitHubAvatar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[min(100vh,1000px)] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* ── Background Orbs (Scale with viewport) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0,transparent_75%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* ── Left Column: Stable Messaging ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.05] bg-white/[0.02] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
              Engineering Scale & Intelligence
            </div>

            <h1 className="fluid-heading font-black font-display tracking-tighter text-foreground mb-8">
              I build scalable, <br />
              <span className="text-gradient">AI-powered</span> web systems <br />
              for real-world impact.
            </h1>

            <p className="fluid-body text-foreground/60 mb-10 max-w-xl mx-auto lg:mx-0">
              Lead Developer at <span className="text-foreground font-semibold">SkillSense AI</span>. 
              I specialize in turning complex requirements into high-performance, production-ready systems using the <span className="text-primary font-mono">MERN stack</span> and <span className="text-primary font-mono">LLM integrations</span>.
            </p>

            {/* Credibility Signals: Responsive Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 border-t border-white/[0.05] pt-8 items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-foreground">4x</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 flex items-center justify-center lg:justify-start gap-1.5">
                  <Trophy size={10} className="text-primary" /> Hackathon Wins
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-foreground">10+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 flex items-center justify-center lg:justify-start gap-1.5">
                  <Layout size={10} className="text-primary" /> Projects Live
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-foreground">Lead</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 flex items-center justify-center lg:justify-start gap-1.5">
                  <Star size={10} className="text-primary" /> SkillSense AI
                </span>
              </div>
            </div>

            {/* CTAs: Stable Positioning */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                Explore Projects
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail size={14} />
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Scale-Aware Value Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative w-full max-w-[440px] mx-auto lg:ml-auto"
          >
            <div className="glass-card p-6 sm:p-8 relative z-10 transition-transform duration-500 hover:scale-[1.01]">
              {/* Card Header */}
              <div className="flex items-start gap-5 sm:gap-6 mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <GitHubAvatar />
                </div>
                <div className="pt-1.5">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-1">Trikam Devasi</h2>
                  <div className="text-[11px] font-mono text-primary flex items-center gap-2">
                    <Briefcase size={12} />
                    Full-Stack Lead
                  </div>
                  
                  {/* Pinned Social Links (Safe at all zooms) */}
                  <div className="flex gap-3 mt-4">
                    {[
                      { icon: Github, href: "https://github.com/TrikamDevasi" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/trikam-devasi-3975573a2/" },
                      { icon: Twitter, href: "https://x.com/TrikamDevasi16" },
                    ].map(({ icon: Icon, href }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/30 hover:text-primary transition-colors p-1"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Stack */}
              <div className="mb-8">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/30 block mb-3">Core Expertise</span>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "LLMs", "MongoDB", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md border border-white/[0.05] bg-white/[0.02] text-[10px] font-mono text-foreground/50 transition-colors hover:border-primary/20 hover:text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Fact Card */}
              <div className="p-4 rounded-xl bg-primary/[0.03] border border-primary/10">
                <div className="flex items-center gap-2.5 mb-2">
                  <Award size={14} className="text-primary" />
                  <span className="text-[11px] font-bold text-foreground">Top Innovation Award</span>
                </div>
                <p className="text-[10px] text-foreground/50 leading-relaxed font-medium">
                  Currently building an AI assessment platform that handles automated code analysis for tech interviews.
                </p>
              </div>
            </div>

            {/* Zoom-safe Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/[0.05] blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
