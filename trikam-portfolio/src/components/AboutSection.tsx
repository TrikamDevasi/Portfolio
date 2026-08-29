import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Terminal, Laptop, BookOpen } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const keyHighlights = [
  { icon: Laptop, title: "What I Build", description: "Full-stack web applications, real-time WebSocket platforms, and AI-assisted software." },
  { icon: BookOpen, title: "What I'm Learning", description: "Advanced Data Structures & Algorithms in C++, distributed caching, and containerized deployments." },
  { icon: GraduationCap, title: "Education", description: "B.Tech in Computer Science & Engineering (2025–2029) @ Swaminarayan University." },
];

const timeline = [
  {
    period: "2025 — 2029",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Swaminarayan University, Kalol",
    description: "Focusing on core CS fundamentals: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering principles.",
    icon: GraduationCap,
  },
  {
    period: "2024 — 2025",
    title: "Full-Stack Development & Hackathons",
    institution: "Skill Building & Competitions",
    description: "Built and shipped production-ready web applications including SkillSense AI (awarded 3rd place at SU Hackathon 2026), Game Hub multiplayer portal, and full-stack dashboards.",
    icon: Trophy,
  },
  {
    period: "2023 — 2024",
    title: "Programming Fundamentals & Web Basics",
    institution: "Foundational Learning",
    description: "Mastered core programming concepts in C++ and JavaScript. Developed frontend web interfaces using HTML, CSS, React, and RESTful API integrations.",
    icon: Code2,
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="Background, engineering focus, and learning journey">
      <div className="space-y-16 max-w-6xl mx-auto">
        {/* ── Bio & Engineering Highlights ── */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Left: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-card p-6 sm:p-8 rounded-2xl glow-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 text-primary">
                <Terminal size={20} />
                <h3 className="text-lg font-bold text-foreground">Engineering Profile</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                I am a 2nd-semester Computer Science undergraduate with a deep passion for building practical, resilient web software. I focus on connecting well-crafted user interfaces with scalable backend APIs and real-time event engines.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                My recent work centers on asynchronous task pipelines, WebSocket state management in browser games, and integrating LLMs into web platforms to deliver intelligent, automated user workflows.
              </p>
            </div>

            <div className="border-t border-border/40 pt-4 mt-2">
              <span className="text-xs font-mono text-primary font-semibold">
                📍 Based in Ahmedabad, India · Open to Software Engineering Internships
              </span>
            </div>
          </motion.div>

          {/* Right: Quick Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            {keyHighlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass-card p-5 rounded-xl glow-border flex-1 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0 mt-0.5">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Journey Timeline ── */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2.5 text-foreground">
            <span className="text-primary font-mono">//</span> Timeline &amp; Experience
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card glow-border p-6 rounded-2xl flex flex-col h-full hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <item.icon size={20} />
                  </div>
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                    {item.period}
                  </span>
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs font-mono text-muted-foreground mb-3">{item.institution}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
