import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, GitCommit, BarChart2, Code2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const USERNAME = "TrikamDevasi";

/* ─── High-Availability Mirror Configuration ─── */
const STATS_MIRRORS = [
  "https://github-readme-stats.vercel.app/api",
  "https://github-readme-stats-alpha.vercel.app/api",
  "https://github-readme-stats-one.vercel.app/api",
];

const LANGS_MIRRORS = [
  "https://github-readme-stats.vercel.app/api/top-langs/",
  "https://github-readme-stats-alpha.vercel.app/api/top-langs/",
  "https://github-readme-stats-one.vercel.app/api/top-langs/",
];

const STREAK_MIRRORS = [
  "https://streak-stats.demolab.com",
  "https://github-readme-streak-stats.herokuapp.com",
  "https://streak-stats-alpha.vercel.app",
];

const COMMON_PARAMS = "theme=tokyonight&hide_border=true&bg_color=0a090f&title_color=06DF8C&icon_color=06DF8C&text_color=939aff";

/* ─── Skeleton placeholder ─── */
const Skeleton = ({ width, height }: { width: string; height: number }) => (
  <div
    className="rounded-xl border border-border bg-card/40 animate-pulse"
    style={{ width, height }}
  />
);

/* ─── Fallback card when image fails ─── */
const FallbackCard = ({
  label,
  icon: Icon,
  link,
  width,
  height,
}: {
  label: string;
  icon: React.ElementType;
  link: string;
  width: string;
  height: number;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
    style={{ width, minHeight: height }}
  >
    <div className="p-3 rounded-full bg-primary/5 border border-primary/10">
      <Icon size={24} className="text-primary/50 group-hover:text-primary transition-colors" />
    </div>
    <span className="text-[10px] text-muted-foreground text-center px-6 leading-relaxed">
      {label}
    </span>
    <span className="text-[9px] text-primary/40 font-mono uppercase tracking-widest mt-2 border-t border-white/5 pt-2">View Live Source →</span>
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
  width?: string;
  height?: number;
  className?: string;
  reloadKey: number;
  userParam?: string; // Add optional userParam
}

const StatImage = ({
  mirrors,
  params,
  alt,
  fallbackLabel,
  fallbackIcon,
  fallbackLink,
  width = "100%",
  height = 195,
  className = "",
  reloadKey,
  userParam = "username", // Default to username
}: StatImageProps) => {
  const [mirrorIndex, setMirrorIndex] = useState(0);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  const currentSrc = `${mirrors[mirrorIndex]}?${userParam}=${USERNAME}&${params}&t=${reloadKey}`;
  const isFinalMirror = mirrorIndex >= mirrors.length - 1;

  const handleError = () => {
    if (!isFinalMirror) {
      // Attempt next mirror
      setMirrorIndex((prev) => prev + 1);
      setStatus("loading");
    } else {
      // All mirrors failed
      setStatus("error");
    }
  };

  return (
    <div style={{ width }} className="relative">
      {status === "loading" && <Skeleton width={width} height={height} />}
      {status === "error" && (
        <FallbackCard
          label={fallbackLabel}
          icon={fallbackIcon}
          link={fallbackLink}
          width={width}
          height={height}
        />
      )}
      <img
        key={`${mirrorIndex}-${reloadKey}`}
        src={currentSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        className={`rounded-xl border border-border max-w-full transition-all duration-500 ${
          status === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute pointer-events-none"
        } ${className}`}
        style={{ width, height }}
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
      title="GitHub Stats"
      subtitle="My open-source activity at a glance"
    >
      {/* Refresh button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary px-4 py-2 rounded-full border border-border hover:border-primary/40 bg-card/40 hover:bg-primary/5 transition-all duration-300 disabled:opacity-50"
        >
          <RefreshCw
            size={13}
            className={isRefreshing ? "animate-spin" : ""}
          />
          {isRefreshing ? "Refreshing…" : "Refresh Stats"}
        </button>
      </div>

      <div className="flex flex-col items-center gap-5">
        {/* Row 1: Stats card + Top Languages side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-5 w-full"
        >
          <StatImage
            mirrors={STATS_MIRRORS}
            params={`${COMMON_PARAMS}&show_icons=true&include_all_commits=true&count_private=true&rank_icon=github`}
            alt="GitHub Stats"
            fallbackLabel="GitHub Stats service is currently offline. Viewing remote data via secondary nodes failed."
            fallbackIcon={BarChart2}
            fallbackLink={`https://github.com/${USERNAME}`}
            width="495px"
            height={195}
            reloadKey={reloadKey}
          />
          <StatImage
            mirrors={LANGS_MIRRORS}
            params={`${COMMON_PARAMS}&layout=compact&langs_count=8`}
            alt="Top Languages"
            fallbackLabel="Top Languages service is currently offline. Secondary nodes unreachable."
            fallbackIcon={Code2}
            fallbackLink={`https://github.com/${USERNAME}?tab=repositories`}
            width="350px"
            height={195}
            reloadKey={reloadKey}
          />
        </motion.div>

        {/* Row 2: Streak — full width centred */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center w-full"
        >
          <StatImage
            mirrors={STREAK_MIRRORS}
            userParam="user"
            params={`${COMMON_PARAMS}&ring=06DF8C&fire=06DF8C&currStreakLabel=06DF8C&sideNums=06DF8C&sideLabels=939aff`}
            alt="GitHub Streak Stats"
            fallbackLabel="Streak Stats unavailable. Contribution telemetry disrupted."
            fallbackIcon={GitCommit}
            fallbackLink={`https://github.com/${USERNAME}`}
            width="495px"
            height={195}
            reloadKey={reloadKey}
          />
        </motion.div>
      </div>

      {/* Hint note */}
      <p className="text-center text-xs text-muted-foreground/50 mt-6 font-mono">
        * Stats widgets are served by third-party APIs and may occasionally be rate-limited.
      </p>
    </SectionWrapper>
  );
};

export default GitHubStatsSection;
