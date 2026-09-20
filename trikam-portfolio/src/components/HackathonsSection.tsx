import { Trophy, Github, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Hackathon {
  name: string;
  location: string;
  rank: string;
  description: string;
  project: string;
  github: string;
  live?: string;
  images: { src: string; alt: string; width: number; height: number }[];
}

const hackathons: Hackathon[] = [
  {
    name: "SU Hackathon 2026",
    location: "Sangam University, Bhilwara",
    rank: "3rd Place Overall",
    description: "Competed in an intensive 36-hour hackathon with Team Quantum Coders. Designed and developed SkillSense AI — an automated skill assessment pipeline with asynchronous evaluation workflows — securing 3rd position among 50+ participating teams.",
    project: "SkillSense AI",
    github: "https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-",
    live: "https://skillsense-ai-seven.vercel.app/",
    images: [
      {
        src: "/hackathons/trikam-devasi-su-hackathon-2026-winner.png",
        alt: "Trikam Devasi and Team Quantum Coders receiving 3rd prize award at SU Hackathon 2026",
        width: 800,
        height: 600,
      },
      {
        src: "/hackathons/trikam-devasi-su-hackathon-team-certificates.jpg",
        alt: "Trikam Devasi with teammates holding winner certificates at Sangam University Hackathon 2026",
        width: 800,
        height: 600,
      },
      {
        src: "/hackathons/trikam-devasi-su-hackathon-stage-presentation.jpg",
        alt: "SU Hackathon 2026 presentation stage at Sangam University Bhilwara",
        width: 768,
        height: 1024,
      },
      {
        src: "/hackathons/trikam-devasi-su-hackathon-trophy.png",
        alt: "Trikam Devasi SU Hackathon 2026 Third Position Trophy",
        width: 576,
        height: 1024,
      },
    ],
  },
];

const HackathonsSection = () => (
  <SectionWrapper id="hackathons" title="Hackathons" subtitle="Building functional solutions under tight time constraints">
    <div className="max-w-5xl mx-auto space-y-10">
      {hackathons.map((h) => (
        <div
          key={h.name}
          className="glass-card overflow-hidden border border-border rounded-xl"
        >
          <div className="p-5 sm:p-7">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={15} className="text-muted-foreground" />
                  <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                    {h.rank}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{h.name}</h3>
                <p className="text-xs font-mono text-muted-foreground mt-1">{h.location}</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={h.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${h.name} submission repository on GitHub`}
                  className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1.5 rounded-md bg-surface-elevated hover:border-border-hover"
                >
                  <Github size={13} /> Repository
                </a>
                {h.live && (
                  <a
                    href={h.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${h.project}`}
                    className="flex items-center gap-2 text-xs font-mono text-primary hover:text-primary-hover transition-colors border border-accent-border px-3 py-1.5 rounded-md bg-accent-soft"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm mb-4">
              {h.description}
            </p>

            <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
              <span className="text-foreground font-semibold">Project:</span> {h.project}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="px-5 sm:px-7 pb-6">
            <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-3 border-t border-border/40 pt-3.5">
              Event Gallery
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {h.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg border border-border bg-surface-elevated aspect-video"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default HackathonsSection;
