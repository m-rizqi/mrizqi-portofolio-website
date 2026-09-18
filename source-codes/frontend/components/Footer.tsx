import Link from "next/link";

export default function Footer({
  backHref,
  backLabel,
}: {
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="footer">
      <span>&copy; 2026 Muhammad Rizqi</span>
      {backHref ? <Link href={backHref}>&larr; {backLabel}</Link> : null}
    </div>
  );
}
