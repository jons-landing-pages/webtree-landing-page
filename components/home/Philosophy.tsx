"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const PRINCIPLES = [
  { value: "Discipline", detail: "Systematic process over intuition" },
  { value: "Alignment", detail: "Skin in the game, always" },
  { value: "Compounding", detail: "Long-term value creation over short-term extraction" },
];

export default function Philosophy() {
  return (
    <section className="relative py-32 sm:py-40">
      <div className="section-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — statement */}
          <motion.div
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-accent/70 mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Philosophy
            </p>
            <h2
              className="text-2xl sm:text-3xl text-text/90 leading-relaxed"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              We believe that consistent, disciplined capital allocation — not
              speculation — is the foundation of enduring wealth.
            </h2>
          </motion.div>

          {/* Right — principles */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6 pt-2"
          >
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.value}
                variants={staggerItem}
                className="flex items-start gap-5"
              >
                <span className="text-xs text-primary/30 mt-1 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-sm tracking-[0.1em] uppercase text-text/80 mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {p.value}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
