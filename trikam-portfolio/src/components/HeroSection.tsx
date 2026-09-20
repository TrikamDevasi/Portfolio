import { useState } from "react";
import { Github, Linkedin, Twitter, ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative min-h-[min(100vh,900px)] flex items-center pt-28 pb-20 px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] items-center gap-16 lg:gap-20">

          {/* ── Left Column: Identity ── */}
          <div className="flex flex-col items-start text-left max-w-2xl">

            {/* Name + Role */}
            <h1 className="fluid-heading font-bold text-foreground mb-4">
              Trikam Devasi
            </h1>

            <p className="text-lg font-semibold text-muted-foreground mb-5 tracking-tight">
              Full-Stack Developer &amp; B.Tech CSE Student
            </p>

            {/* Bio */}
            <p className="fluid-body text-muted-foreground mb-8 leading-relaxed">
              I build full-stack web applications, real-time WebSocket platforms, and
              LLM-integrated products using React, Node.js, TypeScript, and MongoDB.
              Currently in my first year at Swaminarayan University — 3rd place at SU Hackathon 2026.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
              <Link to="/projects" className="btn-primary">
                View Projects
                <ChevronRight size={15} />
              </Link>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="btn-secondary"
              >
                <FileText size={15} />
                Resume
              </button>
            </div>

            {/* Social links — inline, not icon boxes */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/TrikamDevasi", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/trikam-devasi-3975573a2/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/TrikamDevasi16", label: "Twitter / X" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-border/80 mx-1">·</span>
              <span className="text-xs font-mono text-muted-foreground">
                Ahmedabad, India
              </span>
            </div>
          </div>

          {/* ── Right Column: Profile Photo ── */}
          <div className="hidden lg:block">
            <div className="w-64 h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border border-border bg-surface flex-shrink-0">
              <img
                src="/trikam-devasi-profile.jpg"
                alt="Trikam Devasi — Full-Stack Developer"
                width={400}
                height={400}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://github.com/TrikamDevasi.png?size=400";
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default HeroSection;
