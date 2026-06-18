"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest-deep text-canvas">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-4 text-canvas/90">
              State of Mind Health
            </h3>
            <p className="text-sm text-canvas/70 leading-relaxed">
              Compassionate psychiatric care in Suffern, NY and across the tri-state area. Let us bring out the real you.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-canvas/90">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-canvas/70 hover:text-canvas transition-colors">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-canvas/70 hover:text-canvas transition-colors">
                  Telepsychiatry
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-canvas/70 hover:text-canvas transition-colors">
                  Genetic Testing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-canvas/70 hover:text-canvas transition-colors">
                  Hormone Testing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-canvas/70 hover:text-canvas transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-canvas/90">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-canvas/70 hover:text-canvas transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-canvas/70 hover:text-canvas transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/State+of+Mind+Health+Suffern+NY" target="_blank" rel="noopener noreferrer" className="text-canvas/70 hover:text-canvas transition-colors">
                  ⭐ Leave us a review
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-canvas/90">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+18456537330" className="text-canvas/70 hover:text-canvas transition-colors font-medium">
                  (845) 653-7330
                </a>
              </li>
              <li>
                <a href="mailto:office@stateofmindhealth.com" className="text-canvas/70 hover:text-canvas transition-colors">
                  office@stateofmindhealth.com
                </a>
              </li>
              <li className="text-canvas/70 text-[0.85rem] leading-relaxed">
                222 New York 59, Suite 304<br />
                Suffern, NY 10901
              </li>
            </ul>
          </div>
        </div>

        {/* Crisis Support */}
        <div className="border-t border-canvas/15 pt-8 mb-8">
          <p className="text-xs text-canvas/60 text-center">
            <span className="font-semibold text-canvas/80">In Crisis?</span> Call{" "}
            <a href="tel:911" className="text-canvas/80 hover:text-canvas transition-colors font-medium">
              911
            </a>{" "}
            or the{" "}
            <a href="tel:988" className="text-canvas/80 hover:text-canvas transition-colors font-medium">
              Suicide &amp; Crisis Lifeline (988)
            </a>
            . You don't have to wait.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-canvas/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-canvas/60">
          <p>&copy; {currentYear} State of Mind Health. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-canvas transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
