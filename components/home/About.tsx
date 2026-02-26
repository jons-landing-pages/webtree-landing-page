"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const pillars = [
  {
    number: "01",
    title: "Capital",
    description:
      "Proprietary trading strategies across global markets. Disciplined risk management, systematic execution.",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Building and investing in technology platforms across maritime, AI, and enterprise software.",
  },
  {
    number: "03",
    title: "Ventures",
    description:
      "Strategic partnerships and early-stage investments in founders solving complex problems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 sm:py-44">
      <div className="max-w-5xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          {...fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-accent/60 mb-6"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            About
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl leading-[1.5] text-text/85 mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            A Singapore-based holding company operating across strategic capital
            allocation, technology, and venture partnerships.
          </h2>

          <div className="gradient-line w-20 mb-20" />
        </motion.div>

        {/* ── Pillar Cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={staggerItem}
              className="glass relative rounded-xl p-8 border border-transparent hover:border-accent/10 transition-colors duration-700"
            >
              {/* Top-left accent line */}
              <div className="absolute top-0 left-8 w-8 h-px bg-accent/20" />

              <p className="text-[10px] font-mono text-primary/25 mb-4">
                {pillar.number}
              </p>

              <h3
                className="text-xs tracking-[0.25em] uppercase text-accent/80 mb-3"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                {pillar.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
