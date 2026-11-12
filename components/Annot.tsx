import type { ReactNode } from "react";

/** Handwritten code-tag note — the site's signature mark, kept decorative for screen readers. */
export function Annot({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <span aria-hidden className={`font-hand text-annot text-xl leading-none select-none ${className}`} style={style}>
      {children}
    </span>
  );
}
