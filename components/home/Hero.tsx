"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Layers ── */}

      {/* 1. Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* 2. Ghostly watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/webtree-logo.png"
          alt=""
          width={600}
          height={600}
          className="h-[500px] sm:h-[550px] md:h-[600px] w-auto opacity-[0.04] animate-gentle-float select-none"
          aria-hidden="true"
        />
      </div>

      {/* 3. Central radial glow — warm gold */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      {/* 4. Secondary teal glow — offset */}
      <div
        className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          {/* Logo mark */}
          <motion.div variants={staggerItem} className="mb-10">
            <Image
              src="/webtree-logo.png"
              alt="WebTree Global"
              width={140}
              height={140}
              className="h-[100px] sm:h-[120px] md:h-[140px] w-auto opacity-70"
              priority
            />
          </motion.div>

          {/* Wordmark */}
          <motion.h1
            variants={staggerItem}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-[0.08em] uppercase text-text/95 mb-2"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            WebTree
          </motion.h1>

          {/* Sub-wordmark */}
          <motion.p
            variants={staggerItem}
            className="text-3xl sm:text-4xl md:text-5xl tracking-[0.35em] uppercase text-muted mb-16"
            style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
          >
            Global
          </motion.p>

          {/* Decorative divider with diamond */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-3 mb-16"
          >
            <span className="gradient-line w-[36px] shrink-0" />
            <span className="block w-1.5 h-1.5 rotate-45 bg-accent/50 shrink-0" />
            <span className="gradient-line w-[36px] shrink-0" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted"
            style={{ fontFamily: "var(--font-accent)", fontWeight: 400 }}
          >
            Strategic Capital &middot; Systematic Execution
          </motion.p>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-10 animate-gentle-float bg-gradient-to-b from-accent/40 to-transparent" />
      </motion.div>
    </section>
  );
}
