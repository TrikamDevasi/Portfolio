import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isExiting, setIsExiting] = useState(false);
  const finishedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    try {
      sessionStorage.setItem("hasSeenIntro", "true");
    } catch {
      // Ignore sessionStorage errors
    }
    onComplete();
  }, [onComplete]);

  const startExit = useCallback(() => {
    if (isExiting || finishedRef.current) return;
    setIsExiting(true);
    const exitDuration = shouldReduceMotion ? 250 : 650;
    setTimeout(() => {
      handleFinish();
    }, exitDuration);
  }, [isExiting, shouldReduceMotion, handleFinish]);

  // Handle keyboard dismiss (Escape, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        startExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [startExit]);

  // Automatic progression after ~2.2s
  useEffect(() => {
    const autoExitDelay = shouldReduceMotion ? 800 : 2200;
    const timer = setTimeout(() => {
      startExit();
    }, autoExitDelay);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion, startExit]);

  return (
    <motion.div
      role="status"
      aria-label="Trikam Devasi Portfolio Introduction"
      initial={{ y: 0, opacity: 1 }}
      animate={
        isExiting
          ? shouldReduceMotion
            ? { opacity: 0 }
            : { y: "-100%" }
          : { y: 0, opacity: 1 }
      }
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{
        duration: shouldReduceMotion ? 0.25 : 0.55,
        ease: [0.76, 0, 0.24, 1],
        delay: shouldReduceMotion ? 0 : 0.12,
      }}
      onClick={startExit}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#FAFAF9] dark:bg-[#09090B] text-[#18181B] dark:text-[#FAFAFA] select-none overflow-hidden font-sans p-6 sm:p-10 md:p-14 cursor-pointer"
    >
      {/* Subtle Architectural Hairline Grid / Frame */}
      <div
        className="absolute inset-4 sm:inset-7 md:inset-10 border border-[#18181B]/[0.07] dark:border-[#FAFAFA]/[0.07] pointer-events-none"
        aria-hidden="true"
      >
        <span className="absolute -top-[5px] -left-[5px] text-[10px] text-[#71717A]/40 font-mono leading-none">
          +
        </span>
        <span className="absolute -top-[5px] -right-[5px] text-[10px] text-[#71717A]/40 font-mono leading-none">
          +
        </span>
        <span className="absolute -bottom-[5px] -left-[5px] text-[10px] text-[#71717A]/40 font-mono leading-none">
          +
        </span>
        <span className="absolute -bottom-[5px] -right-[5px] text-[10px] text-[#71717A]/40 font-mono leading-none">
          +
        </span>
      </div>

      {/* TOP BAR: Editorial Identity Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{
          duration: isExiting ? 0.18 : 0.5,
          delay: isExiting ? 0 : 0.25,
        }}
        className="relative z-10 flex items-start justify-between text-xs font-mono text-[#71717A] dark:text-[#A1A1AA] tracking-wider uppercase"
      >
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-[#18181B] dark:text-[#FAFAFA]">
            TRIKAM DEVASI
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#71717A] dark:text-[#71717A]">
            PORTFOLIO — 01 / 2026
          </span>
        </div>

        <div className="hidden sm:flex flex-col items-end text-right gap-0.5">
          <span>AHMEDABAD, IN</span>
          <span className="text-[10px] text-[#71717A]/70">
            23.02° N, 72.57° E
          </span>
        </div>
      </motion.div>

      {/* CENTER / RIGHT: Hero Name with Mask Reveal */}
      <div className="relative z-10 my-auto w-full max-w-6xl mx-auto flex flex-col justify-center sm:items-end sm:text-right py-4">
        {/* Line 1: TRIKAM */}
        <div className="overflow-hidden leading-[0.88]">
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: "105%", opacity: 0 }
            }
            animate={
              isExiting
                ? shouldReduceMotion
                  ? { opacity: 0 }
                  : { y: -24, opacity: 0 }
                : { y: 0, opacity: 1 }
            }
            transition={{
              duration: isExiting ? 0.3 : 0.65,
              delay: isExiting ? 0 : 0.08,
              ease: isExiting ? [0.76, 0, 0.24, 1] : [0.16, 1, 0.3, 1],
            }}
            className="font-bold tracking-[-0.04em] text-[#18181B] dark:text-[#FAFAFA] text-[clamp(2.75rem,11.5vw,7.25rem)]"
          >
            TRIKAM
          </motion.div>
        </div>

        {/* Line 2: DEVASI */}
        <div className="overflow-hidden leading-[0.88] mt-1 sm:mt-2">
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { y: "105%", opacity: 0 }
            }
            animate={
              isExiting
                ? shouldReduceMotion
                  ? { opacity: 0 }
                  : { y: -24, opacity: 0 }
                : { y: 0, opacity: 1 }
            }
            transition={{
              duration: isExiting ? 0.3 : 0.65,
              delay: isExiting ? 0.04 : 0.2,
              ease: isExiting ? [0.76, 0, 0.24, 1] : [0.16, 1, 0.3, 1],
            }}
            className="font-bold tracking-[-0.04em] text-[#18181B] dark:text-[#FAFAFA] text-[clamp(2.75rem,11.5vw,7.25rem)]"
          >
            DEVASI
          </motion.div>
        </div>

        {/* Subtitle & Accent Line */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
            transition={{
              duration: isExiting ? 0.2 : 0.45,
              delay: isExiting ? 0 : 0.45,
            }}
            className="text-[11px] sm:text-xs md:text-sm font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#52525B] dark:text-[#A1A1AA]"
          >
            FULL-STACK DEVELOPER • B.TECH CSE
          </motion.p>

          {/* Single Subtle Accent Line */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0, width: 72 }
                : { width: 0, opacity: 0 }
            }
            animate={
              isExiting
                ? { opacity: 0 }
                : { width: 72, opacity: 1 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.55,
              delay: isExiting ? 0 : 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-3 sm:mt-3.5 h-[1.5px] bg-[#059669] dark:bg-[#10B981] rounded-full origin-left sm:origin-right"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* BOTTOM BAR: Profile Detail & Enter Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{
          duration: isExiting ? 0.18 : 0.45,
          delay: isExiting ? 0 : 0.35,
        }}
        className="relative z-10 flex items-end justify-between"
      >
        {/* Profile Avatar & Mini Bio */}
        <div className="flex items-center gap-3">
          <img
            src="/trikam-devasi-profile.jpg"
            alt="Trikam Devasi"
            width={38}
            height={38}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover grayscale contrast-125 border border-[#18181B]/15 dark:border-[#FAFAFA]/15"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-[#18181B] dark:text-[#FAFAFA]">
              TRIKAM DEVASI
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#71717A] dark:text-[#71717A]">
              SOFTWARE ENGINEER / GUJARAT
            </span>
          </div>
        </div>

        {/* Enter Portfolio Micro-Interaction */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            startExit();
          }}
          className="group inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#18181B]/80 dark:text-[#FAFAFA]/80 hover:text-[#18181B] dark:hover:text-[#FAFAFA] transition-colors py-2 px-2 -mr-2 cursor-pointer focus:outline-none"
        >
          <span>ENTER</span>
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 text-[#059669] dark:text-[#10B981]"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;
