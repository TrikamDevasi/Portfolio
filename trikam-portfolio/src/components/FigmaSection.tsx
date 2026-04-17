import { motion } from "framer-motion";
import { Figma, ExternalLink, Layout } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const figmaProjects = [
  {
    name: "Comfort Nest",
    description: "A premium real estate and interior design platform focusing on minimalist aesthetics and user-centric property discovery.",
    link: "https://www.figma.com/proto/Tcep5K8ePwpXfeuoOmXmGm/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=2-2&starting-point-node-id=2%3A2&t=NAofM2Xgy3vvdlle-1",
    tag: "Real Estate",
  },
  {
    name: "Cinephiles Watch",
    description: "Modern UI for movie streaming and discovery, featuring dynamic genre filtering and detailed cinematic layouts.",
    link: "https://www.figma.com/proto/ZRRy0ASHhexMkGPwNhUDQK/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=1003-43&t=m9PW1ljhrDRXTmxL-1",
    tag: "Streaming UI",
  },
  {
    name: "Poco Design — Movie Website",
    description: "High-fidelity prototype for a movie database and community platform, optimized for engagement and smooth transitions.",
    link: "https://www.figma.com/proto/crvd8JlvwBClPBBdkkx9nM/poco--design?page-id=10%3A69&team_id=1583156995664834349&node-id=390-139&starting-point-node-id=391%3A297&t=NabvmsqNwTZokCT3-1",
    tag: "Design System",
  },
  {
    name: "Futuristic Portal Design",
    description: "Experimental UI design exploring glassmorphism, depth, and futuristic interactive elements for portfolio experiences.",
    link: "https://www.figma.com/design/w1OosMc1LrcJHz8npGkic1/Untitled--1-?node-id=38-22&t=eLgVIidY18mygV83-1",
    tag: "UI Experiment",
  },
];

const FigmaSection = () => (
  <SectionWrapper id="figma" title="Figma Designs" subtitle="UI/UX Prototypes & Layouts">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {figmaProjects.map((project, i) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card glow-border p-8 rounded-3xl relative overflow-hidden group hover:bg-secondary/20 transition-all"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-2xl bg-[#F24E1E]/10 text-[#F24E1E]">
                <Figma size={28} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {project.tag}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
              {project.description}
            </p>
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all group/link"
            >
              <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              View Prototype
            </a>
          </div>

          {/* Decorative background element */}
          <div className="absolute -bottom-6 -right-6 text-foreground/[0.02] -rotate-12 transition-transform group-hover:scale-110 hidden sm:block">
            <Layout size={160} />
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default FigmaSection;
