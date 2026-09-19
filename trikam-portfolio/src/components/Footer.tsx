import { Github, Linkedin, Youtube, Twitter, Code2, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/TrikamDevasi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/trikam-devasi-3975573a2/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/TrikamDevasi/", label: "LeetCode" },
  { icon: Twitter, href: "https://x.com/TrikamDevasi16", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@trikamdevasi16?si=erOHjEcrcvh1mS6Z", label: "YouTube" },
  { icon: Mail, href: "mailto:trikam.devasi.cg@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="relative pt-12 pb-10 px-6">
    {/* Gradient top line */}
    <div
      className="absolute top-0 left-6 right-6"
      style={{ height: "1px", background: "linear-gradient(to right, transparent, hsl(var(--border)), hsl(var(--primary)/0.4), hsl(var(--border)), transparent)" }}
    />

    <div className="container mx-auto max-w-6xl">
      {/* Main row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
        <div className="text-center sm:text-left">
          <p className="text-base font-bold text-foreground tracking-tight font-display">
            Trikam Devasi
          </p>
          <p className="text-xs font-mono text-primary mt-0.5">
            Full-Stack Developer · B.Tech CSE Student
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2.5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Trikam Devasi on ${label}`}
              title={label}
              className="p-2.5 rounded-lg border border-border/50 bg-secondary/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all cursor-pointer"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-border/30 pt-6">
        <p className="text-xs text-muted-foreground/70 font-mono">
          © {new Date().getFullYear()} Trikam Devasi. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/50 font-mono">
          Built with React · TypeScript · Tailwind CSS · Framer Motion
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
