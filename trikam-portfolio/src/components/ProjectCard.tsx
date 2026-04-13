import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy, Construction, Layout, Code2, Cpu } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  category: "personal" | "hackathon" | "open-source";
  hackathonName?: string;
  badgeText?: string;
  github?: string;
  live?: string;
  status?: string;
  tier?: 1 | 2 | 3;
  architectureDetails?: string[];
  architectureSchema?: string;
  deploymentNote?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isHackathon = project.category === "hackathon";
  const tier = project.tier || 2; // Default to standard if missing

  // Specific styles based on tier
  const tierContainerClasses = {
    1: "col-span-1 border-primary/20 shadow-lg glow-border",
    2: "glow-border hover:-translate-y-1",
    3: "glow-border hover:-translate-y-1 p-4", // Reduced padding
  };

  const visibleTech = tier === 3 ? project.tech.slice(0, 4) : project.tech;
  const remainingTechCount = project.tech.length - visibleTech.length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      style={{
        borderLeft: isHackathon && tier !== 1 ? "4px solid hsl(var(--accent))" : "none",
      }}
      className={`relative glass-card flex flex-col group h-full transition-all duration-300 overflow-hidden ${
        tier !== 3 ? "p-6" : ""
      } ${tierContainerClasses[tier]} ${
        isHackathon && tier !== 1 ? "bg-accent/5 hover:shadow-[0_0_30px_-5px_rgba(200,100,255,0.3)]" : ""
      } ${tier === 1 ? "lg:flex-row gap-8" : ""}`}
    >
      
      {/* ── Tier 1: Case Study Badge ── */}
      {tier === 1 && (
        <div className="absolute top-4 left-6 z-10">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
            <Cpu size={12} className="text-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Case Study</span>
          </div>
        </div>
      )}

      {/* ── Hackathon Shimmer Badge ── */}
      {isHackathon && (project.badgeText || "🏆 Hackathon") && tier !== 1 && (
        <div className="absolute top-3 right-3 z-10">
          <div className="relative overflow-hidden px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
              <Trophy size={10} className="text-accent" />
              {project.badgeText || "Hackathon"}
            </span>
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none"
            />
          </div>
        </div>
      )}

      {/* ── LEFT/MAIN COLUMN ── */}
      <div className={`flex flex-col flex-1 ${tier === 1 ? "lg:w-3/5 pt-10" : ""}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="pr-8">
            <h3 className={`text-xl font-bold tracking-tight transition-colors ${
              isHackathon && tier !== 1 ? "text-accent" : "text-foreground group-hover:text-primary"
            }`}>
              {project.name}
            </h3>
            {project.architectureSchema && tier === 1 && (
              <p className="text-xs font-mono text-primary/80 mt-2 tracking-tight">
                ↳ {project.architectureSchema}
              </p>
            )}
            {isHackathon && project.hackathonName && tier !== 1 && (
              <p className="text-[10px] font-mono text-accent/70 mt-1 uppercase tracking-tighter">
                {project.hackathonName}
              </p>
            )}
          </div>
          <div className="flex gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border/50"
                title="View Source"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
              <Construction size={12} />
              {project.status}
            </span>
          </div>
        )}

        {/* Description */}
        <p className={`text-sm text-muted-foreground leading-relaxed flex-1 transition-all duration-300 ${
          tier === 1 ? "mb-6" : "mb-6 line-clamp-3 group-hover:line-clamp-none"
        }`}>
          {project.description}
        </p>

        {/* Action: Live Demo */}
        <div className="mb-6">
          {project.live && project.live !== "#" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] group/btn"
            >
              <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-xs font-bold uppercase tracking-widest cursor-not-allowed border border-border/50"
            >
              <Construction size={16} />
              Demo Coming Soon
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
          {visibleTech.map((t) => (
            <span
              key={t}
              className={`text-[10px] font-mono font-medium px-2 py-1 rounded-md border transition-colors ${
                isHackathon && tier !== 1
                  ? "bg-accent/5 text-accent/80 border-accent/20" 
                  : "bg-secondary/40 text-muted-foreground border-border hover:border-primary/30"
              }`}
            >
              {t}
            </span>
          ))}
          {remainingTechCount > 0 && (
            <span className="text-[10px] font-mono font-medium px-2 py-1 rounded-md border bg-background/50 text-muted-foreground border-border/50">
              +{remainingTechCount} more
            </span>
          )}
        </div>

        {/* Footer Tier Tags */}
        {tier === 2 && (
          <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold">
            <Layout size={10} /> Growth Asset
          </div>
        )}
        {tier === 3 && (
          <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold">
            <Code2 size={10} /> Specialty
          </div>
        )}
      </div>

      {/* ── RIGHT COLUMN: Architecture (Tier 1 Only) ── */}
      {tier === 1 && project.architectureDetails && (
        <div className="lg:w-2/5 flex flex-col justify-center mt-6 lg:mt-0 pt-10">
          <div className="arch-diagram flex flex-col gap-1 items-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 w-full text-center border-b border-primary/20 pb-2">
              Architecture Overview
            </div>
            
            {project.architectureDetails.map((node, i) => {
              const isConnector = node.startsWith("↓");
              return isConnector ? (
                <div key={`conn-${i}`} className="arch-connector my-1" />
              ) : (
                <div key={`node-${i}`} className="arch-node w-full max-w-[200px]">
                  {node}
                </div>
              );
            })}
          </div>

          {project.deploymentNote && (
            <div className="mt-4 text-[10px] font-mono text-muted-foreground/80 leading-relaxed bg-secondary/30 p-3 rounded-lg border border-border">
              <strong className="text-primary mr-2">Deploy:</strong>
              {project.deploymentNote}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
