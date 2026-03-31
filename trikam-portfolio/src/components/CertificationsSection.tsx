import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ImageOff, Loader2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CertificateModal from "./CertificateModal";

/* ─────────────────────────────────────────────
   Data
 ───────────────────────────────────────────── */

const SOLOLEARN_CERTS = [
  { id: "CC-O8SYOXDP" },
  { id: "CC-HHPFG6NG" },
  { id: "CC-IOTOQIY9" },
  { id: "CC-AZJNCWOV" },
  { id: "CC-IXIMZQCF" },
  { id: "CC-MFRLNOON" },
  { id: "CC-3QHSEEUP" },
].map(({ id }) => ({
  id,
  imageUrl: `https://api2.sololearn.com/v2/certificates/${id}/image/png`,
  certLink: `https://www.sololearn.com/certificates/${id}`,
}));

/* ─────────────────────────────────────────────
   Stagger container variants
 ───────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

/* ─────────────────────────────────────────────
   Sololearn certificate card
 ───────────────────────────────────────────── */
interface SoloCardProps {
  id: string;
  imageUrl: string;
  certLink: string;
  onPreview: () => void;
}

const SoloCard = ({ id, imageUrl, certLink, onPreview }: SoloCardProps) => {
  const [imgState, setImgState] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
    >
      {/* Certificate image preview */}
      <div
        className="relative w-full h-44 bg-[#0d0d1f] cursor-pointer overflow-hidden"
        onClick={onPreview}
      >
        {/* Skeleton loader */}
        {imgState === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d1f]">
            <Loader2
              size={28}
              className="text-cyan-400/50 animate-spin"
            />
          </div>
        )}

        {/* Error fallback */}
        {imgState === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d1f] gap-2">
            <ImageOff size={28} className="text-white/20" />
            <p className="text-xs text-white/30">Preview Unavailable</p>
          </div>
        )}

        {/* Actual image */}
        <img
          src={imageUrl}
          alt={`Sololearn certificate ${id}`}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imgState === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgState("loaded")}
          onError={() => setImgState("error")}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-xs font-semibold text-white tracking-widest uppercase px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            Click to Preview
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
            <span className="text-[9px] font-bold text-cyan-400 leading-none">
              SL
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/80 leading-tight">
              Sololearn
            </p>
            <p className="text-[10px] text-white/40 font-mono">{id}</p>
          </div>
        </div>

        <a
          href={certLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400 hover:text-white px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200 shrink-0"
        >
          <ExternalLink size={11} />
          View
        </a>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Main section
 ───────────────────────────────────────────── */
const CertificationsSection = () => {
  const [modalCert, setModalCert] = useState<(typeof SOLOLEARN_CERTS)[0] | null>(
    null
  );

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Verified credentials & course completions"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
            <span className="text-[10px] font-bold text-cyan-400">SL</span>
          </div>
          <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest">
            Sololearn · {SOLOLEARN_CERTS.length} Certificates
          </h3>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SOLOLEARN_CERTS.map((cert) => (
            <SoloCard
              key={cert.id}
              {...cert}
              onPreview={() => setModalCert(cert)}
            />
          ))}
        </motion.div>
      </div>

      <CertificateModal
        isOpen={!!modalCert}
        onClose={() => setModalCert(null)}
        imageUrl={modalCert?.imageUrl ?? ""}
        certLink={modalCert?.certLink ?? ""}
        title={`Sololearn Certificate · ${modalCert?.id ?? ""}`}
      />
    </SectionWrapper>
  );
};

export default CertificationsSection;
