import { motion } from "framer-motion";
import { Trophy, Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Hackathon {
  name: string;
  location: string;
  rank: string;
  description: string;
  project: string;
  github: string;
  live?: string;
  images: { src: string; alt: string }[];
}

const hackathons: Hackathon[] = [
  {
    name: "SU Hackathon 2026",
    location: "Sangam University, Bhilwara",
    rank: "3rd Place Overall",
    description: "Competed in an intensive 36-hour hackathon with Team Quantum Coders. Designed and developed SkillSense AI—an automated skill assessment pipeline with asynchronous evaluation workflows—securing 3rd position among 50+ participating teams.",
    project: "SkillSense AI",
    github: "https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-",
    live: "https://skillsense-ai-seven.vercel.app/",
    images: [
      { src: "/hackathons/hackathon-1.png", alt: "Team Quantum Coders presenting SkillSense AI at SU Hackathon 2026" },
      { src: "/hackathons/hackathon-2.jpg", alt: "Hackathon project evaluation and jury interaction" },
      { src: "/hackathons/hackathon-3.jpg", alt: "Award ceremony receiving 3rd prize" },
      { src: "/hackathons/hackathon-4.png", alt: "Team celebration with certificate and trophy" },
    ],
  },
];

const HackathonsSection = () => (
  <SectionWrapper id="hackathons" title="Hackathons &amp; Competitions" subtitle="Building functional solutions under tight time constraints">
    <div className="max-w-5xl mx-auto space-y-12">
      {hackathons.map((h, i) => (
        <motion.div
          key={h.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card overflow-hidden border border-border/60 rounded-2xl hover:border-accent/40 transition-colors"
        >
          <div className="p-6 sm:p-10">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Trophy size={28} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{h.name}</h3>
                  <p className="text-xs sm:text-sm font-mono text-accent font-semibold">{h.rank} · {h.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href={h.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`View ${h.name} submission repository on GitHub`}
                  className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border border-border px-3.5 py-2 rounded-lg bg-secondary/50 hover:border-primary/40"
                >
                  <Github size={14} /> Repository
                </a>
                {h.live && (
                  <a 
                    href={h.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`View live demo of ${h.project}`}
                    className="flex items-center gap-2 text-xs font-mono text-primary hover:brightness-110 transition-colors border border-primary/30 px-3.5 py-2 rounded-lg bg-primary/10"
                  >
                    <ExternalLink size={14} /> Live Prototype
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              {h.description}
            </p>
            
            <div className="text-xs font-mono text-foreground/80 flex items-center gap-2 bg-secondary/40 px-3 py-2 rounded-lg border border-border/40 w-fit">
              <span className="text-primary font-bold">Awarded Project:</span> {h.project}
            </div>
          </div>

          {/* ── Local Event Gallery Grid ── */}
          <div className="px-6 sm:px-10 pb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4 border-t border-border/40 pt-6">
              <ImageIcon size={15} /> Event Gallery (SU Hackathon 2026)
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {h.images.map((img, idx) => (
                <div 
                  key={idx}
                  className="relative overflow-hidden rounded-xl border border-border/60 bg-secondary/40 aspect-video group"
                >
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default HackathonsSection;
