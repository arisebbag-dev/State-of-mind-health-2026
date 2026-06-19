import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Our Approach & Services | State of Mind Health",
  description:
    "Root-cause psychiatry in Suffern, NY: genetic and pharmacogenomic testing, hormonal psychiatry, nervous-system-informed care, and more. Out-of-network with superbills.",
};

const pillars = [
  {
    title: "Genetic testing & metabolism",
    body: "How your body processes medication is written partly in your genes. We use pharmacogenomic testing — including markers like MTHFR — to understand metabolism and mood regulation. It's an underused tool we believe belongs at the front of outpatient psychiatry, helping us choose treatments with far less trial-and-error.",
  },
  {
    title: "Hormonal psychiatry",
    body: "The connection between hormones and mental health has been overlooked for decades. We evaluate estrogen, progesterone, and the role of hormone replacement therapy, treating hormonal health as an essential and often-missing piece of psychiatric care — especially, though not only, for women.",
  },
  {
    title: "Religiously sensitive, discreet care",
    body: "For observant patients, we offer respectful and discreet clinical support, including thoughtful hormonal cycle management around meaningful lifecycle events. It's a quietly underserved need, and we approach it with the seriousness and sensitivity it deserves.",
  },
  {
    title: "The nervous system in focus",
    body: "Psychiatric symptoms rarely exist in isolation. We assess the state of your autonomic nervous system, because chronic dysregulation or hyperactivation can drive or worsen a wide range of symptoms. This perspective also informs our approach to NMDA-pathway treatments.",
  },
  {
    title: "Beyond dopamine & serotonin",
    body: "Conventional care has focused narrowly on a handful of neurotransmitters. We take a broader view — incorporating glutamate, neuroinflammatory mechanisms, and other pathways that standard outpatient psychiatry too often leaves out of the conversation.",
  },
];

const services = [
  { t: "Comprehensive initial evaluation", d: "An unhurried first visit to understand your full history, goals, and the biology underneath." },
  { t: "Medication management", d: "Evidence-based, precisely-chosen treatment, refined over time around how you actually respond." },
  { t: "Genetic & pharmacogenomic testing", d: "Insight into how you metabolize medication, so we prescribe with precision." },
  { t: "Hormonal evaluation", d: "Assessment of hormonal contributors to mood, energy, and wellbeing." },
  { t: "Telepsychiatry", d: "Secure, private virtual visits across the tri-state area." },
  { t: "Collaborative consultation", d: "Coordinated care and second opinions alongside your other providers." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our approach"
        title="Psychiatry that looks for the root"
        intro="Five ideas shape how we practice — each a piece of the picture that standard outpatient care tends to miss."
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.04}
                className={`border-t border-olive/15 py-9 ${i === pillars.length - 1 ? "border-b" : ""}`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                  <span className="font-display text-2xl font-medium text-coral sm:w-16">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:flex-1">
                    <h2 className="font-display text-xl font-semibold text-olive-deep">{p.title}</h2>
                    <p className="mt-2.5 text-[0.97rem] font-light leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-light py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal as="h2" className="font-display text-3xl font-semibold text-olive-deep">
              Services we offer
            </Reveal>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                key={s.t}
                delay={i * 0.04}
                className="rounded-xl2 border border-olive/12 bg-white/60 p-6"
              >
                <h3 className="font-display text-lg font-medium text-olive-deep">{s.t}</h3>
                <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-ink-soft">{s.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" delay={0.1} className="mt-12 text-center">
            <p className="mb-6 text-sm text-ink-muted">
              <span className="font-medium text-olive-deep">Out-of-network practice.</span>{" "}
              We provide detailed superbills for out-of-network reimbursement.
            </p>
            <CTAButton href="/intake" size="lg">Schedule Your Consultation</CTAButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
