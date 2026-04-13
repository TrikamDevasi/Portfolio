import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
      { name: "Socket.io" },
    ],
  },
  {
    title: "DevOps & Quality Engineering",
    skills: [
      { name: "GitHub Actions", level: "Applied" },
      { name: "Docker", level: "Applied" },
      { name: "AWS EC2 / S3", level: "Applied" },
      { name: "Jest", level: "Applied" },
      { name: "Cypress / Playwright", level: "Applied" },
      { name: "Redis Pub/Sub", level: "Applied" },
    ],
  },
  {
    title: "Tools & Learning",
    skills: [
      { name: "Git/GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Netlify" },
      { name: "Render" },
      { name: "System Design", level: "Learning" },
    ],
  },
  {
    title: "AI & APIs",
    skills: [
      { name: "OpenAI API" },
      { name: "Perplexity API" },
      { name: "TMDB API" },
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Technologies I work with">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card glow-border rounded-xl p-6"
        >
          <h3 className="text-primary font-mono text-sm mb-4 font-semibold tracking-wide">
            {`// ${cat.title}`}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 cursor-default ${
                  skill.level === 'Applied' 
                    ? 'bg-primary/10 text-primary border-primary/30 hover:border-primary/60 hover:bg-primary/20' 
                    : 'bg-secondary text-foreground border-border hover:border-primary/50 hover:bg-primary/10'
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
