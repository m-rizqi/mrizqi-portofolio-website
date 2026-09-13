# User Flow & Navigation Map

> **Status: LOCKED** — matches the existing navigation in the source design (`docs/design/mrizqi-portofolio-design/*.html`); no new screens added.

---

## 🗺 1. Visual User Journey (Mermaid.js)

```mermaid
flowchart TD
    Home["/  (Home)\nhero, about, skills,\nfeatured projects, experience,\nhonors, featured blogs, contact"]
    Projects["/projects\nall projects + category filter"]
    ProjectDetail["/project?p=slug\nproject detail + prev/next"]
    Blog["/blog\nall articles + tag filter"]
    PostDetail["/post?p=slug\narticle detail + prev/next"]
    CV[("CV_Muhammad_Rizqi.pdf\ndownload")]
    External[("mailto: / tel: / LinkedIn / GitHub")]

    Home -->|"View all projects →"| Projects
    Home -->|"click featured project card"| ProjectDetail
    Home -->|"Read all articles →"| Blog
    Home -->|"click featured post card"| PostDetail
    Home -->|"Download CV / portfolio"| CV
    Home -->|"contact cards"| External

    Projects -->|"click project card"| ProjectDetail
    ProjectDetail -->|"← Previous / Next →"| ProjectDetail
    ProjectDetail -->|"← All projects"| Projects
    ProjectDetail -->|"Ask about this work"| External

    Blog -->|"click post card"| PostDetail
    PostDetail -->|"← Previous / Next →"| PostDetail
    PostDetail -->|"← All articles"| Blog
    PostDetail -->|"Discuss this post / Share on LinkedIn"| External

    Projects -->|"nav bar"| Home
    Blog -->|"nav bar"| Home
    ProjectDetail -->|"nav bar"| Home
    PostDetail -->|"nav bar"| Home
```

## 📌 2. Notes

* Nav bar (present on every page) always links to `Home`, `Home#about`, `Home#skills`, `Projects`, `Blog`, `Home#contact`, plus the CV download button — no dead ends, every page can always return home.
* `ProjectDetail` and `PostDetail` prev/next wrap around the list (last item's "Next" goes to the first item), same as the source `app.js` (`(i + 1) % list.length`).
* No loading/error states: all data is static and bundled, so there is no network-loading UI to design. An unknown `?p=` slug falls back to a default item (`arcibo` for projects, first item for posts) rather than a 404/error screen — matches source behavior exactly.
