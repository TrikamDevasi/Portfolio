// Profile photo component — update by changing /trikam-devasi-profile.jpg in public/

import { useState } from "react";

const LOCAL_AVATAR_URL = "/trikam-devasi-profile.jpg";
const GITHUB_AVATAR_URL = "https://github.com/TrikamDevasi.png?size=400";

const GitHubAvatar = () => {
  const [currentSrc, setCurrentSrc] = useState(LOCAL_AVATAR_URL);
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-surface-elevated rounded-full">
        <span className="text-2xl font-bold text-muted-foreground">TD</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt="Trikam Devasi — Full-Stack Developer"
      width={400}
      height={400}
      loading="eager"
      decoding="async"
      className="w-full h-full object-cover"
      onError={() => {
        if (currentSrc === LOCAL_AVATAR_URL) {
          setCurrentSrc(GITHUB_AVATAR_URL);
        } else {
          setImgError(true);
        }
      }}
    />
  );
};

export default GitHubAvatar;
