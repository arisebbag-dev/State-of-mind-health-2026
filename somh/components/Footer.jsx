import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive-deep text-sand">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-lg font-semibold">State of Mind Health</p>
            <p className="mt-3 text-sm leading-relaxed text-sand/70">
              Root-cause psychiatric care in Suffern, NY and across the tri-state area via telehealth.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-sand/90">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-sand/70 transition-colors hover:text-sand">About Nechama</Link></li>
              <li><Link href="/services" className="text-sand/70 transition-colors hover:text-sand">Our Approach</Link></li>
              <li><Link href="/resources" className="text-sand/70 transition-colors hover:text-sand">Patient Resources</Link></li>
              <li><Link href="/blog" className="text-sand/70 transition-colors hover:text-sand">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-sand/90">Get started</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/intake" className="text-sand/70 transition-colors hover:text-sand">New Patient Intake</Link></li>
              <li><Link href="/contact" className="text-sand/70 transition-colors hover:text-sand">Contact</Link></li>
              <li><Link href="/resources#faq" className="text-sand/70 transition-colors hover:text-sand">FAQ</Link></li>
              <li>
                <a href="https://www.google.com/maps/search/State+of+Mind+Health+Suffern+NY" target="_blank" rel="noopener noreferrer" className="text-sand/70 transition-colors hover:text-sand">
                  Leave a review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-sand/90">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="tel:+18456537330" className="font-medium text-sand/80 transition-colors hover:text-sand">(845) 653-7330</a></li>
              <li><a href="mailto:office@stateofmindhealth.com" className="text-sand/70 transition-colors hover:text-sand">office@stateofmindhealth.com</a></li>
              <li className="text-sand/70">222 NY-59, Suite 304<br />Suffern, NY 10901</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sand/15 pt-6">
          <p className="text-center text-xs text-sand/60">
            In crisis? Call{" "}
            <a href="tel:911" className="font-medium text-sand/80 hover:text-sand">911</a>{" "}
            or the{" "}
            <a href="tel:988" className="font-medium text-sand/80 hover:text-sand">Suicide &amp; Crisis Lifeline (988)</a>. You don't have to wait.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-sand/15 pt-6 text-xs text-sand/55 sm:flex-row">
          <p>&copy; {year} State of Mind Health. All rights reserved.</p>
          <p>Out-of-network practice · Superbills provided</p>
        </div>
      </div>
    </footer>
  );
}
