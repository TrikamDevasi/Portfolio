import { useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const shouldReduceMotion = useReducedMotion();

  const handleFinish = useCallback(() => {
    try {
      sessionStorage.setItem("hasSeenIntro", "true");
    } catch {
      // Ignore sessionStorage errors (e.g. private browsing restrictions)
    }
    onComplete();
  }, [onComplete]);

  // Handle keyboard dismiss (Escape, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFinish]);

  // Overall sequence timer
  useEffect(() => {
    // If reduced motion is requested, transition quickly (~700ms)
    // Otherwise complete in ~1.65s for a total experience < 2s with fade
    const timerDuration = shouldReduceMotion ? 700 : 1650;
    const timer = setTimeout(() => {
      handleFinish();
    }, timerDuration);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion, handleFinish]);

  return (
    <motion.div
      role="status"
      aria-label="Trikam Devasi Portfolio Introduction"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      onClick={handleFinish}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAFAF9] dark:bg-[#09090B] select-none px-6 text-center cursor-default"
    >
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        {/* Main Name */}
        <motion.h1
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 10 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          transition={{
            duration: shouldReduceMotion ? 0.25 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-sans font-bold tracking-[-0.03em] text-[#18181B] dark:text-[#FAFAFA] leading-none text-[clamp(2rem,6.5vw,4.25rem)]"
        >
          TRIKAM DEVASI
        </motion.h1>

        {/* Understated Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.4,
            delay: shouldReduceMotion ? 0.15 : 0.45,
            ease: "easeOut",
          }}
          className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#52525B] dark:text-[#A1A1AA]"
        >
          FULL-STACK DEVELOPER
        </motion.p>

        {/* Minimal Accent Indicator */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scaleX: 0 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, scaleX: 1 }
          }
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.35,
            delay: shouldReduceMotion ? 0.25 : 0.75,
            ease: "easeOut",
          }}
          className="mt-5 sm:mt-6 w-8 h-[1.5px] bg-[#059669] dark:bg-[#10B981] rounded-full"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};

export default IntroScreen;
