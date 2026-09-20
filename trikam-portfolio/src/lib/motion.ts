import { Variants, Transition } from "framer-motion";

export const EASING = {
  easeOut: [0.22, 1, 0.36, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
};

export const DURATION = {
  micro: 0.18,
  fast: 0.25,
  normal: 0.35,
  medium: 0.5,
  slow: 0.65,
};

export const defaultTransition: Transition = {
  duration: DURATION.medium,
  ease: EASING.easeOut,
};

export const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
      delay,
    },
  }),
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: "easeOut",
      delay,
    },
  }),
};

export const staggerContainerVariant = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
