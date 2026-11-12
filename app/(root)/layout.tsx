import type { ReactNode } from "react";

/** Bare root layout for "/" only; the site itself lives under (site)/[locale] with its own root layout. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", background: "#16131a", color: "#ede7e3", font: "18px system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
