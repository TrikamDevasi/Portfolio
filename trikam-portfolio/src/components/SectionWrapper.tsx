import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, subtitle, children }: SectionWrapperProps) => (
  <section id={id} className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && <p className="text-muted-foreground text-base">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
