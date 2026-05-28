"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineAccessTime,
} from "react-icons/md";

const contactInfo = [
  {
    icon: MdOutlineLocationOn,
    label: "Nuestra Ubicación",
    value: "Av. Sarasota N° 55, Ensanche Bella Vista. Santo Domingo.",
    href: undefined,
  },
  {
    icon: MdOutlineEmail,
    label: "Email",
    value: "bosoninfo@bosonstrategy.com",
    href: "mailto:bosoninfo@bosonstrategy.com",
  },
  {
    icon: MdOutlineAccessTime,
    label: "Horario de atención",
    value: "09:00am - 06:00pm, lunes a viernes",
    href: undefined,
  },
];

/* ── Animated input field ─────────────────────────────────────────────── */
function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  inView,
  delay,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  inView: boolean;
  delay: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-boson-heading/70 uppercase"
      >
        {label}
        {required && <span className="ml-1 text-boson-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border-b bg-transparent pb-3 text-sm text-boson-heading placeholder:text-boson-body/40 focus:outline-none transition-colors"
        style={{
          borderColor: focused ? "var(--color-boson-accent, #26C0CF)" : "rgba(8,17,31,0.18)",
        }}
      />
    </motion.div>
  );
}

/* ── Contact form ────────────────────────────────────────────────────── */
function ContactForm({ inView }: { inView: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
          telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
          mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch {
      setErrorMsg("Error al enviar el mensaje. Por favor intenta de nuevo.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 border-l-2 border-boson-accent py-6 pl-7"
        >
          <div className="h-1.5 w-10 bg-boson-accent" />
          <p className="text-xl font-black text-boson-heading">¡Mensaje enviado!</p>
          <p className="text-sm leading-relaxed text-boson-body">
            Gracias por escribirnos. Nos pondremos en contacto contigo a la brevedad posible.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-9"
          exit={{ opacity: 0 }}
        >
          <Field
            id="nombre"
            label="Nombre completo"
            placeholder="Ej: María García"
            required
            inView={inView}
            delay={0.3}
          />
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="correo@empresa.com"
              required
              inView={inView}
              delay={0.4}
            />
            <Field
              id="empresa"
              label="Empresa"
              placeholder="Nombre de tu empresa"
              inView={inView}
              delay={0.45}
            />
          </div>

          <Field
            id="telefono"
            label="Teléfono"
            type="tel"
            placeholder="+1 (849) 000-0000"
            inView={inView}
            delay={0.5}
          />

          {/* Mensaje textarea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <label
              htmlFor="mensaje"
              className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-boson-heading/70 uppercase"
            >
              Mensaje <span className="text-boson-accent">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              placeholder="¿En qué podemos ayudarte?"
              className="w-full resize-none border-b border-boson-heading/18 bg-transparent pb-3 text-sm text-boson-heading placeholder:text-boson-body/40 focus:border-boson-accent focus:outline-none transition-colors"
            />
          </motion.div>

          {/* Error message */}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-red-500"
            >
              {errorMsg}
            </motion.p>
          )}

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-3 bg-boson-accent px-8 py-4 text-xs font-black uppercase tracking-widest text-boson-primary-dark transition-colors hover:bg-boson-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando…" : "Enviar mensaje"}
              {status !== "loading" && <HiOutlineArrowRight className="h-4 w-4" />}
            </button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

/* ── Contact info cards ──────────────────────────────────────────────── */
function ContactInfoCards({ inView }: { inView: boolean }) {
  return (
    <div className="flex flex-col gap-0 overflow-hidden border border-boson-heading/10">
      {contactInfo.map((info, i) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-5 border-b border-boson-heading/8 px-6 py-5 last:border-0"
          >
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-boson-accent/10">
              <Icon className="h-4.5 w-4.5 text-boson-accent" />
            </div>
            <div>
              <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-boson-accent uppercase">
                {info.label}
              </p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-sm text-boson-heading transition-colors hover:text-boson-accent"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm leading-relaxed text-boson-heading">{info.value}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Map embed ───────────────────────────────────────────────────────── */
function MapEmbed({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden"
    >
      {/* Border overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 border border-boson-accent/25" />
      {/* Corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-0.5 bg-boson-accent" />
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-0.5 w-8 bg-boson-accent" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-0.5 bg-boson-accent" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-0.5 w-8 bg-boson-accent" />

      <iframe
        src="https://maps.google.com/maps?q=Av.+Sarasota+55+Ensanche+Bella+Vista+Santo+Domingo+Dominican+Republic&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="320"
        style={{ border: 0, display: "block", filter: "grayscale(20%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Bosón Ingeniería Estratégica de Negocios: Av. Sarasota 55, Ensanche Bella Vista, Santo Domingo"
      />
    </motion.div>
  );
}

/* ── Main export ─────────────────────────────────────────────────────── */
export function ContactPageContent() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, amount: 0.15 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.15 });

  return (
    <section className="overflow-hidden bg-boson-bg-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[7fr_5fr]">

          {/* ── Left: Form ── */}
          <div ref={formRef}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-bold tracking-[0.25em] text-boson-accent uppercase"
            >
              Agenda una conversación · Solicita un servicio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-4xl font-light leading-tight text-boson-heading md:text-5xl"
            >
              Hablemos sobre{" "}
              <strong className="font-black">tu organización</strong>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mb-12 text-sm leading-relaxed text-boson-body"
            >
              Cuéntanos cuál es el desafío estratégico que enfrenta tu empresa.
              Nuestro equipo analizará tu situación y te propondrá el punto de
              partida más adecuado.
            </motion.p>

            <ContactForm inView={formInView} />
          </div>

          {/* ── Right: Info + Map ── */}
          <div ref={infoRef} className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-[0.25em] text-boson-accent uppercase"
            >
              Información de contacto
            </motion.p>

            <ContactInfoCards inView={infoInView} />
            <MapEmbed inView={infoInView} />
          </div>

        </div>
      </div>
    </section>
  );
}
