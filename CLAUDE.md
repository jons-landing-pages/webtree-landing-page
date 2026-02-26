# WebTree Global Landing Page

Single-page institutional landing site for Webtree Global Pte. Ltd.

## Stack
- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion 12

## Structure
```
app/
  layout.tsx          — Root layout, metadata, fonts
  page.tsx            — Home page (Hero → About → Philosophy → Contact)
  globals.css         — Theme variables, custom animations
components/
  Nav.tsx             — Fixed header, anchor links, mobile menu
  ClientNav.tsx       — Dynamic import wrapper
  Footer.tsx          — Minimal footer
  AmbientBg.tsx       — Canvas floating orbs
  home/
    Hero.tsx          — Full-screen wordmark + tagline
    About.tsx         — Three pillars (Capital, Technology, Ventures)
    Philosophy.tsx    — Principles grid
    Contact.tsx       — Email, location, entity info
lib/
  animations.ts       — Framer Motion presets
```

## Build & Deploy
```bash
npm run build    # Static export to out/
npm run dev      # Local dev server
```

## Brand
- **Colors:** Dark bg (#0F0E13), teal primary (#14B8A6), gold accent (#D4A373)
- **Fonts:** Space Grotesk (display), Inter (body)
- **Tone:** Institutional, minimal, opaque — hedge fund aesthetic
