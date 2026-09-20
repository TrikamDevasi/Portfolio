import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASING, DURATION } from "@/lib/motion";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  sectionIndex?: number;
}

const sectionNumberMap: Record<string, string> = {
  about: "01 / ABOUT",
  skills: "02 / SKILLS",
  projects: "03 / PROJECTS",
  hackathons: "04 / HACKATHONS",
  certifications: "05 / CERTIFICATIONS",
  contact: "06 / CONTACT",
  figma: "UI/UX LAB",
  achievements: "MILESTONES",
  github: "ENGINEERING METRICS",
};

const SectionWrapper = ({ id, title, subtitle, children, sectionIndex }: SectionWrapperProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isEmeraldAmbient = id === "projects" || id === "contact";
  const hasGrid = id === "projects" || id === "hackathons" || id === "contact";
  const sectionLabel =
    sectionNumberMap[id] ||
    (sectionIndex ? `0${sectionIndex} / ${id.toUpperCase()}` : id.toUpperCase());

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? DURATION.fast : DURATION.medium,
        ease: EASING.easeOut,
      }}
      className="section-padding scroll-mt-20 relative overflow-hidden"
    >
      {/* ── SUBTLE CONTINUITY GRID & AMBIENT SECTION GLOW ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        {hasGrid && (
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:44px_44px] text-foreground/[0.015] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        )}
        {isEmeraldAmbient ? (
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-emerald-500/[0.035] blur-[120px]" />
        ) : (
          <div className="absolute top-0 right-1/4 translate-x-1/2 w-[450px] h-[300px] rounded-full bg-surface-elevated/35 blur-[100px]" />
        )}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-8 md:mb-10">
          {/* Section label with animated entry */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <motion.span
              initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.5, opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: DURATION.fast, ease: EASING.easeOut }}
              className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { x: -10, opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: DURATION.normal, ease: EASING.easeOut, delay: 0.05 }}
              className="flex items-center gap-3"
            >
              <div className="section-accent-line" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-muted-foreground/80">
                {sectionLabel}
              </span>
            </motion.div>
          </div>

          {/* Heading with Clean Mask Reveal */}
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? DURATION.fast : DURATION.slow,
                ease: EASING.easeOut,
                delay: shouldReduceMotion ? 0 : 0.08,
              }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground uppercase"
            >
              {title}
            </motion.h2>
          </div>

          {subtitle && (
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? DURATION.fast : DURATION.normal,
                ease: EASING.easeOut,
                delay: shouldReduceMotion ? 0 : 0.16,
              }}
              className="text-muted-foreground text-sm md:text-base max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
