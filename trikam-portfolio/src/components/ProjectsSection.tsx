import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  /* ─── PERSONAL PROJECTS ─── */
  {
    name: "SkillSense AI",
    category: "hackathon",
    hackathonName: "AI Integration Build",
    badgeText: "🏆 Top Innovation",
    description: "An intelligent assessment platform that leverages Large Language Models (LLMs) to objectively evaluate developer skills through automated code analysis and interactive scoring.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "OpenAI API", "JWT"],
    status: "In Development",
    github: "https://github.com/TrikamDevasi/SkillSense_AI",
  },
  {
    name: "Cinephiles Watch – React",
    category: "personal",
    description: "Movie discovery platform with a search‑first UI, filters, and detail pages. Features debounced search, genre/rating filters, and a fully responsive design.",
    tech: ["React", "Tailwind CSS", "TMDB API", "React Router"],
    live: "https://cinephiles-watch-react-js.onrender.com/",
    github: "https://github.com/TrikamDevasi/cinephiles-watch-react.js-.git",
  },
  {
    name: "Game Hub",
    category: "personal",
    description: "Realtime multiplayer hub for games like Chess and TicTacToe. Features real-time sync, room management, and player matching via WebSockets.",
    tech: ["React", "Node.js", "Socket.io", "Express"],
    live: "https://trikamdevasi.github.io/game-portal",
    github: "https://github.com/TrikamDevasi/game-portal",
  },
  {
    name: "Expense Manager",
    category: "hackathon",
    hackathonName: "Odoo Hackathon (Gujarat Vidyapith)",
    badgeText: "🏆 Odoo Hackathon",
    description: "Full‑stack tracker with categories, tracking history, and a structured dashboard. Features user authentication, data visualization, and report exports.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
    live: "https://expense-management-odoo.netlify.app/",
    github: "https://github.com/Trikamcg/expense_management/tree/main/project",
  },
  {
    name: "ArtPark",
    category: "hackathon",
    hackathonName: "CodeForge Hackathon",
    badgeText: "🏆 CodeForge Hackathon",
    description: "A collaborative digital art park where users can create, share, and showcase generative art. Features real-time rendering and gallery management.",
    tech: ["React", "Canvas API", "Firebase", "Framer Motion", "Material UI"],
    github: "https://github.com/TrikamDevasi/ArtPark_CodeForge_Hackathon.git",
  },
  {
    name: "E-Commerce — Tic Tech Toe",
    category: "hackathon",
    hackathonName: "Tic Tech Toe Hackathon",
    badgeText: "🏆 Tic Tech Toe",
    description: "A full-featured e-commerce prototype with dynamic product filtering, persistent shopping cart logic, and a responsive checkout workflow.",
    tech: ["React", "Context API", "Styled Components", "Express", "PostgreSQL"],
    github: "https://github.com/TrikamDevasi/tic_tech_toe-ecommerce-website-.git",
  },
  {
    name: "Team Quantum Coders",
    category: "hackathon",
    hackathonName: "SU Hackathon",
    badgeText: "🏆 SU Hackathon",
    description: "A collaborative resource management tool for rapid emergency response coordination. Optimized for high-concurrency access and mobile performance.",
    tech: ["React Native", "Firebase", "Google Maps SDK", "Node.js"],
    github: "https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-.git",
  },
  {
    name: "Nexus Feed",
    category: "personal",
    description: "Modern card-based feed interface with advanced animations. UI experiment focused on fluid interactions and 'Glassmorphism' aesthetics.",
    tech: ["React", "Framer Motion", "CSS Modules"],
    live: "https://nexus-feed-demo.netlify.app/",
  },
  {
    name: "Cinephiles Watch – Vanilla JS",
    category: "personal",
    description: "Framework‑free movie discovery platform focused on fast initial load. Raw performance-focused explorer built entirely with native DOM APIs.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript ES6", "TMDB API"],
    live: "https://cinephiles-watch.onrender.com/",
  },
  {
    name: "Quiz Game",
    category: "personal",
    description: "Browser‑based multiplayer quiz game with real-time score tracking. Engineered for responsive state management across multiple clients.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/TrikamDevasi/quiz-game.git",
  },
];

const categories = ["all", "hackathon", "personal", "open-source"] as const;
type Category = typeof categories[number];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Things I've built with passion">
      {/* ── Filter Tabs ── */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all relative ${
              activeFilter === cat
                ? "text-primary border-primary bg-primary/10"
                : "text-muted-foreground border-border hover:border-primary/40 hover:bg-secondary"
            } border`}
          >
            {cat}
            {activeFilter === cat && (
              <motion.div
                layoutId="activeFilter"
                className="absolute -bottom-px left-1/4 right-1/4 h-px bg-primary shadow-[0_0_10px_rgba(0,217,255,0.8)]"
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Projects Grid ── */}
      <LayoutGroup>
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* ── Empty State ── */}
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="text-muted-foreground font-mono">
            No projects found in this category yet.
          </p>
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
