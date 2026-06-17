"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="State of Mind Health home">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-canvas font-display text-lg leading-none transition-colors group-hover:bg-forest-deep">
        S
      </span>
      <span className="font-display text-[1.35rem] leading-none text-forest-deep">
        State of Mind<span className="text-apricot-deep">.</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-canvas/85 backdrop-blur-md">
      <nav className="container-x flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.95rem] text-ink-soft transition-colors hover:text-forest"
            >
              {l.label}
            </Link>
          ))}
          <CTAButton href="/contact" size="md">
            Schedule Appointment
          </CTAButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-forest/20 text-forest md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-forest/10 bg-canvas md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-ink-soft transition-colors hover:bg-sage-mist hover:text-forest"
                >
                  {l.label}
                </Link>
              ))}
              <CTAButton href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Schedule Appointment
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
