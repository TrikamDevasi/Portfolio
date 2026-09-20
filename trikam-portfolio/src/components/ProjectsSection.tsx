import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  /* ─── TIER 1: Deep Technical Projects ─── */
  {
    name: "SkillSense AI",
    tagline: "AI-Assisted Skill Assessment & Career Intelligence Platform",
    category: "full-stack",
    tier: 1,
    architectureDetails: [
      "Next.js Interactive Client",
      "↓ RESTful Endpoints",
      "Node.js & Express API Gateway",
      "↓ Redis Message Broker",
      "LLM Evaluation Worker Pipeline",
      "↓ MongoDB Atlas Storage",
      "Structured Report Synthesis",
    ],
    deploymentNote: "Node.js backend with async Redis queuing to prevent request timeouts during multi-stage LLM evaluation.",
    description: "Full-stack career assessment platform that conducts automated technical diagnostic tests and synthesizes multi-dimensional skill evaluations via LLM pipelines.",
    keyFeatures: [
      "Asynchronous background task processing via Redis queue architecture",
      "Dynamic prompt engineering with structured JSON schema outputs",
      "JWT-based secure session management and profile progress tracking",
      "Awarded 3rd Place at SU Hackathon 2026",
    ],
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Redis", "OpenAI API", "TypeScript"],
    status: "Active Development · Hackathon Winner",
    github: "https://github.com/TrikamDevasi/SkillSense_AI",
  },
  {
    name: "Game Hub",
    tagline: "Real-Time Multiplayer Gaming Portal & WebSocket Room Engine",
    category: "games",
    tier: 1,
    architectureDetails: [
      "React Client (Browser Canvas)",
      "↓ Socket.io Event Stream",
      "Node.js Socket Gateway",
      "↓ Room-Based Namespacing",
      "Server State Machine",
      "↓ Low-Latency Broadcast",
      "Connected Players (Synchronized)",
    ],
    deploymentNote: "Socket.io room architecture maintaining consistent game state across concurrent multiplayer sessions.",
    description: "Real-time multiplayer browser gaming platform supporting simultaneous player rooms with synchronized state management and sub-50ms event latency.",
    keyFeatures: [
      "Room-based matchmaking and instant lobby creation",
      "Server-authoritative state machine preventing client-side desync",
      "Responsive interactive game board with real-time turn notifications",
      "Deployed and playable online via GitHub Pages",
    ],
    tech: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    live: "https://trikamdevasi.github.io/game-portal",
    github: "https://github.com/TrikamDevasi/game-portal",
  },

  /* ─── TIER 2: Full-Stack & Frontend Applications ─── */
  {
    name: "Cinephiles Watch",
    tagline: "Movie Discovery & Cinematic Exploration Web App",
    category: "frontend",
    tier: 2,
    description: "Feature-packed movie exploration platform integrating TMDB API to deliver fast movie discovery, category browsing, and trailer details.",
    keyFeatures: [
      "Debounced real-time search with instant query results",
      "Dynamic genre and rating filtering across thousands of titles",
      "Fully responsive mobile-friendly UI crafted from custom Figma designs",
      "Live deployment hosted on Render",
    ],
    tech: ["React", "Tailwind CSS", "TMDB API", "React Router", "Figma"],
    live: "https://cinephiles-watch-react-js.onrender.com/",
    github: "https://github.com/TrikamDevasi/cinephiles-watch-react.js-.git",
    figma: "https://www.figma.com/proto/ZRRy0ASHhexMkGPwNhUDQK/Untitled?page-id=0%3A1&team_id=1583156995664834349&node-id=1003-43&t=m9PW1ljhrDRXTmxL-1",
  },
  {
    name: "Expense Manager",
    tagline: "Full-Stack Financial Dashboard & Budget Tracking Application",
    category: "full-stack",
    tier: 2,
    description: "Secure budget management system with category-wise expenditure analytics, MongoDB persistence, and responsive transaction logging.",
    keyFeatures: [
      "JWT authentication with protected RESTful API routes",
      "MongoDB aggregation pipeline for category summaries and historical analysis",
      "Interactive data visualizations for spending breakdown",
      "Live production deployment on Netlify",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript", "CSS3"],
    live: "https://expense-management-odoo.netlify.app/",
    github: "https://github.com/Trikamcg/expense_management/tree/main/project",
  },
  {
    name: "Tic Tech Toe (E-Commerce)",
    tagline: "Full-Stack Tech Storefront with PostgreSQL & Docker",
    category: "full-stack",
    tier: 2,
    description: "Comprehensive e-commerce application featuring product catalog indexing, cart operations, user authentication, and containerized Docker setup.",
    keyFeatures: [
      "Relational PostgreSQL database schema design for products and orders",
      "Google OAuth 2.0 social sign-in integration",
      "Docker Compose containerization for isolated development and deployment",
      "Modular REST backend architecture with Express",
    ],
    tech: ["React", "PostgreSQL", "Express", "Docker", "Node.js"],
    github: "https://github.com/TrikamDevasi/tic_tech_toe-ecommerce-website-.git",
  },

  /* ─── TIER 3: UI Recreations & Practice ─── */
  {
    name: "Netflix Web Interface",
    tagline: "UI Recreation with Dynamic Previews & TMDB Data",
    category: "other",
    tier: 3,
    description: "Frontend recreation of the Netflix streaming interface focusing on cinematic layouts, trailer modals, and TMDB media feeds.",
    keyFeatures: [
      "Dynamic banner backdrop and row-based movie carousels",
      "Trailer preview integration and responsive video modals",
      "State persistence with Firebase and React Hooks",
    ],
    tech: ["React", "Firebase", "TMDB API", "Tailwind CSS"],
    github: "https://github.com/TrikamDevasi/netflix-clone",
    live: "https://trikam-netflix-clone.netlify.app/",
  },
  {
    name: "Amazon Storefront UI",
    tagline: "E-Commerce Shopping Cart & Checkout Interface",
    category: "other",
    tier: 3,
    description: "Frontend store implementation simulating the Amazon shopping flow, user authentication state, and cart subtotal calculation.",
    keyFeatures: [
      "Cart state management using React Context API",
      "Firebase authentication and user profile session handling",
      "Responsive product grid with pricing calculations",
    ],
    tech: ["React", "Firebase", "Context API", "CSS Grid"],
    github: "https://github.com/TrikamDevasi/amazon-clone",
    live: "https://trikam-amazon-clone.netlify.app/",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full-Stack" },
  { id: "games", label: "Real-Time" },
  { id: "frontend", label: "Frontend" },
  { id: "other", label: "UI Recreations" },
] as const;

type CategoryId = typeof categories[number]["id"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Real-world applications and engineering experiments">
      {/* ── Filter Tabs ── */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            aria-pressed={activeFilter === cat.id}
            className={`filter-pill ${
              activeFilter === cat.id ? "filter-pill-active" : "filter-pill-inactive"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Projects Grid ── */}
      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            activeFilter === "all" ? (
              <div className="w-full space-y-10">
                {/* Tier 1: Deep technical projects */}
                <div>
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                    Deep Dives
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    {filteredProjects.filter(p => p.tier === 1).map((project, i) => (
                      <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                  </div>
                </div>

                {/* Tier 2 */}
                <div>
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                    Full-Stack & Web Apps
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.filter(p => p.tier === 2).map((project, i) => (
                      <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                  </div>
                </div>

                {/* Tier 3 */}
                <div>
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                    UI Recreations
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.filter(p => p.tier === 3).map((project, i) => (
                      <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.name} project={project} index={i} />
                ))}
              </motion.div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center w-full"
            >
              <p className="text-muted-foreground font-mono text-sm">
                No projects in this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </SectionWrapper>
  );
};

export default ProjectsSection;
