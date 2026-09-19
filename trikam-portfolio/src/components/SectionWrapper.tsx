import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  sectionIndex?: number;
}

const SectionWrapper = ({ id, title, subtitle, children, sectionIndex }: SectionWrapperProps) => (
  <section id={id} className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        {/* Section label row */}
        <div className="flex items-center gap-4 mb-5">
          <div className="section-accent-line" />
          {sectionIndex !== undefined && (
            <span className="text-[10px] font-mono font-bold text-muted-foreground/50 tracking-[0.25em] uppercase">
              {String(sectionIndex).padStart(2, "0")}
            </span>
          )}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm md:text-base max-w-xl">
            {subtitle}
          </p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
