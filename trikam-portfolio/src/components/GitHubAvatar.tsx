// 📸 To update: just change your GitHub profile picture at github.com/settings/profile

import { useState } from "react";
import { motion } from "framer-motion";

const GITHUB_AVATAR_URL = "https://github.com/TrikamDevasi.png?size=400";

/* ── Orbit ring helper ── */
interface OrbitRingProps {
  size: number;
  duration: number;
  delay?: number;
}

const OrbitRing = ({ size, duration, delay = 0 }: OrbitRingProps) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "1px dashed rgba(0, 217, 255, 0.15)",
      animation: `spin ${duration}s linear ${delay}s infinite`,
    }}
  />
);

/* ── Main component ── */
const GitHubAvatar = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* ── Keyframes (injected via style tag) ── */}
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.03); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Orbit rings container ── */}
      <div className="relative flex items-center justify-center"
           style={{ width: 330, height: 330 }}>
        <OrbitRing size={250} duration={20} />
        <OrbitRing size={290} duration={28} delay={-6} />
        <OrbitRing size={330} duration={35} delay={-12} />

        {/* ── Avatar wrapper with gradient border ── */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative z-10 rounded-full p-[3px]"
          style={{
            background: "linear-gradient(135deg, #00d9ff, #6366f1)",
            animation: "breathe 3s ease-in-out infinite",
          }}
        >
          {/* Inner container */}
          <div
            className="relative rounded-full overflow-hidden"
            style={{
              width: 220,
              height: 220,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget.parentElement as HTMLElement).style.boxShadow =
                "0 0 30px rgba(0,217,255,0.5), 0 0 60px rgba(99,102,241,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget.parentElement as HTMLElement).style.boxShadow =
                "none";
            }}
          >
            {!imgError ? (
              <img
                src={GITHUB_AVATAR_URL}
                alt="Trikam Devasi — GitHub profile picture"
                width={220}
                height={220}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={() => setImgError(true)}
              />
            ) : (
              /* Fallback: gradient initials */
              <div
                className="w-full h-full flex items-center justify-center select-none"
                style={{
                  background: "linear-gradient(135deg, #00d9ff, #6366f1)",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "3.5rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  TD
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Availability badge ── */}
      <div
        className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium"
        style={{
          background: "rgba(0, 217, 255, 0.07)",
          borderColor: "rgba(0, 217, 255, 0.25)",
          color: "rgba(255,255,255,0.75)",
          animation: "fadeUp 0.7s ease 0.5s both",
        }}
      >
        {/* Green pulsing dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
        </span>
        Open to Work
      </div>
    </div>
  );
};

export default GitHubAvatar;
