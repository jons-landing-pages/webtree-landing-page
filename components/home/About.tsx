"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeIn } from "@/lib/animations";

const PILLARS = [
  {
    label: "Capital",
    description:
      "Proprietary trading strategies across global markets, with disciplined risk management and systematic execution.",
  },
  {
    label: "Technology",
    description:
      "Building and investing in technology platforms that create measurable value across maritime, AI, and enterprise software.",
  },
  {
    label: "Ventures",
    description:
      "Strategic partnerships and early-stage investments in founders solving complex problems with elegant solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 sm:py-40">
      <div className="section-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          {...fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          whileInView="animate"
          initial="initial"
          className="max-w-2xl mb-20"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-primary/70 mb-4" style={{ fontFamily: "var(--font-body)" }}>
            About
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-text/90 leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            A Singapore-based holding company operating across strategic capital
            allocation, technology, and venture partnerships.
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.label}
              variants={staggerItem}
              className="glass rounded-xl p-8 group hover:border-primary/10 transition-colors duration-500"
            >
              <h3
                className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pillar.label}
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
