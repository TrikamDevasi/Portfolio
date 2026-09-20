import { useState } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASING, DURATION } from "@/lib/motion";
import ResumeModal from "./ResumeModal";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Multi-tier scroll parallax
  const bgTypoParallaxY = useTransform(scrollY, [0, 500], [0, -28]);
  const gridParallaxY = useTransform(scrollY, [0, 500], [0, 8]);
  const typoParallaxY = useTransform(scrollY, [0, 500], [0, 10]);
  const imageParallaxY = useTransform(scrollY, [0, 500], [0, 15]);
  const metaParallaxY = useTransform(scrollY, [0, 500], [0, 20]);

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
    <section className="relative pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-24 lg:pb-20 px-6 md:px-12 overflow-hidden">
      {/* ── BACKGROUND TYPOGRAPHIC DEPTH LAYER ── */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: bgTypoParallaxY }}
        aria-hidden="true"
        className="absolute -top-10 left-[-4%] text-[130px] sm:text-[180px] lg:text-[230px] xl:text-[280px] font-black tracking-tighter text-foreground/[0.022] select-none pointer-events-none uppercase whitespace-nowrap -z-10 leading-none"
      >
        FULL-STACK
      </motion.div>

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

        {/* Technical Grid (1px lines at 0.028 opacity) with subtle scroll drift */}
        <motion.div
          style={shouldReduceMotion ? {} : { y: gridParallaxY }}
          className="absolute inset-0 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:44px_44px] text-foreground/[0.028] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
        />

        {/* Subtle Film Grain / Noise Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:3px_3px]"
        />

        {/* Subtle Floating Technical Metadata Nodes with continuous oscillation */}
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? {} : { y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 right-24 hidden lg:block text-[11px] font-mono font-medium text-foreground/[0.22] tracking-widest select-none pointer-events-none border border-border/40 px-2.5 py-1 rounded bg-surface/30 backdrop-blur-sm"
        >
          [01] ARCHITECTURE
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? {} : { y: [8, -8, 8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-12 hidden lg:block text-[10px] font-mono text-foreground/[0.22] tracking-widest select-none pointer-events-none border border-border/40 px-2.5 py-1 rounded bg-surface/30 backdrop-blur-sm"
        >
          REACT · NODE · TS · AI
        </motion.div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 lg:gap-12">

          {/* ── Left Column: Editorial Identity & Oversized Typography (~58%) ── */}
          <motion.div
            style={shouldReduceMotion ? {} : { y: typoParallaxY }}
            className="flex flex-col items-start text-left md:col-span-7 max-w-[640px]"
          >
            {/* Signature Technical Label */}
            <motion.div
              {...getEntrance(0.05)}
              className="flex items-center gap-2.5 mb-3 text-muted-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                FULL-STACK · AI · REAL-TIME
              </span>
              <span className="text-border text-xs">/</span>
              <span className="text-xs font-mono text-muted-foreground/80">2026</span>
            </motion.div>

            {/* Oversized Solid Typographic Centerpiece with Staggered Offset */}
            <div className="overflow-hidden mb-3 w-full">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { y: "0%", opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? DURATION.fast : DURATION.cinematic,
                  ease: EASING.easeOut,
                  delay: shouldReduceMotion ? 0 : 0.1,
                }}
                className="flex flex-col"
              >
                <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[102px] font-extrabold tracking-tight text-foreground leading-[0.92] uppercase">
                  TRIKAM
                </h1>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[102px] font-extrabold tracking-tight text-foreground leading-[0.92] uppercase sm:pl-10 lg:pl-16">
                  DEVASI
                </h1>
              </motion.div>
            </div>

            {/* Role Subtitle */}
            <motion.p
              {...getEntrance(0.22)}
              className="text-base sm:text-lg font-semibold text-muted-foreground mb-3 tracking-tight"
            >
              Full-Stack Developer &amp; B.Tech CSE Student
            </motion.p>

            {/* Concise Bio */}
            <motion.p
              {...getEntrance(0.32)}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 max-w-lg"
            >
              I build practical, resilient web software connecting well-crafted React interfaces
              with scalable Node.js backends and real-time event engines.
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
              <span className="text-border" aria-hidden="true">·</span>
              <span>Redis</span>
            </motion.div>

            {/* Action CTAs with Magnetic Effect */}
            <motion.div
              {...getEntrance(0.52)}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <MagneticButton distance={0.25} maxOffset={8}>
                <Link
                  to="/projects"
                  className="group btn-primary active:scale-[0.98] shadow-sm inline-flex items-center gap-2"
                >
                  <span>View Projects</span>
                  <ChevronRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1.5"
                  />
                </Link>
              </MagneticButton>
              <MagneticButton distance={0.25} maxOffset={8}>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="group btn-secondary active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <FileText
                    size={15}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                  <span>Resume</span>
                </button>
              </MagneticButton>
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
          </motion.div>

          {/* ── Right Column: Physical Layered Editorial Portrait (~42%) ── */}
          <motion.div
            style={shouldReduceMotion ? {} : { y: imageParallaxY }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? DURATION.fast : DURATION.slow,
              ease: EASING.easeOut,
              delay: shouldReduceMotion ? 0 : 0.25,
            }}
            className="flex flex-col items-center md:items-end justify-center md:col-span-5"
          >
            {/* Multi-layered Physical Depth Stack */}
            <div className="relative group" data-cursor="image">
              {/* Layer 1: Dark surface offset backing */}
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 rounded-2xl bg-surface-elevated/80 border border-border translate-x-2.5 translate-y-2.5 -z-20 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5"
              />
              {/* Layer 2: Subtle emerald translucent accent frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/20 -z-10 transition-all duration-300 group-hover:border-emerald-500/35"
              />
              {/* Layer 3: Image Container */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[310px] lg:h-[310px] xl:w-[330px] xl:h-[330px] rounded-xl overflow-hidden border border-border hover:border-border-hover bg-surface shadow-xl cursor-pointer"
              >
                <img
                  src="/trikam-devasi-profile.jpg"
                  alt="Trikam Devasi — Full-Stack Developer"
                  width={400}
                  height={400}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://github.com/TrikamDevasi.png?size=400";
                  }}
                />
              </motion.div>
              {/* Layer 4: Micro-metadata tag badge */}
              <div className="absolute -bottom-3 -right-3 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-elevated border border-border shadow-md text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Identity // 2026</span>
              </div>
            </div>

            {/* University & Degree Details */}
            <div className="mt-5 flex items-center justify-between text-[11px] font-mono text-muted-foreground/80 w-56 sm:w-64 lg:w-[310px] xl:w-[330px] px-1">
              <span>Swaminarayan University</span>
              <span>B.Tech CSE · 2025–2029</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Vertical Editorial Scroll Indicator (Right Edge) ── */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: metaParallaxY }}
        className="hidden xl:flex flex-col items-center gap-3 absolute right-6 bottom-10 z-20 pointer-events-none select-none text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest"
      >
        <span>01</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [-48, 48] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-primary"
          />
        </div>
        <span className="[writing-mode:vertical-lr] tracking-widest text-[9px]">SCROLL</span>
      </motion.div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default HeroSection;
