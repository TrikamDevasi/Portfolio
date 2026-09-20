import { Link } from "react-router-dom";
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
    organization: "LeetCode · C++",
    date: "2024 — Present",
    description: "Actively solving algorithmic problems focusing on Arrays, Two Pointers, Trees, Dynamic Programming, and Graph Traversals.",
    icon: Code2,
    link: "https://leetcode.com/u/TrikamDevasi/",
    linkLabel: "LeetCode Profile",
  },
  {
    title: "6+ Deployed Projects",
    organization: "Full-Stack Applications",
    date: "2024 — 2026",
    description: "Developed and deployed functional web platforms spanning real-time multiplayer WebSockets, TMDB movie discovery, and MERN expense tracking.",
    icon: Layers,
    link: "https://github.com/TrikamDevasi?tab=repositories",
    linkLabel: "GitHub Repositories",
  },
  {
    title: "Course Certifications",
    organization: "Sololearn Verified",
    date: "2023 — 2024",
    description: "Completed certification tracks in JavaScript, HTML5/CSS3, Python Core, and C++ programming.",
    icon: BookCheck,
    link: "/certifications",
    linkLabel: "View Certificates",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Milestones" subtitle="Competitions, problem-solving, and shipped projects">
    <div className="max-w-4xl mx-auto">
      <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="flex flex-col sm:flex-row sm:items-start gap-4 p-4.5 sm:p-5 bg-background hover:bg-surface-hover transition-colors"
          >
            {/* Icon — small, not in a box */}
            <achievement.icon size={16} className="text-muted-foreground mt-0.5 shrink-0 hidden sm:block" />

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-bold text-foreground text-base">{achievement.title}</h3>
                <span className="text-xs font-mono text-muted-foreground shrink-0">{achievement.date}</span>
              </div>
              <p className="text-xs font-mono text-muted-foreground mb-1.5">{achievement.organization}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {achievement.description}
              </p>
              {achievement.link && (
                achievement.link.startsWith("http") ? (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={achievement.linkLabel}
                    className="text-xs font-mono font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {achievement.linkLabel}
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <Link
                    to={achievement.link}
                    aria-label={achievement.linkLabel}
                    className="text-xs font-mono font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {achievement.linkLabel}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
