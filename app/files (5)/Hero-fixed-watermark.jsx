"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas via-canvas to-apricot/5">
      {/* Large watermark text background - FIXED VERSION */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute text-canvas/50 font-display font-bold text-center"
          style={{
            fontSize: "clamp(80px, 25vw, 500px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
            wordSpacing: "9999px",
            maxWidth: "90%",
          }}
        >
          State of Mind Health
        </div>
      </div>

      {/* Enhanced ambient glow with layered breathing effect */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Primary breathing glow */}
        <div
          className={`absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-apricot-soft via-apricot/30 to-transparent blur-3xl ${
            reduce ? "" : "animate-breathe"
          }`}
          style={{
            animation: reduce ? "none" : "breathe 8s ease-in-out infinite",
          }}
        />
        {/* Secondary supporting glow */}
        <div
          className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-sage-mist blur-3xl"
          style={{
            animation: reduce ? "none" : "breathe 10s ease-in-out infinite 1s",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute -right-24 top-20 h-[26rem] w-[26rem] rounded-full bg-sage-mist/70 blur-3xl"
          style={{
            animation: reduce ? "none" : "breathe 9s ease-in-out infinite 2s",
            opacity: 0.6,
          }}
        />
      </div>

      <div className="container-x relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl py-24 text-center sm:py-32"
        >
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-canvas/70 px-4 py-1.5 text-sm text-forest backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-apricot-deep animate-pulse" />
            Psychiatric care in Suffern, NY &amp; telehealth
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl leading-[1.05] text-forest-deep sm:text-6xl md:text-7xl font-serif"
          >
            Feel like{" "}
            <span className="marker-highlight italic text-forest">yourself</span>{" "}
            again.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft font-light"
          >
            Compassionate, personalized psychiatric care serving Rockland County
            and the greater tri-state area. Expert medication management,
            thoughtful testing, and a provider who actually listens — so we can
            help you bring out the real you.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 text-sm text-ink-muted"
          >
            In-person in Suffern &amp; Rockland County · Telehealth across the tri-state area
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
