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
  live: string;
  images: string[];
}

const hackathons: Hackathon[] = [
  {
    name: "SU Hackathon 2026",
    location: "Sangam University, Bhilwara",
    rank: "3rd Place",
    description: "Participated in the SU Hackathon 2026 with my team, delivering an innovative solution that secured us the 3rd position overall.",
    project: "SkillSense AI",
    github: "https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-",
    live: "https://skillsense-ai-seven.vercel.app/",
    images: [
      "https://priyansh-new-portfolio.netlify.app/assets/image1-DC4pr3BN.png",
      "https://priyansh-new-portfolio.netlify.app/assets/image2-BKYI4gIV.jpg",
      "https://priyansh-new-portfolio.netlify.app/assets/image6-Bf2ZaOz8.jpg",
      "https://priyansh-new-portfolio.netlify.app/assets/image5-BK8_KkEo.png",
    ],
  },
];

const HackathonsSection = () => (
  <SectionWrapper id="hackathons" title="Hackathons" subtitle="Building under pressure">
    <div className="max-w-5xl mx-auto space-y-12">
      {hackathons.map((h, i) => (
        <motion.div
          key={h.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="glass-card overflow-hidden border border-white/10 rounded-2xl hover:border-accent/20 transition-colors duration-500"
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Trophy size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{h.name}</h3>
                <p className="text-sm font-mono text-accent">{h.rank}</p>
              </div>
            </div>
            
            <p className="text-slate-400 font-mono text-sm mb-6 flex items-center gap-2">
              <span>@</span> {h.location}
            </p>
            
            <p className="text-slate-300 leading-relaxed max-w-2xl text-lg mb-8">
              {h.description}
            </p>
            
            <div className="text-sm font-mono text-accent mb-6 flex items-center gap-2">
              <span className="text-white/40">Project:</span> {h.project}
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={h.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded hover:border-accent/30 bg-white/[0.02]"
              >
                <Github size={14} /> GitHub Repo
              </a>
              <a 
                href={h.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded hover:border-accent/30 bg-white/[0.02]"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </div>

          {/* ── Event Gallery Grid ── */}
          <div className="mt-4 px-8 pb-8">
            <div className="flex items-center gap-2 text-white/50 mb-6 font-mono text-sm border-t border-white/5 pt-8">
              <ImageIcon size={16} /> Event Gallery
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Feature Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl border border-white/10 group/img bg-black/50 cursor-pointer sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[300px]"
              >
                <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  alt={`${h.name} image 1`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" 
                  src={h.images[0]} 
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
              </motion.div>

              {/* Complementary Images */}
              {h.images.slice(1).map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-xl border border-white/10 group/img bg-black/50 cursor-pointer aspect-video"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    alt={`${h.name} image ${idx + 2}`} 
                    className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" 
                    src={img} 
                    onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default HackathonsSection;
