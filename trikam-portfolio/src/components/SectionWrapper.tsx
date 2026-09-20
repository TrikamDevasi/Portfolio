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

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? DURATION.fast : DURATION.medium,
        ease: EASING.easeOut,
      }}
      className="section-padding scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-10">
          {/* Section label row */}
          <div className="flex items-center gap-4 mb-2.5">
            <div className="section-accent-line" />
          </div>

          <h2 className="text-foreground font-bold mb-1.5">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
