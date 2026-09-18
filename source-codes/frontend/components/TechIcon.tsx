import { ICON_PATHS, TECH_ICON_SLUGS } from "@/lib/techIcons";

export default function TechIcon({ name }: { name: string }) {
  const slug = TECH_ICON_SLUGS[name];
  const path = slug ? ICON_PATHS[slug] : undefined;
  if (!path) return null;

  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}
