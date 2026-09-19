import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCw, GitCommit, BarChart2, Code2, FolderGit2, Users, Flame, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const USERNAME = "TrikamDevasi";

/* ─── High-Availability Mirror Configuration ─── */
const STATS_MIRRORS = [
  "https://github-readme-stats-alpha.vercel.app/api",
  "https://github-readme-stats.vercel.app/api",
];

const LANGS_MIRRORS = [
  "https://github-readme-stats-alpha.vercel.app/api/top-langs/",
  "https://github-readme-stats.vercel.app/api/top-langs/",
];

const STREAK_MIRRORS = [
  "https://streak-stats.demolab.com",
];

/* ─── Zinc & Emerald Color Parameters (matches site design system) ─── */
const COMMON_PARAMS = "bg_color=111113&title_color=FAFAFA&icon_color=10B981&text_color=A1A1AA&border_color=27272A&hide_border=false";
const STREAK_PARAMS = "theme=dark&background=111113&border=27272A&stroke=27272A&ring=10B981&fire=10B981&currStreakNum=FAFAFA&sideNums=FAFAFA&currStreakLabel=10B981&sideLabels=A1A1AA&dates=71717A&hide_border=false";

/* ─── Fallback card when an image fails all mirrors ─── */
const FallbackCard = ({
  label,
  icon: Icon,
  link,
}: {
  label: string;
  icon: React.ElementType;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${label} — View on GitHub`}
    className="w-full min-h-[195px] flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-border bg-surface-elevated hover:border-primary/40 hover:bg-surface-elevated/80 transition-all duration-300 group text-center"
  >
    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
      <Icon size={24} className="text-primary" />
    </div>
    <span className="text-xs text-muted-foreground leading-relaxed max-w-xs">
      {label}
    </span>
    <span className="text-[10px] text-primary font-mono uppercase tracking-wider mt-1 border-t border-border pt-2 inline-flex items-center gap-1">
      View Live on GitHub <ExternalLink size={10} />
    </span>
  </a>
);

/* ─── Resilient Stat Image with Sequential Failover & Active Preloading ─── */
interface StatImageProps {
  mirrors: string[];
  params: string;
  alt: string;
  fallbackLabel: string;
  fallbackIcon: React.ElementType;
  fallbackLink: string;
  reloadKey: number;
  userParam?: string;
  aspectClass?: string;
}

const StatImage = ({
  mirrors,
  params,
  alt,
  fallbackLabel,
  fallbackIcon,
  fallbackLink,
  reloadKey,
  userParam = "username",
  aspectClass = "min-h-[195px]",
}: StatImageProps) => {
  const [mirrorIndex, setMirrorIndex] = useState(0);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  const currentSrc = `${mirrors[mirrorIndex]}?${userParam}=${USERNAME}&${params}&t=${reloadKey}`;

  // Reset status on reloadKey change
  useEffect(() => {
    setStatus("loading");
    setMirrorIndex(0);
  }, [reloadKey]);

  // Failover timeout: if current mirror stalls for 7 seconds, step to next
  useEffect(() => {
    if (status !== "loading") return;
    const timeout = setTimeout(() => {
      if (mirrorIndex < mirrors.length - 1) {
        setMirrorIndex((prev) => prev + 1);
      } else {
        setStatus("error");
      }
    }, 7000);
    return () => clearTimeout(timeout);
  }, [mirrorIndex, status, mirrors.length]);

  const handleError = () => {
    if (mirrorIndex < mirrors.length - 1) {
      setMirrorIndex((prev) => prev + 1);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className={`relative w-full flex items-center justify-center rounded-xl overflow-hidden ${aspectClass}`}>
      {/* Skeleton overlay while loading */}
      {status === "loading" && (
        <div className="absolute inset-0 z-10 w-full h-full rounded-xl border border-border/60 bg-surface-elevated/60 animate-pulse flex items-center justify-center">
          <span className="text-[11px] font-mono text-muted-foreground/60">Loading GitHub telemetry…</span>
        </div>
      )}

      {/* Fallback card if all mirrors fail */}
      {status === "error" ? (
        <FallbackCard
          label={fallbackLabel}
          icon={fallbackIcon}
          link={fallbackLink}
        />
      ) : (
        <img
          key={`${mirrorIndex}-${reloadKey}`}
          src={currentSrc}
          alt={alt}
          loading="eager"
          decoding="async"
          className={`w-full h-auto max-w-full rounded-xl border border-border transition-opacity duration-300 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setStatus("loaded")}
          onError={handleError}
        />
      )}
    </div>
  );
};

/* ─── Main GitHub Stats Section ─── */
const GitHubStatsSection = () => {
  const [reloadKey, setReloadKey] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [githubUser, setGithubUser] = useState<{
    public_repos: number;
    followers: number;
    following: number;
  }>({
    public_repos: 40,
    followers: 4,
    following: 1,
  });

  // Fetch live GitHub profile data
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
        // graceful fallback to initial state
      }
    };
    fetchUserData();
  }, [reloadKey]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setReloadKey(Date.now());
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const telemetryHighlights = [
    {
      label: "Public Repositories",
      value: `${githubUser.public_repos}+`,
      sub: "Active codebases & prototypes",
      icon: FolderGit2,
      link: `https://github.com/${USERNAME}?tab=repositories`,
    },
    {
      label: "DSA Problems Solved",
      value: "250+",
      sub: "LeetCode & Competitive C++",
      icon: Code2,
      link: "https://leetcode.com/u/TrikamDevasi/",
    },
    {
      label: "Continuous Streak",
      value: "Active",
      sub: "Daily commit frequency",
      icon: Flame,
      link: `https://github.com/${USERNAME}`,
    },
    {
      label: "Developer Network",
      value: `${githubUser.followers} Followers`,
      sub: "Open source community",
      icon: Users,
      link: `https://github.com/${USERNAME}?tab=followers`,
    },
  ];

  return (
    <SectionWrapper
      id="github"
      title="GitHub Activity & Telemetry"
      subtitle="Open-source contributions, repository analytics, and development frequency"
      sectionIndex={8}
    >
      {/* Telemetry Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
        {telemetryHighlights.map((item, idx) => (
          <motion.a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-4 rounded-xl border border-border bg-surface-elevated/80 hover:border-primary/40 hover:bg-surface-elevated transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                {item.label}
              </span>
              <item.icon size={15} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-foreground font-mono group-hover:text-primary transition-colors">
              {item.value}
            </div>
            <div className="text-[11px] text-muted-foreground/80 mt-1">
              {item.sub}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Refresh bar */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          aria-label="Refresh GitHub statistics"
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground px-4 py-2 rounded-full border border-border hover:border-primary/40 bg-surface-elevated hover:bg-surface transition-all duration-200 disabled:opacity-50 active:scale-95"
        >
          <RefreshCw
            size={13}
            className={isRefreshing ? "animate-spin text-primary" : "text-muted-foreground"}
          />
          {isRefreshing ? "Syncing GitHub Telemetry…" : "Sync GitHub Telemetry"}
        </button>
      </div>

      {/* Visual Stat Cards */}
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Row 1: Stats card + Top Languages side by side */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          <StatImage
            mirrors={STATS_MIRRORS}
            params={`${COMMON_PARAMS}&show_icons=true&include_all_commits=true&count_private=true`}
            alt="Trikam Devasi GitHub Activity Overview"
            fallbackLabel="GitHub Stats service currently rate-limited. Click to view repositories directly on GitHub."
            fallbackIcon={BarChart2}
            fallbackLink={`https://github.com/${USERNAME}`}
            reloadKey={reloadKey}
            aspectClass="min-h-[195px]"
          />
          <StatImage
            mirrors={LANGS_MIRRORS}
            params={`${COMMON_PARAMS}&layout=compact&langs_count=8`}
            alt="Top Programming Languages"
            fallbackLabel="Top Languages breakdown currently rate-limited. Click to view on GitHub."
            fallbackIcon={Code2}
            fallbackLink={`https://github.com/${USERNAME}?tab=repositories`}
            reloadKey={reloadKey}
            aspectClass="min-h-[195px]"
          />
        </motion.div>

        {/* Row 2: Contribution Streak */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-xl">
            <StatImage
              mirrors={STREAK_MIRRORS}
              userParam="user"
              params={STREAK_PARAMS}
              alt="GitHub Contribution Streak Stats"
              fallbackLabel="GitHub Streak widget temporarily unavailable. Click to see commit calendar."
              fallbackIcon={GitCommit}
              fallbackLink={`https://github.com/${USERNAME}`}
              reloadKey={reloadKey}
              aspectClass="min-h-[195px]"
            />
          </div>
        </motion.div>
      </div>

      <p className="text-center text-xs text-muted-foreground/70 mt-8 font-mono">
        Telemetry synced from GitHub API. Verified profile:{" "}
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
        >
          @{USERNAME}
          <ExternalLink size={11} />
        </a>
      </p>
    </SectionWrapper>
  );
};

export default GitHubStatsSection;
