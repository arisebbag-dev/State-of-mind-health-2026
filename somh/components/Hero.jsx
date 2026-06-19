"use client";

import Image from "next/image";
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
      {/* breathing ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-coral-soft/50 blur-3xl ${reduce ? "" : "animate-breathe"}`}
        />
        <div
          className="absolute -right-24 top-32 h-[28rem] w-[28rem] rounded-full bg-olive-soft/60 blur-3xl"
          style={{ animation: reduce ? "none" : "breathe 11s ease-in-out infinite 1.5s" }}
        />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-white/60 px-4 py-1.5 text-sm text-olive-deep backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-coral" />
              Psychiatric care in Suffern, NY &amp; tri-state telehealth
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[2.75rem] font-semibold leading-[1.05] text-olive-deep sm:text-6xl"
            >
              Feel like{" "}
              <span className="italic underline-grow text-olive">yourself</span>{" "}
              again.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-soft"
            >
              Thoughtful, root-cause psychiatry that looks beyond the prescription pad — genetics, hormones, and the whole nervous system — with a provider who takes the time to truly understand you. Let us bring out the <span className="font-medium text-olive-deep">real</span> you.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/intake" size="lg">
                Schedule Your Consultation
              </CTAButton>
              <CTAButton href="/services" variant="secondary" size="lg">
                Explore our approach
              </CTAButton>
            </motion.div>

            {/* superbill / out-of-network line */}
            <motion.p variants={item} className="mt-7 text-sm text-ink-muted">
              <span className="font-medium text-olive-deep">Out-of-network practice.</span>{" "}
              We provide detailed superbills for out-of-network reimbursement.
            </motion.p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl3 border border-olive/15 bg-gradient-to-br from-olive-soft to-sand-deep shadow-soft-lg">
              <Image
                src="/nechama.jpg"
                alt="Nechama Keller-Sabel, PMHNP-BC"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 28rem"
                className="object-cover"
              />
            </div>
            {/* floating quote chip */}
            <div className="absolute -bottom-5 -left-3 max-w-[15rem] rounded-2xl border border-olive/10 bg-sand-light/95 p-4 shadow-soft backdrop-blur sm:-left-8">
              <p className="font-display text-sm italic leading-snug text-olive-deep">
                "Restoring vitality and a life of meaning and purpose."
              </p>
              <p className="mt-1.5 text-xs font-medium text-ink-muted">— Nechama Keller-Sabel, PMHNP-BC</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
