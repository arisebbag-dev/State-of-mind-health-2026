import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-xl2 bg-forest px-8 py-16 text-center sm:px-12 sm:py-20">
          {/* subtle warm glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-apricot/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl text-canvas sm:text-4xl md:text-[2.75rem] md:leading-tight">
              Taking the first step is the hardest part. We&apos;ll take the rest with you.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sage-mist/90">
              Reaching out for support is a sign of strength, not weakness.
              Whether you&apos;re ready to schedule or just have questions,
              we&apos;re here — with compassion, expertise, and zero judgment.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/contact" variant="accent" size="lg">
                Schedule an Appointment →
              </CTAButton>
              <CTAButton
                href="/contact"
                size="lg"
                className="border border-canvas/30 bg-transparent text-canvas hover:bg-canvas/10"
              >
                Fill Out Our Intake Form
              </CTAButton>
            </div>
            <p className="mt-8 text-sm text-sage-mist/70">
              Serving Suffern &amp; Rockland County in person · Available across the tri-state area via telehealth
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
