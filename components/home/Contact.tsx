"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 sm:py-40">
      <div className="section-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-primary/70 mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Contact
            </p>
            <h2
              className="text-2xl sm:text-3xl text-text/90 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              For inquiries, partnership opportunities, or general correspondence.
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </motion.div>

          {/* Right — details */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8 pt-2"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted/60 mb-2">
                Email
              </h3>
              <a
                href="mailto:hello@webtree.global"
                className="text-sm text-text/80 hover:text-primary transition-colors duration-300"
              >
                hello@webtree.global
              </a>
            </motion.div>

            <motion.div variants={staggerItem}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted/60 mb-2">
                Location
              </h3>
              <p className="text-sm text-text/80">Singapore</p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted/60 mb-2">
                Entity
              </h3>
              <p className="text-sm text-muted">
                Webtree Global Pte. Ltd.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
