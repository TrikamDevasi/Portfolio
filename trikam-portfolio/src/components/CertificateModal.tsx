import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  certLink: string;
  title: string;
}

const CertificateModal = ({
  isOpen,
  onClose,
  imageUrl,
  certLink,
  title,
}: CertificateModalProps) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Blurred dark overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal content */}
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-3xl w-full rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#0d0d1a]/90 border-b border-white/10">
              <span className="text-sm font-medium text-white/70 truncate pr-4">
                {title}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-primary hover:text-primary-foreground transition-colors px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20"
                >
                  <ExternalLink size={12} />
                  Open
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Certificate image */}
            <div className="bg-[#0a0a14] flex items-center justify-center p-4">
              <img
                src={imageUrl}
                alt={title}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
