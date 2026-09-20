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
  <footer className="pt-10 pb-8 px-6 bg-surface border-t border-border">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-foreground tracking-tight">
            Trikam Devasi
          </p>
          <p className="text-xs font-mono text-muted-foreground mt-0.5">
            Full-Stack Developer · B.Tech CSE Student
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Trikam Devasi on ${label}`}
              title={label}
              className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-border-hover transition-colors cursor-pointer"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-border/40 pt-5">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Trikam Devasi. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70 font-mono">
          React · TypeScript · Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
