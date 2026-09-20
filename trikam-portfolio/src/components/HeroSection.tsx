import { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASING, DURATION } from "@/lib/motion";
import ResumeModal from "./ResumeModal";

const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Subtle scroll parallax
  const imageParallaxY = useTransform(scrollY, [0, 500], [0, 16]);
  const gridParallaxY = useTransform(scrollY, [0, 500], [0, 10]);

  const getEntrance = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? DURATION.fast : DURATION.medium,
      ease: EASING.easeOut,
      delay: shouldReduceMotion ? 0 : delay,
    },
  });

  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-16 px-6 md:px-12 overflow-hidden">
      {/* ── AMBIENT BACKGROUND & TECHNICAL GRID ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Ambient Subtle Moving Emerald Light (5-8% opacity) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 25, -15, 0],
                  y: [0, -20, 15, 0],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-20 w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] rounded-full bg-emerald-500/[0.06] blur-[120px] pointer-events-none"
        />

        {/* Secondary Soft Neutral Light Orb */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -20, 20, 0],
                  y: [0, 25, -15, 0],
                }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -right-32 w-[460px] h-[460px] rounded-full bg-surface-elevated/40 blur-[100px] pointer-events-none"
        />

        {/* Technical Grid (1px lines at 0.025-0.03 opacity) with subtle scroll drift */}
        <motion.div
          style={shouldReduceMotion ? {} : { y: gridParallaxY }}
          className="absolute inset-0 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:44px_44px] text-foreground/[0.028] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
        />

        {/* Subtle Film Grain / Noise Overlay (SVG feTurbulence) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:3px_3px]"
        />

        {/* Subtle Floating Technical Details */}
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? {} : { y: [-6, 6, -6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 right-16 hidden lg:block text-[11px] font-mono font-medium text-foreground/[0.18] tracking-widest select-none pointer-events-none"
        >
          01 / FULL-STACK
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? {} : { y: [6, -6, 6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-8 hidden lg:block text-[10px] font-mono text-foreground/[0.18] tracking-widest select-none pointer-events-none"
        >
          REACT · NODE · TS
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? {} : { y: [-5, 8, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-44 right-1/3 hidden xl:block text-xs font-mono text-foreground/[0.18] tracking-widest select-none pointer-events-none"
        >
          &lt; / &gt;
        </motion.div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-12">

          {/* ── Left Column: Identity & Value Proposition (~58%) ── */}
          <div className="flex flex-col items-start text-left md:col-span-7 max-w-[620px]">

            {/* Signature Technical Label */}
            <motion.div
              {...getEntrance(0.05)}
              className="flex items-center gap-2 mb-3 text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                FULL-STACK · AI · REAL-TIME
              </span>
            </motion.div>

            {/* Name Centerpiece with Mask Reveal */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { y: "0%", opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? DURATION.fast : DURATION.cinematic,
                  ease: EASING.easeOut,
                  delay: shouldReduceMotion ? 0 : 0.12,
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]"
              >
                Trikam Devasi
              </motion.h1>
            </div>

            {/* Role */}
            <motion.p
              {...getEntrance(0.22)}
              className="text-base sm:text-lg font-semibold text-muted-foreground mb-4 tracking-tight"
            >
              Full-Stack Developer &amp; B.Tech CSE Student
            </motion.p>

            {/* Concise Bio */}
            <motion.p
              {...getEntrance(0.32)}
              className="text-base text-muted-foreground leading-relaxed mb-4"
            >
              I build full-stack web applications, real-time multiplayer platforms, and
              AI-integrated products.
            </motion.p>

            {/* Separated Tech Stack Row */}
            <motion.div
              {...getEntrance(0.42)}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-muted-foreground/90 mb-6"
            >
              <span>React</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>Node.js</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>TypeScript</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>MongoDB</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span>WebSockets</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...getEntrance(0.52)}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Link
                to="/projects"
                className="group btn-primary active:scale-[0.98] hover:-translate-y-px transition-all duration-200 shadow-sm"
              >
                <span>View Projects</span>
                <ChevronRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                />
              </Link>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="group btn-secondary active:scale-[0.98] hover:-translate-y-px transition-all duration-200"
              >
                <FileText
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                />
                <span>Resume</span>
              </button>
            </motion.div>

            {/* Social Links & Location */}
            <motion.div
              {...getEntrance(0.62)}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground pt-4 border-t border-border/40 w-full"
            >
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/TrikamDevasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all duration-200 hover:-translate-y-[3px] hover:scale-105 active:scale-95 font-medium inline-block"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <span className="text-border" aria-hidden="true">·</span>
                <a
                  href="https://www.linkedin.com/in/trikam-devasi-3975573a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all duration-200 hover:-translate-y-[3px] hover:scale-105 active:scale-95 font-medium inline-block"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <span className="text-border" aria-hidden="true">·</span>
                <a
                  href="https://x.com/TrikamDevasi16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-all duration-200 hover:-translate-y-[3px] hover:scale-105 active:scale-95 font-medium inline-block"
                  aria-label="Twitter / X Profile"
                >
                  X
                </a>
              </div>
              <span className="text-border hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-muted-foreground/80">
                Based in Ahmedabad, India
              </span>
            </motion.div>
          </div>

          {/* ── Right Column: Editorial Portrait (~42%) with Parallax & Hover ── */}
          <motion.div
            style={shouldReduceMotion ? {} : { y: imageParallaxY }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? DURATION.fast : DURATION.slow,
              ease: EASING.easeOut,
              delay: shouldReduceMotion ? 0 : 0.28,
            }}
            className="flex flex-col items-center md:items-end justify-center md:col-span-5"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[320px] lg:h-[320px] xl:w-[340px] xl:h-[340px] rounded-2xl overflow-hidden border border-border hover:border-border-hover bg-surface shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <img
                src="/trikam-devasi-profile.jpg"
                alt="Trikam Devasi — Full-Stack Developer"
                width={400}
                height={400}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://github.com/TrikamDevasi.png?size=400";
                }}
              />
            </motion.div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-muted-foreground w-56 sm:w-64 lg:w-[320px] xl:w-[340px] px-1">
              <span>Swaminarayan University</span>
              <span>B.Tech CSE · 2025–2029</span>
            </div>
          </motion.div>

        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default HeroSection;
