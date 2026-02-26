"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const principles = [
  {
    number: "01",
    title: "Discipline",
    detail: "Systematic process over intuition. Every decision has a framework.",
  },
  {
    number: "02",
    title: "Alignment",
    detail: "Skin in the game. Our capital alongside yours, always.",
  },
  {
    number: "03",
    title: "Compounding",
    detail: "Long-term value creation. We don\u2019t optimise for quarters.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 sm:py-44">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* ── Left Column ── */}
          <motion.div
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-primary/50 mb-6"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Philosophy
            </p>

            <h2
              className="text-2xl sm:text-3xl leading-[1.5] text-text/85"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              We believe in the patient compounding of capital through
              disciplined, systematic processes&nbsp;&mdash; not speculation.
            </h2>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {principles.map((principle, index) => (
              <div key={principle.number}>
                {index > 0 && (
                  <div className="h-px bg-white/[0.03] my-6" />
                )}

                <motion.div variants={staggerItem}>
                  <p className="text-xs font-mono text-accent/20">
                    {principle.number}
                  </p>

                  <h3
                    className="text-sm tracking-[0.15em] uppercase text-text/75 font-medium mt-2"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {principle.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mt-1.5">
                    {principle.detail}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
