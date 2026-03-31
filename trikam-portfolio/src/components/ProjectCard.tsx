import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy, Construction } from "lucide-react";

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
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isHackathon = project.category === "hackathon";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      style={{
        borderLeft: isHackathon ? "4px solid #F59E0B" : "none",
      }}
      className={`relative glass-card overflow-hidden p-6 flex flex-col group h-full transition-all duration-300 ${
        isHackathon 
          ? "bg-yellow-500/5 glow-border hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]" 
          : "glow-border hover:-translate-y-1"
      }`}
    >
      {/* ── Hackathon Shimmer Badge ── */}
      {isHackathon && (project.badgeText || "🏆 Hackathon") && (
        <div className="absolute top-3 right-3 z-10">
          <div className="relative overflow-hidden px-2.5 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 backdrop-blur-md">
            <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
              <Trophy size={10} className="text-yellow-400" />
              {project.badgeText || "Hackathon"}
            </span>
            {/* Shimmer effect */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none"
            />
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <div className="flex items-start justify-between mb-4">
        <div className="pr-12">
          <h3 className={`text-xl font-bold tracking-tight transition-colors ${
            isHackathon ? "text-yellow-400" : "text-foreground group-hover:text-primary"
          }`}>
            {project.name}
          </h3>
          {isHackathon && project.hackathonName && (
            <p className="text-[10px] font-mono text-yellow-500/70 mt-1 uppercase tracking-tighter">
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
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border/50"
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* ── Status Badge ── */}
      {project.status && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
            <Construction size={12} />
            {project.status}
          </span>
        </div>
      )}

      {/* ── Description ── */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
        {project.description}
      </p>

      {/* ── Tech Stack ── */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`text-[10px] font-mono font-medium px-2 py-1 rounded-md border transition-colors ${
              isHackathon 
                ? "bg-yellow-500/5 text-yellow-500/80 border-yellow-500/20" 
                : "bg-secondary/40 text-muted-foreground border-border hover:border-primary/30"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
