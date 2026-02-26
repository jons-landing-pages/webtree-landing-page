"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

interface ContactItem {
  label: string;
  content: string;
  href?: string;
  muted?: boolean;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    content: "hello@webtree.global",
    href: "mailto:hello@webtree.global",
  },
  {
    label: "Location",
    content: "Singapore",
  },
  {
    label: "Entity",
    content: "Webtree Global Pte. Ltd.",
    muted: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 sm:py-44">
      <div className="section-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left -- statement */}
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
              Contact
            </p>
            <h2
              className="text-2xl sm:text-3xl leading-[1.5] text-text/85"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              For inquiries, partnership opportunities, or general
              correspondence.
            </h2>
          </motion.div>

          {/* Right -- contact details */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10"
          >
            {CONTACT_ITEMS.map((item) => (
              <motion.div key={item.label} variants={staggerItem}>
                <h3
                  className="text-[10px] tracking-[0.3em] uppercase text-muted/50 mb-2.5"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-text/75 hover:text-accent transition-colors duration-500"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p
                    className={`text-sm ${
                      item.muted ? "text-muted/60" : "text-text/75"
                    }`}
                  >
                    {item.content}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
