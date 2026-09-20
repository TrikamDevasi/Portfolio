import { Variants, Transition } from "framer-motion";

export const EASING = {
  easeOut: [0.22, 1, 0.36, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
};

export const DURATION = {
  micro: 0.18,
  fast: 0.15,
  normal: 0.25,
  medium: 0.4,
  slow: 0.6,
  cinematic: 0.8,
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

export const maskRevealVariant: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (delay = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
      delay,
    },
  }),
};

export const imageRevealVariant: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
      delay,
    },
  }),
};

export const cardStaggerVariant: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: DURATION.medium,
      ease: EASING.easeOut,
      delay,
    },
  }),
};

export const staggerContainerVariant = (staggerChildren = 0.05, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
