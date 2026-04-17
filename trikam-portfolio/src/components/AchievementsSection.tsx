import { motion } from "framer-motion";
import { Award, Star, TrendingUp, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    title: "Hackathon Winner",
    organization: "Swaminarayan University",
    date: "2024",
    description: "Secured 1st place in the university-level hackathon for developing an AI-driven resource management tool.",
    icon: Award,
  },
  {
    title: "100+ Days Coding Streak",
    organization: "LeetCode",
    date: "2024",
    description: "Maintained a consistent coding streak, solving 200+ problems across various data structures and algorithms.",
    icon: TrendingUp,
  },
  {
    title: "Top 1% Contributor",
    organization: "Open Source Project",
    date: "2023",
    description: "Recognized for significant contributions to a major React-based open-source library.",
    icon: Star,
  },
  {
    title: "Global Rank < 500",
    organization: "SoloLearn Contest",
    date: "2023",
    description: "Achieved a top 500 global rank in the monthly JavaScript logic challenge.",
    icon: Zap,
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements" subtitle="Milestones & Recognitions">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((achievement, i) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card glow-border p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-primary/5 transition-colors"
        >
          <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
            <achievement.icon size={24} />
          </div>
          <h3 className="font-bold text-foreground mb-1">{achievement.title}</h3>
          <p className="text-xs text-primary font-mono mb-3">{achievement.organization} · {achievement.date}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {achievement.description}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
