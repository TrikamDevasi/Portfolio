import SectionWrapper from "./SectionWrapper";
import { Code2, Server, Database, Cpu } from "lucide-react";

interface SkillDomain {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Code2;
  skills: string[];
}

const skillDomains: SkillDomain[] = [
  {
    id: "01",
    title: "Frontend Architecture",
    subtitle: "Responsive client interfaces, component state, and fluid interaction systems",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3"],
  },
  {
    id: "02",
    title: "Backend & Real-Time Engines",
    subtitle: "Modular REST gateways, WebSocket room pipelines, and server-side state machines",
    icon: Server,
    skills: ["Node.js", "Express.js", "Socket.io", "RESTful APIs", "JWT Authentication", "C++ (OOP & Algorithms)"],
  },
  {
    id: "03",
    title: "Databases & Caching",
    subtitle: "Document stores, relational schemas, and low-latency cache architectures",
    icon: Database,
    skills: ["MongoDB & Mongoose", "PostgreSQL", "Redis (Pub/Sub & Caching)", "Aggregation Pipelines"],
  },
  {
    id: "04",
    title: "DevOps & AI Integrations",
    subtitle: "Containerized environments, LLM prompt engineering, and automated testing",
    icon: Cpu,
    skills: ["Docker (Compose)", "Git & GitHub", "Postman", "OpenAI API", "Google Gemini API", "Vercel & Netlify"],
  },
];

const marqueeTechs = [
  "REACT",
  "NODE.JS",
  "TYPESCRIPT",
  "MONGODB",
  "REDIS",
  "WEBSOCKETS",
  "NEXT.JS",
  "EXPRESS.JS",
  "DOCKER",
  "POSTGRESQL",
  "C++",
  "SOCKET.IO",
  "SYSTEM ARCHITECTURE",
  "REST APIS",
];

const SkillsSection = () => (
  <SectionWrapper
    id="skills"
    title="Technical Capabilities"
    subtitle="Engineered with core Computer Science fundamentals and modern full-stack technologies"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
      {skillDomains.map((domain) => (
        <div
          key={domain.title}
          className="glass-card p-6 sm:p-7 rounded-xl border border-border hover:border-border-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-md"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-primary">
                  [{domain.id}]
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {domain.title}
                </h3>
              </div>
              <domain.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-5">
              {domain.subtitle}
            </p>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
            {domain.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Continuous Horizontal Infinite Tech Marquee */}
    <div className="max-w-5xl mx-auto overflow-hidden py-4 border-y border-border/40 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max items-center gap-8 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
        {[...marqueeTechs, ...marqueeTechs, ...marqueeTechs].map((tech, i) => (
          <div key={i} className="flex items-center gap-8 text-xs font-mono tracking-widest text-muted-foreground/70 uppercase select-none">
            <span className="hover:text-foreground transition-colors cursor-default">{tech}</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
