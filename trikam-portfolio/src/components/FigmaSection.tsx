import { Figma, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const figmaProjects = [
  {
    name: "Comfort Nest",
    description: "Real estate & interior design prototype with modern discovery layouts and property card interactions.",
    link: "https://www.figma.com/proto/Tcep5K8ePwpXfeuoOmXmGm/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=2-2&starting-point-node-id=2%3A2&t=NAofM2Xgy3vvdlle-1",
    type: "Real Estate UI",
  },
  {
    name: "Cinephiles Watch",
    description: "Cinematic interface prototype for movie streaming, dynamic genre filtering, and modal video previews.",
    link: "https://www.figma.com/proto/ZRRy0ASHhexMkGPwNhUDQK/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=1003-43&t=m9PW1ljhrDRXTmxL-1",
    type: "Streaming Media",
  },
  {
    name: "Poco Design — Movie Hub",
    description: "High-fidelity prototype with fluid transitions, community feedback panels, and trailer carousels.",
    link: "https://www.figma.com/proto/crvd8JlvwBClPBBdkkx9nM/poco--design?page-id=10%3A69&team_id=1583156995664834349&node-id=390-139&starting-point-node-id=391%3A297&t=NabvmsqNwTZokCT3-1",
    type: "Design System",
  },
  {
    name: "Interactive Portfolio Portal",
    description: "Dark-mode UI concept exploring responsive grid hierarchies and interactive typography.",
    link: "https://www.figma.com/design/w1OosMc1LrcJHz8npGkic1/Untitled--1-?node-id=38-22&t=eLgVIidY18mygV83-1",
    type: "UI Experiment",
  },
];

const FigmaSection = () => (
  <SectionWrapper id="figma" title="UI/UX Design" subtitle="Figma prototypes, wireframes, and design explorations">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
      {figmaProjects.map((project) => (
        <div
          key={project.name}
          className="glass-card p-5 rounded-xl flex flex-col justify-between hover:border-border-hover hover:-translate-y-1 transition-all duration-200 group"
        >
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <Figma size={16} className="text-muted-foreground" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                {project.type}
              </span>
            </div>

            <h3 className="text-base font-bold text-foreground mb-1.5">
              {project.name}
            </h3>

            <p className="text-xs text-muted-foreground leading-relaxed mb-3.5">
              {project.description}
            </p>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} prototype in Figma`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover border-t border-border/40 pt-3 transition-colors"
          >
            <ExternalLink size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Open Prototype
          </a>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default FigmaSection;
