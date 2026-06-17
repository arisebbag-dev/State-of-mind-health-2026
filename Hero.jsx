"use client";

import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "./CTAButton";
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
    <section className="relative overflow-hidden">
      {/* Ambient "clearer state of mind" glow — the signature element */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-apricot-soft/40 blur-3xl ${
            reduce ? "" : "animate-breathe"
          }`}
        />
        <div className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-sage-mist blur-3xl" />
        <div className="absolute -right-24 top-20 h-[26rem] w-[26rem] rounded-full bg-sage-mist/70 blur-3xl" />
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-canvas/70 px-4 py-1.5 text-sm text-forest"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-apricot-deep" />
            Psychiatric care in Suffern, NY &amp; telehealth
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl leading-[1.05] text-forest-deep sm:text-6xl md:text-7xl"
          >
            Feel like{" "}
            <span className="marker-highlight italic text-forest">yourself</span>{" "}
            again.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft"
          >
            Compassionate, personalized psychiatric care serving Rockland County
            and the greater tri-state area. Expert medication management,
            thoughtful testing, and a provider who actually listens — so we can
            help you bring out the real you.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <CTAButton href="/contact" size="lg">
              Schedule Your Appointment →
            </CTAButton>
            <Link
              href="/contact"
              className="text-[0.95rem] text-forest underline-offset-4 transition-colors hover:text-apricot-deep hover:underline"
            >
              New patient? Start your intake form
            </Link>
          </motion.div>

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
