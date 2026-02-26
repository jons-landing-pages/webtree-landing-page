import type { Variants, Transition } from "framer-motion";

/**
 * Luxury bezier curve — slower ease-out with a gentle overshoot feel.
 * Produces motion that decelerates gracefully, befitting a premium brand.
 */
const luxuryEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

/* ═══════════════════════════════════════════
   Individual Element Presets
   ═══════════════════════════════════════════ */

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: luxuryEase } as Transition,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.0, ease: "easeOut" } as Transition,
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: luxuryEase } as Transition,
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: luxuryEase } as Transition,
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: luxuryEase } as Transition,
};

/* ═══════════════════════════════════════════
   Stagger Orchestration
   ═══════════════════════════════════════════ */

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: luxuryEase },
  },
};
