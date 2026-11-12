import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { profile } from "@/content/profile";

const items = [
  { href: profile.socials.github, label: "GitHub", Icon: FaGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: `https://wa.me/${profile.whatsapp}`, label: "WhatsApp", Icon: FaWhatsapp },
];

export function Socials({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="grid size-11 place-items-center rounded-full text-xl text-muted transition-colors hover:bg-surface hover:text-paper"
          >
            <Icon aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
