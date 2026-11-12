import type { Dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import { Annot } from "./Annot";

export function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <Annot className="hidden sm:inline">{"</body>"}</Annot>
        <a href="#top" className="hover:text-paper">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
