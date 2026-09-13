"use client";

import { useEffect, useRef } from "react";

// Ported from docs/design/mrizqi-portofolio-design/js/app.js `reveal()`.
// Module-level counter staggers elements 70ms apart, cycling every 4 —
// it is never reset between route changes, which only shifts the phase
// of the 4-step cycle and is visually imperceptible.
let revealCounter = 0;

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const index = revealCounter++;
    el.style.transitionDelay = `${(index % 4) * 70}ms`;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in", entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
