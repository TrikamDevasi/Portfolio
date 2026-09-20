import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Wrench, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    icon: Code,
    skills: ["C++", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io (WebSockets)", "JWT Authentication"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["MongoDB & Mongoose", "PostgreSQL", "Redis (Pub/Sub & Caching)"],
  },
  {
    title: "DevOps & Tooling",
    icon: Wrench,
    skills: ["Git & GitHub", "Docker (Compose)", "Postman API Testing", "VS Code", "Vercel & Netlify"],
  },
  {
    title: "AI & External Integrations",
    icon: Sparkles,
    skills: ["OpenAI API", "Google Gemini API", "TMDB API", "EmailJS"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Technical Skills" subtitle="Technologies and tools I use to build scalable products" sectionIndex={2}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="glass-card glow-border rounded-2xl p-6 flex flex-col h-full hover:border-border-hover transition-all"
        >
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/50">
            <div className="p-2.5 rounded-xl bg-surface-elevated text-muted-foreground border border-border">
              <cat.icon size={18} />
            </div>
            <h3 className="text-base font-bold text-foreground tracking-tight">
              {cat.title}
            </h3>
          </div>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {cat.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
