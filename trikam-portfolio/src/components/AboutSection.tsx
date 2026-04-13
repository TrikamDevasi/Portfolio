import { motion } from "framer-motion";
import { Rocket, BookOpen, Users, Calendar, GraduationCap, Briefcase, Code } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const codeBlock = `const trikam = {
  location: "Ahmedabad, Gujarat, India",
  education: "B.Tech CSE @ Swaminarayan University",
  semester: "2nd Sem (2025-2029)",
  passions: ["Building", "Learning", "Shipping"],
  currentlyArchitecting: "SkillSense AI",
  infrastructure: ["AWS", "Docker", "CI/CD"],
  openTo: ["Freelance", "Internships", "Collabs"],
  coffee: true ☕
};`;

const highlights = [
  { icon: Rocket, label: "Currently Building", value: "SkillSense AI" },
  { icon: BookOpen, label: "Learning", value: "System Design, AWS, Docker" },
  { icon: Users, label: "Open To", value: "Freelance & Collaborations" },
];

const timeline = [
  {
    year: "2025 - 2029",
    title: "B.Tech in CSE @ Swaminarayan University",
    description: "Currently in 2nd Semester. Focusing on Core CS fundamentals, AI integration, and Scalable Web Architectures.",
    icon: GraduationCap,
  },
  {
    year: "2024 - 2025",
    title: "Freelance & Real-World Projects",
    description: "Built and shipped production-ready web apps, expense trackers, and professional portfolios for clients.",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "Full-Stack Specialization",
    description: "Mastered React, Node.js, and MongoDB. Built over 10+ projects including Cinephiles and Game Hub.",
    icon: Code,
  },
  {
    year: "2023",
    title: "Coding Foundation",
    description: "Started with the basics of HTML, CSS, and JavaScript. Developed a passion for building for the web.",
    icon: Calendar,
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="A little about who I am">
      <div className="space-y-16">
        {/* ── Bio & Code Block ── */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Full-Stack Architect and B.Tech CSE student at Swaminarayan University, Kalol (2nd Sem, 2025-29).
              I love building web applications that solve real problems, with a focus on system design, observability, and building infrastructure that survives scale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From hackathon-winning distributed systems to containerized AI-powered assessment platforms, I thrive on turning complex ideas into shipped, resilient products.
              When I'm not coding, you'll find me exploring architecture patterns, optimizing CI/CD pipelines, or contributing to open source.
            </p>

            <div className="space-y-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 glass-card p-3 rounded-lg">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glow-border rounded-xl p-6 overflow-hidden md:sticky md:top-24"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">about.ts</span>
            </div>
            <pre className="text-sm font-mono text-muted-foreground leading-relaxed overflow-x-auto">
              <code>{codeBlock}</code>
            </pre>
          </motion.div>
        </div>

        {/* ── Journey Timeline ── */}
        <div className="pt-8">
          <h3 className="text-2xl font-bold mb-10 text-center lg:text-left flex items-center gap-3">
            <Calendar className="text-primary" /> My Journey
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group h-full"
              >
                <div className="glass-card glow-border p-6 rounded-2xl h-full flex flex-col bg-secondary/20 hover:bg-secondary/40 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon size={20} />
                    </div>
                    <span className="text-xl font-bold font-mono text-primary/40 group-hover:text-primary transition-colors">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
