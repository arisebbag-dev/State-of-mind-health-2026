"use client";

import { motion, useReducedMotion } from "framer-motion";

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
    <section className="hero relative overflow-hidden bg-gradient-to-b from-canvas via-canvas to-slate-soft/30">
      {/* Watermark background text - FIXED AND VISIBLE */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div
            style={{
              position: 'absolute',
              fontSize: 'clamp(100px, 22vw, 500px)',
              fontFamily: 'Crimson Text, serif',
              fontWeight: 700,
              color: 'rgba(91, 124, 153, 0.12)',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              lineHeight: 1,
              letterSpacing: '-0.01em',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '95%',
              pointerEvents: 'none',
            }}
          >
            State of Mind Health
          </div>
        </div>
      </div>

      {/* Soft glow effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Primary glow - slate blue */}
        <div
          className={`absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-slate-soft via-slate/20 to-transparent blur-3xl ${
            reduce ? "" : "animate-breathe"
          }`}
          style={{
            animation: reduce ? "none" : "breathe 8s ease-in-out infinite",
            opacity: 0.6,
          }}
        />
        {/* Secondary glow - sage green */}
        <div
          className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-sage-soft blur-3xl"
          style={{
            animation: reduce ? "none" : "breathe 10s ease-in-out infinite 1s",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute -right-24 top-20 h-[26rem] w-[26rem] rounded-full bg-sage-soft/70 blur-3xl"
          style={{
            animation: reduce ? "none" : "breathe 9s ease-in-out infinite 2s",
            opacity: 0.4,
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
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate/20 bg-canvas/80 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-sage-deep animate-pulse" />
            <span className="text-slate-deep">Psychiatric care in Suffern, NY & telehealth</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-5xl leading-[1.1] text-slate-deep sm:text-6xl md:text-7xl font-serif font-bold"
          >
            Feel like{" "}
            <span className="marker-highlight italic text-sage-deep">yourself</span>{" "}
            again.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft font-light"
          >
            Compassionate, personalized psychiatric care serving Rockland County
            and the greater tri-state area. Expert medication management,
            thoughtful testing, and a provider who truly listens — so we can
            help you bring out the real you.
          </motion.p>

          {/* Location info */}
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
