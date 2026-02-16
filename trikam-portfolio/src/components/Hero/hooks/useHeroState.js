import { useState } from 'react';

export const useHeroState = () => {
    const [showAchievements, setShowAchievements] = useState(false);
    const [activeAchievement, setActiveAchievement] = useState(null);
    const [likeCount, setLikeCount] = useState(89);
    const [isLiked, setIsLiked] = useState(false);
    const [showTechStack, setShowTechStack] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    return {
        showAchievements,
        setShowAchievements,
        activeAchievement,
        setActiveAchievement,
        likeCount,
        setLikeCount,
        isLiked,
        setIsLiked,
        showTechStack,
        setShowTechStack,
        showActivities,
        setShowActivities,
        copiedEmail,
        setCopiedEmail,
        isPaused,
        setIsPaused
    };
};
