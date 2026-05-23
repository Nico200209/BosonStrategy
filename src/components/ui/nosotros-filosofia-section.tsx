"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "Rigor Técnico",
    description:
      "No asesoramos desde afuera. Diseñamos desde adentro, con metodología probada y pensamiento sistémico. Cada modelo que construimos tiene que funcionar y sostenerse — no solo en papel, sino en la operación real.",
  },
  {
    title: "Inteligencia Aplicada",
    description:
      "Cada decisión tiene un sustento. La investigación de mercado, el análisis del entorno y los datos accionables no son un módulo adicional — son la base de todo lo que construimos.",
  },
  {
    title: "Visión Sistémica",
    description:
      "Estrategia, operaciones, finanzas y mercado son partes de un mismo sistema. Los intervenimos de forma integrada. No por partes, no por silos.",
  },
];

/* ── Animated checkmark SVG ─────────────────────────────────────── */
function AnimatedCheck({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <div className="mt-0.5 shrink-0">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <motion.circle
          cx="10" cy="10" r="9"
          stroke="#26C0CF"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay, ease: "easeOut" }}
        />
        <motion.path
          d="M6 10l3 3 5-5"
          stroke="#26C0CF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

export function NosotrosFilosofiaSection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(triggerRef, { once: true, amount: 0.4 });

  return (
    <section className="bg-boson-bg-soft overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* ── Left: text + pillars ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-4xl font-light leading-tight text-boson-heading lg:text-5xl"
            >
              Pilares de{" "}
              <strong className="font-black">la marca</strong>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
              className="mb-10 text-sm leading-relaxed text-boson-body"
            >
              El lenguaje de Bosón no busca inspirar: busca clarificar, estructurar y mover a la
              acción. Cada palabra lleva el peso de la evidencia detrás. Visualmente, los elementos
              de la marca proyectan la misma precisión que los sistemas que diseñamos: nada sobra,
              nada falta.
            </motion.p>

            <div ref={triggerRef}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-8 text-2xl font-light text-boson-heading"
              >
                Nuestros <strong className="font-black">Pilares</strong>
              </motion.p>

              <div className="flex flex-col gap-7">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -28 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex gap-4"
                  >
                    <AnimatedCheck inView={inView} delay={0.3 + i * 0.25} />
                    <div>
                      <p className="mb-1 text-xs font-black uppercase tracking-[0.18em] text-boson-heading">
                        {p.title}
                      </p>
                      <p className="text-xs leading-relaxed text-boson-body">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: image ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/fotografias/figuras.jpeg"
              alt="Filosofía de Bosón Ingeniería Estratégica de Negocios"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-boson-accent/20" />
            <div className="absolute bottom-0 left-0 h-12 w-1 bg-boson-accent" />
            <div className="absolute bottom-0 left-0 h-1 w-12 bg-boson-accent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
