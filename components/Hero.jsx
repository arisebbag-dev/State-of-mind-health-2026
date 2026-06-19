"use client";

import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "./CTAButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-coral-soft/45 blur-3xl ${reduce ? "" : "animate-breathe"}`}
        />
        <div
          className="absolute -right-24 top-32 h-[30rem] w-[30rem] rounded-full bg-olive-soft/55 blur-3xl"
          style={{ animation: reduce ? "none" : "breathe 11s ease-in-out infinite 1.5s" }}
        />
      </div>

      <div className="container-x relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl py-20 text-center sm:py-28 lg:py-32"
        >
          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-white/60 px-4 py-1.5 text-sm text-olive-deep backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-coral" />
            Psychiatric care in Suffern, NY &amp; tri-state telehealth
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[2.75rem] font-semibold leading-[1.05] text-olive-deep sm:text-6xl md:text-7xl"
          >
            Feel like{" "}
            <span className="italic underline-grow text-olive">yourself</span>{" "}
            again.
          </motion.h1>

          <motion.blockquote variants={item} className="mx-auto mt-10 max-w-2xl">
            <p className="font-display text-xl font-light italic leading-relaxed text-olive sm:text-2xl md:text-[1.7rem]">
              &ldquo;I have undertaken to help individuals restore their vitality and resume a life of meaning and purpose.&rdquo;
            </p>
            <footer className="mt-5 text-sm font-medium tracking-wide text-ink-muted">
              &mdash; Nechama Keller-Sabel, PMHNP-BC
            </footer>
          </motion.blockquote>

          <motion.p
            variants={item}
            className="mx-auto mt-9 max-w-xl text-lg font-light leading-relaxed text-ink-soft"
          >
            Thoughtful, root-cause psychiatry that looks beyond the prescription pad &mdash; genetics, hormones, and the whole nervous system. Let us bring out the{" "}
            <span className="font-medium text-olive-deep">real</span> you.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <CTAButton href="/intake" size="lg">
              Schedule Your Consultation
            </CTAButton>
            <CTAButton href="/services" variant="secondary" size="lg">
              Explore our approach
            </CTAButton>
          </motion.div>

          <motion.p variants={item} className="mt-7 text-sm text-ink-muted">
            <span className="font-medium text-olive-deep">Out-of-network practice.</span>{" "}
            We provide detailed superbills for out-of-network reimbursement.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
