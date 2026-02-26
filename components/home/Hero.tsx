"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(20,184,166,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          {/* Wordmark */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] uppercase text-text mb-2"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            WebTree
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] uppercase text-muted mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 200 }}
          >
            Global
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={staggerItem}
            className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-12"
          />

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="text-sm sm:text-base tracking-[0.2em] uppercase text-muted max-w-lg"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Strategic Capital &middot; Systematic Execution
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
