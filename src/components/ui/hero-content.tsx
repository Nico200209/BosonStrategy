"use client";

import { motion } from "framer-motion";
import { FaChevronRight, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/boson-estrategia-negocios",
    label: "LinkedIn de Bosón",
  },
];

export function HeroContent() {
  return (
    <>
      {/* Animated text content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 border-b border-boson-accent pb-2 text-xs font-bold tracking-[0.3em] text-boson-accent uppercase"
        >
          República Dominicana
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Convertimos la estrategia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 max-w-3xl text-xl font-light text-white/85 md:text-2xl"
        >
          en ejecución consistente
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-5 max-w-2xl text-sm font-light text-white/55 md:text-base"
        >
          Desarrollamos e implementamos sistemas estratégicos de negocio que permiten a las
          organizaciones operar mejor, crecer con estructura y escalar con consistencia.
        </motion.p>

        <motion.a
          href="/contacto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-boson-accent px-8 py-4 text-xs font-bold tracking-widest text-boson-primary uppercase transition-colors hover:bg-boson-accent-hover"
        >
          Solicita una consulta estratégica
          <FaChevronRight className="h-3 w-3" />
        </motion.a>
      </div>

      {/* Social links */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/60 transition-colors hover:border-boson-accent hover:text-boson-accent"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </>
  );
}
