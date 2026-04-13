import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ChevronRight, Trophy, Star, Activity, Briefcase, Layout } from "lucide-react";
import GitHubAvatar from "./GitHubAvatar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[min(100vh,1000px)] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.02)_0,transparent_75%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* ── Left Column: Architectural Messaging ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.25em] mb-8 text-primary animate-pulse-glow">
              <Activity size={12} />
              Engineering Scale & Intelligence
            </div>

            <h1 className="fluid-heading font-black font-display tracking-tighter text-foreground mb-8 leading-[0.95]">
              Architecting <br />
              <span className="text-gradient">High-Performance</span> <br />
              AI Ecosystems.
            </h1>

            <p className="fluid-body text-foreground/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full-Stack Architect specializing in AI-integrated systems and scalable web infrastructure.
              I build production-ready <span className="text-primary font-mono">distributed systems</span> and <span className="text-primary font-mono">intelligent LLM pipelines</span>, supported by robust CI/CD and containerized deployments.
            </p>

            {/* Credibility Signals: Architect Focus */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 border-t border-white/[0.05] pt-10 items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-foreground tracking-tighter decoration-primary/30 underline underline-offset-8">Lead</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 flex items-center justify-center lg:justify-start gap-1.5">
                  <Star size={12} className="text-primary" /> SkillSense AI
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-foreground tracking-tighter">4x</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 flex items-center justify-center lg:justify-start gap-1.5">
                  <Trophy size={12} className="text-primary" /> Major Hackathons
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-foreground tracking-tighter">12+</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 flex items-center justify-center lg:justify-start gap-1.5">
                  <Layout size={12} className="text-primary" /> Systems Deployed
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <Link
                to="/projects"
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 group px-8 py-4"
              >
                View Architecture
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4"
              >
                <Mail size={16} />
                Discuss Impact
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: The "Identity" Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative w-full max-w-[460px] mx-auto lg:ml-auto"
          >
            <div className="glass-card p-8 sm:p-10 relative z-10 transition-all duration-500 hover:shadow-[0_20px_80px_-20px_rgba(var(--primary),0.15)] glow-border group">
              {/* Card Header */}
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6 relative">
                  {/* Decorative focus ring */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <GitHubAvatar />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1 font-display tracking-tight">Trikam Devasi</h2>
                  <div className="text-[12px] font-mono text-primary flex items-center justify-center gap-2 font-bold uppercase tracking-widest">
                    <Briefcase size={12} />
                    Full-Stack Lead
                  </div>
                  
                  <div className="flex justify-center gap-4 mt-6">
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
                        className="text-foreground/20 hover:text-primary transition-all p-2 hover:bg-primary/5 rounded-lg border border-transparent hover:border-primary/20"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strategic Expertise */}
              <div className="mb-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/30 block mb-4">Architectural Stack</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "MERN Stack", level: "Expert" },
                    { name: "LLM Orchestration", level: "Advanced" },
                    { name: "System Design", level: "Lead" },
                    { name: "Cloud Infra", level: "Scaling" }
                  ].map((tech) => (
                    <div key={tech.name} className="flex flex-col p-3 rounded-xl border border-white/[0.03] bg-white/[0.01] hover:border-primary/20 transition-all">
                      <span className="text-[11px] font-bold text-foreground/80">{tech.name}</span>
                      <span className="text-[9px] font-mono text-primary uppercase tracking-tighter">{tech.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Mission */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 border border-white/5 backdrop-blur-sm relative overflow-hidden group/mission">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/mission:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3 mb-3">
                  <Activity size={16} className="text-primary animate-pulse" />
                  <span className="text-[12px] font-bold text-foreground/90 uppercase tracking-wide">Impact Mission</span>
                </div>
                <p className="text-[11px] text-foreground/50 leading-relaxed font-medium">
                  Designing a high-throughput AI assessment engine that automates multi-dimensional code evaluation at scale.
                </p>
              </div>
            </div>

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/[0.03] blur-[120px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
