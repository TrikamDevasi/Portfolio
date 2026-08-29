import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ImageOff, Loader2, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CertificateModal from "./CertificateModal";

interface CertData {
  id: string;
  title: string;
  topic: string;
  imageUrl: string;
  certLink: string;
}

const SOLOLEARN_CERTS: CertData[] = [
  { id: "CC-O8SYOXDP", title: "JavaScript Intermediate", topic: "JavaScript" },
  { id: "CC-HHPFG6NG", title: "Responsive Web Design", topic: "CSS3 & Flexbox" },
  { id: "CC-IOTOQIY9", title: "Web Development Fundamentals", topic: "Full-Stack Basics" },
  { id: "CC-AZJNCWOV", title: "C++ Programming", topic: "C++ & OOP" },
  { id: "CC-IXIMZQCF", title: "Python Core", topic: "Python" },
  { id: "CC-MFRLNOON", title: "SQL & Relational Databases", topic: "Database Queries" },
  { id: "CC-3QHSEEUP", title: "HTML5 Essentials", topic: "Semantic HTML" },
].map(({ id, title, topic }) => ({
  id,
  title,
  topic,
  imageUrl: `https://api2.sololearn.com/v2/certificates/${id}/image/png`,
  certLink: `https://www.sololearn.com/certificates/${id}`,
}));

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface SoloCardProps {
  cert: CertData;
  onPreview: () => void;
}

const SoloCard = ({ cert, onPreview }: SoloCardProps) => {
  const [imgState, setImgState] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-2xl overflow-hidden border border-border/60 bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 flex flex-col h-full"
    >
      {/* Certificate image preview */}
      <div
        className="relative w-full h-40 bg-secondary/30 cursor-pointer overflow-hidden"
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
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
            <Loader2 size={24} className="text-primary/50 animate-spin" />
          </div>
        )}

        {imgState === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/30 gap-2">
            <ImageOff size={24} className="text-muted-foreground/40" />
            <p className="text-[10px] text-muted-foreground">Preview Unavailable</p>
          </div>
        )}

        <img
          src={cert.imageUrl}
          alt={`Certificate for ${cert.title} — ID: ${cert.id}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imgState === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgState("loaded")}
          onError={() => setImgState("error")}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-[10px] font-bold text-white tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            Click to Expand
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 flex flex-col justify-between flex-1 gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] font-mono font-semibold text-primary uppercase tracking-wider">
              {cert.topic}
            </span>
            <span className="text-[9px] font-mono text-muted-foreground/80">{cert.id}</span>
          </div>
          <h4 className="text-xs font-bold text-foreground leading-snug">
            {cert.title}
          </h4>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/40">
          <span className="text-[10px] text-muted-foreground font-mono">Sololearn</span>
          <a
            href={cert.certLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${cert.title} certificate on Sololearn`}
            className="flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
          >
            Verify <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const [modalCert, setModalCert] = useState<CertData | null>(null);

  return (
    <SectionWrapper
      id="certifications"
      title="Foundational Certifications"
      subtitle="Verified coursework and structured online technical certifications"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <Award size={16} />
          </div>
          <h3 className="text-xs font-semibold text-foreground/80 uppercase tracking-widest font-mono">
            Sololearn Verified Courses · {SOLOLEARN_CERTS.length} Tracks
          </h3>
          <div className="flex-1 h-px bg-border/40" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {SOLOLEARN_CERTS.map((cert) => (
            <SoloCard
              key={cert.id}
              cert={cert}
              onPreview={() => setModalCert(cert)}
            />
          ))}
        </motion.div>
      </div>

      <CertificateModal
        isOpen={Boolean(modalCert)}
        onClose={() => setModalCert(null)}
        imageUrl={modalCert?.imageUrl ?? ""}
        certLink={modalCert?.certLink ?? ""}
        title={`${modalCert?.title ?? "Certificate"} · ${modalCert?.id ?? ""}`}
      />
    </SectionWrapper>
  );
};

export default CertificationsSection;
