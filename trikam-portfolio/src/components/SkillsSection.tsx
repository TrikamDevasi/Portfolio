import SectionWrapper from "./SectionWrapper";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    skills: ["C++", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io", "JWT Authentication"],
  },
  {
    title: "Databases & Caching",
    skills: ["MongoDB & Mongoose", "PostgreSQL", "Redis (Pub/Sub & Caching)"],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Git & GitHub", "Docker (Compose)", "Postman", "Vercel & Netlify"],
  },
  {
    title: "AI & Integrations",
    skills: ["OpenAI API", "Google Gemini API", "TMDB API", "EmailJS"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Technologies I use to build scalable products">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-border rounded-xl overflow-hidden bg-border">
      {skillCategories.map((cat) => (
        <div
          key={cat.title}
          className="bg-background p-5 flex flex-col hover:bg-surface-elevated/40 transition-colors duration-200"
        >
          <h3 className="text-sm font-bold text-foreground mb-3 pb-2 border-b border-border">
            {cat.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
