import { Github, Linkedin, Youtube, Twitter, Code2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Built with ❤️ by <span className="text-primary font-medium">Trikam Devasi</span>
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/TrikamDevasi", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/trikam-devasi-3975573a2/", label: "LinkedIn" },
          { icon: Twitter, href: "https://x.com/TrikamDevasi16", label: "X (Twitter)" },
          { icon: Code2, href: "https://leetcode.com/u/TrikamDevasi/", label: "LeetCode" },
          { icon: Youtube, href: "https://youtube.com/@trikamdevasi16?si=erOHjEcrcvh1mS6Z", label: "YouTube" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
