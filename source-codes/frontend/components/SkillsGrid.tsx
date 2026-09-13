"use client";

import { SKILL_GROUPS, type SkillGroup } from "@/lib/data";
import { useReveal } from "./useReveal";

function SkillCard({ group }: { group: SkillGroup }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="card card--lift card--pad reveal">
      <div className="skill-head">
        <span className="skill-ico">{group.icon}</span>
        <span className="skill-label">{group.label}</span>
      </div>
      <div className="tag-row">
        {group.items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsGrid() {
  return (
    <div className="grid3">
      {SKILL_GROUPS.map((group) => (
        <SkillCard key={group.label} group={group} />
      ))}
    </div>
  );
}
