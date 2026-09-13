# DESIGN.md — Muhammad Rizqi Portfolio

Static export: plain HTML, CSS, and vanilla JS. No build step, no dependencies. Open `index.html` in a browser, or drop the folder on any static host (Netlify, Vercel, GitHub Pages).

## 1. Files

```
index.html        Home — hero, about, skills, featured projects, experience, honors, featured blogs, contact
projects.html     All projects + category filter
project.html      Project detail (reads ?p=<slug>)
blog.html         All articles + tag filter
post.html         Article detail (reads ?p=<slug>)
css/styles.css    All styling (design tokens at the top)
js/data.js        All content: PROJECTS, CATEGORIES, POSTS, TAGS, ROLE_HISTORY, SKILL_GROUPS
js/app.js         Rendering, filters, accordion, scroll reveal
assets/photo.jpg  Portrait used in hero and article byline
assets/CV_Muhammad_Rizqi.pdf   File served by the "Download CV" buttons
```

Content lives in `js/data.js` only. Editing one entry there updates the list page, the detail page, and the home page section at once.

## 2. Design direction

Apple-leaning: quiet light surfaces, deep navy as the single accent, generous corner radii, layered soft shadows so cards feel lifted rather than outlined. Layout is a bento grid — asymmetric tiles of different sizes, all on one rhythm of 16px gaps and 34px radii.

## 3. Tokens

All tokens are CSS custom properties in `:root` (`css/styles.css`).

**Color**

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
| `--muted` / `--faint` | `#7C7F88` / `#8A8D96` | Labels, meta, footer |
| `--line` / `--line-strong` | `rgba(20,39,78,.07)` / `.16` | Card borders, rest and hover |

Body text on white is at or above 4.5:1. White text is used only on the navy surfaces (contact card, stat tile, dark gradient), never on a tint.

**Type** — two families from Google Fonts.

- Display: **Plus Jakarta Sans** 700/800, letter-spacing `-.035em`. Headings only.
- Body/UI: **DM Sans** 400/500/700.
- Scale: h1 `clamp(42px,5.6vw,76px)` · section h2 `clamp(28px,3.4vw,44px)` · card title 21–23px · body 15–18px · eyebrow label 12px uppercase, `.13em` tracking.

**Shape and depth**

- Radii: cards `34px`, inner media `22px`, chips/tags `10–12px`, buttons and pills `999px`.
- Shadow: `--sh` at rest, `--sh-hover` on lift. Two layers — a tight 2–4px contact shadow plus a wide soft one — never a single hard drop.
- Gap: `16px` between tiles, `8px` between chips.

## 4. Layout

- `.wrap` centers content at 1440px (`--md` 1240, `--sm` 1040) with 24px gutters.
- `.row` is a flex row of tiles that always fills the line (`flex: N 1 basis` sets relative tile weight).
- `.grid3` locks three equal columns on wide screens and steps down to 2 then 1 as width shrinks:
  `repeat(auto-fill, minmax(max(200px, (100% - 32px)/3), 1fr))`. Leftover cards keep the column width instead of stretching.
- Mobile: everything stacks by wrap, plus one `max-width:640px` query that tightens padding and media heights.

## 5. Components

- `.card` — base surface. Add `card--lift` for hover motion, `card--pad` for 30px padding, `card--dark` for the navy gradient variant.
- `.btn` + `.btn-primary` / `.btn-ghost` / `.btn-sm` — pill buttons; primary carries a navy glow shadow.
- `.nav` / `.nav-inner` — floating sticky pill navbar with `backdrop-filter: blur(18px)`; `.active` marks the current page.
- `.pill`, `.tag`, `.cat` — role chips, skill/stack tags, category badges.
- `.tile-link` — whole-card link used by project and blog cards (media placeholder, meta row, title, summary, CTA pinned to the bottom).
- `.acc` — experience accordion; one item open at a time, `+` / `−` sign, bullets from `ROLE_HISTORY`.
- `.filters` / `.filter` — category and tag filter buttons; `.active` inverts to navy.
- `.contact` — full-width navy gradient closing card with four `.contact-card` tiles.
- `.imgph` — dashed image placeholder with a caption naming what belongs there. Replace each with a real `<img>` (keep the border radius) as artwork arrives.

## 6. Motion

- Scroll reveal: `.reveal` → `.reveal.in` (opacity + `translate`), driven by IntersectionObserver in `app.js`; it also animates back out when an element leaves the viewport. Stagger is 70ms per item, cycling every 4.
- Hover: cards lift 5–6px with a deeper shadow; images scale 1.06; tags invert to navy; accordion rows tint.
- Easing `cubic-bezier(.25,.8,.25,1)`, 350–750ms. Two background orbs drift on a 14–18s loop.
- All animation is disabled under `prefers-reduced-motion: reduce`.

## 7. Editing content

- **Projects**: add an object to `PROJECTS` in `js/data.js` (`slug`, `title`, `category`, `org`, `year`, `role`, `summary`, `stack[]`, `highlights[]`, `link`). It appears on `projects.html` and gets a detail page at `project.html?p=<slug>`. Home shows the three slugs listed in `data-featured-projects` on `index.html`.
- **Articles**: add to `POSTS` (`slug`, `title`, `tag`, `date`, `readTime`, `excerpt`, `body[]`). Home shows the first three.
- **Experience**: `ROLE_HISTORY` — first entry is open by default.
- **Skills**: `SKILL_GROUPS` — `icon` is a single glyph, `items` are the tags.
- New category or tag values must also be added to `CATEGORIES` / `TAGS` to appear as a filter.

## 8. Known placeholders

- Blog entries are drafts — titles are real topics, bodies start with "Draft…". Replace with your own writing.
- GitHub contact tile reads "add your username"; point it at your profile.
- "Download portfolio" currently serves the same PDF as "Download CV".
- Every `.imgph` block is waiting for a real screenshot or cover image.
