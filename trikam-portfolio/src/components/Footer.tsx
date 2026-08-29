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
  <footer className="border-t border-border/50 py-10 px-6 bg-secondary/10">
    <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="text-center sm:text-left">
        <p className="text-sm text-foreground/80 font-medium">
          Trikam Devasi — <span className="text-primary font-mono text-xs">B.Tech CSE Student</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Designed &amp; engineered with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Trikam Devasi on ${label}`}
            className="p-2.5 rounded-lg border border-border/50 bg-secondary/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground/80 font-mono">
        © {new Date().getFullYear()} Trikam Devasi. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
