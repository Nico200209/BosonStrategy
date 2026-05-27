"use client";

import { useState } from "react";
import { MdOutlineEmail, MdOutlineCheck } from "react-icons/md";

const EMAIL = "bosoninfo@bosonstrategy.com";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback para navegadores sin clipboard API
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1.5 border-r border-white/10 px-4 text-[11px] transition-colors hover:text-boson-accent-light cursor-pointer select-none"
      style={{ color: copied ? "var(--color-boson-accent, #26C0CF)" : "rgba(255,255,255,0.6)" }}
      aria-label="Copiar correo electrónico"
      title={copied ? "¡Copiado!" : "Clic para copiar el correo"}
    >
      {copied ? (
        <MdOutlineCheck className="h-3.5 w-3.5" />
      ) : (
        <MdOutlineEmail className="h-3.5 w-3.5" />
      )}
      {copied ? "¡Copiado!" : EMAIL}
    </button>
  );
}
