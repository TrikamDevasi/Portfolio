import { motion } from "framer-motion";
import { Award, Star, TrendingUp, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    title: "3rd Place Overall",
    organization: "SU Hackathon 2026",
    date: "Jan 2026",
    description: "Successfully secured a top 3 position among competitive teams for the development of SkillSense AI.",
    icon: Award,
  },
  {
    title: "250+ Problems Solved",
    organization: "LeetCode & DSA",
    date: "2024-2025",
    description: "Demonstrated strong algorithmic proficiency by solving 250+ challenges across various data structures.",
    icon: Star,
  },
  {
    title: "10+ Systems Shipped",
    organization: "Project Deployments",
    date: "2024-2025",
    description: "Engineered and deployed ten plus full-stack applications, ranging from AI tools to core infrastructure.",
    icon: Zap,
  },
  {
    title: "Technical Specialist",
    organization: "Sololearn Certified",
    date: "2023-2024",
    description: "Verified expertise across 7+ core technical domains including Python, JavaScript, and C++ architectures.",
    icon: TrendingUp,
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
