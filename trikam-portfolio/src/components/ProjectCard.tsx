import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Trophy, Construction, Youtube, MessageSquare, Figma, CheckCircle } from "lucide-react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle 3D tilt coordinates (±3deg max to stay editorial & precise)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), { stiffness: 260, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { stiffness: 260, damping: 25 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const hasLive = isValidUrl(project.live);
  const hasGithub = isValidUrl(project.github);
  const hasYoutube = isValidUrl(project.youtube);
  const hasPostman = isValidUrl(project.postman);
  const hasFigma = isValidUrl(project.figma);

  const isFeatured = tier === 1;

  return (
    <motion.div
      ref={cardRef}
      layout
      data-cursor="project"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.2), ease: [0.22, 1, 0.36, 1] }}
      style={
        shouldReduceMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }
      }
      className={`relative glass-card flex flex-col group h-full transition-[border-color,box-shadow] duration-300 hover:border-border-hover overflow-hidden p-5 ${
        isFeatured
          ? "lg:flex-row gap-6 md:p-6 hover:border-primary/40 shadow-sm hover:shadow-xl"
          : "shadow-sm hover:shadow-md"
      }`}
    >
      {/* Subtle radial hover highlight inside card */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_65%)] -z-0"
        aria-hidden="true"
      />

      {/* ── Hackathon Tag ── */}
      {isHackathon && (
        <div className="absolute top-3 right-3 z-10">
          <div className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border group-hover:border-border-hover transition-colors">
            <span className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
              <Trophy size={11} />
              {project.badgeText || "Hackathon"}
            </span>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT COLUMN ── */}
      <div className={`flex flex-col flex-1 ${tier === 1 ? "lg:w-3/5" : ""}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3 gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="text-xs text-muted-foreground font-mono mt-1">
                {project.tagline}
              </p>
            )}
            {project.hackathonName && (
              <p className="text-[11px] font-mono text-muted-foreground mt-1 uppercase tracking-wider">
                {project.hackathonName}
              </p>
            )}
          </div>

          {/* External Action Links */}
          <div className="flex items-center gap-2 shrink-0">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                title="Source Code"
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
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
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
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                title="Video Demo"
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
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                title="API Docs"
              >
                <MessageSquare size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-elevated border border-border text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-wider">
              <Construction size={11} />
              {project.status}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Engineering Highlights */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-5 space-y-1.5 bg-surface-elevated p-3.5 rounded-lg border border-border">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2">
              Engineering Highlights
            </span>
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                <CheckCircle size={12} className="text-primary mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Primary Action */}
        <div className="mt-auto pt-2 mb-4">
          {hasLive ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest transition-all duration-200 hover:bg-primary-hover active:scale-[0.98] group/btn shadow-sm"
            >
              <ExternalLink size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              Live Demo
            </a>
          ) : hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-border bg-surface-elevated text-foreground hover:border-border-hover hover:bg-surface-hover text-xs font-semibold uppercase tracking-widest transition-all duration-200 active:scale-[0.98] group/btn"
            >
              <Github size={14} className="transition-transform duration-200 group-hover/btn:-translate-y-0.5" />
              GitHub
            </a>
          ) : (
            <div className="w-full text-center py-2 px-4 rounded border border-border text-muted-foreground text-xs font-mono">
              Deployment In Progress
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-surface-hover text-muted-foreground border border-border hover:bg-surface-elevated hover:border-border-hover hover:text-foreground transition-all duration-150 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── ARCHITECTURE COLUMN (Tier 1 only) ── */}
      {tier === 1 && project.architectureDetails && (
        <div className="lg:w-2/5 flex flex-col justify-center mt-6 lg:mt-0">
          <div className="arch-diagram flex flex-col gap-1 items-center">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 w-full text-center border-b border-border pb-2">
              System Architecture
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
            <div className="mt-3 text-[11px] font-mono text-muted-foreground leading-relaxed bg-surface-elevated p-3 rounded-lg border border-border">
              <strong className="text-foreground mr-1.5 font-bold">Stack:</strong>
              {project.deploymentNote}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
