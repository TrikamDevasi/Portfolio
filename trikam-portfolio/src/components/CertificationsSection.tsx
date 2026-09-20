import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ImageOff, Loader2, Award, Trophy, BookOpen, Layers } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CertificateModal from "./CertificateModal";

export interface CertData {
  id: string;
  title: string;
  topic: string;
  issuer: string;
  category: "hackathon" | "foundational";
  imageUrl: string;
  certLink: string;
  badge?: string;
  date?: string;
}

const ALL_CERTIFICATES: CertData[] = [
  /* ─── Hackathons & Competitions (From Resume) ─── */
  {
    id: "SU-HACK-2026",
    title: "SU Hackathon 2026 (Winners)",
    topic: "SkillSense AI · 3rd Position",
    issuer: "Sangam University & Dept. of Science & Technology",
    category: "hackathon",
    imageUrl: "/certificates/su-hackathon-2026-certificate.jpg",
    certLink: "https://www.pdffiller.com/s/LYIfNTpJ",
    badge: "🏆 Winner · 3rd Place",
    date: "March 2026",
  },
  {
    id: "ARTPARK-2026",
    title: "ArtPark CodeForge Hackathon",
    topic: "AI Onboarding Engine · Prototype Round",
    issuer: "Indian Institute of Science (IISc), Bangalore",
    category: "hackathon",
    imageUrl: "/certificates/artpark-codeforge-iisc-bangalore.jpg",
    certLink: "https://art-park-code-forge-hackathon-virid.vercel.app/",
    badge: "IISc Bangalore",
    date: "2026",
  },
  {
    id: "FINAGENT-2026",
    title: "FINAGENT Hackathon",
    topic: "Financial AI Agents & Workflow Automation",
    issuer: "Indian Institute of Technology (IIT), Bombay",
    category: "hackathon",
    imageUrl: "/certificates/finagent-iit-bombay.jpg",
    certLink: "https://unstop.com/",
    badge: "IIT Bombay",
    date: "2026",
  },
  {
    id: "CRAFTATHON-2026",
    title: "Craftathon Hackathon",
    topic: "Full-Stack Web · 36-Hour Hackathon",
    issuer: "Gandhinagar University & IEEE Computer Society",
    category: "hackathon",
    imageUrl: "/certificates/craftathon-gandhinagar-university.jpg",
    certLink: "https://gandhinagaruni.ac.in/",
    badge: "IEEE Gujarat",
    date: "April 2026",
  },
  {
    id: "ELECTROSPHERE-2026",
    title: "ElectroSphere 2K26",
    topic: "Software Edition · Algorithmic Innovation",
    issuer: "Faculty of Engineering, Swaminarayan University",
    category: "hackathon",
    imageUrl: "/certificates/electrosphere-2k26.jpg",
    certLink: "https://swaminarayanuniversity.ac.in/",
    badge: "Swaminarayan Univ",
    date: "January 2026",
  },
  {
    id: "TIC-TECH-TOE-26",
    title: "Tic Tech Toe ’26",
    topic: "Algorithmic Speed & Engineering Sprint",
    issuer: "Technical Symposium",
    category: "hackathon",
    imageUrl: "/certificates/tic-tech-toe-26.jpg",
    certLink: "https://cdn.corenexis.com/f/jLVkafRAWDS.jpeg",
    badge: "Technical Sprint",
    date: "2026",
  },
  {
    id: "HACKSPRINT-26",
    title: "HackSprint '26",
    topic: "Rapid Prototyping & System Architecture",
    issuer: "National Hackathon Series",
    category: "hackathon",
    imageUrl: "/certificates/hacksprint-26.jpg",
    certLink: "https://cdn.corenexis.com/f/kdsvPFzVIqt.jpeg",
    badge: "Sprint Hackathon",
    date: "2026",
  },
  {
    id: "ICETAI-2026",
    title: "ICETAI-2026",
    topic: "Emerging Trends in Artificial Intelligence",
    issuer: "International Conference on Emerging Trends in AI",
    category: "hackathon",
    imageUrl: "/placeholder.svg",
    certLink: "#",
    badge: "International Conf",
    date: "2026",
  },

  /* ─── Foundational Programming Certifications (Sololearn) ─── */
  {
    id: "CC-O8SYOXDP",
    title: "JavaScript Intermediate",
    topic: "Modern ES6+ & Async JS",
    issuer: "Sololearn Verified",
    category: "foundational",
    imageUrl: "https://api2.sololearn.com/v2/certificates/CC-O8SYOXDP/image/png",
    certLink: "https://www.sololearn.com/certificates/CC-O8SYOXDP",
    badge: "JavaScript",
  },
  {
    id: "CC-HHPFG6NG",
    title: "Responsive Web Design",
    topic: "CSS3, Flexbox & Grid",
    issuer: "Sololearn Verified",
    category: "foundational",
    imageUrl: "https://api2.sololearn.com/v2/certificates/CC-HHPFG6NG/image/png",
    certLink: "https://www.sololearn.com/certificates/CC-HHPFG6NG",
    badge: "CSS3",
  },
  {
    id: "CC-IOTOQIY9",
    title: "Web Development Fundamentals",
    topic: "Full-Stack Architecture Basics",
    issuer: "Sololearn Verified",
    category: "foundational",
    imageUrl: "https://api2.sololearn.com/v2/certificates/CC-IOTOQIY9/image/png",
    certLink: "https://www.sololearn.com/certificates/CC-IOTOQIY9",
    badge: "Full-Stack",
  },
  {
    id: "CC-AZJNCWOV",
    title: "C++ Programming",
    topic: "Object-Oriented Programming & STL",
    issuer: "Sololearn Verified",
    category: "foundational",
    imageUrl: "https://api2.sololearn.com/v2/certificates/CC-AZJNCWOV/image/png",
    certLink: "https://www.sololearn.com/certificates/CC-AZJNCWOV",
    badge: "C++",
  },
  {
    id: "CC-IXIMZQCF",
    title: "Python Core",
    topic: "Core Logic, Data Structures & Automation",
    issuer: "Sololearn Verified",
    category: "foundational",
    imageUrl: "https://api2.sololearn.com/v2/certificates/CC-IXIMZQCF/image/png",
    certLink: "https://www.sololearn.com/certificates/CC-IXIMZQCF",
    badge: "Python",
  },
  {
    id: "CC-MFRLNOON",
    title: "SQL & Relational Databases",
    topic: "Relational Queries, Joins & Schemas",
    issuer: "Sololearn Verified",
    category: "foundational",
    imageUrl: "https://api2.sololearn.com/v2/certificates/CC-MFRLNOON/image/png",
    certLink: "https://www.sololearn.com/certificates/CC-MFRLNOON",
    badge: "SQL",
  },
  {
    id: "CC-3QHSEEUP",
    title: "HTML5 Essentials",
    topic: "Semantic Structure & Web Accessibility",
    issuer: "Sololearn Verified",
    category: "foundational",
    imageUrl: "https://api2.sololearn.com/v2/certificates/CC-3QHSEEUP/image/png",
    certLink: "https://www.sololearn.com/certificates/CC-3QHSEEUP",
    badge: "HTML5",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

interface CertCardProps {
  cert: CertData;
  onPreview: () => void;
}

const CertCard = ({ cert, onPreview }: CertCardProps) => {
  const [imgState, setImgState] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group relative rounded-2xl overflow-hidden border border-border hover:border-border-hover bg-card transition-all duration-300 flex flex-col h-full"
    >
      {/* Top Banner Tag */}
      {cert.badge && (
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="px-2.5 py-0.5 rounded-full bg-surface-elevated/90 backdrop-blur-md border border-border text-[10px] font-medium text-muted-foreground uppercase tracking-wider shadow-sm">
            {cert.badge}
          </span>
        </div>
      )}

      {/* Certificate image preview */}
      <div
        className="relative w-full h-44 bg-surface-elevated/30 cursor-pointer overflow-hidden"
        onClick={onPreview}
        role="button"
        tabIndex={0}
        aria-label={`Preview ${cert.title} certificate`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onPreview();
          }
        }}
      >
        {imgState === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-elevated/30">
            <Loader2 size={24} className="text-muted-foreground/50 animate-spin" />
          </div>
        )}

        {imgState === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-elevated/30 gap-2 p-4 text-center">
            <ImageOff size={24} className="text-muted-foreground/40" />
            <p className="text-[10px] text-muted-foreground">Preview Available in Modal</p>
          </div>
        )}

        <img
          src={cert.imageUrl}
          alt={`Certificate for ${cert.title} — ${cert.issuer}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imgState === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgState("loaded")}
          onError={() => setImgState("error")}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-[10px] font-bold text-white tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-xl">
            Click to Expand
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col justify-between flex-1 gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-wider truncate">
              {cert.topic}
            </span>
            {cert.date && (
              <span className="text-[9px] font-mono text-muted-foreground/80 shrink-0">
                {cert.date}
              </span>
            )}
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug transition-colors">
            {cert.title}
          </h4>
          <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">
            {cert.issuer}
          </p>
        </div>

        {/* Card footer */}
        <div className="flex items-center justify-between pt-2.5 border-t border-border/40">
          <button
            onClick={onPreview}
            className="text-[10px] font-mono font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Expand Preview
          </button>
          {cert.certLink && cert.certLink !== "#" ? (
            <a
              href={cert.certLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${cert.title} certificate`}
              className="flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
            >
              Verify <ExternalLink size={10} />
            </a>
          ) : (
            <span className="text-[10px] text-muted-foreground/60 font-mono">Verified</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "hackathon" | "foundational">("all");
  const [modalCert, setModalCert] = useState<CertData | null>(null);

  const filteredCerts = ALL_CERTIFICATES.filter((cert) => {
    if (activeFilter === "all") return true;
    return cert.category === activeFilter;
  });

  const hackathonCount = ALL_CERTIFICATES.filter((c) => c.category === "hackathon").length;
  const foundationalCount = ALL_CERTIFICATES.filter((c) => c.category === "foundational").length;

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications & Competitions"
      subtitle="Official certificates from hackathons, national competitions, and verified technical coursework"
      sectionIndex={6}
    >
      <div className="max-w-6xl mx-auto">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-surface-elevated text-muted-foreground hover:text-foreground border border-border hover:border-border-hover"
            }`}
          >
            <Layers size={13} />
            All Certificates ({ALL_CERTIFICATES.length})
          </button>

          <button
            onClick={() => setActiveFilter("hackathon")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "hackathon"
                ? "bg-primary text-primary-foreground"
                : "bg-surface-elevated text-muted-foreground hover:text-foreground border border-border hover:border-border-hover"
            }`}
          >
            <Trophy size={13} />
            Hackathons & Competitions ({hackathonCount})
          </button>

          <button
            onClick={() => setActiveFilter("foundational")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "foundational"
                ? "bg-primary text-primary-foreground"
                : "bg-surface-elevated text-muted-foreground hover:text-foreground border border-border hover:border-border-hover"
            }`}
          >
            <BookOpen size={13} />
            Technical Coursework ({foundationalCount})
          </button>
        </div>

        {/* Dynamic Certificates Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {filteredCerts.map((cert) => (
            <CertCard
              key={cert.id}
              cert={cert}
              onPreview={() => setModalCert(cert)}
            />
          ))}
        </motion.div>
      </div>

      {/* High-Resolution Certificate Modal */}
      <CertificateModal
        isOpen={Boolean(modalCert)}
        onClose={() => setModalCert(null)}
        imageUrl={modalCert?.imageUrl ?? ""}
        certLink={modalCert?.certLink ?? ""}
        title={`${modalCert?.title ?? "Certificate"} · ${modalCert?.issuer ?? ""}`}
      />
    </SectionWrapper>
  );
};

export default CertificationsSection;
