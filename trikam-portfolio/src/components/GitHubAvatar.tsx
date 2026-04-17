// 📸 To update: just change your GitHub profile picture at github.com/settings/profile

import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
const GITHUB_AVATAR_URL = "https://github.com/TrikamDevasi.png?size=400";

const GitHubAvatar = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* ── Avatar container ── */}
      <div className="relative w-full h-full p-1.5 rounded-full border border-white/10 bg-gradient-to-br from-primary/20 via-transparent to-accent/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-full overflow-hidden w-full h-full border-2 border-background shadow-2xl"
        >
          {!imgError ? (
            <img
              src={GITHUB_AVATAR_URL}
              alt="Trikam Devasi — GitHub Profile"
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (

            /* Fallback: new logo */
            <div className="w-full h-full flex items-center justify-center select-none bg-secondary/80 backdrop-blur-sm">
              <Logo size="sm" className="scale-[0.8]" />
            </div>

          )}
        </motion.div>

        {/* ── Availability badge ── */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border border-white/10 bg-background/90 backdrop-blur-md text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 shadow-2xl flex items-center gap-2.5 whitespace-nowrap">
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-primary" />
          </span>
          Available
        </div>
      </div>
    </div>
  );
};

export default GitHubAvatar;
