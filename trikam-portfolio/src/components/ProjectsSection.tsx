import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  /* ─── TIER 1: Core Infrastructure & AI ─── */
  {
    name: "SkillSense AI",
    category: "full-stack",
    tier: 1,
    architectureSchema: "LLM Orchestration · Async Task Queue · Email Pipeline",
    architectureDetails: [
      "Next.js Frontend",
      "↓ REST API",
      "Node.js Backend (Express)",
      "↓ Redis Pub/Sub Queue",
      "LLM Inference Worker (Groq/Gemini)",
      "↓ SMTP Email Service",
      "MongoDB Atlas (User/Session Store)",
    ],
    deploymentNote: "Containerized Node.js backend · Redis Pub/Sub for async AI processing · Decoupled email pipeline",
    description: "AI-powered career assessment platform orchestrating multi-LLM inference pipelines. Implements Redis Pub/Sub to decouple asynchronous AI processing from the request lifecycle, enabling non-blocking email delivery and background scoring. Built with Next.js, Node.js, and MongoDB Atlas.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "OpenAI API", "JWT"],
    status: "In Development",
    github: "https://github.com/TrikamDevasi/SkillSense_AI",
    live: "#",
    youtube: "https://youtube.com/demo-placeholder",
    postman: "https://documenter.getpostman.com/view/placeholder",
  },
  {
    name: "Game Hub",
    category: "games",
    tier: 1,
    architectureSchema: "Real-Time Concurrency · WebSocket Room Architecture · State Sync",
    architectureDetails: [
      "React Client",
      "↓ Socket.io Events",
      "Node.js Socket Server",
      "↓ Room-Based Namespacing",
      "Game State Machine",
      "↓ Broadcast to Room",
      "Connected Clients (N players)",
    ],
    deploymentNote: "Socket.io room-based event architecture · Stateful server-side game logic · Real-time client sync",
    description: "Real-time multiplayer gaming platform handling concurrent WebSocket connections via Socket.io room-based architecture. Server-side game state machine ensures consistency across N simultaneous players with sub-50ms broadcast latency.",
    tech: ["React", "Node.js", "Socket.io", "Express"],
    live: "https://trikamdevasi.github.io/game-portal",
    github: "https://github.com/TrikamDevasi/game-portal",
    youtube: "https://youtube.com/demo-placeholder",
  },
  
  /* ─── TIER 2: Full-Stack & Data Layers ─── */
  {
    name: "E-Commerce — Tic Tech Toe",
    category: "full-stack",
    tier: 2,
    description: "Full-stack e-commerce platform with ML-powered product recommendations via Gemini API. Implements Redis caching for session management and product catalog, Google OAuth 2.0 for authentication, and transactional integrity for cart and order operations. Deployed with Docker Compose.",
    deploymentNote: "Redis caching layer · Google OAuth · Dockerized services",
    tech: ["React", "PostgreSQL", "Express", "Redis", "Docker", "Styled Components"],
    github: "https://github.com/TrikamDevasi/tic_tech_toe-ecommerce-website-.git",
    live: "#",
    youtube: "https://youtube.com/demo-placeholder",
    postman: "https://documenter.getpostman.com/view/placeholder",
    figma: "https://figma.com/design-placeholder",
  },
  {
    name: "Expense Manager",
    category: "full-stack",
    tier: 2,
    description: "Full-stack tracker with categories, tracking history, and a structured dashboard. Features JWT-based auth, complex data aggregation pipelines for reporting, and multi-category budget tracking with time-series visualization.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
    live: "https://expense-management-odoo.netlify.app/",
    github: "https://github.com/Trikamcg/expense_management/tree/main/project",
    youtube: "https://youtube.com/demo-placeholder",
    postman: "https://documenter.getpostman.com/view/placeholder",
  },
  {
    name: "Cinephiles Watch – React",
    category: "frontend",
    tier: 2,
    description: "Movie discovery platform with a search-first UI, filters, and detail pages. Features debounced search, genre/rating filters, and a fully responsive design.",
    tech: ["React", "Tailwind CSS", "TMDB API", "React Router"],
    live: "https://cinephiles-watch-react-js.onrender.com/",
    github: "https://github.com/TrikamDevasi/cinephiles-watch-react.js-.git",
    youtube: "https://youtube.com/demo-placeholder",
    figma: "https://www.figma.com/proto/ZRRy0ASHhexMkGPwNhUDQK/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=1003-43&t=m9PW1ljhrDRXTmxL-1",
  },

  /* ─── TIER 3: Specialty / Edge ─── */
  {
    name: "Netflix Clone",
    category: "clones",
    tier: 3,
    description: "High-fidelity Netflix clone featuring dynamic trailer previews, user profiles, and TMDB API integration. Optimized for mobile and desktop viewing.",
    tech: ["React", "Firebase", "TheMovieDB API", "Tailwind CSS"],
    github: "https://github.com/TrikamDevasi/netflix-clone",
    live: "https://trikam-netflix-clone.netlify.app/",
    youtube: "https://youtube.com/demo-placeholder",
  },
  {
    name: "Amazon Clone",
    category: "clones",
    tier: 3,
    description: "A full-featured Amazon clone with product listings, user authentication, and a functional shopping cart using React Context API.",
    tech: ["React", "Firebase", "Context API", "CSS Grid"],
    github: "https://github.com/TrikamDevasi/amazon-clone",
    live: "https://trikam-amazon-clone.netlify.app/",
    youtube: "https://youtube.com/demo-placeholder",
  },
];

const categories = ["all", "games", "clones", "full-stack", "frontend"] as const;
type Category = typeof categories[number];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Things I've built with passion">
      <style dangerouslySetInnerHTML={{__html: `
        .tier-label {
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid hsl(var(--border));
        }
        .tier-section { margin-bottom: 4rem; }
        .grid-tier-1 { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .grid-tier-2 { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr)); gap: 1.5rem; }
        .grid-tier-3 { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr)); gap: 1rem; }
      `}} />

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
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            activeFilter === "all" ? (
              <motion.div layout className="w-full">
                {/* Tier 1: Case Studies */}
                <div className="tier-section">
                  <h3 className="tier-label">Core Infrastructure & AI</h3>
                  <div className="grid-tier-1">
                    {filteredProjects.filter(p => p.tier === 1).map((project, i) => (
                      <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                  </div>
                </div>

                {/* Tier 2: Growth Assets */}
                <div className="tier-section">
                  <h3 className="tier-label">Full-Stack & Data Layers</h3>
                  <div className="grid-tier-2">
                    {filteredProjects.filter(p => p.tier === 2).map((project, i) => (
                      <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                  </div>
                </div>

                {/* Tier 3: Specialty */}
                <div className="tier-section">
                  <h3 className="tier-label">Specialty / Edge</h3>
                  <div className="grid-tier-3">
                    {filteredProjects.filter(p => p.tier === 3).map((project, i) => (
                      <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.name} project={project} index={i} />
                ))}
              </motion.div>
            )
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center w-full"
            >
              <p className="text-muted-foreground font-mono">
                No projects found in this category yet.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </SectionWrapper>
  );
};

export default ProjectsSection;
