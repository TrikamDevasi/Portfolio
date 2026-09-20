import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type CursorMode = "default" | "link" | "button" | "project" | "image";

const CustomCursor = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging follower ring
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers and desktop viewports
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isDesktop = window.innerWidth >= 1024;

    if (!isTouch && isDesktop && !shouldReduceMotion) {
      setIsEnabled(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect interactive targets under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "project") {
          setCursorMode("project");
          setCursorText("VIEW");
          return;
        }
        if (type === "image") {
          setCursorMode("image");
          setCursorText("EXPLORE");
          return;
        }
      }

      if (target.closest("button") || target.closest(".btn-primary") || target.closest(".btn-secondary")) {
        setCursorMode("button");
        setCursorText("");
        return;
      }

      if (target.closest("a") || target.closest(".filter-pill") || target.closest('[role="button"]')) {
        setCursorMode("link");
        setCursorText("");
        return;
      }

      setCursorMode("default");
      setCursorText("");
    };

    const handleMouseLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (!isEnabled) return null;

  // Sizing & styling per mode
  const getRingStyles = () => {
    switch (cursorMode) {
      case "project":
        return {
          width: 68,
          height: 68,
          backgroundColor: "rgba(16, 185, 129, 0.9)",
          borderColor: "rgba(16, 185, 129, 1)",
          textColor: "#09090B",
        };
      case "image":
        return {
          width: 72,
          height: 72,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderColor: "rgba(255, 255, 255, 1)",
          textColor: "#09090B",
        };
      case "button":
        return {
          width: 50,
          height: 50,
          backgroundColor: "rgba(16, 185, 129, 0.12)",
          borderColor: "rgba(16, 185, 129, 0.6)",
          textColor: "transparent",
        };
      case "link":
        return {
          width: 44,
          height: 44,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderColor: "rgba(255, 255, 255, 0.4)",
          textColor: "transparent",
        };
      default:
        return {
          width: 32,
          height: 32,
          backgroundColor: "transparent",
          borderColor: "rgba(16, 185, 129, 0.45)",
          textColor: "transparent",
        };
    }
  };

  const ring = getRingStyles();

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Precision Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-primary transition-opacity duration-200 ${
          cursorMode === "project" || cursorMode === "image" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Fluid Trailing Follower Ring with Contextual Badge */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ring.width,
          height: ring.height,
          backgroundColor: ring.backgroundColor,
          borderColor: ring.borderColor,
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="fixed top-0 left-0 rounded-full border flex items-center justify-center backdrop-blur-[1px] shadow-sm pointer-events-none"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            style={{ color: ring.textColor }}
            className="text-[10px] font-mono font-black tracking-widest uppercase select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
