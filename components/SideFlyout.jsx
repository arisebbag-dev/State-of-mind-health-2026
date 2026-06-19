"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const flyoutLinks = [
  { label: "Blog", href: "/blog", desc: "Insights on root-cause psychiatry" },
  { label: "Patient Resources", href: "/resources", desc: "Guides & what to expect" },
  { label: "FAQ", href: "/resources#faq", desc: "Common questions answered" },
  { label: "New Patient Intake", href: "/intake", desc: "Start with a callback" },
  { label: "Contact", href: "/contact", desc: "Reach the office" },
];

export default function SideFlyout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tab handle on right edge */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed right-0 top-1/2 z-30 flex -translate-y-1/2 items-center gap-2 rounded-l-xl bg-olive py-4 pl-3 pr-2.5 text-sand shadow-soft transition-colors hover:bg-olive-deep"
      >
        <span className="flex flex-col gap-1">
          <span className="block h-0.5 w-5 rounded-full bg-sand" />
          <span className="block h-0.5 w-5 rounded-full bg-sand" />
          <span className="block h-0.5 w-5 rounded-full bg-sand" />
        </span>
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          Menu
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-olive-deep/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-sand-light shadow-soft-lg"
            >
              <div className="flex items-center justify-between border-b border-olive/10 px-6 py-5">
                <span className="font-display text-lg font-semibold text-olive-deep">
                  Explore
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-1.5 text-ink-soft transition-colors hover:bg-olive/10"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                {flyoutLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group block rounded-xl px-4 py-3.5 transition-colors hover:bg-olive/8"
                  >
                    <span className="block font-display text-base font-medium text-olive-deep group-hover:text-coral-deep">
                      {l.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-muted">{l.desc}</span>
                  </Link>
                ))}
              </nav>

              <div className="border-t border-olive/10 px-6 py-5 text-sm">
                <p className="font-medium text-olive-deep">State of Mind Health</p>
                <a href="tel:+18456537330" className="mt-1 block text-ink-soft hover:text-coral-deep">
                  (845) 653-7330
                </a>
                <a href="mailto:office@stateofmindhealth.com" className="block text-ink-soft hover:text-coral-deep">
                  office@stateofmindhealth.com
                </a>
                <p className="mt-2 text-ink-muted">
                  222 NY-59, Suite 304<br />Suffern, NY 10901
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
