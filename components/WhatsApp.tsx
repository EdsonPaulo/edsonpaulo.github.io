"use client";

import { useRef, useState, type PointerEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import type { Locale } from "@/content/types";

const messages = {
  pt: "Olá! Vi o seu site e gostaria de conversar.",
  en: "Hi! I saw your website and would like to chat.",
};

export default function WhatsApp({ locale }: { locale: Locale }) {
  const label = locale === "pt" ? "Conversar no WhatsApp" : "Chat on WhatsApp";

  const [position, setPosition] = useState<{ x: number; y: number }>();
  const gesture = useRef<{ id: number; x: number; y: number; left: number; top: number } | null>(null);
  const dragged = useRef(false);

  function startDrag(event: PointerEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || !event.isPrimary) return;
    const { left, top } = event.currentTarget.getBoundingClientRect();
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, left, top };
    dragged.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: PointerEvent<HTMLAnchorElement>) {
    const start = gesture.current;
    if (start?.id !== event.pointerId) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!dragged.current && Math.hypot(dx, dy) < 6) return;

    dragged.current = true;
    const { clientWidth, clientHeight } = document.documentElement;
    const { offsetWidth, offsetHeight } = event.currentTarget;
    setPosition({
      x: Math.max(0, Math.min(start.left + dx, clientWidth - offsetWidth)),
      y: Math.max(0, Math.min(start.top + dy, clientHeight - offsetHeight)),
    });
  }

  function endDrag(event: PointerEvent<HTMLAnchorElement>) {
    if (gesture.current?.id === event.pointerId) gesture.current = null;
  }

  return (
    <a
      href={`https://wa.me/244942682194?text=${encodeURIComponent(messages[locale])}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      draggable={false}
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
      onClick={(event) => {
        if (event.detail > 0 && dragged.current) {
          event.preventDefault();
          return;
        }
        window.gtag?.("event", "whatsapp_click");
      }}
      style={position && {
        left: `clamp(0px, ${position.x}px, calc(100% - 3.5rem))`,
        top: `clamp(0px, ${position.y}px, calc(100% - 3.5rem))`,
        right: "auto",
        bottom: "auto",
      }}
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid touch-none cursor-grab select-none active:cursor-grabbing size-14 place-items-center rounded-full bg-[#25d366] text-[#102619] shadow-lg transition-colors hover:bg-[#54e487] print:hidden"
    >
      <FaWhatsapp size={30} aria-hidden="true" />
    </a>
  );
}
