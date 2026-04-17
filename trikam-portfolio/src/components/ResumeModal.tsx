import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Download, ExternalLink, X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const resumeUrl = "/resume/Trikam_Devasi_Resume.pdf";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background border-border/50 backdrop-blur-xl">
        <DialogHeader className="p-4 border-b border-border/50 flex flex-row items-center justify-between">
          <div>
            <DialogTitle className="text-xl font-bold tracking-tight">Curriculum Vitae</DialogTitle>
            <DialogDescription className="text-xs font-mono text-primary">Trikam Devasi — B.Tech CSE</DialogDescription>
          </div>
          <div className="flex items-center gap-2 pr-8">
            <a
              href={resumeUrl}
              download
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              title="Download PDF"
            >
              <Download size={18} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary text-foreground hover:bg-primary/20 transition-all"
              title="Open in New Tab"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </DialogHeader>
        
        <div className="flex-1 w-full h-[calc(90vh-80px)] bg-secondary/20 relative">
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-none"
            title="Resume PDF Viewer"
          />
          
          {/* Strict Compliance Notice Overlay (Subtle) */}
          <div className="absolute bottom-4 left-4 z-10 hidden sm:block">
            <div className="px-3 py-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-[10px] text-muted-foreground font-medium">
              Secure PDF Viewer · No Auto-Download
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
