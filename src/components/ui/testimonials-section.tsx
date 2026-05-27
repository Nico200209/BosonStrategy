"use client";

import { motion, useInView, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const COPIES = 4;
const SPEED = 40; // px/s

const audiences = [
  {
    title: "Empresas en proceso de escalar",
    description:
      "Han crecido, pero necesitan estructura para sostener el siguiente nivel.",
    tag: "Escalabilidad",
  },
  {
    title: "Grupos empresariales y holdings",
    description:
      "Requieren visión integrada de estrategia, finanzas y operaciones a nivel corporativo.",
    tag: "Estructura corporativa",
  },
  {
    title: "Empresas industriales",
    description:
      "Necesitan excelencia operacional combinada con estrategia comercial de alto desempeño.",
    tag: "Operaciones",
  },
  {
    title: "Empresas en institucionalización",
    description:
      "Transición de modelo informal a gobierno corporativo con sistemas estratégicos sólidos.",
    tag: "Institucionalización",
  },
  {
    title: "Family business en transición",
    description:
      "Redefinición del modelo, estrategia de mercado y estructura financiera al cambiar de generación.",
    tag: "Transición generacional",
  },
  {
    title: "Corporaciones transnacionales",
    description:
      "Adaptación de estrategias y metodologías globales a las particularidades del Caribe y Centroamérica.",
    tag: "Expansión regional",
  },
];

function AudienceCard({ title, description, tag }: (typeof audiences)[number]) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col gap-3 border border-boson-border bg-white p-7 shadow-sm">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-boson-accent">
        {tag}
      </span>
      <h3 className="text-sm font-black uppercase tracking-wide text-boson-heading leading-tight">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-boson-body">
        {description}
      </p>
      <div className="mt-auto h-0.5 w-8 bg-boson-accent" />
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useAnimationFrame((_, delta) => {
    if (pausedRef.current || !trackRef.current) return;
    const setWidth = trackRef.current.scrollWidth / COPIES;
    posRef.current -= (delta / 1000) * SPEED;
    if (posRef.current <= -setWidth) posRef.current += setWidth;
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  });

  return (
    <section className="overflow-hidden bg-boson-bg-soft py-24">
      {/* ── Header ── */}
      <div ref={ref} className="mx-auto mb-14 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-bold tracking-[0.25em] text-boson-accent uppercase"
            >
              La complejidad organizacional es el punto de entrada. No el tamaño.
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl font-light leading-tight text-boson-heading md:text-5xl"
            >
              A quién{" "}
              <strong className="font-black">acompañamos</strong>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-px w-full bg-boson-border"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-base leading-relaxed text-boson-body md:text-right"
            >
              Bosón trabaja con organizaciones que enfrentan complejidad estructural
              — independientemente de su tamaño. El punto de entrada es el diseño,
              no el volumen.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex gap-5 pb-2"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {[...Array(COPIES)].map((_, setIndex) =>
            audiences.map((a, i) => (
              <AudienceCard key={`${setIndex}-${i}`} {...a} />
            ))
          )}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-boson-bg-soft to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-boson-bg-soft to-transparent" />
      </motion.div>
    </section>
  );
}
