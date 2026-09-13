/* Behaviour: scroll reveal, accordion, filters, and data-driven rendering. */
(function () {
  "use strict";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); };
  var qs = function (k) { try { return new URLSearchParams(location.search).get(k); } catch (e) { return null; } };

  /* ---------- scroll reveal (in and out) ---------- */
  function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle("in", e.isIntersecting); });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
    els.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
  }

  /* ---------- experience accordion ---------- */
  function accordion() {
    var host = document.querySelector("[data-accordion]");
    if (!host || !window.ROLE_HISTORY) return;
    host.innerHTML = window.ROLE_HISTORY.map(function (r, i) {
      return '<div class="acc-item' + (i === 0 ? " open" : "") + '">' +
        '<button class="acc-head" type="button" aria-expanded="' + (i === 0) + '">' +
          '<span class="acc-grid">' +
            '<span class="acc-title">' + esc(r.title) + "</span>" +
            '<span class="acc-org">' + esc(r.org) + "</span>" +
            '<span class="acc-period">' + esc(r.period) + "</span>" +
          "</span>" +
          '<span class="acc-sign">' + (i === 0 ? "\u2212" : "+") + "</span>" +
        "</button>" +
        '<div class="acc-body">' + r.bullets.map(function (b) {
          return '<div class="bullet"><i></i><p>' + esc(b) + "</p></div>";
        }).join("") + "</div></div>";
    }).join("");
    host.addEventListener("click", function (ev) {
      var head = ev.target.closest(".acc-head");
      if (!head) return;
      var item = head.parentElement, wasOpen = item.classList.contains("open");
      host.querySelectorAll(".acc-item").forEach(function (it) {
        it.classList.remove("open");
        it.querySelector(".acc-sign").textContent = "+";
        it.querySelector(".acc-head").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        item.querySelector(".acc-sign").textContent = "\u2212";
        head.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* ---------- skills ---------- */
  function skills() {
    var host = document.querySelector("[data-skills]");
    if (!host || !window.SKILL_GROUPS) return;
    host.innerHTML = window.SKILL_GROUPS.map(function (g) {
      return '<div class="card card--lift card--pad reveal">' +
        '<div class="skill-head"><span class="skill-ico">' + esc(g.icon) + '</span><span class="skill-label">' + esc(g.label) + "</span></div>" +
        '<div class="tag-row">' + g.items.map(function (i) { return '<span class="tag">' + esc(i) + "</span>"; }).join("") + "</div></div>";
    }).join("");
  }

  /* ---------- cards ---------- */
  function projectCard(p) {
    return '<a class="card card--lift tile-link reveal" href="project.html?p=' + esc(p.slug) + '">' +
      '<div class="imgph">' + esc(p.title) + ' \u2014 drop a screenshot here</div>' +
      '<div class="tile-body"><div class="tile-top"><span class="cat">' + esc(p.category) + '</span><span class="date">' + esc(p.year) + "</span></div>" +
      '<h3 class="tile-title">' + esc(p.title) + "</h3>" +
      '<p class="tile-meta">' + esc(p.org) + " \u00b7 " + esc(p.role) + "</p>" +
      '<p class="tile-sum">' + esc(p.summary) + "</p>" +
      '<span class="tile-cta">View detail \u2192</span></div></a>';
  }
  function postCard(p) {
    return '<a class="card card--lift tile-link reveal" href="post.html?p=' + esc(p.slug) + '">' +
      '<div class="imgph" style="height:170px">Cover image for this article</div>' +
      '<div class="tile-body"><div class="tile-top"><span class="cat">' + esc(p.tag) + '</span><span class="date">' + esc(p.date) + "</span></div>" +
      '<h3 class="tile-title">' + esc(p.title) + "</h3>" +
      '<p class="tile-sum">' + esc(p.excerpt) + "</p>" +
      '<span class="tile-cta">Read article \u2192<small>' + esc(p.readTime) + "</small></span></div></a>";
  }

  /* ---------- home sections ---------- */
  function homeLists() {
    var fp = document.querySelector("[data-featured-projects]");
    if (fp && window.PROJECTS) {
      var slugs = (fp.getAttribute("data-featured-projects") || "").split(",").map(function (s) { return s.trim(); });
      var picks = slugs.filter(Boolean).map(function (s) { return window.PROJECTS.filter(function (p) { return p.slug === s; })[0]; }).filter(Boolean);
      fp.innerHTML = (picks.length ? picks : window.PROJECTS.slice(0, 3)).map(projectCard).join("");
    }
    var fb = document.querySelector("[data-featured-posts]");
    if (fb && window.POSTS) fb.innerHTML = window.POSTS.slice(0, 3).map(postCard).join("");
  }

  /* ---------- filtered lists ---------- */
  function filterList(cfg) {
    var grid = document.querySelector(cfg.grid);
    if (!grid || !cfg.items) return;
    var bar = document.querySelector(cfg.filters), count = document.querySelector(cfg.count), active = "All";
    function paint() {
      var list = active === "All" ? cfg.items : cfg.items.filter(function (i) { return i[cfg.key] === active; });
      grid.innerHTML = list.map(cfg.card).join("");
      if (count) count.textContent = list.length + " of " + cfg.items.length + " " + cfg.noun;
      if (bar) bar.querySelectorAll(".filter").forEach(function (b) { b.classList.toggle("active", b.dataset.value === active); });
      reveal();
    }
    if (bar) {
      bar.innerHTML = cfg.tags.map(function (t) { return '<button class="filter" type="button" data-value="' + esc(t) + '">' + esc(t) + "</button>"; }).join("");
      bar.addEventListener("click", function (e) {
        var b = e.target.closest(".filter"); if (!b) return; active = b.dataset.value; paint();
      });
    }
    paint();
  }

  /* ---------- detail pages ---------- */
  function projectDetail() {
    var host = document.querySelector("[data-project-detail]");
    if (!host || !window.PROJECTS) return;
    var list = window.PROJECTS, slug = qs("p");
    var i = list.findIndex(function (p) { return p.slug === slug; });
    if (i < 0) i = list.findIndex(function (p) { return p.slug === "arcibo"; });
    if (i < 0) i = 0;
    var p = list[i], prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    document.title = p.title + " — Muhammad Rizqi";
    host.innerHTML =
      '<div class="row">' +
        '<div class="card detail-hero reveal">' +
          '<div><div class="tile-top" style="justify-content:flex-start;gap:12px"><span class="cat">' + esc(p.category) + '</span><span class="date">' + esc(p.year) + "</span></div>" +
          "<h1>" + esc(p.title) + "</h1><p class=\"lead\">" + esc(p.summary) + "</p></div>" +
          '<div class="pill-row">' + (p.link ? '<a class="btn btn-primary" href="' + esc(p.link) + '" target="_blank" rel="noopener">Open project \u2197</a>' : "") +
          '<a class="btn btn-ghost" href="mailto:mrizqi070502@gmail.com">Ask about this work</a></div>' +
        "</div>" +
        '<div class="side-col">' +
          '<div class="card card--dark tile reveal"><span class="eyebrow">My role</span><div><p class="role" style="color:#fff">' + esc(p.role) + '</p><p class="role-sub" style="color:rgba(255,255,255,.78)">' + esc(p.org) + "</p></div></div>" +
          '<div class="card card--pad reveal"><span class="eyebrow">Stack</span><div class="tag-row">' + p.stack.map(function (s) { return '<span class="tag">' + esc(s) + "</span>"; }).join("") + "</div></div>" +
        "</div>" +
      "</div>" +
      '<div class="card reveal" style="padding:14px"><div class="imgph imgph--tall">Main screenshot / cover for this project</div></div>' +
      '<div class="row">' +
        '<div class="card reveal" style="flex:1.4 1 420px;min-width:280px;padding:34px"><span class="eyebrow">What I did</span><div class="acc" style="gap:2px">' +
          p.highlights.map(function (h) { return '<div class="bullet" style="padding:16px 12px;border-top:1px solid rgba(20,39,78,.08)"><i></i><p style="font-size:16px;color:var(--text)">' + esc(h) + "</p></div>"; }).join("") +
        "</div></div>" +
        '<div class="side-col">' +
          '<div class="card reveal" style="padding:14px"><div class="imgph imgph--mid">Detail shot 1</div></div>' +
          '<div class="card reveal" style="padding:14px"><div class="imgph imgph--mid">Detail shot 2</div></div>' +
        "</div>" +
      "</div>" +
      '<div class="nav-pair">' +
        '<a class="card card--lift prev" href="project.html?p=' + esc(prev.slug) + '"><span class="lbl">\u2190 Previous</span><span class="t">' + esc(prev.title) + "</span></a>" +
        '<a class="card card--lift next" href="project.html?p=' + esc(next.slug) + '"><span class="lbl">Next \u2192</span><span class="t">' + esc(next.title) + "</span></a>" +
      "</div>";
  }

  function postDetail() {
    var host = document.querySelector("[data-post-detail]");
    if (!host || !window.POSTS) return;
    var list = window.POSTS, slug = qs("p");
    var i = list.findIndex(function (p) { return p.slug === slug; });
    if (i < 0) i = 0;
    var p = list[i], prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    document.title = p.title + " — Muhammad Rizqi";
    host.innerHTML =
      '<div class="card reveal" style="padding:42px">' +
        '<div class="tile-top" style="justify-content:flex-start;gap:12px"><span class="cat">' + esc(p.tag) + '</span><span class="date">' + esc(p.date) + " \u00b7 " + esc(p.readTime) + "</span></div>" +
        '<h1 style="margin-top:22px;max-width:30ch;font-weight:800;font-size:clamp(32px,4.6vw,54px);line-height:1.04">' + esc(p.title) + "</h1>" +
        '<p style="margin-top:20px;max-width:60ch;font-size:18px;line-height:1.62;color:var(--body)">' + esc(p.excerpt) + "</p>" +
        '<div class="byline"><img src="assets/photo.jpg" alt="Muhammad Rizqi" /><div><p style="font-size:15px;font-weight:700;color:var(--ink)">Muhammad Rizqi</p><p style="margin-top:3px;font-size:13px;color:var(--muted)">Software Engineer \u00b7 Mobile &amp; Backend</p></div></div>' +
      "</div>" +
      '<div class="card reveal" style="padding:14px"><div class="imgph imgph--wide">Cover image for this article</div></div>' +
      '<div class="card reveal" style="padding:42px"><div class="prose">' + p.body.map(function (b) { return "<p>" + esc(b) + "</p>"; }).join("") + "</div>" +
        '<div class="pill-row" style="margin-top:34px;padding-top:26px;border-top:1px solid rgba(20,39,78,.08)">' +
          '<a class="btn btn-primary" href="mailto:mrizqi070502@gmail.com">Discuss this post</a>' +
          '<a class="btn btn-ghost" href="https://www.linkedin.com/in/m-rizqi/" target="_blank" rel="noopener">Share on LinkedIn</a>' +
        "</div></div>" +
      '<div class="nav-pair">' +
        '<a class="card card--lift prev" href="post.html?p=' + esc(prev.slug) + '"><span class="lbl">\u2190 Previous</span><span class="t">' + esc(prev.title) + "</span></a>" +
        '<a class="card card--lift next" href="post.html?p=' + esc(next.slug) + '"><span class="lbl">Next \u2192</span><span class="t">' + esc(next.title) + "</span></a>" +
      "</div>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    skills();
    accordion();
    homeLists();
    if (document.querySelector("[data-projects-grid]")) {
      filterList({ grid: "[data-projects-grid]", filters: "[data-projects-filters]", count: "[data-projects-count]",
        items: window.PROJECTS || [], tags: window.CATEGORIES || ["All"], key: "category", noun: "projects", card: projectCard });
    }
    if (document.querySelector("[data-posts-grid]")) {
      filterList({ grid: "[data-posts-grid]", filters: "[data-posts-filters]", count: "[data-posts-count]",
        items: window.POSTS || [], tags: window.TAGS || ["All"], key: "tag", noun: "articles", card: postCard });
    }
    projectDetail();
    postDetail();
    reveal();
  });
})();
