import { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-16 px-6 md:px-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-12">

          {/* ── Left Column: Identity & Value Proposition (~58%) ── */}
          <div className="flex flex-col items-start text-left md:col-span-7 max-w-[620px]">

            {/* Signature Technical Label */}
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                FULL-STACK · AI · REAL-TIME
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-2">
              Trikam Devasi
            </h1>

            {/* Role */}
            <p className="text-base sm:text-lg font-semibold text-muted-foreground mb-4 tracking-tight">
              Full-Stack Developer &amp; B.Tech CSE Student
            </p>

            {/* Concise Bio */}
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              I build full-stack web applications, real-time multiplayer platforms, and
              AI-integrated products.
            </p>

            {/* Separated Tech Stack Row */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-muted-foreground/90 mb-6">
              <span>React</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>Node.js</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>TypeScript</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>MongoDB</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>WebSockets</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
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

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground pt-4 border-t border-border/40 w-full">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/TrikamDevasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors font-medium"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <span className="text-border" aria-hidden="true">·</span>
                <a
                  href="https://www.linkedin.com/in/trikam-devasi-3975573a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors font-medium"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <span className="text-border" aria-hidden="true">·</span>
                <a
                  href="https://x.com/TrikamDevasi16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors font-medium"
                  aria-label="Twitter / X Profile"
                >
                  X
                </a>
              </div>
              <span className="text-border hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-muted-foreground/80">
                Based in Ahmedabad, India
              </span>
            </div>
          </div>

          {/* ── Right Column: Editorial Portrait (~42%) ── */}
          <div className="flex flex-col items-center md:items-end justify-center md:col-span-5">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[320px] lg:h-[320px] xl:w-[340px] xl:h-[340px] rounded-2xl overflow-hidden border border-border bg-surface shadow-sm">
              <img
                src="/trikam-devasi-profile.jpg"
                alt="Trikam Devasi — Full-Stack Developer"
                width={400}
                height={400}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://github.com/TrikamDevasi.png?size=400";
                }}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-muted-foreground w-56 sm:w-64 lg:w-[320px] xl:w-[340px] px-1">
              <span>Swaminarayan University</span>
              <span>B.Tech CSE · 2025–2029</span>
            </div>
          </div>

        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default HeroSection;
