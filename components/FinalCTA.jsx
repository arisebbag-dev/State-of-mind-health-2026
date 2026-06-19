import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-xl3 bg-coral px-8 py-16 text-center sm:px-16 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-olive-deep/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <Reveal as="h2" className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Taking the first step is the hardest part. We'll take the rest with you.
            </Reveal>
            <Reveal as="p" delay={0.05} className="mt-5 text-lg font-light leading-relaxed text-white/90">
              Reaching out is a sign of strength. Whether you're ready to begin or just have questions, we're here — with expertise, warmth, and zero judgment.
            </Reveal>
            <Reveal as="div" delay={0.1} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/intake" variant="ghost" size="lg" className="bg-white text-coral-deep hover:bg-sand-light">
                Schedule Your Consultation
              </CTAButton>
              <CTAButton href="/contact" variant="ghost" size="lg" className="border-white/50 bg-transparent text-white hover:bg-white/10">
                Contact the office
              </CTAButton>
            </Reveal>
            <Reveal as="p" delay={0.15} className="mt-7 text-sm text-white/75">
              In person in Suffern &amp; Rockland County · Telehealth across the tri-state area
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
