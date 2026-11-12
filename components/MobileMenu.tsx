"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function MobileMenu({ links, labels }: { links: readonly (readonly [string, string])[]; labels: { open: string; close: string } }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((o) => !o)}
        className="-mr-2 grid size-11 place-items-center rounded-full text-2xl text-paper hover:bg-surface"
      >
        {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
      </button>

      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-line bg-ink px-4 pb-6 pt-2 shadow-2xl shadow-black/50"
        >
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/60 py-4 text-2xl font-semibold tracking-tight [font-stretch:85%] hover:text-crimson"
              >
                {label}
                <span aria-hidden className="font-hand text-lg text-annot">{`#${id}`}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
