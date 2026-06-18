"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "Yes, we work with most major insurance plans. Contact our office at (845) 653-7330 or office@stateofmindhealth.com to verify coverage before your first appointment.",
  },
  {
    q: "How long is a typical first appointment?",
    a: "Initial appointments usually last 45-60 minutes. This gives Nechama time to understand your full history, discuss your goals, and answer any questions you have about our approach and services.",
  },
  {
    q: "How long are ongoing appointments?",
    a: "Follow-up appointments are typically 30 minutes for medication management and monitoring. Consultations and new conditions may require longer sessions.",
  },
  {
    q: "Do you offer telehealth appointments?",
    a: "Yes! We offer secure telehealth services to patients across New York and the tri-state area. You'll have the same quality of care and privacy as an in-person visit.",
  },
  {
    q: "What is pharmacogenomic (genetic) testing?",
    a: "It's a simple cheek swab that reveals how your body metabolizes certain medications. This helps us predict which medications may work best for you, reducing trial-and-error.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Bring a valid ID, insurance card (if applicable), and a list of any current medications. We'll also have you complete an intake form, which you can do online before your visit.",
  },
  {
    q: "Do you treat patients younger than 18?",
    a: "Yes, we treat patients ages 7 and up. We work with school administration and primary care providers to ensure integrated, collaborative care.",
  },
  {
    q: "What if I'm in crisis?",
    a: "If you're experiencing a mental health emergency, please call 911 or dial 988 for the Suicide & Crisis Lifeline. You don't have to wait for an appointment to get help.",
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.04} className="border-b border-forest/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-sage-mist/30 px-4 -mx-4 transition-colors rounded"
      >
        <h3 className="text-base font-medium text-forest-deep pr-6">{q}</h3>
        <span className="text-forest-deep text-xl shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pb-5 px-4 text-[0.95rem] leading-relaxed text-ink-soft animate-in fade-in duration-200">
          {a}
        </div>
      )}
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
            Got questions?
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 text-3xl text-forest-deep sm:text-4xl">
            We've got answers.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-4 text-ink-soft">
            Everything you need to know about our services, appointments, and how we can help.
          </Reveal>
        </div>

        <div className="mx-auto max-w-2xl rounded-xl2 border border-forest/10 bg-canvas p-6 sm:p-8">
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>

        <Reveal as="p" delay={0.3} className="mt-8 text-center text-sm text-ink-muted">
          Don't see your question? Call us at (845) 653-7330 or email office@stateofmindhealth.com.
        </Reveal>
      </div>
    </section>
  );
}
