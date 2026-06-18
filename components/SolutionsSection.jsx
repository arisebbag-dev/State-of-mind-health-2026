import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

const services = [
  {
    title: "Medication Management",
    desc: "Thoughtful, evidence-based medication selection tailored to your unique biology and needs.",
  },
  {
    title: "Genetic Testing",
    desc: "Pharmacogenomic testing reveals how your body metabolizes medications—finding the right fit faster.",
    featured: true,
  },
  {
    title: "Hormone Testing",
    desc: "Comprehensive hormone panel to identify imbalances that may impact mood, energy, and wellbeing.",
    featured: true,
  },
  {
    title: "Telepsychiatry",
    desc: "Secure, private video appointments across the tri-state area. Same care, same expertise, any time.",
  },
  {
    title: "Consulting",
    desc: "Expert second opinions and collaborative care planning with your primary care or other specialists.",
  },
  {
    title: "Initial Consultation",
    desc: "Comprehensive evaluation, detailed history, and personalized treatment planning for your unique situation.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="solutions py-16 sm:py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-sage-deep">
            Our services
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 text-3xl sm:text-4xl text-slate-deep font-serif font-bold">
            Comprehensive care, multiple approaches.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-4 text-base sm:text-lg text-ink-soft font-light">
            From medication management to genetic testing, we tailor every service to your needs.
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.04}
              className={`rounded-xl2 border transition-all duration-300 p-6 sm:p-7 ${
                service.featured
                  ? "border-sage/30 bg-gradient-to-br from-sage-soft/40 to-sage-soft/10 shadow-md hover:shadow-lg hover:border-sage/50"
                  : "border-slate/15 bg-canvas hover:shadow-md hover:border-slate/25"
              }`}
            >
              <h3 className="text-lg font-medium text-slate-deep mb-2 font-serif">
                {service.title}
              </h3>
              {service.featured && (
                <span className="inline-block mb-3 px-2.5 py-1 text-xs font-medium rounded-full bg-sage-soft text-sage-deep">
                  Featured
                </span>
              )}
              <p className="text-[0.95rem] text-ink-soft leading-relaxed font-light">
                {service.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={0.2} className="mt-10 text-center">
          <CTAButton href="/services" variant="secondary">
            Explore all services →
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
