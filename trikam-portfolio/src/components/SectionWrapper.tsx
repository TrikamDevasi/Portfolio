import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  sectionIndex?: number;
}

const SectionWrapper = ({ id, title, subtitle, children }: SectionWrapperProps) => (
  <section id={id} className="section-padding scroll-mt-20">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-14">
        {/* Section label row */}
        <div className="flex items-center gap-4 mb-5">
          <div className="section-accent-line" />
        </div>

        <h2 className="text-foreground font-bold mb-3">
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
  </section>
);

export default SectionWrapper;
