"use client";

/**
 * Subtle hexagonal grid background pattern.
 * Repeating hex tiles with a few hand-placed gold accent hexagons
 * that pulse slowly. Designed to layer behind AmbientBg orbs.
 */

/* ── Hex geometry helpers ── */
const HEX_SIZE = 15; // "radius" — produces ~30px wide hexagons
const HEX_W = HEX_SIZE * 2;
const HEX_H = Math.sqrt(3) * HEX_SIZE;

/** Pointy-top hexagon path string centered at (cx, cy). */
function hexPath(cx: number, cy: number, size: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
}

/* ── Pattern tile ──
   Pointy-top hex tiling: every other column is offset by half HEX_H.
   The pattern tile contains two hexagons so columns interlock. */
const PATTERN_W = HEX_W * 0.75; // horizontal spacing between column centers
const PATTERN_H = HEX_H; // vertical period

const tileHex1 = hexPath(HEX_SIZE, HEX_H / 2, HEX_SIZE);
const tileHex2 = hexPath(HEX_SIZE + PATTERN_W, HEX_H, HEX_SIZE);

/* ── Accent hexagons ──
   Hand-placed at asymmetric viewport positions.
   Coordinates use percentage-based viewBox positioning via absolute values
   in a 1920x1080 "design" viewBox, then the SVG stretches to fill. */
interface AccentHex {
  cx: number;
  cy: number;
  size: number;
  delay: string; // animation-delay for staggered pulse
}

const accents: AccentHex[] = [
  { cx: 1580, cy: 180, size: 28, delay: "0s" }, // top-right area
  { cx: 260, cy: 520, size: 24, delay: "1.3s" }, // center-left
  { cx: 1400, cy: 760, size: 22, delay: "2.8s" }, // bottom-right
  { cx: 720, cy: 920, size: 20, delay: "0.7s" }, // bottom-center-left
];

export default function HexGrid() {
  return (
    <svg
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh", opacity: 0.3 }}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hex-tile"
          x="0"
          y="0"
          width={PATTERN_W}
          height={PATTERN_H}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={tileHex1}
            fill="none"
            stroke="rgba(255,255,255,0.02)"
            strokeWidth="0.5"
          />
          <path
            d={tileHex2}
            fill="none"
            stroke="rgba(255,255,255,0.02)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      {/* Repeating grid fill */}
      <rect width="100%" height="100%" fill="url(#hex-tile)" />

      {/* Accent hexagons — pulsing gold highlights */}
      {accents.map((a, i) => (
        <path
          key={i}
          d={hexPath(a.cx, a.cy, a.size)}
          fill="rgba(201,169,110,0.01)"
          stroke="rgba(201,169,110,0.06)"
          strokeWidth="0.8"
          className="animate-hex-pulse"
          style={{
            transformOrigin: `${a.cx}px ${a.cy}px`,
            animationDelay: a.delay,
          }}
        />
      ))}
    </svg>
  );
}
