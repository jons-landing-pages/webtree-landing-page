export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="gradient-line" />

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="text-sm tracking-[0.2em] uppercase text-text/50"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              WebTree
            </span>
            <span
              className="text-sm tracking-[0.2em] uppercase text-text/25"
              style={{ fontFamily: "var(--font-display)", fontWeight: 200 }}
            >
              Global
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-text/20">
            &copy; {new Date().getFullYear()} Webtree Global Pte. Ltd.
          </p>

          {/* Location */}
          <span className="text-xs text-text/15 tracking-wider">
            Singapore
          </span>
        </div>
      </div>
    </footer>
  );
}
