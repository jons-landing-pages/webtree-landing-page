"use client";
import { useRef, useEffect } from "react";

interface Orb {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: string;
}

export default function AmbientBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const orbs: Orb[] = [
      { x: w() * 0.15, y: h() * 0.25, r: 350, dx: 0.15, dy: 0.1, color: "rgba(20,184,166,0.04)" },
      { x: w() * 0.75, y: h() * 0.5, r: 280, dx: -0.12, dy: 0.08, color: "rgba(212,163,115,0.03)" },
      { x: w() * 0.5, y: h() * 0.85, r: 320, dx: 0.08, dy: -0.12, color: "rgba(20,184,166,0.025)" },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());

      for (const orb of orbs) {
        orb.x += orb.dx;
        orb.y += orb.dy;

        if (orb.x < -orb.r) orb.x = w() + orb.r;
        if (orb.x > w() + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = h() + orb.r;
        if (orb.y > h() + orb.r) orb.y = -orb.r;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(orb.x - orb.r, orb.y - orb.r, orb.r * 2, orb.r * 2);
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
