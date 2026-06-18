import Reveal from "./Reveal";

const badges = [
  {
    label: "Board Certified",
    value: "Psychiatric Mental Health Nurse Practitioner",
  },
  {
    label: "Education",
    value: "Hunter Bellevue School of Nursing",
  },
  {
    label: "Experience",
    value: "Inpatient & outpatient psychiatric care",
  },
  {
    label: "Specialization",
    value: "Genetic & hormone testing integration",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal as="p" className="text-sm font-medium uppercase tracking-wider text-apricot-deep">
            Credentials & expertise
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-3 text-3xl text-forest-deep sm:text-4xl">
            You're in experienced hands.
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {badges.map((badge, i) => (
            <Reveal
              key={badge.label}
              delay={i * 0.05}
              className="rounded-xl2 border border-forest/10 bg-canvas p-6 text-center transition-all hover:border-forest/20 hover:shadow-card"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-apricot/20 flex items-center justify-center">
                <span className="text-forest font-bold">✓</span>
              </div>
              <h3 className="text-sm font-medium text-forest-deep mb-2">
                {badge.label}
              </h3>
              <p className="text-[0.85rem] text-ink-soft leading-relaxed">
                {badge.value}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" delay={0.2} className="mt-12 text-center text-sm text-ink-soft max-w-2xl mx-auto">
          Nechama is dedicated to staying current with the latest psychiatric treatment modalities, 
          diagnostic tools, and evidence-based practices to provide you with the best possible care.
        </Reveal>
      </div>
    </section>
  );
}
