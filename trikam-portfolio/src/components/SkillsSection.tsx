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
              <div key={skill.name} className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-foreground">{skill.name}</span>
                  {skill.level && (
                    <span className="text-[10px] font-mono text-primary uppercase tracking-tighter">
                      {skill.level}
                    </span>
                  )}
                </div>
                {skill.level ? (
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden border border-border/30 mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-primary shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                    />
                  </div>
                ) : (
                  <span className="inline-block px-2 py-0.5 text-[10px] bg-secondary text-muted-foreground rounded-md border border-border/30 mb-3">
                    {skill.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
