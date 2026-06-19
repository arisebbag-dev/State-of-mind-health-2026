"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "We are an out-of-network practice and do not bill insurance directly. We provide detailed superbills you can submit to your insurer for possible out-of-network reimbursement. This lets us spend more time on your care and less on insurance constraints.",
  },
  {
    q: "What does the first appointment look like?",
    a: "Your initial evaluation is unhurried — typically 45 to 60 minutes. We review your full history, your goals, and where appropriate discuss testing (genetic, hormonal, or lab work) so your plan is built around your biology, not guesswork.",
  },
  {
    q: "What conditions do you treat?",
    a: "We work with anxiety, depression, ADHD, mood disorders, OCD, irritability, and related concerns — and we pay particular attention to underlying contributors like genetics, hormones, and nervous-system dysregulation. If you're unsure whether we're a fit, reach out and we'll talk it through.",
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes. We see patients in person in Suffern and offer secure telehealth across the tri-state area. The quality and privacy of care are the same either way.",
  },
  {
    q: "What is genetic (pharmacogenomic) testing?",
    a: "It's typically a simple cheek swab that shows how your body metabolizes certain medications. It helps us choose treatments more precisely and reduce trial-and-error, and it can reveal markers like MTHFR that influence mood regulation.",
  },
  {
    q: "Do you see younger patients?",
    a: "Yes — we treat patients ages 7 and up, with flexible scheduling for school and work, and coordinate with schools, primary care, and specialists when it supports your care.",
  },
  {
    q: "What if I'm in crisis?",
    a: "If you're experiencing a mental health emergency, call 911 or dial 988 for the Suicide & Crisis Lifeline. Please don't wait for an appointment to get help.",
  },
];

function Item({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 0.03} className="border-b border-olive/12 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-display text-base font-medium text-olive-deep sm:text-lg">{q}</span>
        <span className={`shrink-0 text-2xl text-coral transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-[0.95rem] font-light leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="p" className="text-sm font-semibold uppercase tracking-wider text-coral-deep">
            Good to know
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 font-display text-3xl font-semibold text-olive-deep sm:text-4xl">
            Questions, answered.
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl3 border border-olive/12 bg-white/50 px-6 py-2 sm:px-10">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} i={i} />
          ))}
        </div>

        <Reveal as="p" delay={0.15} className="mt-8 text-center text-sm text-ink-muted">
          Still wondering about something? Call{" "}
          <a href="tel:+18456537330" className="font-medium text-olive-deep hover:text-coral-deep">(845) 653-7330</a>{" "}
          or email{" "}
          <a href="mailto:office@stateofmindhealth.com" className="font-medium text-olive-deep hover:text-coral-deep">office@stateofmindhealth.com</a>.
        </Reveal>
      </div>
    </section>
  );
}
