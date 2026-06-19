import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

const services = [
  "Medication management",
  "Genetic & pharmacogenomic testing",
  "Hormonal evaluation",
  "Telepsychiatry",
  "Collaborative consultation",
  "Comprehensive initial evaluation",
];

export default function ServicesStrip() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="rounded-xl3 border border-olive/12 bg-white/50 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-12">
            <div>
              <Reveal as="p" className="text-sm font-semibold uppercase tracking-wider text-coral-deep">
                What we offer
              </Reveal>
              <Reveal as="h2" delay={0.05} className="mt-3 font-display text-2xl font-semibold text-olive-deep sm:text-3xl">
                Care tailored to you, start to finish.
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-4 text-[0.97rem] font-light leading-relaxed text-ink-soft">
                Every patient begins with a thorough evaluation, then a plan built around your biology, your history, and your goals.
              </Reveal>
              <Reveal as="div" delay={0.15} className="mt-7">
                <CTAButton href="/services" variant="secondary">See full details</CTAButton>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span className="text-[0.97rem] text-ink-soft">{s}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
