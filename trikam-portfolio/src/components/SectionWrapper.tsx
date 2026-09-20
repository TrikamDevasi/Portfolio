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

const SectionWrapper = ({ id, title, subtitle, children }: SectionWrapperProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isEmeraldAmbient = id === "projects" || id === "contact";

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
      {/* ── SUBTLE AMBIENT SECTION GLOW (2-4% opacity) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        {isEmeraldAmbient ? (
          <div className="absolute top-4 left-1/4 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-emerald-500/[0.035] blur-[120px]" />
        ) : (
          <div className="absolute top-4 right-1/4 translate-x-1/2 w-[450px] h-[300px] rounded-full bg-surface-elevated/35 blur-[100px]" />
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
              className="w-2 h-2 rounded-full bg-primary shrink-0"
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
                {id}
              </span>
            </motion.div>
          </div>

          {/* Heading with Clean Mask Reveal */}
          <div className="overflow-hidden mb-1.5">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? DURATION.fast : DURATION.slow,
                ease: EASING.easeOut,
                delay: shouldReduceMotion ? 0 : 0.08,
              }}
              className="text-foreground font-bold"
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
