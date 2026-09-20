import { motion } from "framer-motion";
import { Figma, ExternalLink, Layout } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const figmaProjects = [
  {
    name: "Comfort Nest",
    description: "Real estate & interior design prototype with modern discovery layouts and property card interactions.",
    link: "https://www.figma.com/proto/Tcep5K8ePwpXfeuoOmXmGm/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=2-2&starting-point-node-id=2%3A2&t=NAofM2Xgy3vvdlle-1",
    tag: "Real Estate UI",
  },
  {
    name: "Cinephiles Watch",
    description: "Cinematic interface prototype for movie streaming, dynamic genre filtering, and modal video previews.",
    link: "https://www.figma.com/proto/ZRRy0ASHhexMkGPwNhUDQK/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=1003-43&t=m9PW1ljhrDRXTmxL-1",
    tag: "Streaming Media",
  },
  {
    name: "Poco Design — Movie Hub",
    description: "High-fidelity prototype with fluid transitions, community feedback panels, and trailer carousels.",
    link: "https://www.figma.com/proto/crvd8JlvwBClPBBdkkx9nM/poco--design?page-id=10%3A69&team_id=1583156995664834349&node-id=390-139&starting-point-node-id=391%3A297&t=NabvmsqNwTZokCT3-1",
    tag: "Design System",
  },
  {
    name: "Interactive Portfolio Portal",
    description: "Dark-mode UI concept exploring glassmorphism, responsive grid hierarchies, and interactive typography.",
    link: "https://www.figma.com/design/w1OosMc1LrcJHz8npGkic1/Untitled--1-?node-id=38-22&t=eLgVIidY18mygV83-1",
    tag: "UI Experiment",
  },
];

const FigmaSection = () => (
  <SectionWrapper id="figma" title="UI/UX Prototyping" subtitle="Figma wireframes, design systems, and user flow explorations" sectionIndex={7}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {figmaProjects.map((project, i) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="glass-card glow-border p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-border-hover transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-surface-elevated text-muted-foreground border border-border">
                <Figma size={22} />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground bg-surface-elevated px-2.5 py-1 rounded-full border border-border">
                {project.tag}
              </span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 transition-colors">
              {project.name}
            </h3>
            
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} prototype in Figma`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline group/link pt-3 border-t border-border/40"
          >
            <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            Open Interactive Prototype
          </a>

          {/* Subtle background decoration */}
          <div className="absolute -bottom-4 -right-4 text-foreground/[0.02] -rotate-12 pointer-events-none hidden sm:block">
            <Layout size={120} />
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default FigmaSection;
