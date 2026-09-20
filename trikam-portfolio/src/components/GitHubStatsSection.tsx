import { useState, useEffect } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const USERNAME = "TrikamDevasi";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

const GitHubStatsSection = () => {
  const [githubUser, setGithubUser] = useState<GitHubUser>({
    public_repos: 40,
    followers: 4,
    following: 1,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${USERNAME}`);
        if (res.ok) {
          const data = await res.json();
          setGithubUser({
            public_repos: data.public_repos ?? 40,
            followers: data.followers ?? 4,
            following: data.following ?? 1,
          });
        }
      } catch {
        // graceful fallback
      }
    };
    fetchUserData();
  }, []);

  return (
    <SectionWrapper id="github" title="GitHub" subtitle="Open-source work and code contributions">
      <div className="max-w-3xl mx-auto">
        <div className="border border-border rounded-xl overflow-hidden">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5 border-b border-border">
            <div className="flex items-center gap-3">
              <Github size={20} className="text-foreground" />
              <div>
                <p className="font-bold text-foreground text-sm">@{USERNAME}</p>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  {githubUser.public_repos} public repositories · {githubUser.followers} followers
                </p>
              </div>
            </div>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground border border-border px-3 py-1.5 rounded-md bg-surface-elevated hover:border-border-hover transition-colors self-start sm:self-auto"
            >
              <ExternalLink size={13} />
              View Profile
            </a>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              I maintain {githubUser.public_repos}+ public repositories spanning full-stack web applications,
              real-time systems, and learning projects. Most active work is in JavaScript, TypeScript,
              and C++. The best overview is to browse the repositories directly.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://github.com/${USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-foreground border border-border px-3.5 py-2 rounded-md bg-surface-elevated hover:border-border-hover transition-colors"
              >
                <Star size={13} className="text-muted-foreground" />
                Repositories
              </a>
              <a
                href="https://leetcode.com/u/TrikamDevasi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-foreground border border-border px-3.5 py-2 rounded-md bg-surface-elevated hover:border-border-hover transition-colors"
              >
                <GitFork size={13} className="text-muted-foreground" />
                LeetCode — 250+ Problems
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GitHubStatsSection;
