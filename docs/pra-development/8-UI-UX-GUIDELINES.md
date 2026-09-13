# UI/UX Guidelines & Design System

> **Status: LOCKED** — ported verbatim from `docs/design/DESIGN.md` and `docs/design/mrizqi-portofolio-design/css/styles.css`, which are the approved, already-final design system for this project. Do not invent colors, spacing, or type values outside this list.

---

## 🎨 1. Color Palette

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#F4F4F6` | Page background (plus dot pattern + two radial glows) |
| `--card` | `#FFFFFF` | Card surfaces |
| `--navy` | `#14274E` | Primary accent: buttons, active states, icon badges |
| `--navy-soft` | `#1B3160` | Gradient start, button hover |
| `--navy-deep` | `#0A1326` | Gradient end on dark cards |
| `--ink` | `#101218` | Headings |
| `--text` | `#3C414C` | Long-form body copy |
| `--body` | `#5C6069` | Secondary copy |
| `--muted` | `#7C7F88` | Labels, meta, footer |
| `--faint` | `#8A8D96` | Footer, faint labels |
| `--line` / `--line-strong` | `rgba(20,39,78,.07)` / `rgba(20,39,78,.16)` | Card borders, rest and hover |
| `--tint` | `rgba(20,39,78,.06)` | Icon badge / chip backgrounds |

No secondary/semantic error/success colors exist in the source — none are used by this site (no forms, no destructive actions). Body text on white stays ≥4.5:1 contrast; white text appears only on navy surfaces (contact card, stat tile, dark gradient card), never on a tint. No dark mode in the source design — not implemented here (see PRD Out of Scope).

## ✍️ 2. Typography

* **Display font:** Plus Jakarta Sans, weights 700/800, letter-spacing `-.035em` — headings only (`h1`, `h2`, `h3`, `.acc-title`, `.tile-title`, `.stat-num`, `.nav-pair .t`).
* **Body/UI font:** DM Sans, weights 400/500/700 — everything else.
* **Loaded via:** `<link>` to `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=DM+Sans:wght@400;500;700&display=swap` (with `preconnect` to `fonts.googleapis.com`/`fonts.gstatic.com`) — kept as a plain `<link>` in `app/layout.tsx`, not `next/font`, to match source loading behavior exactly.
* **Scale:**
  * H1 (hero): `clamp(42px, 5.6vw, 76px)`, line-height `.96`
  * Section H2: `clamp(28px, 3.4vw, 44px)`
  * Card title: 21–23px
  * Body: 15–18px
  * Eyebrow label: 12px uppercase, `.13em` letter-spacing

## 📐 3. Spacing & Geometry

* **Gap rhythm:** 16px between tiles/cards, 8px between chips.
* **Border radius:** cards `34px` (`--r-card`), inner media/image placeholders `22px`, chips/tags `10–12px`, buttons/pills/nav `999px` (`--r-pill`).
* **Container widths:** `.wrap` 1440px max, `.wrap--md` 1240px, `.wrap--sm` 1040px, all with 24px side padding.
* **Shadows:** `--sh` at rest (`0 2px 4px rgba(20,39,78,.04), 0 20px 50px -26px rgba(20,39,78,.18)`), `--sh-hover` on lift (`0 4px 8px rgba(20,39,78,.05), 0 34px 72px -26px rgba(20,39,78,.28)`) — always two layers (tight contact shadow + wide soft shadow), never a single hard drop shadow.

## 💫 4. Animations & Micro-interactions

* **Easing:** `cubic-bezier(.25,.8,.25,1)` for all card/button/tag transitions.
* **Duration:** 300–500ms for hover states (transform/box-shadow), 750ms for scroll-reveal opacity/translate.
* **Scroll reveal:** `.reveal` → `.reveal.in`, driven by `IntersectionObserver` (threshold 0.08), animates back out when leaving viewport, staggered 70ms per item cycling every 4.
* **Hover feedback:** cards lift 5–6px with deeper shadow; hero photo scales 1.06; tags/skill icons invert to navy; accordion rows tint; buttons translate up 3px.
* **Reduced motion:** under `prefers-reduced-motion: reduce`, all animation/transition is disabled and `.reveal` elements are shown at full opacity immediately — this must be preserved in the React port.

## ♿ 5. Accessibility (a11y)

* **Touch targets:** nav links, buttons, and filter chips use ≥9–14px vertical padding on top of 14–15px text, consistent with the source's already-approved sizing — do not shrink below what the source CSS defines.
* **Contrast:** body text on `--bg`/`--card` uses `--text`/`--body`/`--ink`, all ≥4.5:1; white text is reserved for navy surfaces only.
* **Screen reader support:** accordion buttons carry `aria-expanded`; images carry descriptive `alt` text (e.g. "Muhammad Rizqi") — preserve both in the React components.
* **Dark mode:** not present in the source design; out of scope for this port (see PRD).

---
> **Pra-development phase complete.** Task tracking lives in `docs/development/1-TASK-CHECKLIST.md` (hand-maintained, GSD Core disabled for this project per `CLAUDE.md`).
