"use client";

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import type { Dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import type { Locale } from "@/content/types";
import { Socials } from "./Socials";

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-paper placeholder:text-muted/60 focus:border-crimson focus:outline-none";

export function ContactForm({ t }: { t: Dict }) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n${f.get("name")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          {t.contact.name}
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          {t.contact.subject}
          <input name="subject" required className={field} />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        {t.contact.message}
        <textarea name="message" required rows={6} className={`${field} resize-y`} />
      </label>
      <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5">
        <FiMail aria-hidden />
        {t.contact.send}
      </button>
    </form>
  );
}

export function ContactDetails({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-muted">{t.contact.or}</h3>
      <ul className="mt-4 space-y-4 text-lg">
        <li>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 hover:text-crimson">
            <FiMail aria-hidden className="text-muted" />
            {profile.email}
          </a>
        </li>
        <li>
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-crimson">
            <FaWhatsapp aria-hidden className="text-muted" />
            {t.contact.whatsapp}
          </a>
        </li>
        <li>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 hover:text-crimson">
            <FiPhone aria-hidden className="text-muted" />
            {profile.phone}
          </a>
        </li>
        <li className="inline-flex items-center gap-3">
          <FiMapPin aria-hidden className="text-muted" />
          {profile.location[locale]}
        </li>
      </ul>
      <Socials className="-ml-3 mt-6" />
    </div>
  );
}
