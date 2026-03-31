import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const hackathons = [
  {
    name: "Odoo Hackathon",
    venue: "Gujarat Vidyapith",
    description: "Built a full-stack Expense Manager with categories, dashboard, JWT auth, and data visualization.",
    project: "Expense Manager",
  },
  {
    name: "SkillSense AI Hackathon",
    venue: "Team Project",
    description: "Developed an AI-powered skill assessment platform with OpenAI & Perplexity API integration.",
    project: "SkillSense AI",
  },
];

const HackathonsSection = () => (
  <SectionWrapper id="hackathons" title="Hackathons" subtitle="Building under pressure">
    <div className="max-w-2xl mx-auto space-y-6">
      {hackathons.map((h, i) => (
        <motion.div
          key={h.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          className="glass-card glow-border rounded-xl p-6 relative"
        >
          {i < hackathons.length - 1 && (
            <div className="absolute left-9 top-full w-px h-6 bg-border" />
          )}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
              <Trophy size={20} />
            </div>
            <div>
              <h3 className="text-foreground font-semibold">{h.name}</h3>
              <p className="text-xs text-primary font-mono mb-2">{h.venue}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default HackathonsSection;
