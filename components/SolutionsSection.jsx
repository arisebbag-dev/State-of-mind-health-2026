import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

const services = [
  {
    icon: "💊",
    title: "Medication Management",
    desc: "Thoughtful, evidence-based medication selection tailored to your unique biology and needs.",
  },
  {
    icon: "🧬",
    title: "Genetic Testing",
    desc: "Pharmacogenomic testing reveals how your body metabolizes medications—finding the right fit faster.",
    featured: true,
  },
  {
    icon: "⚖️",
    title: "Hormone Testing",
    desc: "Comprehensive hormone panel to identify imbalances that may impact mood, energy, and wellbeing.",
    featured: true,
  },
  {
    icon: "💬",
    title: "Telepsychiatry",
    desc: "Secure, private video appointments across the tri-state area. Same care, same expertise, any time.",
  },
  {
    icon: "👂",
    title: "Consulting",
    desc: "Expert second opinions and collaborative care planning with your primary care or other specialists.",
  },
  {
    icon: "🎯",
    title: "Initial Consultation",
    desc: "Comprehensive evaluation, detailed history, and personalized treatment planning for your unique situation.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
            Our services
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 text-3xl text-forest-deep sm:text-4xl">
            Comprehensive care, multiple approaches.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-4 text-ink-soft">
            From medication management to genetic testing, we tailor every service to your needs.
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.04}
              className={`rounded-xl2 border transition-all p-6 sm:p-8 ${
                service.featured
                  ? "border-apricot/30 bg-gradient-to-br from-apricot/8 to-apricot/3 shadow-sm hover:shadow-md hover:border-apricot/50"
                  : "border-forest/10 bg-canvas hover:shadow-card hover:border-forest/20"
              }`}
            >
              <h3 className="text-lg font-medium text-forest-deep mb-2">
                {service.title}
              </h3>
              {service.featured && (
                <span className="inline-block mb-3 px-2.5 py-1 text-xs font-medium rounded-full bg-apricot/20 text-apricot-deep">
                  Featured
                </span>
              )}
              <p className="text-[0.95rem] text-ink-soft leading-relaxed">
                {service.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={0.2} className="mt-14 text-center">
          <CTAButton href="/services" variant="secondary">
            Explore all services →
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
