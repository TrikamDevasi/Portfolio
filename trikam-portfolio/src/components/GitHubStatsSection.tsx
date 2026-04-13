import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, GitCommit, BarChart2, Code2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const USERNAME = "TrikamDevasi";

/* ─── URL builder (cache-busting + custom theme) ─── */
// Using tokyonight + explicit bg_color prevents blank SVG responses from the CDN
const STATS_URL = `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a090f&include_all_commits=true&count_private=true&rank_icon=github&title_color=06DF8C&icon_color=06DF8C&text_color=939aff`;
const LANGS_URL = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&langs_count=8&theme=tokyonight&hide_border=true&bg_color=0a090f&title_color=06DF8C&text_color=939aff`;
// streak-stats.demolab.com is the current active fork — herokuapp is frequently offline
const STREAK_URL = `https://streak-stats.demolab.com?user=${USERNAME}&theme=tokyonight&hide_border=true&background=0a090f&ring=06DF8C&fire=06DF8C&currStreakLabel=06DF8C&sideNums=06DF8C&sideLabels=939aff`;

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
    <Icon size={28} className="text-primary/50 group-hover:text-primary transition-colors" />
    <span className="text-xs text-muted-foreground text-center px-4">
      {label}
    </span>
    <span className="text-[10px] text-primary/60 font-mono">Click to view on GitHub →</span>
  </a>
);

/* ─── Single stat image with skeleton + fallback ─── */
interface StatImageProps {
  src: string;
  alt: string;
  fallbackLabel: string;
  fallbackIcon: React.ElementType;
  fallbackLink: string;
  width?: string;
  height?: number;
  className?: string;
  reloadKey: number;
}

const StatImage = ({
  src,
  alt,
  fallbackLabel,
  fallbackIcon,
  fallbackLink,
  width = "100%",
  height = 195,
  className = "",
  reloadKey,
}: StatImageProps) => {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  // Reset state when reloadKey changes
  const imgSrc = `${src}&t=${reloadKey}`;

  return (
    <div style={{ width }}>
      {state === "loading" && <Skeleton width={width} height={height} />}
      {state === "error" && (
        <FallbackCard
          label={fallbackLabel}
          icon={fallbackIcon}
          link={fallbackLink}
          width={width}
          height={height}
        />
      )}
      <img
        key={reloadKey}
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className={`rounded-xl border border-border max-w-full transition-opacity duration-500 ${
          state === "loaded" ? "opacity-100" : "opacity-0 absolute pointer-events-none"
        } ${className}`}
        style={{ width, height }}
        onLoad={() => setState("loaded")}
        onError={() => setState("error")}
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
            src={STATS_URL}
            alt="GitHub Stats"
            fallbackLabel="GitHub Stats unavailable — service may be rate-limited. Click to view on GitHub."
            fallbackIcon={BarChart2}
            fallbackLink={`https://github.com/${USERNAME}`}
            width="495px"
            height={195}
            reloadKey={reloadKey}
          />
          <StatImage
            src={LANGS_URL}
            alt="Top Languages"
            fallbackLabel="Top Languages unavailable — service may be rate-limited. Click to view on GitHub."
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
            src={STREAK_URL}
            alt="GitHub Streak Stats"
            fallbackLabel="GitHub Streak unavailable — click to view contribution history."
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
