export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="gradient-line" />

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between flex-wrap gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <span
              className="text-xs tracking-[0.2em] uppercase text-text/30"
              style={{ fontFamily: "var(--font-accent)", fontWeight: 500 }}
            >
              WebTree
            </span>
            <span
              className="text-xs tracking-[0.2em] uppercase text-text/15"
              style={{ fontFamily: "var(--font-accent)", fontWeight: 300 }}
            >
              Global
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[10px] text-text/15 tracking-wider">
            &copy; 2026 Webtree Global Pte. Ltd.
          </p>

          {/* Location */}
          <span className="text-[10px] text-text/10 tracking-[0.2em] uppercase">
            Singapore
          </span>
        </div>
      </div>
    </footer>
  );
}
