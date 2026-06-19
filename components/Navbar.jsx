"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-olive/10 bg-sand/85 backdrop-blur-md">
      <div className="container-x">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-olive font-display text-lg font-semibold text-sand transition-colors group-hover:bg-coral">
              S
            </span>
            <span className="font-display text-lg font-semibold text-olive-deep">
              State of Mind Health
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-olive-deep"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <CTAButton href="/intake" size="sm">
              Schedule Your Consultation
            </CTAButton>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg p-2 text-olive-deep transition-colors hover:bg-olive/10 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">Menu</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-olive/10 bg-sand lg:hidden"
          >
            <div className="container-x space-y-1 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-olive/10 hover:text-olive-deep"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2">
                <CTAButton href="/intake" size="md" className="w-full" >
                  Schedule Your Consultation
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
