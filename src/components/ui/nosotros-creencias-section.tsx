"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const creencias = [
  "Creemos que la mayoría de los problemas de crecimiento son problemas de diseño, no de esfuerzo.",
  "Creemos que una estrategia sin sistemas que la soporten es un documento. Y los documentos no escalan.",
  "Creemos que la inteligencia de mercado no es un insumo opcional. Es el mínimo para que una decisión estratégica no sea una apuesta.",
  "Creemos que la permanencia de una organización depende de la solidez de sus sistemas y de su consistencia estratégica.",
  "Creemos que la diferencia entre una empresa que escala y una que se estanca casi siempre se encuentra en lo que no se ve.",
];

export function NosotrosCreenciasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-boson-primary py-24 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-bold tracking-[0.25em] text-boson-accent uppercase"
            >
              Nuestra filosofía
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-light leading-tight text-white lg:text-5xl"
            >
              Lo que{" "}
              <strong className="font-black">creemos</strong>
            </motion.h2>
          </div>

          {/* Decorative accent line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block self-end h-px w-full bg-white/10"
          />
        </div>

        {/* Beliefs list */}
        <div className="flex flex-col gap-0 border-t border-white/10">
          {creencias.map((creencia, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-start gap-6 border-b border-white/8 py-7 transition-colors duration-300 hover:bg-white/[0.025]"
            >
              {/* Number */}
              <span className="shrink-0 pt-0.5 text-[11px] font-black tracking-[0.22em] text-boson-accent/40 transition-colors duration-300 group-hover:text-boson-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Accent vertical bar */}
              <div className="mt-1.5 h-3 w-0.5 shrink-0 bg-boson-accent/30 transition-colors duration-300 group-hover:bg-boson-accent" />

              {/* Text */}
              <p className="text-base leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80 lg:text-lg">
                {creencia}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
