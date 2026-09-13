"use client";

import { useState } from "react";
import { ROLE_HISTORY } from "@/lib/data";

export default function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="acc">
      {ROLE_HISTORY.map((role, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={role.title + role.org} className={`acc-item${isOpen ? " open" : ""}`}>
            <button
              className="acc-head"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="acc-grid">
                <span className="acc-title">{role.title}</span>
                <span className="acc-org">{role.org}</span>
                <span className="acc-period">{role.period}</span>
              </span>
              <span className="acc-sign">{isOpen ? "−" : "+"}</span>
            </button>
            <div className="acc-body">
              {role.bullets.map((bullet) => (
                <div className="bullet" key={bullet}>
                  <i></i>
                  <p>{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
