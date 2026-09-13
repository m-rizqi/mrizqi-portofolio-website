"use client";

import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "./useReveal";

export default function Reveal({
  className = "",
  children,
  style,
  id,
}: {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} id={id} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
