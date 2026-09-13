"use client";

export default function FilterBar({
  tags,
  active,
  onChange,
}: {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}) {
  return (
    <div className="filters">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={`filter${tag === active ? " active" : ""}`}
          onClick={() => onChange(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
