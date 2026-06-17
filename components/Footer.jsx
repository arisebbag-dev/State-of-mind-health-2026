import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest-deep text-canvas">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-canvas font-display text-lg leading-none text-forest-deep">
                S
              </span>
              <span className="font-display text-xl">
                State of Mind Health
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-sage-mist/80">
              Compassionate, personalized psychiatric care in Suffern, NY — serving
              Rockland County and the tri-state area, in person and through secure telehealth.
            </p>
            <p className="mt-4 text-sm text-apricot-soft">
              Let us help you bring out the real you.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-base text-sage-mist">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-sage-mist/80">
              <li><Link className="transition-colors hover:text-canvas" href="/services">Services</Link></li>
              <li><Link className="transition-colors hover:text-canvas" href="/about">About Nechama</Link></li>
              <li><Link className="transition-colors hover:text-canvas" href="/contact">Schedule a Visit</Link></li>
              <li><Link className="transition-colors hover:text-canvas" href="/contact">Intake Form</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base text-sage-mist">Get in Touch</h3>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-sage-mist/80">
              <li>Suffern, NY · Rockland County</li>
              <li>
                <a className="transition-colors hover:text-canvas" href="tel:+10000000000">
                  (000) 000-0000
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-canvas" href="mailto:hello@stateofmindhealth.com">
                  hello@stateofmindhealth.com
                </a>
              </li>
              <li>Telehealth across the tri-state area</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-canvas/10 pt-6">
          <p className="text-xs leading-relaxed text-sage-mist/60">
            © {year} State of Mind Health. All rights reserved. The content on this site
            is for informational purposes only and is not a substitute for professional
            medical advice, diagnosis, or treatment. If you are experiencing a mental
            health emergency, call 911 or dial 988 for the Suicide &amp; Crisis Lifeline.
          </p>
        </div>
      </div>
    </footer>
  );
}
