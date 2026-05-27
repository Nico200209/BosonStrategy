"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";

/* ── Count-up number ───────────────────────────────────────────────── */
function CountUp({ to, suffix, prefix }: { to: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v * 10) / 10);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {prefix && <span className="mr-0.5">{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

/* ── Data ──────────────────────────────────────────────────────────── */
const values = [
  {
    number: "01",
    title: "Rigor Técnico",
    description:
      "No asesoramos desde afuera. Diseñamos desde adentro, con metodología probada y pensamiento sistémico. Cada modelo que construimos tiene que funcionar y sostenerse, no solo en papel, sino en la operación real.",
    iconSrc: "/Recursos Gráficos/íconos/RGB - Digital/Monitoreo/Monitoreo-01.png",
    iconAlt: "Rigor Técnico: icono de monitoreo",
  },
  {
    number: "02",
    title: "Inteligencia Aplicada",
    description:
      "Cada decisión tiene un sustento. La investigación de mercado, el análisis del entorno y los datos accionables no son un módulo adicional: son la base de todo lo que construimos.",
    iconSrc: "/Recursos Gráficos/íconos/RGB - Digital/Lupa/Lupa-01.png",
    iconAlt: "Inteligencia Aplicada: icono de lupa",
  },
  {
    number: "03",
    title: "Visión Sistémica",
    description:
      "Estrategia, operaciones, finanzas y mercado son partes de un mismo sistema. Los intervenimos de forma integrada. No por partes, no por silos.",
    iconSrc: "/Recursos Gráficos/íconos/RGB - Digital/Proceso/Proceso-01.png",
    iconAlt: "Visión Sistémica: icono de proceso",
  },
];

const stats = [
  { to: 71.9, suffix: "%", label: "empresas con obstáculos estructurales", source: "ENAE 2024" },
  { to: 55.8, suffix: "%", label: "reportan dificultades para cubrir vacantes clave", source: "ENAE 2024" },
  { to: 54.0, suffix: "%", label: "tasa de informalidad laboral en el país", source: "BCRD Q2 2025" },
];

const CARD_OFFSET = 440;
const FAN = 28;

/* ── Component ─────────────────────────────────────────────────────── */
export function ValuesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const inViewDesktop = useInView(cardsRef, { once: false, amount: 0.3, margin: "-80px" });
  const inViewMobile = useInView(cardsRef, { once: false, amount: 0.05, margin: "60px" });
  const inView = isMobile ? inViewMobile : inViewDesktop;

  return (
    <section className="overflow-hidden bg-boson-primary py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-black tracking-[0.25em] text-boson-accent uppercase"
          >
            Cómo trabajamos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl font-light leading-tight text-white md:text-5xl"
          >
            Tres principios que definen{" "}
            <strong className="font-black block">cómo construimos</strong>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/50"
          >
            No asesoramos desde afuera. Cada compromiso integra rigor técnico, inteligencia de
            mercado y visión sistémica para construir soluciones que funcionan en la operación real.
          </motion.p>
        </div>

        {/* ── Stats row ── (oculto temporalmente)
        <div className="mb-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-3 gap-6 md:gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 ${
                  i > 0 ? "md:border-l md:border-white/10 md:pl-10" : ""
                }`}
              >
                <span className="text-4xl font-black text-boson-accent md:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-xs leading-relaxed text-white/50 mt-1">
                  {s.label}
                </span>
                <span className="text-[10px] tracking-wide text-boson-accent/50 uppercase">
                  {s.source}
                </span>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* ── Cards: stacked → spread on scroll ── */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((v, i) => {
            const initialX = (1 - i) * (CARD_OFFSET - FAN);
            const initialRotate = i * 1.5;
            const delay = inView ? (values.length - 1 - i) * 0.12 : i * 0.08;

            return (
              <motion.div
                key={v.number}
                style={{ zIndex: values.length - i }}
                initial={{ x: initialX, rotate: initialRotate }}
                animate={
                  inView
                    ? { x: 0, rotate: 0 }
                    : { x: initialX, rotate: initialRotate }
                }
                transition={{
                  duration: 1.5,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden border-t-2 border-boson-accent bg-white p-8"
              >
                {/* Ghost number watermark */}
                <span className="pointer-events-none absolute -right-2 -top-5 select-none text-[120px] font-black leading-none text-boson-heading/[0.05]">
                  {v.number}
                </span>

                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center rounded-sm bg-boson-primary/5 p-2">
                  <Image
                    src={v.iconSrc}
                    alt={v.iconAlt}
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-boson-accent uppercase">
                  {v.number}
                </p>
                <h3 className="mb-3 text-sm font-black uppercase tracking-wider text-boson-heading">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-boson-body">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
