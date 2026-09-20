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
  images: { src: string; alt: string; width: number; height: number; caption: string }[];
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
        caption: "Award Ceremony · 3rd Place Overall (50+ Teams)",
        width: 800,
        height: 600,
      },
      {
        src: "/hackathons/trikam-devasi-su-hackathon-trophy.png",
        alt: "Trikam Devasi SU Hackathon 2026 Third Position Trophy",
        caption: "Official 3rd Place Trophy",
        width: 576,
        height: 1024,
      },
      {
        src: "/hackathons/trikam-devasi-su-hackathon-team-certificates.jpg",
        alt: "Trikam Devasi with teammates holding winner certificates at Sangam University Hackathon 2026",
        caption: "Team Quantum Coders with Certificates",
        width: 800,
        height: 600,
      },
      {
        src: "/hackathons/trikam-devasi-su-hackathon-stage-presentation.jpg",
        alt: "SU Hackathon 2026 presentation stage at Sangam University Bhilwara",
        caption: "Final Stage Technical Jury Presentation",
        width: 768,
        height: 1024,
      },
    ],
  },
];

const HackathonsSection = () => (
  <SectionWrapper
    id="hackathons"
    title="Competitive Engineering"
    subtitle="Building production-grade solutions under intense 36-hour sprint constraints"
  >
    <div className="max-w-5xl mx-auto space-y-10">
      {hackathons.map((h) => (
        <div
          key={h.name}
          className="glass-card overflow-hidden border border-border hover:border-border-hover transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
        >
          <div className="p-6 sm:p-8">
            {/* Header with Rank & Action links */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <Trophy size={14} className="text-primary" />
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                    {h.rank}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{h.name}</h3>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">{h.location}</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={h.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${h.name} submission repository on GitHub`}
                  className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-all duration-150 border border-border px-3 py-1.5 rounded-md bg-surface-elevated hover:border-border-hover active:scale-[0.98] group/btn"
                >
                  <Github size={13} className="transition-transform duration-150 group-hover/btn:-translate-y-0.5" /> Repository
                </a>
                {h.live && (
                  <a
                    href={h.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${h.project}`}
                    className="flex items-center gap-2 text-xs font-mono text-primary hover:text-primary-hover transition-all duration-150 border border-accent-border px-3 py-1.5 rounded-md bg-accent-soft active:scale-[0.98] group/btn"
                  >
                    <ExternalLink size={13} className="transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm mb-4 max-w-3xl">
              {h.description}
            </p>

            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2 pt-2 border-t border-border/40">
              <span className="text-foreground font-semibold">Award-Winning System:</span>
              <span className="px-2 py-0.5 rounded bg-surface-elevated text-primary border border-accent-border font-bold">
                {h.project}
              </span>
            </div>
          </div>

          {/* Staggered Editorial Gallery Layout */}
          <div className="px-6 sm:px-8 pb-7">
            <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-3.5 border-t border-border/40 pt-4">
              Event Documentation &amp; Evidence
            </p>

            {/* Asymmetrical 2-tier layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
              {/* Main Feature: Ceremony Photo */}
              <div className="md:col-span-8 relative overflow-hidden rounded-xl border border-border bg-surface-elevated aspect-[16/10] group cursor-pointer shadow-sm hover:border-border-hover transition-colors">
                <img
                  src={h.images[0].src}
                  alt={h.images[0].alt}
                  width={h.images[0].width}
                  height={h.images[0].height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-xs text-white font-mono translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {h.images[0].caption}
                  </p>
                </div>
              </div>

              {/* Side Accent: Trophy Photo */}
              <div className="md:col-span-4 relative overflow-hidden rounded-xl border border-border bg-surface-elevated aspect-[16/10] md:aspect-auto group cursor-pointer shadow-sm hover:border-border-hover transition-colors">
                <img
                  src={h.images[1].src}
                  alt={h.images[1].alt}
                  width={h.images[1].width}
                  height={h.images[1].height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-xs text-white font-mono translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {h.images[1].caption}
                  </p>
                </div>
              </div>

              {/* Secondary Tier: Certificates and Stage Presentation */}
              <div className="md:col-span-6 relative overflow-hidden rounded-xl border border-border bg-surface-elevated aspect-video group cursor-pointer shadow-sm hover:border-border-hover transition-colors">
                <img
                  src={h.images[2].src}
                  alt={h.images[2].alt}
                  width={h.images[2].width}
                  height={h.images[2].height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-xs text-white font-mono translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {h.images[2].caption}
                  </p>
                </div>
              </div>

              <div className="md:col-span-6 relative overflow-hidden rounded-xl border border-border bg-surface-elevated aspect-video group cursor-pointer shadow-sm hover:border-border-hover transition-colors">
                <img
                  src={h.images[3].src}
                  alt={h.images[3].alt}
                  width={h.images[3].width}
                  height={h.images[3].height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-xs text-white font-mono translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {h.images[3].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default HackathonsSection;
