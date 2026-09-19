import { motion } from "framer-motion";
import { Award, Code2, Layers, BookCheck, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    title: "3rd Place Overall",
    organization: "SU Hackathon 2026",
    date: "Jan 2026",
    description: "Built SkillSense AI with Team Quantum Coders, competing against 50+ collegiate teams to deliver an automated technical diagnostic pipeline.",
    icon: Award,
    link: "https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-",
    linkLabel: "View Hackathon Project",
  },
  {
    title: "250+ Problems Solved",
    organization: "LeetCode & Algorithmic DSA",
    date: "2024 — Present",
    description: "Actively solving algorithmic problems focusing on Arrays, Two Pointers, Trees, Dynamic Programming, and Graph Traversals in C++.",
    icon: Code2,
    link: "https://leetcode.com/u/TrikamDevasi/",
    linkLabel: "View LeetCode Profile",
  },
  {
    title: "6+ Deployed Web Projects",
    organization: "Full-Stack Applications",
    date: "2024 — 2026",
    description: "Developed and deployed functional web platforms spanning real-time multiplayer WebSockets, TMDB movie discovery, and MERN expense tracking.",
    icon: Layers,
    link: "https://github.com/TrikamDevasi?tab=repositories",
    linkLabel: "View GitHub Repositories",
  },
  {
    title: "Course Certifications",
    organization: "Sololearn Verified",
    date: "2023 — 2024",
    description: "Completed fundamental certification tracks in JavaScript, HTML5/CSS3, Python Core, and C++ programming.",
    icon: BookCheck,
    link: "#certifications",
    linkLabel: "View Certificates Below",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Milestones & Highlights" subtitle="Competitions, problem-solving progress, and project milestones" sectionIndex={5}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {achievements.map((achievement, i) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="glass-card glow-border p-6 rounded-2xl flex flex-col items-center text-center group hover:border-primary/40 transition-all h-full"
        >
          <div className="p-3.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
            <achievement.icon size={22} />
          </div>
          <h3 className="font-bold text-foreground text-base mb-1">{achievement.title}</h3>
          <p className="text-xs text-primary font-mono mb-3">{achievement.organization} · {achievement.date}</p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
            {achievement.description}
          </p>
          {achievement.link && (
            <a
              href={achievement.link}
              target={achievement.link.startsWith("http") ? "_blank" : undefined}
              rel={achievement.link.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${achievement.linkLabel} for ${achievement.title}`}
              className="text-[11px] font-mono font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-auto"
            >
              {achievement.linkLabel}
              {achievement.link.startsWith("http") && <ExternalLink size={11} />}
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
