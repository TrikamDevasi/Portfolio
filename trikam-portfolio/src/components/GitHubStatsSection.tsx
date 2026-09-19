import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, GitCommit, BarChart2, Code2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const USERNAME = "TrikamDevasi";

/* ─── High-Availability Mirror Configuration ─── */
const STATS_MIRRORS = [
  "https://github-readme-stats.vercel.app/api",
  "https://github-readme-stats-alpha.vercel.app/api",
];

const LANGS_MIRRORS = [
  "https://github-readme-stats.vercel.app/api/top-langs/",
  "https://github-readme-stats-alpha.vercel.app/api/top-langs/",
];

const STREAK_MIRRORS = [
  "https://streak-stats.demolab.com",
  "https://github-readme-streak-stats.herokuapp.com",
];

const COMMON_PARAMS = "theme=tokyonight&hide_border=true&bg_color=0a090f&title_color=06DF8C&icon_color=06DF8C&text_color=939aff";

/* ─── Skeleton placeholder ─── */
const Skeleton = () => (
  <div className="w-full h-48 rounded-xl border border-border/50 bg-card/40 animate-pulse" />
);

/* ─── Fallback card when image fails ─── */
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
    className="w-full min-h-[195px] flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-border/60 bg-card/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group text-center"
  >
    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
      <Icon size={24} className="text-primary" />
    </div>
    <span className="text-xs text-muted-foreground leading-relaxed max-w-xs">
      {label}
    </span>
    <span className="text-[10px] text-primary font-mono uppercase tracking-wider mt-1 border-t border-border/40 pt-2">
      View Live on GitHub →
    </span>
  </a>
);

/* ─── Resilient Stat Image with Sequential Failover ─── */
interface StatImageProps {
  mirrors: string[];
  params: string;
  alt: string;
  fallbackLabel: string;
  fallbackIcon: React.ElementType;
  fallbackLink: string;
  reloadKey: number;
  userParam?: string;
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
}: StatImageProps) => {
  const [mirrorIndex, setMirrorIndex] = useState(0);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  const currentSrc = `${mirrors[mirrorIndex]}?${userParam}=${USERNAME}&${params}&t=${reloadKey}`;
  const isFinalMirror = mirrorIndex >= mirrors.length - 1;

  const handleError = () => {
    if (!isFinalMirror) {
      setMirrorIndex((prev) => prev + 1);
      setStatus("loading");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="w-full flex justify-center">
      {status === "loading" && <Skeleton />}
      {status === "error" && (
        <FallbackCard
          label={fallbackLabel}
          icon={fallbackIcon}
          link={fallbackLink}
        />
      )}
      <img
        key={`${mirrorIndex}-${reloadKey}`}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`rounded-xl border border-border/60 max-w-full h-auto transition-all duration-500 ${
          status === "loaded" ? "opacity-100 block" : "opacity-0 hidden"
        }`}
        onLoad={() => setStatus("loaded")}
        onError={handleError}
      />
    </div>
  );
};

/* ─── Main section ─── */
const GitHubStatsSection = () => {
  const [reloadKey, setReloadKey] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setReloadKey(Date.now());
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <SectionWrapper
      id="github"
      title="GitHub Activity"
      subtitle="Open-source contributions and development frequency"
      sectionIndex={8}
    >
      {/* Refresh button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          aria-label="Refresh GitHub statistics"
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary px-4 py-2 rounded-full border border-border hover:border-primary/40 bg-card/40 hover:bg-primary/5 transition-all duration-300 disabled:opacity-50"
        >
          <RefreshCw
            size={13}
            className={isRefreshing ? "animate-spin" : ""}
          />
          {isRefreshing ? "Refreshing Activity…" : "Refresh GitHub Telemetry"}
        </button>
      </div>

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
            params={`${COMMON_PARAMS}&show_icons=true&include_all_commits=true&count_private=true&rank_icon=github`}
            alt="Trikam Devasi GitHub Activity Overview"
            fallbackLabel="GitHub Stats service currently rate-limited. Click to view repositories directly on GitHub."
            fallbackIcon={BarChart2}
            fallbackLink={`https://github.com/${USERNAME}`}
            reloadKey={reloadKey}
          />
          <StatImage
            mirrors={LANGS_MIRRORS}
            params={`${COMMON_PARAMS}&layout=compact&langs_count=8`}
            alt="Top Programming Languages"
            fallbackLabel="Top Languages service currently rate-limited. Click to view language breakdown on GitHub."
            fallbackIcon={Code2}
            fallbackLink={`https://github.com/${USERNAME}?tab=repositories`}
            reloadKey={reloadKey}
          />
        </motion.div>

        {/* Row 2: Streak Stats */}
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
              params={`${COMMON_PARAMS}&ring=06DF8C&fire=06DF8C&currStreakLabel=06DF8C&sideNums=06DF8C&sideLabels=939aff`}
              alt="GitHub Contribution Streak Stats"
              fallbackLabel="GitHub Streak widget temporarily unavailable. Click to see commit calendar."
              fallbackIcon={GitCommit}
              fallbackLink={`https://github.com/${USERNAME}`}
              reloadKey={reloadKey}
            />
          </div>
        </motion.div>
      </div>

      <p className="text-center text-xs text-muted-foreground/60 mt-6 font-mono">
        Telemetry synced from GitHub API. Verified profile: <a href="https://github.com/TrikamDevasi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@TrikamDevasi</a>
      </p>
    </SectionWrapper>
  );
};

export default GitHubStatsSection;
