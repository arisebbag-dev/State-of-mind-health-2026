"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

/*
  SAMPLE TESTIMONIALS — placeholders for preview only.
  Replace with real, patient-approved testimonials before going live.
*/
const testimonials = [
  {
    quote:
      "For the first time, someone looked at the whole picture instead of just handing me another prescription. The genetic testing changed everything about how we approached my treatment.",
    name: "Sarah M.",
    detail: "Patient, Rockland County",
    initials: "SM",
  },
  {
    quote:
      "Nechama listened in a way I hadn't experienced before. She understood how my hormones were affecting my mood when no one else had even asked about them.",
    name: "Rivka T.",
    detail: "Patient, telehealth",
    initials: "RT",
  },
  {
    quote:
      "Thoughtful, patient, and genuinely knowledgeable. I finally feel like myself again, and I understand why — not just what pill I'm taking.",
    name: "Daniel K.",
    detail: "Patient, Suffern",
    initials: "DK",
  },
  {
    quote:
      "The care was discreet and respectful of my background and beliefs. That mattered more to me than I can say, and it's so rare to find.",
    name: "Esther L.",
    detail: "Patient, tri-state area",
    initials: "EL",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const startX = useRef(null);

  const go = (n) => {
    setDir(n);
    setIndex((prev) => (prev + n + testimonials.length) % testimonials.length);
  };

  const onStart = (x) => (startX.current = x);
  const onEnd = (x) => {
    if (startX.current === null) return;
    const delta = x - startX.current;
    if (delta > 50) go(-1);
    else if (delta < -50) go(1);
    startX.current = null;
  };

  const t = testimonials[index];

  return (
    <section className="bg-olive-deep py-20 text-sand sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="text-sm font-semibold uppercase tracking-wider text-coral-soft">
            In our patients' words
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Care that meets you where you are.
          </Reveal>
        </div>

        <div
          className="mx-auto mt-14 max-w-3xl select-none"
          onMouseDown={(e) => onStart(e.clientX)}
          onMouseUp={(e) => onEnd(e.clientX)}
          onTouchStart={(e) => onStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
        >
          <div className="relative min-h-[16rem] sm:min-h-[14rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="px-2 text-center"
              >
                <blockquote className="font-display text-xl font-light italic leading-relaxed text-sand sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center justify-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/90 text-sm font-medium text-white">
                    {t.initials}
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-sand">{t.name}</span>
                    <span className="block text-xs text-sand/60">{t.detail}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="rounded-full border border-sand/25 p-2.5 text-sand/80 transition-colors hover:border-sand/60 hover:text-sand"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-coral" : "w-2 bg-sand/30 hover:bg-sand/50"}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="rounded-full border border-sand/25 p-2.5 text-sand/80 transition-colors hover:border-sand/60 hover:text-sand"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <p className="mt-8 text-center text-xs text-sand/40">
            Sample testimonials shown for preview — replace with real patient quotes before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
