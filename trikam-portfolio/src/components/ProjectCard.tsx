import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy, Construction, Cpu, Youtube, MessageSquare, Figma, CheckCircle } from "lucide-react";

export interface Project {
  name: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  tech: string[];
  category: "all" | "full-stack" | "games" | "frontend" | "other";
  hackathonName?: string;
  badgeText?: string;
  github?: string;
  live?: string;
  status?: string;
  tier?: 1 | 2 | 3;
  architectureDetails?: string[];
  architectureSchema?: string;
  deploymentNote?: string;
  youtube?: string;
  postman?: string;
  figma?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const isValidUrl = (url?: string): boolean => {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed === "" || trimmed === "#") return false;
  if (trimmed.includes("placeholder") || trimmed.includes("example.com")) return false;
  return trimmed.startsWith("http://") || trimmed.startsWith("https://");
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isHackathon = Boolean(project.hackathonName || project.badgeText);
  const tier = project.tier || 2;

  const hasLive = isValidUrl(project.live);
  const hasGithub = isValidUrl(project.github);
  const hasYoutube = isValidUrl(project.youtube);
  const hasPostman = isValidUrl(project.postman);
  const hasFigma = isValidUrl(project.figma);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative glass-card flex flex-col group h-full transition-all duration-300 overflow-hidden p-6 glow-border ${
        tier === 1 ? "lg:flex-row gap-8 border-primary/30" : ""
      }`}
    >
      {/* ── Tier 1: Case Study Tag ── */}
      {tier === 1 && (
        <div className="absolute top-4 left-6 z-10">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
            <Cpu size={12} className="text-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Flagship Project</span>
          </div>
        </div>
      )}

      {/* ── Hackathon Tag ── */}
      {isHackathon && (
        <div className="absolute top-3 right-3 z-10">
          <div className="px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-md">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5">
              <Trophy size={11} className="text-accent" />
              {project.badgeText || "Hackathon Project"}
            </span>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT COLUMN ── */}
      <div className={`flex flex-col flex-1 ${tier === 1 ? "lg:w-3/5 pt-8" : ""}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3 gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="text-xs text-primary font-mono mt-1 tracking-tight">
                {project.tagline}
              </p>
            )}
            {project.hackathonName && (
              <p className="text-[11px] font-mono text-accent/80 mt-1 uppercase tracking-wider">
                {project.hackathonName}
              </p>
            )}
          </div>

          {/* External Action Links (Strictly Validated) */}
          <div className="flex items-center gap-2 shrink-0">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="p-2 rounded-lg bg-secondary/60 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border/50"
                title="View Source Code"
              >
                <Github size={16} />
              </a>
            )}
            {hasFigma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} Figma Prototype`}
                className="p-2 rounded-lg bg-[#F24E1E]/10 text-[#F24E1E] hover:bg-[#F24E1E]/20 transition-all border border-[#F24E1E]/20"
                title="Figma Prototype"
              >
                <Figma size={16} />
              </a>
            )}
            {hasYoutube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${project.name} Video Demo`}
                className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all border border-red-500/20"
                title="Watch Demo"
              >
                <Youtube size={16} />
              </a>
            )}
            {hasPostman && (
              <a
                href={project.postman}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} API Documentation`}
                className="p-2 rounded-lg bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-all border border-orange-500/20"
                title="API Documentation"
              >
                <MessageSquare size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Status Badge if in active development */}
        {project.status && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-400 uppercase tracking-wider">
              <Construction size={12} />
              {project.status}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Problem / Solution & Key Features (for deep technical clarity) */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-5 space-y-1.5 bg-secondary/30 p-3.5 rounded-xl border border-border/40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/90 block mb-2">
              Key Engineering Highlights
            </span>
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80 leading-snug">
                <CheckCircle size={13} className="text-primary mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Primary Action: Live Demo or GitHub Link */}
        <div className="mt-auto pt-2 mb-4">
          {hasLive ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] active:scale-[0.98]"
            >
              <ExternalLink size={15} />
              Launch Live Demo
            </a>
          ) : hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground hover:border-primary/50 hover:text-primary text-xs font-bold uppercase tracking-widest transition-all"
            >
              <Github size={15} />
              Explore GitHub Repository
            </a>
          ) : (
            <div className="w-full text-center py-2 px-4 rounded-lg bg-muted/40 border border-border text-muted-foreground text-xs font-mono">
              Demo Deployment In Progress
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── ARCHITECTURE COLUMN (Tier 1 Flagship Only) ── */}
      {tier === 1 && project.architectureDetails && (
        <div className="lg:w-2/5 flex flex-col justify-center mt-6 lg:mt-0 pt-8 lg:pt-0">
          <div className="arch-diagram flex flex-col gap-1 items-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 w-full text-center border-b border-primary/20 pb-2">
              System Architecture Workflow
            </div>
            
            {project.architectureDetails.map((node, i) => {
              const isConnector = node.startsWith("↓");
              return isConnector ? (
                <div key={`conn-${i}`} className="arch-connector my-0.5" />
              ) : (
                <div key={`node-${i}`} className="arch-node w-full max-w-[220px]">
                  {node}
                </div>
              );
            })}
          </div>

          {project.deploymentNote && (
            <div className="mt-3 text-[11px] font-mono text-muted-foreground leading-relaxed bg-secondary/40 p-3 rounded-lg border border-border/60">
              <strong className="text-primary mr-1.5 font-bold">Stack Details:</strong>
              {project.deploymentNote}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
